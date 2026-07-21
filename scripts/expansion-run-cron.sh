#!/usr/bin/env bash
# Unified cron for com.secondnick.imfrustrated-expansion: one parking-city batch + one letters batch,
# each opening its own PR (never merges/deploys). Runs from a DEDICATED clone refreshed to origin/main.
set -euo pipefail
REPO="${IMFRUSTRATED_EXPANSION_REPO:-$HOME/second-nick/worktrees/imfrustrated-expansion}"
cd "$REPO"
git fetch origin main -q; git checkout main -q; git reset --hard origin/main -q
git clean -fd -e node_modules -e .env.local -q
[ -d node_modules ] || npm ci --no-audit --no-fund
scripts/parking-expansion/expand-cities.sh --auto "${1:-4}" || echo "parking batch failed/none"
git checkout main -q; git reset --hard origin/main -q   # fresh base for the letters batch
scripts/letters-expansion/expand-letters.sh --auto "${2:-6}" || echo "letters batch failed/none"
