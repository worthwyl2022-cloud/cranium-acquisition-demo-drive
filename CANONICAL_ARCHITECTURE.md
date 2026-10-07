# Convertible Cranium Canonical Architecture
Version: 1.0.0
Status: CANONICAL SOURCE OF TRUTH

## 1. Named ownership

**William (Wyl) Mathes** is the designated personal IP owner and creator for the Convertible Cranium body of work represented by this acquisition record, subject to attorney verification of chain of title and any applicable prior assignments, third-party rights, licenses, employment/contractor obligations, or other legal encumbrances.

See `IP_OWNERSHIP_AND_PROVENANCE.md` for the canonical ownership/provenance statement. Repository history is technical provenance, not by itself proof of legal title.

## 2. Rule

This document defines the architecture that drives the Chromium Edition boot binder, acquisition-grade architecture map, governance contract, integration test plan, runtime safety envelope, and Miracle/Metabolic Memory documentation.

**Executable-box rule:** every architectural box must resolve to executable implementation, an explicit contract, and verification evidence. A conceptual component may be documented as a planned gap, but it may not be represented as implemented.

## 3. Authority model

Cognition may come from anywhere. Authority comes only through Cranium.

The canonical path is:

```
UNTRUSTED INGRESS
      |
      v
LISTENER
      |
      v
ENGINE 1: SYNAPSE
proposal + context derivation + evidence/attestation
      |
      +--------------------+
      |                    |
      v                    v
ENGINE 2A              ENGINE 2B
SUBSTRATE A            SUBSTRATE B
Constitutional         Evidence
Authority              Grounding
"May We?"              "Is It So?"
      |                    |
      +---------+----------+
                v
ENGINE 3: CRANIUM KERNEL
canonical convergence + authorization + transition + durable commit
                |
                v
GOVERNED EXECUTION
                |
                v
OBSERVATION / RECEIPT / LINEAGE
```

## 4. Engine contracts

### Engine 1: Synapse
Input: untrusted request/context/evidence.
Output: bounded proposal, context derivation, evidence references, attestation.
Authority: NONE.
Failure: reject, quarantine, or return insufficient evidence.

### Engine 2A: Constitutional Authority
Input: normalized proposal plus independently bound context.
Output: constitutional finding from independent A1/A2 evaluators.
Question: **May we?**
Authority: NONE. It is a governance decision input, not canonical authority.
Status: IMPLEMENTED AND VERIFIED. A1/A2 are independently executable within Substrate A, with versioned Constitution A, Policy A, and Formula A.

### Engine 2B: Evidence Grounding
Input: normalized proposal plus evidence set.
Output: grounding finding from independent B1/B2 evaluators.
Question: **Is it so?**
Authority: NONE. It is a grounding decision input, not canonical authority.
Status: IMPLEMENTED AND VERIFIED. B1/B2 are independently executable within Substrate B, with independent version bindings and evidence-grounding logic.

### Engine 3: Cranium Kernel
Input: proposal, A/B findings, authorization context, evidence lineage, version bindings.
Output: canonical transition or explicit rejection/quarantine.
Authority: SOLE CANONICAL AUTHORITY.
Required checks include identity/capability, proposal integrity, evidence binding, version binding, replay protection, current state, convergence, transition construction, durable commit, receipt.

## 5. Dual-substrate boundary

Substrate A and Substrate B must not be clones that deterministically reproduce the same judgment.

A owns constitutional constraints, policy admissibility, scope, prohibited actions, approval requirements, and constitutional versioning.

B owns evidence acquisition/normalization, provenance, integrity, contradiction analysis, freshness/relevance, and evidence sufficiency.

They share the high-level principle **Truth above all** while retaining independently versioned constitutions/policies/formulas.

## 6. Memory architecture

Miracle Memory is governed continuity. It stores identity, continuity, canonical/provisional material, provenance, quarantine state, snapshots, recovery state, and retrieval/update history.

Metabolic Memory v2 is a resource-governance subsystem operating over memory atoms. It controls resource pressure, residency priority, eviction, and constitutionally permitted subsidy. It never grants authority.

Metabolic path:

```
field step
 -> physics / decay
 -> quarantine cleanup
 -> active atoms
 -> metabolic rate
 -> flux demand
 -> reservoir generation
 -> capacity comparison
 -> protected-candidate filtering
 -> deterministic eviction
 -> residual-demand evaluation
 -> ledger
 -> optional governed subsidy
```

Locked/identity atoms are protected from flux eviction. Subsidy sources must be locked/identity atoms. Subsidy targets must be non-protected atoms. Transfer requires the applicable approval/ratification gate.

## 7. Cross-cutting safety

Circuit Breaker / COMA provides containment, freeze, quarantine, evidence preservation, recovery, and controlled resume. It is not a competing authority engine.

Replay protection, evidence integrity, authorization, durable journaling, receipts, and recovery are cross-cutting controls.

## 8. Trust zones

1. Untrusted ingress.
2. Cognition/proposal zone.
3. Synapse evidence/capability zone.
4. Independent governance substrates.
5. Kernel authority zone.
6. Execution zone.
7. Durable evidence/receipt zone.
8. Operational recovery zone.

No lower-trust zone may mint authority for a higher-trust zone.

## 9. Canonical implementation status

VERIFIED/EXECUTABLE today: Synapse source and contract; independent Substrate A with Jury A1/A2; independent Substrate B with Jury B1/B2; Kernel convergence gate; Quad Engine authority path; Kernel authority/replay/COMA/memory controls; WorthWyl Forge substrate and Metabolic Memory v2; executable architecture gate.

The full Quad Engine / Dual Substrate boundary is now implemented and exercised through an executable Kernel authority-path integration check. Negative cases for prohibited governance and invalid evidence are also exercised.

The machine-readable executable inventory is EXECUTABLE_ARCHITECTURE.json. Its current registered set contains 28 boxes. ARCHITECTURAL_COMPONENT_CONTRACTS.json provides machine-readable contracts; ARCHITECTURAL_COMPONENT_CONTRACTS.md and ARCHITECTURAL_COMPONENT_TEST_MATRIX.md provide the human-facing index. scripts/verify-architecture-contracts.mjs enforces code + contract + executable test + integration + authority binding.

This does not automatically convert every conceptual subsystem named in historical or ecosystem documentation into an independently verified box. Unregistered concepts remain documentation-level descriptions until their code, contract, test, and verification evidence are registered.
