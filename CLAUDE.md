# imfrustrated.org — Claude Code Instructions

## Cross-project inventory
See `~/PROJECTS.md` for portfolio map and `~/.claude/CLAUDE.md` for file-routing convention (`~/work/<project>/...` for scratch, `~/work/handoffs/` for briefs, etc.).

## Deploy Workflow

As of 2026-04-10 this project is connected to GitHub via the Vercel GitHub App. A push to `main` auto-builds and auto-promotes `imfrustrated.org` to production.

- **Deploy:** `git add` → `git commit` → `git push origin main`. Vercel handles the rest.
- **Do NOT run `vercel --prod` manually** unless a build is stuck or Nick explicitly asks.
- PRs automatically get preview URLs.

## Design system — "Breathing Room" (redesigned 2026-06-21)

The site was redesigned from the old "warm editorial" look to **Breathing Room**: calm deep-sage green (`--color-sage #33453d`) + warm terracotta "clay" accent (`--color-clay #c8775a`) over a warm off-white background (`--color-bg #f6f3ec`). Fonts: **Bricolage Grotesque** (display, `font-disp`), **Instrument Serif** (italic accent, `font-accent`), **Hanken Grotesk** (body). Tokens live in `src/app/globals.css` (legacy names like `paper/ink/forest/amber/font-serif` are aliased to the new palette/fonts, so old class usage still works). Logo is **"The Aside"** — an animated speech bubble (`<Logo>` in `ClientSections.tsx`), replacing the old face glyph. Shared components: `Header`, `SiteFooter`, `Logo`, `Reveal`, `Interactions` (magnetic buttons `.mag`, tilt cards `.tool-card`, ambient blobs `.amb`, dispute chips `.chip`). A mirror of the system lives in the Claude app at claude.ai/design → "I'm Frustrated .org — Breathing Room" (keep in sync via DesignSync if components change).

## Site surfaces

- `/` — homepage. Sections in order: Hero (DIY message + dispute chips) → **"Everything IFDO gives you"** → How It Works (3 rings) → Testimonials → Contact (sage panel + intake form). The offerings section numbers all five things IFDO hands a visitor: **01** The Letter Library (featured, with per-category chips), **02** I Don't Have A Will, **03** A.I. SSDI, **04** DoppelWriter, **05** Ask a Volunteer Attorney. Landed 2026-08-07 in `d2ff645` — "rework homepage for immediate clarity (5-second test)".
  - **The letter total and the per-category counts are DERIVED** from `src/data/letters` (`getAllLetters()` / `getAvailableCategories()` / `getLettersByCategory()`), not typed. Do not hardcode them back: they had already drifted once — the page said "74 letters" with Consumer at 18 when the library held 75 with Consumer at 19.
  - Testimonials are a 4-quote masonry wall of **real, named** quotes. (An older note here claimed they were folded into a single pull-quote — wrong; `b89f207` restored them as a wall.) Never invent quotes here — see `feedback_no_fabricated_social_proof`.
- `/how-it-works` — three-chapter explainer for the volunteer-attorney conversation.
- `/free-tools` — featured library page. Currently **four** cards: I Don't Have A Will, Letter Templates, A.I. SSDI, DoppelWriter. Add new tools as new featured cards here, and keep the set in sync with the homepage offerings section.
- `/letters` + `/letters/[category]` + `/letters/[category]/[slug]` — the programmatic SEO letter-template library (added May 2026). See "Letter library" below.
- `/letters/parking` + `/letters/parking/[city]` + `/letters/parking/[city]/[defense]` — the parking-ticket library. See "Parking library" below.
- `/about`, `/faq` — supporting pages.

## Letter library (`src/data/letters/`)

The letter library is a programmatic SEO surface: ~150-400 target pages, each invoking a real federal or state statute on behalf of a person trying to resolve a common frustration before hiring a lawyer.

**Data layer**
- `src/data/letters/types.ts` — `LetterTemplate` shape (the source of truth for what a letter is). Fields: `slug`, `category`, `title`, `metaDescription`, `lede`, `body`, `howToUse[]`, `legalContext[]`, `stateNotes[]?`, `ifThisDoesntWork`, `relatedSlugs[]`, `faqs[]`, `publishedAt`, `updatedAt?`.
- `src/data/letters/index.ts` — aggregates all category files, exports `getAllLetters()`, `getLetter(category, slug)`, `getLettersByCategory(category)`, `getRelatedLetters(letter, max)`, `categoryMeta`, `getAvailableCategories()`.
- `src/data/letters/<category>.ts` — one file per category. **Eight live categories** as of 2026-08-07: `landlord.ts` (21), `consumer.ts` (19), `employer.ts` (10), `airline.ts` (6), `credit-card.ts` (5), `hoa.ts` (5), `neighbor.ts` (5), `hotel.ts` (4) — **75 letters total**. Those counts are recorded here for orientation only; the site reads them from the data layer, so don't sync anything to this line. To add a new category: create the file, export an array of `LetterTemplate`, add it to `allLetters` in `index.ts`, update its `categoryMeta` entry's `hubLede` from "Coming soon" to real copy.

