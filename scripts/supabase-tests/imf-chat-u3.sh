#!/usr/bin/env bash
# U3 migration test. Scratch local Postgres ONLY: creates imf_u3_scratch_<pid>,
# stubs the Supabase roles, applies the migration, asserts, drops everything.
# Never connects to any other database; no keys, no env, no Supabase cloud.
# Run: bash scripts/supabase-tests/imf-chat-u3.sh
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
MIG="${IMF_U3_MIG:-$HERE/../../supabase/migrations/20261101120000_imf_chat.sql}"  # override only for mutant runs
DB="imf_u3_scratch_$$"
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

out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$MIG" 2>&1)" && ok "migration applies" || { no "migration applies" "$out"; exit 1; }
out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$MIG" 2>&1)" && ok "migration re-applies (idempotent)" || no "migration re-applies" "$out"

H() { printf '%064x' "$1"; }   # fake 64-hex hash
CASE=$(q "insert into imf_chat_cases(token_hash) values ('$(H 1)') returning id")
CASE2=$(q "insert into imf_chat_cases(token_hash, created_at, purge_after, is_test) values ('$(H 2)', now() - interval '3 days', now() + interval '400 days', true) returning id")
q "insert into imf_chat_jobs(case_id, kind) values ('$CASE','letter')" >/dev/null
q "insert into imf_chat_reviews(case_id, letter_version, review) values ('$CASE',1,'ok')" >/dev/null
q "select imf_rl_hit('$(H 9)','case',86400,1)" >/dev/null

# --- anon / authenticated denied on every table
for role in anon authenticated; do
  for t in imf_chat_cases imf_chat_jobs imf_chat_rl imf_chat_reviews; do
    expect_fail "$role SELECT $t denied" "set role $role; select count(*) from $t" "permission denied"
  done
  expect_fail "$role INSERT imf_chat_cases denied" "set role $role; insert into imf_chat_cases(token_hash) values ('$(H 3)')" "permission denied"
  expect_fail "$role INSERT imf_chat_jobs denied" "set role $role; insert into imf_chat_jobs(case_id,kind) values ('$CASE','letter')" "permission denied"
  expect_fail "$role INSERT imf_chat_rl denied" "set role $role; insert into imf_chat_rl values ('$(H 4)','x',60,now(),1)" "permission denied"
  expect_fail "$role INSERT imf_chat_reviews denied" "set role $role; insert into imf_chat_reviews(case_id,letter_version,review) values ('$CASE',1,'ok')" "permission denied"
  expect_fail "$role EXECUTE imf_claim_job denied" "set role $role; select * from imf_claim_job()" "permission denied"
  expect_fail "$role EXECUTE imf_rl_hit denied" "set role $role; select imf_rl_hit('$(H 5)','x',60,1)" "permission denied"
done
# RLS layer alone (positive control: grant back, still no rows visible / insertable)
q "grant select, insert on imf_chat_cases to anon" >/dev/null
expect_eq   "RLS hides rows from anon even with a grant" "set role anon; select count(*) from imf_chat_cases" "0"
expect_fail "RLS blocks anon insert even with a grant" "set role anon; insert into imf_chat_cases(token_hash) values ('$(H 6)')" "row-level security"
q "revoke select, insert on imf_chat_cases from anon" >/dev/null
expect_eq "RLS enabled on all 4 tables" "select count(*) from pg_class where relname like 'imf_chat_%' and relkind='r' and relrowsecurity" "4"

# --- worker role: RPCs only
for t in imf_chat_cases imf_chat_jobs imf_chat_rl imf_chat_reviews imfrustrated_intake; do
  expect_fail "worker SELECT $t denied" "set role imf_chat_worker; select count(*) from $t" "permission denied"
done
expect_eq "worker has zero table grants" "select count(*) from information_schema.role_table_grants where grantee='imf_chat_worker'" "0"
expect_eq "worker can call imf_rl_hit (1st hit allowed)" "set role imf_chat_worker; select imf_rl_hit('$(H 7)','turn',3600,2)" "t"
q "set role imf_chat_worker; select imf_rl_hit('$(H 7)','turn',3600,2)" >/dev/null
expect_eq "imf_rl_hit refuses past the limit" "set role imf_chat_worker; select imf_rl_hit('$(H 7)','turn',3600,2)" "f"
expect_fail "imf_chat_rl rejects a raw IP key" "select imf_rl_hit('203.0.113.7','turn',3600,2)" "check constraint"
expect_eq "worker can call imf_claim_job" "set role imf_chat_worker; select kind from imf_claim_job()" "letter"

# --- purge_after
expect_eq "every case: purge_after = created_at + 30 d" "select count(*) from imf_chat_cases where purge_after is null or purge_after <> created_at + interval '30 days'" "0"
expect_eq "insert cannot set a later purge_after" "select purge_after = created_at + interval '30 days' from imf_chat_cases where id='$CASE2'" "t"
expect_fail "purge_after cannot be NULL" "update imf_chat_cases set purge_after = null where id='$CASE'" "only move earlier|null value"
expect_fail "purge_after never extended" "update imf_chat_cases set purge_after = purge_after + interval '1 day' where id='$CASE'" "only move earlier"
expect_eq "purge_after may move earlier (7 d abandoned)" "update imf_chat_cases set purge_after = created_at + interval '7 days' where id='$CASE2' returning (purge_after = created_at + interval '7 days')" "t"
expect_fail "created_at immutable" "update imf_chat_cases set created_at = created_at - interval '1 day' where id='$CASE'" "immutable"
expect_fail "is_test and review_fixture never both true" "insert into imf_chat_cases(token_hash,is_test,review_fixture) values ('$(H 8)',true,true)" "check constraint"

