import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/san-antonio.json (verifiedAt 2026-07-20).
// IMPORTANT: San Antonio parking citations are civil offenses, not criminal ones (San Antonio,
// Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-225(a)). They are contested and
// adjudicated through the Municipal Court's "administrative adjudication" process created by
// § 19-225, before a Parking Hearing Officer appointed by the city manager (§ 19-225(c)) — not
// a criminal trial. San Antonio does NOT offer online contest submission (its online portal is
// payment/case-status only), and it does NOT use a fixed N-day contest window like most other
// cities in this dataset: the deadline is the specific hearing date printed on the individual
// citation or mailed summons. Every defense statement below is a written statement CONTESTING
// the citation ahead of that administrative adjudication hearing, submitted in person or by
// mail — a civil DENY-style statement, not a criminal "not guilty" plea.

const sanAntonioHowToContest: string[] = [
  "Locate your citation number and check the printed facts against your vehicle and the actual violation: license plate, vehicle description, violation, date/time, and location. Under § 19-224, the violation notice is required to contain the parking meter or pay station number (if applicable), the state and number of the vehicle's license plate, the nature of the violation, and any other facts necessary to a thorough understanding of the circumstances -- a citation missing or misstating these facts is your evidence for a wrong-ticket-details contest.",
  "Confirm your case has been created in the court's docketing system before assuming a contest method will be accepted -- sa.gov states 'no action can be taken in any case before the submission of the ticket to the municipal court and the creation of a parking case in the court docketing system,' and the Municipal Court's own FAQ says it can take up to ten business days for a citation to appear online. If a case is created after the hearing date printed on your original ticket, the court mails a summons with a new hearing date to the vehicle's registered owner. Search for your case only through the official court website -- sa.gov's Parking Tickets page warns of fraudulent emails impersonating the Municipal Court over 'delinquent parking violations' that try to collect personal information; do not reply to such emails.",
  "IMPORTANT -- San Antonio does not offer online contest submission. The city's online system (the 'Search or Pay Your Citation' portal, linked directly from sa.gov's Pay a Ticket or Citation page) is for reviewing and paying a citation and checking case status only; it has no contest, dispute, or hearing-request function. To actually contest a citation you must use one of the two methods below.",
  "Method 1 -- Appear in person: you must appear at San Antonio Municipal Court (401 S. Frio St.) no later than the hearing date listed on your parking ticket, during parking hearing hours (Monday-Friday, 8-10 a.m. & 1-3 p.m.). Ordinance § 19-225(b) also gives you the right to an earlier 'instanter hearing' before your originally scheduled hearing date, and § 19-225(c) gives hearing officers authority to compel witnesses and documents.",
  "Method 2 -- Contest by mail: send a letter with your ticket/citation number and any evidence necessary to contest the ticket to City of San Antonio Municipal Court, Attn: Parking Hearings, 401 S. Frio St., San Antonio, TX 78207, before your court date as assigned on your citation or summons.",
  "Gather and mail (or bring) the specific evidence your situation needs: for a disabled-placard-related ticket, a copy of your valid disabled parking placard or ISA license plate plus the associated driver's license/ID (§ 19-201); for a vehicle that was stolen or sold before the violation date, a Bill of Sale or DMV verification of a Texas Motor Vehicle Transfer Notification (VTR-346), or a police report for a stolen vehicle (rebuts the § 19-225(d) presumption that the registered owner was the operator); for a missing/expired-meter or pay-station ticket, your payment receipt or app confirmation (rebuts the § 19-223 'prima facie evidence' presumption); for a missing-sign ticket, photos showing no sign was posted (§ 19-197).",
  "IMPORTANT -- failure to appear or otherwise respond by the hearing date is not neutral: ordinance § 19-225(f) states 'the failure of any person charged with an offense to appear at the hearing shall be an admission of liability for the charged offense.' A Parking Hearing Officer reviews your case (your mailed letter and evidence, or your in-person appearance and evidence) and issues a written order stating liability and any fine, cost, or fee (§ 19-225(f)).",
  "If the hearing officer's order goes against you, you may appeal to a municipal court judge by filing an appeal petition with the court clerk not later than 30 days after the order is filed, along with a $5.00 appeal filing fee (§ 19-225(i)). The appeal hearing must be scheduled within 10 days of filing and reviews the evidence already presented to the hearing officer. Filing an appeal does not stop enforcement/collection unless you also post a bond with the municipal court director (§ 19-225(j)).",
  "If a parking hearing order is entered against you and goes unpaid, both sa.gov and ordinance § 19-225(g) describe these enforcement mechanisms: a $10 fine imposed after 14 days of non-payment; immobilization (booting, plus a $60 booting fee under § 19-225(m)) of the vehicle if found on public right-of-way, easement, a city-owned parking facility, or other public property; impoundment of the vehicle under the same circumstances if the owner has 3 or more offenses in a calendar year; and the City refusing registration of the vehicle.",
];

