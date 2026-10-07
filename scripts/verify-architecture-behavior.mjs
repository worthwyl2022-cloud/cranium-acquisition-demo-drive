import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, "EXECUTABLE_ARCHITECTURE.json"), "utf8"));
const commands = [...new Map(manifest.boxes.map(b => [b.testCommand, b])).entries()];
let failures = 0;

for (const [command, box] of commands) {
  console.log("\n=== " + box.id + " ===");
  console.log(command);
  const r = spawnSync("bash", ["-lc", command], {
    cwd: root, stdio: "inherit", timeout: 180000
  });
  if (r.error || r.status !== 0) {
    failures++;
    console.error("FAIL " + box.id + " exit=" + String(r.status) + " " + String(r.error ?? ""));
  } else {
    console.log("PASS " + box.id);
  }
}

if (failures) {
  console.error("\nARCHITECTURAL BEHAVIOR GATE: FAIL (" + failures + ")");
  process.exit(1);
}
console.log("\nARCHITECTURAL BEHAVIOR GATE: PASS (" + commands.length + " executable verification commands)");
