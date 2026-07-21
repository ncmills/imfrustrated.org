import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/miami.json (verifiedAt 2026-07-20).
// IMPORTANT: City of Miami parking citations are issued by the Miami Parking Authority (MPA)
// and City of Miami enforcement/police under City Code Chapter 35, but MPA's own "Citation
// Review" process only handles citations issued for overlooked payment or e-permit
// violations. Every other dispute — including any metered/PARCS invoice that goes unpaid and
// becomes a formal citation under City Code § 35-165(c) — is processed and adjudicated by the
// Miami-Dade Clerk of the Court and Comptroller's Parking Operations Department, acting as the
// county's "traffic violations bureau" under Fla. Stat. § 316.1967. The Clerk's own "Request
// for Court Hearing" form (CLK/CT. 332) captions the matter "IN THE COUNTY COURT IN AND FOR
// MIAMI-DADE COUNTY, FLORIDA," and hearings are conducted via Zoom or phone. Every defense
// statement below is a written request for a County Court hearing addressed to the Clerk's
// Parking Operations Department — EXCEPT disabled-parking-permit, which the record says
// skips the hearing process entirely via a Clerk affidavit form.

const cityHowToContest: string[] = [
  "Read the citation and decide what you're disputing: (a) a purely administrative error — you actually paid, or had a valid e-permit, but the citation says otherwise — or (b) the underlying violation itself.",
  "For (a) overlooked-payment or e-permit citations only: submit MPA's online \"Citation Review\" Waiver Request Form at workflow.miamiparking.com/citation-review/submit, attaching a copy of the citation and paid-status proof (receipt, credit-card statement, app confirmation, etc.). MPA emails you the result. Any other citation inquiry is directed to the county's Parking Violations Bureau.",
  "For a citation coded as violation 15 (disabled parking space) or 19 (stroller space) where a valid disabled permit was in use: skip the hearing process and submit the Clerk's \"Affidavit — Disabled Parking Space\" (or \"Affidavit for Disabled Parking at Meter\") with a copy of the permit registration, a photocopy of the permit owner's driver's license/ID, and the $7.50 statutory dismissal fee; the Clerk \"shall dismiss the citation\" on receipt of valid proof.",
  "For any other contest: request a County Court hearing within 30 days of the citation's issue date using the Clerk's \"Request for Court Hearing\" form (CLK/CT. 332). Submit it by email to parkingCT@miamidadeclerk.gov, by mail to the Parking Operations Department, or in person at any Clerk's Office location. Requesting a hearing waives your right to simply pay the civil penalty (Fla. Stat. § 316.1967(4)).",
  "The Clerk mails a Notice to Appear with your hearing date and Zoom/phone details (or check your hearing date anytime through the Clerk's Parking Service Assistant / online parking-citation search). Join by Zoom or phone at the scheduled time and present any evidence by sharing your screen.",
  "If you are found guilty, the court may impose an additional penalty (not exceeding $100) plus court costs, payable at the time of the hearing (Fla. Stat. § 316.1967(4)). If you fail to appear, the hearing may proceed without you and you may be found guilty as if you had attended — and, without a bond posted, the vehicle or license plate may be subject to impoundment.",
];

const ifThisDoesntWork =
  "If the court finds you guilty at the hearing, it may impose an additional penalty of up to $100 plus court costs, due at the time of the hearing (Fla. Stat. § 316.1967(4)). Failing to appear for your scheduled hearing can result in a guilty finding as if you had attended, and — without a bond posted — your vehicle or license plate may be subject to impoundment. The record does not describe a further appeal step beyond the County Court hearing itself.";

