// The letter chat's public switch, in one place (CONTROL REVIEWS-1121-2030 (2)e).
// Public = IMF_CHAT_ENABLED=1 (kill switch off) AND IMF_CHAT_PUBLIC=1 (beta token no longer
// required). Either one alone does not open the chat to the public: ENABLED alone is beta-only,
// PUBLIC alone is still paused. Used by the API gate (case-api.ts) and the /privacy section.
export type FlagEnv = Record<string, string | undefined>;

export const chatEnabled = (env: FlagEnv) => env.IMF_CHAT_ENABLED?.trim() === "1";
export const chatIsPublic = (env: FlagEnv) => chatEnabled(env) && env.IMF_CHAT_PUBLIC?.trim() === "1";

// IFDO-CHAT-LIVE step 6: who may open the /letter-chat page. "public" = anyone (chat is public);
// "beta" = the beta token matches; "none" = 404. Before this, the page always demanded the beta
// token, so IMF_CHAT_PUBLIC=1 opened the API but the page itself still 404ed for every visitor.
export type LetterChatAccess = "public" | "beta" | "none";
export const letterChatAccess = (env: FlagEnv, beta: string): LetterChatAccess => {
  if (chatIsPublic(env)) return "public";
  const token = env.IMF_CHAT_BETA_TOKEN?.trim() ?? "";
  return token && beta === token ? "beta" : "none";
};
