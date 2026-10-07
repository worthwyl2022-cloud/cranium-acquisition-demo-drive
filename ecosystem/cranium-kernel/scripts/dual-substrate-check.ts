import assert from "node:assert/strict";
import { createInitialKernelState } from "../src/data/initialState";
import { sha256 } from "../src/kernel/sha256";
import { ConstitutionalSubstrateA } from "../src/substrates/substrateA";
import { EvidenceGroundingSubstrateB } from "../src/substrates/substrateB";
import { KernelConvergenceGate } from "../src/substrates/convergence";
import { QuadEngineAuthorityPath } from "../src/substrates/quadEngine";

const proposal = { proposalId:"p-001", action:"read", target:"repository", scope:"workspace",
  riskClass:"LOW" as const, requestedEffect:"inspect repository", timestamp:1700000000000 };
const A = new ConstitutionalSubstrateA(
  {version:"A-1.0.0", prohibitedActions:["delete"], protectedScopes:["identity"], maxRiskClass:"HIGH"},
  {version:"A-P-1.0.0", allowedScopes:["workspace"], requireHumanApprovalAbove:"HIGH"},
  {version:"A-F-1.0.0", digest:sha256("formula-a")}
);
const B = new EvidenceGroundingSubstrateB({version:"B-F-1.0.0", digest:sha256("formula-b")});
const evidence = [{id:"e1",uri:"urn:test:repository",sha256Digest:sha256("repository"),verified:true,
  description:"repository evidence for repository",observedAt:proposal.timestamp,sourceType:"test",relevance:1}];

const af=A.evaluate(proposal), bf=B.evaluate(proposal,evidence);
const gate=new KernelConvergenceGate().evaluate(af,bf);
assert.equal(af.a1,"PERMITTED"); assert.equal(af.a2,"PERMITTED"); assert.equal(af.finding,"PERMITTED");
assert.equal(bf.b1,"GROUNDED"); assert.equal(bf.b2,"GROUNDED"); assert.equal(bf.finding,"GROUNDED");
assert.equal(gate.status,"CONVERGED"); assert.equal(gate.authorityMayBeConsidered,true);

const state=createInitialKernelState();
const path=new QuadEngineAuthorityPath(A,B,new KernelConvergenceGate());
const tx=path.evaluate(proposal,evidence,{
  requestId:"req-001",idempotencyKey:"idem-001",subjectId:"atom-intent-003",
  requestedAuthority:{authorityClass:"FACTUAL" as any,weight:0.9},justification:"verified repository evidence",
  requesterId:"USER_PRIMARY",timestamp:proposal.timestamp,targetAuthorityVersion:state.authorityVersion
},state);
assert.equal(tx.decision.type,"Granted");
assert.equal(tx.boundary.passed,true);

const deniedA=A.evaluate({...proposal,action:"delete repository"});
const deniedGate=new KernelConvergenceGate().evaluate(deniedA,bf);
assert.equal(deniedGate.status,"DENIED");

const forgedB=B.evaluate(proposal,[{...evidence[0],verified:false}]);
assert.equal(forgedB.finding,"CONTRADICTED");
assert.equal(new KernelConvergenceGate().evaluate(af,forgedB).status,"DENIED");

console.log("DUAL SUBSTRATE + KERNEL PATH CHECK: PASS");
