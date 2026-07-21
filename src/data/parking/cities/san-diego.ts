import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/san-diego.json (verifiedAt 2026-07-20).
// IMPORTANT: San Diego runs the same two-stage California administrative model as San
// Francisco under California Vehicle Code §40215, but with San Diego's own terminology.
// Stage 1 is a free, written "Administrative (Initial) Review" request to the City of San
// Diego's Parking Administration (Office of the City Treasurer) — online, by mail, by fax,
// by phone, or in person. The requester carries the burden of proof and does NOT attend a
// hearing at this stage; evidence is submitted with the request and is not returned. Only if
// that review is denied does the case move to Stage 2: a formal Administrative Hearing before
// an independent hearing examiner (in person or by written declaration), which requires a
// full deposit of the fine amount under CVC §40215(b) unless an indigency waiver is granted.
// Further review runs to the San Diego Superior Court under CVC §40230. Every defense
// statement below is addressed to Parking Administration as a written Administrative Review
// request and uses San Diego's own "request an Administrative Review" / "cancel" terminology,
// not an NYC-style "NOT GUILTY" tribunal plea.

const cityHowToContest: string[] = [
  "Note your citation number and the license/plate number, and confirm the violation code, date, time, and location printed on the citation. Any appeal must be requested (postmarked, if by mail) within 21 calendar days from the date the citation was issued, or 14 calendar days from the mailing of a notice of delinquent parking violation.",
  "Do not send payment with your appeal request, and do not simply pay the citation if you intend to contest it — under California Vehicle Code §40204(a), once the parking penalty is received and there is no contest, the proceedings terminate, closing off your right to appeal.",
  "Request the free Administrative (Initial) Review one of several ways: online through the City's Administrative Review portal (linked from sandiego.gov/parking/citations and sandiego.gov/parking/citations/appeal), by mail to Parking Administration – Citation Appeals, P.O. Box 129038, San Diego, CA 92112-9038, by fax to (619) 533-3205, by phone at (866) 470-1308, or in person. You have the burden of proof — submit the citation (or a photocopy) and all supporting evidence (statements, charts, diagrams, photographs, drawings, maps, or receipts) at the time you appeal; evidence will not be returned and copies will not be provided later. You do not attend a hearing at this stage.",
  "If your dispute is that you sold or transferred the vehicle before the citation date, complete the affidavit of non-liability printed on the back of the Notice of Parking Violation and mail it with proof of the sale to Parking Administration/Sold Vehicle at the same P.O. Box. If your dispute is that the vehicle was stolen before the citation was issued, mail a copy of the stolen-vehicle police report, a copy of the vehicle-recovery report (if recovered), or — if never recovered — a letter from your insurance company documenting the loss.",
  "Wait for Parking Administration to mail its Administrative Review decision. A notice of the decision is mailed to you regardless of the outcome. If the citation is canceled, you're done.",
  "If the citation is upheld, the decision letter includes instructions for the next step: you must request a formal Administrative Hearing no later than 21 calendar days from the mailing of the Administrative Review results. Under California Vehicle Code §40215(b), you must deposit the full amount of the parking penalty to request the hearing, unless you qualify for and are granted an indigency waiver under the issuing agency's written procedure.",
  "Choose your hearing format — in person before a hearing officer, or by submitting a written declaration — consistent with CVC §40215(c). An independent hearing examiner, who by law must be separate from the citation, collection, or processing function, decides the case and mails a written decision. If you are found not liable, your deposited penalty is refunded.",
  "If the hearing officer's decision is not in your favor, you may seek review by the San Diego Superior Court within 30 calendar days after the decision is mailed, under California Vehicle Code §40230. The case is heard de novo, and a civil court filing fee (set under Government Code §70615) applies; the fee is reimbursed to you by the processing agency if you prevail. The court's decision is final — there is no further appeal.",
];

