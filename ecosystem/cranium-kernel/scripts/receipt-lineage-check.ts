import assert from "node:assert/strict";
import { unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { KernelAuthorityProxy } from "../src/authority/authorityProxy";
import { SQLiteAuthorityStore } from "../src/authority/sqliteAuthorityStore";
import { createInitialKernelState } from "../src/data/initialState";
import { verifyAuthorityReceipt } from "../src/kernel/authorityReceipt";
import { AuthorityClass } from "../src/kernel/types";

const dbPath = join(tmpdir(), `convertible-cranium-receipt-${process.pid}.db`);
try {
  const initialState = createInitialKernelState();
  const subject = initialState.activeAtomIds[0];
  const store = new SQLiteAuthorityStore(dbPath, initialState);
  const proxy = new KernelAuthorityProxy(store);

  const request = {
    requestId: "receipt-lineage-001",
    idempotencyKey: "receipt-lineage-idem-001",
    subjectId: subject,
    requestedAuthority: { authorityClass: AuthorityClass.WORKING, weight: 0.7 },
    evidence: [],
    justification: "canonical receipt lineage verification",
    requesterId: "USER_PRIMARY",
    timestamp: 1700000000000,
    targetAuthorityVersion: initialState.authorityVersion,
  };

  const canonical = proxy.commit(request);
  assert.equal(proxy.verifyReceipt(canonical), true);

  const evaluated = proxy.evaluate(request);
  const projection = evaluated.transition.authorityReceipt;
  assert.ok(projection);
  assert.equal(verifyAuthorityReceipt(projection!), true);

  // The durable SQLite receipt is canonical. The Kernel AuthorityReceipt is
  // a cryptographic projection of the same transition, never an independent
  // authority source.
  assert.equal(projection!.transitionId, canonical.transactionId);
  assert.equal(projection!.requestHash.hexDigest, canonical.requestHash);
  assert.equal(projection!.decision, canonical.decision);
  assert.equal(evaluated.transition.receiptSignature.length, 64);

  console.log("RECEIPT LINEAGE: PASS canonical-durable=1 projection-bound=1 independent-authority=0");
} finally {
  try { unlinkSync(dbPath); } catch {}
  try { unlinkSync(`${dbPath}-wal`); } catch {}
  try { unlinkSync(`${dbPath}-shm`); } catch {}
}
