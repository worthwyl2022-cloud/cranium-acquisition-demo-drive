import type {
  AuthorityTransition,
  AuthorityTransitionRequest,
  KernelState,
  ReplayStatus,
} from '../kernel/types';
import { DefaultAuthorityTransitionEngine, KernelStateReducer } from '../kernel/engine';
import { InMemoryReplayGuard } from '../kernel/replayGuard';

export const CANONICAL_AUTHORITY = 'cranium-kernel' as const;

export interface CanonicalReceipt {
  authority: typeof CANONICAL_AUTHORITY;
  transactionId: string;
  requestHash: string;
  journalSequence: number;
  stateHash: string;
  decision: AuthorityTransition['decision']['type'];
}

export interface DurableAuthorityStore {
  load(): { state: KernelState; journalSequence: number; stateHash: string };
  commit(input: {
    request: AuthorityTransitionRequest;
    transition: AuthorityTransition;
    nextState: KernelState;
    replayStatus: ReplayStatus;
  }): CanonicalReceipt;
}

export interface AuthorityProxy {
  evaluate(request: AuthorityTransitionRequest): {
    transition: AuthorityTransition;
    replayStatus: ReplayStatus;
  };
  commit(request: AuthorityTransitionRequest): CanonicalReceipt;
  verifyReceipt(receipt: CanonicalReceipt): boolean;
  readonly authority: typeof CANONICAL_AUTHORITY;
}

/**
 * The only supported external write boundary. Callers cannot provide a state
 * object or reducer; the proxy loads canonical state, evaluates through the
 * Kernel engine, reduces through the Kernel reducer, and durably commits the
 * resulting transition.
 */
export class KernelAuthorityProxy implements AuthorityProxy {
  readonly authority = CANONICAL_AUTHORITY;
  private readonly replayGuard = new InMemoryReplayGuard();
  private readonly engine = new DefaultAuthorityTransitionEngine(this.replayGuard);

  constructor(private readonly store: DurableAuthorityStore) {}

  evaluate(request: AuthorityTransitionRequest) {
    const loaded = this.store.load();
    return this.engine.evaluate(request, loaded.state);
  }

  commit(request: AuthorityTransitionRequest): CanonicalReceipt {
    const loaded = this.store.load();
    const evaluated = this.engine.evaluate(request, loaded.state);
    const nextState = KernelStateReducer.reduce(
      loaded.state,
      evaluated.transition,
      this.replayGuard,
      request,
      evaluated.replayStatus,
    );
    return this.store.commit({
      request,
      transition: evaluated.transition,
      nextState,
      replayStatus: evaluated.replayStatus,
    });
  }

  verifyReceipt(receipt: CanonicalReceipt): boolean {
    if (receipt.authority !== CANONICAL_AUTHORITY) return false;
    const loaded = this.store.load();
    return loaded.journalSequence >= receipt.journalSequence
      && loaded.stateHash === receipt.stateHash;
  }
}
