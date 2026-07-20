import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/philadelphia.json (verifiedAt 2026-07-20).
// IMPORTANT: Philadelphia parking-ticket hearings are decided by the City's Bureau of
// Administrative Adjudication (BAA) — a City agency separate from the Philadelphia Parking
// Authority (PPA), created under Phila. Code Chapter 12-2800 and exercising powers vested in
// the Director of Finance (§12-2802), with PPA delegated enforcement/administration functions
// (§12-2803). Philadelphia's Code does NOT publish a defense-specific statute for any of the
// grounds below — every codeCite is § 12-2807, the general Adjudications (hearing procedure)
// section. The substantive ground for each defense is PPA's own published dispute guidance
// (philapark.org/dispute/, philapark.org/faq/), not the Code itself. Every defense statement
// below is addressed to the Bureau of Administrative Adjudication as a Code §12-2806 "Answer"
// denying liability, consistent with Philadelphia's administrative-tribunal (DENY-plea) model.

const cityHowToContest: string[] = [
  "Locate your parking ticket number and confirm the violation code, date, time, and location printed on it. Do not pay a ticket you intend to dispute — the Philadelphia Code and Charter treat payment as an admission of guilt and liability.",
  "If your claim is one of four specific types — a broken parking meter/kiosk, a valid kiosk payment receipt, a valid permit or disabled placard for that location, or a sign discrepancy — you can raise it directly with PPA's Parking Violations Branch (PVB) by phone (215-222-9100 option 1, or 888-591-3636), email (ppa@philapark.org), or mail (Parking Violations Branch, PO Box 41818, Philadelphia, PA 19101-1818).",
  "For any other basis for dispute, submit an \"Answer\" under Philadelphia Code §12-2806 denying liability and requesting a hearing — either a hearing by mail/electronic submission of written testimony and evidence, or (if eligible under the disability-parking provision) a telephone hearing — within 15 days of the date the ticket was served, to avoid late fees per Code §12-2804(4) and PPA's own guidance.",
  "Submit online at the City's online parking dispute portal, or by mail to the Bureau of Administrative Adjudication (48 N. 8th Street, Philadelphia, PA 19107) with your written testimony and copies of your evidence (photos, receipts, police reports, etc.) attached.",
  "While your online or mail submission is pending, a \"suspend\" is placed on the ticket — no additional penalties, noticing, or collection activity occur until a Parking Hearing Examiner issues a decision, which typically takes 4–6 weeks for mail/online hearings.",
  "If you disagree with the Hearing Examiner's decision, you may appeal to a Parking Appeals Panel by serving a written notice of appeal on the Parking Authority within 30 days of the entry of the final determination (Code §12-2808(3)); the appeal is heard by a different hearing examiner and may be conducted in person if you request it in your notice.",
  "If you disagree with the Parking Appeals Panel's decision, your remaining option is a further appeal to the Philadelphia Court of Common Pleas (a court filing fee applies, borne by the losing party per Code §12-2808(6)).",
];

const ifThisDoesntWork =
  "If the Hearing Examiner finds you liable, you may appeal to a Parking Appeals Panel by serving a written notice of appeal on the Parking Authority within 30 days of the entry of the final determination (Phila. Code §12-2808(3)); the appeal is heard by a different hearing examiner and may be conducted in person if you request it in your notice. If the Parking Appeals Panel also rules against you, your remaining option is a further appeal to the Philadelphia Court of Common Pleas — a court filing fee applies, borne by the losing party (Phila. Code §12-2808(6)).";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "philadelphia",
  title: "Fight a broken-meter parking ticket in Philadelphia",
  metaDescription:
    "Free defense-statement letter for a broken-meter or kiosk parking ticket in Philadelphia. Cites PPA's own dispute grounds — mail-ready BAA template.",
  whenItApplies:
    "You were ticketed for a meter- or kiosk-related violation (e.g., failure to pay, overtime meter, invalid kiosk receipt), but the specific meter or pay-by-space kiosk you used was defective.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter/kiosk serving that spot, but it was defective: [DESCRIBE — e.g., blank screen, rejected every payment method I tried, printed no receipt, displayed an error message]. I reported this to the Philadelphia Parking Authority's Parking Violations Branch (PVB) on [DATE OF COMPLAINT] by [phone / email to ppa@philapark.org], which PVB fields directly as one of its four specific claim types.

Under Phila. Code §12-2807, and consistent with PPA's own published dispute ground allowing a direct claim for "a broken parking meter" through its Parking Violations Branch, I ask that this violation be dismissed based on the malfunctioning meter/kiosk at this location.

