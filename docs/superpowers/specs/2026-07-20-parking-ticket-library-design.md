# Parking-Ticket Dispute Library — Design Spec

**Project:** imfrustrated.org
**Date:** 2026-07-20
**Status:** Approved design → ready for implementation plan
**Scope:** Add a parking-ticket dispute library. Ship NYC first as a complete, verified vertical slice; then fan out to the top ~10 US cities.

---

## 1. Goal & fit

Add a programmatic-SEO surface that helps a person **contest a parking ticket themselves** — pre-litigation, no lawyer — by giving them (a) the exact defense statement to submit, (b) the exact submission path and deadline for their city, and (c) the specific city rule / statute their defense rests on.

Passes the project scope filter cleanly:
- **Low-hanging, universal** — nearly every adult who drives has gotten a parking ticket.
- **Pre-litigation, traction-seeking** — the dispute resolves the ticket instead of a lawyer.
- **Formal with legal tenor** — the statement cites the specific municipal/traffic code and the city's own recognized-defense grounds.

Friend-at-brunch test: "Just dispute it — here's exactly what to write and where to send it in NYC" → passes.

**Search rationale:** "how to fight a parking ticket in [city]" and "dispute [city] parking ticket" are high-volume, high-intent queries. The city hub captures the fat head; defense leaves capture the long tail ("broken meter parking ticket nyc").

---

## 2. Core insight — what a parking "letter" is

A parking dispute is **not** a mailed complaint letter. It is a **defense statement pleaded into the city's adjudication system**. Example: NYC tickets are contested at nyc.gov ("Dispute a Parking Ticket") through OATH / the Department of Finance — online with an uploaded written defense + evidence, or by mail requesting a hearing.

So every page must deliver **three** things, not one:

1. **The defense statement** — fill-in-the-blank body with placeholders: `[VIOLATION/SUMMONS #]`, `[PLATE]`, `[DATE/TIME]`, `[LOCATION]`, `[FACTS OF DEFENSE]`.
2. **How + where to submit it in that city** — the specific online portal URL, the mail address, and any in-person option, verified against the city source.
3. **The deadline to contest** — the city's contest window (NYC ≈ 30 days from issuance), surfaced prominently as the conversion hook.

The body-with-placeholders model is identical to existing letters — reused, not reinvented.

---

## 3. Topology (approved: city hub + defense leaves, nested URLs)

```
/letters/parking                 national index — grid of covered cities
/letters/parking/nyc             city hub — agency, how-to-contest, deadline banner, defense grid, FAQ
/letters/parking/nyc/broken-meter          leaf — defense statement + evidence checklist + code cite
/letters/parking/nyc/obscured-signage
/letters/parking/nyc/valid-payment
/letters/parking/nyc/wrong-ticket-details
/letters/parking/nyc/grace-period
/letters/parking/nyc/not-my-vehicle
```

