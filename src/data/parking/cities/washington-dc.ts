import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/washington-dc.json (verifiedAt 2026-07-20).
// IMPORTANT: DC parking, photo-enforcement, and minor moving-violation tickets can be issued
// by more than a dozen District and federal agencies (DPW, DDOT, MPD, US Park Police, US
// Capitol Police, university/hospital special police, etc.), but every one of those tickets
// is adjudicated by a single body — DC DMV Adjudication Services, an administrative tribunal
// operating under the District of Columbia Traffic Adjudication Act (D.C. Official Code
// § 50-2301 et seq.). Every defense statement below is addressed to DC DMV Adjudication
// Services and enters an answer of DENY, one of the three statutory answer options (Admit /
// Admit with Explanation / Deny) under D.C. Official Code § 50-2303.05(a)(1). DC's seven
// grounds for contest are each a distinct, genuinely substantive paragraph of D.C. Official
// Code § 50-2303.05(a)(2) — not a generic procedural section — so each defense below cites
// its specific subsection directly.

const cityHowToContest: string[] = [
  "Do not pay the ticket. Under D.C. Official Code § 50-2303.05(a)(1), once you pay the fine and/or penalty (in full or in part) you lose the administrative right to contest the ticket.",
  "Identify which of the seven statutory grounds under D.C. Official Code § 50-2303.05(a)(2) applies to your situation, and gather the evidence that supports it (photos, receipts, police report, medical records, registration documents, etc., as applicable).",
  "Choose a response method within the deadline: online through DC DMV's adjudication portal (linked from the DC DMV \"Contest Parking and Photo Enforcement Tickets\" page), by mail (mark \"Admit with Explanation\" on the back of the paper ticket and mail it with your evidence to DC DMV Adjudication Services), or in person/virtually at the Adjudication Service Center.",
  "Submit a written statement identifying your ground for contest plus all supporting evidence — DC DMV's hearing examiner considers only the evidence submitted with the request, per the hearing and evidence rules at 18 DCMR §§ 3011–3012.",
  "A hearing examiner reviews the notice of infraction, your answer, and your evidence, and issues a final determination (upholding, reducing, or dismissing the fine) that is mailed to the registered owner, per 18 DCMR § 3013.",
  "If you disagree with the determination, file a notice of appeal with DC DMV's Traffic Adjudication Appeals Board within 30 calendar days of the final determination, per 18 DCMR § 3014.9(a).",
  "If you missed the 60-day response window and a \"deemed admission\" or default judgment was entered against you, you may still file a Motion to Vacate within 60 calendar days of that determination, showing both excusable neglect (e.g. hospitalization, death in the family, unexpected travel) and a recognized legal defense to the underlying violation.",
];

const ifThisDoesntWork =
  "If the hearing examiner's final determination upholds the fine, you may file a notice of appeal with DC DMV's Traffic Adjudication Appeals Board within 30 calendar days of the final determination, per 18 DCMR § 3014.9(a). If you missed the original 60-day response window and a \"deemed admission\" or default judgment was entered against you instead, you may still file a Motion to Vacate within 60 calendar days of that determination, showing both excusable neglect and a recognized legal defense to the underlying violation.";

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "washington-dc",
  title: "Fight a not-my-vehicle parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a Washington, DC parking ticket when you weren't the owner. Cites D.C. Code § 50-2303.05(a)(2)(A) — mail-ready template.",
  whenItApplies:
    "You were not the owner or lessee of the cited vehicle at the time of the alleged infraction — e.g., the car was sold, gifted, or transferred before the ticket date.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

