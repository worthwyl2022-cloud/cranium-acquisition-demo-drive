import { spawnSync } from "node:child_process";

function run(cwd, command, args) {
  const r = spawnSync(command, args, { cwd, stdio: "inherit", shell: false });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

const root = process.cwd();
const os = root + "/ecosystem/cranium-ultra/projects/cranium-os";
const core = root + "/ecosystem/cranium-ultra/projects/cranium-core-hardened";

console.log("ULTRA SURFACE CHECK: OS typecheck");
run(os, "node", ["node_modules/typescript/bin/tsc", "--noEmit"]);
console.log("ULTRA SURFACE CHECK: OS tests");
run(os, "node", ["node_modules/vitest/vitest.mjs", "run"]);
console.log("ULTRA SURFACE CHECK: OS build");
run(os, "node", ["node_modules/typescript/bin/tsc"]);
run(os, "node", ["node_modules/vite/bin/vite.js", "build"]);

console.log("ULTRA SURFACE CHECK: Core typecheck");
run(core, "node", ["node_modules/typescript/bin/tsc", "--noEmit"]);
console.log("ULTRA SURFACE CHECK: Core unit tests");
run(core, "node", ["--experimental-vm-modules", "node_modules/jest/bin/jest.js", "--runInBand"]);
console.log("ULTRA SURFACE CHECK: Core adversarial tests");
run(core, "node", ["node_modules/tsx/dist/cli.mjs", "tests/adversarial/run.ts"]);
console.log("ULTRA SURFACE CHECK: Core build");
run(core, "node", ["node_modules/typescript/bin/tsc"]);

console.log("ULTRA SURFACE CHECK: PASS");
