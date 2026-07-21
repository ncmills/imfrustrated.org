# Letter library — topic expansion backlog

The `/letters` library grows through the same verified-research pipeline as parking. This is the topic queue for the letters half of `com.secondnick.imfrustrated-expansion`.

## Pipeline (per letter)
1. **Research** (sequential when a code host is bot-blocked): verify the statute against a PRIMARY source (Cornell LII / state legislature / agency `.gov`); write `docs/superpowers/research/letters/<slug>.json`; must pass `scripts/letters-expansion/validate-letter-research.ts` (which enforces the 3-test scope filter + a sourced statute + the deferred-type blacklist).
2. **Solo verify** — re-check the statute cite against the live primary source.
3. **Author** — append the `LetterTemplate` to `src/data/letters/<category>.ts` per `.superpowers/sdd/letters-authoring-guide.md`. Appending to an existing category = auto-wired.
4. **Build + PR** — `next build`, open a PR for review (never auto-merge — YMYL).

## Rules that must not drift
- Pass all 3 scope tests (universal · pre-litigation · formal-legal-tenor). Drop anything that drifts into a **deferred type** (see CLAUDE.md / the authoring guide).
- One PRIMARY-source-verified statute per letter, named in `legalContext`. No free-handed cites.
- `stateNotes[]` where the law varies by state (letters' tailoring axis).
- Don't duplicate an existing slug (86 live as of 2026-07-20; check the category file).

## Current coverage (2026-07-20)
landlord 21 · consumer 18 · employer 10 · airline 6 · credit-card 5 · hoa 5 · neighbor 5 · hotel 4 · **empty categories: insurance, government, school, family** (declared in the union + `categoryMeta` as "Coming soon").

## Queue

### Batch 1 (existing categories — highest universality)
- `improper-rent-increase-notice` (landlord) — state notice-period statutes for rent increases
- `security-deposit-interest-demand` (landlord) — states requiring interest paid on deposits
- `unauthorized-auto-repair-charges` (consumer) — state auto-repair acts (written estimate/authorization required)
- `magnuson-moss-warranty-demand` (consumer) — 15 U.S.C. §2301+ federal warranty act
- `improper-utility-shutoff` (consumer) — state PUC shutoff-protection / winter-moratorium rules
- `unpaid-overtime-demand` (employer) — FLSA overtime (29 U.S.C. §207)

### Batch 2
- `wage-statement-request` (employer) — state pay-stub/itemized-wage-statement statutes
- `improper-tow-refund` (consumer) — state towing statutes (signage/notice/fee caps)
- `rental-application-denial-adverse-action` (landlord) — FCRA adverse-action + state screening rules
- `subscription-price-increase-cancellation` (consumer) — state automatic-renewal laws (price-change notice)
- `product-recall-refund` (consumer) — CPSC recall remedies
- `timeshare-rescission` (consumer) — state timeshare cooling-off statutes

### New-category candidates (need a new category file + categoryMeta + union entry)
- **insurance**: `claim-delay-demand` (state prompt-pay / unfair-claims-practices acts), `total-loss-valuation-dispute`, `appraisal-clause-invocation`. (Avoid ERISA/NSA/MHP — deferred.)
- **government**: `public-records-request` (state open-records acts — NOT federal FOIA, which is deferred), `dmv-hearing-request`, `municipal-fine-appeal`. (Avoid SSDI/Medicare/IRS.)
- **school**: general tuition/refund/records for private providers (avoid FERPA/IDEA/Title IX — deferred).
- **family**: consumer-adjacent only (avoid custody/support litigation-track).

## Notes
- Many of these vary heavily by state → lean on `stateNotes[]`, and keep the `body` state-neutral with a "[cite your state's statute — see state notes]" hook where needed.
- The scope filter is the gate: when in doubt whether a topic is universal + pre-litigation, DEFER it to human review rather than author.
