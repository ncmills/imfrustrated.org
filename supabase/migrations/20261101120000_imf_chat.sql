-- IFDO-CHATBOX U3: chat tables, RPCs, RLS, worker role.
-- File only. Control applies it. Idempotent where cheap (re-running is safe).
-- Spec: ~/work/second-nick/2026-11-01-ifdo-chatbox-spec.md §4, §5, §7, U3, F2, F8.
-- Assumes the Supabase roles anon, authenticated, service_role exist.

begin;

-- ---------------------------------------------------------------- worker role
do $$ begin
  if not exists (select 1 from pg_roles where rolname = 'imf_chat_worker') then
    create role imf_chat_worker nologin;  -- control sets LOGIN + password out of band
  end if;
end $$;

-- ---------------------------------------------------------------- cases
create table if not exists public.imf_chat_cases (
  id             uuid primary key default gen_random_uuid(),
  token_hash     text not null unique check (token_hash ~ '^[0-9a-f]{64}$'),
  created_at     timestamptz not null default now(),
  is_test        boolean not null default false,
  review_fixture boolean not null default false,
  disclaimer_v   text,
  state          text,
  category       text,
  counterparty   text,
  amount_usd     numeric(12,2),
  key_dates      jsonb,
  turns          jsonb not null default '[]'::jsonb,
  status         text not null default 'intake',
  stop_reason    text,
  verdict        text,
  letter         text,
  cover          text,
  sources        jsonb,
  followups      jsonb not null default '[]'::jsonb
                 check (jsonb_typeof(followups) = 'array' and jsonb_array_length(followups) <= 5),
  cost_usd       numeric(8,4) not null default 0 check (cost_usd >= 0),
  held_for_nick  boolean not null default false,
  letter_version integer not null default 1 check (letter_version >= 1),
  review         text check (review in ('ok','rerun','close')),
  review_reason  text check (review_reason in ('wrong_state_law','missed_fact','wrong_remedy','tone','format')),
  review_at      timestamptz,
  purge_after    timestamptz not null default (now() + interval '30 days'),
  constraint imf_chat_cases_test_xor_fixture check (not (is_test and review_fixture))
);

-- F8: purge_after = created_at + 30 d on insert, never extended, created_at immutable.
-- F2: a new letter_version clears the review so the new version is held again.
create or replace function public.imf_chat_cases_guard() returns trigger
language plpgsql set search_path = public, pg_temp as $$
begin
  if tg_op = 'INSERT' then
    new.created_at  := coalesce(new.created_at, now());
    new.purge_after := new.created_at + interval '30 days';
    new.letter_version := 1;
    new.review := null; new.review_reason := null; new.review_at := null;
    return new;
  end if;
  if new.created_at is distinct from old.created_at then
    raise exception 'imf_chat_cases.created_at is immutable';
  end if;
  if new.purge_after is null or new.purge_after > old.purge_after then
    raise exception 'imf_chat_cases.purge_after may only move earlier';
  end if;
  if new.letter_version < old.letter_version then
    raise exception 'imf_chat_cases.letter_version may only increase';
  end if;
  if new.letter_version > old.letter_version then
    new.review := null; new.review_reason := null; new.review_at := null;
  end if;
  return new;
end $$;
drop trigger if exists imf_chat_cases_guard on public.imf_chat_cases;
create trigger imf_chat_cases_guard before insert or update on public.imf_chat_cases
  for each row execute function public.imf_chat_cases_guard();

-- ---------------------------------------------------------------- jobs
create table if not exists public.imf_chat_jobs (
  id           bigint generated always as identity primary key,
  case_id      uuid not null references public.imf_chat_cases(id) on delete cascade,
  kind         text not null check (kind in ('letter','followup','revision','rerun')),
  status       text not null default 'queued' check (status in ('queued','claimed','done','failed')),
  created_at   timestamptz not null default now(),
  claimed_at   timestamptz,
  heartbeat_at timestamptz,
  attempts     integer not null default 0,
  is_test      boolean not null default false
);
create index if not exists imf_chat_jobs_queue_idx on public.imf_chat_jobs (status, created_at);
create index if not exists imf_chat_jobs_case_idx  on public.imf_chat_jobs (case_id);

-- ---------------------------------------------------------------- rate limit
-- key is HMAC-SHA256 hex of IP + server salt; the check makes a raw IP unstorable.
create table if not exists public.imf_chat_rl (
  key          text not null check (key ~ '^[0-9a-f]{64}$'),
  scope        text not null,
  window_secs  integer not null check (window_secs > 0),
  window_start timestamptz not null,
  count        integer not null default 0,
  primary key (key, scope, window_secs, window_start)
);
create index if not exists imf_chat_rl_window_idx on public.imf_chat_rl (window_start);

-- ---------------------------------------------------------------- reviews (append-only, F2)
create table if not exists public.imf_chat_reviews (
  id             bigint generated always as identity primary key,
  case_id        uuid not null references public.imf_chat_cases(id) on delete cascade,
  letter_version integer not null check (letter_version >= 1),
  review         text not null check (review in ('ok','rerun','close')),
  rerun_reason   text check (rerun_reason in ('wrong_state_law','missed_fact','wrong_remedy','tone','format')),
  note           text,                 -- sheet only; never read by the worker
  reviewed_at    timestamptz not null default now(),
  constraint imf_chat_reviews_reason check ((review = 'rerun') = (rerun_reason is not null)),
  constraint imf_chat_reviews_one_per_version unique (case_id, letter_version)
);

