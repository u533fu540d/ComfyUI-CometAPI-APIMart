# ComfyUI-CometAPI · APIMart 扩展版

ComfyUI-CometAPI 是一套在 ComfyUI 工作流中调用图像、视频、文本和音频 API 的自定义节点。这个扩展版基于 **ComfyUI-CometAPI 1.0.6**，补充了 APIMart 视频参数界面，并附带可以直接导入的文生视频和图生视频工作流。视频由云端生成，无需下载本地视频模型。

## 主要功能

- **APIMart 云端生成**。在 ComfyUI 内使用 APIMart 的图像、视频和文本模型，在设置中心统一配置 API Key。
- **视频参数设置**。在 `Comet 视频` 节点将渠道设为 `apimart`，右键标题栏可打开参数菜单。生成模式、时长、分辨率和画面比例会根据所选模型更新。
- **Phosor 视频节点**。可选用 MiniMax H3 和 H3 Turbo。部分参数组合支持费用预估，实际扣费以服务商账单为准。
- **工作流示例**。仓库包含可直接导入的 [文生视频](示例工作流/01_APIMart_文生视频.json) 和 [图生视频](示例工作流/02_APIMart_图生视频.json) 示例。

## 安装

需要可正常启动的本地 ComfyUI 实例。插件依赖 `requests` 和 `aiohttp`，已在 Windows ComfyUI Desktop 实例中验证节点加载。

### 通过 ComfyUI-Manager

在支持 **Install via Git URL** 的旧版 Manager 中粘贴下方仓库地址，安装后重启 ComfyUI。公开仓库可以直接拉取。

```text
https://github.com/u533fu540d/ComfyUI-CometAPI-APIMart.git
```

如果当前使用新版界面，可在 Comfy Desktop 的实例管理面板中通过 **启动参数** 启用 `--enable-manager-legacy-ui`。 [切换 Manager 界面](https://docs.comfy.org/manager/install#switch-between-new-and-legacy-ui)

Manager 4.2.2 默认关闭按 Git URL 安装。使用本地监听（如 `127.0.0.1`）的实例时，在 Manager `config.ini` 的 `[default]` 节下设置 `allow_git_url_install = true`，然后重启实例。配置路径可在启动日志中找到，通常位于 `ComfyUI\user\__manager\config.ini`。 [Manager 安装策略](https://github.com/Comfy-Org/ComfyUI-Manager#security-policy)

### 手动安装

从 GitHub 的 **Code → Download ZIP** 下载，解压后将包含 `__init__.py` 的插件目录复制到目标实例的 `custom_nodes`。已有原版 ComfyUI-CometAPI 时，先将原插件目录移出 `custom_nodes`，避免重复加载同名节点。依赖安装命令见 [Windows 安装说明](安装说明.md)。

## 快速开始

1. 在画布搜索 **CometAPI 设置中心**，进入 **渠道管理 → Apimart**，填写 **渠道通用 API Key** 并保存。 [APIMart 密钥管理](https://apimart.ai/keys)
2. 添加 **Comet 视频** 节点，将渠道设为 `apimart`。右键节点标题栏，选择 **APIMart 参数设置（模型 / 时长 / 比例 / 分辨率）**。
3. 输入提示词。图生视频还需选择参考图。运行完成后，视频保存到该实例输出目录的 `cometapi_assets` 子文件夹。

## 来源与授权

原插件由 B 站「那颗星星188」开发。此项目沿用原插件的非商业许可。使用、修改和分享须遵守许可证，商业用途需另行向原作者取得授权。 [原插件仓库](https://github.com/nkxx188/ComfyUI-CometAPI) · [许可证](LICENSE)
