import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/baltimore.json (verifiedAt 2026-07-20).
// IMPORTANT: Baltimore parking-ticket disputes are NOT decided by the Baltimore City Environmental
// Control Board (ECB). The ECB's own page states its jurisdiction covers citations from Housing,
// Health, DOT (non-parking), Fire, DPW, Rec & Parks, and Police quality-of-life issues only —
// parking is explicitly outside that list and is "paid through a separate city system." Contested
// parking citations go to TRIAL before the District Court of Maryland (Patapsco District Court
// location, 700 E. Patapsco Avenue), reached via the online Parking Fine Trial Request (PFTR)
// portal within 45 days of the citation, or by mailed petition directly to the District Court
// after that window. Two narrower paths bypass a trial entirely: a phone-in administrative
// abatement for a "material error" in the citation, or for a stolen vehicle/plates, both under the
// Director of Finance's waiver power at Art. 31, §36-24(a)(2)/(a). The City itself "has no purview
// over this process" once a trial petition reaches the court.

const trialHowToSubmit: string[] = [
  "Confirm the citation/issue number (or your vehicle's tag number), and check the violation code, date, time, and location printed on the ticket.",
  "Decide to contest: Baltimore City's Department of Finance FAQ states the City itself 'does not have the authority' to reduce or cancel a citation — 'if a motorist disputes a citation, they must request a trial,' citing Baltimore City Code Article 31, §36-1.",
  "If your citation is 45 days old or less, submit a Parking Fine Trial Request online at pay.baltimorecity.gov/pftr by searching your tag number or citation/issue number, then requesting a trial through that portal.",
  "If your citation is more than 45 days old, the online portal will not accept it — mail your trial petition directly to the District Court of Maryland, 700 E. Patapsco Avenue, Baltimore, MD 21225, since petitions to set trial at that point can only be received and processed by the court.",
  "Gather your supporting evidence (photos, receipts, records) to bring to trial or attach to your written statement.",
  "Appear on your assigned trial date at the Patapsco District Court location shown on your notice. A District Court of Maryland judge — not a city hearing officer — decides the case. If you cannot attend, mail a written postponement request (your name, citation number, and a brief explanation) to that same District Court address before the assigned date.",
];

const trialIfThisDoesntWork =
  "Baltimore City does not publish a separate city-run appeal step for a parking-citation trial decision. If you are found responsible at trial, normal Maryland District Court procedure applies from that point forward — the City's own guidance describes no further administrative appeal within Baltimore City government.";

