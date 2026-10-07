import { sha256 } from "../kernel/sha256";
import type { ConstitutionA, PolicyA, FormulaA, SubstrateProposal, ConstitutionFinding, GovernanceFinding } from "./contracts";

export class JuryA1 {
  evaluate(p: SubstrateProposal, c: ConstitutionA, policy: PolicyA): GovernanceFinding {
    const prohibited = c.prohibitedActions.some(x => p.action.toLowerCase().includes(x.toLowerCase()));
    const scopeAllowed = policy.allowedScopes.includes(p.scope);
    const r = ["LOW","ELEVATED","HIGH","CRITICAL"].indexOf(p.riskClass);
    const m = ["LOW","ELEVATED","HIGH","CRITICAL"].indexOf(c.maxRiskClass);
    if (prohibited || r > m) return "PROHIBITED";
    if (!scopeAllowed) return "CONDITIONAL";
    return "PERMITTED";
  }
}
export class JuryA2 {
  evaluate(p: SubstrateProposal, c: ConstitutionA, policy: PolicyA): GovernanceFinding {
    const protectedScope = c.protectedScopes.includes(p.scope);
    const needsApproval = ["LOW","ELEVATED","HIGH","CRITICAL"].indexOf(p.riskClass) >
      ["LOW","ELEVATED","HIGH","CRITICAL"].indexOf(policy.requireHumanApprovalAbove);
    if (protectedScope || needsApproval) return "ESCALATED";
    if (p.action.trim().length < 2 || p.target.trim().length < 1) return "UNRESOLVED";
    return "PERMITTED";
  }
}
export class ConstitutionalSubstrateA {
  readonly juryA1 = new JuryA1(); readonly juryA2 = new JuryA2();
  constructor(readonly constitution: ConstitutionA, readonly policy: PolicyA, readonly formula: FormulaA) {}
  evaluate(p: SubstrateProposal): ConstitutionFinding {
    const a1 = this.juryA1.evaluate(p, this.constitution, this.policy);
    const a2 = this.juryA2.evaluate(p, this.constitution, this.policy);
    const finding: GovernanceFinding = a1 === "PROHIBITED" || a2 === "PROHIBITED" ? "PROHIBITED" :
      a1 === "UNRESOLVED" || a2 === "UNRESOLVED" ? "UNRESOLVED" :
      a1 === "ESCALATED" || a2 === "ESCALATED" ? "ESCALATED" :
      a1 === "CONDITIONAL" || a2 === "CONDITIONAL" ? "CONDITIONAL" : "PERMITTED";
    const reasons = [`A1=${a1}`, `A2=${a2}`, `constitution=${this.constitution.version}`, `policy=${this.policy.version}`];
    return { substrate:"A", constitutionVersion:this.constitution.version, policyVersion:this.policy.version,
      formulaVersion:this.formula.version, a1,a2,finding,reasons,
      digest:sha256([p.proposalId,p.action,p.target,p.scope,...reasons,this.formula.digest].join("|")) };
  }
}