import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/denver.json (verifiedAt 2026-07-20).
// IMPORTANT: Denver parking-ticket disputes are decided at a Final Hearing before a
// Denver County Court judicial officer — NOT an administrative tribunal. Denver's
// dedicated Parking Magistrate's Office has closed; Final Hearings now run directly
// through Denver County Court. There is currently NO online or mail option to request
// or conduct a dispute — scheduling a Final Hearing requires an in-person visit to
// 1437 Bannock St., Room 140, and the City bears the burden of proving the citation's
// validity at the hearing itself. Every defense statement below is framed as the
// written statement and evidence the ticket-holder will present in person at that
// Final Hearing, not as a mailed or online submission.

const cityHowToContest: string[] = [
  "Note your citation's issue date and case/summons number, and figure out which window you're in: 0–20 calendar days old (eligible for a Final Hearing), 21–120 days old (Final Hearing no longer available, but you can file a general motion with Denver County Court), or over 120 days old (a default judgment has already been entered against you).",
  "If your citation is 20 calendar days old or less, go in person to Denver County Court, 1437 Bannock St., Room 140, Denver, CO 80202 (Monday–Friday, 8:00 a.m.–4:00 p.m.) to schedule a Final Hearing. There is currently no online or mail option to request the hearing — you must appear in person to schedule it.",
  "Gather your evidence before the hearing date: photos, receipts, repair/maintenance records, registration or sale documents, or anything else supporting your specific defense, since Denver's Final Hearing does not accept new evidence submitted only by mail or online in place of your appearance.",
  "Attend the scheduled Final Hearing before a Denver County Court judicial officer. The City has the burden to prove the validity of the citation, and you may present your defense and evidence at that time.",
  "If the judicial officer finds the citation valid, or if you fail to appear, a judgment enters against you for the fine amount plus $26.00 in court costs, and that amount is generally due immediately following the hearing.",
  "If your citation is between 21 and 120 days old, you're no longer eligible for a Final Hearing, but you may file a general motion with Denver County Court asking for judicial review of the citation.",
  "If your citation is over 120 days old, a default judgment has already been entered against you for the fine plus any late fees; you may file a motion with Denver County Court asking the judge to set aside that default judgment, explaining your good reason for not paying or disputing within the 120-day window.",
  "Call the Parking Violations Bureau at 1-866-280-9988 (regular business hours) with questions about a specific citation before your hearing date.",
];

