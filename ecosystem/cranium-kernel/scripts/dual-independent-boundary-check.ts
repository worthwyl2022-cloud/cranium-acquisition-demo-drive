import assert from "node:assert/strict";
import { sha256 } from "../src/kernel/sha256";
import { ConstitutionalSubstrateA } from "../src/substrates/substrateA";
import { EvidenceGroundingSubstrateB } from "../src/substrates/substrateB";
import { KernelConvergenceGate } from "../src/substrates/convergence";

const proposal={proposalId:"independence-001",action:"read",target:"repository",scope:"workspace",riskClass:"LOW" as const,requestedEffect:"inspect",timestamp:1700000000000};
const A=new ConstitutionalSubstrateA(
 {version:"A-1.0.0",prohibitedActions:["delete"],protectedScopes:["identity"],maxRiskClass:"HIGH"},
 {version:"A-P-1.0.0",allowedScopes:["workspace"],requireHumanApprovalAbove:"HIGH"},
 {version:"A-F-1.0.0",digest:sha256("formula-a")}
);
const B=new EvidenceGroundingSubstrateB({version:"B-F-1.0.0",digest:sha256("formula-b")});
const evidence=[{id:"e1",uri:"urn:test:repository",sha256Digest:sha256("repository"),verified:true,description:"repository evidence for repository",observedAt:proposal.timestamp,sourceType:"test",relevance:1}];
const a=A.evaluate(proposal);
const b=B.evaluate(proposal,evidence);
assert.equal(a.sealed,true); assert.equal(b.sealed,true);
assert.equal(a.proposalHash,b.proposalHash);
assert.equal(new KernelConvergenceGate().evaluate(a,b).status,"CONVERGED");

const other=B.evaluate({...proposal,target:"different-target"},evidence);
assert.equal(new KernelConvergenceGate().evaluate(a,other).status,"QUARANTINED");

const forged={...b,sealed:false as true};
assert.equal(new KernelConvergenceGate().evaluate(a,forged).status,"QUARANTINED");

console.log("DUAL INDEPENDENT SUBSTRATE BOUNDARY: PASS");
