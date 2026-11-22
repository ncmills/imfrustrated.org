#!/usr/bin/env bash
# U7 fix-round test (F1 held follow-ups, F2 rerun fit + rerun alarms). Scratch local Postgres ONLY: creates imf_u7_scratch_<pid>,
# stubs the Supabase roles, applies the migration, asserts, drops everything.
# Never connects to any other database; no keys, no env, no Supabase cloud.
# Run: bash scripts/supabase-tests/imf-chat-u7.sh
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
MIG="$HERE/../../supabase/migrations/20261101120000_imf_chat.sql"
MIG4="${IMF_U4_MIG:-$HERE/../../supabase/migrations/20261101130000_imf_chat_worker.sql}"  # override only for mutant runs
MIG5="$HERE/../../supabase/migrations/20261101140000_imf_chat_review.sql"
MIG7="${IMF_U7_MIG:-$HERE/../../supabase/migrations/20261102120000_imf_chat_followup_review.sql}"  # override only for mutant runs
DB="imf_u7_scratch_$$"
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
for m in "$MIG" "$MIG4" "$MIG5" "$MIG7" "$MIG7"; do
  out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$m" 2>&1)" || { no "apply $(basename "$m")" "$out"; exit 1; }
done

S="set role service_role;"
W="set role imf_chat_worker;"
C="00000000-0000-0000-0000-0000000000c1"   # held case
N="00000000-0000-0000-0000-0000000000c2"   # not held (positive control)
q "insert into imf_chat_cases (id, token_hash, status, letter, held_for_nick, review, followups) values
   ('$C', repeat('a',64), 'pass', 'L', true, null, '[{\"q\":\"q0\",\"a\":null},{\"q\":\"q1\",\"a\":null},{\"q\":\"q2\",\"a\":null}]'),
   ('$N', repeat('b',64), 'pass', 'L', false, null, '[{\"q\":\"q0\",\"a\":null}]')" >/dev/null
q "insert into imf_chat_jobs (id, case_id, kind, status, claimed_at) overriding system value values
   (901,'$C','followup','claimed',now()), (902,'$C','followup','claimed',now()),
   (903,'$C','followup','claimed',now()), (904,'$N','followup','claimed',now())" >/dev/null

# --- F1: answers on a held case are stored held
expect_eq   "held case: answer stored held=true" "$W select imf_write_followup(901,'SENTINEL-A0','ok',0.05); reset role; select followups->0->>'held' from imf_chat_cases where id='$C'" "0
true"
q "$W select imf_write_followup(902,'SENTINEL-A1','ok',0.05)" >/dev/null
q "$W select imf_write_followup(903,'SENTINEL-A2','ok',0.05)" >/dev/null
expect_eq   "positive control: not-held case stores held=false" "$W select imf_write_followup(904,'A','ok',0.05); reset role; select followups->0->>'held' from imf_chat_cases where id='$N'" "0
false"
expect_eq   "stats count 3 held unreviewed follow-ups" "select imf_worker_stats()->>'held_followups_unreviewed'" "3"
expect_fail "anon cannot execute imf_chat_review_followup" "set role anon; select imf_chat_review_followup('$C',0,'ok')" "permission denied"
expect_fail "authenticated cannot execute imf_chat_review_followup" "set role authenticated; select imf_chat_review_followup('$C',0,'ok')" "permission denied"
expect_fail "worker cannot execute imf_chat_review_followup" "$W select imf_chat_review_followup('$C',0,'ok')" "permission denied"
expect_eq   "no text parameter: signature is (uuid, int, text)" "select pg_get_function_identity_arguments('public.imf_chat_review_followup'::regproc)" "p_case uuid, p_idx integer, p_verdict text"
expect_fail "verdict outside ok|close is rejected" "$S select imf_chat_review_followup('$C',0,'rerun')" "ok or close"
expect_fail "free text as verdict is rejected" "$S select imf_chat_review_followup('$C',0,'SENTINEL-EDIT')" "ok or close"
expect_fail "unknown index is rejected" "$S select imf_chat_review_followup('$C',4,'ok')" "no such follow-up"
expect_fail "not-held answer cannot be reviewed" "$S select imf_chat_review_followup('$N',0,'ok')" "not held"
expect_eq   "ok releases idx 0" "$S select imf_chat_review_followup('$C',0,'ok')->>'review'; reset role; select followups->0->>'review' from imf_chat_cases where id='$C'" "ok
ok"
expect_eq   "close marks idx 1 closed" "$S select imf_chat_review_followup('$C',1,'close')->>'review'; reset role; select followups->1->>'review' from imf_chat_cases where id='$C'" "close
close"
expect_fail "a reviewed answer cannot be reviewed again (close is final)" "$S select imf_chat_review_followup('$C',1,'ok')" "already reviewed"
expect_eq   "answer text untouched by review" "select string_agg(e->>'a', ',' order by o) from imf_chat_cases, jsonb_array_elements(followups) with ordinality t(e,o) where id='$C'" "SENTINEL-A0,SENTINEL-A1,SENTINEL-A2"
expect_eq   "stats now count 1 held unreviewed follow-up" "select imf_worker_stats()->>'held_followups_unreviewed'" "1"

# --- F2: rerun fit check under the \$2.00 case cap (\$0.75 reserve)
R1="00000000-0000-0000-0000-0000000000d1"; R2="00000000-0000-0000-0000-0000000000d2"
q "insert into imf_chat_cases (id, token_hash, status, letter, held_for_nick, cost_usd, created_at) values
   ('$R1', repeat('c',64), 'pass', 'L', true, 1.26, now()), ('$R2', repeat('d',64), 'pass', 'L', true, 1.25, now() - interval '20 days')" >/dev/null
expect_fail "rerun refused with \$0.74 left" "$S select imf_chat_review('$R1',1,'rerun','tone')" "rerun does not fit the \\\$2.00 case cap"
expect_eq   "refused rerun wrote no review and no job" "select (select count(*) from imf_chat_reviews where case_id='$R1')||':'||(select count(*) from imf_chat_jobs where case_id='$R1')" "0:0"
expect_eq   "positive control: rerun fits with exactly \$0.75 left" "$S select imf_chat_review('$R2',1,'rerun','tone')->>'review'" "rerun"
expect_eq   "ok/close are not fit-checked" "$S select imf_chat_review('$R1',1,'ok')->>'review'" "ok"

# --- F2: a held case stuck at review='rerun' stays in the stale alarm and the held ceiling
expect_eq   "stale alarm counts a rerun-held case" "select (imf_worker_stats()->>'oldest_unreviewed_held_days')::numeric >= 19" "t"
q "update imf_chat_cases set purge_after = now() + interval '1 day' where id <> '$R2'; update imf_chat_cases set purge_after = now() - interval '1 minute' where id = '$R2'" >/dev/null
expect_eq   "held ceiling closes a rerun-held case" "select action from imf_purge() where case_id='$R2' order by action" "closed_held
purged"

echo "RESULT: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]]
