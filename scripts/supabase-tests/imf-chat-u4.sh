#!/usr/bin/env bash
# U4 worker-RPC test. Scratch local Postgres ONLY: creates imf_u4_scratch_<pid>,
# stubs the Supabase roles, applies the migration, asserts, drops everything.
# Never connects to any other database; no keys, no env, no Supabase cloud.
# Run: bash scripts/supabase-tests/imf-chat-u4.sh
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
MIG="$HERE/../../supabase/migrations/20261101120000_imf_chat.sql"
MIG4="${IMF_U4_MIG:-$HERE/../../supabase/migrations/20261101130000_imf_chat_worker.sql}"  # override only for mutant runs
DB="imf_u4_scratch_$$"
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
for m in "$MIG" "$MIG4" "$MIG4"; do
  out="$(psql -X -q -v ON_ERROR_STOP=1 -d "$DB" -f "$m" 2>&1)" || { no "apply $(basename "$m")" "$out"; exit 1; }
done
ok "U3 + U4 migrations apply (U4 twice: idempotent)"
W="set role imf_chat_worker;"
mk() {  # mk <tag> [created_at sql] [extra cols] [extra vals] -> case id
  q "insert into imf_chat_cases(token_hash, created_at, status ${3:-}) values (encode(sha256('$1'::bytea),'hex'), ${2:-now()}, 'queued' ${4:-}) returning id"
}
job() { q "insert into imf_chat_jobs(case_id, kind, is_test, created_at) values ('$1','$2', ${3:-false}, ${4:-now()}) returning id"; }

# --- grants: worker has the RPCs and no table
expect_fail "worker cannot select imf_chat_cases" "$W select count(*) from imf_chat_cases" "permission denied"
expect_fail "worker cannot select imfrustrated_intake" "$W select count(*) from imfrustrated_intake" "permission denied"
expect_fail "anon cannot execute imf_purge" "set role anon; select count(*) from imf_purge()" "permission denied"
expect_fail "service_role cannot execute imf_write_result" "set role service_role; select imf_write_result(1,'pass','PASS','x','c','[]',0,true)" "permission denied"
expect_fail "worker cannot call internal _imf_job_lock" "$W select * from _imf_job_lock(1, 0)" "permission denied"

# --- day cap (N6): $19.99 spent + a $2.00 letter job -> not claimed
C1=$(mk c1); J1=$(job "$C1" letter)
expect_eq "day cap: 19.99 + letter 2.00 > 20 -> not claimed" "$W select count(*) from imf_claim_job_capped(19.99)" "0"
expect_eq "day cap: job still queued" "select status from imf_chat_jobs where id=$J1" "queued"
expect_eq "day cap: 18.00 + 2.00 = 20 -> claimed" "$W select job_id from imf_claim_job_capped(18.00)" "$J1"
CT=$(mk ct "now()" ",is_test" ",true"); JT=$(job "$CT" letter true)
expect_eq "test job is outside the day cap" "$W select job_id from imf_claim_job_capped(25.00)" "$JT"
C2=$(mk c2); q "update imf_chat_cases set cost_usd=1.80 where id='$C2'" >/dev/null; JF=$(job "$C2" followup)
expect_eq "followup max = remaining cap 0.20: 19.85 -> not claimed" "$W select count(*) from imf_claim_job_capped(19.85)" "0"
expect_eq "followup max = remaining cap 0.20: 19.80 -> claimed" "$W select job_id from imf_claim_job_capped(19.80)" "$JF"
expect_fail "claim refuses a null day spend" "$W select * from imf_claim_job_capped(null)" "p_day_spend required"

# --- heartbeat + case read
q "update imf_chat_jobs set heartbeat_at = now() - interval '5 minutes' where id=$J1" >/dev/null
expect_eq "heartbeat on a claimed job" "$W select imf_job_heartbeat($J1)" "t"
expect_eq "heartbeat moved heartbeat_at" "select heartbeat_at > now() - interval '1 minute' from imf_chat_jobs where id=$J1" "t"
expect_eq "case read for a claimed job" "$W select imf_job_case($J1)->>'kind'" "letter"
expect_fail "case read for an unclaimed job refused" "$W select imf_job_case(999999)" "is not claimed"

# --- letter write-back
expect_eq "letter write-back returns version 1" "$W select imf_write_result($J1,'pass','PASS','LETTER-1','COVER-1','[\"https://a\"]',1.10,true)" "1"
expect_eq "letter stored, cost, held, job done" "select letter||'|'||cost_usd||'|'||held_for_nick||'|'||(select status from imf_chat_jobs where id=$J1) from imf_chat_cases where id='$C1'" "LETTER-1|1.1000|true|done"
expect_fail "write-back on a done job refused" "$W select imf_write_result($J1,'pass','PASS','x','c','[]',0,true)" "is not claimed"

