import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/boston.json (verifiedAt 2026-07-20).
// IMPORTANT: Boston's Office of the Parking Clerk both issues/processes tickets AND
// adjudicates the resulting disputes (it designates the "hearing officer" for formal
// administrative hearings under M.G.L. c.90 §20A½). There are TWO distinct addresses in
// this record: an initial ticket dispute/appeal goes to P.O. Box 55800, while a separate
// FORMAL HEARING REQUEST (if the initial dispute is denied) goes to P.O. Box 1626 — see
// submitMailAddress and howToContest below. IMPORTANT: the broken-meter defense is
// NARROW — it applies only to multi-space Pay & Display meters where the driver paid at
// the next available multi-space meter on the block. For traditional single-space
// meters, Boston's rule runs the OPPOSITE way: parking at a single-space meter marked
// "Out of Order" is itself the violation, not an excuse. Every defense statement below is
// addressed to the City of Boston Office of the Parking Clerk.

const cityHowToContest: string[] = [
  "Read the ticket and note the ticket number, plate/registration number, violation code, date, time, and location.",
  "Within 21 days of the ticket's issuance, submit a dispute one of three ways: online via the Parking Ticket Appeal Form at boston.gov/tickets; by mail to City of Boston, P.O. Box 55800, Boston, MA 02205; or in person at the Office of the Parking Clerk, Room 224, Boston City Hall. Every method requires your name and mailing address, the nature of your dispute, your plate/registration number and state, the ticket number(s), and any supporting evidence (e.g. photos, receipts).",
  "Wait for a decision — the Parking Clerk's office typically responds to online and mailed disputes within 7 to 10 business days.",
  "If the dispute is denied, you must either pay the ticket within 10 days or call 617-635-4410 to request a formal administrative hearing before the expiration of the 21-day deadline from the ticket's issuance date (per the Traffic Rules and Regulations, this same 21-day statutory window under M.G.L. c.90 §20A½ governs the hearing request itself).",
  "A hearing request can be made in person at Room 224, by phone, by email, or by mail to City of Boston, P.O. Box 1626, Boston, MA 02105, and must include a brief description of the dispute, the plate/registration number, and the ticket number(s).",
  "The Parking Clerk's office mails written notice of the hearing's date, time, and place. The hearing itself is informal and the rules of evidence do not apply; the hearing officer keeps a record and issues a final written decision.",
  "While a timely hearing request is pending, the ticket is placed on \"suspended\" status and is not subject to further late penalties, booting, or registration/license non-renewal.",
  "If you disagree with the hearing officer's final decision, it is subject to judicial review under M.G.L. c.30A §14 (the Massachusetts Administrative Procedure Act).",
];

const ifThisDoesntWork =
  "If your initial dispute is denied, you must either pay the ticket within 10 days or call 617-635-4410 (or write to City of Boston, P.O. Box 1626, Boston, MA 02105) to request a formal administrative hearing before the 21-day deadline from the ticket's issuance date expires. While a timely hearing request is pending, the ticket is placed on \"suspended\" status and is not subject to further late penalties, booting, or registration/license non-renewal. If you disagree with the hearing officer's final written decision, it is subject to judicial review under M.G.L. c.30A §14 (the Massachusetts Administrative Procedure Act).";

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "boston",
  title: "Fight a wrong-vehicle parking ticket in Boston",
  metaDescription:
    "Free defense-statement letter for a Boston parking ticket issued to the wrong vehicle. Appeal to the Office of the Parking Clerk — mail-ready template.",
  whenItApplies:
    "You were not the owner/operator of the ticketed vehicle at the time of the violation — for example, the car had been sold or transferred before the ticket date, it was stolen, or the plate/vehicle details on the ticket simply don't match a vehicle you own.",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

I was not the owner or operator of the vehicle bearing plate [PLATE] on [DATE], the date this ticket was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I had sold or transferred the vehicle before this date, as shown by the attached bill of sale / RMV transfer paperwork dated before the violation. / (b) The vehicle had been stolen, as shown by the police report I filed on [DATE OF POLICE REPORT]. / (c) The plate, make, or color on this ticket does not match a vehicle I own, as shown by my current vehicle registration/title.]

