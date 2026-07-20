import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/chicago.json (verifiedAt 2026-07-20).
// IMPORTANT: Chicago parking/compliance disputes are decided by the City of Chicago Department
// of Administrative Hearings (DOAH), Vehicle Hearings Division — NOT by the Department of Finance
// that issues the tickets. DOAH adjudicates under Municipal Code of Chicago (MCC) Chapter 9-100.
// Chicago uses "liability" (not "guilt") as its determination standard, and its defense grounds
// are directly codified at MCC § 9-100-060(a) — every defense below invokes that section (or, for
// broken-meter, the underlying substantive rule at MCC § 9-64-190 plus the corresponding
// adjudication ground at § 9-100-060(a)(4)) directly, not merely as a procedural hook.

const cityHowToContest: string[] = [
  "Locate your ticket's 10-digit ticket/notice number and confirm the violation code, date, time, and location printed on the Notice of Violation.",
  "Act within 7 days of the date of issuance (for a parking, standing, or compliance violation): either pay the fine or request an administrative adjudication to contest it, per Municipal Code of Chicago (MCC) § 9-100-050(a). (Automated speed- and red-light-camera notices instead carry a 21-day window and are outside the scope of a parking ticket.)",
  "Choose how to contest: online via the eContest system at parkingtickets.chicago.gov/EHearingWeb (request a correspondence, virtual, or in-person hearing); by mail (a statement signed by the registered owner, setting forth the facts establishing your defense, plus copies of supporting evidence, with the ticket number on every document, sent to DOAH's Vehicle Hearings Division); or by calling 312.744.PARK (7275) to arrange an in-person hearing.",
  "Select the applicable ground(s) for contesting under MCC § 9-100-060(a) and gather the evidence that supports each ground (photos, receipts, a police report, vehicle registration, etc.).",
  "Submit your evidence: online you may upload up to 5 files per ticket (up to 1 MB each), and up to 3 tickets under the same notice number can be contested at once; by mail send copies (not originals) — documents will not be returned, and the hearing officer's decision is final, so include everything you want considered.",
  "If you miss the initial 7-day window, the City mails a Second Notice of Violation giving you 14 more days (from that second notice) to pay, contest, or prove compliance under MCC § 9-100-050(d)(1); missing that window results in a default determination of liability.",
  "Wait for the decision: a correspondence hearing gets a mailed determination from an Administrative Law Officer (MCC § 9-100-070(d)); an in-person hearing gets a determination at the hearing (MCC § 9-100-090(a)). If found not liable, no further action is required.",
  "If found liable, you have 25 days from the date of the determination to pay before the fine amount is subject to an additional late-payment penalty (MCC § 9-100-050(e)). If dissatisfied with the decision, you may appeal to the Circuit Court of Cook County (Daley Center, 50 West Washington St., Room 602) within 35 days of the Administrative Law Judge's decision under the Illinois Administrative Review Law.",
  "If a default determination of liability was entered because you never responded, you may petition in person within 21 days of that determination to set it aside — but only on the limited grounds in MCC § 9-100-090(c): you weren't the owner/lessee at the time of the violation, you already paid the fine, you had good cause for not appearing, or you were never properly served.",
];

