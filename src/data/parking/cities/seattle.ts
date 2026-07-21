import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/seattle.json (verifiedAt 2026-07-20).
// IMPORTANT: Seattle parking-ticket disputes are NOT decided by an administrative tribunal.
// SDOT issues the citation, but disputes are adjudicated by the Seattle Municipal Court (SMC)
// under SMC Title 11, Chapter 11.31 — the same court that hears other traffic infractions. This
// is a different track from the City's Office of Hearing Examiner (which hears citations from
// other departments, but not parking/traffic infractions). Every defense statement below is a
// written statement submitted for a CONTESTED hearing (you deny committing the infraction, and
// the City bears the burden of proof) — not a mitigation hearing (where you concede the
// infraction and only ask for a reduced penalty) and not a written-statement-in-lieu-of-appearing
// hearing (which forfeits any right of appeal).

const cityHowToContest: string[] = [
  "Note your citation number and confirm the violation code, date, time, and location printed on the Notice of Infraction.",
  "Decide which response you want: a mitigation hearing (you agree the infraction occurred but want to explain circumstances that might reduce the penalty — the Magistrate's decision is final, no appeal) or a contested hearing (you deny committing the infraction, or deny responsibility) — check the corresponding box on the ticket.",
  "Request the hearing within 30 days of the ticket date (33 days if the notice was mailed to you), using any of three methods: the online Hearing Request Form (generates an email to the court), mailing or delivering the ticket's response portion to Seattle Municipal Court, or calling (206) 684-5600 with your citation number.",
  "If you requested a contested hearing, the court will first schedule a pre-hearing settlement conference (you may waive it via the waiver form sent with the conference notice and go straight to the contested hearing/trial).",
  "Gather your evidence (photos, receipts, payment records, sale documents, etc.) and submit it before the hearing by uploading to the Seattle Municipal Court Public Portal or emailing CourtCalendar.SMC@seattle.gov; written-statement hearings require the statement to arrive at least 3 days before the hearing date.",
  "Attend the hearing (in person, by phone, by video conference, or by written statement if offered for your courtroom). In a contested hearing the City must prove the infraction by a preponderance of the evidence; you may present evidence, subpoena witnesses (including the citing officer), and cross-examine.",
  "Receive the written decision. A contested-hearing decision may be appealed to King County Superior Court; mitigation-hearing decisions and written-statement decisions are final with no appeal.",
];

