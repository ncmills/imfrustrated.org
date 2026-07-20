# Parking-Ticket Dispute Library — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a city-tailored, statute-verified parking-ticket dispute library — NYC first as a complete live proof, then the top ~10 US cities.

**Architecture:** A parallel `src/data/parking/` module (its own `ParkingCity`/`ParkingDefense` types, city+agency tailoring axis) feeding a new static `app/letters/parking/...` route subtree (national index → city hub → defense leaf). Reuses the existing letter rendering components, JSON-LD patterns, OG generator, sitemap, and IndexNow. All city facts (agency, submission path, deadline, penalties, recognized defenses, code cites) are researched by a dedicated agent per city against official `.gov` sources **before** any letter is authored — no free-handed facts.

**Tech Stack:** Next.js 16 (App Router, SSG via `generateStaticParams`), React 19, TypeScript, Tailwind v4, `next/og` (Satori), `tsx` for assertion scripts. No test framework — the verification loop is `npm run build` + `npx tsc --noEmit` + standalone `tsx` assertion scripts.

## Global Constraints

- **No free-handed legal/process facts.** Every agency name, portal URL, mail address, deadline, penalty, recognized-defense, and code cite MUST come from an official `.gov` source (or the official municipal-code host — American Legal / Municode) and carry a `SourceRef` URL. Unverifiable field → omit the field and drop the claim. (Spec §6; project CLAUDE.md statute-verification rule.)
- **`parking` MUST NOT be added to the `LetterCategory` union** in `src/data/letters/types.ts`. Parking is a parallel module; the static `app/letters/parking` route takes precedence over the dynamic `[category]` segment.
- **Scope filter:** parking/standing/administrative tickets only. No moving violations (speeding, red-light). No payment integration, no accounts, no affiliate upsell. (Spec §9.)
- **Design system "Breathing Room":** reuse tokens/classes — `sage`/`sage-2`/`clay`/`font-disp`/`font-accent`/`font-body`, components `Header`, `Reveal`, `Interactions`, `SiteFooter` from `@/components/ClientSections`. Match the existing leaf page's visual grammar.
- **OG images:** TTF fonts only (`_fonts/Bricolage.ttf`, `_fonts/Hanken.ttf`) — Satori rejects WOFF2. Mirror `src/app/letters/[category]/[slug]/opengraph-image.tsx`.
- **Every parking page** carries the existing "not legal advice" disclaimer copy and the `info@imfrustrated.org` volunteer-attorney CTA.
- **Deploy:** `git push origin main` auto-builds + auto-promotes on Vercel. Do not run `vercel --prod` manually. Verify build state READY after push (silent Vercel build errors are a known portfolio gotcha).
- **Every city record** carries a `verifiedAt` ISO date and a `sources[]` array.

## Canonical defense slugs (union type — locked)

`broken-meter` · `obscured-signage` · `valid-payment` · `wrong-ticket-details` · `grace-period` · `not-my-vehicle`
A city may add extra slugs from its own published grounds; a city omits any it doesn't recognize.

## City roster (build order)

1. `nyc` (New York City, NY) — reference implementation, built end-to-end first.
2. Fanout wave: `los-angeles` (CA), `chicago` (IL), `houston` (TX), `phoenix` (AZ), `philadelphia` (PA), `san-francisco` (CA), `seattle` (WA), `boston` (MA), `washington-dc` (DC).

## File structure

**Create:**
- `src/data/parking/types.ts` — `ParkingCity`, `ParkingDefense`, `ParkingDefenseSlug`, `CodeRef`, `SourceRef`
- `src/data/parking/index.ts` — accessors + `getParkingUrls()`
- `src/data/parking/cities/nyc.ts` … `washington-dc.ts` — one verified city per file
- `src/app/letters/parking/page.tsx` — national index
- `src/app/letters/parking/opengraph-image.tsx` — index OG
- `src/app/letters/parking/[city]/page.tsx` — city hub
- `src/app/letters/parking/[city]/opengraph-image.tsx` — hub OG
- `src/app/letters/parking/[city]/[defense]/page.tsx` — defense leaf
- `src/app/letters/parking/[city]/[defense]/opengraph-image.tsx` — leaf OG
- `scripts/parking-checks/validate-research.ts` — research-record validator (the research gate)
- `scripts/parking-checks/assert-module.ts` — data-module assertions (the module test)
- `docs/superpowers/research/parking/<city>.json` — one verified research record per city (research phase output)

**Modify:**
- `src/app/sitemap.ts` — add parking URLs
- `src/app/letters/page.tsx` — add "Parking tickets" card linking to `/letters/parking`

---

## Phase 0 — Worth-it check

See `docs/superpowers/plans/2026-07-20-parking-is-this-worth-it.md`. Verdict: proceed with the full plan; the value *is* the per-city verification. Cost control = ship NYC (Tasks 1–8) as a complete proof before the 9-city spend (Tasks 9–11).

---

## Task 1: Parking module — types + accessors skeleton

**Files:**
- Create: `src/data/parking/types.ts`
- Create: `src/data/parking/index.ts`
- Create: `scripts/parking-checks/assert-module.ts`

**Interfaces:**
- Produces: `ParkingCity`, `ParkingDefense`, `ParkingDefenseSlug`, `CodeRef`, `SourceRef` (types); `getAllParkingCities(): ParkingCity[]`, `getParkingCity(slug: string): ParkingCity | undefined`, `getParkingDefense(citySlug: string, defenseSlug: string): ParkingDefense | undefined`, `getParkingUrls(): { url: string; lastModified: string }[]`

- [ ] **Step 1: Write `src/data/parking/types.ts`**

