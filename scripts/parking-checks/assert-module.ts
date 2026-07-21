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

// Full-roster expectations (Task 10): all 10 cities wired, each internally consistent.
check("21 cities present", getAllParkingCities().length === 21);
check("every city has >=1 defense with a cite & sources",
  getAllParkingCities().every((c) => c.defenses.length >= 1 &&
    c.defenses.every((d) => !!d.codeCite?.citation && d.sources.length >= 1)));
check("every recognizedDefense has a defense record",
  getAllParkingCities().every((c) => c.recognizedDefenses.every((s) => c.defenses.some((d) => d.slug === s))));
check("every defense record is listed in recognizedDefenses",
  getAllParkingCities().every((c) => c.defenses.every((d) => c.recognizedDefenses.includes(d.slug))));
check("all city slugs unique",
  new Set(getAllParkingCities().map((c) => c.slug)).size === getAllParkingCities().length);
check("every city has agency + online + deadline + mail",
  getAllParkingCities().every((c) => !!c.agency && !!c.submitOnlineUrl && c.contestDeadlineDays > 0 && !!c.submitMailAddress));

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log("\nAll module assertions passed.");
