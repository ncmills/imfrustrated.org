import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/los-angeles.json (verifiedAt 2026-07-20).
// IMPORTANT: Los Angeles uses California's state-mandated two-step administrative process
// under CVC §§40200–40230, run by LADOT's own Parking Violations Bureau (Adjudication
// Division): a free Initial Review first, then (if upheld) a paid-deposit Administrative
// Hearing before an independent Hearing Examiner. There is no "not guilty" plea as such —
// the driver requests review/hearing and states the reason(s) for contesting, and LADOT's
// online portal and several published pages live on its payment vendor's domain
// (etimspayments.com) but are the City's own designated PVB system, linked from
// ladotparking.org. Every defense statement below is addressed to LADOT/PVB as an Initial
// Review request.

const cityHowToContest: string[] = [
  "Note your citation number, license plate, and the violation code/date/time/location printed on the ticket, and act within the deadline: 21 calendar days from the date the citation was issued, or 14 calendar days from the mailing date of the first delinquent/overdue notice, whichever applies.",
  "Do not simply pay the citation if you intend to contest it — per California Vehicle Code §40204, paying the parking penalty without also requesting review closes the case and forfeits your right to contest.",
  "Request a free Initial Review from LADOT's Parking Violations Bureau by web (PVB Customer Service Portal), telephone, mail, or in person. No payment is required for this step. State your reason(s) for contesting and submit your evidence — LADOT's own Initial Review/RFI Checklist lists exactly what documentation is expected for common grounds (non-ownership, stolen vehicle/plate, broken meter, prior/duplicate payment, disabled vehicle, medical emergency, equipment already corrected, etc.).",
  "Wait for LADOT to mail its Initial Review decision. If the citation is canceled, you're done. If it's upheld as valid, the decision will explain why and how to request the next step.",
  "If dissatisfied with the Initial Review, request an Administrative Hearing within 21 calendar days of the mailing date of the Initial Review decision, using the Hearing Request Form (mail, phone, in person; online hearing requests are only available for the in-person option). State law (CVC §40215(b)) requires you to first deposit (pay) the full parking penalty before the hearing is scheduled, unless you qualify for and are granted a Pre-Payment (indigency) Waiver under HUD low-income guidelines.",
  "Choose an in-person hearing or a hearing by written declaration (by mail); for a written declaration, submit your written reason for contesting plus ALL supporting evidence, since you carry the burden of proving any defense you raise. An independent Hearing Examiner decides based on a preponderance of the evidence and mails a written decision; any refund owed is mailed roughly 30 days after the decision.",
  "If you disagree with the Hearing Examiner's final decision, you may appeal to the Los Angeles Superior Court within 30 calendar days of the decision being mailed (CVC §40230); the case is heard de novo and a court filing fee applies (refundable by the processing agency if you prevail).",
];

