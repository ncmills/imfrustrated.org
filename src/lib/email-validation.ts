// Reserved / disposable email detection.
//
// RFC 2606 + RFC 6761 set aside domains and TLDs that must never resolve to a
// real inbox: `example.com/.org/.net`, and the `.test / .example / .invalid /
// .localhost` TLDs. `test.com` is a well-known placeholder in the same family.
// Disposable-mailbox providers are burner addresses that never belong in an
// intake/lead table. We reject all of these before persisting so QA/bot noise
// never pollutes the intake table or triggers a notification email.

// RFC 2606 / 6761 reserved second-level domains (placeholder domains).
const RESERVED_SLDS = new Set([
  "example.com",
  "example.org",
  "example.net",
  "test.com",
]);

// RFC 2606 / 6761 reserved top-level domains — anything under these is reserved.
const RESERVED_TLDS = new Set([
  "test",
  "example",
  "invalid",
  "localhost",
]);

// Common disposable / throwaway mailbox providers.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.info",
  "sharklasers.com",
  "grr.la",
  "10minutemail.com",
  "temp-mail.org",
  "tempmail.com",
  "tempmailo.com",
  "throwawaymail.com",
  "yopmail.com",
  "getnada.com",
  "nada.email",
  "trashmail.com",
  "maildrop.cc",
  "dispostable.com",
  "fakeinbox.com",
  "mailnesia.com",
  "mohmal.com",
  "mvrht.net",
  "spam4.me",
  "emailondeck.com",
  "moakt.com",
]);

/**
 * True when `email` uses a reserved-test, invalid, or disposable domain and
 * therefore should NOT be persisted as a lead. Callers should acknowledge the
 * request normally (avoid leaking which addresses are filtered) and skip the
 * write. Returns false for any well-formed real-world address.
 */
export function isReservedTestEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;

  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain) return false;

  if (RESERVED_SLDS.has(domain)) return true;
  if (DISPOSABLE_DOMAINS.has(domain)) return true;

  const tld = domain.slice(domain.lastIndexOf(".") + 1);
  if (RESERVED_TLDS.has(tld)) return true;

  // A bare `localhost` with no dot is also reserved.
  if (domain === "localhost") return true;

  return false;
}
