// Post-build IndexNow bulk submit (Bing/Yandex). Fetches the live sitemap,
// extracts URLs, recurses into sub-sitemaps if it's an index, submits in
// chunks. Wired as `postbuild` so every Vercel deploy auto-pings.
// Failures are non-fatal — never block a deploy.

const INDEXNOW_KEY = "6e57d3609dbde06aed1df959e8b63492";
const INDEXNOW_HOST = "imfrustrated.org";
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP_URL = `https://${INDEXNOW_HOST}/sitemap.xml`;
const CHUNK_SIZE = 1000;

async function fetchUrls(sitemap: string): Promise<string[]> {
  const res = await fetch(sitemap, { signal: AbortSignal.timeout(15_000) });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const locs = (xml.match(/<loc>([^<]+)<\/loc>/g) ?? []).map((m) =>
    m.replace(/<\/?loc>/g, "").trim()
  );
  if (xml.includes("<sitemapindex")) {
    const all: string[] = [];
    for (const sub of locs) {
      try {
        const subUrls = await fetchUrls(sub);
        all.push(...subUrls);
      } catch (err) {
        console.warn(`[indexnow] failed sub-sitemap ${sub}: ${err}`);
      }
    }
    return all;
  }
  return locs;
}

async function submit(urlList: string[]): Promise<void> {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`IndexNow submit failed: ${res.status} ${text}`);
  }
}

async function main(): Promise<void> {
  console.log(`[indexnow] fetching ${SITEMAP_URL}`);
  const urls = await fetchUrls(SITEMAP_URL);
  console.log(`[indexnow] parsed ${urls.length} URLs`);
  if (urls.length === 0) return;
  for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
    const chunk = urls.slice(i, i + CHUNK_SIZE);
    console.log(`[indexnow] submitting chunk ${i / CHUNK_SIZE + 1} (${chunk.length} URLs)`);
    await submit(chunk);
  }
  console.log(`[indexnow] done — submitted ${urls.length} URLs`);
}

main().catch((err) => {
  console.error("[indexnow] error:", err);
  // Don't fail the build on a non-fatal upstream issue.
});
