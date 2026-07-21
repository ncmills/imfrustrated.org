# Parking-ticket library — city expansion backlog

The `/letters/parking` library grows city-by-city through a verified-research pipeline. This file is the **work queue** the expansion agent (`com.secondnick.parking-expansion`) pulls from.

## Pipeline (per city — the proven pattern)
1. **Research** (one agent per city, run **sequentially** — parallel agents starve the shared Playwright browser and force weak proxy/Wayback sourcing): official `.gov` + official code host only; write `docs/superpowers/research/parking/<slug>.json`; must pass `scripts/parking-checks/validate-research.ts`.
2. **Solo verify**: re-check every proxy/Wayback-sourced cite against a live official page (Playwright). This step is **mandatory** — it has already caught a repealed statute (Austin) and multiple mislabels.
3. **Author**: `src/data/parking/cities/<slug>.ts` from the record, following `.superpowers/sdd/authoring-guide.md` (procedural-cite rule, mechanism honesty).
4. **Wire**: `npx tsx scripts/parking-expansion/regen-index.ts` (deterministic — no hand-editing).
5. **Verify**: `npx tsx scripts/parking-checks/assert-module.ts` + `npx tsc --noEmit` + `npx next build`.
6. **PR**: open against `main` for Nick's review (do NOT auto-merge; YMYL content ships on human approval).

## Rules that must not drift
- Each defense appears ONLY where the city publishes the ground (drop broken-meter/obscured-signage/grace-period honestly where unconfirmed).
- Each defense cites a **specific** code subsection; a generic chapter cite reused across defenses = defer the city.
- Cities with **no fixed contest deadline** (deadline = the date printed on the ticket) use `contestDeadlineDays: 0` (supported sentinel; hub renders "the hearing date printed on your ticket").
- `recognizedDefenses` == the set of authored `defenses[].slug`.

## Covered (22 — do not re-do)
NYC, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Francisco, Seattle, Boston, Washington DC, San Diego, San Jose, Dallas, Austin, Denver, Portland, Miami, Atlanta, Minneapolis, Las Vegas, Baltimore, San Antonio.

## Queue (ranked by population / ticket volume — take the next N per run)

### Wave 3
1. Jacksonville, FL — `jacksonville`
2. Fort Worth, TX — `fort-worth`
3. Columbus, OH — `columbus`
4. Charlotte, NC — `charlotte`
5. Indianapolis, IN — `indianapolis`
6. Nashville, TN — `nashville`
7. Detroit, MI — `detroit`
8. Oklahoma City, OK — `oklahoma-city`
9. El Paso, TX — `el-paso`
10. Memphis, TN — `memphis`

### Wave 4
11. Louisville, KY — `louisville`
12. Milwaukee, WI — `milwaukee`
13. Albuquerque, NM — `albuquerque`
14. Tucson, AZ — `tucson`
15. Fresno, CA — `fresno`
16. Sacramento, CA — `sacramento`
17. Kansas City, MO — `kansas-city`
18. Mesa, AZ — `mesa`
19. Omaha, NE — `omaha`
20. Colorado Springs, CO — `colorado-springs`

### Wave 5+
Raleigh (NC), Long Beach (CA), Virginia Beach (VA), Oakland (CA), Tampa (FL), New Orleans (LA), Cleveland (OH), Pittsburgh (PA), Cincinnati (OH), St. Louis (MO), Buffalo (NY), Newark (NJ), Providence (RI), Honolulu (HI), Salt Lake City (UT).

## Notes / carve-outs
- **CA cities** (Fresno, Sacramento, Long Beach, Oakland) share **CVC §40215** (initial review → hearing) — cheaper research; mirror `san-francisco.ts`.
- **TX cities** (Fort Worth, El Paso) are usually civil hearing-officer or municipal court — mirror `houston.ts` / `dallas.ts`; watch for ticket-date-only deadlines.
- Scope each city to the **actual municipality** (e.g. City of X, not the county) and flag when the adjudicator is a county court, not a city body.
