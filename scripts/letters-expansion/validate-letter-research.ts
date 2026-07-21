/**
 * Validates a letter-expansion research record before it becomes a LetterTemplate.
 * Usage: npx tsx scripts/letters-expansion/validate-letter-research.ts <record.json>
 * A record is LetterTemplate fields + sources[] + verifiedAt + scopeCheck. The gate:
 * every required LetterTemplate field present, >=1 sourced statute, and the 3-test
 * scope filter explicitly attested. Rejects deferred-type topics.
 */
import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) { console.error("usage: tsx validate-letter-research.ts <record.json>"); process.exit(2); }
const r = JSON.parse(readFileSync(path, "utf8"));

let failures = 0;
const fail = (m: string) => { console.error(`FAIL: ${m}`); failures++; };
const need = (cond: boolean, m: string) => { cond ? console.log(`ok: ${m}`) : fail(m); };
const isSource = (s: unknown) => !!s && typeof (s as any).url === "string" && (s as any).url.startsWith("http");

const CATEGORIES = ["landlord","employer","neighbor","hoa","airline","hotel","credit-card","insurance","government","school","family","consumer"];

// Required LetterTemplate fields
for (const k of ["slug","category","title","metaDescription","lede","body","ifThisDoesntWork","publishedAt"]) {
  need(typeof r[k] === "string" && r[k].length > 0, `${k} present`);
}
need(CATEGORIES.includes(r.category), `category is one of the known set (${r.category})`);
need(Array.isArray(r.howToUse) && r.howToUse.length >= 2, "howToUse has steps");
need(Array.isArray(r.legalContext) && r.legalContext.length >= 1, "legalContext present");
need(Array.isArray(r.faqs) && r.faqs.length >= 2 && r.faqs.every((f: any) => f.question && f.answer), "faqs (>=2, q+a)");
need(Array.isArray(r.relatedSlugs), "relatedSlugs present (may be aspirational)");

// The body must be a fill-in letter, not prose: expect at least one [PLACEHOLDER].
need(/\[[A-Z][A-Z /_-]+\]/.test(r.body), "body contains [PLACEHOLDER] fields");

// Statute verification: at least one official source, and legalContext must name a statute.
need(Array.isArray(r.sources) && r.sources.length >= 1 && r.sources.every(isSource), "sources[] are official URLs");
need(/§|U\.?S\.?C\.?|C\.?F\.?R\.?|Stat\.|Code|Act|Chapter|\b\d{1,2}\s+U\.?S\.?C\b/i.test(JSON.stringify(r.legalContext)),
  "legalContext names a statute/code/act");

// Scope filter (CLAUDE.md 3-test) must be explicitly attested + not a deferred type.
need(!!r.scopeCheck && r.scopeCheck.universal === true && r.scopeCheck.preLitigation === true && r.scopeCheck.formalLegalTenor === true,
  "scopeCheck: universal + pre-litigation + formal-legal-tenor all true");
need(r.scopeCheck && r.scopeCheck.notDeferredType === true,
  "scopeCheck: confirmed NOT a deferred type (FMLA/ADA/PWFA/USERRA/OSHA-whistleblower, SSDI/Medicare/IRS/FOIA, ERISA/NSA/MHP, FERPA/IDEA/TitleIX, FHA-ESA/OTARD, TCPA/TILA/EFTA, HR-process, litigation-track)");

need(typeof r.verifiedAt === "string" && r.verifiedAt.length >= 8, "verifiedAt present");

if (failures) { console.error(`\n${failures} failure(s) — record NOT accepted`); process.exit(1); }
console.log("\nLetter research record valid.");