```ts
import type { LetterFAQ } from "@/data/letters/types";

export type ParkingDefenseSlug =
  | "broken-meter"
  | "obscured-signage"
  | "valid-payment"
  | "wrong-ticket-details"
  | "grace-period"
  | "not-my-vehicle"
  | (string & {}); // allow city-specific extras from published grounds

export interface CodeRef {
  label: string;     // e.g. "34 RCNY §4-08(h) — Metered parking"
  citation: string;  // e.g. "34 RCNY §4-08"
  url: string;       // official host (nyc.gov rules / American Legal / Municode)
}

export interface SourceRef {
  label: string;     // e.g. "NYC Dept. of Finance — Dispute a Parking Ticket"
  url: string;       // official .gov page
}

export interface ParkingDefense {
  slug: ParkingDefenseSlug;
  citySlug: string;
  title: string;
  metaDescription: string;
  whenItApplies: string;
  body: string;                 // defense statement with [PLACEHOLDERS]
  evidenceChecklist: string[];
  cityNotes: string;
  codeCite: CodeRef;
  howToSubmit: string[];
  ifThisDoesntWork: string;
  faqs: LetterFAQ[];
  sources: SourceRef[];
  verifiedAt: string;           // ISO date
  publishedAt: string;
  updatedAt?: string;
}

export interface ParkingCity {
  slug: string;
  city: string;
  state: string;
  agency: string;
  submitOnlineUrl: string;
  submitMailAddress: string;
  submitInPerson?: string;
  howToContest: string[];
  contestDeadlineDays: number;
  contestDeadlineNote: string;
  penaltyNote: string;
  municipalCodeRefs: CodeRef[];
  recognizedDefenses: ParkingDefenseSlug[];
  defenses: ParkingDefense[];   // authored leaves for this city
  faqs: LetterFAQ[];
  sources: SourceRef[];
  verifiedAt: string;
  publishedAt: string;
  updatedAt?: string;
}
```

- [ ] **Step 2: Write `src/data/parking/index.ts`**

```ts
import type { ParkingCity, ParkingDefense } from "./types";
export type { ParkingCity, ParkingDefense, ParkingDefenseSlug, CodeRef, SourceRef } from "./types";

// City imports are added as each city file lands (Task 3, Task 10).
const allCities: ParkingCity[] = [
  // ...nycCity  (added in Task 3)
];

export function getAllParkingCities(): ParkingCity[] {
  return allCities;
}

export function getParkingCity(slug: string): ParkingCity | undefined {
  return allCities.find((c) => c.slug === slug);
}

export function getParkingDefense(citySlug: string, defenseSlug: string): ParkingDefense | undefined {
  return getParkingCity(citySlug)?.defenses.find((d) => d.slug === defenseSlug);
}

export function getParkingUrls(): { url: string; lastModified: string }[] {
  const base = "https://imfrustrated.org";
  const now = new Date().toISOString();
  const urls: { url: string; lastModified: string }[] = [
    { url: `${base}/letters/parking`, lastModified: now },
  ];
  for (const c of allCities) {
    urls.push({ url: `${base}/letters/parking/${c.slug}`, lastModified: c.updatedAt ?? c.publishedAt });
    for (const d of c.defenses) {
      urls.push({
        url: `${base}/letters/parking/${c.slug}/${d.slug}`,
        lastModified: d.updatedAt ?? d.publishedAt,
      });
    }
  }
  return urls;
}
```

- [ ] **Step 3: Write the failing assertion `scripts/parking-checks/assert-module.ts`**

```ts
import { getAllParkingCities, getParkingCity, getParkingDefense, getParkingUrls } from "../../src/data/parking/index";

let failures = 0;
function check(name: string, cond: boolean) {
  if (!cond) { console.error(`FAIL: ${name}`); failures++; }
  else console.log(`ok: ${name}`);
}

// Skeleton-stage expectations (Task 1): accessors exist and are consistent with 0 cities.
check("getAllParkingCities returns array", Array.isArray(getAllParkingCities()));
check("getParkingUrls includes the index url",
  getParkingUrls().some((u) => u.url === "https://imfrustrated.org/letters/parking"));
check("getParkingCity(unknown) is undefined", getParkingCity("nope") === undefined);
check("getParkingDefense(unknown) is undefined", getParkingDefense("nope", "nope") === undefined);

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log("\nAll module assertions passed.");
```

- [ ] **Step 4: Run it to verify it passes (skeleton stage)**

Run: `npx tsx scripts/parking-checks/assert-module.ts`
Expected: all `ok:` lines, `All module assertions passed.`

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/data/parking/types.ts src/data/parking/index.ts scripts/parking-checks/assert-module.ts
git commit -m "feat(parking): add parking data module types + accessors skeleton"
```

---

## Task 2: NYC research record (research gate)

This task is dispatched to a **research subagent** (parallel-research-fanout, one city). It produces a verified JSON record; no code renders yet. NYC is done alone first so its quality is reviewed before the 9-city fanout.

**Files:**
- Create: `scripts/parking-checks/validate-research.ts`
- Create: `docs/superpowers/research/parking/nyc.json`

**Interfaces:**
- Produces: a research record matching the shape asserted by `validate-research.ts` (below). Consumed by Task 3 to author `cities/nyc.ts`.

- [ ] **Step 1: Write the research-record validator `scripts/parking-checks/validate-research.ts`**

```ts
import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) { console.error("usage: tsx validate-research.ts <record.json>"); process.exit(2); }
const r = JSON.parse(readFileSync(path, "utf8"));

