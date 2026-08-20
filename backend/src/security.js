import { createHash, randomBytes, randomUUID } from "node:crypto";

export function hashPassword(password, salt = randomBytes(12).toString("hex")) {
  const value = createHash("sha256").update(`${salt}:${password}`).digest("hex");
  return { salt, hash: value };
}

export function verifyPassword(password, salt, expectedHash) {
  return hashPassword(password, salt).hash === expectedHash;
}

export function createToken() {
  return `${randomUUID()}.${randomBytes(18).toString("base64url")}`;
}

export function isSafeText(...values) {
  const blocked = ["暴力", "违法", "诈骗", "色情", "自杀", "毒品", "黑客攻击", "赌博"];
  const text = values.filter(Boolean).join("\n").toLowerCase();
  return !blocked.some((word) => text.includes(word.toLowerCase()));
}
