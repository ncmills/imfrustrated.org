import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/san-jose.json (verifiedAt 2026-07-20).
// IMPORTANT: San José runs a two-stage California administrative model. Stage 1 is a written
// "Administrative Review" submitted to the City's Office of Parking Violations (online, by
// mail, or in person) — the first-level review that California Vehicle Code §40215 requires
// statewide, and NOT yet an independent tribunal. Only if that Administrative Review is denied
// does the case move to Stage 2: a second-level Administrative Hearing decided by a hearing
// examiner who is statutorily required, under CVC §40215, to be independent of the citation,
// collection, or processing function, and whose compensation cannot be tied to fines collected.
// Further review runs to Santa Clara County Superior Court under CVC §40230. Every defense
// statement below is addressed to the Office of Parking Violations as a first-level written
// Administrative Review request, using San José's own "Administrative Review" terminology —
// not an NYC-style "NOT GUILTY" tribunal plea, and not SFMTA's "protest" terminology.

const cityHowToContest: string[] = [
  "Note your citation number and confirm the violation code, date, time, and location printed on the ticket. Don't let it sit unanswered: the City states a ticket \"must be paid or contested within 21 days,\" and — only as a courtesy, not a deadline extension — a reminder notice is mailed to the registered owner if the ticket is still unresolved after 15 days.",
  "Submit a written initial Administrative Review — the first level of the review process California Vehicle Code §40215 requires statewide — within 21 calendar days of the citation's issue date. Submit online at pticket.com/sanjose, in person at the Office of Parking Violations (210 N. 4th St., Suite 150, San José, CA 95112), or by mail to City of San José, P.O. Box 11023, San José, CA 95103-1023. Describe why the citation should be dismissed and include any supporting documentation — there is no fee to request this level of review.",
  "Wait for the Administrative Review decision, which is mailed to you. If the citation is upheld and you want to continue contesting it, CVC §40215 gives you until 21 calendar days after the mailing of that decision to request a second-level Administrative Hearing.",
  "Before an Administrative Hearing can be held, CVC §40215 requires you to deposit the amount of the parking penalty with the processing agency. The agency must have a written procedure letting a person who is indigent request a hearing without paying first, on satisfactory proof of inability to pay.",
  "The Administrative Hearing is decided by an examiner who, under CVC §40215, cannot be employed, managed, or controlled by anyone whose primary duties are parking enforcement, citation processing, collection, or issuance — and whose continued employment, evaluation, compensation, and benefits cannot be linked, directly or indirectly, to the amount of fines collected.",
  "If the Administrative Hearing decision is against you, CVC §40230 lets you seek de novo review in Santa Clara County Superior Court: file a notice of appeal within 30 calendar days of the mailing or personal delivery of the final decision and pay the filing fee set under Government Code §70615 (the fee is reimbursed to you by the processing agency if the court rules in your favor).",
];

const ifThisDoesntWork =
  "If your Administrative Review is denied, CVC §40215 gives you 21 calendar days from the mailing of that decision to request a second-level Administrative Hearing. Before the hearing can be held, you must deposit the amount of the parking penalty with the agency (waivable on satisfactory proof of indigency). The Administrative Hearing is decided by an examiner who, under CVC §40215, cannot be employed, managed, or controlled by anyone whose primary duties are parking enforcement, citation processing, collection, or issuance, and whose compensation cannot be linked, directly or indirectly, to fines collected. If the Administrative Hearing decision is against you, CVC §40230 lets you seek de novo review in Santa Clara County Superior Court: file a notice of appeal within 30 calendar days of the mailing or personal delivery of the final decision and pay the filing fee set under Government Code §70615 (reimbursed to you by the processing agency if the court rules in your favor).";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "san-jose",
  title: "Fight a broken-meter parking ticket in San Jose",
  metaDescription:
    "Free Administrative Review statement for a broken-meter parking ticket in San Jose. Cites CVC §22508.5 on inoperable meters — mail-ready City of San José template.",
  whenItApplies:
    "You were cited for an expired or unpaid meter, but the parking meter or off-street pay station physically could not accept payment in any form, or could not register that a payment had been made.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter or pay station serving that space, meter/space/pole number [METER, SPACE, OR POLE NUMBER, IF VISIBLE]. The meter could not accept payment in any form: [DESCRIBE — e.g., blank or error display, rejected coins, rejected credit/debit card, no functioning screen or slot]. I tried [LIST EVERY PAYMENT METHOD ATTEMPTED], and each one failed.

