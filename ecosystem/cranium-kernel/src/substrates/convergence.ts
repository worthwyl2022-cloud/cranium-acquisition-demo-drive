import { sha256 } from "../kernel/sha256";
import type { ConstitutionFinding, DualSubstrateDecision, GroundingFinding } from "./contracts";

export class KernelConvergenceGate {
  evaluate(a: ConstitutionFinding, b: GroundingFinding): DualSubstrateDecision {
    const versionsBound=!!a.constitutionVersion&&!!a.policyVersion&&!!a.formulaVersion&&
      !!b.constitutionVersion&&!!b.policyVersion&&!!b.formulaVersion;
    if(!versionsBound) return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"missing version bindings"};
    if(a.finding==="PROHIBITED"||b.finding==="CONTRADICTED")
      return {status:"DENIED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"governance or grounding failure"};
    if(a.finding==="ESCALATED"||a.finding==="UNRESOLVED"||b.finding==="UNRESOLVED")
      return {status:"ESCALATED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"substrate escalation required"};
    if(b.finding!=="GROUNDED"||a.finding!=="PERMITTED")
      return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"substrates did not converge"};
    const binding=sha256([a.digest,b.digest,a.constitutionVersion,a.policyVersion,b.constitutionVersion,b.policyVersion].join("|"));
    return {status:"CONVERGED",constitutional:a,grounding:b,authorityMayBeConsidered:binding.length===64,reason:"A and B converged; Kernel remains sole authority"};
  }
}