Attached: [date- and time-stamped photo(s) of the broken meter/kiosk and any error message it displayed, a copy of my complaint to PPA, and any partial receipt or transaction record the malfunctioning meter/kiosk produced].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photos of the broken meter or kiosk and any error message it displayed",
    "A complaint filed with PPA reporting the broken meter/kiosk (by phone at 215-222-9100 option 1, or 888-591-3636, or by email to ppa@philapark.org) to initiate PPA's investigation",
    "Any partial receipt or transaction record the malfunctioning meter/kiosk produced",
  ],
  cityNotes:
    "PPA's Parking Violations Branch (PVB) — a distinct front-end channel from the Bureau of Administrative Adjudication (BAA) — specifically handles \"a broken parking meter\" as one of four claim types it will investigate directly, separate from the general BAA hearing process used for all other dispute grounds.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Contesting a Ticket: You've Got Options (PVB claim types)",
      url: "https://philapark.org/2017/08/contesting-a-ticket-youve-got-options-2/",
    },
    {
      label: "PPA — Frequently Asked Questions (broken meter complaint contacts)",
      url: "https://philapark.org/faq/",
    },
  ],
  faqs: [
    {
      question: "Do I need to report the broken meter to PPA before disputing the ticket?",
      answer:
        "It strengthens the claim significantly. PPA's Parking Violations Branch investigates broken-meter claims directly — reach them at 215-222-9100 option 1, 888-591-3636, or ppa@philapark.org, and keep a record of when you reported it.",
    },
    {
      question: "Can I raise this directly with PPA instead of filing a BAA Answer?",
      answer:
        "PPA's PVB fields \"a broken parking meter\" as one of four claim types it will investigate directly. If PVB doesn't resolve it in your favor, you still have the right to file a formal Answer and request a BAA hearing.",
    },
    {
      question: "What if the kiosk gave no error message at all?",
      answer:
        "Photograph the blank or non-responsive screen anyway, note the time, and describe in your Answer exactly what you tried (which payment methods, how many attempts). A dead screen with no receipt output is still evidence of malfunction.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "philadelphia",
  title: "Fight a missing or illegible sign parking ticket in Philadelphia",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket with a sign discrepancy — missing, obscured, or contradictory signage. Mail-ready BAA template.",
  whenItApplies:
    "You were ticketed for violating a posted sign restriction, but the sign at that location was missing, obscured, damaged, or contradictory (\"sign discrepancy\").",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the posted sign governing that spot was [DESCRIBE THE DEFECT — missing entirely, obscured by a tree/vehicle/construction, damaged or faded to the point of illegibility, or contradictory as to which restriction applied]. I had no way to comply with a restriction that was not properly and clearly posted at the location.

Under Phila. Code §12-2807, and consistent with PPA's own published claim category for a "sign discrepancy" — one of the four claim types its Parking Violations Branch fields directly — I ask that this violation be dismissed based on the defective signage at this location.

Attached: [photos of the exact spot where I was parked showing the missing/obscured/contradictory sign, photos of the full block/curb area for context, and any complaint I filed reporting the sign issue].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the exact spot where you were parked, showing the missing/obscured sign or the contradictory signage",
    "Photos showing the full block/curb area for context",
    "Any supporting record (e.g., a 311-style complaint) if you reported the sign issue",
  ],
  cityNotes:
    "PPA's Parking Violations Branch (PVB) lists \"sign discrepancy\" as one of the four specific claim types it fields directly, separate from the general BAA hearing process. Neither PPA's FAQ nor the Philadelphia Code publishes a detailed evidentiary checklist for this ground beyond the general right to \"present evidence, including pictures, tow receipts, etc.\" at a BAA hearing.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Contesting a Ticket: You've Got Options (PVB claim types)",
      url: "https://philapark.org/2017/08/contesting-a-ticket-youve-got-options-2/",
    },
    {
      label: "PPA — Frequently Asked Questions (right to present evidence)",
      url: "https://philapark.org/faq/",
    },
  ],
  faqs: [
    {
      question: "What counts as a \"sign discrepancy\" in Philadelphia?",
      answer:
        "PPA fields this as one of four direct claim types its Parking Violations Branch investigates: signage that is missing, obscured, damaged, or contradictory as to which restriction actually applied at the location.",
    },
    {
      question: "Does Philadelphia publish a specific evidence checklist for sign disputes?",
      answer:
        "No. PPA's FAQ and the Code only describe a general right to present evidence — including pictures and receipts — at a BAA hearing. Broad, well-documented photos of the spot and the sign are your strongest option.",
    },
    {
      question: "Should I report the sign issue before or after disputing the ticket?",
      answer:
        "As soon as possible either way. A dated complaint record corroborates that the defect existed at the time of the violation, not just when you happened to photograph it later.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued despite a valid kiosk receipt. Mail-ready Bureau of Administrative Adjudication template.",
  whenItApplies:
    "You were ticketed for a meter/kiosk payment violation (e.g., \"Not Pay Meter Fee,\" \"Overtime Meter,\" \"Invalid Receipt – Parking Meter Kiosk\"), but you actually held a valid kiosk payment receipt covering the ticketed time.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — parking kiosk / mobile parking app]. My receipt shows a paid time window of [PAID TIME WINDOW], which covers [TICKET VIOLATION TIME], the time this ticket states the violation occurred. I held valid, paid parking at the location and time cited on this ticket.

Under Phila. Code §12-2807, and consistent with PPA's own published claim category for "having a valid kiosk receipt" — one of the four claim types its Parking Violations Branch fields directly — I ask that this violation be dismissed based on my valid payment for the cited time and location.

Attached: [the physical or photographed parking kiosk receipt showing the paid time window, or a payment-app transaction confirmation, showing coverage of the ticketed time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "The physical or photographed parking kiosk receipt showing the paid time window",
    "A payment-app transaction confirmation, if you paid via a mobile parking app",
    "Comparison of the receipt's covered time window against the ticket's recorded violation time",
  ],
  cityNotes:
    "PPA's Parking Violations Branch (PVB) lists \"having a valid kiosk receipt\" as one of the four claim types it fields directly. Unlike some cities, Philadelphia's Code does not publish a specific codified affirmative-defense subsection for valid payment — this is PPA operational guidance, adjudicated under the Chapter 12-2800 general hearing procedure.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Contesting a Ticket: You've Got Options (PVB claim types)",
      url: "https://philapark.org/2017/08/contesting-a-ticket-youve-got-options-2/",
    },
  ],
  faqs: [
    {
      question: "Is a valid kiosk receipt a codified defense under Philadelphia's Code?",
      answer:
        "No — Philadelphia's Code does not publish a specific affirmative-defense subsection for valid payment. It is PPA operational guidance, handled through PVB's four claim types and adjudicated under the Chapter 12-2800 general hearing procedure.",
    },
    {
      question: "What if I paid with a mobile parking app instead of the kiosk?",
      answer:
        "Attach the app's transaction confirmation showing the location, date, and paid time window in place of a physical receipt.",
    },
    {
      question: "My receipt window is close to the violation time but not an exact match — does that matter?",
      answer:
        "Compare your receipt's covered time window directly against the violation time printed on the ticket and explain the overlap clearly in your Answer; PPA's published ground is about a valid receipt covering the cited time, so precision here helps.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket on a stolen vehicle or tag",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued on a stolen vehicle or license plate/tag. Mail-ready Bureau of Administrative Adjudication template.",
  whenItApplies: "Your vehicle or its license plate/tag was stolen at the time the ticket was issued.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], the vehicle bearing plate [PLATE] — or its license plate/tag — was stolen. The theft was reported to the [POLICE DEPARTMENT / CITY OR TOWNSHIP WHERE THE THEFT OCCURRED] on [DATE OF POLICE REPORT], before this ticket was issued on [TICKET DATE]. [IF RECOVERED: The vehicle/tag was recovered on [RECOVERY DATE].] [IF NOT YET RECOVERED: As of this Answer, the vehicle/tag has not yet been recovered.]

Under Phila. Code §12-2807(4), and consistent with PPA's own published guidance that a vehicle owner is generally not responsible for violations occurring while the vehicle or tag was stolen, I ask that this violation be dismissed based on the theft documented in the attached police report.

Attached: [a legible copy of the police stolen vehicle/tag report showing the date and time of the theft, and documentation of the vehicle/tag's recovery date if applicable].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A legible copy of the police stolen vehicle/tag report (the report number alone is not sufficient) showing the date and time of the theft",
    "Documentation of the vehicle/tag's recovery date, if it was recovered by the time of your hearing",
    "If not yet recovered, documentation showing that as well",
  ],
  cityNotes:
    "Per PPA's FAQ: \"Generally speaking, no [you are not responsible]... Please keep in mind that regardless of where you live or where the vehicle is registered, the stolen vehicle/tag report is issued by the city or township in which the theft occurred.\" Separately, Code §12-2807(4) limits a related ground — never having received a mailed notice of violation is NOT itself a valid defense unless the vehicle owner can prove a state DMV was notified of a change of address before the violation date.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (default vacatur; notice-of-violation limitations)",
    citation: "Phila. Code § 12-2807(4)",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Dispute a Parking Ticket FAQ (\"IF MY VEHICLE/TAG WAS STOLEN...\")",
      url: "https://philapark.org/dispute/",
    },
  ],
  faqs: [
    {
      question: "Is a full police report required, or is the report number enough?",
      answer:
        "A legible copy of the actual stolen vehicle/tag report is required — the report number alone is not sufficient per PPA's guidance.",
    },
    {
      question: "Which police department should have filed the report?",
      answer:
        "The stolen vehicle/tag report must come from the city or township where the theft actually occurred, regardless of where you live or where the vehicle is registered.",
    },
    {
      question: "I never received the ticket in the mail — is that a separate defense?",
      answer:
        "Not on its own. Code §12-2807(4) makes clear that never receiving a mailed notice of violation is not itself a valid defense, unless you can prove a state DMV was notified of your change of address before the violation date.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_permit: ParkingDefense = {
  slug: "valid-permit",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket with a valid permit or placard",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued despite a valid residential permit or disabled placard. Mail-ready BAA template.",
  whenItApplies:
    "You were ticketed in a location requiring a residential parking permit or a disabled-parking placard/permit, but you held a valid permit or placard for that specific location at the time of the violation.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION] while displaying a valid [RESIDENTIAL PARKING PERMIT / DISABLED PLACARD] for that specific block/zone. The permit/placard, number [PERMIT/PLACARD NUMBER], was active and properly displayed in the vehicle at the time cited.

Under Phila. Code §12-2807, and consistent with PPA's own published claim category for "possessing a valid permit/disabled placard for the location you were parked" — one of the four claim types its Parking Violations Branch fields directly — I ask that this violation be dismissed based on the valid permit/placard in effect at this location.

Attached: [a photo showing the permit or placard properly displayed in the vehicle at the time cited, a copy of the permit or placard itself matching the vehicle and location, and PPA permit-account records confirming the permit was active and valid for that block/zone on the ticket date].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A photo showing the permit or placard properly displayed in the vehicle at the time cited",
    "A copy of the permit or placard itself, matching the vehicle and location",
    "PPA permit-account records confirming the permit was active and valid for that block/zone on the ticket date",
  ],
  cityNotes:
    "PPA's Parking Violations Branch (PVB) lists \"possessing a valid permit/disabled placard for the location you were parked\" as one of the four claim types it fields directly. The underlying violations this defense answers include Code §12-2709(1) (Parking in Residential District Without Permit) and the disability-parking-space provisions in §12-1117.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Contesting a Ticket: You've Got Options (PVB claim types)",
      url: "https://philapark.org/2017/08/contesting-a-ticket-youve-got-options-2/",
    },
  ],
  faqs: [
    {
      question: "What underlying violations does this defense typically answer?",
      answer:
        "Common underlying charges include Code §12-2709(1) (Parking in Residential District Without Permit) and the disability-parking-space provisions in §12-1117, though the dismissal itself is decided under the general §12-2807 hearing procedure.",
    },
    {
      question: "Is it enough that I own a permit for the zone, or does it need to match this exact block?",
      answer:
        "It needs to match the specific block/zone. PPA's claim category is for a permit or placard valid \"for the location you were parked,\" so confirm your permit-account records show validity for that exact zone on the ticket date.",
    },
    {
      question: "Can I raise this directly with PPA instead of filing a BAA Answer?",
      answer:
        "Yes — PPA's PVB fields valid permit/placard claims as one of its four direct claim types. If PVB doesn't resolve it, you retain the right to file a formal Answer and request a BAA hearing.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const vehicle_breakdown: ParkingDefense = {
  slug: "vehicle-breakdown",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket for a mechanical breakdown",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued after a sudden vehicle breakdown. Mail-ready Bureau of Administrative Adjudication template.",
  whenItApplies:
    "Your vehicle suddenly and unexpectedly broke down (a mechanical failure) while parked or stopped in a restricted location, and you took reasonably prompt steps to remove it once possible.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], my vehicle suddenly and unexpectedly experienced a mechanical failure while parked/stopped at [LOCATION]: [DESCRIBE THE FAILURE — e.g., the engine would not restart, a flat tire with no safe way to change it, a sudden transmission or gas-gauge failure]. I took reasonably prompt steps to remove the vehicle once it was possible to do so, arranging removal by [TOW COMPANY / REPAIR SHOP NAME] on [REMOVAL DATE/TIME].

Under Phila. Code §12-2807, and consistent with PPA's own published guidance recognizing mechanical breakdown as a potentially valid excuse when documented, I ask that this violation be dismissed based on the sudden mechanical failure described above and the prompt removal that followed.

Attached: [a tow or repair-shop receipt showing the date/time of the breakdown and removal, documentation of the specific mechanical failure, and any contemporaneous evidence that I took timely steps to remove the vehicle].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A tow or repair-shop receipt showing the date/time of the breakdown and removal",
    "Documentation of the specific mechanical failure — e.g., a repair record proving a sudden gas-gauge failure, if the issue was running out of gas",
    "Any contemporaneous evidence that you took timely steps to remove the vehicle from the roadway",
  ],
  cityNotes:
    "PPA's FAQ: \"Having mechanical issues with your vehicle could be a valid excuse, but it's not necessarily a guarantee you will succeed... running out of gas is unlikely to be a sufficient excuse unless you can prove that a sudden failure of the gas gauge was the reason you had run out of gas.\"",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Dispute a Parking Ticket FAQ (\"MY VEHICLE BROKE DOWN. IS THAT A VALID EXCUSE?\")",
      url: "https://philapark.org/dispute/",
    },
  ],
  faqs: [
    {
      question: "Is a mechanical breakdown a guaranteed defense in Philadelphia?",
      answer:
        "No. PPA's own FAQ describes it as \"a valid excuse\" that is \"not necessarily a guarantee you will succeed\" — the strength of your case depends on documentation of the failure and how promptly you removed the vehicle.",
    },
    {
      question: "Does running out of gas count as a breakdown?",
      answer:
        "Generally not, per PPA's FAQ, unless you can prove a sudden failure of the gas gauge caused you to run out unexpectedly — ordinary running out of gas is unlikely to succeed as an excuse.",
    },
    {
      question: "How fast do I need to have the vehicle removed?",
      answer:
        "PPA does not publish a fixed time limit, but expects reasonably prompt removal once it became possible. Document the timeline — when the failure occurred, when you called for help, and when the vehicle was actually removed.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const medical_emergency: ParkingDefense = {
  slug: "medical-emergency",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket after a medical emergency",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued during a medical emergency. Mail-ready Bureau of Administrative Adjudication template.",
  whenItApplies:
    "You (or a person in your direct, immediate care) had a medical emergency requiring urgent transport or life-saving care, which caused or prevented compliance with the parking regulation.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, denying liability for this violation, and respectfully request that it be dismissed.

On [DATE], I was directly involved in a medical emergency involving [MYSELF / NAME OF PERSON IN MY DIRECT, IMMEDIATE CARE] requiring urgent transport / life-saving care: [DESCRIBE THE EMERGENCY]. This emergency directly caused/prevented my compliance with the parking regulation at [LOCATION] because [EXPLAIN].

Under Phila. Code §12-2807, and consistent with PPA's own published guidance recognizing a documented medical emergency involving urgent transport or life-saving care as a potentially valid excuse, I ask that this violation be dismissed based on the emergency described above.

Attached: [ambulance run sheet or EMS/hospital records documenting the emergency and its timing, and any documentation showing I was directly involved in the emergency transport or life-saving care].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Ambulance run sheet or EMS/hospital records documenting the emergency and its timing",
    "Any documentation showing you were directly involved in the emergency transport or life-saving care (not merely responding afterward)",
  ],
  cityNotes:
    "PPA's FAQ distinguishes strong from weak cases: a heart attack with ambulance/hospital documentation is \"more likely to succeed\"; a known pre-existing condition without reasonable precautions, or rushing to support a loved one without being \"directly involved in emergency transport or life-saving care,\" is \"unlikely to succeed.\"",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Dispute a Parking Ticket FAQ (\"I HAD A MEDICAL EMERGENCY. IS THAT A VALID EXCUSE?\")",
      url: "https://philapark.org/dispute/",
    },
  ],
  faqs: [
    {
      question: "What makes a medical-emergency defense strong in Philadelphia?",
      answer:
        "PPA's FAQ gives a heart attack with ambulance and hospital documentation as an example \"more likely to succeed.\" Documented, urgent transport or life-saving care is the key.",
    },
    {
      question: "Does rushing to help a family member in an emergency qualify?",
      answer:
        "Only if you were directly involved in the emergency transport or life-saving care itself. PPA's FAQ states that merely rushing to support a loved one, without that direct involvement, is \"unlikely to succeed.\"",
    },
    {
      question: "What if I have a known pre-existing condition that caused the emergency?",
      answer:
        "PPA's FAQ notes that a known pre-existing condition, without evidence you took reasonable precautions, weakens this defense. Focus your documentation on the urgency and timing of the emergency itself.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const death_of_registrant: ParkingDefense = {
  slug: "death-of-registrant",
  citySlug: "philadelphia",
  title: "Fight a Philadelphia parking ticket after the registered owner's death",
  metaDescription:
    "Free defense-statement letter for a Philadelphia parking ticket issued to a deceased registrant. Mail-ready Bureau of Administrative Adjudication template.",
  whenItApplies:
    "The registered owner of the vehicle died, and the ticket concerns a parking violation that occurred before their death.",
  body: `To: City of Philadelphia — Bureau of Administrative Adjudication (BAA)
Re: Ticket No. [TICKET NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Answer under Phila. Code §12-2806, on behalf of the registered owner, and respectfully request that this violation be dismissed.

The registered owner of this vehicle, [REGISTERED OWNER'S NAME], died on [DATE OF DEATH], which was before this ticket's violation date of [DATE]. I am submitting this Answer and letter of request as [YOUR RELATIONSHIP TO THE REGISTRANT]. [IF APPLICABLE: There is no surviving co-owner of this vehicle.]

Under Phila. Code §12-2807, and consistent with PPA's own published guidance that a ticket for a violation occurring before the owner's death may be disputed on the late owner's behalf when a death certificate is submitted with a letter of request, I ask that this violation be dismissed.

Attached: [a copy of the death certificate, submitted along with this letter of request].

Respectfully,
[YOUR NAME]
[RELATIONSHIP TO REGISTRANT]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the death certificate, submitted along with a written letter of request to the Bureau of Administrative Adjudication",
  ],
  cityNotes:
    "Per PPA's FAQ, tickets issued before the owner's death may be disputed by someone acting on the late owner's behalf; PPA \"highly recommend[s] presenting a copy of the death certificate with the letter of request.\" Nothing happens to outstanding tickets automatically — someone must affirmatively respond. Outstanding tickets will NOT be dismissed if there is a surviving co-owner of the vehicle.",
  codeCite: {
    label: "Phila. Code § 12-2807 — Adjudications (general hearing/evidence procedure)",
    citation: "Phila. Code § 12-2807",
    url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "PPA — Dispute a Parking Ticket FAQ (\"THE VEHICLE OWNER IS DECEASED...\")",
      url: "https://philapark.org/dispute/",
    },
  ],
  faqs: [
    {
      question: "Does an outstanding ticket get dismissed automatically when the registrant dies?",
      answer:
        "No. Per PPA's FAQ, nothing happens automatically — someone acting on the late owner's behalf must affirmatively submit a letter of request, ideally with a copy of the death certificate.",
    },
    {
      question: "What if there's a surviving co-owner of the vehicle?",
      answer:
        "This defense will not succeed. PPA's FAQ states outstanding tickets will not be dismissed on these grounds if there is a surviving co-owner of the vehicle.",
    },
    {
      question: "Who can submit this request?",
      answer:
        "PPA's guidance doesn't limit this to a specific title, but expects someone acting on the deceased owner's behalf — such as an executor, surviving spouse, or next of kin — to submit the letter and death certificate.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const philadelphiaCity: ParkingCity = {
  slug: "philadelphia",
  city: "Philadelphia",
  state: "PA",
  agency:
    "Philadelphia Parking Authority (PPA) issues on-street parking tickets and, through its Parking Violations Branch (PVB), fields four specific claim types (broken meter, valid kiosk receipt, valid permit/disabled placard, sign discrepancy) before a formal hearing is needed. Formal adjudication of all parking-ticket disputes is conducted by the City of Philadelphia's Bureau of Administrative Adjudication (BAA) — a City agency separate from the PPA, created under Philadelphia Code Chapter 12-2800 (Administrative Adjudication of Parking Violations) and exercising powers vested in the Director of Finance (Code §12-2802), with PPA delegated certain enforcement/administration functions (Code §12-2803). PPA's own site currently states the BAA is overseen by the City's Office of the Chief Administrative Officer.",
  submitOnlineUrl: "https://onlineserviceshub.com/ParkingPortal/Philadelphia",
  submitMailAddress:
    "Bureau of Administrative Adjudication, 48 N. 8th Street, Philadelphia, PA 19107 (for the four PVB-specific claim types — broken meter, valid kiosk receipt, valid permit/placard, or sign discrepancy — mail may instead go to: Parking Violations Branch, PO Box 41818, Philadelphia, PA 19101-1818)",
  submitInPerson:
    "In-person hearings at the Bureau of Administrative Adjudication (48 N. 8th Street, Philadelphia, PA 19107, Monday–Friday, expedited hearings begin 8:30 a.m.) are available ONLY for booted or towed vehicles. For a standard (non-boot/tow) parking ticket, you must dispute online or by mail — walk-in in-person hearings are not offered. Source: philapark.org/dispute/ (\"Customer Alert: In-person hearings at BAA are available for booted/towed vehicles only.\").",
  howToContest: cityHowToContest,
  contestDeadlineDays: 15,
  contestDeadlineNote:
    "Philadelphia Code §12-2804(4): \"a person to whom a parking ticket has been served shall answer within fifteen (15) days after the date the ticket was served. Failure to answer within the prescribed period shall result in the imposition of additional fees as set forth in Section 12-2809.\" The City's official guidance states this plainly: \"If you request a hearing within 15 days of receiving a ticket, no late payment fees will be added\" and \"If you request a hearing after 15 days and are later found liable for the ticket, you will be responsible for any related late fees.\" (phila.gov, Dispute a parking ticket). This 15-day window is the deadline to avoid late fees, not an absolute bar on disputing — Philadelphia's outer deadline to dispute a ticket at all is far longer: PPA's FAQ states \"Generally, you have approximately one (1) year from the date of ticket issuance to dispute a parking violation,\" explaining that \"You have one year from the entry of default in which to appeal ... the entry of default is [generally] 4-5 weeks after the issuance date, so in rough terms, you have 13 months from the issuance date. Tickets beyond one year from the entry of default are no longer eligible to be disputed, regardless of the merits of the defense.\" This matches Code §12-2807(4), which allows a default order to \"be vacated by the Parking Hearing Examiner within one (1) year after its entry\" upon written application showing a sufficient defense and excusable neglect. Separately, an appeal of an adverse Hearing Examiner decision (after you did timely contest and lost) must be filed within 30 days of that decision under Code §12-2808(3).",
  penaltyNote:
    "Per Philadelphia Code §12-2809(1): if no answer/payment is made within 15 days of a parking ticket, a Notice of Violation (NOV) is mailed; if that NOV is not answered within 10 days of its date (or within 90 days of the original ticket issuance, if owner information could not be obtained from a state DMV), a $30 late fee is added. A second $35 fee is added if payment is not made within 30 days after a final order of liability, or if the person fails to answer the NOV within 20 days of its issuance, or fails to appear at a required hearing. (For tickets issued through November 22, 2013, the fees were $25 and $30; current $30/$35 fees apply to tickets issued on or after November 23, 2013, per Bill No. 130562.) Under Code §12-2809(5), collection activity generally may not begin more than ten years after a ticket/notice was issued, except against a \"chronic parking violator\" — defined as someone owing more than $500 in penalties/costs/fees, or with 3 or more open unpaid tickets, or whose vehicle registration has been suspended/denied under 75 Pa. C.S. §1379. Booted/towed vehicles can only get an in-person BAA hearing (expedited, to arrange release); other disputes are online/mail only. Source: Philadelphia Code §12-2809; philapark.org/dispute/ FAQ (\"WHAT ARE THE LATE PENALTIES?\").",
  municipalCodeRefs: [
    {
      label: "§ 12-2801. Legislative Findings.",
      citation: "Phila. Code § 12-2801",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286112",
    },
    {
      label: "§ 12-2802. Powers and Duties of The Director of Finance.",
      citation: "Phila. Code § 12-2802",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286119",
    },
    {
      label: "§ 12-2803. Delegation of Functions, Powers and Duties to The Philadelphia Parking Authority.",
      citation: "Phila. Code § 12-2803",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286123",
    },
    {
      label: "§ 12-2804. Issuance and Service of Parking Tickets (15-day answer deadline).",
      citation: "Phila. Code § 12-2804",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286128",
    },
    {
      label: "§ 12-2805. Notice of Parking Violation.",
      citation: "Phila. Code § 12-2805",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286137",
    },
    {
      label: "§ 12-2806. Answer (deny liability / request hearing options).",
      citation: "Phila. Code § 12-2806",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286141",
    },
    {
      label: "§ 12-2807. Adjudications (hearing procedure, evidence, default vacatur).",
      citation: "Phila. Code § 12-2807",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
    },
    {
      label: "§ 12-2808. Administrative Review (30-day appeal deadline).",
      citation: "Phila. Code § 12-2808",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286160",
    },
    {
      label: "§ 12-2809. Civil Penalties and Costs.",
      citation: "Phila. Code § 12-2809",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286168",
    },
  ],
  recognizedDefenses: [
    "broken-meter",
    "obscured-signage",
    "valid-payment",
    "not-my-vehicle",
    "valid-permit",
    "vehicle-breakdown",
    "medical-emergency",
    "death-of-registrant",
  ],
  defenses: [
    broken_meter,
    obscured_signage,
    valid_payment,
    not_my_vehicle,
    valid_permit,
    vehicle_breakdown,
    medical_emergency,
    death_of_registrant,
  ],
  faqs: [
    {
      question: "How long do I have to dispute a Philadelphia parking ticket?",
      answer:
        "Answer within 15 days of service to avoid late fees under Code §12-2804(4). Philadelphia's outer deadline to dispute at all is far longer — PPA's FAQ states you generally have approximately one year from ticket issuance (roughly 13 months, tied to the one-year window under Code §12-2807(4) to vacate a default order after it's entered).",
    },
    {
      question: "Does the Philadelphia Parking Authority decide my hearing?",
      answer:
        "No. PPA issues tickets and, through its Parking Violations Branch, fields four specific claim types directly. Formal hearings on all parking-ticket disputes are decided by the City's Bureau of Administrative Adjudication (BAA) — a separate City agency created under Code Chapter 12-2800, exercising powers vested in the Director of Finance, with PPA delegated certain enforcement/administration functions.",
    },
    {
      question: "Can I get an in-person hearing for a regular parking ticket?",
      answer:
        "No. In-person hearings at the BAA are available only for booted or towed vehicles. A standard (non-boot/tow) parking ticket must be disputed online or by mail — walk-in in-person hearings are not offered for those tickets.",
    },
    {
      question: "What happens if I don't answer my ticket at all?",
      answer:
        "Under Code §12-2809(1), if no answer/payment is made within 15 days a Notice of Violation is mailed; if that NOV isn't answered within 10 days (or 90 days of the original ticket if owner information couldn't be obtained from a state DMV), a $30 late fee is added, and a further $35 fee applies for continued nonpayment or a missed hearing. Someone owing more than $500, with 3+ open unpaid tickets, or with a suspended/denied registration can be deemed a \"chronic parking violator\" under Code §12-2809(5).",
    },
  ],
  sources: [
    {
      label: "Philadelphia Parking Authority — Dispute a Parking Ticket (main page + FAQ)",
      url: "https://philapark.org/dispute/",
    },
    {
      label: "Philadelphia Parking Authority — Frequently Asked Questions",
      url: "https://philapark.org/faq/",
    },
    {
      label: "Philadelphia Parking Authority — Contesting a Ticket: You've Got Options",
      url: "https://philapark.org/2017/08/contesting-a-ticket-youve-got-options-2/",
    },
    {
      label: "City of Philadelphia (phila.gov) — Dispute a parking ticket",
      url: "https://www.phila.gov/services/cars-parking-transportation/pay-or-dispute-a-ticket/dispute-a-parking-ticket/",
    },
    {
      label: "City of Philadelphia (phila.gov) — Pay or dispute a ticket (hub)",
      url: "https://www.phila.gov/services/cars-parking-transportation/pay-or-dispute-a-ticket/",
    },
    {
      label: "City of Philadelphia (phila.gov) — Bureau of Administrative Adjudication (BAA) homepage",
      url: "https://www.phila.gov/departments/bureau-of-administrative-adjudication/",
    },
    {
      label: "City of Philadelphia online parking dispute portal",
      url: "https://onlineserviceshub.com/ParkingPortal/Philadelphia",
    },
    {
      label: "Philadelphia Code — Chapter 12-2800, Administrative Adjudication of Parking Violations (table of contents)",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286111",
    },
    {
      label: "Philadelphia Code § 12-2804 — Issuance and Service of Parking Tickets",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286128",
    },
    {
      label: "Philadelphia Code § 12-2805 — Notice of Parking Violation",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286137",
    },
    {
      label: "Philadelphia Code § 12-2806 — Answer",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286141",
    },
    {
      label: "Philadelphia Code § 12-2807 — Adjudications",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286151",
    },
    {
      label: "Philadelphia Code § 12-2808 — Administrative Review",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286160",
    },
    {
      label: "Philadelphia Code § 12-2809 — Civil Penalties and Costs",
      url: "https://codelibrary.amlegal.com/codes/philadelphia/latest/philadelphia_pa/0-0-0-286168",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
