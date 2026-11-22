-- IFDO-CHATBOX (CONTROL REVIEWS-1121-2030 (2)c): two follow-up questions per case, not five.
-- 20261101120000_imf_chat.sql shipped the inline column check
--   jsonb_array_length(followups) <= 5   (Postgres auto-name: imf_chat_cases_followups_check)
-- while the API allows FOLLOWUPS_PER_CASE = 2 (src/lib/imf-chat/followup-api.ts). Applied
-- migrations are not edited; this one swaps the check. Pinned by
-- tests/imf-chat/followup-cap-sql.test.ts (latest SQL cap == FOLLOWUPS_PER_CASE == 2).
-- The chat has not been public, so no row should hold more than two follow-ups; if one does,
-- the ADD CONSTRAINT below fails loudly rather than silently keeping the old cap.

alter table public.imf_chat_cases drop constraint if exists imf_chat_cases_followups_check;
alter table public.imf_chat_cases add constraint imf_chat_cases_followups_check
  check (jsonb_typeof(followups) = 'array' and jsonb_array_length(followups) <= 2);
