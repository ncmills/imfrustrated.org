#!/usr/bin/env bash
# U5b worker-RPC test. Scratch local Postgres ONLY: creates imf_u5b_scratch_<pid>,
# stubs the Supabase roles, applies the migration, asserts, drops everything.
# Never connects to any other database; no keys, no env, no Supabase cloud.
# Run: bash scripts/supabase-tests/imf-chat-u4.sh
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
MIG="$HERE/../../supabase/migrations/20261101120000_imf_chat.sql"
MIG4="${IMF_U4_MIG:-$HERE/../../supabase/migrations/20261101130000_imf_chat_worker.sql}"  # override only for mutant runs
MIG5="${IMF_U5B_MIG:-$HERE/../../supabase/migrations/20261101140000_imf_chat_review.sql}"  # override only for mutant runs
DB="imf_u5b_scratch_$$"
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
for m in "$MIG" "$MIG4" "$MIG5" "$MIG5"; do
  out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$m" 2>&1)" || { no "apply $(basename "$m")" "$out"; exit 1; }
done

S="set role service_role;"
C="00000000-0000-0000-0000-0000000000c1"
q "insert into imf_chat_cases (id, token_hash, status, letter, held_for_nick) values ('$C', repeat('a',64), 'pass', 'L', true)" >/dev/null
q "insert into imf_chat_cases (id, token_hash, status, letter, held_for_nick) values ('00000000-0000-0000-0000-0000000000c2', repeat('b',64), 'pass', 'L', true)" >/dev/null
expect_fail "anon cannot execute imf_chat_review" "set role anon; select imf_chat_review('$C',1,'ok')" "permission denied"
expect_fail "authenticated cannot execute imf_chat_review" "set role authenticated; select imf_chat_review('$C',1,'ok')" "permission denied"
expect_fail "review value outside the enum is rejected" "$S select imf_chat_review('$C',1,'edit')" "ok, rerun or close"
expect_fail "rerun without a reason is rejected" "$S select imf_chat_review('$C',1,'rerun')" "rerun_reason"
expect_fail "ok with a reason is rejected" "$S select imf_chat_review('$C',1,'ok','tone')" "rerun_reason"
expect_fail "rerun reason outside the enum is rejected" "$S select imf_chat_review('$C',1,'rerun','make it nicer')" "check constraint"
expect_fail "stale letter_version is rejected" "$S select imf_chat_review('$C',2,'ok')" "current letter_version"
expect_eq   "no text parameter: signature is (uuid, int, text, text, text) only" "select pg_get_function_identity_arguments('public.imf_chat_review'::regproc)" "p_case_id uuid, p_letter_version integer, p_review text, p_rerun_reason text, p_note text"
expect_eq   "rerun queues one rerun job" "$S select imf_chat_review('$C',1,'rerun','missed_fact','SENTINEL-NOTE')->>'review'; select count(*) from imf_chat_jobs where case_id='$C' and kind='rerun'" "rerun
1"
expect_eq   "case review columns set by the guard" "select review||':'||review_reason from imf_chat_cases where id='$C'" "rerun:missed_fact"
expect_eq   "letter text untouched by review (N2)" "select letter from imf_chat_cases where id='$C'" "L"
expect_fail "second review of the same version is rejected" "$S select imf_chat_review('$C',1,'ok')" "duplicate key|one_per_version"
expect_eq   "close sets status closed, no job" "$S select imf_chat_review('00000000-0000-0000-0000-0000000000c2',1,'close')->>'review'; select status||':'||(select count(*) from imf_chat_jobs where case_id='00000000-0000-0000-0000-0000000000c2') from imf_chat_cases where id='00000000-0000-0000-0000-0000000000c2'" "close
closed:0"
expect_fail "unknown case is rejected" "$S select imf_chat_review('00000000-0000-0000-0000-0000000000ff',1,'ok')" "no such case"

echo "RESULT: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]]
