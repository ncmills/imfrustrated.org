import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/nyc.json (verifiedAt 2026-07-20).
// IMPORTANT: NYC parking-ticket hearings are decided by the Department of Finance's
// own Parking Violations Bureau (PVB) Administrative Law Judges — NOT by OATH. OATH's
// Hearings Division covers 25+ other city agencies but does not list DOF/parking among
// its member agencies. Every defense statement below is addressed to DOF/PVB.

const cityHowToContest: string[] = [
  "Locate your ticket's summons number and confirm the violation code, date, time, and location printed on it.",
  "Choose a dispute method: online hearing (NYC DOF's \"Dispute a Ticket\" portal at nycserv.nyc.gov), the Pay or Dispute mobile app, a hearing-by-mail, or an in-person hearing at a DOF business center.",
  "Before submitting, review NYC DOF's \"Common reasons for ticket disputes\" and \"Evidence recommendations\" pages and gather supporting evidence (photos, receipts, DMV records, etc.).",
  "Enter a plea of \"Not Guilty\" and submit a written defense statement plus your evidence — online: upload through the portal; by mail: attach copies of evidence to the ticket and your letter and mail to the Hearings By Mail Unit; in person: bring your evidence and identification to a DOF business center.",
  "Wait for the decision from an Administrative Law Judge: in-person hearings get a decision immediately; online and mail hearings get an emailed or mailed decision, typically within about three weeks.",
  "If you disagree with the decision, you may appeal within 30 days of the judgment through DOF's \"Appeal a Hearing Decision\" process; any refund from a successful dispute is first applied to other outstanding judgment debt you owe.",
];

const ifThisDoesntWork =
  "If the hearing examiner finds you guilty, you may appeal the determination to the DOF Appeals Board within 30 days of the decision through DOF's \"Appeal a Hearing Decision\" process. Note that any refund from a successful appeal is first applied to any other outstanding judgment debt you owe the city.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "nyc",
  title: "Fight a broken-meter parking ticket in NYC",
  metaDescription:
    "Free defense-statement letter for a broken-meter parking ticket in NYC. Cites the Parking Violations Bureau's own dispute grounds — mail-ready template.",
  whenItApplies:
    "You were ticketed for an expired-meter or failure-to-pay violation, but the meter you used was broken, so you tried to pay at the next-nearest meter on the same block (or within the same municipal lot) and could not complete payment there either.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the Muni-Meter / pay station serving that spot, but the machine was broken: [DESCRIBE — e.g., blank screen, rejected every payment method I tried, printed no receipt]. Because the machine at my parking spot did not work, I walked to the next-nearest Muni-Meter on the same block, located at [NEXT-NEAREST METER LOCATION], and attempted to pay there as well; that machine also [DESCRIBE OUTCOME — was broken / rejected payment / had no functioning screen]. I made a good-faith effort to pay for parking through no fault of my own.

Under 19 RCNY §39-08, and consistent with the Department of Finance's own published "broken meter" dispute ground, I ask the hearing examiner to consider this evidence of a good-faith attempt to pay at both the ticketed meter and the next-nearest meter on the same block, and to dismiss this violation.

