import io
import time
from decimal import Decimal, InvalidOperation
from threading import Lock
from urllib.parse import quote, urlsplit

import requests


MODES = {"文生": "text-to-video", "图生": "image-to-video", "首尾帧": "image-to-video", "多参": "reference-to-video"}
RATIOS = {"16:9", "4:3", "1:1", "3:4", "9:16"}


PRICE_URL = "https://phosor.ai/api/v1/pricing/config"
_PRICE_KEYS = {
    "minimax-h3": ("minimax_h3_pricing", "minimax_h3_ref2va_pricing"),
    "minimax-h3-turbo": ("minimax_h3_fl2va_turbo_pricing", "minimax_h3_ref2va_turbo_pricing"),
}
_price_lock = Lock()
_price_cache = {}
_price_expires = 0


def _price(value):
    amount = Decimal(str(value))
    if not amount.is_finite() or amount < 0:
        raise ValueError("Invalid price")
    return format(amount, "f")


def pricing_config():
    global _price_cache, _price_expires
    with _price_lock:
        now = time.monotonic()
        if now < _price_expires:
            return _price_cache
        try:
            response = requests.get(PRICE_URL, timeout=(3, 4))
            response.raise_for_status()
            config = response.json(parse_float=Decimal)
            prices = {}
            for model, (standard, reference) in _PRICE_KEYS.items():
                base = config[standard]["base_per_second"]
                ref = config[reference]
                free_images = int(ref["reference_image_free_count"])
                if free_images < 0:
                    raise ValueError("Invalid free image count")
                prices[model] = {
                    "base": {tier: _price(base[tier]) for tier in ("480p", "768p")},
                    "reference_base": {tier: _price(ref["base_per_second"][tier]) for tier in ("480p", "768p")},
                    "reference_image": _price(ref["reference_image"]),
                    "reference_image_free_count": free_images,
                    "reference_audio": _price(ref["reference_audio"]),
                }
            _price_cache, _price_expires = prices, now + 900
        except (requests.RequestException, InvalidOperation, AttributeError, KeyError, TypeError, ValueError):
            _price_cache, _price_expires = {}, now + 30
        return _price_cache


def _estimate(context):
    prices = pricing_config().get(context["model"])
    if not prices:
        return None
    reference_mode = context["mode"] == "多参"
    tier = str(context["resolution"]).lower()
    rate = prices["reference_base" if reference_mode else "base"][tier]
    amount = Decimal(rate) * int(context["duration"])
    if reference_mode:
        billable_images = max(0, len(context["pil_images"]) - prices["reference_image_free_count"])
        amount += Decimal(prices["reference_image"]) * billable_images
        amount += Decimal(prices["reference_audio"]) * len(context["audio_inputs"])
    return {"amount": _price(amount), "partial": bool(reference_mode and context["video_inputs"])}


def _request(context, method, path, *, timeout=(10, 60), **kwargs):
    error = context["helpers"]["CometAPIError"]
    response = requests.request(
        method, f"{context['api_url'].rstrip('/')}{path}",
        headers={"X-API-Key": context["api_key"], "Accept": "application/json"},
        timeout=timeout, allow_redirects=False, **kwargs,
    )
    if not 200 <= response.status_code < 300:
        raise error(f"Phosor {path.rsplit('/', 1)[-1]} 请求失败（HTTP {response.status_code}）：{response.text[:350]}")
    return response.json(parse_float=Decimal)


def _media_url(media):
    if isinstance(media, str):
        candidates = [media]
    elif isinstance(media, dict):
        candidates = [media.get(key) for key in ("url", "video_url", "audio_url", "src")]
    else:
        candidates = [getattr(media, key, None) for key in ("url", "video_url", "audio_url", "src")]
    for candidate in candidates:
        if isinstance(candidate, str):
            url = candidate.strip()
            parsed = urlsplit(url)
            if parsed.scheme in {"http", "https"} and parsed.hostname:
                return url
    return ""


def _upload_image(context, image):
    buffer = io.BytesIO()
    context["helpers"]["safe_pil_to_rgb"](image).save(buffer, format="JPEG", quality=95)
    result = _request(context, "POST", "/storage/image/upload", files={"image": ("reference.jpg", buffer.getvalue(), "image/jpeg")})
    location = result.get("s3_key") or _media_url(result.get("s3_url"))
    if not location:
        raise context["helpers"]["CometAPIError"]("Phosor 图片上传未返回素材位置。")
    return location


