// Shared by /api/intake (server) and IntakeForm (client). No server-only imports.

/** Fixed tag fleet-truth counts in Vercel logs. Change it only together with that counter. */
export const INTAKE_INSERT_FAILED_TAG = "INTAKE_INSERT_FAILED";

/** Shown by the intake form in place of the success state when the row was not saved. */
export const INTAKE_SAVE_FAILED_MESSAGE =
  "We couldn't save your message. Please try again in a few minutes.";

export type IntakeOutcome =
  | { kind: "success"; test: boolean }
  | { kind: "error"; message: string; reason: "validation" | "api" };

/**
 * How the form reads an /api/intake answer. Success needs a 2xx AND ok:true;
 * anything else is an error whose message the form shows instead of the
 * success state.
 */
export function readIntakeResponse(status: number, data: unknown): IntakeOutcome {
  const d = (data && typeof data === "object" ? data : {}) as { ok?: unknown; error?: unknown; test?: unknown };
  const ok2xx = status >= 200 && status < 300;
  if (ok2xx && d.ok === true) return { kind: "success", test: d.test === true };
  const message =
    typeof d.error === "string" && d.error.trim()
      ? d.error
      : status === 503 || ok2xx
        ? INTAKE_SAVE_FAILED_MESSAGE
        : "Submission failed";
  return { kind: "error", message, reason: status === 400 || status === 422 ? "validation" : "api" };
}
