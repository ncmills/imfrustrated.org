// The letter chat's public switch, in one place (CONTROL REVIEWS-1121-2030 (2)e).
// Public = IMF_CHAT_ENABLED=1 (kill switch off) AND IMF_CHAT_PUBLIC=1 (beta token no longer
// required). Either one alone does not open the chat to the public: ENABLED alone is beta-only,
// PUBLIC alone is still paused. Used by the API gate (case-api.ts) and the /privacy section.
export type FlagEnv = Record<string, string | undefined>;

export const chatEnabled = (env: FlagEnv) => env.IMF_CHAT_ENABLED?.trim() === "1";
export const chatIsPublic = (env: FlagEnv) => chatEnabled(env) && env.IMF_CHAT_PUBLIC?.trim() === "1";
