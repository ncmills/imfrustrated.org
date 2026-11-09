-- IFDO-CHATBOX U7 F7: at most one active (queued or claimed) letter job per case.
-- A double-submit race could insert two letter jobs for one case; the create path now treats
-- the unique violation (23505) as "already queued". Idempotent.

-- Any pre-existing duplicates would block the index: keep the oldest active letter job per case
-- and fail the rest (they would only produce a second, unreviewed draft).
update public.imf_chat_jobs j set status = 'failed'
 where j.kind = 'letter' and j.status in ('queued', 'claimed')
   and exists (select 1 from public.imf_chat_jobs o
                where o.case_id = j.case_id and o.kind = 'letter' and o.status in ('queued', 'claimed')
                  and o.id < j.id);

create unique index if not exists imf_chat_jobs_one_active_letter
  on public.imf_chat_jobs (case_id)
  where kind = 'letter' and status in ('queued', 'claimed');

-- U7 F3 (driver add-on): imf_job_fail records the spend of the failed run. The SN worker passes
-- p_cost_delta; the old 2-arg call shape still works (default 0). imf_chat_jobs has no cost
-- column, so the delta lands on the case's cost_usd only, in the same statement that holds it.
-- Drop the 2-arg overload first, or a 2-arg call would be ambiguous.
drop function if exists public.imf_job_fail(bigint, text);

create or replace function public.imf_job_fail(p_job_id bigint, p_reason text, p_cost_delta numeric default 0)
returns boolean
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_case uuid;
begin
  if p_reason !~ '^[a-z0-9_]{1,40}$' then raise exception 'reason must be a code'; end if;
  if p_cost_delta is not null and p_cost_delta < 0 then raise exception 'p_cost_delta must be >= 0'; end if;
  update public.imf_chat_jobs set status = 'failed' where id = p_job_id and status = 'claimed'
  returning case_id into v_case;
  if v_case is null then return false; end if;
  update public.imf_chat_cases
     set held_for_nick = true, status = 'held', stop_reason = p_reason,
         cost_usd = cost_usd + coalesce(p_cost_delta, 0)
   where id = v_case;
  return true;
end $$;

revoke all on function public.imf_job_fail(bigint, text, numeric) from public, anon, authenticated, service_role;
grant execute on function public.imf_job_fail(bigint, text, numeric) to imf_chat_worker;