const ifThisDoesntWork =
  "If LADOT's Initial Review upholds the citation, you may request an Administrative Hearing within 21 calendar days of the mailing date of the Initial Review decision, using the Hearing Request Form. State law (CVC §40215(b)) requires you to deposit the full parking penalty before the hearing is scheduled, unless you qualify for a Pre-Payment (indigency) Waiver under HUD low-income guidelines. An independent Hearing Examiner decides based on a preponderance of the evidence and mails a written decision. If you disagree with that decision, you may appeal to the Los Angeles Superior Court within 30 calendar days of the decision being mailed (CVC §40230); the case is heard de novo and a court filing fee applies, refundable by the processing agency if you prevail.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "los-angeles",
  title: "Fight a broken-meter parking ticket in Los Angeles",
  metaDescription:
    "Free Initial Review letter for a broken-meter parking ticket in Los Angeles. Cites CVC §22508.5 — mail-ready template for LADOT's Parking Violations Bureau.",
  whenItApplies:
    "You were cited at a metered or pay-station space, but the specific meter/pay station serving that space was inoperable — it could not accept payment in ANY form (not merely coins-only or card-only). California law lets you park up to the posted time limit in that case, and bars a nonpayment citation. A meter that accepts one payment method but not another (e.g., cards work but coins don't) is NOT considered broken.",
  body: `To: City of Los Angeles Department of Transportation (LADOT) — Parking Violations Bureau
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Initial Review of this citation under California Vehicle Code §40215 and ask that it be canceled.

On [DATE] at approximately [TIME], I parked at [LOCATION], a metered/pay-station space. The meter/pay station serving that space could not accept payment in any form: [DESCRIBE — e.g., blank/dark screen, rejected every payment method I tried, printed no receipt, displayed an error code]. I did not merely find one payment method unavailable — no payment method worked at that meter/pay station.

Under California Vehicle Code §22508.5, a vehicle may be parked at a space controlled by an inoperable parking meter or pay station up to the posted time limit without being cited for nonpayment. I ask that this citation be canceled on that basis.

Attached: [time-stamped photo(s) of the inoperable meter/pay station showing the error or blank screen, a note of exactly which payment methods I attempted and that all failed, and — if I paid by credit/debit card at that meter or a nearby one and was still cited — a statement showing the first 6 and last 4 digits of the card used].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the meter/pay station showing it was inoperable or displaying an error at the time of citation",
    "A note of exactly which payment methods you attempted and that all failed",
    "If you paid by credit/debit card at that meter or a nearby one and were still cited, a credit card statement showing the first 6 and last 4 digits of the card used (per LADOT's Initial Review checklist)",
    "Timestamp/location details tying your evidence to the cited space",
  ],
  cityNotes:
    "LADOT's own \"Tips to Avoid Parking Citations\" page states this qualification directly: meters/paystations are NOT considered broken unless they cannot accept payment in any form; if one payment method still works, there is no defense. LADOT's Initial Review/RFI Checklist has a dedicated \"METER\" category for payment-issue or still-has-time disputes.",
  codeCite: {
    label: "CVC §22508.5 — Parking at an inoperable parking meter or pay station",
    citation: "Cal. Veh. Code § 22508.5",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22508.5.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LADOT — Tips to Avoid Parking Citations (Parking Meters & Paystations)",
      url: "https://ladotparking.org/5-tips-avoid-citations/",
    },
    {
      label: "LADOT Parking Violations Bureau — Initial Review/RFI Checklist (PDF, \"METER\")",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
  ],
  faqs: [
    {
      question: "Does it count if only one payment method at the meter was broken?",
      answer:
        "No. LADOT's own guidance is explicit that a meter or pay station is NOT considered broken unless it cannot accept payment in any form. If cards worked but coins didn't (or vice versa), this defense does not apply.",
    },
    {
      question: "I paid by card at that meter and was still cited — what do I attach?",
      answer:
        "LADOT's Initial Review checklist asks for a credit card statement showing the first 6 and last 4 digits of the card used, so the reviewer can match your payment to the citation.",
    },
    {
      question: "Where does LADOT list exactly what evidence it wants for a broken-meter dispute?",
      answer:
        "LADOT's Initial Review/RFI Checklist (PDF) has a dedicated \"METER\" category covering payment-issue and still-has-time disputes — match your evidence to that category before submitting.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "los-angeles",
  title: "Fight a Los Angeles parking ticket when you already paid",
  metaDescription:
    "Free Initial Review letter for an LA parking ticket issued despite valid payment. Cites CVC §40215(a) and LADOT's own payment dispute ground.",
  whenItApplies:
    "You were cited for a payment/meter violation, but you had actually already paid — a duplicate/prior payment, a payment that was processed but not reflected on the meter or in LADOT's system, or a stolen/forged payment instrument was used to pay on your behalf.",
  body: `To: City of Los Angeles Department of Transportation (LADOT) — Parking Violations Bureau
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Initial Review of this citation under California Vehicle Code §40215 and ask that it be canceled.