# --- reviews append-only + per letter_version (F2)
expect_eq   "review insert mirrors onto the case" "select review from imf_chat_cases where id='$CASE'" "ok"
for role in "" "set role service_role;"; do
  lbl="${role:+service_role }"
  expect_fail "${lbl}UPDATE imf_chat_reviews raises" "$role update imf_chat_reviews set review='close'" "append-only|permission denied"
  expect_fail "${lbl}DELETE imf_chat_reviews raises" "$role delete from imf_chat_reviews" "append-only|permission denied"
done
expect_fail "TRUNCATE imf_chat_reviews raises" "truncate imf_chat_reviews" "append-only"
expect_fail "one review per letter_version" "insert into imf_chat_reviews(case_id,letter_version,review) values ('$CASE',1,'close')" "duplicate key"
expect_eq   "new letter_version clears review" "update imf_chat_cases set letter_version = 2 where id='$CASE' returning coalesce(review,'null')" "null"
expect_fail "review must target current version" "insert into imf_chat_reviews(case_id,letter_version,review) values ('$CASE',1,'ok')" "current letter_version"
expect_fail "rerun needs a reason code" "insert into imf_chat_reviews(case_id,letter_version,review) values ('$CASE',2,'rerun')" "check constraint"
expect_eq   "service_role can insert a v2 review" "set role service_role; insert into imf_chat_reviews(case_id,letter_version,review,rerun_reason) values ('$CASE',2,'rerun','tone') returning letter_version" "2"
expect_eq   "purge of the case cascades its reviews + jobs" "delete from imf_chat_cases where id='$CASE'; select (select count(*) from imf_chat_reviews where case_id='$CASE') + (select count(*) from imf_chat_jobs where case_id='$CASE')" "0"

# --- imf_claim_job: two sessions never get the same job
q "delete from imf_chat_jobs; insert into imf_chat_jobs(case_id, kind) select '$CASE2','letter' from generate_series(1,2)" >/dev/null
A_OUT="$(mktemp)"; B_OUT="$(mktemp)"
psql -X -q -At -d "$DB" -c "begin; set local role imf_chat_worker; select job_id from imf_claim_job(); select pg_sleep(3); commit;" >"$A_OUT" 2>&1 &
APID=$!; sleep 1
T0=$(python3 -c "import time;print(int(time.time()*1000))")
psql -X -q -At -d "$DB" -c "set role imf_chat_worker; select job_id from imf_claim_job();" >"$B_OUT" 2>&1
T1=$(python3 -c "import time;print(int(time.time()*1000))"); wait $APID
A=$(grep -E '^[0-9]+$' "$A_OUT" | head -1); B=$(grep -E '^[0-9]+$' "$B_OUT" | head -1)
[[ -n "$A" && -n "$B" && "$A" != "$B" ]] && ok "concurrent claims get different jobs (A=$A B=$B)" || no "concurrent claims" "A=[$A] B=[$B]"
(( T1 - T0 < 1000 )) && ok "second claimer did not block on the locked job ($((T1-T0)) ms)" || no "second claimer blocked" "$((T1-T0)) ms"
rm -f "$A_OUT" "$B_OUT"

N=60; P=6
q "delete from imf_chat_jobs; insert into imf_chat_jobs(case_id, kind) select '$CASE2','followup' from generate_series(1,$N)" >/dev/null
RACE="$(mktemp -d)"
for i in $(seq 1 $P); do
  ( for k in $(seq 1 $N); do psql -X -q -At -d "$DB" -c "set role imf_chat_worker; select job_id from imf_claim_job();" 2>/dev/null; done | grep -E '^[0-9]+$' > "$RACE/$i" ) &
done
wait
TOTAL=$(cat "$RACE"/* | wc -l | tr -d ' '); UNIQ=$(cat "$RACE"/* | sort -u | wc -l | tr -d ' ')
[[ "$TOTAL" == "$N" && "$UNIQ" == "$N" ]] && ok "race: $P workers claimed $N jobs, 0 duplicates" || no "race" "total=$TOTAL uniq=$UNIQ want $N"
rm -rf "$RACE"
expect_eq "no job claimed twice (attempts all 1)" "select count(*) from imf_chat_jobs where attempts <> 1 or status <> 'claimed'" "0"
q "update imf_chat_jobs set heartbeat_at = now() - interval '11 minutes' where id = (select min(id) from imf_chat_jobs)" >/dev/null
expect_eq "stale claim (no heartbeat 10 min) is re-claimed once" "set role imf_chat_worker; select attempts from imf_claim_job()" "2"
q "update imf_chat_jobs set heartbeat_at = now() - interval '11 minutes' where attempts = 2" >/dev/null
expect_eq "a twice-claimed stale job is not re-claimed again" "set role imf_chat_worker; select count(*) from imf_claim_job()" "0"

echo "RESULT: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]]