let failures = 0;
const fail = (m: string) => { console.error(`FAIL: ${m}`); failures++; };
const need = (cond: boolean, m: string) => { cond ? console.log(`ok: ${m}`) : fail(m); };
const isSource = (s: unknown) =>
  !!s && typeof (s as any).url === "string" && (s as any).url.startsWith("http");

// City-level required facts (spec §6.1)
for (const k of ["slug","city","state","agency","submitOnlineUrl","submitMailAddress",
                 "contestDeadlineDays","contestDeadlineNote","penaltyNote","verifiedAt"]) {
  need(r[k] !== undefined && r[k] !== "", `city.${k} present`);
}
need(Array.isArray(r.howToContest) && r.howToContest.length >= 2, "city.howToContest has steps");
need(Array.isArray(r.municipalCodeRefs) && r.municipalCodeRefs.length >= 1, "city.municipalCodeRefs present");
need(Array.isArray(r.sources) && r.sources.length >= 1 && r.sources.every(isSource),
  "city.sources are official URLs");
need(Array.isArray(r.recognizedDefenses) && r.recognizedDefenses.length >= 1, "city.recognizedDefenses present");

// Every recognized defense must have a fully-sourced record
for (const slug of r.recognizedDefenses ?? []) {
  const d = (r.defenses ?? []).find((x: any) => x.slug === slug);
  if (!d) { fail(`defense ${slug} record missing`); continue; }
  need(!!d.whenItApplies, `defense ${slug}.whenItApplies`);
  need(Array.isArray(d.evidenceChecklist) && d.evidenceChecklist.length >= 1, `defense ${slug}.evidenceChecklist`);
  need(!!d.codeCite && !!d.codeCite.citation && isSource(d.codeCite), `defense ${slug}.codeCite sourced`);
  need(Array.isArray(d.sources) && d.sources.length >= 1 && d.sources.every(isSource), `defense ${slug}.sources`);
}

if (failures) { console.error(`\n${failures} failure(s) — record NOT accepted`); process.exit(1); }
console.log("\nResearch record valid.");
```

- [ ] **Step 2: Run the validator against a nonexistent record to confirm it fails**

Run: `npx tsx scripts/parking-checks/validate-research.ts docs/superpowers/research/parking/nyc.json`
Expected: FAIL (file not found / missing fields) — the gate works.

- [ ] **Step 3: Dispatch the NYC research subagent**

Dispatch a subagent (general-purpose) with this mandate — it MUST use WebFetch/WebSearch against official sources only:

> Research how a person contests a **parking ticket in New York City** themselves, pre-litigation. Sources allowed: **nyc.gov only** (NYC Department of Finance "Dispute a Parking Ticket", NYC OATH hearings) and the **official NYC Rules (RCNY, rules.cityofnewyork.us) / NYC Administrative Code**. Do NOT use blogs, law-firm marketing, or memory. Return a single JSON object written to `docs/superpowers/research/parking/nyc.json` with EXACTLY this shape:
> ```
> { slug:"nyc", city:"New York City", state:"NY", agency, submitOnlineUrl, submitMailAddress,
>   submitInPerson?, howToContest:[...ordered steps], contestDeadlineDays:<int>,
>   contestDeadlineNote, penaltyNote, municipalCodeRefs:[{label,citation,url}],
>   recognizedDefenses:[...canonical slugs the city actually recognizes],
>   defenses:[{ slug, whenItApplies, evidenceChecklist:[...], cityNotes,
>     codeCite:{label,citation,url}, sources:[{label,url}] }],
>   sources:[{label,url}], verifiedAt:"2026-07-20" }
> ```
> For each of the six canonical defenses (`broken-meter`, `obscured-signage`, `valid-payment`, `wrong-ticket-details`, `grace-period`, `not-my-vehicle`): include it ONLY if NYC's own published dispute grounds support it, cite the specific RCNY/Admin Code section, and list the exact evidence NYC says it accepts. Add any NYC-specific extra ground (e.g. muni-meter receipt, commercial-vehicle rules) as an additional defense with its own cite. Every fact carries a source URL. Omit anything you cannot confirm on nyc.gov.

- [ ] **Step 4: Run the validator against the produced record**

Run: `npx tsx scripts/parking-checks/validate-research.ts docs/superpowers/research/parking/nyc.json`
Expected: `Research record valid.`

- [ ] **Step 5: Human/reviewer spot-check** — open 2 source URLs from the record and confirm the deadline + one code cite match the page. Fix the record if not.

- [ ] **Step 6: Commit**

```bash
git add scripts/parking-checks/validate-research.ts docs/superpowers/research/parking/nyc.json
git commit -m "feat(parking): verified NYC dispute research record (nyc.gov / RCNY sourced)"
```

---

## Task 3: Author `cities/nyc.ts` from the verified record

**Files:**
- Create: `src/data/parking/cities/nyc.ts`
- Modify: `src/data/parking/index.ts` (import + push `nycCity`)
- Modify: `scripts/parking-checks/assert-module.ts` (add NYC assertions)

**Interfaces:**
- Consumes: `docs/superpowers/research/parking/nyc.json`, types from Task 1.
- Produces: `export const nycCity: ParkingCity`.

- [ ] **Step 1: Author `src/data/parking/cities/nyc.ts`** — transcribe every field from `nyc.json`, and write each defense `body` as a real defense statement. Structure (values come from the verified record; the `body` shape is fixed):

```ts
import type { ParkingCity } from "../types";

