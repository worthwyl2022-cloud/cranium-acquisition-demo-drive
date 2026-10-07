import { sha256 } from "../kernel/sha256";
import type { EvidenceRecord, FormulaA, SubstrateProposal, GroundingFinding as Result, GroundingVerdict } from "./contracts";

function validDigest(e: EvidenceRecord): boolean {
  return e.sha256Digest.length === 64 && /^[a-f0-9]{64}$/i.test(e.sha256Digest);
}
export class JuryB1 {
  evaluate(p: SubstrateProposal, evidence: EvidenceRecord[]): GroundingVerdict {
    const relevant = evidence.filter(e => e.verified && validDigest(e) && e.relevance >= 0.5);
    if (!relevant.length) return "INSUFFICIENT";
    return relevant.some(e => e.description.toLowerCase().includes(p.target.toLowerCase())) ? "GROUNDED" : "INSUFFICIENT";
  }
}
export class JuryB2 {
  evaluate(p: SubstrateProposal, evidence: EvidenceRecord[]): GroundingVerdict {
    if (evidence.some(e => !validDigest(e) || !e.verified)) return "CONTRADICTED";
    if (evidence.some(e => e.observedAt > p.timestamp + 300000)) return "CONTRADICTED";
    if (evidence.some(e => /contradict|false|forged|revoked/i.test(e.description))) return "CONTRADICTED";
    return evidence.length ? "GROUNDED" : "INSUFFICIENT";
  }
}
export class EvidenceGroundingSubstrateB {
  readonly juryB1 = new JuryB1(); readonly juryB2 = new JuryB2();
  constructor(readonly formula: FormulaA) {}
  evaluate(p: SubstrateProposal, evidence: EvidenceRecord[], versions={constitution:"B-1.0.0",policy:"B-1.0.0"}): Result {
    const b1=this.juryB1.evaluate(p,evidence), b2=this.juryB2.evaluate(p,evidence);
    const finding: GroundingVerdict = b1==="CONTRADICTED"||b2==="CONTRADICTED" ? "CONTRADICTED" :
      b1==="GROUNDED"&&b2==="GROUNDED" ? "GROUNDED" :
      b1==="INSUFFICIENT"||b2==="INSUFFICIENT" ? "INSUFFICIENT" : "UNRESOLVED";
    const reasons=[`B1=${b1}`,`B2=${b2}`,`evidenceCount=${evidence.length}`];
    const ds=evidence.map(e=>e.sha256Digest).sort();
    return {substrate:"B",constitutionVersion:versions.constitution,policyVersion:versions.policy,formulaVersion:this.formula.version,
      b1,b2,finding,evidenceDigests:ds,reasons,digest:sha256([p.proposalId,p.action,...reasons,...ds,this.formula.digest].join("|"))};
  }
}
