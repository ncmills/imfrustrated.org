import test from "node:test";
import assert from "node:assert/strict";
import { sanitizePageviewUrl, filterQuery, redactLetterPath, redactLetterUrl, sanitizeEventProps } from "../pageview-url";

test("keeps only acquisition keys", () => {
  const out = sanitizePageviewUrl(
    "https://x.com/?utm_source=ig&utm_medium=s&utm_campaign=c&utm_term=t&utm_content=u&ref=a&gclid=g&fbclid=f&token=SECRET&email=a@b.com&name=Jo",
  );
  assert.equal(out, "https://x.com/?utm_source=ig&utm_medium=s&utm_campaign=c&utm_term=t&utm_content=u&ref=a&gclid=g&fbclid=f");
});
test("drops the whole query when nothing is allowlisted", () => {
  assert.equal(sanitizePageviewUrl("https://x.com/create?state=TX&name=Jo"), "https://x.com/create");
});
test("preserves hash and passes through no-query urls", () => {
  assert.equal(sanitizePageviewUrl("https://x.com/a?b=1&utm_source=z#top"), "https://x.com/a?utm_source=z#top");
  assert.equal(sanitizePageviewUrl("https://x.com/a"), "https://x.com/a");
  assert.equal(sanitizePageviewUrl(""), "");
});
test("filterQuery accepts leading ?", () => {
  assert.equal(filterQuery("?ref=a&x=1"), "ref=a");
});
test("letter paths are cut to /letters/<category>", () => {
  assert.equal(redactLetterPath("/letters/landlord/lease-early-termination-domestic-violence"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters/parking/chicago/broken-meter"), "/letters/parking");
  assert.equal(redactLetterPath("/letters/landlord"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters"), "/letters");
  assert.equal(redactLetterPath("/letters/rss.xml"), "/letters/rss.xml");
  assert.equal(redactLetterPath("/blog/some-post"), "/blog/some-post");
  assert.equal(redactLetterUrl("https://imfrustrated.org/letters/hoa/fine-dispute?utm_source=g#x"), "https://imfrustrated.org/letters/hoa?utm_source=g#x");
  assert.equal(redactLetterUrl("https://google.com/"), "https://google.com/");
});
test("before_send props: every url and path prop is redacted", () => {
  const p: Record<string, unknown> = {
    $current_url: "https://imfrustrated.org/letters/landlord/eviction-retaliation?token=s&ref=a",
    $pathname: "/letters/landlord/eviction-retaliation",
    $referrer: "https://imfrustrated.org/letters/employer/wage-theft",
    $initial_referrer: "$direct",
    $prev_pageview_pathname: "/letters/parking/nyc/no-sign",
    $prev_pageview_url: "https://imfrustrated.org/letters/parking/nyc/no-sign",
    $session_entry_url: "https://imfrustrated.org/letters/consumer/x",
    category: "landlord",
  };
  sanitizeEventProps(p);
  assert.deepEqual(p, {
    $current_url: "https://imfrustrated.org/letters/landlord?ref=a",
    $pathname: "/letters/landlord",
    $referrer: "https://imfrustrated.org/letters/employer",
    $initial_referrer: "$direct",
    $prev_pageview_pathname: "/letters/parking",
    $prev_pageview_url: "https://imfrustrated.org/letters/parking",
    $session_entry_url: "https://imfrustrated.org/letters/consumer",
    category: "landlord",
  });
});
