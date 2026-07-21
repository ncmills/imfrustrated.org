// AUTO-GENERATED registry by scripts/parking-expansion/regen-index.ts.
// Do NOT hand-edit the imports or allCities list — add a cities/<slug>.ts file and re-run the script.
import type { ParkingCity, ParkingDefense } from "./types";
export type { ParkingCity, ParkingDefense, ParkingDefenseSlug, CodeRef, SourceRef } from "./types";
import { nycCity } from "./cities/nyc";
import { atlantaCity } from "./cities/atlanta";
import { austinCity } from "./cities/austin";
import { baltimoreCity } from "./cities/baltimore";
import { bostonCity } from "./cities/boston";
import { chicagoCity } from "./cities/chicago";
import { dallasCity } from "./cities/dallas";
import { denverCity } from "./cities/denver";
import { houstonCity } from "./cities/houston";
import { lasVegasCity } from "./cities/las-vegas";
import { losAngelesCity } from "./cities/los-angeles";
import { miamiCity } from "./cities/miami";
import { minneapolisCity } from "./cities/minneapolis";
import { philadelphiaCity } from "./cities/philadelphia";
import { phoenixCity } from "./cities/phoenix";
import { portlandCity } from "./cities/portland";
import { sanDiegoCity } from "./cities/san-diego";
import { sanFranciscoCity } from "./cities/san-francisco";
import { sanJoseCity } from "./cities/san-jose";
import { seattleCity } from "./cities/seattle";
import { washingtonDcCity } from "./cities/washington-dc";

const allCities: ParkingCity[] = [
  nycCity,
  atlantaCity,
  austinCity,
  baltimoreCity,
  bostonCity,
  chicagoCity,
  dallasCity,
  denverCity,
  houstonCity,
  lasVegasCity,
  losAngelesCity,
  miamiCity,
  minneapolisCity,
  philadelphiaCity,
  phoenixCity,
  portlandCity,
  sanDiegoCity,
  sanFranciscoCity,
  sanJoseCity,
  seattleCity,
  washingtonDcCity,
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
