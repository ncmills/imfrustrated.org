import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) { console.error("usage: tsx validate-research.ts <record.json>"); process.exit(2); }
const r = JSON.parse(readFileSync(path, "utf8"));

let failures = 0;
const fail = (m: string) => { console.error(`FAIL: ${m}`); failures++; };
const need = (cond: boolean, m: string) => { cond ? console.log(`ok: ${m}`) : fail(m); };
const isSource = (s: unknown) =>
  !!s && typeof (s as any).url === "string" && (s as any).url.startsWith("http");

// City-level required facts (spec §6.1)
for (const k of ["slug","city","state","agency","submitOnlineUrl","submitMailAddress",
                 "contestDeadlineDays","contestDeadlineNote","penaltyNote","verifiedAt"]) {
  need(r[k] !== undefined && r[k] !== "", `city.${k} present`);
}
need(Array.isArray(r.howToContest) && r.howToContest.length >= 2, "city.howToContest has steps");
need(Array.isArray(r.municipalCodeRefs) && r.municipalCodeRefs.length >= 1, "city.municipalCodeRefs present");
need(Array.isArray(r.sources) && r.sources.length >= 1 && r.sources.every(isSource),
  "city.sources are official URLs");
need(Array.isArray(r.recognizedDefenses) && r.recognizedDefenses.length >= 1, "city.recognizedDefenses present");

// Every recognized defense must have a fully-sourced record
for (const slug of r.recognizedDefenses ?? []) {
  const d = (r.defenses ?? []).find((x: any) => x.slug === slug);
  if (!d) { fail(`defense ${slug} record missing`); continue; }
  need(!!d.whenItApplies, `defense ${slug}.whenItApplies`);
  need(Array.isArray(d.evidenceChecklist) && d.evidenceChecklist.length >= 1, `defense ${slug}.evidenceChecklist`);
  need(!!d.codeCite && !!d.codeCite.citation && isSource(d.codeCite), `defense ${slug}.codeCite sourced`);
  need(Array.isArray(d.sources) && d.sources.length >= 1 && d.sources.every(isSource), `defense ${slug}.sources`);
}

if (failures) { console.error(`\n${failures} failure(s) — record NOT accepted`); process.exit(1); }
console.log("\nResearch record valid.");
