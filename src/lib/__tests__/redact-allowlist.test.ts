// REDACT-ALLOWLIST-1121 (imfrustrated): CONTROL's failing inputs plus odd encodings, applied to /letters.
import test from "node:test";
import assert from "node:assert/strict";
import { templateForPath, sanitizeUrl, sanitizeEvent, redactPath, redactUrlPath, ROUTE_TEMPLATES } from "../pageview-url";

const O = "https://imfrustrated.org";

// [input, expected]: bare paths through templateForPath / redactPath.
const PATH_TABLE: Array<[string, string]> = [
  // CONTROL's failing inputs (HELD rows, 2026-11-21) applied to /letters.
  ["/letters%3Fx/landlord/test-slug", "/other"],
  ["/letters%23x/landlord/test-slug", "/other"],
  ["/letters%09/landlord/test-slug", "/other"],
  ["/letters%20/landlord/test-slug", "/other"],
  ["/letters;x/landlord/test-slug", "/other"],
  ["/letters;x/..", "/other"],
  ["/letters%3Fx/..", "/other"],
  ["/%E0%A4%A/letters/landlord/test-slug", "/other"],
  ["//host/letters/landlord/test-slug", "/other"],
  ["//host/letters/landlord/slug", "/other"],
  ["/letters/%252e%252e/landlord/test-slug", "/other"],
  ["/letters/landlord/test-slug/..", "/letters/landlord"],
  ["/Letters/landlord/slug/..", "/letters/landlord"],
  ["/LETTERS/Landlord/Test-Slug", "/letters/landlord"],
  ["/letters/parking/chicago/test-slug/../..", "/letters/parking"],
  // More odd forms.
  ["/letters%2Flandlord%2Ftest-slug", "/letters/landlord"],
  ["/letters%252Flandlord%252Ftest-slug", "/letters/landlord"],
  ["/letters/./landlord/test-slug", "/letters/landlord"],
  ["/x/../letters/hoa/test-slug", "/letters/hoa"],
  ["/letters/landlord/test-slug/", "/letters/landlord"],
  ["\\letters\\landlord\\test-slug", "/letters/landlord"],
  ["/letters/landlord/test-slug/extra", "/other"],
  ["/letters/landlord/test slug", "/other"],
  ["/letters/landlord/test%00slug", "/other"],
  ["/letters/landlord/test-slug%25", "/other"],
  ["/letters/landlord/t%C3%A9st-slug", "/other"],
  ["/letters/landlord/" + "a".repeat(121), "/other"],
  ["/lettersx", "/other"],
  ["/api/letters/landlord/test-slug", "/other"],
  ["/letters/domestic-violence-escape/test-slug", "/other"],
  ["/letters/domestic-violence-escape", "/other"],
  ["/letters/landlord/test_slug", "/other"],
  ["/blog/a/b", "/other"],
  // Dynamic templates.
  ["/letters/landlord/test-slug", "/letters/landlord"],
  ["/letters/credit-card/test-slug", "/letters/credit-card"],
  ["/letters/parking/chicago", "/letters/parking/:city"],
  ["/letters/parking/chicago/test-slug", "/letters/parking/:city/:defense"],
  ["/blog/some-post", "/blog/:slug"],
  ["/letters/rss.xml", "/letters/rss.xml"],
  ["/", "/"],
  ["", "/"],
  // Static pages: every one sends as-is (also with a trailing slash and upper case).
  ...ROUTE_TEMPLATES.filter((t) => !t.pattern.includes(":")).flatMap((t): Array<[string, string]> => [
    [t.pattern, t.pattern],
    [t.pattern.toUpperCase() + "/", t.pattern],
  ]),
];

// [input, expected]: full URLs through sanitizeUrl (non-referrer props).
const URL_TABLE: Array<[string, string]> = [
  [O + "/letters%3Fx/landlord/test-slug", O + "/other"],
  [O + "/letters%23x/landlord/test-slug", O + "/other"],
  [O + "/letters%09/landlord/test-slug", O + "/other"],
  [O + "/letters%20/landlord/test-slug", O + "/other"],
  [O + "/letters;x/landlord/test-slug", O + "/other"],
  [O + "/%E0%A4%A/letters/landlord/test-slug", O + "/other"],
  [O + "//host/letters/landlord/test-slug", O + "/other"],
  [O + "/letters/%252e%252e/landlord/test-slug", O + "/other"],
  [O + "/letters/landlord/test-slug/..", O + "/letters/landlord"],
  [O + "/Letters/landlord/test-slug/..", O + "/letters/landlord"],
  [O + "/LETTERS/Landlord/Test-Slug", O + "/letters/landlord"],
  [O + "/letters/landlord/test-slug?utm_source=g&x=test-slug#test-slug", O + "/letters/landlord?utm_source=g"],
  [O + "/letters?test-slug", O + "/letters"],
  [O + "/?a=1#/letters/landlord/test-slug", O + "/"],
  [O, O + "/"],
  ["https://user:test-slug@imfrustrated.org/letters/landlord/test-slug", O + "/letters/landlord"],
  ["HTTPS://IMFRUSTRATED.ORG/LETTERS/LANDLORD/TEST-SLUG", O + "/letters/landlord"],
  ["http://localhost:3000/letters/parking/chicago/test-slug", "http://localhost:3000/letters/parking/:city/:defense"],
  ["//imfrustrated.org/letters/landlord/test-slug", "/other"],
  ["letters/landlord/test-slug", "/other"],
  ["javascript:test-slug", "/other"],
  ["$direct", "$direct"],
];

