// IFDO-PASS-7B-2: the waiting block (time, private link, "no need to keep this page open") is true
// only while the letter is queued or being written. Held, flagged, failed, done and day-paused
// views carry their own line and must not be contradicted. null = first moments after submit.
export function showWaitingBlock(poll: { status?: string; paused?: string } | null): boolean {
  if (!poll) return true;
  return poll.status === "queued" && poll.paused !== "day_cap";
}