const disabledParkingHowToSubmit: string[] = [
  "Confirm your citation is coded as violation 15 (disabled parking space) or 19 (stroller space), and that the vehicle was displaying a valid disabled parking permit or plate and was transporting the permit holder at the time.",
  "Complete the Miami-Dade Clerk of the Court's \"Affidavit — Disabled Parking Space\" (Form CLK/CT. 264), or \"Affidavit for Disabled Parking at Meter\" (Form CLK/CT. 265) if the citation was issued at a metered disabled space.",
  "Gather the permit registration showing the permit owner's name, a photocopy of the permit owner's driver's license or state ID, and the $7.50 statutory dismissal fee.",
  "Submit the signed affidavit, permit registration copy, ID photocopy, and fee directly to the Parking Operations Department — by mail, by email to parkingCT@miamidadeclerk.gov, or in person at any Clerk's Office location — instead of filing a Request for Court Hearing form. No County Court hearing is required for this path.",
  "The Clerk \"shall dismiss the citation\" upon receipt of valid proof.",
];

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "miami",
  title: "Fight a broken-meter parking ticket in Miami",
  metaDescription:
    "Free defense-statement letter for a broken-meter parking ticket in Miami. Cites City Code § 35-165's invoice-dispute right — hearing-ready template.",
  whenItApplies:
    "You were cited for failing to pay at a City of Miami on-street meter, pay-station/kiosk (PARCS), or the parking payment app, but the meter, kiosk, or app was broken, malfunctioning, or would not accept your payment through no fault of your own.",
  body: `To: Miami-Dade Clerk of the Court and Comptroller — Parking Operations Department
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting a County Court hearing to contest this citation and respectfully ask that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the [METER / PARCS KIOSK / PARKING APP] serving that spot, but it was broken, malfunctioning, or would not accept payment: [DESCRIBE — e.g., blank or error screen, jammed card slot, app repeatedly failed to process payment]. I made a good-faith effort to pay for parking through no fault of my own.

Under City of Miami Code § 35-165(a)–(b), and consistent with the City's own published process for disputing a metered/PARCS invoice issued in error — of which a malfunctioning meter, kiosk, or app is the paradigm case — I ask that this citation be dismissed because the underlying payment failure was not my fault.

Attached: [time- and date-stamped photo(s) of the broken meter or kiosk, any screenshot showing a failed payment attempt through the parking app, any "Report an Issue" complaint filed with MPA about the malfunction, and notes on whether a nearby meter or kiosk was tried and what happened there].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the broken meter or kiosk (blank/error screen, jammed slot, non-functioning card reader)",
    "A screenshot or notification showing a failed payment attempt through the parking app",
    "Any \"Report an Issue\" complaint filed with MPA about the malfunction, if you filed one",
    "Notes on whether you tried a nearby meter or kiosk and what happened there",
  ],
  cityNotes:
    "Miami's code does not name a standalone \"broken meter\" defense the way some cities do. Instead, City Code § 35-165(a)–(b) requires that any invoice issued for failure to pay metered/PARCS parking include \"a method to dispute and appeal the invoice by a party who believes they have received the invoice in error\" — a malfunctioning meter, kiosk, or app is the paradigm case of an invoice issued in error. The dispute must be filed within 15 days after the invoice is placed on the vehicle or mailed; a decision is due within 5 business days, with a further appeal to a \"neutral third-party adjudicator\" within 10 days of that decision. Only if the invoice remains unpaid after this process does the matter become a Miami-Dade County parking citation under § 35-165(c).",
  codeCite: {
    label: "City of Miami Code § 35-165(a)–(b) — Invoice and citations by mail (dispute/appeal of an invoice issued in error)",
    citation: "Miami, Fla., Code of Ordinances § 35-165(a)–(b)",
    url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-165INCIMA",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of Miami Code Chapter 35, Article III, Division 3 — Regulations (§§ 35-151—35-165)",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE",
    },
    {
      label: "Miami Parking Authority — Report an Issue",
      url: "https://www.miamiparking.com/report-an-issue/",
    },
  ],
  faqs: [
    {
      question: "Is a broken meter automatically a defense in Miami?",
      answer:
        "Not automatically — City Code § 35-165(a)–(b) treats it as an invoice issued in error, which you must dispute within 15 days of the invoice being placed on the vehicle or mailed. MPA is required to decide within 5 business days, with a further appeal to a neutral third-party adjudicator within 10 days of that decision.",
    },
    {
      question: "What if my citation has already become a formal Miami-Dade County citation?",
      answer:
        "The record's process only becomes a county citation under § 35-165(c) if the invoice goes unpaid after the dispute process. Once it's a county citation, request a County Court hearing within 30 days of the citation's issue date and present the same broken-meter evidence.",
    },
    {
      question: "What evidence matters most for a broken-meter claim?",
      answer:
        "Time- and date-stamped photos of the malfunctioning meter or kiosk, a failed-payment screenshot from the parking app, and any \"Report an Issue\" complaint you filed with MPA about the malfunction.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "miami",
  title: "Fight a missing or illegible sign parking ticket in Miami",
  metaDescription:
    "Free defense-statement letter for a missing or obscured-signage parking ticket in Miami. Cites City Code § 35-153's signage requirement — hearing-ready template.",
  whenItApplies:
    "You were cited for violating a posted parking restriction — exceeding a signed time limit, parking in a signed no-parking zone, or a signed designated-area time limit — but no sign was actually erected at that location, or the sign was missing, illegible, or obstructed at the time.",
  body: `To: Miami-Dade Clerk of the Court and Comptroller — Parking Operations Department
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting a County Court hearing to contest this citation and respectfully ask that it be dismissed.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the posted sign governing that spot was [DESCRIBE THE DEFECT — missing entirely, illegible due to damage/fading/obstruction, or never erected at that location]. I am not disputing that I failed to notice a sign — I am asserting that no sign properly and legibly conveyed the restriction I am accused of violating.