const ifThisDoesntWork = `If your Administrative (Initial) Review is denied, the decision letter includes instructions for the next step: you must request a formal Administrative Hearing no later than 21 calendar days from the mailing of the Administrative Review results. Under California Vehicle Code §40215(b), you must deposit the full amount of the parking penalty to request the hearing, unless you qualify for and are granted an indigency waiver under the issuing agency's written procedure. Choose your hearing format — in person before a hearing officer, or by submitting a written declaration — consistent with CVC §40215(c). An independent hearing examiner, who by law must be separate from the citation, collection, or processing function, decides the case and mails a written decision; if you are found not liable, your deposited penalty is refunded. If the hearing officer's decision is not in your favor, you may seek review by the San Diego Superior Court within 30 calendar days after the decision is mailed, under California Vehicle Code §40230. The case is heard de novo, and a civil court filing fee (set under Government Code §70615) applies; the fee is reimbursed to you by the processing agency if you prevail. The court's decision is final — there is no further appeal.`;

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "san-diego",
  title: "Fight a broken-meter parking ticket in San Diego",
  metaDescription:
    "Free Administrative Review letter for a broken-meter parking ticket in San Diego. Cites CVC §22508.5 on inoperable meters — mail-ready Parking Administration template.",
  whenItApplies:
    "You were cited at a space regulated by a parking meter or pay station, but that meter or payment center was inoperable — it could not physically accept payment in ANY form, or could not register that a payment had been made. A meter that still accepts some payment methods (e.g., cards) while another (e.g., coins) is down is not \"inoperable\" for this purpose.",
  body: `To: City of San Diego, Office of the City Treasurer — Parking Administration
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Administrative (Initial) Review of Citation No. [CITATION NUMBER] under California Vehicle Code §40215 and ask that it be canceled.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter or pay station serving that space, meter number [METER NUMBER, e.g. "4-1615", IF VISIBLE]. The meter could not accept payment in any form: [DESCRIBE — e.g., blank or error display, rejected coins, rejected credit/debit card, no functioning screen]. I tried [LIST EVERY PAYMENT METHOD ATTEMPTED], and each one failed. [IF REPORTED: I reported this meter to San Diego's Parking Meter Operations line at 619-744-1705 on [DATE REPORTED].]

Under CVC §22508.5, a local authority may not issue a nonpayment citation at a meter or payment center that "cannot accept payment in any form or cannot register that a payment in any form has been made." Because the meter at this location was inoperable within the meaning of that statute, I ask that this citation be canceled.

Attached: [time-stamped photo(s) of the meter's error message or inoperable display, a description of every payment method attempted and how each one failed, the meter number, and confirmation of any report made to Parking Meter Operations].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the meter's error message, blank display, or otherwise inoperable state",
    "A note of every payment method you attempted at that meter and how each one failed",
    "The meter number (printed on the street side of the meter housing or at the bottom of the display screen, in a format like \"4-1615\")",
    "Confirmation that you reported the meter to San Diego's Parking Meter Operations line at 619-744-1705, if you did",
  ],
  cityNotes: `San Diego's own Parking Meter Operations page tells drivers who find a broken meter to move to another meter and to report the meter number to 619-744-1705. Neither San Diego's Municipal Code nor its published citation-appeal materials set out a separate, San-Diego-specific "broken meter" dispute rule; the operative dismissal ground is the statewide inoperable-meter rule in CVC §22508.5, which defines an "inoperable parking meter" as one that "cannot accept payment in any form or cannot register that a payment in any form has been made," and bars a local authority from issuing a nonpayment citation at such a meter.`,
  codeCite: {
    label: "CVC §22508.5 — Inoperable parking meters and payment centers",
    citation: "Cal. Veh. Code § 22508.5",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of San Diego — Parking Meter Operations",
      url: "https://www.sandiego.gov/parking/meterops",
    },
    {
      label: "California Legislative Information — CVC §22508.5 (inoperable meters)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5.",
    },
  ],
  faqs: [
    {
      question: "Is it enough that the meter didn't take my card?",
      answer:
        "Only if the meter was truly inoperable — CVC §22508.5 defines that as a meter that cannot accept payment in any form, or cannot register that payment was made. A meter that still takes coins but rejected your card is not \"inoperable\" under the statute. Try, and document, every payment method the meter accepts.",
    },
    {
      question: "Who do I report a broken meter to in San Diego?",
      answer:
        "San Diego's Parking Meter Operations page tells drivers who find a broken meter to move to another meter and report the meter number to 619-744-1705.",
    },
    {
      question: "Where do I find the meter number?",
      answer:
        "It's printed on the street side of the meter housing, or at the bottom of the display screen, in a format like \"4-1615.\"",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "san-diego",
  title: "Fight a San Diego parking ticket when you already paid",
  metaDescription:
    "Free Administrative Review letter for a San Diego parking ticket issued despite valid payment. Cites SDMC §86.0126 — mail-ready Parking Administration template.",
  whenItApplies:
    "You were cited for an expired-meter or nonpayment violation, but you had actually paid for parking at that space for the cited time — your meter, app, or pay-station receipt shows paid time covering the citation's recorded time.",
  body: `To: City of San Diego, Office of the City Treasurer — Parking Administration
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Administrative (Initial) Review of Citation No. [CITATION NUMBER] under California Vehicle Code §40215 and ask that it be canceled.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — coin, card, or approved payment app], for meter/space number [METER OR SPACE NUMBER]. My payment receipt or app confirmation shows coverage for [PAID TIME WINDOW], which includes [TIME], the time this citation states the violation was observed.

