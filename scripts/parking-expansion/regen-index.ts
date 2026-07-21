/**
 * Regenerates src/data/parking/index.ts from the city files in src/data/parking/cities/.
 * Wiring a new city = drop cities/<slug>.ts (exporting `<camelCase(slug)>City`) then run:
 *   npx tsx scripts/parking-expansion/regen-index.ts
 * Deterministic — no hand-editing of the city list, no LLM. Used by the expansion agent.
 */
import { readdirSync, writeFileSync } from "node:fs";

const CITIES_DIR = "src/data/parking/cities";
const OUT = "src/data/parking/index.ts";

function exportName(slug: string): string {
  // "san-diego" -> "sanDiegoCity", "nyc" -> "nycCity", "washington-dc" -> "washingtonDcCity"
  const camel = slug
    .split("-")
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");
  return `${camel}City`;
}

const slugs = readdirSync(CITIES_DIR)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""))
  .sort((a, b) => (a === "nyc" ? -1 : b === "nyc" ? 1 : a.localeCompare(b))); // nyc first, rest alpha

const imports = slugs.map((s) => `import { ${exportName(s)} } from "./cities/${s}";`).join("\n");
const listBody = slugs.map((s) => `  ${exportName(s)},`).join("\n");

const file = `// AUTO-GENERATED registry by scripts/parking-expansion/regen-index.ts.
// Do NOT hand-edit the imports or allCities list — add a cities/<slug>.ts file and re-run the script.
import type { ParkingCity, ParkingDefense } from "./types";
export type { ParkingCity, ParkingDefense, ParkingDefenseSlug, CodeRef, SourceRef } from "./types";
${imports}

const allCities: ParkingCity[] = [
${listBody}
];

export function getAllParkingCities(): ParkingCity[] {
  return allCities;
}

export function getParkingCity(slug: string): ParkingCity | undefined {
  return allCities.find((c) => c.slug === slug);
}

export function getParkingDefense(citySlug: string, defenseSlug: string): ParkingDefense | undefined {
  return getParkingCity(citySlug)?.defenses.find((d) => d.slug === defenseSlug);
}

export function getParkingUrls(): { url: string; lastModified: string }[] {
  const base = "https://imfrustrated.org";
  const now = new Date().toISOString();
  const urls: { url: string; lastModified: string }[] = [
    { url: \`\${base}/letters/parking\`, lastModified: now },
  ];
  for (const c of allCities) {
    urls.push({ url: \`\${base}/letters/parking/\${c.slug}\`, lastModified: c.updatedAt ?? c.publishedAt });
    for (const d of c.defenses) {
      urls.push({
        url: \`\${base}/letters/parking/\${c.slug}/\${d.slug}\`,
        lastModified: d.updatedAt ?? d.publishedAt,
      });
    }
  }
  return urls;
}
`;

writeFileSync(OUT, file);
console.log(`Regenerated ${OUT} with ${slugs.length} cities: ${slugs.join(", ")}`);