**Canonical defense set** (~6; a city's hub lists only the defenses that city actually recognizes, verified):

| Defense slug | Plain meaning |
|---|---|
| `broken-meter` | Meter/pay station malfunctioned; payment couldn't be made |
| `obscured-signage` | Sign missing, obscured, contradictory, or absent for the restriction cited |
| `valid-payment` | Payment was made (receipt / app record / plate-paid) |
| `wrong-ticket-details` | Plate, make/model, or location on the ticket is wrong (mis-identification) |
| `grace-period` | Within a posted grace period / just returned / actively loading |
| `not-my-vehicle` | Vehicle sold, stolen, or plate cloned at time of issuance |

The canonical set is a **starting menu**, not a mandate. A city may recognize additional defenses (e.g., commercial-vehicle exceptions, alternate-side-suspension days, muni-specific rules) — those are added per city from that city's own published grounds. A city that does **not** recognize one of the canonical defenses simply omits that leaf.

**Page-count estimate:** top-10 × ~6 ≈ **60 leaves + 10 hubs + 1 index ≈ 71 pages.** NYC alone ≈ **1 hub + 6 leaves + 1 shared index.**

---

## 4. Data model — parallel `parking` module

Parking's tailoring axis is **city + agency**, not the existing `stateNotes` (state) axis. Forcing it into the flat `LetterTemplate` array would produce wrong URLs and no real hub. So parking gets a parallel module that reuses the rendering **components** and infra, but has its own data shape. `parking` stays **out** of the `LetterCategory` union.

```
src/data/parking/
  types.ts        ParkingCity, ParkingDefense, ParkingDefenseSlug
  cities/
    nyc.ts        the NYC ParkingCity + its ParkingDefense[]
    ...           (los-angeles.ts, chicago.ts, … added in the fanout wave)
  index.ts        getAllParkingCities(), getParkingCity(slug),
                  getParkingDefense(citySlug, defenseSlug), getParkingUrls()
```

### `ParkingCity` (hub)

```ts
interface ParkingCity {
  slug: string;                 // "nyc", "los-angeles"
  city: string;                 // "New York City"
  state: string;                // "NY"
  agency: string;               // issuing/adjudicating body, e.g. "NYC Department of Finance (adjudicated by OATH)"
  // --- HOW TO CONTEST (all verified against the city source) ---
  submitOnlineUrl: string;      // the official dispute portal
  submitMailAddress: string;    // where a mailed defense/hearing request goes
  submitInPerson?: string;      // in-person hearing option, if any
  howToContest: string[];       // ordered, step-by-step, city-specific
  // --- DEADLINES & CONSEQUENCES ---
  contestDeadlineDays: number;  // days from issuance to contest without escalation
  contestDeadlineNote: string;  // exact wording of the window + what triggers it
  penaltyNote: string;          // what happens if you don't pay/contest (late fees, boot, DMV hold)
  // --- LEGAL BASIS ---
  municipalCodeRefs: CodeRef[]; // the parking rules / admin code that governs disputes here
  // --- CONTENT ---
  recognizedDefenses: ParkingDefenseSlug[]; // which leaves this city gets
  faqs: LetterFAQ[];            // reuse existing LetterFAQ shape
  // --- PROVENANCE (see §6) ---
  sources: SourceRef[];         // primary .gov URLs the facts were verified against
  verifiedAt: string;           // ISO date the facts were last verified
  publishedAt: string;
  updatedAt?: string;
}
```

### `ParkingDefense` (leaf)

```ts
interface ParkingDefense {
  slug: ParkingDefenseSlug;     // "broken-meter"
  citySlug: string;             // back-reference to the hub
  title: string;                // "Fight a broken-meter parking ticket in NYC"
  metaDescription: string;
  whenItApplies: string;        // the factual situation this defense fits
  body: string;                 // the defense statement, with [PLACEHOLDERS]
  evidenceChecklist: string[];  // exactly what to photograph/attach for THIS defense in THIS city
  cityNotes: string;            // city-specific nuance (e.g. NYC "muni-meter receipt" specifics)
  codeCite: CodeRef;            // the specific rule/code this defense invokes in this city
  howToSubmit: string[];        // where this specific plea goes (usually inherits the hub path)
  ifThisDoesntWork: string;     // escalation: request in-person/online hearing, appeal the decision
  faqs: LetterFAQ[];
  sources: SourceRef[];         // primary sources for THIS defense's cite + evidence rules
  verifiedAt: string;
  publishedAt: string;
  updatedAt?: string;
}

interface CodeRef { label: string; citation: string; url: string; }   // e.g. "34 RCNY §4-08", url→official
interface SourceRef { label: string; url: string; }                    // official .gov pages only
```

**Route priority note:** the static `app/letters/parking/...` subtree takes precedence over the dynamic `app/letters/[category]/...` segment in Next.js, so there is no collision, and `parking` never enters `LetterCategory`.

---

## 5. Rendering — reuse existing components

- **Leaf pages** reuse the existing letter section layout + JSON-LD helpers: **Article + HowTo + FAQPage + BreadcrumbList**, visible last-updated stamp, jump-to-anchor menu. Sections: `#statement` (the body), `#how-to-submit`, `#evidence` (checklist), `#legal-basis` (codeCite + sources), `#if-this-doesnt-work` (escalation), `#faq`.
- **City hub** gets **FAQPage + HowTo (how to dispute in [city])** + a prominent **deadline banner** (the conversion hook — "You have ~N days from the date on the ticket") + the defense grid (cards linking to each recognized leaf) + the verified agency/submission block.
- **National index** (`/letters/parking`) — grid of covered cities + short "how contesting works" explainer + a "your city not listed?" note.
- **OG images** — new `opengraph-image.tsx` at hub + leaf, mirroring the existing per-letter OG generator (respect the Satori TTF-not-WOFF2 gotcha).
- **Disclaimer** — reuse the existing "this is not legal advice" letter disclaimer component on every parking page.

---

## 6. Verification — HARD GATE (deep research, per city, per ticket)

**No process fact, deadline, submission path, or code cite may be free-handed from model memory.** This is the load-bearing requirement (YMYL + the project's statute-verification rule). Each city is researched by a dedicated agent via `parallel-research-fanout` — one agent per city — with an explicit **source mandate: that city's official finance / parking-violations / adjudication `.gov` pages only** (plus the official municipal-code host for cites, e.g. American Legal Publishing / Municode for the actual ordinance text).

### 6.1 Per-city research schema (the agent MUST return all of this, each field with its source URL)

1. **Issuing agency & adjudicating body** — who writes the ticket, who hears the dispute.
2. **How to contest — every path** — online portal URL (exact), by-mail address, in-person/hearing option. The precise click-path or form name.
3. **Deadline to contest** — number of days from issuance, what event starts the clock, and what happens at the deadline (default judgment, penalty).
4. **Consequences of non-payment** — late fees schedule, booting/towing threshold, registration/renewal hold.
5. **The city's own list of recognized dispute grounds** — verbatim from the city's "reasons to dispute / defenses" page. This determines which canonical leaves apply + surfaces city-specific extras.
6. **Evidence rules per defense** — what the city says it will accept (photo requirements, receipt formats, affidavit needs).
7. **Governing code / rules** — the specific municipal/administrative/traffic code sections that (a) govern the dispute procedure and (b) underpin each defense, each with an official URL.
8. **Any city-specific quirks** — alternate-side suspensions, muni-meter vs. app payment, commercial-vehicle carve-outs, first-offense reductions.

Each returned field carries a `SourceRef`. Every `ParkingCity.sources` / `ParkingDefense.sources` array and `verifiedAt` date is populated from this research. Where a fact can't be confirmed against a primary source, the field is **omitted** and the defense/claim is **not made** — never guessed.

### 6.2 Tailoring requirement

Each defense leaf's `codeCite` and `evidenceChecklist` are **specific to that city**, not generic. "Broken meter" in NYC cites NYC's traffic rule and references muni-meter receipt handling; "broken meter" in Chicago cites Chicago's ordinance and its pay-box rules. The defense **body** references the correct violation-number nomenclature for the city (NYC "summons number," etc.).

### 6.3 NYC as reference implementation

NYC is fully researched and built first, verified against nyc.gov (Department of Finance parking-violations + OATH hearings) and the NYC Rules (RCNY). It becomes the template the top-9 fanout copies structurally — but **every city is independently researched**; nothing is inherited except structure.

---

## 7. Wiring (small edits to existing files)

- `src/app/sitemap.ts` — add `getParkingUrls()` to the URL array. Auto-indexed; `scripts/submit-indexnow.ts` pings IndexNow on postbuild as today.
- `src/app/letters/page.tsx` — add one "Parking tickets" card linking to `/letters/parking`.
- **Deferred (v1.1, non-blocking):** on-site search index entries for parking; surfacing parking on `/free-tools`; cross-links from consumer / vehicle-related letters.

---

## 8. Build order

1. **NYC vertical slice** — `parking` module + `types.ts`, verified `cities/nyc.ts`, the 3 route levels (index/hub/leaf), OG images, sitemap + letters-hub-card wiring, disclaimer. Ships as a complete, live proof. `npm run build` green.
2. **Top-9 fanout** — Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Francisco, Seattle, Boston, Washington DC. One independently-researched, verified `cities/<city>.ts` each; hubs + leaves auto-render, auto-sitemap.
3. **v1.1 (optional)** — search integration, `/free-tools` surfacing, cross-links.

---

## 9. Out of scope (YAGNI)

- No ticket-payment integration, no accounts, no photo auto-fill.
- No state-court **moving** violations (speeding, red-light) — different adjudication track; parking/standing/administrative only.
- No affiliate "we'll fight it for you" upsell — pure DIY content + templates.

---

## 10. Risks & mitigations

- **Process facts drift** (cities change portals/deadlines). Mitigation: `verifiedAt` stamp on every city + a note to re-verify on a cadence; the monthly preview/parity audits already run portfolio-wide.
- **Over-claiming a defense** a city doesn't recognize. Mitigation: §6.1 item 5 — only defenses on the city's own published grounds get a leaf.
- **Route collision** with `[category]`. Mitigation: verified Next.js static-segment precedence; `parking` excluded from `LetterCategory`.
- **OG 500s** (Satori). Mitigation: reuse the working letter OG generator, TTF fonts only.
