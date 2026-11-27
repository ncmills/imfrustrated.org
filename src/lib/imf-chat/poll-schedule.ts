// Client poll cadence for /letter-chat (SWEEP-1615). Pure, so the schedule is unit-testable.
// 10 s for the first minute after the last state change, then 20 s, 40 s, capped at 60 s.
// The caller resets the count on a state change or when the tab becomes visible again.
export const POLL_FAST_MS = 10_000;
export const POLL_FAST_WINDOW_MS = 60_000;
export const POLL_MAX_MS = 60_000;
const FAST_POLLS = POLL_FAST_WINDOW_MS / POLL_FAST_MS; // 6 polls at 10 s = the first minute

/** Delay before the next poll, given how many polls have run since the last reset:
 *  6 x 10 s, then 20 s, 40 s, then 60 s for good. */
export function pollDelayMs(pollsSinceReset: number): number {
  if (pollsSinceReset < FAST_POLLS) return POLL_FAST_MS;
  return Math.min(POLL_MAX_MS, POLL_FAST_MS * 2 ** (pollsSinceReset - FAST_POLLS + 1));
}

export interface PollLoopDeps {
  setTimeout: (fn: () => void, ms: number) => unknown;
  clearTimeout: (h: unknown) => void;
  hidden: () => boolean;
  poll: () => Promise<unknown> | void;
  /** Fires on every poll tick, before the fetch (the UI refreshes its clock). */
  onTick?: () => void;
}

/** A self-rescheduling poll loop. `reset()` = state changed (back to 10 s); `visibilityChanged()`
 *  = call from the visibilitychange event: hidden pauses, visible resets and polls at once.
 *  The first scheduled poll comes POLL_FAST_MS after start, as the old interval did. */
export function createPollLoop(d: PollLoopDeps) {
  let timer: unknown = null;
  let n = 0; // polls since the last reset
  let stopped = false;

  const clear = () => { if (timer !== null) { d.clearTimeout(timer); timer = null; } };
  const schedule = () => {
    clear();
    if (stopped || d.hidden()) return;
    timer = d.setTimeout(async () => {
      timer = null;
      if (stopped || d.hidden()) return;
      n++;
      d.onTick?.();
      try { await d.poll(); } finally { schedule(); }
    }, pollDelayMs(n));
  };
  return {
    start() { stopped = false; n = 0; schedule(); },
    stop() { stopped = true; clear(); },
    reset() { n = 0; schedule(); },
    visibilityChanged() {
      if (d.hidden()) { clear(); return; }
      n = 0;
      clear();
      if (stopped) return;
      d.onTick?.();
      void Promise.resolve(d.poll()).finally(schedule);
    },
  };
}