const sanAntonioIfThisDoesntWork =
  "If the Parking Hearing Officer's order goes against you, you may appeal to a municipal court judge by filing an appeal petition with the court clerk not later than 30 days after the order is filed, along with a $5.00 appeal filing fee (San Antonio Code of Ordinances § 19-225(i)). The appeal hearing must be scheduled within 10 days of filing and reviews the evidence already presented to the hearing officer. Filing an appeal does not stop enforcement or collection against you unless you also post a bond with the municipal court director (§ 19-225(j)).";

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "san-antonio",
  title: "Fight a San Antonio parking citation for a vehicle you no longer own",
  metaDescription:
    "Free defense-statement letter for a San Antonio parking citation on a vehicle you sold or that was stolen. Cites Code § 19-225(d) — hearing-ready template.",
  whenItApplies:
    "The vehicle named on the parking citation was stolen, or was sold/transferred to someone else, before the date of the violation shown on the ticket -- so you were not the owner (or an authorized operator) of the vehicle at the time it was ticketed.",
  body: `To: City of San Antonio Municipal Court -- Parking Hearings
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that a Parking Hearing Officer find me not liable at my administrative adjudication hearing under San Antonio Code of Ordinances § 19-225.

I was not the owner (or an authorized operator) of the vehicle bearing plate [PLATE] on [DATE], the date of the violation cited above. [SELECT ONE: I had already sold or transferred the vehicle on [TRANSFER DATE], as shown by the attached Bill of Sale and/or DMV verification of a Texas Motor Vehicle Transfer Notification (VTR-346). / The vehicle had been stolen prior to that date, as shown by the attached police report.]

Under § 19-225(d), the vehicle's registered owner is only presumed -- not conclusively established -- to be the person who parked or stopped the vehicle at the time and place of the offense charged. The evidence attached below rebuts that presumption, and consistent with the City of San Antonio Municipal Court's own published guidance for a vehicle "stolen or sold at the time of the ticket," under which "the case may be closed after a review of supporting documentation," I ask that this citation be dismissed on that basis.

Attached: [Bill of Sale showing the buyer, seller, vehicle description, and date of sale; DMV verification of a Texas Motor Vehicle Transfer Notification (VTR-346); or the police report related to the vehicle's theft; a copy of the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Sold/transferred vehicle: a Bill of Sale showing the buyer and the buyer's contact information, the seller, a description of the vehicle, and the date of sale",
    "Sold/transferred vehicle (alternative/additional): verification from the Texas Department of Motor Vehicles that you properly submitted a Texas Motor Vehicle Transfer Notification form (VTR-346)",
    "Stolen vehicle: the police report related to the theft of the vehicle",
    "A copy of the parking violation notice/citation you received",
  ],
  cityNotes:
    "San Antonio's whole parking-hearing process runs on a rebuttable presumption, not conclusive liability: ordinance § 19-225(d) states 'it is presumed that the registered owner of the vehicle that is the subject of the hearing is the person who parked or stopped the vehicle at the time and place of the offense charged' -- meaning proof that you were no longer the owner (or that the vehicle was stolen) at the time of the violation directly rebuts that presumption. sa.gov's Parking Tickets page operationalizes this: for a vehicle 'stolen or sold at the time of the ticket, the case may be closed after a review of supporting documentation,' mailed to the same Attn: Parking Hearings address used for standard mail contests. The Municipal Court's own FAQ confirms the sold-vehicle version in plain language: 'I received a parking violation letter but I sold the vehicle BEFORE the violation date. What can I provide to the court? ... Bill of sale of the vehicle [and] Verification from DMV that vehicle is no longer under your name.'",
  codeCite: {
    label: "San Antonio Code of Ordinances § 19-225(d) -- Vehicle registered owner presumed to be operator (a rebuttable presumption, not conclusive liability)",
    citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-225(d)",
    url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-225ADADSTSTPAVI",
  },
  howToSubmit: sanAntonioHowToContest,
  ifThisDoesntWork: sanAntonioIfThisDoesntWork,
  sources: [
    {
      label: "City of San Antonio -- Parking Tickets (Citations) (\"Vehicle Stolen or Sold\")",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
    {
      label: "City of San Antonio Municipal Court -- Frequently Asked Questions (\"I received a parking violation letter but I sold the vehicle BEFORE the violation date\")",
      url: "https://www.sa.gov/Directory/Departments/Court/Appearances-Procedures/FAQ",
    },
    {
      label: "San Antonio Code of Ordinances § 19-225 -- Administrative adjudication of stopping, standing and parking violations (read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-225ADADSTSTPAVI",
    },
  ],
  faqs: [
    {
      question: "Do I need a special form to make this defense?",
      answer:
        "No standalone form is required. Mail a letter with your Bill of Sale (or DMV verification of a Texas Motor Vehicle Transfer Notification, VTR-346) or a police report for a stolen vehicle, along with your citation number, to the Parking Hearings address -- or bring the same documents in person by the hearing date printed on your citation.",
    },
    {
      question: "What if my vehicle was stolen instead of sold?",
      answer:
        "Attach the police report related to the vehicle's theft instead of a bill of sale -- sa.gov's guidance covers a vehicle 'stolen or sold at the time of the ticket' the same way, and the case may be closed after a review of supporting documentation.",
    },
    {
      question: "Is the registered-owner presumption automatic proof against me?",
      answer:
        "No. Ordinance § 19-225(d) only presumes the registered owner was the operator -- it's a rebuttable presumption, and proof you weren't the owner at the time of the violation rebuts it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "san-antonio",
  title: "Fight a missing-sign parking citation in San Antonio",
  metaDescription:
    "Free defense-statement letter for a San Antonio parking ticket where no regulatory sign was posted. Cites Code § 19-197 — hearing-ready template.",
  whenItApplies:
    "You were ticketed for exceeding a posted time limit, or for a parking prohibition that depends on a posted sign, but no such sign was actually erected/visible at that location at the time of the alleged violation (missing, knocked down, obscured, or never installed).",
  body: `To: City of San Antonio Municipal Court -- Parking Hearings
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that a Parking Hearing Officer find me not liable at my administrative adjudication hearing under San Antonio Code of Ordinances § 19-225.

