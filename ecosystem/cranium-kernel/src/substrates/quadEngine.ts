import type { AuthorityTransitionRequest, KernelState, AuthorityTransition } from "../kernel/types";
import { DefaultAuthorityTransitionEngine } from "../kernel/engine";
import { InMemoryReplayGuard } from "../kernel/replayGuard";
import { ConstitutionalSubstrateA } from "./substrateA";
import { EvidenceGroundingSubstrateB } from "./substrateB";
import { KernelConvergenceGate } from "./convergence";
import type { EvidenceRecord, SubstrateProposal } from "./contracts";

export class QuadEngineAuthorityPath {
  constructor(
    readonly substrateA: ConstitutionalSubstrateA,
    readonly substrateB: EvidenceGroundingSubstrateB,
    readonly convergence: KernelConvergenceGate,
    readonly kernel = new DefaultAuthorityTransitionEngine(new InMemoryReplayGuard())
  ) {}

  evaluate(proposal: SubstrateProposal, evidence: EvidenceRecord[], request: Omit<AuthorityTransitionRequest,
    "assessmentDisposition" | "evidence">, state: KernelState): AuthorityTransition {
    const a = this.substrateA.evaluate(proposal);
    const b = this.substrateB.evaluate(proposal, evidence);
    const decision = this.convergence.evaluate(a, b);
    const assessmentDisposition = decision.status === "CONVERGED" ? "allow" :
      decision.status === "DENIED" ? "deny" : "unavailable";
    return this.kernel.evaluate({...request, evidence, assessmentDisposition}, state).transition;
  }
}
