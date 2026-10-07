import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "EXECUTABLE_ARCHITECTURE.json");
const contractsPath = path.join(root, "ARCHITECTURAL_COMPONENT_CONTRACTS.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const contracts = JSON.parse(fs.readFileSync(contractsPath, "utf8"));
const contractMap = new Map((contracts.components ?? []).map(c => [c.id, c]));

const failures = [];
const required = ["id","name","entry","contractId","testRef","testCommand","integrationRef","authority","status"];

for (const box of manifest.boxes) {
  for (const field of required) {
    if (typeof box[field] !== "string" || box[field].length === 0) {
      failures.push(`${box.id}: missing ${field}`);
    }
  }

  const entry = path.join(root, box.entry ?? "");
  if (!fs.existsSync(entry)) failures.push(`${box.id}: entry missing: ${box.entry}`);
  if (box.symbol && fs.existsSync(entry)) {
    const source = fs.readFileSync(entry, "utf8");
    const escaped = box.symbol.replace(/[.*+?^{}()|[\]\\]/g, "\\$&");
    if (!new RegExp("\\b" + escaped + "\\b").test(source)) {
      failures.push(`${box.id}: symbol missing: ${box.symbol}`);
    }
  }

  const contract = contractMap.get(box.contractId);
  if (!contract) {
    failures.push(`${box.id}: contractId not found: ${box.contractId}`);
  } else {
    for (const field of ["input","output","failure","authority"]) {
      if (typeof contract[field] !== "string" || !contract[field]) {
        failures.push(`${box.id}: contract missing ${field}`);
      }
    }
    if (contract.authority !== box.authority) {
      failures.push(`${box.id}: authority mismatch manifest=${box.authority} contract=${contract.authority}`);
    }
  }

  const testPath = path.join(root, box.testRef ?? "");
  if (!fs.existsSync(testPath)) failures.push(`${box.id}: testRef missing: ${box.testRef}`);
  else if (!/\.(?:mjs|cjs|js|ts|tsx)$/.test(testPath)) failures.push(`${box.id}: testRef is not executable: ${box.testRef}`);

  if (!/\b(?:test|verify|check|lint|build)\b/i.test(box.testCommand ?? "")) {
    failures.push(`${box.id}: testCommand is not executable-looking`);
  }
  if (/(?:test -f|test -d|grep -q)\b/.test(box.testCommand ?? "")) {
    failures.push(`${box.id}: testCommand only proves presence, not behavior`);
  }

  const integrationPath = path.join(root, box.integrationRef ?? "");
  if (!fs.existsSync(integrationPath)) failures.push(`${box.id}: integrationRef missing: ${box.integrationRef}`);

  if (!["VERIFIED","IMPLEMENTED"].includes(box.status)) {
    failures.push(`${box.id}: invalid executable status: ${box.status}`);
  }
}

if (manifest.boxes.length !== contractMap.size) {
  failures.push(`manifest/contract cardinality mismatch: boxes=${manifest.boxes.length} contracts=${contractMap.size}`);
}

if (failures.length) {
  console.error(failures.map(x => "FAIL " + x).join("\\n"));
  console.error(`\\nARCHITECTURAL CONTRACT GATE: FAIL (${failures.length})`);
  process.exit(1);
}

console.log(`ARCHITECTURAL CONTRACT GATE: PASS (${manifest.boxes.length} boxes; code+contract+test+integration+authority bound)`);
