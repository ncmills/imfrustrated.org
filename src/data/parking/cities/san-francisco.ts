import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/san-francisco.json (verifiedAt 2026-07-20).
// IMPORTANT: San Francisco runs a two-stage California administrative model, not a single
// hearing. Stage 1 is a written PROTEST to SFMTA's own Customer Service Center / Citation
// Review unit (online, by mail, or in-person walk-in review) — not yet an independent
// tribunal. Only if that protest is denied does the case move to Stage 2: a second-level
// administrative hearing decided by a civil administrative hearing officer who is
// statutorily required, under California Vehicle Code §40215, to be independent of SFMTA's
// citation, collection, and processing functions. Further review runs to the San Francisco
// Superior Court under CVC §40230. Every defense statement below is addressed to SFMTA as a
// first-level protest and uses SFMTA's own "protest" terminology, not an NYC-style
// "NOT GUILTY" tribunal plea.

const cityHowToContest: string[] = [
  "Note your citation number and confirm the violation code, date, time, and location printed on the ticket. Do not pay the citation if you intend to protest it — SFMTA places a paid citation outside the protest process.",
  "Within 21 calendar days of the citation's issuance (or of the date of the first mailed courtesy notice), submit an initial protest one of three ways: online at sfmta.com/protest (upload photos/receipts as evidence); by mail using the Citation Protest Form, mailed to SFMTA Customer Service Center, ATTN: Citation Review, 11 South Van Ness Avenue, San Francisco, CA 94103; or in person at that same address for an unscheduled walk-in review (Mon–Fri, 8:30am–4:30pm).",
  "Select your protest reason from SFMTA's recognized grounds (e.g., meter paid/malfunction, missing/obscured sign or curb painting, stolen vehicle/plate, sold/not yet owned, valid permit/DP displayed, disclaimer/not my car) and attach supporting evidence. If the vehicle was stolen, SFMTA requires the complete police report, not just the report number. The citation is placed on hold while the protest is reviewed; review can take up to 90 days, and the decision is mailed or emailed to you.",
  "If the initial protest is denied, you may request a second-level administrative hearing within 25 calendar days of the date on the denial letter — there are no exceptions to this deadline. California Vehicle Code §40215 requires a deposit equal to the citation's fine amount to request the hearing, with waivers available for low-income individuals (at or below 200% of the federal poverty level), international visitors with valid passports, and other listed categories. Choose a hearing format: written (online Citation Hearings Request Portal), phone, video conference, email (hearingsgeneral@sfmta.com), or in person at 11 South Van Ness Avenue.",
  "A civil administrative hearing officer — independent of SFMTA's citation, collection, and processing functions under CVC §40215 — decides the case, usually within two to three weeks, mailed or emailed to you.",
  "If the hearing officer upholds the citation, you may seek de novo review by the San Francisco Superior Court within 30 calendar days of the decision, under CVC §40230. File the notice of appeal in person at 850 Bryant Street, Room 145, or by mail, and pay the filing fee set under Government Code §70615 (reimbursed to you if the court finds in your favor).",
];

const ifThisDoesntWork =
  "If your first-level protest is denied, you may request a second-level administrative hearing within 25 calendar days of the date on the denial letter — SFMTA states there are no exceptions to this deadline. California Vehicle Code §40215 requires a deposit equal to the citation's fine amount to request the hearing (waivable for low-income individuals at or below 200% of the federal poverty level, international visitors with valid passports, and other listed categories). Choose a written, phone, video-conference, email, or in-person hearing format; an independent civil administrative hearing officer — statutorily required to be independent of SFMTA's citation, collection, and processing functions — decides the case, usually within two to three weeks. If the hearing officer upholds the citation, you may seek de novo review by the San Francisco Superior Court within 30 calendar days of the decision under CVC §40230, filing the notice of appeal in person at 850 Bryant Street, Room 145, or by mail, and paying the filing fee set under Government Code §70615 (reimbursed to you if the court finds in your favor).";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "san-francisco",
  title: "Fight a broken-meter parking ticket in San Francisco",
  metaDescription:
    "Free protest-statement letter for a broken-meter parking ticket in San Francisco. Cites CVC §22508.5 on inoperable meters — mail-ready SFMTA template.",
  whenItApplies:
    "You were cited for an expired or unpaid parking meter, but the meter (or off-street parking payment center) could not physically accept payment in any form, or could not register that a payment had been made.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter or payment center serving that space, meter/pole number [METER OR POLE NUMBER, IF VISIBLE]. The meter could not accept payment in any form: [DESCRIBE — e.g., blank or error display, rejected coins, rejected credit/debit card, rejected the SFMTA app, no functioning screen]. I tried [LIST EVERY PAYMENT METHOD ATTEMPTED], and each one failed.