const ifThisDoesntWork =
  "If you are found to have committed the infraction following a contested hearing, you may appeal the decision to King County Superior Court. Note that a mitigation-hearing decision, or a decision reached through a written-statement-in-lieu-of-appearing hearing rather than a contested hearing, is final with no right of appeal.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "seattle",
  title: "Fight a broken pay station parking ticket in Seattle",
  metaDescription:
    "Free defense-statement letter for a broken pay-station parking ticket in Seattle. Cites SMC 11.76.005 and SDOT's own outage guidance — hearing-ready template.",
  whenItApplies:
    "You were ticketed for a pay-to-park / parking-payment violation, but the parking payment device (pay station) on your blockface was out of service or malfunctioning when you tried to pay.",
  body: `To: Seattle Municipal Court
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny committing this infraction and request that it be dismissed following a contested hearing.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the pay station serving that space, but the pay station was out of service: [DESCRIBE — e.g., blank screen, rejected my card, displayed an error message]. Because the pay station at my parking space did not work, I paid for parking via PayByPhone instead, which is SDOT's own directed alternate method when a pay station is out of service. [IF YOU DID NOT USE PAYBYPHONE: I reported the broken pay station to SDOT at (206) 684-5260 or DOT_Paystations@seattle.gov on [DATE].]

Under SMC 11.76.005, and consistent with SDOT's own published guidance directing drivers to PayByPhone when a pay station is out of service, I made proper payment for this parking space and did not violate SMC 11.76.005's proper-payment requirement. I ask that this violation be dismissed on that basis.

Attached: [date- and time-stamped photo(s) of the broken pay station and any error message it displayed, my PayByPhone transaction confirmation, and/or my report to SDOT about the outage].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photos of the malfunctioning pay station and any error message it displayed",
    "A screenshot or transaction confirmation showing you paid via PayByPhone instead (SDOT's official alternate method when a pay station is out of service)",
    "A record of any report you made to SDOT about the broken pay station - call (206) 684-5260 or email DOT_Paystations@seattle.gov - ideally made at or near the time of the ticket",
    "Your own contemporaneous notes of the time, location, and what the pay station displayed or failed to do",
  ],
  cityNotes:
    "Seattle Municipal Court does not publish an itemized 'broken meter' defense list the way some cities do. SDOT's own official guidance is that if a pay station is out of service you should pay via PayByPhone instead, so the practical routes are: (a) show you switched to PayByPhone, (b) report the outage to SDOT so the resulting citation can potentially be voided administratively, or (c) raise the malfunction as evidence at a mitigation or contested hearing under SMC 11.31.050 that you did not violate SMC 11.76.005's proper-payment requirement, or that circumstances justify a reduced penalty.",
  codeCite: {
    label: "SMC 11.76.005 - Proper payment",
    citation: "SMC 11.76.005",
    url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SDOT - Pay at a Pay Station (out-of-service guidance, PayByPhone alternative, report-a-problem contact)",
      url: "https://www.seattle.gov/transportation/projects-and-programs/programs/parking-program/paid-parking-information/pay-at-a-pay-station",
    },
    {
      label: "SDOT - Pay on Your Phone",
      url: "https://www.seattle.gov/transportation/projects-and-programs/programs/parking-program/paid-parking-information/pay-on-your-phone",
    },
    {
      label: "Seattle Municipal Court - Dispute My Ticket",
      url: "https://www.seattle.gov/courts/tickets-and-payments/dispute-my-ticket",
    },
  ],
  faqs: [
    {
      question: "Is it enough to show the pay station was broken?",
      answer:
        "It's your strongest evidence, but SDOT's own guidance is that you should have paid via PayByPhone when a pay station is out of service. If you switched to PayByPhone, attach that transaction confirmation. If you didn't, still attach photos of the broken pay station and any report you filed with SDOT.",
    },
    {
      question: "Should I report the broken pay station to SDOT?",
      answer:
        "Yes, if you can do it around the time of the citation. Call (206) 684-5260 or email DOT_Paystations@seattle.gov. This isn't required, but it's independent, contemporaneous corroboration that the pay station was actually out of service.",
    },
    {
      question: "What if I couldn't find a working PayByPhone signal or the app wouldn't load?",
      answer:
        "Document that too — screenshots of app errors, timestamps of your attempts — and describe it in your written statement. The stronger the record that you made a genuine, good-faith effort to pay, the better.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "seattle",
  title: "Fight a missing or obscured sign parking ticket in Seattle",
  metaDescription:
    "Free defense-statement letter for a Seattle parking ticket with a missing or obscured sign. Cites SMC 11.72.330 — hearing-ready template for Seattle courts.",
  whenItApplies:
    "You were ticketed for violating a restriction (e.g., a posted no-parking/no-stopping zone, a time limit, a restricted parking zone, or pay-to-park signage) but the official sign governing that restriction was missing, knocked down, obscured, or illegible at the time and place of the violation.",
  body: `To: Seattle Municipal Court
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny committing this infraction and request that it be dismissed following a contested hearing.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the official sign governing that restriction was [DESCRIBE THE DEFECT — missing entirely, knocked down, obscured by foliage or a parked vehicle, or illegible due to damage or fading]. I am not disputing that I failed to notice a sign — I am asserting that no properly posted, legible sign existed at that location to establish the restriction I am accused of violating.

Under SMC 11.72.330, stopping, standing, or parking is prohibited only "at any place or time where official signs prohibit" it, and the pay-to-park payment requirement in SMC 11.76.005/11.76.015 is likewise tied to a blockface controlled by pay-to-park signage. Because the controlling sign was not properly posted or legible at the time and place cited, an element of this infraction is not established. At a contested hearing under SMC 11.31.060, the City bears the burden of proving this infraction by a preponderance of the evidence, and I ask that this violation be dismissed on that basis.

