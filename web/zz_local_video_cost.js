import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

const videoClasses = new Set(["CometAPIUnifiedVideo", "CometAPIAsyncVideo"]);
const getValue = (node, name) => node.widgets?.find(widget => widget.name === name)?.value
    ?? node.properties?.cometapi_widget_values?.[name];
let prices;
let nextFetch = 0;
let fetching = false;

async function loadPrices() {
    if (fetching || Date.now() < nextFetch) return;
    fetching = true;
    try {
        const response = await api.fetchApi("/cometapi/virtual_wire_proto/phosor/prices");
        prices = response.ok ? await response.json() : {};
    } catch {
        prices = {};
    } finally {
        fetching = false;
        nextFetch = Date.now() + (Object.keys(prices).length ? 15 * 60_000 : 30_000);
        app.graph?.setDirtyCanvas?.(true, true);
    }
}

function dollars(rate, seconds) {
    if (!/^\d+(?:\.\d+)?$/.test(rate)) return null;
    const [whole, fraction = ""] = rate.split(".");
    const total = (BigInt(whole + fraction) * BigInt(seconds)).toString().padStart(fraction.length + 1, "0");
    if (!fraction.length) return total;
    const digits = total.slice(-fraction.length).replace(/0+$/, "");
    return total.slice(0, -fraction.length) + (digits ? `.${digits}` : "");
}

function estimate(node, channel, model) {
    if (channel !== "phosor") return "费用预估暂不可用";
    void loadPrices();
    if (!prices) return "正在读取 Phosor 价目表…";
    const modelId = model.includes("turbo") ? "minimax-h3-turbo" : "minimax-h3";
    const reference = getValue(node, "mode") === "多参";
    const rate = prices[modelId]?.[reference ? "reference_base" : "base"]?.[String(getValue(node, "resolution")).toLowerCase()];
    const seconds = Number(getValue(node, "duration"));
    if (!rate || !Number.isInteger(seconds) || seconds < 4 || seconds > 15) return "费用预估暂不可用";
    const amount = dollars(rate, seconds);
    return amount === null ? "费用预估暂不可用" : `本次预估 $${amount} USD${reference ? "（仅输出视频）" : ""}`;
}

function addCostWidget(node) {
    node.addCustomWidget({
        name: "comet_local_video_cost",
        type: "comet_local_video_cost",
        options: { serialize: false },
        computeSize: () => [0, 48],
        draw(ctx, self, width, y) {
            const channel = String(getValue(self, "channel") ?? "").toLowerCase();
            const model = String(getValue(self, "model") ?? "").toLowerCase();
            const lines = [];
            if (["phosor", "grsai", "apimart"].includes(channel) && model.includes("h3")) {
                lines.push(estimate(self, channel, model));
            }
            if (self.cometLastVideoCost) {
                const [estimate, settlement] = self.cometLastVideoCost.split(" · ", 2);
                lines.push(`上次 · ${estimate}`);
                if (settlement) lines.push(settlement);
            }
            if (!lines.length) return;
            ctx.save();
            ctx.fillStyle = globalThis.LiteGraph?.WIDGET_TEXT_COLOR ?? "#ddd";
            ctx.font = "12px sans-serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            lines.forEach((line, index) => ctx.fillText(line, 12, y + 8 + index * 15, Math.max(0, width - 24)));
            ctx.restore();
        },
    });
    const requiredHeight = node.computeSize?.()[1];
    if (Number.isFinite(requiredHeight) && requiredHeight > node.size[1]) {
        node.setSize([node.size[0], requiredHeight]);
    }
}

app.registerExtension({
    name: "Local.Comet.VideoCost",
    beforeRegisterNodeDef(nodeType, nodeData) {
        if (!videoClasses.has(nodeData.name)) return;
        const onExecuted = nodeType.prototype.onExecuted;
        nodeType.prototype.onExecuted = function (output) {
            const result = onExecuted?.apply(this, arguments);
            this.cometLastVideoCost = output?.comet_video_cost?.[0] ?? "";
            this.setDirtyCanvas?.(true, true);
            return result;
        };
    },
    nodeCreated(node) {
        if (videoClasses.has(node.comfyClass)) addCostWidget(node);
    },
});
