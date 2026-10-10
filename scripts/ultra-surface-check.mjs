import { spawnSync } from "node:child_process";

function run(label, cwd, args) {
  console.log(`ULTRA SURFACE CHECK: ${label}`);
  const r = spawnSync(process.execPath, args, {
    cwd,
    stdio: "inherit",
    timeout: 120_000,
    shell: false,
  });
  if (r.error) {
    console.error(`FAILED: ${label}: ${r.error.message}`);
    process.exit(1);
  }
  if (r.status !== 0) {
    console.error(`FAILED: ${label}: exit ${r.status ?? "unknown"}`);
    process.exit(r.status ?? 1);
  }
}

const root = process.cwd();
const os = root + "/ecosystem/cranium-ultra/projects/cranium-os";
const kernel = root + "/ecosystem/cranium-ultra/projects/cranium-core-hardened";

run("OS typecheck", os, ["node_modules/typescript/lib/tsc.js", "--noEmit"]);
run("OS tests", os, ["node_modules/vitest/dist/cli.js", "run"]);
run("OS build typecheck", os, ["node_modules/typescript/lib/tsc.js"]);
run("OS production build", os, ["node_modules/vite/bin/vite.js", "build"]);

run("Kernel typecheck", kernel, ["node_modules/typescript/lib/tsc.js", "--noEmit"]);
run("Kernel unit tests", kernel, ["node_modules/jest/bin/jest.js", "--runInBand"]);
run("Kernel adversarial tests", kernel, ["node_modules/tsx/dist/cli.mjs", "tests/adversarial/run.ts"]);
run("Kernel build typecheck", kernel, ["node_modules/typescript/lib/tsc.js"]);

console.log("ULTRA SURFACE CHECK: PASS");
