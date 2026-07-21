/**
 * imfrustrated.org library integrity audit (com.secondnick.imfrustrated-library-audit).
 * YMYL guard against drift over time:
 *  1. LINK ROT  — every parking codeCite/source/portal URL + letter research-record source URL
 *     still resolves (404/410/5xx/DNS = rot; 403/405 = bot-blocked-but-live, NOT rot).
 *  2. LIVE ROUTES — a sample of production /letters/parking + /letters pages return 200.
 *  3. STALENESS  — records with verifiedAt older than the window are flagged for re-verification.
 *
 * Usage: npx tsx scripts/library-audit/audit-live.ts [--issue] [--stale-days=180]
 * Writes a dated report to docs/library-audit/. With --issue, opens a GitHub issue on findings.
 * Exit 1 if link rot or a dead live route is found (staleness alone does not fail).
 */
import { getAllParkingCities } from "../../src/data/parking/index";
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";

const args = process.argv.slice(2);
const OPEN_ISSUE = args.includes("--issue");
const STALE_DAYS = Number((args.find((a) => a.startsWith("--stale-days=")) || "").split("=")[1] || 180);
const TODAY = new Date();
const PROD = "https://imfrustrated.org";

type Url = { url: string; where: string };
const urls: Url[] = [];
const staleFlags: string[] = [];

function noteStale(label: string, verifiedAt?: string) {
  if (!verifiedAt) return;
  const age = (TODAY.getTime() - new Date(verifiedAt).getTime()) / 86_400_000;
  if (age > STALE_DAYS) staleFlags.push(`${label} — verified ${verifiedAt} (${Math.round(age)}d ago)`);
}

// ---- collect parking URLs (structured, all 22 cities) ----
for (const c of getAllParkingCities()) {
  noteStale(`parking/${c.slug}`, c.verifiedAt);
  if (c.submitOnlineUrl?.startsWith("http")) urls.push({ url: c.submitOnlineUrl, where: `parking/${c.slug} submitOnlineUrl` });
  for (const m of c.municipalCodeRefs ?? []) if (m.url) urls.push({ url: m.url, where: `parking/${c.slug} municipalCodeRef` });
  for (const s of c.sources ?? []) if (s.url) urls.push({ url: s.url, where: `parking/${c.slug} source` });
  for (const d of c.defenses ?? []) {
    if (d.codeCite?.url) urls.push({ url: d.codeCite.url, where: `parking/${c.slug}/${d.slug} codeCite` });
    for (const s of d.sources ?? []) if (s.url) urls.push({ url: s.url, where: `parking/${c.slug}/${d.slug} source` });
  }
}

// ---- collect letter research-record URLs (records that exist) ----
try {
  for (const f of readdirSync("docs/superpowers/research/letters").filter((f) => f.endsWith(".json"))) {
    const r = JSON.parse(readFileSync(`docs/superpowers/research/letters/${f}`, "utf8"));
    noteStale(`letters/${r.slug}`, r.verifiedAt);
    for (const s of r.sources ?? []) if (s.url?.startsWith("http")) urls.push({ url: s.url, where: `letters/${r.slug} source` });
  }
} catch { /* dir may not exist */ }

// ---- dedupe URLs ----
const seen = new Map<string, string>();
for (const u of urls) if (!seen.has(u.url)) seen.set(u.url, u.where);

// kind: 'ok' (live, incl. bot-blocked 401/403) | 'gone' (confirmed 404/410/5xx) | 'unreachable' (DNS/timeout/conn — maybe transient)
async function probeOnce(url: string): Promise<{ kind: "ok" | "gone" | "unreachable"; status: number | string }> {
  for (const method of ["HEAD", "GET"] as const) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 12_000);
      const res = await fetch(url, { method, redirect: "follow", signal: ctrl.signal, headers: { "user-agent": "imfrustrated-link-audit/1.0" } });
      clearTimeout(t);
      if (res.status === 405 && method === "HEAD") continue; // retry with GET
      if (res.status < 400 || res.status === 401 || res.status === 403) return { kind: "ok", status: res.status };
      return { kind: "gone", status: res.status }; // 404/410/5xx = confirmed gone
    } catch (e: any) {
      if (method === "GET") return { kind: "unreachable", status: e?.name === "AbortError" ? "timeout" : "dns/conn-error" };
    }
  }
  return { kind: "unreachable", status: "no-response" };
}

