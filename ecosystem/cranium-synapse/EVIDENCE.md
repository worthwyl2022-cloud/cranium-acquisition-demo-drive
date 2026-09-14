# Evidence

## Reference implementation

The current reference integration is in:

- `worthwyl2022-cloud/cranium-kernel/src/governance/SynapseRuntimeAdapter.ts`
- `worthwyl2022-cloud/cranium-kernel/src/governance/SynapseCoreTransaction.ts`
- `worthwyl2022-cloud/cranium-kernel/scripts/synapse-integration-check.ts`

Run there:

```bash
npm ci
npm run lint
npm run verify:synapse
```

The integration check exercises canonical request binding, policy mismatch
rejection, protected-action fail-safe behavior, receipt chaining, exact-once
receipt consumption, argument tamper rejection, Ed25519 test-path verification,
signature tamper rejection, and key-role separation.

## Not claimed

- Production key custody, key rotation, revocation, or hardware-backed keys
- A general contradiction detector or LLM safety guarantee
- Authority issuance by Synapse
- Standalone runtime extraction complete as of this commit
