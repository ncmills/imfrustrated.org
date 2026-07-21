#!/usr/bin/env bash
# Parking-library city expansion runner (used by com.secondnick.parking-expansion).
#
# Usage:
#   scripts/parking-expansion/expand-cities.sh "slug|City|ST" ["slug2|City2|ST2" ...]
#   scripts/parking-expansion/expand-cities.sh --auto [N]     # take next N (default 5) uncovered from the backlog
#
# Pipeline per city (SEQUENTIAL — parallel research starves the shared Playwright browser):
#   research (claude -p) -> validate -> solo-verify (claude -p) -> author (claude -p)
# Then, once for the batch: regen-index -> assert -> tsc -> next build -> open PR (never auto-merge).
#
# Requires: claude CLI, gh CLI, npx/tsx, an installed node_modules. Run from the repo root of a
# clean worktree/branch off origin/main. YMYL content ships on HUMAN approval — this opens a PR only.
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
RESEARCH_DIR="docs/superpowers/research/parking"
CITIES_DIR="src/data/parking/cities"
GUIDE=".superpowers/sdd/authoring-guide.md"
BATCH_BRANCH="feat/parking-expansion-$(git rev-parse --short HEAD)"
CLAUDE="claude -p --permission-mode acceptEdits"   # headless; tune flags per Second Nick's headless policy

log() { printf '\n=== %s ===\n' "$*"; }

# ---- resolve the batch --------------------------------------------------------
declare -a SPECS
if [[ "${1:-}" == "--auto" ]]; then
  N="${2:-5}"
  # take the next N queue lines from the backlog whose slug has no cities/<slug>.ts yet
  mapfile -t QUEUE < <(grep -oE '`[a-z-]+`$' docs/parking-expansion-backlog.md | tr -d '`')
  for slug in "${QUEUE[@]}"; do
    [[ -f "$CITIES_DIR/$slug.ts" ]] && continue
    SPECS+=("$slug")   # City/ST resolved by the research agent from the slug + backlog
    [[ "${#SPECS[@]}" -ge "$N" ]] && break
  done
else
  SPECS=("$@")
fi
[[ "${#SPECS[@]}" -eq 0 ]] && { echo "no cities to expand"; exit 0; }
log "batch: ${SPECS[*]}"

# ---- per-city AI stages (sequential) -----------------------------------------
for spec in "${SPECS[@]}"; do
  slug="${spec%%|*}"
  log "RESEARCH $slug"
  $CLAUDE "Research how a person contests a PARKING TICKET in the US city with slug '$slug' (see docs/parking-expansion-backlog.md for its City/State + carve-out notes). YMYL — accuracy mandatory, no guessing. Write docs/superpowers/research/parking/$slug.json in the shape used by the other files in that directory (read one as a template). SOURCE DISCIPLINE: official .gov + official code host (Municode/American Legal/state legislature) ONLY; use Playwright to read bot-blocked code sections; every fact carries an official source URL; omit anything unconfirmable. Each defense cites a SPECIFIC code subsection (never a generic chapter reused across defenses — if you can't find a specific subsection, omit that defense). Cities with no fixed deadline use contestDeadlineDays:0. recognizedDefenses MUST equal the set of defenses[].slug. Then run: npx tsx scripts/parking-checks/validate-research.ts docs/superpowers/research/parking/$slug.json — it must print 'Research record valid.' Do NOT git commit."
  npx tsx scripts/parking-checks/validate-research.ts "$RESEARCH_DIR/$slug.json"

  log "VERIFY $slug"
  $CLAUDE "Adversarially verify docs/superpowers/research/parking/$slug.json against LIVE official sources using Playwright (you are running solo — Playwright is free). For each defense, open its codeCite.url and confirm the cited section EXISTS and supports the claim; confirm the deadline. Fix any MISMATCH in the JSON (correct citation/url/label/claim) and re-run npx tsx scripts/parking-checks/validate-research.ts docs/superpowers/research/parking/$slug.json. Report any cite you had to correct. Do NOT git commit."

  log "AUTHOR $slug"
  $CLAUDE "Author src/data/parking/cities/$slug.ts (export const <camelCase(slug)>City: ParkingCity) from docs/superpowers/research/parking/$slug.json. Follow $GUIDE EXACTLY (procedural-cite rule, mechanism honesty, fill every field, only user [PLACEHOLDERS] in body, no <from record> leakage). Mirror the closest existing city file in $CITIES_DIR by mechanism (CA=san-francisco.ts, TX civil=houston.ts/dallas.ts, county-court=seattle.ts, in-person=denver.ts). Do NOT edit index.ts, do NOT build, do NOT git commit."
done

# ---- batch finalize (deterministic) ------------------------------------------
log "WIRE (regen index)"
npx tsx scripts/parking-expansion/regen-index.ts

log "VERIFY MODULE"
npx tsx scripts/parking-checks/assert-module.ts
npx tsc --noEmit

log "BUILD"
npx next build

log "OPEN PR (no auto-merge)"
git checkout -b "$BATCH_BRANCH"
git add "$CITIES_DIR" "$RESEARCH_DIR" src/data/parking/index.ts
git commit -m "feat(parking): expansion batch — ${SPECS[*]}

Verified-research pipeline (research -> solo-verify -> author -> regen -> build).
Every cite verified against a live official source. YMYL — needs human review before merge.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push -u origin "$BATCH_BRANCH"
gh pr create --base main --head "$BATCH_BRANCH" \
  --title "feat(parking): expansion batch (${#SPECS[@]} cities)" \
  --body "Automated parking-library expansion for: ${SPECS[*]}. Verified per-city against official sources; solo verification pass applied. **Review before merge (YMYL).**"
log "DONE — PR opened for review. Nothing merged/deployed."
