// IFDO-CHATBOX daily spend cap (CONTROL REVIEWS-1121-2030 (2)b): the ONE number, $10.00/day.
// The SQL default of imf_claim_job_capped(p_day_cap) is set from this value by the latest
// migration that defines it, and second-nick ops/imf_chat_worker.py DAY_CAP_USD passes the same
// value explicitly. tests/imf-chat/day-cap.test.ts pins SQL default == this constant == 10.00.
export const IMF_DAY_CAP_USD = 10.0;
