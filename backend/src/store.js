import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { hashPassword } from "./security.js";

const workspaceCandidate = join(process.cwd(), "backend", "data");
const backendCandidate = join(process.cwd(), "data");
const dataDir = existsSync(join(workspaceCandidate, "seed.json"))
  ? workspaceCandidate
  : backendCandidate;
const seedPath = join(dataDir, "seed.json");
const runtimePath = join(dataDir, "runtime.json");

export class Store {
  constructor(reset = false) {
    mkdirSync(dataDir, { recursive: true });
    const shouldLoadRuntime = !reset && existsSync(runtimePath);
    this.data = shouldLoadRuntime
      ? JSON.parse(readFileSync(runtimePath, "utf8"))
      : this.prepareSeed(JSON.parse(readFileSync(seedPath, "utf8")));
    if (!shouldLoadRuntime) this.persist();
  }

  prepareSeed(seed) {
    const data = structuredClone(seed);
    for (const user of data.users) {
      if (user.password) {
        const { salt, hash } = hashPassword(user.password);
        user.passwordSalt = salt;
        user.passwordHash = hash;
        delete user.password;
      }
    }
    return data;
  }

  persist() {
    const tempPath = `${runtimePath}.${process.pid}.tmp`;
    writeFileSync(tempPath, JSON.stringify(this.data, null, 2), "utf8");
    renameSync(tempPath, runtimePath);
  }

  update(mutator) {
    const result = mutator(this.data);
    this.persist();
    return result;
  }

  id(prefix) {
    return `${prefix}_${Date.now().toString(36)}${randomUUID().slice(0, 8)}`;
  }
}
