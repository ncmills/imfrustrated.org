import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { chatPublic, letterChatAccess } from "../../src/lib/imf-chat/flags";

// IFDO-CHAT-LIVE step 6: the /letter-chat page follows the same public switch as the API.
const T = "tok123";

test("public (ENABLED=1 and PUBLIC=1): anyone, with or without a beta token", () => {
  const env = { IMF_CHAT_ENABLED: "1", IMF_CHAT_PUBLIC: "1", IMF_CHAT_BETA_TOKEN: T };
  assert.equal(letterChatAccess(env, ""), "public");
  assert.equal(letterChatAccess(env, "wrong"), "public");
  assert.equal(letterChatAccess({ IMF_CHAT_ENABLED: "1", IMF_CHAT_PUBLIC: "1" }, ""), "public");
});

test("not public: only the matching beta token, else 404", () => {
  for (const env of [
    { IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: T },
    { IMF_CHAT_PUBLIC: "1", IMF_CHAT_BETA_TOKEN: T }, // PUBLIC alone is still not public
    { IMF_CHAT_BETA_TOKEN: T },
  ]) {
    assert.equal(letterChatAccess(env, T), "beta");
    assert.equal(letterChatAccess(env, ""), "none");
    assert.equal(letterChatAccess(env, "nope"), "none");
  }
});

test("no token set and not public: nobody, not even an empty beta", () => {
  assert.equal(letterChatAccess({}, ""), "none");
  assert.equal(letterChatAccess({ IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: "" }, ""), "none");
});

test("the page uses the shared access rule and stays noindex", () => {
  const page = readFileSync(join(process.cwd(), "src/app/letter-chat/page.tsx"), "utf8");
  assert.match(page, /letterChatAccess\(process\.env, beta\) === "none"\) notFound\(\)/);
  assert.doesNotMatch(page, /IMF_CHAT_BETA_TOKEN/);
  assert.match(page, /robots: \{ index: false, follow: false \}/);
});

// Front door: links to /letter-chat show only when the page would not 404 for an anonymous visitor.
test("chatPublic: unset -> false, PUBLIC+ENABLED -> true, beta-only / half-open -> false", () => {
  assert.equal(chatPublic({}), false);
  assert.equal(chatPublic({ IMF_CHAT_ENABLED: "1", IMF_CHAT_PUBLIC: "1" }), true);
  assert.equal(chatPublic({ IMF_CHAT_PUBLIC: "1" }), false);
  assert.equal(chatPublic({ IMF_CHAT_ENABLED: "1" }), false);
  assert.equal(chatPublic({ IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: T }), false);
  assert.equal(chatPublic({ IMF_CHAT_ENABLED: "0", IMF_CHAT_PUBLIC: "1" }), false);
});