export const nycCity: ParkingCity = {
  slug: "nyc",
  city: "New York City",
  state: "NY",
  agency: "<from record: e.g. NYC Department of Finance, adjudicated by OATH>",
  submitOnlineUrl: "<from record>",
  submitMailAddress: "<from record>",
  submitInPerson: "<from record, or omit>",
  howToContest: [ /* ordered steps from record */ ],
  contestDeadlineDays: 0 /* from record */,
  contestDeadlineNote: "<from record — exact window wording>",
  penaltyNote: "<from record>",
  municipalCodeRefs: [ /* {label,citation,url} from record */ ],
  recognizedDefenses: [ /* slugs from record */ ],
  faqs: [ /* 4-6 LetterFAQ from record + plain-language */ ],
  sources: [ /* SourceRef[] from record */ ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
  defenses: [
    {
      slug: "broken-meter",
      citySlug: "nyc",
      title: "Fight a broken-meter parking ticket in NYC",
      metaDescription: "<~150 char, includes 'broken meter parking ticket NYC'>",
      whenItApplies: "<from record>",
      body: `To: New York City Office of Administrative Trials and Hearings (OATH)
Re: Notice of Violation No. [VIOLATION/SUMMONS NUMBER]
Plate: [PLATE] ([STATE])   Date/Time of issuance: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to the above parking violation and requesting that it be dismissed.

On [DATE] at approximately [TIME], the parking meter / Muni-Meter pay station governing [LOCATION] was inoperable: [DESCRIBE — e.g. the screen was blank / it rejected all payment / it printed no receipt]. Because the City-provided payment device did not function, I was unable to pay for parking through no fault of my own.

Under [CODE CITE FROM RECORD], a driver is not liable for a metered-parking violation where the meter or pay station was out of service. I ask that this violation be dismissed on that basis.

Attached: [LIST EVIDENCE — e.g. time-stamped photo of the meter screen, receipt from the nearest working Muni-Meter].

Respectfully,
[YOUR NAME]
[ADDRESS] · [PHONE] · [EMAIL]`,
      evidenceChecklist: [ /* from record */ ],
      cityNotes: "<from record — e.g. NYC Muni-Meter receipt handling>",
      codeCite: { /* from record */ label: "", citation: "", url: "" },
      howToSubmit: [ /* usually inherits city.howToContest; from record */ ],
      ifThisDoesntWork: "If OATH finds you liable after the written defense, you may request an in-person or online hearing and, if needed, appeal to the OATH Appeals Division within the stated appeal window.",
      faqs: [ /* 2-4 LetterFAQ */ ],
      sources: [ /* from record */ ],
      verifiedAt: "2026-07-20",
      publishedAt: "2026-07-20",
    },
    // ... one entry per slug in recognizedDefenses, each body tailored to that defense + NYC cite
  ],
};
```

Author one `defenses[]` entry per slug in `recognizedDefenses`. Each `body` follows the same header block but a defense-specific middle paragraph and the correct `codeCite`. Fill EVERY `<from record>` — no placeholders left in the shipped file except the intended user `[PLACEHOLDERS]` inside `body`.

- [ ] **Step 2: Wire into `src/data/parking/index.ts`**

```ts
import { nycCity } from "./cities/nyc";
const allCities: ParkingCity[] = [nycCity];
```

- [ ] **Step 3: Extend `scripts/parking-checks/assert-module.ts`** (append before the failures check):

```ts
const nyc = getParkingCity("nyc");
check("nyc city present", !!nyc);
check("nyc has >=1 defense", !!nyc && nyc.defenses.length >= 1);
check("every nyc defense has a code cite", !!nyc && nyc.defenses.every((d) => !!d.codeCite?.citation));
check("every nyc defense has sources", !!nyc && nyc.defenses.every((d) => d.sources.length >= 1));
check("recognizedDefenses all have a defense record",
  !!nyc && nyc.recognizedDefenses.every((s) => nyc.defenses.some((d) => d.slug === s)));
check("nyc urls include a leaf", getParkingUrls().some((u) => u.url.startsWith("https://imfrustrated.org/letters/parking/nyc/")));
```

- [ ] **Step 4: Run assertions**

Run: `npx tsx scripts/parking-checks/assert-module.ts`
Expected: all `ok:`, `All module assertions passed.`

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/data/parking/cities/nyc.ts src/data/parking/index.ts scripts/parking-checks/assert-module.ts
git commit -m "feat(parking): author verified NYC city + defense statements"
```

---

## Task 4: National index route `/letters/parking`

**Files:**
- Create: `src/app/letters/parking/page.tsx`
- Create: `src/app/letters/parking/opengraph-image.tsx`

**Interfaces:**
- Consumes: `getAllParkingCities()`.

- [ ] **Step 1: Write `src/app/letters/parking/page.tsx`** — a static hub. Reuse the shell (`Header`/`Interactions`/`Reveal`/`SiteFooter`), match the `/letters` hub grammar. Full component:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { getAllParkingCities } from "@/data/parking";

export const metadata: Metadata = {
  title: "How to Fight a Parking Ticket, City by City | I'm Frustrated dot Org",
  description:
    "Free, city-specific parking-ticket dispute statements — the exact defense to write, where to submit it, and the deadline that matters. Verified against each city's official rules.",
  alternates: { canonical: "https://imfrustrated.org/letters/parking" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/letters/parking",
    title: "How to Fight a Parking Ticket, City by City",
    description: "City-specific parking-ticket dispute statements, verified against each city's official rules.",
  },
};

export default function ParkingIndexPage() {
  const cities = getAllParkingCities();
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />
      <main className="relative">
        <section className="relative max-w-4xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10">
          <Reveal>
            <nav className="text-sm font-medium text-sage-2 mb-7">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-2.5 text-rule">/</span>
              <Link href="/letters" className="hover:text-clay transition-colors duration-300">Letters</Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">Parking tickets</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />Parking ticket disputes</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] mt-7">
              Fight a parking ticket — the right way for your city.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-6 max-w-2xl">
              Every city hears disputes differently — different portal, different deadline, different accepted defenses.
              Pick your city for the exact statement to submit, where it goes, and how long you have.
            </p>
          </Reveal>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-8 py-10">
          <Reveal>
            <ul className="grid sm:grid-cols-2 gap-5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/letters/parking/${c.slug}`} className="tool-card group block p-6 h-full">
                    <p className="text-clay text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-2">{c.state}</p>
                    <p className="font-disp font-semibold text-sage text-lg md:text-xl tracking-[-0.02em] group-hover:text-clay transition-colors duration-300">
                      Fight a parking ticket in {c.city}
                    </p>
                    <p className="text-sage-2 text-sm mt-2">
                      {c.recognizedDefenses.length} defenses · {c.contestDeadlineDays}-day window
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {cities.length === 0 && (
              <p className="text-sage-2">Cities coming soon.</p>
            )}
            <p className="text-sage-2 text-sm mt-8">
              Don&rsquo;t see your city? Email <a href="mailto:info@imfrustrated.org" className="text-clay underline">info@imfrustrated.org</a> — we&rsquo;re adding cities. In the meantime, most cities let you plead not guilty online and submit a written defense; the same defenses (broken meter, obscured signs, valid payment, wrong ticket details) apply.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 2: Write `src/app/letters/parking/opengraph-image.tsx`** — copy `src/app/letters/[category]/opengraph-image.tsx`, change the font import depth to `../../_fonts/…` (2 levels up from `parking/`), set the title to "Fight a parking ticket — city by city" and subtitle "I'm Frustrated dot Org". Keep the sage/clay gradient + TTF fonts.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds; output lists `/letters/parking` as a static route.

- [ ] **Step 4: Verify the route rendered**

Run: `grep -rl "Fight a parking ticket" .next/server/app/letters/parking 2>/dev/null && echo FOUND`
Expected: `FOUND`.

- [ ] **Step 5: Commit**

```bash
git add src/app/letters/parking/page.tsx src/app/letters/parking/opengraph-image.tsx
git commit -m "feat(parking): national parking index route + OG"
```

---

## Task 5: City hub route `/letters/parking/[city]`

**Files:**
- Create: `src/app/letters/parking/[city]/page.tsx`
- Create: `src/app/letters/parking/[city]/opengraph-image.tsx`

**Interfaces:**
- Consumes: `getAllParkingCities()`, `getParkingCity()`.

- [ ] **Step 1: Write `src/app/letters/parking/[city]/page.tsx`**. `generateStaticParams` from `getAllParkingCities()`; `generateMetadata` from the city. Render: breadcrumb, H1 "How to fight a parking ticket in {city}", a **deadline banner** (conversion hook), the verified agency + submission block, the `howToContest` steps (HowTo schema), the defense grid, city FAQ (FAQPage schema), BreadcrumbList, disclaimer + CTA. Core of the component:

```tsx
export function generateStaticParams() {
  return getAllParkingCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getParkingCity(city);
  if (!c) return {};
  const url = `https://imfrustrated.org/letters/parking/${c.slug}`;
  const title = `How to Fight a Parking Ticket in ${c.city} | I'm Frustrated dot Org`;
  const description = `Contest a ${c.city} parking ticket yourself: the exact defense statement, where to submit it (${c.agency}), and your ${c.contestDeadlineDays}-day deadline. Verified against ${c.state} rules.`;
  return { title, description, alternates: { canonical: url }, openGraph: { type: "article", url, title, description } };
}
```

Deadline banner JSX (the conversion hook — place directly under the H1):

```tsx
<Reveal delay={3}>
  <div className="mt-7 bg-clay/10 border border-clay/30 rounded-2xl px-6 py-5">
    <p className="font-disp font-semibold text-sage text-lg">
      You have about {c.contestDeadlineDays} days from the date on the ticket.
    </p>
    <p className="text-sage-2 text-base leading-[1.6] mt-1">{c.contestDeadlineNote}</p>
    <p className="text-sage-2 text-sm mt-2">{c.penaltyNote}</p>
  </div>
</Reveal>
```

Agency + submission block:

```tsx
<section id="how-to-contest" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
  <Reveal className="mb-7">
    <p className="font-accent italic text-xl text-clay">how to dispute it in {c.city}</p>
    <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">Where it goes.</h2>
  </Reveal>
  <Reveal>
    <div className="bg-card border border-rule rounded-3xl p-7 md:p-9 space-y-3">
      <p className="text-sage-2"><span className="font-semibold text-sage">Agency:</span> {c.agency}</p>
      <p className="text-sage-2"><span className="font-semibold text-sage">Online:</span>{" "}
        <a href={c.submitOnlineUrl} className="text-clay underline" target="_blank" rel="noopener noreferrer">{c.submitOnlineUrl}</a></p>
      <p className="text-sage-2"><span className="font-semibold text-sage">By mail:</span> {c.submitMailAddress}</p>
      {c.submitInPerson && <p className="text-sage-2"><span className="font-semibold text-sage">In person:</span> {c.submitInPerson}</p>}
    </div>
    <ol className="mt-7 space-y-4">
      {c.howToContest.map((s, i) => (
        <li key={i} className="flex gap-4 text-sage-2 text-base md:text-lg leading-[1.7]">
          <span className="shrink-0 w-9 h-9 rounded-full bg-mist text-sage grid place-items-center font-disp font-bold">{i + 1}</span>
          <span className="pt-1">{s}</span>
        </li>
      ))}
    </ol>
  </Reveal>
</section>
```

Defense grid (links to leaves):

```tsx
<section id="defenses" className="relative max-w-4xl mx-auto px-6 md:px-8 py-12">
  <Reveal className="mb-7 text-center max-w-2xl mx-auto">
    <p className="font-accent italic text-xl text-clay">pick your defense</p>
    <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.4rem] tracking-[-0.03em] mt-1.5">
      What actually happened?
    </h2>
  </Reveal>
  <Reveal>
    <ul className="grid sm:grid-cols-2 gap-5">
      {c.defenses.map((d) => (
        <li key={d.slug}>
          <Link href={`/letters/parking/${c.slug}/${d.slug}`} className="tool-card group block p-6 h-full">
            <p className="font-disp font-semibold text-sage text-lg group-hover:text-clay transition-colors duration-300">{d.title}</p>
            <p className="text-sage-2 text-sm mt-2">{d.whenItApplies}</p>
          </Link>
        </li>
      ))}
    </ul>
  </Reveal>