def _build_payload(context):
    error = context["helpers"]["CometAPIError"]
    mode = context["mode"]
    model = context["model"]
    resolution = str(context["resolution"]).lower()
    duration = str(context["duration"])
    ratio = context["aspect_ratio"]
    prompt = str(context["prompt"] or "").strip()
    if model not in {"minimax-h3", "minimax-h3-turbo"} or mode not in MODES:
        raise error("请选择 Phosor 的 MiniMax H3 型号和生成模式。")
    if resolution not in {"480p", "768p"} or duration not in {str(seconds) for seconds in range(4, 16)} or ratio not in RATIOS:
        raise error("Phosor H3 支持 4–15 秒、480p/768p，画面比例为 16:9、4:3、1:1、3:4、9:16。")
    if not prompt:
        raise error("Phosor H3 需要提示词。")
    images = context["pil_images"]
    videos = context["video_inputs"]
    audios = context["audio_inputs"]
    if mode in {"图生", "首尾帧"} and len(images) != (2 if mode == "首尾帧" else 1):
        raise error(f"Phosor H3 的{mode}模式需要{'两张' if mode == '首尾帧' else '一张'}图片。")
    if mode != "多参" and (videos or audios or (mode == "文生" and images)):
        raise error("当前 Phosor H3 模式不支持这些参考素材。")
    if mode == "多参" and (not (images or videos) or len(images) > (5 if videos or audios else 9) or len(videos) > 3 or len(audios) > 3):
        raise error("Phosor H3 多参需要图片或视频。纯图片最多 9 张，混合素材时最多 5 张图、3 段视频和 3 段音频。")
    video_urls = [_media_url(video) for video in videos]
    audio_urls = [_media_url(audio) for audio in audios]
    if any(not url for url in video_urls + audio_urls):
        raise error("Phosor H3 的视频和音频参考需要平台可读取的 HTTP(S) 素材链接。")
    name = f"minimax/h3/{MODES[mode]}"
    if model == "minimax-h3-turbo":
        name += "/turbo"
    payload = {"model": name, "prompt": prompt, "duration": int(duration), "resolution_tier": resolution, "aspect_ratio": ratio}
    image_urls = [_upload_image(context, image) for image in images]
    if mode in {"图生", "首尾帧"}:
        payload["image_url"] = image_urls[0]
        if mode == "首尾帧":
            payload["end_image_url"] = image_urls[1]
    elif mode == "多参":
        for field, urls in (("reference_image_urls", image_urls), ("reference_video_urls", video_urls), ("reference_audio_urls", audio_urls)):
            if urls:
                payload[field] = urls
    return payload


def submit_video_task(context):
    error = context["helpers"]["CometAPIError"]
    payload = _build_payload(context)
    estimate = _estimate(context)
    try:
        data = _request(context, "POST", "/inference/submit", json=payload)
    except (requests.exceptions.RequestException, requests.exceptions.JSONDecodeError) as exc:
        raise error("Phosor 提交结果未知，请先检查平台任务历史，避免重复生成。") from exc
    task_id = data.get("request_id")
    if not task_id:
        raise error("Phosor 未返回 request_id，请先检查平台任务历史。")
    return {"task_id": task_id, "estimate": estimate}


BILLING_FINAL_STATES = frozenset({"charged", "refunded", "partially_refunded"})


def _billing_amount(value):
    if not isinstance(value, (Decimal, int, float)) or isinstance(value, bool):
        return None
    try:
        return _price(value)
    except (ValueError, InvalidOperation):
        return None


def query_video_billing(context):
    task_id = str(context.get("task_id") or "")
    unavailable = {"status": "unavailable"}
    if not task_id:
        return unavailable
    try:
        response = _request(context, "GET", "/inference/history", params={"request_id": task_id, "limit": 10}, timeout=(2, 3))
    except (requests.RequestException, ValueError, context["helpers"]["CometAPIError"]):
        return unavailable
    jobs = response.get("jobs") if isinstance(response, dict) else None
    if not isinstance(jobs, list):
        return unavailable
    for job in jobs:
        if not isinstance(job, dict) or (job.get("job_id") or job.get("request_id")) != task_id:
            continue
        billing = job.get("billing")
        if not isinstance(billing, dict):
            return unavailable
        state = billing.get("status")
        if state == "prepaid":
            return {"status": state}
        if isinstance(state, str) and state in BILLING_FINAL_STATES:
            return {"status": state, "usd": _billing_amount(billing.get("usd")), "credits": _billing_amount(billing.get("credits"))}
        return unavailable
    return unavailable


def query_video_task(context):
    task_id = quote(str(context["task_id"]), safe="")
    status = _request(context, "GET", f"/inference/status/{task_id}", params={"logs": "false"})
    state = status.get("status")
    if state == "failed":
        return {"status": "failed", "error": status.get("error") or status.get("message") or "Phosor 视频任务失败",
                "billing": query_video_billing(context)}
    if state == "completed":
        result = _request(context, "GET", f"/inference/result/{task_id}")
        url = _media_url(((result.get("data") or {}).get("video") or {}).get("url"))
        if url:
            return {"status": "completed", "video_url": url, "billing": query_video_billing(context)}
    return {"status": "processing"}


def generate_video(context):
    error = context["helpers"]["CometAPIError"]
    submission = submit_video_task(context)
    task_id = submission["task_id"]
    query_context = {**context, "task_id": task_id}
    def fail(message, billing=None):
        exc = error(message)
        exc.video_task = {**submission, "billing": billing}
        return exc

    deadline = time.monotonic() + 1800
    while time.monotonic() < deadline:
        time.sleep(5)
        try:
            result = query_video_task(query_context)
        except (requests.exceptions.ConnectionError, requests.exceptions.Timeout, requests.exceptions.ChunkedEncodingError):
            continue
        except Exception as exc:
            raise fail(f"Phosor 任务 {task_id} 状态查询失败：{exc}") from exc
        if result["status"] == "failed":
            raise fail(f"Phosor 任务 {task_id} 失败：{result['error']}", result.get("billing"))
        if result["status"] == "completed":
            url = result["video_url"]
            try:
                local_path = context["helpers"]["download_video_asset"](url, prefix="CometAPIPhosor")
            except Exception as exc:
                raise fail(f"Phosor 任务 {task_id} 下载失败：{exc}", result.get("billing")) from exc
            return {"path": local_path, "video_url": url, "billing": result.get("billing"), **submission}
    raise fail(f"Phosor 任务 {task_id} 查询超时，可以在平台任务历史继续查询。")
