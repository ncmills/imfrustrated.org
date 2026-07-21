import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/austin.json (verifiedAt 2026-07-20).
// IMPORTANT: Austin decriminalized parking violations. Austin City Code Sec. 12-5-52 makes
// stopping, standing, and parking violations civil offenses, and Article 3 of Chapter 12-5
// establishes an administrative-adjudication process: the Austin Municipal Court Clerk appoints
// Hearing Officers (Sec. 12-5-54) who hear and decide civil parking citation disputes in the
// first instance — not a municipal court judge. A person found liable by a Hearing Officer may
// appeal to an actual Austin Municipal Court judge (Sec. 12-5-64). Every defense statement below
// is a written CONTEST submitted for adjudication (DENY-style, like Houston), addressed to that
// administrative-adjudication process, not a criminal-court plea. NOTE: disabled/handicapped-
// parking citations are carved out of this civil framework entirely — Austin's own guidance
// states those are criminal offenses handled through the ordinary criminal-citation process, not
// by a Hearing Officer, so no defense below covers them.

const cityHowToContest: string[] = [
  "Look up your citation on the court's public portal (or use the citation itself) and confirm the citation number, license plate, violation, and appearance date against your vehicle and the facts.",
  "Confirm you are eligible to contest: only the registered owner of the vehicle or the driver who parked it before the citation was issued may contest a civil parking citation.",
  "If you were cited for 'No Payment for Use of Metered Space' (or a similar expired-meter/pay-station violation) but actually had an active paid session, you can skip the hearing and submit proof of payment directly for dismissal consideration — through the online waiver form, by email to court@austintexas.gov, or at any court location during hearing hours.",
  "If you were not responsible for the vehicle because it was stolen, sold, or rented at the time of the violation, complete the notarized parking non-liability affidavit instead of contesting at a hearing, and mail, email, or hand-deliver it with supporting proof (bill of sale/DMV transfer form, rental agreement, or long-form police report).",
  "Otherwise, contest the citation at a hearing on or before the appearance date: appear in person at the Main Courthouse or City Hall, use a walk-in Zoom hearing at the North Customer Service Center, submit the online form to request a Zoom hearing, or email your written statement and evidence to court@austintexas.gov. State whether you are the registered owner or the driver who parked the vehicle.",
  "If you want the issuing officer present at your hearing, you must request that in writing at least three business days before your appearance date.",
  "Wait for the Hearing Officer's decision. Online and email hearings can take up to 90 business days for a response; if you contested on or before the appearance date, you will not be penalized for any fine increase or delinquency notice that occurs while your case is pending. In-person/Zoom hearings get a same-day order.",
  "If the Hearing Officer finds you liable, you may appeal to an Austin Municipal Court judge: file a petition with the municipal court clerk within 30 business days of the Hearing Officer's order and pay the non-refundable $5.00 appeal filing fee. To stay collection/enforcement while the appeal is pending, you must also post an appeal bond equal to the total fines, costs, and fees.",
];

const ifThisDoesntWork =
  "If the Hearing Officer finds you liable, you may appeal to an Austin Municipal Court judge: file a petition with the municipal court clerk within 30 business days of the Hearing Officer's order and pay the non-refundable $5.00 appeal filing fee. To stay collection/enforcement while the appeal is pending, you must also post an appeal bond equal to the total fines, costs, and fees (Austin City Code Sec. 12-5-64).";

const validPaymentHowToSubmit: string[] = [
  "Locate proof of your paid parking session: for ParkATX, your finalized receipt or the complete, finalized Transaction Details screen from the Parking History screen in the app; for a meter or kiosk, your receipt or a photo of it (request a replacement copy by emailing TPWParkingMeters@austintexas.gov with your license plate number, transaction date, and payment method).",
  "Compare your payment window against the citation's stated violation, time, and location to confirm your paid session covers the cited moment.",
  "Submit your proof through the dedicated online waiver form, by email to court@austintexas.gov, or at any court location during hearing hours — you do not need to attend a hearing for this fast-track dismissal path.",
  "If your session had already expired, or the citation is for a different violation entirely, this fast-track path does not apply — you must contest at a standard hearing on or before the appearance date instead.",
];

const notMyVehicleHowToSubmit: string[] = [
  "Confirm you were not responsible for the vehicle at the time of the violation because it was stolen, sold, or being rented by someone else.",
  "Complete the parking non-liability affidavit PDF form.",
  "Have the affidavit notarized — a notary is available on-site at both Municipal Court locations if you submit in person.",
  "Attach supporting proof: a bill of sale or DMV vehicle transfer form if the vehicle was sold, a rental agreement in effect at the time of the citation if it was being rented, or a long-form police report if it was stolen.",
  "Mail, email (court@austintexas.gov), or hand-deliver the notarized affidavit and supporting proof to Austin Municipal Court, P.O. Box 2135, Austin, TX 78768-2135. Note: this affidavit does NOT cover disabled-parking citations — those use a separate affidavit and are handled through the criminal-citation process.",
];

