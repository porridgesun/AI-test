# 后端接口说明

## 1. 通用约定

- Base URL：`http://127.0.0.1:8787/api`
- 请求体与响应均为 UTF-8 JSON（CSV 导出接口除外）。
- 登录后需要在请求头携带 `Authorization: Bearer <token>`。
- 成功响应直接返回业务对象；失败响应格式：

```json
{ "error": { "code": 401, "message": "请先登录" } }
```

### 角色权限

| 角色 | 说明 |
|---|---|
| student | 学生端 |
| teacher | 教师端 |
| admin | 管理员，可审核/编辑/删除题库、删除学生数据 |

### 前端约定

- 学生端导航：闯关模块、对话式测评、实操任务、觉醒报告、测评历史。
- 闯关模块只展示 5 个剧情关卡；对话式测评、实操任务为独立导航入口。
- 教师端班级、测评、监控、结果、画像、数据分析、题库、导出均已接入本后端。

## 2. 账号

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| POST | `/auth/register` | 公开 | 注册学生或教师 |
| POST | `/auth/login` | 公开 | 登录 |
| POST | `/auth/logout` | 登录用户 | 登出并移除 Token |
| GET | `/auth/me` | 登录用户 | 当前用户与档案 |

### 登录示例

```http
POST /api/auth/login
Content-Type: application/json

{ "account": "teacher", "password": "123456" }
```

响应：

```json
{
  "user": { "id": "u_teacher", "account": "teacher", "role": "teacher", "name": "张老师", "teacherId": "t1" },
  "token": "..."
}
```

### 注册示例

```json
{
  "account": "student01",
  "password": "123456",
  "role": "student",
  "name": "测试学生",
  "classId": "c1"
}
```

## 3. 学生资料与成长

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/meta` | 公开 | 六维、5 关卡、口径说明 |
| GET | `/students/me/profile` | student | 学生资料与班级 |
| PUT | `/students/me/profile` | student | 更新昵称、头像、班级 |
| GET | `/students/me/self-assessment` | student | 获取 3 道自评题 |
| POST | `/students/me/self-assessment` | student | 提交自评并定位初始难度 |
| GET | `/students/me/history` | student | 历史报告列表 |
| GET | `/students/me/reports/{reportId}` | student | 单次报告详情 |
| GET | `/students/me/retest-goal` | student | 上次结果、目标评级、复测口号 |
| DELETE | `/students/me/data` | student | 删除个人测评数据并匿名化档案 |

自评提交示例：

```json
{
  "answers": { "self_1": 2, "self_2": 2, "self_3": 1 }
}
```

## 4. 测评会话

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/assessments` | student | 学生可参加的已发布测评 |
| POST | `/assessments/{assessmentId}/sessions` | student | 开始或恢复测评 |
| GET | `/sessions/current` | student | 当前未完成会话 |
| DELETE | `/sessions/current` | student | 放弃当前会话 |
| GET | `/sessions/{sessionId}` | student | 会话进度与当前题目 |
| PATCH | `/sessions/{id}/anti-cheat` | student | 记录页面切换等异常 |
| POST | `/sessions/{id}/answers` | student | 提交一题并自动保存 |
| POST | `/sessions/{id}/practical/submit` | student | 提交会话内实操最终产物 |
| POST | `/sessions/{id}/finish` | student | 全部关卡完成后生成报告 |
| GET | `/sessions/{id}/report` | student | 获取本次报告 |

### 开始测评

```http
POST /api/assessments/a_demo/sessions
Authorization: Bearer <student-token>
```

响应 `session` 中会包含当前关卡、关卡进度与 `currentQuestion`；题目已隐藏正确答案、填空答案和评分关键词。

### 提交客观题

```http
POST /api/sessions/{sessionId}/answers
Authorization: Bearer <student-token>
Content-Type: application/json

{ "questionId": "q_ac_1", "answer": 1, "elapsedSeconds": 28 }
```

不同题型的 `answer` 格式：

| 题型 | 格式 |
|---|---|
| single / judge / scene | 数字选项下标 |
| multi | 数字数组 |
| fill | 字符串 |
| sort | 数字数组，表示排序后的选项下标 |
| dialogue | 使用 `messages` 字段，字符串数组 |

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

响应包含评分、解析、NPC 反应语、维度得分、防作弊标记与下一题。

### 防作弊

```json
{ "pageHidden": true }
```

页面切换累计 2 次后会写入防作弊标记。

## 5. AI 实操

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| POST | `/ai/generate` | student | 调百宝箱 API；未配置时使用本地演示生成器 |
| POST | `/ai/practical/submit` | student | 独立实操任务提交全部提示词版本与最终产物 |
| GET | `/ai/practical/latest` | student | 当前学生最近一次独立实操提交 |
| POST | `/ai/score` | 登录用户 | 规则评分，可用于产物预估 |

### 会话内实操流程

1. 当前题为 `practical` 时，调用 `/api/ai/generate` 至少 2 次，传入 `sessionId` 与 `questionId`。
2. 服务端记录每次提示词、输出和迭代次数。
3. 调用 `/api/sessions/{id}/practical/submit` 提交最终产物。

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

