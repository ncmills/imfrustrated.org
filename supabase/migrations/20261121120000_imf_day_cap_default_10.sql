-- IFDO-CHATBOX (CONTROL REVIEWS-1121-2030 (2)b): one daily USD cap, $10.00.
-- 20261101130000_imf_chat_worker.sql shipped imf_claim_job_capped with p_day_cap default 20.00
-- while the worker passes DAY_CAP_USD = 10.00 (second-nick ops/imf_chat_worker.py). This
-- migration only changes that default to 10.00; the body is unchanged (copied verbatim) and
-- CREATE OR REPLACE keeps the existing grants/revokes. Applied migrations are not edited.
-- Pinned by tests/imf-chat/day-cap.test.ts (SQL default == IMF_DAY_CAP_USD == 10.00) and by
-- second-nick tests/test_imf_chat_worker.py (DAY_CAP_USD == 10.00).

create or replace function public.imf_claim_job_capped(p_day_spend numeric, p_day_cap numeric default 10.00,
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