const cityHowToContest: string[] = [
  "Find the citation/issue number (or your vehicle's tag number) printed on the ticket, and confirm the violation code, date, time, and location listed.",
  "Decide whether to pay or contest. Baltimore City's Department of Finance FAQ states the City itself 'does not have the authority' to reduce or cancel a citation — 'if a motorist disputes a citation, they must request a trial,' citing Baltimore City Code Article 31, §36-1.",
  "If your citation is 45 days old or less, submit a Parking Fine Trial Request online at pay.baltimorecity.gov/pftr by searching your tag number or citation/issue number, then requesting a trial through that portal.",
  "If your citation is more than 45 days old, the online portal will not accept it ('We do not accept petitions online for citations older than 45 days'). You must instead submit your trial petition directly to the District Court of Maryland — 700 E. Patapsco Avenue, Baltimore, MD 21225 for parking citations, or 5800 Wabash Avenue, Baltimore, MD 21215 for red-light/speed camera citations — since, per the City, 'petitions to set trial can only be received and processed by District Court of Maryland' at that point.",
  "If your dispute is a factual/clerical mistake on the citation itself (wrong plate, date, location, etc.) rather than a defense you need a judge to weigh, you can instead call the Bureau of Revenue Collections at 410-396-3000 to request an administrative abatement for 'material error,' authorized under Baltimore City Code Article 31, §36-24(a)(2) — no trial required for this path.",
  "If the vehicle (or its plates) was stolen at the time of the citation, call 410-396-3000 or email baltimorecitycollections@baltimorecity.gov and provide a full police report of the theft (plus an insurer's total-loss statement if the vehicle was never recovered); the Bureau forwards qualifying citations to the Baltimore City State's Attorney's Office for abatement rather than requiring a trial.",
  "Gather your supporting evidence (photos, receipts, police reports, maintenance/repair records, etc.) to bring to trial or attach to your abatement request.",
  "Appear on your assigned trial date at the District Court location shown on your notice. If you cannot attend, mail a written postponement request — with your name, citation number, and a brief explanation — to that same District Court address before the assigned date.",
  "A District Court of Maryland judge (not a city hearing officer) decides the case at trial. Baltimore City does not publish a separate city-run appeal step for a parking-citation trial decision; normal Maryland District Court procedure applies from that point forward.",
];

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "baltimore",
  title: "Fight a Baltimore parking ticket for a stolen vehicle",
  metaDescription:
    "Free administrative abatement letter for a Baltimore parking ticket issued while your car or plates were stolen. Cites Art. 31 §36-24(a) — no trial needed.",
  whenItApplies:
    "Your vehicle, or its registration plates, were stolen at the time the citation was issued, so you had no control over the vehicle when the parking violation occurred.",
  body: `To: Baltimore City Department of Finance, Bureau of Revenue Collections
Re: Citation/Issue No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an administrative abatement of this citation because my vehicle, or its registration plates, were stolen at the time the citation was issued, and I had no control over the vehicle when the alleged violation occurred.

My vehicle (or plates) was reported stolen on [THEFT REPORT DATE], per police report number [POLICE REPORT NUMBER]. [IF VEHICLE RECOVERED: The vehicle was recovered on [RECOVERY DATE]; the citation date of [DATE] falls within the stolen window between the theft report and recovery.] [IF VEHICLE NEVER RECOVERED: The vehicle was never recovered, and I have attached my insurer's total-loss statement.]

Under Baltimore City Code Art. 31, §36-24(a), the Director of Finance holds general fine-collection and abatement authority, and consistent with the Department of Finance's own published stolen-vehicle abatement process — under which the Bureau forwards qualifying citations to the Baltimore City State's Attorney's Office for abatement when the violation date falls within the stolen window — I ask that this citation be abated on that basis.

Attached: [full police report documenting the theft and its report date; total-loss statement from my insurer if the vehicle was never recovered, or documentation of the recovery date if it was].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the full police report documenting the theft, showing the date the vehicle (or plates) was reported stolen",
    "If the vehicle was never recovered: a total-loss statement from your auto insurance company",
    "If the vehicle was recovered: documentation of the recovery date, so the City can confirm the citation date falls within the stolen window",
    "Your contact with the Bureau of Revenue Collections (410-396-3000 or baltimorecitycollections@baltimorecity.gov) submitting the above",
  ],
  cityNotes:
    "Baltimore's Department of Finance handles this as an administrative abatement, not a District Court trial: per the City's own FAQ, if the violation date falls between the reported-stolen and recovery dates, the Bureau submits the citation(s) to the Baltimore City State's Attorney's Office for abatement and notifies the registered owner by mail once abated. There is no separately numbered 'stolen vehicle' code section — this abatement authority derives from the Director of Finance's general fine-collection and waiver powers under §36-24. Contact the Bureau directly for this scenario rather than filing a District Court trial petition.",
  codeCite: {
    label: "Baltimore City Code Art. 31, §36-24(a) — Powers of Director of Finance (general fine-collection and abatement authority under which the Bureau processes stolen-vehicle citations)",
    citation: "Baltimore City Code Art. 31, §36-24(a)",
    url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
  },
  howToSubmit: [
    "Confirm that the citation date falls within the window your vehicle (or plates) was reported stolen.",
    "Call the Bureau of Revenue Collections at 410-396-3000, or email baltimorecitycollections@baltimorecity.gov, and provide a full police report of the theft (plus an insurer's total-loss statement if the vehicle was never recovered, or recovery documentation if it was).",
    "The Bureau forwards qualifying citations to the Baltimore City State's Attorney's Office for abatement; you'll be notified by mail once abated. No Parking Fine Trial Request or District Court trial is required for this path.",
    "In person alternative: Bureau of Revenue Collections, Abel Wolman Municipal Building, 200 N. Holliday Street, Baltimore, MD 21202, Monday–Friday 8:30am–4:30pm.",
  ],
  ifThisDoesntWork:
    "If the Bureau declines to administratively abate the citation, you have not lost your right to contest it — you can still request a trial (Parking Fine Trial Request online within 45 days of the citation date, or by mail to the District Court of Maryland after that) and raise the same facts before a judge. Baltimore City does not publish a separate city-run appeal step beyond that trial.",
  sources: [
    {
      label: "Baltimore City Department of Finance — Vehicle Fines and Citations (FAQ: \"What do I do if my car is stolen and I receive parking citations during the time it is missing?\")",
      url: "https://www.baltimorecity.gov/finance/our-work/vehicle-fines",
    },
    {
      label: "Baltimore City Code Art. 31, §36-24 — Powers of Director of Finance",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
    },
  ],
  faqs: [
    {
      question: "Do I need to request a trial for a stolen-vehicle citation?",
      answer:
        "No. Baltimore's Department of Finance handles this as an administrative abatement, not a District Court trial. If the violation date falls between your reported-stolen and recovery dates, the Bureau forwards the citation to the Baltimore City State's Attorney's Office for abatement instead of requiring a trial petition.",
    },
    {
      question: "What if my car was never recovered?",
      answer:
        "Attach a total-loss statement from your auto insurance company along with the full police report of the theft when you contact the Bureau of Revenue Collections.",
    },
    {
      question: "Who do I contact to start this?",
      answer:
        "Call the Bureau of Revenue Collections at 410-396-3000, or email baltimorecitycollections@baltimorecity.gov, with your police report and any recovery or total-loss documentation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "baltimore",
  title: "Fix a material error on a Baltimore parking ticket",
  metaDescription:
    "Free administrative abatement letter for a Baltimore parking ticket with a wrong plate, date, or location. Cites Art. 31 §36-24(a)(2) — no trial needed.",
  whenItApplies:
    "The citation itself contains a material error — for example the wrong plate number, an incorrect date/time, or a location/violation description that doesn't match your vehicle or the facts.",
  body: `To: Baltimore City Department of Finance, Bureau of Revenue Collections