On [DATE], I was cited at [LOCATION] for a payment/meter violation. In fact, [DESCRIBE — e.g., I had already paid for this same space earlier that day, this payment was processed but not reflected in LADOT's system, or a stolen or forged payment instrument was used without my authorization]. Payment was made through [PAYMENT METHOD — check/money order, cash at a PVB Public Service Center, the City's website, or credit card], as shown in the attached documentation.

Under California Vehicle Code §40215(a), and consistent with LADOT's own published "Payment (Double/Prior) Forged or Stolen Payment" Initial Review dispute ground, I ask that this citation be canceled because the violation did not occur.

Attached: [legible copies of the front and back of any canceled check(s) or money order(s) used to pay, a cash receipt from a PVB Public Service Center, a confirmation receipt from the City's website, a bank statement showing the payment, and/or a credit card statement showing the first 6 and last 4 digits of the card used].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Legible copies of the front and back of the canceled check(s) or money order(s) used to pay",
    "A cash receipt obtained at a PVB cashiering (Public Service Center) facility",
    "A confirmation receipt if payment was submitted via the City's website",
    "A bank statement showing the funds leaving your account and going to the City",
    "A credit card statement showing payment to the City of Los Angeles PVB, with the first 6 and last 4 digits visible",
    "An FTB (Franchise Tax Board) intercept letter, if applicable",
  ],
  cityNotes:
    "This is LADOT's own published Initial Review checklist category, titled \"PAYMENT (DOUBLE/PRIOR) FORGED OR STOLEN PAYMENT.\" There is no LA-specific statute naming this defense; it falls under the general statutory ground in CVC §40215(a) that the issuing agency must cancel a citation if, after review, it is satisfied \"the violation did not occur.\"",
  codeCite: {
    label: "CVC §40215(a) — Initial review; cancellation if the violation did not occur",
    citation: "Cal. Veh. Code § 40215(a)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LADOT Parking Violations Bureau — Initial Review/RFI Checklist (PDF, \"Payment (Double/Prior) Forged or Stolen Payment\")",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
  ],
  faqs: [
    {
      question: "What if my payment was never showing in LADOT's system?",
      answer:
        "Attach whatever proof of payment you have — a cash receipt from a PVB Public Service Center, a website confirmation receipt, a bank statement, or a credit card statement showing the first 6 and last 4 digits of the card used. LADOT's own checklist accepts any of these for a double/prior payment dispute.",
    },
    {
      question: "Someone used a stolen or forged payment instrument to pay for me — does that count?",
      answer:
        "Yes. LADOT's Initial Review checklist for this category is titled \"Payment (Double/Prior) Forged or Stolen Payment,\" so a forged or stolen payment instrument used on your behalf falls within the same dispute ground — document it as best you can.",
    },
    {
      question: "What is an FTB intercept letter, and do I need one?",
      answer:
        "It's a Franchise Tax Board notice about a tax-refund intercept. LADOT's checklist lists it as supporting evidence if applicable to your situation, but it isn't required for every payment dispute.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "los-angeles",
  title: "Fight a defective equipment/registration parking ticket in Los Angeles",
  metaDescription:
    "Free Initial Review letter for an LA parking ticket citing missing plates or tabs that were actually displayed. Mail-ready template for LADOT's PVB.",
  whenItApplies:
    "The citation is factually wrong about your vehicle or its compliance — most commonly an equipment/registration citation (missing front plate, expired-looking tabs, no visible registration) issued even though the required plate, tabs, or registration were actually properly displayed on the vehicle at the time of citation. You are disputing that the cited condition existed, not admitting the violation and asking for leniency.",
  body: `To: City of Los Angeles Department of Transportation (LADOT) — Parking Violations Bureau
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Initial Review of this citation under California Vehicle Code §40215 and ask that it be canceled.

This citation was issued for [DESCRIBE VIOLATION — e.g., missing front license plate, expired-looking registration tabs, no visible registration], but the required [PLATE / TABS / REGISTRATION] were actually properly displayed on my vehicle at the time this citation was issued. I am not asking for leniency on a violation that occurred — I am disputing that the cited condition existed at all.

Under California Vehicle Code §40202(a), the Notice of Parking Violation must accurately state the violation observed, and under §40215(a) LADOT must cancel a citation where, after review, it is satisfied the violation did not occur. Consistent with LADOT's own published guidance distinguishing a citation issued in error from a genuine, since-corrected equipment violation, I ask that this citation be canceled.

Attached: [a copy or photo of the citation showing the disputed field, my current vehicle registration or replacement tabs proving the equipment was valid at the time, a dated photograph of the plate/tabs properly affixed to the vehicle, and — if I have one — proof of correction bearing a law enforcement agency signature].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the citation showing the incorrect/disputed field",
    "Your current vehicle registration or replacement tabs proving the equipment was valid at the time of the citation",
    "A dated photograph of the plate/tabs properly affixed to the vehicle",
    "Proof of correction bearing a law enforcement agency signature, if you have one",
  ],
  cityNotes:
    "LADOT's Operations & Support FAQ draws this exact distinction: \"If you are disputing the validity of the citation because the required equipment (plates or tabs) were actually on the vehicle and you believe the citation was issued in error, you can file a claim to contest the citation like any other citation\" (as opposed to paying the reduced $10 civil fine for a genuine, since-corrected equipment violation under CVC §40225). LADOT's checklist has matching \"Missing Front Plates\" and \"Display of Tab\" categories for the correction scenario. Los Angeles has no dedicated ordinance requiring dismissal for a defective notice (unlike some cities); the hook is CVC §40202(a)'s list of information a Notice of Parking Violation must contain, combined with the general \"violation did not occur\" dismissal ground in CVC §40215(a).",
  codeCite: {
    label: "CVC §40202(a) — Required content of the Notice of Parking Violation",
    citation: "Cal. Veh. Code § 40202(a)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LADOT Parking Operations & Support FAQ (\"I received a citation because my car did not have a front license plate or my tabs...\")",
      url: "https://ladotparking.org/operations-support/parking-operations-support-faq/",
    },
    {
      label: "LADOT Parking Violations Bureau — Initial Review/RFI Checklist (PDF, \"Missing Front Plates\" / \"Display of Tab\")",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
  ],
  faqs: [
    {
      question: "Should I just pay the reduced $10 fine instead of contesting?",
      answer:
        "That reduced fine applies to a genuine, since-corrected equipment violation. LADOT's own FAQ distinguishes that from a citation you believe was issued in error because the plate or tabs were actually displayed — in that case, LADOT says you can file a claim to contest it like any other citation.",
    },
    {
      question: "What if my front plate was on the vehicle but fell off before an officer saw it?",
      answer:
        "This defense is for cases where the plate or tabs were properly displayed at the time of citation, not cases where equipment later came loose. Document the condition at the time as precisely as you can.",
    },
    {
      question: "Which LADOT checklist category matches my situation?",
      answer:
        "LADOT's Initial Review/RFI Checklist has separate \"Missing Front Plates\" and \"Display of Tab\" categories — match your evidence to whichever applies to your citation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "los-angeles",
  title: "Fight a Los Angeles parking ticket for a sold, stolen, or transferred vehicle",
  metaDescription:
    "Free Initial Review letter for an LA parking ticket on a sold, stolen, or transferred vehicle. Cites CVC §40215(a) — mail-ready template for LADOT's PVB.",
  whenItApplies:
    "You were not the responsible owner at the time of the violation: the vehicle was sold, gifted, donated, or leased/rented to someone else before the citation date; the vehicle or its license plate was stolen; or (for out-of-state plates) the vehicle is misidentified.",
  body: `To: City of Los Angeles Department of Transportation (LADOT) — Parking Violations Bureau
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Initial Review of this citation under California Vehicle Code §40215 and ask that it be canceled.

I was not the responsible owner of this vehicle at the time this citation was issued on [DATE]. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I sold, gifted, donated, or leased/rented the vehicle to another party on [TRANSFER DATE], before this citation was issued, as shown by the attached DMV Notice of Transfer & Release of Liability, dealer/leasing-company Bill of Sale or Trade-in Agreement, rental/lease agreement, or IRS-approved vehicle donation document. / (b) The vehicle was stolen, as documented in the attached police report. / (c) The license plate on this vehicle was stolen, as documented in the attached police report, and the vehicle's actual, currently valid plate is [CORRECT PLATE]. / (d) This citation lists an out-of-state plate that does not match my vehicle, as shown by my attached current registration.]

Under California Vehicle Code §40215(a), LADOT must cancel a citation where, after Initial Review, it is satisfied the registered owner was not responsible for the violation. I ask that this citation be canceled on that basis, and I have attached a completed Declaration of Non-Ownership where applicable.

Attached: [DMV Notice of Transfer & Release of Liability, or dealer/leasing-company Bill of Sale/Trade-in Agreement, rental/lease agreement, or IRS-approved donation document, plus a completed Declaration of Non-Ownership form; or a stolen-vehicle police report plus insurance payoff documentation or an official police garage tow receipt; or a stolen-license-plate police report plus valid DMV registration for the replacement plate; or current vehicle registration showing the out-of-state plate mismatch].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Sold/transferred vehicle: DMV Notice of Transfer & Release of Liability, OR a dealer/leasing-company Bill of Sale or Trade-in Agreement (private-party sales not accepted for this route), OR a rental/lease agreement, OR an IRS-approved vehicle donation document from a charity — plus a completed Declaration of Non-Ownership form",
    "Stolen vehicle: a stolen-and-recovery police report, or a stolen report plus insurance payoff documentation, or a stolen report plus an official police garage tow receipt",
    "Stolen license plate: a police report documenting the theft, plus valid DMV registration for the replacement plate",
    "Out-of-state plate mismatch: current vehicle registration",
  ],
  cityNotes:
    "This maps to several of LADOT's own Initial Review checklist categories (\"Declaration of Non-Ownership,\" \"Stolen Vehicle,\" \"Stolen License Plate,\" \"Not My Car (Out of State Plate Only)\"). It is codified directly: CVC §40215(a) requires cancellation if, after initial review, the issuing agency is satisfied \"the registered owner was not responsible for the violation.\" LADOT's FAQ separately warns that never receiving the citation is NOT itself a defense — notices go to the DMV address of record, so a seller must also complete the DMV's Release of Liability.",
  codeCite: {
    label: "CVC §40215(a) — Initial review; cancellation if the registered owner was not responsible",
    citation: "Cal. Veh. Code § 40215(a)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LADOT Adjudication Division FAQ (\"I sold my car. Why am I getting citations in the mail?\")",
      url: "https://ladotparking.org/adjudication-division/faq/",
    },
    {
      label: "LADOT Parking Violations Bureau — Initial Review/RFI Checklist (PDF)",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
  ],
  faqs: [
    {
      question: "I sold my car months ago — why am I still getting citations?",
      answer:
        "LADOT's Adjudication Division FAQ explains this happens because notices go to the DMV address of record. If you sold, gifted, or transferred the vehicle before the citation date, complete the DMV's Notice of Transfer & Release of Liability (or provide a dealer bill of sale, lease agreement, or donation document) along with a Declaration of Non-Ownership.",
    },
    {
      question: "Does 'I never received the citation' count as a defense?",
      answer:
        "No. LADOT's FAQ is explicit that never receiving the notice is not itself a defense — it's mailed to the DMV address of record, so keeping that address current (or completing a Release of Liability after a sale) is the seller's responsibility.",
    },
    {
      question: "My license plate — not the whole car — was stolen. Does this still apply?",
      answer:
        "Yes. LADOT's checklist has a dedicated \"Stolen License Plate\" category, which requires a police report documenting the theft plus your valid DMV registration for the replacement plate.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_vehicle: ParkingDefense = {
  slug: "disabled-vehicle",
  citySlug: "los-angeles",
  title: "Fight a Los Angeles parking ticket for a disabled vehicle",
  metaDescription:
    "Free Initial Review letter for an LA parking ticket issued while your car was mechanically disabled. Mail-ready template for LADOT's Parking Violations Bureau.",
  whenItApplies:
    "Your vehicle became mechanically disabled (broke down) at the cited location and could not immediately be moved, resulting in a parking citation while it sat waiting for repair, a tow, or roadside assistance.",
  body: `To: City of Los Angeles Department of Transportation (LADOT) — Parking Violations Bureau
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting an Initial Review of this citation under California Vehicle Code §40215 and ask that it be canceled.

On [DATE], my vehicle became mechanically disabled at [LOCATION]: [DESCRIBE THE FAILURE — e.g., the engine would not start, a dead battery, a flat tire, a breakdown requiring a tow]. The vehicle could not immediately be moved while it sat waiting for [REPAIR / TOW / ROADSIDE ASSISTANCE], which resulted in this citation.

Under California Vehicle Code §40215(a), LADOT must cancel a citation where extenuating circumstances explain the violation. Consistent with LADOT's own published "Disabled Vehicle" Initial Review dispute ground, I ask that this citation be canceled on that basis.

Attached: [current vehicle registration, and a tow receipt, battery-replacement receipt, roadside-assistance receipt, or repair receipt showing the vehicle was disabled and could not immediately be moved].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Current vehicle registration",
    "Proof the vehicle was disabled: a tow receipt, a battery-replacement receipt, a roadside-assistance receipt, or a repair receipt",
  ],
  cityNotes:
    "This is one of LADOT's own published Initial Review checklist categories (\"DISABLED VEHICLE\"), an LA-specific ground not tied to a defense-specific statute; it falls under the \"extenuating circumstances\" dismissal basis in CVC §40215(a).",
  codeCite: {
    label: "CVC §40215(a) — Initial review; cancellation for extenuating circumstances",
    citation: "Cal. Veh. Code § 40215(a)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LADOT Parking Violations Bureau — Initial Review/RFI Checklist (PDF, \"Disabled Vehicle\")",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
  ],
  faqs: [
    {
      question: "What proof does LADOT want for a disabled-vehicle dispute?",
      answer:
        "LADOT's own Initial Review checklist for this category asks for your current vehicle registration plus proof the vehicle was disabled — a tow receipt, battery-replacement receipt, roadside-assistance receipt, or repair receipt.",
    },
    {
      question: "Does it matter what kind of breakdown it was?",
      answer:
        "The record's ground is general — LADOT's checklist doesn't limit this to a specific kind of mechanical failure, only that the vehicle was disabled and receipted proof (tow, repair, roadside assistance, or battery replacement) documents it.",
    },
    {
      question: "What if I didn't get a receipt from whoever helped me?",
      answer:
        "Attach whichever receipt type you do have — LADOT's checklist accepts a tow receipt, a battery-replacement receipt, a roadside-assistance receipt, or a repair receipt, so any one of these can support the dispute.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const losAngelesCity: ParkingCity = {
  slug: "los-angeles",
  city: "Los Angeles",
  state: "CA",
  agency:
    "City of Los Angeles Department of Transportation (LADOT), Parking Violations Bureau — Adjudication Division. LADOT issues citations and conducts the state-mandated two-step administrative process (Initial Review, then Administrative Hearing) under California Vehicle Code §§40200–40230. LADOT's online citation portal and several published pages are hosted on its payment-processing vendor's domain (etimspayments.com) but are the City's own designated Parking Violations Bureau system, linked directly from ladotparking.org. A final decision may be appealed to the Los Angeles Superior Court (CVC §40230).",
  submitOnlineUrl: "https://prdwmq.etimspayments.com/pbw/include/vpportal/la/login_page.jsp",
  submitMailAddress: "Parking Violations Bureau, P.O. Box 30420, Los Angeles, CA 90030",
  submitInPerson:
    "Any of LADOT's four Public Service Centers (Downtown, Mid-Wilshire, Van Nuys, West Los Angeles), Monday–Friday 9:00 a.m.–5:00 p.m. (see ladotparking.org/contact-us/ for current locations); in-person Administrative Hearings are held at LADOT's Civic Center Parking Adjudication office. You can also request an Initial Review or Hearing by calling the 24-hour Customer Care Hotline at (866) 561-9742.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote:
    "California Vehicle Code §40215(a), which LADOT applies directly: \"For a period of 21 calendar days from the issuance of a notice of parking violation or 14 calendar days from the mailing of a notice of delinquent parking violation ... a person may request an initial review of the notice by the issuing agency.\" LADOT's own FAQ states it the same way: \"Citations must be contested within 21 days of the date the citation is issued, or 14 days of the date of the first overdue notice.\" The clock starts on the date the citation was physically issued (attached to the vehicle) — or, if you missed that window, on the mailing date of the first delinquent/overdue notice. Once that period lapses you lose the statutory right to an Initial Review, and LADOT states \"There is no appeal,\" except for two narrow late-review exceptions: the vehicle no longer belonged to you when the citation was issued, or extenuating circumstances (e.g., sole registered owner's death or an emergency) prevented timely contest.",
  penaltyNote:
    "Missing the 21-/14-day deadline forfeits your right to contest, and LADOT does not grant payment extensions; late fees are added that \"often double the citation fine,\" with additional collections fees added if it remains unpaid after that. Under CVC §4760, the California DMV must refuse to renew your vehicle registration once LADOT has filed an itemization of unpaid parking penalties with the DMV, until the outstanding penalties and fees are paid in full (with an exception if the citation was issued before you owned the vehicle). Under CVC §22651.7, once a vehicle has 5 or more delinquent parking citations it becomes eligible for immobilization (boot) or tow; LADOT's own FAQ confirms vehicles are not booted or towed with fewer than 5 delinquent citations. Boot removal requires payment of all fines/fees plus a $150 boot fee and proof of current registration; unpaid boot-eligible bills can also lead to a California income-tax-refund intercept. Parking citations are civil, not criminal — LADOT confirms you cannot be arrested for nonpayment, and citations cannot be discharged in bankruptcy.",
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
      label: "CVC §40202 — Required content of the Notice of Parking Violation; prima facie evidence",
      citation: "Cal. Veh. Code § 40202",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40202.",
    },
    {
      label: "CVC §40230 — Appeal of the administrative hearing decision to superior court",
      citation: "Cal. Veh. Code § 40230",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40230.",
    },
    {
      label: "CVC §4760 — DMV refusal to renew registration for unpaid parking penalties",
      citation: "Cal. Veh. Code § 4760",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=4760.",
    },
    {
      label: "CVC §22651.7 — Immobilization (boot) of vehicles with 5+ delinquent parking citations",
      citation: "Cal. Veh. Code § 22651.7",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22651.7.",
    },
    {
      label: "LAMC §89.60 — Authority for the City's schedule of civil parking penalties",
      citation: "L.A. Mun. Code § 89.60",
      url: "https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-172037",
    },
  ],
  recognizedDefenses: ["broken-meter", "valid-payment", "wrong-ticket-details", "not-my-vehicle", "disabled-vehicle"],
  defenses: [broken_meter, valid_payment, wrong_ticket_details, not_my_vehicle, disabled_vehicle],
  faqs: [
    {
      question: "How long do I have to dispute a Los Angeles parking ticket?",
      answer:
        "21 calendar days from the date the citation was issued, or 14 calendar days from the mailing date of the first delinquent/overdue notice, whichever applies. Once that period lapses, LADOT states \"there is no appeal\" except for two narrow exceptions: the vehicle no longer belonged to you when cited, or extenuating circumstances (such as the sole registered owner's death or an emergency) prevented timely contest.",
    },
    {
      question: "Can I just pay the citation and contest it later?",
      answer:
        "No. Under CVC §40204, paying the parking penalty without also requesting review closes the case and forfeits your right to contest. If you intend to dispute the citation, request an Initial Review instead of paying.",
    },
    {
      question: "Do I have to pay before I get a hearing?",
      answer:
        "The free Initial Review requires no payment. But if you're dissatisfied with that decision and request an Administrative Hearing, CVC §40215(b) requires you to first deposit the full parking penalty before the hearing is scheduled — unless you qualify for and are granted a Pre-Payment (indigency) Waiver under HUD low-income guidelines.",
    },
    {
      question: "What happens if I ignore a Los Angeles parking ticket?",
      answer:
        "Late fees are added that \"often double the citation fine,\" plus collections fees if it remains unpaid. Under CVC §4760, the DMV must refuse to renew your vehicle registration once LADOT files an itemization of unpaid penalties. Under CVC §22651.7, a vehicle with 5 or more delinquent citations becomes eligible for boot or tow; LADOT confirms vehicles are not booted or towed with fewer than 5 delinquent citations.",
    },
    {
      question: "What if I lose my Administrative Hearing?",
      answer:
        "You may appeal the Hearing Examiner's decision to the Los Angeles Superior Court within 30 calendar days of the decision being mailed, under CVC §40230. The case is heard de novo in court, and a filing fee applies (refundable by the processing agency if you prevail).",
    },
  ],
  sources: [
    {
      label: "LADOT — Contest a Parking Citation",
      url: "https://ladotparking.org/adjudication-division/contest-a-parking-citation/",
    },
    {
      label: "LADOT — Adjudication Division FAQ",
      url: "https://ladotparking.org/adjudication-division/faq/",
    },
    {
      label: "LADOT — Parking Operations & Support FAQ",
      url: "https://ladotparking.org/operations-support/parking-operations-support-faq/",
    },
    {
      label: "City of Los Angeles Parking Violations Bureau — Contest a Citation (three-tier process)",
      url: "https://prodpci.etimspayments.com/pbw/include/laopm/contest.htm",
    },
    {
      label: "City of Los Angeles Parking Violations Bureau — Initial Review Process",
      url: "https://prodpci.etimspayments.com/pbw/include/laopm/adminrev.htm",
    },
    {
      label: "City of Los Angeles Parking Violations Bureau — Customer Service Portal (online citation contest login)",
      url: "https://prdwmq.etimspayments.com/pbw/include/vpportal/la/login_page.jsp",
    },
    {
      label: "LADOT — Administrative Hearing Request Form and Statement of Rights (PDF)",
      url: "https://ladotparking.org/wp-content/uploads/2018/04/Administrative-Hearing-Request.pdf",
    },
    {
      label: "LADOT — Initial Review/RFI Checklist (PDF)",
      url: "https://ladotparking.org/wp-content/uploads/2018/03/Checklist-final-02092018.pdf",
    },
    {
      label: "LADOT (lacity.gov) — Guide to Contest a Citation",
      url: "https://ladot.lacity.gov/coronavirus/guide-contest-citation",
    },
    {
      label: "California Vehicle Code § 40215 (official text, Legislative Information)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=40215.",
    },
    {
      label: "Los Angeles Municipal Code § 89.60 — Authority (American Legal code library)",
      url: "https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-172037",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