On [DATE], the vehicle bearing plate [PLATE] was cited at [LOCATION]. I was not the owner or lessee of this vehicle at the time of the alleged infraction: [DESCRIBE — e.g., I sold, gifted, or otherwise transferred the vehicle on [TRANSFER DATE], before this citation was issued, as shown by the attached bill of sale/title transfer documents, and DC DMV's own registration records show a different owner as of the violation date].

Under D.C. Official Code § 50-2303.05(a)(2)(A), it is a recognized statutory ground for denying a Notice of Infraction that the respondent was not the owner or lessee of the cited vehicle at the time of the infraction. I ask that this violation be dismissed on that basis.

Attached: [bill of sale, title transfer, or lease-termination documents dated before the violation date; DC DMV registration record showing a different owner as of the violation date; and any correspondence notifying DC DMV of the transfer].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Bill of sale, title transfer, or lease-termination documents dated before the violation date",
    "DMV registration record showing a different owner as of the violation date",
    "Any correspondence showing you notified DC DMV of the transfer",
  ],
  cityNotes:
    "This is the first of DC DMV's seven statutory grounds (\"You were not the owner or lessee of the cited vehicle at the time of the infraction\"). It is distinct from the \"stolen vehicle/plates\" ground, which covers theft rather than a legitimate transfer.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(A) — Not the owner or lessee at the time of the infraction",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(A)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "How is this different from DC's stolen-vehicle-or-plates defense?",
      answer:
        "This ground covers a legitimate ownership change — a sale, gift, or transfer completed before the ticket was issued. It's distinct from the stolen vehicle/plates ground, which covers theft, not a voluntary transfer.",
    },
    {
      question: "What proof do I need that I wasn't the owner?",
      answer:
        "Bill of sale, title transfer, or lease-termination documents dated before the violation date; a DC DMV registration record showing a different owner as of that date; and, if you have it, correspondence showing you notified DC DMV of the transfer.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "washington-dc",
  title: "Fight an obscured-signage parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a Washington, DC parking ticket with missing or obscured signage. Cites D.C. Code § 50-2303.05(a)(2)(C) — mail-ready template.",
  whenItApplies:
    "You were ticketed for violating a posted parking restriction, but the relevant sign prohibiting or restricting parking was missing or obscured (e.g., knocked down, turned away from view, blocked by foliage or another object) at the time of the violation.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign prohibiting or restricting parking at that location was [DESCRIBE THE DEFECT — missing entirely, knocked down, turned away from view, or obstructed by foliage or another object]. I am asserting that the relevant sign itself was missing or obscured — not merely that I failed to notice it.

Under D.C. Official Code § 50-2303.05(a)(2)(C), it is a recognized statutory ground for denying a Notice of Infraction that the relevant signs prohibiting or restricting parking were missing or obscured. I ask that this violation be dismissed on that basis.

Attached: [time- and date-stamped photos of the sign location showing it missing, obscured, or facing away from the parking spot; wide-angle photos of the full block showing no visible restriction sign; photos corroborated with map/satellite imagery; and any 311 service request or DDOT report about the missing/damaged sign, if filed].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the sign location showing it missing, obscured, or facing away from the parking spot",
    "Wide-angle photos of the full block showing no visible restriction sign",
    "Photos corroborated with map/satellite imagery of the location",
    "A 311 service request or DDOT report about the missing/damaged sign, if filed",
  ],
  cityNotes:
    "One of DC DMV's seven statutory grounds under § 50-2303.05(a)(2). DC DMV's published defenses list this as \"the relevant signs prohibiting or restricting parking were missing or obscured\" — evidence must show the sign itself was absent or unreadable, not merely that you didn't notice it.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(C) — Relevant signs missing or obscured",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(C)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense in DC?",
      answer:
        "No. DC DMV's published defense requires the sign itself to have been missing or obscured — blocked by foliage, knocked down, or turned away from view. Simply not noticing a sign that was properly posted isn't enough.",
    },
    {
      question: "What photos help most for this defense?",
      answer:
        "Time- and date-stamped photos of the sign location showing it missing or obscured, plus wide-angle photos of the full block showing no visible restriction sign. Corroborate with map or satellite imagery of the location.",
    },
    {
      question: "Should I file a 311 report about the missing or damaged sign?",
      answer:
        "It isn't required, but a 311 service request or DDOT report is independent, time-stamped corroboration that the sign was actually missing or obscured.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "washington-dc",
  title: "Fight a broken-meter parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a broken-meter parking ticket in Washington, DC. Cites D.C. Code § 50-2303.05(a)(2)(D) — mail-ready template.",
  whenItApplies:
    "You were ticketed for a meter-related violation (e.g., expired or no payment displayed), but the relevant parking meter was inoperable or malfunctioned through no fault of your own.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter serving that spot, but the meter was inoperable or malfunctioned through no fault of my own: [DESCRIBE — e.g., blank/error screen, jammed coin slot, non-functioning card reader]. I made a good-faith effort to pay for parking at the meter I was assigned to use.

Under D.C. Official Code § 50-2303.05(a)(2)(D), it is a recognized statutory ground for denying a Notice of Infraction that the relevant parking meter was inoperable or malfunctioned through no fault of the person who received the ticket. I ask that this violation be dismissed on that basis.

Attached: [time- and date-stamped photos of the malfunctioning meter, any 311 complaint or repair report filed, and proof of an attempted payment such as a failed card-payment notification].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the malfunctioning meter (blank/error screen, jammed coin slot, non-functioning card reader, etc.)",
    "A 311 complaint or repair report for the meter, if filed",
    "Proof you attempted payment (e.g., a failed card-payment notification) at that meter",
  ],
  cityNotes:
    "One of DC DMV's seven statutory grounds under § 50-2303.05(a)(2): \"the relevant parking meter was inoperable or malfunctioned through no fault of the person who received the ticket.\" Unlike NYC, DC's statutory language does not require you to show an attempt to pay at a different, nearby meter — it targets the specific meter you used.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(D) — Parking meter inoperable or malfunctioning",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(D)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "Do I need to show I tried a second, nearby meter, like in NYC?",
      answer:
        "No. Unlike NYC's broken-meter dispute ground, DC's statutory language does not require you to show an attempt to pay at a different, nearby meter — it targets the specific meter you used.",
    },
    {
      question: "Do I have to file a 311 complaint about the broken meter?",
      answer:
        "It isn't required, but a 311 complaint or repair report filed around the time of the violation is independent, time-stamped corroboration that the meter was actually malfunctioning.",
    },
    {
      question: "What evidence works best for this defense?",
      answer:
        "Time- and date-stamped photos of the meter showing the malfunction (blank screen, jammed slot, dead card reader), plus proof of an attempted payment such as a failed card-payment notification.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "washington-dc",
  title: "Fight a defective parking ticket in Washington, DC (wrong ticket details)",
  metaDescription:
    "Free DENY defense-statement letter for a defective Washington, DC parking ticket with inconsistent facts. Cites D.C. Code § 50-2303.05(a)(2)(E) — mail-ready template.",
  whenItApplies:
    "The facts alleged on the parking violation notice are inconsistent with each other, or do not support a finding that the specific regulation cited was actually violated — e.g., wrong plate number, a described location or time that doesn't match the cited code section, or a factual description that contradicts the violation charged.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

This Notice of Infraction contains facts that are inconsistent with each other, or that do not support a finding that the specific regulation cited was actually violated. Specifically, [DESCRIBE THE DEFECT — e.g., the plate number printed does not match my vehicle, the described location or time does not match the cited code section, or the factual description contradicts the violation charged]. Comparing the notice against my vehicle registration/title, the correct information is: [CORRECT INFORMATION].

Under D.C. Official Code § 50-2303.05(a)(2)(E), it is a recognized statutory ground for denying a Notice of Infraction that the facts alleged on the notice are inconsistent with each other, or do not support a finding that the specified regulation was violated. I ask that this violation be dismissed on that basis.

Attached: [a copy or photo of the actual notice of infraction showing the inconsistent or unsupported facts, my vehicle registration to compare the correct plate number/description against what's on the ticket, and any documentation contradicting the specific facts alleged].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual notice of infraction, showing the inconsistent or unsupported facts",
    "Your vehicle registration, to compare the correct plate number/description against what's on the ticket",
    "Any documentation (photos, receipts, GPS/location records) contradicting the specific facts alleged",
  ],
  cityNotes:
    "One of DC DMV's seven statutory grounds under § 50-2303.05(a)(2): \"the facts alleged on the parking violation notice are inconsistent or do not support a finding that the specified regulation was violated.\" This is DC's version of a defective-ticket defense — it turns on the notice's own internal facts, not on a separate \"required elements\" checklist the way NYC's does. The required contents of a valid notice of infraction are separately set out at D.C. Official Code § 50-2303.03.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(E) — Facts alleged are inconsistent or do not support the violation",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(E)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.03 — Notice of infraction",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.03",
    },
  ],
  faqs: [
    {
      question: "Is this the same as NYC's \"required elements\" defective-ticket defense?",
      answer:
        "Not quite. DC's ground turns on the notice's own internal facts being inconsistent or unsupportive of the violation charged, rather than a separate checklist of required fields the way NYC's does. The required contents of a valid DC notice of infraction are set out separately at D.C. Official Code § 50-2303.03.",
    },
    {
      question: "What's an example of \"inconsistent facts\" DC DMV would recognize?",
      answer:
        "A wrong plate number, a described location or time that doesn't match the cited code section, or a factual description that contradicts the violation actually charged.",
    },
    {
      question: "What should I attach to prove the inconsistency?",
      answer:
        "A copy or photo of the actual notice showing the defect, your vehicle registration to compare the correct plate number or description, and any documentation (photos, receipts, GPS records) that contradicts the specific facts alleged.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const dc_stolen_vehicle_or_plates: ParkingDefense = {
  slug: "dc-stolen-vehicle-or-plates",
  citySlug: "washington-dc",
  title: "Fight a stolen-vehicle-or-plates parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a Washington, DC parking ticket on a stolen vehicle or plates. Cites D.C. Code § 50-2303.05(a)(2)(B) — mail-ready template.",
  whenItApplies:
    "The cited vehicle, or its state registration plates, were stolen at the time the violation occurred.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

The vehicle bearing plate [PLATE], or its registration plates, were stolen at the time this violation occurred. The theft was reported to police on [DATE OF POLICE REPORT], [before / on] the citation date of [DATE]. [IF APPLICABLE: I also reported the theft to DC DMV and filed an insurance claim related to the theft.]

Under D.C. Official Code § 50-2303.05(a)(2)(B), it is a recognized statutory ground for denying a Notice of Infraction that the vehicle or its plates were stolen at the time of the violation. I ask that this violation be dismissed on that basis.

Attached: [a full police report of the theft, filed before or covering the violation date; any insurance claim documentation related to the theft; and proof the plates/vehicle were reported to DMV as stolen].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A full police report of the theft, filed before or covering the violation date",
    "Any insurance claim documentation related to the theft",
    "Proof the plates/vehicle were reported to DMV as stolen",
  ],
  cityNotes:
    "DC-specific statutory ground under § 50-2303.05(a)(2); DC DMV's published guidance notes this defense \"requires [a] full police report\" as supporting evidence, not merely an assertion that the vehicle was stolen.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(B) — Vehicle or plates stolen at the time of the violation",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(B)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "Is a police report required, or can I just state the vehicle was stolen?",
      answer:
        "A full police report is required as supporting evidence. DC DMV's published guidance is explicit that this defense needs a full police report, not merely an assertion that the vehicle was stolen.",
    },
    {
      question: "Does this defense cover stolen plates, not just a stolen vehicle?",
      answer:
        "Yes. The statutory ground covers either the cited vehicle itself or its state registration plates being stolen at the time of the violation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const dc_sudden_mechanical_disability: ParkingDefense = {
  slug: "dc-sudden-mechanical-disability",
  citySlug: "washington-dc",
  title: "Fight a sudden-mechanical-disability parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a Washington, DC parking ticket after sudden mechanical disability. Cites D.C. Code § 50-2303.05(a)(2)(F) — mail-ready template.",
  whenItApplies:
    "Your vehicle suddenly became mechanically disabled while parked or stopped, provided the vehicle was removed as soon as practicable once that became possible.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

On [DATE], my vehicle was lawfully parked or stopped at [LOCATION] when it suddenly became mechanically disabled: [DESCRIBE THE FAILURE — e.g., the engine would not start, a flat tire with no safe way to change it, a transmission failure]. The vehicle was not already in violation of the cited regulation before it became disabled — it was lawfully positioned at the time the failure occurred. I had the vehicle removed as soon as practicable, on [REMOVAL DATE/TIME], by [TOW COMPANY / REPAIR SHOP NAME].

Under D.C. Official Code § 50-2303.05(a)(2)(F), it is a recognized statutory ground for denying a Notice of Infraction that the vehicle became suddenly and unexpectedly mechanically disabled and was removed as soon as practicable. I ask that this violation be dismissed on that basis.

Attached: [a tow or repair receipt showing the date/time the disabled vehicle was removed, repair-shop documentation describing the sudden mechanical failure, and any contemporaneous roadside-assistance record or photos showing the vehicle could not immediately be moved].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A tow or repair receipt showing the date/time the disabled vehicle was removed",
    "Repair-shop documentation describing the sudden mechanical failure",
    "Any contemporaneous roadside-assistance record or photos showing the vehicle could not immediately be moved",
  ],
  cityNotes:
    "One of DC DMV's seven statutory grounds under § 50-2303.05(a)(2)(F): the vehicle must have become disabled suddenly (not already illegally parked and then disabled) AND been removed as soon as practicable — both elements must be shown.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(F) — Sudden mechanical disability, vehicle removed as soon as practicable",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(F)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "Does it matter whether I was legally parked before the car broke down?",
      answer:
        "Yes — this is a required element. The vehicle must have become disabled suddenly while lawfully parked or stopped, not already illegally parked and then disabled. Both elements — sudden disability and lawful position beforehand — must be shown.",
    },
    {
      question: "How fast do I need to have the car removed?",
      answer:
        "The statutory ground requires the vehicle to have been removed \"as soon as practicable\" once removal became possible. Document the removal date/time with a tow or repair receipt.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const dc_sudden_medical_emergency: ParkingDefense = {
  slug: "dc-sudden-medical-emergency",
  citySlug: "washington-dc",
  title: "Fight a sudden-medical-emergency parking ticket in Washington, DC",
  metaDescription:
    "Free DENY defense-statement letter for a Washington, DC parking ticket after a sudden medical emergency. Cites D.C. Code § 50-2303.05(a)(2)(G) — mail-ready template.",
  whenItApplies:
    "The vehicle's operator suddenly needed immediate medical assistance, which is why the vehicle was parked or stopped in violation of the regulation.",
  body: `To: DC DMV Adjudication Services
Re: Notice of Infraction No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am entering an answer of DENY to this Notice of Infraction and respectfully request that it be dismissed.

On [DATE], I was operating the vehicle bearing plate [PLATE] when I suddenly needed immediate medical assistance: [DESCRIBE THE EMERGENCY]. This sudden medical emergency is why the vehicle was parked or stopped at [LOCATION] in violation of the cited regulation. I received medical attention from [HOSPITAL / EMS PROVIDER] at approximately [TIME].

Under D.C. Official Code § 50-2303.05(a)(2)(G), it is a recognized statutory ground for denying a Notice of Infraction that the operator suddenly needed immediate medical assistance. I ask that this violation be dismissed on that basis.

Attached: [medical records, an ambulance/EMS report, or a hospital admission record showing the date and approximate time of the emergency, and any documentation corroborating that the emergency occurred at or near the ticketed location and time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Medical records, an ambulance/EMS report, or a hospital admission record showing the date and approximate time of the emergency",
    "Any documentation corroborating that the emergency occurred at or near the ticketed location and time",
  ],
  cityNotes:
    "One of DC DMV's seven statutory grounds under § 50-2303.05(a)(2)(G). DC DMV's published guidance is explicit that \"proof of medical attention is required\" — a bare assertion of a medical emergency, without records, will not support the defense.",
  codeCite: {
    label: "D.C. Official Code § 50-2303.05(a)(2)(G) — Operator suddenly needed immediate medical assistance",
    citation: "D.C. Official Code § 50-2303.05(a)(2)(G)",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
  ],
  faqs: [
    {
      question: "Is a bare statement that I had a medical emergency enough?",
      answer:
        "No. DC DMV's published guidance is explicit that proof of medical attention is required — medical records, an ambulance/EMS report, or a hospital admission record showing the date and approximate time of the emergency.",
    },
    {
      question: "What if the medical documentation doesn't mention the exact ticketed location?",
      answer:
        "Include any documentation you can that corroborates the emergency occurred at or near the ticketed location and time — the closer the records tie to that location and time, the stronger the defense.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const washingtonDcCity: ParkingCity = {
  slug: "washington-dc",
  city: "Washington",
  state: "DC",
  agency:
    "Parking, photo enforcement, and minor moving violation tickets are issued by the DC Department of Public Works (DPW), the District Department of Transportation (DDOT), the Metropolitan Police Department (MPD), and more than a dozen other District and federal agencies (e.g. US Park Police, US Capitol Police, university/hospital special police). All are adjudicated by DC DMV Adjudication Services — an administrative tribunal within the DC Department of Motor Vehicles operating under the District of Columbia Traffic Adjudication Act (D.C. Official Code § 50-2301 et seq.).",
  submitOnlineUrl: "https://dmv.dc.gov/service/contest-parking-and-photo-enforcement-tickets",
  submitMailAddress: "DC DMV Adjudication Services, ATTN: Mail Adjudication, PO Box 37135, Washington, DC 20013",
  submitInPerson:
    "DC DMV Adjudication Service Center, 955 L'Enfant Plaza SW, Promenade Level – Suite P100, Washington, DC 20024. Walk-in hearings Monday, Tuesday, Thursday, Friday 8:15 a.m.–4:00 p.m.; Wednesday 9:15 a.m.–4:00 p.m.; closed Saturday and Sunday. You must be the registered owner and present your vehicle registration, or bring a signed power-of-attorney form if acting on the owner's behalf. Virtual (video) hearings are also offered as an alternative to appearing in person.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "DC DMV must receive your contest request within 30 calendar days of the date the ticket was issued to avoid an added penalty. You can still respond (pay or contest) through day 60, but a penalty equal to the original fine is added once you're past day 30 — so a contest filed and lost between days 31–60 means you owe double. D.C. Official Code § 50-2303.05(a) requires a respondent to \"answer\" (admit, admit with explanation, or deny) \"within 30 days of the date the notice of infraction was issued\" or a longer period the Director sets by regulation; failure to answer within 60 days is deemed an admission of liability under § 50-2303.05(f) as implemented via 18 DCMR § 3006. Source: D.C. Official Code § 50-2303.05, https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05; DC DMV \"Understanding the Ticket Timeline,\" https://dmv.dc.gov/page/understanding-ticket-timeline; DC DMV \"Contest Parking and Photo Enforcement Tickets,\" https://dmv.dc.gov/service/contest-parking-and-photo-enforcement-tickets.",
  penaltyNote:
    "Per DC DMV's published ticket timeline: days 1–30, pay the fine without penalty or contest it. Days 31–60, you may still pay or contest, but if found liable a penalty equal to the original fine is added (the ticket effectively doubles). Day 61, if you have neither paid nor contested, you are deemed liable (a \"deemed admission\"). Days 61–120, you may pay the fine-plus-penalty or file a Motion to Vacate (within 60 days of the deemed admission/default judgment, per 18 DCMR § 3006 and the DC DMV Motion to Vacate Default Judgment process) showing excusable neglect and a valid defense. Day 121, unpaid debt is referred to collections. Separately, DC DMV states a vehicle may be booted if it has two or more outstanding parking and/or photo enforcement tickets, even if the vehicle is legally parked at the time it is booted; a booted vehicle that is subsequently towed also incurs towing and impound fees on top of the underlying tickets. Outstanding ticket debt for DC residents can also be intercepted from a DC tax refund and can block issuance/renewal of a DC driver license or vehicle registration. Source: DC DMV \"Understanding the Ticket Timeline,\" https://dmv.dc.gov/page/understanding-ticket-timeline; DC DMV \"Failure to Pay a Ticket,\" https://dmv.dc.gov/service/failure-pay-ticket; DC DMV \"Motion to Vacate Default Judgment,\" https://dmv.dc.gov/page/motion-vacate-default-judgment.",
  municipalCodeRefs: [
    {
      label: "D.C. Official Code § 50-2303.05 — Answer (response deadlines and the seven statutory grounds for contesting a parking violation)",
      citation: "D.C. Official Code § 50-2303.05",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
    {
      label: "D.C. Official Code § 50-2303.03 — Notice of infraction (required contents of a parking ticket)",
      citation: "D.C. Official Code § 50-2303.03",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.03",
    },
    {
      label: "18 DCMR § 3002 — Issuance of Parking Violations Only",
      citation: "18 DCMR § 3002",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={9E5397C2-B3F1-4E7F-ACAA-2D6167CA8542}",
    },
    {
      label: "18 DCMR § 3006 — Answers to Notices of Infraction",
      citation: "18 DCMR § 3006",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={0EE5734E-D4B5-4622-B15B-AB7A22D323E3}",
    },
    {
      label: "18 DCMR § 3008 — Requests for Hearings",
      citation: "18 DCMR § 3008",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={AE9581A4-76B1-4AC9-8514-D4E71652A2C0}",
    },
    {
      label: "18 DCMR § 3011 — Hearing Procedures",
      citation: "18 DCMR § 3011",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={365BC214-C276-4178-A9F9-9948E1EC4531}",
    },
    {
      label: "18 DCMR § 3012 — Rules of Evidence",
      citation: "18 DCMR § 3012",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile=D032555F-0000-C641-B128-E439EE72A536",
    },
    {
      label: "18 DCMR § 3013 — Final Determinations",
      citation: "18 DCMR § 3013",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={9D90A683-F726-4549-AFCA-6AFCBF99866D}",
    },
    {
      label: "18 DCMR § 3014 — Appeals (30-day deadline to appeal a final determination to the Appeals Board)",
      citation: "18 DCMR § 3014",
      url: "https://dcregs.dc.gov/Common/DCMR/RuleList.aspx?DownloadFile={FAEF17A1-A660-495A-A3F8-09E3244EB5A5}",
    },
  ],
  recognizedDefenses: [
    "not-my-vehicle",
    "obscured-signage",
    "broken-meter",
    "wrong-ticket-details",
    "dc-stolen-vehicle-or-plates",
    "dc-sudden-mechanical-disability",
    "dc-sudden-medical-emergency",
  ],
  defenses: [
    not_my_vehicle,
    obscured_signage,
    broken_meter,
    wrong_ticket_details,
    dc_stolen_vehicle_or_plates,
    dc_sudden_mechanical_disability,
    dc_sudden_medical_emergency,
  ],
  faqs: [
    {
      question: "How long do I have to contest a Washington, DC parking ticket?",
      answer:
        "DC DMV must receive your contest request within 30 calendar days of the date the ticket was issued to avoid an added penalty. You can still respond through day 60, but a penalty equal to the original fine is added once you're past day 30 — so a contest filed and lost between days 31–60 means you owe double.",
    },
    {
      question: "Who decides Washington, DC parking ticket disputes?",
      answer:
        "DC DMV Adjudication Services — an administrative tribunal within the DC Department of Motor Vehicles operating under the District of Columbia Traffic Adjudication Act (D.C. Official Code § 50-2301 et seq.) — adjudicates every ticket, regardless of which of the dozen-plus District or federal agencies issued it.",
    },
    {
      question: "Can I still contest a ticket after I've paid it?",
      answer:
        "No. Under D.C. Official Code § 50-2303.05(a)(1), once you pay the fine and/or penalty — in full or in part — you lose the administrative right to contest the ticket.",
    },
    {
      question: "What happens if I ignore a Washington, DC parking ticket?",
      answer:
        "If you neither pay nor contest by day 61, you're deemed liable (a \"deemed admission\"). By day 121, unpaid debt is referred to collections. DC DMV also states a vehicle may be booted once it has two or more outstanding parking and/or photo enforcement tickets, and outstanding debt can be intercepted from a DC tax refund or block a DC driver license or registration renewal.",
    },
    {
      question: "What if I missed the 60-day response window entirely?",
      answer:
        "You may still file a Motion to Vacate within 60 calendar days of the deemed admission or default judgment, showing both excusable neglect (e.g. hospitalization, death in the family, unexpected travel) and a recognized legal defense to the underlying violation.",
    },
  ],
  sources: [
    {
      label: "DC DMV — Contest Parking and Photo Enforcement Tickets",
      url: "https://dmv.dc.gov/service/contest-parking-and-photo-enforcement-tickets",
    },
    {
      label: "DC DMV — How to Contest a Ticket",
      url: "https://dmv.dc.gov/service/how-contest-ticket",
    },
    {
      label: "DC DMV — Respond to a Ticket",
      url: "https://dmv.dc.gov/service/respond-ticket",
    },
    {
      label: "DC DMV — Admit with an Explanation",
      url: "https://dmv.dc.gov/service/admit-explanation",
    },
    {
      label: "DC DMV — Legal Defenses to Parking Tickets",
      url: "https://dmv.dc.gov/page/legal-defenses-parking-tickets",
    },
    {
      label: "DC DMV — Understanding the Ticket Timeline",
      url: "https://dmv.dc.gov/page/understanding-ticket-timeline",
    },
    {
      label: "DC DMV — Adjudication Services (location, hours, contact)",
      url: "https://dmv.dc.gov/page/adjudication-services-00",
    },
    {
      label: "DC DMV — Motion to Vacate Default Judgment",
      url: "https://dmv.dc.gov/page/motion-vacate-default-judgment",
    },
    {
      label: "DC DMV — Failure to Pay a Ticket",
      url: "https://dmv.dc.gov/service/failure-pay-ticket",
    },
    {
      label: "DC DMV — Ticket Services",
      url: "https://dmv.dc.gov/service/ticket-services",
    },
    {
      label: "D.C. Official Code § 50-2303.05 — Answer",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.05",
    },
    {
      label: "D.C. Official Code § 50-2303.03 — Notice of infraction",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2303.03",
    },
    {
      label: "18 DCMR Chapter 30 — Adjudication and Enforcement (chapter index)",
      url: "https://www.dcregs.dc.gov/Gateway/ChapterHome.aspx?ChapterNumber=18-30",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