Under San Diego Municipal Code §86.0126, it is unlawful to remain parked in a parking meter zone only "when the meter, receipt, card, or electronic device ... shows the parking time has expired," and SDMC §86.0123(c) confirms my payment satisfied the obligation to "immediately cause to be deposited coins ... or otherwise immediately purchase time using an approved method of payment." Because my paid time had not expired at the time this citation was issued, I ask that it be canceled.

Attached: [payment receipt, app confirmation, or card/bank statement showing payment for this exact space and time window, and a photo of the meter display showing an active paid session, if I took one at the time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A payment receipt or app confirmation showing the exact space/meter number, the payment time, and the paid duration",
    "The citation's recorded observation time, compared against your paid time window, to show your payment had not yet expired",
    "A photo of the meter display showing an active paid session, if you took one at the time",
  ],
  cityNotes: `San Diego Municipal Code §86.0126 ("Parking Meter — Overtime") makes it unlawful to remain parked in a parking meter zone only "when the meter, receipt, card, or electronic device ... shows the parking time has expired" — proof that your paid time had not expired rebuts the violation. SDMC §86.0123(c) sets the underlying payment obligation, requiring the vehicle operator to "immediately cause to be deposited coins ... or otherwise immediately purchase time using an approved method of payment." San Diego's own Administrative Review process lists "Is the information on the citation accurate?" as the first of three questions a reviewer considers.`,
  codeCite: {
    label: "San Diego Municipal Code §86.0126 — Parking Meter — Overtime",
    citation: "S.D. Mun. Code § 86.0126",
    url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "San Diego Municipal Code, Chapter 8, Article 6, Division 1 — General Parking Regulations (PDF; §§86.0123, 86.0126)",
      url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
    },
    {
      label: "City of San Diego — Appeal a Parking Citation/Ticket (Administrative Review criteria)",
      url: "https://www.sandiego.gov/parking/citations/appeal",
    },
  ],
  faqs: [
    {
      question: "What does San Diego's Administrative Review look at first?",
      answer:
        "San Diego's Administrative Review process lists \"Is the information on the citation accurate?\" as the first of three questions a reviewer considers — a valid payment receipt covering the cited time goes directly to that question.",
    },
    {
      question: "What SDMC sections cover meter payment and overtime?",
      answer:
        "SDMC §86.0123(c) requires the vehicle operator to immediately deposit coins or otherwise purchase time using an approved payment method, and SDMC §86.0126 makes it unlawful to remain parked only once the meter, receipt, card, or electronic device shows the parking time has expired.",
    },
    {
      question: "What if my receipt shows a slightly different space number?",
      answer:
        "Make sure your receipt's meter or space number, and its paid time window, line up with the citation's recorded location and time. If they match, that receipt is your core evidence — attach it along with a note explaining any minor discrepancy.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "san-diego",
  title: "Fight a defective parking ticket in San Diego (missing or wrong details)",
  metaDescription:
    "Free Administrative Review letter for a San Diego parking ticket with a vehicle-description mismatch. Cites CVC §40206.5(b) — mail-ready Parking Administration template.",
  whenItApplies:
    "The citation is missing a required element, or a required field is wrong — most commonly the vehicle description (license plate, make, or color) does not substantially match your vehicle's registration, or the date, time, or location is inaccurate.",
  body: `To: City of San Diego, Office of the City Treasurer — Parking Administration
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Administrative (Initial) Review of Citation No. [CITATION NUMBER] under California Vehicle Code §40215 and ask that it be canceled.

This citation's vehicle description does not substantially match my vehicle's registration. Specifically, the [FIELD — e.g., license plate number, make, or color] printed on the citation reads [WHAT IS PRINTED ON THE CITATION], but my vehicle's registration card shows [CORRECT INFORMATION]. This mismatch was not caused by intentionally switched plates. [IF APPLICABLE: The citation is also missing or illegible as to [MISSING OR ILLEGIBLE FIELD REQUIRED UNDER CVC §40202(a)].]

Under CVC §40206.5(b), where the vehicle description on a notice of parking violation "does not substantially match the corresponding information on the registration card for that vehicle," and the mismatch was not caused by intentionally switched plates, the processing agency must, on written request, cancel the notice without requiring an appearance. CVC §40202(a) separately requires the notice to contain the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), and the vehicle's color and, if possible, make. I am making that written request now and ask that this citation be canceled on that basis.

Attached: [a copy or photo of the actual citation showing the missing, illegible, or incorrect field(s), and a copy of my vehicle registration card, to compare plate number, make, and color against what is printed on the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the missing, illegible, or incorrect field(s)",
    "Your current vehicle registration card, to compare plate number, make, and color against what's printed on the citation",
    "A written request identifying exactly which required element (per CVC §40202(a)) is wrong or missing",
  ],
  cityNotes: `San Diego has no separate municipal ordinance for defective citations; the operative statewide grounds are CVC §40206.5(b), which requires the processing agency to cancel a notice on written request if the vehicle description on it "does not substantially match the corresponding information on the registration card for that vehicle" (absent an intentional plate swap), and CVC §40202(a), which lists what a notice of parking violation must contain — the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), the vehicle's color, and, if possible, its make. San Diego's own Administrative Review process asks, as its first listed question, "Is the information on the citation accurate?"`,
  codeCite: {
    label: "CVC §40206.5(b) — Cancellation for vehicle description mismatch",
    citation: "Cal. Veh. Code § 40206.5(b)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "California Legislative Information — CVC §40206.5 (vehicle description mismatch)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5.",
    },
    {
      label: "California Legislative Information — CVC §40202 (required notice content)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202.",
    },
    {
      label: "City of San Diego — Appeal a Parking Citation/Ticket (Administrative Review criteria)",
      url: "https://www.sandiego.gov/parking/citations/appeal",
    },
  ],
  faqs: [
    {
      question: "What counts as a required element on a California parking citation?",
      answer:
        "CVC §40202(a) requires the violated section, date, approximate time, location, license number and registration expiration (if visible), the last four digits of the VIN (if readable), and the vehicle's color and, if possible, make. Compare your citation against your registration card to identify exactly which field is wrong or missing.",
    },
    {
      question: "Is a small typo enough for cancellation?",
      answer:
        "CVC §40206.5(b) applies where the description \"does not substantially match\" your registration — a trivial formatting difference likely isn't enough, but a wrong plate number, make, or color that doesn't match your vehicle is squarely covered.",
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
  citySlug: "san-diego",
  title: "Fight a San Diego parking ticket for a sold, transferred, or stolen vehicle",
  metaDescription:
    "Free Administrative Review letter for a San Diego parking ticket on a sold, transferred, or stolen vehicle. Cites CVC §40210 — mail-ready Parking Administration template.",
  whenItApplies:
    "The vehicle was sold or transferred before the citation date, or was stolen before the citation was issued (whether later recovered or never recovered), so you were not the person responsible for the vehicle at the time of the violation.",
  body: `To: City of San Diego, Office of the City Treasurer — Parking Administration
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Administrative (Initial) Review of Citation No. [CITATION NUMBER] under California Vehicle Code §40215 and ask that it be canceled.

I was not the person responsible for the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I had sold or transferred the vehicle before this citation was issued, on [TRANSFER DATE], as shown by the enclosed proof of sale. / (b) The vehicle was stolen before this citation was issued — it was reported stolen to police on [DATE OF POLICE REPORT], and [IT WAS LATER RECOVERED ON [RECOVERY DATE] / IT HAS NOT BEEN RECOVERED].]