Under M.G.L. c.90 §20A½, and consistent with the City of Boston's own published dispute process for tickets issued for a vehicle that was not mine at the time of the violation, I ask that this ticket be dismissed on that basis.

Attached: [proof of sale or transfer dated before the violation, or the police report of theft, or my current vehicle registration/title showing the mismatch].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "The ticket number and the plate/registration number, make, and color printed on the ticket, to compare against your own vehicle records",
    "Proof of sale or transfer of the vehicle dated before the violation (bill of sale, RMV transfer paperwork)",
    "A police report, if the vehicle was stolen at the time of the violation",
    "Your current vehicle registration/title, if it shows you are not (or were not) the registered owner",
  ],
  cityNotes:
    "Boston.gov's Parking Ticket FAQs confirm \"wrong vehicle\" disputes are handled through the same general appeal channel (boston.gov/tickets, mail, or in person) by submitting evidence that the vehicle wasn't yours; there is no separate numbered municipal-code section specific to this ground. Notices and hearing correspondence are directed to the registered owner of record (M.G.L. c.90 §20A½; Traffic Rules and Regulations Art. IV §17), so the dispute is decided on that basis.",
  codeCite: {
    label: "M.G.L. c.90 §20A½ — Adjudication by mail / hearing procedure (general dispute mechanism)",
    citation: "Mass. Gen. Laws ch. 90, § 20A½",
    url: "https://malegislature.gov/laws/generallaws/parti/titlexiv/chapter90/section20a1~2",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Boston.gov — Parking Ticket FAQs",
      url: "https://www.boston.gov/departments/parking-clerk/parking-ticket-faqs",
    },
    {
      label: "Boston.gov — How To Appeal A Parking Ticket",
      url: "https://www.boston.gov/departments/parking-clerk/how-appeal-parking-ticket",
    },
  ],
  faqs: [
    {
      question: "Do I need a police report if my car was stolen?",
      answer:
        "Yes — attach a police report showing the vehicle was reported stolen at the time of the violation. It's one of the evidence items the Parking Clerk's office looks for on a wrong-vehicle dispute.",
    },
    {
      question: "Is there a specific Boston code section for \"not my vehicle\" disputes?",
      answer:
        "No. Boston.gov's Parking Ticket FAQs confirm this ground is handled through the same general appeal channel — online, by mail, or in person — by submitting evidence the vehicle wasn't yours, rather than through a separate numbered municipal-code section.",
    },
    {
      question: "Who does the Parking Clerk's office send ticket and hearing notices to?",
      answer:
        "The registered owner of record, per M.G.L. c.90 §20A½ and Traffic Rules and Regulations Art. IV §17. If you're no longer the registered owner, documentation of the transfer date is your key evidence.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "boston",
  title: "Fight a defective parking ticket in Boston (missing or wrong details)",
  metaDescription:
    "Free defense-statement letter for a defective Boston parking ticket with missing or incorrect required fields. Cites M.G.L. c.90 §20A — mail-ready template.",
  whenItApplies:
    "The ticket itself is missing a legally required field, or a required field is illegible or incorrect — e.g. wrong plate number, wrong vehicle make/color, wrong date/time/location, or (for a meter violation) the wrong meter number.",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

This ticket is defective. Specifically, the [FIELD — e.g., plate number / vehicle make or color / date / time / location / meter number] printed on the ticket is [DESCRIBE THE DEFECT — missing, illegible, or incorrect]. Comparing the ticket against my vehicle registration/title, the correct information is: [CORRECT INFORMATION].

Under M.G.L. c.90 §20A, a Boston parking-violation notice is required to state the vehicle's make, color, and registration number and state; the date, time, and place of the violation; the specific violation charged; the meter number, if applicable; and the issuing officer's name/badge and division. The notice issued to me fails to meet that requirement because [DESCRIBE THE DEFECT AGAIN]. I ask that this ticket be dismissed on that basis.

Attached: [a copy or photo of the actual ticket showing the defective field, and a copy of my vehicle registration or title showing the correct information].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A photo or copy of the actual ticket showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration or title, to compare the correct plate number, make, and color against what's on the ticket",
    "A comparison against the elements M.G.L. c.90 §20A requires on every notice (make, color, registration number and state, date, time, place, specific violation charged, meter number if applicable, and the issuing officer's name/badge and division)",
  ],
  cityNotes:
    "M.G.L. c.90 §20A specifies exactly what information a Boston parking-violation notice must contain. Boston's general appeal process (boston.gov/tickets, mail, or in person) is the vehicle for raising a defect in the ticket, by describing \"the nature of your dispute\" and attaching evidence; no separate Boston-specific dismissal clause for defective notices was found (unlike some other cities), so this defense rests on showing the notice doesn't meet §20A's required contents.",
  codeCite: {
    label: "M.G.L. c.90 §20A — Notice of parking violation; required contents",
    citation: "Mass. Gen. Laws ch. 90, § 20A",
    url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section20a",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Boston.gov — How To Appeal A Parking Ticket",
      url: "https://www.boston.gov/departments/parking-clerk/how-appeal-parking-ticket",
    },
  ],
  faqs: [
    {
      question: "What information is a Boston parking ticket legally required to include?",
      answer:
        "Under M.G.L. c.90 §20A, every notice must state the vehicle's make, color, registration number and state, the date, time, and place of the violation, the specific violation charged, the meter number (if applicable), and the issuing officer's name/badge and division.",
    },
    {
      question: "Does Boston have a dismissal rule for defective tickets, like some other cities do?",
      answer:
        "No standalone Boston-specific dismissal clause for defective notices was found. This defense instead rests on showing the notice doesn't meet M.G.L. c.90 §20A's required-contents list, raised through the same general appeal process as any other dispute.",
    },
    {
      question: "Where do I submit this dispute?",
      answer:
        "Through the same general channel as any Boston ticket dispute: online at boston.gov/tickets, by mail to P.O. Box 55800, Boston, MA 02205, or in person at the Office of the Parking Clerk, Room 224, Boston City Hall.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "boston",
  title: "Fight a broken-meter parking ticket in Boston",
  metaDescription:
    "Free defense-statement letter for a Boston multi-space broken-meter parking ticket. Cites Traffic Rules Art. IV §5 — mail-ready appeal template.",
  whenItApplies:
    "You were ticketed for a meter-fee violation on a block regulated by multi-space Pay & Display meters, and the nearest meter to your parking space was out of order, unable to accept payment, or unable to issue a receipt — so you paid at the next available multi-space meter on the same block instead.",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I parked at [LOCATION], a block regulated by multi-space Pay & Display meters. The nearest meter to my parking space was out of order and [DESCRIBE — unable to accept payment / unable to issue a receipt]. Because that meter did not work, I made payment at the next available multi-space meter on the same block, located at [NEXT-AVAILABLE METER LOCATION], at [PAYMENT TIME], as shown by the attached receipt.

Under City of Boston Traffic Rules and Regulations, Art. IV §5, "when parking on a block regulated by multi-space pay & display meters and the nearest meter is out of order, unable to accept payment and/or issue a receipt, payment shall be made at the next available multi-space meter on the block." I did exactly that, and I ask that this ticket be dismissed on that basis.

Attached: [time-stamped photo or video of the malfunctioning meter, the payment receipt or app record from the next available multi-space meter for the ticketed time, and any BOS:311 report I filed for the broken meter].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A timestamped photo or video of the malfunctioning/\"out of order\" meter",
    "A payment receipt or app record from the next available multi-space meter on the same block, for the ticketed time",
    "A BOS:311 service request/report of the broken meter, if one was filed",
  ],
  cityNotes:
    "This defense is narrowly scoped to multi-space Pay & Display meters. The Traffic Rules and Regulations (Art. IV §5, as amended) state: \"When parking on a block regulated by multi-space pay & display meters and the nearest meter is out of order, unable to accept payment and/or issue a receipt, payment shall be made at the next available multi-space meter on the block.\" For traditional single-space meters, Boston's rule runs the opposite way: Art. IV §4(6) states any vehicle parked at a single-space meter displaying \"Out of Order\" \"shall be prohibited, unless otherwise posted\" — parking there at all is its own ticketable violation (\"Meter Violation (Out of Order),\" $25 fine), not an excuse to park for free. So simply claiming \"the meter didn't work\" is not, by itself, a recognized defense for a single-space meter — you must show you paid at the next available meter (multi-space scenario) to prevail.",
  codeCite: {
    label: "City of Boston Traffic Rules and Regulations, Article IV, Section 5 — Multi-Space Meters, General Regulations (¶2, as amended)",
    citation: "City of Boston Traffic Rules and Regulations, Art. IV § 5 (eff. Mar. 1, 2025)",
    url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of Boston Traffic Rules and Regulations (full PDF, eff. 3/1/2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
  ],
  faqs: [
    {
      question: "Does this defense work for a single-space meter marked \"Out of Order\"?",
      answer:
        "No — it's the opposite. Art. IV §4(6) prohibits parking at a single-space meter displaying \"Out of Order\" unless otherwise posted; doing so is its own ticketable \"Meter Violation (Out of Order)\" ($25 fine), not an excuse. This defense applies only on blocks with multi-space Pay & Display meters.",
    },
    {
      question: "What if I couldn't find or reach a second multi-space meter?",
      answer:
        "The rule requires payment at the next available multi-space meter on the block. Without proof you did so, the defense is weaker — document which meter you used and when.",
    },
    {
      question: "Do I need to file a BOS:311 report about the broken meter?",
      answer:
        "It's not required, but a BOS:311 service request or repair report is independent, time-stamped corroboration that the meter was actually out of order, and strengthens the dispute.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "boston",
  title: "Fight a Boston parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a Boston parking ticket issued despite valid payment. Cites Traffic Rules Art. IV §§4–5 — mail-ready appeal template.",
  whenItApplies:
    "You paid for parking — via a muni-meter receipt, Pay-by-Plate, or the ParkBoston app — for the ticketed time and location, but were ticketed anyway (e.g. for \"Meter Fee Unpaid,\" \"Over Meter Limit,\" or \"Not in Metered Space\").",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — muni-meter receipt / Pay-by-Plate / ParkBoston app], as shown by the attached receipt or transaction record covering [PAYMENT TIME] through [EXPIRATION TIME]. That window covers the time this ticket cites, [VIOLATION TIME]. [IF PAY-BY-PLATE: The plate number used for payment, [PLATE], matches the plate on this vehicle and this ticket.]

City of Boston Traffic Rules and Regulations, Art. IV §§4–5 set the payment and receipt-display requirements for single-space and multi-space meters. I met those requirements at the cited time and location, and I ask that this ticket be dismissed on that basis.

Attached: [payment receipt or ParkBoston app transaction/session record showing the date, time, and location matching the ticket; a photo of the displayed Pay & Display receipt, if applicable].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A payment receipt or ParkBoston app transaction/session record showing the date, time, and location matching the ticket",
    "A photo of the paid receipt as displayed on the curbside window or dashboard, if a Pay & Display receipt was issued",
    "Confirmation that the plate number used for payment (Pay-by-Plate) matches your vehicle's plate",
  ],
  cityNotes:
    "The Traffic Rules and Regulations set the underlying payment/receipt-display obligations for both single-space and multi-space meters (Art. IV §§4–5); proof you satisfied that obligation for the ticketed time is the basis for disputing the violation. Boston's general appeal process (boston.gov/tickets, mail, or in person) is the channel for submitting this evidence — there is no separate numbered \"valid payment\" defense section distinct from the underlying payment-method rules.",
  codeCite: {
    label: "City of Boston Traffic Rules and Regulations, Article IV, Sections 4–5 — Parking Meters; Multi-Space Meters (payment and receipt-display requirements)",
    citation: "City of Boston Traffic Rules and Regulations, Art. IV §§ 4–5 (eff. Mar. 1, 2025)",
    url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Boston.gov — How Do Parking Meters Work?",
      url: "https://www.boston.gov/departments/parking-clerk/how-do-parking-meters-work",
    },
    {
      label: "City of Boston Traffic Rules and Regulations (full PDF, eff. 3/1/2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
  ],
  faqs: [
    {
      question: "I paid but was ticketed for \"Not in Metered Space\" — does this defense still apply?",
      answer:
        "Yes. This defense covers any ticket issued despite valid payment — including \"Meter Fee Unpaid,\" \"Over Meter Limit,\" or \"Not in Metered Space\" — as long as your receipt or app record matches the ticketed time and location.",
    },
    {
      question: "Does a ParkBoston app transaction record count as proof of payment?",
      answer:
        "Yes. A ParkBoston app transaction or session record showing the date, time, and location is treated the same as a muni-meter receipt for this dispute.",
    },
    {
      question: "Is there a separate Boston code section specifically for \"valid payment\" disputes?",
      answer:
        "No. There's no numbered defense section distinct from the underlying payment rules — the dispute rests on the payment and receipt-display requirements in Art. IV §§4–5, submitted through Boston's general appeal process.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_vehicle: ParkingDefense = {
  slug: "disabled-vehicle",
  citySlug: "boston",
  title: "Fight a Boston parking ticket for a disabled vehicle",
  metaDescription:
    "Free defense-statement letter for a Boston parking ticket issued while your car was disabled and awaiting a tow — mail-ready appeal template.",
  whenItApplies:
    "Your car became mechanically disabled while parked or stopped, and you were ticketed while it sat waiting for or arranging a tow.",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

On [DATE], my vehicle became mechanically disabled while parked/stopped at [LOCATION]: [DESCRIBE THE FAILURE]. I was ticketed while the vehicle sat waiting for, or being arranged for, a tow. The vehicle was towed on [TOW DATE/TIME] by [TOW COMPANY NAME], as shown by the attached tow receipt.

Under M.G.L. c.90 §20A½, and consistent with the City of Boston's own published guidance addressing tickets issued to a disabled vehicle awaiting a tow, I ask that this ticket be dismissed on that basis.

Attached: [tow receipt matching the date of the ticket, showing the location and plate number].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A tow receipt that matches the date of the ticket",
    "The location and plate number matching the ticket",
    "An email/contact address for the Parking Clerk's office to follow up, as requested on the appeal form",
  ],
  cityNotes:
    "Boston-specific extra (not one of the six canonical slugs). Boston.gov's Parking Ticket FAQs directly answer \"Why am I getting a ticket when my car was disabled and was waiting for a tow?\" by describing this evidence checklist and directing the appeal through boston.gov/tickets or in person. No separate numbered municipal-code section for this ground was found; it is handled through the same general dispute/appeal mechanism as other grounds.",
  codeCite: {
    label: "M.G.L. c.90 §20A½ — Adjudication by mail / hearing procedure (general dispute mechanism)",
    citation: "Mass. Gen. Laws ch. 90, § 20A½",
    url: "https://malegislature.gov/laws/generallaws/parti/titlexiv/chapter90/section20a1~2",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Boston.gov — Parking Ticket FAQs (\"Why am I getting a ticket when my car was disabled and was waiting for a tow?\")",
      url: "https://www.boston.gov/departments/parking-clerk/parking-ticket-faqs",
    },
  ],
  faqs: [
    {
      question: "Is there a specific Boston code section for a disabled-vehicle ticket?",
      answer:
        "No. Boston.gov's Parking Ticket FAQs directly address this scenario, and it's handled through the same general dispute/appeal mechanism as other grounds — there's no separate numbered municipal-code section for it.",
    },
    {
      question: "What evidence does the Parking Clerk's office ask for?",
      answer:
        "A tow receipt matching the date of the ticket, the location and plate number matching the ticket, and a contact email for the Parking Clerk's office to follow up, as requested on the appeal form.",
    },
    {
      question: "Where do I submit this dispute?",
      answer:
        "Through Boston's general appeal channel — online at boston.gov/tickets, by mail to P.O. Box 55800, Boston, MA 02205, or in person at Room 224, Boston City Hall.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disability_placard_exemption: ParkingDefense = {
  slug: "disability-placard-exemption",
  citySlug: "boston",
  title: "Fight a Boston parking ticket with a disability placard exemption",
  metaDescription:
    "Free defense-statement letter for a Boston parking ticket that ignores a disability placard exemption. Cites Traffic Rules Art. IV §4 — mail-ready template.",
  whenItApplies:
    "You are the registered holder of a disabled-veteran plate, disabled plate, or disability placard, and were ticketed for exceeding a posted meter or parking time limit — those time limits do not apply to you — or you were ticketed while properly parked in a designated accessible (HP-DV) space or at a meter without paying.",
  body: `To: City of Boston Office of the Parking Clerk
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am disputing this ticket and, if necessary, requesting a hearing before the Office of the Parking Clerk. I respectfully request that it be dismissed.

I am the registered holder of a [DISABLED VETERAN PLATE / DISABLED PLATE / DISABILITY PLACARD], number [PLACARD/PLATE NUMBER]. At the time of this ticket, on [DATE] at [TIME], my placard was properly displayed on the rearview mirror [OR: my disabled plate was on the vehicle], as shown in the attached photo. I was ticketed for [DESCRIBE VIOLATION — exceeding a posted meter or time limit / parking at a meter without paying / parking in a designated accessible space], but that restriction does not apply to me as a disabled veteran/disabled plate/disabled placard vehicle.

Under City of Boston Traffic Rules and Regulations, Art. IV §4, "the time limits imposed by this section shall not apply to disabled veteran/disabled plate/disabled placard vehicles, as defined." I ask that this ticket be dismissed on that basis.

Attached: [photo of the valid disability placard displayed on the rearview mirror (or disabled plate on the vehicle) at the time of the ticket, RMV documentation of the placard or plate registration, and a photo of the ticket and the posted time-limit sign or meter showing the violation charged].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A photo showing the valid disability placard displayed on the rearview mirror (or disabled plate on the vehicle) at the time of the ticket",
    "RMV documentation of the placard or plate registration",
    "A photo of the ticket and the posted time-limit sign or meter showing the violation charged",
  ],
  cityNotes:
    "Boston-specific extra. The Traffic Rules and Regulations (Art. IV §4, ¶5) state: \"The time limits imposed by this section shall not apply to disabled veteran/disabled plate/disabled placard vehicles, as defined.\" Boston.gov's Parking Ticket FAQs separately confirm placard holders \"may park in designated accessible spaces (HP-DV), at meters, and over time limits without fees, provided the placard is displayed on the rearview mirror.\"",
  codeCite: {
    label: "City of Boston Traffic Rules and Regulations, Article IV, Section 4 — Parking Meters, General Regulations (¶5: time-limit exemption for disabled veteran/disabled plate/disabled placard vehicles)",
    citation: "City of Boston Traffic Rules and Regulations, Art. IV § 4 (eff. Mar. 1, 2025)",
    url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Boston.gov — Parking Ticket FAQs (\"Where can I park with my disability placard?\")",
      url: "https://www.boston.gov/departments/parking-clerk/parking-ticket-faqs",
    },
    {
      label: "City of Boston Traffic Rules and Regulations (full PDF, eff. 3/1/2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
  ],
  faqs: [
    {
      question: "Where can placard holders park in Boston without a ticket?",
      answer:
        "Boston.gov's Parking Ticket FAQs confirm placard holders may park in designated accessible spaces (HP-DV), at meters, and over posted time limits without fees, provided the placard is displayed on the rearview mirror.",
    },
    {
      question: "Does the exemption cover meter fees, not just time limits?",
      answer:
        "Yes. Boston.gov's FAQs state placard holders may park at meters without paying fees, in addition to being exempt from posted time limits, as long as the placard is properly displayed.",
    },
    {
      question: "Which section of the Traffic Rules and Regulations covers this exemption?",
      answer:
        "Art. IV §4, ¶5, which states the time limits in that section \"shall not apply to disabled veteran/disabled plate/disabled placard vehicles, as defined.\"",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const bostonCity: ParkingCity = {
  slug: "boston",
  city: "Boston",
  state: "MA",
  agency:
    "City of Boston Office of the Parking Clerk (a division within the Boston Transportation Department). The Parking Clerk collects and mediates disputes of parking-ticket fines and fees, and also serves as (or designates) the \"hearing officer\" who adjudicates formal administrative hearings under M.G.L. c.90 §20A½ — so the same office both issues/processes tickets and adjudicates the resulting dispute. Enforcement/ticketing itself is carried out by Boston Transportation Department traffic officers and the Boston Police Department.",
  submitOnlineUrl: "https://www.boston.gov/tickets",
  submitMailAddress:
    "City of Boston, P.O. Box 55800, Boston, MA 02205 (initial ticket dispute/appeal). A separate formal hearing request under the Traffic Rules and Regulations may instead be mailed to: City of Boston, P.O. Box 1626, Boston, MA 02105.",
  submitInPerson:
    "Office of the Parking Clerk, 1 City Hall Square, Room 224, Boston, MA 02201. Office hours Monday–Friday, 8:30 a.m.–4:30 p.m. Administrative hearings are held Monday–Friday, 9 a.m.–4 p.m. Walk-in hearings (without a prior appointment) are generally only available same-day to disabled-veteran/disabled-plate/disabled-placard registered owners, or to owners whose vehicle was towed for a public-safety violation within the last 5 days; otherwise a hearing must be requested first by phone (617-635-4410), email, mail, or in person. A video-call hearing (via OPCVideoChat@boston.gov) is available for out-of-state/out-of-country residents, disability/handicap-placard holders, and people over 65.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote:
    "\"From the date you receive the ticket, you have 21 days to pay or appeal the ticket\" (Boston.gov, Parking Ticket FAQs). This matches the underlying statute: M.G.L. c.90 §20A½ requires the violation notice to direct the person to appear \"not later than twenty-one days after the date of such violation,\" and the City of Boston Traffic Rules and Regulations (Article IV-B, Section 1, quoting Chapter 190 of the Acts of 1982) states a hearing must be requested \"before the expiration of the twenty-first day from the date of issuance of said parking violation notice.\" Separately, the Traffic Rules and Regulations (Article IV-B, Section 2, ¶2) also allow the Office of the Parking Clerk to schedule a hearing on any request received within 45 days of the first mail notice, and that window can be extended further if the ticket notice was not mailed to the address on file with the RMV or provided by the owner.",
  penaltyNote:
    "Late penalties vary by violation type per the City of Boston Traffic Rules and Regulations Schedule of Fines: a ticket that remains unpaid 21 days after issuance is assessed an additional late fee on top of the base fine (e.g., an extra $11 added to a $35 fine, an extra $8 added to a $25 fine, an extra $5 added to a $15 fine — the schedule runs from $5 to $40 depending on the specific violation). Five or more overdue/unpaid parking tickets place a vehicle on the City's boot list (Boston.gov FAQs); recovering a booted vehicle requires paying the outstanding tickets plus a $90 immobilization charge (Traffic Rules and Regulations, Art. IV §17), with the boot removed within about 90 minutes of payment. If an unpaid ticket is forwarded to the Massachusetts Registry of Motor Vehicles for non-renewal of the registered owner's license or vehicle registration, an additional $20 fee is assessed under M.G.L. c.90 §20A½ (as amended by St.1992, c.153, §22). A parking ticket for which a timely hearing request is pending is placed on \"suspended\" status and is not eligible for further late penalties, booting, or license/registration non-renewal while pending (Traffic Rules and Regulations, Art. IV-B §2(5)).",
  municipalCodeRefs: [
    {
      label: "M.G.L. c.90 §20A½ — Cities of Boston and Cambridge; parking violations; appearance; adjudication by mail; hearings",
      citation: "Mass. Gen. Laws ch. 90, § 20A½",
      url: "https://malegislature.gov/laws/generallaws/parti/titlexiv/chapter90/section20a1~2",
    },
    {
      label: "M.G.L. c.90 §20A — Notice of parking violation; required contents; procedure",
      citation: "Mass. Gen. Laws ch. 90, § 20A",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section20a",
    },
    {
      label: "City of Boston Traffic Rules and Regulations, Article IV-B — Administrative Hearings",
      citation: "City of Boston Traffic Rules and Regulations, Art. IV-B (eff. Mar. 1, 2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
    {
      label: "City of Boston Traffic Rules and Regulations, Article IV, Sections 4–5 — Parking Meters; Multi-Space Meters",
      citation: "City of Boston Traffic Rules and Regulations, Art. IV §§ 4–5 (eff. Mar. 1, 2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
  ],
  recognizedDefenses: [
    "not-my-vehicle",
    "wrong-ticket-details",
    "broken-meter",
    "valid-payment",
    "disabled-vehicle",
    "disability-placard-exemption",
  ],
  defenses: [
    not_my_vehicle,
    wrong_ticket_details,
    broken_meter,
    valid_payment,
    disabled_vehicle,
    disability_placard_exemption,
  ],
  faqs: [
    {
      question: "How long do I have to dispute a Boston parking ticket?",
      answer:
        "21 days from the date you receive the ticket, to pay or appeal it. That same 21-day window, running from the ticket's issuance date, also governs a formal hearing request under M.G.L. c.90 §20A½ if your initial dispute is denied.",
    },
    {
      question: "What happens if I miss the 21-day deadline?",
      answer:
        "A ticket left unpaid 21 days after issuance is assessed an additional late fee on top of the base fine. Five or more overdue tickets place a vehicle on the City's boot list, and an unpaid ticket forwarded to the RMV for non-renewal of your license or registration adds a further $20 fee.",
    },
    {
      question: "Does requesting a hearing stop late penalties while it's pending?",
      answer:
        "Yes. While a timely hearing request is pending, the ticket is placed on \"suspended\" status and is not subject to further late penalties, booting, or registration/license non-renewal.",
    },
    {
      question: "What if I disagree with the hearing officer's decision?",
      answer:
        "The final written decision is subject to judicial review under M.G.L. c.30A §14, the Massachusetts Administrative Procedure Act.",
    },
    {
      question: "Do I mail my dispute to the same address as a formal hearing request?",
      answer:
        "No — they're different. An initial ticket dispute/appeal goes to City of Boston, P.O. Box 55800, Boston, MA 02205. A formal hearing request, made if that initial dispute is denied, goes to City of Boston, P.O. Box 1626, Boston, MA 02105 (or by phone, email, or in person at Room 224).",
    },
  ],
  sources: [
    {
      label: "Boston.gov — Parking Clerk (department landing page)",
      url: "https://www.boston.gov/departments/parking-clerk",
    },
    {
      label: "Boston.gov — How To Appeal A Parking Ticket",
      url: "https://www.boston.gov/departments/parking-clerk/how-appeal-parking-ticket",
    },
    {
      label: "Boston.gov — Parking Ticket FAQs",
      url: "https://www.boston.gov/departments/parking-clerk/parking-ticket-faqs",
    },
    {
      label: "Boston.gov — Parking Ticket Fines and Codes",
      url: "https://www.boston.gov/departments/parking-clerk/parking-ticket-fines-and-codes",
    },
    {
      label: "Boston.gov — How Do Parking Meters Work?",
      url: "https://www.boston.gov/departments/parking-clerk/how-do-parking-meters-work",
    },
    {
      label: "Boston.gov — Parking Ticket Appeal Portal (boston.gov/tickets)",
      url: "https://www.boston.gov/tickets",
    },
    {
      label: "Boston.gov — City of Boston Traffic Rules and Regulations (landing page)",
      url: "https://www.boston.gov/departments/transportation/city-boston-traffic-rules-and-regulations",
    },
    {
      label: "City of Boston Traffic Rules and Regulations (full PDF, eff. 3/1/2025)",
      url: "https://www.boston.gov/sites/default/files/file/2025/03/City%20of%20Boston%20Traffic%20Rules%20and%20Regulations_03.01.2025.pdf",
    },
    {
      label: "Massachusetts Legislature — M.G.L. c.90 §20A½",
      url: "https://malegislature.gov/laws/generallaws/parti/titlexiv/chapter90/section20a1~2",
    },
    {
      label: "Massachusetts Legislature — M.G.L. c.90 §20A",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXIV/Chapter90/Section20a",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