const getHomeSafelyHowToSubmit: string[] = [
  "Confirm you left your vehicle overnight at a City of Austin parking meter specifically to get a responsible ride home instead of driving.",
  "Gather proof of your ride home — a taxi, bus, or ride-hailing receipt showing the date and time.",
  "Complete the online Get Home Safely Ticket Waiver Form and attach a copy of the parking ticket and your ride-home receipt.",
  "Submit within the next business day after receiving the parking ticket — this window is strict and much shorter than the standard 20-business-day appearance-date deadline.",
];

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "austin",
  title: "Fight a paid-parking citation in Austin",
  metaDescription:
    "Free dismissal-request letter for a paid-parking citation in Austin. Cites Austin City Code §12-3-7 and the court's own payment-proof fast-track path — ready-to-send template.",
  whenItApplies:
    "You were cited for an expired-meter, expired-parking-space, expired-pay-station-receipt, or 'no payment' violation, but you actually held an active, paid parking session (through ParkATX, a meter, or a pay/kiosk station) covering the cited time and location — including cases where the citation was issued because your license plate number was entered incorrectly when you paid, which prevented the officer from finding your paid session.",
  body: `To: Austin Municipal Court — Civil Parking Citation Dismissal Request
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting dismissal of this citation without a hearing under Austin Municipal Court's payment-proof dismissal process.

On [DATE], I held a valid, paid parking session for my vehicle, plate [PLATE], at [LOCATION], covering [TIME] — the moment this citation states I had no payment for use of the metered space. I paid through [PAYMENT METHOD — ParkATX / meter / pay station], and my [receipt / finalized Transaction Details screen] shows a payment window of [PAYMENT START TIME] to [PAYMENT EXPIRATION TIME], which covers the time this citation was issued. [IF APPLICABLE: I believe my license plate number may have been entered incorrectly when I paid, which would explain why the enforcement officer could not locate my paid session.]

Under Austin City Code §12-3-7, I was obligated to pay for parking through an accepted method, and I did so. Consistent with Austin Municipal Court's own published guidance for citations issued for "No Payment for Use of Metered Space," I am submitting proof of my active paid session and ask that this citation be dismissed on that basis without need for a hearing.

Attached: [ParkATX finalized receipt or Transaction Details screen, OR meter/kiosk receipt or replacement copy requested from TPWParkingMeters@austintexas.gov; a copy of the citation for comparison].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "If you paid through ParkATX: a finalized receipt or the complete, finalized Transaction Details screen for the paid session, accessed from the Parking History screen in the app",
    "If you paid at a meter or kiosk: your meter/kiosk receipt or a photo of it (request a replacement copy by emailing TPWParkingMeters@austintexas.gov with your license plate number, transaction date, and payment method)",
    "The citation itself, to compare the cited violation, time, and location against your payment window (the court notes: banking statements, banking app images, and other unlisted proof forms are NOT accepted for dismissal consideration)",
  ],
  cityNotes:
    "Austin gives this its own fast-track dismissal path, separate from a full contested hearing: on the 'Handle a Civil Parking Citation' page, 'Show you Paid for Parking' is offered specifically 'If you received a citation for the violation No Payment for Use of Metered Space, but you had an active paid parking session at the time' — submitted through the dedicated online waiver form, by email to court@austintexas.gov, or at any court location during hearing hours, without needing to attend a hearing. The Civil Parking FAQs separately confirm a common cause: 'You may also receive a citation if the license plate number was entered incorrectly when the payment was made, which can prevent officers from locating your paid parking session.' If your session had already expired, or the citation is for a different violation entirely, this fast-track path does not apply — you must contest at a standard hearing instead.",
  codeCite: {
    label: "Austin City Code Sec. 12-3-7 — Fee Due for Parking Vehicle (obligation to pay, accepted payment methods, and receipt-display requirements)",
    citation: "Austin, Tex., City Code § 12-3-7",
    url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-3MEPASTPA_S12-3-7FEDUPAVE",
  },
  howToSubmit: validPaymentHowToSubmit,
  ifThisDoesntWork,
  sources: [
    {
      label: "Austin Municipal Court — Request Dismissal of a Parking Citation if You Have a Receipt",
      url: "https://www.austintexas.gov/municipal-court/request-dismissal-parking-citation-if-you-have-receipt",
    },
    {
      label: "City of Austin — Handle a Civil Parking Citation ('Show you Paid for Parking')",
      url: "https://www.austintexas.gov/services/handle-civil-parking-citation",
    },
    {
      label: "Austin Municipal Court — Civil Parking FAQ's ('Why did I receive a citation if I paid for parking?')",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-faqs",
    },
  ],
  faqs: [
    {
      question: "Do I have to attend a hearing for this defense?",
      answer:
        "No. Austin offers a fast-track dismissal path just for this situation — submit your proof of payment through the online waiver form, by email to court@austintexas.gov, or at any court location during hearing hours, and you can skip a formal hearing entirely.",
    },
    {
      question: "What kinds of payment proof does the court accept?",
      answer:
        "A finalized ParkATX receipt or Transaction Details screen, or a meter/kiosk receipt. The court explicitly does not accept banking statements, banking app images, or other unlisted proof forms for dismissal consideration.",
    },
    {
      question: "Why would I get a citation if I actually paid?",
      answer:
        "Austin's Civil Parking FAQs note a common cause: the license plate number may have been entered incorrectly when payment was made, which can prevent officers from locating your paid parking session.",
    },
    {
      question: "What if my paid session had already expired?",
      answer:
        "The fast-track dismissal path only applies if you had an active paid session covering the cited time. If your session had expired, or the citation is for a different violation, you'll need to contest at a standard hearing instead.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "austin",
  title: "Fight a broken-meter parking ticket in Austin",
  metaDescription:
    "Free defense-statement letter for a broken-meter parking citation in Austin. Cites the court's rebuttable-proof standard and current fine schedule — hearing-ready template.",
  whenItApplies:
    "You parked at a parking meter or pay station that was inoperable/malfunctioning, and you made a good-faith effort to pay — e.g., by paying at the nearest working meter/station and keeping a receipt, or by reporting the malfunction — but were cited anyway. NOTE: on re-verification against the live code and the current fine schedule, this is no longer a distinctly codified or fine-schedule-listed violation category — treat it as a factual defense argued at a standard hearing, not a citable code subsection.",
  body: `To: Austin Municipal Court — Civil Parking Hearing Officer
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that the Hearing Officer find me not liable and dismiss it at my hearing.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter/pay station serving that spot, but it was inoperable: [DESCRIBE — e.g., blank screen, rejected every payment method I tried, printed no receipt]. Because the meter/pay station at my location did not work, I made a good-faith effort to pay for parking through no fault of my own by [DESCRIBE — paying at the nearest working meter/pay station, located at [NEAREST WORKING METER LOCATION] / reporting the malfunction to TPWParkingMeters@austintexas.gov].