## 6. 班级与学生名单

以下接口需要教师或管理员权限。

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/classes` | 班级列表与基础统计 |
| POST | `/classes` | 创建班级 |
| PUT | `/classes/{id}` | 编辑班级 |
| DELETE | `/classes/{id}` | 删除空班级（非空返回 409） |
| GET | `/classes/{id}/students` | 班级学生 |
| POST | `/classes/{id}/students/import` | JSON 数组或 CSV 批量导入 |

### 创建班级

```json
{ "name": "高一 (5) 班", "grade": "高一", "headTeacher": "张老师" }
```

### JSON 导入学生

```json
{
  "rows": [
    { "name": "李明", "studentNo": "20260901" },
    { "name": "何一", "studentNo": "20260902" }
  ]
}
```

CSV 导入时请求 `{ "csv": "姓名,学号\n李明,20260901\n" }`。

## 7. 测评管理与分析

以下接口需要教师或管理员权限。

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/teacher/assessments` | 测评列表与完成率 |
| POST | `/teacher/assessments` | 创建测评（草稿） |
| PATCH | `/teacher/assessments/{id}` | 发布、关闭、修改时间 |
| GET | `/teacher/assessments/{id}/monitor` | 学生实时进度与异常标记 |
| GET | `/teacher/assessments/{id}/results` | 结果总览 |
| GET | `/teacher/classes/{id}/dashboard` | 六维均值/中位数、评级分布、短板 |
| GET | `/teacher/analytics/compare` | 班级间与全校均值对比 |
| GET | `/teacher/students/{id}/profile` | 学生画像、答题明细、对话、实操、提示词 |

### 创建测评

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

创建后状态为 `draft`，学生端不可见；调用 `PATCH /api/teacher/assessments/{id}`，body `{ "status": "published" }` 后学生端可见。

### 监控行字段

`rows` 中每项包含：`studentId/name/studentNo/status/currentLevel/answeredCount/targetCount/progressRate/rating/stars/flags`。

### 结果行字段

`rows` 中每项包含：`studentId/name/studentNo/className/status/rating/stars/overall/scores`，其中 `scores` 是六维得分对象。

### 学生画像

返回 `student`、`latestReport`、`growth`、`answerDetails`、`dialogueTranscripts`、`practical`、`antiCheat`。

## 8. 题库管理

以下接口需要教师或管理员权限；编辑、删除、审核仅管理员。

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/questions` | teacher/admin | 支持 `keyword/type/levelId/status` |
| GET | `/questions/template` | teacher/admin | CSV 导入模板 |
| POST | `/questions` | teacher/admin | 教师新增为待审核，管理员新增为已通过 |
| PUT | `/questions/{id}` | admin | 修改题目 |
| DELETE | `/questions/{id}` | admin | 删除题目 |
| PATCH | `/questions/{id}/review` | admin | 审核通过或拒绝 |
| POST | `/questions/import` | teacher/admin | 批量导入 |

### 新增题目

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

- `levelId` 可选：`academy`、`labyrinth`、`workshop`、`station`、`court`。
- `type` 可选：`single`、`multi`、`judge`、`fill`、`scene`、`sort`、`dialogue`、`practical`。
- `difficulty` 为 1-5。
- `answer`：单选/判断/情景填数字下标，多选/排序填数字数组，填空填字符串。
- `dimensions` 至少一个有效维度，权重大于 0。

### 审核

```json
{ "result": "approved", "reviewComment": "通过" }
```

`result` 可选 `approved` 或 `rejected`。

### CSV 导入

模板列：`levelId,type,difficulty,stem,options,answer,dimensions,knowledgePoints,estimatedSeconds`

示例：

```text
academy,single,2,题干内容,选项A|选项B|选项C,1,basics:1,prompting:2,知识点1|知识点2,90
```

请求：

```json
{ "rows": [ { "levelId": "academy", "type": "single", "difficulty": 2, "stem": "...", "options": "A|B|C", "answer": 1, "dimensions": "basics:1", "knowledgePoints": "提示词结构", "estimatedSeconds": 90 } ] }
```

## 9. 导出与数据安全

| 方法 | 路径 | 角色 | 说明 |
|---|---|---|---|
| GET | `/teacher/export/class/{classId}` | teacher/admin | 班级汇总 CSV |
| GET | `/teacher/export/raw` | teacher/admin | 脱敏原始数据 CSV |
| DELETE | `/teacher/students/{id}/data` | admin | 管理员删除指定学生测评数据 |

CSV 响应会设置 `Content-Disposition`，浏览器可直接下载。

## 10. 对接顺序建议

1. 登录并保存 Token。
2. 拉取 `/api/meta`，替换学生端关卡与维度配置。
3. 拉取 `/api/assessments` 并开始会话。
4. 按题目类型渲染题目，逐题提交 `/api/sessions/{id}/answers`。
5. 实操题循环调用 `/api/ai/generate`，之后提交产物。
6. 全关卡完成后调用 `/api/sessions/{id}/finish`，用报告数据渲染雷达图、成长曲线和导出 PDF。
7. 教师端接班级、监控、看板、学生画像和题库接口。
