import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/dallas.json (verifiedAt 2026-07-20).
// IMPORTANT: Dallas parking citations under Chapter 28 (and related Chapter 32 and
// Sec. 51A-4.301(d)(5) provisions) are CIVIL offenses, not crimes (Dallas City Code Sec. 28-129),
// administratively adjudicated by hearing officers appointed by the city manager (Sec. 28-130.1)
// through the Dallas Municipal Court's Court and Detention Services Adjudication Office (the
// "Parking Adjudication Office") -- this is NOT a not-guilty-plea criminal trial. The citation
// itself already states the hearing's date/time/location (set within 15 calendar days of
// issuance), and the person charged answers by admitting, denying liability, admitting with
// explanation, requesting mail adjudication, or requesting one free reset. Every defense
// statement below is a written DENIAL-OF-LIABILITY statement for that administrative hearing,
// not a criminal-court plea. NARROW CARVE-OUT: a violation of Sec. 28-121.2 (disabled parking
// spaces) is excluded from this civil track by Sec. 28-129 and remains an ordinary criminal
// offense handled through Dallas Municipal Court's general traffic-ticket process -- no
// disabled-parking defense is included in this file because the record excludes it from the
// administrative-adjudication track these defenses address.

const dallasHowToContest: string[] = [
  "Read the citation carefully: Dallas parking citations already state your administrative adjudication hearing's date, time, and location -- by law that hearing must be set not later than 15 calendar days after the citation was issued (Sec. 28-130.2(b)(4)). There is no separate step of 'requesting' a hearing date; one is already on the ticket.",
  "Decide how you will 'answer' the citation before that date. Sec. 28-130.5(a) gives five options: (1) admit liability and pay the civil fine; (2) deny liability before a hearing officer, either at an instanter (walk-in) hearing any business day before the scheduled date, or at the scheduled hearing itself; (3) admit liability with an explanation at either of those hearings; (4) request permission from a hearing officer to adjudicate by mail; or (5) request to reset the scheduled hearing to a later date (allowed only once for free -- resetting again requires paying an amount equal to the fine as security, which is refunded if you are later found not liable).",
  "If you request adjudication by mail for good cause (e.g., you cannot appear in person), submit your written statement and documentary evidence (letters, affidavits, photographs, etc.); the mail adjudication must be completed within 90 calendar days of the citation date (Sec. 28-130.6).",
  "At an instanter or scheduled hearing, present your evidence. The parking citation itself is only prima facie (rebuttable) proof of the facts it states -- the issuing officer does not have to be present unless requested -- and the hearing officer decides based on a preponderance of the evidence, not the formal rules of evidence (Sec. 28-130.7(b)-(c)).",
  "The hearing officer rules immediately at the end of the hearing: either liable (with civil fine, penalties, and costs assessed, and notice of your right to appeal) or not liable (Sec. 28-130.7(d)).",
  "If you do not answer within 15 calendar days of issuance, or do not appear at a hearing you were required to attend, that is treated as an automatic admission of liability, and fines/penalties/costs are assessed against you without a hearing (Sec. 28-130.8(a)).",
  "If you are found liable and disagree, you may appeal to Dallas Municipal Court by filing a petition with the municipal court clerk, along with a $15 filing fee (refunded if you win), within 30 calendar days after the hearing officer's order is filed. The appeal is a trial de novo -- a fresh civil case, which you may request be heard by a jury -- and the municipal court's decision is final (Sec. 28-130.12).",
];

