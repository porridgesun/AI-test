# 后端接口说明

## 通用约定

- Base URL：`http://127.0.0.1:8787/api`
- 请求体与响应均为 UTF-8 JSON，CSV 导出接口除外。
- 登录后使用 `Authorization: Bearer <token>`。
- 成功响应直接返回业务对象；失败响应为：

```json
{ "error": { "code": 401, "message": "请先登录" } }
```

### 学生端入口约定

- 左侧导航：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
- 闯关模块页面只展示 5 个剧情关卡、星级、得分与闯关进度，不再重复放置专项测评入口。
- 对话式测评、实操任务是独立导航功能；实操生成与提交接口见「AI 实操」章节。

## 1. 基础与账号

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/health` | 公开 | 健康检查 |
| GET | `/meta` | 公开 | 六维、5关卡、口径说明 |
| POST | `/auth/register` | 公开 | 注册学生或教师 |
| POST | `/auth/login` | 公开 | 登录 |
| POST | `/auth/logout` | 登录用户 | 登出并移除Token |
| GET | `/auth/me` | 登录用户 | 当前用户与档案 |

### 登录示例

```http
POST /api/auth/login
Content-Type: application/json

{
  "account": "student",
  "password": "123456"
}
```

响应：

```json
{
  "user": { "id": "u_student", "account": "student", "role": "student", "name": "林晓" },
  "token": "..."
}
```

## 2. 学生资料与成长

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/students/me/profile` | 学生资料与班级 |
| PUT | `/students/me/profile` | 更新昵称、头像、班级 |
| GET | `/students/me/self-assessment` | 获取3道自评题 |
| POST | `/students/me/self-assessment` | 提交自评并定位初始难度 |
| GET | `/students/me/history` | 历史报告列表 |
| GET | `/students/me/reports/{reportId}` | 单次报告详情 |
| GET | `/students/me/retest-goal` | 上次结果、目标评级、复测口号 |
| DELETE | `/students/me/data` | 删除个人测评数据并匿名化档案 |

自评提交示例：

```json
{
  "answers": {
    "self_1": 2,
    "self_2": 2,
    "self_3": 1
  }
}
```

## 3. 测评会话

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/assessments` | 学生可参加的已发布测评 |
| POST | `/assessments/{assessmentId}/sessions` | 开始或恢复测评 |
| GET | `/sessions/current` | 当前未完成会话 |
| GET | `/sessions/{sessionId}` | 会话进度与当前题目 |
| PATCH | `/sessions/{id}/anti-cheat` | 记录页面切换等异常 |
| POST | `/sessions/{id}/answers` | 提交一题并自动保存 |
| POST | `/sessions/{id}/practical/submit` | 提交实操最终产物 |
| POST | `/sessions/{id}/finish` | 全部关卡完成后生成报告 |
| GET | `/sessions/{id}/report` | 获取本次报告 |
| DELETE | `/sessions/current` | 放弃当前会话 |

### 开始测评

```http
POST /api/assessments/a_demo/sessions
Authorization: Bearer <student-token>
```

返回的 `session.currentQuestion` 已隐藏正确答案、填空答案和评分关键词。

### 提交客观题

```http
POST /api/sessions/{sessionId}/answers
Authorization: Bearer <student-token>
Content-Type: application/json

{
  "questionId": "q_ac_1",
  "answer": 1,
  "elapsedSeconds": 28
}
```

不同题型的 `answer`：

| 题型 | 格式 |
|---|---|
| single / judge / scene | 数字选项下标 |
| multi | 数字数组 |
| fill | 字符串 |
| sort | 数字数组，表示排序后的选项下标 |
| dialogue | 使用 `messages` 字段，字符串数组 |

响应包含评分、解析、NPC反应语、维度得分、防作弊标记和下一题。

### 对话式测评

```json
{
  "questionId": "q_st_1",
  "messages": [
    "请说明这个方案的依据和风险",
    "请接入实时数据并列出备选方案",
    "我会结合安全边界和人工值守做最终决策"
  ],
  "elapsedSeconds": 180
}
```

## 4. AI 实操

| 方法 | 路径 | 说明 |
|---|---|---|
| POST | `/ai/generate` | 调百宝箱API；未配置时使用本地演示生成器 |
| POST | `/ai/practical/submit` | 独立实操任务提交全部提示词版本与最终产物 |
| GET | `/ai/practical/latest` | 获取当前学生最近一次独立实操提交 |
| POST | `/ai/score` | 规则评分，可用于产物预估 |

推荐流程：

1. 当前题为 `practical` 时，调用 `/ai/generate` 至少2次，传入 `sessionId` 与 `questionId`。
2. 服务端记录每次提示词、输出和迭代次数。
3. 调用 `/sessions/{id}/practical/submit`。

学生端左侧导航的独立“实操任务”不依赖测评会话：每次生成先在前端记录版本，最终调用 `/ai/practical/submit` 一次性提交版本链和产物。服务端会重新计算分数与星数。

```http
POST /api/ai/generate
Authorization: Bearer <student-token>
Content-Type: application/json

