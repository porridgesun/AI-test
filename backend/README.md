# 后端说明（智核觉醒）

本目录是《智核觉醒》的本地后端，使用 Node.js 内置 `http` 模块实现，无第三方 npm 依赖，适合比赛演示、前后端联调和小规模课堂使用。

后端口径以最新的五关策划为准：

- 5 个关卡：智核学院、信息迷城、创客工坊、协同空间站、伦理殿堂
- 1 个觉醒报告阶段
- 6 个能力维度：AI基础认知、提示词工程、AI工具使用、AI结果评估、人机协同、AI伦理合规
- 一题多维计分、随机抽题、自适应难度、逐题保存、48 小时断点续测

> `功能需求清单.docx` 早期写法为“6 个站点”；新策划统一为“5 个关卡 + 觉醒报告”，后端按五关实现，六大维度不变。

## 1. 快速启动

从仓库根目录启动：

```bash
node backend/src/server.js
```

默认地址：

- 页面：<http://127.0.0.1:8787/>
- API：<http://127.0.0.1:8787/api>
- 健康检查：<http://127.0.0.1:8787/api/health>

演示账号：

| 入口 | 账号 | 密码 |
|---|---|---|---|
| 学员端 | 123456 | 123456 |
| 管理端 | 123456 | 123456 |

学员端和管理端账号空间相互独立；同一账号名可在两个入口分别存在，密码分别保存。进入哪个界面取决于登录页选择的入口，不取决于账号名本身。

## 2. 常用命令

```bash
# 开发模式，文件变更后自动重启
cd backend
npm run dev

# 冒烟测试：登录学员账号完成一轮 5 关测评，并校验管理端看板、题库和监控
node backend/scripts/smoke.mjs

# 重置为种子数据（PowerShell）
$env:RESET_DB="1"; node backend/src/server.js
```

## 3. 配置项

复制 `backend/.env.example` 为 `.env` 后可覆盖：

| 变量 | 默认 | 说明 |
|---|---|---|
| `PORT` | 8787 | 服务端口 |
| `STATIC_ROOT` | `frontend` | 前端静态资源目录（前端源码，仓库根目录的 frontend/） |
| `TOKEN_TTL_HOURS` | 48 | 登录 Token 有效期 |
| `RESET_DB` | 无 | 为 `1` 时启动即重置运行数据 |
| `BAIBAOXIAO_API_URL` | 无 | 百宝箱 API 地址 |
| `BAIBAOXIAO_API_TOKEN` | 无 | 百宝箱 API Token |

未配置 `BAIBAOXIAO_API_URL` 时，`/api/ai/generate` 走本地演示生成器；配置后服务端按 `{ "prompt": "..." }` 调用上游，并兼容 `output/result/text/data.output` 返回字段。Token 只保存在服务端环境变量中。

## 4. 工程结构

仓库根目录的 `frontend/` 是前端静态根：`index.html`（登录入口）、`student.html`（登录后跳转到 `student/main.html`）、`teacher.html`、`assets/`、`login/`（React 源码）、`student/`、`teacher/`、`shared/`。后端默认把它作为静态资源目录（`STATIC_ROOT` 默认 `frontend`），因此 `node backend/src/server.js` 启动后直接访问根路径即可打开登录页。

```text
backend/
  API.md                   接口文档
  README.md                本说明
  .env.example             环境变量示例
  data/seed.json           种子数据：账号、班级、学员、题库、历史报告
  data/runtime.json        运行数据，首次启动自动生成
  scripts/smoke.mjs        核心链路冒烟测试
  src/constants.js         六维、5 关卡、NPC 反馈等常量
  src/domain.js            评分、报告、看板、题目脱敏等业务规则
  src/router.js            轻量路由器
  src/security.js          密码哈希、Token、内容安全词
  src/server.js            HTTP 服务、鉴权、CORS、静态资源
  src/store.js             JSON 持久化存储和账号凭证迁移
  src/routes/auth.js       注册、登录、登出、当前用户
  src/routes/student.js    学员资料、加入班级、觉醒报告、自评、历史
  src/routes/assessment.js 测评会话、逐题保存、报告
  src/routes/ai.js         百宝箱 AI 生成、实操提交与规则评分
  src/routes/teacher.js    班级、学员、任务、测评、分析、题库、导出
```

