import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();

// Structural executable gate is subordinate to the stricter code+contract+test+integration gate.
execFileSync(process.execPath, [path.join(root, "scripts/verify-architecture-contracts.mjs")], { cwd: root, stdio: "inherit", timeout: 120000 });
const manifest = JSON.parse(fs.readFileSync(path.join(root, "EXECUTABLE_ARCHITECTURE.json"), "utf8"));

let failures = 0;
const verificationCache = new Map();

for (const box of manifest.boxes) {
  const entry = path.join(root, box.entry);
  const exists = fs.existsSync(entry);
  let symbolOk = true;

  if (exists && box.symbol) {
    const source = fs.readFileSync(entry, "utf8");
    const escaped = box.symbol.replace(/[.*+?^{}()|[\]\\]/g, "\\$&");
    symbolOk = new RegExp("\\b" + escaped + "\\b").test(source);
  }

  function runCached(command) {
    if (verificationCache.has(command)) return verificationCache.get(command);
    let output = "";
    let ok = false;
    try {
      output = execFileSync("bash", ["-lc", command], {
        cwd: root,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
        timeout: 120000
      });
      ok = true;
    } catch (error) {
      output = String(error?.stdout ?? "") + String(error?.stderr ?? "");
    }
    const result = { ok, output };
    verificationCache.set(command, result);
    return result;
  }

  const verification = exists && symbolOk
    ? runCached(box.verify)
    : { ok: false, output: "" };
  const verifyOk = verification.ok;
  const verifyOutput = verification.output;

  // The quick structural verification and the declared behavioral test are
  // separate obligations. A file-presence check must never stand in for the
  // component's actual testCommand.
  const behavioral = exists && symbolOk && typeof box.testCommand === "string"
    ? runCached(box.testCommand)
    : { ok: false, output: "" };
  const testCommandOk = behavioral.ok;
  const testCommandOutput = behavioral.output;

  const contractOk = typeof box.contractRef === "string" && fs.existsSync(path.join(root, box.contractRef));
  const testOk = typeof box.testRef === "string" && fs.existsSync(path.join(root, box.testRef));
  const statusOk = box.status === "VERIFIED" || box.status === "IMPLEMENTED";
  const ok = exists && symbolOk && contractOk && testOk && statusOk && verifyOk && testCommandOk;
  console.log(`${ok ? "PASS" : "FAIL"} ${box.id} :: ${box.name}`);

  if (!ok) {
    failures++;
    if (!exists) console.log(`  missing entry: ${box.entry}`);
    if (!symbolOk) console.log(`  missing symbol: ${box.symbol}`);
    if (!contractOk) console.log(`  missing contract: ${box.contractRef}`);
    if (!testOk) console.log(`  missing test reference: ${box.testRef}`);
    if (!statusOk) console.log(`  invalid status: ${box.status}`);
    if (!verifyOk) console.log(`  verification failed: ${box.verify}\n${verifyOutput.trim()}`);
    if (!testCommandOk) console.log(`  behavioral test failed: ${box.testCommand}\n${testCommandOutput.trim()}`);
  }
}

if (failures) {
  console.error(`\nEXECUTABLE ARCHITECTURE GATE: FAIL (${failures} box(es))`);
  process.exit(1);
}

console.log(`\nEXECUTABLE ARCHITECTURE GATE: PASS (${manifest.boxes.length} boxes)`);