Attached: [time-stamped photo(s) of the broken meter, any 311 complaint or repair report you filed, and notes on which second meter you tried and what happened there].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A statement of your attempt to buy a receipt from the next-nearest muni-meter on the same block or within the same municipal lot",
    "Proof you tried every payment method the machine accepts (coins, credit card, etc.) and all failed",
    "Time- and date-stamped photos of the broken meter",
    "A 311 complaint or repair report for the broken meter, if you filed one",
  ],
  cityNotes:
    "This is NYC DOF's own published \"broken meter\" dispute ground; it specifically requires showing you tried the next-nearest meter on the same block, not just that your particular meter was out of order. No standalone RCNY/Admin Code section is titled \"broken meter\" — the closest codified affirmative-defense provision covering meter-payment issues is Admin Code §19-213(c) (failure to purchase parking time); general hearing/evidence procedure is 19 RCNY §39-08.",
  codeCite: {
    label: "19 RCNY §39-08 — Hearings (general Parking Violations Bureau hearing procedure)",
    citation: "19 RCNY § 39-08",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40895",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Common reasons for ticket disputes (Broken meter)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
  ],
  faqs: [
    {
      question: "Is it enough to show my meter was broken?",
      answer:
        "Not by itself. NYC DOF's published broken-meter dispute ground requires that you also tried the next-nearest Muni-Meter on the same block (or within the same municipal lot) and that payment failed there too. Document both attempts.",
    },
    {
      question: "What if I never tried a second meter?",
      answer:
        "The dispute is weaker without it. If you can still find and photograph a second nearby meter that was also out of service, or that you can show was too far to reasonably reach in time, include that detail — but DOF's stated ground expects a second attempt.",
    },
    {
      question: "Should I file a 311 complaint about the broken meter?",
      answer:
        "Yes, if you can do it around the time of the violation. A 311 complaint or repair record isn't required, but it's independent, time-stamped corroboration that the meter was actually broken.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "nyc",
  title: "Fight a missing or illegible sign parking ticket in NYC",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket where the posted sign was missing, illegible, or ambiguous — mail-ready template for the Parking Violations Bureau.",
  whenItApplies:
    "You were ticketed for violating a posted sign restriction, but the sign was missing, illegible, ambiguous, or stated the wrong restriction.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the posted sign governing that spot was [DESCRIBE THE DEFECT — missing entirely, illegible due to damage/fading/obstruction, physically ambiguous about which restriction applied, or stated a restriction different from the one cited on this ticket]. I am not disputing that I did not notice a sign — I am asserting that the sign itself did not properly and legibly convey the restriction I am accused of violating, so I had no way to comply with a rule that was not properly posted.

Under 19 RCNY §39-08, a violation cannot be sustained where the signage the driver was required to obey was not properly, legibly, and unambiguously posted at the location. I ask that this violation be dismissed on that basis.

Attached: [clear photos of the entire side of the block from corner to corner, photos of the front and back of every sign on that side of the street, photos of the intersection street-name signs to confirm the exact location, and photos showing the property address where I was parked — all date- and time-stamped].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Clear photos of the entire side of the block where you were ticketed, from corner to corner",
    "Photos of the front and back of every parking sign on that side of the street",
    "Photos of the street-name signs at the intersection, to confirm the exact location",
    "Photos showing the property address where you were parked",
    "Date- and time-stamped photos, corroborated with map or satellite imagery (e.g. Google Maps)",
  ],
  cityNotes:
    "NYC DOF is explicit that simply not seeing a sign is NOT a defense unless the sign itself was illegible, missing, ambiguous, or wrongly stated — a sign that was merely far away, or that you misunderstood, does not qualify.",
  codeCite: {
    label: "19 RCNY §39-08 — Hearings (general Parking Violations Bureau hearing procedure)",
    citation: "19 RCNY § 39-08",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40895",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Common reasons for ticket disputes (Signs)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
    {
      label: "NYC DOF — Common Misconceptions (Sign Violations)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-misconceptions.page",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense?",
      answer:
        "No. NYC DOF is explicit that simply failing to notice a sign is not a defense. The sign itself has to have actually been missing, illegible, ambiguous, or incorrect — you have to prove the defect, not just that you missed it.",
    },
    {
      question: "What photos actually help here?",
      answer:
        "Photograph the entire block face corner to corner, the front and back of every sign on that side of the street, and the street-name signs at the intersection so the hearing examiner can confirm exactly where you were and what was (or wasn't) posted.",
    },
    {
      question: "The sign was there but obstructed by a tree or a truck — does that count?",
      answer:
        "It can, if you can show the obstruction made the sign illegible or unreadable from a normal parking position. Photograph the obstruction at the time you parked, not after it may have moved.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "nyc",
  title: "Fight a NYC parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket issued despite valid payment. Cites Admin Code §19-213(c) — mail-ready template for the PVB.",
  whenItApplies:
    "You were ticketed for failing to purchase or display parking time (e.g., an expired- or no-receipt muni-meter violation), but you actually paid for parking at that location at, or within 5 minutes after, the time the violation was recorded.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] through [PAYMENT METHOD — Muni-Meter / ParkNYC app / other]. My receipt shows a purchase at [PAYMENT TIME], which is at or within 5 minutes of [VIOLATION TIME], the time this ticket states the violation was recorded. I had valid, paid-for parking time at the location and time cited on this ticket.

Under NYC Admin Code §19-213(c), it is an affirmative defense to a failure-to-purchase-parking-time violation that the vehicle owner purchased parking time for the ticketed time, or for up to 5 minutes later, at that location, evidenced by a valid payment receipt. I ask that this violation be dismissed on that basis.

Attached: [copy of the valid Muni-Meter or app payment receipt showing the location, date, and time of purchase].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A valid payment receipt showing muni-meter payment for the ticketed time, or for up to 5 minutes after",
    "For motorcycles: a digital photograph of the valid payment receipt, submitted through the Bureau's website",
    "Any other evidence of payment the hearing officer determines is sufficient",
  ],
  cityNotes:
    "Codified as an explicit affirmative defense, not just DOF guidance: NYC Admin Code §19-213(c) makes it a defense to a \"failure to purchase parking time\" ticket that you bought parking time for the ticketed time (or up to 5 minutes later) at that location, evidenced by a valid payment receipt.",
  codeCite: {
    label: "NYC Admin Code §19-213(c) — Failure to purchase parking time (affirmative defense)",
    citation: "N.Y.C. Admin. Code § 19-213(c)",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218350",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC Admin Code §19-213 — Grace period; failure to purchase parking time",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218350",
    },
  ],
  faqs: [
    {
      question: "My receipt is timed a few minutes after the ticket — does that still count?",
      answer:
        "Yes. Admin Code §19-213(c) covers payment for the ticketed time or for up to 5 minutes after the violation. If your receipt falls inside that window, it is a codified defense, not just a good-faith argument.",
    },
    {
      question: "What if I paid through the ParkNYC app instead of a Muni-Meter?",
      answer:
        "App payment receipts work the same way — attach a copy or screenshot of the app receipt showing the location, date, and payment time.",
    },
    {
      question: "I'm on a motorcycle — does the process differ?",
      answer:
        "NYC DOF specifically allows motorcycle riders to submit a digital photograph of the valid payment receipt through the Bureau's website as evidence for this defense.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "nyc",
  title: "Fight a defective parking ticket in NYC (missing or wrong details)",
  metaDescription:
    "Free defense-statement letter for a defective NYC parking ticket with missing or incorrect required fields. Cites 19 RCNY §39-02(a)(3) — mail-ready template.",
  whenItApplies:
    "The ticket itself is missing a required element, or a required element is illegible or mis-described — e.g., wrong plate number, wrong vehicle make/body type, wrong date or time, or no citation to the specific rule violated.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

This ticket is defective. Specifically, the [FIELD — e.g., plate number / vehicle make or body type / date / time / location / rule or section violated] printed on the ticket is [DESCRIBE THE DEFECT — missing, illegible, or incorrect]. Comparing the ticket against my vehicle registration/title, the correct information is: [CORRECT INFORMATION, e.g., actual plate number, make, or body type]. This is not a minor typo I am overlooking — it is a required element of the notice of violation that was omitted, misdescribed, or illegible.

Under 19 RCNY §39-02(a)(3), a notice of violation shall be dismissed upon application of the person charged if any information required to be stated on the notice is omitted, misdescribed, or illegible. I ask that this violation be dismissed on that basis.

Attached: [a copy or photo of the actual ticket showing the defective field, and a copy of my vehicle registration or title showing the correct information].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual ticket showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration or title, to compare the correct plate number, make, model, and body type against what's on the ticket",
    "Comparison against NYC DOF's published \"Required elements in a ticket\" list to identify exactly which required field is missing or wrong",
  ],
  cityNotes:
    "This is a codified right, not just DOF guidance: 19 RCNY §39-02(a)(3) requires that the violation \"shall be dismissed upon application of the person charged\" if any information required to be on the notice of violation is omitted, misdescribed, or illegible.",
  codeCite: {
    label:
      "19 RCNY §39-02(a)(3) — Notice of Violation (Summons): dismissal for omitted, misdescribed, or illegible required information",
    citation: "19 RCNY § 39-02(a)(3)",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40806",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Required elements in a ticket",
      url: "https://www.nyc.gov/site/finance/vehicles/required-elements-in-a-ticket.page",
    },
    {
      label: "NYC DOF — Dispute a Ticket FAQs (\"What is a 'defective' ticket?\")",
      url: "https://www.nyc.gov/site/finance/vehicles/dispute-a-ticket-faqs.page",
    },
  ],
  faqs: [
    {
      question: "What counts as a \"required element\" on a NYC parking ticket?",
      answer:
        "NYC DOF publishes a specific list of required elements — things like the plate number, state of registration, vehicle make/body type, date, time, location, and the specific rule violated. Check your ticket against DOF's \"Required elements in a ticket\" page to identify which field is defective.",
    },
    {
      question: "Is a small typo enough to get a ticket dismissed?",
      answer:
        "It depends on whether the error goes to a required element and whether it's genuinely misdescribed, illegible, or omitted — not a trivial formatting difference. 19 RCNY §39-02(a)(3) is specific to required information that's actually wrong or missing.",
    },
    {
      question: "What if the wrong plate number on the ticket matches a completely different car?",
      answer:
        "That's a strong version of this defense. Attach your registration showing your actual plate number alongside the ticket showing the mismatched number.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const grace_period: ParkingDefense = {
  slug: "grace-period",
  citySlug: "nyc",
  title: "Fight a NYC parking ticket using the 5-minute grace period",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket issued within the 5-minute grace period. Cites Admin Code §19-213(b) — mail-ready template for the PVB.",
  whenItApplies:
    "You were ticketed for parking longer than the time you purchased, or longer than a posted time-limit sign allows, but the violation was recorded within 5 minutes of your purchased or allowed time expiring.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

On [DATE], my purchased/allowed parking time at [LOCATION] expired at [EXPIRATION TIME]. This ticket records the violation as having been observed at [VIOLATION TIME], which is within 5 minutes of my expiration time. [IF APPLICABLE: My muni-meter/app receipt shows the exact expiration time referenced above.]

Under NYC Admin Code §19-213(b), the Department of Finance is barred from issuing a notice of violation for exceeding purchased parking time, or a posted time limit, until 5 minutes have passed after the violation occurs. Because this ticket was issued within that 5-minute grace period, I ask that it be dismissed.

Attached: [muni-meter or app payment receipt showing the exact expiration time, and, if the violation is a posted time-limit sign rather than a meter, photos of the sign showing the allowed hours].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Your muni-meter or app payment receipt showing the exact expiration time",
    "The ticket's recorded issuance time, compared against your expiration time, to show it falls within 5 minutes",
    "Photos of any posted time-limit sign showing the allowed hours, if the violation is a posted-sign time limit rather than a meter",
  ],
  cityNotes:
    "Codified 5-minute grace period: NYC Admin Code §19-213(b) bars DOF from issuing a notice of violation for exceeding purchased parking time, or a posted time limit, until 5 minutes after the violation occurs.",
  codeCite: {
    label: "NYC Admin Code §19-213(b) — Grace period",
    citation: "N.Y.C. Admin. Code § 19-213(b)",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218350",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC Admin Code §19-213 — Grace period; failure to purchase parking time",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218350",
    },
  ],
  faqs: [
    {
      question: "How exactly is the 5-minute grace period counted?",
      answer:
        "Admin Code §19-213(b) bars DOF from issuing a violation until 5 minutes have passed after your purchased or posted parking time expires. Compare the expiration time on your receipt (or the posted time-limit sign) against the observation/issuance time printed on the ticket.",
    },
    {
      question: "Does the grace period apply to posted time-limit signs, not just meters?",
      answer:
        "Yes. Admin Code §19-213(b) covers both exceeding purchased parking time and exceeding a posted time limit — it isn't limited to metered spots.",
    },
    {
      question: "What if my receipt doesn't show a precise expiration time?",
      answer:
        "Calculate it from the purchase time and the duration you paid for, and show your math in the letter. A muni-meter or app receipt showing the purchase time and duration is still strong evidence even without a printed expiration timestamp.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "nyc",
  title: "Fight a NYC parking ticket for a stolen, sold, or fraudulently registered vehicle",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket on a stolen, transferred, or fraudulently registered vehicle. Mail-ready template for the PVB.",
  whenItApplies:
    "The vehicle was stolen, sold/gifted/transferred, or never registered by you (i.e., fraudulently registered in your name) before the ticket was issued, so you were not the owner or operator at the time of the violation.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

I was not the owner or operator of the vehicle bearing plate [PLATE] on [DATE], the date this ticket was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) The vehicle was stolen — it was reported stolen to the police on [DATE OF POLICE REPORT], before this ticket was issued. / (b) The vehicle was sold, gifted, or otherwise transferred — I transferred ownership on [TRANSFER DATE], before this ticket was issued, as shown by [DMV plate-transfer/surrender documentation, canceled or transferred insurance, or proof it was registered to another party]. / (c) The registration is fraudulent — I never registered this vehicle and never authorized anyone else to register it in my name.]

Under NYC Admin Code §19-205, liability for a parking violation runs to the vehicle's owner or an operator with the owner's permission. Because I was not the owner or an authorized operator of this vehicle at the time of the violation, I ask that this ticket be dismissed.

Attached: [police report of theft filed before the ticket date; or DMV plate transfer/surrender documentation and canceled/transferred insurance records; or proof that I neither registered this vehicle nor authorized its registration].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Stolen vehicle: a police report of the theft filed before the ticket date, plus (if available) insurance cancellation documentation or witness statements",
    "Transferred vehicle: DMV plate transfer/surrender documentation, canceled or transferred insurance documentation, or proof the vehicle was registered to another party as of the ticket date",
    "Fraudulent registration: proof you neither registered the ticketed vehicle nor authorized anyone else to do so",
  ],
  cityNotes:
    "NYC DOF publishes these as three separate but related dispute reasons (\"Stolen vehicle,\" \"Transferred vehicle,\" \"Fraudulent registration\") rather than a single \"not my vehicle\" ground; each requires documentary proof. DOF explicitly warns that never having received the summons is NOT, by itself, a defense (notices are also mailed to the registrant's address on file with DMV), and advises removing your registration sticker when you transfer a car.",
  codeCite: {
    label: "NYC Admin Code §19-205 — Liability (defines \"owner\"/\"operator\" whose ownership or permission establishes liability)",
    citation: "N.Y.C. Admin. Code § 19-205",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-31399",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Common reasons for ticket disputes (Stolen vehicle / Transferred vehicle / Fraudulent registration)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
  ],
  faqs: [
    {
      question: "I never received the ticket in the mail — isn't that a defense?",
      answer:
        "No. NYC DOF explicitly states that never receiving a summons is not, by itself, a defense — notices are mailed to the registrant's address on file with the DMV, and it's your responsibility to keep that address current.",
    },
    {
      question: "I sold the car months ago but forgot to remove the registration sticker — does that matter?",
      answer:
        "It can complicate things. DOF advises removing your registration sticker when you transfer a vehicle. Documentation of the transfer date (bill of sale, DMV transfer record, canceled insurance) is still your best evidence even if the sticker was left on.",
    },
    {
      question: "My car was stolen but I didn't file a police report until after the ticket — can I still use this defense?",
      answer:
        "It's much weaker without a report filed before the ticket date. File a police report as soon as possible after any theft, and note the discrepancy honestly in your statement if the timing is imperfect.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_vehicle: ParkingDefense = {
  slug: "disabled-vehicle",
  citySlug: "nyc",
  title: "Fight a NYC parking ticket for a disabled vehicle",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket issued while your car was mechanically disabled. Mail-ready template for the Parking Violations Bureau.",
  whenItApplies:
    "Your car suddenly and unexpectedly became mechanically disabled while parked or stopped, and you had it expeditiously removed once that became possible. This defense does not apply if the car was already illegally parked and only then became disabled.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY to this violation and respectfully request that it be dismissed.

On [DATE], my vehicle was legally parked at [LOCATION] when it suddenly and unexpectedly became mechanically disabled: [DESCRIBE THE FAILURE — e.g., the engine would not start, a flat tire with no safe way to change it, a transmission failure]. The vehicle was not illegally parked before it became disabled — it was parked lawfully at the time the failure occurred. I had the vehicle removed as quickly as reasonably possible, on [REMOVAL DATE/TIME], by [TOW COMPANY / REPAIR SHOP NAME].

Under 19 RCNY §39-08, a vehicle that becomes suddenly and unexpectedly disabled while lawfully parked, and is thereafter expeditiously removed, is not liable for the resulting violation. I ask that this ticket be dismissed on that basis.

Attached: [tow or repair receipt showing the date/time the vehicle was removed, repair-shop documentation describing the sudden mechanical failure, and any contemporaneous evidence such as photos or a roadside-assistance record].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A tow or repair receipt showing the date/time the disabled vehicle was removed",
    "Repair-shop documentation describing the sudden mechanical failure",
    "Any contemporaneous evidence (photos, roadside-assistance record) showing the car became disabled and could not immediately be moved",
  ],
  cityNotes:
    "NYC DOF requires proof both that the car suddenly became disabled AND that it was thereafter expeditiously removed from the location — if the car was parked illegally first and became disabled afterward, the defense will not prevail.",
  codeCite: {
    label: "19 RCNY §39-08 — Hearings (general Parking Violations Bureau hearing procedure)",
    citation: "19 RCNY § 39-08",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40895",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Common reasons for ticket disputes (Disabled vehicle)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
  ],
  faqs: [
    {
      question: "Does it matter whether I was legally parked before the car broke down?",
      answer:
        "Yes — this is the crux of the defense. It only applies if the vehicle was lawfully parked and then suddenly became disabled. If the car was already illegally parked before it broke down, this defense will not succeed.",
    },
    {
      question: "How fast do I need to have the car removed?",
      answer:
        "DOF requires the vehicle to have been removed \"expeditiously\" once removal became possible. There's no fixed number of hours, but the faster and better-documented the removal, the stronger the defense.",
    },
    {
      question: "What if I couldn't afford a tow right away?",
      answer:
        "Document whatever steps you took and when — calling a tow company, waiting for a repair slot, arranging alternate transportation — even if removal wasn't instantaneous. Contemporaneous notes or texts showing you were actively working the problem help.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const death_of_registrant: ParkingDefense = {
  slug: "death-of-registrant",
  citySlug: "nyc",
  title: "Fight a NYC parking ticket after the registered owner's death",
  metaDescription:
    "Free defense-statement letter for a NYC parking ticket issued to a deceased registrant. DOF calls this a total defense — mail-ready template for the PVB.",
  whenItApplies:
    "The registered owner of the vehicle died prior to the ticket's issuance, or within 90 days after it was issued.",
  body: `To: New York City Department of Finance — Parking Violations Bureau
Re: Summons No. [SUMMONS NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am pleading NOT GUILTY on behalf of the registered owner and respectfully request that this violation be dismissed.

The registered owner of this vehicle, [REGISTERED OWNER'S NAME], died on [DATE OF DEATH], which was [before this ticket was issued on [TICKET DATE] / within 90 days after this ticket was issued on [TICKET DATE]]. I am submitting this statement as [YOUR RELATIONSHIP TO THE REGISTRANT — e.g., executor of the estate, surviving spouse, next of kin].

The Department of Finance treats a timely proven death of the registrant, evidenced by a certified death certificate, as a total defense to any ticket. I ask that this violation be dismissed on that basis.

Attached: [a certified copy of the death certificate].

Respectfully,
[YOUR NAME]
[RELATIONSHIP TO REGISTRANT]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: ["A certified copy of the death certificate"],
  cityNotes: "NYC DOF calls this \"a total defense to any ticket\" when timely proven with a death certificate.",
  codeCite: {
    label: "19 RCNY §39-08 — Hearings (general Parking Violations Bureau hearing procedure)",
    citation: "19 RCNY § 39-08",
    url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40895",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "NYC DOF — Common reasons for ticket disputes (Death of the registrant)",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
  ],
  faqs: [
    {
      question: "Does this defense cover every ticket the registrant ever received?",
      answer:
        "It applies to a ticket where the registered owner died prior to issuance, or within 90 days after the ticket was issued. NYC DOF describes it as a total defense to any such ticket when timely proven with a certified death certificate.",
    },
    {
      question: "Who can submit this defense on the registrant's behalf?",
      answer:
        "Typically the executor of the estate, a surviving spouse, or next of kin. State your relationship to the registrant in the letter and be prepared to provide documentation of that relationship if DOF asks.",
    },
    {
      question: "What document do I need to prove this?",
      answer: "A certified copy of the death certificate. DOF requires the certified copy, not just a photocopy or funeral notice.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const nycCity: ParkingCity = {
  slug: "nyc",
  city: "New York City",
  state: "NY",
  agency:
    "New York City Department of Finance (DOF) — Parking Violations Bureau (PVB). DOF collects and processes parking and camera violation tickets citywide; disputes are adjudicated by the Parking Violations Bureau's own Administrative Law Judges (a DOF tribunal). NYC's Office of Administrative Trials and Hearings (OATH) Hearings Division adjudicates summonses for 25+ other city agencies but does NOT list the Department of Finance or parking violations among its member agencies — parking-ticket hearings are conducted by PVB itself, not OATH.",
  submitOnlineUrl: "https://nycserv.nyc.gov/HBWNonCommercial/index.jsp",
  submitMailAddress:
    "NYC Department of Finance, Hearings By Mail Unit, P.O. Box 29021, Cadman Plaza Station, Brooklyn, NY 11202-9021",
  submitInPerson:
    "Any NYC Department of Finance business center — walk-in, first-come first-served, no appointment necessary, Monday–Friday 8:30 a.m.–4:30 p.m. Bring a valid driver's license, vehicle registration, and title or rental agreement. You do not need an attorney. If walk-in hours don't work, you can also schedule an in-person hearing via NYC's appointment system (nyc.gov/site/finance/about/make-an-appointment.page). Note: DOF states that appearing in person does not increase your chances of getting a ticket dismissed, and encourages online, mobile-app, or mail hearings to save time.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "\"To dispute a parking ticket or camera violation, you must request a hearing within 30 days of the date the ticket or camera violation was issued to you to avoid paying late fees.\" The clock starts on the date the ticket was issued (not a later mailing date), and DOF states that contacting anyone other than the Department of Finance does not pause the deadline. Source: NYC DOF Dispute a Ticket FAQs, https://www.nyc.gov/site/finance/vehicles/dispute-a-ticket-faqs.page (also stated on https://www.nyc.gov/site/finance/vehicles/dispute-a-ticket.page: \"you must request a hearing within 30 days after the ticket was issued to avoid paying late penalties\").",
  penaltyNote:
    "If you request a hearing more than 30 days after issuance and are found guilty, you must pay late penalties (per NYC Admin Code §19-211: up to $10 additional for responding after 30 days, up to $20 more after 45 days, and up to $30 more after 75 days, following a required second notice). If DOF does not receive payment or a hearing request, a parking violation goes into default judgment approximately 100 days after issuance (a camera violation goes into judgment approximately 75 days after issuance); judgment adds accrued penalties and interest to the fine, and DOF can send the debt to a collection agency or seize assets. You generally cannot get a hearing on a ticket in judgment once it is more than one year old, absent a \"Request for Hearing After Judgment\" showing good cause for not responding sooner. If you have more than $350 in tickets in judgment (NYC Admin Code §19-212 uses \"greater than three hundred fifty dollars\"), your vehicle can be booted and towed (NYC Admin Code §19-212), though DOF sends warning notices first.",
  municipalCodeRefs: [
    {
      label: "NYC Admin Code §19-201 — Parking violations bureau created",
      citation: "N.Y.C. Admin. Code § 19-201",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-128050",
    },
    {
      label: "NYC Admin Code §19-206 — Hearings (Parking Violations Bureau)",
      citation: "N.Y.C. Admin. Code § 19-206",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-31403",
    },
    {
      label: "NYC Admin Code §19-207 — Judgments",
      citation: "N.Y.C. Admin. Code § 19-207",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-31412",
    },
    {
      label: "NYC Admin Code §19-211 — Additional penalties for parking violations",
      citation: "N.Y.C. Admin. Code § 19-211",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-214753",
    },
    {
      label:
        "NYC Admin Code §19-212 — Limitation on removal of motor vehicles for parking-judgment debt ($350 boot/tow threshold)",
      citation: "N.Y.C. Admin. Code § 19-212",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218474",
    },
    {
      label: "NYC Admin Code §19-213 — Grace period; failure to purchase parking time and cancellation of certain tickets",
      citation: "N.Y.C. Admin. Code § 19-213",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-218350",
    },
    {
      label: "19 RCNY §39-02 — Notice of Violation (Summons)",
      citation: "19 RCNY § 39-02",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40806",
    },
    {
      label: "19 RCNY §39-08 — Hearings (general Parking Violations Bureau hearing procedure)",
      citation: "19 RCNY § 39-08",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40895",
    },
  ],
  recognizedDefenses: [
    "broken-meter",
    "obscured-signage",
    "valid-payment",
    "wrong-ticket-details",
    "grace-period",
    "not-my-vehicle",
    "disabled-vehicle",
    "death-of-registrant",
  ],
  defenses: [
    broken_meter,
    obscured_signage,
    valid_payment,
    wrong_ticket_details,
    grace_period,
    not_my_vehicle,
    disabled_vehicle,
    death_of_registrant,
  ],
  faqs: [
    {
      question: "How long do I have to dispute a NYC parking ticket?",
      answer:
        "You must request a hearing within 30 days of the date the ticket was issued to you to avoid paying late fees. The clock starts on the issuance date printed on the ticket, not a later mailing date, and contacting anyone other than the Department of Finance does not pause the deadline.",
    },
    {
      question: "Does OATH decide NYC parking ticket disputes?",
      answer:
        "No. Despite handling hearings for 25+ other NYC agencies, OATH's Hearings Division does not list the Department of Finance or parking violations among its member agencies. NYC parking tickets are decided by the Parking Violations Bureau's own Administrative Law Judges — a DOF tribunal, not OATH.",
    },
    {
      question: "What happens if I ignore a NYC parking ticket?",
      answer:
        "Late penalties accrue under Admin Code §19-211, and if DOF never receives payment or a hearing request, the ticket goes into default judgment (about 100 days after issuance for a parking violation, about 75 days for a camera violation). Judgment adds accrued penalties and interest, and DOF can send the debt to collections. If you have more than $350 in judgment debt, your vehicle can be booted and towed under Admin Code §19-212.",
    },
    {
      question: "Will an in-person hearing get my ticket dismissed faster?",
      answer:
        "DOF states directly that appearing in person does not increase your chances of dismissal, though it does get you an immediate decision instead of waiting about three weeks for an online or mail decision. DOF actively encourages online, mobile-app, or mail hearings to save time.",
    },
    {
      question: "What if I lose my hearing?",
      answer:
        "You may appeal the guilty determination to the DOF Appeals Board within 30 days of the decision through DOF's \"Appeal a Hearing Decision\" process. Any refund from a successful appeal is applied first to any other outstanding judgment debt you owe.",
    },
  ],
  sources: [
    { label: "NYC DOF — Dispute a Ticket", url: "https://www.nyc.gov/site/finance/vehicles/dispute-a-ticket.page" },
    { label: "NYC DOF — Dispute a Ticket Online", url: "https://www.nyc.gov/site/finance/vehicles/dispute-web.page" },
    { label: "NYC DOF — Dispute a Ticket FAQs", url: "https://www.nyc.gov/site/finance/vehicles/dispute-a-ticket-faqs.page" },
    { label: "NYC DOF — Request a Hearing-by-Mail", url: "https://www.nyc.gov/site/finance/vehicles/dispute-mail.page" },
    { label: "NYC DOF — Request an In-Person Hearing", url: "https://www.nyc.gov/site/finance/vehicles/dispute-person.page" },
    {
      label: "NYC DOF — Common Reasons for Disputing a Ticket",
      url: "https://www.nyc.gov/site/finance/vehicles/common-reasons.page",
    },
    {
      label: "NYC DOF — Required Elements in a Ticket",
      url: "https://www.nyc.gov/site/finance/vehicles/required-elements-in-a-ticket.page",
    },
    { label: "NYC DOF — Evidence Recommendations", url: "https://www.nyc.gov/site/finance/vehicles/evidence-suggestions.page" },
    { label: "NYC DOF — Common Misconceptions", url: "https://www.nyc.gov/site/finance/vehicles/common-misconceptions.page" },
    { label: "NYC DOF — Parking Ticket Services", url: "https://www.nyc.gov/site/finance/vehicles/services.page" },
    {
      label: "NYC DOF — Office of the Parking Summons Advocate Mission Statement",
      url: "https://www.nyc.gov/site/finance/vehicles/opsa.page",
    },
    {
      label: "NYC DOF — Dispute a Ticket online portal (Hearing By Web)",
      url: "https://nycserv.nyc.gov/HBWNonCommercial/index.jsp",
    },
    {
      label: "NYC OATH — About OATH (confirms DOF/parking is not an OATH Hearings Division agency)",
      url: "https://www.nyc.gov/site/oath/about/about-oath.page",
    },
    {
      label: "NYC Admin Code Title 19, Chapter 2 — Parking Violations Bureau (table of contents)",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-128050",
    },
    {
      label: "19 RCNY Chapter 39 — Parking Violations (table of contents)",
      url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-40773",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
