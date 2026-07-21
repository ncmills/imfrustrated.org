#!/usr/bin/env bash
# Cron wrapper for com.secondnick.parking-expansion. Refreshes a DEDICATED clone to origin/main,
# then runs the expansion for the next N uncovered cities and opens a PR (never merges/deploys).
# Second Nick captain: set REPO to a dedicated clone (NOT a shared worktree) before arming.
set -euo pipefail
REPO="${PARKING_EXPANSION_REPO:-$HOME/second-nick/worktrees/imfrustrated-parking-expansion}"
N="${1:-5}"
cd "$REPO"
git fetch origin main -q
git checkout main -q
git reset --hard origin/main -q
git clean -fd -e node_modules -e .env.local -q
[ -d node_modules ] || npm ci --no-audit --no-fund
exec scripts/parking-expansion/expand-cities.sh --auto "$N"