# --- rerun bumps letter_version and clears review (F2)
q "insert into imf_chat_reviews(case_id, letter_version, review, rerun_reason) values ('$C1',1,'rerun','tone')" >/dev/null
expect_eq "review rerun logged on v1" "select review from imf_chat_cases where id='$C1'" "rerun"
JR=$(job "$C1" rerun); q "$W select job_id from imf_claim_job_capped(0)" >/dev/null
expect_eq "rerun write-back -> version 2" "$W select imf_write_result($JR,'pass','PASS','LETTER-2','COVER-2','[]',0.55,true)" "2"
expect_eq "rerun cleared review, kept 30-day purge" "select coalesce(review,'null')||'|'||letter||'|'||(purge_after = created_at + interval '30 days') from imf_chat_cases where id='$C1'" "null|LETTER-2|true"
JX=$(job "$C1" revision); q "$W select job_id from imf_claim_job_capped(0)" >/dev/null
expect_fail "write-back past the 2.00 case cap refused" "$W select imf_write_result($JX,'pass','PASS','L3','C3','[]',0.40,true)" "exceeds the \\\$2.00 case cap"
expect_eq "refused write left cost and version unchanged" "select cost_usd||'|'||letter_version from imf_chat_cases where id='$C1'" "1.6500|2"
expect_eq "revision with no letter (free limit) keeps the version" "$W select imf_write_result($JX,'free_limit',null,null,null,null,0,true)" "2"

# --- follow-up write-back
q "update imf_chat_cases set followups='[{\"q\":\"Q1\",\"a\":\"A1\"},{\"q\":\"Q2\",\"a\":null}]' where id='$C2'" >/dev/null
expect_eq "followup answers the first unanswered entry" "$W select imf_write_followup($JF,'A2','answer',0.02)" "1"
expect_eq "followup stored" "select followups->1->>'a'||'|'||cost_usd from imf_chat_cases where id='$C2'" "A2|1.8200"
expect_fail "write_followup refuses a letter job" "$W select imf_write_followup($JT,'x','answer',0)" "not letter"

# --- fail + stale sweep
expect_eq "job_fail -> true" "$W select imf_job_fail($JT,'worker_exception')" "t"
expect_eq "failed job holds the case" "select status||'|'||held_for_nick||'|'||stop_reason from imf_chat_cases where id='$CT'" "held|true|worker_exception"
expect_fail "job_fail reason must be a code" "$W select imf_job_fail(1,'free text here')" "reason must be a code"
C3=$(mk c3); J3=$(job "$C3" letter); q "$W select job_id from imf_claim_job_capped(0)" >/dev/null
q "update imf_chat_jobs set claimed_at = now() - interval '46 minutes' where id=$J3" >/dev/null
expect_eq "stale sweep fails a 46-min job" "$W select imf_fail_stale_jobs()" "1"
expect_eq "timed-out case held" "select status||'|'||stop_reason from imf_chat_cases where id='$C3'" "held|worker_timeout"

# --- retention (M6, F8, N5)
q "delete from imf_chat_cases" >/dev/null
A=$(q "insert into imf_chat_cases(token_hash, created_at) values (encode(sha256('a'::bytea),'hex'), now() - interval '8 days') returning id")
R=$(mk r "now() - interval '30 days 1 minute'"); q "update imf_chat_cases set letter='L', review='ok' where id='$R'" >/dev/null
U=$(mk u "now() - interval '8 days'"); JU=$(job "$U" letter false "now() - interval '8 days'")
H=$(mk h "now() - interval '30 days 1 minute'" ",held_for_nick" ",true"); JH=$(job "$H" letter)
K=$(mk k "now() - interval '3 days'")
q "insert into imf_chat_rl(key, scope, window_secs, window_start, count) values (encode(sha256('old'::bytea),'hex'),'case',86400, now() - interval '32 days',1),(encode(sha256('new'::bytea),'hex'),'case',86400, now() - interval '1 day',1)" >/dev/null
OUT="$(q "$W select case_id||':'||action from imf_purge() order by 1")"
grep -q "$A:purged" <<<"$OUT" && ok "abandoned intake at 7 d purged" || no "abandoned purge" "$OUT"
grep -q "$R:purged" <<<"$OUT" && ok "result case purged at created_at + 30 d" || no "30 d purge" "$OUT"
grep -q "$U:closed_unrun" <<<"$OUT" && ok "unrun 7 d after queued -> closed" || no "unrun close" "$OUT"
grep -q "$H:closed_held" <<<"$OUT" && grep -q "$H:purged" <<<"$OUT" && ok "held unreviewed at 30 d -> closed, then purged" || no "held ceiling" "$OUT"
expect_eq "unrun case kept until its purge date, status closed" "select status||'|'||stop_reason from imf_chat_cases where id='$U'" "closed|unrun_7d"
expect_eq "young case untouched" "select status from imf_chat_cases where id='$K'" "queued"
expect_eq "purged cases' jobs removed" "select count(*) from imf_chat_jobs where id=$JH" "0"
expect_eq "rate-limit rows > 31 d deleted, newer kept" "select count(*) from imf_chat_rl" "1"
expect_eq "every row has a purge_after" "select count(*) from imf_chat_cases where purge_after is null" "0"
expect_fail "purge_after still never increases" "update imf_chat_cases set purge_after = purge_after + interval '1 day' where id='$K'" "may only move earlier"
expect_eq "stats: oldest unreviewed held (days)" "$W select (imf_worker_stats()->>'oldest_unreviewed_held_days')::numeric >= 0" "t"

echo "RESULT: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]]
