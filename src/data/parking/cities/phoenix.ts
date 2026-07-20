import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/phoenix.json (verifiedAt 2026-07-20).
// IMPORTANT: Phoenix has no NYC/Chicago-style administrative parking-violations bureau.
// Parking tickets are civil traffic matters handled directly by Phoenix Municipal Court
// (Civil Traffic Division). There is NO online plea channel — phoenixcourt.gov only
// supports making payments and looking up case information. A driver contests a ticket
// by submitting a written "Not Responsible" plea and trial/hearing request by mail, fax,
// or email to the Court. Every defense statement below is addressed to Phoenix Municipal
// Court and uses the record's own document/number nomenclature: the Notice of Violation
// (NOV), identified by its Complaint Number and Charge Number(s).

const cityHowToContest: string[] = [
  "Read the Notice of Violation (NOV) left on your windshield (or the civil traffic Summons and Complaint, if one has already been mailed to you) to find the Complaint Number (upper left corner), the Charge Number(s) (listed vertically down the left side), the violation, the sanction amount, and any printed court date.",
  "Decide your plea. To contest the ticket, do not pay it — instead you will enter a plea of \"Not Responsible\" and request a trial/hearing.",
  "Note the timing: if you pay the sanction OR request a hearing within 21 calendar days of the violation date, Phoenix City Code Section 36-156.02(B) entitles you to a $20 'discounted sanction' if later found responsible; requesting a hearing after day 21 is still allowed, just at the full (non-discounted) sanction amount.",
  "Submit your \"Not Responsible\" plea and trial/hearing request in writing by mail, fax, or email to the Phoenix Municipal Court — this cannot be done online; phoenixcourt.gov only supports making payments and looking up case information, not filing a plea. Mail: Phoenix Municipal Court, PO Box 25650, Phoenix, AZ 85002-5650. Fax: 602-534-3628. Email: court@phoenix.gov.",
  "Include in your written request: the Complaint Number, the Charge Number(s) you want included in the hearing, your name, full address, daytime phone number, date of birth, and any interpreter needs for you or witnesses. Call 602-262-6421 to confirm the Court received your request.",
  "If the citation is not paid or otherwise resolved within 50 calendar days of the NOV date, Phoenix City Code Section 36-156.02(C) requires the City to mail you a civil traffic Summons and Complaint with a set court date (service is complete upon mailing). Once that happens, you must submit your trial/hearing request at least 7 days before that court date, through the same mail/fax/email channels.",
  "Appear at your scheduled trial/hearing as ordered. A Hearing Officer or Judge (not a prosecutor) will question you, the citing officer, and any witnesses, and will decide based on a preponderance-of-the-evidence standard whether you are 'Responsible' or 'Not Responsible.'",
  "If found 'Responsible,' you must pay the imposed fine that same day; once a Summons and Complaint has issued, the Court cannot suspend any part of the applicable civil sanction. If you disagree with a citation and ignore it entirely, a civil default judgment can be entered against you for the sanction plus fees.",
];