## 5. 核心数据模型

| 数据 | 字段要点 | 说明 |
|---|---|---|
| 用户 | `id/account/role/name/passwordSalt/passwordHash` | 角色对应学员端/管理端；同一入口账号唯一 |
| 班级 | `id/name/grade/headTeacher` | 管理端维护 |
| 学员 | `id/userId/studentNo/name/classId` | 可关联登录用户，也可仅作为名单学员 |
| 题目 | `levelId/type/difficulty/stem/dimensions` | `dimensions` 是维度权重对象，支持一题多维 |
| 测评 | `classIds/opensAt/closesAt/policy` | `policy` 控制每关题数与初始难度 |
| 会话 | `levelStates/answers/difficulty/practical` | 逐题自动保存，48 小时可恢复 |
| 独立实操 | `versions/finalPrompt/finalOutput/score` | 学员端专项实操任务提交记录 |
| 报告 | `scores/overall/rating/stars/growth` | 自动对比上次报告并生成建议 |

## 6. 前端对接状态

### 学员端（已接后端）

- 登录页按所选入口调用 `/api/auth/login`，token 存 `ai-auth-token`，角色存 `ai-auth-role`。
- 导航：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
- 闯关模块只保留 5 个关卡卡片与闯关进度；对话式测评和实操任务仅从独立导航进入。
- 已接接口：`/api/students/me/profile`、`/api/students/me/history`、`/api/students/me/wrong-questions`、`/api/assessments`、`/api/sessions/*`、`/api/ai/generate`、`/api/ai/practical/submit`、`/api/students/me/self-assessment`、`/api/auth/account`、`/api/auth/me`。
- 账号与密码管理弹窗（`self.html`）打开时从 `GET /api/auth/me` 预填当前账号，提交走 `PUT /api/auth/account`。
- 分享论坛发帖弹窗现含「标签 / 标题 / 概括 / 具体内容」四个字段，其中「具体内容」对应后端新增的 `content` 字段（最长 2000 字）并落库；弹窗自适应宽度、不再出现横向滚动条。
- 能力训练（`1.html`–`4.html`，样式在 `student/qframe.css`）答题选项与错题集（`self.html #view-wrong`）选项均为白底黑字；答题框上方「已训练 XX 题」为白字黑底。
- 能力闯关 `level.html` 进入前校验学员 token（读取 `ai-auth-token`）：未登录直接弹出登录引导（含「去登录」按钮），不再允许匿名进入后报告同步失败。

### 管理端（已接后端）

- 班级管理：`/api/classes` 增删改查。
- 学员管理：`/api/classes/:id/students` 按账号添加、导入、换班和删除。
- 测评管理：`/api/teacher/assessments` 创建并自动发布，监控与结果走 `/api/teacher/assessments/:id/monitor|results`。
- 学员画像：`/api/teacher/students/:id/profile`，含答题明细、对话记录、实操产物、提示词迭代。
- 数据分析：`/api/teacher/analytics/compare` 与班级 dashboard。
- 题库管理：`/api/questions` 增删改审、批量导入；题目模板走 `/api/questions/template`。题库题目列表已加宽（`.t-content` 上限 1480px，表格 `table-layout: fixed` + 百分比列宽），不再出现横向滚动条。
- 导出：班级报告与脱敏原始数据走 CSV 接口；学员画像 PDF 使用前端 `pdf-lib` 生成。
- 任务管理：`/api/teacher/tasks` 创建、更新、停用和删除任务。
- 左下角用户卡片齿轮点击弹出设置菜单（「管理账号密码」「退出登录」），已删除原独立「退出登录」按钮；「管理账号密码」弹窗打开时从 `GET /api/auth/me` 预填当前账号，提交同样走 `PUT /api/auth/account`。

## 7. 开发约定

