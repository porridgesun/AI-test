import { isSafeText } from "../security.js";
import { httpError } from "../server.js";

export function registerAIRoutes(router) {
  router.post("/api/ai/practical/submit", (ctx) => {
    const rawVersions = Array.isArray(ctx.body?.versions) ? ctx.body.versions : [];
    if (rawVersions.length < 2) throw httpError(400, "实操任务至少需要提交两版提示词");
    if (rawVersions.length > 20) throw httpError(400, "单次实操最多保存20版提示词");

    const versions = rawVersions.map((item, index) => {
      const prompt = String(item?.prompt || "").trim();
      const output = String(item?.output || "").trim();
      const provider = String(item?.provider || "unknown").trim().slice(0, 40);
      if (!prompt || prompt.length > 2000) throw httpError(400, `第${index + 1}版提示词无效`);
      if (!output || output.length > 8000) throw httpError(400, `第${index + 1}版生成产物无效`);
      if (!isSafeText(prompt, output, provider)) throw httpError(422, "内容安全过滤未通过");
      return { version: index + 1, prompt, output, provider };
    });

    const finalVersion = versions[versions.length - 1];
    const submission = storePracticalSubmission(ctx, {
      versions,
      finalPrompt: finalVersion.prompt,
      finalOutput: finalVersion.output,
      provider: finalVersion.provider
    });
    return { submission, synced: true };
  }, { auth: true, roles: ["student"] });

  router.get("/api/ai/practical/latest", (ctx) => {
    const submission = (ctx.store.data.practicalSubmissions || [])
      .filter((item) => item.studentId === ctx.student.id)
      .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))[0];
    return { submission: submission || null };
  }, { auth: true, roles: ["student"] });

  router.post("/api/ai/generate", async (ctx) => {
    const prompt = String(ctx.body?.prompt || "").trim();
    if (!prompt) throw httpError(400, "提示词不能为空");
    if (!isSafeText(prompt)) throw httpError(422, "内容安全过滤未通过");
    const output = await generateOutput(prompt);
    if (!isSafeText(output)) throw httpError(502, "AI输出未通过安全检查");

    let savedRun = null;
    if (ctx.body.sessionId) {
      const session = ctx.store.data.sessions.find((item) => item.id === ctx.body.sessionId);
      if (!session || session.studentId !== ctx.student?.id) throw httpError(404, "测评会话不存在");
      savedRun = ctx.store.update(() => {
        session.practical = session.practical || { prompts: [], outputs: [], iterations: 0 };
        session.practical.questionId = ctx.body.questionId || session.currentQuestionId;
        session.practical.prompts.push(prompt);
        session.practical.outputs.push(output);
        session.practical.iterations += 1;
        session.practical.lastPrompt = prompt;
        session.practical.lastOutput = output;
        session.practical.updatedAt = new Date().toISOString();
        session.savedAt = session.practical.updatedAt;
        return session.practical;
      });
    }

    return {
      output,
      provider: process.env.BAIBAOXIAO_API_URL ? "baibaoxiao" : "local-demo",
      run: savedRun
    };
  }, { auth: true, roles: ["student"] });

  router.post("/api/ai/score", (ctx) => {
    const text = String(ctx.body?.text || "");
    const requirements = Array.isArray(ctx.body?.requirements) ? ctx.body.requirements : [];
    if (!isSafeText(text)) throw httpError(422, "内容安全过滤未通过");
    let score = 40;
    const evidence = [];
    if (text.length >= 40) { score += 10; evidence.push("长度满足基本可读性"); }
    if (requirements.some((item) => text.includes(item))) { score += 10; evidence.push("覆盖部分任务要求"); }
    if (/角色|目标|格式|表格|步骤/.test(text)) { score += 15; evidence.push("提示词结构清晰"); }
    if (ctx.body?.iterationCount >= 2) { score += 15; evidence.push("完成至少两次迭代"); }
    return {
      score: Math.min(100, score),
      evidence,
      provider: process.env.BAIBAOXIAO_API_URL ? "rule+remote-ready" : "rule-only"
    };
  }, { auth: true });
}

function storePracticalSubmission(ctx, input) {
  let score = 58;
  if (/文案|策划|产品经理|营销|创意|专家/.test(input.finalPrompt)) score += 8;
  if (/专业|亲切|语气/.test(input.finalPrompt)) score += 8;
  if (/50\s*字|字数|以内|不超过/.test(input.finalPrompt)) score += 8;
  if (/创意伙伴|创意写作|宣传|发布/.test(input.finalPrompt)) score += 8;
  if (/创意伙伴|创作|灵感/.test(input.finalOutput)) score += 6;
  if (input.versions.length > 1) score += 8;
  score = Math.min(96, score);
  const stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;

  const submission = {
    id: ctx.store.id("prac"),
    studentId: ctx.student.id,
    source: "standalone",
    ...input,
    iterations: input.versions.length,
    score,
    stars,
    submittedAt: new Date().toISOString()
  };
  ctx.store.update((data) => {
    data.practicalSubmissions = Array.isArray(data.practicalSubmissions)
      ? data.practicalSubmissions
      : [];
    data.practicalSubmissions.push(submission);
    return submission;
  });
  return submission;
}

export async function generateOutput(prompt) {
  const endpoint = process.env.BAIBAOXIAO_API_URL;
  if (!endpoint) return localDemoOutput(prompt);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.BAIBAOXIAO_API_TOKEN ? { Authorization: `Bearer ${process.env.BAIBAOXIAO_API_TOKEN}` } : {})
    },
    body: JSON.stringify({ prompt })
  });
  if (!response.ok) throw httpError(502, "百宝箱API调用失败");
  const data = await response.json();
  const output = data.output || data.result || data.text || data.data?.output || "";
  if (!String(output).trim()) throw httpError(502, "百宝箱API未返回有效内容");
  return String(output).trim();
}

function localDemoOutput(prompt) {
  const marks = [];
  if (/角色|专家|规划师|设计师|讲师/.test(prompt)) marks.push("角色清晰");
  if (/目标|要求|任务/.test(prompt)) marks.push("目标明确");
  if (/表格|列表|分点|步骤|格式/.test(prompt)) marks.push("格式完整");
  return [
    "【AI创意写作工具宣传文案】",
    "让AI成为你的创意伙伴：输入想法，获得灵感、初稿与润色建议。",
    "",
    "质量评估：" + (marks.length ? marks.join("、") : "基础表达") + "。建议补充目标读者、语气和字数限制，再迭代一次。"
  ].join("\n");
}
