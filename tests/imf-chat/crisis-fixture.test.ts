// Shared crisis fixture (U7 normalise spec). The SN suite carries the identical strings.
import { test } from "node:test";
import assert from "node:assert/strict";
import { crisisTier, crisisTierTurns, normaliseCrisisText } from "../../src/lib/imf-chat/crisis";

const EXPECT_A = ["I want to kill myself", "kill my self", "sui-cide", "sui.cide", "kill​myself", "ｋｉｌｌ ｍｙｓｅｌｆ"];
const EXPECT_A_TURNS: [string, string] = ["I want to kill", "myself"];
const EXPECT_B = ["I just want to end it all"];
const EXPECT_NONE = ["my landlord is killing me with fees", "the skill set they listed", "suitcase deposit"];

test("fixture: expect A", () => {
  for (const s of EXPECT_A) assert.equal(crisisTier(s), "A", s);
});

test("fixture: phrase split across two turns is A", () => {
  const [prev, cur] = EXPECT_A_TURNS;
  assert.equal(crisisTier(prev), null);
  assert.equal(crisisTier(cur), null);
  assert.equal(crisisTierTurns(cur, prev), "A");
});

test("fixture: expect B", () => {
  for (const s of EXPECT_B) assert.equal(crisisTier(s), "B", s);
});

test("fixture: expect none", () => {
  for (const s of EXPECT_NONE) assert.equal(crisisTier(s), null, s);
});

test("norm: NFKC, zero-width and soft chars, punctuation", () => {
  assert.equal(normaliseCrisisText("ＫＩＬＬ­ my-self!!"), "kill my self");
  assert.equal(normaliseCrisisText("a﻿b⁠c‌d‍e"), "abcde");
});
