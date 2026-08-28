const base = process.env.API_BASE || "http://127.0.0.1:8787";
const tokenCache = {};

async function api(path, options = {}, token) {
  const response = await fetch(base + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(`${path}: ${response.status} ${text}`);
  return data;
}

async function login(account, password) {
  if (tokenCache[account]) return tokenCache[account];
  const scope = account === "student" ? "student" : "admin";
  const data = await api("/api/auth/login", { method: "POST", body: { account, password, scope } });
  tokenCache[`${scope}:${account}`] = data.token;
  return data.token;
}

function answerFor(question) {
  if (question.type === "multi") return [0];
  if (question.type === "sort") return [0, 1, 2, 3];
  if (question.type === "fill") return "格式";
  if (question.type === "dialogue") {
    return ["请说明依据和风险", "请接入实时数据并列出备选方案", "我会结合人工值守做最终决策"];
  }
  return 0;
}

const studentToken = await login("student", "123456");
const health = await api("/api/health");
const meta = await api("/api/meta");
const assessments = await api("/api/assessments", {}, studentToken);
const standalonePractical = await api("/api/ai/practical/submit", {
  method: "POST",
  body: {
    versions: [
      { prompt: "为AI创意写作工具写宣传文案，突出让AI成为创意伙伴。", output: "让AI成为你的创意伙伴。", provider: "local-demo" },
      { prompt: "你是品牌策划专家，请为AI创意写作工具写50字内宣传文案，语气专业亲切。", output: "让AI成为你的创意伙伴：输入灵感，获得初稿与润色建议。", provider: "local-demo" }
    ]
  }
}, studentToken);
const latestStandalonePractical = await api("/api/ai/practical/latest", {}, studentToken);
let started = await api(`/api/assessments/${assessments.assessments[0].id}/sessions`, { method: "POST" }, studentToken);
let session = started.session;

for (let step = 0; step < 30 && session.currentQuestion; step += 1) {
  const question = session.currentQuestion;
  if (question.type === "practical") {
    for (let run = 0; run < 2; run += 1) {
      await api("/api/ai/generate", {
        method: "POST",
        body: {
          sessionId: session.id,
          questionId: question.id,
          prompt: run === 0
            ? "为AI创意写作工具写宣传文案，突出让AI成为创意伙伴。"
            : "你是品牌策划专家，请为AI创意写作工具写50字内宣传文案，语气专业亲切，用列表输出。"
        }
      }, studentToken);
    }
    const submitted = await api(`/api/sessions/${session.id}/practical/submit`, { method: "POST" }, studentToken);
    session = submitted.session;
    continue;
  }

  const result = await api(`/api/sessions/${session.id}/answers`, {
    method: "POST",
    body: {
      questionId: question.id,
      answer: answerFor(question),
      messages: question.type === "dialogue" ? answerFor(question) : undefined,
      elapsedSeconds: 30
    }
  }, studentToken);
  session = result.session;
}

if (!session.currentQuestion || session.status === "levels_completed") {
  const report = await api(`/api/sessions/${session.id}/finish`, { method: "POST" }, studentToken);
  console.log("student report:", report.rating, report.overall, report.stars);
} else {
  throw new Error(`assessment did not finish; status=${session.status}`);
}

const teacherToken = await login("teacher", "123456");
const classes = await api("/api/classes", {}, teacherToken);
const dashboard = await api(`/api/teacher/classes/${classes.classes[0].id}/dashboard`, {}, teacherToken);
const questions = await api("/api/questions", {}, teacherToken);
const monitor = await api(`/api/teacher/assessments/a_demo/monitor`, {}, teacherToken);
const unauthorized = await fetch(`${base}/api/classes`);
const rawExport = await fetch(`${base}/api/teacher/export/raw`, {
  headers: { Authorization: `Bearer ${teacherToken}` }
});
const questionTemplate = await fetch(`${base}/api/questions/template`, {
  headers: { Authorization: `Bearer ${teacherToken}` }
});
const logout = await api("/api/auth/logout", { method: "POST" }, teacherToken);
const afterLogout = await fetch(`${base}/api/auth/me`, {
  headers: { Authorization: `Bearer ${teacherToken}` }
});

console.log("health:", health.status, "levels:", meta.levelCount, "dimensions:", meta.dimensionCount);
console.log("standalone practical:", standalonePractical.submission.score, "stars", standalonePractical.submission.stars, "latest", latestStandalonePractical.submission.iterations);
console.log("teacher dashboard:", dashboard.studentCount, "students, participation", `${dashboard.participationRate}%`);
console.log("questions:", questions.total, "monitor rows:", monitor.rows.length);
console.log("security/export:", unauthorized.status, rawExport.status, questionTemplate.status, logout.ok, afterLogout.status);
console.log("SMOKE OK");
