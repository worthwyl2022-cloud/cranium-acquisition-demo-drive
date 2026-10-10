# CONVERTIBLE CRANIUM — EXHAUSTIVE EXECUTABLE TREE MAP

**Record date:** 2026-10-07
**Source repository:** `worthwyl2022-cloud/cranium-acquisition-demo-drive`
**Branch:** `feat/metabolic-memory-v2`
**Purpose:** Personal phone record + GitHub record + Dropbox archival record.

## Authority / ownership posture

- Working IP provenance posture: Convertible Cranium is treated as personally owned by **Wyl Mathes** unless formal legal assignment establishes otherwise.
- **Cranium Kernel is the sole canonical authority.**
- Commander is an operating surface, not the authority layer.

## Canonical architecture

**Quad-Engine, Dual-Substrate**

1. **Listener** — untrusted ingress. No authority.
2. **Engine 1: Synapse** — proposal generation, evidence/context assessment, and derivation of independent substrate inputs.
3. **Engine 2A: Substrate A / Constitutional Authority** — independent sealed assessment: **MAY WE?**
   - A1 / A2 jury functions
   - independent Constitution A / Policy A / Formula A bindings
4. **Engine 2B: Substrate B / Evidence Grounding** — independent sealed assessment: **IS IT SO?**
   - B1 / B2 jury functions
   - independent Constitution B / Policy B / Formula B bindings
5. **Engine 3: Cranium Kernel** — validates proposal identity, sealed assessments, versions, lineage, signatures, and convergence. Only the Kernel can establish authority.
6. **Execution** — only within Kernel-granted scope.
7. **Receipts / Journal** — replayable, tamper-evident lineage.
8. **Miracle Memory** — continuity / governed memory.

### Cross-cutting safety

- **Metabolic Memory V2** — residency, flux, protected material, constitutional reservoirs, dissipation, quarantine, recovery, and provenance. It governs resource/memory behavior, **not authority**.
- **Circuit Breaker / COMA** — runtime safety and recovery boundary.
- **No Silent Authority** — proposed cognition does not become authority merely by existing or being persuasive.
- **Independent substrate rule** — A and B produce sealed assessments without seeing the other assessment first.
- **Non-convergence** — no authority; quarantine/escalation according to the Kernel contract.

## Verification doctrine

> No box without code. No code without a contract. No contract without a test. No authority claim without a demonstrated authority path.

Status vocabulary: **IMPLEMENTED**, **ARCHITECTURALLY DEFINED**, **UNVERIFIED**.

## Live repository inventory

- Git-tracked files: **697**
- This tree is generated from `git ls-files`, so it does not silently omit tracked files.
- File presence alone does not establish architectural verification. Executable claims must be supported by contracts/tests/evidence.

## Current verified milestones

- Kernel full `npm run verify` has historically passed the core memory, Synapse, recovery, durable authority, lifecycle, conformance, Constitution, and COMA gates.
- Dual-substrate verification has passed.
- Dual-independent-substrate boundary test has passed.
- Authority Receipt integrity test has passed, including tamper rejection.
- Metabolic Memory V2: **8/8 tests passed** in WorthWyl Forge.
- WorthWyl Forge TypeScript lint passed. Its normal build previously hit an environment-level `vite: not found` resolution failure despite the Vite package/binary being present, so that build status remains a tracked remediation item rather than being falsely marked PASS.
- Cranium Ultra verification currently has an npm script-policy installation gate (`EALLOWSCRIPTS`) requiring controlled remediation.

## Exhaustive tracked-file tree

