# 智核觉醒 · AI 能力测评智能体

《智核觉醒》是一个面向中学 AI 素养测评的演示项目，由沉浸式演播室登录入口、学生端、教师端和一个 Node.js 本地后端组成。后端按《智核觉醒游戏策划方案 2 版》实现：**5 个剧情关卡 + 觉醒报告 + 6 个能力维度**。

## 快速启动

在项目根目录执行：

```powershell
node backend/src/server.js
```

启动后访问：

- 首页/登录：<http://127.0.0.1:8787>
- API 基础地址：<http://127.0.0.1:8787/api>
- 健康检查：<http://127.0.0.1:8787/api/health>

停止服务：在运行后端的终端按 `Ctrl + C`。

### 演示账号

| 角色 | 账号 | 密码 |
|---|---|---|
| 学生 | student | 123456 |
| 教师 | teacher | 123456 |
| 管理员 | admin | admin123456 |

## 新版登录体验

- 首屏在品牌开场视频完整缓冲后再开始播放，避免开场卡顿或提前露出底图。
- 进入狐狸演播室后，曲面大屏会以自适应网格持续轮播素材，并带有灯光与地面倒影。
- 点击演播台上的“登录”后，轮播与灯光关闭，第二段转场视频衔接到身份选择画面。
- 可选择学员端或教师端；登录、注册、密码显隐与返回操作均可用。
- 登录与注册继续使用本仓库原有 `/api/auth/login` 和 `/api/auth/register` 接口，成功后进入原有学生页或教师页。

## 当前功能与对接状态

- 学生端左侧导航：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
- 闯关模块只保留 5 个关卡；对话式测评、实操任务是独立入口。
- 学生端客观题闯关、对话式测评、觉醒报告、测评历史已全部调用后端接口。
- 教师端班级、测评发布、实时监控、结果总览、学生画像、数据分析、题库管理与 CSV 导出已调用后端接口。
- 百宝箱 API：当前未配置 `BAIBAOXIAO_API_URL`，`/api/ai/generate` 使用本地演示生成器，不会直连外部 AI 服务。
- 数据使用 JSON 文件持久化（`backend/data/runtime.json`），可用 `RESET_DB=1` 重置为种子数据。

## 目录结构

```text
src/                                      前端源码
  index.html / student.html / teacher.html  页面
  assets/                                   登录场景构建产物
  js/                                       前端脚本
  css/                                      前端样式
frontend/                                 演播室登录界面的 React/Vite 源码与媒体素材
backend/                                  后端服务与文档
  README.md                               后端开发与交接说明
  API.md                                  接口文档
  src/                                    服务端代码
  data/seed.json                          种子数据
  data/runtime.json                       运行数据（自动生成）
```

## 常用命令

```powershell
# 启动服务
node backend/src/server.js

# 开发模式（改代码自动重启）
cd backend
npm run dev

# 接口冒烟测试
node backend/scripts/smoke.mjs

# 修改演播室登录界面后重新构建
cd frontend
npm ci
npm run build

# 重置为种子数据
$env:RESET_DB="1"; node backend/src/server.js
```

## 文档导航

- 接口说明：[backend/API.md](backend/API.md)
- 后端开发与交接说明：[backend/README.md](backend/README.md)

## 常见问题

- 登录不了：确认服务已启动；如果浏览器有旧的登录状态，先点退出登录再重新登录，或清除该站点浏览器数据。
- 端口被占用：`$env:PORT="8788"; node backend/src/server.js`，然后访问新端口。
- 数据乱了：用 `RESET_DB=1` 启动一次即可回到种子数据。