**Routes (all SSG via `generateStaticParams`)**
- `src/app/letters/page.tsx` — hub (all letters + categories)
- `src/app/letters/[category]/page.tsx` — category hub (only renders categories with ≥1 letter)
- `src/app/letters/[category]/[slug]/page.tsx` — template page (FAQPage + Article + HowTo + BreadcrumbList JSON-LD, visible last-updated stamp, jump-to anchor menu, section IDs `#letter`, `#how-to-use`, `#legal-context`, `#state-notes`, `#escalation`, `#related`, `#faq`)

**Auto-wired**
- `src/app/sitemap.ts` pulls letter URLs from `getAllLetters()` — new templates land in the sitemap automatically.
- `scripts/submit-indexnow.ts` runs in the `postbuild` hook and pings IndexNow with sitemap URLs after every deploy.
- `src/app/letters/[category]/[slug]/opengraph-image.tsx` generates a per-letter OG image — title + category + brand.

**Adding a new letter**
1. Drop a new `LetterTemplate` entry into the right `src/data/letters/<category>.ts` file.
2. Add 4–6 `relatedSlugs` (the renderer in `getRelatedLetters` filters to live ones — aspirational forward-links are fine; non-existent slugs just don't render).
3. `npm run build` to verify.

**Adding a new category**
1. Create `src/data/letters/<category>.ts` exporting `<category>Letters: LetterTemplate[]`.
2. Add the import + spread to `allLetters` in `index.ts`.
3. Update `categoryMeta[<category>]` — change `hubLede` from "Coming soon" to real copy.

**Voice + scope (May 2026, per Nick)**
Every letter must pass three tests: (1) **low-hanging fruit, universal** — common issue every adult could encounter, not edge-case scenarios; (2) **pre-litigation, traction-seeking** — letter resolves the issue instead of a lawyer, not as a precursor to one; (3) **a touch of formality with legal tenor** — enough citation/structure to be taken seriously, not lawyer-drafted pleadings.

Friend-at-brunch test: "Could a friend at brunch say 'just send them a letter — here's the one I used' and have that letter actually unblock the issue 70%+ of the time?"

**Deferred letter types** (real legal mechanisms but fail the scope filter): specialized employment statutes (FMLA, ADA, PWFA, USERRA, OSHA whistleblower); federal benefits / agency disputes (SSDI — belongs on AISSDI/ClaimPros, not here; Medicare, IRS, FOIA); specialized insurance (ERISA, NSA, MHP); education-specific (FERPA, IDEA, Title IX); federal housing-discrimination-specific (FHA ESA, OTARD); TCPA / TILA / EFTA debit-card; HR-process letters (harassment-to-HR, hostile-environment, performance-review rebuttal); litigation-track letters (constructive eviction termination, formal cease-and-desist to ex pre-RO, retaliation accusation).

**Statute verification rule**
Every statute cite must be verified against a primary source (Cornell LII for federal, official state legislature site for state, agency .gov for regulatory). For research-heavy waves, dispatch parallel subagents (the established pattern is one agent per letter, each given an explicit source mandate). Free-handing cites from training memory is forbidden — Nick has explicitly called this out as a discardable artifact.

## Parking library (`src/data/parking/`) — SEPARATE from the letter library

A second programmatic surface, added July 2026 and **fully built**: **22 cities, 114 city-specific defense pages**, all `verifiedAt` 2026-07-20. Check here before "adding parking tickets" — that work is done, including NYC.

**Cities:** nyc, los-angeles, chicago, houston, phoenix, philadelphia, san-antonio, san-diego, dallas, san-jose, austin, seattle, denver, washington-dc, boston, atlanta, miami, portland, las-vegas, baltimore, minneapolis, san-francisco.

**Data layer**
- `src/data/parking/types.ts` — `ParkingCity`, `ParkingDefense`, `CodeRef`, `SourceRef`. A defense carries `body` (statement with `[PLACEHOLDERS]`), `evidenceChecklist[]`, `codeCite` (label + citation + official URL), `howToSubmit[]`, `sources[]`, and a required `verifiedAt`.
- `src/data/parking/cities/<slug>.ts` — one file per city, exporting `<camelCase(slug)>City`.
- `src/data/parking/index.ts` — **AUTO-GENERATED. Do not hand-edit the imports or `allCities`.**

**Routes (SSG):** `/letters/parking` (hub) → `/letters/parking/[city]` → `/letters/parking/[city]/[defense]`, each with its own `opengraph-image.tsx`.

**Adding a city**
1. Research it to `docs/superpowers/research/parking/<slug>.json` against the city's own official rules (nyc.gov / American Legal / Municode) — one research file per city, 22 on disk today.
2. Drop `src/data/parking/cities/<slug>.ts`.
3. `npx tsx scripts/parking-expansion/regen-index.ts` — deterministic, no LLM.
4. `npm run build`.

Helper scripts live in `scripts/parking-expansion/` (`expand-cities.sh`, `regen-index.ts`, `run-cron.sh`).

**The same statute-verification rule applies** — every `codeCite` and `sources[]` entry must point at the city's official host, and `verifiedAt` must reflect a real check. Municipal parking codes get amended; a stale `verifiedAt` is a signal to re-verify, not decoration.
