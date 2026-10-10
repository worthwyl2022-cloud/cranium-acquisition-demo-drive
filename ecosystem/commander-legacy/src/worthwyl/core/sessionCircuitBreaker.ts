export type CircuitState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';

export interface SessionCircuitBreakerOptions {
  failureThreshold?: number;
  cooldownMs?: number;
}

export interface SessionCircuitSnapshot {
  state: CircuitState;
  consecutiveFailures: number;
  openedAt: number | null;
  failureThreshold: number;
  cooldownMs: number;
}

export class SessionCircuitOpenError extends Error {
  readonly code = 'SESSION_CIRCUIT_OPEN' as const;

  constructor(message = 'Session circuit is open; action execution is temporarily blocked.') {
    super(message);
    this.name = 'SessionCircuitOpenError';
  }
}

/**
 * Runtime protection for Commander session actions.
 *
 * This is a client/session safety boundary, not canonical authority.
 * Canonical authority remains exclusively in cranium-kernel.
 */
export class SessionCircuitBreaker {
  private state: CircuitState = 'CLOSED';
  private consecutiveFailures = 0;
  private openedAt: number | null = null;
  private readonly failureThreshold: number;
  private readonly cooldownMs: number;

  constructor(options: SessionCircuitBreakerOptions = {}) {
    this.failureThreshold = Math.max(1, options.failureThreshold ?? 3);
    this.cooldownMs = Math.max(250, options.cooldownMs ?? 15_000);
  }

  snapshot(now = Date.now()): SessionCircuitSnapshot {
    this.refresh(now);
    return {
      state: this.state,
      consecutiveFailures: this.consecutiveFailures,
      openedAt: this.openedAt,
      failureThreshold: this.failureThreshold,
      cooldownMs: this.cooldownMs,
    };
  }

  canExecute(now = Date.now()): boolean {
    this.refresh(now);
    return this.state !== 'OPEN';
  }

  private refresh(now: number): void {
    if (this.state === 'OPEN' && this.openedAt !== null && now - this.openedAt >= this.cooldownMs) {
      this.state = 'HALF_OPEN';
    }
  }

  private recordSuccess(): void {
    this.state = 'CLOSED';
    this.consecutiveFailures = 0;
    this.openedAt = null;
  }

  private recordFailure(now: number): void {
    this.consecutiveFailures += 1;
    if (this.consecutiveFailures >= this.failureThreshold) {
      this.state = 'OPEN';
      this.openedAt = now;
    }
  }

  async execute<T>(
    operation: () => Promise<T>,
    rollback?: () => void | Promise<void>
  ): Promise<T> {
    if (!this.canExecute()) {
      throw new SessionCircuitOpenError();
    }

    try {
      const result = await operation();
      this.recordSuccess();
      return result;
    } catch (error) {
      try {
        await rollback?.();
      } finally {
        this.recordFailure(Date.now());
      }
      throw error;
    }
  }

  reset(): void {
    this.recordSuccess();
  }
}