Under CVC §22508.5, a vehicle may be parked for up to the posted time limit (or without any time limit if none is posted) at a meter or payment center that "cannot accept payment in any form or cannot register that a payment in any form has been made." Because the meter at this location was inoperable within the meaning of that statute, I ask that this citation be dismissed.

Attached: [time-stamped photo(s) of the meter's error message or inoperable display, a description of every payment method attempted and how each one failed, and any 311 service request or SFMTA repair report I filed for this meter].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the meter's or payment center's error message or inoperable display",
    "A description of every payment method you tried (coins, credit/debit card, prepaid card, app) and how each one failed",
    "The meter number, pole number, or exact location, if visible",
    "A 311 service request or SFMTA repair report for that meter, if you filed one",
  ],
  cityNotes:
    "SFMTA's Citation Protest Form lists \"Meter Paid/Malfunction\" as a standalone protest reason. Under CVC §22508.5, a vehicle may park for up to the posted time limit (or without any time limit if none is posted) at a meter or payment center that has become inoperable — meaning it \"cannot accept payment in any form or cannot register that a payment in any form has been made.\" A meter that still accepts some, but not all, payment types is not \"inoperable\" under this definition.",
  codeCite: {
    label: "CVC §22508.5 — Inoperable parking meters and payment centers",
    citation: "Cal. Veh. Code § 22508.5",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
    {
      label: "SFMTA — Contest a Citation",
      url: "https://www.sfmta.com/getting-around/drive-park/citations/contest-citation",
    },
  ],
  faqs: [
    {
      question: "Is it enough that the meter didn't take my card?",
      answer:
        "Only if the meter was truly inoperable — CVC §22508.5 defines that as a meter that cannot accept payment in any form, or cannot register that payment was made. A meter that still takes coins but rejected your card is not \"inoperable\" under the statute. Try, and document, every payment method the meter accepts.",
    },
    {
      question: "What protest reason do I select on SFMTA's form?",
      answer:
        "SFMTA's Citation Protest Form lists \"Meter Paid/Malfunction\" as a single checkbox that covers both a broken meter and a ticket issued despite valid payment. Select that reason and describe the malfunction in the details field.",
    },
    {
      question: "Should I file a 311 report about the broken meter?",
      answer:
        "It isn't required, but it's independent, time-stamped corroboration that the meter was actually out of service, and SFMTA's protest process invites you to attach any repair report you filed for that meter.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "san-francisco",
  title: "Fight a San Francisco parking ticket when you already paid",
  metaDescription:
    "Free protest-statement letter for a San Francisco parking ticket issued despite valid payment. Cites SF Transportation Code §7.2.23 — mail-ready SFMTA template.",
  whenItApplies:
    "You were cited for an expired-meter or failure-to-pay violation, but you actually paid for parking at that space — by muni-meter, prepaid card, or app — for the cited time.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — muni-meter, prepaid parking card, or SFMTA app], for meter/space number [METER OR SPACE NUMBER]. My payment receipt or app confirmation shows coverage for [PAID TIME WINDOW], which includes [TIME], the time this citation states the violation was recorded.

Under S.F. Transportation Code §7.2.23, it is a violation to park at a metered space "without immediately making advance payment ... by depositing lawful money of the United States into the Parking Meter ... by prepaid parking card or by other authorized payment method," or to remain parked after the paid time has expired. Because I made timely, valid payment covering the cited time, I ask that this citation be dismissed.

Attached: [payment receipt, app confirmation screen, or card/bank statement showing payment for this exact space and time window, and a photo of the meter display showing an active paid session, if I took one at the time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A payment receipt, app confirmation screen, or card/bank statement showing payment for that specific space and time window",
    "The exact meter or space number and the citation's recorded time, compared against your payment's coverage window",
    "A photo of the meter display showing an active paid session, if you took one at the time",
  ],
  cityNotes:
    "SFMTA's Citation Protest Form uses the same \"Meter Paid/Malfunction\" checkbox to cover both a broken meter and a ticket issued despite valid payment. The underlying obligation is set by S.F. Transportation Code §7.2.23, which makes it a violation to park at a metered space \"without immediately making advance payment ... by depositing lawful money of the United States into the Parking Meter ... by prepaid parking card or by other authorized payment method,\" or to remain parked after the paid time has expired — proof that you made timely, valid payment for the cited period rebuts the violation.",
  codeCite: {
    label: "SF Transportation Code §7.2.23 — Payment of Parking Meter",
    citation: "S.F. Transportation Code § 7.2.23",
    url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-51640",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
    {
      label: "SFMTA — Citation Payment Options",
      url: "https://www.sfmta.com/getting-around/drive-park/citations/citation-payment-options",
    },
  ],
  faqs: [
    {
      question: "What if my receipt shows a slightly different space number?",
      answer:
        "Make sure your receipt's meter or space number, and its paid time window, line up with the citation's recorded location and time. If they match, that receipt is your core evidence — attach it along with a note explaining any minor discrepancy.",
    },
    {
      question: "Do I use a different protest reason than a broken meter?",
      answer:
        "No — SFMTA's Citation Protest Form uses the same \"Meter Paid/Malfunction\" checkbox for both a broken meter and a ticket issued despite valid payment. Select that reason and attach your payment receipt as the evidence.",
    },
    {
      question: "I paid through the SFMTA app instead of the meter itself — does that count?",
      answer:
        "Yes. S.F. Transportation Code §7.2.23 recognizes prepaid parking cards and other authorized payment methods alongside coin payment at the meter. Attach your app confirmation screen showing the location, date, and paid time window.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "san-francisco",
  title: "Fight a missing or obscured sign parking ticket in San Francisco",
  metaDescription:
    "Free protest-statement letter for a San Francisco parking ticket with a missing sign or faded curb paint — mail-ready SFMTA Citation Review template.",
  whenItApplies:
    "You were cited for violating a posted sign restriction or a color-curb zone, but the sign was missing or illegible, or the curb paint was so faded or obscured that the restriction could not reasonably be identified.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. The [SIGN / CURB PAINT] governing that space was [DESCRIBE THE DEFECT — missing entirely, illegible due to fading or damage, obstructed by a tree, vehicle, or other object, or too faded to identify the curb color]. I am not asserting that I simply failed to notice a posted restriction — the sign or curb marking itself did not legibly and unambiguously convey the restriction I am cited for violating.

California standardizes curb-marking colors and their meanings statewide under CVC §21458, and SFMTA's own Citation Protest Form separately recognizes "Missing/Obscured Sign" and "Curb Painting" as protest grounds, consistent with SFMTA's public "Faded Curbs" maintenance-request process for markings too worn to be seen. Because the restriction I am cited for was not legibly posted at this location, I ask that this citation be dismissed.

Attached: [photos of the entire block face, corner to corner, showing the missing/illegible sign or faded/obscured curb; close-up, date- and time-stamped photos of the sign (front and back) or the curb color where I parked; photos of the cross-street signage confirming the exact location; and any 311 "Faded Curbs" service request I filed for this location].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the entire block face, corner to corner, showing the missing or illegible sign, or the faded/obscured curb",
    "Close-up, date- and time-stamped photos of the sign (front and back) or the curb color where you parked",
    "Photos of the cross-street signage confirming the exact block/location",
    "Any 311 \"Faded Curbs\" service request you filed for that location, if applicable",
  ],
  cityNotes:
    "SFMTA's Citation Protest Form separately lists \"Missing/Obscured Sign\" and \"Curb Painting\" as protest reasons. Curb-marking colors and their meanings (red = no stopping/standing/parking, yellow = loading only, white = passenger loading, green = time-limited, blue = disabled parking only) are standardized statewide by CVC §21458; S.F. Transportation Code §7.2.25 separately codifies San Francisco's own red-zone no-parking rule. SFMTA also runs a public \"Faded Curbs\" maintenance-request process for curb markings that are too worn to be seen.",
  codeCite: {
    label: "CVC §21458 — Curb marking colors and meanings",
    citation: "Cal. Veh. Code § 21458",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21458",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
    {
      label: "SFMTA — Faded Curbs",
      url: "https://www.sfmta.com/services/maintenance-requests/faded-curbs",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a protest ground?",
      answer:
        "No — you need to show the sign or curb marking itself was defective (missing, illegible, faded, or obstructed), not just that you missed it. SFMTA's \"Missing/Obscured Sign\" and \"Curb Painting\" protest reasons are specific to a defect in the marking itself.",
    },
    {
      question: "What if the curb color was faded rather than a sign missing?",
      answer:
        "Select \"Curb Painting\" as your protest reason and photograph the faded curb where you parked, ideally alongside a stretch of curb further down the block where the color is still visible for comparison. SFMTA separately runs a \"Faded Curbs\" maintenance-request process you can reference or file for that same location.",
    },
    {
      question: "A tree or parked truck was blocking the sign — does that qualify?",
      answer:
        "It can, if the obstruction made the sign illegible or unreadable from a normal parking position. Photograph the obstruction as close to the time you parked as possible, since a truck may move before you can document it later.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "san-francisco",
  title: "Fight a defective parking ticket in San Francisco (missing or wrong details)",
  metaDescription:
    "Free protest-statement letter for a San Francisco parking ticket with a vehicle-description mismatch. Cites CVC §40206.5(b) — mail-ready SFMTA template.",
  whenItApplies:
    "The citation is missing required information, or a required field is incorrect or illegible — most commonly, the vehicle description (license plate, make, or color) does not substantially match your vehicle's registration.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be cancelled.

This citation's vehicle description does not substantially match my vehicle's registration. Specifically, the [FIELD — e.g., license plate number, make, or color] printed on the citation reads [WHAT IS PRINTED ON THE CITATION], but my vehicle's registration card shows [CORRECT INFORMATION]. This mismatch was not caused by intentionally switched plates.

Under CVC §40206.5(b), where the vehicle description on a notice of parking violation "does not substantially match the corresponding information on the registration card for that vehicle," and the mismatch was not caused by intentionally switched plates, the processing agency "shall, on written request of the person[,] cancel the notice of parking violation ... without the necessity of an appearance." I am making that written request now and ask that this citation be cancelled on that basis.

Attached: [a copy or photo of the actual citation showing the missing, illegible, or incorrect field(s), and a copy of my vehicle registration card, to compare plate number, make, color, and body type against what is printed on the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration card, to compare plate number, make, color, and body type against what's printed on the citation",
    "A written request identifying exactly which CVC §40202-required element is wrong or missing",
  ],
  cityNotes:
    "This is a codified right, not just SFMTA guidance. CVC §40206.5(b) requires that if the vehicle description on the notice \"does not substantially match the corresponding information on the registration card for that vehicle,\" and the mismatch was not caused by intentionally switched plates, the processing agency \"shall, on written request of the person[,] cancel the notice of parking violation ... without the necessity of an appearance.\" CVC §40202(a) separately lists what a notice of parking violation must contain: the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), and the vehicle's color and make (if possible).",
  codeCite: {
    label: "CVC §40206.5(b) — Cancellation for vehicle description mismatch",
    citation: "Cal. Veh. Code § 40206.5(b)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "CVC §40202 — Required contents of a notice of parking violation",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202",
    },
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
  ],
  faqs: [
    {
      question: "What counts as a required element on a California parking citation?",
      answer:
        "CVC §40202(a) lists the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), and the vehicle's color and make (if possible). Compare your citation against your registration card to identify exactly which field is wrong or missing.",
    },
    {
      question: "Is a small typo enough for cancellation?",
      answer:
        "CVC §40206.5(b) applies where the description \"does not substantially match\" your registration — a trivial formatting difference likely isn't enough, but a wrong plate number, make, or color that doesn't match your vehicle is squarely covered.",
    },
    {
      question: "What if the mismatch happened because someone switched my plates?",
      answer:
        "CVC §40206.5(b)'s cancellation right does not apply if the mismatch was caused by intentionally switched plates. If that's not what happened here, say so explicitly in your protest.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "san-francisco",
  title: "Fight a San Francisco parking ticket for a stolen, sold, or unauthorized vehicle",
  metaDescription:
    "Free protest-statement letter for a San Francisco parking ticket on a stolen, sold, or unauthorized-use vehicle. Cites CVC §40200(b) — mail-ready SFMTA template.",
  whenItApplies:
    "The vehicle was stolen or used without your consent, or you had sold or transferred it before the citation date, so you were not the person in possession or control of the vehicle at the time of the violation.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

I was not in possession or control of the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) The vehicle was stolen or used without my consent — it was reported stolen to police on [DATE OF POLICE REPORT], before this citation was issued. / (b) I had sold or transferred the vehicle before this citation was issued, on [TRANSFER DATE], as shown by [DMV transfer-notice confirmation under CVC §5602, or the executed sale/transfer agreement]. / (c) This is not my vehicle — I have never owned, registered, or had any connection to the vehicle described on this citation.]

Under CVC §40200(b), the registered owner is not liable for a parking penalty where the owner can show the vehicle was used without their consent, express or implied. [IF SOLD OR TRANSFERRED: Under CVC §40210, the processing agency must cancel a notice against a former registered owner once DMV confirms compliance with the CVC §5602 transfer-notice requirement, or upon timely documentation proving the sale predated the violation.] I ask that this citation be dismissed on that basis.

Attached: [complete police report of the theft filed before the citation date (not just the report number); or proof of DMV transfer notice under CVC §5602, or the executed sale/transfer agreement showing a transfer date before the citation; or other documentation showing I was not in possession or control of the vehicle on the citation date].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Stolen or unauthorized use: a complete police report of the theft filed before the citation date (SFMTA requires the full report, not just a report number)",
    "Sold or transferred vehicle: proof you notified DMV of the transfer under CVC §5602, or a copy of the executed sale/transfer agreement showing a transfer date before the violation",
    "Any documentation showing you were not in possession or control of the vehicle on the violation date",
  ],
  cityNotes:
    "SFMTA's Citation Protest Form lists \"Stolen Vehicle/Plate,\" \"Sold/Not Owned Yet,\" and \"Disclaimer/Not My Car\" as separate but related protest reasons, and requires a complete police report (not just the report number) for stolen-vehicle protests. Codified basis: CVC §40200(b) makes the registered owner jointly liable for parking penalties \"unless the owner can show that the vehicle was used without consent of that person, express or implied\" — covering theft or unauthorized use. For a prior sale, CVC §40210 requires the processing agency to cancel a delinquent notice against the former registered owner once DMV confirms the owner complied with the CVC §5602 transfer-notice requirement, or if the owner supplies timely documentation (e.g., the executed transfer agreement) proving the sale predated the violation.",
  codeCite: {
    label: "CVC §40200(b) — Registered owner/driver joint liability; non-consent exception",
    citation: "Cal. Veh. Code § 40200(b)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "CVC §40210 — Affidavit of nonliability (sold/transferred vehicle)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210",
    },
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
  ],
  faqs: [
    {
      question: "My car was stolen — what exactly does SFMTA need?",
      answer:
        "SFMTA requires the complete police report of the theft, not just the report number, and the report needs to be filed before the citation date. Attach the full report along with your protest.",
    },
    {
      question: "I sold the car months ago but never removed the plates — does that matter?",
      answer:
        "It can complicate things. Your strongest evidence is documentation of the transfer date itself — proof you notified DMV of the transfer under CVC §5602, or the executed sale/transfer agreement showing a date before the citation.",
    },
    {
      question: "Which protest reason do I select if this simply isn't my car at all?",
      answer:
        "SFMTA's Citation Protest Form lists \"Disclaimer/Not My Car\" as its own reason, separate from \"Stolen Vehicle/Plate\" and \"Sold/Not Owned Yet.\" Select whichever reason matches your actual situation and attach whatever documentation you have supporting it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_permit_displayed: ParkingDefense = {
  slug: "valid-permit-displayed",
  citySlug: "san-francisco",
  title: "Fight a San Francisco parking ticket when you had a valid permit or placard",
  metaDescription:
    "Free protest-statement letter for a San Francisco parking ticket issued despite a valid RPP or disabled placard. Cites SF Transportation Code §905 — mail-ready template.",
  whenItApplies:
    "You were cited for a permit-zone or disabled-parking violation, but you had a valid SFMTA-issued parking permit (e.g., a Residential Parking Permit) or a DMV disabled person placard/plates properly displayed in the vehicle at the time of the citation.",
  body: `To: San Francisco Municipal Transportation Agency (SFMTA) — Citation Review
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this protest to Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

At the time of this citation, my vehicle displayed a valid [RESIDENTIAL PARKING PERMIT (AREA [RPP AREA LETTER/NUMBER]) / DMV DISABLED PERSON PLACARD OR PLATES], properly placed on the [WINDSHIELD/DASHBOARD], unexpired and issued to [ME / THIS VEHICLE].

Under S.F. Transportation Code §905, a vehicle displaying a valid Residential Parking Permit is exempt from posted time restrictions within its RPP area and, where SFMTA has posted signs designating it, from on-street meter payment in that area as well. [IF DISABLED PLACARD OR PLATES: A validly displayed DMV disabled person placard or plates likewise exempts the vehicle from the metered or time-restricted regulation cited.] I ask that this citation be dismissed on that basis.

Attached: [a photo of the permit or placard as it was displayed in the vehicle at the time of the citation, and a copy or photo of the permit or placard itself, front and back, showing it was unexpired and issued to me or this vehicle].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A photo of the permit or placard as it was displayed in the vehicle (windshield or dashboard) at the time of the citation",
    "A copy or photo of the valid permit or placard itself, front and back, showing it was unexpired and issued to you or the vehicle",
    "For a Residential Parking Permit, confirmation the permit was issued for that specific RPP area",
  ],
  cityNotes:
    "This is an SF-specific extra beyond the canonical defense list: SFMTA's Citation Protest Form lists \"Valid Permit/DP Displayed\" as its own protest reason, distinct from meter-payment or signage disputes. Under S.F. Transportation Code §905, a vehicle displaying a valid Residential Parking Permit is exempt from posted time restrictions within its RPP area and, where SFMTA has posted signs designating it, from on-street meter payment in that area as well.",
  codeCite: {
    label: "SF Transportation Code §905 — Residential Parking Permit",
    citation: "S.F. Transportation Code § 905",
    url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-53226",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SFMTA — Citation Protest Form",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
    {
      label: "SFMTA — Residential Parking Permits (RPP)",
      url: "https://www.sfmta.com/permits/residential-parking-permits-rpp",
    },
  ],
  faqs: [
    {
      question: "Does an RPP always exempt me from meter payment, not just time limits?",
      answer:
        "Only where SFMTA has posted signs specifically designating that exemption within your RPP area. S.F. Transportation Code §905 ties the meter-payment exemption to those posted signs, so note in your protest whether the block was signed that way.",
    },
    {
      question: "What protest reason do I select for this?",
      answer:
        "SFMTA's Citation Protest Form lists \"Valid Permit/DP Displayed\" as its own protest reason, separate from meter-payment or signage disputes. Select that reason and attach a photo of the permit or placard as it was actually displayed at the time.",
    },
    {
      question: "My permit was in the car but not visible through the windshield — does that count?",
      answer:
        "It's weaker without a photo showing the permit or placard properly displayed and visible at the time of the citation. If you have any contemporaneous photo of the vehicle's interior, include it, but the strongest evidence is a photo taken with the permit clearly placed as required.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const sanFranciscoCity: ParkingCity = {
  slug: "san-francisco",
  city: "San Francisco",
  state: "CA",
  agency:
    "San Francisco Municipal Transportation Agency (SFMTA) — issues parking and transit citations and decides first-level protests through its Customer Service Center / Citation Review unit. Second-level administrative hearings are decided by a civil administrative hearing officer under California Vehicle Code §40215 (an SFMTA-contracted hearing examiner, statutorily required to be independent of the citation, collection, or processing function). Further appeal goes to the San Francisco Superior Court under CVC §40230.",
  submitOnlineUrl: "https://www.sfmta.com/protest",
  submitMailAddress:
    "SFMTA Customer Service Center, ATTN: Citation Review, 11 South Van Ness Avenue, San Francisco, CA 94103",
  submitInPerson:
    "SFMTA Customer Service Center, 11 South Van Ness Avenue, San Francisco, CA 94103 — walk-in, unscheduled hearing, no appointment necessary, Monday–Friday (except City holidays) 8:30 a.m.–4:30 p.m. SFMTA's own protest form and contest page confirm the same address is used for mailed protests and in-person hearings alike.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote:
    "SFMTA's Citation Protest Form and its Contest a Citation page both state: \"Submit protest within 21 calendar days of the issuance of the citation, or 21 calendar days of the date of the first mailed citation notice\" and that \"Protests will not be considered after that period of time has expired.\" This matches the statewide deadline set by California Vehicle Code §40215(a): a person may request an initial review \"within 21 calendar days from the issuance of a notice of parking violation or 14 calendar days from the mailing of a notice of delinquent parking violation.\" A separate, later deadline applies to the next stage: if the initial protest is denied, CVC §40215 gives you 25 calendar days from the date of the denial letter to request a second-level administrative hearing, and SFMTA states there are no exceptions to that 25-day window. Sources: https://www.sfmta.com/getting-around/drive-park/citations/contest-citation ; https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=40215.&lawCode=VEH",
  penaltyNote:
    "Citations must be paid or protested within 21 calendar days of issuance (or of the first mailed notice); missing that window doesn't forfeit your right to contest outright but starts delinquent penalties. Per SFMTA's current Fees and Fines Schedule (effective July 1, 2026, S.F. Transportation Code Division II §301(a)): a $45 delinquent penalty is added after the first payment due date, a further $63 after the second payment due date, plus a $45 special collection fee after the second due date. Delinquent citations are transmitted to the California DMV, which must refuse to renew the vehicle's registration until all outstanding parking penalties and administrative fees are paid, per CVC §4760 (limited exceptions apply, e.g. citations issued before the current owner took possession). SFMTA states vehicles with five or more parking citations are subject to booting and/or towing; separately, CVC §22651(i) authorizes impounding a vehicle known to have five or more notices of parking violation left unanswered more than 21 calendar days (or 14 days for a delinquent-violation mailing) until the owner provides identification, an in-state address, and proof all parking penalties on that vehicle (and others registered to the same owner) are cleared. SFMTA's current schedule lists an Administrative Tow Fee of $385 (July 2026) among its tow-related fees. If you request an administrative hearing under CVC §40215, you must first deposit the fine amount (waivable for indigency and other listed categories); if you lose and don't appeal further within 30 days, CVC §40230 treats the decision as final and collection proceeds.",
  municipalCodeRefs: [
    {
      label: "CVC §40215 — Initial review and administrative hearing procedure for parking violations",
      citation: "Cal. Veh. Code § 40215",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=40215.&lawCode=VEH",
    },
    {
      label: "CVC §40230 — Review of parking violation decision by the superior court (de novo)",
      citation: "Cal. Veh. Code § 40230",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40230",
    },
    {
      label: "CVC §40202 — Required contents of a notice of parking violation",
      citation: "Cal. Veh. Code § 40202",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202",
    },
    {
      label: "CVC §40206.5 — Cancellation of citation for vehicle description mismatch",
      citation: "Cal. Veh. Code § 40206.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5",
    },
    {
      label: "CVC §40200 — Registered owner/driver joint liability for parking penalties; non-consent exception",
      citation: "Cal. Veh. Code § 40200",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200",
    },
    {
      label: "CVC §40210 — Affidavit of nonliability for a sold/transferred vehicle",
      citation: "Cal. Veh. Code § 40210",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210",
    },
    {
      label: "CVC §5602 — Notice of transfer and release of seller's liability",
      citation: "Cal. Veh. Code § 5602",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=5602",
    },
    {
      label: "CVC §22508.5 — Inoperable parking meters and payment centers",
      citation: "Cal. Veh. Code § 22508.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
    },
    {
      label: "CVC §22651(i) — Impoundment for five or more unpaid parking violation notices",
      citation: "Cal. Veh. Code § 22651(i)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651",
    },
    {
      label: "CVC §4760 — DMV refusal to renew registration for unpaid parking penalties",
      citation: "Cal. Veh. Code § 4760",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760",
    },
    {
      label: "CVC §21458 — Curb marking colors and meanings",
      citation: "Cal. Veh. Code § 21458",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21458",
    },
    {
      label: "SF Transportation Code §7.2.23 — Payment of Parking Meter",
      citation: "S.F. Transportation Code § 7.2.23",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-51640",
    },
    {
      label: "SF Transportation Code §7.2.25 — Curb Parking – Red Zones",
      citation: "S.F. Transportation Code § 7.2.25",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-51647",
    },
    {
      label: "SF Transportation Code §301 — Fines and Fees, Automatic Indexing, Late Payment; Special Collections",
      citation: "S.F. Transportation Code § 301",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-52218",
    },
    {
      label: "SF Transportation Code §905 — Residential Parking Permit",
      citation: "S.F. Transportation Code § 905",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-53226",
    },
  ],
  recognizedDefenses: [
    "broken-meter",
    "valid-payment",
    "obscured-signage",
    "wrong-ticket-details",
    "not-my-vehicle",
    "valid-permit-displayed",
  ],
  defenses: [
    broken_meter,
    valid_payment,
    obscured_signage,
    wrong_ticket_details,
    not_my_vehicle,
    valid_permit_displayed,
  ],
  faqs: [
    {
      question: "How long do I have to protest a San Francisco parking ticket?",
      answer:
        "You must submit an initial protest within 21 calendar days of the citation's issuance, or 21 calendar days from the date of the first mailed citation notice. SFMTA states protests will not be considered after that period has expired. Do not pay the citation if you intend to protest it — SFMTA places a paid citation outside the protest process.",
    },
    {
      question: "What happens if SFMTA denies my initial protest?",
      answer:
        "You may request a second-level administrative hearing within 25 calendar days of the date on the denial letter — there are no exceptions to that deadline. CVC §40215 requires a deposit equal to the citation's fine amount to request the hearing (waivable for low-income individuals, international visitors with valid passports, and other listed categories). An independent civil administrative hearing officer then decides the case, usually within two to three weeks.",
    },
    {
      question: "Does OATH or a court decide San Francisco parking disputes?",
      answer:
        "Neither, at first. SFMTA itself decides the initial protest through its Customer Service Center / Citation Review unit. Only if that protest is denied does the case move to a second-level hearing before a civil administrative hearing officer who is statutorily required, under CVC §40215, to be independent of SFMTA's citation, collection, and processing functions. Beyond that, you can seek de novo review from the San Francisco Superior Court under CVC §40230.",
    },
    {
      question: "What happens if I ignore a San Francisco parking citation?",
      answer:
        "Delinquent penalties are added — a $45 penalty after the first payment due date, a further $63 after the second, plus a $45 special collection fee — and the citation is transmitted to the California DMV, which must refuse to renew your vehicle's registration under CVC §4760 until all penalties and fees are paid. SFMTA states vehicles with five or more citations are subject to booting and/or towing, and CVC §22651(i) separately authorizes impoundment on that same five-or-more threshold.",
    },
  ],
  sources: [
    {
      label: "SFMTA — Contest a Citation",
      url: "https://www.sfmta.com/getting-around/drive-park/citations/contest-citation",
    },
    {
      label: "SFMTA — Contest Your Parking Citation Online (Protest)",
      url: "https://www.sfmta.com/protest",
    },
    {
      label: "SFMTA — Administrative Hearings for 2nd Level Citation Protests",
      url: "https://www.sfmta.com/services/request-administrative-hearing/citation-hearings-parking-violations",
    },
    {
      label: "SFMTA — Pay a Parking Ticket or Transit Citation",
      url: "https://www.sfmta.com/getting-around/drive-park/citations",
    },
    {
      label: "SFMTA — Citation Payment Options",
      url: "https://www.sfmta.com/getting-around/drive-park/citations/citation-payment-options",
    },
    {
      label: "SFMTA — Citation Protest Form (PDF)",
      url: "https://www.sfmta.com/sites/default/files/reports-and-documents/2019/01/citation_protest_01.09.2019.pdf",
    },
    {
      label: "SFMTA — Fee and Fine Schedule (index)",
      url: "https://www.sfmta.com/reports/fee-and-fine-schedule",
    },
    {
      label: "SFMTA — Fees and Fines Schedule, effective July 1, 2026 (PDF)",
      url: "https://www.sfmta.com/media/45130/download?inline",
    },
    {
      label: "SFMTA — Faded Curbs",
      url: "https://www.sfmta.com/services/maintenance-requests/faded-curbs",
    },
    {
      label: "SFMTA — Residential Parking Permits (RPP)",
      url: "https://www.sfmta.com/permits/residential-parking-permits-rpp",
    },
    {
      label: "California Legislative Information — CVC §40215 (initial review and administrative hearing)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=40215.&lawCode=VEH",
    },
    {
      label: "California Legislative Information — CVC §40230 (superior court de novo review)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40230",
    },
    {
      label: "California Legislative Information — CVC §40202 (notice requirements)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202",
    },
    {
      label: "California Legislative Information — CVC §40206.5 (vehicle description mismatch)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5",
    },
    {
      label: "California Legislative Information — CVC §40200 (owner/driver liability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200",
    },
    {
      label: "California Legislative Information — CVC §40210 (affidavit of nonliability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210",
    },
    {
      label: "California Legislative Information — CVC §5602 (notice of transfer)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=5602",
    },
    {
      label: "California Legislative Information — CVC §22508.5 (inoperable meters)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
    },
    {
      label: "California Legislative Information — CVC §22651 (vehicle removal/impound)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651",
    },
    {
      label: "California Legislative Information — CVC §4760 (DMV registration hold)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760",
    },
    {
      label: "California Legislative Information — CVC §21458 (curb markings)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21458",
    },
    {
      label: "American Legal — SF Transportation Code §7.2.23 (Payment of Parking Meter)",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-51640",
    },
    {
      label: "American Legal — SF Transportation Code §7.2.25 (Curb Parking – Red Zones)",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-51647",
    },
    {
      label: "American Legal — SF Transportation Code §301 (Fines, Fees, Late Payment, Special Collections)",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-52218",
    },
    {
      label: "American Legal — SF Transportation Code §905 (Residential Parking Permit)",
      url: "https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_transportation/0-0-0-53226",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