const ifThisDoesntWork =
  "If the Hearing Officer finds you liable and you disagree, you may appeal to Dallas Municipal Court by filing a petition with the municipal court clerk, along with a $15 filing fee (refunded if you win), within 30 calendar days after the Hearing Officer's order is filed. The appeal is a trial de novo -- a fresh civil case, which you may request be heard by a jury -- and the Municipal Court's decision is final (Dallas City Code Sec. 28-130.12).";

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "dallas",
  title: "Fight a paid-parking citation in Dallas",
  metaDescription:
    "Free defense-statement letter for a paid-parking citation in Dallas. Cites Dallas City Code §28-108(b) — hearing-ready template for your administrative adjudication.",
  whenItApplies:
    "You were cited under Sec. 28-107 for an expired paid-parking payment device (meter), or under Sec. 28-108 for a device displaying a 'violation signal,' but you actually paid for that parking session by telephone or the Internet (e.g., a City-accepted parking-payment app) and the parking time you purchased had not yet expired at the time of the citation.",
  body: `To: City of Dallas Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny liability for this citation and respectfully request that the Hearing Officer find me not liable at my administrative adjudication hearing.

On [DATE], I paid for my parking session at [LOCATION] by [PAYMENT METHOD — telephone / Internet-based parking payment app] for my vehicle, plate [PLATE]. My payment's confirmed time window was [PAYMENT START TIME] to [PAYMENT EXPIRATION TIME], which had not yet expired at [TIME], the moment this citation states the payment device was showing expired or displaying a violation signal.

Dallas City Code Sec. 28-108(b) provides that "It is a defense to prosecution under Subsection (a) that the person paid for the paid parking space using a telephone or the Internet and the parking time purchased by the payment transaction had not expired" — even where the physical payment device itself showed a violation signal at the time of citation, because Sec. 28-104(b) does not require time purchased by telephone or the Internet to display on the device. I ask that this citation be found not liable on that basis.

Attached: [electronic receipt or app/text confirmation from my telephone or Internet payment transaction, showing my license plate, the location or zone, and the paid time window; a copy of the citation, to confirm the plate number and location match my payment].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "The electronic receipt or app/text confirmation from your telephone or Internet payment transaction, showing your license plate, the location or zone, and the paid time window",
    "A comparison of the citation's date and time against your payment's paid-through/expiration time, showing your session covered the moment cited",
    "The citation itself, to confirm the plate number and location match your payment",
  ],
  cityNotes:
    "Dallas Sec. 28-104(b) specifically provides that parking time bought by telephone or the Internet is not required to display on the physical payment device -- you instead get an electronic receipt or confirmation, and an officer or hearing officer can also look up phone/Internet payments on a handheld device. Because of that gap between what a device displays and what you actually paid for, Sec. 28-108(b) codifies an explicit defense: 'It is a defense to prosecution under Subsection (a) that the person paid for the paid parking space using a telephone or the Internet and the parking time purchased by the payment transaction had not expired' -- even if the device itself was showing an expired/violation signal at the moment of the citation.",
  codeCite: {
    label: "Dallas City Code Sec. 28-108(b) -- defense to a 'violation signal' citation for parking time paid by telephone or the Internet that had not yet expired",
    citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 4, § 28-108(b)",
    url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147542#JD_28-108",
  },
  howToSubmit: dallasHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Dallas City Code ch. 28, art. XI, div. 4 -- Paid Parking Payment Devices (Secs. 28-103 to 28-114.13)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147531#JD_28-104",
    },
    {
      label: "City of Dallas -- Parking Tickets (Department of Transportation and Public Works)",
      url: "https://dallascityhall.com/departments/transportation/Pages/parking-tickets.aspx",
    },
  ],
  faqs: [
    {
      question: "What if the meter showed a violation signal at the time?",
      answer:
        "That doesn't defeat this defense. Dallas Code §28-104(b) says parking time bought by phone or the Internet doesn't have to display on the physical device — you get an electronic receipt instead, and §28-108(b) makes it a defense that your purchased time had not expired even if the device showed a violation signal.",
    },
    {
      question: "What counts as proof of payment?",
      answer:
        "Your electronic receipt or app/text confirmation showing your license plate, the location or zone, and the paid time window. A hearing officer can also look up phone/Internet payments directly.",
    },
    {
      question: "Is the citation itself proof against me?",
      answer:
        "It's only prima facie (rebuttable) evidence under Sec. 28-130.2(c) — the Hearing Officer decides by a preponderance of the evidence under Sec. 28-130.7(c), so your payment records can outweigh it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "dallas",
  title: "Fight a defective parking citation in Dallas (wrong details)",
  metaDescription:
    "Free defense-statement letter for a Dallas parking citation with incorrect details. Cites Dallas City Code §28-130.2(b)-(c) — hearing-ready template.",
  whenItApplies:
    "The parking citation itself is missing, illegible, or wrong on a required field -- for example the violation's date, time, or location, the meter number, the vehicle's state license plate number (or VIN/brake-inspection-tag number if the plate wasn't legible), or the vehicle's make.",
  body: `To: City of Dallas Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny liability for this citation and respectfully request that the Hearing Officer find me not liable at my administrative adjudication hearing.

