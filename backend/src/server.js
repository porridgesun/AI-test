import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { Store } from "./store.js";
import { Router } from "./router.js";
import { DIMENSIONS, LEVELS } from "./constants.js";
import { publicUser } from "./domain.js";
import { registerAuthRoutes } from "./routes/auth.js";
import { registerStudentRoutes } from "./routes/student.js";
import { registerAssessmentRoutes } from "./routes/assessment.js";
import { registerTeacherRoutes } from "./routes/teacher.js";
import { registerAIRoutes } from "./routes/ai.js";

const projectRoot = existsSync(join(process.cwd(), "backend", "src", "server.js"))
  ? process.cwd()
  : resolve(process.cwd(), "..");
loadDotEnv(join(projectRoot, "backend", ".env"));

const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || "127.0.0.1";
const staticRoot = resolve(projectRoot, process.env.STATIC_ROOT || "src");
const frontendAssetsRoot = resolve(projectRoot, "frontend", "public", "assets");
const store = new Store(process.env.RESET_DB === "1");
const router = new Router();
const contextBase = { store };

router.get("/api/health", () => ({
  status: "ok",
  service: "ai-ability-assessment-backend",
  dimensions: DIMENSIONS.length,
  levels: LEVELS.length,
  time: new Date().toISOString()
}));

registerAuthRoutes(router, contextBase);
registerStudentRoutes(router, contextBase);
registerAssessmentRoutes(router, contextBase);
registerTeacherRoutes(router, contextBase);
registerAIRoutes(router, contextBase);

const server = createServer(async (req, res) => {
  const started = Date.now();
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  attachCors(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (url.pathname.startsWith("/api/")) {
      const found = router.match(req.method, url.pathname);
      if (!found) throw httpError(404, "接口不存在");

      const { route, params } = found;
      const user = authenticate(req);
      if (route.options.auth && !user) throw httpError(401, "请先登录");
      if (route.options.roles && !route.options.roles.includes(user?.role)) {
        throw httpError(403, "当前账号没有权限访问该接口");
      }

      const body = await readBody(req);
      const ctx = {
        ...contextBase,
        req,
        res,
        url,
        params,
        query: url.searchParams,
        body,
        user,
        student: user?.role === "student"
          ? store.data.students.find((item) => item.userId === user.id)
          : null
      };
      const result = await route.handler(ctx);
      sendJSON(res, result?.statusCode || 200, result?.body !== undefined ? result.body : result, result?.headers);
      return;
    }

    serveStatic(req, res, url.pathname);
  } catch (error) {
    const status = error.statusCode || 500;
    if (status >= 500) console.error(error);
    sendJSON(res, status, { error: { code: status, message: error.message || "服务内部错误" } });
  } finally {
    if (url.pathname.startsWith("/api/")) {
      console.log(`${req.method} ${url.pathname} ${res.statusCode} ${Date.now() - started}ms`);
    }
  }
});

function loadDotEnv(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const match = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2];
  }
}

function attachCors(res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
}

function authenticate(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return null;
  const record = store.data.tokens.find((item) => item.token === token);
  if (!record || new Date(record.expiresAt) < new Date()) return null;
  return store.data.users.find((item) => item.id === record.userId) || null;
}

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    if (!["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
      resolveBody({});
      return;
    }
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 1024 * 1024) {
        reject(httpError(413, "请求体过大"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) return resolveBody({});
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolveBody(text ? JSON.parse(text) : {});
      } catch {
        reject(httpError(400, "JSON格式不正确"));
      }
    });
    req.on("error", reject);
  });
}

function sendJSON(res, status, body, headers = {}) {
  const text = JSON.stringify(body);
  res.writeHead(status, {
    ...headers,
    "Content-Type": headers["Content-Type"] || "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(text);
}

function serveStatic(req, res, pathname) {
  if (req.method !== "GET" && req.method !== "HEAD") throw httpError(405, "不支持的请求方法");
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(staticRoot, safePath);
  if (!filePath.startsWith(staticRoot)) throw httpError(403, "禁止访问该路径");
  if ((!existsSync(filePath) || statSync(filePath).isDirectory()) && safePath.startsWith("/assets/")) {
    const publicAssetPath = join(frontendAssetsRoot, safePath.slice("/assets/".length));
    if (publicAssetPath.startsWith(frontendAssetsRoot) && existsSync(publicAssetPath) && !statSync(publicAssetPath).isDirectory()) {
      filePath = publicAssetPath;
    }
  }
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(staticRoot, "index.html");
  }
  if (!existsSync(filePath)) throw httpError(404, "页面不存在");
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".woff2": "font/woff2"
  };
  res.writeHead(200, {
    "Content-Type": types[extname(filePath).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-cache"
  });
  if (req.method === "HEAD") return res.end();
  res.end(readFileSync(filePath));
}

export function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

server.listen(port, host, () => {
  console.log(`Backend listening at http://${host}:${port}`);
  console.log(`API base: http://${host}:${port}/api`);
  console.log(`Demo accounts: student/123456, teacher/123456, admin/admin123456`);
});
