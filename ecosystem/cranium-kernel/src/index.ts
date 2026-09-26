/** Stable public Core API. Internal UI modules are intentionally excluded. */
export * from './authority';
export * from './governance';
export * from './kernel/types';
export { CanonicalEncoder, DefaultAuthorityTransitionEngine, KernelStateReducer } from './kernel/engine';
export { InMemoryReplayGuard } from './kernel/replayGuard';
export { createInitialKernelState } from './data/initialState';
