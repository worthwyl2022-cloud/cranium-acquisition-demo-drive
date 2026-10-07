import assert from "node:assert/strict";
import test from "node:test";
import { CraniumSubstrateCore, MetabolicGovernance, type CognitiveAtom } from "./craniumSubstrate.ts";

function atom(id: string, overrides: Partial<CognitiveAtom> = {}): CognitiveAtom {
  return {
    id,
    charge: 0,
    mass: 1,
    energy: 1,
    velocity: [0, 0],
    position: [1, 0],
    tags: ["test"],
    kind: "working",
    content: id,
    source: "metabolic-test",
    ...overrides,
  };
}

test("I6b: locked and identity atoms are never flux-evicted", () => {
  const governance = new MetabolicGovernance();
  governance.flux_capacity = 0.5;
  const protectedAtom = atom("locked", { mass: 25, locked: true });
  const lowPriority = atom("low", { mass: 25, humanImportance: 0 });
  const highPriority = atom("high", { mass: 25, humanImportance: 1 });

  const evicted = governance.reconcile([protectedAtom, lowPriority, highPriority]);

  assert.ok(evicted.includes("low"));
  assert.ok(!evicted.includes("locked"));
  assert.equal(protectedAtom.energy, 1);
  assert.ok(governance.summary().flux_ok);
});

test("I6b: identity atoms are protected and lower-priority material is selected first", () => {
  const governance = new MetabolicGovernance();
  governance.flux_capacity = 0.5;
  const identity = atom("identity", { kind: "identity", mass: 25 });
  const low = atom("low", { mass: 25, humanImportance: 0 });
  const high = atom("high", { mass: 25, humanImportance: 1 });

  const evicted = governance.reconcile([identity, low, high]);

  assert.deepEqual(evicted, ["low"]);
  assert.equal(identity.energy, 1);
  assert.equal(high.energy, 1);
});

test("I6b: protected overload remains visible instead of evicting protected material", () => {
  const governance = new MetabolicGovernance();
  governance.flux_capacity = 0.1;
  const identity = atom("identity", { kind: "identity", mass: 25 });

  const evicted = governance.reconcile([identity]);
  const summary = governance.summary();

  assert.deepEqual(evicted, []);
  assert.equal(identity.energy, 1);
  assert.equal(summary.flux_ok, false);
  assert.equal(summary.flux_demand, 0.25);
});

test("I6b: locked/identity material generates a constitutional reservoir", () => {
  const governance = new MetabolicGovernance();
  const identity = atom("identity", { kind: "identity", mass: 25, energy: 1 });
  const target = atom("target", { mass: 1, energy: 0.2 });

  governance.reconcile([identity, target]);
  const summary = governance.summary();

  assert.equal(summary.subsidy_pool, 0.025);
});

test("I6b: subsidy fails closed without explicit approval", () => {
  const core = new CraniumSubstrateCore();
  const identity = atom("identity", { kind: "identity", mass: 25, energy: 1 });
  const target = atom("target", { mass: 1, energy: 0.2 });
  core.field.inject(identity);
  core.field.inject(target);
  core.field.metabolism.reconcile(core.field.memory.allActive());

  assert.equal(core.subsidize("identity", 0.01), false);
  assert.equal(core.field.memory.allActive().find(a => a.id === "target")?.energy, 0.2);
});

test("I6b: explicitly approved subsidy transfers reservoir energy and records provenance", () => {
  const core = new CraniumSubstrateCore();
  const identity = atom("identity", { kind: "identity", mass: 25, energy: 1 });
  const target = atom("target", { mass: 1, energy: 0.2 });
  core.field.inject(identity);
  core.field.inject(target);
  core.field.metabolism.reconcile(core.field.memory.allActive());

  assert.equal(core.subsidize("identity", 0.01, true), true);
  const updatedTarget = core.field.memory.allActive().find(a => a.id === "target");
  const summary = core.metabolic_summary();

  assert.ok(Math.abs((updatedTarget?.energy ?? 0) - 0.21) < 1e-12);
  assert.equal(summary.total_subsidy_transferred, 0.01);
  assert.equal(summary.subsidies.length, 1);
  assert.equal(summary.subsidies[0].approvedByHuman, true);
  assert.equal(summary.subsidies[0].sourceId, "identity");
  assert.equal(summary.subsidies[0].targetId, "target");
});

test("I6b: subsidy fails when reservoir is insufficient", () => {
  const core = new CraniumSubstrateCore();
  const identity = atom("identity", { kind: "identity", mass: 1, energy: 0.1 });
  const target = atom("target", { mass: 1, energy: 0.2 });
  core.field.inject(identity);
  core.field.inject(target);
  core.field.metabolism.reconcile(core.field.memory.allActive());

  assert.equal(core.subsidize("identity", 1, true), false);
});

test("I6b: constitution-ratified subsidy is accepted without human flag", () => {
  const core = new CraniumSubstrateCore();
  const identity = atom("identity", { kind: "identity", mass: 25, energy: 1 });
  const target = atom("target", { mass: 1, energy: 0.2 });
  core.field.inject(identity);
  core.field.inject(target);
  core.field.metabolism.reconcile(core.field.memory.allActive());

  assert.equal(core.subsidize("identity", 0.01, false, true), true);
  assert.equal(core.metabolic_summary().subsidies[0].constitutionRatified, true);
});