Under City of Miami Code § 35-153, this restriction applies only "[w]hen signs are erected giving notice thereof" [substitute § 35-157 or § 35-158 if the citation instead invokes one of those sections, each likewise conditioned on signs being erected]. Because that statutory precondition was not met at the location cited, I ask that this citation be dismissed on that basis.

Attached: [wide-angle, date/time-stamped photos of the full block face showing no visible or legible sign; close-up photos of any sign present, showing damage, obstruction, or incorrect information; photos of intersection street-name signs confirming the exact cited location].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Wide-angle, date/time-stamped photos of the full block face showing no visible or legible sign",
    "Close-up photos of any sign that was present, showing damage, obstruction, or incorrect information",
    "Photos of intersection street-name signs or other landmarks confirming the exact cited location",
    "Documentation comparing the location where you were parked against where any sign actually stands",
  ],
  cityNotes:
    "Several of Miami's signed parking restrictions are expressly conditioned on a sign being erected: § 35-153 (time-limit meter zones) applies \"[w]hen signs are erected giving notice thereof\"; § 35-157 (parking time limit for certain designated areas) applies \"[w]hen signs authorized by the director of off-street parking are erected giving notice thereof\"; and § 35-158 (parking prohibited in certain places) applies \"[w]hen signs authorized by the director of off-street parking are erected prohibiting parking in a place designated by such sign.\" If the citation depends on one of these signed restrictions and no sign was in fact erected, or it was missing, illegible, or obstructed, the statutory precondition for the violation was not met.",
  codeCite: {
    label: "City of Miami Code § 35-153 — Parking longer than time indicated on signs (violation conditioned on signs being erected)",
    citation: "Miami, Fla., Code of Ordinances § 35-153",
    url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-153PALOTIINSI",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of Miami Code § 35-157 — Parking time limit for certain designated areas",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-157PATILICEDEAR",
    },
    {
      label: "City of Miami Code § 35-158 — Parking prohibited in certain places",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-158PAPRCEPL",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense in Miami?",
      answer:
        "Not by itself. The defense turns on whether a sign was actually erected, legible, and unobstructed — several of Miami's signed restrictions (§§ 35-153, 35-157, 35-158) are textually conditioned on a sign being erected, so you need to show the sign itself was missing, illegible, or obstructed, not just that you missed it.",
    },
    {
      question: "Which code section applies to my citation?",
      answer:
        "It depends on the restriction: § 35-153 covers time-limit meter zones, § 35-157 covers time limits in certain designated areas, and § 35-158 covers other places where parking is prohibited by sign. Check which restriction the citation cites and reference the matching section.",
    },
    {
      question: "What photos help most for this defense?",
      answer:
        "Wide-angle, date/time-stamped photos of the full block face showing no visible or legible sign, close-up photos of any sign present, and photos of intersection street-name signs to confirm the exact location cited.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "miami",
  title: "Fight a Miami parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a Miami parking ticket issued despite valid payment or a valid e-permit. Template for MPA Citation Review and County Court.",
  whenItApplies:
    "You were cited for an 'overlooked payment' or e-permit violation — e.g., a meter, kiosk, or app receipt the officer didn't see, or a valid e-permit on file — even though you had in fact paid for, or were authorized for, that parking session at that time and location.",
  body: `To: Miami-Dade Clerk of the Court and Comptroller — Parking Operations Department
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting a County Court hearing to contest this citation and respectfully ask that it be dismissed. [If applicable: I have also submitted, or am concurrently submitting, the Miami Parking Authority's online Citation Review Waiver Request for this overlooked-payment/e-permit citation.]

On [DATE], I paid for parking at [LOCATION] through [PAYMENT METHOD — meter / PARCS kiosk / parking app], or held a valid e-permit covering that date and time. My [RECEIPT / APP CONFIRMATION / E-PERMIT SCREENSHOT] shows [PAYMENT OR PERMIT DETAILS — time, location, permit number], confirming I had valid, paid-for parking, or valid permit authorization, at the location and time cited on this citation.

Under City of Miami Code § 35-165(b), and consistent with the Miami Parking Authority's own published Citation Review process for citations issued in error for overlooked payment or e-permit violations, I ask that this citation be dismissed because the payment or permit record shows no violation in fact occurred.

Attached: [copy of the citation; paid-status support document (meter/kiosk receipt, credit-card statement, or app payment confirmation) or e-permit screenshot showing the date, time, and location].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the citation",
    "Paid-status support document — meter/kiosk receipt, credit-card statement, or app payment confirmation showing the date, time, and location",
    "A screenshot of a valid e-permit covering that date/time, if the citation was for a permit violation",
  ],
  cityNotes:
    "The Miami Parking Authority runs a dedicated 'Citation Review' process specifically for citations issued for overlooked payment or e-permit violations only — you submit online with a copy of the citation and paid-status proof, and MPA emails you the result. Any other citation inquiry is directed to the county's Parking Violations Bureau. This administrative review sits alongside, and does not replace, the statutory invoice-dispute right in City Code § 35-165(b) for metered/PARCS invoices issued in error.",
  codeCite: {
    label: "City of Miami Code § 35-165(b) — Invoice and citations by mail (right to dispute/appeal an invoice issued in error)",
    citation: "Miami, Fla., Code of Ordinances § 35-165(b)",
    url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-165INCIMA",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Miami Parking Authority — Citation Review",
      url: "https://www.miamiparking.com/citation-review/",
    },
    {
      label: "Miami Parking Authority — Citation Review submission form",
      url: "https://workflow.miamiparking.com/citation-review/submit",
    },
  ],
  faqs: [
    {
      question: "Should I use MPA's Citation Review or request a County Court hearing?",
      answer:
        "MPA's online Citation Review is specifically for overlooked-payment or e-permit citations — submit there first with your citation copy and paid-status proof. Any other citation inquiry is directed to the county's Parking Violations Bureau, and City Code § 35-165(b) separately preserves your right to dispute a metered/PARCS invoice issued in error.",
    },
    {
      question: "What counts as proof I already paid?",
      answer:
        "A meter/kiosk receipt, a credit-card statement showing the charge, or an app payment confirmation showing the date, time, and location. For an e-permit citation, a screenshot of the valid permit covering that date and time.",
    },
    {
      question: "Does MPA guarantee a response?",
      answer:
        "The record states MPA emails you the result of a Citation Review submission, but does not specify a guaranteed turnaround time.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "miami",
  title: "Fight a Miami parking ticket for a stolen or non-permissive vehicle",
  metaDescription:
    "Free defense-statement letter for a Miami parking ticket on a stolen vehicle or one used without permission. Cites Fla. Stat. § 316.1967(1) — hearing-ready template.",
  whenItApplies:
    "Your vehicle was, at the time of the parking violation, stolen, or in the care, custody, or control of another person who did not have your permission to use it — or, if the vehicle was leased, it is registered in the lessee's name rather than yours.",
  body: `To: Miami-Dade Clerk of the Court and Comptroller — Parking Operations Department
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting a County Court hearing to contest this citation and respectfully ask that it be dismissed.

I was not responsible for this vehicle at the time of the cited violation on [DATE]. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) The vehicle was stolen — it was reported stolen to the police on [DATE OF POLICE REPORT], before this citation was issued. / (b) The vehicle was, at the time, in the care, custody, or control of [NAME OF PERSON], who did not have my permission to use it; I am attaching a signed affidavit identifying that person, their address, and driver's license number. / (c) The vehicle was leased and is registered in the lessee's name, [LESSEE NAME], rather than mine.]