Re: Citation/Issue No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an administrative abatement of this citation for material error in its preparation.

The citation lists [FIELD — e.g., plate number, date, time, or location] as [INCORRECT VALUE ON CITATION], but the correct information is [CORRECT VALUE], as shown by my attached vehicle registration [AND/OR OTHER EVIDENCE]. This is a factual/clerical mistake in how the citation itself was prepared, not a defense that requires a trial.

Under Baltimore City Code Art. 31, §36-24(a)(2), the Director of Finance is authorized to waive all fines, penalties, charges, and costs where there has been a material error in the preparation of the citation. I ask that this citation be abated on that basis.

Attached: [copy or photo of the citation showing the incorrect detail; my vehicle registration; any other documentation contradicting the erroneous detail].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the incorrect detail(s)",
    "Your vehicle registration, to compare the correct plate number/description against what's on the citation",
    "Any documentation (photos, receipts, GPS/location records) contradicting the erroneous detail",
    "A call placed to the Bureau of Revenue Collections at 410-396-3000 to open the abatement request",
  ],
  cityNotes:
    "Baltimore explicitly separates this from a District Court trial: its FAQ states, 'Yes, we can administratively abate parking and camera citations for material error. Start by calling us at 410-396-3000.' The statutory authority is the Director of Finance's power under §36-24(a)(2) to 'waive all fines, penalties, charges, and costs where there has been a material error in the preparation of the citation.' This is a phone-in administrative review, not a trial — you do not need to use the Parking Fine Trial Request portal for a pure clerical/material error.",
  codeCite: {
    label: "Baltimore City Code Art. 31, §36-24(a)(2) — Director of Finance may waive fines/penalties for material error in citation preparation",
    citation: "Baltimore City Code Art. 31, §36-24(a)(2)",
    url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
  },
  howToSubmit: [
    "Confirm the exact error on your citation (wrong plate, date, time, or location) against your vehicle registration and the facts.",
    "Call the Bureau of Revenue Collections at 410-396-3000 to request an administrative abatement for 'material error' — no Parking Fine Trial Request or District Court trial is needed for this path.",
    "Provide documentation showing the correct information (vehicle registration, photos, GPS/location records, etc.).",
    "In person alternative: Bureau of Revenue Collections, Abel Wolman Municipal Building, 200 N. Holliday Street, Baltimore, MD 21202, Monday–Friday 8:30am–4:30pm.",
  ],
  ifThisDoesntWork:
    "If the Bureau declines to administratively abate the citation, you have not lost your right to contest it — you can still request a trial (Parking Fine Trial Request online within 45 days of the citation date, or by mail to the District Court of Maryland after that) and raise the same facts before a judge. Baltimore City does not publish a separate city-run appeal step beyond that trial.",
  sources: [
    {
      label: "Baltimore City Department of Finance — Vehicle Fines and Citations (FAQ: \"If I found a mistake on my citation, is there an administrative abatement process...\")",
      url: "https://www.baltimorecity.gov/finance/our-work/vehicle-fines",
    },
    {
      label: "Baltimore City Code Art. 31, §36-24 — Powers of Director of Finance",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
    },
  ],
  faqs: [
    {
      question: "Do I need a District Court trial to fix a clerical mistake on my citation?",
      answer:
        "No. Baltimore's Department of Finance FAQ confirms it can administratively abate a citation for material error — start by calling the Bureau of Revenue Collections at 410-396-3000. No Parking Fine Trial Request or trial is required for this path.",
    },
    {
      question: "What counts as a 'material error'?",
      answer:
        "The wrong plate number, an incorrect date or time, or a location/violation description that doesn't match your vehicle or the facts — the kind of mistake authorized for waiver under §36-24(a)(2) as an error 'in the preparation of the citation.'",
    },
    {
      question: "Who handles this request?",
      answer:
        "The Bureau of Revenue Collections, reachable at 410-396-3000, or in person at the Abel Wolman Municipal Building, 200 N. Holliday Street, Baltimore, MD 21202 (Monday–Friday 8:30am–4:30pm).",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "baltimore",
  title: "Fight a Baltimore parking ticket when you already paid the meter",
  metaDescription:
    "Free trial-defense statement for a Baltimore parking ticket issued despite valid meter payment. Cites Art. 31 §7-21 — Patapsco District Court ready.",
  whenItApplies:
    "You were cited for a metered-parking violation (e.g., expired or unpaid meter), but you actually paid the applicable fee for that space at the cited time.",
  body: `To: District Court of Maryland — Patapsco District Court
Re: Citation/Issue No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this citation and have requested a trial through the City of Baltimore's Parking Fine Trial Request process. I submit this statement in support of dismissal.

On [DATE], I paid the applicable fee for the metered space at [LOCATION] at approximately [PAYMENT TIME], through [PAYMENT METHOD — meter/pay station/app]. My receipt shows payment for space/zone [SPACE OR ZONE NUMBER], covering the time this citation states the violation occurred, [VIOLATION TIME].

Under Baltimore City Code Art. 31, §7-21(3), it is unlawful to park in a metered space only where the applicable fee has not been paid. Because I paid the required fee for the cited space and time, an essential element of this violation is not established, and I ask that this citation be dismissed at trial on that basis.

Attached: [payment receipt, app screenshot, or card statement showing the location, date, and time of payment; photo of the meter or pay station showing the space number].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A payment receipt (paper stub, app receipt, or card statement) showing the location, date, and time of payment",
    "If paid via a mobile parking-payment app: a screenshot or emailed receipt showing the space/zone number and active session time",
    "Photos of the meter or pay station showing the space number, to match your receipt to the cited location",
  ],
  cityNotes:
    "Baltimore's metered-parking offense itself is written around nonpayment: Article 31, §7-21 makes it unlawful to park in a metered space '(3) except as otherwise specifically provided in this subtitle, without paying the applicable fee.' Proof that you paid the required fee for the cited space and time directly negates an element of that charge. Baltimore does not publish a separate named 'valid payment' defense the way some cities do — you raise this as your defense at the District Court trial requested through the Parking Fine Trial Request process.",
  codeCite: {
    label: "Baltimore City Code Art. 31, §7-21 — Unlawful parking (metered space parked in without paying the applicable fee)",
    citation: "Baltimore City Code Art. 31, §7-21",
    url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-21",
  },
  howToSubmit: trialHowToSubmit,
  ifThisDoesntWork: trialIfThisDoesntWork,
  sources: [
    {
      label: "Baltimore City Code Art. 31, §7-21 — Unlawful parking",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-21",
    },
    {
      label: "Parking Fine Trial Request | City of Baltimore (how to request the District Court trial where this defense is raised)",
      url: "https://pay.baltimorecity.gov/pftr",
    },
  ],
  faqs: [
    {
      question: "Is this handled administratively, like a material-error citation?",
      answer:
        "No. Baltimore does not publish a separate named 'valid payment' defense the way some cities do — you raise it as your defense at the District Court trial you request through the Parking Fine Trial Request process, not through a phone-in abatement.",
    },
    {
      question: "How do I request the trial?",
      answer:
        "Submit a Parking Fine Trial Request online at pay.baltimorecity.gov/pftr within 45 days of the citation date, using your tag number or citation/issue number.",
    },
    {
      question: "What if my citation is more than 45 days old?",
      answer:
        "The online portal will not accept it. Mail your trial petition directly to the District Court of Maryland, 700 E. Patapsco Avenue, Baltimore, MD 21225.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "baltimore",
  title: "Fight a broken meter parking ticket in Baltimore",
  metaDescription:
    "Free trial-defense statement for a broken parking meter ticket in Baltimore. Cites Art. 31 §7-10's maintenance duty — Patapsco District Court ready.",
  whenItApplies:
    "You were cited for a metered-parking violation, but the specific meter you used was out of order or malfunctioning (blank/error display, jammed coin slot, non-functioning card reader, etc.) through no fault of your own.",
  body: `To: District Court of Maryland — Patapsco District Court
Re: Citation/Issue No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this citation and have requested a trial through the City of Baltimore's Parking Fine Trial Request process. I submit this statement in support of dismissal.

On [DATE] at approximately [TIME], I attempted to pay at the meter serving [LOCATION], meter/location number [METER LOCATION NUMBER], but the meter was out of order: [DESCRIBE — e.g., blank display, jammed coin slot, non-functioning card reader]. [IF FILED: I reported the defective meter, referencing its location number, on [REPORT DATE].]

Under Baltimore City Code Art. 31, §7-10, the Director of Transportation has an affirmative duty to keep all parking meters in good operating condition, and each meter must display a location number so that defective meters can be reported. Because the meter I used was not in good operating condition through no fault of my own, I ask that this citation, issued under §7-21's nonpayment provision, be dismissed at trial on that basis.

Attached: [time- and date-stamped photos of the malfunctioning meter and its location number; my 311 or defective-meter report, if filed; any record of a failed payment attempt].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the malfunctioning meter, including its posted location number (required under §7-10(b) so the City can identify which meter you used)",
    "A 311 complaint or defective-meter report filed at or near the time of the violation, referencing the meter's location number",
    "Any record of a failed payment attempt at that meter (declined-card notification, app error message, etc.)",
  ],
  cityNotes:
    "Baltimore City Code Art. 31, §7-10 puts an affirmative duty on the Director of Transportation to 'keep all parking meters ... in a good operating condition,' and requires each meter to display a location number that 'will serve as a means of identification for reporting defective meters, violations, or other occurrences' (§7-10(b)(2)(ii)). Unlike Washington, DC or New York City, Baltimore does not publish a separately named 'broken meter' affirmative-defense ground — there is no city FAQ page enumerating it. The defense is grounded directly in the code's own maintenance duty and reporting mechanism, and is raised as your defense at the District Court trial you request through the Parking Fine Trial Request portal or by petition to the District Court.",
  codeCite: {
    label: "Baltimore City Code Art. 31, §7-10 — Maintenance (Director's duty to keep meters in good operating condition; meter location numbers used to report defective meters)",
    citation: "Baltimore City Code Art. 31, §7-10",
    url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-10",
  },
  howToSubmit: trialHowToSubmit,
  ifThisDoesntWork: trialIfThisDoesntWork,
  sources: [
    {
      label: "Baltimore City Code Art. 31, §7-10 — Maintenance",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-10",
    },
    {
      label: "Baltimore City Code Art. 31, §7-21 — Unlawful parking (nonpayment element the broken-meter evidence rebuts)",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-21",
    },
  ],
  faqs: [
    {
      question: "Does Baltimore have a published 'broken meter' defense like other cities?",
      answer:
        "No. Unlike DC or NYC, Baltimore does not publish a separately named broken-meter defense page. The defense is grounded directly in Art. 31, §7-10's maintenance duty on the Director of Transportation, and is raised at the District Court trial you request through the Parking Fine Trial Request process.",
    },
    {
      question: "Should I report the broken meter?",
      answer:
        "Yes, if possible — file a 311 complaint or defective-meter report referencing the meter's posted location number, ideally at or near the time of the violation, as independent corroboration.",
    },
    {
      question: "How do I request the trial to raise this defense?",
      answer:
        "Submit a Parking Fine Trial Request online at pay.baltimorecity.gov/pftr within 45 days of the citation date, or mail your petition to the District Court of Maryland, 700 E. Patapsco Avenue, Baltimore, MD 21225, if the citation is older than 45 days.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "baltimore",
  title: "Fight a missing or obscured sign parking ticket in Baltimore",
  metaDescription:
    "Free trial-defense statement for a Baltimore parking ticket with a missing or obscured sign. Cites Art. 31 §3-2 — Patapsco District Court ready template.",
  whenItApplies:
    "You were cited for violating a posted parking restriction (e.g., no standing, loading zone, street-cleaning route, snow-emergency route), but the sign establishing that restriction was missing, illegible, or otherwise not properly posted at the time.",
  body: `To: District Court of Maryland — Patapsco District Court
Re: Citation/Issue No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this citation and have requested a trial through the City of Baltimore's Parking Fine Trial Request process. I submit this statement in support of dismissal.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign purporting to establish the restriction I am accused of violating was [DESCRIBE THE DEFECT — missing entirely, damaged, obscured by foliage or another object, or illegible]. I am not disputing that I failed to notice a sign — I am asserting that no properly posted, legible sign or device existed at that location to establish the restriction.

Under Baltimore City Code Art. 31, §3-2, it is unlawful to fail to comply with an instruction or direction on a sign or other device only where that sign or device was erected by authority of the City for the regulation of parking. Because no such sign was properly posted and legible at the time and place cited, an essential element of this violation is not established, and I ask that this citation be dismissed at trial on that basis.

Attached: [time- and date-stamped photos of the sign location showing it missing, damaged, or obscured; wide-angle photos of the full block face; photos of nearby cross-street signs confirming the location; any 311 or Department of Transportation report about the sign, if filed].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the sign location showing it missing, damaged, illegible, or obscured (e.g., by foliage or another object)",
    "Wide-angle photos of the full block face showing no visible or readable restriction sign",
    "Photos of nearby cross-street signs to confirm you documented the correct location",
    "A 311 service request or Department of Transportation report about the missing/damaged sign, if filed",
  ],
  cityNotes:
    "Baltimore City Code Art. 31, §3-2 makes it unlawful to 'fail, neglect, or refuse to comply with any instruction or direction on any post, standard, sign, or with any directing lines or marks painted in the roadway, or on any curb or pavement, or other device erected by authority of the City for the regulation of traffic or parking.' The offense is defined around an actual sign or device that was erected by the City — evidence that no such sign existed, or that it was unreadable, goes directly to that element. Baltimore does not publish a separate named 'obscured signage' defense page (unlike DC/NYC); this is raised as a defense at the District Court trial requested through the Parking Fine Trial Request process.",
  codeCite: {
    label: "Baltimore City Code Art. 31, §3-2 — Noncompliance with traffic devices (offense requires an actual sign/device erected by City authority)",
    citation: "Baltimore City Code Art. 31, §3-2",
    url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/3-2",
  },
  howToSubmit: trialHowToSubmit,
  ifThisDoesntWork: trialIfThisDoesntWork,
  sources: [
    {
      label: "Baltimore City Code Art. 31, §3-2 — Noncompliance with traffic devices",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/3-2",
    },
    {
      label: "Parking Fine Trial Request | City of Baltimore (how to request the District Court trial where this defense is raised)",
      url: "https://pay.baltimorecity.gov/pftr",
    },
  ],
  faqs: [
    {
      question: "Does 'I didn't see the sign' work as a defense in Baltimore?",
      answer:
        "Not on its own. The point of this defense isn't that you missed the sign — it's that no properly posted, legible sign or device existed to establish the restriction under Art. 31, §3-2 in the first place. Document the actual defect: missing, damaged, obscured, or illegible.",
    },
    {
      question: "Is this handled administratively, like a material-error citation?",
      answer:
        "No. Baltimore doesn't publish a separate named 'obscured signage' defense page — you raise it as your defense at the District Court trial you request through the Parking Fine Trial Request process.",
    },
    {
      question: "How do I request the trial?",
      answer:
        "Submit a Parking Fine Trial Request online at pay.baltimorecity.gov/pftr within 45 days of the citation date, or mail your petition to the District Court of Maryland, 700 E. Patapsco Avenue, Baltimore, MD 21225, if the citation is older than 45 days.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const baltimoreCity: ParkingCity = {
  slug: "baltimore",
  city: "Baltimore",
  state: "MD",
  agency:
    "Baltimore City Department of Finance, Bureau of Revenue Collections, bills and collects parking citations (issued by Baltimore Police, the Department of Transportation, and automated red-light/speed cameras). IMPORTANT — VERIFIED CORRECTION: parking citations are NOT adjudicated by the Baltimore City Environmental Control Board (ECB). The ECB's own page states it adjudicates citations only from the Department of Housing and Community Development, the Health Department, the Department of Transportation (non-parking), the Fire Department, the Department of Public Works, Recreation and Parks, and the Police Department for 'sanitation, environmental, health, safety, and other quality of life issues' — parking is explicitly outside that list and is 'paid through a separate city system.' Contested parking, red-light, and speed-camera citations go to trial before the District Court of Maryland (District 1, Baltimore City) — for parking citations, the Patapsco District Court location; for camera citations, the Wabash District Court location. The City of Baltimore states it 'has no purview over this process' once a trial petition reaches the court.",
  submitOnlineUrl: "https://pay.baltimorecity.gov/pftr",
  submitMailAddress:
    "For parking-citation trial petitions (only required by mail if your citation is more than 45 days old, since the online portal will not accept older citations): District Court of Maryland, 700 East Patapsco Avenue, Baltimore, MD 21225. (Red-light/speed camera citation petitions go instead to District Court of Maryland, 5800 Wabash Avenue, Baltimore, MD 21215.) Routine ticket payment by mail goes to a different address: P.O. Box 13327, Baltimore, Maryland 21203.",
  submitInPerson:
    "There is no in-person trial-filing window for parking citations — trial petitions must go through the online portal (citations 45 days old or less) or be submitted directly to the District Court of Maryland by mail (see submitMailAddress). For payment, an administrative-abatement request for a 'material error' on the citation, or a stolen-vehicle abatement request (alternatives to a trial), visit the Bureau of Revenue Collections in person at the Abel Wolman Municipal Building, 200 N. Holliday Street, Baltimore, MD 21202, Monday–Friday 8:30am–4:30pm.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 45,
  contestDeadlineNote:
    "Baltimore City Code Article 31, §36-21 and §36-22 do not themselves set a fixed statutory number of days to contest a citation — §36-22(a) instead triggers a formal notice if you neither pay 'by the date specified in the citation' (a date that is set on the individual ticket) nor file a notice of intention to stand trial, and a monthly penalty then begins to accrue if the matter is still unresolved 15 days after that formal notice (§36-22(b)(1)). The one fixed, officially published number is the ONLINE trial-request cutoff: Baltimore's own Parking Fine Trial Request portal states in bold, 'We do not accept petitions online for citations older than 45 days' (source: pay.baltimorecity.gov/pftr, fetched 2026-07-20). Missing the 45-day online window does not end your right to contest — the same page directs you to petition the District Court of Maryland directly, in writing, at 700 E. Patapsco Avenue, Baltimore, MD 21225 for parking citations (5800 Wabash Avenue, Baltimore, MD 21215 for camera citations) — but the City 'has no purview over this process' once you're past the online window, and letting a citation sit long enough to miss the 'date specified in the citation' still risks the formal-notice/penalty sequence under §36-22 and, after 52 days unpaid, an MVA registration hold. Practical takeaway: request your trial online within 45 days of the citation date if at all possible.",
  penaltyNote:
    "If a citation is neither paid by the date specified on the citation nor met with a notice of intention to stand trial, the Department of Finance sends a formal notice to the owner's last known address (Baltimore City Code Art. 31, §36-22(a)). If the citation still isn't resolved within 15 days of that notice, a monthly penalty accrues equal to whichever is LESS: $16 for each month or part of a month the citation remains unsatisfied, or 10 times the fine amount (§36-22(b)(1)) — that monthly penalty pauses under §36-22(b)(2) only while the person is making timely payments on a schedule the Director of Finance has agreed to, though the Department's own vehicle-fines FAQ separately states 'Do you offer a payment plan for parking fines? No,' so confirm current availability directly with the Bureau (410-396-3000) before relying on that provision. Separately, if a citation remains unpaid 52 days after issuance, the City notifies the Maryland Motor Vehicle Administration (MVA), requests a 'jurisdictional hold' on the vehicle's registration, and MVA applies a $30 flag fee (source: baltimorecity.gov Vehicle Fines and Citations FAQ); §36-22(b)(3) separately authorizes an additional $25 penalty when the City requests MVA refuse registration, and the City's citation-payment portal likewise references a $25 registration flag fee that may be added to the amount owed — these may be the same city-assessed fee described two ways or a distinct city vs. state charge; the primary sources do not reconcile the $25 vs. $30 figures, so do not assume they are identical. A vehicle with 3 or more unpaid parking citations that are 30 or more days past the violation date may be booted or impounded by the City (source: pay.baltimorecity.gov/parkingfines). Parking citations are NOT dischargeable in bankruptcy, though collection pauses while a bankruptcy case is pending; red-light/speed camera citations ARE dischargeable (source: baltimorecity.gov Vehicle Fines and Citations FAQ). Under Baltimore City Code Art. 31, §36-23, the Director of Finance may periodically offer amnesty from accumulated PENALTIES (not underlying fines) on parking, stopping, or standing violations; the last such amnesty was in 2018, and by the code's own 10-year moratorium clause 'no further amnesties may be offered' until that period expires.",
  municipalCodeRefs: [
    {
      label: "Baltimore City Code Art. 31, §36-1 — In general (fine schedule; the section the City's own FAQ cites for the trial-request process)",
      citation: "Baltimore City Code Art. 31, §36-1",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-1",
    },
    {
      label: "Baltimore City Code Art. 31, §36-21 — Collection of fines (notice of intention to stand trial; District Court transmittal)",
      citation: "Baltimore City Code Art. 31, §36-21",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-21",
    },
    {
      label: "Baltimore City Code Art. 31, §36-22 — Imposition of penalties (formal notice, monthly penalty, MVA registration penalty)",
      citation: "Baltimore City Code Art. 31, §36-22",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-22",
    },
    {
      label: "Baltimore City Code Art. 31, §36-23 — Amnesties (periodic penalty amnesty; 10-year moratorium after the 2018 amnesty)",
      citation: "Baltimore City Code Art. 31, §36-23",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-23",
    },
    {
      label: "Baltimore City Code Art. 31, §36-24 — Powers of Director of Finance (authority to waive fines/penalties for material error in citation preparation)",
      citation: "Baltimore City Code Art. 31, §36-24",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
    },
  ],
  recognizedDefenses: ["not-my-vehicle", "wrong-ticket-details", "valid-payment", "broken-meter", "obscured-signage"],
  defenses: [not_my_vehicle, wrong_ticket_details, valid_payment, broken_meter, obscured_signage],
  faqs: [
    {
      question: "How long do I have to dispute a Baltimore parking ticket?",
      answer:
        "Baltimore's Parking Fine Trial Request portal will not accept petitions online for citations older than 45 days. If you're within that window, request your trial online at pay.baltimorecity.gov/pftr; after 45 days, you must mail your trial petition directly to the District Court of Maryland, 700 E. Patapsco Avenue, Baltimore, MD 21225.",
    },
    {
      question: "Who decides Baltimore parking ticket disputes?",
      answer:
        "The District Court of Maryland — specifically the Patapsco District Court location for parking citations (the Wabash location handles red-light/speed camera citations). This is NOT the Baltimore City Environmental Control Board, whose jurisdiction explicitly excludes parking; Baltimore states it 'has no purview over this process' once a trial petition reaches the court.",
    },
    {
      question: "Can Baltimore City itself reduce or cancel my citation?",
      answer:
        "Generally no — the Department of Finance's own FAQ states the City 'does not have the authority' to reduce or cancel a citation, and that a motorist who disputes one 'must request a trial.' The two exceptions are a phone-in administrative abatement for a material error in the citation, or for a stolen vehicle, both under the Director of Finance's waiver power at §36-24(a).",
    },
    {
      question: "What happens if I ignore a Baltimore parking ticket?",
      answer:
        "The Department of Finance sends a formal notice, and if the citation is still unresolved 15 days after that, a monthly penalty accrues (the lesser of $16/month or 10x the fine). If a citation remains unpaid 52 days after issuance, the City notifies the Maryland MVA and requests a registration hold; a vehicle with 3+ unpaid citations 30+ days past the violation date may be booted or impounded.",
    },
    {
      question: "Can I appeal a Baltimore parking-citation trial decision?",
      answer:
        "Baltimore City does not publish a separate city-run appeal step for a parking-citation trial decision — normal Maryland District Court procedure applies from that point forward.",
    },
  ],
  sources: [
    {
      label: "Baltimore City Department of Finance — Vehicle Fines and Citations (official FAQ: payment, dispute, trial, abatement, stolen-vehicle, bankruptcy, amnesty)",
      url: "https://www.baltimorecity.gov/finance/our-work/vehicle-fines",
    },
    {
      label: "Parking Fine Trial Request | City of Baltimore (online trial-request portal; 45-day online cutoff; District Court mailing addresses)",
      url: "https://pay.baltimorecity.gov/pftr",
    },
    {
      label: "Vehicle Citations | City of Baltimore (citation lookup/payment portal; boot/impound and registration-flag-fee notices)",
      url: "https://pay.baltimorecity.gov/parkingfines",
    },
    {
      label: "Environmental Control Board | Baltimore City (confirms ECB's jurisdiction covers Housing, Health, DOT, Fire, DPW, Rec & Parks, and Police quality-of-life citations only — NOT parking, which is 'paid through a separate city system')",
      url: "https://www.baltimorecity.gov/ecb/welcome-environmental-control-board",
    },
    {
      label: "Baltimore City Code Art. 31, §36-1 — In general (fine schedule)",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-1",
    },
    {
      label: "Baltimore City Code Art. 31, §36-21 — Collection of fines",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-21",
    },
    {
      label: "Baltimore City Code Art. 31, §36-22 — Imposition of penalties",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-22",
    },
    {
      label: "Baltimore City Code Art. 31, §36-23 — Amnesties",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-23",
    },
    {
      label: "Baltimore City Code Art. 31, §36-24 — Powers of Director of Finance",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/36-24",
    },
    {
      label: "Baltimore City Code Art. 31, §7-10 — Maintenance (parking meters)",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-10",
    },
    {
      label: "Baltimore City Code Art. 31, §7-21 — Unlawful parking (metered spaces)",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/7-21",
    },
    {
      label: "Baltimore City Code Art. 31, §3-2 — Noncompliance with traffic devices",
      url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/31/3-2",
    },
    {
      label: "Parking Fine Violation Listing (Article 31 of the Baltimore City Code) — official PDF fine schedule",
      url: "https://finance.baltimorecity.gov/sites/default/files/Parking%20Fines%20Listing.pdf",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
