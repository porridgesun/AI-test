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
    const seed = JSON.parse(readFileSync(seedPath, "utf8"));
    this.data = shouldLoadRuntime
      ? this.prepareRuntime(seed, JSON.parse(readFileSync(runtimePath, "utf8")))
      : this.prepareSeed(seed);
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

  prepareRuntime(seed, runtime) {
    for (const user of runtime.users || []) {
      if (user.password) {
        const { salt, hash } = hashPassword(user.password);
        user.passwordSalt = salt;
        user.passwordHash = hash;
        delete user.password;
        continue;
      }

      if (!user.passwordSalt || !user.passwordHash) {
        const seedUser = (seed.users || []).find((item) => item.id === user.id)
          || (seed.users || []).find((item) => item.account === user.account && item.role === user.role);
        const password = seedUser?.password || "123456";
        const { salt, hash } = hashPassword(password);
        user.passwordSalt = salt;
        user.passwordHash = hash;
      }
    }
    return runtime;
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
