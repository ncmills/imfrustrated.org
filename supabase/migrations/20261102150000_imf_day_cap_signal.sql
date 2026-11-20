-- IFDO-CHATBOX U6 gap 1: the day-cap signal the visitor's poll shows.
-- ROLLBACK:
--   drop function if exists public.imf_day_paused();
--   drop function if exists public.imf_worker_set_paused(text);
--   drop function if exists public.imf_cap_blocked(numeric, numeric);
--   drop table if exists public.imf_chat_worker_state;
--
-- The worker passes its day spend in (imf_claim_job_capped). An empty claim means EITHER an empty
-- queue OR a cap refusal; imf_cap_blocked tells them apart, and the worker records the answer with
-- imf_worker_set_paused (only on change). The site's service role reads it via imf_day_paused().

create table if not exists public.imf_chat_worker_state (
  id            integer primary key default 1 check (id = 1),
  paused_reason text null check (paused_reason is null or paused_reason = 'day_cap'),
  updated_at    timestamptz not null default now()
);
alter table public.imf_chat_worker_state enable row level security;
revoke all on table public.imf_chat_worker_state from public, anon, authenticated, service_role, imf_chat_worker;
insert into public.imf_chat_worker_state (id, paused_reason) values (1, null) on conflict (id) do nothing;

-- True only if a non-test queued job exists that the cap refuses right now.
-- KEEP IN SYNC: the cost expression below is the one in imf_claim_job_capped
-- (20261101130000_imf_chat_worker.sql, next_job WHERE clause):
--   p_day_spend + case when j.kind = 'letter' then 2.00 else greatest(2.00 - c.cost_usd, 0) end <= p_day_cap
-- Change one, change both.
create or replace function public.imf_cap_blocked(p_day_spend numeric, p_day_cap numeric)
returns boolean
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if p_day_spend is null or p_day_spend < 0 then raise exception 'p_day_spend required'; end if;
  if p_day_cap is null then raise exception 'p_day_cap required'; end if;
  return exists (
    select 1 from public.imf_chat_jobs j join public.imf_chat_cases c on c.id = j.case_id
     where j.status = 'queued' and not j.is_test
       and not (p_day_spend + case when j.kind = 'letter' then 2.00
                                   else greatest(2.00 - c.cost_usd, 0) end <= p_day_cap));
end $$;

create or replace function public.imf_worker_set_paused(p_reason text) returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if p_reason is not null and p_reason <> 'day_cap' then
    raise exception 'reason must be null or day_cap';
  end if;
  insert into public.imf_chat_worker_state (id, paused_reason, updated_at) values (1, p_reason, now())
  on conflict (id) do update set paused_reason = excluded.paused_reason, updated_at = excluded.updated_at;
end $$;

-- The reason only if it was set on the current UTC day: a stale pause from yesterday never shows.
create or replace function public.imf_day_paused() returns text
language sql stable security definer set search_path = public, pg_temp as $$
  select s.paused_reason from public.imf_chat_worker_state s
   where s.id = 1
     and (s.updated_at at time zone 'UTC')::date = (now() at time zone 'UTC')::date;
$$;

do $$
declare f text;
begin
  foreach f in array array['imf_cap_blocked(numeric, numeric)', 'imf_worker_set_paused(text)', 'imf_day_paused()']
  loop
    execute format('revoke all on function public.%s from public, anon, authenticated, service_role', f);
  end loop;
end $$;
grant execute on function public.imf_cap_blocked(numeric, numeric) to imf_chat_worker;
grant execute on function public.imf_worker_set_paused(text) to imf_chat_worker;
grant execute on function public.imf_day_paused() to service_role;