```text
├── .github
│   ├── CODEOWNERS
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── dependabot.yml
│   └── workflows
│       ├── acquisition-stress-suite.yml
│       ├── build-iso.yml
│       └── security.yml
├── .node-version
├── .nvmrc
├── ACQUISITION_ARCHITECTURE_MAP.md
├── ACQUISITION_PACKAGE.md
├── ARCHITECTURAL_COMPONENT_CONTRACTS.json
├── ARCHITECTURAL_COMPONENT_CONTRACTS.md
├── ARCHITECTURAL_COMPONENT_TEST_MATRIX.md
├── ARCHITECTURAL_DECOMPOSITION_STATUS.md
├── ARCHITECTURE_AND_LINEAGE.md
├── BUILD_ACQUISITION_ISO.sh
├── CANONICAL_ARCHITECTURE.md
├── CHROMIUM_EDITION_BOOT_BINDER.md
├── CONSTITUTION.md
├── CRANIUM_COMMAND_LAW.json
├── DEPLOYMENT.md
├── ECOSYSTEM_ARCHITECTURE.md
├── EXECUTABLE_ARCHITECTURE.json
├── EXECUTABLE_ARCHITECTURE_MAP.md
├── GOVERNANCE_CONTRACT.md
├── HEALTH_CHECK.sh
├── INTEGRATION_TEST_PLAN.md
├── IP_OWNERSHIP_AND_PROVENANCE.md
├── KERNEL_SNAPSHOT_PROVENANCE.md
├── MIRACLE_METABOLIC_DUAL_SUBSTRATE.md
├── NODE_VERSION.md
├── README.md
├── REVIEWER_PATH.md
├── RUNTIME_SAFETY_ENVELOPE.md
├── brand-candidates
│   ├── README.md
│   └── worthwyl-creative-os-original-2026-09-15.jpg
├── demo
│   ├── assets
│   │   ├── cranium-canonical-logo.webp
│   │   ├── cranium-master-mark.png
│   │   └── worthwyl-creative-os.jpg
│   └── index.html
├── ecosystem
│   ├── .node-version
│   ├── .nvmrc
│   ├── ACQUISITION_PACKAGE.md
│   ├── BUILD_ISO.sh
│   ├── CAPABILITY_MANIFEST.json
│   ├── CONSTITUTION.md
│   ├── DEPLOYMENT.md
│   ├── ECOSYSTEM_ARCHITECTURE.md
│   ├── GITHUB_BACKUP_SCOPE.md
│   ├── HEALTH_CHECK.sh
│   ├── NODE_VERSION.md
│   ├── README.md
│   ├── cognitive-tracker
│   │   ├── .github
│   │   │   ├── SECURITY.md
│   │   │   ├── dependabot.yml
│   │   │   └── workflows
│   │   │       └── python-package.yml
│   │   ├── ACQUISITION_ONE_PAGER.md
│   │   ├── ARCHITECTURE.md
│   │   ├── ARCHIVED.md
│   │   ├── AUDIT-EVIDENCE.md
│   │   ├── CONTRACT_ALIGNMENT.md
│   │   ├── Cranium_Substrate_Complete.zip
│   │   ├── HANDOVER.md
│   │   ├── LICENSE-DECISION.md
│   │   ├── LlmJudgeContradiction.kt
│   │   ├── PROVENANCE.md
│   │   ├── ProjectStore.kt
│   │   ├── README (1).md
│   │   ├── README (2).md
│   │   ├── README.md
│   │   ├── corpus_frozen_v1.json
│   │   ├── export_receipts.py
│   │   ├── generate_audit_report.py
│   │   ├── methodology.json
│   │   ├── receipts_runner.py
│   │   ├── results_mock.json
│   │   └── tests
│   │       └── run_harness.py
│   ├── commander
│   │   ├── .env.example
│   │   ├── .github
│   │   │   ├── SECURITY.md
│   │   │   └── workflows
│   │   │       ├── ci.yml
│   │   │       └── pages.yml
│   │   ├── .gitignore
│   │   ├── .node-version
│   │   ├── .npmrc
│   │   ├── .nvmrc
│   │   ├── ARCHITECTURE.md
│   │   ├── ARCHIVED.md
│   │   ├── AUDIT-EVIDENCE.md
│   │   ├── AUTHORITY_ROLE.md
│   │   ├── CONTRACT_ALIGNMENT.md
│   │   ├── DEPLOYMENT.md
│   │   ├── HANDOVER.md
│   │   ├── LICENSE-DECISION.md
│   │   ├── LINEAGE.md
│   │   ├── NODE_VERSION.md
│   │   ├── PROVENANCE.md
│   │   ├── README.md
│   │   ├── WORTHWYL_CREATIVE_OS_STACK.md
│   │   ├── index.html
│   │   ├── metadata.json
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── server.ts
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── components
│   │   │   │   ├── ArchitectureSpecModal.tsx
│   │   │   │   ├── CognitiveMetricsBar.tsx
│   │   │   │   ├── EntryForm.tsx
│   │   │   │   ├── MediaEnginePanel.tsx
│   │   │   │   ├── MiracleArchivePanel.tsx
│   │   │   │   ├── ResonanceFieldCanvas.tsx
│   │   │   │   └── StudioWorkspace.tsx
│   │   │   ├── index.css
│   │   │   ├── main.tsx
│   │   │   ├── types
│   │   │   │   └── creativeOs.ts
│   │   │   └── worthwyl
│   │   │       ├── common
│   │   │       │   └── GlobalAiBar.tsx
│   │   │       ├── core
│   │   │       │   ├── cognitiveAtom.ts
│   │   │       │   ├── continuity.ts
│   │   │       │   ├── directives.ts
│   │   │       │   ├── field.ts
│   │   │       │   ├── loop.ts
│   │   │       │   ├── orchestrator.ts
│   │   │       │   ├── physics.ts
│   │   │       │   ├── sessionCircuitBreaker.ts
│   │   │       │   └── themeMemory.ts
│   │   │       ├── demo
│   │   │       │   ├── AcquisitionVideoDemo.tsx
│   │   │       │   └── acquisitionDemoData.ts
│   │   │       ├── diligence
│   │   │       │   └── DiligenceDataRoom.tsx
│   │   │       ├── metacognition
│   │   │       │   ├── MetacognitiveView.tsx
│   │   │       │   ├── ThoughtJournal.tsx
│   │   │       │   └── trackerData.ts
│   │   │       ├── physics
│   │   │       │   └── ResonanceFieldView.tsx
│   │   │       ├── story
│   │   │       │   ├── ContinuityTracker.ts
│   │   │       │   ├── EpisodicMemoryStore.ts
│   │   │       │   ├── ScreenshotService.ts
│   │   │       │   ├── TaskOrchestrator.ts
│   │   │       │   ├── VisualTextCoherenceEngine.ts
│   │   │       │   ├── domain.ts
│   │   │       │   └── novelEngine.ts
│   │   │       └── studio
│   │   │           └── CreatorStudioView.tsx
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── cranium-ai
│   │   ├── .gitignore
│   │   ├── .gitkeep
│   │   ├── .npmrc
│   │   ├── .prettierignore
│   │   ├── .prettierrc
│   │   ├── README.md
│   │   ├── WorthWyl-Cranium-Master-Dossier.md
│   │   ├── client
│   │   │   ├── index.html
│   │   │   ├── public
│   │   │   │   ├── .gitkeep
│   │   │   │   └── __manus__
│   │   │   │       └── debug-collector.js
│   │   │   └── src
│   │   │       ├── App.tsx
│   │   │       ├── _core
│   │   │       │   └── hooks
│   │   │       │       └── useAuth.ts
│   │   │       ├── components
│   │   │       │   ├── AIChatBox.tsx
│   │   │       │   ├── DashboardLayout.tsx
│   │   │       │   ├── DashboardLayoutSkeleton.tsx
│   │   │       │   ├── ErrorBoundary.tsx
│   │   │       │   ├── ManusDialog.tsx
│   │   │       │   ├── Map.tsx
│   │   │       │   └── ui
│   │   │       │       ├── accordion.tsx
│   │   │       │       ├── alert-dialog.tsx
│   │   │       │       ├── alert.tsx
│   │   │       │       ├── aspect-ratio.tsx
│   │   │       │       ├── avatar.tsx
│   │   │       │       ├── badge.tsx
│   │   │       │       ├── breadcrumb.tsx
│   │   │       │       ├── button-group.tsx
│   │   │       │       ├── button.tsx
│   │   │       │       ├── calendar.tsx
│   │   │       │       ├── card.tsx
│   │   │       │       ├── carousel.tsx
│   │   │       │       ├── chart.tsx
│   │   │       │       ├── checkbox.tsx
│   │   │       │       ├── collapsible.tsx
│   │   │       │       ├── command.tsx
│   │   │       │       ├── context-menu.tsx
│   │   │       │       ├── dialog.tsx
│   │   │       │       ├── drawer.tsx
│   │   │       │       ├── dropdown-menu.tsx
│   │   │       │       ├── empty.tsx
│   │   │       │       ├── field.tsx
│   │   │       │       ├── form.tsx
│   │   │       │       ├── hover-card.tsx
│   │   │       │       ├── input-group.tsx
│   │   │       │       ├── input-otp.tsx
│   │   │       │       ├── input.tsx
│   │   │       │       ├── item.tsx
│   │   │       │       ├── kbd.tsx
│   │   │       │       ├── label.tsx
│   │   │       │       ├── menubar.tsx
│   │   │       │       ├── navigation-menu.tsx
│   │   │       │       ├── pagination.tsx
│   │   │       │       ├── popover.tsx
│   │   │       │       ├── progress.tsx
│   │   │       │       ├── radio-group.tsx
│   │   │       │       ├── resizable.tsx
│   │   │       │       ├── scroll-area.tsx
│   │   │       │       ├── select.tsx
│   │   │       │       ├── separator.tsx
│   │   │       │       ├── sheet.tsx
│   │   │       │       ├── sidebar.tsx
│   │   │       │       ├── skeleton.tsx
│   │   │       │       ├── slider.tsx
│   │   │       │       ├── sonner.tsx
│   │   │       │       ├── spinner.tsx
│   │   │       │       ├── switch.tsx
│   │   │       │       ├── table.tsx
│   │   │       │       ├── tabs.tsx
│   │   │       │       ├── textarea.tsx
│   │   │       │       ├── toggle-group.tsx
│   │   │       │       ├── toggle.tsx
│   │   │       │       └── tooltip.tsx
│   │   │       ├── const.ts
│   │   │       ├── contexts
│   │   │       │   └── ThemeContext.tsx
│   │   │       ├── hooks
│   │   │       │   ├── useComposition.ts
│   │   │       │   ├── useMobile.tsx
│   │   │       │   └── usePersistFn.ts
│   │   │       ├── index.css
│   │   │       ├── lib
│   │   │       │   ├── trpc.ts
│   │   │       │   └── utils.ts
│   │   │       ├── main.tsx
│   │   │       └── pages
│   │   │           ├── ComponentShowcase.tsx
│   │   │           ├── Home.tsx
│   │   │           └── NotFound.tsx
│   │   ├── components.json
│   │   ├── drizzle
│   │   │   ├── 0000_glossy_matthew_murdock.sql
│   │   │   ├── 0001_glorious_oracle.sql
│   │   │   ├── meta
│   │   │   │   ├── 0000_snapshot.json
│   │   │   │   ├── 0001_snapshot.json
│   │   │   │   └── _journal.json
│   │   │   ├── migrations
│   │   │   │   └── .gitkeep
│   │   │   ├── relations.ts
│   │   │   └── schema.ts
│   │   ├── drizzle.config.ts
│   │   ├── metadata
│   │   │   └── canonical_file_trees.txt
│   │   ├── package.json
│   │   ├── patches
│   │   │   └── wouter@3.7.1.patch
│   │   ├── pnpm-lock.yaml
│   │   ├── repository_inventory.json
│   │   ├── repository_inventory.tsv
│   │   ├── server
│   │   │   ├── _core
│   │   │   │   ├── context.ts
│   │   │   │   ├── cookies.ts
│   │   │   │   ├── dataApi.ts
│   │   │   │   ├── env.ts
│   │   │   │   ├── heartbeat.ts
│   │   │   │   ├── imageGeneration.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── llm.ts
│   │   │   │   ├── map.ts
│   │   │   │   ├── notification.ts
│   │   │   │   ├── oauth.ts
│   │   │   │   ├── sdk.ts
│   │   │   │   ├── storageProxy.ts
│   │   │   │   ├── systemRouter.ts
│   │   │   │   ├── trpc.ts
│   │   │   │   ├── types
│   │   │   │   │   ├── cookie.d.ts
│   │   │   │   │   └── manusTypes.ts
│   │   │   │   ├── vite.ts
│   │   │   │   └── voiceTranscription.ts
│   │   │   ├── auth.logout.test.ts
│   │   │   ├── chatRouter.test.ts
│   │   │   ├── chatRouter.ts
│   │   │   ├── coma.test.ts
│   │   │   ├── coma.ts
│   │   │   ├── db.ts
│   │   │   ├── grounding.test.ts
│   │   │   ├── grounding.ts
│   │   │   ├── responseGovernance.test.ts
│   │   │   ├── responseGovernance.ts
│   │   │   ├── routers.ts
│   │   │   ├── storage.ts
│   │   │   ├── worldKnowledge.test.ts
│   │   │   └── worldKnowledge.ts
│   │   ├── shared
│   │   │   ├── _core
│   │   │   │   └── errors.ts
│   │   │   ├── const.ts
│   │   │   └── types.ts
│   │   ├── template.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   └── vitest.config.ts
│   ├── cranium-kernel
│   │   ├── .env.example
│   │   ├── .github
│   │   │   ├── SECURITY.md
│   │   │   ├── dependabot.yml
│   │   │   └── workflows
│   │   │       ├── android-ci.yml
│   │   │       ├── ci-typescript.yml
│   │   │       ├── ci.yml
│   │   │       └── codeql.yml
│   │   ├── .gitignore
│   │   ├── .node-version
│   │   ├── .npmrc
│   │   ├── .nvmrc
│   │   ├── ARCHITECTURE.md
│   │   ├── ATOMICITY.md
│   │   ├── AUDIT-EVIDENCE.md
│   │   ├── AUTHORITY_ARCHITECTURE.md
│   │   ├── AUTHORITY_PROXY.md
│   │   ├── DEAL_ROOM.md
│   │   ├── EVIDENCE.md
│   │   ├── GOVERNANCE_BOUNDARY.md
│   │   ├── HANDOVER.md
│   │   ├── LICENSE
│   │   ├── NODE_VERSION.md
│   │   ├── NOTICE
│   │   ├── PORTFOLIO_MAP.md
│   │   ├── PROVENANCE.md
│   │   ├── README.md
│   │   ├── REPRODUCTION.md
│   │   ├── SECURITY.md
│   │   ├── SECURITY_SCOPE.md
│   │   ├── THREAT_MODEL.md
│   │   ├── TRUTH_AND_CONFORMANCE.md
│   │   ├── app
│   │   │   ├── build.gradle.kts
│   │   │   └── src
│   │   │       ├── main
│   │   │       │   ├── AndroidManifest.xml
│   │   │       │   └── kotlin
│   │   │       │       └── com
│   │   │       │           └── example
│   │   │       │               └── cranium
│   │   │       │                   ├── MainActivity.kt
│   │   │       │                   ├── kernel
│   │   │       │                   │   ├── AdversarialSuite.kt
│   │   │       │                   │   ├── AuthorityRuleEvaluator.kt
│   │   │       │                   │   ├── AuthorityTransitionEngine.kt
│   │   │       │                   │   ├── BoundaryValidator.kt
│   │   │       │                   │   ├── CanonLane.kt
│   │   │       │                   │   ├── KernelStateReducer.kt
│   │   │       │                   │   ├── KernelTypes.kt
│   │   │       │                   │   ├── ReplayGuard.kt
│   │   │       │                   │   └── Sha256Hasher.kt
│   │   │       │                   └── ui
│   │   │       │                       └── CraniumApp.kt
│   │   │       └── test
│   │   │           └── java
│   │   │               └── com
│   │   │                   └── example
│   │   │                       └── cranium
│   │   │                           └── KernelStateReducerTest.kt
│   │   ├── build.gradle.kts
│   │   ├── bun.lock
│   │   ├── contracts
│   │   │   ├── authority-receipt-v1.schema.json
│   │   │   ├── authority-request-v1.schema.json
│   │   │   ├── capability-v1.schema.json
│   │   │   └── delegation-v1.schema.json
│   │   ├── docs
│   │   │   ├── ACQUISITION_POSITIONING_BRIEF.md
│   │   │   ├── ACQUISITION_READINESS_BRIEF.md
│   │   │   ├── ACQUISITION_STRESS_SUITE.md
│   │   │   ├── CANONICAL_SEMANTIC_CONTRACT.json
│   │   │   ├── CANONICAL_SEMANTIC_CONTRACT.md
│   │   │   ├── CORE_API_CONTRACT_V1.json
│   │   │   ├── CORE_API_CONTRACT_V1.md
│   │   │   ├── CRANIUM_AUTHORITY_PROTOCOL_V1.md
│   │   │   ├── CRANIUM_CONFORMANCE_V1.json
│   │   │   ├── CRANIUM_CONSTITUTION_V1.md
│   │   │   ├── FIREBASE_CONFIGURATION_CLASSIFICATION.md
│   │   │   ├── MIRACLE_MEMORY_INTEGRITY.md
│   │   │   ├── PORTFOLIO_LINEAGE.md
│   │   │   ├── PROOFING_AND_REMEDIATION.md
│   │   │   ├── RELEASE_MATRIX.md
│   │   │   ├── SYNAPSE_CORE_EVIDENCE.md
│   │   │   ├── THREAT_MODEL_V1.md
│   │   │   └── WORLD_CLASS_ENGINEERING_BAR.md
│   │   ├── evidence
│   │   │   └── acquisition-stress-suite-manifest.json
│   │   ├── evidence-manifest.json
│   │   ├── gradle
│   │   │   └── wrapper
│   │   │       ├── gradle-wrapper.jar
│   │   │       └── gradle-wrapper.properties
│   │   ├── gradle.properties
│   │   ├── gradlew
│   │   ├── gradlew.bat
│   │   ├── index.html
│   │   ├── metadata.json
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── reproduction-output
│   │   │   ├── artifact-sha256.txt
│   │   │   └── commit-sha.txt
│   │   ├── scripts
│   │   │   ├── acquisition-stress-suite.ts
│   │   │   ├── atomic-recovery-check.ts
│   │   │   ├── authority-boundary-adversarial-check.ts
│   │   │   ├── authority-lifecycle-matrix.ts
│   │   │   ├── authority-request-adapter-check.ts
│   │   │   ├── capability-authority-check.ts
│   │   │   ├── cognitive-subconscious-check.ts
│   │   │   ├── coma-check.ts
│   │   │   ├── conformance-vectors.ts
│   │   │   ├── constitution-check.mjs
│   │   │   ├── constitution-runtime-check.ts
│   │   │   ├── dual-independent-boundary-check.ts
│   │   │   ├── dual-substrate-check.ts
│   │   │   ├── durable-authority-check.ts
│   │   │   ├── ecosystem-release-check.mjs
│   │   │   ├── evidence-manifest.mjs
│   │   │   ├── miracle-memory-check.ts
│   │   │   ├── production-boundary-check.mjs
│   │   │   ├── proofing-check.ts
│   │   │   ├── reproduce-acquisition.sh
│   │   │   ├── substrate-gateway.ts
│   │   │   ├── synapse-contract-smoke.ts
│   │   │   └── synapse-integration-check.ts
│   │   ├── settings.gradle.kts
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── authority
│   │   │   │   ├── authorityProxy.ts
│   │   │   │   ├── authorityRequestV1.ts
│   │   │   │   ├── capabilityAuthority.ts
│   │   │   │   ├── cognitiveSubconscious.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── proofing.ts
│   │   │   │   └── sqliteAuthorityStore.ts
│   │   │   ├── components
│   │   │   │   ├── AdversarialTab.tsx
│   │   │   │   ├── CanonTab.tsx
│   │   │   │   ├── DiligenceTab.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── LedgerTab.tsx
│   │   │   │   └── PipelineTab.tsx
│   │   │   ├── data
│   │   │   │   └── initialState.ts
│   │   │   ├── governance
│   │   │   │   ├── GovernanceBoundary.ts
│   │   │   │   ├── Signatures.ts
│   │   │   │   ├── SynapseCoreTransaction.ts
│   │   │   │   ├── SynapseRuntimeAdapter.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.css
│   │   │   ├── index.ts
│   │   │   ├── kernel
│   │   │   │   ├── adversarial.ts
│   │   │   │   ├── atomicJournal.ts
│   │   │   │   ├── atomicTransaction.ts
│   │   │   │   ├── canon.ts
│   │   │   │   ├── coma.ts
│   │   │   │   ├── constitution.ts
│   │   │   │   ├── engine.ts
│   │   │   │   ├── replayGuard.ts
│   │   │   │   ├── sha256.ts
│   │   │   │   ├── stressTester.ts
│   │   │   │   └── types.ts
│   │   │   ├── main.tsx
│   │   │   ├── memory
│   │   │   │   ├── MiracleMemoryStore.ts
│   │   │   │   ├── genesis.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── types.ts
│   │   │   ├── substrates
│   │   │   │   ├── contracts.ts
│   │   │   │   ├── convergence.ts
│   │   │   │   ├── quadEngine.ts
│   │   │   │   ├── substrateA.ts
│   │   │   │   └── substrateB.ts
│   │   │   └── vite-env.d.ts
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── cranium-synapse
│   │   ├── .github
│   │   │   ├── SECURITY.md
│   │   │   └── dependabot.yml
│   │   ├── ALGS PROTOTYPE .docx
│   │   ├── ARCHITECTURE.md
│   │   ├── ARCHIVED.md
│   │   ├── AUDIT-EVIDENCE.md
│   │   ├── CONTRACT.md
│   │   ├── CONTRACT_ALIGNMENT.md
│   │   ├── EVIDENCE.md
│   │   ├── HANDOVER.md
│   │   ├── LICENSE
│   │   ├── NOTICE
│   │   ├── PROVENANCE.md
│   │   ├── README.md
│   │   └── src
│   │       ├── contract.ts
│   │       └── index.ts
│   ├── cranium-ultra
│   │   ├── .github
│   │   │   ├── SECURITY.md
│   │   │   ├── dependabot.yml
│   │   │   └── workflows
│   │   │       └── ci.yml
│   │   ├── .gitignore
│   │   ├── .npmrc
│   │   ├── ARCHITECTURE.md
│   │   ├── ARCHIVED.md
│   │   ├── AUDIT-EVIDENCE.md
│   │   ├── AUTHORITY_ROLE.md
│   │   ├── CONTRACT_ALIGNMENT.md
│   │   ├── CRANIUM_BUNDLE_README.md
│   │   ├── HANDOVER.md
│   │   ├── LICENSE-DECISION.md
│   │   ├── PROVENANCE.md
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── SOURCE_BUNDLE_ORIGINAL.docx
│   │   ├── docs
│   │   │   ├── DEPLOYMENT_READINESS.md
│   │   │   └── SOURCE_BUNDLE_PROVENANCE.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── projects
│   │       ├── cranium-core-hardened
│   │       │   ├── .gitignore
│   │       │   ├── .npmrc
│   │       │   ├── README.md
│   │       │   ├── docs
│   │       │   │   ├── ARCHITECTURE.md
│   │       │   │   ├── COGNITIVE_MODEL.md
│   │       │   │   ├── EXECUTIVE_ONE_PAGER.md
│   │       │   │   ├── GOVERNANCE.md
│   │       │   │   └── VALUE_AND_IP.md
│   │       │   ├── jest.config.cjs
│   │       │   ├── package-lock.json
│   │       │   ├── package.json
│   │       │   ├── src
│   │       │   │   ├── application
│   │       │   │   │   └── AuthorityService.ts
│   │       │   │   ├── domain
│   │       │   │   │   ├── authority
│   │       │   │   │   │   ├── AuthorityRuleEvaluator.ts
│   │       │   │   │   │   ├── AuthorityTransitionEngine.ts
│   │       │   │   │   │   ├── BoundaryValidator.ts
│   │       │   │   │   │   ├── KernelState.ts
│   │       │   │   │   │   ├── KernelStateReducer.ts
│   │       │   │   │   │   ├── ReplayGuard.ts
│   │       │   │   │   │   ├── bootstrap.ts
│   │       │   │   │   │   ├── index.ts
│   │       │   │   │   │   └── types.ts
│   │       │   │   │   ├── cognition
│   │       │   │   │   │   └── types.ts
│   │       │   │   │   ├── constitution
│   │       │   │   │   │   └── types.ts
│   │       │   │   │   └── crypto
│   │       │   │   │       └── Sha256Hasher.ts
│   │       │   │   └── index.ts
│   │       │   ├── tests
│   │       │   │   ├── adversarial
│   │       │   │   │   ├── AdversarialSuite.ts
│   │       │   │   │   └── run.ts
│   │       │   │   └── unit
│   │       │   │       └── boundary.test.ts
│   │       │   └── tsconfig.json
│   │       └── cranium-os
│   │           ├── .npmrc
│   │           ├── README.md
│   │           ├── index.html
│   │           ├── package-lock.json
│   │           ├── package.json
│   │           ├── postcss.config.js
│   │           ├── src
│   │           │   ├── App.tsx
│   │           │   ├── index.css
│   │           │   ├── main.tsx
│   │           │   ├── os
│   │           │   │   └── AuthorityBridge.ts
│   │           │   └── ui
│   │           │       └── components
│   │           │           ├── AuthorityDashboard.tsx
│   │           │           ├── CanonicalLedger.tsx
│   │           │           └── SubstrateTerminal.tsx
│   │           ├── tailwind.config.js
│   │           ├── tests
│   │           │   └── authority-bridge.test.ts
│   │           ├── tsconfig.json
│   │           └── vite.config.ts
│   ├── launcher
│   │   ├── assets
│   │   │   ├── cranium-canonical-logo.webp
│   │   │   ├── cranium-master-mark.png
│   │   │   └── worthwyl-creative-os.jpg
│   │   ├── index.html
│   │   └── launcher.py
│   ├── miracle-memory
│   │   └── README.md
│   └── worthwyl-forge
│       ├── .env.example
│       ├── .github
│       │   ├── SECURITY.md
│       │   ├── dependabot.yml
│       │   └── workflows
│       │       └── ci.yml
│       ├── .gitignore
│       ├── .npmrc
│       ├── ARCHITECTURE.md
│       ├── AUDIT-EVIDENCE.md
│       ├── AUTHORITY_ROLE.md
│       ├── CONTRACT_ALIGNMENT.md
│       ├── HANDOVER.md
│       ├── LICENSE-DECISION.md
│       ├── PROVENANCE.md
│       ├── README.md
│       ├── SUBSTRATE_CONTRACT_v36.md
│       ├── docs
│       │   └── archive
│       │       ├── legacy-cranium-substrate
│       │       │   ├── CRANIUM_SUBSTRATE_ALL.md
│       │       │   ├── README.md
│       │       │   └── cranium_substrate
│       │       │       ├── README.md
│       │       │       ├── benchmark
│       │       │       │   ├── AUDIT_REPORT.json
│       │       │       │   ├── adversarial_stress_test.py
│       │       │       │   ├── corpus_frozen_v1.json
│       │       │       │   ├── execution_receipts.json
│       │       │       │   ├── export_receipts.py
│       │       │       │   ├── generate_audit_report.py
│       │       │       │   ├── live_execution_receipts.json
│       │       │       │   ├── live_receipts_runner.py
│       │       │       │   ├── methodology.json
│       │       │       │   ├── receipts_runner.py
│       │       │       │   └── run_harness.py
│       │       │       ├── cranium-kernel
│       │       │       │   ├── PROPERTY_REGISTRY.md
│       │       │       │   ├── README.md
│       │       │       │   ├── build.gradle.kts
│       │       │       │   ├── settings.gradle.kts
│       │       │       │   └── src
│       │       │       │       ├── main
│       │       │       │       │   └── kotlin
│       │       │       │       │       └── com
│       │       │       │       │           └── example
│       │       │       │       │               └── cranium
│       │       │       │       │                   ├── authority
│       │       │       │       │                   │   ├── AuthorityClass.kt
│       │       │       │       │                   │   ├── AuthorityLevel.kt
│       │       │       │       │                   │   ├── AuthorityRuleEvaluator.kt
│       │       │       │       │                   │   ├── AuthoritySource.kt
│       │       │       │       │                   │   ├── AuthorityTransition.kt
│       │       │       │       │                   │   ├── AuthorityTransitionEngine.kt
│       │       │       │       │                   │   ├── AuthorityTransitionRequest.kt
│       │       │       │       │                   │   ├── AuthorizationScope.kt
│       │       │       │       │                   │   ├── AuthorizationVerificationResult.kt
│       │       │       │       │                   │   ├── AuthorizationVerifier.kt
│       │       │       │       │                   │   ├── BoundaryAssessment.kt
│       │       │       │       │                   │   ├── BoundaryValidator.kt
│       │       │       │       │                   │   ├── BoundaryViolation.kt
│       │       │       │       │                   │   ├── DefaultAuthorityRuleEvaluator.kt
│       │       │       │       │                   │   ├── DefaultAuthorityTransitionEngine.kt
│       │       │       │       │                   │   ├── DefaultAuthorizationVerifier.kt
│       │       │       │       │                   │   ├── DefaultBoundaryValidator.kt
│       │       │       │       │                   │   ├── EvidenceRef.kt
│       │       │       │       │                   │   ├── TransitionAuthorization.kt
│       │       │       │       │                   │   └── TransitionDecision.kt
│       │       │       │       │                   ├── canon
│       │       │       │       │                   │   ├── CanonHash.kt
│       │       │       │       │                   │   ├── CanonLane.kt
│       │       │       │       │                   │   ├── CanonRequest.kt
│       │       │       │       │                   │   └── CanonicalRequestHasher.kt
│       │       │       │       │                   ├── cognition
│       │       │       │       │                   │   ├── AtomKind.kt
│       │       │       │       │                   │   ├── CognitiveAtom.kt
│       │       │       │       │                   │   ├── CognitiveStatus.kt
│       │       │       │       │                   │   └── Provenance.kt
│       │       │       │       │                   ├── constitution
│       │       │       │       │                   │   ├── ConstitutionIntegrity.kt
│       │       │       │       │                   │   ├── ConstitutionRegistry.kt
│       │       │       │       │                   │   ├── ConstitutionalConstraint.kt
│       │       │       │       │                   │   └── ConstitutionalPrinciple.kt
│       │       │       │       │                   ├── hash
│       │       │       │       │                   │   ├── AuthorityTransitionRequestEncoder.kt
│       │       │       │       │                   │   ├── CanonicalEncoder.kt
│       │       │       │       │                   │   ├── RequestHash.kt
│       │       │       │       │                   │   ├── RequestHasher.kt
│       │       │       │       │                   │   └── Sha256RequestHasher.kt
│       │       │       │       │                   ├── immunity
│       │       │       │       │                   │   ├── DefaultImmunityEvaluator.kt
│       │       │       │       │                   │   ├── ImmunityEvaluator.kt
│       │       │       │       │                   │   ├── ThreatAssessment.kt
│       │       │       │       │                   │   ├── ThreatClass.kt
│       │       │       │       │                   │   └── ThreatLevel.kt
│       │       │       │       │                   ├── kernel
│       │       │       │       │                   │   ├── AuthorityMonotonicityInvariant.kt
│       │       │       │       │                   │   ├── DefaultKernelInvariantValidator.kt
│       │       │       │       │                   │   ├── DomainEvent.kt
│       │       │       │       │                   │   ├── ExecutionState.kt
│       │       │       │       │                   │   ├── InvariantResult.kt
│       │       │       │       │                   │   ├── KernelInvariant.kt
│       │       │       │       │                   │   ├── KernelInvariantValidator.kt
│       │       │       │       │                   │   ├── KernelState.kt
│       │       │       │       │                   │   ├── KernelStateReducer.kt
│       │       │       │       │                   │   ├── LegalTransitionValidator.kt
│       │       │       │       │                   │   ├── NoIsolatedSubjectInvariant.kt
│       │       │       │       │                   │   └── ProtectedLaneInvariant.kt
│       │       │       │       │                   ├── receipt
│       │       │       │       │                   │   ├── AuthorityReceipt.kt
│       │       │       │       │                   │   ├── InMemoryReceiptChain.kt
│       │       │       │       │                   │   └── ReceiptChain.kt
│       │       │       │       │                   └── replay
│       │       │       │       │                       ├── InMemoryReplayGuard.kt
│       │       │       │       │                       ├── ReplayGuard.kt
│       │       │       │       │                       └── ReplayStatus.kt
│       │       │       │       └── test
│       │       │       │           └── kotlin
│       │       │       │               └── com
│       │       │       │                   └── example
│       │       │       │                       └── cranium
│       │       │       │                           ├── authority
│       │       │       │                           │   └── AuthorityTransitionEngineTest.kt
│       │       │       │                           ├── replay
│       │       │       │                           │   └── ReplayGuardTest.kt
│       │       │       │                           └── security
│       │       │       │                               └── StaleStateAttackTest.kt
│       │       │       ├── docs
│       │       │       │   └── ACQUISITION_ONE_PAGER.md
│       │       │       ├── immune
│       │       │       │   └── CraniumImmuneLayer.kt
│       │       │       ├── judge
│       │       │       │   ├── LlmJudgeContradiction.kt
│       │       │       │   └── README.md
│       │       │       ├── product
│       │       │       │   ├── README.md
│       │       │       │   └── src
│       │       │       │       └── main
│       │       │       │           └── java
│       │       │       │               └── com
│       │       │       │                   └── example
│       │       │       │                       └── core
│       │       │       │                           └── product
│       │       │       │                               └── ProjectStore.kt
│       │       │       └── substrate
│       │       │           ├── CanonLane.kt
│       │       │           ├── CognitiveAtom.kt
│       │       │           ├── ContradictionEngine.kt
│       │       │           ├── DeliberationEngine.kt
│       │       │           ├── OutputEvaluator.kt
│       │       │           ├── ResonanceField.kt
│       │       │           ├── SemanticEngine.kt
│       │       │           └── SubstrateCore.kt
│       │       └── legacy-ui-components
│       │           ├── OnboardAI.tsx.archive
│       │           ├── OnboardingNavigator.tsx.archive
│       │           └── README.md
│       ├── index.html
│       ├── manifest.json
│       ├── metadata.json
│       ├── package-lock.json
│       ├── package.json
│       ├── public
│       │   ├── benchmark
│       │   │   └── fixtures
│       │   │       ├── fixture_clean_commit.json
│       │   │       ├── fixture_hard_blocked.json
│       │   │       └── fixture_quarantined_clash.json
│       │   ├── docs
│       │   │   ├── DEMO_VIDEO_SCRIPT_AND_STORYBOARD.md
│       │   │   └── EVIDENCE_PACK_INDEX.md
│       │   ├── schemas
│       │   │   ├── receipt-canonicalization.md
│       │   │   └── receipt-v1.schema.json
│       │   └── tools
│       │       └── verify_receipt.py
│       ├── server.ts
│       ├── src
│       │   ├── App.tsx
│       │   ├── assets
│       │   │   ├── corpus_frozen_v1.json
│       │   │   └── images
│       │   │       ├── worthwyl_media_avatar_1787985497415.jpg
│       │   │       └── worthwyl_media_banner_1787985483443.jpg
│       │   ├── components
│       │   │   ├── AccessGate.tsx
│       │   │   ├── BenchmarkLab.tsx
│       │   │   ├── CanonRegistry.tsx
│       │   │   ├── ChatInput.tsx
│       │   │   ├── ChatMessage.tsx
│       │   │   ├── CraniumOverview.tsx
│       │   │   ├── CraniumReceiptsViewer.tsx
│       │   │   ├── DirectiveConsole.tsx
│       │   │   ├── FormalAuthorityKernel.tsx
│       │   │   ├── InteractiveAppTour.tsx
│       │   │   ├── MetacognitiveTracker.tsx
│       │   │   ├── NovelEngine.tsx
│       │   │   ├── PersistentChat.tsx
│       │   │   ├── QuarantineInbox.tsx
│       │   │   ├── SelfDrivingDemoPlayer.tsx
│       │   │   ├── VideoEditor.tsx
│       │   │   └── WriterForge.tsx
│       │   ├── core
│       │   │   ├── coherence
│       │   │   │   ├── ContinuityTracker.ts
│       │   │   │   └── VisualTextCoherenceEngine.ts
│       │   │   ├── llm
│       │   │   │   └── LLMClient.ts
│       │   │   ├── memory
│       │   │   │   └── EpisodicMemoryStore.ts
│       │   │   ├── os
│       │   │   │   └── TaskOrchestrator.ts
│       │   │   ├── screenshots
│       │   │   │   └── ScreenshotService.ts
│       │   │   ├── useSubstrateProjects.ts
│       │   │   └── vision
│       │   │       └── VisionClient.ts
│       │   ├── index.css
│       │   ├── lib
│       │   │   ├── auditMetrics.ts
│       │   │   ├── craniumReceipts.ts
│       │   │   ├── craniumSubstrate.ts
│       │   │   ├── db.ts
│       │   │   ├── gemini.ts
│       │   │   ├── metabolic-memory-v2.test.ts
│       │   │   └── utils.ts
│       │   ├── main.tsx
│       │   ├── models
│       │   │   └── domain.ts
│       │   └── vite-env.d.ts
│       ├── tsconfig.json
│       └── vite.config.ts
├── launcher
│   ├── index.html
│   └── launcher.py
└── scripts
    ├── cranium-trust-gate.sh
    ├── surface-smoke-check.mjs
    ├── ultra-surface-check.mjs
    ├── verify-architecture-behavior.mjs
    ├── verify-architecture-contracts.mjs
    └── verify-executable-architecture.mjs
```

## Required recursive audit for every executable box

For each architectural component, retain these fields in the corresponding contract/status records:

1. Identity / purpose
2. Input contract
3. Output contract
4. Implementation path
5. Deterministic error behavior
6. Tests and verification command
7. Provenance / receipt binding where applicable
8. Authority boundary
9. Integration path
10. Current status: IMPLEMENTED / ARCHITECTURALLY DEFINED / UNVERIFIED

## Immediate hardening queue

1. Complete first-class Authority Receipt integration through all canonical authority transitions.
2. Add consequence-class enforcement to authority issuance.
3. Formalize uncertainty as explicit state.
4. Expand independent A/B substrate non-interference tests.
5. Expand Metabolic Memory V2 adversarial overload, poisoning, recovery, and replay tests.
6. Continue whole-tree recursive executable-box audit.
7. Resolve WorthWyl Forge build environment issue without weakening dependency/security controls.
8. Resolve Cranium Ultra script-policy verification gate safely.
9. Maintain GitHub + phone + Dropbox records as synchronized evidence copies.

## Record integrity note

This document is a **snapshot record**, not a substitute for executable verification. When the architecture changes materially, generate a new dated snapshot rather than silently rewriting history.