</section>
```

Include JSON-LD: an `Article`, a `HowTo` built from `c.howToContest`, a `FAQPage` from `c.faqs`, and a `BreadcrumbList` (Home → Letters → Parking tickets → {city}). Mirror the exact JSON-LD construction in `src/app/letters/[category]/[slug]/page.tsx`. Add the standard disclaimer paragraph and the sage CTA block from that file.

- [ ] **Step 2: Write `src/app/letters/parking/[city]/opengraph-image.tsx`** — copy the leaf OG generator, font import depth `../../../_fonts/…` (3 levels up), title = `Fight a parking ticket in ${c.city}`, category label = `${c.state} · Parking`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds; output lists `/letters/parking/nyc` (SSG).

- [ ] **Step 4: Verify**

Run: `test -d .next/server/app/letters/parking/\[city\] && grep -rl "How to fight a parking ticket" .next/server/app/letters/parking 2>/dev/null | head -1 && echo OK`
Expected: `OK`.

- [ ] **Step 5: Commit**

```bash
git add "src/app/letters/parking/[city]"
git commit -m "feat(parking): city hub route with deadline banner, submission block, defense grid, JSON-LD"
```

---

## Task 6: Defense leaf route `/letters/parking/[city]/[defense]`

**Files:**
- Create: `src/app/letters/parking/[city]/[defense]/page.tsx`
- Create: `src/app/letters/parking/[city]/[defense]/opengraph-image.tsx`

**Interfaces:**
- Consumes: `getAllParkingCities()`, `getParkingCity()`, `getParkingDefense()`.

- [ ] **Step 1: Write `src/app/letters/parking/[city]/[defense]/page.tsx`**. `generateStaticParams` enumerates every city×defense; `notFound()` if missing. Sections mirror the existing leaf, adapted to parking fields: `#statement` (the `body` in a `<pre>`), `#how-to-submit` (`d.howToSubmit`), `#evidence` (`d.evidenceChecklist`), `#legal-basis` (`d.codeCite` + `d.sources` links), `#if-this-doesnt-work` (`d.ifThisDoesntWork`), `#faq` (`d.faqs`). JSON-LD: Article + HowTo (from `d.howToSubmit`) + FAQPage + BreadcrumbList (Home → Letters → Parking → {city} → {defense title}). Reuse the disclaimer + CTA verbatim from the letters leaf.

