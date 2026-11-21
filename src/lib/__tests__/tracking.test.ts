import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../tracking.ts", import.meta.url), "utf8");

test("new event names exist", () => {
  for (const n of ["letter_opened", "letter_copied", "intake_started", "intake_error", "cta_clicked"]) {
    assert.ok(src.includes(`"${n}"`), n);
  }
});
test("no sensitive prop names in tracking", () => {
  for (const bad of ["email", "message", "state:", "issueType", "body"]) {
    assert.ok(!new RegExp(`\\{[^}]*\\b${bad.replace(":", "")}\\b`).test(src.replace(/\/\*[\s\S]*?\*\//g, "")), bad);
  }
});
test("letter events send category only, never the slug", () => {
  assert.ok(/letterOpened, \{ category \}/.test(src));
  assert.ok(/letterCopied, \{ category, outcome \}/.test(src));
  assert.ok(!/\bslug\b|\bletter\b\s*[,}]/.test(src.replace(/\/\*[\s\S]*?\*\//g, "")));
});
