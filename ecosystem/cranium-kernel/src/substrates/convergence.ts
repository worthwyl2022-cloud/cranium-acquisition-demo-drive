import { sha256 } from "../kernel/sha256";
import type { ConstitutionFinding, DualSubstrateDecision, GroundingFinding } from "./contracts";

export class KernelConvergenceGate {
 evaluate(a:ConstitutionFinding,b:GroundingFinding):DualSubstrateDecision {
  const binding=[a.proposalHash,b.proposalHash,a.digest,b.digest,a.constitutionVersion,a.policyVersion,a.formulaVersion,b.constitutionVersion,b.policyVersion,b.formulaVersion].join("|");
  if(a.sealed!==true||b.sealed!==true)return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"unsealed substrate assessment"};
  if(a.proposalHash!==b.proposalHash)return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"substrates assessed different proposals"};
  if(!a.constitutionVersion||!a.policyVersion||!a.formulaVersion||!b.constitutionVersion||!b.policyVersion||!b.formulaVersion)
   return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"missing version bindings"};
  if(a.finding==="PROHIBITED"||b.finding==="CONTRADICTED")
   return {status:"DENIED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"governance or grounding failure",convergenceDigest:sha256(binding)};
  if(a.finding==="ESCALATED"||a.finding==="UNRESOLVED"||b.finding==="UNRESOLVED")
   return {status:"ESCALATED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"substrate escalation required",convergenceDigest:sha256(binding)};
  if(b.finding!=="GROUNDED"||a.finding!=="PERMITTED")
   return {status:"QUARANTINED",constitutional:a,grounding:b,authorityMayBeConsidered:false,reason:"independent substrates did not converge",convergenceDigest:sha256(binding)};
  return {status:"CONVERGED",constitutional:a,grounding:b,authorityMayBeConsidered:true,reason:"independent sealed assessments converged; Kernel remains sole authority",convergenceDigest:sha256(binding)};
 }
}