I was cited at [LOCATION] on [DATE] at [TIME] for [SELECT ONE: exceeding a posted time limit / a parking prohibition] that depends on a posted sign. No such sign was erected or visible at that location at the time of the alleged violation -- [DESCRIBE: no sign was present / the sign had been knocked down / the sign was obscured or illegible].

Under San Antonio Code of Ordinances § 19-197, whenever an ordinance prohibits parking or imposes a parking time limit, the city's traffic engineer must erect a sign giving notice of it, and "no such parking regulation shall be given effect unless such sign is erected at the time of the alleged parking violation." Because the required sign was not in place at the time I was cited, the underlying parking regulation had no legal effect at this location, and I ask that this citation be dismissed on that basis.

Attached: [photos of the parking location taken as close as possible to the time of the citation, showing the absence of any regulatory sign, or an obscured/illegible/fallen sign; a copy of the citation showing the specific violation code and location cited; any independent evidence documenting missing signage].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of the parking location taken as close as possible to the time of the citation, showing the absence of any regulatory sign (or an obscured/illegible/fallen sign)",
    "A copy of the citation showing the specific violation code and location cited",
    "Any independent evidence the location lacks signage (e.g., Street View history, prior 311 reports of a missing/damaged sign) if available",
  ],
  cityNotes:
    "This is a direct, textual ordinance defense, not just city guidance: § 19-197 states that whenever an ordinance prohibits parking or imposes a parking time limit (other than decal-program time limits), the traffic engineer must erect a sign giving notice of it, and 'no such parking regulation shall be given effect unless such sign is erected at the time of the alleged parking violation.' In other words, if the required sign was not actually up at the time you were ticketed, the underlying parking regulation legally has no effect for that citation. Confirmed live via Playwright by re-opening this section's own direct Municode URL fresh (not the article-wide page) and reading the rendered text.",
  codeCite: {
    label: "San Antonio Code of Ordinances § 19-197 -- Parking time limit signs required except for decal program time limits; prohibited parking signs required",
    citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 2, § 19-197",
    url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV2SPPARE_S19-197PATILISIREEXDEPRTILIPRPASIRE",
  },
  howToSubmit: sanAntonioHowToContest,
  ifThisDoesntWork: sanAntonioIfThisDoesntWork,
  sources: [
    {
      label: "San Antonio Code of Ordinances § 19-197 (re-opened fresh via its own direct Municode section URL and confirmed live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV2SPPARE_S19-197PATILISIREEXDEPRTILIPRPASIRE",
    },
    {
      label: "City of San Antonio -- Parking Tickets (Citations) (general contest process: appear by hearing date, or contest by mail with evidence)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
  ],
  faqs: [
    {
      question: "Is missing signage a real legal defense in San Antonio, or just a practical argument?",
      answer:
        "It's a direct ordinance defense. § 19-197 states that a required parking time-limit or prohibition sign must be erected, and 'no such parking regulation shall be given effect unless such sign is erected at the time of the alleged parking violation.'",
    },
    {
      question: "What if the sign was there but hard to read?",
      answer:
        "Photograph it as it appeared at the time -- an obscured, damaged, or illegible sign supports the same argument that the required notice wasn't effectively given.",
    },
    {
      question: "Does this defense cover decal-program time limits?",
      answer:
        "No -- § 19-197 excepts decal-program time limits from this sign-erection requirement. It applies to other posted time limits and parking prohibitions.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "san-antonio",
  title: "Fight a paid-parking citation in San Antonio",
  metaDescription:
    "Free defense-statement letter for a San Antonio meter or pay-station citation you actually paid for. Cites Code § 19-223 — hearing-ready template.",
  whenItApplies:
    "You were ticketed at an on-street or off-street paid-parking zone (parking meter or pay station) for an expired/unpaid meter or pay-station space, but you did in fact pay for the parking session -- e.g. your receipt, app confirmation, or pay-and-display slip shows valid payment covering the cited time.",
  body: `To: City of San Antonio Municipal Court -- Parking Hearings
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that a Parking Hearing Officer find me not liable at my administrative adjudication hearing under San Antonio Code of Ordinances § 19-225.

I was cited at [LOCATION] on [DATE] at [TIME] for an expired or unpaid meter/pay-station space, but I did in fact pay for parking at that location covering the cited time. I paid through [PAYMENT METHOD -- meter / pay station / mobile app], and my receipt shows a paid time window of [PAYMENT START TIME] to [PAYMENT EXPIRATION TIME], which covers the time this citation was issued.

Under § 19-223, an expired display on the meter, pay-by-space station, or pay-and-display receipt is only "prima facie evidence" -- not conclusive evidence -- that the vehicle was parked beyond the paid time or that the operator did not pay. The payment evidence attached below rebuts that presumption, and I ask that this citation be dismissed on that basis.

Attached: [payment receipt or pay-station printout showing the date, time, and duration paid for; mobile-app payment confirmation showing the space/zone number and paid time window; a photo of the pay-and-display receipt as it was displayed inside my windshield, if applicable; a copy of the citation showing the meter/pay-station number and cited time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Payment receipt or pay-station printout showing the date, time, and duration paid for",
    "Mobile-app payment confirmation/screenshot (if paid via a parking payment app), showing the space/zone number and paid time window",
    "A photo of the pay-and-display receipt as it was displayed inside your windshield next to the curb, if applicable",
    "A copy of the citation showing the meter/pay-station number and cited time",
  ],
  cityNotes:
    "San Antonio's meter/pay-station enforcement scheme is explicitly built on a rebuttable presumption, not conclusive proof of nonpayment: § 19-223 ('Presumptions') states that an expired display on the meter, pay-by-space station, or pay-and-display receipt 'is prima facie evidence' -- not conclusive evidence -- that the vehicle was parked beyond the paid time or that the operator did not pay. Payment itself is required immediately upon parking under § 19-221(a), and § 19-222 lists the specific violations (parking when the meter/pay station 'does not show paid-for time,' failing to pay immediately, failing to display a pay-station receipt properly, etc.) that a valid payment record directly rebuts. Because the presumption is only prima facie, producing your receipt or app confirmation is exactly the kind of evidence the ordinance contemplates you would submit at your hearing or by mail to overcome it.",
  codeCite: {
    label: "San Antonio Code of Ordinances § 19-223 -- Presumptions (expired meter/pay-station display is only prima facie evidence of a violation, not conclusive)",
    citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-223",
    url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-223PR",
  },
  howToSubmit: sanAntonioHowToContest,
  ifThisDoesntWork: sanAntonioIfThisDoesntWork,
  sources: [
    {
      label: "San Antonio Code of Ordinances § 19-223 -- Presumptions (read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-223PR",
    },
    {
      label: "San Antonio Code of Ordinances § 19-221 -- Operation of meters and pay stations (payment obligation, methods, and pay-and-display procedure; read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-221OPMEPAST",
    },
    {
      label: "City of San Antonio -- Parking Tickets (Citations) (general contest process: appear by hearing date, or contest by mail with evidence)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
  ],
  faqs: [
    {
      question: "Is an expired-meter reading on the citation conclusive proof I didn't pay?",
      answer:
        "No. § 19-223 makes an expired display only 'prima facie evidence' -- a rebuttable presumption -- so your receipt or app confirmation can overcome it.",
    },
    {
      question: "What counts as proof of payment?",
      answer:
        "A payment receipt or pay-station printout, a mobile-app payment confirmation showing the space/zone number and paid time window, or a photo of a displayed pay-and-display receipt.",
    },
    {
      question: "Where does the payment obligation come from?",
      answer:
        "§ 19-221(a) requires payment immediately upon parking, and § 19-222 lists the specific meter/pay-station violations that a valid payment record rebuts.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "san-antonio",
  title: "Fight a defective parking citation in San Antonio (wrong details)",
  metaDescription:
    "Free defense-statement letter for a San Antonio parking citation with incorrect details. Cites Code § 19-224 and § 19-225(e) — hearing-ready template.",
  whenItApplies:
    "The citation itself contains information that does not match your vehicle or the actual facts of the violation -- e.g., an incorrect license plate, vehicle description, meter/pay-station number, date, time, or location.",
  body: `To: City of San Antonio Municipal Court -- Parking Hearings
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that a Parking Hearing Officer find me not liable at my administrative adjudication hearing under San Antonio Code of Ordinances § 19-225.

This citation contains information that does not match my vehicle or the actual facts. Specifically, the [FIELD -- e.g., license plate / vehicle description / meter or pay-station number / date or time / location] printed on the citation is [DESCRIBE THE DISCREPANCY]. Comparing the citation against my vehicle registration/title, the correct information is: [CORRECT INFORMATION].

Under § 19-224, a parking violation notice is required to contain the number of the parking meter or pay station (if applicable), the state and number of the vehicle's license plate, the nature of the violation, and any other facts necessary to a thorough understanding of the circumstances. Separately, § 19-225(e) provides that the citation/summons is only prima facie -- not conclusive -- evidence of the facts it contains. The discrepancy described above rebuts those stated facts, and I ask that this citation be dismissed on that basis.

Attached: [a copy or photo of the actual citation showing the incorrect field(s); my vehicle registration or title; any other evidence contradicting the citation's stated location, date, or time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the incorrect field(s)",
    "Your vehicle registration or title, to compare the correct plate number and vehicle description against what's on the citation",
    "Any other evidence contradicting the citation's stated location, date, or time (e.g., photos, receipts, other timestamped records)",
  ],
  cityNotes:
    "Ordinance § 19-224 sets the required content of a parking violation notice: it 'should contain the number of the parking meter or pay station at which the vehicle is parked, the name of the state and number of the vehicle's license plate; the nature of the violation, and any other facts, a knowledge of which is necessary to a thorough understanding of the circumstances attending such violation.' Separately, § 19-225(e) makes clear the citation/summons is only 'prima facie evidence of the facts contained therein' -- a rebuttable presumption, not conclusive proof -- so a citation that misstates the required facts (wrong plate, wrong meter/pay-station number, wrong location, etc.) can be contested on that basis through San Antonio's general mail-or-appear process: 'contest your parking ticket by mail by sending a letter with the ticket number and any evidence necessary to contest the ticket. A Parking Hearing Officer will review your case and make a ruling.'",
  codeCite: {
    label: "San Antonio Code of Ordinances § 19-224 -- Enforcement of regulations (required content of a parking violation notice)",
    citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-224",
    url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-224ENRE",
  },
  howToSubmit: sanAntonioHowToContest,
  ifThisDoesntWork: sanAntonioIfThisDoesntWork,
  sources: [
    {
      label: "San Antonio Code of Ordinances § 19-224 -- Enforcement of regulations (read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-224ENRE",
    },
    {
      label: "San Antonio Code of Ordinances § 19-225(e) -- citation/summons is prima facie (rebuttable) evidence of the facts it contains (read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-225ADADSTSTPAVI",
    },
    {
      label: "City of San Antonio -- Parking Tickets (Citations) (general contest process: appear by hearing date, or contest by mail with evidence)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
  ],
  faqs: [
    {
      question: "What counts as a 'wrong detail' worth contesting?",
      answer:
        "Anything that doesn't match your vehicle or the actual facts -- an incorrect license plate, vehicle description, meter/pay-station number, date, time, or location.",
    },
    {
      question: "Does San Antonio law require these facts to be accurate on the citation?",
      answer:
        "Yes. § 19-224 requires a parking violation notice to contain the meter/pay-station number (if applicable), the plate's state and number, the nature of the violation, and other facts necessary to understand the circumstances.",
    },
    {
      question: "Is the citation itself proof against me at the hearing?",
      answer:
        "Only prima facie proof. § 19-225(e) makes the citation/summons rebuttable evidence of the facts it contains, not conclusive proof -- a documented discrepancy rebuts it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_placard_reduction: ParkingDefense = {
  slug: "disabled-placard-reduction",
  citySlug: "san-antonio",
  title: "Reduce a disabled-parking citation fine in San Antonio",
  metaDescription:
    "Free statement to request a fine/fee reduction for a San Antonio disabled parking citation with a valid placard or ISA plate. Cites Code § 19-201.",
  whenItApplies:
    "You received a ticket for a disabled parking violation, and you are the holder of a valid disabled parking placard or a license plate bearing the International Symbol of Access (ISA) -- you may be eligible for reduced fines or fees rather than paying the full cited amount.",
  body: `To: City of San Antonio Municipal Court -- Parking Hearings
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this statement to contest this citation ahead of my administrative adjudication hearing under San Antonio Code of Ordinances § 19-225, and to request that my fine and any associated fees be reduced consistent with my disabled parking placard/ISA-plate status.

On [DATE], my vehicle, plate [PLATE], was cited at [LOCATION] for a disabled parking violation. I am the holder of a valid disabled parking placard, number [PLACARD NUMBER], or a license plate bearing the International Symbol of Access (ISA), issued to [PLACARD HOLDER NAME].

Under San Antonio Code of Ordinances § 19-201, spaces reserved for persons with disabilities are restricted to vehicles displaying a valid disabled tag or ISA-plate/temporary ID card, and the absence of a valid tag or plate is only "prima facie evidence" -- a rebuttable presumption, not conclusive proof -- that the vehicle was illegally parked. Consistent with the City of San Antonio's own published guidance that a placard or ISA-plate holder cited for a disabled parking violation "may be eligible for reduced fines or fees," I ask that this citation be reviewed on that basis and that my fine and any fees be reduced accordingly.

Attached: [a copy of my valid disabled parking placard, or my license plate with the International Symbol of Access (ISA); the driver's license or ID card associated with the placard/plate holder; a copy of the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of your valid disabled parking placard, or your license plate with the International Symbol of Access (ISA)",
    "The driver's license or ID card associated with the placard/plate holder",
    "A copy of the citation",
  ],
  cityNotes:
    "Ordinance § 19-201 is the underlying violation section: it restricts disabled-designated spaces to vehicles displaying a valid 'disabled' tag or ISA-plate/temporary ID card (§ 19-201(a)), and its own presumption clause (§ 19-201(c)) makes the absence of a valid tag/plate 'prima facie evidence' (again, rebuttable, not conclusive) that the vehicle was illegally parked. sa.gov's published guidance is narrower than a full dismissal of the underlying citation: a placard/ISA-plate holder ticketed for a disabled parking violation 'may be eligible for reduced fines or fees,' not automatic dismissal, and evidence 'may be submitted by mail' or brought to the municipal court for review by a hearing officer; sa.gov also notes 'having disabled ticket reductions processed' can be completed at the Cashier during published Cashier Hours -- i.e. this can run through the payment/cashier process rather than only a contested hearing.",
  codeCite: {
    label: "San Antonio Code of Ordinances § 19-201 -- Parking for disabled persons; violations",
    citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 2, § 19-201",
    url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV2SPPARE_S19-201PADIPEVI",
  },
  howToSubmit: sanAntonioHowToContest,
  ifThisDoesntWork: sanAntonioIfThisDoesntWork,
  sources: [
    {
      label: "San Antonio Code of Ordinances § 19-201 (re-opened fresh via its own direct Municode section URL and confirmed live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV2SPPARE_S19-201PADIPEVI",
    },
    {
      label: "City of San Antonio -- Parking Tickets (Citations) (\"Disabled Parking Violations\")",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
    {
      label: "City of San Antonio Municipal Court -- Pay a Ticket or Citation (Cashier note on disabled ticket reductions)",
      url: "https://www.sa.gov/Directory/Departments/Court/Pay",
    },
  ],
  faqs: [
    {
      question: "Will this get my citation dismissed entirely?",
      answer:
        "Not automatically. The City's published guidance describes this as making you eligible for reduced fines or fees, not a guaranteed dismissal -- bring or mail your placard/ID for the hearing officer's review.",
    },
    {
      question: "Can I handle this without going through a full contested hearing?",
      answer:
        "Possibly. sa.gov notes that having disabled ticket reductions processed can be completed at the Cashier during published Cashier Hours, in addition to submitting evidence by mail or at Municipal Court.",
    },
    {
      question: "What if my vehicle has an ISA plate instead of a hanging placard?",
      answer:
        "Either qualifies -- § 19-201 covers both a valid disabled parking placard and a license plate bearing the International Symbol of Access (ISA).",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const sanAntonioCity: ParkingCity = {
  slug: "san-antonio",
  city: "San Antonio",
  state: "TX",
  agency:
    "City of San Antonio Municipal Court -- Parking Hearings. Parking citations are civil offenses, not criminal ones (San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-225(a): stopping, standing, and parking ordinance violations 'are hereby declared to be civil offenses'). They are contested and adjudicated through the Municipal Court's 'administrative adjudication' process created by § 19-225, before a Parking Hearing Officer appointed by the city manager (§ 19-225(c)), and payment does not appear on your state driving record (sa.gov, Parking Tickets (Citations); § 19-225(a)). NOTE: San Antonio's separate 'Administrative Hearings' track (case numbers prefixed 'AH') also lives under the Municipal Court's 'Parking & Administrative Hearings' menu, but sa.gov's own Administrative Hearings page describes that track as 'an alternative enforcement mechanism ... for the enforcement of certain city codes, usually relating to building codes, the condition of a property, or animal control' -- NOT parking. Do not confuse the two: parking citations use the § 19-225 Parking Hearings process described in this record.",
  submitOnlineUrl: "https://6.municipal.cc/sanantoniocosatx/citationwebportal/",
  submitMailAddress: "City of San Antonio Municipal Court, Attn: Parking Hearings, 401 S. Frio St., San Antonio, TX 78207",
  submitInPerson:
    "San Antonio Municipal Court, 401 S. Frio St., San Antonio, TX 78207. Court hours: Monday-Friday, 8 a.m.-4:30 p.m. Parking hearing hours specifically: Monday-Friday, 8-10 a.m. & 1-3 p.m. Paid parking is available in front of the Courthouse ($4, credit or debit cards only, no in/out privileges). A Drop Box (personal check or money order only) and a Magistrate Office are also available 24/7 at the same address for payments (not contests).",
  howToContest: sanAntonioHowToContest,
  contestDeadlineDays: 0,
  contestDeadlineNote:
    "SAN ANTONIO DOES NOT USE A FIXED N-DAY CONTEST WINDOW like most other cities in this dataset for the INITIAL contest -- this is a genuine mechanism difference, not a research gap. San Antonio's own Municipal Court page states plainly: 'If you wish to contest a parking ticket, you must appear no later than hearing date listed on the parking ticket,' and the Pay a Ticket or Citation page describes the mail option the same way: 'You may make a request in writing to the Court before your court date as assigned on your citation or summons.' In both cases the deadline is an absolute, ticket-specific calendar date that the court prints directly on the individual citation or mails on a summons -- not a fixed number of days counted from issuance the way NYC's 30 days, Houston's 30 days, or Chicago's 7 days work. No sa.gov page or ordinance section confirmed in this research pass states a standard number of days between issuance and the printed hearing date, so contestDeadlineDays is set to 0 as an explicit non-value/sentinel rather than an invented number -- treat it as 'not applicable; read the hearing date printed on the actual ticket or summons.' Separately, the Municipal Court's own FAQ notes it can take 'up to ten business days' after issuance for a citation to even appear in the court's online search system -- that is a processing-lag figure, not the contest deadline itself. NOTE ON A DIFFERENT, LATER DEADLINE: if you lose at the initial hearing, ordinance § 19-225(i) DOES impose a fixed 30-day window (plus a $5.00 fee) to file an appeal petition with the municipal court clerk after the hearing officer's order is filed -- that fixed-day deadline governs the post-order appeal, not the initial contest, so it is documented in howToContest/penaltyNote rather than overriding this field. Sources: https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets ; https://www.sa.gov/Directory/Departments/Court/Pay ; https://www.sa.gov/Directory/Departments/Court/Appearances-Procedures/FAQ ; San Antonio, Tex., Code of Ordinances ch. 19, art. VI, § 19-225(b), (i).",
  penaltyNote:
    "Parking-ticket payment in San Antonio is treated as a civil offense and does not appear on your state driving record (sa.gov, Parking Tickets (Citations); ordinance § 19-225(a): stopping, standing, and parking violations 'are hereby declared to be civil offenses'). Maximum fine: the total fine per violation may not exceed $500.00, and all fines/costs/fees are paid into the city treasury general fund (§ 19-225(h)). Failure to appear: ordinance § 19-225(f) makes this explicit -- 'the failure of any person charged with an offense to appear at the hearing shall be an admission of liability for the charged offense' (this is the ordinance itself, not the separate code-compliance/animal-care 'Administrative Hearings' track, which is a different process). Once a parking hearing order is entered and unpaid, both sa.gov and § 19-225(g) list: a $10 fine imposed after 14 days of non-payment; vehicle immobilization (booting) if found on any public street, public right-of-way, public easement, city-owned parking facility, or other public property (plus a $60.00 booting fee per § 19-225(m), waived if the vehicle is towed/impounded within 24 hours to protect it from vandalism or theft); vehicle impoundment under the same location conditions if the registered owner has committed 3 or more offenses in a calendar year; and the City refusing to register the vehicle (also authorized by V.T.C.A. Transportation Code § 702.003, referenced in § 19-225(g)(4)). Appeal: a person found liable may appeal to a municipal court judge within 30 days of the order (plus a $5.00 filing fee), but filing an appeal does not stay enforcement/collection unless a bond is posted (§ 19-225(i)-(j)).",
  municipalCodeRefs: [
    {
      label: "San Antonio Code of Ordinances § 19-225 -- Administrative adjudication of stopping, standing and parking violations (establishes the civil-offense/Parking Hearing Officer process, registered-owner presumption, hearing-order enforcement, appeal procedure, and the failure-to-appear rule; read live via Playwright)",
      citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-225",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-225ADADSTSTPAVI",
    },
    {
      label: "San Antonio Code of Ordinances § 19-224 -- Enforcement of regulations (required content of a parking violation notice: meter/pay-station number, plate number, nature of violation, and facts necessary to understand the circumstances; read live via Playwright)",
      citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-224",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-224ENRE",
    },
    {
      label: "San Antonio Code of Ordinances § 19-223 -- Presumptions (an expired meter/pay-station display is only 'prima facie evidence' of a violation, i.e. a rebuttable presumption; read live via Playwright)",
      citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 3, § 19-223",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-223PR",
    },
    {
      label: "San Antonio Code of Ordinances § 19-197 -- Parking time limit signs required except for decal program time limits; prohibited parking signs required (a parking regulation has no effect unless a sign was actually erected at the time of the alleged violation; re-opened fresh via its own direct Municode section URL and confirmed live)",
      citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI, div. 2, § 19-197",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV2SPPARE_S19-197PATILISIREEXDEPRTILIPRPASIRE",
    },
    {
      label: "San Antonio Code of Ordinances ch. 19, art. VI -- Stopping, Standing and Parking (general article; table of contents for all subsections cited in this record)",
      citation: "San Antonio, Tex., Code of Ordinances ch. 19, art. VI",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA",
    },
  ],
  recognizedDefenses: ["not-my-vehicle", "obscured-signage", "valid-payment", "wrong-ticket-details", "disabled-placard-reduction"],
  defenses: [not_my_vehicle, obscured_signage, valid_payment, wrong_ticket_details, disabled_placard_reduction],
  faqs: [
    {
      question: "How long do I have to contest a San Antonio parking citation?",
      answer:
        "San Antonio doesn't use a fixed number of days from issuance the way many other cities do. Instead, you must appear in person or submit a written contest by mail before the specific hearing date printed on your ticket or summons -- check the citation itself for that date.",
    },
    {
      question: "What happens if I don't respond by the hearing date?",
      answer:
        "Under San Antonio Code of Ordinances § 19-225(f), failure to appear at the hearing by the hearing date printed on your citation is treated as an admission of liability for the charged offense, and a written order finding you liable will be issued.",
    },
    {
      question: "Can I contest my citation online?",
      answer:
        "No. San Antonio's online portal (Search or Pay Your Citation) only lets you review and pay a citation or check case status -- it has no contest, dispute, or hearing-request function. You must contest by appearing in person at Municipal Court or by mailing a letter with your citation number and evidence to the Parking Hearings address before the hearing date.",
    },
    {
      question: "What happens if I lose at my hearing?",
      answer:
        "You may appeal to a municipal court judge by filing an appeal petition with the court clerk within 30 days of the hearing officer's order, along with a $5.00 filing fee (§ 19-225(i)). The appeal is decided on the record already presented, and filing an appeal doesn't stop enforcement or collection unless you post a bond (§ 19-225(j)).",
    },
    {
      question: "Does a San Antonio parking ticket go on my driving record?",
      answer:
        "No. Parking citations in San Antonio are civil offenses, not criminal ones, and payment does not appear on your state driving record.",
    },
  ],
  sources: [
    {
      label: "City of San Antonio -- Parking Tickets (Citations)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Parking-Tickets",
    },
    {
      label: "City of San Antonio -- Parking & Administrative Hearings (hub page)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings",
    },
    {
      label: "City of San Antonio -- Administrative Hearings (code-compliance/animal-care track, cited only to confirm it is distinct from the parking-ticket process)",
      url: "https://www.sa.gov/Directory/Departments/Court/Parking-Administrative-Hearings/Administrative-Hearings",
    },
    {
      label: "City of San Antonio Municipal Court -- Pay a Ticket or Citation",
      url: "https://www.sa.gov/Directory/Departments/Court/Pay",
    },
    {
      label: "City of San Antonio Municipal Court -- Frequently Asked Questions",
      url: "https://www.sa.gov/Directory/Departments/Court/Appearances-Procedures/FAQ",
    },
    {
      label: "San Antonio Municipal Court -- Search or Pay Your Citation (official online portal; payment and case-status only, no online contest function)",
      url: "https://6.municipal.cc/sanantoniocosatx/citationwebportal/",
    },
    {
      label: "San Antonio Code of Ordinances ch. 19, art. VI -- Stopping, Standing and Parking (Municode; read live in full via Playwright, VERSION: JUL 7, 2026 (CURRENT))",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA",
    },
    {
      label: "San Antonio Code of Ordinances § 19-225 -- Administrative adjudication of stopping, standing and parking violations (direct section URL, read live via Playwright)",
      url: "https://library.municode.com/tx/san_antonio/codes/code_of_ordinances?nodeId=PTIICO_CH19MOVETR_ARTVISTSTPA_DIV3PAME_S19-225ADADSTSTPAVI",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
