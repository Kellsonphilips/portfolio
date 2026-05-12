import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");

function runNext(subcommand) {
  const result = spawnSync(process.execPath, [nextCli, subcommand], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (result.error) {
    throw result.error;
  }
  return result.status ?? 1;
}

const buildIdPath = path.join(root, ".next", "BUILD_ID");
if (!existsSync(buildIdPath)) {
  console.log("No production build in .next. Running next build...");
  const buildCode = runNext("build");
  if (buildCode !== 0) {
    process.exit(buildCode);
  }
}

process.exit(runNext("start"));
