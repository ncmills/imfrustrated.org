-- imf_chat U5b: the review RPC (spec §2 L82, §7 "No human drafting"; N2, F1, F2).
-- A reviewer can only say ok / rerun (with an enum reason code) / close. There is no
-- letter, cover or free-text parameter that could reach the letter or a model; the
-- optional note goes to imf_chat_reviews.note (sheet only, never read by the worker).
-- The insert goes through imf_chat_reviews_guard (current letter_version only, sets the
-- case review columns); a rerun queues one 'rerun' job, whose fit under the case and day
-- caps the worker checks at claim time. service_role only.
create or replace function public.imf_chat_review(p_case_id uuid, p_letter_version integer,
                                                  p_review text, p_rerun_reason text default null,
                                                  p_note text default null)
returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare v_test boolean; v_rid bigint;
begin
  if p_review is null or p_review not in ('ok','rerun','close') then
    raise exception 'review must be ok, rerun or close';
  end if;
  if (p_review = 'rerun') <> (p_rerun_reason is not null) then
    raise exception 'rerun needs a rerun_reason code; ok and close take none';
  end if;
  if p_note is not null and length(p_note) > 500 then raise exception 'note too long'; end if;
  select is_test into v_test from public.imf_chat_cases where id = p_case_id;
  if v_test is null then raise exception 'no such case'; end if;
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
