-- Migration: 0001_imfrustrated_page_counts
-- Project: the project behind this site's NEXT_PUBLIC_SUPABASE_URL (holds imfrustrated_intake; believed to be shared bzmehrytiudgmgdrdlkg, not verified)
-- Purpose: first-party per-page counts for imfrustrated.org (ALLOWLIST-KEEP-DETAIL, 2026-11-21).
-- Rows are (path, day, count) only: no visitor id, IP, user agent, query or referrer.
-- Written by /api/pc with the service role. RLS on, no public policies.

create table if not exists imfrustrated_page_counts (
  path  text    not null,
  day   date    not null,
  count integer not null default 0,
  primary key (path, day)
);

alter table imfrustrated_page_counts enable row level security;
revoke all on imfrustrated_page_counts from anon, authenticated;

create or replace function imfrustrated_increment_page_count(p_path text, p_day date)
returns void
language sql
security invoker
set search_path = public
as $$
  insert into imfrustrated_page_counts (path, day, count)
  values (p_path, p_day, 1)
  on conflict (path, day) do update set count = imfrustrated_page_counts.count + 1;
$$;

revoke all on function imfrustrated_increment_page_count(text, date) from public, anon, authenticated;
grant execute on function imfrustrated_increment_page_count(text, date) to service_role;