Under Fla. Stat. § 316.1967(1), the owner of a vehicle is not responsible for a parking ticket violation if, at the time, the vehicle was stolen or in the care, custody, or control of a person who did not have the owner's permission to use it, or if the vehicle was leased and registered in the lessee's name. I ask that this citation be dismissed, or that responsibility for payment be shifted to the person named above, on that basis.

Attached: [police report of the theft filed before the citation date; or a signed affidavit naming the person who had care, custody, or control of the vehicle with my permission, including their name, address, and driver's license number; or lease/registration documentation showing the vehicle is registered in the lessee's name].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A police report of the theft, filed before or covering the violation date, if the vehicle was stolen",
    "A signed affidavit naming the person who had care, custody, or control of the vehicle with your permission — including their name, address, and driver's license number",
    "Lease/registration documentation showing the vehicle is registered in the lessee's name, for leased vehicles",
  ],
  cityNotes:
    "This is a state-law defense that applies statewide to 'county or municipal parking ticket' violations, including City of Miami citations: Fla. Stat. § 316.1967(1) makes the owner 'not responsible for a parking ticket violation if the vehicle involved was, at the time, stolen or in the care, custody, or control of some person who did not have permission of the owner to use the vehicle,' and separately excuses the owner of a leased vehicle registered in the lessee's name. Where someone else had the vehicle with the owner's permission, the owner may instead submit a sworn affidavit identifying that person; the affidavit is admissible and raises a rebuttable presumption that the named person is responsible for payment instead.",
  codeCite: {
    label: "Fla. Stat. § 316.1967(1) — Liability for payment of parking ticket violations and other parking violations",
    citation: "Fla. Stat. § 316.1967(1)",
    url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1967.html",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Fla. Stat. § 316.1967 — official statute text (Online Sunshine, The Florida Legislature)",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1967.html",
    },
  ],
  faqs: [
    {
      question: "Does this defense apply to any Florida parking ticket, not just Miami's?",
      answer:
        "Yes. Fla. Stat. § 316.1967(1) is a statewide defense covering any county or municipal parking ticket, including City of Miami citations processed through the Miami-Dade Clerk of the Court.",
    },
    {
      question: "What if someone else was using my car with my permission?",
      answer:
        "You can submit a sworn affidavit naming that person, including their address and driver's license number. The affidavit is admissible and raises a rebuttable presumption that the named person, not you, is responsible for payment.",
    },
    {
      question: "Does this cover leased vehicles?",
      answer:
        "Yes — Fla. Stat. § 316.1967(1) separately excuses the owner of a leased vehicle that is registered in the lessee's name rather than the owner's.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_parking_permit: ParkingDefense = {
  slug: "disabled-parking-permit",
  citySlug: "miami",
  title: "Fight a disabled-parking-space ticket in Miami",
  metaDescription:
    "Free affidavit-based dismissal request for a disabled-parking-space ticket in Miami. Cites Fla. Stat. § 316.1955(1) — no hearing required, Clerk-ready template.",
  whenItApplies:
    "You were cited for parking in a space reserved for persons with disabilities (violation code 15) or a stroller-parking space (violation code 19), even though the vehicle was displaying a valid disabled parking permit or disabled license plate and was transporting the permit holder.",
  body: `To: Miami-Dade Clerk of the Court and Comptroller — Parking Operations Department
Re: Citation No. [CITATION NUMBER] (Violation Code 15 / 19)
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

In lieu of requesting a County Court hearing, I am submitting this statement together with a completed "Affidavit — Disabled Parking Space" (or "Affidavit for Disabled Parking at Meter"), and I respectfully ask that this citation be dismissed.

On [DATE], my vehicle was displaying valid disabled parking permit/plate number [PERMIT NUMBER], registered to [PERMIT OWNER NAME], and was transporting [PERMIT OWNER NAME] at the time and location cited above.

Under Fla. Stat. § 316.1955(1), it is not a violation to park in a space reserved for persons with disabilities where the vehicle displays a valid disabled parking permit or plate and is transporting the person to whom it was issued. I am submitting the permit registration, a photocopy of the permit owner's driver's license/ID, this signed affidavit, and the $7.50 statutory dismissal fee, and ask that the citation be dismissed on that basis without need for a hearing.

Attached: [copy of the disabled parking permit registration; photocopy of the permit owner's driver's license or state ID; the signed Affidavit — Disabled Parking Space or Affidavit for Disabled Parking at Meter; the $7.50 statutory dismissal fee].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the disabled parking permit registration showing the owner's name and address, valid at the time of the violation",
    "A photocopy of the permit owner's driver's license or state ID",
    "A completed, signed 'Affidavit — Disabled Parking Space' (or 'Affidavit for Disabled Parking at Meter') attesting the permit owner was present at the time of the violation",
    "The $7.50 statutory dismissal fee",
  ],
  cityNotes:
    "Florida law makes it not a violation to park in a space reserved for persons with disabilities if the vehicle displays a valid disabled parking permit or plate and is transporting the person to whom it was issued (Fla. Stat. § 316.1955(1)). For citations coded as violation 15 (disabled space) or 19 (stroller space), the Miami-Dade Clerk of Court's own affidavit forms let you obtain a statutory dismissal — without a hearing — by submitting the permit registration, a copy of your driver's license/ID, the signed affidavit, and a $7.50 fee directly to the Clerk, who 'shall dismiss the citation' on receipt of valid proof.",
  codeCite: {
    label: "Fla. Stat. § 316.1955(1) — Enforcement of parking requirements for persons who have disabilities",
    citation: "Fla. Stat. § 316.1955(1)",
    url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1955.html",
  },
  howToSubmit: disabledParkingHowToSubmit,
  ifThisDoesntWork,
  sources: [
    {
      label: "Miami-Dade Clerk of the Court — Affidavit: Disabled Parking Space (Form CLK/CT. 264)",
      url: "https://www.miamidadeclerk.gov/resources-clerk/library/Parking/264-Web.pdf",
    },
    {
      label: "Miami-Dade Clerk of the Court — Affidavit for Disabled Parking at Meter (Form CLK/CT. 265)",
      url: "https://www.miamidadeclerk.gov/resources-clerk/library/Parking/265-Web.pdf",
    },
    {
      label: "Miami-Dade Clerk of the Court — Parking Citations (Related Resources)",
      url: "https://www.miamidadeclerk.gov/clerk/parking-citations.page",
    },
  ],
  faqs: [
    {
      question: "Do I have to attend a hearing for a disabled-parking citation?",
      answer:
        "No — the record describes this as the one path that skips the hearing process entirely. Submit the Clerk's affidavit form (CLK/CT. 264 or 265) with the permit registration, a copy of your ID, and the $7.50 fee, and the Clerk 'shall dismiss the citation' on receipt of valid proof.",
    },
    {
      question: "Which affidavit form do I use?",
      answer:
        "'Affidavit — Disabled Parking Space' (Form CLK/CT. 264) for a general disabled-space citation, or 'Affidavit for Disabled Parking at Meter' (Form CLK/CT. 265) if the citation was issued at a metered disabled space.",
    },
    {
      question: "Is there a fee to use this process?",
      answer:
        "Yes — a $7.50 statutory dismissal fee is required along with the permit registration, ID copy, and signed affidavit.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const miamiCity: ParkingCity = {
  slug: "miami",
  city: "Miami",
  state: "FL",
  agency:
    "City of Miami parking citations are issued by the Miami Parking Authority (MPA) — 'an independent agency of the City of Miami' — and by City of Miami parking enforcement/police, under City of Miami Code Chapter 35 (Motor Vehicles and Traffic). MPA's own 'Citation Review' process only handles citations issued for overlooked payment or e-permit violations. Every other citation dispute — and any metered/PARCS invoice that goes unpaid and becomes a formal citation under City Code § 35-165(c) — is processed and adjudicated by the Miami-Dade Clerk of Court and Comptroller's Parking Operations Department, which functions as the county's 'traffic violations bureau' / Parking Violations Bureau under Fla. Stat. § 316.1967. The Clerk's own 'Request for Court Hearing' form captions the matter 'IN THE COUNTY COURT IN AND FOR MIAMI-DADE COUNTY, FLORIDA,' and hearings are conducted via Zoom or phone.",
  submitOnlineUrl: "https://workflow.miamiparking.com/citation-review/submit",
  submitMailAddress:
    "Parking Operations Department, Overtown Transit Village South, 601 NW 1 Court, 18th Floor, Miami, FL 33136 (or email parkingCT@miamidadeclerk.gov)",
  submitInPerson:
    "Any Miami-Dade Clerk of the Court location, Monday–Friday 9 a.m.–4 p.m.: Overtown Transit Village South (601 NW 1 Court, 18th Floor, Miami, FL 33136), Joseph Caleb Center Court, Coral Gables District Court, Hialeah District Court, North Dade Justice Center, South Dade Justice Center, or the Richard E. Gerstein Justice Building. For MPA's separate overlooked-payment/e-permit Citation Review only (not a court hearing), MPA's office is at 40 NW 3 St, Suite 1103, Miami, FL 33128, phone 305-373-6789.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "\"You may request a court hearing within 30 days of the issue date of the citation\" and \"If you wish to request a court hearing it must be made within 30 days of the citation issue date.\" Requesting a hearing after that window does not appear to be barred outright on the Clerk's published pages, but late payment fees begin accruing once the separate 30-day payment deadline passes. Sources: Miami-Dade Clerk of the Court — Parking Citations, https://www.miamidadeclerk.gov/clerk/parking-citations.page; Miami-Dade Clerk of the Court — Request for Court Hearing (Form CLK/CT. 332), https://www.miamidadeclerk.gov/resources-clerk/library/Parking/332-Web.pdf.",
  penaltyNote:
    "All parking citations must be paid within 30 days of issuance, or a response (hearing request) filed within that window. Fees increase for late payment — for example, per the Clerk's published citation-fee schedule: Overtime and Restricted Parking $36 (paid within 30 days) rising to $46 after 30 days; Improper Parking $29 rising to $42; Prohibited Parking $46 rising to $56; Obstructing Traffic $124 rising to $154; Freight Curb Loading $79 rising to $98; Unlawful Parking in a 'Disabled Permit Only' space is a flat $257 regardless of timing. Citations left unpaid more than 90 days are referred to an outside collection/credit-reporting agency, which adds 30 percent of the total owed on top of the original fine and late penalties. Three or more outstanding parking citations, or a single disabled-parking violation, can trigger a registration stop or tow order. If you request a court hearing and are found guilty, the court may add a penalty of up to $100 plus court costs (Fla. Stat. § 316.1967(4)), due at the time of the hearing; failing to appear at a scheduled hearing can result in a guilty finding as if you had attended, and — absent a posted bond — can lead to impoundment of the vehicle or license plate. Sources: Miami-Dade Clerk of the Court — Parking Citations, https://www.miamidadeclerk.gov/clerk/parking-citations.page; Miami-Dade Clerk of the Court — Late Payments, https://www.miamidadeclerk.gov/clerk/late-payments.page; Request for Court Hearing (Form CLK/CT. 332), https://www.miamidadeclerk.gov/resources-clerk/library/Parking/332-Web.pdf.",
  municipalCodeRefs: [
    {
      label: "City of Miami Code § 35-151 — Parking when meter shows violation",
      citation: "Miami, Fla., Code of Ordinances § 35-151",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-151PAWHMESHVI",
    },
    {
      label: "City of Miami Code § 35-152 — Parking longer than maximum time shown on meter",
      citation: "Miami, Fla., Code of Ordinances § 35-152",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-152PALOMATISHME",
    },
    {
      label: "City of Miami Code § 35-153 — Parking longer than time indicated on signs",
      citation: "Miami, Fla., Code of Ordinances § 35-153",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-153PALOTIINSI",
    },
    {
      label: "City of Miami Code § 35-158 — Parking prohibited in certain places",
      citation: "Miami, Fla., Code of Ordinances § 35-158",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-158PAPRCEPL",
    },
    {
      label: "City of Miami Code § 35-162 — Form of notice of violation; monthly report on disposition of notices issued",
      citation: "Miami, Fla., Code of Ordinances § 35-162",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-162FONOVIMOREDINOIS",
    },
    {
      label: "City of Miami Code § 35-165 — Invoice and citations by mail (dispute/appeal of an invoice issued in error; becomes a Miami-Dade County parking citation if unpaid)",
      citation: "Miami, Fla., Code of Ordinances § 35-165",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE_S35-165INCIMA",
    },
    {
      label: "Fla. Stat. § 316.1967 — Liability for payment of parking ticket violations and other parking violations",
      citation: "Fla. Stat. § 316.1967",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1967.html",
    },
    {
      label: "Fla. Stat. § 316.1955 — Enforcement of parking requirements for persons who have disabilities",
      citation: "Fla. Stat. § 316.1955",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1955.html",
    },
  ],
  recognizedDefenses: [
    "broken-meter",
    "obscured-signage",
    "valid-payment",
    "not-my-vehicle",
    "disabled-parking-permit",
  ],
  defenses: [broken_meter, obscured_signage, valid_payment, not_my_vehicle, disabled_parking_permit],
  faqs: [
    {
      question: "How long do I have to contest a City of Miami parking citation?",
      answer:
        "You must request a County Court hearing within 30 days of the citation's issue date. Requesting a hearing waives your right to simply pay the civil penalty (Fla. Stat. § 316.1967(4)), and late payment fees begin accruing once the separate 30-day payment deadline passes.",
    },
    {
      question: "Who actually decides my Miami parking ticket dispute — the city or the county?",
      answer:
        "The Miami Parking Authority's own 'Citation Review' only handles citations issued for overlooked payment or e-permit violations. Every other dispute — and any unpaid metered/PARCS invoice that becomes a formal citation — is processed and adjudicated by the Miami-Dade Clerk of the Court and Comptroller's Parking Operations Department, captioned 'IN THE COUNTY COURT IN AND FOR MIAMI-DADE COUNTY, FLORIDA,' with hearings conducted via Zoom or phone.",
    },
    {
      question: "What happens if I lose my hearing or don't show up?",
      answer:
        "If found guilty, the court may impose an additional penalty of up to $100 plus court costs, due at the time of the hearing (Fla. Stat. § 316.1967(4)). If you fail to appear, the hearing may proceed without you and you may be found guilty as if you had attended — and, without a bond posted, your vehicle or license plate may be subject to impoundment.",
    },
    {
      question: "What if my citation is for a disabled parking space?",
      answer:
        "You can skip the hearing process entirely: submit the Clerk's 'Affidavit — Disabled Parking Space' (or 'Affidavit for Disabled Parking at Meter') with the permit registration, a copy of your ID, and the $7.50 statutory dismissal fee, and the Clerk 'shall dismiss the citation' on receipt of valid proof.",
    },
  ],
  sources: [
    {
      label: "Miami Parking Authority — Citation Review",
      url: "https://www.miamiparking.com/citation-review/",
    },
    {
      label: "Miami Parking Authority — Citation Review submission form",
      url: "https://workflow.miamiparking.com/citation-review/submit",
    },
    {
      label: "City of Miami — Pay a Parking Ticket",
      url: "https://www.miami.gov/Transportation-Roadways/Parking/Pay-a-Parking-Ticket",
    },
    {
      label: "Miami-Dade Clerk of the Court — Parking Citations",
      url: "https://www.miamidadeclerk.gov/clerk/parking-citations.page",
    },
    {
      label: "Miami-Dade Clerk of the Court — Late Payments",
      url: "https://www.miamidadeclerk.gov/clerk/late-payments.page",
    },
    {
      label: "Miami-Dade Clerk of the Court — Request for Court Hearing (Form CLK/CT. 332)",
      url: "https://www.miamidadeclerk.gov/resources-clerk/library/Parking/332-Web.pdf",
    },
    {
      label: "Miami-Dade Clerk of the Court — Affidavit: Disabled Parking Space (Form CLK/CT. 264)",
      url: "https://www.miamidadeclerk.gov/resources-clerk/library/Parking/264-Web.pdf",
    },
    {
      label: "Miami-Dade Clerk of the Court — Affidavit for Disabled Parking at Meter (Form CLK/CT. 265)",
      url: "https://www.miamidadeclerk.gov/resources-clerk/library/Parking/265-Web.pdf",
    },
    {
      label: "City of Miami Code, Chapter 35 — Motor Vehicles and Traffic (Mini TOC)",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR",
    },
    {
      label: "City of Miami Code Chapter 35, Article III, Division 3 — Regulations (§§ 35-151—35-165)",
      url: "https://library.municode.com/fl/miami/codes/code_of_ordinances?nodeId=PTIITHCO_CH35MOVETR_ARTIIIPAMEZO_DIV3RE",
    },
    {
      label: "Fla. Stat. § 316.1967 — Liability for payment of parking ticket violations and other parking violations",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1967.html",
    },
    {
      label: "Fla. Stat. § 316.1955 — Enforcement of parking requirements for persons who have disabilities",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1955.html",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