```tsx
export function generateStaticParams() {
  return getAllParkingCities().flatMap((c) => c.defenses.map((d) => ({ city: c.slug, defense: d.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; defense: string }> }): Promise<Metadata> {
  const { city, defense } = await params;
  const c = getParkingCity(city);
  const d = getParkingDefense(city, defense);
  if (!c || !d) return {};
  const url = `https://imfrustrated.org/letters/parking/${c.slug}/${d.slug}`;
  return { title: `${d.title} | I'm Frustrated dot Org`, description: d.metaDescription,
    alternates: { canonical: url }, openGraph: { type: "article", url, title: d.title, description: d.metaDescription } };
}
```

Legal-basis section (this is the tailoring proof — cite + sources rendered):

```tsx
<section id="legal-basis" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
  <Reveal className="mb-7">
    <p className="font-accent italic text-xl text-clay">what {c.city} rules say</p>
    <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">The rule this rests on.</h2>
  </Reveal>
  <Reveal>
    <div className="border-l-2 border-clay/50 pl-5">
      <p className="font-disp font-semibold text-sage text-lg">{d.codeCite.label}</p>
      <p className="text-sage-2 mt-1">
        <a href={d.codeCite.url} className="text-clay underline" target="_blank" rel="noopener noreferrer">{d.codeCite.citation}</a>
      </p>
    </div>
    <p className="text-sage-2 text-base leading-[1.7] mt-5">{d.cityNotes}</p>
    <div className="mt-6 text-sm text-sage-2">
      <p className="font-semibold text-sage mb-1">Sources</p>
      <ul className="space-y-1">
        {d.sources.map((s, i) => (
          <li key={i}><a href={s.url} className="text-clay underline" target="_blank" rel="noopener noreferrer">{s.label}</a></li>
        ))}
      </ul>
    </div>
  </Reveal>
</section>
```

Evidence section:

```tsx
<section id="evidence" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
  <Reveal className="mb-7">
    <p className="font-accent italic text-xl text-clay">bring receipts</p>
    <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">Attach this evidence.</h2>
  </Reveal>
  <Reveal>
    <ul className="space-y-3">
      {d.evidenceChecklist.map((e, i) => (
        <li key={i} className="flex gap-3 text-sage-2 text-base md:text-lg leading-[1.7]">
          <span className="text-clay mt-1">✓</span><span>{e}</span>
        </li>
      ))}
    </ul>
  </Reveal>
