import { app } from "../../scripts/app.js";

// Generated from CometAPI's APIMart video option functions. The dialog and
// the request builder should offer the same combinations for each model.
const catalog = {
    models: {
        "seedance-2.5": {"family": "seedance", "modes": {"文生": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "1080p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}, "首尾帧": {"ratios": ["adaptive"], "durationsByResolution": {"480p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "1080p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}, "全能参考": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "1080p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}, "视频编辑": {"ratios": ["adaptive"], "durationsByResolution": {"480p": ["-1"], "720p": ["-1"], "1080p": ["-1"]}}, "视频延长": {"ratios": ["adaptive"], "durationsByResolution": {"480p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "1080p": ["-1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}}},
        "doubao-seedance-2.0": {"family": "seedance", "modes": {"文生": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "首尾帧": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "全能参考": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}}},
        "doubao-seedance-2.0-fast": {"family": "seedance", "modes": {"文生": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "首尾帧": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "全能参考": {"ratios": ["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], "durationsByResolution": {"480p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "720p": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}}},
        "grok-imagine-1.0-video-apimart": {"family": "grok", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1", "3:2", "2:3"], "durationsByResolution": {"480p": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}, "多参": {"ratios": ["16:9", "9:16", "1:1", "3:2", "2:3"], "durationsByResolution": {"480p": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "720p": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}}}},
        "sora-2": {"family": "sora", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["4", "8", "12", "16", "20"]}}, "图生": {"ratios": [], "durationsByResolution": {"720p": ["4", "8", "12", "16", "20"]}}}},
        "sora-2-pro": {"family": "sora", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["4", "8", "12", "16", "20"], "1024p": ["4", "8", "12", "16", "20"], "1080p": ["4", "8", "12", "16", "20"]}}, "图生": {"ratios": [], "durationsByResolution": {"720p": ["4", "8", "12", "16", "20"], "1024p": ["4", "8", "12", "16", "20"], "1080p": ["4", "8", "12", "16", "20"]}}}},
        "veo3.1-fast": {"family": "veo", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["8"], "1080p": ["8"], "4k": ["8"]}}, "首尾帧": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["8"], "1080p": ["8"], "4k": ["8"]}}, "多参": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["8"], "1080p": ["8"], "4k": ["8"]}}}},
        "veo3.1-quality": {"family": "veo", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["8"], "1080p": ["8"], "4k": ["8"]}}, "首尾帧": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["8"], "1080p": ["8"], "4k": ["8"]}}}},
        "veo3.1-lite": {"family": "veo", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"": ["8"]}}}},
        "Omni-Flash-Ext": {"family": "veo", "modes": {"文生": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["4", "6", "8", "10"], "1080p": ["4", "6", "8", "10"], "4k": ["4", "6", "8", "10"]}}, "多参": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": ["4", "6", "8", "10"], "1080p": ["4", "6", "8", "10"], "4k": ["4", "6", "8", "10"]}}, "视频参考": {"ratios": ["16:9", "9:16"], "durationsByResolution": {"720p": [""], "1080p": [""], "4k": [""]}}}},
        "MiniMax-Hailuo-2.3": {"family": "hailuo", "modes": {"文生": {"ratios": [], "durationsByResolution": {"768p": ["6", "10"], "1080p": ["6"]}}, "图生": {"ratios": [], "durationsByResolution": {"768p": ["6", "10"], "1080p": ["6"]}}}},
        "happyhorse-1.0": {"family": "happyhorse", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "图生": {"ratios": [], "durationsByResolution": {"720P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "多图参考": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "视频编辑": {"ratios": [], "durationsByResolution": {"720P": [""], "1080P": [""]}}}},
        "kling-v3": {"family": "kling", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "图生": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "首尾帧": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}}},
        "kling-v3-omni": {"family": "kling", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "多参": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "视频参考": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "pro": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "4k": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}}},
        "kling-video-o1": {"family": "kling", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["5", "10"], "pro": ["5", "10"]}}, "多参": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["5", "10"], "pro": ["5", "10"]}}, "视频参考": {"ratios": ["16:9", "9:16", "1:1"], "durationsByResolution": {"std": ["5", "10"], "pro": ["5", "10"]}}}},
        "viduq3-pro": {"family": "vidu", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}, "图生": {"ratios": [], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}, "首尾帧": {"ratios": [], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}}},
        "viduq3-turbo": {"family": "vidu", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}, "图生": {"ratios": [], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}, "首尾帧": {"ratios": [], "durationsByResolution": {"540p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}}},
        "viduq3": {"family": "vidu", "modes": {"参考": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"540p": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "720p": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}}},
        "viduq3-mix": {"family": "vidu", "modes": {"参考": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "1080p": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]}}}},
        "wan2.7": {"family": "wan", "modes": {"文生": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "图生": {"ratios": [], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "首尾帧": {"ratios": [], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "视频参考": {"ratios": [], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}}},
        "wan2.7-r2v": {"family": "wan", "modes": {"多图参考": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}}, "视频参考": {"ratios": [], "durationsByResolution": {"720P": ["2", "3", "4", "5", "6", "7", "8", "9", "10"], "1080P": ["2", "3", "4", "5", "6", "7", "8", "9", "10"]}}}},
        "wan2.7-videoedit": {"family": "wan", "modes": {"视频编辑": {"ratios": ["16:9", "9:16", "1:1", "4:3", "3:4"], "durationsByResolution": {"720P": ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10"], "1080P": ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}}}},
    },
    aliases: {"seedance-2.5": "seedance-2.5", "doubao-seedance-2.0": "seedance-2.0", "doubao-seedance-2.0-fast": "seedance-2.0-fast", "doubao-seedance-2.0-face": "seedance-2.0", "doubao-seedance-2.0-fast-face": "seedance-2.0-fast", "grok-imagine-1.0-video-apimart": "grok-imagine", "sora-2": "sora-2", "sora-2-pro": "sora-2-pro", "veo3.1-fast": "veo-3.1-fast", "veo3.1-quality": "veo-3.1-quality", "veo3.1-lite": "veo-3.1-lite", "Omni-Flash-Ext": "omni-flash", "MiniMax-Hailuo-2.3": "hailuo-2.3", "happyhorse-1.0": "happyhorse-1.0", "kling-v3": "kling-v3", "kling-v3-omni": "kling-v3-omni", "kling-video-o1": "kling-video-o1", "viduq3-pro": "viduq3-pro", "viduq3-turbo": "viduq3-turbo", "viduq3": "viduq3", "viduq3-mix": "viduq3-mix", "wan2.7": "wan2.7", "wan2.7-r2v": "wan2.7-r2v", "wan2.7-videoedit": "wan2.7-videoedit"},
};
const menuTitle = "APIMart 参数设置（模型 / 时长 / 比例 / 分辨率）";
const overlayId = "local-apimart-parameters";
const read = (node, name) => node.widgets?.find(widget => widget.name === name)?.value
    ?? node.properties?.cometapi_widget_values?.[name];

function replaceChoices(select, choices, current, preferred, labels = {}) {
    select.replaceChildren(...choices.map(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = labels[value] ?? value;
        return option;
    }));
    select.value = choices.includes(current) ? current
        : choices.includes(preferred) ? preferred : choices[0];
    select.disabled = choices.length === 1;
}

function showParameters(node) {
    document.getElementById(overlayId)?.remove();
    const overlay = document.createElement("div");
    overlay.id = overlayId;
    overlay.style.cssText = "position:fixed;inset:0;background:#0009;z-index:100000;display:flex;align-items:center;justify-content:center";
    const box = document.createElement("div");
    box.style.cssText = "box-sizing:border-box;background:#252525;color:#eee;padding:24px;border:1px solid #777;border-radius:12px;width:460px;max-width:95vw;font:15px sans-serif";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "APIMart 视频参数");
    const title = document.createElement("h3");
    title.textContent = "APIMart 视频参数";
    title.style.marginTop = "0";
    box.append(title);
    const fields = [["model", "模型"], ["mode", "生成模式"], ["resolution", "分辨率"], ["duration", "时长"], ["aspect_ratio", "画面比例"]];
    const controls = {};
    for (const [name, label] of fields) {
        const row = document.createElement("label");
        row.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:12px;margin:14px 0";
        const text = document.createElement("span");
        text.textContent = label;
        const select = document.createElement("select");
        select.style.cssText = "width:65%;padding:8px;background:#333;color:#fff;border:1px solid #888;border-radius:5px;font:inherit";
        controls[name] = select;
        row.append(text, select);
        box.append(row);
    }
    const help = document.createElement("p");
    help.style.cssText = "font-size:13px;color:#ccc;min-height:2.5em";
    box.append(help);

    function updateDuration(current) {
        const mode = catalog.models[controls.model.value].modes[controls.mode.value];
        const choices = mode.durationsByResolution[controls.resolution.value];
        const durations = choices.filter(value => value === current || Number(value) <= 0 || (Number(value) >= 2 && Number(value) <= 15));
        const labels = Object.fromEntries(durations.map(value => [value, `${value} 秒`]));
        replaceChoices(controls.duration, durations.length ? durations : choices, current, "8", {
            ...labels, "": "由模型决定", "-1": "自动", "0": "跟随原视频",
        });
    }
    function updateMode(values) {
        const mode = catalog.models[controls.model.value].modes[controls.mode.value];
        const resolutions = Object.keys(mode.durationsByResolution);
        const currentResolution = resolutions.find(value => value.toLowerCase() === String(values.resolution).toLowerCase());
        const preferredResolution = resolutions.find(value => value.toLowerCase() === "720p");
        replaceChoices(controls.resolution, resolutions, currentResolution, preferredResolution, { "": "由模型决定" });
        replaceChoices(controls.aspect_ratio, mode.ratios.length ? mode.ratios : [""], values.aspect_ratio, "16:9", {
            "": "由输入素材或模型决定", adaptive: "自动适配",
        });
        updateDuration(String(values.duration ?? ""));
        help.textContent = controls.mode.value === "文生" ? "文生模式请断开参考素材。"
            : controls.mode.value === "首尾帧" ? "请连接首帧图片。部分模型需要同时连接尾帧图片。"
            : "请按所选模式连接相应的参考素材。";
    }
    function updateModel(values) {
        replaceChoices(controls.mode, Object.keys(catalog.models[controls.model.value].modes), values.mode, "文生");
        updateMode(values);
    }
    const selectedValues = () => Object.fromEntries(fields.map(([name]) => [name, controls[name].value]));
    const current = Object.fromEntries(fields.map(([name]) => [name, read(node, name)]));
    const models = Object.keys(catalog.models);
    const currentModel = models.find(id => id === current.model || catalog.aliases[id] === current.model);
    replaceChoices(controls.model, models, currentModel, "veo3.1-fast", catalog.aliases);
    updateModel(current);
    controls.model.addEventListener("change", () => updateModel(selectedValues()));
    controls.mode.addEventListener("change", () => updateMode(selectedValues()));
    controls.resolution.addEventListener("change", () => updateDuration(controls.duration.value));

    const buttons = document.createElement("div");
    buttons.style.cssText = "display:flex;justify-content:flex-end;gap:12px;margin-top:18px";
    const cancel = document.createElement("button");
    cancel.textContent = "取消";
    cancel.onclick = () => overlay.remove();
    const save = document.createElement("button");
    save.textContent = "应用参数";
    save.style.cssText = "background:#1686c9;color:white";
    for (const button of [cancel, save]) {
        button.style.cssText += ";padding:9px 16px;border:1px solid #888;border-radius:6px;font:inherit;cursor:pointer";
    }
    save.onclick = () => {
        const values = selectedValues();
        const entries = [
            ["model_family", catalog.models[values.model].family],
            ["model", values.model], ["mode", values.mode],
            ["resolution", values.resolution], ["duration", values.duration], ["aspect_ratio", values.aspect_ratio],
        ].filter(([, value]) => value !== "");
        for (const [name, value] of entries) {
            const widget = node.widgets?.find(item => item.name === name);
            if (widget && widget.value !== value) {
                widget.value = value;
                widget.callback?.call(widget, value, app.canvas, node);
            }
        }
        node.properties ??= {};
        Object.assign(node.properties.cometapi_widget_values ??= {}, Object.fromEntries(entries));
        if (node.widgets_values_named) Object.assign(node.widgets_values_named, Object.fromEntries(entries));
        app.graph?.change?.();
        node.setDirtyCanvas?.(true, true);
        app.graph?.setDirtyCanvas?.(true, true);
        overlay.remove();
    };
    buttons.append(cancel, save);
    box.append(buttons);
    overlay.append(box);
    document.body.append(overlay);
    overlay.addEventListener("click", event => { if (event.target === overlay) overlay.remove(); });
    overlay.addEventListener("keydown", event => {
        event.stopPropagation();
        if (event.key === "Escape") overlay.remove();
    });
    controls.model.focus();
}

app.registerExtension({
    name: "Local.APIMart.VeoParameterDialog",
    async beforeRegisterNodeDef(nodeType, nodeData) {
        if (nodeData.name !== "CometAPIUnifiedVideo") return;
        const previous = nodeType.prototype.getExtraMenuOptions;
        nodeType.prototype.getExtraMenuOptions = function (canvas, options) {
            const result = previous?.apply(this, arguments);
            if (read(this, "channel") === "apimart") {
                options.unshift({ content: menuTitle, callback: () => showParameters(this) });
            }
            return result;
        };
    },
});
