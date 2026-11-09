-- IFDO-CHATBOX U7 G2/G3: a follow-up job can carry a letter result.
--   G2: a follow-up the model routes to <revise> writes a held new letter version.
--   G3: a crisis follow-up holds the case (no letter).
-- The SN worker then calls imf_write_followup on the same job, so for kind 'followup'
-- imf_write_result leaves the job claimed; imf_write_followup marks it done.
-- Rollback: re-apply imf_write_result from 20261101130000_imf_chat_worker.sql.
create or replace function public.imf_write_result(p_job_id bigint, p_status text, p_verdict text,
    p_letter text, p_cover text, p_sources jsonb, p_cost_delta numeric, p_held boolean,
    p_stop_reason text default null)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid; v_kind text; v_ver integer;
begin
  select l.case_id, l.kind into v_case, v_kind from public._imf_job_lock(p_job_id, p_cost_delta) l;
  if v_kind not in ('letter','rerun','revision','followup') then
    raise exception 'imf_write_result is for letter/rerun/revision/followup jobs, not %', v_kind;
  end if;
  update public.imf_chat_cases c
     set status = p_status, stop_reason = p_stop_reason,
         held_for_nick = c.held_for_nick or coalesce(p_held, true),
         verdict = case when p_letter is not null then p_verdict else c.verdict end,
         letter  = coalesce(p_letter, c.letter),
         cover   = case when p_letter is not null then p_cover else c.cover end,
         sources = case when p_letter is not null then p_sources else c.sources end,
         letter_version = case when p_letter is not null and v_kind in ('rerun','revision','followup')
                               then c.letter_version + 1 else c.letter_version end
   where c.id = v_case
  returning c.letter_version into v_ver;
  if v_kind <> 'followup' then
    update public.imf_chat_jobs set status = 'done' where id = p_job_id;
  end if;
  return v_ver;
end $$;
