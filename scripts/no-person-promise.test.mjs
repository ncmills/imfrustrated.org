// CONTROL IFDO-RUNS-ITSELF (3): never tell a visitor a person will look at their letter.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PROMISE =
  /a person will|someone will (look|review)|a human will|our team will review|need a person|person to look|a person at I(['’]|&apos;|&rsquo;)m Frustrated|a person has checked|a real person on our end|we read every (one|word)|we reply within|reply within a day/i;

// Reply-time promises ("within a few days", "within a week") and person/human reply promises inside JSON-LD.
// Scoped to site copy; src/data letter bodies are demands the user sends to third parties, not IFDO promises.
const REPLY_TIME =
  /(reply|respond|answer|hear back|get back|check back|back to you|response)\b[^.\n]{0,60}\bwithin (a|an|one|two|three|few|\d+)\b[ a-z]{0,12}(hour|day|week)s?|\bwithin (a|an|one|two|three|few|\d+)\b[ a-z]{0,12}(hour|day|week)s?\b[^.\n]{0,40}(reply|respond|answer|hear back|get back|check back)|(usually|typically) within (a|an|one|two|few|\d+)\b[ a-z]{0,12}(hour|day|week)s?/i;
const JSONLD_PROMISE = /get back to you|set up a conversation|a (real )?(person|human) (will|reads?|replies|responds)|we(['’]ll| will) (reply|call|talk)/i;
const COPY_DIRS = ["src/app", "src/components", "src/lib/imf-chat"];

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

test("positive control: matcher catches the retired lines", () => {
  for (const bad of [
    "We couldn't check every citation on this one. A person will look at it.",
    "We need a person to look at this; check back within 2 days.",
    "a person at I'm Frustrated reads your case",
    "whether or not a person has checked it",
    "Someone will review it.",
    "A human will reply.",
    "Our team will review your letter.",
    "a real person on our end will do it manually",
    "We read every one.",
    "Reach out. We read every word.",
    "we reply within a day, usually the same one.",
  ]) assert.match(bad, PROMISE);
});

test("nothing in src/ promises a person will review", () => {
  const files = walk(join(root, "src"));
  assert.ok(files.length > 20, `only ${files.length} files walked`);
  const found = files.flatMap((f) =>
    readFileSync(f, "utf8")
      .split("\n")
      .flatMap((line, i) => (PROMISE.test(line) ? [`${f.slice(root.length + 1)}:${i + 1} ${line.trim().slice(0, 160)}`] : [])),
  );
  assert.deepEqual(found, []);
});

test("positive control: reply-time and JSON-LD promise matchers catch the retired lines", () => {
  for (const bad of [
    "Check back within 2 days.",
    "Usually within a few days. We try to answer every email within a week.",
    "we reply within a day, usually the same one.",
    "You will hear back within a week.",
  ]) assert.match(bad, REPLY_TIME, bad);
  for (const bad of [
    "We'll get back to you and set up a conversation.",
    "A real person will reply.",
  ]) assert.match(bad, JSONLD_PROMISE, bad);
  for (const ok of ["Messages go to our inbox.", "Keep this link and check back.", "respond within thirty days of receipt"])
    assert.doesNotMatch(ok, REPLY_TIME, ok);
});

test("site copy and JSON-LD promise no reply time or human reply", () => {
  const files = COPY_DIRS.flatMap((d) => walk(join(root, d)));
  assert.ok(files.length > 20, `only ${files.length} files walked`);
  const found = files.flatMap((f) => {
    const src = readFileSync(f, "utf8");
    const rel = f.slice(root.length + 1);
    return src.split("\n").flatMap((line, i) => {
      const hits = [];
      if (REPLY_TIME.test(line)) hits.push("reply-time");
      if (JSONLD_PROMISE.test(line)) hits.push("person-reply");
      return hits.map((h) => `${rel}:${i + 1} [${h}] ${line.trim().slice(0, 140)}`);
    });
  });
  assert.deepEqual(found, []);
});
