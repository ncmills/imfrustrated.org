import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/las-vegas.json (verifiedAt 2026-07-20).
// IMPORTANT: Las Vegas is a two-level administrative appeal, not a court plea. Level 1 is a
// non-appearance, documents-only appeal decided by the City of Las Vegas Parking Services
// Division. Level 2 is a binding, in-person hearing before a City-appointed Hearing Officer
// (an attorney licensed in Nevada, not an elected/appointed judge) whose decision is final.
// LVMC 11.10.080(C) is itself a codified list of substantive dismissal/waiver grounds, so
// every defense below invokes its own (C) subsection directly, not as a mere procedural cite.

const cityHowToContest: string[] = [
  "Read the Notice of Infraction to confirm the citation number, license plate, the section of the LVMC allegedly violated, the date/time, and the location (LVMC 11.10.030(A) lists what must be on it).",
  "Before filing a formal appeal, call Parking Services at (702) 229-4700 to see if you qualify for an administrative fine reduction on one of four narrow grounds: Registration Not Displayed (vehicle was registered at the time), Handicap Violation (valid placard at the time), Overtime Meter (valid paid receipt covering the citation), or No Longer Own the Vehicle (dated Bill of Sale/dealer trade-in documents predating the citation, plus a Declaration of Non-Ownership form).",
  "To formally contest, file a Level 1 appeal: complete the \"Appeal – Level 1 Request Form,\" check one of its listed grounds (Vehicle Breakdown, Medical Emergency, Did Not Receive Ticket on Vehicle, Sold Vehicle, Inadequate Signs or Curb Paint, Financial Hardship, or Other) or state your own grounds citing LVMC 11.10.080(C), and attach all supporting evidence (this is a non-appearance, documents-only review).",
  "Submit the Level 1 appeal by mail, fax (702-382-2309), email (parkingappeal@lasvegasnevada.gov), or in person to City of Las Vegas Parking Services, 350 S. City Pkwy, Las Vegas, NV 89106 — best done within 30 calendar days of the Notice of Infraction being served to avoid the \"Late 1\" penalty (LVMC 11.10.090(A)); the absolute outer deadline to file any appeal is 90 calendar days after service (LVMC 11.10.090(C)).",
  "Wait for the Level 1 decision from the Parking Services Division's administrative appeal review — you'll be notified by email and/or mail; if you don't hear back within about 3 weeks, contact the Parking Services Office.",
  "If the Level 1 decision finds liability and you disagree, request a Level 2 appeal within 30 days of that decision (LVMC 11.10.080(F)(3), 11.10.100(A)) — only evidence not already submitted at Level 1 is required. Bring the completed \"Appeal – Level 2 Request Form\" to the Parking Services office in person to schedule a hearing date/time.",
  "Appear (in person, or by an immediate family member, attorney, or authorized business representative) at the Level 2 hearing before the Hearing Officer. The decision is final and binding (LVMC 11.10.100(C)-(D)); failing to appear without first obtaining a continuance lets the Hearing Officer rule against you for the full amount.",
  "If found liable at either level, within 30 days of the decision either pay in full, sign up for an Installment Payment Plan, or (after a Level 1 decision only) escalate to a Level 2 appeal — via the AIMS Parking portal (https://lasvegas.aimsparking.com), phone, or mail. Missing that 30-day window can reverse any reduction, restart penalty accrual, and lead to DMV notice-of-nonpayment filing, collection agency referral, vehicle immobilization/towing, or a civil judgment (LVMC 11.10.080(F), 11.10.100(F)-(H)).",
];

const ifThisDoesntWork =
  "If the Level 1 decision finds you liable and you disagree, you may request a Level 2 appeal within 30 days of that decision (LVMC 11.10.080(F)(3), 11.10.100(A)) — only evidence not already submitted at Level 1 is required. Bring the completed \"Appeal – Level 2 Request Form\" to the Parking Services office at 350 S. City Pkwy to schedule an in-person hearing before a City-appointed Hearing Officer, an attorney licensed in Nevada. That hearing's decision is final and binding (LVMC 11.10.100(C)-(D)); failing to appear without first obtaining a continuance lets the Hearing Officer rule against you for the full amount.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "las-vegas",
  title: "Fight a broken-meter parking ticket in Las Vegas",
  metaDescription:
    "Free Level 1 appeal letter for a broken-meter parking ticket in Las Vegas. Cites LVMC 11.10.080(C)(2) — mail-ready template for Parking Services.",
  whenItApplies:
    "You were cited for an overtime-meter or meter-payment violation, but the parking meter itself was mechanically malfunctioning to the point that its reliability was questionable — for example, it wouldn't accept payment, showed a blank or error display, or gave inconsistent time readings.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

On [DATE] at approximately [TIME], I parked at [LOCATION] and attempted to pay at the meter serving that space. The meter was mechanically malfunctioning to the point that its reliability was questionable: [DESCRIBE — e.g., blank or error display, rejected every payment method I tried, showed an inconsistent or clearly wrong time reading]. [IF APPLICABLE: The meter was not posted "out of service" at the time, and I did not exceed the 30-minute grace period LVMC 11.54.200(D) allows in spaces that are so posted.]

