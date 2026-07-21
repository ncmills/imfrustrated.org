import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/minneapolis.json (verifiedAt 2026-07-20).
// IMPORTANT: Minneapolis parking-ticket disputes are NOT decided by a City of Minneapolis
// administrative tribunal. Standard "payable" parking tickets are processed and adjudicated
// by the Hennepin County Violations Bureau & Hearing Office, a unit of Hennepin County
// District Court (Fourth Judicial District). A Hearing Officer (court staff, not a judge)
// holds an informal settlement conference about the ticket ("It is not possible to have a
// trial with evidence at this meeting because a trial can only take place in court with a
// judge") — roughly 85-90% of people who meet with a Hearing Officer settle without going to
// court. Only if unresolved may a person request an in-court hearing before a District Court
// judge, unless that right was already waived under Minn. Stat. § 169.91, subd. 3 by not
// responding within 30 days of MNCIS entry. Every defense statement below is a written
// statement prepared for the Hearing Officer conference, not a formal court plea. Note: a
// small minority of city-issued notices are separate "administrative" citations settled
// directly with the City of Minneapolis Administrative Hearings instead — check whether the
// words "District Court" or "Violations Bureau" appear on the ticket.

const cityHowToContest: string[] = [
  "Locate your citation number (a preprinted number, typically 12 digits, at the top-left corner, right side, and below the barcode of the ticket) and confirm the violation, date, time, and location printed on it. Check whether the ticket itself says \"District Court\" or \"Violations Bureau\" — if neither appears, it is likely a separate \"administrative\" citation handled by City of Minneapolis Administrative Hearings instead of the process below.",
  "Wait for the citation to be filed with the court (law enforcement typically files within about 7 business days) and look it up on the Minnesota Court Web Payment System (webpay.courts.state.mn.us) to confirm the amount due; a \"No Records Found\" result usually just means it hasn't been entered yet.",
  "Decide whether to pay or contest within 30 days of the date the citation is entered into the Minnesota Court Information System (MNCIS) — this clock runs from MNCIS entry, not from the date the ticket was issued.",
  "To contest, call the MN Court Payment Center (Metro (651) 281-3219, outside the metro 1 (800) 657-3611) to schedule a Hearing Officer appointment (a video conference on Zoom, available by appointment or as a same-day walk-in at the Hennepin Co. Government Center). There is no general online dispute-submission form; two situations have dedicated shortcuts instead of a hearing: (a) a defective/malfunctioning electronic pay station — report the meter and ticket numbers directly to the Traffic Violations Bureau at (612) 348-6000, and if confirmed defective the citation is canceled outright; and (b) a valid payment receipt for the same space/date/time — email, fax, or mail a copy of the receipt and citation to the Violations Bureau for review (about 2 business days).",
  "At the Hearing Officer meeting, bring your driver's license and any evidence supporting your case. This is an informal settlement conference, not a formal evidentiary trial (\"It is not possible to have a trial with evidence at this meeting because a trial can only take place in court with a judge\") — the Hearing Officer can offer a reduced fine, a payment plan, community work service, or a continuance for dismissal; roughly 85-90% of people who meet with a Hearing Officer settle without going to court.",
  "If you're not satisfied with the Hearing Officer's resolution, you may ask that the case be set for an in-court hearing before a District Court judge — unless you've already waived that right under Minn. Stat. § 169.91, subd. 3 by not responding/appearing within 30 days (most parking violations are petty misdemeanors, and a missed 30-day window is treated as a guilty plea).",
  "If you miss a scheduled Hearing Officer appointment, call the Court Payment Center before the appointment time to request a continuance; otherwise you must appear as a walk-in at the downtown Minneapolis location, and the citation remains \"open\" (continuing to accrue late-fee and license-suspension risk) until a hearing is held.",
];