const ifThisDoesntWork =
  "If the Hearing Officer or Judge finds you 'Responsible,' you must pay the imposed civil sanction that same day; once a civil traffic Summons and Complaint has issued, Phoenix City Code § 36-156.02(C) bars the Court from suspending any part of that sanction. If you disagree with the citation and take no action at all, a civil default judgment can be entered against you for the sanction plus additional fees, including collection fees, and registered owners with three or more unpaid, defaulted parking tickets are subject to the Court's pre-boot notice and, ultimately, the City's Boot and Tow Program.";

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "phoenix",
  title: "Fight a not-my-vehicle parking ticket in Phoenix",
  metaDescription:
    "Free defense-statement letter for a not-my-vehicle parking ticket in Phoenix. Rebuts the City Code § 36-133 owner presumption — mail/fax/email-ready template.",
  whenItApplies:
    "You were not the registered owner of the vehicle at the time of the violation (e.g., it had already been sold, gifted, or transferred), the vehicle was stolen, or you are one of several jointly-registered owners disputing sole responsibility for this particular citation.",
  body: `To: Phoenix Municipal Court — Civil Traffic Division
Re: Notice of Violation — Complaint No. [COMPLAINT NUMBER], Charge No. [CHARGE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead Not Responsible to this violation and respectfully request a trial/hearing before the Court.

I was not the registered owner of the vehicle bearing plate [PLATE] on [DATE], the date of the violation cited above. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) I had already sold, gifted, or otherwise transferred the vehicle before that date, as shown by [ARIZONA MVD TITLE/REGISTRATION TRANSFER DOCUMENTATION OR BILL OF SALE]. / (b) The vehicle had been reported stolen before or at the time this Notice of Violation was issued, as shown by [POLICE REPORT NUMBER AND DATE]. / (c) The vehicle was jointly registered to me and [OTHER REGISTRANT'S NAME], and the evidence below shows [OTHER REGISTRANT'S NAME] — not me — was responsible for this particular citation.]

Under Phoenix City Code § 36-133, a registered owner (or, for jointly-registered vehicles, all owners jointly and severally) is only prima facie — that is, presumptively, not conclusively — responsible for a parking violation. The evidence attached rebuts that presumption by showing I was not the vehicle's owner, or was not the responsible joint registrant, as of the violation date. I ask that this Notice of Violation be dismissed on that basis.

Attached: [Arizona MVD title/registration transfer documentation or bill of sale showing the vehicle left my ownership before the violation date; or the police report of theft; or documentation of the correct registered owner as of the violation date, or of my specific role among joint registrants — as applicable].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Arizona MVD title/registration transfer documentation or a bill of sale showing the vehicle left your ownership before the violation date",
    "A police report, if the vehicle was reported stolen before or at the time of the citation",
    "Documentation of who the correct registered owner was as of the violation date, if different from you",
    "Proof of your specific role among joint registrants, if the vehicle was jointly registered to multiple people",
  ],
  cityNotes:
    "Phoenix City Code Section 36-133 makes the registered owner (or, for jointly-registered vehicles, all owners jointly and severally) only 'prima facie' — that is, presumptively, not conclusively — responsible for a parking violation. Phoenix Municipal Court does not publish a standalone 'common reasons for dispute' catalog the way some cities do; you rebut this statutory presumption by presenting your evidence at the trial/hearing you request from the Court under the general 'Not Responsible' plea process described in the Municipal Court FAQ.",
  codeCite: {
    label: "Phoenix City Code 36-133 — Presumption in reference to illegal parking; joint registration",
    citation: "Phoenix City Code § 36-133",
    url: "https://phoenix.municipal.codes/CC/36-133",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Phoenix City Code 36-133",
      url: "https://phoenix.municipal.codes/CC/36-133",
    },
    {
      label: "Phoenix Municipal Court FAQ — How do I request a trial/hearing?",
      url: "https://www.phoenix.gov/administration/departments/court/faq.html",
    },
  ],
  faqs: [
    {
      question: "Is it enough to just tell the Court 'that's not my car'?",
      answer:
        "No. Phoenix City Code § 36-133 only makes the registered owner presumptively (prima facie) responsible — not conclusively. That presumption is rebuttable, but you have to actually rebut it with documentary evidence at the trial/hearing you request, not just deny ownership verbally.",
    },
    {
      question: "What if the vehicle was jointly registered to me and someone else?",
      answer:
        "Section 36-133 makes joint registrants jointly and severally presumptively responsible, meaning either owner can be held liable by default. To dispute your individual responsibility for this specific citation, bring proof of your role among the joint registrants (e.g., who was driving or in possession of the vehicle at the time).",
    },
    {
      question: "Where does Phoenix list its accepted 'not my vehicle' reasons?",
      answer:
        "Unlike some cities, Phoenix Municipal Court doesn't publish a standalone catalog of dispute reasons. This defense instead follows from rebutting the statutory presumption in § 36-133, and it has to be raised and proven with evidence at the trial/hearing you request under the general 'Not Responsible' plea process.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "phoenix",
  title: "Fight a meter-payment parking ticket in Phoenix",
  metaDescription:
    "Free defense-statement letter for a meter-payment parking ticket in Phoenix. Cites Phoenix City Code § 36-154 — mail/fax/email-ready template for Municipal Court.",
  whenItApplies:
    "You were cited for a metered-parking violation (no payment for a metered space, or parking beyond a sign-posted time limit), but you actually operated and paid the meter or pay station for the cited space and time.",
  body: `To: Phoenix Municipal Court — Civil Traffic Division