San José Municipal Code §11.40.390 makes payment of the posted meter charge a condition of parking in a metered space, but the excuse for nonpayment when a meter is broken comes from state law. Under California Vehicle Code §22508.5, a vehicle may park up to the posted time limit at a meter or payment center that is "inoperable," meaning it "cannot accept payment in any form or cannot register that a payment in any form has been made," and a local authority "shall not issue a citation for nonpayment of parking fees" in that situation. Because the meter at this location was inoperable within the meaning of that statute, I ask that this citation be dismissed.

Attached: [time-stamped photo(s) of the meter's or pay station's error message or inoperable slot, a description of every payment method attempted and how each one failed, the meter/space/pole number, and any City service request or repair report I filed for this meter].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the meter's or pay station's error message, blank screen, or inoperable slot",
    "A description of every payment method you tried (coins, credit/debit card, the parking app) and exactly how each one failed",
    "The meter number, space number, or pole number, if visible in your photos",
    "Any City service request or repair report you filed for that meter, if applicable",
  ],
  cityNotes:
    "San José Municipal Code §11.40.390 makes payment of the posted meter charge (by coin or another authorized method) a condition of parking in a metered space, but does not itself excuse nonpayment when the meter is broken — the excuse comes from state law. Under California Vehicle Code §22508.5, a vehicle may park up to the posted time limit at a meter or payment center that is \"inoperable,\" meaning it \"cannot accept payment in any form or cannot register that a payment in any form has been made,\" and a local authority \"shall not issue a citation for nonpayment of parking fees\" in that situation. A meter that still accepts some, but not all, payment types is not \"inoperable\" under this definition.",
  codeCite: {
    label: "CVC §22508.5 — Inoperable parking meters and payment centers",
    citation: "Cal. Veh. Code § 22508.5",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "California Legislative Information — CVC §22508.5 (inoperable meters)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
    },
    {
      label: "San Jose Municipal Code §11.40.390 — Payment of meter charges",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME_PT3GE_11.40.390PAMECH",
    },
  ],
  faqs: [
    {
      question: "Is it enough that the meter didn't take my card?",
      answer:
        "Only if the meter was truly inoperable — CVC §22508.5 defines that as a meter that cannot accept payment in any form, or cannot register that payment was made. A meter that still takes coins but rejected your card is not \"inoperable\" under the statute. Try, and document, every payment method the meter accepts.",
    },
    {
      question: "Where do I submit this Administrative Review request?",
      answer:
        "Online at pticket.com/sanjose, in person at the Office of Parking Violations (210 N. 4th St., Suite 150, San José, CA 95112, weekdays 9:00 a.m.–4:00 p.m.), or by mail to City of San José, P.O. Box 11023, San José, CA 95103-1023 — within 21 calendar days of the citation's issue date.",
    },
    {
      question: "Should I file a City service request about the broken meter?",
      answer:
        "It isn't required, but it's independent, time-stamped corroboration that the meter was actually out of service. Attach any repair report or service request you filed for that meter to your Administrative Review.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "san-jose",
  title: "Fight a San Jose parking ticket when you already paid",
  metaDescription:
    "Free Administrative Review statement for a San Jose parking ticket issued despite valid payment. Cites SJMC §11.40.390 — mail-ready City of San José template.",
  whenItApplies:
    "You were cited for an expired-meter or nonpayment violation, but you actually paid for parking at that space — by coin, prepaid card, or an authorized payment app — for the cited time.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — coin, prepaid card, or authorized payment app], for meter/space number [METER OR SPACE NUMBER]. My payment receipt or app confirmation shows coverage for [PAID TIME WINDOW], which includes [TIME], the time this citation states the violation was recorded.

San Jose Municipal Code §11.40.390 requires the operator of a parked vehicle to "immediately deposit" the required coins or use "any other authorized method of payment" at a single-space meter, or to pay by an accepted method at a multiple-space meter or pay station. Because I made timely, valid payment covering the cited period, I ask that this citation be dismissed on that basis.

Attached: [payment receipt, app confirmation screen, or card/bank statement showing payment for this exact space and time window, and a photo of the meter display showing an active paid session, if I took one at the time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A payment receipt, app confirmation screen, or card/bank statement showing payment for that specific space and time window",
    "The exact meter, space, or pole number and the citation's recorded time, compared against your payment's coverage window",
    "A photo of the meter display showing an active paid session, if you took one at the time",
  ],
  cityNotes:
    "San Jose Municipal Code §11.40.390 requires the operator of a parked vehicle to \"immediately deposit\" the required coins or use \"any other authorized method of payment\" at a single-space meter, or to pay by an accepted method at a multiple-space meter or pay station — proof that you made that payment for the cited period rebuts a nonpayment citation on its own terms.",
  codeCite: {
    label: "SJMC 11.40.390 — Payment of meter charges",
    citation: "San Jose Municipal Code § 11.40.390",
    url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME_PT3GE_11.40.390PAMECH",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "San Jose Municipal Code §11.40.390 — Payment of meter charges",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME_PT3GE_11.40.390PAMECH",
    },
    {
      label: "City of San José — Paying or Contesting a Parking Ticket",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/parking-compliance/paying-or-contesting-a-parking-ticket",
    },
  ],
  faqs: [
    {
      question: "What if my receipt shows a slightly different space number?",
      answer:
        "Make sure your receipt's meter or space number, and its paid time window, line up with the citation's recorded location and time. If they match, that receipt is your core evidence — attach it along with a note explaining any minor discrepancy.",
    },
    {
      question: "Do I use a different form or process than a broken-meter claim?",
      answer:
        "No — both grounds are submitted the same way, as a written Administrative Review request within 21 calendar days of the citation, online at pticket.com/sanjose, in person, or by mail. Just describe the payment you made and attach your receipt as evidence.",
    },
    {
      question: "I paid through a parking app instead of the meter itself — does that count?",
      answer:
        "Yes. SJMC §11.40.390 recognizes \"any other authorized method of payment,\" not just coins deposited at the meter. Attach your app confirmation screen showing the location, date, and paid time window.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "san-jose",
  title: "Fight a missing or obscured sign parking ticket in San Jose",
  metaDescription:
    "Free Administrative Review statement for a San Jose parking ticket with a missing sign. Cites SJMC §11.36.070 — mail-ready City of San José template.",
  whenItApplies:
    "You were cited for violating a posted parking restriction (a no-parking zone, a time-limited zone, or a restricted-hours zone), but the sign required to make that restriction enforceable was missing, illegible, or not actually posted where you parked.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. The sign or curb marking governing that space was [DESCRIBE THE DEFECT — missing entirely, illegible due to fading or damage, obstructed by a tree, vehicle, or other object, or the curb was not painted red]. I am not asserting that I simply failed to notice a posted restriction — the sign or marking itself did not legibly and unambiguously convey the restriction I am cited for violating.

San Jose Municipal Code §11.36.070 requires that a no-parking area be "indicated by appropriate signs, or by painting the curb thereof red" before the restriction takes effect, and SJMC §11.36.260 (the general "prohibited when signs are in place" rule) only bars parking where "authorized signs or other markings are in place giving notice" of the restriction. Because the required sign or curb marking was not in place at this location, the restriction was not in effect there, and I ask that this citation be dismissed.

Attached: [photos of the entire block face, corner to corner, showing the missing, damaged, or illegible sign; close-up, date- and time-stamped photos of the sign itself (front and back) or the curb marking where I parked; photos of the cross-street signage confirming my exact location; and photos showing the property address or another fixed landmark next to where I was parked].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the entire block face, corner to corner, showing the missing, damaged, or illegible sign",
    "Close-up, date- and time-stamped photos of the sign itself (front and back) or the curb marking where you parked",
    "Photos of the cross-street signage confirming your exact location",
    "Photos showing the property address or another fixed landmark next to where you were parked",
  ],
  cityNotes:
    "This is a codified right under San Jose's own ordinances, not just enforcement practice. SJMC §11.36.070 requires that a no-parking area be \"indicated by appropriate signs, or by painting the curb thereof red\" before the restriction takes effect, and SJMC §11.36.270 directs the city traffic engineer to \"erect or place\" the signs or markings that give notice of any parking time limit, prohibition, or restriction. SJMC §11.36.260 (the general \"prohibited when signs are in place\" rule) only bars parking where \"authorized signs or other markings are in place giving notice\" of the restriction — if they weren't in place at your location, the restriction wasn't in effect there. San José's Residential Parking Permit rules track the same logic: SJMC §11.48.310(C) states the permit-area parking prohibition \"shall not be effective and enforceable\" on any street unless the required signs have been erected.",
  codeCite: {
    label: "SJMC 11.36.070 — No-parking areas: designation authority and signage requirement",
    citation: "San Jose Municipal Code § 11.36.070",
    url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA_PT1REGE_11.36.070RKARESAUIGRE",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "San Jose Municipal Code §11.36.070 — No-parking areas: designation authority, signs required",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA_PT1REGE_11.36.070RKARESAUIGRE",
    },
    {
      label: "San Jose Municipal Code §11.36.270 — Signs and markings required",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA_PT2RECELO_11.36.270STSTPAIGMARE",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense?",
      answer:
        "No — you need to show the sign or curb marking itself was defective (missing, illegible, faded, or obstructed), not just that you missed it. SJMC §11.36.070 conditions the restriction on the sign or red curb actually being in place.",
    },
    {
      question: "What if the curb wasn't painted red at all?",
      answer:
        "That's squarely covered. SJMC §11.36.070 requires a no-parking area to be indicated \"by appropriate signs, or by painting the curb thereof red\" — photograph the unpainted curb where you parked, ideally alongside a stretch further down the block where red paint or signage is visible for comparison.",
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
  citySlug: "san-jose",
  title: "Fight a defective parking ticket in San Jose (missing or wrong details)",
  metaDescription:
    "Free Administrative Review statement for a San Jose ticket with a vehicle-description mismatch. Cites CVC §40206.5(b) — mail-ready City of San José template.",
  whenItApplies:
    "The citation is missing a required piece of information, or a required field is wrong — most commonly, the vehicle description (license plate, color, or make) printed on the ticket does not substantially match your vehicle's registration.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be cancelled.

This citation's vehicle description does not substantially match my vehicle's registration. Specifically, the [FIELD — e.g., license plate number, color, or make] printed on the citation reads [WHAT IS PRINTED ON THE CITATION], but my vehicle's registration card shows [CORRECT INFORMATION]. This mismatch was not caused by intentionally switched plates.

Under CVC §40206.5(b), where the vehicle description on a notice of parking violation "does not substantially match the corresponding information on the registration card for that vehicle," and the mismatch was not caused by intentionally switched plates, the processing agency "shall, on written request of the person[,] cancel the notice of parking violation ... without the necessity of an appearance." I am making that written request now and ask that this citation be cancelled on that basis.

Attached: [a copy or photo of the actual citation showing the missing, illegible, or incorrect field(s), and my vehicle registration card, to compare plate number, color, and make against what's printed on the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration card, to compare plate number, color, and make against what's printed on the citation",
    "A written request to the Office of Parking Violations identifying exactly which CVC §40202-required element is wrong or missing",
  ],
  cityNotes:
    "This is a codified right, not just city guidance. CVC §40206.5(b) requires that if \"the description of the vehicle on the notice of parking violation does not substantially match the corresponding information on the registration card for that vehicle,\" and the mismatch was not caused by intentionally switched plates, the processing agency \"shall, on written request of the person[,] cancel the notice of parking violation ... without the necessity of an appearance.\" CVC §40202(a) separately requires every notice of parking violation to state the violated section, the date, approximate time, and location, the vehicle license number and registration expiration date (if visible), the last four digits of the VIN (if readable through the windshield), the vehicle's color, and, if possible, its make.",
  codeCite: {
    label: "CVC §40206.5(b) — Cancellation for vehicle description mismatch",
    citation: "Cal. Veh. Code § 40206.5(b)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "California Legislative Information — CVC §40206.5 (vehicle description mismatch)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5",
    },
    {
      label: "California Legislative Information — CVC §40202 (notice requirements)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202",
    },
  ],
  faqs: [
    {
      question: "What counts as a required element on a California parking citation?",
      answer:
        "CVC §40202(a) lists the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), and the vehicle's color and, if possible, make. Compare your citation against your registration card to identify exactly which field is wrong or missing.",
    },
    {
      question: "Is a small typo enough for cancellation?",
      answer:
        "CVC §40206.5(b) applies where the description \"does not substantially match\" your registration — a trivial formatting difference likely isn't enough, but a wrong plate number, color, or make that doesn't match your vehicle is squarely covered.",
    },
    {
      question: "What if the mismatch happened because someone switched my plates?",
      answer:
        "CVC §40206.5(b)'s cancellation right does not apply if the mismatch was caused by intentionally switched plates. If that's not what happened here, say so explicitly in your Administrative Review request.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "san-jose",
  title: "Fight a San Jose parking ticket for a stolen, sold, or unauthorized vehicle",
  metaDescription:
    "Free Administrative Review statement for a San Jose ticket on a stolen or sold vehicle. Cites CVC §40200 — mail-ready City of San José template.",
  whenItApplies:
    "The vehicle was used without your consent (for example, stolen), or you had sold or transferred it before the citation date, so you were not the person responsible for it at the time of the violation.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be dismissed.

I was not in possession or control of the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) The vehicle was used without my consent — it was reported stolen or as unauthorized use to police on [DATE OF POLICE REPORT], before this citation was issued. / (b) I had sold or transferred the vehicle before this citation was issued, on [TRANSFER DATE], as shown by [DMV transfer-notice confirmation under CVC §5602, or the executed sale/transfer agreement].]

Under CVC §40200, the registered owner and driver of a vehicle cited for a parking violation are jointly liable for parking penalties "unless the owner can show that the vehicle was used without consent of that person, express or implied," which covers theft and unauthorized use. [IF SOLD OR TRANSFERRED: Under CVC §40210, once the agency verifies through DMV that I complied with the CVC §5602 transfer-notice requirement, or upon my timely documentation proving the sale predated the violation, the agency must cancel the notice of delinquent parking violation as to me as former registered owner.] I ask that this citation be dismissed on that basis.

Attached: [a police report of the theft or unauthorized use filed before the citation date; or proof of DMV transfer notice under CVC §5602, or the executed sale/transfer agreement showing a transfer date before the citation; or other documentation showing I was not in possession or control of the vehicle on the citation date].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Stolen or unauthorized use: a police report of the theft or unauthorized use filed before the citation date",
    "Sold or transferred vehicle: proof you notified DMV of the transfer under CVC §5602, or a copy of the executed sale/transfer agreement showing a transfer date before the violation",
    "Any documentation showing you were not in possession or control of the vehicle on the violation date",
  ],
  cityNotes:
    "Codified basis: CVC §40200 makes \"the registered owner and driver, rentee, or lessee of a vehicle\" cited for a parking violation \"jointly liable for parking penalties\" — \"unless the owner can show that the vehicle was used without consent of that person, express or implied,\" which covers theft and unauthorized use. For a prior sale or transfer, CVC §40210 requires the processing agency, once it verifies through DMV that the registered owner complied with the CVC §5602 transfer-notice requirement (or once the owner supplies timely documentation, such as the executed transfer agreement, proving the sale predated the violation), to \"cancel the notice of delinquent parking violation ... with respect to the registered owner.\"",
  codeCite: {
    label: "CVC §40200 — Registered owner/driver joint liability; non-consent exception",
    citation: "Cal. Veh. Code § 40200",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "California Legislative Information — CVC §40200 (owner/driver liability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200",
    },
    {
      label: "California Legislative Information — CVC §40210 (affidavit of nonliability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210",
    },
  ],
  faqs: [
    {
      question: "My car was stolen — what exactly do I need to attach?",
      answer:
        "A police report of the theft or unauthorized use, filed before the citation date. Attach it to your written Administrative Review request along with a description of when you regained or reported the loss of control of the vehicle.",
    },
    {
      question: "I sold the car but never removed the plates — does that matter?",
      answer:
        "It can complicate things. Your strongest evidence is documentation of the transfer date itself — proof you notified DMV of the transfer under CVC §5602, or the executed sale/transfer agreement showing a date before the citation.",
    },
    {
      question: "What if this genuinely isn't my vehicle at all?",
      answer:
        "State that plainly in your Administrative Review request and attach any documentation you have — such as proof you never registered or owned a vehicle matching the citation's description — showing you have no connection to it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_permit_displayed: ParkingDefense = {
  slug: "valid-permit-displayed",
  citySlug: "san-jose",
  title: "Fight a San Jose parking ticket when you had a valid permit displayed",
  metaDescription:
    "Free Administrative Review statement for a San Jose RPP citation with a valid permit. Cites SJMC §11.48.300 — mail-ready City of San José template.",
  whenItApplies:
    "You were cited for a Residential Permit Parking (RPP) zone violation, but you (or your guest) held a valid San José residential, guest, or employee parking permit for that zone and vehicle at the time of the citation.",
  body: `To: City of San José — Office of Parking Violations (Administrative Review)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written Administrative Review request for Citation No. [CITATION NUMBER] and respectfully request that it be cancelled.

At the time of this citation, I held a valid Residential Parking Permit (RPP Zone [ZONE NAME/NUMBER]) for the vehicle bearing plate [PLATE], active and linked in the City's RPP database at the time and location cited. [IF GUEST PERMIT: This vehicle was assigned as a guest under permit account [ACCOUNT/ZONE], with the assignment made before the citation was issued.]

San José's RPP program is virtual and plate-based rather than a physical hang-tag or sticker: permits are linked to a vehicle's license plate in the City's RPP database and checked by license-plate-reading Parking Compliance Officers. Under SJMC §11.48.300(B), because I can show proof that I had been issued a valid residential permit at the time the citation was received, I ask that this citation be cancelled on that basis, or that the administrative-fee cancellation process the ordinance provides for be applied in lieu of the fine.

Attached: [a screenshot or printout from my RPP account (sanjose.getapermit.net) showing the permit was active for this vehicle's license plate on the citation date and time, the exact RPP zone name/number, and, for a guest permit, the QR-code assignment confirmation or account log showing the guest's plate was assigned before the citation was issued].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A screenshot or printout from your RPP account (sanjose.getapermit.net) showing the permit was active for that vehicle's license plate on the citation date and time",
    "The exact RPP zone name/number where you were cited, matched against the zone your permit covers",
    "For a guest permit, the QR-code assignment confirmation or account log showing the guest's plate was assigned to the permit before the citation was issued",
  ],
  cityNotes:
    "This is a San José-specific extra beyond the canonical defense list. San José's RPP program is now virtual/plate-based rather than a physical hang-tag or sticker: permits are linked to a vehicle's license plate in the City's RPP database and checked by license-plate-reading Parking Compliance Officers, per the City's own description of its RPP technology change. Under SJMC §11.48.300(B), if the person who received an RPP citation \"can show proof that he or she had been issued a valid residential permit at the time the citation was received,\" the Director may, in lieu of collecting the fine, \"charge an administrative fee to process cancellation of a citation.\" Separately, under SJMC §11.48.310(C), the RPP parking prohibition itself \"shall not be effective and enforceable\" on any street unless the required permit-area signs have been erected.",
  codeCite: {
    label: "SJMC 11.48.300 — Permit parking: prohibition, and administrative-fee cancellation for proof of a valid permit",
    citation: "San Jose Municipal Code § 11.48.300",
    url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.48PEPA_PT4PAPR_11.48.300PR",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "San Jose Municipal Code §11.48.300 — Prohibition (Permit Parking)",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.48PEPA_PT4PAPR_11.48.300PR",
    },
    {
      label: "City of San José — RPP Frequently Asked Questions",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/residential-permit-parking/rpp-frequently-asked-questions",
    },
  ],
  faqs: [
    {
      question: "Do I need a physical permit hang-tag to prove this?",
      answer:
        "No — San José's RPP program is virtual and plate-based, so your permit is linked to your vehicle's license plate in the City's RPP database rather than a physical tag. Your proof is a screenshot or printout from your RPP account (sanjose.getapermit.net) showing the permit was active for your plate on the citation date and time.",
    },
    {
      question: "My permit covers a different zone than where I was cited — does that matter?",
      answer:
        "Yes. Confirm the exact RPP zone your permit covers matches the zone printed on the citation. If they don't match, this defense doesn't apply and you'll need to look at whether required permit-area signs were actually posted instead.",
    },
    {
      question: "I was cited as a guest, not the permit holder — can I still use this?",
      answer:
        "Yes, if the guest permit assignment was made before the citation was issued. Attach the QR-code assignment confirmation or account log showing the guest vehicle's plate was linked to the permit at the relevant time.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const sanJoseCity: ParkingCity = {
  slug: "san-jose",
  city: "San Jose",
  state: "CA",
  agency:
    "City of San José Department of Transportation (DOT) — Office of Parking Violations processes citations and decides the first-level \"Administrative Review\" of a contest. Under California Vehicle Code §40215, a person dissatisfied with that initial review may request a second-level Administrative Hearing, decided by a hearing examiner who is statutorily required to be independent of the citation, collection, or processing function and whose compensation cannot be tied to fines collected. Further review of an adverse Administrative Hearing decision is available by filing a civil appeal (de novo) in Santa Clara County Superior Court under CVC §40230.",
  submitOnlineUrl: "https://www.pticket.com/sanjose",
  submitMailAddress: "City of San José, P.O. Box 11023, San José, CA 95103-1023",
  submitInPerson:
    "Office of Parking Violations, 210 N. 4th St., Suite 150, San José, CA 95112. The City's own payment instructions list this office as open weekdays 9:00 a.m.–4:00 p.m. for paying a ticket in person; the same address is used for in-person citation appeals.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote:
    "The City of San José's own citation-payment page states, under \"PAY YOUR PARKING TICKET ON TIME\": \"It must be paid or contested within 21 days,\" that \"a reminder notice will be mailed to the registered owner of the vehicle after 15 days\" as a courtesy if it's still unresolved, and that tickets \"not paid or contested within the timeline above, or the timelines noted on the courtesy notice, will incur additional penalties and will no longer be eligible for appeal.\" This lines up with the statewide floor set by California Vehicle Code §40215(a), which gives a person \"21 calendar days from the issuance of a notice of parking violation\" (or 14 calendar days from the mailing of a notice of delinquent parking violation) to request the initial review, and with CVC §40202(a), which requires every notice of parking violation to itself state that the fine is due within 21 calendar days. A second, later deadline applies to the next stage: if the initial Administrative Review is denied, CVC §40215 separately gives 21 calendar days from the mailing of that denial to request a second-level Administrative Hearing. Sources: https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/parking-compliance/paying-or-contesting-a-parking-ticket ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=40215.&lawCode=VEH ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202",
  penaltyNote:
    "The City states plainly that a citation not paid or contested within 21 days of issuance (or within the window on a courtesy reminder notice mailed at day 15) \"will incur additional penalties and will no longer be eligible for appeal.\" Statewide consequences layer on top of whatever the City itself assesses: under CVC §4760, the DMV \"shall refuse to renew the registration of a vehicle if the registered owner or lessee has been mailed a notice of delinquent parking violation\" and the associated penalties and fees remain unpaid. Under CVC §22651(i), a vehicle may be impounded once it has been issued five or more parking-violation notices the owner or person in control has not responded to within 21 calendar days of issuance; release requires \"satisfactory evidence that all parking penalties due for the vehicle and all other vehicles registered to the registered owner\" have been cleared. If you request a CVC §40215 Administrative Hearing, you must first deposit the fine amount (waivable on proof of indigency); an unappealed adverse Administrative Hearing decision becomes final and collectible if you do not file a CVC §40230 civil appeal within 30 calendar days.",
  municipalCodeRefs: [
    {
      label: "SJMC 11.40.420 — Parking citation (duty of a parking enforcement officer to record the violation and issue a written citation)",
      citation: "San Jose Municipal Code § 11.40.420",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME_PT3GE_11.40.420PACI",
    },
    {
      label: "SJMC 11.40.390 — Payment of meter charges",
      citation: "San Jose Municipal Code § 11.40.390",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME_PT3GE_11.40.390PAMECH",
    },
    {
      label: "SJMC 11.36.070 — No-parking areas: designation authority and signage requirement",
      citation: "San Jose Municipal Code § 11.36.070",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA_PT1REGE_11.36.070RKARESAUIGRE",
    },
    {
      label: "SJMC 11.36.260 — Stopping, standing and parking: prohibited when signs are in place",
      citation: "San Jose Municipal Code § 11.36.260",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA_PT2RECELO_11.36.260STSTPAROWHSIARPL",
    },
    {
      label: "SJMC 11.48.300 — Permit parking: prohibition, and administrative-fee cancellation for proof of a valid permit",
      citation: "San Jose Municipal Code § 11.48.300",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.48PEPA_PT4PAPR_11.48.300PR",
    },
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
      label: "CVC §22508.5 — Inoperable parking meters and payment centers",
      citation: "Cal. Veh. Code § 22508.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5",
    },
    {
      label: "CVC §4760 — DMV refusal to renew registration for unpaid parking penalties",
      citation: "Cal. Veh. Code § 4760",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760",
    },
    {
      label: "CVC §22651(i) — Impoundment for five or more unpaid parking violation notices",
      citation: "Cal. Veh. Code § 22651(i)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651",
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
      question: "How long do I have to contest a San Jose parking ticket?",
      answer:
        "You must submit a written Administrative Review within 21 calendar days of the citation's issue date. The City states a ticket \"must be paid or contested within 21 days,\" and a courtesy reminder notice is mailed after 15 days if it's still unresolved — but that notice does not extend the underlying deadline. Tickets not paid or contested within the timeline \"will incur additional penalties and will no longer be eligible for appeal.\"",
    },
    {
      question: "What happens if my Administrative Review is denied?",
      answer:
        "You may request a second-level Administrative Hearing within 21 calendar days of the mailing of that denial. CVC §40215 requires you to first deposit the amount of the parking penalty (waivable on satisfactory proof of indigency), and the hearing is decided by an examiner statutorily required to be independent of the citation, collection, or processing function, whose compensation cannot be tied to fines collected.",
    },
    {
      question: "Does a court decide San Jose parking disputes?",
      answer:
        "Not at first. The Office of Parking Violations itself decides the initial Administrative Review, and an independent hearing examiner decides the second-level Administrative Hearing. Only after that can you seek de novo review in Santa Clara County Superior Court under CVC §40230, by filing a notice of appeal within 30 calendar days of the final decision and paying the filing fee set under Government Code §70615 (reimbursed to you if the court rules in your favor).",
    },
    {
      question: "What happens if I ignore a San Jose parking citation?",
      answer:
        "Under CVC §4760, the DMV must refuse to renew your vehicle's registration once a notice of delinquent parking violation has been mailed and the penalties and fees remain unpaid. Under CVC §22651(i), a vehicle may be impounded once it has racked up five or more unresolved parking-violation notices, and release requires clearing all parking penalties due on that vehicle and any others registered to the same owner.",
    },
  ],
  sources: [
    {
      label: "City of San José — Paying or Contesting a Parking Ticket",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/parking-compliance/paying-or-contesting-a-parking-ticket",
    },
    {
      label: "City of San José — Parking Regulations",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/parking-compliance/parking-regulations",
    },
    {
      label: "City of San José — Parking Compliance",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/parking-compliance",
    },
    {
      label: "City of San José — RPP Frequently Asked Questions",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/parking/residential-permit-parking/rpp-frequently-asked-questions",
    },
    {
      label: "City of San José Department of Transportation — Contacts",
      url: "https://www.sanjoseca.gov/your-government/departments-offices/transportation/contacts",
    },
    {
      label: "San Jose Municipal Code, Title 11, Chapter 11.36 — Stopping, Standing and Parking",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.36STSTPA",
    },
    {
      label: "San Jose Municipal Code, Title 11, Chapter 11.40 — Parking Meters",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.40PAME",
    },
    {
      label: "San Jose Municipal Code, Title 11, Chapter 11.48 — Permit Parking",
      url: "https://library.municode.com/ca/san_jose/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.48PEPA",
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
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
