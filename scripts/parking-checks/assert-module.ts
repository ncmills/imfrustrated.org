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

if (failures) { console.error(`\n${failures} failure(s)`); process.exit(1); }
console.log("\nAll module assertions passed.");
