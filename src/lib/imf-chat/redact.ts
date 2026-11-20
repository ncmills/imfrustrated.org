// Server-side redaction (spec §4): runs on every turn before storage and before any model call.
export const REDACTED = "[REDACTED]";

function luhn(digits: string): boolean {
  let sum = 0;
  let dbl = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits.charCodeAt(i) - 48;
    if (dbl) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
    dbl = !dbl;
  }
  return sum % 10 === 0;
}

const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const SSN = /\b\d{3}[- ]\d{2}[- ]\d{4}\b/g;
const CARD = /\b\d(?:[ -]?\d){12,18}\b/g;
const PHONE = /(?:\+?1[\s.-]?)?(?:\(\d{3}\)|\b\d{3})[\s.-]?\d{3}[\s.-]?\d{4}\b/g;
const LONG_DIGITS = /\b\d{8,}\b/g;
const DOB =
  /\b(?:dob|d\.o\.b\.?|date of birth|birth ?date|born(?: on)?)\s*[:\-]?\s*(?:\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}|[A-Za-z]{3,9}\.? \d{1,2},? \d{4}|\d{4}-\d{2}-\d{2})/gi;

export function redact(text: string): { text: string; redacted: boolean } {
  const out = text
    .replace(EMAIL, REDACTED)
    .replace(DOB, REDACTED)
    .replace(SSN, REDACTED)
    .replace(CARD, (m) => (luhn(m.replace(/\D/g, "")) ? REDACTED : m))
    .replace(PHONE, REDACTED)
    .replace(LONG_DIGITS, REDACTED);
  return { text: out, redacted: out !== text };
}