- 新增接口统一注册到 `backend/src/routes/*.js`；需要鉴权时传 `{ auth: true, roles: [...] }`。
- 维度 key：`basics`、`prompting`、`tools`、`evaluation`、`collaboration`、`ethics`。
- 关卡 id：`academy`、`labyrinth`、`workshop`、`station`、`court`。
- 题型 code：`single`、`multi`、`judge`、`fill`、`scene`、`sort`、`dialogue`、`practical`。
- 题库字段、提交格式、权限要求以 [API.md](API.md) 为准。
- 所有数据变更统一走 `store.update(...)`，保证 JSON 持久化；不要直接修改 `data/runtime.json`。
- `runtime.json` 里只应保存密码哈希；如果旧运行数据缺少哈希，`Store` 会按种子数据或演示约定 `123456` 迁移补齐。
- 前端统一通过 `frontend/teacher/teacher.js` 中的 `apiRequest()` 请求接口，自动携带 Bearer Token，401 时跳回登录页；学员端闯关调用 `frontend/student/` 下的 `/api/quiz/sessions` 接口（见 `src/routes/quiz-session.js`）。

## 8. 部署与生产建议

1. 演示环境可直接运行 Node 服务。
2. 多班级并发使用时，将 `store.js` 替换为 SQLite 或 MySQL/PostgreSQL 数据访问层，路由和业务规则无需大改。
3. 生产环境务必启用 HTTPS、请求限流、审计日志、定期备份和强密码策略。
4. 百宝箱 API 地址和 Token 只放在服务端 `.env`，不要写入前端代码。
5. 题库正式化时继续补充每维度基础题与进阶题；导入模板见 `/api/questions/template`。

## 9. 账号与密码管理

后端统一通过 `/api/auth/*` 处理账号与密码。核心改密入口为 `PUT /api/auth/account`，学员端「个人中心 → 管理账号密码」弹窗已对接此接口；教师端设置菜单亦提供「管理账号密码」入口，走同一接口契约。

### 9.1 密码存储规则

- 密码使用 SHA-256 加盐哈希存储（`src/security.js` 的 `hashPassword`）：`hash = sha256(salt + ":" + password)`，盐为每用户随机 12 字节 hex。
- 数据库只保存 `passwordSalt` 与 `passwordHash`，**绝不保存明文密码**；旧运行数据中遗留的 `password`/`salt`/`hash` 字段会在 `store.js` 初始化时迁移补齐。
- 校验用 `verifyPassword(password, salt, expectedHash)`，注册、登录、改密共用同一套哈希逻辑。

### 9.2 接口清单

| 方法 | 路径 | 鉴权 | 说明 |
|---|---|---|---|
| `POST` | `/api/auth/register` | 否 | 注册学员/管理员账号，自动建档案并发 Token |
| `POST` | `/api/auth/login` | 否 | 按入口（`scope: "student"\|"admin"`）登录，返回 `user` 与 `token` |
| `POST` | `/api/auth/logout` | 是 | 吊销当前 Token |
| `GET` | `/api/auth/me` | 是 | 当前用户与对应档案（学员/教师） |
| `PUT` | `/api/auth/account` | 是 | 修改账号或密码（见 9.3） |

### 9.3 修改账号 / 密码（`PUT /api/auth/account`）

请求体：

```json
{
  "currentPassword": "原密码（必填，用于校验）",
  "account": "新账号（可选，≥3 字符）",
  "newPassword": "新密码（可选，6–64 字符）"
}
```

校验与行为：

- 至少提供 `account` 或 `newPassword` 之一，否则返回 400。
- **必须校验当前密码**：`currentPassword` 不正确返回 401。
- 新账号：≥3 字符，且与同入口（学员端/管理端）其他账号不重复，否则返回 409。
- 新密码：6–64 字符。
- 改动 `account` 时，会同步更新对应档案的 `students.studentNo` 或 `teachers.teacherNo`。
- 改动密码时，使用新随机盐重算哈希并写入 `passwordSalt`/`passwordHash`（旧字段 `salt`/`hash` 会被清除）。

成功返回：

```json
{
  "user": { "id": "...", "account": "...", "role": "student" },
  "accountChanged": true,
  "passwordChanged": false
}
```

> 账号名在各自入口内唯一（学员端与管理端账号空间相互独立）；改账号后，同一入口内原账号名将失效，需用新账号登录。
