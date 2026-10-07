# Convertible Cranium Canonical Architecture
Version: 1.0.0
Status: CANONICAL SOURCE OF TRUTH

## 1. Rule

This document defines the architecture that drives the Chromium Edition boot binder, acquisition-grade architecture map, governance contract, integration test plan, runtime safety envelope, and Miracle/Metabolic Memory documentation.

**Executable-box rule:** every architectural box must resolve to executable implementation, an explicit contract, and verification evidence. A conceptual component may be documented as a planned gap, but it may not be represented as implemented.

## 2. Authority model

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

## 3. Engine contracts

### Engine 1: Synapse
Input: untrusted request/context/evidence.
Output: bounded proposal, context derivation, evidence references, attestation.
Authority: NONE.
Failure: reject, quarantine, or return insufficient evidence.

### Engine 2A: Constitutional Authority
Input: normalized proposal plus independently bound context.
Output: constitutional finding.
Question: **May we?**
Authority: NONE. It is a governance decision input, not canonical authority.
Status: ARCHITECTURALLY CANONICAL; independent A substrate implementation remains REQUIRED before this box can be marked IMPLEMENTED.

### Engine 2B: Evidence Grounding
Input: normalized proposal plus evidence set.
Output: grounding finding.
Question: **Is it so?**
Authority: NONE. It is a grounding decision input, not canonical authority.
Status: ARCHITECTURALLY CANONICAL; independent B substrate implementation remains REQUIRED before this box can be marked IMPLEMENTED.

### Engine 3: Cranium Kernel
Input: proposal, A/B findings, authorization context, evidence lineage, version bindings.
Output: canonical transition or explicit rejection/quarantine.
Authority: SOLE CANONICAL AUTHORITY.
Required checks include identity/capability, proposal integrity, evidence binding, version binding, replay protection, current state, convergence, transition construction, durable commit, receipt.

## 4. Dual-substrate boundary

Substrate A and Substrate B must not be clones that deterministically reproduce the same judgment.

A owns constitutional constraints, policy admissibility, scope, prohibited actions, approval requirements, and constitutional versioning.

B owns evidence acquisition/normalization, provenance, integrity, contradiction analysis, freshness/relevance, and evidence sufficiency.

They share the high-level principle **Truth above all** while retaining independently versioned constitutions/policies/formulas.

## 5. Memory architecture

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

## 6. Cross-cutting safety

Circuit Breaker / COMA provides containment, freeze, quarantine, evidence preservation, recovery, and controlled resume. It is not a competing authority engine.

Replay protection, evidence integrity, authorization, durable journaling, receipts, and recovery are cross-cutting controls.

## 7. Trust zones

1. Untrusted ingress.
2. Cognition/proposal zone.
3. Synapse evidence/capability zone.
4. Independent governance substrates.
5. Kernel authority zone.
6. Execution zone.
7. Durable evidence/receipt zone.
8. Operational recovery zone.

No lower-trust zone may mint authority for a higher-trust zone.

## 8. Canonical implementation status

VERIFIED/EXECUTABLE today: Synapse source, Kernel authority path, Kernel replay/COMA/memory controls, WorthWyl Forge substrate and Metabolic Memory v2, executable architecture gate.

REQUIRED BEFORE FULL QUAD-ENGINE CLAIM: independent executable Substrate A, independent executable Substrate B, their contracts, independent policies/formulas, integration tests, adversarial tests, and Kernel convergence verification against both.

The canonical architecture therefore contains the Quad Engine/Dual Substrate model now, while truthfully marking the remaining implementation boundary.
