import type { ParkingCity, ParkingDefense } from "./types";
export type { ParkingCity, ParkingDefense, ParkingDefenseSlug, CodeRef, SourceRef } from "./types";
import { nycCity } from "./cities/nyc";
import { losAngelesCity } from "./cities/los-angeles";
import { chicagoCity } from "./cities/chicago";
import { houstonCity } from "./cities/houston";
import { phoenixCity } from "./cities/phoenix";
import { philadelphiaCity } from "./cities/philadelphia";
import { sanFranciscoCity } from "./cities/san-francisco";
import { seattleCity } from "./cities/seattle";
import { bostonCity } from "./cities/boston";
import { washingtonDcCity } from "./cities/washington-dc";
import { sanDiegoCity } from "./cities/san-diego";
import { sanJoseCity } from "./cities/san-jose";
import { dallasCity } from "./cities/dallas";
import { austinCity } from "./cities/austin";
import { denverCity } from "./cities/denver";
import { portlandCity } from "./cities/portland";
import { miamiCity } from "./cities/miami";
import { atlantaCity } from "./cities/atlanta";
import { minneapolisCity } from "./cities/minneapolis";
import { lasVegasCity } from "./cities/las-vegas";
import { baltimoreCity } from "./cities/baltimore";

const allCities: ParkingCity[] = [
  nycCity,
  losAngelesCity,
  chicagoCity,
  houstonCity,
  phoenixCity,
  philadelphiaCity,
  sanFranciscoCity,
  seattleCity,
  bostonCity,
  washingtonDcCity,
  sanDiegoCity,
  sanJoseCity,
  dallasCity,
  austinCity,
  denverCity,
  portlandCity,
  miamiCity,
  atlantaCity,
  minneapolisCity,
  lasVegasCity,
  baltimoreCity,
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
