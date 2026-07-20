import type { ParkingCity, ParkingDefense } from "./types";
export type { ParkingCity, ParkingDefense, ParkingDefenseSlug, CodeRef, SourceRef } from "./types";
import { nycCity } from "./cities/nyc";

// City imports are added as each city file lands (Task 3, Task 10).
const allCities: ParkingCity[] = [nycCity];

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
    { url: `${base}/letters/parking`, lastModified: now },
  ];
  for (const c of allCities) {
    urls.push({ url: `${base}/letters/parking/${c.slug}`, lastModified: c.updatedAt ?? c.publishedAt });
    for (const d of c.defenses) {
      urls.push({
        url: `${base}/letters/parking/${c.slug}/${d.slug}`,
        lastModified: d.updatedAt ?? d.publishedAt,
      });
    }
  }
  return urls;
}
