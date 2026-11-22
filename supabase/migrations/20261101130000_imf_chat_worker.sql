-- IFDO-CHATBOX U4: worker RPCs. The mini worker (role imf_chat_worker) has no table grant;
-- everything it does goes through these SECURITY DEFINER functions.
--   imf_claim_job_capped  day-cap aware claim (N6): claims only if day_spend + job max <= cap
--   imf_job_heartbeat     heartbeat_at = now() for a claimed job
--   imf_job_case          the case fields the pipeline needs, for a claimed job only
--   imf_write_result      letter / rerun / revision write-back; a new letter on rerun or revision
--                         bumps letter_version, which clears review (F2, via the cases guard)
--   imf_write_followup    answers the oldest unanswered follow-up
--   imf_job_fail          job failed + case held (SystemExit / Exception / 45-min timeout)
--   imf_fail_stale_jobs   claimed > 45 min, or stale heartbeat after the one re-queue -> failed + held
--   imf_purge             nightly retention (§4 M6, F8, N5): 7-day abandoned, 7-day unrun close,
--                         30-day ceiling (held + unreviewed closed first), rate-limit rows > 31 d
--   imf_worker_stats      oldest non-test queued job (min) and oldest unreviewed held case (days)
-- Follow-up convention (U5 writes it): followups is a jsonb array of {"q", "a", "status"}; the
-- worker answers the first element whose "a" is null. A revision's changed facts are the last turn.

create or replace function public.imf_claim_job_capped(p_day_spend numeric, p_day_cap numeric default 20.00,
                                                       p_include_test boolean default true)
returns table (job_id bigint, case_id uuid, kind text, attempts integer, is_test boolean)
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if p_day_spend is null or p_day_spend < 0 then
    raise exception 'p_day_spend required';
  end if;
  return query
  with next_job as (
    select j.id from public.imf_chat_jobs j join public.imf_chat_cases c on c.id = j.case_id
     where (j.status = 'queued'
            or (j.status = 'claimed' and j.heartbeat_at < now() - interval '10 minutes' and j.attempts < 2))
       and (p_include_test or not j.is_test)
       and (j.is_test
            or p_day_spend + case when j.kind = 'letter' then 2.00
                                  else greatest(2.00 - c.cost_usd, 0) end <= p_day_cap)
     order by j.created_at, j.id
     limit 1
     for update of j skip locked
  )
  update public.imf_chat_jobs j
     set status = 'claimed', claimed_at = now(), heartbeat_at = now(), attempts = j.attempts + 1
    from next_job
   where j.id = next_job.id
  returning j.id, j.case_id, j.kind, j.attempts, j.is_test;
end $$;

create or replace function public.imf_job_heartbeat(p_job_id bigint) returns boolean
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  update public.imf_chat_jobs set heartbeat_at = now() where id = p_job_id and status = 'claimed';
  return found;
end $$;

create or replace function public.imf_job_case(p_job_id bigint) returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare r jsonb;
begin
  select jsonb_build_object('id', c.id, 'job_id', j.id, 'kind', j.kind, 'is_test', c.is_test,
           'review_fixture', c.review_fixture, 'state', c.state, 'category', c.category,
           'counterparty', c.counterparty, 'amount_usd', c.amount_usd, 'key_dates', c.key_dates,
           'turns', c.turns, 'status', c.status, 'verdict', c.verdict, 'letter', c.letter,
           'cover', c.cover, 'sources', c.sources, 'followups', c.followups,
           'cost_usd', c.cost_usd, 'letter_version', c.letter_version,
           'review_reason', c.review_reason)
    into r
    from public.imf_chat_jobs j join public.imf_chat_cases c on c.id = j.case_id
   where j.id = p_job_id and j.status = 'claimed';
  if r is null then raise exception 'job % is not claimed', p_job_id; end if;
  return r;
end $$;

-- internal: lock the claimed job + its case, apply the cost delta inside the $2.00 case cap.
create or replace function public._imf_job_lock(p_job_id bigint, p_cost_delta numeric)
returns table (case_id uuid, kind text)
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid; v_kind text; v_cost numeric;
begin
  select j.case_id, j.kind into v_case, v_kind from public.imf_chat_jobs j
   where j.id = p_job_id and j.status = 'claimed' for update;
  if v_case is null then raise exception 'job % is not claimed', p_job_id; end if;
  if p_cost_delta is null or p_cost_delta < 0 then raise exception 'cost delta must be >= 0'; end if;
  select c.cost_usd into v_cost from public.imf_chat_cases c where c.id = v_case for update;
  if v_cost + p_cost_delta > 2.00 then
    raise exception 'case cost % + % exceeds the $2.00 case cap', v_cost, p_cost_delta;
  end if;
  update public.imf_chat_cases c set cost_usd = c.cost_usd + p_cost_delta where c.id = v_case;
  return query select v_case, v_kind;
end $$;

create or replace function public.imf_write_result(p_job_id bigint, p_status text, p_verdict text,
    p_letter text, p_cover text, p_sources jsonb, p_cost_delta numeric, p_held boolean,
    p_stop_reason text default null)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid; v_kind text; v_ver integer;