[IF SOLD OR TRANSFERRED: I am enclosing the completed affidavit of non-liability printed on the back of the Notice of Parking Violation, together with proof of the sale, consistent with CVC §40210's affidavit-of-nonliability process for a registered owner who transferred the vehicle before the violation date.] [IF STOLEN: Under CVC §40200(b), the registered owner is not liable for a parking penalty where the vehicle was used without that person's consent, express or implied; I am enclosing the police report of the theft filed before the citation date[, and the vehicle-recovery report / and a letter from my insurance company documenting the loss, as the vehicle was never recovered]].] I ask that this citation be canceled on that basis.

Attached: [for a sold/transferred vehicle: the completed affidavit of non-liability and proof of the sale; for a stolen vehicle: the police report, and the vehicle-recovery report if recovered, or a letter from my insurance company documenting the loss if never recovered].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Sold/transferred vehicle: the affidavit of non-liability printed on the back of the Notice of Parking Violation, completed and mailed with proof of the sale to Parking Administration/Sold Vehicle, P.O. Box 129038, San Diego, CA 92112-9038",
    "Sold/transferred vehicle: documentation of the transfer date (bill of sale or executed sale/transfer agreement) predating the violation, and confirmation you notified DMV of the transfer under CVC §5602",
    "Stolen vehicle: a copy of the stolen-vehicle police report filed before the citation date",
    "Stolen vehicle: a copy of the vehicle-recovery report, if the vehicle was recovered, or a letter from your insurance company documenting the loss if it was never recovered",
  ],
  cityNotes: `San Diego's Citations page publishes separate "Sold Vehicle" and "Stolen Vehicle" procedures. For a sold vehicle, this tracks the statewide Affidavit of Nonliability process in CVC §40210: once the registered owner returns the affidavit showing a bona fide sale/transfer completed before the violation date, the processing agency verifies DMV confirmation that the owner complied with the CVC §5602 transfer-notice requirement (or accepts documentary evidence of the transfer date) and cancels the notice. For a stolen vehicle, the applicable statewide ground is CVC §40200(b), which relieves the registered owner of joint liability where "the vehicle was used without consent of that person, express or implied."`,
  codeCite: {
    label: "CVC §40210 — Affidavit of nonliability (sold/transferred vehicle)",
    citation: "Cal. Veh. Code § 40210",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of San Diego — Citations (Sold Vehicle / Stolen Vehicle procedures)",
      url: "https://www.sandiego.gov/parking/citations",
    },
    {
      label: "California Legislative Information — CVC §40210 (affidavit of nonliability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210.",
    },
    {
      label: "California Legislative Information — CVC §40200 (owner/driver liability; non-consent exception)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200.",
    },
  ],
  faqs: [
    {
      question: "My car was sold before the citation — what do I send?",
      answer:
        "Complete the affidavit of non-liability printed on the back of the Notice of Parking Violation and mail it, with proof of the sale, to Parking Administration/Sold Vehicle, P.O. Box 129038, San Diego, CA 92112-9038.",
    },
    {
      question: "My car was stolen — what does San Diego require?",
      answer:
        "Mail a copy of the stolen-vehicle police report filed before the citation date, plus the vehicle-recovery report if it was recovered, or a letter from your insurance company documenting the loss if it was never recovered.",
    },
    {
      question: "Does this cover a car I just lent to someone who got a ticket?",
      answer:
        "No — San Diego's published procedures for this ground cover only a vehicle sold or transferred before the citation date, or stolen before the citation was issued, not general unauthorized use by someone you lent the car to.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const sanDiegoCity: ParkingCity = {
  slug: "san-diego",
  city: "San Diego",
  state: "CA",
  agency:
    "City of San Diego, Office of the City Treasurer — Parking Administration (Parking Citations Program). Parking Administration processes citations and conducts the state-mandated two-step review process — a free Administrative (Initial) Review, then, if that is denied, a formal Administrative Hearing — under California Vehicle Code §40215. A final administrative hearing decision may be appealed to the San Diego Superior Court under CVC §40230.",
  submitOnlineUrl: "http://duncan.imageenforcement.com/AdminReviewSites/SanDiegoReview",
  submitMailAddress: "Parking Administration – Citation Appeals, P.O. Box 129038, San Diego, CA 92112-9038",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote: `California Vehicle Code §40215(a), which San Diego applies directly: "For a period of 21 calendar days from the issuance of a notice of parking violation or 14 calendar days from the mailing of a notice of delinquent parking violation ... a person may request an initial review of the notice by the issuing agency." San Diego's own citation-instructions document states it the same way: "Any appeal must be made within 21 calendar days from the date the citation was issued," and its Citations/Tickets FAQ states, "You must request an appeal within 21 calendar days of the issuance date." A separate, later deadline applies to the next stage: if the Administrative Review is denied, San Diego's Appeal a Parking Citation/Ticket page states "a hearing request must be made no later than 21 calendar days from the mailing of the results of the administrative review," consistent with CVC §40215(b). Sources: https://www.sandiego.gov/parking/citations/appeal ; https://www.sandiego.gov/parking/faqs/citationfaq ; https://www.sandiego.gov/sites/default/files/legacy/parking/pdf/citation_instructions.pdf ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.`,
  penaltyNote: `San Diego's own citation-instructions document states: "When appeal or payment is not received within 21 calendar days of issuance, fine amounts under $250 are doubled. After 56 days an additional $10 fee is added, per 40203.5(a) CVC" — San Diego sets this local late-payment schedule under the authority CVC §40203.5(a) grants to "the governing body of the jurisdiction where the notice of violation is issued." The same document warns that unpaid citations "are subject to referral for collections, additional fees and interest, credit reporting, and the entry of a civil judgment leading to the attachment of your property or wages," and that a $25 fee applies to returned checks under California Government Code §6157. Under CVC §22651.7, a vehicle known to have been issued five or more delinquent parking citations (unanswered more than 21 calendar days, or 14 days for a delinquent-notice mailing) may be immobilized (booted) or impounded until the owner furnishes identification, an in-state address, and proof all parking penalties on that vehicle (and any other vehicle registered to the same owner) have been paid; San Diego's own document confirms this, warning that "[a]ny vehicle with 5 or more outstanding citations maybe impounded in accordance with 22651 CVC" and that "[a]ll citation related fees, including towing and storage fees, must be paid before the vehicle will be released." Under CVC §4760, the DMV must refuse to renew the registration of a vehicle whose registered owner or lessee was mailed a notice of delinquent parking violation and has not paid the outstanding parking penalty and administrative fee, until it is paid in full (limited exceptions apply, e.g., if the citation was issued before the current owner took possession) — San Diego's own document describes this same DMV-hold consequence. Separately, under CVC §9800(a)(5), unpaid parking penalties create a lien not only on the cited vehicle but on any other vehicle owned by the same person, and CVC §4751(f) lets the DMV refuse to register or renew any vehicle in which that lien-bearing owner has an interest; San Diego's document summarizes this as "[t]he owner and operator are jointly responsible at the time of issuance even if the vehicle is later sold," citing CVC §§9800(a), 4751(f), and 40200(b). For registration-violation citations, proof of correction or valid registration provided within 21 days reduces the fine to a $10 processing fee (mailed to City of San Diego · Parking Citation Processing Center, Registration Violation, PO Box 6010, Inglewood, CA 92312-6010); disabled-parking-placard citations follow the same $10-within-21-days path if you provide a copy of your registration and placard ID card (plus, if you're not the placard holder, a signed letter from the placard holder and their ID). A parking citation is a civil, not criminal, matter under California law. Sources: https://www.sandiego.gov/sites/default/files/legacy/parking/pdf/citation_instructions.pdf ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40203.5. ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651.7. ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760. ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=9800. ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4751.`,
  municipalCodeRefs: [
    {
      label: "CVC §40215 — Initial review and administrative hearing procedure for parking violations",
      citation: "Cal. Veh. Code § 40215",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
    },
    {
      label: "CVC §40204 — Effect of paying the parking penalty without contesting",
      citation: "Cal. Veh. Code § 40204",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40204.",
    },
    {
      label: "CVC §40202 — Required content of the Notice of Parking Violation",
      citation: "Cal. Veh. Code § 40202",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202.",
    },
    {
      label: "CVC §40230 — Appeal of the administrative hearing decision to superior court",
      citation: "Cal. Veh. Code § 40230",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40230.",
    },
    {
      label: "CVC §40200 — Registered owner/driver joint liability for parking penalties; non-consent exception",
      citation: "Cal. Veh. Code § 40200",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200.",
    },
    {
      label: "CVC §40203.5 — Local schedule of parking penalties and late-payment penalties",
      citation: "Cal. Veh. Code § 40203.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40203.5.",
    },
    {
      label: "CVC §4760 — DMV refusal to renew registration for unpaid parking penalties",
      citation: "Cal. Veh. Code § 4760",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760.",
    },
    {
      label: "CVC §22651.7 — Immobilization (boot) or impound for 5+ delinquent parking citations",
      citation: "Cal. Veh. Code § 22651.7",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651.7.",
    },
    {
      label: "CVC §22508.5 — Inoperable parking meters and payment centers",
      citation: "Cal. Veh. Code § 22508.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5.",
    },
    {
      label: "CVC §40206.5 — Cancellation of citation for vehicle-description mismatch",
      citation: "Cal. Veh. Code § 40206.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5.",
    },
    {
      label: "CVC §40210 — Affidavit of nonliability for a sold/transferred vehicle",
      citation: "Cal. Veh. Code § 40210",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210.",
    },
    {
      label: "San Diego Municipal Code §86.0112 — Standing or Parking in Specified Places Prohibited (violations of a posted sign or curb marking)",
      citation: "S.D. Mun. Code § 86.0112",
      url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
    },
    {
      label: "San Diego Municipal Code §86.0123 — Parking Meter Rates — Authority (obligation to immediately pay/purchase time)",
      citation: "S.D. Mun. Code § 86.0123",
      url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
    },
    {
      label: "San Diego Municipal Code §86.0126 — Parking Meter — Overtime",
      citation: "S.D. Mun. Code § 86.0126",
      url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
    },
  ],
  recognizedDefenses: ["broken-meter", "valid-payment", "wrong-ticket-details", "not-my-vehicle"],
  defenses: [broken_meter, valid_payment, wrong_ticket_details, not_my_vehicle],
  faqs: [
    {
      question: "How long do I have to request an Administrative Review of a San Diego parking ticket?",
      answer:
        "You must request the free Administrative (Initial) Review within 21 calendar days from the date the citation was issued, or 14 calendar days from the mailing of a notice of delinquent parking violation. Do not send payment with your appeal, and do not simply pay the citation if you intend to contest it — under CVC §40204(a), receiving payment without a contest terminates the proceedings and closes off your right to appeal.",
    },
    {
      question: "What happens if Parking Administration denies my Administrative Review?",
      answer:
        "You must request a formal Administrative Hearing no later than 21 calendar days from the mailing of the Administrative Review results. Under CVC §40215(b), you must deposit the full amount of the parking penalty to request the hearing, unless you qualify for and are granted an indigency waiver under the issuing agency's written procedure.",
    },
    {
      question: "Does a court decide San Diego parking disputes?",
      answer:
        "Not at first. Parking Administration decides the Administrative Review, and if that's denied, an independent hearing examiner — statutorily required under CVC §40215 to be separate from the citation, collection, or processing function — decides the formal Administrative Hearing. Beyond that, you may seek de novo review by the San Diego Superior Court within 30 calendar days of the hearing decision, under CVC §40230.",
    },
    {
      question: "What happens if I ignore a San Diego parking citation?",
      answer:
        "Fine amounts under $250 double if no appeal or payment is received within 21 calendar days of issuance, and an additional $10 fee is added after 56 days, per CVC §40203.5(a). Unpaid citations are subject to referral for collections, credit reporting, and civil judgment; a vehicle with five or more delinquent citations may be booted or impounded under CVC §22651.7, and the DMV must refuse to renew the vehicle's registration under CVC §4760 until all penalties are paid.",
    },
  ],
  sources: [
    {
      label: "City of San Diego — Citations",
      url: "https://www.sandiego.gov/parking/citations",
    },
    {
      label: "City of San Diego — Appeal a Parking Citation/Ticket",
      url: "https://www.sandiego.gov/parking/citations/appeal",
    },
    {
      label: "City of San Diego — Citations/Tickets Frequently Asked Questions",
      url: "https://www.sandiego.gov/parking/faqs/citationfaq",
    },
    {
      label: "City of San Diego — Handwritten Citation",
      url: "https://www.sandiego.gov/parking/citations/hcitation",
    },
    {
      label: "City of San Diego — Parking Citation Payments (Office of the City Treasurer)",
      url: "https://www.sandiego.gov/treasurer/payments/citation",
    },
    {
      label: "City of San Diego — Parking Meter Operations",
      url: "https://www.sandiego.gov/parking/meterops",
    },
    {
      label: "City of San Diego — Registration Violations / Disabled Parking Violations / Appeal Process (citation instructions, PDF)",
      url: "https://www.sandiego.gov/sites/default/files/legacy/parking/pdf/citation_instructions.pdf",
    },
    {
      label: "City of San Diego — Administrative Review portal (Initial Review submission)",
      url: "http://duncan.imageenforcement.com/AdminReviewSites/SanDiegoReview",
    },
    {
      label: "San Diego Municipal Code, Chapter 8, Article 6, Division 1 — General Parking Regulations (PDF)",
      url: "https://docs.sandiego.gov/municode/municodechapter08/ch08art06division01.pdf",
    },
    {
      label: "California Legislative Information — CVC §40215 (initial review and administrative hearing)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
    },
    {
      label: "California Legislative Information — CVC §40204 (effect of payment without contest)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40204.",
    },
    {
      label: "California Legislative Information — CVC §40202 (required notice content)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202.",
    },
    {
      label: "California Legislative Information — CVC §40230 (superior court de novo review)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40230.",
    },
    {
      label: "California Legislative Information — CVC §40200 (owner/driver liability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40200.",
    },
    {
      label: "California Legislative Information — CVC §40203.5 (local parking-penalty and late-fee schedule)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40203.5.",
    },
    {
      label: "California Legislative Information — CVC §4760 (DMV registration-renewal refusal)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760.",
    },
    {
      label: "California Legislative Information — CVC §22651.7 (immobilization for 5+ delinquent citations)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651.7.",
    },
    {
      label: "California Legislative Information — CVC §22508.5 (inoperable meters)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5.",
    },
    {
      label: "California Legislative Information — CVC §40206.5 (vehicle description mismatch)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40206.5.",
    },
    {
      label: "California Legislative Information — CVC §40210 (affidavit of nonliability)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40210.",
    },
    {
      label: "California Legislative Information — CVC §9800 (liens for unpaid registration/parking-penalty amounts)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=9800.",
    },
    {
      label: "California Legislative Information — CVC §4751 (DMV refusal of registration for a §9800 lien)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4751.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
