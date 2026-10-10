import { createHash } from 'node:crypto';

export interface ListenerEnvelope {
  source: string;
  payload: unknown;
  receivedAt: number;
}

export interface NormalizedIngress {
  source: string;
  payloadJson: string;
  payloadDigest: string;
  receivedAt: number;
  authority: 'NONE';
}

export type ListenerResult =
  | { accepted: true; normalized: NormalizedIngress }
  | { accepted: false; reason: string };

const MAX_SOURCE_LENGTH = 256;
const MAX_PAYLOAD_BYTES = 256 * 1024;

export function normalizeListenerIngress(input: unknown): ListenerResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { accepted: false, reason: 'INVALID_ENVELOPE' };
  }

  const envelope = input as Partial<ListenerEnvelope>;
  if (typeof envelope.source !== 'string' || envelope.source.trim().length === 0) {
    return { accepted: false, reason: 'INVALID_SOURCE' };
  }
  if (envelope.source.length > MAX_SOURCE_LENGTH) {
    return { accepted: false, reason: 'SOURCE_TOO_LARGE' };
  }
  const receivedAt = envelope.receivedAt;
  if (typeof receivedAt !== 'number' || !Number.isSafeInteger(receivedAt) || receivedAt < 0) {
    return { accepted: false, reason: 'INVALID_TIMESTAMP' };
  }
  if (envelope.payload === undefined) {
    return { accepted: false, reason: 'MISSING_PAYLOAD' };
  }

  let payloadJson: string;
  try {
    payloadJson = JSON.stringify(envelope.payload);
  } catch {
    return { accepted: false, reason: 'UNSERIALIZABLE_PAYLOAD' };
  }

  const payloadBytes = Buffer.byteLength(payloadJson, 'utf8');
  if (payloadBytes > MAX_PAYLOAD_BYTES) {
    return { accepted: false, reason: 'PAYLOAD_TOO_LARGE' };
  }

  return {
    accepted: true,
    normalized: {
      source: envelope.source.trim(),
      payloadJson,
      payloadDigest: createHash('sha256').update(payloadJson).digest('hex'),
      receivedAt,
      authority: 'NONE',
    },
  };
}
