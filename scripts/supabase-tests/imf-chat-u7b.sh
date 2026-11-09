#!/usr/bin/env bash
# U7 F7 + F3 test (one active letter job per case; imf_job_fail p_cost_delta). Scratch local Postgres ONLY: creates imf_u7b_scratch_<pid>,
# stubs the Supabase roles, applies the migration, asserts, drops everything.
# Never connects to any other database; no keys, no env, no Supabase cloud.
# Run: bash scripts/supabase-tests/imf-chat-u7b.sh
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
MIG="$HERE/../../supabase/migrations/20261101120000_imf_chat.sql"
MIG4="${IMF_U4_MIG:-$HERE/../../supabase/migrations/20261101130000_imf_chat_worker.sql}"  # override only for mutant runs
MIG5="$HERE/../../supabase/migrations/20261101140000_imf_chat_review.sql"
MIG7="${IMF_U7_MIG:-$HERE/../../supabase/migrations/20261102120000_imf_chat_followup_review.sql}"  # override only for mutant runs
MIG8="${IMF_U7B_MIG:-$HERE/../../supabase/migrations/20261102130000_imf_chat_letter_job_unique.sql}"  # override only for mutant runs
DB="imf_u7b_scratch_$$"
CREATED_ROLES=()
PASS=0; FAIL=0
q()  { psql -X -q -At -v ON_ERROR_STOP=1 -d "$DB" -c "$1" 2>&1; }
ok() { echo "PASS  $1"; PASS=$((PASS+1)); }
no() { echo "FAIL  $1 :: $2"; FAIL=$((FAIL+1)); }
expect_eq()   { local out; out="$(q "$2")"; [[ "$out" == "$3" ]] && ok "$1" || no "$1" "got [$out] want [$3]"; }
expect_fail() { local out; if out="$(q "$2")"; then no "$1" "succeeded: [$out]"; elif [[ "$out" =~ $3 ]]; then ok "$1"; else no "$1" "wrong error: [$out]"; fi; }

cleanup() {
  for r in "${CREATED_ROLES[@]:-}"; do
    [[ -n "$r" ]] && psql -X -q -d "$DB" -c "drop owned by $r cascade; drop role if exists $r;" >/dev/null 2>&1
  done
  dropdb --if-exists "$DB" >/dev/null 2>&1
  echo "cleanup: dropped $DB and roles [${CREATED_ROLES[*]:-}]"
}
trap cleanup EXIT

createdb "$DB" || { echo "createdb failed"; exit 2; }
for r in anon authenticated service_role imf_chat_worker; do
  [[ "$(q "select 1 from pg_roles where rolname='$r'")" == "1" ]] && continue
  CREATED_ROLES+=("$r")
  [[ "$r" == imf_chat_worker ]] && continue   # the migration creates it
  extra=""; [[ "$r" == service_role ]] && extra="bypassrls"
  q "create role $r nologin $extra" >/dev/null
done
# Supabase-like defaults: anon/authenticated get ALL on new public objects unless revoked.
q "grant usage on schema public to anon, authenticated, service_role;
   alter default privileges in schema public grant all on tables to anon, authenticated, service_role;
   alter default privileges in schema public grant all on sequences to anon, authenticated, service_role;
   alter default privileges in schema public grant all on functions to anon, authenticated, service_role;
   create table public.imfrustrated_intake (id serial primary key, body text);" >/dev/null
for m in "$MIG" "$MIG4" "$MIG5" "$MIG7" "$MIG8" "$MIG8"; do
  out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$m" 2>&1)" || { no "apply $(basename "$m")" "$out"; exit 1; }
done

W="set role imf_chat_worker;"
K="00000000-0000-0000-0000-0000000000d1"
q "insert into imf_chat_cases (id, token_hash, status) values ('$K', repeat('d',64), 'queued')" >/dev/null

# --- F7: one active (queued/claimed) letter job per case
expect_eq   "first letter job inserts" "insert into imf_chat_jobs (id, case_id, kind) overriding system value values (801,'$K','letter') returning id" "801"
expect_fail "second queued letter job refused" "insert into imf_chat_jobs (case_id, kind) values ('$K','letter')" "imf_chat_jobs_one_active_letter"
expect_eq   "positive control: a followup job for the same case inserts" "insert into imf_chat_jobs (id, case_id, kind) overriding system value values (802,'$K','followup') returning id" "802"
q "update imf_chat_jobs set status='claimed', claimed_at=now() where id=801" >/dev/null
expect_fail "letter refused while one is claimed" "insert into imf_chat_jobs (case_id, kind) values ('$K','letter')" "imf_chat_jobs_one_active_letter"

# --- F3: imf_job_fail adds p_cost_delta to the case cost atomically; 2-arg shape still works
expect_eq   "job_fail with 0.40 -> true" "$W select imf_job_fail(801,'worker_exception',0.40)" "t"
expect_eq   "case cost_usd += 0.40, case held" "select cost_usd || ' ' || status from imf_chat_cases where id='$K'" "0.4000 held"
expect_eq   "positive control: letter inserts once the active one failed" "insert into imf_chat_jobs (id, case_id, kind, status, claimed_at) overriding system value values (803,'$K','letter','claimed',now()) returning id" "803"
expect_eq   "old 2-arg call shape still works (delta 0)" "$W select imf_job_fail(803,'worker_exception')" "t"
expect_eq   "cost unchanged by a 2-arg fail" "select cost_usd from imf_chat_cases where id='$K'" "0.4000"
expect_fail "negative delta refused" "$W select imf_job_fail(802,'worker_exception',-1)" "p_cost_delta must be >= 0"
expect_fail "anon cannot call imf_job_fail" "set role anon; select imf_job_fail(802,'x',0)" "permission denied"

echo "RESULT: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]]
