import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/houston.json (verifiedAt 2026-07-20).
// IMPORTANT: Houston parking citations are NOT a criminal-court matter. ParkHouston issues
// the citation; it is administratively adjudicated by Adjudication Hearing Officers through
// the Houston Municipal Courts Department's Parking Adjudication Office (Houston Code of
// Ordinances Ch. 16, Art. IV — the "administrative adjudication process for parking, standing
// or stopping of vehicle violations"), with any appeal decided by the Houston Municipal Court
// itself. The person charged has the right to an "instanter" hearing and pleads admit, admit
// with explanation, or deny — every defense statement below is a written DENY statement
// addressed to that adjudication process, not a criminal-court plea.

const houstonHowToContest: string[] = [
  "Locate your citation number and check the printed facts against your vehicle: license plate, vehicle description, violation code, date/time, and location.",
  "Pick a contest method within the applicable window: online through ParkHouston's official portal (houstonparking.t2hosted.com) only within 7 days of the citation's issuance; in person at the Parking Adjudication Office (1400 Lubbock St.) within 30 days of issuance; or, only if you reside outside Harris County (or can show a medical condition preventing an in-person appearance), by mailing/emailing your evidence within 30 days.",
  "Gather your evidence before you contest — payment receipts/app confirmations, photos, a disabled placard and ID, sale or title-transfer documents, etc. All testimony and evidence must be submitted at the time the hearing is entered; there is no later opportunity to add more.",
  "At the hearing, enter a plea of admit, admit with explanation, or deny the alleged infraction, and present your evidence. If you contest online, an online hearing is an official, binding hearing — you submit written statements and evidence rather than appearing in person.",
  "The Adjudication Hearing Officer reviews the citation and your evidence and, applying a preponderance-of-the-evidence standard, issues an order finding you liable or not liable and stating any fine, costs, or fees. Hearings are recorded (audio/video), and the record is kept until the appeal deadline passes.",
  "If you disagree with the decision, file a Notice of Appeal in person, no later than the 30th day after the Hearing Officer's order, with the Parking Management Cashier at Municipal Courts (1400 Lubbock St.). You must pay the fine plus a $15 administrative fee per citation as a bond to appeal; the Municipal Court decides the appeal on the existing hearing record only (no new evidence or oral argument, and you do not have to appear), and the bond/fees are refunded if you win.",
  "Separately, if you were not the vehicle's registered owner on the violation date (e.g., you had already sold it), you can rebut Houston's presumption that the registered owner is who parked illegally by mailing a notarized Declaration of Non-Ownership form with transfer documentation to Parking Management, P.O. Box 4997, Houston, TX 77002-1526 — this is a separate track from the standard citation hearing.",
];

const notMyVehicleHowToSubmit: string[] = [
  "Confirm you were not the registered owner of the vehicle bearing the ticketed plate on the date of the violation shown on your citation.",
  "Get the City of Houston Municipal Courts' Declaration of Non-Ownership form (available as a PDF from ParkHouston) and complete it.",
  "Have the completed declaration notarized — it must be a notarized declaration, not just a signed statement.",
  "Attach transfer documentation (a bill of sale or purchase/transfer agreement showing the date of transfer), the new owner's name, driver's license number, and address if known, and a completed Texas Motor Vehicle Transfer Notification to update TxDOT's records.",
  "Mail the notarized declaration and all attachments, along with the citation number(s) being disputed, to Parking Management, P.O. Box 4997, Houston, TX 77002-1526. This is a separate address and process from the standard citation hearing and from ParkHouston's general correspondence address.",
];