const ifThisDoesntWork =
  "If you're not satisfied with the outcome of your Hearing Officer conference, you may ask that the case be set for an in-court hearing before a Hennepin County District Court judge — unless you've already waived that right under Minn. Stat. § 169.91, subd. 3 by not responding or appearing within 30 days of the citation's entry into the Minnesota Court Information System (MNCIS). Most parking violations are petty misdemeanors, so a missed 30-day window is treated as a guilty plea and a waiver of the right to a court hearing.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "minneapolis",
  title: "Fight a broken pay station parking ticket in Minneapolis",
  metaDescription:
    "Free defense-statement letter for a broken pay-station parking ticket in Minneapolis. For your Hennepin County Hearing Officer conference — ready to use.",
  whenItApplies:
    "You were ticketed for a meter/pay-station violation, but the electronic pay station at your space was out of order or malfunctioning at the time.",
  body: `To: Hennepin County Violations Bureau & Hearing Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written statement in connection with my Hearing Officer conference on this citation and respectfully request that it be dismissed for the reasons below.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the electronic pay station serving that space, but the pay station was out of order: [DESCRIBE — e.g., blank screen, rejected my payment, displayed an error message]. [IF YOU PAID AT ANOTHER STATION: Because the pay station at my space did not work, I paid at the next-nearest pay station using my own space number, as the City's own guidance directs.] I reported the malfunctioning pay station and this citation number to the Traffic Violations Bureau at (612) 348-6000 on [DATE REPORTED].

Consistent with the City of Minneapolis's own published guidance for a defective or malfunctioning pay station — and because Chapter 478, Article II (Parking Meters) of the Minneapolis Code of Ordinances contains no separate codified defective-meter provision, this malfunction is resolved administratively by the Traffic Violations Bureau rather than under a specific code section — I ask that this citation be canceled or dismissed on the basis that the pay station serving my space was not working at the time.

Attached: [date- and time-stamped photo(s) of the malfunctioning pay station and any error message it displayed, the reference number for any report I filed, and (if applicable) my receipt from the next-nearest pay station].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A date- and time-stamped photo of the malfunctioning pay station, including any error message it displayed",
    "The citation number and the specific pay-station/space number, ready to report to the Traffic Violations Bureau",
    "Any 311 report or online meter-problem report you filed, and its reference number if one was given",
  ],
  cityNotes:
    "Minneapolis's own guidance tells drivers who find a pay station out of order to pay at the next-nearest pay station using their own space number. If you're ticketed anyway, report the meter and citation numbers directly to the Traffic Violations Bureau at (612) 348-6000; if Hennepin County confirms the meter was defective, the citation is canceled outright with no hearing needed. If it is not confirmed defective, you must either pay the fine or request a Hearing Officer appointment to contest it. Pay-station operation is governed by Article II (Parking Meters) of Chapter 478 in Title 18 (Traffic Code) of the Minneapolis Code of Ordinances (§§ 478.300-478.530) — but Article II contains no separate codified 'defective/malfunctioning meter' provision; the broken-meter path is a purely administrative one run by the Traffic Violations Bureau, not a specific code-based defense.",
  codeCite: {
    label: "Minneapolis Code of Ordinances Ch. 478, Art. II — Parking Meters (Title 18); no dedicated defective-meter subsection exists — see cityNotes",
    citation: "Minneapolis Code of Ordinances Ch. 478, Art. II (Title 18)",
    url: "https://library.municode.com/mn/minneapolis/codes/code_of_ordinances/332839?nodeId=MICOOR_TIT18TRCO_CH478PASTST_ARTIIPAME",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Hennepin County Violations Bureau & Hearing Office — Contesting and Other Options (mncourts.gov)",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/contesting-and-other-options",
    },
    {
      label: "Minnesota Judicial Branch — Pay Fines FAQs (Parking Meters section)",
      url: "https://mncourts.gov/pay-a-fine/faqs",
    },
    {
      label: "City of Minneapolis — Parking Meters",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/parking-meters/",
    },
  ],
  faqs: [
    {
      question: "Do I need a hearing if my meter was broken?",
      answer:
        "Not necessarily. Report the meter and citation numbers directly to the Traffic Violations Bureau at (612) 348-6000 first — if Hennepin County confirms the pay station was defective, the citation is canceled outright with no Hearing Officer appointment needed.",
    },
    {
      question: "What if the Traffic Violations Bureau doesn't confirm the meter was broken?",
      answer:
        "Then you'll need to either pay the fine or request a Hearing Officer appointment to contest it, raising the same evidence of the malfunction at your conference.",
    },
    {
      question: "Is there a specific code section for a broken meter in Minneapolis?",
      answer:
        "No. Article II (Parking Meters) of Chapter 478 of the Minneapolis Code of Ordinances has no dedicated defective-meter subsection. The broken-meter path is handled administratively by the Traffic Violations Bureau, not decided under a specific ordinance section.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "minneapolis",
  title: "Fight a Minneapolis parking ticket when you already paid",
  metaDescription:
    "Free defense-statement letter for a Minneapolis parking ticket issued despite valid pay-station payment. Hennepin County Hearing Officer-ready template.",
  whenItApplies:
    "You paid for your space at an electronic parking meter/pay station covering the cited date, time, and space number, but were ticketed anyway.",
  body: `To: Hennepin County Violations Bureau & Hearing Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written statement in connection with my Hearing Officer conference on this citation and respectfully request that it be dismissed for the reasons below.

