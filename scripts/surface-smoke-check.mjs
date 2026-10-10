import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checks = {
  commander: ["ecosystem/commander/src/main.tsx", "ecosystem/commander/server.ts"],
  "cranium-ai": ["ecosystem/cranium-ai/client/src/App.tsx", "ecosystem/cranium-ai/server/_core/index.ts"],
  ultra: [
    "ecosystem/cranium-ultra/projects/cranium-os/src/App.tsx",
    "ecosystem/cranium-ultra/projects/cranium-os/src/os/AuthorityBridge.ts",
    "ecosystem/cranium-ultra/projects/cranium-core-hardened/src/application/AuthorityService.ts"
  ]
};
const target = process.argv[2];
if (!target || !checks[target]) {
  console.error("usage: node scripts/surface-smoke-check.mjs <commander|cranium-ai|ultra>");
  process.exit(2);
}
const missing = checks[target].filter(p => !fs.existsSync(path.join(root, p)));
if (missing.length) {
  console.error("FAIL " + target + " missing: " + missing.join(", "));
  process.exit(1);
}
console.log("PASS " + target + " executable surface smoke");
