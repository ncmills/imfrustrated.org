import { getAllParkingCities, getParkingCity, getParkingDefense, getParkingUrls } from "../../src/data/parking/index";

let failures = 0;
function check(name: string, cond: boolean) {
  if (!cond) { console.error(`FAIL: ${name}`); failures++; }
  else console.log(`ok: ${name}`);
}

// Skeleton-stage expectations (Task 1): accessors exist and are consistent with 0 cities.
check("getAllParkingCities returns array", Array.isArray(getAllParkingCities()));
check("getParkingUrls includes the index url",
  getParkingUrls().some((u) => u.url === "https://imfrustrated.org/letters/parking"));
check("getParkingCity(unknown) is undefined", getParkingCity("nope") === undefined);
check("getParkingDefense(unknown) is undefined", getParkingDefense("nope", "nope") === undefined);

const nyc = getParkingCity("nyc");
check("nyc city present", !!nyc);
check("nyc has >=1 defense", !!nyc && nyc.defenses.length >= 1);
check("every nyc defense has a code cite", !!nyc && nyc.defenses.every((d) => !!d.codeCite?.citation));
check("every nyc defense has sources", !!nyc && nyc.defenses.every((d) => d.sources.length >= 1));
check("recognizedDefenses all have a defense record",
  !!nyc && nyc.recognizedDefenses.every((s) => nyc.defenses.some((d) => d.slug === s)));
check("nyc urls include a leaf", getParkingUrls().some((u) => u.url.startsWith("https://imfrustrated.org/letters/parking/nyc/")));

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log("\nAll module assertions passed.");