const ifThisDoesntWork =
  "If the Adjudication Hearing Officer finds you liable, you may file a Notice of Appeal in person, no later than the 30th day after the Hearing Officer's order, with the Parking Management Cashier at Municipal Courts (1400 Lubbock St., Houston, TX 77002). You must pay the fine plus a $15 administrative fee per citation as a bond to appeal. The Municipal Court then decides the appeal on the existing hearing record only — no new evidence or oral argument, and you do not have to appear — and the bond and fees are refunded if you win.";

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "houston",
  title: "Fight a paid-parking citation in Houston",
  metaDescription:
    "Free defense-statement letter for a paid-parking citation in Houston. Cites Houston Code §16-64(d) and ParkHouston's own APK-1 guidance — hearing-ready template.",
  whenItApplies:
    "You were cited for an expired-meter or no-payment violation (violation code APK-1, 'Parking meter expired') but you actually purchased or held a valid parking session for your license plate, at that location, at the ticketed time.",
  body: `To: ParkHouston — Houston Municipal Courts Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I enter a plea of DENY to this citation and respectfully request that the Adjudication Hearing Officer find me not liable at my hearing.

On [DATE], I held a valid, paid parking session for my vehicle, plate [PLATE], at [LOCATION], covering [TIME] — the moment this citation states my parking session was invalid or my meter showed expired. I paid through [PAYMENT METHOD — mobile parking app / meter], and my receipt shows a payment window of [PAYMENT START TIME] to [PAYMENT EXPIRATION TIME], which covers the time this citation was issued.

Under Houston Code of Ordinances §16-64(d), a parking citation "is a record kept in the ordinary course of business in the city and is rebuttable proof of the facts it contains" — it is not conclusive proof. Consistent with ParkHouston's own published description of violation code APK-1 ("Parking meter expired"), which is issued only when there is "not a valid parking session for the license plate in the system or the meter shows expired," the evidence attached below rebuts the citation's factual basis. I ask that this citation be found not liable and dismissed on that basis.

Attached: [payment receipt or in-app confirmation showing my license plate, the meter/zone location, and the paid time window; printed meter receipt, if one was issued; a copy of the citation for comparison].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Payment receipt or in-app confirmation (e.g., a ParkHouston-accepted parking app) showing your license plate, the meter/zone location, and the paid time window",
    "A printed meter receipt, if the meter issued one",
    "Comparison of the citation's issuance time against your payment's start/expiration time to show your session covered that moment",
    "The citation itself, to confirm the plate number and location match your payment",
  ],
  cityNotes:
    "ParkHouston's own description of violation code APK-1 defines the offense as there being 'not a valid parking session for the license plate in the system or the meter shows expired' — so proof you actually held a valid, paid session directly rebuts the citation's factual basis. Houston Code Sec. 16-64(d) reinforces this: a citation 'is a record kept in the ordinary course of business in the city and is rebuttable proof of the facts it contains,' and under Sec. 16-66(c) the hearing officer must find liability by a preponderance of the evidence. IMPORTANT CAVEAT: parking at a broken/nonfunctioning meter is NOT, on its own, a guaranteed or codified defense in Houston — ParkHouston's FAQ states you 'may legally park' at a nonfunctioning meter by paying through the mobile app instead, but also warns citations 'may still be issued' at a nonfunctioning meter per city ordinance. So the safe evidence to rely on is proof of actual payment (by app or at another meter), not the fact that a meter was broken.",
  codeCite: {
    label: "Houston Code of Ordinances Sec. 16-64(d) — citation is rebuttable proof of the facts it contains",
    citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-64(d)",
    url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
  },
  howToSubmit: houstonHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "ParkHouston — Frequently Asked Questions (nonfunctioning meter guidance)",
      url: "https://www.houstontx.gov/parking/faq.html",
    },
    {
      label: "ParkHouston — Parking Codes, Regulations and Fine Information (APK-1 'Parking meter expired' description)",
      url: "https://www.houstontx.gov/parking/Parking-Regulations-and-Violations.pdf",
    },
  ],
  faqs: [
    {
      question: "Is proof my meter was broken enough for this defense?",
      answer:
        "Not on its own. ParkHouston's FAQ says you may legally park at a nonfunctioning meter by paying through the mobile app instead, but also warns that citations may still be issued at a nonfunctioning meter under city ordinance. Rely on proof of actual payment — by app or at another meter — not just the fact that a meter was broken.",
    },
    {
      question: "What violation code is this?",
      answer:
        "APK-1, 'Parking meter expired,' which ParkHouston issues when there is not a valid parking session for the license plate in the system, or the meter shows expired.",
    },
    {
      question: "Does the citation count as proof against me at the hearing?",
      answer:
        "It's only rebuttable proof. Houston Code §16-64(d) makes a citation 'rebuttable proof of the facts it contains,' and the Adjudication Hearing Officer applies a preponderance-of-the-evidence standard under §16-66(c) — your payment evidence can outweigh it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "houston",
  title: "Fight a defective parking citation in Houston (wrong details)",
  metaDescription:
    "Free defense-statement letter for a Houston parking citation with incorrect details. Cites Houston Code §16-64(d) and §16-66 — hearing-ready template.",
  whenItApplies:
    "The citation itself contains information that doesn't match your vehicle or the actual facts — e.g., an incorrect license plate, vehicle description, violation code, date/time, or location.",
  body: `To: ParkHouston — Houston Municipal Courts Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I enter a plea of DENY to this citation and respectfully request that the Adjudication Hearing Officer find me not liable at my hearing.