begin
  select l.case_id, l.kind into v_case, v_kind from public._imf_job_lock(p_job_id, p_cost_delta) l;
  if v_kind not in ('letter','rerun','revision') then
    raise exception 'imf_write_result is for letter/rerun/revision jobs, not %', v_kind;
  end if;
  update public.imf_chat_cases c
     set status = p_status, stop_reason = p_stop_reason,
         held_for_nick = c.held_for_nick or coalesce(p_held, true),
         verdict = case when p_letter is not null then p_verdict else c.verdict end,
         letter  = coalesce(p_letter, c.letter),
         cover   = case when p_letter is not null then p_cover else c.cover end,
         sources = case when p_letter is not null then p_sources else c.sources end,
         letter_version = case when p_letter is not null and v_kind in ('rerun','revision')
                               then c.letter_version + 1 else c.letter_version end
   where c.id = v_case
  returning c.letter_version into v_ver;
  update public.imf_chat_jobs set status = 'done' where id = p_job_id;
  return v_ver;
end $$;

create or replace function public.imf_write_followup(p_job_id bigint, p_answer text, p_status text,
                                                     p_cost_delta numeric)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid; v_kind text; v_idx integer;
begin
  select l.case_id, l.kind into v_case, v_kind from public._imf_job_lock(p_job_id, p_cost_delta) l;
  if v_kind <> 'followup' then raise exception 'imf_write_followup is for followup jobs, not %', v_kind; end if;
  select min(e.ord - 1) into v_idx
    from public.imf_chat_cases c, jsonb_array_elements(c.followups) with ordinality e(val, ord)
   where c.id = v_case and (e.val->>'a') is null;
  if v_idx is null then raise exception 'case has no unanswered follow-up'; end if;
  update public.imf_chat_cases c
     set followups = jsonb_set(c.followups, array[v_idx::text],
                               c.followups->v_idx || jsonb_build_object('a', p_answer, 'status', p_status))
   where c.id = v_case;
  update public.imf_chat_jobs set status = 'done' where id = p_job_id;
  return v_idx;
end $$;

create or replace function public.imf_job_fail(p_job_id bigint, p_reason text) returns boolean
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid;
begin
  if p_reason !~ '^[a-z0-9_]{1,40}$' then raise exception 'reason must be a code'; end if;
  update public.imf_chat_jobs set status = 'failed' where id = p_job_id and status = 'claimed'
  returning case_id into v_case;
  if v_case is null then return false; end if;
  update public.imf_chat_cases set held_for_nick = true, status = 'held', stop_reason = p_reason
   where id = v_case;
  return true;
end $$;

create or replace function public.imf_fail_stale_jobs() returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare n integer;
begin
  with f as (
    update public.imf_chat_jobs j set status = 'failed'
     where j.status = 'claimed'
       and (j.claimed_at < now() - interval '45 minutes'
            or (j.heartbeat_at < now() - interval '10 minutes' and j.attempts >= 2))
    returning j.case_id
  )
  update public.imf_chat_cases c set held_for_nick = true, status = 'held', stop_reason = 'worker_timeout'
    from f where c.id = f.case_id;
  get diagnostics n = row_count;
  return n;
end $$;

create or replace function public.imf_purge(p_now timestamptz default now())
returns table (case_id uuid, action text)
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  -- 7-day close of a case still unrun 7 days after it was queued (§4): closed, purged on its date.
  return query
  with stuck as (
    update public.imf_chat_jobs j set status = 'failed'
     where j.kind = 'letter' and j.status = 'queued' and j.created_at <= p_now - interval '7 days'
    returning j.case_id
  ), closed as (
    update public.imf_chat_cases c set status = 'closed', stop_reason = 'unrun_7d'
      from stuck where c.id = stuck.case_id
    returning c.id
  ) select closed.id, 'closed_unrun'::text from closed;

  -- Abandoned intake (never queued): purge_after moves EARLIER to created_at + 7 d.
  update public.imf_chat_cases c set purge_after = c.created_at + interval '7 days'
   where c.status = 'intake' and c.purge_after > c.created_at + interval '7 days'
     and not exists (select 1 from public.imf_chat_jobs j where j.case_id = c.id);

  -- 30-day ceiling (N5): a held, unreviewed case is closed with the legal-aid card, never released.
  return query
  update public.imf_chat_cases c set status = 'closed', stop_reason = 'held_ceiling'
   where c.purge_after <= p_now and c.held_for_nick and c.review is null and c.status <> 'closed'
  returning c.id, 'closed_held'::text;

  return query
  delete from public.imf_chat_cases c where c.purge_after <= p_now returning c.id, 'purged'::text;

  delete from public.imf_chat_rl r where r.window_start < p_now - interval '31 days';
end $$;

create or replace function public.imf_worker_stats() returns jsonb
language sql security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'oldest_queued_min', coalesce((select round(extract(epoch from now() - min(created_at)) / 60)
                                     from public.imf_chat_jobs where status = 'queued' and not is_test), 0),
    'oldest_unreviewed_held_days', coalesce((select round(extract(epoch from now() - min(created_at)) / 86400, 1)
                                     from public.imf_chat_cases
                                    where held_for_nick and review is null and status <> 'closed'
                                      and not is_test), 0));
$$;

do $$
declare f text;
begin
  foreach f in array array[
    'imf_claim_job_capped(numeric, numeric, boolean)', 'imf_job_heartbeat(bigint)',
    'imf_job_case(bigint)', '_imf_job_lock(bigint, numeric)',
    'imf_write_result(bigint, text, text, text, text, jsonb, numeric, boolean, text)',
    'imf_write_followup(bigint, text, text, numeric)', 'imf_job_fail(bigint, text)',
    'imf_fail_stale_jobs()', 'imf_purge(timestamptz)', 'imf_worker_stats()']
  loop
    execute format('revoke all on function public.%s from public, anon, authenticated, service_role', f);
    if f not like '\_imf%' then
      execute format('grant execute on function public.%s to imf_chat_worker', f);
    end if;
  end loop;
end $$;
