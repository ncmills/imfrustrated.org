// CONTROL IFDO-RUNS-ITSELF (3): never tell a visitor a person will look at their letter.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PROMISE =
  /a person will|someone will (look|review)|a human will|our team will review|need a person|person to look|a person at I(['’]|&apos;|&rsquo;)m Frustrated|a person has checked|a real person on our end|we read every (one|word)|we reply within|reply within a day/i;

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