{
  "sessionId": "sess_xxx",
  "questionId": "q_wo_1",
  "prompt": "你是品牌策划专家，请为AI创意写作工具写50字内宣传文案，语气专业亲切，用列表输出。"
}
```

配置 `BAIBAOXIAO_API_URL` 后，服务端按 `{ "prompt": "..." }` 请求上游，并兼容 `output/result/text/data.output` 返回字段。Token 只保存在服务端环境变量。

### 独立实操提交

```http
POST /api/ai/practical/submit
Authorization: Bearer <student-token>
Content-Type: application/json

{
  "versions": [
    { "prompt": "帮我写AI写作工具宣传文案", "output": "初版产物", "provider": "baibaoxiao" },
    { "prompt": "你是品牌策划专家，请写50字内、语气专业亲切的文案", "output": "终版产物", "provider": "baibaoxiao" }
  ]
}
```

响应包含服务端评分、星数、迭代次数、每版提示词与产物。

## 5. 班级与学生名单

以下接口需要教师或管理员权限。

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/classes` | 班级列表与基础统计 |
| POST | `/classes` | 创建班级 |
| PUT | `/classes/{id}` | 编辑班级 |
| DELETE | `/classes/{id}` | 删除空班级 |
| GET | `/classes/{id}/students` | 班级学生 |
| POST | `/classes/{id}/students/import` | JSON数组或CSV批量导入 |

JSON导入示例：

```json
{
  "rows": [
    { "name": "李明", "studentNo": "20260901" },
    { "name": "何一", "studentNo": "20260902" }
  ]
}
```

CSV导入时请求 `{ "csv": "姓名,学号\\n李明,20260901\\n" }`。

## 6. 测评管理与分析

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/teacher/assessments` | 测评列表与完成率 |
| POST | `/teacher/assessments` | 创建测评 |
| PATCH | `/teacher/assessments/{id}` | 发布、关闭、修改时间 |
| GET | `/teacher/assessments/{id}/monitor` | 学生实时进度与异常标记 |
| GET | `/teacher/assessments/{id}/results` | 结果总览 |
| GET | `/teacher/classes/{id}/dashboard` | 六维均值/中位数、评级分布、短板 |
| GET | `/teacher/analytics/compare` | 班级间与全校均值对比 |
| GET | `/teacher/students/{id}/profile` | 学生画像、答题明细、对话、实操、提示词 |

创建测评示例：

```json
{
  "title": "智核觉醒 · 第一轮",
  "classIds": ["c1", "c2"],
  "opensAt": "2026-08-20T09:00:00+08:00",
  "closesAt": "2026-08-25T23:59:00+08:00",
  "durationMinutes": 35,
  "limitedTime": true,
  "allowRetest": true,
  "questionsPerLevel": 3,
  "initialDifficulty": 3
}
```

## 7. 题库管理

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/questions` | 教师/管理员 | 支持 `keyword/type/levelId/status` |
| GET | `/questions/template` | 教师/管理员 | CSV导入模板 |
| POST | `/questions` | 教师/管理员 | 教师新增为待审核，管理员新增为已通过 |
| PUT | `/questions/{id}` | 管理员 | 修改题目 |
| DELETE | `/questions/{id}` | 管理员 | 删除题目 |
| PATCH | `/questions/{id}/review` | 管理员 | 审核通过或拒绝 |
| POST | `/questions/import` | 教师/管理员 | 批量导入 |

新增题目示例：

```json
{
  "levelId": "academy",
  "type": "single",
  "difficulty": 2,
  "stem": "以下哪个提示词结构最完整？",
  "options": ["随便写写", "你是科普讲师，请用3点解释AI幻觉", "写AI"],
  "answer": 1,
  "explanation": "包含角色、任务、数量和输出结构。",
  "dimensions": { "basics": 1, "prompting": 2 },
  "knowledgePoints": ["提示词结构"],
  "estimatedSeconds": 90
}
```

`levelId` 可选值：`academy`、`labyrinth`、`workshop`、`station`、`court`。

`type` 可选值：`single`、`multi`、`judge`、`fill`、`scene`、`sort`、`dialogue`、`practical`。

## 8. 导出与数据安全

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/teacher/export/class/{classId}` | 班级汇总CSV |
| GET | `/teacher/export/raw` | 脱敏原始数据CSV |
| DELETE | `/teacher/students/{id}/data` | 管理员删除指定学生测评数据 |

CSV响应会设置 `Content-Disposition`，浏览器可直接下载。

## 9. 对接顺序建议

1. 登录与Token保存。
2. 拉取 `/api/meta`，替换学生端关卡与维度配置。
3. 拉取 `/api/assessments` 并开始会话。
4. 按题目类型渲染题目，逐题提交。
5. 实操题循环调用AI生成，之后提交产物。
6. 全关卡完成后调用 `finish`，用报告数据渲染雷达图、成长曲线和导出PDF。
7. 教师端接班级、监控、看板、学生画像和题库接口。