const FORBIDDEN = ["test-slug", "chicago"];

function pathPart(out: string): string {
  const m = out.match(/^[a-z]+:\/\/[^/?#]*(.*)$/);
  const rest = m ? m[1] : out;
  return rest.split("?")[0];
}

test("REDACT-ALLOWLIST: path table", () => {
  for (const [input, expected] of PATH_TABLE) {
    assert.equal(templateForPath(input), expected, "templateForPath(" + JSON.stringify(input) + ")");
    if (input) assert.equal(redactPath(input), expected, "redactPath(" + JSON.stringify(input) + ")");
  }
});

test("REDACT-ALLOWLIST: url table", () => {
  for (const [input, expected] of URL_TABLE) {
    assert.equal(sanitizeUrl(input), expected, "sanitizeUrl(" + JSON.stringify(input) + ")");
    assert.equal(redactUrlPath(input), expected);
  }
});

test("REDACT-ALLOWLIST: event props", () => {
  const e = {
    properties: {
      $current_url: O + "/letters/landlord/test-slug?token=s&ref=a#x",
      $pathname: "/letters/landlord/test-slug",
      title: "Lease Early Termination for Domestic Violence Survivors | imfrustrated",
      $referrer: O + "/letters%3Fx/landlord/test-slug",
      $initial_referrer: "https://www.google.com/search?q=test-slug+lease",
      $prev_pageview_url: O + "/letters/parking/chicago/test-slug",
      $prev_pageview_pathname: "/letters/parking/chicago/test-slug",
      $session_entry_url: O + "/letters;x/landlord/test-slug",
      $session_entry_pathname: "/letters%20/landlord/test-slug",
      $initial_current_url: O + "/blog/some-post",
      $initial_pathname: "/blog/some-post",
      step_index: 2,
    },
    $set: { $current_url: O + "/letters/landlord/test-slug", $pathname: "/letters/landlord/test-slug", $referrer: "https://evil.example/letters/landlord/test-slug?x=1" },
    $set_once: {
      $initial_current_url: O + "/letters/landlord/test-slug",
      $initial_pathname: "/letters/landlord/test-slug",
      $initial_referrer: "https://www.imfrustrated.org/letters/parking/chicago/test-slug",
      title: "test-slug",
    },
  };
  sanitizeEvent(e);
  assert.deepEqual(e.properties, {
    $current_url: O + "/letters/landlord?ref=a",
    $pathname: "/letters/landlord",
    title: "/letters/landlord",
    $referrer: O + "/other",
    $initial_referrer: "https://www.google.com",
    $prev_pageview_url: O + "/letters/parking/:city/:defense",
    $prev_pageview_pathname: "/letters/parking/:city/:defense",
    $session_entry_url: O + "/other",
    $session_entry_pathname: "/other",
    $initial_current_url: O + "/blog/:slug",
    $initial_pathname: "/blog/:slug",
    step_index: 2,
  });
  assert.deepEqual(e.$set, { $current_url: O + "/letters/landlord", $pathname: "/letters/landlord", $referrer: "https://evil.example" });
  assert.deepEqual(e.$set_once, {
    $initial_current_url: O + "/letters/landlord",
    $initial_pathname: "/letters/landlord",
    $initial_referrer: "https://www.imfrustrated.org/letters/parking/:city/:defense",
    title: "/other",
  });
  assert.doesNotMatch(JSON.stringify(e), /test-slug|chicago|evil\.example\/|token|google\.com\//);
  sanitizeEvent(null);
});

test("title becomes the template on every page", () => {
  const p: Record<string, unknown> = { $current_url: O + "/blog/some-post", title: "Some post" };
  sanitizeEvent({ properties: p });
  assert.equal(p.title, "/blog/:slug");
});

test("REDACT-ALLOWLIST: invariant over the whole table", () => {
  const outs = [
    ...PATH_TABLE.map(([i]) => templateForPath(i)),
    ...URL_TABLE.map(([i]) => sanitizeUrl(i)),
    ...URL_TABLE.map(([i]) => sanitizeUrl(i, undefined, true)),
  ];
  for (const out of outs) {
    for (const f of FORBIDDEN) assert.ok(!out.includes(f), out + " contains " + f);
    if (out === "$direct") continue;
    assert.match(pathPart(out), /^[a-z0-9/:_.-]*$/, out);
  }
});