This citation is missing, illegible, or incorrect on a required field. Specifically, the [FIELD — e.g., violation date / time / location / meter number / license plate number / VIN or brake-inspection-tag number / vehicle make] printed on the citation is [DESCRIBE THE DISCREPANCY]. Comparing the citation against my vehicle registration/title, the correct information is: [CORRECT INFORMATION].

Dallas City Code Sec. 28-130.2(b) requires a parking citation to include the field(s) at issue above, and Sec. 28-130.2(c) makes the citation only "prima facie evidence of the facts contained in the parking citation" — rebuttable, not conclusive. Consistent with the City of Dallas Court and Detention Services' own published guidance for contesting a citation, and under the preponderance-of-the-evidence standard the Hearing Officer applies under Sec. 28-130.7(c), the discrepancy described above rebuts the citation's stated facts, and I ask that this citation be found not liable on that basis.

Attached: [a copy or photo of the actual citation showing the missing, illegible, or incorrect field(s); my vehicle registration or title, to compare the correct plate number, VIN, and make against what's on the citation; any evidence contradicting the citation's stated date, time, or location, such as photos, receipts, or other timestamped records].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the missing, illegible, or incorrect field(s)",
    "Your vehicle registration or title, to compare the correct plate number, VIN, and make against what's on the citation",
    "Any evidence contradicting the citation's stated date, time, or location (photos, receipts, other timestamped records)",
  ],
  cityNotes:
    "Dallas does not publish a standalone 'defective ticket = automatic dismissal' rule the way New York does. Instead, Sec. 28-130.2(b) requires a parking citation to include specific fields (violation nature/date/time/location and meter number if applicable; the plate, or VIN/brake-tag number if the plate wasn't legible; and the vehicle's make), and Sec. 28-130.2(c) makes the citation only 'prima facie evidence of the facts contained in the parking citation' -- i.e., rebuttable, not conclusive. In practice, an inaccurate or incomplete citation is contested by denying liability at an instanter or scheduled hearing and presenting the discrepancy as evidence, which the hearing officer weighs under the preponderance-of-the-evidence standard in Sec. 28-130.7(c).",
  codeCite: {
    label: "Dallas City Code Sec. 28-130.2(b)-(c) -- required citation fields; citation is prima facie (rebuttable) evidence",
    citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.2(b)-(c)",
    url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147843#JD_28-130.2",
  },
  howToSubmit: dallasHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Dallas City Code ch. 28, art. XI, div. 7 -- Administrative Adjudication of Parking Violations (Secs. 28-129 to 28-130.13)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147828#JD_Ch.28Art.XIDiv.7",
    },
    {
      label: "City of Dallas Court and Detention Services -- Contest Your Ticket",
      url: "https://dallascityhall.com/departments/courtdetentionservices/Pages/Contest-Your-Ticket.aspx",
    },
  ],
  faqs: [
    {
      question: "Does Dallas automatically dismiss a citation with wrong information?",
      answer:
        "No. Dallas has no standalone automatic-dismissal rule for a defective citation. Instead, you deny liability and present the discrepancy as evidence at your hearing, and the Hearing Officer weighs it under the preponderance-of-the-evidence standard in §28-130.7(c).",
    },
    {
      question: "What fields are required on a Dallas parking citation?",
      answer:
        "Under §28-130.2(b): the violation's nature, date, time, and location; the meter number if applicable; the vehicle's plate (or VIN/brake-inspection-tag number if the plate wasn't legible); and the vehicle's make.",
    },
    {
      question: "Is the citation proof against me if I don't point out the error?",
      answer:
        "Under §28-130.2(c), a citation is only prima facie (rebuttable) evidence of the facts it contains — meaning uncontested, it stands as proof against you. Raising the discrepancy at your hearing is what puts it in dispute.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "dallas",
  title: "Fight a Dallas parking citation for a stolen or unauthorized vehicle",
  metaDescription:
    "Free defense-statement letter for a Dallas citation on a stolen or unauthorized-use vehicle. Cites Dallas City Code §28-130.4(d) — hearing-ready template.",
  whenItApplies:
    "You were not the person who stopped, stood, or parked the vehicle at the time and place of the violation -- because the vehicle had already been reported stolen and had not been recovered, because someone else was operating it without your consent, or (for rental/leasing companies) because you can identify who was actually renting the vehicle at the time.",
  body: `To: City of Dallas Parking Adjudication Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I deny liability for this citation and respectfully request that the Hearing Officer find me not liable at my administrative adjudication hearing.

[SELECT THE GROUND THAT APPLIES —

Stolen vehicle: At the time of this citation, my vehicle, plate [PLATE], had been reported to [POLICE DEPARTMENT] as stolen on [THEFT REPORT DATE], before the date of this violation, and had not yet been recovered as of [DATE]. Dallas City Code Sec. 28-130.4(d) provides that "It is a defense to any charge of a parking violation that, at the time of the violation, the illegally parked vehicle was reported to a police department as having been stolen prior to the time of the violation and had not yet been recovered."

Unauthorized use: At the time of this citation, my vehicle was being operated by [OPERATOR NAME] without my express or implied consent. Dallas City Code Sec. 28-130.4(a) shifts sole liability to the operator, off the registered owner, where the owner proves the vehicle was operated without the owner's express or implied consent.

Rental or leasing business: I am a vehicle rental or leasing business, and within 30 days of receiving written notice of this violation I am identifying the renter in possession of the vehicle at the time of the citation — [RENTER NAME], driver's license number [DL NUMBER], state of issuance [STATE] — or attaching a true copy of the rental/lease agreement in effect at that time. Dallas City Code Sec. 28-130.4(b) exempts a rental/leasing business from liability on that basis.]

I ask that this citation be found not liable on that basis, notwithstanding the presumption in Dallas City Code Sec. 28-130.4(e) that the registered owner of record is the person who parked the vehicle illegally.

Attached: [police report showing the vehicle was reported stolen before the violation date and had not been recovered as of the citation; or a police report or affidavit proving unauthorized use; or a renter-identification affidavit or true copy of the lease/rental agreement in effect at the time of the citation; and vehicle registration or TxDOT record confirming the ownership details in dispute].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Stolen vehicle: a police report showing the vehicle was reported stolen before the violation date and had not yet been recovered as of the citation",
    "Unauthorized use: proof someone else used or operated the vehicle without your express or implied consent (e.g., a police report or affidavit)",
    "Rental/leasing companies: an affidavit with the renter's true name, address, driver's license number and state of issuance, or a true copy of the lease/rental agreement in effect when the citation was issued, submitted within 30 days after receiving written notice of the violation",
    "Vehicle registration/TxDOT record confirming the ownership details you're disputing",
  ],
  cityNotes:
    "Dallas presumes the registered owner of a vehicle is the person who parked it illegally, provable by a computer-generated TxDOT registration record (Sec. 28-130.4(e)). Sec. 28-130.4(d) codifies an explicit defense: 'It is a defense to any charge of a parking violation that, at the time of the violation, the illegally parked vehicle was reported to a police department as having been stolen prior to the time of the violation and had not yet been recovered.' Separately, Sec. 28-130.4(a) shifts sole liability to the operator (off the owner) if the owner can prove the vehicle was operated without the owner's express or implied consent, and Sec. 28-130.4(b) exempts a vehicle-rental/leasing business from liability if, within 30 days of written notice of the violation, it supplies the renter's identifying information or a copy of the rental agreement in effect at the time of the citation.",
  codeCite: {
    label: "Dallas City Code Sec. 28-130.4(d) -- defense that the vehicle was reported stolen before the violation and not yet recovered",
    citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.4(d)",
    url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147859#JD_28-130.4",
  },
  howToSubmit: dallasHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Dallas City Code ch. 28, art. XI, div. 7 -- Administrative Adjudication of Parking Violations (Secs. 28-129 to 28-130.13)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147828#JD_Ch.28Art.XIDiv.7",
    },
    {
      label: "City of Dallas Court and Detention Services -- Parking Violations",
      url: "https://dallascityhall.com/departments/courtdetentionservices/Pages/Parking-Violations.aspx",
    },
  ],
  faqs: [
    {
      question: "Does Dallas presume I parked the vehicle just because I own it?",
      answer:
        "Yes. Sec. 28-130.4(e) presumes the registered owner of record is the person who parked the vehicle illegally, provable by a computer-generated TxDOT registration record. This defense rebuts that presumption on one of three grounds: stolen vehicle, unauthorized use, or a rental/leasing agreement.",
    },
    {
      question: "What if my vehicle was stolen?",
      answer:
        "Sec. 28-130.4(d) makes it a defense that the vehicle was reported to a police department as stolen before the violation and had not yet been recovered — attach your police report.",
    },
    {
      question: "What if someone else was driving without my permission?",
      answer:
        "Sec. 28-130.4(a) shifts sole liability to the operator, off the owner, if you can prove the vehicle was operated without your express or implied consent.",
    },
    {
      question: "I run a rental/leasing company — how do I respond?",
      answer:
        "Sec. 28-130.4(b) exempts a rental/leasing business from liability if, within 30 days of receiving written notice of the violation, it supplies the renter's identifying information (name, address, driver's license number and state) or a copy of the rental agreement in effect at the time of the citation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const dallasCity: ParkingCity = {
  slug: "dallas",
  city: "Dallas",
  state: "TX",
  agency:
    "City of Dallas Department of Transportation and Public Works issues parking citations and enforces/collects fines (Dallas City Code Sec. 28-130(b)). Most parking violations under Chapter 28 (and related Chapter 32 and Sec. 51A-4.301(d)(5) provisions) are CIVIL offenses, not crimes (Sec. 28-129), administratively adjudicated by hearing officers appointed by the city manager (Sec. 28-130.1) through the Dallas Municipal Court's Court and Detention Services Adjudication Office (also called the Parking Adjudication Office) -- this is NOT a not-guilty-plea criminal trial. An adverse hearing-officer decision may be appealed to Dallas Municipal Court itself for a trial de novo (Sec. 28-130.12). NOTE ON SCOPE: one narrow, explicit exception -- a violation of Sec. 28-121.2 (disabled parking spaces) is excluded from this civil-offense track by Sec. 28-129 and instead remains an ordinary criminal offense handled through Dallas Municipal Court's general traffic-ticket/not-guilty-plea process, not the administrative adjudication process described in this record.",
  submitOnlineUrl: "https://prdwmq.etimspayments.com/pbw/include/dallas/dispute_request.jsp",
  submitMailAddress: "City of Dallas, Parking Adjudication Office, 2014 Main Street, Dallas, TX 75201-4406",
  submitInPerson:
    "Dallas Municipal Court / Parking Adjudication Office, 2014 Main Street, Dallas, TX 75201 (Municipal Court main line (214) 671-9901; Adjudication Department (214) 670-4830). A person charged has the right to an 'instanter' (walk-in, same-day) hearing at the Adjudication Office on any business day before the scheduled administrative adjudication hearing date printed on the citation (Sec. 28-130.2(b)(5)), or may appear at the scheduled hearing date/time/location the citation itself states.",
  howToContest: dallasHowToContest,
  contestDeadlineDays: 15,
  contestDeadlineNote:
    "Dallas City Code Sec. 28-130.8(a): the failure of a person charged with a parking violation 'to answer to the charge within 15 calendar days after the date of issuance of the parking citation or to appear at any hearing, including a hearing on appeal, when required to appear is an admission of liability for the parking violation.' Sec. 28-130.9(c)(1) separately imposes an additional civil penalty (equal to the original fine) if a person 'fails to answer to a parking violation charge within 15 calendar days after the date of issuance of the parking citation or fails to appear at any hearing scheduled after 15 calendar days from the date of the parking citation.' Consistently, Sec. 28-130.2(b)(4) requires the citation itself to already state the date/time/location of the administrative adjudication hearing, 'to be set not later than 15 calendar days after the date of issuance of the parking citation' -- Dallas pre-schedules your hearing on the ticket rather than making you separately request one, though you may also appear at a walk-in 'instanter' hearing any business day before that scheduled date (Sec. 28-130.2(b)(5)). NOTE: some secondary/non-official sources describe this window as '15 working days'; the ordinance text itself specifies calendar days, not business/working days, in both places the figure appears (Sec. 28-130.8(a) and Sec. 28-130.9(c)(1)).",
  penaltyNote:
    "An additional civil penalty equal to the original fine is assessed if you fail to answer within 15 calendar days of issuance, or fail to appear at a hearing scheduled after that point (Sec. 28-130.9(c)). A further $30 penalty is added if fines, fees, penalties, and costs remain unpaid 31 calendar days after that additional penalty is assessed (Sec. 28-130.9(d)) -- though a hearing officer or municipal court on appeal can waive a Subsection (c)/(d) penalty (never the underlying fine itself) if, through no fault of the owner/operator, no notice of the violation or hearing officer's order was received, payment wasn't posted in time, the penalty was assessed in error, or the vehicle was stopped in response to a medical emergency (Sec. 28-130.9(e)). Every liability finding also carries a $5 court cost (Sec. 28-130.9(f), citing Tex. Code Crim. Proc. art. 102.014), and the base fine doubles for a second conviction of the same offense within 24 months and trebles for a third or later conviction within 24 months (Sec. 28-130.9(g)). Once a registered owner has three or more unresolved parking violations within a calendar year, the city may boot or impound the vehicle wherever it is found on public property, deny a parking permit, or refuse vehicle registration renewal (Sec. 28-130.10). The owner of a booted/impounded vehicle may request a prompt immobilization/impoundment hearing in writing within 3 calendar days of the boot or tow (Sec. 28-130.11(b)), but that specific hearing's determination is final and not itself appealable (Sec. 28-130.11(f)).",
  municipalCodeRefs: [
    {
      label: "Dallas City Code Sec. 28-129 -- Parking violations made civil offenses",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-129",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147829#JD_28-129",
    },
    {
      label: "Dallas City Code Sec. 28-130 -- General authority and duty of director (Dallas Municipal Court director implements hearings; Transportation and Public Works director implements citations/collections)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147831#JD_28-130",
    },
    {
      label: "Dallas City Code Sec. 28-130.1 -- Hearing officers; powers, duties, and functions",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.1",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147834#JD_28-130.1",
    },
    {
      label: "Dallas City Code Sec. 28-130.2 -- Parking citations; form (required fields; hearing date set not later than 15 calendar days after issuance; citation is prima facie evidence)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.2",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147843#JD_28-130.2",
    },
    {
      label: "Dallas City Code Sec. 28-130.4 -- Liability of the vehicle owner and operator; presumption of liability; stolen-vehicle defense",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.4",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147859#JD_28-130.4",
    },
    {
      label: "Dallas City Code Sec. 28-130.5 -- Answering a parking citation",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.5",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147865#JD_28-130.5",
    },
    {
      label: "Dallas City Code Sec. 28-130.7 -- Hearings for disposition of a parking citation; parking citation as prima facie evidence; preponderance-of-the-evidence standard",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.7",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147878#JD_28-130.7",
    },
    {
      label: "Dallas City Code Sec. 28-130.8 -- Failure to answer a parking citation or appear at a hearing (15-calendar-day deadline; admission of liability)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.8",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147886#JD_28-130.8",
    },
    {
      label: "Dallas City Code Sec. 28-130.9 -- Fine schedule; other fees; additional penalties; penalty-waiver grounds",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.9",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147892#JD_28-130.9",
    },
    {
      label: "Dallas City Code Sec. 28-130.10 -- Enforcement of order (boot/impound, permit denial, registration-renewal refusal)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.10",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147909#JD_28-130.10",
    },
    {
      label: "Dallas City Code Sec. 28-130.12 -- Appeal from hearing (trial de novo in Dallas Municipal Court; $15 filing fee; 30-calendar-day deadline)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 7, § 28-130.12",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147929#JD_28-130.12",
    },
    {
      label: "Dallas City Code Sec. 28-107 -- Parking where paid parking payment device has expired",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 4, § 28-107",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147538#JD_28-107",
    },
    {
      label: "Dallas City Code Sec. 28-108 -- Parking where paid parking payment device is displaying a violation signal (phone/Internet-payment defense)",
      citation: "Dallas, Tex., City Code ch. 28, art. XI, div. 4, § 28-108",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147542#JD_28-108",
    },
  ],
  recognizedDefenses: ["valid-payment", "wrong-ticket-details", "not-my-vehicle"],
  defenses: [valid_payment, wrong_ticket_details, not_my_vehicle],
  faqs: [
    {
      question: "How long do I have to contest a Dallas parking citation?",
      answer:
        "15 calendar days from the date of issuance. Dallas pre-schedules your administrative adjudication hearing on the citation itself (set no later than 15 calendar days after issuance), rather than making you separately request one, though you may also appear at a walk-in 'instanter' hearing any business day before that scheduled date.",
    },
    {
      question: "What happens if I don't answer within 15 days?",
      answer:
        "Under Sec. 28-130.8(a), that's treated as an automatic admission of liability, and fines, penalties, and costs are assessed without a hearing. Sec. 28-130.9(c)(1) also adds an additional civil penalty equal to the original fine.",
    },
    {
      question: "Is this a criminal court proceeding?",
      answer:
        "No, for most parking violations. Sec. 28-129 makes Chapter 28 parking violations civil offenses, administratively adjudicated by hearing officers, not a criminal not-guilty-plea trial. The one exception: a Sec. 28-121.2 disabled-parking-space violation is excluded from this civil track and remains an ordinary criminal offense.",
    },
    {
      question: "Can my vehicle be booted or impounded over unpaid citations?",
      answer:
        "Yes. Once a registered owner has three or more unresolved parking violations within a calendar year, the city may boot or impound the vehicle wherever it's found on public property, deny a parking permit, or refuse vehicle registration renewal (Sec. 28-130.10).",
    },
    {
      question: "What if I lose my hearing?",
      answer:
        "You may appeal to Dallas Municipal Court by filing a petition with the municipal court clerk, plus a $15 filing fee (refunded if you win), within 30 calendar days of the Hearing Officer's order. The appeal is a trial de novo — a fresh civil case you may request be heard by a jury — and the Municipal Court's decision is final (Sec. 28-130.12).",
    },
  ],
  sources: [
    {
      label: "Dallas City Code ch. 28, art. XI, div. 7 -- Administrative Adjudication of Parking Violations (Secs. 28-129 to 28-130.13)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147828#JD_Ch.28Art.XIDiv.7",
    },
    {
      label: "Dallas City Code ch. 28, art. XI, div. 4 -- Paid Parking Payment Devices (Secs. 28-103 to 28-114.13)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-147531#JD_28-104",
    },
    {
      label: "Dallas City Code Chapter 28 -- Motor Vehicles and Traffic (table of contents)",
      url: "https://codelibrary.amlegal.com/codes/dallas/latest/dallas_tx/0-0-0-146384",
    },
    {
      label: "City of Dallas Court and Detention Services -- Parking Violations",
      url: "https://dallascityhall.com/departments/courtdetentionservices/Pages/Parking-Violations.aspx",
    },
    {
      label: "City of Dallas Court and Detention Services -- Contest Your Ticket",
      url: "https://dallascityhall.com/departments/courtdetentionservices/Pages/Contest-Your-Ticket.aspx",
    },
    {
      label: "City of Dallas -- Parking Tickets (Department of Transportation and Public Works)",
      url: "https://dallascityhall.com/departments/transportation/Pages/parking-tickets.aspx",
    },
    {
      label: "City of Dallas -- Parking Appeal form (CTS-FRM-639)",
      url: "https://dallascityhall.com/departments/courtdetentionservices/DCH%20Documents/CTS-FRM-639%20-%20Parking%20Appeal.pdf",
    },
    {
      label: "City of Dallas -- online parking citation Dispute/Payment system",
      url: "https://prdwmq.etimspayments.com/pbw/include/dallas/dispute_request.jsp",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