const ifThisDoesntWork =
  "If the Administrative Law Officer or Judge finds you liable, you have 25 days from the date of the determination to pay before the fine is subject to an additional late-payment penalty equal to the lesser of the fine amount or $250 minus the fine (MCC § 9-100-050(e)). If you disagree with the decision, you may appeal to the Circuit Court of Cook County (Daley Center, 50 West Washington St., Room 602) within 35 days of the decision, under the Illinois Administrative Review Law, subject to state filing fees; no legal aid is available for these appeals.";

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "chicago",
  title: "Fight a not-my-vehicle parking ticket in Chicago",
  metaDescription:
    "Free defense-statement letter for a not-my-vehicle Chicago parking ticket. Cites MCC § 9-100-060(a)(1)-(2) — mail-ready template for DOAH's Vehicle Hearings Division.",
  whenItApplies:
    "You were not the owner or lessee of the cited vehicle at the time of the violation — including because the vehicle, or its state registration plates, had been reported stolen and had not been recovered by you as of the violation date.",
  body: `To: City of Chicago Department of Administrative Hearings — Vehicle Hearings Division
Re: Notice of Violation No. [TICKET/NOTICE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this violation and requesting an administrative adjudication. I assert that I am NOT LIABLE for this violation and respectfully request that it be dismissed.

I was not the owner or lessee of the vehicle bearing plate [PLATE] on [DATE], the date of the violation cited above. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I was not the registered owner/lessee at the time, as shown by the attached bill of sale, title transfer paperwork, or Secretary of State registration record showing a different owner as of that date. / (b) The vehicle, or its registration plates, had been reported stolen before the violation date and had not yet been recovered by me as of [DATE], as shown by the attached police report filed on [DATE OF POLICE REPORT].]

Under Municipal Code of Chicago § 9-100-060(a)(1)-(2), a violation shall not be sustained where the respondent was not the owner or lessee of the cited vehicle at the time of the violation, or where the vehicle or its registration plates had been reported stolen and had not been recovered by the respondent as of the violation date. I ask that this violation be dismissed on that basis.

Attached: [bill of sale, title transfer paperwork, or Secretary of State registration record showing a different owner as of the violation date; or a police report of the theft filed before the violation date showing the vehicle/plates were not yet recovered]. The ticket/notice number above is written on every attached document.

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Documentation showing you were not the registered owner/lessee on the violation date (e.g., a bill of sale, title transfer paperwork, or Secretary of State registration record showing a different owner)",
    "For a stolen vehicle or stolen plates: a police report of the theft filed before the violation date, showing the vehicle/plates were not yet recovered as of that date",
    "The ticket/notice number, written on every document you submit",
  ],
  cityNotes:
    "Codified as two related but separately numbered grounds under MCC § 9-100-060(a): (1) not being the owner/lessee at the time of the violation, and (2) the vehicle or its plates having been stolen at the time. A related but distinct process — with its own 21-day deadline and its own mailing address (Department of Administrative Hearings, Vehicle Hearings Division/DLS, 740 N. Sedgwick St., 2nd Floor, Chicago, IL 60654) — exists for contesting a Secretary of State driver's-license suspension caused by tickets on a vehicle you no longer own.",
  codeCite: {
    label: "MCC 9-100-060(a)(1)-(2) — Grounds for contesting a violation (not owner/lessee; stolen vehicle or plates)",
    citation: "Municipal Code of Chicago § 9-100-060(a)(1)-(2)",
    url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Municipal Code of Chicago § 9-100-060 — Grounds for contesting a violation",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
    },
    {
      label: "City of Chicago DOAH — Vehicle FAQs",
      url: "https://www.chicago.gov/city/en/depts/ah/supp_info/faq/vehicle_faqs.html",
    },
  ],
  faqs: [
    {
      question: "Is \"I sold the car\" enough on its own, without paperwork?",
      answer:
        "No. MCC § 9-100-060(a)(1) requires showing you were not the owner or lessee at the time of the violation, so bring documentation — a bill of sale, title transfer paperwork, or a Secretary of State registration record showing a different owner as of the violation date.",
    },
    {
      question: "My car was stolen — what do I need to prove that?",
      answer:
        "A police report of the theft filed before the violation date, showing the vehicle or its plates had not yet been recovered as of that date. MCC § 9-100-060(a)(2) covers this as its own separately numbered ground.",
    },
    {
      question: "Is this the same process as fighting a driver's-license suspension over a ticket on a car I no longer own?",
      answer:
        "No — that's a related but distinct process with its own 21-day deadline and its own mailing address at DOAH's Vehicle Hearings Division/DLS. This not-my-vehicle defense is for contesting the underlying ticket itself.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "chicago",
  title: "Fight an obscured-signage parking ticket in Chicago",
  metaDescription:
    "Free defense-statement letter for a missing- or obscured-sign Chicago parking ticket. Cites MCC § 9-100-060(a)(3) — mail-ready DOAH hearing template.",
  whenItApplies:
    "You were ticketed for violating a posted parking or standing restriction, but the relevant sign prohibiting or restricting parking or standing was missing or obscured at the time.",
  body: `To: City of Chicago Department of Administrative Hearings — Vehicle Hearings Division