Attached: [date- and time-stamped photos of the block/curb area showing the sign missing, damaged, or obscured; wide-shot photos establishing my exact parking location by cross streets, adjacent addresses, and curb markings; and any report I filed with SDOT about the missing or damaged sign].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photos of the block/curb area showing the sign missing, damaged, obscured by foliage or vehicles, or illegible",
    "Wide-shot photos establishing your exact location (cross streets, adjacent addresses, curb markings) to corroborate where you were parked",
    "Any report you filed with SDOT about the missing or damaged sign",
  ],
  cityNotes:
    "Most SMC Title 11 parking restrictions are expressly defined by reference to official signage: SMC 11.72.330 prohibits stopping, standing, or parking only 'at any place or time where official signs prohibit' it, and the pay-to-park payment requirement in SMC 11.76.005/11.76.015 is likewise tied to a blockface 'controlled by pay-to-park signage.' If the controlling sign was not actually posted or legible, an element of the violation is not established. This can be raised at a contested hearing under SMC 11.31.060, where the City bears the burden of proving the infraction by a preponderance of the evidence.",
  codeCite: {
    label: "SMC 11.72.330 - Posted signs",
    citation: "SMC 11.72.330",
    url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.72STSTPARE_11.72.330POSI",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SMC 11.72.330 - Posted signs (Municode)",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.72STSTPARE_11.72.330POSI",
    },
    {
      label: "SMC 11.31.060 - Hearing; contesting determination; burden of proof on the City",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense in Seattle?",
      answer:
        "Not on its own. The point of this defense isn't that you missed the sign — it's that no properly posted, legible sign existed to establish the restriction in the first place. Photograph the actual defect: missing, knocked down, obscured, or illegible.",
    },
    {
      question: "What photos actually help here?",
      answer:
        "Photograph the block/curb area showing the sign's condition, plus wide shots that establish exactly where you were parked (cross streets, adjacent addresses, curb markings), so the court can confirm your location matched the missing or defective sign.",
    },
    {
      question: "The sign was there but blocked by a tree or a parked truck — does that count?",
      answer:
        "It can, if you can show the obstruction made the sign illegible or unreadable from a normal parking position at the time you parked. Photograph the obstruction as it existed then, not after it may have moved.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "seattle",
  title: "Fight a Seattle parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a Seattle parking ticket issued despite valid payment. Cites SMC 11.76.005 — hearing-ready template for Seattle courts.",
  whenItApplies:
    "You paid for parking - at a pay station, via PayByPhone, or by properly displaying a receipt - but were ticketed anyway, e.g., the citation was issued in error, payment wasn't recognized by enforcement equipment, or the ticket misstates the blockface/time you actually paid for.",
  body: `To: Seattle Municipal Court
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny committing this infraction and request that it be dismissed following a contested hearing.

On [DATE], I paid for parking at [LOCATION] through [PAYMENT METHOD — pay station / PayByPhone / displayed receipt]. My receipt/transaction record shows payment at [PAYMENT TIME] on that same blockface, covering the time this citation states the violation occurred, [VIOLATION TIME]. I had valid, paid-for parking at the location and time cited on this ticket.

Under SMC 11.76.005, proper payment is made by any one of: (A) valid payment made at a parking payment device, (B) correctly providing the required information such as a space or plate number, or (C) taking the required action, such as properly displaying a receipt. I satisfied at least one of these, which is a complete defense to a pay-to-park violation charged under SMC 11.76.015. I ask that this violation be dismissed on that basis.

Attached: [payment receipt or PayByPhone transaction confirmation showing date, time, license plate, and location; photo of any displayed paper receipt; and a side-by-side comparison of my payment record's time/location against the ticket's stated time/location].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Payment receipt or PayByPhone transaction confirmation showing date, time, license plate, and location",
    "Photo of the displayed paper receipt on your dashboard, if applicable",
    "A side-by-side comparison of the payment record's time/location against the ticket's stated time/location",
  ],
  cityNotes:
    "SMC 11.76.005 defines proper payment as any one of: (A) valid payment made at a parking payment device, (B) required information (e.g., space or plate number) correctly provided, or (C) required action taken as directed, such as proper display of a receipt. Satisfying any one of these is a defense to a pay-to-park violation charged under SMC 11.76.015. Note SMC 11.76.015.D: payment made on a parking payment device is valid only for the specific blockface, or portion thereof, on which the vehicle is parked - payment at a different block does not count.",
  codeCite: {
    label: "SMC 11.76.005 - Proper payment",
    citation: "SMC 11.76.005",
    url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "SMC 11.76.005 / 11.76.015 - Proper payment; pay-to-park violations (Municode)",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
    },
  ],
  faqs: [
    {
      question: "Does it matter which of the three payment methods I used?",
      answer:
        "No. SMC 11.76.005 treats valid device payment, correctly providing the required space/plate number, and properly displaying a receipt as three independent ways to satisfy proper payment. Any one of them is a complete defense.",
    },
    {
      question: "My pay-station receipt is for the block next door — does that still count?",
      answer:
        "No. Under SMC 11.76.015.D, payment made on a parking payment device is only valid for the specific blockface (or portion of it) where your vehicle is actually parked. Payment at a different block will not satisfy this defense.",
    },
    {
      question: "What if the citing officer's handheld device didn't show my payment?",
      answer:
        "That's common and doesn't defeat the defense — bring your own receipt or PayByPhone confirmation as independent proof of payment, and note the discrepancy between the enforcement record and your own payment record in your written statement.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "seattle",
  title: "Fight a defective parking ticket in Seattle (missing or wrong details)",
  metaDescription:
    "Free defense-statement letter for a defective Seattle parking ticket with missing or incorrect required fields. Cites IRLJ 2.1 — hearing-ready template.",
  whenItApplies:
    "The Notice of Infraction is missing required information, or a required field - vehicle description, license plate/state, the statutory or ordinance citation, the date, time, or place, or the citing officer's name/number - is incorrect or illegible.",
  body: `To: Seattle Municipal Court
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny committing this infraction and request that it be dismissed following a contested hearing.

This Notice of Infraction is defective. Specifically, the [FIELD — e.g., vehicle make/year/model/style, license plate/state, statutory or ordinance citation, date, time, place, or citing officer's name/number] printed on the notice is [DESCRIBE THE DEFECT — missing, illegible, or incorrect]. Comparing the notice against my vehicle registration, the correct information is: [CORRECT INFORMATION]. This is not a trivial typo — it goes to [EXPLAIN WHY IT PREJUDICES YOU — e.g., I could not identify which statute or ordinance I was accused of violating, the vehicle described does not match mine, or I could not determine the date, time, or location of the alleged violation].

Under IRLJ 2.1(b), a Notice of Infraction for a parking, standing, or stopping infraction must state the vehicle make, year, model, style, license number and state; the infraction alleged and its accompanying statutory or ordinance citation; and the date, time, and place the infraction occurred. IRLJ 2.1(a) presumes notices valid and does not require dismissal for defects that do not prejudice a defendant's substantial rights — but the defect described above did prejudice my ability to know what I am accused of and to prepare a defense against it. I ask that this violation be dismissed on that basis.

Attached: [a copy or photo of the actual notice showing the defective field, my vehicle registration showing the correct information, and a comparison against IRLJ 2.1(b)'s list of required notice contents].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual ticket showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration, to compare the correct make, year, model, style, license number, and state against what's on the ticket",
    "A comparison against IRLJ 2.1(b)'s list of required notice contents to identify exactly which required field is missing or wrong, and whether the error actually affects your ability to understand or contest the charge",
  ],
  cityNotes:
    "Notice-content requirements come from Washington's statewide Infraction Rules for Courts of Limited Jurisdiction (IRLJ), not a standalone SMC section. IRLJ 2.1(b)(3)-(4) requires (for a parking/standing/stopping infraction) the vehicle make, year, model, style, license number and state; the infraction alleged and its accompanying statutory citation or ordinance number; and the date, time, and place the infraction occurred. Important: unlike some cities, Washington's standard is not strict-liability for any defect. IRLJ 2.1(a) states notices 'are presumed valid and shall not be deemed insufficient by reason of defects or imperfections which do not prejudice substantial rights of the defendant' - so a minor typo alone will usually not get a ticket dismissed. The error has to actually prejudice your ability to know what you're accused of or to defend yourself (e.g., an entirely wrong plate/vehicle, wrong date, or no code section cited at all).",
  codeCite: {
    label: "IRLJ 2.1 - Notice of Infraction (required contents; presumed validity of defects)",
    citation: "IRLJ 2.1",
    url: "https://www.courts.wa.gov/court_rules/pdf/IRLJ/CLJ_IRLJ_02_01_00.pdf",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Washington State Courts - IRLJ 2.1, Notice of Infraction",
      url: "https://www.courts.wa.gov/court_rules/pdf/IRLJ/CLJ_IRLJ_02_01_00.pdf",
    },
    {
      label: "SMC 11.31.040 - Notice of traffic infraction; determination; response",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
  ],
  faqs: [
    {
      question: "Is any typo on a Seattle parking ticket enough to get it dismissed?",
      answer:
        "No. Unlike some cities, Washington's IRLJ 2.1(a) presumes notices valid and does not require dismissal for defects that don't prejudice your substantial rights. The error has to actually interfere with your ability to know what you're accused of or to defend yourself — a minor formatting slip usually won't be enough on its own.",
    },
    {
      question: "What counts as a required element on a Seattle Notice of Infraction?",
      answer:
        "IRLJ 2.1(b) requires the vehicle make, year, model, style, license number and state; the infraction alleged and its statutory or ordinance citation; and the date, time, and place the infraction occurred. Check your notice against this list to identify which field is defective.",
    },
    {
      question: "What if the vehicle described on the ticket doesn't match mine at all?",
      answer:
        "That's a strong version of this defense — a wrong vehicle description, wrong plate, or missing statutory citation goes directly to whether you can even tell what you're accused of, which is exactly the kind of prejudice IRLJ 2.1 is concerned with. Attach your registration alongside the defective notice.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "seattle",
  title: "Fight a Seattle parking ticket for a sold vehicle or identity theft",
  metaDescription:
    "Free defense-statement letter for a Seattle parking ticket on a sold vehicle or fraudulently registered vehicle. Cites SMC 11.31.080 — hearing-ready template.",
  whenItApplies:
    "You were not the person responsible for the vehicle at the time of the violation because you had sold the vehicle - and filed a Report of Sale - before the ticket was issued, or you are the victim of identity theft or fraudulent registration.",
  body: `To: Seattle Municipal Court
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny committing this infraction and request that it be dismissed following a contested hearing.

I was not responsible for the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) Sold vehicle — I sold this vehicle and filed a Report of Sale with the Washington Department of Licensing on [SALE/REPORT DATE], before this citation was issued, as shown by the attached Report of Sale (or notarized bill of sale). / (b) Identity theft or fraudulent registration — I did not register this vehicle and did not authorize anyone to register it in my name, as shown by the attached "Information About False Identification Form" and supporting documentation.]

Under SMC 11.31.080, proof a vehicle was involved in a parking, standing, or stopping violation, together with proof of registered ownership, creates only a rebuttable presumption under RCW 46.63.140 that the registered owner was the person who parked it — it is not conclusive. [FOR SOLD VEHICLES:] Under RCW 46.12.655, a complete Report of Sale releases the seller from responsibility for citations issued after the sale date. I ask that this presumption be rebutted and this violation be dismissed on that basis.

Attached: [a filed Washington DOL Report of Sale, or notarized bill of sale, showing a sale date before this citation's issue date; OR the completed "Information About False Identification Form" and supporting documentation for identity theft].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Sold vehicle: a filed Washington DOL Report of Sale showing a sale date before the ticket's issue date, or (if no Report of Sale was filed) a notarized bill of sale faxed to the court at (206) 684-8726",
    "Identity theft: the completed 'Information About False Identification Form' and supporting documentation submitted through the Seattle City Attorney's identity-theft process",
    "For a judgment already entered based on mistaken identity: a completed 'Declaration: Vacate Judgment Due to Mistaken Identity' filed under IRLJ 6.7",
  ],
  cityNotes:
    "Under RCW 46.63.140 (applied to SMC parking/standing/stopping violations via SMC 11.31.080), proof the vehicle was involved plus proof of registered ownership creates only a rebuttable prima facie presumption that the registered owner was the person who parked it - it is not conclusive. Filing a complete Report of Sale when you sell a vehicle releases you from responsibility for tickets issued after the sale date (RCW 46.12.655), but you remain the registered owner - and presumptively responsible - until the buyer actually titles and registers the vehicle. For a sold-vehicle dispute, contact the court at (206) 684-5600 or email SMC_SoldVehicles@seattle.gov with the plate number/state and ticket number(s); for identity theft, contact the Seattle City Attorney's Criminal Division at (206) 684-7757, and if a judgment already exists use the identity-theft vacate packet under IRLJ 6.7.",
  codeCite: {
    label: "SMC 11.31.080 - Owner responsible for stopping, standing, parking, or alarm violation (rebuttable presumption)",
    citation: "SMC 11.31.080",
    url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Seattle Municipal Court - Bought and Sold Vehicles",
      url: "https://www.seattle.gov/courts/tickets-and-payments/bought-and-sold-vehicles",
    },
    {
      label: "Seattle Municipal Court - Stolen Identity",
      url: "https://www.seattle.gov/courts/tickets-and-payments/stolen-identity",
    },
    {
      label: "RCW 46.63.140 - Presumption regarding stopped, standing, or parked vehicles",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.63.140",
    },
    {
      label: "RCW 46.12.655 - Report of sale releases seller from liability",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.12.655",
    },
  ],
  faqs: [
    {
      question: "I sold the car months ago but never filed a Report of Sale — does that matter?",
      answer:
        "Yes. You remain the registered owner — and presumptively responsible under SMC 11.31.080/RCW 46.63.140 — until the buyer actually titles and registers the vehicle, or until you file a complete Report of Sale. File one now if you haven't, and contact the court at SMC_SoldVehicles@seattle.gov with your plate and ticket number(s).",
    },
    {
      question: "Is the registered-owner presumption automatically conclusive?",
      answer:
        "No. RCW 46.63.140 makes it only a rebuttable prima facie presumption. Proof you sold the vehicle before the citation date, or that you never registered it and didn't authorize its registration, can rebut it.",
    },
    {
      question: "What if a judgment has already been entered against me for a ticket that isn't mine?",
      answer:
        "If the judgment is based on mistaken identity, you can file a 'Declaration: Vacate Judgment Due to Mistaken Identity' under IRLJ 6.7 rather than contesting a still-open citation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const seattleCity: ParkingCity = {
  slug: "seattle",
  city: "Seattle",
  state: "WA",
  agency:
    "Seattle Department of Transportation (SDOT) issues most parking citations (parking payment/pay-to-park, time-limit, signage, and other Title 11 parking infractions). Disputes are adjudicated by the Seattle Municipal Court (SMC) — the same court that hears other traffic infractions — under SMC Title 11, Chapter 11.31 (Disposition of Traffic Offenses). Note: this is a different track from the City's Office of Hearing Examiner, which hears citations from other departments (e.g., SDCI land-use, SDOT street-use, Fire Code) but not parking/traffic infractions.",
  submitOnlineUrl: "https://forms.office.com/g/5P97pMyVki",
  submitMailAddress: "Seattle Municipal Court, PO Box 34987, Seattle, WA 98124-4987",
  submitInPerson:
    "Seattle Municipal Court, 600 5th Avenue, Seattle, WA 98104, Monday-Friday 8 a.m.-5 p.m., closed holidays. Deliver the completed hearing-request portion of the ticket to the court in person, or attend a scheduled contested/mitigation hearing there (2nd or 3rd floor depending on courtroom assignment) or by phone/WebEx video conference.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "SMC 11.31.050.A: 'Any person who receives a notice of traffic infraction shall respond to such notice ... within 30 days of the date of the notice.' The statewide Infraction Rules for Courts of Limited Jurisdiction extend this when the notice itself is mailed: IRLJ 2.1(b)(5) requires the notice to state that a response is due 'within 30 days of the date the notice is personally served or, if the notice is served by mail, within 33 days of the date the notice is mailed.' Seattle Municipal Court's own guidance states the same rule in plain language: 'Hearing requests must be made within 30 days of the date the ticket was issued to you or placed on a vehicle, or 33 days if the ticket was mailed to you.' Source: https://www.seattle.gov/courts/tickets-and-payments/dispute-my-ticket and https://www.courts.wa.gov/court_rules/pdf/IRLJ/CLJ_IRLJ_02_01_00.pdf (IRLJ 2.1(b)(5)).",
  penaltyNote:
    "Parking infractions carry a base monetary penalty set section-by-section in SMC 11.31.121's table (e.g., $65 for Overtime under SMC 11.72.260 or for Pay-to-Park Violations under SMC 11.76.015; $69 for most Posted-Signs/blockface violations under SMC 11.72.330 or for Parking Time Limit under SMC 11.76.020; up to $250 for disabled-parking misuse under SMC 11.72.065/11.23.400), capped at $250 per offense absent a higher penalty specifically provided elsewhere in Title 11 or by state statute (SMC 11.31.120.A). Failing to respond to a Notice of Infraction, failing to appear at a requested hearing, or failing to pay a penalty already imposed adds a flat $25 penalty (SMC 11.31.120.B) and results in notice to the Washington Department of Licensing under RCW 46.20.270, which can block vehicle tab/registration renewal; unpaid tickets can also be referred to collections.",
  municipalCodeRefs: [
    {
      label: "SMC 11.31.050 - Response to notice of traffic infraction; contesting determination; hearing; failure to appear (30-day deadline)",
      citation: "SMC 11.31.050",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF_11.31.050RENOTRINONDEEAAIAP",
    },
    {
      label: "SMC 11.31.060 - Hearing; contesting determination that infraction committed; appeal",
      citation: "SMC 11.31.060",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
    {
      label: "SMC 11.31.070 - Hearings; explanation of mitigating circumstances",
      citation: "SMC 11.31.070",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
    {
      label: "SMC 11.31.080 - Owner responsible for stopping, standing, parking, or alarm violation (rebuttable presumption)",
      citation: "SMC 11.31.080",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
    {
      label: "SMC 11.31.121 - Monetary penalties, parking infractions (base penalty table)",
      citation: "SMC 11.31.121",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
    {
      label: "SMC 11.76.005 - Proper payment (pay-to-park)",
      citation: "SMC 11.76.005",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
    },
    {
      label: "SMC 11.76.015 - Parking violations on blockfaces, or portions thereof, requiring payment to park",
      citation: "SMC 11.76.015",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
    },
    {
      label: "SMC 11.72.330 - Posted signs",
      citation: "SMC 11.72.330",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.72STSTPARE_11.72.330POSI",
    },
  ],
  recognizedDefenses: ["broken-meter", "obscured-signage", "valid-payment", "wrong-ticket-details", "not-my-vehicle"],
  defenses: [broken_meter, obscured_signage, valid_payment, wrong_ticket_details, not_my_vehicle],
  faqs: [
    {
      question: "How long do I have to dispute a Seattle parking ticket?",
      answer:
        "You must request a hearing within 30 days of the date the ticket was issued to you or placed on the vehicle, or 33 days if the ticket was mailed to you. This comes from SMC 11.31.050.A and the statewide IRLJ 2.1(b)(5), and Seattle Municipal Court states the same rule in plain language on its own dispute page.",
    },
    {
      question: "Who decides Seattle parking ticket disputes?",
      answer:
        "SDOT issues most parking citations, but disputes are adjudicated by the Seattle Municipal Court under SMC Title 11, Chapter 11.31 — the same court that hears other traffic infractions. This is a different track from the City's Office of Hearing Examiner, which handles citations from other departments (like SDCI land-use or Fire Code) but not parking or traffic infractions.",
    },
    {
      question: "What's the difference between a mitigation hearing and a contested hearing?",
      answer:
        "In a mitigation hearing, you agree the infraction occurred but explain circumstances that might reduce the penalty — the Magistrate's decision is final with no appeal. In a contested hearing, you deny committing the infraction or deny responsibility for it; the City must prove the infraction by a preponderance of the evidence, and you may appeal an unfavorable decision to King County Superior Court.",
    },
    {
      question: "What happens if I ignore a Seattle parking ticket?",
      answer:
        "Failing to respond to the Notice of Infraction, failing to appear at a requested hearing, or failing to pay an imposed penalty adds a flat $25 penalty under SMC 11.31.120.B and triggers notice to the Washington Department of Licensing under RCW 46.20.270, which can block your vehicle tab or registration renewal. Unpaid tickets can also be referred to collections.",
    },
    {
      question: "Can I appeal a Seattle parking ticket decision?",
      answer:
        "Only a contested-hearing decision can be appealed, to King County Superior Court. Mitigation-hearing decisions and written-statement-in-lieu-of-appearing decisions are final, with no right of appeal.",
    },
  ],
  sources: [
    {
      label: "Seattle Municipal Court - Dispute My Ticket",
      url: "https://www.seattle.gov/courts/tickets-and-payments/dispute-my-ticket",
    },
    {
      label: "Seattle Municipal Court - Ticket Response Options",
      url: "https://www.seattle.gov/courts/tickets-and-payments/ticket-response-options",
    },
    {
      label: "Seattle Municipal Court - Hearings By Mail",
      url: "https://www.seattle.gov/courts/tickets-and-payments/dispute-my-ticket/hearings-by-mail",
    },
    {
      label: "Seattle Municipal Court - Attending Your Scheduled Ticket Hearing",
      url: "https://www.seattle.gov/courts/tickets-and-payments/dispute-my-ticket/attending-your-scheduled-hearing",
    },
    {
      label: "Seattle Municipal Court - Frequently Asked Questions",
      url: "https://www.seattle.gov/courts/tickets-and-payments/frequently-asked-questions",
    },
    {
      label: "Seattle Municipal Court - Bought and Sold Vehicles",
      url: "https://www.seattle.gov/courts/tickets-and-payments/bought-and-sold-vehicles",
    },
    {
      label: "Seattle Municipal Court - Stolen Identity",
      url: "https://www.seattle.gov/courts/tickets-and-payments/stolen-identity",
    },
    {
      label: "Seattle Municipal Court - Hearing Request Form",
      url: "https://forms.office.com/g/5P97pMyVki",
    },
    {
      label: "Seattle Municipal Court Public Portal",
      url: "https://courtrecords.seattle.gov/portal/home",
    },
    {
      label: "SDOT - Pay at a Pay Station",
      url: "https://www.seattle.gov/transportation/projects-and-programs/programs/parking-program/paid-parking-information/pay-at-a-pay-station",
    },
    {
      label: "SDOT - Pay on Your Phone",
      url: "https://www.seattle.gov/transportation/projects-and-programs/programs/parking-program/paid-parking-information/pay-on-your-phone",
    },
    {
      label: "SMC Chapter 11.31 - Disposition of Traffic Offenses (Municode)",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT3EN_CH11.31DITROF",
    },
    {
      label: "SMC Chapter 11.72 - Stopping, Standing or Parking Restrictions (Municode)",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.72STSTPARE",
    },
    {
      label: "SMC Chapter 11.76 - Paid Parking (Municode)",
      url: "https://library.municode.com/wa/seattle/codes/municipal_code?nodeId=TIT11VETR_SUBTITLE_ITRCO_PT7STSTPALO_CH11.76PAPADEOP",
    },
    {
      label: "City of Seattle Ordinance 127141 - 2025 Parking Penalty amendments to SMC 11.31.121",
      url: "https://clerk.seattle.gov/~archives/Ordinances/Ord_127141.pdf",
    },
    {
      label: "Washington State Courts - IRLJ 2.1, Notice of Infraction",
      url: "https://www.courts.wa.gov/court_rules/pdf/IRLJ/CLJ_IRLJ_02_01_00.pdf",
    },
    {
      label: "RCW 46.63.140 - Presumption regarding stopped, standing, or parked vehicles",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.63.140",
    },
    {
      label: "RCW 46.12.655 - Report of sale releases seller from liability",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.12.655",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
