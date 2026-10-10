import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, relative } from "node:path";
import { execFileSync } from "node:child_process";

const demoRoot = process.cwd();
const projectsRoot = resolve(demoRoot, "..");
const repos = {
  commercialBootDrive: resolve(projectsRoot, "cranium-boot-drive"),
  acquisitionDemoDrive: demoRoot,
};
const evidenceFiles = {
  commercialBootDrive: [
    "HEALTH_CHECK.sh",
    "chromiumos/manifest.env",
    "ecosystem/commander/package.json",
    "ecosystem/commander/package-lock.json",
    "ecosystem/commander/server.ts",
    "ecosystem/commander/scripts/build-server.mjs",
    "ecosystem/commander/src/App.tsx",
    "ecosystem/commander/src/worthwyl/common/GlobalAiBar.tsx",
    "ecosystem/commander/src/worthwyl/story/TaskOrchestrator.ts",
    "ecosystem/commander/src/worthwyl/studio/CreatorStudioView.tsx",
    "ecosystem/commander/dist/index.html",
    "ecosystem/commander/dist/server.cjs",
  ],
  acquisitionDemoDrive: [
    "HEALTH_CHECK.sh",
    "README.md",
    "SECURITY_RELEASE_READINESS_AUDIT_2026-10-10.md",
    "ecosystem/commander/package.json",
    "ecosystem/commander/package-lock.json",
    "ecosystem/commander/server.ts",
    "ecosystem/commander/scripts/build-server.mjs",
    "ecosystem/commander-legacy/package.json",
    "ecosystem/commander-legacy/package-lock.json",
    "ecosystem/commander-legacy/server.ts",
    "ecosystem/commander-legacy/scripts/build-server.mjs",
    "ECOSYSTEM_ARCHITECTURE.md",
    "REVIEWER_PATH.md",
    "CANONICAL_ARCHITECTURE.md",
    "ACQUISITION_ARCHITECTURE_MAP.md",
    "GOVERNANCE_CONTRACT.md",
    "MIRACLE_METABOLIC_DUAL_SUBSTRATE.md",
    "ACQUISITION_EXECUTIVE_BRIEF.md",
    "ACQUISITION_READINESS_GAP_REGISTER.md",
    "ACQUISITION_PACKAGE.md",
    "demo/index.html",
    "scripts/verify-architecture-contracts.mjs",
    "scripts/verify-executable-architecture.mjs",
    "scripts/ultra-surface-check.mjs",
    "EXECUTABLE_ARCHITECTURE.json",
    "scripts/generate-release-manifest.mjs",
    "ecosystem/cranium-ultra/projects/cranium-os/README.md",
    "ecosystem/cranium-ultra/projects/cranium-os/index.html",
    "ecosystem/cranium-ultra/projects/cranium-os/package.json",
    "ecosystem/cranium-ultra/projects/cranium-os/package-lock.json",
    "ecosystem/cranium-ultra/projects/cranium-os/src/App.tsx",
    "ecosystem/cranium-ultra/projects/cranium-os/src/os/AuthorityBridge.ts",
    "ecosystem/cranium-ultra/projects/cranium-os/src/ui/components/SubstrateTerminal.tsx",
  ],
};

function git(cwd, args) {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}
function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}
function repoRecord(name, path) {
  // Preserve Git's two status columns. git(...).trim() would strip the first
  // leading status column and corrupt the first path in the list.
  const status = execFileSync("git", ["status", "--porcelain=v1"], { cwd: path, encoding: "utf8" })
    .split(/\r?\n/)
    .filter(Boolean);
  const hashes = {};
  for (const rel of evidenceFiles[name]) {
    const absolute = resolve(path, rel);
    hashes[rel] = existsSync(absolute) ? sha256(absolute) : null;
  }
  return {
    path: relative(projectsRoot, path),
    branch: git(path, ["branch", "--show-current"]),
    head: git(path, ["rev-parse", "HEAD"]),
    dirty: status.length > 0,
    dirtyPathCount: status.length,
    dirtyPaths: status.map(line => line.slice(3)),
    evidenceSha256: hashes,
  };
}

const manifest = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  purpose: "Internal acquisition-readiness evidence snapshot, not a signed release attestation. Repository head fields identify the source commits present when this snapshot was generated; the manifest's own commit is subsequent and is intentionally not self-referenced.",
  proposedOpeningAcquisitionPositionUSD: 20000000,
  valuationDisclaimer: "Opening negotiation position only; not an independently substantiated fair-market valuation.",
  releaseEligible: false,
  releaseEligibilityReason: "Not release-eligible. The commercial source is on an unmerged security review branch; both ISO build jobs are skipped; and clean-host build, bootable-image boot test, live-provider verification, independent security review, and attorney-verified IP-title review remain open. The captured demo-branch CI passed CodeQL, dependency audit/review, Trivy, CycloneDX SBOM generation, acquisition stress, and Kernel authority-path proof, but those checks do not replace the open release gates.",
  repositories: {
    commercialBootDrive: repoRecord("commercialBootDrive", repos.commercialBootDrive),
    acquisitionDemoDrive: repoRecord("acquisitionDemoDrive", repos.acquisitionDemoDrive),
  },
};
const out = resolve(demoRoot, "RELEASE_CANDIDATE_MANIFEST.json");
writeFileSync(out, JSON.stringify(manifest, null, 2) + "\n");
console.log(JSON.stringify({
  output: out,
  generatedAt: manifest.generatedAt,
  releaseEligible: manifest.releaseEligible,
  repositories: Object.fromEntries(Object.entries(manifest.repositories).map(([name, repo]) => [name, {
    branch: repo.branch, head: repo.head, dirty: repo.dirty, dirtyPathCount: repo.dirtyPathCount,
    hashedEvidenceFiles: Object.values(repo.evidenceSha256).filter(Boolean).length,
  }])),
}, null, 2));
