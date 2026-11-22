-- imf_chat U7 fix round (adversarial review F1, F2). New migration; applied ones are untouched.
--
-- F1 (spec §2 M2): a follow-up answer on a case that is held_for_nick is stored held, like a
-- letter. The poll shows it only once a reviewer releases it through imf_chat_review_followup
-- (verdict ok | close, no text parameter). A closed answer is never shown.
--   followups[i] = {q, a, status, held: bool, review?: 'ok'|'close', review_at?}
-- F2 (spec §5 Rerun row): imf_chat_review refuses a rerun unless the case has >= $0.75 of its
-- $2.00 cap left (the AUDIT_BUDGET reserve). The held ceiling and the stale alarm use
-- review IS DISTINCT FROM 'ok', so a case stuck at review='rerun' is covered too.

-- ---------------------------------------------------------------- F1: store held
create or replace function public.imf_write_followup(p_job_id bigint, p_answer text, p_status text,
                                                     p_cost_delta numeric)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid; v_kind text; v_idx integer; v_held boolean;
begin
  select l.case_id, l.kind into v_case, v_kind from public._imf_job_lock(p_job_id, p_cost_delta) l;
  if v_kind <> 'followup' then raise exception 'imf_write_followup is for followup jobs, not %', v_kind; end if;
  select c.held_for_nick into v_held from public.imf_chat_cases c where c.id = v_case;
  select min(e.ord - 1) into v_idx
    from public.imf_chat_cases c, jsonb_array_elements(c.followups) with ordinality e(val, ord)
   where c.id = v_case and (e.val->>'a') is null;
  if v_idx is null then raise exception 'case has no unanswered follow-up'; end if;
  update public.imf_chat_cases c
     set followups = jsonb_set(c.followups, array[v_idx::text],
                               (c.followups->v_idx) - 'review' - 'review_at'
                               || jsonb_build_object('a', p_answer, 'status', p_status,
                                                     'held', coalesce(v_held, true)))
   where c.id = v_case;
  update public.imf_chat_jobs set status = 'done' where id = p_job_id;
  return v_idx;
end $$;

-- ---------------------------------------------------------------- F1: review a held follow-up
create or replace function public.imf_chat_review_followup(p_case uuid, p_idx integer, p_verdict text)
returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_f jsonb;
begin
  if p_verdict is null or p_verdict not in ('ok','close') then
    raise exception 'followup verdict must be ok or close';
  end if;
  if p_idx is null or p_idx < 0 or p_idx > 4 then raise exception 'bad followup index'; end if;
  select c.followups->p_idx into v_f from public.imf_chat_cases c where c.id = p_case for update;
  if v_f is null then raise exception 'no such follow-up'; end if;
  if (v_f->>'a') is null then raise exception 'follow-up % is not answered yet', p_idx; end if;
  if coalesce((v_f->>'held')::boolean, true) is not true then raise exception 'follow-up % is not held', p_idx; end if;
  if v_f ? 'review' then raise exception 'follow-up % is already reviewed', p_idx; end if;
  update public.imf_chat_cases c
     set followups = jsonb_set(c.followups, array[p_idx::text],
                               v_f || jsonb_build_object('review', p_verdict, 'review_at', now()))
   where c.id = p_case;
  return jsonb_build_object('case_id', p_case, 'idx', p_idx, 'review', p_verdict);
end $$;

revoke all on function public.imf_chat_review_followup(uuid, integer, text) from public, anon, authenticated;
grant execute on function public.imf_chat_review_followup(uuid, integer, text) to service_role;

-- ---------------------------------------------------------------- F2: rerun fit check
create or replace function public.imf_chat_review(p_case_id uuid, p_letter_version integer,
                                                  p_review text, p_rerun_reason text default null,
                                                  p_note text default null)
returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_test boolean; v_cost numeric; v_rid bigint;
begin
  if p_review is null or p_review not in ('ok','rerun','close') then
    raise exception 'review must be ok, rerun or close';
  end if;
  if (p_review = 'rerun') <> (p_rerun_reason is not null) then
    raise exception 'rerun needs a rerun_reason code; ok and close take none';
  end if;
  if p_note is not null and length(p_note) > 500 then raise exception 'note too long'; end if;
  select is_test, cost_usd into v_test, v_cost from public.imf_chat_cases where id = p_case_id for update;
  if v_test is null then raise exception 'no such case'; end if;
  -- spec §5 Rerun row: a rerun needs the AUDIT_BUDGET reserve ($0.75) left under the $2.00 cap.
  if p_review = 'rerun' and 2.00 - v_cost < 0.75 then
    raise exception 'rerun does not fit the $2.00 case cap';
  end if;
  insert into public.imf_chat_reviews (case_id, letter_version, review, rerun_reason, note)
  values (p_case_id, p_letter_version, p_review, p_rerun_reason, p_note) returning id into v_rid;
  if p_review = 'rerun' then
    insert into public.imf_chat_jobs (case_id, kind, is_test) values (p_case_id, 'rerun', v_test);
  elsif p_review = 'close' then
    update public.imf_chat_cases set status = 'closed', stop_reason = 'review_close' where id = p_case_id;
  end if;
  return jsonb_build_object('review_id', v_rid, 'review', p_review);
end $$;

revoke all on function public.imf_chat_review(uuid, integer, text, text, text) from public, anon, authenticated;
grant execute on function public.imf_chat_review(uuid, integer, text, text, text) to service_role;

-- ---------------------------------------------------------------- F2: ceiling + alarm cover rerun
create or replace function public.imf_purge(p_now timestamptz default now())
returns table (case_id uuid, action text)
language plpgsql security definer set search_path = public, pg_temp as $$
begin
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

  update public.imf_chat_cases c set purge_after = c.created_at + interval '7 days'
   where c.status = 'intake' and c.purge_after > c.created_at + interval '7 days'
     and not exists (select 1 from public.imf_chat_jobs j where j.case_id = c.id);

  -- 30-day ceiling (N5): a held case not reviewed ok (null OR rerun) is closed, never released.
  return query
  update public.imf_chat_cases c set status = 'closed', stop_reason = 'held_ceiling'
   where c.purge_after <= p_now and c.held_for_nick and c.review is distinct from 'ok'
     and c.status <> 'closed'
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
                                    where held_for_nick and review is distinct from 'ok'
                                      and status <> 'closed' and not is_test), 0),
    'held_followups_unreviewed', (select count(*)
                                    from public.imf_chat_cases c,
                                         jsonb_array_elements(c.followups) e(val)
                                   where not c.is_test and c.status <> 'closed'
                                     and (e.val->>'a') is not null
                                     and coalesce((e.val->>'held')::boolean, false)
                                     and not (e.val ? 'review')));
$$;
