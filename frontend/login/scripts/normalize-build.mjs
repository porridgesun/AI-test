import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const bundlePath = resolve(import.meta.dirname, "../../assets/login-app.js");
const bundle = await readFile(bundlePath, "utf8");
const normalized = bundle
  .replace(/[\t ]+$/gm, "")
  .replace(/^ +\t/gm, "\t");
await writeFile(bundlePath, normalized, "utf8");
