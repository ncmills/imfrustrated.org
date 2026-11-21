import test from "node:test";
import assert from "node:assert/strict";
import { sanitizePageviewUrl, filterQuery, redactLetterPath, redactLetterUrl, sanitizeEventProps, sanitizeEvent, stripHash } from "../pageview-url";

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
  assert.equal(redactLetterUrl("https://imfrustrated.org/letters/hoa/fine-dispute?utm_source=g#x"), "https://imfrustrated.org/letters/hoa?utm_source=g");
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
test("F2: hash is dropped on letter paths and when the hash names a letter", () => {
  assert.equal(redactLetterPath("/letters/landlord#my-slug"), "/letters/landlord");
  assert.equal(redactLetterUrl("https://imfrustrated.org/letters/landlord?ref=a#/letters/landlord/slug"), "https://imfrustrated.org/letters/landlord?ref=a");
  assert.equal(redactLetterPath("/?x=1#/letters/landlord/slug"), "/?x=1");
  assert.equal(redactLetterPath("/blog/post#section-2"), "/blog/post#section-2");
});
test("F3: encoded, uppercase, doubled-slash and dot forms are cut; unknown category -> /letters", () => {
  assert.equal(redactLetterPath("/letters/landlord%2Fslug"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters%2Flandlord%2Fslug"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters/landlord%252Fslug"), "/letters/landlord");
  assert.equal(redactLetterPath("/Letters/Landlord/Slug"), "/letters/landlord");
  assert.equal(redactLetterPath("//letters/landlord/slug"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters/./landlord/slug"), "/letters/landlord");
  assert.equal(redactLetterPath("/x/../letters/hoa/slug"), "/letters/hoa");
  assert.equal(redactLetterPath("/letters/domestic-violence-escape/slug"), "/letters");
  assert.equal(redactLetterPath("/letters/landlord/"), "/letters/landlord");
  assert.equal(redactLetterPath("/letters/parking/chicago/broken-meter/"), "/letters/parking");
  assert.equal(redactLetterUrl("https://imfrustrated.org//Letters//employer//wage-theft"), "https://imfrustrated.org/letters/employer");
});
test("F1: pageview title on a letter page becomes the cut path; other titles kept", () => {
  const p: Record<string, unknown> = {
    $current_url: "https://imfrustrated.org/letters/landlord/lease-early-termination-domestic-violence",
    title: "Lease Early Termination for Domestic Violence Survivors | imfrustrated",
  };
  sanitizeEventProps(p);
  assert.equal(p.title, "/letters/landlord");
  const q: Record<string, unknown> = { $current_url: "https://imfrustrated.org/blog/x", title: "Blog post" };
  sanitizeEventProps(q);
  assert.equal(q.title, "Blog post");
  const r: Record<string, unknown> = { $pathname: "/letters/parking/nyc/no-sign", title: "NYC no sign defense" };
  sanitizeEventProps(r);
  assert.equal(r.title, "/letters/parking");
});
test("F4: $set and $set_once are sanitized too", () => {
  const e = {
    properties: { $current_url: "https://imfrustrated.org/letters/family/custody-x" },
    $set: { $current_url: "https://imfrustrated.org/letters/family/custody-x", $pathname: "/letters/family/custody-x" },
    $set_once: { $initial_current_url: "https://imfrustrated.org/letters/school/iep-x", $initial_pathname: "/letters/school/iep-x" },
  };
  sanitizeEvent(e);
  assert.equal(e.properties.$current_url, "https://imfrustrated.org/letters/family");
  assert.equal(e.$set.$current_url, "https://imfrustrated.org/letters/family");
  assert.equal(e.$set.$pathname, "/letters/family");
  assert.equal(e.$set_once.$initial_current_url, "https://imfrustrated.org/letters/school");
  assert.equal(e.$set_once.$initial_pathname, "/letters/school");
  sanitizeEvent(null);
});
test("IMF-PATH-REDACT-2: every url/path prop loses its hash", () => {
  const p: Record<string, unknown> = {
    $current_url: "https://imfrustrated.org/blog/post?utm_source=g#section-2",
    $pathname: "/blog/post#x",
    $referrer: "https://google.com/#q",
  };
  sanitizeEventProps(p);
  assert.deepEqual(p, { $current_url: "https://imfrustrated.org/blog/post?utm_source=g", $pathname: "/blog/post", $referrer: "https://google.com/" });
  assert.equal(stripHash("/a"), "/a");
});
test("REDACT-FOLLOWUP-1121: multi-encoded dot segments cannot escape /letters", () => {
  assert.equal(redactLetterPath("/letters/%252e%252e/landlord/slug"), "/letters");
  assert.equal(redactLetterPath("/letters/%25252e%25252e/landlord/slug?utm_source=g"), "/letters?utm_source=g");
  assert.equal(redactLetterPath("/letters/landlord/../../tenant/slug"), "/letters");
  assert.equal(redactLetterPath("/letters/%2e%2e/%2e%2e/blog/x"), "/letters");
  assert.equal(redactLetterUrl("https://imfrustrated.org/letters/%252e%252e/landlord/slug#x"), "https://imfrustrated.org/letters");
  // unchanged behaviour
  assert.equal(redactLetterPath("/letters/landlord/my-slug"), "/letters/landlord");
  assert.equal(redactLetterPath("/blog/letters-guide"), "/blog/letters-guide");
  assert.equal(redactLetterPath("/foo/../letters/landlord/slug"), "/letters/landlord");
});