const ifThisDoesntWork =
  "If the judicial officer finds the citation valid, or if you fail to appear, a judgment enters against you for the fine amount plus $26.00 in court costs, generally due immediately. If your citation is between 21 and 120 days old, you're no longer eligible for a Final Hearing, but you may file a general motion with Denver County Court asking for judicial review of the citation. If your citation is over 120 days old, a default judgment has already been entered against you for the fine plus any late fees; you may file a motion with Denver County Court asking the judge to set aside that default judgment for good cause.";

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "denver",
  title: "Fight a broken-meter parking ticket in Denver",
  metaDescription:
    "Free Final Hearing statement for a broken-meter parking ticket in Denver. Cites D.R.M.C. § 54-514(a) — the City bears the burden of proof.",
  whenItApplies:
    "You were cited for a meter violation under D.R.M.C. § 54-514(a) (failure to deposit the required payment), but the specific parking meter or pay station you used was inoperable, malfunctioning, or otherwise would not accept payment, so you could not comply despite trying.",
  body: `Statement I will present at my Final Hearing
Denver County Court — Final Hearing on a Parking Citation
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I dispute this citation and ask the judicial officer to find it invalid.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter or pay station serving that spot, but it was broken: [DESCRIBE — e.g., blank/error screen, jammed coin slot, non-functioning card reader, printed no receipt]. I made a good-faith effort to pay for parking through no fault of my own, and the meter itself prevented me from complying.

Under D.R.M.C. § 54-514(a), it is unlawful to use a metered space without depositing the required payment — but the City bears the burden of proving the validity of this citation at this Final Hearing. Because the meter I used was not functioning, the City cannot show I failed to comply with a requirement I was actually able to meet. I ask that this citation be found invalid on that basis.

Attached: [time-stamped photo(s) of the malfunctioning meter, any 311 report of the malfunction, a record of any failed payment attempt, and a photo of the meter number/location matching the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the malfunctioning meter or pay station (blank/error screen, jammed slot, non-functioning card reader, etc.)",
    "A 311 report of the broken meter, if you filed one (Denver's 311 line takes meter-malfunction reports 24/7)",
    "Any record of a failed payment attempt (e.g., a declined-transaction notification from a payment app)",
    "Photos showing the meter number/location matching the citation",
  ],
  cityNotes:
    "Denver does not publish a separate, itemized list of statutory defenses the way some other cities do (e.g., NYC or DC). Instead, every disputed citation goes to a single Final Hearing where, per Denver County Court, 'the city will be required to prove the validity of the citation' and 'you may present your defense.' A malfunctioning meter is a factual defense to whether the elements of § 54-514(a) — failing to deposit the required payment — were actually met; it is evaluated case-by-case by the judicial officer rather than automatically dismissed, so document the malfunction as thoroughly as possible.",
  codeCite: {
    label: "D.R.M.C. § 54-514(a) — Meter violation (deposit of required payment)",
    citation: "D.R.M.C. § 54-514(a)",
    url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City and County of Denver — Parking Ordinances (§ 54-514 meter-payment text)",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "Denver County Court — Parking (Final Hearing process; city bears burden of proof)",
      url: "https://www.denvercountycourt.org/parking/",
    },
  ],
  faqs: [
    {
      question: "Can I dispute this by mail or online instead of going to the hearing?",
      answer:
        "No. Denver's prior online dispute system has been discontinued and there is currently no mail-in option for disputing a citation. You must appear in person at Denver County Court, 1437 Bannock St., Room 140, to schedule a Final Hearing, and the hearing itself is where you present this statement and your evidence.",
    },
    {
      question: "Do I have to prove the meter was broken, or does the City have to prove I didn't pay?",
      answer:
        "The City bears the burden of proving the validity of the citation at the Final Hearing. Your evidence of a malfunctioning meter undercuts the City's ability to show you failed to deposit required payment, but the more documentation you bring (photos, a 311 report, a failed-payment record), the stronger your position.",
    },
    {
      question: "How much time do I have to schedule this hearing?",
      answer:
        "You must be able to schedule a Final Hearing within 20 calendar days of the citation's issue date. After that, a Final Hearing is no longer available, though you can still file a general motion with Denver County Court through day 120.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "denver",
  title: "Fight a missing or obscured sign parking ticket in Denver",
  metaDescription:
    "Free Final Hearing statement for a Denver parking ticket with a missing or obscured sign. Cites D.R.M.C. § 54-482(a) — the City bears the burden of proof.",
  whenItApplies:
    "You were cited under D.R.M.C. § 54-482 for violating a posted parking restriction (e.g., no-parking, loading-only, or another posted prohibition), but the sign governing that restriction was missing, obscured, or otherwise not legibly posted where you parked.",
  body: `Statement I will present at my Final Hearing
Denver County Court — Final Hearing on a Parking Citation
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I dispute this citation and ask the judicial officer to find it invalid.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign governing the restriction I am accused of violating was [DESCRIBE THE DEFECT — missing entirely, obscured by a tree/vehicle/sign, damaged or faded to illegibility, or facing away from the parking spot]. I am not disputing that I simply failed to notice a properly posted sign — I am asserting that the sign itself was not legibly posted at the location.

Under D.R.M.C. § 54-482(a), it is unlawful to park in violation of the provisions on an authorized posted sign — but the City bears the burden of proving the validity of this citation at this Final Hearing. Because the sign was not properly and legibly posted where I parked, the City cannot show I violated a restriction I had a legible opportunity to see and obey. I ask that this citation be found invalid on that basis.