Under LVMC 11.10.080(C)(2), the Parking Services Division may find no liability, or waive the applicable penalties, where a meter was mechanically malfunctioning to the extent that its reliability was questionable. I ask that this Notice of Infraction be dismissed on that basis.

Attached: [time- and date-stamped photo(s) of the malfunctioning meter's display and coin/card slot, any service report or complaint you filed about the broken meter, and a written description of exactly how it malfunctioned].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the malfunctioning meter (display, coin/card slot, any error message) taken at or near the time of the citation",
    "Any service report or complaint you filed about the broken meter",
    "A written description of exactly how the meter malfunctioned (blank display, rejected every payment method, wrong time shown, etc.)",
    "If the meter was posted \"out of service,\" a photo of that posting and a note of how long you were parked there (LVMC 11.54.200(D) allows only a 30-minute grace period in a space posted out of service for malfunction)",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(2) lets the Parking Services Division (Level 1) or Hearing Officer (Level 2) find no liability or waive penalties where, \"in connection with an alleged violation of an ordinance pertaining to a meter, the meter was mechanically malfunctioning to the extent that its reliability was questionable.\" Separately, LVMC 11.54.200(D) makes it its own violation to park more than 30 minutes in a meter space formally posted \"out of service because of malfunction\" — a meter you found broken but not yet posted is the stronger version of this defense. The burden of proving any defense is on the person raising it (LVMC 11.10.110(C)).",
  codeCite: {
    label: "LVMC 11.10.080(C)(2) — Grounds for waiver: meter mechanically malfunctioning",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(2)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "LVMC 11.54.200 — Violations (metered parking, incl. out-of-service meter spaces)",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.54MEPA_11.54.200VI",
    },
  ],
  faqs: [
    {
      question: "Do I need to prove the meter was broken, or is my word enough?",
      answer:
        "You carry the burden of proof under LVMC 11.10.110(C). Photos of the meter's display and slot, any 311-style service report you filed, and a written description of exactly how it malfunctioned all strengthen a Level 1 appeal under LVMC 11.10.080(C)(2).",
    },
    {
      question: "What if the meter was posted \"out of service\"?",
      answer:
        "That's a different rule. LVMC 11.54.200(D) allows only a 30-minute grace period in a space formally posted out of service for malfunction. If you were there longer than 30 minutes, note that in your appeal and explain the circumstances.",
    },
    {
      question: "Can I call Parking Services instead of filing a formal appeal?",
      answer:
        "Yes, for one narrow situation: if you have a valid paid receipt covering the citation time (an Overtime Meter issue), call Parking Services at (702) 229-4700 first — it may resolve the ticket through an administrative fine reduction without a formal Level 1 appeal.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "las-vegas",
  title: "Fight a missing or illegible sign parking ticket in Las Vegas",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas parking ticket with missing or obscured signage. Cites LVMC 11.10.080(C)(4) — mail-ready template.",
  whenItApplies:
    "You were cited for violating a sign- or curb-paint-dependent restriction (a time limit, no-parking zone, restricted curb color, etc.), but the area was so inadequately marked, obstructed, or unlit that it failed to give sufficient notice the restriction applied.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. The area was so inadequately marked or lit as to fail to give sufficient notice that access to the area was restricted or prohibited: [DESCRIBE — e.g., no visible or legible sign anywhere on that block face, the nearest sign was obstructed by [OBSTRUCTION], the curb paint was faded/absent, or lighting was too poor to read the posted restriction]. Without a valid sign or curb marking in place, I had no way to know the restriction I am accused of violating applied to that space.

Under LVMC 11.10.080(C)(4), and consistent with the underlying restriction at LVMC 11.52.130(A)(1), which only prohibits parking where official signs or curb/road-surface painting restrict it, I ask that this Notice of Infraction be dismissed on the ground that the area was so inadequately marked or lit as to fail to give sufficient notice of the restriction.

Attached: [wide photos of the full curb/block face showing no visible or legible sign or curb marking, close-up date/time-stamped photos of any damaged or obstructed sign, and photos of curb color/paint if a color-coded restriction is involved].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Wide photos of the full curb/block face where you parked, showing no visible or legible sign or curb marking",
    "Close-up, date/time-stamped photos of any sign that was damaged, obstructed, faded, or otherwise illegible",
    "Photos taken under the same lighting conditions as the citation if inadequate lighting is part of the issue",
    "Photos of the curb color/paint (or its absence) if the violation involves a color-coded curb restriction under LVMC 11.52.130",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(4) lets the City find no liability or waive penalties where \"the area of the alleged violation was so inadequately marked or lit as to fail to give sufficient notice that access to the area was restricted or prohibited.\" The underlying restriction is itself sign-dependent: LVMC 11.52.130(A)(1) only prohibits stopping/standing/parking \"where official signs or the painting of curbs or road surfaces...prohibit or restrict\" it — without a valid sign or curb marking, there is no restriction to have violated. Las Vegas frames this ground broadly as \"inadequately marked or lit,\" so both obstructed/missing signage and poor lighting can qualify, not just a literally missing sign.",
  codeCite: {
    label: "LVMC 11.10.080(C)(4) — Grounds for waiver: area inadequately marked or lit",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(4)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "LVMC 11.52.130 — Posted places (sign/curb-paint dependent restrictions)",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.52STSTPA_11.52.130POPL",
    },
  ],
  faqs: [
    {
      question: "Does poor lighting count, not just a missing sign?",
      answer:
        "Yes. LVMC 11.10.080(C)(4) is written broadly as \"inadequately marked or lit,\" so photos showing the restriction couldn't reasonably be read due to lighting conditions can support this ground, not just a physically missing or obstructed sign.",
    },
    {
      question: "What if the sign was there but a tree or truck blocked it?",
      answer:
        "Photograph the obstruction as it existed at the time you parked. LVMC 11.10.080(C)(4) covers an area that was inadequately marked as a practical matter, which can include a sign that was present but not visible from a normal parking position.",
    },
    {
      question: "Does this apply to color-coded curb restrictions too?",
      answer:
        "Yes. LVMC 11.52.130 makes curb-paint restrictions sign/marking-dependent just like posted signs, so faded or absent curb paint can support the same (C)(4) ground — include photos of the curb color at the cited location.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "las-vegas",
  title: "Fight a wrong-space parking ticket in Las Vegas when you already paid",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas parking ticket issued despite valid payment. Cites LVMC 11.10.080(C)(13) — mail-ready template.",
  whenItApplies:
    "You paid for parking at a meter, pay station, or City lot but were cited anyway, most commonly because your payment was recorded against, or applied to, the wrong parking space number rather than the space you actually used.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

On [DATE], I paid for parking at [LOCATION] at approximately [TIME]. My receipt shows payment was applied to space number [SPACE NUMBER ON RECEIPT], while I was actually parked in, and cited for, space number [SPACE NUMBER ON CITATION]. I made a good-faith payment for parking at the time and location cited; the mismatch is a wrong-space entry, not a failure to pay.

Under LVMC 11.10.080(C)(13), the Parking Services Division or Hearing Officer may find no liability, or reduce the fine, where "payment was made for the wrong parking space." I ask that this Notice of Infraction be dismissed on that basis.

Attached: [meter/pay-station payment receipt showing the date, time, and space number paid for; a comparison against the space number where I was actually parked and cited; and credit-card or mobile-app payment confirmation if no paper receipt was issued].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Your meter/pay-station payment receipt showing the date, time, and space number you paid for",
    "A comparison of the space number on your receipt against the space number where you were actually parked and cited",
    "Credit-card or mobile-app payment confirmation if no paper receipt was issued",
    "Photos of the meter display or space markings at the time, if available",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(13) lists \"payment was made for the wrong parking space\" as a specific basis on which the Parking Services Division or Hearing Officer may find no liability or reduce a fine. The Level 1 appeal instructions separately flag a faster \"Overtime Meter\" administrative-reduction path: if you have \"a valid paid receipt for the meter that covered the time of the citation,\" contact Parking Services directly, since that may resolve the ticket without a formal appeal at all.",
  codeCite: {
    label: "LVMC 11.10.080(C)(13) — Grounds for waiver: payment made for the wrong parking space",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(13)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "City of Las Vegas — Hearing Appeal Level 1 Request Instructions and Cover Letter",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-1-Request-Form.pdf",
    },
  ],
  faqs: [
    {
      question: "Can a phone call resolve this instead of a formal appeal?",
      answer:
        "Possibly. If you have a valid paid receipt for the meter that covered the time of your citation, call Parking Services at (702) 229-4700 first — the Overtime Meter administrative-reduction path may resolve the ticket without a formal Level 1 appeal.",
    },
    {
      question: "What exactly counts as a \"wrong space\" error?",
      answer:
        "LVMC 11.10.080(C)(13) covers payment applied to a different parking space number than the one where you were actually parked and cited. Compare the space number on your receipt to the space number on the Notice of Infraction to document the mismatch.",
    },
    {
      question: "What if I paid by app instead of getting a paper receipt?",
      answer:
        "A credit-card or mobile-app payment confirmation showing the date, time, and space number works the same as a paper receipt for this appeal.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "las-vegas",
  title: "Fight a defective parking ticket in Las Vegas (issued in error)",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas Notice of Infraction issued in error. Cites LVMC 11.10.080(C)(9) — mail-ready template for Parking Services.",
  whenItApplies:
    "The Notice of Infraction itself is inaccurate or was issued in error — for example, the wrong plate, vehicle description, or Code section is listed — and the error actually prejudiced your ability to understand or respond to the citation.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

This Notice of Infraction was issued in error. Specifically, the [FIELD — e.g., plate number / vehicle make or description / Code section cited / date or time / location] printed on the notice is [DESCRIBE THE ERROR — incorrect, missing, or does not match my vehicle]. Comparing the notice against my vehicle registration/title, the correct information is: [CORRECT INFORMATION]. This is a required element of the notice that was misdescribed or wrong, and it substantially prejudiced my ability to understand and respond to the citation, as LVMC 11.10.030(B) requires.

Under LVMC 11.10.080(C)(9), the Parking Services Division or Hearing Officer may find no liability where the Notice of Infraction was issued in error. I ask that this Notice of Infraction be dismissed on that basis.

Attached: [a copy or photo of the actual Notice of Infraction showing the incorrect or missing required field, and a copy of my vehicle registration or title showing the correct plate number, make, and description].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual Notice of Infraction showing the incorrect or missing required field",
    "Your vehicle registration or title, to compare the correct plate number, make, and description against what's on the ticket",
    "A written explanation of how the specific error caused you substantial prejudice, since Las Vegas requires showing real prejudice, not just a typo",
  ],
  cityNotes:
    "Las Vegas sets a higher bar for this defense than some cities: LVMC 11.10.030(B) provides that \"no error concerning or omission of\" the required Notice of Infraction contents (plate/state/make, location, date/time, meter space number, issuing officer, Code section, and response instructions — LVMC 11.10.030(A)) \"is grounds for the dismissal of an action...unless the person requesting such a disposition demonstrates substantial prejudice therefrom by a preponderance of the evidence.\" The ground actually used in practice to waive liability for a defective or mistaken ticket is the catch-all in LVMC 11.10.080(C)(9): \"the Notice of Infraction was issued in error.\" The burden of proving the defense is on the person raising it (LVMC 11.10.110(C)).",
  codeCite: {
    label: "LVMC 11.10.080(C)(9) — Grounds for waiver: Notice of Infraction issued in error",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(9)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "LVMC 11.10.030 — Notice of Infraction—Contents (substantial-prejudice standard)",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.030NOINON",
    },
  ],
  faqs: [
    {
      question: "Is any typo on the notice enough to get it dismissed?",
      answer:
        "No. LVMC 11.10.030(B) sets a substantial-prejudice standard: an error or omission in the required contents is not grounds for dismissal unless you demonstrate, by a preponderance of the evidence, that it actually prejudiced you. Explain specifically how the error affected your ability to understand or respond to the citation.",
    },
    {
      question: "What information is required to be on a Notice of Infraction?",
      answer:
        "LVMC 11.10.030(A) requires the plate/state/make, location, date/time, meter space number, issuing officer, the Code section allegedly violated, and response instructions. Compare each field against your registration to identify the specific error.",
    },
    {
      question: "Which Code section actually gets a mistaken ticket dismissed?",
      answer:
        "In practice it's the catch-all in LVMC 11.10.080(C)(9) — \"the Notice of Infraction was issued in error\" — which the Parking Services Division or Hearing Officer applies once you've shown the error and the resulting prejudice under LVMC 11.10.030(B).",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "las-vegas",
  title: "Fight a Las Vegas parking ticket for a stolen or transferred vehicle",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas parking ticket on a stolen or sold vehicle. Cites LVMC 11.10.080(C)(11) — mail-ready template.",
  whenItApplies:
    "The vehicle was stolen or was displaying stolen license plates at the time of the citation, or ownership had already been transferred (sold, gifted, or traded in) before the citation but the transfer isn't reflected in DMV/City records.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

I was not the owner of this vehicle, or it was not in my control, at the time of this citation. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I sold, gifted, or otherwise transferred the vehicle on [TRANSFER DATE], before this Notice of Infraction was issued on [CITATION DATE], as shown by a dated Bill of Sale/dealer trade-in documents and a completed Declaration of Non-Ownership form. / (b) This vehicle was stolen, or was displaying stolen license plates, at the time of the citation, as reported to police on [POLICE REPORT DATE], before this Notice of Infraction was issued.]

Under LVMC 11.10.080(C)(11), the Parking Services Division or Hearing Officer may find no liability where there is an unclear transfer of ownership of a vehicle. [IF SCENARIO (b) APPLIES: Alternatively, under LVMC 11.10.080(C)(1), no liability may be found where the vehicle or its plates were stolen at the time of the alleged violation.] I ask that this Notice of Infraction be dismissed on that basis.

Attached: [a dated Bill of Sale or dealer trade-in documents predating the citation and a completed Declaration of Non-Ownership form, OR a police report of the theft filed at or before the time of the citation, OR DMV title/registration transfer paperwork showing the new owner as of the citation date].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Stolen vehicle/plates: a police report filed at or before the time of the citation",
    "Sold/transferred vehicle: a complete, dated and signed Bill of Sale or dealer trade-in documents predating the citation, plus a completed Declaration of Non-Ownership form",
    "DMV title/registration transfer paperwork showing the new owner as of the citation date",
    "Any documentation resolving an \"unclear transfer of ownership\" if DMV records still show you as the registered owner",
  ],
  cityNotes:
    "Las Vegas treats stolen-vehicle and ownership-transfer scenarios as related but separately codified grounds under LVMC 11.10.080(C): stolen vehicle or stolen plates (C)(1), and \"the existence of unclear transfer of ownership of a vehicle\" (C)(11). The Level 1 appeal instructions separately describe a faster \"Don't own the vehicle anymore\" administrative-reduction path — a dated Bill of Sale or dealer trade-in documents predating the citation, plus a Declaration of Non-Ownership form, may resolve the ticket without a formal appeal.",
  codeCite: {
    label: "LVMC 11.10.080(C)(11) — Grounds for waiver: unclear transfer of ownership",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(11)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "City of Las Vegas — Hearing Appeal Level 1 Request Instructions and Cover Letter",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-1-Request-Form.pdf",
    },
  ],
  faqs: [
    {
      question: "I sold the car before the citation but DMV records still show me as owner — what do I file?",
      answer:
        "Submit a dated, signed Bill of Sale or dealer trade-in documents predating the citation, along with a completed Declaration of Non-Ownership form. Las Vegas also offers a faster administrative-reduction path for this exact scenario — call Parking Services first before filing a formal Level 1 appeal.",
    },
    {
      question: "My vehicle was stolen — which ground applies?",
      answer:
        "Stolen vehicles or stolen plates are their own codified ground under LVMC 11.10.080(C)(1), separate from the ownership-transfer ground at (C)(11). File a police report as soon as possible and attach it, dated at or before the citation.",
    },
    {
      question: "Is a formal appeal always required for a sold vehicle?",
      answer:
        "Not necessarily. The Level 1 appeal instructions describe a faster administrative-reduction path for \"No Longer Own the Vehicle\" cases — call Parking Services at (702) 229-4700 with your dated Bill of Sale/trade-in documents and Declaration of Non-Ownership before filing a formal appeal.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_vehicle: ParkingDefense = {
  slug: "disabled-vehicle",
  citySlug: "las-vegas",
  title: "Fight a Las Vegas parking ticket for a disabled vehicle",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas parking ticket issued while your car was mechanically disabled. Cites LVMC 11.10.080(C)(5) — mail-ready template.",
  whenItApplies:
    "A sudden mechanical malfunction caused your vehicle to be parked or stopped where it was cited, and you had it removed as soon as could reasonably be expected afterward.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

On [DATE], my vehicle experienced a sudden mechanical malfunction that caused it to be parked at [LOCATION]: [DESCRIBE THE FAILURE — e.g., the engine would not restart, a flat tire with no safe way to change it, a transmission failure]. I had the vehicle removed as soon as could reasonably be expected thereafter, on [REMOVAL DATE/TIME], by [TOW COMPANY / REPAIR SHOP NAME].

Under LVMC 11.10.080(C)(5), the Parking Services Division or Hearing Officer may find no liability where a mechanical malfunction of the vehicle caused it to be parked in the area alleged and it was removed as soon as could reasonably be expected thereafter. I ask that this Notice of Infraction be dismissed on that basis.

Attached: [a tow or repair receipt showing when the vehicle was removed from the location, repair-shop documentation describing the mechanical failure, and any contemporaneous evidence such as photos, a roadside-assistance record, or texts/calls showing I acted promptly].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A tow or repair receipt showing when the vehicle was removed from the location",
    "Repair-shop documentation describing the mechanical failure",
    "Any contemporaneous evidence (photos, roadside-assistance record, texts or calls) showing you acted promptly to have the vehicle removed",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(5) — \"a mechanical malfunction of the vehicle caused it to be parked in the area alleged and it was removed as soon as could be reasonably expected thereafter.\" The Level 1 and Level 2 appeal forms both list \"Vehicle Breakdown\" as a named checkbox ground.",
  codeCite: {
    label: "LVMC 11.10.080(C)(5) — Grounds for waiver: mechanical malfunction of the vehicle",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(5)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "City of Las Vegas — Hearing Appeal Level 1 Request Instructions and Cover Letter",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-1-Request-Form.pdf",
    },
  ],
  faqs: [
    {
      question: "Is there a checkbox for this on the appeal form?",
      answer:
        "Yes. Both the Level 1 and Level 2 appeal forms list \"Vehicle Breakdown\" as a named ground you can check directly, corresponding to LVMC 11.10.080(C)(5).",
    },
    {
      question: "How fast do I need to have the car removed?",
      answer:
        "LVMC 11.10.080(C)(5) requires removal \"as soon as could be reasonably expected\" after the malfunction. There's no fixed number of hours in the ordinance, but a tow or repair receipt showing prompt removal makes the strongest case.",
    },
    {
      question: "What documentation actually supports this ground?",
      answer:
        "A tow or repair receipt showing when the vehicle was removed, repair-shop documentation describing the specific mechanical failure, and any contemporaneous evidence — photos, a roadside-assistance record, or texts/calls — showing you acted promptly.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const medical_emergency: ParkingDefense = {
  slug: "medical-emergency",
  citySlug: "las-vegas",
  title: "Fight a Las Vegas parking ticket due to a medical emergency",
  metaDescription:
    "Free Level 1 appeal letter for a Las Vegas parking ticket issued during a medical emergency. Cites LVMC 11.10.080(C)(8) — mail-ready template.",
  whenItApplies:
    "The operator of the vehicle experienced a genuine medical or other emergency that caused, or excuses, the parking violation.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that this Notice of Infraction be dismissed.

On [DATE], I was the operator of this vehicle when I experienced a medical or other emergency at [LOCATION]: [DESCRIBE THE EMERGENCY]. This emergency caused, or excuses, the parking violation cited, because [EXPLAIN WHY THE EMERGENCY REQUIRED PARKING WHERE YOU DID].

Under LVMC 11.10.080(C)(8), the Parking Services Division or Hearing Officer may find no liability where the operator of the vehicle experienced a medical or other emergency. I ask that this Notice of Infraction be dismissed on that basis.

Attached: [medical documentation (hospital, EMS, or urgent-care records) dated to the time of the citation if available, a detailed written account of the emergency, and any independent corroboration such as a 911 call record or witness statement].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Medical documentation (hospital, EMS, or urgent-care records) dated to the time of the citation, if available",
    "A detailed written account of the emergency and why it required parking where you did",
    "Any independent corroboration (911 call record, witness statement) if available",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(8) — \"the operator of the vehicle experienced a medical or other emergency.\" The Level 1 and Level 2 appeal forms both list \"Medical Emergency\" as a named checkbox ground.",
  codeCite: {
    label: "LVMC 11.10.080(C)(8) — Grounds for waiver: medical or other emergency",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(8)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "City of Las Vegas — Hearing Appeal Level 1 Request Instructions and Cover Letter",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-1-Request-Form.pdf",
    },
  ],
  faqs: [
    {
      question: "Does the emergency have to be my own medical emergency?",
      answer:
        "LVMC 11.10.080(C)(8) covers a medical or other emergency experienced by the operator of the vehicle. Describe exactly what happened and why it required parking where you did.",
    },
    {
      question: "What if I don't have hospital records?",
      answer:
        "Medical documentation strengthens the appeal but isn't the only option — a detailed written account of the emergency, plus any independent corroboration like a 911 call record or witness statement, can support the ground even without formal medical paperwork.",
    },
    {
      question: "Is there a checkbox for this on the appeal form?",
      answer:
        "Yes. Both the Level 1 and Level 2 appeal forms list \"Medical Emergency\" as a named ground you can check directly.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const financial_hardship: ParkingDefense = {
  slug: "financial-hardship",
  citySlug: "las-vegas",
  title: "Fight a Las Vegas parking ticket on financial hardship grounds",
  metaDescription:
    "Free Level 1 appeal letter requesting a fine reduction on a Las Vegas parking ticket due to financial hardship. Cites LVMC 11.10.080(C)(17).",
  whenItApplies:
    "You are unable to pay the fine because your household income falls below the federally designated poverty level. This is a hardship ground for reducing or waiving the fine/penalties, not a claim that the underlying violation didn't occur.",
  body: `To: City of Las Vegas Parking Services Division
Re: Notice of Infraction, Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this Level 1 appeal and respectfully request that the fine and penalties on this Notice of Infraction be reduced or waived on the ground of financial hardship.

My household income falls below the federally designated poverty level for my household size. I am not disputing that the underlying violation occurred; I am asking that the fine and any penalties be reduced or waived because I am unable to pay them given my financial circumstances, which are: [DESCRIBE — e.g., household size, income source, and approximate monthly income].

Under LVMC 11.10.080(C)(17), the Parking Services Division or Hearing Officer may find no liability, or reduce or waive the fine, on the ground of financial hardship — living below the federally designated poverty level. I ask that the fine and penalties be reduced or waived on that basis.

Attached: [proof of income (pay stubs, benefits statements, or a tax return) showing my household income below the federal poverty guideline for my household size, and any additional documentation requested to verify hardship].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Proof of income (pay stubs, benefits statements, tax return) showing household income below the federal poverty guideline for your household size",
    "Any additional documentation the Parking Services Division requests to verify hardship — this ground explicitly requires proof",
  ],
  cityNotes:
    "Codified ground: LVMC 11.10.080(C)(17) — \"financial hardship—living below federally designated poverty level.\" Both the Level 1 and Level 2 appeal forms flag this ground as requiring proof (\"Financial hardship (proof required)\").",
  codeCite: {
    label: "LVMC 11.10.080(C)(17) — Grounds for waiver: financial hardship below federal poverty level",
    citation: "Las Vegas Mun. Code § 11.10.080(C)(17)",
    url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "City of Las Vegas — Appeal Level 2 Hearing Request Instructions",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-2-Request-Form.pdf",
    },
  ],
  faqs: [
    {
      question: "Does financial hardship mean the ticket is dismissed as wrongly issued?",
      answer:
        "No. Financial hardship under LVMC 11.10.080(C)(17) is not a claim that the violation didn't happen — it's a ground for reducing or waiving the fine and penalties because your household income falls below the federally designated poverty level.",
    },
    {
      question: "What proof do I need?",
      answer:
        "Both the Level 1 and Level 2 appeal forms flag this ground as \"proof required.\" Submit income documentation — pay stubs, benefits statements, or a tax return — showing your household income below the federal poverty guideline for your household size.",
    },
    {
      question: "Can I combine this with another defense?",
      answer:
        "Financial hardship addresses your ability to pay, not whether the violation occurred, so it's typically used on its own or as a fallback if a fact-based defense (like a broken meter or obscured signage) doesn't apply or isn't successful.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const lasVegasCity: ParkingCity = {
  slug: "las-vegas",
  city: "Las Vegas",
  state: "NV",
  agency:
    "City of Las Vegas Parking Services Division (Department of Economic and Urban Development) issues Notices of Infraction and decides Level 1 (administrative, non-appearance) appeals. A Level 2 appeal is a binding, in-person hearing before a City-appointed Hearing Officer — an attorney licensed in Nevada, not an elected or appointed judge — whose decision is final and binding (LVMC 11.10.080, 11.10.100). This record covers the City of Las Vegas Municipal Parking Program only, not Clark County, unincorporated Las Vegas Strip parking, or North Las Vegas/Henderson.",
  submitOnlineUrl: "https://lasvegas.aimsparking.com",
  submitMailAddress: "City of Las Vegas Parking Services, 350 S. City Pkwy, Las Vegas, NV 89106",
  submitInPerson:
    "City of Las Vegas Parking Services Office, 350 S. City Pkwy, Las Vegas, NV 89106, Monday–Friday 7:30 a.m.–5:15 p.m., (702) 229-4700. A Level 1 appeal does not require appearance, but a Level 2 appeal requires bringing the completed Level 2 Request Form to this office in person to schedule a hearing date/time, and the hearing itself is conducted here (or as the Hearing Officer directs).",
  howToContest: cityHowToContest,
  contestDeadlineDays: 90,
  contestDeadlineNote:
    "Las Vegas uses a graduated, multi-stage deadline structure under LVMC 11.10.090, not a single cutoff. (1) 30-day response window: a response admitting liability must be made within 30 calendar days after the Notice of Infraction is served, or an additional \"Late 1\" civil penalty attaches (LVMC 11.10.090(A)); the City's Level 1 appeal instructions frame the same 30 days as the window to appeal \"if there have been no payments made\" without extra penalty exposure. (2) 15-day delinquency window: after the 30-day period lapses, the City mails a Notice of Delinquency, and the registered owner then has 15 more calendar days to respond before a further \"Late 2\" penalty attaches (LVMC 11.10.090(B)). (3) 90-day absolute appeal deadline: \"A person who wishes to appeal a Notice of Infraction... must do so within ninety calendar days after the date on which the Notice is served\" (LVMC 11.10.090(C)); the Level 1 appeal instructions confirm this: \"You may file an appeal up to 90 days from the date of the original notice of infraction, however late penalties may apply.\" We report 90 as contestDeadlineDays because that is the outer limit LVMC 11.10.090(C) sets for filing any appeal at all — file within 30 days of service to avoid the Late 1/Late 2 penalties attaching in the first place. Separately, once a Level 1 decision issues, LVMC 11.10.080(F) gives 30 days to pay, arrange a payment plan, or request a Level 2 appeal.",
  penaltyNote:
    "Fines are set by a per-violation schedule at LVMC 11.10.140(D), ranging from $25 (e.g., restricted parking, double parking, most alley-lane and meter-space violations) up to $250 for a handicap-parking violation (LVMC 11.52.135) and $100 for fire-lane, fire-hydrant, and handicap-access-aisle violations; the same schedule sets separate \"Late 1\" and \"Late 2\" penalty amounts per violation (generally $10-$50 each) that attach if a Notice of Infraction is not responded to within the 30-day and 15-day windows of LVMC 11.10.090(A)-(B). A Level 1 decision gives 30 days to pay, arrange an Installment Payment Plan (non-refundable $25 setup fee, LVMC 11.10.120(A)), or request a Level 2 appeal; a Level 2 Hearing Officer decision similarly gives 30 days to pay in full or on a schedule the Hearing Officer sets, or the decision may be reversed and full fines/penalties reinstated with further collection activity (LVMC 11.10.080(F), 11.10.100(F)). Nonpayment lets the City file a notice of nonpayment with the Nevada DMV (adding a $15 administrative fee, LVMC 11.10.140(C)), refer the debt to a private collection agency (adding a fee of up to 25% of the debt or $250, whichever is less, LVMC 11.10.140(B)), and petition the Las Vegas Municipal Court for a civil judgment and writ of execution, which can garnish wages/bank accounts and place liens on property (LVMC 11.10.100(H), 11.10.230). If a registered owner accumulates more than $200 in unpaid civil fines, judgments, and penalties, and has at least two Notices of Infraction that were issued and served but never timely responded to under LVMC 11.10.090, the City may (after 21 days' advance notice) immobilize (boot) the vehicle, and may tow a vehicle not released within 24 hours of immobilization; release requires payment of a $75 immobilization fee plus all fines, judgments, and penalties owed (LVMC 11.10.240).",
  municipalCodeRefs: [
    {
      label: "LVMC 11.10.010 — Violation—Infraction—Handicapped parking—Definitions",
      citation: "Las Vegas Mun. Code § 11.10.010",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.010VINFANPAEF",
    },
    {
      label: "LVMC 11.10.030 — Notice of Infraction—Contents",
      citation: "Las Vegas Mun. Code § 11.10.030",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.030NOINON",
    },
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal (Level 1 appeal grounds)",
      citation: "Las Vegas Mun. Code § 11.10.080",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "LVMC 11.10.090 — Notice of Infraction—Response—Supplementary notice (deadlines)",
      citation: "Las Vegas Mun. Code § 11.10.090",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.090NOINESUPNO",
    },
    {
      label: "LVMC 11.10.100 — Level 2 appeals",
      citation: "Las Vegas Mun. Code § 11.10.100",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.100LE2AP",
    },
    {
      label: "LVMC 11.10.110 — Filing and processing of a Level 1 appeal or Level 2 appeal (burden of proof)",
      citation: "Las Vegas Mun. Code § 11.10.110",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.110FIPRLE1APLE2AP",
    },
    {
      label: "LVMC 11.10.120 — Payment schedules",
      citation: "Las Vegas Mun. Code § 11.10.120",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.120PASC",
    },
    {
      label: "LVMC 11.10.140 — Schedule of civil fines established",
      citation: "Las Vegas Mun. Code § 11.10.140",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.140SCCIFIES",
    },
    {
      label: "LVMC 11.10.240 — Automobile immobilizer—Conditions for use",
      citation: "Las Vegas Mun. Code § 11.10.240",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.240AUIMONUS",
    },
  ],
  recognizedDefenses: [
    "broken-meter",
    "obscured-signage",
    "valid-payment",
    "wrong-ticket-details",
    "not-my-vehicle",
    "disabled-vehicle",
    "medical-emergency",
    "financial-hardship",
  ],
  defenses: [
    broken_meter,
    obscured_signage,
    valid_payment,
    wrong_ticket_details,
    not_my_vehicle,
    disabled_vehicle,
    medical_emergency,
    financial_hardship,
  ],
  faqs: [
    {
      question: "How long do I have to appeal a Las Vegas parking ticket?",
      answer:
        "File within 30 calendar days of the Notice of Infraction being served to avoid the \"Late 1\" penalty (LVMC 11.10.090(A)). The absolute outer deadline to file any appeal at all is 90 calendar days after service (LVMC 11.10.090(C)); filing between 30 and 90 days is allowed but late penalties may apply.",
    },
    {
      question: "Do I have to appear in person to appeal a Las Vegas parking ticket?",
      answer:
        "Not for the first level. A Level 1 appeal is a non-appearance, documents-only review decided by the Parking Services Division. Only a Level 2 appeal requires bringing the completed Level 2 Request Form to the Parking Services office in person to schedule, and then appearing at, a hearing before a City-appointed Hearing Officer.",
    },
    {
      question: "Who decides a Level 2 parking appeal hearing in Las Vegas?",
      answer:
        "A City-appointed Hearing Officer — an attorney licensed in Nevada, not an elected or appointed judge. The Hearing Officer's decision at Level 2 is final and binding (LVMC 11.10.100(C)-(D)).",
    },
    {
      question: "What happens if I ignore a Las Vegas Notice of Infraction?",
      answer:
        "Late penalties (\"Late 1\" and \"Late 2\") attach under LVMC 11.10.090(A)-(B), and continued nonpayment can lead to a DMV notice-of-nonpayment filing (plus a $15 administrative fee), referral to a private collection agency, a civil judgment with wage/bank garnishment, and — if you accumulate more than $200 in unpaid fines/penalties across at least two unanswered Notices of Infraction — vehicle immobilization (boot) or towing (LVMC 11.10.140, 11.10.240).",
    },
    {
      question: "Can I get a fine reduced without filing a formal appeal?",
      answer:
        "Sometimes. Call Parking Services at (702) 229-4700 before filing — four narrow grounds (Registration Not Displayed, Handicap Violation, Overtime Meter with a valid receipt, or No Longer Own the Vehicle with dated transfer documents) may qualify for an administrative fine reduction without a formal Level 1 appeal.",
    },
  ],
  sources: [
    {
      label: "City of Las Vegas — Parking & Transportation: Parking",
      url: "https://www.lasvegasnevada.gov/Residents/Parking-Transportation/Parking",
    },
    {
      label: "City of Las Vegas — Parking FAQs",
      url: "https://www.lasvegasnevada.gov/Residents/Parking-Transportation/Parking/Parking-FAQs",
    },
    {
      label: "City of Las Vegas — Laws & Codes (confirms Municode as the official Municipal Code repository)",
      url: "https://www.lasvegasnevada.gov/Government/Departments/City-Attorney/Laws-Codes",
    },
    {
      label: "City of Las Vegas Parking Services — AIMS Parking portal (pay, search, and appeal citations)",
      url: "https://lasvegas.aimsparking.com",
    },
    {
      label: "City of Las Vegas — Hearing Appeal Level 1 Request Instructions and Cover Letter",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-1-Request-Form.pdf",
    },
    {
      label: "City of Las Vegas — Appeal Level 2 Hearing Request Instructions",
      url: "https://files.lasvegasnevada.gov/parking/Appeal-Level-2-Request-Form.pdf",
    },
    {
      label: "LVMC Chapter 11.10 — Parking or Nonmoving Violations (table of contents)",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI",
    },
    {
      label: "LVMC 11.10.010 — Violation—Infraction—Handicapped parking—Definitions",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.010VINFANPAEF",
    },
    {
      label: "LVMC 11.10.030 — Notice of Infraction—Contents",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.030NOINON",
    },
    {
      label: "LVMC 11.10.080 — Notice of Infraction—Duties of respondent—Appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.080NOINUTREPP",
    },
    {
      label: "LVMC 11.10.090 — Notice of Infraction—Response—Supplementary notice",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.090NOINESUPNO",
    },
    {
      label: "LVMC 11.10.100 — Level 2 appeals",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.100LE2AP",
    },
    {
      label: "LVMC 11.10.110 — Filing and processing of a Level 1 appeal or Level 2 appeal",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.110FIPRLE1APLE2AP",
    },
    {
      label: "LVMC 11.10.120 — Payment schedules",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.120PASC",
    },
    {
      label: "LVMC 11.10.140 — Schedule of civil fines established",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.140SCCIFIES",
    },
    {
      label: "LVMC 11.10.240 — Automobile immobilizer—Conditions for use",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.10PANOVI_11.10.240AUIMONUS",
    },
    {
      label: "LVMC 11.52.130 — Posted places",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.52STSTPA_11.52.130POPL",
    },
    {
      label: "LVMC 11.54.200 — Violations (metered parking)",
      url: "https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT11VETR_CH11.54MEPA_11.54.200VI",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
