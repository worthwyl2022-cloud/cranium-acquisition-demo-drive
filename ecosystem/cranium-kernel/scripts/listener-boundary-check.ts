import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { normalizeListenerIngress } from '../src/kernel/listener';

const valid = normalizeListenerIngress({
  source: 'external-listener',
  payload: { action: 'propose', target: 'atom-1', scope: 'test' },
  receivedAt: 1700000000000,
});
assert.equal(valid.accepted, true);
if (valid.accepted) {
  assert.equal(valid.normalized.authority, 'NONE');
  assert.equal(valid.normalized.source, 'external-listener');
  assert.equal(valid.normalized.payloadDigest, createHash('sha256').update(valid.normalized.payloadJson).digest('hex'));
}

assert.equal(normalizeListenerIngress(null).accepted, false);
assert.equal(normalizeListenerIngress([]).accepted, false);
assert.equal(normalizeListenerIngress({ payload: {}, receivedAt: 1 }).accepted, false);
assert.equal(normalizeListenerIngress({ source: 'x', receivedAt: 1 }).accepted, false);
assert.equal(normalizeListenerIngress({ source: 'x', payload: {}, receivedAt: -1 }).accepted, false);
assert.equal(normalizeListenerIngress({ source: 'x', payload: {}, receivedAt: 1.5 }).accepted, false);
assert.equal(normalizeListenerIngress({ source: 'x'.repeat(257), payload: {}, receivedAt: 1 }).accepted, false);

const circular: Record<string, unknown> = {};
circular.self = circular;
assert.equal(normalizeListenerIngress({ source: 'x', payload: circular, receivedAt: 1 }).accepted, false);

const oversized = 'x'.repeat(256 * 1024 + 1);
assert.equal(normalizeListenerIngress({ source: 'x', payload: oversized, receivedAt: 1 }).accepted, false);

const protoPayload = JSON.parse('{"__proto__":{"polluted":true},"action":"propose"}');
const protoResult = normalizeListenerIngress({ source: 'x', payload: protoPayload, receivedAt: 1 });
assert.equal(protoResult.accepted, true);
assert.equal(({} as { polluted?: boolean }).polluted, undefined);

console.log('LISTENER / INGRESS BOUNDARY: PASS');
console.log('malformed=blocked oversized=blocked unserializable=blocked authority=NONE prototype-pollution=blocked');
