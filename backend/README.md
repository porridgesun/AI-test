# 智核觉醒后端交接说明

## 1. 交付范围

本目录提供《AI 能力测评智能体》的基础后端接口，采用 Node.js 内置 `http` 模块实现，无第三方 npm 依赖。当前定位是比赛演示、前后端联调和小规模课堂使用。

后端按《智核觉醒游戏策划方案 2 版》实现为：

- 5 个游戏关卡：智核学院、信息迷城、创客工坊、协同空间站、伦理殿堂
- 1 个觉醒报告阶段
- 6 个能力维度：AI基础认知、提示词工程、AI工具使用、AI结果评估、人机协同、AI伦理合规
- 一题多维计分、随机抽题、自适应难度、逐题保存、48小时断点续测

> 口径说明：`功能需求清单.docx` 中早期写法为“6 个站点”；`智核觉醒游戏策划方案2版.docx` 已改为“5 个关卡 + 觉醒报告”。后端以后发的策划 2 版为准，六大维度不变。

## 2. 快速启动

推荐从仓库根目录启动：

```bash
node backend/src/server.js
```

也可以进入后端目录启动：

```bash
cd backend
npm start
```

默认地址：

- API 基础地址：<http://127.0.0.1:8787/api>
- 健康检查：<http://127.0.0.1:8787/api/health>
- 静态页面：<http://127.0.0.1:8787/>

演示账号：

| 角色 | 账号 | 密码 |
|---|---|---|
| 学生 | `student` | `123456` |
| 教师 | `teacher` | `123456` |
| 管理员 | `admin` | `admin123456` |

配置文件见 [.env.example](.env.example)。复制为 `.env` 后可修改端口、静态资源目录、登录有效期和百宝箱 API。

## 3. 常用命令

```bash
# 启动开发模式，文件变更后自动重启
cd backend
npm run dev

# 从仓库根目录运行接口冒烟测试
node backend/scripts/smoke.mjs

# 重置为种子数据（PowerShell）
$env:RESET_DB="1"; node backend/src/server.js
```

冒烟测试会登录学生账号，完成一次 5 关测评（包含两次实操迭代），生成报告，并验证教师端看板、题库和监控接口。

## 4. 工程结构

```text
backend/
  data/seed.json              种子数据：账号、班级、学生、题库、历史报告
  data/runtime.json           运行数据，首次启动自动生成，不应提交
  scripts/smoke.mjs           核心链路冒烟测试
  src/constants.js            六维、5关卡、NPC反馈等常量
  src/domain.js               评分、报告、看板、题目脱敏等业务规则
  src/router.js               轻量路由器
  src/security.js             密码哈希、Token、内容安全词
  src/server.js               HTTP服务、鉴权、CORS、静态资源
  src/store.js                JSON持久化存储
  src/routes/auth.js          注册、登录、登出、当前用户
  src/routes/student.js       学生资料、自评、历史、成长目标
  src/routes/assessment.js    测评会话、逐题保存、报告
  src/routes/ai.js            百宝箱AI生成、实操提交与规则评分
  src/routes/teacher.js       班级、测评、分析、题库、导出
```

## 5. 核心数据模型

| 数据 | 字段要点 | 说明 |
|---|---|---|
| 用户 | `id/account/role/name/passwordHash` | 角色：student、teacher、admin |
| 班级 | `id/name/grade/headTeacher` | 教师端管理 |
| 学生 | `id/userId/studentNo/name/classId` | 可关联登录用户，也可仅作为名单学生 |
| 题目 | `levelId/type/difficulty/stem/dimensions` | `dimensions` 是维度权重对象，支持一题多维 |
| 测评 | `classIds/opensAt/closesAt/policy` | `policy` 控制每关题数与初始难度 |
| 会话 | `levelStates/answers/difficulty/practical` | 逐题自动保存，48小时可恢复 |
| 独立实操 | `versions/finalPrompt/finalOutput/score` | 学生端专项实操任务提交记录 |
| 报告 | `scores/overall/rating/stars/growth` | 自动对比上次报告并生成建议 |

## 6. 需求覆盖情况

### 已实现的后端能力

- S-01 注册登录、角色区分
- S-02 个人资料
- S-03 测评历史与报告详情
- S-05 能力自评与初始难度
- S-06 5关卡线性推进与进度状态
- S-07 单选、多选、判断、填空、情景、排序题型
- S-08 对话式测评脚本、关键词计分、过程记录
- S-09 实操任务、提示词迭代、产物提交
- S-10 关卡开场与NPC通用反馈
- S-11 随机抽题与自适应难度
- S-12 基础防作弊标记：过短用时、页面切换、对话轮数、实操迭代数
- S-13/S-14 即时评分解析与星星计算
- S-15/S-19 六维报告与个性化建议
- S-18/S-20 每题自动保存与48小时续测
- S-20/S-21 复测目标、成长对比、突破维度
- T-01/T-02 教师登录与班级、学生名单管理
- T-03/T-04/T-05 发起测评、进度监控、结果总览
- T-06/T-07/T-08/T-09/T-10 班级看板、短板、学生画像、成长、对比
- T-11/T-12/T-14 题目管理、审核状态、批量导入
- T-15/T-16/T-17 班级CSV、学生报告数据、脱敏原始数据
- A-01/A-02 百宝箱AI生成与规则评分
- A-03 输入与输出基础安全过滤
- A-05 数据脱敏导出与个人数据删除
- A-06 学生/教师/管理员权限分离

### 依赖前端完成或生产环境补齐

- S-04 引导教程动画、S-13 光效动效、S-17 图片/PDF文件生成
- A-04 HTTPS/TLS 1.3：由 Nginx、网关或部署平台终止 TLS
- A-05 AES-256 字段级加密：当前演示数据无身份证、手机号等敏感字段；生产库建议加密后落库并加强密钥管理
- 学校 SSO：当前保留登录接口，后续可在 `routes/auth.js` 增加 SSO 回调
- Excel 双向导入导出：当前提供 CSV 与 JSON 数组导入，Excel 可由前端转换或后续引入解析库

## 7. 与现有前端的交接重点

当前前端已完成登录与独立实操任务对接，其余流程仍需逐步替换：

1. 登录页已调用 `/api/auth/login`，token 保存在浏览器本地存储。
2. 学生端导航为：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
3. 闯关模块页面只保留 5 个关卡卡片与闯关进度，对话式测评和实操任务仅从独立导航进入。
4. 学生端独立“实操任务”已调用 `/api/ai/generate`，并在提交时调用 `/api/ai/practical/submit`。
5. 学生端客观题、对话式测评和报告仍以本地演示数据驱动；正式接入时替换为 `/api/meta`、`/api/sessions/*`。
6. 教师端看板仍以本地演示数据驱动；正式接入时使用 `/api/classes`、`/api/teacher/*`。
7. 导出按钮正式化时优先调用 CSV 接口；PDF 可继续使用前端 `pdf-lib` 渲染报告数据。

## 8. 部署与迭代建议

1. 演示环境可直接运行 Node 服务。
2. 多班级并发使用时，将 `store.js` 替换为 SQLite 或 MySQL/PostgreSQL 数据访问层，路由和业务规则无需大改。
3. 生产环境务必启用 HTTPS、请求限流、审计日志、定期备份和强密码策略。
4. 百宝箱 API 地址和 Token 只放在服务端 `.env`，不要写入前端代码。
5. 题库正式化时继续补充每维度基础题与进阶题；导入模板见 `/api/questions/template`。