On [DATE], I paid for parking at [LOCATION] at the electronic pay station serving that space. My receipt shows payment at [PAYMENT TIME] for space number [SPACE NUMBER], covering the date, time, and space cited on this citation.

I made proper payment for this parking space as required under Chapter 478, Article II (Parking Meters) of the Minneapolis Code of Ordinances, and I ask that this citation be dismissed on that basis. I have also submitted a copy of this receipt and the citation to the Violations Bureau for review under its separate valid-payment review process.

Attached: [my payment receipt showing the correct space number, date, and time, and a copy of the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Your payment receipt (text, email, or printed) showing the correct space number, date, and time",
    "A copy or photo of the citation itself",
    "Note: if you accidentally paid for the wrong space number, this is not treated as a valid-payment dispute — you'll need to pay the fine or request a Hearing Officer instead",
  ],
  cityNotes:
    "Submit a copy of your receipt and the citation to the Hennepin Violations Bureau by email (4thcitations@courts.state.mn.us), fax ((612) 348-6268), or mail (Violations Bureau, 300 S. 6th St., Hennepin Co. Govt. Ctr., Minneapolis, MN 55487-0014); allow about two business days for review. If the receipt matches the citation's space number, date, and time, the charge may be dismissed without a Hearing Officer meeting. This is a distinct, faster track from the broken-meter report and does not require calling the Traffic Violations Bureau first.",
  codeCite: {
    label: "Minneapolis Code of Ordinances Ch. 478, Art. II — Parking Meters (Title 18, Traffic Code)",
    citation: "Minneapolis Code of Ordinances Ch. 478, Art. II (Title 18)",
    url: "https://library.municode.com/mn/minneapolis/codes/code_of_ordinances/332839?nodeId=MICOOR_TIT18TRCO_CH478PASTST_ARTIIPAME",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Minnesota Judicial Branch — Pay Fines FAQs (\"I paid an electronic parking meter... and still received a citation\")",
      url: "https://mncourts.gov/pay-a-fine/faqs",
    },
    {
      label: "Hennepin County Violations Bureau & Hearing Office — Pay a Ticket or Fine",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/pay-a-ticket-or-fine",
    },
  ],
  faqs: [
    {
      question: "Do I need to attend a Hearing Officer conference if I already paid?",
      answer:
        "Not necessarily. Submit your receipt and the citation to the Violations Bureau by email, fax, or mail first — if the receipt matches the citation's space number, date, and time, the charge may be dismissed within about two business days without a hearing.",
    },
    {
      question: "What if I paid for the wrong space number by mistake?",
      answer:
        "That's not treated as a valid-payment dispute under this track. You'll need to either pay the fine or request a Hearing Officer appointment to explain the circumstances.",
    },
    {
      question: "How fast is the receipt-review process?",
      answer:
        "The Violations Bureau's guidance says to allow about two business days for review once you've submitted your receipt and the citation by email, fax, or mail.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "minneapolis",
  title: "Fight a Minneapolis parking ticket for a sold or stolen vehicle",
  metaDescription:
    "Free defense-statement letter for a Minneapolis parking ticket on a sold or stolen vehicle. Cites Minn. Stat. § 169.34 — Hearing Officer-ready template.",
  whenItApplies:
    "You were not the owner or lessee of the cited vehicle at the time of the violation — most commonly because you had already sold or transferred the vehicle before the citation date, or because the vehicle was stolen at the time.",
  body: `To: Hennepin County Violations Bureau & Hearing Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written statement in connection with my Hearing Officer conference on this citation and respectfully request that it be dismissed for the reasons below.

I was not the owner or lessee of the vehicle bearing plate [PLATE] on [DATE], the date of the violation cited above. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) Sold vehicle — I sold this vehicle on [SALE DATE], before this citation was issued, as shown by the attached title-transfer paperwork or bill of sale. / (b) Stolen vehicle — this vehicle was stolen before the violation date, as shown by the attached police report filed on [REPORT DATE].]

Under Minn. Stat. § 169.34, subd. 2, liability for a stopping, standing, or parking violation attaches to the vehicle's registered owner or, for a leased vehicle, the lessee — but the owner or lessee may not be fined where the vehicle was stolen at the time of the violation, or where another person is convicted of or pleads guilty to the violation instead. I ask that this citation be dismissed on that basis, and that my name be removed from it.

Attached: [title-transfer paperwork or bill of sale showing the sale date, or the police report of the theft; any confirmation from MN Driver & Vehicle Services of the title transfer, if available].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "For a sold vehicle: title-transfer paperwork or a bill of sale showing the transfer date, and the buyer's name/address if available",
    "For a stolen vehicle: a police report of the theft filed before the violation date",
    "Any confirmation from MN Driver & Vehicle Services (DVS) of the title transfer, if available",
    "The citation number",
  ],
  cityNotes:
    "Under Minn. Stat. § 169.34, subd. 2, liability for a stopping/standing/parking violation attaches to the vehicle's registered owner or, for a leased vehicle, the lessee — but the owner/lessee may not be fined if the vehicle was stolen at the time of the violation, or if another person is convicted of or pleads guilty to the violation instead. For a vehicle you'd already sold, the Hennepin Violations Bureau's guidance is to get the title transferred at DVS and bring/send that paperwork to the court so your name can be removed from the citation once the sale date is confirmed — you should still act within the 30-day window while sorting out the paperwork rather than let the citation go delinquent.",
  codeCite: {
    label: "Minn. Stat. § 169.34, subd. 2 — Violation; penalty for owner or lessee",
    citation: "Minnesota Statutes § 169.34, subdivision 2",
    url: "https://www.revisor.mn.gov/statutes/cite/169.34",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Minnesota Statutes § 169.34 — Prohibitions; Stopping, Parking",
      url: "https://www.revisor.mn.gov/statutes/cite/169.34",
    },
    {
      label: "Hennepin County Violations Bureau & Hearing Office — Contesting and Other Options (mncourts.gov)",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/contesting-and-other-options",
    },
  ],
  faqs: [
    {
      question: "I sold the car but never told the court — does that matter?",
      answer:
        "Yes. Get the title transferred at MN Driver & Vehicle Services and bring or send that paperwork to the court so your name can be removed from the citation once the sale date is confirmed. Act within the 30-day window while you sort out the paperwork rather than let the citation go delinquent.",
    },
    {
      question: "Is the registered-owner rule automatic — can I ever get out of it?",
      answer:
        "Minn. Stat. § 169.34, subd. 2 attaches liability to the registered owner or lessee, but you may not be fined if the vehicle was stolen at the time of the violation, or if another person is convicted of or pleads guilty to the violation instead.",
    },
    {
      question: "What if my vehicle was stolen when the citation was issued?",
      answer:
        "Attach a police report of the theft filed before the violation date. Minn. Stat. § 169.34, subd. 2 specifically exempts an owner or lessee from being fined when the vehicle was stolen at the time.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "minneapolis",
  title: "Fight a missing or obscured sign parking ticket in Minneapolis",
  metaDescription:
    "Free defense-statement letter for a Minneapolis parking ticket with a missing or obscured sign. Cites Minn. Stat. § 169.34 — Hearing Officer-ready template.",
  whenItApplies:
    "You were ticketed for violating a posted restriction — a temporary no-parking zone, a bike-lane or restricted-lane sign, or another sign-dependent limit — but the sign was missing, obscured, or not properly posted at the time.",
  body: `To: Hennepin County Violations Bureau & Hearing Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am submitting this written statement in connection with my Hearing Officer conference on this citation and respectfully request that it be dismissed for the reasons below.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign governing the restriction I am cited for was [DESCRIBE THE DEFECT — missing entirely, knocked down, obscured by foliage/a parked vehicle/construction equipment, or illegible due to damage or fading]. I am not disputing that I failed to notice a sign — I am asserting that no properly posted, legible sign existed at that location to establish the restriction I am accused of violating.

Under Minn. Stat. § 169.34, subd. 1(a), several stopping, standing, and parking prohibitions apply only where official signs are posted — for example, a bike lane is off-limits to parking "except when posted signs permit parking," and one catch-all prohibition applies only "at any place where official signs prohibit stopping." Because the controlling sign was not properly posted or legible at the time and place cited, I ask that this citation be dismissed on that basis.

Attached: [date- and time-stamped photos of the block showing the missing, knocked-down, or obscured sign; photos of the nearest cross-street signs to confirm my exact location; and, for a temporary restriction, any evidence the posted notice was not in place].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photos of the block where you were ticketed, showing the missing/obscured sign or the absence of any sign",
    "Photos of the nearest cross-street signs to confirm your exact location",
    "For a temporary restriction (construction, street sweeping, special event): any evidence the posted notice wasn't in place — Minneapolis requires temporary no-parking signs for these situations",
    "The citation number",
  ],
  cityNotes:
    "Several of the standard stopping/standing/parking prohibitions in Minn. Stat. § 169.34, subd. 1 are explicitly signage-dependent — for example, a bike lane is off-limits to parking \"except when posted signs permit parking,\" and one catch-all prohibition applies only \"at any place where official signs prohibit stopping.\" The City's own guidance confirms enforcement is sign-driven: temporary no-parking signs (construction, street cleaning, special events) that don't list specific times \"are in effect 24 hours a day,\" implying the posted sign is what creates the restriction. There is no separate written or online form for a missing/obscured-sign claim in Minneapolis — like other \"not guilty\" contests, it's raised directly with a Hearing Officer at the appointment.",
  codeCite: {
    label: "Minn. Stat. § 169.34, subd. 1(a) — Prohibitions; Stopping, Parking (signage-dependent restrictions, e.g. bike lanes and \"official signs prohibit stopping\")",
    citation: "Minnesota Statutes § 169.34, subdivision 1(a)",
    url: "https://www.revisor.mn.gov/statutes/cite/169.34",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Minnesota Statutes § 169.34 — Prohibitions; Stopping, Parking",
      url: "https://www.revisor.mn.gov/statutes/cite/169.34",
    },
    {
      label: "City of Minneapolis — City Parking Signs",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/street-parking-rules/parking-signs/",
    },
    {
      label: "City of Minneapolis — No Parking",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/street-parking-rules/no-parking/",
    },
  ],
  faqs: [
    {
      question: "Is \"I didn't see the sign\" enough to fight a Minneapolis parking ticket?",
      answer:
        "Not on its own. The point of this defense isn't that you missed the sign — it's that no properly posted, legible sign existed to establish the restriction in the first place. Photograph the actual defect: missing, knocked down, obscured, or illegible.",
    },
    {
      question: "Is there a form for a missing-sign dispute in Minneapolis?",
      answer:
        "No. There is no separate written or online form for this claim — like other contested tickets, it's raised directly with a Hearing Officer at your conference appointment.",
    },
    {
      question: "What about temporary signs for construction or street sweeping?",
      answer:
        "The City's guidance is that temporary no-parking signs (for construction, street cleaning, or special events) that don't list specific times are in effect 24 hours a day, which shows enforcement is sign-driven. If the temporary notice wasn't actually posted, gather evidence of that for your conference.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const minneapolisCity: ParkingCity = {
  slug: "minneapolis",
  city: "Minneapolis",
  state: "MN",
  agency:
    "City of Minneapolis Traffic Control (Regulatory Services) issues parking citations, but standard \"payable\" parking tickets are processed and adjudicated by the Hennepin County Violations Bureau & Hearing Office, a unit of Hennepin County District Court (Fourth Judicial District) — not by a City of Minneapolis administrative tribunal. The City's own Traffic Control page states plainly: \"you pay the parking ticket fee to the Hennepin County Violations Bureau,\" and links directly to the Hennepin County Violations Bureau & Hearing Office. Hearing Officers (court staff, not judges) hold informal settlement conferences about a ticket; if unresolved, and unless the right has been waived by not responding within 30 days (most parking tickets are petty misdemeanors under Minn. Stat. § 169.91, subd. 3), a person may request an in-court hearing before a District Court judge. NOTE: a small minority of city-issued parking-related notices are instead \"administrative\" citations settled directly with the City rather than the court — per the court's own guidance, check the ticket itself: \"If the words 'District Court' or 'Violations Bureau' do NOT appear on the ticket, it is probably an 'administrative' ticket\" handled by City of Minneapolis Administrative Hearings instead.",
  submitOnlineUrl: "https://webpay.courts.state.mn.us/CourtWebPay/default.aspx",
  submitMailAddress:
    "Payment only (do not mail cash): Minnesota Court Payment Center, P.O. Box 898, Willmar, MN 56201, payable to \"District Court Administration.\" Meter-defect / payment-receipt dispute evidence: Violations Bureau, 300 S. 6th St., Hennepin Co. Govt. Ctr., Minneapolis, MN 55487-0014 (or email 4thcitations@courts.state.mn.us, or fax (612) 348-6268).",
  submitInPerson:
    "Hearing & Fines Management Office / Violations Bureau, Hennepin County Government Center, 300 South 6th Street, Skyway Level (C-Tower, past weapons screening), Minneapolis, MN 55487. Walk-in Hearing Officer meetings are first-come, first-served, Monday-Friday 8:00 a.m.-4:30 p.m. (last appointment 4:15 p.m.); phone (612) 348-6000. Suburban Hennepin County District Court locations (Brookdale, Ridgedale) can also be used to attend a video hearing on-site, though Hearing Officers no longer meet in person at those locations.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "Both the Hennepin County Violations Bureau's own \"Contesting and Other Options\" page and the statewide Minnesota Judicial Branch \"Pay Fines FAQs\" page state the same 30-day rule: \"You have 30 days to respond to a citation from the date it was entered into the Minnesota Court Information System (MNCIS).\" This clock starts at MNCIS entry, not at issuance — filing can take up to about 7 business days after the violation date, per the same FAQ (\"the amount due for your citation may be found... after law enforcement files the citation with the court and it is entered into the Minnesota Court Information System (MNCIS), a process which could take up to seven (7) days\"). Separately, because most parking citations are petty misdemeanors, Minn. Stat. § 169.91, subd. 3 requires that a notice to appear for a petty misdemeanor state that a failure to appear is treated as a guilty plea and a waiver of the right to a court hearing (unless the failure was due to circumstances beyond the person's control); the Violations Bureau's own page cites this same statute for its statement that \"this right to a court hearing is waived if the defendant does not appear within 30 days.\" Sources: https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/contesting-and-other-options; https://mncourts.gov/pay-a-fine/faqs; https://www.revisor.mn.gov/statutes/cite/169.91.",
  penaltyNote:
    "Failing to pay, contest, or appear within 30 days of MNCIS entry triggers escalating penalties, per the Hennepin Violations Bureau's own FAQ and the statewide Pay Fines FAQ: a $5 late fee is added after 30 days, and (per the Hennepin-specific page) an additional $25 \"delinquency fee\" after a further 21 days, or (per the statewide FAQ, worded slightly differently) a second $25 penalty after a further 30 days — check your notice for the exact date. Consequences of nonpayment can include driver's license suspension by MN Driver & Vehicle Services, referral of the debt to a collection agency, and, specific to Hennepin County, impoundment of the vehicle once it has 5 or more unpaid traffic or parking citations. Every parking citation carries a $12 state surcharge under Minn. Stat. § 357.021, subd. 6 (plus a $3 Hennepin County law library fee), added on top of the base fine. Paying the fine (including a partial payment) is treated as a guilty plea, but parking citations specifically are never certified to the MN driving record. If a case is later scheduled for a mandatory in-court hearing and the person fails to appear, a bench warrant can be issued for arrest. Sources: https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/contesting-and-other-options; https://mncourts.gov/pay-a-fine/faqs; https://www.revisor.mn.gov/statutes/cite/357.021.",
  municipalCodeRefs: [
    {
      label: "Minn. Stat. § 169.34 — Prohibitions; Stopping, Parking (statewide stopping/standing/parking rules, signage-dependent restrictions, owner/lessee liability)",
      citation: "Minnesota Statutes § 169.34",
      url: "https://www.revisor.mn.gov/statutes/cite/169.34",
    },
    {
      label: "Minn. Stat. § 169.91, subd. 3 — Arrest; Notice to Appear (petty-misdemeanor 30-day appearance/waiver rule)",
      citation: "Minnesota Statutes § 169.91, subdivision 3",
      url: "https://www.revisor.mn.gov/statutes/cite/169.91",
    },
    {
      label: "Minn. Stat. § 357.021, subd. 6 — Surcharges ($12 parking surcharge; $3 county law library fee)",
      citation: "Minnesota Statutes § 357.021, subdivision 6",
      url: "https://www.revisor.mn.gov/statutes/cite/357.021",
    },
    {
      label: "Minneapolis Code of Ordinances, Title 18 (Traffic Code), Ch. 478 — Parking; Streets, Art. II — Parking Meters",
      citation: "Minneapolis Code of Ordinances § 478 et seq. (Title 18, Ch. 478, Art. II)",
      url: "https://library.municode.com/mn/minneapolis/codes/code_of_ordinances/332839?nodeId=MICOOR_TIT18TRCO_CH478PASTST_ARTIIPAME",
    },
    {
      label: "Minneapolis Code of Ordinances § 478.400 — Charge declared fee (Title 18, Ch. 478, Art. II; Art. II contains no separate codified 'defective/malfunctioning meter' provision — a broken pay station is reported to, and resolved administratively by, the Hennepin County Traffic Violations Bureau, not by a specific code section)",
      citation: "Minneapolis Code of Ordinances § 478.400",
      url: "https://library.municode.com/mn/minneapolis/codes/code_of_ordinances/332839?nodeId=MICOOR_TIT18TRCO_CH478PASTST_ARTIIPAME_478.400CHDEFE",
    },
  ],
  recognizedDefenses: ["broken-meter", "valid-payment", "not-my-vehicle", "obscured-signage"],
  defenses: [broken_meter, valid_payment, not_my_vehicle, obscured_signage],
  faqs: [
    {
      question: "How long do I have to dispute a Minneapolis parking ticket?",
      answer:
        "You have 30 days to respond, but that clock starts when the citation is entered into the Minnesota Court Information System (MNCIS), not the date the ticket was issued — filing can take up to about 7 business days after the violation date.",
    },
    {
      question: "Who decides Minneapolis parking ticket disputes?",
      answer:
        "Not the City of Minneapolis. Standard payable parking tickets are processed and adjudicated by the Hennepin County Violations Bureau & Hearing Office, a unit of Hennepin County District Court. A Hearing Officer (court staff, not a judge) holds an informal settlement conference; only if unresolved can you request an in-court hearing before a District Court judge.",
    },
    {
      question: "Is a Hearing Officer conference a real trial?",
      answer:
        "No. It's an informal settlement conference — the Violations Bureau's own guidance says \"it is not possible to have a trial with evidence at this meeting because a trial can only take place in court with a judge.\" Roughly 85-90% of people who meet with a Hearing Officer settle without going to court.",
    },
    {
      question: "What happens if I ignore a Minneapolis parking ticket?",
      answer:
        "A $5 late fee is added after 30 days, plus an additional $25 delinquency fee after a further 21-30 days depending on the notice. Consequences of nonpayment can include driver's license suspension, referral to a collection agency, and — specific to Hennepin County — vehicle impoundment once you have 5 or more unpaid traffic or parking citations.",
    },
    {
      question: "How do I know if my ticket is a 'District Court' ticket or a City administrative ticket?",
      answer:
        "Check the ticket itself. Per the court's own guidance, if the words 'District Court' or 'Violations Bureau' do NOT appear on the ticket, it is probably a separate 'administrative' citation handled by City of Minneapolis Administrative Hearings instead of the Hennepin County process described here.",
    },
  ],
  sources: [
    {
      label: "Hennepin County Violations Bureau & Hearing Office (mncourts.gov)",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice",
    },
    {
      label: "Hennepin County Violations Bureau & Hearing Office — Contesting and Other Options",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/contesting-and-other-options",
    },
    {
      label: "Hennepin County Violations Bureau & Hearing Office — Pay a Ticket or Fine",
      url: "https://mncourts.gov/find-courts/hennepin/hennepinviolationsbureauandhearingoffice/pay-a-ticket-or-fine",
    },
    {
      label: "Minnesota Judicial Branch — Pay Fines FAQs",
      url: "https://mncourts.gov/pay-a-fine/faqs",
    },
    {
      label: "Minnesota Court Web Payment System",
      url: "https://webpay.courts.state.mn.us/CourtWebPay/default.aspx",
    },
    {
      label: "City of Minneapolis — Traffic Control",
      url: "https://www.minneapolismn.gov/government/departments/reg-services/traffic-control/",
    },
    {
      label: "City of Minneapolis — Parking Meters",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/parking-meters/",
    },
    {
      label: "City of Minneapolis — City Parking Signs",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/street-parking-rules/parking-signs/",
    },
    {
      label: "City of Minneapolis — No Parking",
      url: "https://www.minneapolismn.gov/getting-around/parking-driving/street-parking-meters/street-parking-rules/no-parking/",
    },
    {
      label: "Minnesota Statutes § 169.34 — Prohibitions; Stopping, Parking",
      url: "https://www.revisor.mn.gov/statutes/cite/169.34",
    },
    {
      label: "Minnesota Statutes § 169.91 — Arrest",
      url: "https://www.revisor.mn.gov/statutes/cite/169.91",
    },
    {
      label: "Minnesota Statutes § 357.021 — Surcharges",
      url: "https://www.revisor.mn.gov/statutes/cite/357.021",
    },
    {
      label: "Minneapolis Code of Ordinances, Title 18, Ch. 478, Art. II — Parking Meters (Municode)",
      url: "https://library.municode.com/mn/minneapolis/codes/code_of_ordinances/332839?nodeId=MICOOR_TIT18TRCO_CH478PASTST_ARTIIPAME",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
