/**
 * PostHog-only capture events (MAX-DATA-NO-COOKIES ruling).
 * Fixed props only: no typed values, no letter text, no email/state/issue/message.
 */
import posthog from "posthog-js";

export const EVENT_NAMES = {
  letterOpened: "letter_opened",
  letterCopied: "letter_copied",
  intakeStarted: "intake_started",
  intakeError: "intake_error",
  ctaClicked: "cta_clicked",
} as const;

export type IntakeErrorKind = "validation" | "api" | "network";
export type LetterCopyOutcome = "copied" | "failed";

function capture(event: string, props?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && posthog.__loaded) posthog.capture(event, props);
  } catch {}
}

/** `letter` is the public template id (category/slug), never visitor input. */
export function trackLetterOpened(letter: string) {
  capture(EVENT_NAMES.letterOpened, { letter });
}
export function trackLetterCopied(letter: string, outcome: LetterCopyOutcome) {
  capture(EVENT_NAMES.letterCopied, { letter, outcome });
}
export function trackIntakeStarted() {
  capture(EVENT_NAMES.intakeStarted, { form: "intake" });
}
export function trackIntakeError(kind: IntakeErrorKind) {
  capture(EVENT_NAMES.intakeError, { form: "intake", kind });
}
export function trackCtaClicked(target: string) {
  capture(EVENT_NAMES.ctaClicked, { target });
}
