# IFDO Homepage Clarity Rework — Design Spec

**Date:** 2026-07-20
**Problem:** A colleague visited imfrustrated.org and could not immediately tell what the org does, what it offers, or what tools exist. Confirmed against the current homepage.

## Root cause

The hero leads with a *philosophy* (`"You don't always need a lawyer."`) instead of an *identity + offering*. This fails the 5-second test (who you are / what you do / who you serve / next action, no scrolling) and the clarity-over-cleverness rule (Nielsen Norman: users skim for meaning). The five real offerings are under-surfaced, mis-weighted, or missing.

## What IFDO actually offers (the five things)

1. **The Letter Library** — 74 attorney-written, statute-citing letter templates across 8 live categories (landlord 21, consumer 18, employer 10, airline 6, credit-card 5, neighbor 5, hoa 5, hotel 4). On-site. *Flagship.*
2. **Ask a Volunteer Attorney** — free email intake; a real lawyer reads your note and tells you the next step. On-site (`#contact` → `/api/intake`). *Origin service.*
3. **I Don't Have A Will** — browser-based state-specific will generator. External: idonthaveawill.com.
4. **A.I. SSDI** — SSDI approval-odds / judge-lookup / appeal tools from public SSA data. External: aissdi.com.
5. **DoppelWriter** — rewrites a letter in your own voice. External: doppelwriter.com. **Currently missing from homepage.**

## Locked decisions (approved 2026-07-20)

- **Hero H1:** "Free legal help — before you pay for a lawyer."
  **Subhead:** "Attorney-written letters, self-help tools, and a real lawyer you can actually ask. All free. Start with the problem you're facing."
  **CTAs:** `[Browse letters & tools]` → `#offerings` · `[Ask an attorney — free]` → `#contact`
- **Identity framing:** describe by function. **No** "nonprofit"/"501(c)(3)" claim anywhere. Eyebrow/identity line: "Free legal tools, built by volunteer attorneys."
- **Scope:** homepage + navigation/surfacing (not a full cross-page copy sweep).

## New homepage IA (Breathing Room design system — clarity surgery, not a re-skin)

1. **Hero** — eyebrow (identity) + H1 + subhead + two CTAs. Accent-serif italic on one key phrase only.
2. **Dispute chips (now functional)** — caption "Jump straight to the letter for your…"; each chip links to its real `/letters/[category]` (Landlord→landlord, Credit card→credit-card, HOA→hoa, Airline→airline, Employer→employer, Neighbor→neighbor, Hotel→hotel). Turns decoration into a working router.
3. **`#offerings` — "Everything IFDO gives you"** — the core fix. One scannable grid, all five offerings, each: name + one-line what-it-is + who-it's-for + CTA.
   - Letter Library is the largest/hero card, shows the 8 categories + "74 letters" so depth is visible.
   - Will / SSDI / DoppelWriter as external self-help tools (labeled as sister tools).
   - "Ask a Volunteer Attorney" as a visually distinct **human** option (warm sage panel), not just another tool tile.
4. **How it works** (`#how`) — 3 steps + "Read the full walkthrough →" to `/how-it-works`.
5. **Proof + honesty strip** — 2–3 strongest real testimonials (existing, named, genuine) + an explicit "what we are / what we're not" line (not a law firm, no retainer, no attorney-client relationship formed). Trust + honesty in one.
6. **Contact** (`#contact`) — the "Ask a Volunteer Attorney" form; heading renamed to match the offering.

## Navigation / surfacing fixes

- Header links resolve site-wide (real pages, not homepage-only dead anchors): **Free tools** → `/free-tools`, **How it works** → `/how-it-works`, **Letters** → `/letters`, add **FAQ** → `/faq`, **About** → `/about`; primary pill **Talk to us** → `/#contact`.
- Add **DoppelWriter** to the homepage offerings (parity with `/free-tools`).
- Surface **FAQ** in header + keep in footer.

## Out of scope

- Copy rewrites on `/about`, `/faq`, `/free-tools` bodies (that's the "full clarity pass" option, deferred).
- Any change to letter data, will/SSDI/DoppelWriter external sites.
- Any nonprofit/501(c)(3) legitimacy claim.

## Verification

- 5-second test: hero states what IFDO is + all 5 offerings scannable without scrolling past section 3.
- All dispute chips navigate to a real, populated category page.
- Header nav works from a non-homepage route.
- Mobile + desktop screenshot review at production crop.
- `npm run build` clean.