Re: Notice of Violation — Complaint No. [COMPLAINT NUMBER], Charge No. [CHARGE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead Not Responsible to this violation and respectfully request a trial/hearing before the Court.

On [DATE], I parked at [LOCATION] and paid for the metered space using [PAYMENT METHOD — legal U.S. coins / credit card / mobile parking app]. My receipt or payment confirmation shows payment covering [PAID TIME WINDOW], which includes [TIME], the time this Notice of Violation states the violation was recorded. I operated and paid the meter for the corresponding parking time used at the cited space.

Phoenix City Code § 36-154 defines this violation as parking in a metered space without operating the meter using legal United States coins, credit cards, or other acceptable forms or methods of payment for the corresponding parking time used. Because I paid for and operated the meter covering the cited time, that element of the charge is not satisfied. I ask that this Notice of Violation be dismissed on that basis.

Attached: [meter or pay-station payment receipt showing the space number, date, and paid time window covering the citation time; or credit-card/mobile-app payment confirmation; or a time-stamped photo of the meter display showing time remaining].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Meter or pay-station payment receipt showing the space number, date, and a paid time window that covers the citation time",
    "Credit-card or mobile parking-app payment confirmation for the metered space, if no physical receipt was issued",
    "A time-stamped photo of the meter display showing time remaining, if taken near the time of citation",
  ],
  cityNotes:
    "Phoenix City Code Section 36-154 defines the meter violation itself as parking in a metered space 'without operating that meter using legal United States coins, credit cards, or other acceptable forms or methods of payment for the corresponding parking time used,' or parking beyond the time limit shown on the meter's accompanying sign. Proof that you did operate/pay the meter for the cited period directly negates that element of the charge. Note the ordinance provides no exception for a meter that was broken or malfunctioning (only an exception for vehicles displaying a State 'Disabled Parking' or 'Purple Heart Medal Recipient' placard, good for up to one hour past meter expiration) — this ground applies only where you can show you actually paid, not merely that the meter was out of order, which is why 'broken-meter' is not listed as a Phoenix-recognized ground here.",
  codeCite: {
    label: "Phoenix City Code 36-154 — Parking meter violations",
    citation: "Phoenix City Code § 36-154",
    url: "https://phoenix.municipal.codes/CC/36-154",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Phoenix City Code 36-154",
      url: "https://phoenix.municipal.codes/CC/36-154",
    },
    {
      label: "Phoenix Municipal Court FAQ — How do I request a trial/hearing?",
      url: "https://www.phoenix.gov/administration/departments/court/faq.html",
    },
  ],
  faqs: [
    {
      question: "What if the meter was broken instead of me forgetting to pay?",
      answer:
        "Phoenix's meter ordinance (City Code § 36-154) provides no exception for a broken or malfunctioning meter — the only built-in exception is for vehicles displaying a State 'Disabled Parking' or 'Purple Heart Medal Recipient' placard, good for up to one hour past meter expiration. This defense applies only where you can show you actually paid, not merely that the meter was out of order.",
    },
    {
      question: "What proof do I need that I paid?",
      answer:
        "A meter or pay-station receipt showing the space number, date, and a paid window covering the citation time is strongest. Credit-card or mobile-app payment confirmations work if no physical receipt was issued, and a time-stamped photo of the meter display can help corroborate.",
    },
    {
      question: "Does a photo of the meter display by itself prove I paid?",
      answer:
        "It helps corroborate your account if it's time-stamped close to the citation time and shows time remaining, but it's strongest paired with an actual payment receipt or app confirmation rather than standing alone.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const obscured_signage: ParkingDefense = {
  slug: "obscured-signage",
  citySlug: "phoenix",
  title: "Fight an obscured-signage parking ticket in Phoenix",
  metaDescription:
    "Free defense-statement letter for an obscured or missing sign parking ticket in Phoenix. Cites Phoenix City Code §§ 36-146 & 36-25 — mail/fax/email-ready template.",
  whenItApplies:
    "You were cited for exceeding a posted time limit or violating another sign-dependent parking restriction, but the sign that would have established or communicated that restriction was missing, illegible, obstructed, or not properly installed at the location where you were parked.",
  body: `To: Phoenix Municipal Court — Civil Traffic Division
Re: Notice of Violation — Complaint No. [COMPLAINT NUMBER], Charge No. [CHARGE NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead Not Responsible to this violation and respectfully request a trial/hearing before the Court.

On [DATE], my vehicle was parked at [LOCATION]. At the time, the sign that would have established the restriction I am cited for was [DESCRIBE THE DEFECT — missing entirely, illegible due to damage or fading, obstructed by [OBSTRUCTION — a tree/vehicle/other object], or not installed at that location at all]. I had no way to know of, or comply with, a restriction that was not validly and legibly posted where I parked.

Phoenix City Code § 36-146 defines the time-limit parking offense by reference to 'official signs installed to limit such parking,' and Phoenix City Code § 36-25 gives the City Traffic Engineer sole authority to determine and designate by appropriate signs or markings any parking time limit. Because no such sign was validly in place at [LOCATION], there was no time limit in force for me to have exceeded. I ask that this Notice of Violation be dismissed on that basis.

Attached: [date- and time-stamped photos of the parking location showing no sign present, or a sign that is illegible, obstructed, or knocked down; wide-angle photos of the full block/curb confirming no valid restriction sign was visible from my parking spot; and, if applicable, photos confirming no permit-parking sign was posted under Section 36-157.2].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Date- and time-stamped photos of the parking location showing no sign present, or a sign that is illegible, obstructed, or knocked down",
    "Wide-angle photos of the full block/curb where you parked, to confirm no valid time-limit or restriction sign was visible from your parking spot",
    "For residential permit-parking areas specifically, photos confirming no permit-parking sign was posted per Section 36-157.2",
  ],
  cityNotes:
    "Phoenix City Code Section 36-146 defines the time-limit parking offense itself by reference to 'official signs installed to limit such parking,' and Section 36-25 gives the City Traffic Engineer sole authority to 'determine and designate by appropriate signs or markings any parking time limit.' If no such sign was validly in place, there is no time limit in force to have exceeded. Unlike some cities, Phoenix Municipal Court does not publish a dedicated, itemized 'common reasons for dispute' page naming 'obscured signage' as a ground — this defense instead follows from the elements of the underlying sign-dependent parking ordinances themselves, and must be raised and proven with evidence at the trial/hearing you request from the Court.",
  codeCite: {
    label: "Phoenix City Code 36-146 — Time limit (parking)",
    citation: "Phoenix City Code § 36-146",
    url: "https://phoenix.municipal.codes/CC/36-146",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Phoenix City Code 36-146",
      url: "https://phoenix.municipal.codes/CC/36-146",
    },
    {
      label: "Phoenix City Code 36-25 — Parking signs required",
      url: "https://phoenix.municipal.codes/CC/36-25",
    },
  ],
  faqs: [
    {
      question: "Does Phoenix have a dedicated 'obscured signage' dispute ground like some other cities?",
      answer:
        "No standalone, itemized page. This defense instead follows from the elements of Phoenix City Code § 36-146 (which defines the time-limit offense by reference to properly installed signs) and § 36-25 (which gives the City Traffic Engineer sole authority to designate parking time limits by sign). You raise and prove it with evidence at your requested trial/hearing.",
    },
    {
      question: "What if I was cited in a residential permit-parking area?",
      answer:
        "For permit-parking-specific citations, photograph the location to confirm no permit-parking sign was posted under Section 36-157.2, in addition to the general block-face photos.",
    },
    {
      question: "What photos help the most?",
      answer:
        "Date- and time-stamped photos of the exact location showing no sign, or an illegible/obstructed/knocked-down sign, plus wide-angle photos of the full block or curb confirming no valid restriction sign was visible from where you parked.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const phoenixCity: ParkingCity = {
  slug: "phoenix",
  city: "Phoenix",
  state: "AZ",
  agency:
    "City of Phoenix parking enforcement officers (Phoenix Police Department Parking Enforcement Unit and Street Transportation Department parking staff) issue the Notice of Violation (NOV) left on the vehicle's windshield. The Phoenix Municipal Court (Civil Traffic Division) receives pleas and trial/hearing requests, adjudicates unresolved parking citations as civil traffic complaints, and administers the Boot and Tow Program. Phoenix has no separate administrative parking-violations bureau of the NYC-DOF type — parking tickets are civil traffic matters handled directly by Phoenix Municipal Court.",
  submitOnlineUrl: "https://www.phoenixcourt.gov/",
  submitMailAddress: "Phoenix Municipal Court, PO Box 25650, Phoenix, AZ 85002-5650",
  howToContest: cityHowToContest,
  contestDeadlineDays: 21,
  contestDeadlineNote:
    "Phoenix does not use a single fixed 'contest deadline' the way many cities do — it is a graduated, multi-stage structure defined in Phoenix City Code Section 36-156.02 and phoenix.gov's own guidance. (1) 21-day discount window: 'If payment for the parking offense is received by the City of Phoenix Finance Department within 21 calendar days from the date of the violation, a $20 discount is allowed' (phoenix.gov, Information about Parking Tickets), and Phoenix City Code Section 36-156.02(B) extends that same $20 discount to 'any person who ... pays the sanction or requests a hearing during the discounted sanction option period reflected in the notice of violation.' Missing day 21 does NOT forfeit your right to contest — you can still request a hearing later, just without the discount. (2) 50-day summons threshold: 'If payment for the offense is not received by the Finance Department within 50 calendar days of the date of violation, the Phoenix City Code mandates that a Parking Summons and Complaint be issued by the Phoenix Municipal Court' (phoenix.gov), which then carries a fixed court date and, per Section 36-156.02(C), the Court 'shall not suspend any part or all of the imposition or execution of any sanction' once a Summons and Complaint issues. (3) Once a Summons and Complaint / court date exists, Phoenix Municipal Court's FAQ states: 'You may request a trial/hearing in writing by mail, fax, or email to the Court at least 7 days before your court date.' We report 21 as contestDeadlineDays because it is the only deadline the Code explicitly and numerically ties to \"requests a hearing\" (Section 36-156.02(B)); treat 50 days and the 7-days-before-court-date rule as the later, harder stops in the same process.",
  penaltyNote:
    "Civil sanctions for parking violations are set by a schedule in Phoenix City Code Section 36-156.02(A) and generally range from about $31 (e.g., most parking-prohibited, alley, median, parallel/angle parking, meter, and time-limit violations under Section 36-154 and neighboring sections) up to $150-$300 for certain violations (e.g., disabled-parking violations, unpaved-lot parking, oversized vehicles in residential zones), with some sanctions marked as mandatory minimums that a judge cannot reduce. Paying (or requesting a hearing) within 21 calendar days of the violation date qualifies for a $20 discount off the listed sanction plus State penalty assessments (Phoenix City Code Section 36-156.02(B)). If the sanction is not received by the City Treasurer within the time period stated on the Notice of Violation (50 calendar days per phoenix.gov), the City must issue a civil traffic Summons and Complaint by mail; once issued, the Court must impose at least the listed civil sanction and cannot suspend any part of it (Phoenix City Code Section 36-156.02(C)), and failing to pay or appear by the court date can result in a civil default judgment for the sanction plus additional fees, including collection fees. Separately, any registered owner with three or more unpaid, defaulted parking tickets receives a 'pre-boot' notice from the Court and has 21 days from that notice to pay in full or request a hearing to show cause why the vehicle should not be booted; without a timely response the vehicle's plate is placed on a boot-eligibility list, and once booted, if the debt is not resolved by 5:00 p.m. that day the vehicle is towed by 6:00 p.m. to prevent vandalism (phoenix.gov, Boot and Tow).",
  municipalCodeRefs: [
    {
      label:
        "Phoenix City Code 36-156.02 — Payment of sanctions upon receipt of notice of violation; procedure; effect of failure to make payment; court jurisdiction",
      citation: "Phoenix City Code § 36-156.02",
      url: "https://phoenix.municipal.codes/CC/36-156.02",
    },
    {
      label: "Phoenix City Code 36-133 — Presumption in reference to illegal parking; joint registration",
      citation: "Phoenix City Code § 36-133",
      url: "https://phoenix.municipal.codes/CC/36-133",
    },
    {
      label: "Phoenix City Code 36-154 — Parking meter violations",
      citation: "Phoenix City Code § 36-154",
      url: "https://phoenix.municipal.codes/CC/36-154",
    },
    {
      label: "Phoenix City Code 36-146 — Time limit (parking)",
      citation: "Phoenix City Code § 36-146",
      url: "https://phoenix.municipal.codes/CC/36-146",
    },
    {
      label: "Phoenix City Code 36-25 — Parking signs required",
      citation: "Phoenix City Code § 36-25",
      url: "https://phoenix.municipal.codes/CC/36-25",
    },
    {
      label: "Phoenix City Code 36-10 — Parking violations (citation/complaint procedure)",
      citation: "Phoenix City Code § 36-10",
      url: "https://phoenix.municipal.codes/CC/36-10",
    },
    {
      label: "Phoenix City Code 36-7 — Immobilizing and impounding of vehicles (Boot and Tow authority)",
      citation: "Phoenix City Code § 36-7",
      url: "https://phoenix.municipal.codes/CC/36-7",
    },
  ],
  recognizedDefenses: ["not-my-vehicle", "valid-payment", "obscured-signage"],
  defenses: [not_my_vehicle, valid_payment, obscured_signage],
  faqs: [
    {
      question: "Can I contest a Phoenix parking ticket online?",
      answer:
        "No. Per the Phoenix Municipal Court FAQ, phoenixcourt.gov only supports making payments and looking up case information. You must submit your written 'Not Responsible' plea and trial/hearing request by mail, fax, or email to the Court.",
    },
    {
      question: "How long do I have to contest a Phoenix parking ticket?",
      answer:
        "Phoenix City Code § 36-156.02(B) ties a $20 discount to paying or requesting a hearing within 21 calendar days of the violation date, but missing that window does not forfeit your right to contest — you can still request a hearing later, just without the discount, up until a Summons and Complaint issues at 50 days, or, after that, at least 7 days before your scheduled court date.",
    },
    {
      question: "What happens if I don't pay or contest within 50 days?",
      answer:
        "Phoenix City Code § 36-156.02(C) requires the City to mail you a civil traffic Summons and Complaint with a set court date. Once that issues, the Court cannot suspend any part of the civil sanction if you're later found Responsible.",
    },
    {
      question: "What if I ignore the ticket entirely?",
      answer:
        "A civil default judgment can be entered against you for the sanction plus fees. Registered owners with three or more unpaid, defaulted parking tickets also receive a pre-boot notice and are subject to the City's Boot and Tow Program if the debt isn't resolved.",
    },
  ],
  sources: [
    {
      label: "City of Phoenix — Information about Parking Tickets Issued in the City of Phoenix",
      url: "https://www.phoenix.gov/administration/departments/court/violations/parking-tickets.html",
    },
    {
      label: "City of Phoenix — Parking and Traffic Violations",
      url: "https://www.phoenix.gov/administration/departments/court/violations.html",
    },
    {
      label: "City of Phoenix — Municipal Court FAQ",
      url: "https://www.phoenix.gov/administration/departments/court/faq.html",
    },
    {
      label: "City of Phoenix — Traffic and Parking Ticket Payment Options",
      url: "https://www.phoenix.gov/administration/departments/court/violations/payment-options.html",
    },
    {
      label: "City of Phoenix — Boot and Tow",
      url: "https://www.phoenix.gov/administration/departments/court/violations/boot-tow.html",
    },
    {
      label: "City of Phoenix — Minor Criminal and Civil Traffic Violations",
      url: "https://www.phoenix.gov/administration/departments/court/violations/minor-violations.html",
    },
    {
      label: "Phoenix Municipal Court self-service portal (phoenixcourt.gov)",
      url: "https://www.phoenixcourt.gov/",
    },
    {
      label: "Phoenix City Code Chapter 36 — Vehicles and Traffic (official code host, Code Publishing Co.)",
      url: "https://phoenix.municipal.codes/CC/36",
    },
    {
      label: "Phoenix City Code 36-156.02",
      url: "https://phoenix.municipal.codes/CC/36-156.02",
    },
    {
      label: "Phoenix City Code 36-133",
      url: "https://phoenix.municipal.codes/CC/36-133",
    },
    {
      label: "Phoenix City Code 36-154",
      url: "https://phoenix.municipal.codes/CC/36-154",
    },
    {
      label: "Phoenix City Code 36-146",
      url: "https://phoenix.municipal.codes/CC/36-146",
    },
    {
      label: "Phoenix City Code 36-25",
      url: "https://phoenix.municipal.codes/CC/36-25",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