Austin City Code §12-5-55(C) makes this citation only "rebuttable proof of the facts it contains," not conclusive proof, and under §12-5-61 the Hearing Officer decides by a preponderance of the evidence. I ask the Hearing Officer to weigh the evidence below of my good-faith effort to pay despite an inoperable meter, and to confirm against the current Austin Municipal Court Charge Codes and Fine Schedule that no distinct malfunctioning-meter violation applies to the facts here, and to find me not liable on that basis.

Attached: [a receipt from the nearest working meter/pay station showing payment, timestamped near the citation time; time- and date-stamped photo(s) of the inoperable meter/pay station; a copy of any complaint emailed to TPWParkingMeters@austintexas.gov reporting the malfunction; a copy of the citation compared against the current fine schedule].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A receipt from the nearest working meter/pay station showing you paid, timestamped near the citation time",
    "Time- and date-stamped photo(s) of the inoperable meter/pay station you originally tried to use, showing its malfunction and location",
    "A copy of any complaint you emailed to TPWParkingMeters@austintexas.gov reporting the malfunction, if you sent one",
    "The citation itself, compared against the current fine schedule to confirm exactly how the violation is coded",
  ],
  cityNotes:
    "CORRECTED ON RE-VERIFICATION (2026-07-20 live Municode check): an earlier draft of this record quoted an 'inoperable parking meter... pay at the nearest pay and display station' rule as Sec. 12-3-7(G). That subsection does not exist in the current code. Austin City Code Chapter 12-3 was completely rewritten by Ord. No. 20250213-026 (eff. 2-24-25); the live Sec. 12-3-7 ('Fee Due for Parking a Motor Vehicle') now has only Subsections (A)-(C) (general duty to pay, narrow exemptions, accepted payment methods) and contains no inoperable-meter or nearest-pay-station language anywhere in the current Chapter 12-3 (confirmed by reading every section, 12-3-1 through 12-3-11, live). The Austin Municipal Court's Civil Parking FAQs also do not list a malfunctioning-meter question. Until a current, live-confirmed source for a distinct malfunctioning-meter dismissal path is found, treat a broken/malfunctioning meter as a factual argument to raise at a standard contested hearing under Sec. 12-5-55/12-5-61 (citation is only 'rebuttable proof,' preponderance-of-the-evidence standard) rather than as a codified automatic ground — do not cite a specific Sec. 12-3-7(G) to a hearing officer, as it will not be found in the current code.",
  codeCite: {
    label: "Austin City Code Sec. 12-3-7 — Fee Due for Parking a Motor Vehicle (current text, Subsections (A)-(C) only; no inoperable-meter subsection exists as of the current code version — see cityNotes)",
    citation: "Austin, Tex., City Code § 12-3-7",
    url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-3MEPA_S12-3-7FEDUPAMOVE",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Austin City Code, Chapter 12-3 — Metered Parking (Municode; §§ 12-3-1 through 12-3-11, current as of Ord. No. 20250213-026)",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-3MEPA",
    },
    {
      label: "Austin Municipal Court — Charge Codes and Fine Schedule (current PDF, checked 2026-07-20: does NOT list a 'Malfunctioning meter/pay by space/pay station' violation code — see cityNotes)",
      url: "https://www.austintexas.gov/municipal-court/charge-codes-and-fine-schedule-austin-municipal-court",
    },
  ],
  faqs: [
    {
      question: "Can I cite a specific code section for a broken meter?",
      answer:
        "No. On live re-verification of the current Austin City Code (rewritten by Ord. No. 20250213-026, effective 2-24-25), there is no inoperable-meter or nearest-pay-station subsection anywhere in Chapter 12-3. Raise a broken meter as a factual argument at your hearing, not as a citable code ground.",
    },
    {
      question: "What should I argue instead?",
      answer:
        "That the citation is only 'rebuttable proof of the facts it contains' under Sec. 12-5-55(C), not conclusive proof, and that your evidence of a good-faith payment attempt at an inoperable meter should outweigh it under the preponderance-of-the-evidence standard in Sec. 12-5-61.",
    },
    {
      question: "Is there a listed 'malfunctioning meter' violation code?",
      answer:
        "No. Austin Municipal Court's current Charge Codes and Fine Schedule (checked 2026-07-20) does not list a distinct malfunctioning-meter/pay-by-space/pay-station violation code, which is worth pointing out to confirm exactly how your citation is coded.",
    },
    {
      question: "Does reporting the meter to the city help?",
      answer:
        "It can serve as independent, time-stamped corroboration. If you emailed TPWParkingMeters@austintexas.gov about the malfunction, include a copy of that complaint with your hearing evidence.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "austin",
  title: "Fight a defective parking citation in Austin (wrong details)",
  metaDescription:
    "Free defense-statement letter for an Austin parking citation with incorrect details. Cites Austin City Code §12-5-55's rebuttable-proof standard — hearing-ready template.",
  whenItApplies:
    "The citation itself contains information that doesn't match your vehicle or the actual facts — e.g., an incorrect license plate/VIN, vehicle make or description, or the wrong violation, date, time, or location.",
  body: `To: Austin Municipal Court — Civil Parking Hearing Officer
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I contest this citation and respectfully request that the Hearing Officer find me not liable and dismiss it at my hearing.

This citation contains information that does not match my vehicle or the actual facts. Specifically, the [FIELD — e.g., license plate / VIN / vehicle make or description / violation / date or time / location] printed on the citation is [DESCRIBE THE DISCREPANCY]. Comparing the citation against my vehicle registration/title and Austin's published Civil Parking Citation Examples, the correct information is: [CORRECT INFORMATION].

Austin City Code §12-5-55(B) requires a parking citation to state the nature, date, time, and location of the violation along with my plate number and vehicle description, but §12-5-55(C) provides that the citation is only "rebuttable proof of the facts it contains" — not conclusive proof. The discrepancy described above rebuts the citation's stated facts, and I ask the Hearing Officer to weigh this evidence under the preponderance-of-the-evidence standard in §12-5-61(D) and find me not liable.

Attached: [a copy or photo of the actual citation showing the incorrect field(s); my vehicle registration or title; any evidence contradicting the citation's stated location, date, or time — e.g., photos, timestamped records].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy or photo of the actual citation showing the incorrect field(s), compared against Austin's 'Civil Parking Citation Examples' page to confirm which fields are required",
    "Your vehicle registration/title, to compare the correct plate number, VIN, make, or description against what's on the citation",
    "Any evidence contradicting the citation's stated location, date, or time (e.g., photos, timestamped records)",
  ],
  cityNotes:
    "Austin does not publish a standalone automatic-dismissal rule for a defective citation. Instead, Sec. 12-5-55(B) requires a parking citation to include specific fields (nature/date/time/location of the violation, plate number or other identifying information, vehicle make/description, the appearance date, notice of hearing rights, notice of the consequence of non-response, and the issuing individual's ID/initials), and Sec. 12-5-55(C) provides that the citation 'is a governmental record kept in the ordinary course of city business and is rebuttable proof of the facts it contains' — not conclusive proof. In practice, a factual error is raised by contesting the citation at your hearing and presenting the discrepancy as evidence, which the Hearing Officer weighs under the preponderance-of-the-evidence standard in Sec. 12-5-61(D). There is no separate rule automatically voiding a citation for a clerical error the way some other cities publish.",
  codeCite: {
    label: "Austin City Code Sec. 12-5-55 — Parking Citations (required contents; citation is rebuttable, not conclusive, proof)",
    citation: "Austin, Tex., City Code § 12-5-55",
    url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-55PACI",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Austin Municipal Court — Civil Parking Citation Examples",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-citation-examples",
    },
    {
      label: "Austin Municipal Court — Civil Parking FAQ's",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-faqs",
    },
  ],
  faqs: [
    {
      question: "Does Austin automatically dismiss a citation with wrong information?",
      answer:
        "No. Austin doesn't publish a standalone automatic-dismissal rule for a defective citation. You raise the discrepancy at your hearing, and the Hearing Officer weighs it under the preponderance-of-the-evidence standard in Sec. 12-5-61(D).",
    },
    {
      question: "What fields is the citation required to include?",
      answer:
        "Under Sec. 12-5-55(B): the nature, date, time, and location of the violation, your plate number or other identifying information, your vehicle's make/description, the appearance date, notice of hearing rights, notice of the consequence of non-response, and the issuing individual's ID/initials.",
    },
    {
      question: "Does the citation count as proof against me at the hearing?",
      answer:
        "It's only rebuttable proof. Sec. 12-5-55(C) states the citation 'is a governmental record kept in the ordinary course of city business and is rebuttable proof of the facts it contains' — your evidence of the discrepancy can outweigh it.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "austin",
  title: "Fight an Austin parking citation for a vehicle that was stolen, sold, or rented",
  metaDescription:
    "Free notarized non-liability affidavit letter for an Austin parking citation on a vehicle you weren't responsible for. Cites Austin City Code §12-5-57(B) — mail-ready template.",
  whenItApplies:
    "You were not responsible for the vehicle at the time the citation was issued because it was stolen, sold, or being rented by someone else — so Austin's presumption that the registered owner is the person who parked the vehicle does not apply to you.",
  body: `To: Austin Municipal Court — Parking Non-Liability Affidavit
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this notarized parking non-liability affidavit and deny liability for this citation because I was not responsible for the vehicle bearing plate [PLATE] at the time of the violation on [DATE].

[CHOOSE ONE: My vehicle was sold on [SALE DATE], as shown by the attached bill of sale / DMV vehicle transfer form. / My vehicle was being rented by [RENTAL COMPANY] under the attached rental agreement in effect on the violation date. / My vehicle was stolen, as shown by the attached long-form police report.] Because I did not have possession of or responsibility for the vehicle at the time cited, I was not the person who parked it.

Under Austin City Code §12-5-57(B), the registered owner is not liable for a civil parking citation where the owner proves — by affidavit and supporting documents — that the vehicle was sold before the violation, was operated without the owner's consent, or was stolen (supported by a police report and affidavit). I ask that this citation be dismissed on that basis.

Attached: [the completed and notarized parking non-liability affidavit; bill of sale or DMV vehicle transfer form (if sold); rental agreement in effect at the time of the citation (if rented); long-form police report (if stolen); the citation for reference].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "The completed 'parking non-liability affidavit' PDF form, signed only in front of a notary (a notary is available on-site at both Municipal Court locations if you submit in person)",
    "If the vehicle was sold: a copy of the bill of sale or a vehicle transfer form from the Department of Motor Vehicles",
    "If the vehicle was being rented: a copy of the rental agreement in effect at the time of the citation",
    "If the vehicle was stolen: a copy of the long-form police report",
    "Note: this affidavit does NOT cover disabled-parking citations — those use a separate affidavit form and are handled through the criminal-citation process, not this civil non-liability process",
  ],
  cityNotes:
    "Austin routes this through a dedicated notarized-affidavit process rather than arguing it live at a standard hearing. Austin Municipal Court's 'Show You Weren't Responsible for a Parking Citation' page states: 'If you were not responsible for a vehicle at the time a parking citation was issued because the vehicle was stolen, sold, or rented, you can use a notarized form to show that to the court' — submit by mail (Austin Municipal Court, P.O. Box 2135, Austin, TX 78768), by email to court@austintexas.gov, or in person. This mirrors the registered-owner-liability exceptions codified in Sec. 12-5-57(B): the owner is not liable if the operator assumes responsibility or is named on the citation, if the owner proves (by affidavit and documents) the vehicle was sold before the violation, if the owner proves the vehicle was operated without consent, or if the owner files a police report and affidavit showing it was stolen. A separate exception in Sec. 12-5-57(C) protects registered rental/leasing businesses that, within 30 days of notice, provide an affidavit or the rental agreement identifying the actual renter.",
  codeCite: {
    label: "Austin City Code Sec. 12-5-57(B) — Liability of the Vehicle Owner and Operator; exceptions for sold, stolen, or non-consensually operated vehicles",
    citation: "Austin, Tex., City Code § 12-5-57(B)",
    url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-57LIVEOWOPPRLI",
  },
  howToSubmit: notMyVehicleHowToSubmit,
  ifThisDoesntWork,
  sources: [
    {
      label: "Austin Municipal Court — Show You Weren't Responsible for a Parking Citation",
      url: "https://www.austintexas.gov/municipal-court/show-you-werent-responsible-parking-citation",
    },
    {
      label: "Austin Municipal Court — Civil Parking FAQ's ('What if I received a notice for a vehicle that was sold, stolen, or rented...')",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-faqs",
    },
  ],
  faqs: [
    {
      question: "Do I contest this at the regular hearing?",
      answer:
        "No. Austin routes a stolen/sold/rented dispute through a dedicated notarized parking non-liability affidavit process, not the standard hearing.",
    },
    {
      question: "Does the affidavit need to be notarized?",
      answer:
        "Yes. It must be signed only in front of a notary — a notary is available on-site at both Municipal Court locations if you submit in person.",
    },
    {
      question: "Where do I send it?",
      answer:
        "Austin Municipal Court, P.O. Box 2135, Austin, TX 78768-2135 by mail, by email to court@austintexas.gov, or hand-delivered in person.",
    },
    {
      question: "Does this cover a disabled-parking citation?",
      answer:
        "No. Disabled-parking citations are carved out of Austin's civil framework entirely — they're criminal offenses handled through the ordinary criminal-citation process with a separate affidavit form, not this civil non-liability affidavit.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const get_home_safely_waiver: ParkingDefense = {
  slug: "get-home-safely-waiver",
  citySlug: "austin",
  title: "Waive an Austin parking ticket under the Get Home Safely program",
  metaDescription:
    "Free waiver-request letter for an Austin parking ticket under the Get Home Safely program — for drivers who left a vehicle overnight to get a responsible ride home.",
  whenItApplies:
    "You left your vehicle overnight at a City of Austin parking meter specifically to get a responsible ride home (taxi, bus, or ride-hailing) instead of driving, and received a parking ticket as a result.",
  body: `To: Austin Transportation and Public Works — Get Home Safely Ticket Waiver Program
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am requesting a waiver of this citation under the Get Home Safely Ticket Waiver Program.

On [DATE], I left my vehicle, plate [PLATE], overnight at the City of Austin parking meter at [LOCATION] specifically so that I could get a responsible ride home — [DESCRIBE — taxi / bus / ride-hailing service] — instead of driving. I received this parking ticket as a result of leaving the vehicle there overnight, and I am submitting this waiver request within one business day of receiving it, as required by the program.

The underlying citation was issued as a civil parking offense under Austin City Code §12-5-52, but this waiver is a Transportation and Public Works administrative program, not a matter for a Hearing Officer. I ask that Austin Transportation and Public Works waive this citation directly under the Get Home Safely program.

Attached: [a copy of the parking ticket; a receipt from my taxi, bus, or ride-hailing trip home showing the date and time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the parking ticket",
    "Proof of your responsible ride home — a taxi, bus, or ride-hailing receipt showing the date and time",
    "Both submitted through the online 'Get Home Safely Ticket Waiver Form' WITHIN THE NEXT BUSINESS DAY after receiving the parking ticket — this is a much shorter window than the standard 20-business-day appearance-date deadline",
  ],
  cityNotes:
    "This is an Austin-specific administrative waiver program run directly by Austin Transportation and Public Works (TPW) — not an affirmative defense adjudicated by a Hearing Officer under Article 3 of Chapter 12-5, and not itself tied to a specific code section. TPW's own 'Parking Regulations and Tickets' page states: 'If you left your vehicle overnight at a City of Austin parking meter to seek a responsible ride home and received a parking ticket, you are eligible to have the parking ticket waived from Austin Transportation and Public Works. To participate in this program, fill out the online Get Home Safely Ticket Waiver Form within the next business day after receiving the parking ticket.' Because the underlying citation is still a civil parking offense under Sec. 12-5-52, this record cites that general provision for context, but the waiver itself is a policy program, not a coded legal defense — so treat the one-business-day filing window as strict and non-negotiable.",
  codeCite: {
    label: "Austin City Code Sec. 12-5-52 — Parking Violations Made Civil Offenses (general provision under which the underlying citation is issued; the waiver itself is a TPW administrative program, not a distinct code-based defense)",
    citation: "Austin, Tex., City Code § 12-5-52",
    url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-52PAVIMACIOF",
  },
  howToSubmit: getHomeSafelyHowToSubmit,
  ifThisDoesntWork,
  sources: [
    {
      label: "Austin Transportation and Public Works — Parking Regulations and Tickets ('Get Home Safely Ticket Waiver Program')",
      url: "https://www.austintexas.gov/page/parking-regulations-and-tickets",
    },
  ],
  faqs: [
    {
      question: "How fast do I need to file this waiver?",
      answer:
        "Within the next business day after receiving the parking ticket — a much shorter window than the standard 20-business-day appearance-date deadline, and it is strict and non-negotiable.",
    },
    {
      question: "Is this the same as contesting at a hearing?",
      answer:
        "No. This is a Transportation and Public Works administrative waiver program, not an affirmative defense adjudicated by a Hearing Officer under Article 3 of Chapter 12-5.",
    },
    {
      question: "Does a specific code section govern this waiver?",
      answer:
        "No. The underlying citation is still issued as a civil parking offense under Sec. 12-5-52, but the waiver itself is a TPW policy program, not a coded legal defense.",
    },
    {
      question: "What proof do I need?",
      answer:
        "A copy of the parking ticket and proof of your responsible ride home — a taxi, bus, or ride-hailing receipt showing the date and time — both submitted through the online Get Home Safely Ticket Waiver Form.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const austinCity: ParkingCity = {
  slug: "austin",
  city: "Austin",
  state: "TX",
  agency:
    "The Austin Transportation and Public Works Department's Parking Enforcement officers, Austin Police Department officers, and (for accessible-parking spaces) trained volunteers issue civil parking citations within the City of Austin right-of-way. Austin City Code Sec. 12-5-52 makes stopping, standing, and parking violations civil offenses, and Article 3 of Chapter 12-5 establishes an administrative-adjudication process: the Austin Municipal Court Clerk appoints Hearing Officers (Sec. 12-5-54) who hear and decide civil parking citation disputes in the first instance — not a municipal court judge. A person found liable by a Hearing Officer may appeal to an actual Austin Municipal Court judge (Sec. 12-5-64). IMPORTANT: disabled/handicapped-parking citations are carved out of this civil framework — Austin's own online-hearing guidance states 'Disabled parking charges are criminal offenses and not eligible for hearing by a hearing officer,' and must instead be resolved through the Municipal Court's ordinary criminal-citation process. No warrants are issued for unpaid civil parking citations.",
  submitOnlineUrl: "https://www.austintexas.gov/municipal-court/request-online-hearing-parking-citation",
  submitMailAddress: "Austin Municipal Court, P.O. Box 2135, Austin, TX 78768-2135",
  submitInPerson:
    "Main Courthouse: 6800 Burleson Road, Building 310, Suite 175, Austin, TX 78744 (Monday-Friday, 9 a.m.-6 p.m.). City Hall: 301 W. 2nd Street, Austin, TX 78701 (Monday-Friday, 9 a.m.-1 p.m. and 2 p.m.-6 p.m.; payments are not accepted at this location). Walk-in Zoom hearings: North Customer Service Center, 2121 West Parmer Lane, Suite 116, Austin, TX 78727 (Monday-Friday, 8 a.m.-4:30 p.m.). All in-person/Zoom hearings must occur on or before the appearance date listed on the citation; bring any evidence you want the hearing officer to consider.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 20,
  contestDeadlineNote:
    "Austin City Code Sec. 12-5-51(1) defines 'APPEARANCE DATE' as 'the last day to respond to a parking citation, which is the 20th business day after the issuance of the parking citation' — so the deadline is 20 BUSINESS days, not 20 calendar days, and it is printed on the citation itself. Austin Municipal Court's own guidance restates this in plain language: 'You must contest your citation on or before the appearance date listed on the citation' (Civil Parking FAQs), and 'You must contact Austin Municipal Court to resolve the citation by the date listed on the citation, or you will be found liable by law, and the fine increases' (Handle a Civil Parking Citation). A person may answer/contest by: paying and admitting liability; appearing at an in-person 'instanter' hearing on or before the appearance date; requesting adjudication by mail or electronic means (which requires showing good cause and making the request on or before the appearance date — Sec. 12-5-59, Sec. 12-5-60); or filing a written request for a scheduled hearing. Missing the appearance date without contesting is deemed an admission of liability under Sec. 12-5-62(B), and citations contested after the appearance date cannot be revived (per the FAQs: 'Citations must be contested on or before the appearance date listed on the citation').",
  penaltyNote:
    "Austin City Code Sec. 12-5-90 sets a two-tier fine structure: an 'EARLY PAYMENT FINE' (lower amount) applies if paid on or before the appearance date; a higher 'STANDARD FINE' applies if paid after the appearance date or on the scheduled hearing date. Failing to answer the citation by the appearance date is deemed an admission of liability and triggers the Standard Fine (Sec. 12-5-62(B)). Per Austin Municipal Court's Civil Parking FAQs: 'failure to pay past due citations may result in cases being referred to a third-party collections vendor, a 30% increase in the fine amount, and/or the vehicle becoming eligible to be booted and/or towed.' Under Sec. 12-5-81, a vehicle may be immobilized once its owner/operator has accumulated three or more unpaid parking-violation fines, and may be impounded immediately if three or more are unpaid within a calendar year; Sec. 12-5-63 also allows an additional fine or fee for enforcing an unpaid order. Civil parking fines cannot be reduced by the court below the Early Payment Fine amount and cannot be satisfied with community service (Civil Parking FAQs). Paying a citation is itself an admission of liability and final disposition of the case (Sec. 12-5-59(C)); importantly, admitting liability for a civil parking citation does NOT affect a driver's license, vehicle registration, or insurance, and no arrest warrant is issued for unpaid civil parking citations (both per the Civil Parking FAQs) — this is a civil, not criminal, consequence track. Appeal from a liable finding requires a non-refundable $5.00 filing fee (Sec. 12-5-90(I), Sec. 12-5-64(A)(2)) within 30 business days of the order, and enforcement/collection is only stayed pending appeal if the appellant posts a bond equal to the full fines, costs, and fees (Sec. 12-5-64(K)).",
  municipalCodeRefs: [
    {
      label: "Austin City Code Sec. 12-5-51 — Definitions (Article 3, Administrative Adjudication of Parking Violations): 'Appearance date' = 20th business day after citation issuance; 'Hearing officer'",
      citation: "Austin, Tex., City Code § 12-5-51",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-51DE",
    },
    {
      label: "Austin City Code Sec. 12-5-52 — Parking Violations Made Civil Offenses",
      citation: "Austin, Tex., City Code § 12-5-52",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-52PAVIMACIOF",
    },
    {
      label: "Austin City Code Sec. 12-5-55 — Parking Citations (required contents; citation is 'rebuttable proof of the facts it contains')",
      citation: "Austin, Tex., City Code § 12-5-55",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-55PACI",
    },
    {
      label: "Austin City Code Sec. 12-5-57 — Liability of the Vehicle Owner and Operator; Presumption of Liability (sold/stolen/no-consent/rental exceptions)",
      citation: "Austin, Tex., City Code § 12-5-57",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-57LIVEOWOPPRLI",
    },
    {
      label: "Austin City Code Sec. 12-5-58 — Presumption (registered owner presumed to be the person who parked the vehicle)",
      citation: "Austin, Tex., City Code § 12-5-58",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-58PR",
    },
    {
      label: "Austin City Code Sec. 12-5-59 — Answering a Parking Citation",
      citation: "Austin, Tex., City Code § 12-5-59",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-59ANPACI",
    },
    {
      label: "Austin City Code Sec. 12-5-61 — Hearings for Disposition of a Parking Citation (preponderance-of-the-evidence standard; issuing-officer attendance rule)",
      citation: "Austin, Tex., City Code § 12-5-61",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-61HEDIPACI",
    },
    {
      label: "Austin City Code Sec. 12-5-62 — Failure to Answer a Parking Citation or Appear at a Hearing",
      citation: "Austin, Tex., City Code § 12-5-62",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-62FAANPACIAPHE",
    },
    {
      label: "Austin City Code Sec. 12-5-64 — Appeal from a Hearing (30-business-day petition, $5.00 non-refundable fee, appeal bond to stay enforcement)",
      citation: "Austin, Tex., City Code § 12-5-64",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART3ADADPAVI_S12-5-64APHE",
    },
    {
      label: "Austin City Code Sec. 12-5-81 — Conditions Authorizing Immobilization or Impoundment (3+ unpaid citations)",
      citation: "Austin, Tex., City Code § 12-5-81",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART4IMIMMOVEUNPACI_S12-5-81COAUIMIM",
    },
    {
      label: "Austin City Code Sec. 12-5-90 — Civil Fines, Costs, and Fees (Early Payment Fine vs. Standard Fine; full fine/appeal-fee schedule)",
      citation: "Austin, Tex., City Code § 12-5-90",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA_ART4IMIMMOVEUNPACI_S12-5-90CIFICOFE",
    },
    {
      label: "Austin City Code Sec. 12-3-7 — Fee Due for Parking a Motor Vehicle (payment methods; as rewritten by Ord. No. 20250213-026 eff. 2-24-25, current text has no inoperable-meter/nearest-pay-station subsection — see broken-meter defense cityNotes)",
      citation: "Austin, Tex., City Code § 12-3-7",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-3MEPA_S12-3-7FEDUPAMOVE",
    },
  ],
  recognizedDefenses: ["valid-payment", "broken-meter", "wrong-ticket-details", "not-my-vehicle", "get-home-safely-waiver"],
  defenses: [valid_payment, broken_meter, wrong_ticket_details, not_my_vehicle, get_home_safely_waiver],
  faqs: [
    {
      question: "How long do I have to contest an Austin parking citation?",
      answer:
        "20 business days from the date the citation was issued — Austin City Code Sec. 12-5-51(1) defines the 'appearance date' as the 20th business day after issuance, and it's printed on the citation itself. This is business days, not calendar days.",
    },
    {
      question: "What happens if I do nothing by the appearance date?",
      answer:
        "Under Sec. 12-5-62(B), missing the appearance date without contesting is deemed an admission of liability and triggers the higher Standard Fine. Citations contested after the appearance date cannot be revived.",
    },
    {
      question: "Is this a criminal court proceeding?",
      answer:
        "No — for ordinary parking citations. Sec. 12-5-52 makes stopping, standing, and parking violations civil offenses decided in the first instance by a Hearing Officer, not a municipal court judge. Admitting liability doesn't affect your driver's license, registration, or insurance, and no arrest warrant is issued. The one exception: disabled/handicapped-parking citations are carved out of this civil framework and handled as criminal offenses through the ordinary criminal-citation process.",
    },
    {
      question: "What if I lose at my hearing?",
      answer:
        "You may appeal to an Austin Municipal Court judge by filing a petition with the municipal court clerk within 30 business days of the Hearing Officer's order, paying a non-refundable $5.00 filing fee. To stay collection/enforcement while the appeal is pending, you must also post an appeal bond equal to the full fines, costs, and fees.",
    },
    {
      question: "Can my vehicle be booted or towed over unpaid citations?",
      answer:
        "Yes. Under Sec. 12-5-81, a vehicle may be immobilized once its owner/operator has accumulated three or more unpaid parking-violation fines, and may be impounded immediately if three or more are unpaid within a calendar year. Unpaid citations can also be referred to collections and increase 30% per Austin Municipal Court's Civil Parking FAQs.",
    },
  ],
  sources: [
    {
      label: "City of Austin — Handle a Civil Parking Citation",
      url: "https://www.austintexas.gov/services/handle-civil-parking-citation",
    },
    {
      label: "Austin Municipal Court — Civil Parking FAQ's",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-faqs",
    },
    {
      label: "Austin Municipal Court — Civil Parking Citation Examples",
      url: "https://www.austintexas.gov/municipal-court/civil-parking-citation-examples",
    },
    {
      label: "Austin Municipal Court — Request an Online Hearing for a Parking Citation",
      url: "https://www.austintexas.gov/municipal-court/request-online-hearing-parking-citation",
    },
    {
      label: "Austin Municipal Court — Request Dismissal of a Parking Citation if You Have a Receipt",
      url: "https://www.austintexas.gov/municipal-court/request-dismissal-parking-citation-if-you-have-receipt",
    },
    {
      label: "Austin Municipal Court — Show You Weren't Responsible for a Parking Citation",
      url: "https://www.austintexas.gov/municipal-court/show-you-werent-responsible-parking-citation",
    },
    {
      label: "Austin Municipal Court — Parking Appeal Form",
      url: "https://www.austintexas.gov/municipal-court/parking-appeal-form",
    },
    {
      label: "Austin Municipal Court — Charge Codes and Fine Schedule",
      url: "https://www.austintexas.gov/municipal-court/charge-codes-and-fine-schedule-austin-municipal-court",
    },
    {
      label: "Austin Transportation and Public Works — Parking Regulations and Tickets",
      url: "https://www.austintexas.gov/page/parking-regulations-and-tickets",
    },
    {
      label: "City of Austin — Handle a Citation (criminal/general citation process, cross-referenced for disabled-parking's criminal track)",
      url: "https://www.austintexas.gov/services/handle-citation",
    },
    {
      label: "Austin City Code, Chapter 12-5 — Stopping, Standing, and Parking (Municode, includes Article 3: Administrative Adjudication of Parking Violations)",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-5STSTPA",
    },
    {
      label: "Austin City Code, Chapter 12-3 — Metered Parking (Municode)",
      url: "https://library.municode.com/tx/austin/codes/code_of_ordinances?nodeId=TIT12TRRE_CH12-3MEPA",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
