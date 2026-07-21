#!/usr/bin/env bash
# Letter-library topic expansion runner (letters half of com.secondnick.imfrustrated-expansion).
# Usage:
#   scripts/letters-expansion/expand-letters.sh "slug|category" ["slug2|category2" ...]
#   scripts/letters-expansion/expand-letters.sh --auto [N]     # next N uncovered from the backlog
# Pipeline per letter (sequential): research (claude -p) -> validate -> solo-verify -> author (append to category).
# Then once: build -> open PR (never auto-merge; YMYL).
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"; cd "$ROOT"
RDIR="docs/superpowers/research/letters"; mkdir -p "$RDIR"
GUIDE=".superpowers/sdd/letters-authoring-guide.md"
BR="feat/letters-expansion-$(git rev-parse --short HEAD)"
CLAUDE="claude -p --permission-mode acceptEdits"
log(){ printf '\n=== %s ===\n' "$*"; }

declare -a SPECS
if [[ "${1:-}" == "--auto" ]]; then
  N="${2:-6}"
  # backlog "Batch" lines look like: - `slug` (category) — desc
  mapfile -t Q < <(grep -oE '`[a-z0-9-]+` \(([a-z-]+)\)' docs/letters-expansion-backlog.md | tr -d '`' | sed -E 's/ \(/|/;s/\)//')
  for spec in "${Q[@]}"; do
    slug="${spec%%|*}"
    grep -rqE "slug:\s*[\"']$slug[\"']" src/data/letters/*.ts && continue   # already exists
    SPECS+=("$spec"); [[ "${#SPECS[@]}" -ge "$N" ]] && break
  done
else SPECS=("$@"); fi
[[ "${#SPECS[@]}" -eq 0 ]] && { echo "no letters to expand"; exit 0; }
log "batch: ${SPECS[*]}"

for spec in "${SPECS[@]}"; do
  slug="${spec%%|*}"; cat="${spec##*|}"
  log "RESEARCH $slug ($cat)"
  $CLAUDE "Research a new imfrustrated.org letter template: slug '$slug', category '$cat' (see docs/letters-expansion-backlog.md for the topic). YMYL legal self-help. VERIFY the governing statute against a PRIMARY source (Cornell LII for federal, official state legislature for state, agency .gov for regulatory) — no free-handed cites. It MUST pass the 3-test scope filter (universal, pre-litigation/traction-seeking, formal-legal-tenor) and must NOT be a deferred type (see .superpowers/sdd/letters-authoring-guide.md). Write docs/superpowers/research/letters/$slug.json with LetterTemplate fields (slug,category,title,metaDescription,lede,body with [PLACEHOLDERS],howToUse[],legalContext[] naming the statute,stateNotes[]? ,ifThisDoesntWork,relatedSlugs[],faqs[]) PLUS sources[] (official URLs), verifiedAt, and scopeCheck {universal,preLitigation,formalLegalTenor,notDeferredType:true}. Then run: npx tsx scripts/letters-expansion/validate-letter-research.ts docs/superpowers/research/letters/$slug.json (must print 'Letter research record valid.'). If the topic fails the scope filter or is a deferred type, DELETE the file and report DROPPED. Do NOT git commit."
  [[ -f "$RDIR/$slug.json" ]] || { echo "DROPPED $slug (no record — scope filter)"; continue; }
  npx tsx scripts/letters-expansion/validate-letter-research.ts "$RDIR/$slug.json"

  log "VERIFY $slug"
  $CLAUDE "Adversarially verify docs/superpowers/research/letters/$slug.json: re-read the cited statute at its PRIMARY-source URL and confirm it exists and says what legalContext/body claim. Fix any MISMATCH and re-run npx tsx scripts/letters-expansion/validate-letter-research.ts docs/superpowers/research/letters/$slug.json. Do NOT git commit."

  log "AUTHOR $slug -> src/data/letters/$cat.ts"
  $CLAUDE "Append a new LetterTemplate for docs/superpowers/research/letters/$slug.json to the exported array in src/data/letters/$cat.ts, following .superpowers/sdd/letters-authoring-guide.md EXACTLY (transcribe fields, drop sources/verifiedAt/scopeCheck, keep only user [PLACEHOLDERS] in body, do not duplicate an existing slug). Read 1-2 existing letters in that file first for voice. Do NOT edit index.ts (appending to an existing category is auto-wired), do NOT build, do NOT git commit."
done

log "BUILD"
npx next build

log "OPEN PR (no auto-merge)"
git checkout -b "$BR"
git add src/data/letters "$RDIR"
git commit -m "feat(letters): expansion batch — ${SPECS[*]}

Verified-statute pipeline (research -> solo-verify -> author). Each cite verified
against a primary source; 3-test scope filter enforced. YMYL — human review before merge.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push -u origin "$BR"
gh pr create --base main --head "$BR" --title "feat(letters): expansion batch (${#SPECS[@]} letters)" \
  --body "Automated letter-library expansion: ${SPECS[*]}. Primary-source-verified statutes; scope-filter enforced. **Review before merge (YMYL).**"
log "DONE — PR opened for review."