create or replace function public.imf_chat_reviews_guard() returns trigger
language plpgsql security definer set search_path = public, pg_temp as $$
declare cur integer;
begin
  if tg_op = 'INSERT' then
    select letter_version into cur from public.imf_chat_cases where id = new.case_id for update;
    if cur is null or new.letter_version <> cur then
      raise exception 'review must target the current letter_version (%), got %', cur, new.letter_version;
    end if;
    new.reviewed_at := now();
    update public.imf_chat_cases
       set review = new.review, review_reason = new.rerun_reason, review_at = new.reviewed_at
     where id = new.case_id;
    return new;
  end if;
  if tg_op = 'DELETE' and not exists (select 1 from public.imf_chat_cases where id = old.case_id) then
    return old;  -- cascade from the purge of the parent case is the only allowed delete
  end if;
  raise exception 'imf_chat_reviews is append-only (% rejected)', tg_op;
end $$;
drop trigger if exists imf_chat_reviews_guard on public.imf_chat_reviews;
create trigger imf_chat_reviews_guard before insert or update or delete on public.imf_chat_reviews
  for each row execute function public.imf_chat_reviews_guard();

create or replace function public.imf_chat_reviews_no_truncate() returns trigger
language plpgsql as $$ begin raise exception 'imf_chat_reviews is append-only (TRUNCATE rejected)'; end $$;
drop trigger if exists imf_chat_reviews_no_truncate on public.imf_chat_reviews;
create trigger imf_chat_reviews_no_truncate before truncate on public.imf_chat_reviews
  for each statement execute function public.imf_chat_reviews_no_truncate();

-- ---------------------------------------------------------------- RPCs
-- Fixed-window counter. Returns true when this hit is within the limit.
create or replace function public.imf_rl_hit(p_key text, p_scope text, p_window_secs integer, p_limit integer)
returns boolean
language plpgsql security definer set search_path = public, pg_temp as $$
declare w timestamptz; n integer;
begin
  if p_window_secs is null or p_window_secs <= 0 or p_limit is null or p_limit < 0 then
    raise exception 'imf_rl_hit: bad window or limit';
  end if;
  w := to_timestamp(floor(extract(epoch from now()) / p_window_secs) * p_window_secs);
  insert into public.imf_chat_rl as r (key, scope, window_secs, window_start, count)
       values (p_key, p_scope, p_window_secs, w, 1)
  on conflict (key, scope, window_secs, window_start) do update set count = r.count + 1
  returning r.count into n;
  return n <= p_limit;
end $$;

-- Claims the oldest eligible job: queued, or claimed with no heartbeat for 10 min
-- and only one attempt so far (re-queued once, §5). SKIP LOCKED: two workers
-- never get the same job.
create or replace function public.imf_claim_job(p_include_test boolean default true)
returns table (job_id bigint, case_id uuid, kind text, attempts integer, is_test boolean)
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  return query
  with next_job as (
    select j.id from public.imf_chat_jobs j
     where (j.status = 'queued'
            or (j.status = 'claimed' and j.heartbeat_at < now() - interval '10 minutes' and j.attempts < 2))
       and (p_include_test or not j.is_test)
     order by j.created_at, j.id
     limit 1
     for update skip locked
  )
  update public.imf_chat_jobs j
     set status = 'claimed', claimed_at = now(), heartbeat_at = now(), attempts = j.attempts + 1
    from next_job
   where j.id = next_job.id
  returning j.id, j.case_id, j.kind, j.attempts, j.is_test;
end $$;

-- ---------------------------------------------------------------- RLS + grants
alter table public.imf_chat_cases   enable row level security;
alter table public.imf_chat_jobs    enable row level security;
alter table public.imf_chat_rl      enable row level security;
alter table public.imf_chat_reviews enable row level security;
-- No policies: anon / authenticated see and write nothing. service_role bypasses RLS.

revoke all on public.imf_chat_cases, public.imf_chat_jobs, public.imf_chat_rl, public.imf_chat_reviews
  from public, anon, authenticated, imf_chat_worker;
grant select, insert, update, delete on public.imf_chat_cases, public.imf_chat_jobs, public.imf_chat_rl
  to service_role;
revoke all on public.imf_chat_reviews from service_role;
grant select, insert on public.imf_chat_reviews to service_role;  -- no update / delete grant (F2)

revoke all on function public.imf_rl_hit(text, text, integer, integer) from public, anon, authenticated;
revoke all on function public.imf_claim_job(boolean) from public, anon, authenticated;
revoke all on function public.imf_chat_cases_guard(), public.imf_chat_reviews_guard(),
  public.imf_chat_reviews_no_truncate() from public, anon, authenticated;
grant execute on function public.imf_rl_hit(text, text, integer, integer) to imf_chat_worker, service_role;
grant execute on function public.imf_claim_job(boolean) to imf_chat_worker, service_role;
grant usage on schema public to imf_chat_worker;

commit;
