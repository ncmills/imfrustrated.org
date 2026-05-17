import { getAllLetters, categoryMeta } from "@/data/letters";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://imfrustrated.org";
  const letters = getAllLetters().slice().sort((a, b) => {
    const aDate = a.updatedAt ?? a.publishedAt;
    const bDate = b.updatedAt ?? b.publishedAt;
    return bDate.localeCompare(aDate);
  });

  const lastBuildDate = new Date().toUTCString();
  const mostRecent = letters[0];
  const pubDate = mostRecent
    ? new Date(mostRecent.updatedAt ?? mostRecent.publishedAt).toUTCString()
    : lastBuildDate;

  const items = letters
    .map((letter) => {
      const url = `${baseUrl}/letters/${letter.category}/${letter.slug}`;
      const date = new Date(letter.updatedAt ?? letter.publishedAt).toUTCString();
      const meta = categoryMeta[letter.category];
      return `    <item>
      <title>${escapeXml(letter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(letter.metaDescription)}</description>
      <category>${escapeXml(meta.label)}</category>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>I'm Frustrated dot Org — Letter Templates</title>
    <link>${baseUrl}/letters</link>
    <atom:link href="${baseUrl}/letters/rss.xml" rel="self" type="application/rss+xml" />
    <description>Free, attorney-written letter templates that invoke real federal and state statutes. New templates added regularly.</description>
    <language>en-US</language>
    <copyright>I'm Frustrated dot Org</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${pubDate}</pubDate>
    <ttl>1440</ttl>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