This citation contains information that does not match my vehicle or the actual facts. Specifically, the [FIELD — e.g., license plate / vehicle description / violation code / date or time / location] printed on the citation is [DESCRIBE THE DISCREPANCY]. Comparing the citation against my vehicle registration/title, the correct information is: [CORRECT INFORMATION].

Under Houston Code of Ordinances §16-64(d), a citation is only "a record kept in the ordinary course of business in the city and is rebuttable proof of the facts it contains," and under §16-66(a) I am entitled to deny the alleged infraction and present evidence at my hearing. The discrepancy described above rebuts the citation's stated facts, and I ask the Adjudication Hearing Officer to weigh this evidence under the preponderance-of-the-evidence standard in §16-66(c) and find me not liable.

Attached: [a copy or photo of the actual citation showing the incorrect field(s); my vehicle registration or title; any evidence contradicting the citation's stated location, date, or time — e.g., photos, receipts, other timestamped records].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the incorrect field(s)",
    "Your vehicle registration/title, to compare the correct plate number and vehicle description against what's on the citation",
    "Any evidence contradicting the citation's stated location, date, or time (e.g., photos, receipts, other timestamped records)",
  ],
  cityNotes:
    "Houston does not publish a standalone list of 'defective ticket' grounds the way some other cities do. Instead, Houston Code Sec. 16-64(d) provides that the citation 'is a record kept in the ordinary course of business in the city and is rebuttable proof of the facts it contains,' and Sec. 16-66(a) lets the person charged 'admit, admit with explanation, or deny the alleged infraction' at the hearing. In practice, that means an inaccurate citation is contested by denying the infraction and presenting the discrepancy as evidence at the instanter hearing, which the Adjudication Hearing Officer weighs under the preponderance-of-the-evidence standard in Sec. 16-66(c) — there is no separate automatic-dismissal rule for a defective citation.",
  codeCite: {
    label: "Houston Code of Ordinances Sec. 16-64(d) — citation is rebuttable proof of the facts it contains",
    citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-64(d)",
    url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
  },
  howToSubmit: houstonHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of Houston Municipal Courts Department — Parking Citation Hearing Procedures",
      url: "https://www.houstontx.gov/parking/citationhearings-eng.pdf",
    },
  ],
  faqs: [
    {
      question: "Does Houston automatically dismiss a citation with wrong information?",
      answer:
        "No. Houston has no standalone automatic-dismissal rule for a defective citation the way some cities do. Instead, you deny the infraction and present the discrepancy as evidence at your hearing, and the Adjudication Hearing Officer weighs it under the preponderance-of-the-evidence standard in §16-66(c).",
    },
    {
      question: "What kinds of discrepancies are worth raising?",
      answer:
        "An incorrect license plate, vehicle description, violation code, date/time, or location printed on the citation — anything that doesn't match your vehicle or the actual facts.",
    },
    {
      question: "What if I don't point out the error?",
      answer:
        "Under §16-64(d), a citation is rebuttable proof of the facts it contains — meaning uncontested, it stands as proof against you. Raising the discrepancy at your hearing is what puts it in dispute.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "houston",
  title: "Fight a Houston parking citation for a vehicle you no longer own",
  metaDescription:
    "Free Declaration of Non-Ownership letter for a Houston parking citation on a vehicle you no longer owned. Cites Houston Code §26-2 — mail-ready template.",
  whenItApplies:
    "You were not the registered owner of the vehicle on the date(s) of the violation(s) — for example, you had already sold or otherwise transferred it — so Houston's presumption that the registered owner is the person who parked illegally does not apply to you.",
  body: `To: City of Houston Parking Management — Declaration of Non-Ownership
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this notarized Declaration of Non-Ownership and deny liability for this citation because I was not the registered owner of the vehicle bearing plate [PLATE] on [DATE], the date of the violation cited above.

I transferred ownership of this vehicle on [TRANSFER DATE], as shown by the attached bill of sale / purchase or transfer agreement. [IF KNOWN: The vehicle's new owner is [NEW OWNER NAME], driver's license number [DL NUMBER], address [NEW OWNER ADDRESS].] I have also completed a Texas Motor Vehicle Transfer Notification to update TxDOT's records.

Under Houston Code of Ordinances §26-2, "owner" means a person, other than a lienholder, having the property interest in or title to a vehicle. Because I did not hold that interest on the date of the violation, the City's presumption that the registered owner of record is the person who parked this vehicle illegally does not apply to me, and I ask that this citation be dismissed on that basis.

Attached: [the notarized Declaration of Non-Ownership form; a copy of the bill of sale or purchase/transfer agreement showing the date of transfer; the new owner's name, driver's license number, and address, if known; a completed Texas Motor Vehicle Transfer Notification; the citation number(s) being disputed].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "The notarized Declaration of Non-Ownership form",
    "A copy of the bill of sale or purchase/transfer agreement showing the date of transfer",
    "The new owner's name, driver's license number, and address, if known",
    "A completed Texas Motor Vehicle Transfer Notification (to update TxDOT's records)",
    "The citation number(s) being disputed",
  ],
  cityNotes:
    "Houston handles this as a dedicated, separate process rather than an argument made at the standard citation hearing. The City's own Declaration of Non-Ownership form states: 'Under the City of Houston Code of Ordinances, you, as the registered owner of the vehicle as of the date of the violation(s), are presumed to be the person who parked it illegally. If you did not own the vehicle on that date, complete the declaration below.' The completed, notarized declaration (with transfer documentation attached) must be mailed to Parking Management, P.O. Box 4997, Houston, TX 77002-1526 — a different address from ParkHouston's general correspondence address.",
  codeCite: {
    label:
      "Houston Code of Ordinances Sec. 26-2 — Definitions ('Owner' means a person, other than a lienholder, having the property interest in or title to a vehicle)",
    citation: "Houston, Tex., Code of Ordinances ch. 26, art. I, div. 1, § 26-2",
    url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH26PA_ARTIINGE_DIV1PA_S26-2DE",
  },
  howToSubmit: notMyVehicleHowToSubmit,
  ifThisDoesntWork,
  sources: [
    {
      label: "City of Houston Municipal Courts — Declaration of Non-Ownership form",
      url: "https://www.houstontx.gov/parking/declaration.pdf",
    },
    {
      label: "ParkHouston — Frequently Asked Questions ('I received a parking violation notice ... for a vehicle I no longer own')",
      url: "https://www.houstontx.gov/parking/faq.html",
    },
  ],
  faqs: [
    {
      question: "Do I contest this at the regular citation hearing?",
      answer:
        "No. Houston handles a no-longer-your-vehicle dispute through a separate, dedicated Declaration of Non-Ownership process, not the standard citation hearing.",
    },
    {
      question: "Does the declaration need to be notarized?",
      answer:
        "Yes. The City's Declaration of Non-Ownership form must be completed, notarized, and mailed with transfer documentation attached — a signed but unnotarized statement is not the same document.",
    },
    {
      question: "Where do I send it?",
      answer:
        "Parking Management, P.O. Box 4997, Houston, TX 77002-1526 — a different address from ParkHouston's general correspondence address (2500 Fannin Street).",
    },
    {
      question: "What if I don't know who bought the vehicle?",
      answer:
        "Provide what you have — the new owner's name, driver's license number, and address if known — along with your bill of sale or transfer agreement, a completed Texas Motor Vehicle Transfer Notification, and the citation number(s) being disputed.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_placard_not_displayed: ParkingDefense = {
  slug: "disabled-placard-not-displayed",
  citySlug: "houston",
  title: "Fight an undisplayed disabled-placard citation in Houston",
  metaDescription:
    "Free defense-statement letter for an undisplayed disabled-placard citation in Houston. Cites ParkHouston's own FAQ guidance and Code §26-88 — hearing-ready template.",
  whenItApplies:
    "You hold a valid disabled parking placard or plate but simply forgot to hang or display it at the time you were cited for parking in a handicapped zone (violation code APK-21).",
  body: `To: ParkHouston — Houston Municipal Courts Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I enter a plea of DENY to this citation and respectfully request that the Adjudication Hearing Officer find me not liable at my hearing.

On [DATE], my vehicle, plate [PLATE], was parked at [LOCATION] in a space reserved for persons with disabilities. I hold a valid disabled parking placard, number [PLACARD NUMBER], issued to [PLACARD HOLDER NAME], but I simply did not have the placard hanging or displayed at the time this citation was issued.

Consistent with ParkHouston's own published FAQ guidance — which states that within 30 days of the citation issue date, a citation for parking in a handicapped zone may be contested by providing a copy of a valid disabled parking placard and matching ID — I ask that this citation, issued for parking in a space governed by the accessible-parking requirements of Houston Code of Ordinances §26-88, be dismissed on that basis.

Attached: [a copy of my valid disabled parking placard (front and back) or disabled-plate registration; my driver's license or ID matching the placard holder; a copy of the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of your valid disabled parking placard (front and back) or your disabled-plate registration",
    "Your driver's license or ID matching the placard holder",
    "The citation number",
  ],
  cityNotes:
    "This is a specific, Houston-published allowance beyond the canonical defense list: ParkHouston's FAQ states that within 30 days of the citation issue date, you can contest online or in person and provide a copy of a valid disabled parking placard and ID; residents outside Harris County may instead mail or email their testimony and evidence. This is worth pursuing because APK-21 (handicapped-zone parking without a valid placard/plate) carries ParkHouston's highest published fine — $500, rising to $600 if unpaid after 30 days. The underlying ordinance (Sec. 26-88) does not itself spell out a 'forgot to display' procedure; that specific after-the-fact allowance comes from ParkHouston's own FAQ guidance, not a distinct code section.",
  codeCite: {
    label: "Houston Code of Ordinances Sec. 26-88 — Parking areas for persons with disabilities",
    citation: "Houston, Tex., Code of Ordinances ch. 26, art. II, § 26-88",
    url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH26PA_ARTIISTSTPAOPVE",
  },
  howToSubmit: houstonHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "ParkHouston — Frequently Asked Questions ('I forgot to hang my disabled parking placard...')",
      url: "https://www.houstontx.gov/parking/faq.html",
    },
    {
      label: "ParkHouston — Parking Codes, Regulations and Fine Information (APK-21 'Parked in a handicapped zone')",
      url: "https://www.houstontx.gov/parking/Parking-Regulations-and-Violations.pdf",
    },
  ],
  faqs: [
    {
      question: "Does this defense apply to any citation, or just handicapped-zone ones?",
      answer:
        "It's specific to violation code APK-21, parking in a handicapped zone without a valid placard or plate displayed.",
    },
    {
      question: "Why does this defense matter so much in Houston?",
      answer:
        "APK-21 carries ParkHouston's highest published fine — $500, rising to $600 if unpaid after 30 days — and just one delinquent APK-21 citation makes your vehicle boot-eligible, unlike other violations which require three or more.",
    },
    {
      question: "Is this written into the actual ordinance?",
      answer:
        "No. Houston Code §26-88 governs accessible parking areas but doesn't itself spell out a 'forgot to display' procedure. That specific after-the-fact allowance comes from ParkHouston's own FAQ guidance, not a distinct code section.",
    },
    {
      question: "What if I live outside Harris County?",
      answer:
        "ParkHouston's FAQ states that residents outside Harris County may mail or email their testimony and evidence instead of contesting online or in person.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const houstonCity: ParkingCity = {
  slug: "houston",
  city: "Houston",
  state: "TX",
  agency:
    "City of Houston ParkHouston (Department of Administration & Regulatory Affairs) issues parking citations; they are administratively adjudicated by Adjudication Hearing Officers through the Houston Municipal Courts Department's Parking Adjudication Office, with any appeal decided by the Houston Municipal Court itself. This is a codified administrative-adjudication process (not a criminal trial): Houston Code of Ordinances Ch. 16, Art. IV expressly calls it the 'administrative adjudication process for parking, standing or stopping of vehicle violations,' and gives the person charged the right to an 'instanter' hearing.",
  submitOnlineUrl: "https://houstonparking.t2hosted.com/app/index.aspx",
  submitMailAddress: "ParkHouston, 2500 Fannin Street, Houston, TX 77002",
  submitInPerson:
    "Parking Adjudication Office, Houston Municipal Courts, 1400 Lubbock St., Houston, TX 77002. Hours: Monday-Friday 8:30 a.m.-10:00 p.m., Saturday 8:00 a.m.-5:00 p.m. (closed 12:00-1:00 p.m. for lunch on Saturdays). You or your attorney may appear in person; no appointment is required.",
  howToContest: houstonHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "You have 30 days from the date a citation is issued to exercise your right to a hearing, whether in person or (if eligible) by mail: Houston Code of Ordinances Sec. 16-64(c) gives the person charged the right to an 'instanter' hearing 'exercised by appearing in person before an adjudication hearing officer within 30 days from the date of issuance of the citation.' The 30-day window for hearings by mail is not itself spelled out in Sec. 16-64(c) — it comes from the Houston Municipal Courts Department's official 'Parking Citation Hearing Procedures' guidance, which states hearings by mail 'shall be mailed within (30) days of the issuance of the citation' and are available only if the citizen resides outside Harris County, TX (with an exception for a documented medical condition preventing an in-person appearance). ParkHouston's own pages state the in-person rule plainly too: 'You have 30 days from the date the citation was issued to contest your citation.' CONTESTING ONLINE HAS A MUCH SHORTER WINDOW: current ParkHouston guidance states 'You may contest your citation online if it is within seven (7) days from citation issuance' (if the citation prefix is P or V and not yet in the system, that 7-day window runs from when the citation is entered into the system instead). Sec. 16-66(e): failure to appear before an adjudication hearing officer within 30 days of issuance 'shall be considered an admission of liability for the charged offense and a default notice shall be issued on that basis' (the Hearing Procedures guidance restates this as failure to 'contest or pay' within 30 days). NOTE: an unadopted 2023 draft revision to Sec. 16-64.1 (marked 'Draft for Discussion Purposes Only, Not Yet Approved by City Attorney') proposed extending the online-contest window from 7 to 30 days, matching the in-person/mail deadline — but ParkHouston's live pages as of this record's verification date still state the online window is 7 days, so 7 days is treated as the current operative online deadline pending confirmation the revision was adopted.",
  penaltyNote:
    "If you neither pay nor request a hearing within 30 days of issuance, the citation is deemed an admission of liability (Sec. 16-66(e)) and becomes delinquent — a delinquent fee is added, and if it remains unpaid after 90 days, an additional 30 percent collection fee is added. A vehicle becomes boot-eligible once it has three or more delinquent citations, or just one delinquent citation for parking in a handicapped zone (violation code APK-21, which itself carries the highest fine in ParkHouston's schedule: $500, rising to $600 if unpaid after 30 days). Fighting an unfavorable hearing decision by appeal to Municipal Court requires paying the fine in full plus a $15 administrative fee per citation as a bond before the appeal is heard (refunded only if the appeal succeeds), and no new evidence or testimony is allowed at that stage.",
  municipalCodeRefs: [
    {
      label: "Houston Code of Ordinances Sec. 16-64 — Parking citations (administrative adjudication process; instanter hearing right; 30-day deadline)",
      citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-64",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
    },
    {
      label: "Houston Code of Ordinances Sec. 16-64.1 — Online adjudication",
      citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-64.1",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
    },
    {
      label: "Houston Code of Ordinances Sec. 16-66 — Hearings (admit/admit-with-explanation/deny plea; preponderance-of-the-evidence standard; hearing officer's order)",
      citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-66",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
    },
    {
      label: "Houston Code of Ordinances Sec. 16-67 — Appeal (Municipal Court reviews under the substantial-evidence rule; no new evidence)",
      citation: "Houston, Tex., Code of Ordinances ch. 16, art. IV, § 16-67",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
    },
    {
      label: "Houston Code of Ordinances Sec. 26-2 — Definitions (Chapter 26, Parking), including 'Owner,' 'Parking citation,' and 'Meter or pay station'",
      citation: "Houston, Tex., Code of Ordinances ch. 26, art. I, div. 1, § 26-2",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH26PA_ARTIINGE_DIV1PA_S26-2DE",
    },
    {
      label: "Houston Code of Ordinances Sec. 26-88 — Parking areas for persons with disabilities",
      citation: "Houston, Tex., Code of Ordinances ch. 26, art. II, § 26-88",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH26PA_ARTIISTSTPAOPVE",
    },
  ],
  recognizedDefenses: ["valid-payment", "wrong-ticket-details", "not-my-vehicle", "disabled-placard-not-displayed"],
  defenses: [valid_payment, wrong_ticket_details, not_my_vehicle, disabled_placard_not_displayed],
  faqs: [
    {
      question: "How long do I have to contest a Houston parking citation?",
      answer:
        "30 days from the date of issuance to request a hearing in person, or by mail if you're eligible (you live outside Harris County, or have a documented medical condition preventing an in-person appearance). Contesting online has a much shorter window — only 7 days from issuance.",
    },
    {
      question: "What happens if I do nothing within 30 days?",
      answer:
        "Under Houston Code §16-66(e), failure to appear or contest within 30 days is considered an admission of liability, and a default notice is issued. The citation becomes delinquent, and if it remains unpaid after 90 days, an additional 30 percent collection fee is added.",
    },
    {
      question: "Can my vehicle be booted over unpaid citations?",
      answer:
        "Yes. A vehicle becomes boot-eligible once it has three or more delinquent citations — or just one delinquent citation for parking in a handicapped zone (APK-21), which also carries ParkHouston's highest fine: $500, rising to $600 if unpaid after 30 days.",
    },
    {
      question: "What if I lose my hearing?",
      answer:
        "You may file a Notice of Appeal in person within 30 days of the Hearing Officer's order, paying the fine plus a $15 administrative fee per citation as a bond. The Municipal Court decides the appeal on the existing hearing record only — no new evidence or testimony — and the bond is refunded if you win.",
    },
    {
      question: "Is this a criminal court proceeding?",
      answer:
        "No. Houston Code of Ordinances Ch. 16, Art. IV expressly establishes this as a codified administrative-adjudication process for parking, standing, or stopping violations, not a criminal trial. You have the right to an 'instanter' hearing and plead admit, admit with explanation, or deny.",
    },
  ],
  sources: [
    { label: "ParkHouston — Resolve a Citation", url: "https://www.houstontx.gov/parking/resolve.html" },
    { label: "ParkHouston — Frequently Asked Questions", url: "https://www.houstontx.gov/parking/faq.html" },
    {
      label: "City of Houston Municipal Courts Department — Parking Citation Hearing Procedures (PDF)",
      url: "https://www.houstontx.gov/parking/citationhearings-eng.pdf",
    },
    {
      label: "City of Houston Municipal Courts Department — Parking Citations",
      url: "https://www.houstontx.gov/courts/parking_citations.html",
    },
    { label: "ParkHouston — Parking Permits / Citations", url: "https://www.houstontx.gov/parking/citations.html" },
    {
      label: "ParkHouston — Parking Codes, Regulations and Fine Information (PDF)",
      url: "https://www.houstontx.gov/parking/Parking-Regulations-and-Violations.pdf",
    },
    {
      label: "City of Houston Municipal Courts — Declaration of Non-Ownership form (PDF)",
      url: "https://www.houstontx.gov/parking/declaration.pdf",
    },
    {
      label: "ParkHouston online citation contest/payment portal (T2 Systems)",
      url: "https://houstonparking.t2hosted.com/app/index.aspx",
    },
    {
      label: "Houston Code of Ordinances, Chapter 16 — Municipal Courts, Article IV: Adjudication of Parking Citations (Municode)",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH16MUCO_ARTIVADPACI",
    },
    {
      label: "Houston Code of Ordinances, Chapter 26 — Parking (Municode)",
      url: "https://library.municode.com/tx/houston/codes/code_of_ordinances?nodeId=COOR_CH26PA",
    },
    {
      label: "City of Houston — Chapter 26 Parking, proposed revisions (04/27/2023 draft, not yet approved by City Attorney — used only to cross-verify current, unmodified section text such as Secs. 16-64, 16-66, 16-67, 26-2, 26-88)",
      url: "https://www.houstontx.gov/parking/pdf/Chapter-26-Revisions-20230427.pdf",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
