import assert from "node:assert/strict";
import { createInitialKernelState } from "../src/data/initialState";
import { DefaultAuthorityTransitionEngine } from "../src/kernel/engine";
import { InMemoryReplayGuard } from "../src/kernel/replayGuard";
import { verifyAuthorityReceipt } from "../src/kernel/authorityReceipt";
import { AuthorityClass } from "../src/kernel/types";

const state = createInitialKernelState();
const subject = state.activeAtomIds[0];
const engine = new DefaultAuthorityTransitionEngine(new InMemoryReplayGuard());
const request = {
  requestId: "receipt-check-001", idempotencyKey: "receipt-idem-001", subjectId: subject,
  requestedAuthority: { authorityClass: AuthorityClass.WORKING, weight: 0.7 },
  evidence: [], justification: "receipt integrity verification",
  requesterId: "USER_PRIMARY", timestamp: 1700000000000,
  targetAuthorityVersion: state.authorityVersion,
};
const result = engine.evaluate(request, state);
assert.equal(result.transition.decision.type, "Granted");
assert.ok(result.transition.authorityReceipt);
assert.equal(verifyAuthorityReceipt(result.transition.authorityReceipt!), true);

const tampered = { ...result.transition.authorityReceipt!, authority: { ...result.transition.authorityReceipt!.authority, weight: 0.71 } };
assert.equal(verifyAuthorityReceipt(tampered), false);
console.log("AUTHORITY RECEIPT INTEGRITY: PASS");