async function probe(url: string): Promise<{ kind: "ok" | "gone" | "unreachable"; status: number | string }> {
  const first = await probeOnce(url);
  if (first.kind !== "unreachable") return first;
  await new Promise((r) => setTimeout(r, 1500)); // retry once — unreachable is often transient
  return probeOnce(url);
}

async function mapLimit<T, R>(items: T[], limit: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); }
  }));
  return out;
}

(async () => {
  const list = [...seen.entries()];
  console.log(`Auditing ${list.length} unique URLs across ${getAllParkingCities().length} parking cities + letter records...`);
  const results = await mapLimit(list, 6, async ([url, where]) => ({ url, where, ...(await probe(url)) }));
  const gone = results.filter((r) => r.kind === "gone");
  const unreachable = results.filter((r) => r.kind === "unreachable");

  // live routes sample
  const cities = getAllParkingCities();
  const routes = [
    `${PROD}/letters/parking`, `${PROD}/letters`,
    ...cities.slice(0, 6).map((c) => `${PROD}/letters/parking/${c.slug}`),
    ...cities.slice(0, 4).flatMap((c) => c.defenses[0] ? [`${PROD}/letters/parking/${c.slug}/${c.defenses[0].slug}`] : []),
  ];
  const routeResults = await mapLimit(routes, 6, async (url) => ({ url, ...(await probe(url)) }));
  const deadRoutes = routeResults.filter((r) => r.kind !== "ok");

  const stamp = TODAY.toISOString().slice(0, 10);
  mkdirSync("docs/library-audit", { recursive: true });
  const lines: string[] = [
    `# imfrustrated.org library audit — ${stamp}`, "",
    `- URLs checked: ${list.length} · confirmed-gone: **${gone.length}** · unreachable: **${unreachable.length}** · dead routes: **${deadRoutes.length}** · stale (>${STALE_DAYS}d): **${staleFlags.length}**`, "",
  ];
  if (gone.length) { lines.push("## 🔴 Confirmed gone (HTTP 404/410/5xx — cite/portal moved or removed; re-source needed)"); gone.forEach((r) => lines.push(`- \`${r.status}\` — ${r.where} — ${r.url}`)); lines.push(""); }
  if (deadRoutes.length) { lines.push("## 🔴 Dead production routes"); deadRoutes.forEach((r) => lines.push(`- \`${r.status}\` — ${r.url}`)); lines.push(""); }
  if (unreachable.length) { lines.push("## 🟡 Unreachable (DNS/timeout after 1 retry — may be transient or a bot-level block; verify manually)"); unreachable.forEach((r) => lines.push(`- \`${r.status}\` — ${r.where} — ${r.url}`)); lines.push(""); }
  if (staleFlags.length) { lines.push(`## 🟡 Stale (verifiedAt past the window — re-verify against the live source)`); staleFlags.forEach((s) => lines.push(`- ${s}`)); lines.push(""); }
  if (!gone.length && !deadRoutes.length && !unreachable.length && !staleFlags.length) lines.push("✅ All source/cite/portal URLs resolve, all sampled routes 200, nothing stale.");
  const report = lines.join("\n") + "\n";
  const path = `docs/library-audit/${stamp}.md`;
  writeFileSync(path, report);
  console.log(report);
  console.log(`Report: ${path}`);

  if (OPEN_ISSUE && (gone.length || deadRoutes.length)) {
    try {
      const title = `library audit ${stamp}: ${gone.length} confirmed-gone, ${deadRoutes.length} dead routes`;
      execSync(`gh issue create --title ${JSON.stringify(title)} --body-file ${JSON.stringify(path)} --label audit`, { stdio: "inherit" });
    } catch (e) { console.error("gh issue create failed:", e); }
  }

  // Fail only on CONFIRMED gone or dead routes — unreachable/stale are warnings so the agent isn't noisy.
  if (gone.length || deadRoutes.length) process.exit(1);
})();