Attached: [time- and date-stamped photos of the parking spot and sign location showing the defect, wide photos of the full block face, photos of nearby street-name signs confirming the location, and any 311 report filed about the missing/damaged sign].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Time- and date-stamped photos of the parking spot and sign location, showing the sign missing, obscured, damaged, or facing away from view",
    "Wide photos of the full block face showing no legible restriction sign",
    "Photos of nearby street-name signs or landmarks to confirm the exact location matches the citation",
    "A 311 report about the missing/damaged sign, if filed",
  ],
  cityNotes:
    "As with the broken-meter defense, Denver does not publish a codified 'missing sign' defense provision. § 54-482(a) makes it unlawful to park 'in violation of, or contrary to, the provisions contained on' an authorized posted sign — if the sign itself was not properly posted or legible, that undercuts the City's ability to prove the elements of the violation at the Final Hearing, where 'the city will be required to prove the validity of the citation.' Bring clear, well-documented photos; a bare claim that you didn't notice a sign that was actually posted and legible is unlikely to succeed.",
  codeCite: {
    label: "D.R.M.C. § 54-482(a) — Compliance with authorized posted parking signs",
    citation: "D.R.M.C. § 54-482(a)",
    url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City and County of Denver — Parking Ordinances (§ 54-482 posted-sign compliance text)",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "Denver County Court — Parking (Final Hearing process; city bears burden of proof)",
      url: "https://www.denvercountycourt.org/parking/",
    },
  ],
  faqs: [
    {
      question: "Does \"I didn't see the sign\" count as a defense in Denver?",
      answer:
        "Not by itself. The defense rests on the sign itself having been missing, obscured, damaged, or otherwise not legibly posted — not on you simply overlooking a sign that was properly there. Bring photographic proof of the defect, not just a claim you didn't notice it.",
    },
    {
      question: "What photos actually help at the Final Hearing?",
      answer:
        "Time- and date-stamped photos of the exact sign location showing the defect, a wider shot of the full block face, and photos of nearby street-name signs so the judicial officer can confirm you were parked exactly where the citation says.",
    },
    {
      question: "Can I submit these photos online or by mail instead of appearing?",
      answer:
        "No. Denver has no online or mail dispute option — you must appear in person at the scheduled Final Hearing to present this statement and your evidence directly to the judicial officer.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "denver",
  title: "Fight a Denver parking ticket when you already paid",
  metaDescription:
    "Free Final Hearing statement for a Denver parking ticket issued despite valid payment. Cites D.R.M.C. § 54-514(a) — the City bears the burden of proof.",
  whenItApplies:
    "You were cited for a meter violation under D.R.M.C. § 54-514(a) (or improper use of a metered space under § 54-513), but you actually paid for parking at that meter or space for the cited time, and can show a receipt or app record proving it.",
  body: `Statement I will present at my Final Hearing
Denver County Court — Final Hearing on a Parking Citation
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I dispute this citation and ask the judicial officer to find it invalid.

On [DATE], I paid for parking at [LOCATION] through [PAYMENT METHOD — meter coin/card, mobile parking-payment app, or other]. My receipt shows payment covering [PAYMENT PERIOD START]–[PAYMENT PERIOD END], which includes [TIME], the time this citation states the violation was observed. I had valid, paid-for parking at the location and time cited.

Under D.R.M.C. § 54-514(a), it is unlawful to use a metered space without depositing the required payment — but the City bears the burden of proving the validity of this citation at this Final Hearing. Because I have proof I actually paid for the cited time and location, the City cannot show that element of the violation was met. I ask that this citation be found invalid on that basis.

Attached: [payment receipt (meter printout, app screenshot, or emailed receipt) showing the meter/zone number, date, and time of purchase; photos of the meter/pay-station number matched against the receipt; and app transaction history if paid via a mobile app].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A valid payment receipt (meter printout, app screenshot, or emailed receipt) showing the meter/zone number, date, and time of purchase covering the cited time",
    "Photos of the meter/pay-station number at your parking spot, matched against the receipt",
    "Your app transaction history, if you paid via a mobile parking-payment app",
  ],
  cityNotes:
    "D.R.M.C. § 54-514(a) makes it unlawful to use a metered space 'without depositing... the number of coins required' or completing an equivalent approved payment for the time used. If you have proof you actually paid for the cited time and location, that is a direct, factual defense to whether that element of the violation was met — present it at the Final Hearing, where the City otherwise bears the burden of proving the citation's validity.",
  codeCite: {
    label: "D.R.M.C. § 54-514(a) — Meter violation (deposit of required payment)",
    citation: "D.R.M.C. § 54-514(a)",
    url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "City and County of Denver — Parking Ordinances (§ 54-514 meter-payment text)",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "Denver County Court — Parking (Final Hearing process; city bears burden of proof)",
      url: "https://www.denvercountycourt.org/parking/",
    },
  ],
  faqs: [
    {
      question: "What if my receipt shows a different meter number than the one cited?",
      answer:
        "Bring a photo of the actual meter/pay-station number at your parking spot alongside your receipt, so the judicial officer can confirm the numbers match despite any discrepancy on the citation itself.",
    },
    {
      question: "Does an app payment receipt work the same as a meter printout?",
      answer:
        "Yes. A screenshot of your mobile parking-payment app transaction history showing the location, date, and time of purchase is treated the same as a meter-printed receipt.",
    },
    {
      question: "Can I email this receipt to the court instead of appearing?",
      answer:
        "No. Denver has no online or mail option for disputing a citation — you must bring the receipt in person to the scheduled Final Hearing and present it directly to the judicial officer.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const denverCity: ParkingCity = {
  slug: "denver",
  city: "Denver",
  state: "CO",
  agency:
    "Parking tickets are issued by City and County of Denver enforcement staff (Department of Transportation & Infrastructure / Denver Police) and paid through the Parking Violations Bureau (1-866-280-9988). Disputed citations are adjudicated at a Final Hearing before a Denver County Court judicial officer. Denver County Court's dedicated Parking Magistrate's Office, which previously handled these disputes, has closed; as of this record's verification date there is no separate magistrate office — Final Hearings are held directly through Denver County Court.",
  submitOnlineUrl:
    "No online dispute-submission portal is currently available. Denver's prior online parking-ticket dispute system has been discontinued and, as of this record's verification date (2026-07-20), has not been restored — disputes can only be initiated by appearing in person (see submitInPerson). For current status and any future online option, see https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing.",
  submitMailAddress:
    "No mail-in dispute process is currently available for parking citations — you cannot request or conduct a Final Hearing by mail. (Ticket payment, as opposed to a dispute, can be mailed to: Denver Parking Violations Bureau, PO Box 46500, Denver, CO 80201-6500, per https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Pay-a-Parking-Ticket.)",
  submitInPerson:
    "You must appear in person at Denver County Court, 1437 Bannock St., Room 140, Denver, CO 80202, Monday–Friday 8:00 a.m.–4:00 p.m., to schedule a Final Hearing. The Final Hearing itself is also held in person (or, per Denver County Court's general virtual-court program, potentially by video) before a Denver County Court judicial officer.",
  howToContest: cityHowToContest,
  contestDeadlineDays: 20,
  contestDeadlineNote:
    "You must be able to schedule a Final Hearing within 20 calendar days of the citation's issue date to dispute it on the merits before a judicial officer — Denver County Court's own guidance states 'the citation must not be older than 20 calendar days' to schedule a Final Hearing. Miss that window and you lose the Final Hearing option, though from day 21 through day 120 you can still file a general motion with Denver County Court for judicial review; once a citation passes 120 days without payment or a filed dispute, a default judgment is automatically entered against you, and your only remaining option is a motion asking the court to set aside that default judgment for good cause. Because scheduling a Final Hearing currently requires an in-person visit during weekday business hours (no online or mail option exists), plan to go to 1437 Bannock St. well before the 20-day window closes. Source: City and County of Denver, 'Tickets, Towing & Disputes,' https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing; Denver County Court, 'Parking,' https://www.denvercountycourt.org/parking/.",
  penaltyNote:
    "Denver's published parking fine schedule (effective 2/1/2022) sets most common violations — including a meter violation under Sec. 54-514(a), improper use of a metered space under Sec. 54-513, and posted no-parking/loading-only violations under Sec. 54-482(a) — at $35.00 each. Some violations carry higher fines: a mobility-impairment (accessible) parking violation under Sec. 54-485 is $350.00, large-vehicle parking under Sec. 54-464 is $250.00, a tow-away zone violation under Sec. 54-482(c) is $75.00 ($50.00 for street-sweeping tow-away zones), and a license-plate violation under Sec. 54-62(a) is $100.00. If you dispute a citation and lose the Final Hearing, or don't show up, a judgment enters for the fine amount plus $26.00 in court costs, generally due immediately. If a citation goes unpaid and undisputed past 120 days, a default judgment is entered for the fine plus any associated late fees. Separately, if a vehicle has 3 or more unpaid tickets (or other outstanding citations), Denver issues a seizure warning notice and may place a boot on the vehicle; removing the boot requires paying all outstanding fines plus a $100.00 boot fee. A vehicle moved by the city (e.g., towed) also incurs a separate $100.00 tow fee. Source: City and County of Denver, 'Denver Parking Fine Schedule' (PDF, as of 2/1/2022), https://www.denvergov.org/files/assets/public/v/2/doti/documents/programsservices/parking/denver-parking-fine-schedule.pdf; City and County of Denver, 'Tickets, Towing & Disputes,' https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing.",
  municipalCodeRefs: [
    {
      label: "D.R.M.C. § 54-514(a) — Meter violation (unlawful to use a metered space without depositing required payment)",
      citation: "D.R.M.C. § 54-514(a)",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "D.R.M.C. § 54-513 — Improper use of metered space (manner of parking within a metered space)",
      citation: "D.R.M.C. § 54-513",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "D.R.M.C. § 54-482(a)–(c) — Compliance with posted parking signs (no-parking, loading-only, other posted prohibitions, tow-away zones)",
      citation: "D.R.M.C. § 54-482",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "D.R.M.C. § 54-791 — Moving of vehicle to lawful position (removal/towing of illegally parked vehicles)",
      citation: "D.R.M.C. § 54-791",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
  ],
  recognizedDefenses: ["broken-meter", "obscured-signage", "valid-payment"],
  defenses: [broken_meter, obscured_signage, valid_payment],
  faqs: [
    {
      question: "How long do I have to dispute a Denver parking ticket?",
      answer:
        "You must be able to schedule a Final Hearing within 20 calendar days of the citation's issue date. After that, a Final Hearing is no longer available, though from day 21 through day 120 you can still file a general motion with Denver County Court for judicial review. Past 120 days, a default judgment is automatically entered against you.",
    },
    {
      question: "Can I dispute a Denver parking ticket online or by mail?",
      answer:
        "No. Denver's prior online dispute-submission portal has been discontinued and has not been restored, and there is no mail-in dispute process. You must appear in person at Denver County Court, 1437 Bannock St., Room 140, Denver, CO 80202, to schedule a Final Hearing.",
    },
    {
      question: "Who has the burden of proof at a Denver parking Final Hearing?",
      answer:
        "The City. Denver County Court's own guidance states 'the city will be required to prove the validity of the citation,' and you may present your defense and evidence at the hearing.",
    },
    {
      question: "What happens if I lose the Final Hearing or don't show up?",
      answer:
        "A judgment enters against you for the fine amount plus $26.00 in court costs, generally due immediately following the hearing.",
    },
  ],
  sources: [
    {
      label: "City and County of Denver — Tickets, Towing & Disputes",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing",
    },
    {
      label: "Denver County Court — Parking",
      url: "https://www.denvercountycourt.org/parking/",
    },
    {
      label: "City and County of Denver — Parking Ordinances (DRMC § 54 citations)",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Parking-Ordinances",
    },
    {
      label: "City and County of Denver — Pay a Parking Ticket",
      url: "https://www.denvergov.org/Vehicles-Parking/Parking/Tickets-and-Towing/Pay-a-Parking-Ticket",
    },
    {
      label: "City and County of Denver — Denver Parking Fine Schedule (PDF, as of 2/1/2022)",
      url: "https://www.denvergov.org/files/assets/public/v/2/doti/documents/programsservices/parking/denver-parking-fine-schedule.pdf",
    },
    {
      label: "City and County of Denver — Park Smart, Denver: Common Non-Posted Parking Ordinances (PDF)",
      url: "https://www.denvergov.org/content/dam/denvergov/Portals/681/documents/2web%20site%20flyer.pdf",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