Re: Notice of Violation No. [TICKET/NOTICE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this violation and requesting an administrative adjudication. I assert that I am NOT LIABLE for this violation and respectfully request that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign governing the restriction I am cited for violating was [DESCRIBE THE DEFECT — missing entirely / obscured by foliage, construction, or another vehicle / otherwise not visible from where I parked]. I had no way to see or comply with a restriction that was not properly posted or visible at that location.

Under Municipal Code of Chicago § 9-100-060(a)(3), a violation shall not be sustained where the sign prohibiting or restricting parking or standing was missing or obscured. I ask that this violation be dismissed on that basis.

Attached: [date- and time-stamped photos of the block showing the missing or obscured sign, photos of the street-name signs at the nearest intersection confirming the exact location, and photos of any obstruction blocking the sign].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Clear, date- and time-stamped photos of the block where you were ticketed, showing the missing or obscured sign(s)",
    "Photos of the street-name signs at the nearest intersection, to confirm the exact location",
    "Photos showing any obstruction (foliage, construction, another vehicle, etc.) blocking the sign, if the sign was present but obscured",
  ],
  cityNotes:
    "One of the enumerated grounds a respondent may raise at an administrative correspondence or in-person hearing under MCC § 9-100-060(a)(3).",
  codeCite: {
    label: "MCC 9-100-060(a)(3) — Grounds for contesting a violation (signs missing or obscured)",
    citation: "Municipal Code of Chicago § 9-100-060(a)(3)",
    url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Municipal Code of Chicago § 9-100-060 — Grounds for contesting a violation",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
    },
  ],
  faqs: [
    {
      question: "What counts as \"obscured\" under Chicago's code?",
      answer:
        "MCC § 9-100-060(a)(3) covers a sign that was missing entirely or obscured — for example by foliage, construction, or another vehicle — so it wasn't visible to you at the time you parked.",
    },
    {
      question: "What photos should I submit?",
      answer:
        "Date- and time-stamped photos of the block showing the missing or obscured sign, photos of the street-name signs at the nearest intersection to confirm the exact location, and, if applicable, photos of whatever was blocking the sign.",
    },
    {
      question: "Where do I submit this defense?",
      answer:
        "Online through the eContest system, by mail to DOAH's Vehicle Hearings Division, or in person by calling 312.744.PARK to arrange a hearing — all within 7 days of the ticket's issuance date.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "chicago",
  title: "Fight a broken-meter parking ticket in Chicago",
  metaDescription:
    "Free defense-statement letter for a broken-meter Chicago parking ticket. Cites MCC §§ 9-64-190 and 9-100-060(a)(4) — mail-ready DOAH hearing template.",
  whenItApplies:
    "You were ticketed in a parking meter zone or space, but the meter was inoperable or malfunctioning through no fault of your own, and — per the posted directions on the meter — you reported it as inoperable or malfunctioning within 24 hours of parking there.",
  body: `To: City of Chicago Department of Administrative Hearings — Vehicle Hearings Division
Re: Notice of Violation No. [TICKET/NOTICE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this violation and requesting an administrative adjudication. I assert that I am NOT LIABLE for this violation and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I parked at the metered space at [LOCATION]. The parking meter/pay station serving that space was inoperable or malfunctioning through no fault of my own: [DESCRIBE — e.g., blank screen, rejected every payment method I tried, displayed an error message]. Following the directions posted on the meter, I reported the malfunction within 24 hours of parking there, on [DATE OF REPORT] via [METHOD — ParkChicago app / phone number posted on the meter], reference/confirmation number [REFERENCE NUMBER].

Under Municipal Code of Chicago § 9-64-190, it is not a violation to park at a meter that does not function properly, provided the malfunction is through no fault of the operator and the operator reports it, per the posted directions on the meter, within 24 hours of parking there. I raise that defense here under the corresponding adjudication ground at Municipal Code of Chicago § 9-100-060(a)(4) — that the relevant parking meter was inoperable or malfunctioned through no fault of the respondent — and ask that this violation be dismissed on that basis.

Attached: [date- and time-stamped photo(s) of the broken or malfunctioning meter, including any error message displayed, and the confirmation/reference number or record of my report made within 24 hours of parking there].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photo(s) of the broken or malfunctioning meter, including any error message displayed",
    "Confirmation/reference number or record of your report of the broken meter, made within 24 hours of parking, through the method posted on the meter (e.g., the ParkChicago app or the phone number posted on the meter)",
    "The ticket/notice number, written on every document you submit",
  ],
  cityNotes:
    "MCC § 9-64-190 defines the underlying defense: it is not a violation to park at a meter that doesn't function properly, provided the malfunction is through no fault of the operator AND the operator reports it, per the posted directions on the meter, within 24 hours of parking there. That factual defense is then raised at an administrative adjudication hearing under the separate ground in MCC § 9-100-060(a)(4) (\"the relevant parking meter was inoperable or malfunctioned through no fault of the respondent\"). Simply showing the meter was broken, without the timely report, is not sufficient on its own.",
  codeCite: {
    label: "MCC 9-100-060(a)(4) — Grounds for contesting a violation (meter inoperable or malfunctioned through no fault of respondent)",
    citation: "Municipal Code of Chicago § 9-100-060(a)(4)",
    url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Municipal Code of Chicago § 9-100-060 — Grounds for contesting a violation",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
    },
    {
      label: "Municipal Code of Chicago § 9-64-190 — Parking meter zones - Regulations",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2646267",
    },
  ],
  faqs: [
    {
      question: "Is it enough to show the meter was broken?",
      answer:
        "Not by itself. MCC § 9-64-190 requires both that the malfunction was through no fault of yours AND that you reported it, per the posted directions on the meter, within 24 hours of parking there. Simply photographing a broken meter without a timely report is not sufficient on its own.",
    },
    {
      question: "How do I report a broken meter in Chicago?",
      answer:
        "Follow the directions posted on the meter itself — typically the ParkChicago app or a phone number printed on the meter — and do it within 24 hours of parking there. Keep the confirmation or reference number as your proof of the timely report.",
    },
    {
      question: "Which code section actually gets this ticket dismissed?",
      answer:
        "Two sections work together: MCC § 9-64-190 defines the substantive no-fault-plus-timely-report rule, and MCC § 9-100-060(a)(4) is the specific ground you raise at the DOAH hearing to invoke it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "chicago",
  title: "Fight a wrong-ticket-details parking ticket in Chicago",
  metaDescription:
    "Free defense-statement letter for a Chicago parking ticket with wrong or inconsistent details. Cites MCC § 9-100-060(a)(5) — mail-ready DOAH template.",
  whenItApplies:
    "The facts stated on the notice of violation are inconsistent with each other, or do not support a finding that the specified parking or standing regulation was actually violated — for example, an incorrect vehicle description or plate, an incorrect date/time/location, or your own evidence (such as a valid payment receipt) that contradicts the violation charged.",
  body: `To: City of Chicago Department of Administrative Hearings — Vehicle Hearings Division
Re: Notice of Violation No. [TICKET/NOTICE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am contesting this violation and requesting an administrative adjudication. I assert that I am NOT LIABLE for this violation and respectfully request that it be dismissed.

The facts stated on this Notice of Violation do not support a finding that the cited parking or standing regulation was actually violated. Specifically, [DESCRIBE THE DEFECT — e.g., the plate number or vehicle description printed on the notice does not match my vehicle; the date, time, or location printed on the notice is incorrect; I have a valid payment receipt for the cited time and location that contradicts the violation charged]. Comparing the notice against [my vehicle registration / my payment receipt], the correct information is: [CORRECT INFORMATION].

Under Municipal Code of Chicago § 9-100-060(a)(5), a violation shall not be sustained where the facts alleged in the notice of violation are inconsistent with each other, or do not support a finding that the specified parking or standing regulation was violated. I ask that this violation be dismissed on that basis.

Attached: [a copy or photo of the actual Notice of Violation showing the incorrect, missing, or inconsistent field(s); my vehicle registration; and/or a payment receipt contradicting the violation charged].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual ticket/notice of violation showing the incorrect, missing, or inconsistent field(s)",
    "Your vehicle registration, to compare the correct plate number, make, and model against what's on the ticket",
    "Any evidence contradicting the alleged facts of the violation (e.g., a payment receipt showing you paid for the cited time and location)",
  ],
  cityNotes:
    "MCC § 9-100-060(a)(5) is Chicago's catch-all evidentiary ground for contesting a violation. Because Chicago does not codify a separate 'proof of payment' or grace-period defense the way some other cities do, disputes over a valid meter/pay-station receipt, or over an otherwise mistaken ticket, are generally argued under this same ground. At hearing, the City bears the burden of proving the violation by a preponderance of the evidence, though the notice of violation itself is prima facie evidence of the facts it states (MCC §§ 9-100-070(c), 9-100-080(e)).",
  codeCite: {
    label: "MCC 9-100-060(a)(5) — Grounds for contesting a violation (facts alleged are inconsistent or do not support a finding of violation)",
    citation: "Municipal Code of Chicago § 9-100-060(a)(5)",
    url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Municipal Code of Chicago § 9-100-060 — Grounds for contesting a violation",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
    },
    {
      label: "Municipal Code of Chicago § 9-100-070 — Administrative correspondence hearing - Procedure",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647608",
    },
  ],
  faqs: [
    {
      question: "I already paid for parking at the cited spot — which defense do I use?",
      answer:
        "Chicago doesn't codify a separate proof-of-payment defense, so a valid payment receipt that contradicts the violation is argued under MCC § 9-100-060(a)(5) — the catch-all ground that the alleged facts don't support a finding of violation.",
    },
    {
      question: "What if the plate number on the ticket doesn't match my car?",
      answer:
        "That's a strong version of this defense. Attach your vehicle registration showing your actual plate number alongside a copy of the notice showing the mismatched number.",
    },
    {
      question: "Who has the burden of proof at a DOAH hearing?",
      answer:
        "The City bears the burden of proving the violation by a preponderance of the evidence, though the notice of violation itself is treated as prima facie evidence of the facts it states (MCC §§ 9-100-070(c), 9-100-080(e)) — so your contrary evidence is what tips the balance.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const chicagoCity: ParkingCity = {
  slug: "chicago",
  city: "Chicago",
  state: "IL",
  agency:
    "City of Chicago Department of Finance — Citation Administration (Vehicle) issues parking, compliance, red light camera, and automated speed camera notices of violation; disputes are adjudicated by the City of Chicago Department of Administrative Hearings (DOAH), Vehicle Hearings Division, whose Administrative Law Officers/Judges conduct correspondence (mail/online paper-review), virtual, and in-person hearings.",
  submitOnlineUrl: "https://parkingtickets.chicago.gov/EHearingWeb/home",
  submitMailAddress:
    "City of Chicago, Department of Administrative Hearings, Vehicle Hearings Division/DLS, 740 North Sedgwick Street, 2nd Floor, Chicago, IL 60654",
  submitInPerson:
    "Call 312.744.PARK (312.744.7275) — or 312.744.7277 for the hearing-impaired — to arrange an in-person hearing before a Department of Administrative Hearings Administrative Law Officer, or request an in-person hearing through the eContest online portal. Parking, compliance, and red light in-person hearings (and Saturday boot/tow hearings, 9:00 a.m.-3:00 p.m.) are held at the Central Hearing Facility, 400 West Superior Street, Chicago, IL.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 7,
  contestDeadlineNote:
    'Municipal Code of Chicago § 9-100-050(a): "A person on whom a violation notice has been served ... shall within seven days from the date of a parking, standing or compliance violation notice ... (1) pay the indicated fine; or (2) ... request an administrative adjudication ... to contest the charged violation." Chicago\'s own eContest FAQ states this the same way and describes the cascade if you miss it: "You have seven (7) days from the date of issuance to contest a ticket. If nothing is received, you are then sent a Notice of Violation allowing you twenty-one (21) days to request a hearing. Still if no response is received, a Notice of Determination is sent notifying you that you have been found liable by default and must appear in person to petition to set the default aside. This option must be exercised within twenty-one (21) days of the date of the Determination. Once the twenty-one (21) days have lapsed, your opportunity to contest has expired." (Note: MCC § 9-100-050(d)(1) puts the second-notice response window at 14 days from that second notice, not 21 — the 21-day figure in the FAQ applies to the post-default set-aside petition under MCC § 9-100-090(c) and to automated speed/red-light camera notices, which run on a 21-day clock from the start per MCC § 9-100-050(a).) Sources: MCC § 9-100-050, https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647557; eContest FAQ, https://parkingtickets.chicago.gov/EHearingWeb/FrequentlyAskedQuestions.',
  penaltyNote:
    'MCC § 9-100-050(e): failing to pay the fine within 25 days of a determination of liability automatically triggers a late-payment penalty equal to the lesser of (1) the amount of the fine, or (2) $250.00 minus the amount of the fine — in practice this roughly doubles smaller fines, capped so the fine-plus-penalty total does not exceed $250. Chicago DOAH\'s own Vehicle FAQ states it more simply: "You have 25 days from the date of decision to pay the ticket before it doubles. Additionally, if you fail to contest a ticket, you have 25 days from the date of initial default determination to pay the ticket before it doubles." If violations go unpaid, a vehicle may be immobilized (booted) once it has 3 or more final determinations of liability for parking/compliance violations (or Red Light/Bus Lane violations) less than a year old, or 2 or more that are a year or older (MCC § 9-100-120; Vehicle FAQ); the vehicle is towed 24 hours after a boot is placed if the matter isn\'t resolved. An unfavorable Administrative Law Judge decision may be appealed to the Circuit Court of Cook County (Daley Center, 50 West Washington St., Room 602) within 35 days of the decision, subject to state filing fees; there is no legal aid available for these appeals. Sources: MCC § 9-100-050, https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647557; City of Chicago DOAH Vehicle FAQs, https://www.chicago.gov/city/en/depts/ah/supp_info/faq/vehicle_faqs.html.',
  municipalCodeRefs: [
    {
      label: "MCC 9-100-020 — Violation - Penalty",
      citation: "Municipal Code of Chicago § 9-100-020",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647531",
    },
    {
      label: "MCC 9-100-050 — Determination of liability (deadlines, second notice, late-payment penalty)",
      citation: "Municipal Code of Chicago § 9-100-050",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647557",
    },
    {
      label: "MCC 9-100-055 — Requests for administrative adjudication (how/when a contest is timely filed)",
      citation: "Municipal Code of Chicago § 9-100-055",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647570",
    },
    {
      label: "MCC 9-100-060 — Grounds for contesting a violation",
      citation: "Municipal Code of Chicago § 9-100-060",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647579",
    },
    {
      label: "MCC 9-100-070 — Administrative correspondence hearing - Procedure",
      citation: "Municipal Code of Chicago § 9-100-070",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647608",
    },
    {
      label: "MCC 9-100-080 — Administrative in-person hearings - Procedure",
      citation: "Municipal Code of Chicago § 9-100-080",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647614",
    },
    {
      label: "MCC 9-100-090 — Hearing determination and petition to set aside a default",
      citation: "Municipal Code of Chicago § 9-100-090",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647623",
    },
    {
      label: "MCC 9-100-120 — Immobilization (boot) program",
      citation: "Municipal Code of Chicago § 9-100-120",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647663",
    },
    {
      label: "MCC 9-64-190 — Parking meter zones - Regulations (inoperable/malfunctioning meter defense mechanics)",
      citation: "Municipal Code of Chicago § 9-64-190",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2646267",
    },
  ],
  recognizedDefenses: ["not-my-vehicle", "obscured-signage", "broken-meter", "wrong-ticket-details"],
  defenses: [not_my_vehicle, obscured_signage, broken_meter, wrong_ticket_details],
  faqs: [
    {
      question: "How long do I have to dispute a Chicago parking ticket?",
      answer:
        "Just 7 days from the date of issuance — you must either pay the fine or request an administrative adjudication to contest it, per MCC § 9-100-050(a). This is shorter than many other cities' windows, so act quickly.",
    },
    {
      question: "What happens if I miss the 7-day window?",
      answer:
        "The City mails a Second Notice of Violation giving you 14 more days (from that second notice) to pay, contest, or prove compliance, per MCC § 9-100-050(d)(1). Missing that second window results in a default determination of liability, which you can only later challenge by petitioning in person within 21 days on limited grounds under MCC § 9-100-090(c).",
    },
    {
      question: "What happens if I'm found liable and don't pay?",
      answer:
        "You have 25 days from the date of the determination to pay before a late-payment penalty applies — equal to the lesser of the fine amount or $250 minus the fine, which in practice roughly doubles smaller fines (MCC § 9-100-050(e)). If unpaid violations accumulate to 3 or more determinations of liability within a year (or 2 or more over a year old), your vehicle can be booted and, 24 hours later, towed (MCC § 9-100-120).",
    },
    {
      question: "Can I appeal an adverse Administrative Law Judge decision?",
      answer:
        "Yes — within 35 days of the decision, you may appeal to the Circuit Court of Cook County (Daley Center, 50 West Washington St., Room 602) under the Illinois Administrative Review Law, subject to state filing fees. No legal aid is available for these appeals.",
    },
  ],
  sources: [
    {
      label: "City of Chicago :: Contest Tickets (Parking, Red Light and Automated Speed Enforcement)",
      url: "https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/challenging_tickets.html",
    },
    {
      label: "City of Chicago Parking eHearing Web — Frequently Asked Questions (eContest)",
      url: "https://parkingtickets.chicago.gov/EHearingWeb/FrequentlyAskedQuestions",
    },
    {
      label: "City of Chicago Parking eHearing Web — Submit a Hearing Request Online",
      url: "https://parkingtickets.chicago.gov/EHearingWeb/home",
    },
    {
      label: "City of Chicago :: Contest by Mail",
      url: "https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/parking_and_red-lightnoticeinformation5/contest_by_mail.html",
    },
    {
      label: "City of Chicago :: Contest In Person",
      url: "https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/parking_and_red-lightnoticeinformation5/contest_in_person.html",
    },
    {
      label: "City of Chicago Department of Administrative Hearings — Vehicle FAQs",
      url: "https://www.chicago.gov/city/en/depts/ah/supp_info/faq/vehicle_faqs.html",
    },
    {
      label: "City of Chicago Department of Administrative Hearings — Top Five FAQs",
      url: "https://www.chicago.gov/city/en/depts/ah/supp_info/faq/top_five_faqs.html",
    },
    {
      label:
        "Municipal Code of Chicago, Chapter 9-100 — Administrative Adjudication of Parking, Compliance Violations, Automated Traffic Law Enforcement System or Automated Speed Enforcement System Violations",
      url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2647499",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
