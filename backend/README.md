# 后端说明（智核觉醒）

本目录是《AI 能力测评智能体》的本地后端，使用 Node.js 内置 `http` 模块实现，无第三方 npm 依赖，适合比赛演示、前后端联调和小规模课堂使用。

后端口径以《智核觉醒游戏策划方案 2 版》为准：

- 5 个关卡：智核学院、信息迷城、创客工坊、协同空间站、伦理殿堂
- 1 个觉醒报告阶段
- 6 个能力维度：AI基础认知、提示词工程、AI工具使用、AI结果评估、人机协同、AI伦理合规
- 一题多维计分、随机抽题、自适应难度、逐题保存、48 小时断点续测

> `功能需求清单.docx` 早期写法为“6 个站点”；策划 2 版已改为“5 个关卡 + 觉醒报告”，后端以后发的策划 2 版为准，六大维度不变。

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

| 角色 | 账号 | 密码 |
|---|---|---|
| 学生 | student | 123456 |
| 教师 | teacher | 123456 |
| 管理员 | admin | admin123456 |

## 2. 常用命令

```bash
# 开发模式，文件变更后自动重启
cd backend
npm run dev

# 冒烟测试：登录学生账号完成一轮 5 关测评，并校验教师端看板、题库和监控
node backend/scripts/smoke.mjs

# 重置为种子数据（PowerShell）
$env:RESET_DB="1"; node backend/src/server.js
```

## 3. 配置项

复制 `backend/.env.example` 为 `.env` 后可覆盖：

| 变量 | 默认 | 说明 |
|---|---|---|
| `PORT` | 8787 | 服务端口 |
| `STATIC_ROOT` | `src` | 前端静态资源目录（前端源码） |
| `TOKEN_TTL_HOURS` | 48 | 登录 Token 有效期 |
| `RESET_DB` | 无 | 为 `1` 时启动即重置运行数据 |
| `BAIBAOXIAO_API_URL` | 无 | 百宝箱 API 地址 |
| `BAIBAOXIAO_API_TOKEN` | 无 | 百宝箱 API Token |

未配置 `BAIBAOXIAO_API_URL` 时，`/api/ai/generate` 走本地演示生成器；配置后服务端按 `{ "prompt": "..." }` 调用上游，并兼容 `output/result/text/data.output` 返回字段。Token 只保存在服务端环境变量中。

## 4. 工程结构

仓库根目录的 `src/` 存放前端源码：`index.html`、`student.html`、`teacher.html`、`css/`、`js/`。后端默认把它作为静态资源目录，因此 `node backend/src/server.js` 启动后直接访问根路径即可打开登录页。

```text
backend/
  API.md                   接口文档
  README.md                本说明
  .env.example             环境变量示例
  data/seed.json           种子数据：账号、班级、学生、题库、历史报告
  data/runtime.json        运行数据，首次启动自动生成
  scripts/smoke.mjs        核心链路冒烟测试
  src/constants.js         六维、5 关卡、NPC 反馈等常量
  src/domain.js            评分、报告、看板、题目脱敏等业务规则
  src/router.js            轻量路由器
  src/security.js          密码哈希、Token、内容安全词
  src/server.js            HTTP 服务、鉴权、CORS、静态资源
  src/store.js             JSON 持久化存储
  src/routes/auth.js       注册、登录、登出、当前用户
  src/routes/student.js    学生资料、自评、历史、成长目标
  src/routes/assessment.js 测评会话、逐题保存、报告
  src/routes/ai.js         百宝箱 AI 生成、实操提交与规则评分
  src/routes/teacher.js    班级、测评、分析、题库、导出
```

## 5. 核心数据模型

| 数据 | 字段要点 | 说明 |
|---|---|---|
| 用户 | `id/account/role/name/passwordHash` | 角色：student、teacher、admin |
| 班级 | `id/name/grade/headTeacher` | 教师端管理 |
| 学生 | `id/userId/studentNo/name/classId` | 可关联登录用户，也可仅作为名单学生 |
| 题目 | `levelId/type/difficulty/stem/dimensions` | `dimensions` 是维度权重对象，支持一题多维 |
| 测评 | `classIds/opensAt/closesAt/policy` | `policy` 控制每关题数与初始难度 |
| 会话 | `levelStates/answers/difficulty/practical` | 逐题自动保存，48 小时可恢复 |
| 独立实操 | `versions/finalPrompt/finalOutput/score` | 学生端专项实操任务提交记录 |
| 报告 | `scores/overall/rating/stars/growth` | 自动对比上次报告并生成建议 |

## 6. 前端对接状态

### 学生端（已接后端）

- 登录页调用 `/api/auth/login`，token 存 `ai-auth-token`，角色存 `ai-auth-role`。
- 导航：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
- 闯关模块只保留 5 个关卡卡片与闯关进度；对话式测评和实操任务仅从独立导航进入。
- 已接接口：`/api/students/me/profile`、`/api/students/me/history`、`/api/assessments`、`/api/sessions/*`、`/api/ai/generate`、`/api/ai/practical/submit`、`/api/students/me/self-assessment`。

### 教师端（已接后端）

- 班级管理：`/api/classes` 增删改查。
- 测评管理：`/api/teacher/assessments` 创建并自动发布，监控与结果走 `/api/teacher/assessments/:id/monitor|results`。
- 学生画像：`/api/teacher/students/:id/profile`，含答题明细、对话记录、实操产物、提示词迭代。
- 数据分析：`/api/teacher/analytics/compare` 与班级 dashboard。
- 题库管理：`/api/questions` 增删改审、批量导入；题目模板走 `/api/questions/template`。
- 导出：班级报告与脱敏原始数据走 CSV 接口；学生画像 PDF 使用前端 `pdf-lib` 生成。

### 尚未接后端的部分

- 教师端“测试任务”仍为前端本地演示数据，后端暂无对应接口，不影响核心测评流程。

## 7. 开发约定

- 新增接口统一注册到 `backend/src/routes/*.js`；需要鉴权时传 `{ auth: true, roles: [...] }`。
- 维度 key：`basics`、`prompting`、`tools`、`evaluation`、`collaboration`、`ethics`。
- 关卡 id：`academy`、`labyrinth`、`workshop`、`station`、`court`。
- 题型 code：`single`、`multi`、`judge`、`fill`、`scene`、`sort`、`dialogue`、`practical`。
- 题库字段、提交格式、权限要求以 [API.md](API.md) 为准。
- 所有数据变更统一走 `store.update(...)`，保证 JSON 持久化；不要直接修改 `data/runtime.json`。
- 前端统一通过 `js/teacher.js`、`js/student.js` 中的 `apiRequest()` 请求接口，自动携带 Bearer Token，401 时跳回登录页。

## 8. 部署与生产建议

1. 演示环境可直接运行 Node 服务。
2. 多班级并发使用时，将 `store.js` 替换为 SQLite 或 MySQL/PostgreSQL 数据访问层，路由和业务规则无需大改。
3. 生产环境务必启用 HTTPS、请求限流、审计日志、定期备份和强密码策略。
4. 百宝箱 API 地址和 Token 只放在服务端 `.env`，不要写入前端代码。
5. 题库正式化时继续补充每维度基础题与进阶题；导入模板见 `/api/questions/template`。
