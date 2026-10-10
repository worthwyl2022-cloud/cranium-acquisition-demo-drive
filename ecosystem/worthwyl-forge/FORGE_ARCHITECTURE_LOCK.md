# Forge Architecture Lock

**Status:** LOCKED BASELINE  
**Product:** Next-generation Forge  
**Classification:** Convertible Cranium Software product  
**Authority status:** No canonical Convertible Cranium authority

## 1. Product boundary

Next-generation Forge is an independently deployable governed reasoning and execution environment. It is a Convertible Cranium Software product, not a component of the Convertible Cranium core authority stack.

Forge may integrate with Convertible Cranium Kernel, Convertible Cranium Synapse, Convertible Cranium Metabolic Memory, Convertible Cranium Commander, or Convertible Cranium Chromium Edition. Such integration is optional and additive.

Forge must remain independently useful, independently deployable, independently testable, and independently licensable.

## 2. Architectural law

> Independent capability first. Governed integration second.

> Forge may establish product-local governance and authorization, but product-local governance is not Convertible Cranium authority.

> No Forge component may mint, impersonate, or substitute for canonical Convertible Cranium authority.

> No box without code. No code without a contract. No contract without a test.

## 3. Layer model

### L0 — Source & Authority Registry
Product-local classification of documents, configurations, events, models, tools, ownership, source, authority metadata, and versions.

### L1 — Ingestion & Normalization
Converts raw inputs into typed, traceable, versioned, citeable objects with stable identifiers and links to L0 metadata.

### L2 — Domain Ontology & World Model
Represents domain state as a connected graph. This is the state clock: **what exists now?**

### L2.5 — Decision Ledger
Records decisions as first-class objects, including inputs, reasoning/model calls, human interventions, outputs, and downstream effects. This is the event clock: **why is it this way?**

### L3 — Execution & Tooling Plane
Orchestrates declared tools, agents, plans, simulations, transformations, and validations. Every consequential invocation must reference relevant L0/L1/L2 objects and emit a decision-ledger entry.

### L4 — Rules & Policy Engine
Applies product-local rules, policies, constraints, and citations to proposed actions. It may consume Convertible Cranium policy/contract inputs when explicitly integrated, but does not become a second Convertible Cranium authority source.

### L5 — Capability Catalog & Agent Layer
Defines permitted capabilities, agents, workflows, and templates. Each declared capability has preconditions, authority requirements, risk posture, and abstention rules. Agents may propose; they do not invent capabilities.

### L6 — Verification & Review Ladder
Moves work from proposal toward accepted decision through automated verification, human review, and optional Convertible Cranium authority-stack escalation.

### L7 — Outcome Observer & Learning Loop
Records real outcomes, rework, supersession, and performance. Feedback may refine product-local rules, capabilities, and models without silently rewriting historical decisions.

## 4. Two clocks

Forge maintains two explicit temporal views:

- **State clock:** L2 answers what exists now.
- **Event clock:** L2.5 answers why the current state exists.

Historical decisions remain queryable and auditable even when current state changes.

## 5. Decision identity

A consequential Forge decision is a first-class object, not merely a log message.

The minimum conceptual decision record binds:

- decision identity;
- timestamp/version;
- initiating actor;
- proposing agent/model;
- relevant source/input identities;
- capability invoked;
- policy/rule context;
- human intervention;
- resulting decision;
- execution reference;
- outcome/supersession state.

## 6. Actor provenance

Forge must preserve actor provenance across human, agent, model, tool, and capability boundaries.

The system must be able to distinguish:

- who initiated an operation;
- which agent proposed it;
- which model produced a proposal;
- which capability permitted the operation;
- which tool executed it;
- which human intervention occurred;
- which versions were active.

## 7. Authority boundary

Forge has product-local governance.

Convertible Cranium has canonical authority.

A Forge policy decision, approval, workflow acceptance, or local authorization must never be represented as a Convertible Cranium authority decision unless an explicit Convertible Cranium authority integration produced that authority.

When integrated with the core stack, Forge may attach or consume authority receipts, lineage, contracts, and governed execution paths according to the external integration contract.

## 8. Integration surfaces

Optional integrations may include:

- Convertible Cranium Kernel authority receipts and lineage;
- Convertible Cranium Synapse contracts;
- Convertible Cranium Metabolic Memory;
- Convertible Cranium Commander operating surface;
- Convertible Cranium Chromium Edition.

Integration increases assurance or capability. It does not make Forge a core-stack component.

## 9. Deployment boundary

The product must support an independently deployable architecture suitable for:

- local workstation/laptop;
- on-premises server or VM;
- customer-controlled cloud data plane.

Forge owns its product-local binaries/services, configuration, storage, APIs, UI surfaces, ontology, decision ledger, and local governance mechanisms.

## 10. Commercial boundary

Forge is independently licensable.

Its licensing, pricing, support, deployment, and customer contracts may be maintained independently from the Convertible Cranium core stack.

A customer must not be required to purchase the core stack merely to operate baseline Forge functionality.

## 11. Evidence rule

Claims about governed workflows, traceability, decision reconstruction, provenance, verification, or execution control require executable evidence.

This architecture document defines the target architecture. It does not by itself prove that every layer is implemented.

Implementation status must be recorded separately and promoted only through code, contract, test, integration, and verification evidence.

## 12. Change control

This document is the locked baseline for next-generation Forge architecture.

Changes require a documented architectural change record explaining:

1. the problem;
2. why the problem cannot be solved at product or integration level;
3. affected boundaries;
4. evidence supporting the change;
5. compatibility and migration impact.

Product growth does not by itself justify changing the locked Convertible Cranium core stack.

---

**FREEZE:** This document defines the Forge architectural baseline. Future implementation should conform to it unless a formally recorded architecture change supersedes it.
