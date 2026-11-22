// IFDO-CHATBOX (CONTROL REVIEWS-1121-2000): the letter chat reports to PostHog as /other only,
// and no chat text, token or case id can reach any analytics call.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { templateForPath, sanitizeUrl, sanitizeEvent, ROUTE_TEMPLATES, OTHER_PATH } from "../pageview-url";

const O = "https://imfrustrated.org";
const TOKEN = "AbCdEfGhIjKlMnOpQrStUvWx12";
const CHAT_TEXT = "my landlord kept my deposit of 1200 dollars";

test("chat paths are not route templates", () => {
  for (const t of ROUTE_TEMPLATES) {
    assert.ok(!t.pattern.startsWith("/letter-chat"), t.pattern);
    assert.ok(!t.pattern.startsWith("/api/chat"), t.pattern);
  }
});

test("chat paths sanitize to /other", () => {
  for (const p of ["/letter-chat", "/letter-chat/", `/api/chat/case/${TOKEN}`, "/api/chat/case", "/api/chat/followup"]) {
    assert.equal(templateForPath(p), OTHER_PATH, p);
    assert.equal(sanitizeUrl(p), OTHER_PATH, p);
  }
  assert.equal(sanitizeUrl(`${O}/letter-chat#t=${TOKEN}`), `${O}/other`);
  assert.equal(sanitizeUrl(`${O}/letter-chat?t=${TOKEN}&q=${encodeURIComponent(CHAT_TEXT)}#t=${TOKEN}`), `${O}/other`);
  assert.equal(sanitizeUrl(`${O}/letter-chat?utm_source=x#t=${TOKEN}`), `${O}/other?utm_source=x`);
});

test("a pageview/pageleave captured on the chat page carries no token or text", () => {
  const url = `${O}/letter-chat?q=${encodeURIComponent(CHAT_TEXT)}#t=${TOKEN}`;
  const ev = {
    properties: {
      $current_url: url,
      $pathname: "/letter-chat",
      $referrer: url,
      $prev_pageview_url: url,
      $session_entry_url: url,
      title: `The letter chat: ${CHAT_TEXT}`,
    },
    $set: { $current_url: url },
    $set_once: { $initial_current_url: url, $initial_pathname: "/letter-chat" },
  };
  sanitizeEvent(ev);
  const out = JSON.stringify(ev);
  assert.ok(!out.includes(TOKEN), "token leaked");
  assert.ok(!out.includes("landlord") && !out.includes("deposit"), "chat text leaked");
  assert.ok(!out.includes("letter-chat"), "chat path leaked");
  assert.equal(ev.properties.$current_url, `${O}/other`);
  assert.equal(ev.properties.$pathname, OTHER_PATH);
  assert.equal(ev.properties.title, OTHER_PATH);
});

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx)$/.test(n) ? [p] : [];
  });
}

test("no chat source file imports or calls analytics", () => {
  const roots = ["src/app/letter-chat", "src/lib/imf-chat", "src/app/api/chat"].map((d) => join(process.cwd(), d));
  const all = roots.flatMap(files);
  assert.ok(all.length >= 10, `expected chat sources, found ${all.length}`);
  const banned = /posthog|\.capture\(|@\/lib\/tracking|\btrack[A-Z]\w*\(|@vercel\/analytics|sendBeacon|gtag\(/i;
  for (const f of all) assert.ok(!banned.test(readFileSync(f, "utf8")), `analytics reference in ${f}`);
});

test("positive control: the scan does flag a file that calls analytics", () => {
  const banned = /posthog|\.capture\(|@\/lib\/tracking|\btrack[A-Z]\w*\(|@vercel\/analytics|sendBeacon|gtag\(/i;
  assert.ok(banned.test(readFileSync(join(process.cwd(), "src/components/IntakeForm.tsx"), "utf8")));
});