</section>
```

- [ ] **Step 2: Write `src/app/letters/parking/[city]/[defense]/opengraph-image.tsx`** — copy the leaf OG generator, font import depth `../../../../_fonts/…` (4 levels up), title = `d.title`, category label = `${c.state} · Parking`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds; output lists every NYC leaf, e.g. `/letters/parking/nyc/broken-meter`.

- [ ] **Step 4: Verify all recognized leaves emitted**

Run: `npx tsx -e "import('./src/data/parking/index.js').catch(()=>import('./src/data/parking/index')).then(m=>{const c=m.getParkingCity('nyc');console.log('expected leaves:',c.defenses.length)})"` then confirm the build output printed that many `/letters/parking/nyc/*` routes.
Expected: leaf count matches `nyc.defenses.length`.

- [ ] **Step 5: Commit**

```bash
git add "src/app/letters/parking/[city]/[defense]"
git commit -m "feat(parking): defense leaf route — statement, evidence, sourced code cite, JSON-LD"
```

---

## Task 7: Wire sitemap + letters hub card

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/letters/page.tsx`

- [ ] **Step 1: Edit `src/app/sitemap.ts`** — import and append parking URLs:

```ts
import { getParkingUrls } from "@/data/parking";
// ...inside sitemap(), after letterPages:
const parkingPages: MetadataRoute.Sitemap = getParkingUrls().map((u) => ({
  url: u.url,
  lastModified: u.lastModified,
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));
return [...core, ...categoryHubs, ...letterPages, ...parkingPages];
```

- [ ] **Step 2: Edit `src/app/letters/page.tsx`** — add a "Parking tickets" card linking to `/letters/parking`. Add it after the category grid (find where `getAvailableCategories()` cards render and add one static card, or add a dedicated CTA block):

```tsx
<Link href="/letters/parking" className="tool-card group block p-6 h-full">
  <p className="text-clay text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-2">Parking</p>
  <p className="font-disp font-semibold text-sage text-lg group-hover:text-clay transition-colors duration-300">
    Parking tickets — fight it in your city
  </p>
  <p className="text-sage-2 text-sm mt-2">City-specific dispute statements, verified against local rules.</p>
</Link>
```

- [ ] **Step 3: Build + verify sitemap includes parking**

Run: `npm run build && grep -c "letters/parking" .next/server/app/sitemap.xml.body 2>/dev/null || (npx next start >/tmp/nx.log 2>&1 & sleep 4; curl -s localhost:3000/sitemap.xml | grep -c "letters/parking"; kill %1)`
Expected: a count ≥ (1 index + 1 hub + NYC leaf count).

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/letters/page.tsx
git commit -m "feat(parking): wire parking into sitemap + letters hub card"
```

---

## Task 8: NYC vertical-slice acceptance (Phase 1 ship gate)

**Files:** none (verification only).

- [ ] **Step 1: Full clean build**

Run: `rm -rf .next && npm run build`
Expected: success, no type errors, all `/letters/parking*` routes listed.

- [ ] **Step 2: Assertions + type-check**

Run: `npx tsx scripts/parking-checks/assert-module.ts && npx tsc --noEmit`
Expected: all pass.

- [ ] **Step 3: Manual render check** — `npx next start`, then open `http://localhost:3000/letters/parking`, `/letters/parking/nyc`, and one leaf. Confirm: deadline banner shows real numbers, submission block has a working nyc.gov link, the defense statement has real `[PLACEHOLDERS]`, the legal-basis cite links to an official page, OG images return 200 (`curl -sI localhost:3000/letters/parking/nyc/opengraph-image`).

- [ ] **Step 4: JSON-LD sanity** — view-source on the NYC leaf, confirm Article + HowTo + FAQPage + BreadcrumbList blocks are present and parse as JSON.

- [ ] **Step 5: Ship** — push and verify the deploy actually went READY (known silent-build-error gotcha):

```bash
git push origin main
# then: watch Vercel → confirm state READY (not ERROR/CANCELED); if ERROR, `vercel redeploy` the last good.
```

- [ ] **Step 6: Live verify** — `curl -sI https://imfrustrated.org/letters/parking/nyc` → 200; spot-check the page renders. NYC slice is live.

---

## Task 9: Top-9 research fanout (research gate)

**Files:**
- Create: `docs/superpowers/research/parking/{los-angeles,chicago,houston,phoenix,philadelphia,san-francisco,seattle,boston,washington-dc}.json`

**Interfaces:** each record matches `validate-research.ts`; consumed by Task 10.

- [ ] **Step 1: Dispatch 9 research subagents in parallel** — one per city, each with the Task 2 mandate adapted to that city's official source. Source mandate per city (official only):
  - `los-angeles` → ladot.lacity.gov / lacity.gov parking violations; LA Municipal Code §88.13 area (verify).
  - `chicago` → chicago.gov Dept. of Finance / Administrative Hearings; Municipal Code of Chicago (via American Legal).
  - `houston` → houstontx.gov ARA parking; Houston Code of Ordinances (Municode).
  - `phoenix` → phoenix.gov Municipal Court parking; Phoenix City Code.
  - `philadelphia` → philapark.org / phila.gov (PPA); Philadelphia Code.
  - `san-francisco` → sfmta.com citation contest; SF Transportation Code.
  - `seattle` → seattle.gov Municipal Court / SDOT; Seattle Municipal Code 11.x.
  - `boston` → boston.gov OSP parking clerk; Boston Municipal Code / MA rules.
  - `washington-dc` → dmv.dc.gov (DC DMV Adjudication); DCMR Title 18.
  Each MUST confirm the city's recognized-defense grounds from the city's own page and cite the specific code section per defense. Omit unconfirmable fields.

- [ ] **Step 2: Validate every record**

Run: `for f in docs/superpowers/research/parking/*.json; do echo "== $f"; npx tsx scripts/parking-checks/validate-research.ts "$f" || exit 1; done`
Expected: `Research record valid.` for all 9 (nyc already validated).

- [ ] **Step 3: Reviewer spot-check** — for each city, open 1 source URL and confirm the deadline matches. Fix any record that fails.

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/research/parking/*.json
git commit -m "feat(parking): verified research records for top-9 cities (.gov sourced)"
```

---

## Task 10: Author 9 city data files + wire

**Files:**
- Create: `src/data/parking/cities/{los-angeles,chicago,houston,phoenix,philadelphia,san-francisco,seattle,boston,washington-dc}.ts`
- Modify: `src/data/parking/index.ts`

- [ ] **Step 1: Author each `cities/<city>.ts`** from its verified record, following the exact `nyc.ts` structure (Task 3). Each defense `body` uses that city's adjudicating-body address, that city's violation-number nomenclature, and that city's `codeCite`. Fill every `<from record>` field.

- [ ] **Step 2: Wire all into `src/data/parking/index.ts`**

```ts
import { nycCity } from "./cities/nyc";
import { losAngelesCity } from "./cities/los-angeles";
import { chicagoCity } from "./cities/chicago";
import { houstonCity } from "./cities/houston";
import { phoenixCity } from "./cities/phoenix";
import { philadelphiaCity } from "./cities/philadelphia";
import { sanFranciscoCity } from "./cities/san-francisco";
import { seattleCity } from "./cities/seattle";
import { bostonCity } from "./cities/boston";
import { washingtonDcCity } from "./cities/washington-dc";

const allCities: ParkingCity[] = [
  nycCity, losAngelesCity, chicagoCity, houstonCity, phoenixCity,
  philadelphiaCity, sanFranciscoCity, seattleCity, bostonCity, washingtonDcCity,
];
```

- [ ] **Step 3: Extend assertions** — add to `scripts/parking-checks/assert-module.ts`:

```ts
check("10 cities present", getAllParkingCities().length === 10);
check("every city has >=1 defense with a cite & sources",
  getAllParkingCities().every((c) => c.defenses.length >= 1 &&
    c.defenses.every((d) => !!d.codeCite?.citation && d.sources.length >= 1)));
check("every recognizedDefense has a record",
  getAllParkingCities().every((c) => c.recognizedDefenses.every((s) => c.defenses.some((d) => d.slug === s))));
```

- [ ] **Step 4: Assertions + build**

Run: `npx tsx scripts/parking-checks/assert-module.ts && npx tsc --noEmit && npm run build`
Expected: all pass; build lists all ~71 parking routes.

- [ ] **Step 5: Commit**

```bash
git add src/data/parking/cities src/data/parking/index.ts scripts/parking-checks/assert-module.ts
git commit -m "feat(parking): author verified top-9 cities + defense statements"
```

---

## Task 11: Full acceptance + ship

**Files:** none.

- [ ] **Step 1: Clean build + assertions**

Run: `rm -rf .next && npm run build && npx tsx scripts/parking-checks/assert-module.ts`
Expected: all pass.

- [ ] **Step 2: Sitemap count** — confirm sitemap parking URL count = 1 index + 10 hubs + Σ(defenses).

Run: `npx next start >/tmp/nx.log 2>&1 & sleep 4; curl -s localhost:3000/sitemap.xml | grep -c "letters/parking"; kill %1`
Expected: matches the computed total.

- [ ] **Step 3: Spot-check 3 cities** — start dev, open one hub + one leaf for LA, Chicago, DC; confirm deadline banner, submission links, and sourced code cites render with real values (no `<from record>` leakage).

- [ ] **Step 4: Ship + verify READY**

```bash
git push origin main
# confirm Vercel state READY; if ERROR, vercel redeploy last good.
```

- [ ] **Step 5: Live verify + IndexNow** — `curl -sI` a hub + a leaf per city (200); confirm `postbuild` `submit-indexnow.ts` ran (deploy log). Done.

---

## Self-review

- **Spec coverage:** §1 goal → Tasks 4–8; §2 three-things page → Tasks 5–6 (submission block, deadline banner, statement); §3 topology → Tasks 4/5/6 routes; §4 data model → Tasks 1/3/10; §5 rendering/OG/JSON-LD → Tasks 4/5/6; §6 verification gate → Tasks 2/9 + `validate-research.ts`; §6.2 tailoring → Task 3/10 (per-city cite + body); §6.3 NYC-first → Tasks 2–8; §7 wiring → Task 7; §8 build order → task sequence; §9 YAGNI → Global Constraints; §10 risks → `verifiedAt` (Task 1 types), route precedence (Global Constraints), OG TTF (Global Constraints), over-claiming (validator item: only recognizedDefenses get leaves). All covered.
- **Placeholder scan:** the only bracketed placeholders shipped are the intended user `[PLACEHOLDERS]` inside defense `body`. Every `<from record>` in Tasks 3/10 is an explicit instruction to transcribe a verified value, gated by assertions that fail if a cite/source is empty — not a plan placeholder.
- **Type consistency:** `ParkingCity`/`ParkingDefense`/`ParkingDefenseSlug`/`CodeRef`/`SourceRef` defined in Task 1 and used unchanged in Tasks 3/5/6/10; accessor names (`getAllParkingCities`, `getParkingCity`, `getParkingDefense`, `getParkingUrls`) consistent across Tasks 1/4/5/6/7. `LetterFAQ` imported from existing `@/data/letters/types`.
