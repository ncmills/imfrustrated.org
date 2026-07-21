import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/atlanta.json (verifiedAt 2026-07-20).
// IMPORTANT: Atlanta parking citations run through a THREE-stage review chain, not a single
// tribunal — ATL+ (the City's contracted on-street parking management vendor, operated by
// SP Plus Corporation / Metropolis Technologies) conducts the first review; any citation it
// upholds is automatically forwarded to the City of Atlanta Department of Public Works (DPW)
// Parking Administrative Review Team for a second review; and any citation still upheld is
// forwarded to the Atlanta Municipal Court — a real Georgia municipal court, not a standalone
// administrative parking-violations bureau — for a hearing. Every defense statement below is
// an APPEAL submitted through this chain, addressed first to ATL+ per Atlanta City Code
// § 150-133.1's 14-day appeal window, not a courtroom "not guilty" plea.

const cityHowToContest: string[] = [
  "Locate your citation number and confirm the violation, date/time, location, and license plate printed on it — the online appeal tool requires the citation number plus your license plate number or VIN.",
  "Within 14 days of the citation's issuance, submit an appeal online at atlplusmobility.com/citations/appeal-a-citation/ (select \"Appeal Citation\"), or — if you don't have computer access — file the parking appeal form in person or by mail at 150 Garnett Street, Atlanta, GA 30303. This deadline is codified at Atlanta City Code § 150-133.1.",
  "Attach up to three supporting documents. For meter/pay-station/app violations: photos of the vehicle and plate, a payment-app screenshot with the plate visible, proof of payment, a meter receipt (only valid if the tag matches), a handicap placard/plate with ID, or vehicle registration/bill of sale. For restricted-area or permit violations: vehicle/plate photos, a copy of the issued permit, handicap placard information, or a paid residential/commercial permit invoice.",
  "You'll receive a confirmation email when your appeal is received. All parking fees, including late fees, are suspended while the appeal is pending.",
  "ATL+ conducts the first review. Any citation it upholds is automatically forwarded to the City of Atlanta DPW's Parking Administrative Review Team for a second review, and you'll be notified by email of that decision.",
  "If the DPW Review Team also upholds the citation, it is forwarded to the Atlanta Municipal Court, which mails a letter assigning a court hearing date — allow roughly 45–60 days after the review-stage notification for this to happen. At that point you must either pay the citation or appear in court on the assigned date.",
  "If you don't appear at your assigned court hearing (and haven't already paid), you'll be deemed \"Failure to Appear,\" found liable for the violation, and late fees will be added; after that point the citation can generally only be paid, not further disputed, at atlplusmobility.com or (closer to the hearing date) at the Municipal Court itself.",
];

const ifThisDoesntWork =
  "If ATL+'s first review upholds the citation, it is automatically forwarded to the City of Atlanta DPW's Parking Administrative Review Team for a second review. If the DPW Review Team also upholds the citation, it is forwarded to the Atlanta Municipal Court under Atlanta City Code § 150-133.1, which will mail you a letter assigning a court hearing date — typically 45–60 days after the review-stage notification. At that point you must either pay the citation or appear in court on the assigned date. If you don't appear (and haven't already paid), you'll be deemed \"Failure to Appear,\" found liable for the violation, and late fees will be added; after that point the citation can generally only be paid, not further disputed.";

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "atlanta",
  title: "Fight an Atlanta parking ticket when you already paid",
  metaDescription:
    "Free appeal-statement letter for an Atlanta meter, pay-station, or app parking ticket you already paid. Cites City Code § 150-133 — appeal-ready template.",
  whenItApplies:
    "You were cited for a meter, pay-station, or app (e.g., ParkMobile) parking violation — most commonly overtime parking under City Code § 150-133 — but you actually paid for parking at that location and time before the violation was recorded.",
  body: `To: ATL+ (on behalf of the City of Atlanta Department of Public Works)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am appealing this citation and respectfully request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] via [PAYMENT METHOD — meter / pay station / ParkMobile or other app]. My receipt/screenshot shows payment covering [PAID TIME WINDOW], which includes [VIOLATION TIME], the time this citation states the violation was recorded. I had valid, paid parking at the location and time cited.

This citation was issued under Atlanta City Code § 150-133 (Overtime parking). Atlanta does not publish a separate codified affirmative-defense provision for valid payment; my attached proof of payment establishes that no overtime violation occurred under that section, and I ask that this citation be dismissed on that basis.

Attached: [meter or pay-station receipt showing the paid tag/space number matching the citation, a ParkMobile or other app payment screenshot with the license plate visible, and proof of payment validating the amount and time].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A meter or pay-station receipt showing the paid time window (only valid if the tag/space number on the receipt matches the citation)",
    "A screenshot of your payment app transaction (e.g., ParkMobile) with the license plate clearly visible",
    "Proof of payment validating the transaction amount and time",
    "If you have multiple vehicles listed in a parking app, the license plate numbers for each",
  ],
  cityNotes:
    "These are the exact evidence categories ATL+ and the City of Atlanta publish for \"Meter, Pay Station, or Mobile App Violations\" appeals — up to three such documents may be attached. Atlanta does not publish a separate codified affirmative-defense subsection for valid payment the way NYC does; the underlying violation is City Code § 150-133 (Overtime parking), and payment proof is weighed as evidence through the ATL+ → DPW Parking Administrative Review Team → Atlanta Municipal Court review chain.",
  codeCite: {
    label: "Atlanta City Code § 150-133 — Overtime parking",
    citation: "Atlanta, Ga., Code of Ordinances § 150-133",
    url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (evidence categories)",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
    {
      label: "ATL+ — Appeal a Citation (\"What Should I Include in my Appeal?\")",
      url: "https://www.atlplusmobility.com/citations/appeal-a-citation/",
    },
  ],
  faqs: [
    {
      question: "What proof of payment does ATL+ accept?",
      answer:
        "A meter or pay-station receipt (only valid if the tag/space number matches the citation), a screenshot of your ParkMobile or other app payment showing your plate, or other proof of payment validating the amount and time. Up to three documents may be attached to your appeal.",
    },
    {
      question: "Does Atlanta have a codified payment defense like NYC's grace-period statute?",
      answer:
        "No. Atlanta doesn't publish a separate codified affirmative-defense subsection for valid payment. The underlying violation is City Code § 150-133 (Overtime parking), and your payment proof is weighed as evidence through the ATL+ → DPW Parking Administrative Review Team → Atlanta Municipal Court review chain.",
    },
    {
      question: "I have multiple vehicles saved in my parking app — does that matter?",
      answer:
        "Yes — if you have multiple vehicles listed in a parking app, include the license plate numbers for each so the reviewer can confirm which vehicle's payment corresponds to the citation.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const broken_meter: ParkingDefense = {
  slug: "broken-meter",
  citySlug: "atlanta",
  title: "Fight a broken-meter parking ticket in Atlanta",
  metaDescription:
    "Free appeal-statement letter for an Atlanta broken-meter parking ticket. Documents good-faith alternate payment per ATL+'s own guidance — appeal-ready template.",
  whenItApplies:
    "You were cited for a meter or pay-station violation, but the specific meter/pay station was malfunctioning, so you paid using an alternate pay station, text-to-pay, or an approved parking app, or you reported the malfunction to ATL+.",
  body: `To: ATL+ (on behalf of the City of Atlanta Department of Public Works)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am appealing this citation and respectfully request that it be dismissed.

On [DATE] at approximately [TIME], I attempted to pay for parking at [LOCATION] using the meter/pay station serving that spot, but it was malfunctioning: [DESCRIBE — e.g., blank screen, rejected every payment method I tried, would not accept coins or card]. Because the meter at my space did not work, I [SELECT AND COMPLETE: paid at a different pay station located at [NEXT PAY STATION LOCATION] / paid via text-to-pay / paid via [APP NAME], an app listed on parkingapp.com] at approximately [PAYMENT TIME]. [IF APPLICABLE: I also called ATL+ at 404-201-5396 to report the malfunction on [DATE/TIME OF CALL].]

Under Atlanta City Code § 150-131 (Enforcement — Parking Meters), and consistent with ATL+'s own published guidance instructing drivers who find a meter broken to pay at another pay station, via text-to-pay, or through an app listed on parkingapp.com, I ask that this citation be dismissed in light of my good-faith attempt to pay through an alternate channel.

Attached: [proof of payment made at a different pay station, via text-to-pay, or through an app listed on parkingapp.com; a record of any call reporting the malfunction to ATL+ at 404-201-5396; date- and time-stamped photos of the malfunctioning meter or pay station, if available].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Proof of payment made at a different pay station, via text-to-pay, or through an app listed on parkingapp.com, showing a good-faith effort to pay",
    "A record of your call reporting the malfunction to ATL+ at 404-201-5396, if you made one",
    "Date- and time-stamped photos of the malfunctioning meter or pay station, if you have them",
  ],
  cityNotes:
    "ATL+'s own FAQ instructs drivers who encounter a broken meter to \"find another pay station/meter to make your payment, use text to pay, or an app listed on parkingapp.com,\" and separately to \"call 404-201-5396 to report the malfunction.\" Atlanta's public guidance frames this as what to do at the time rather than as a codified automatic-dismissal ground (unlike NYC's \"next-nearest meter\" defense) — your strongest evidence is proof you actually paid through one of these alternate channels, submitted under the same \"Meter, Pay Station, or Mobile App Violations\" evidence category ATL+ and the City publish for all payment-related appeals.",
  codeCite: {
    label: "Atlanta City Code § 150-131 — Enforcement (Parking Meters)",
    citation: "Atlanta, Ga., Code of Ordinances § 150-131",
    url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "ATL+ — Frequently Asked Questions (broken meter guidance)",
      url: "https://www.atlplusmobility.com/faqs",
    },
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (evidence categories)",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
  ],
  faqs: [
    {
      question: "Is proof the meter was broken enough by itself?",
      answer:
        "Not on its own. Atlanta's public guidance frames a broken meter as what to do at the time — pay at another pay station, via text-to-pay, or through an app listed on parkingapp.com — rather than as a codified automatic-dismissal ground. Your strongest evidence is proof you actually paid through one of those alternate channels.",
    },
    {
      question: "Should I call to report the broken meter?",
      answer:
        "It helps. ATL+'s FAQ separately instructs drivers to call 404-201-5396 to report the malfunction. A record of that call isn't required, but it corroborates that the meter was actually out of service.",
    },
    {
      question: "What alternate payment methods does ATL+ accept if a meter is broken?",
      answer:
        "ATL+ instructs drivers to find another pay station or meter, use text-to-pay, or use an app listed on parkingapp.com. Attach proof of whichever method you used.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "atlanta",
  title: "Fight an Atlanta parking ticket for a sold or transferred vehicle",
  metaDescription:
    "Free appeal-statement letter for an Atlanta parking ticket on a vehicle you sold or transferred. Cites City Code § 150-3 — appeal-ready template.",
  whenItApplies:
    "The vehicle was sold, gifted, or otherwise transferred to someone else before the citation was issued, so you were no longer the registered owner or controller of the vehicle at the time of the violation.",
  body: `To: ATL+ (on behalf of the City of Atlanta Department of Public Works)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am appealing this citation and respectfully request that it be dismissed.

I was not the owner or in control of the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. I sold/transferred this vehicle on [TRANSFER DATE], before the citation date, as shown by the attached bill of sale and/or DMV title-transfer documentation. As of the citation date, the vehicle was registered to [NEW OWNER NAME, OR "another party" IF UNKNOWN].

Under Atlanta City Code § 150-3 (Offenses by persons owning or controlling vehicles), liability for this citation runs to the person owning or controlling the vehicle at the time of the violation. Because I no longer owned or controlled this vehicle on the citation date, I ask that this citation be dismissed.

Attached: [bill of sale or transfer document showing the transfer date, current vehicle registration or documentation showing the vehicle registered to its new owner, and any DMV/title-transfer confirmation I have from the sale].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A bill of sale or transfer document showing the date you sold/transferred the vehicle, which must be before the citation date",
    "Current vehicle registration (yours, or documentation the vehicle is now registered to someone else), to compare against the plate on the citation",
    "Any DMV/title-transfer confirmation you have from the sale",
  ],
  cityNotes:
    "ATL+'s and the City's published appeal-evidence list explicitly includes \"Vehicle Registration\" and \"Vehicle Bill of Sale\" as acceptable attachments — the documentary path Atlanta provides for disputing a citation issued against a vehicle you no longer owned or controlled. City Code § 150-3 (\"Offenses by persons owning or controlling vehicles\") is the operative provision establishing liability for the person owning or controlling the vehicle. Unlike NYC and Philadelphia, Atlanta's public-facing guidance does not separately address stolen-vehicle citations, so this record is limited to the sold/transferred-vehicle scenario the published evidence categories actually support.",
  codeCite: {
    label: "Atlanta City Code § 150-3 — Offenses by persons owning or controlling vehicles",
    citation: "Atlanta, Ga., Code of Ordinances § 150-3",
    url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIINGE",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (Vehicle Registration / Bill of Sale evidence)",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
    {
      label: "ATL+ — Appeal a Citation",
      url: "https://www.atlplusmobility.com/citations/appeal-a-citation/",
    },
  ],
  faqs: [
    {
      question: "Does Atlanta cover stolen-vehicle citations under this defense?",
      answer:
        "No. Atlanta's public-facing guidance does not separately address stolen-vehicle citations. This ground is limited to vehicles you sold or transferred before the citation date, supported by the \"Vehicle Registration\" and \"Vehicle Bill of Sale\" evidence categories ATL+ and the City publish.",
    },
    {
      question: "What documents prove the vehicle transfer?",
      answer:
        "A bill of sale or transfer document showing the transfer date (which must be before the citation date), current vehicle registration showing who the vehicle is registered to now, and any DMV/title-transfer confirmation you have from the sale.",
    },
    {
      question: "Which code section governs liability here?",
      answer:
        "City Code § 150-3 (\"Offenses by persons owning or controlling vehicles\") establishes that liability runs to the person owning or controlling the vehicle — the basis for arguing you're not liable for a citation issued after you sold or transferred the vehicle.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "atlanta",
  title: "Fight a defective parking ticket in Atlanta (missing or wrong details)",
  metaDescription:
    "Free appeal-statement letter for an Atlanta parking ticket with wrong or illegible details. Appeal-ready template for ATL+, DPW, and Atlanta Municipal Court.",
  whenItApplies:
    "The citation itself has an error — e.g., the license plate, vehicle description, date, time, or location doesn't match your vehicle or the actual circumstances — or it's a handwritten citation that doesn't appear in ATL+'s online appeal system.",
  body: `To: ATL+ (on behalf of the City of Atlanta Department of Public Works)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am appealing this citation and respectfully request that it be dismissed.

This citation contains an error. Specifically, the [FIELD — e.g., license plate, vehicle description, date, time, or location] printed on it is [DESCRIBE THE DEFECT — incorrect, illegible, or does not match my vehicle or the actual circumstances]. Comparing the citation against my vehicle registration, the correct information is: [CORRECT INFORMATION]. [IF APPLICABLE: This citation was handwritten and does not appear in ATL+'s online appeal system, so I am submitting this statement directly to ATL+'s Customer Service Team.]

This appeal is submitted under Atlanta City Code § 150-133.1, governing the citation appeal process. Atlanta does not publish a separate codified "defective citation" dismissal statute; ATL+, the City's DPW Parking Administrative Review Team, and (if necessary) the Atlanta Municipal Court review erroneous citation details on the evidence submitted, and I ask that this citation be dismissed in light of the attached documentation showing the error.

Attached: [photos of my vehicle and its actual license plate, my vehicle registration, and a copy of the physical citation showing the erroneous or illegible field].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Photos of your vehicle and its actual license plate, to compare against what's printed on the citation",
    "Your vehicle registration, to confirm the correct plate/vehicle details",
    "A copy of the physical citation showing the erroneous or illegible field",
    "For a handwritten citation that won't load in the online appeal tool: a copy forwarded to ATL+'s Customer Service Team at atlplusmeterhotline@spplus.com",
  ],
  cityNotes:
    "Atlanta does not publish a codified \"defective ticket\" dismissal statute the way NYC does (19 RCNY § 39-02(a)(3)). In practice, mismatched or erroneous citation details are disputed through the same evidence-based appeal channel ATL+ and the City use for every ground — vehicle/plate photos and registration compared against the citation — reviewed successively by ATL+, the City's DPW Parking Administrative Review Team, and (if still upheld) the Atlanta Municipal Court under City Code § 150-133.1. ATL+'s FAQ separately confirms that handwritten citations not appearing in its online system must be routed to its Customer Service Team by email rather than through the standard online appeal form.",
  codeCite: {
    label: "Atlanta City Code § 150-133.1 — Appeals",
    citation: "Atlanta, Ga., Code of Ordinances § 150-133.1",
    url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (review process + evidence)",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
    {
      label: "ATL+ — Frequently Asked Questions (handwritten citation not in system)",
      url: "https://www.atlplusmobility.com/faqs",
    },
  ],
  faqs: [
    {
      question: "Does Atlanta have a codified \"defective ticket\" dismissal statute like NYC's?",
      answer:
        "No. Unlike NYC's 19 RCNY § 39-02(a)(3), Atlanta doesn't publish a separate codified defective-citation statute. Erroneous details are disputed through the same evidence-based appeal channel — reviewed successively by ATL+, the City's DPW Parking Administrative Review Team, and, if still upheld, the Atlanta Municipal Court under § 150-133.1.",
    },
    {
      question: "What if my citation is handwritten and won't load in the online appeal system?",
      answer:
        "ATL+'s FAQ confirms handwritten citations that don't appear in its online system must be forwarded to its Customer Service Team at atlplusmeterhotline@spplus.com rather than submitted through the standard online appeal form.",
    },
    {
      question: "What evidence actually helps here?",
      answer:
        "Photos of your vehicle and its actual license plate, your vehicle registration, and a copy of the physical citation showing the erroneous or illegible field — compared side by side so the reviewer can see the mismatch.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_permit: ParkingDefense = {
  slug: "valid-permit",
  citySlug: "atlanta",
  title: "Fight an Atlanta parking ticket with a valid permit or placard",
  metaDescription:
    "Free appeal-statement letter for an Atlanta residential-permit or handicap-placard parking ticket. Cites City Code § 150-151 — appeal-ready template.",
  whenItApplies:
    "You were cited for parking in a restricted or residential-permit-only zone, or for a handicapped-parking violation, but you held a valid residential/commercial parking permit or a valid disabled-parking placard/plate for that vehicle and location at the time.",
  body: `To: ATL+ (on behalf of the City of Atlanta Department of Public Works)
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I am appealing this citation and respectfully request that it be dismissed.

I was cited for [SELECT: parking in a restricted/residential-permit zone / a handicapped-parking violation] at [LOCATION], but I held a valid [SELECT: residential/commercial parking permit for this address and vehicle / disabled-parking placard or plate] at the time. [IF PERMIT: My permit, issued under the City's residential parking permit program (City Code § 150-147), was current and valid for this vehicle and address, with the decal displayed in the lower corner of the rear windshield, driver's side, as required.] [IF PLACARD: My placard/plate number is [PLACARD NUMBER], issued to [NAME ON PLACARD].]

Under Atlanta City Code § 150-151, which sets the terms and fee for permits issued under the residential parking permit program established at § 150-147, my permit was valid for this vehicle and location at the time of the citation, and I ask that this citation be dismissed on that basis.

Attached: [copy of my issued residential or commercial parking permit or paid permit invoice, photos of the vehicle and license plate showing the permit decal displayed as required, and/or my handicap placard or plate together with identification].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of your issued residential or commercial parking permit",
    "A paid residential or commercial permit invoice",
    "Photos of the vehicle and license plate showing the permit decal displayed as required (inside lower corner of the rear windshield, driver's side)",
    "Your handicap placard or plate, together with identification",
  ],
  cityNotes:
    "This is Atlanta's second published appeal-evidence category — \"Restricted Area or Permit Violations\" — separate from the meter/payment category, and it is the ground ATL+ and the City provide specifically for permit and handicap-placard disputes. Atlanta's residential permit parking program is established by City Code § 150-147; § 150-151 sets the permit terms and fee ($20.00, valid one year from issuance) for the vehicle and address on the application, and the decal must be visibly and permanently affixed to the vehicle — a permit for a different vehicle or a different permit area will not support this defense.",
  codeCite: {
    label: "Atlanta City Code § 150-151 — Permit terms; fees",
    citation: "Atlanta, Ga., Code of Ordinances § 150-151",
    url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV4REPEPA_S150-151PETEFE",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (Restricted Area or Permit Violations evidence)",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
    {
      label: "Atlanta DOT — ATL Residential Permit Parking (PDF)",
      url: "https://atldot.atlantaga.gov/wp-content/uploads/2025/11/WEBSITE-ATL-Residential-Permit-Parking.pdf",
    },
  ],
  faqs: [
    {
      question: "What's the difference between § 150-147 and § 150-151?",
      answer:
        "City Code § 150-147 establishes Atlanta's residential parking permit program itself; § 150-151 sets the permit's terms and fee — $20.00, valid one year from issuance — for the specific vehicle and address on the application.",
    },
    {
      question: "Does the permit decal have to be displayed a certain way?",
      answer:
        "Yes. The decal must be visibly and permanently affixed to the vehicle, displayed in the inside lower corner of the rear windshield on the driver's side.",
    },
    {
      question: "Will a permit for a different vehicle or zone work as a defense?",
      answer:
        "No. A permit issued for a different vehicle, or for a different permit area than where you were cited, will not support this defense — the permit must match both the vehicle and the location.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const atlantaCity: ParkingCity = {
  slug: "atlanta",
  city: "Atlanta",
  state: "GA",
  agency:
    "City of Atlanta parking citations are issued and first reviewed by ATL+ (operated under contract by SP Plus Corporation / Metropolis Technologies, the City's designated on-street parking management vendor). Any citation ATL+ upholds is automatically forwarded to the City of Atlanta Department of Public Works (DPW) Parking Administrative Review Team (also referred to as the Parking Administrative Review Board) for a second review. Citations upheld at that stage are forwarded to the City of Atlanta Municipal Court for a hearing date. Atlanta City Code § 150-133.1 confirms the Municipal Court — a real Georgia municipal court, not a standalone administrative parking-violations bureau like NYC's PVB or Philadelphia's BAA — is the ultimate adjudicator: \"The appeal of parking citations shall be filed in the City of Atlanta Municipal Court within fourteen (14) days of the issuance of the citation.\"",
  submitOnlineUrl: "https://www.atlplusmobility.com/citations/appeal-a-citation/",
  submitMailAddress:
    "City of Atlanta parking citation appeal, 150 Garnett Street, Atlanta, GA 30303 (per atlantaga.gov, mailed dispute forms go to the same address used for in-person filing — the Atlanta Municipal Court building).",
  submitInPerson:
    "150 Garnett Street, Atlanta, GA 30303. Per atlantaga.gov: \"In the event that you do not have computer access, you must file your parking appeal form in person at 150 Garnett Street, Atlanta, GA 30303.\" This is also the Atlanta Municipal Court building, open Monday–Friday, 8:00 a.m.–4:30 p.m., excluding City holidays (court.atlantaga.gov).",
  howToContest: cityHowToContest,
  contestDeadlineDays: 14,
  contestDeadlineNote:
    "Atlanta City Code § 150-133.1 (Appeals): \"The appeal of parking citations shall be filed in the City of Atlanta Municipal Court within fourteen (14) days of the issuance of the citation.\" The City's own guidance states the same window: \"All appealed citations, within 14 days of the issuance of the citation, will be entered into a single source database to be reviewed by each entity. All parking fees, including late fees, will be suspended during this process.\" (atlantaga.gov, Appeal a Parking Ticket). ATL+'s appeal portal treats this as a hard cutoff: \"Appeals will not be filed after 14 days of the issuance of the ticket.\"",
  penaltyNote:
    "Meter/pay-station violations escalate under City Code § 150-133 (Overtime parking): an initial $35.00 fine, rising to $70.00 if unpaid within 14 days, and to $95.00 if unpaid within 45 days (library.municode.com). Other on-street violations carry their own fine schedules that ATL+ publishes for the City — e.g., most general stopping/standing/parking violations run $75.00 (or $150.00 if unpaid within 14 days); bike-lane, sidewalk, and handicapped-zone violations run $100.00–$200.00; and large trucks blocking a bike lane or sidewalk can be fined up to $1,000.00 (atlplusmobility.com, Types and Costs of Citations — a vendor-published schedule that could not be independently cross-checked against a Municode-hosted fine table for every cited section). If you fail to appear for an assigned Municipal Court hearing, you are deemed liable for the violation (\"Failure to Appear\") and late fees are added (atlantaga.gov; atlplusmobility.com FAQ). Separately, under City Code § 150-88, a vehicle becomes eligible for immobilization (\"booting\") once three or more parking citations issued to a vehicle registered in that owner's name go unpaid; the owner then has 24 hours to pay all outstanding citations plus a $50.00 boot-removal fee before the vehicle is towed to ATOW Wrecker Service (180 Harriett Street SE, Atlanta, GA 30315), where towing and daily storage fees also apply (atlplusmobility.com, Booting and Towing, citing City Code § 150-88).",
  municipalCodeRefs: [
    {
      label: "§ 150-3 — Offenses by persons owning or controlling vehicles",
      citation: "Atlanta, Ga., Code of Ordinances § 150-3",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIINGE",
    },
    {
      label: "§ 150-88 — Immobilization of vehicles for unpaid citations (booting)",
      citation: "Atlanta, Ga., Code of Ordinances § 150-88",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE",
    },
    {
      label: "§ 150-131 — Enforcement (Parking Meters)",
      citation: "Atlanta, Ga., Code of Ordinances § 150-131",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
    },
    {
      label: "§ 150-133 — Overtime parking (fine schedule)",
      citation: "Atlanta, Ga., Code of Ordinances § 150-133",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
    },
    {
      label: "§ 150-133.1 — Appeals (14-day Municipal Court filing deadline)",
      citation: "Atlanta, Ga., Code of Ordinances § 150-133.1",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV3PAME_S150-137PAMEDEGIME",
    },
    {
      label: "§ 150-151 — Permit terms; fees (residential parking permit program established at § 150-147)",
      citation: "Atlanta, Ga., Code of Ordinances § 150-151",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE_ARTIVSTSTPA_DIV4REPEPA_S150-151PETEFE",
    },
  ],
  recognizedDefenses: [
    "valid-payment",
    "broken-meter",
    "not-my-vehicle",
    "wrong-ticket-details",
    "valid-permit",
  ],
  defenses: [valid_payment, broken_meter, not_my_vehicle, wrong_ticket_details, valid_permit],
  faqs: [
    {
      question: "How long do I have to appeal an Atlanta parking citation?",
      answer:
        "14 days from the citation's issuance date, per Atlanta City Code § 150-133.1. All parking fees, including late fees, are suspended while your appeal is pending. ATL+'s appeal portal treats this as a hard cutoff — appeals will not be filed after 14 days.",
    },
    {
      question: "Who reviews my Atlanta parking ticket appeal?",
      answer:
        "Up to three entities, in sequence: ATL+ (the City's contracted parking vendor) conducts the first review; any citation it upholds is automatically forwarded to the City of Atlanta DPW's Parking Administrative Review Team for a second review; and any citation still upheld is forwarded to the Atlanta Municipal Court for a hearing.",
    },
    {
      question: "What happens if I miss my Atlanta Municipal Court hearing?",
      answer:
        "If you don't appear at your assigned hearing and haven't already paid, you'll be deemed \"Failure to Appear,\" found liable for the violation, and late fees will be added. After that point the citation can generally only be paid, not further disputed.",
    },
    {
      question: "Can my vehicle be booted for unpaid Atlanta parking citations?",
      answer:
        "Yes. Under City Code § 150-88, a vehicle becomes eligible for immobilization once three or more unpaid citations are registered to that owner. You then have 24 hours to pay all outstanding citations plus a $50.00 boot-removal fee before the vehicle is towed to ATOW Wrecker Service.",
    },
  ],
  sources: [
    {
      label: "Atlanta, GA — Appeal a Parking Ticket",
      url: "https://www.atlantaga.gov/i-want-to/appeal-a-parking-ticket",
    },
    {
      label: "Atlanta, GA — Appeal a Parking Ticket (Parking Services)",
      url: "https://www.atlantaga.gov/government/departments/transportation/strategy-and-planning/parking-services/appeal-a-parking-ticket",
    },
    {
      label: "Municipal Court of Atlanta — Official Website",
      url: "https://court.atlantaga.gov/",
    },
    {
      label: "Municipal Court of Atlanta — FAQs",
      url: "https://court.atlantaga.gov/faqs",
    },
    {
      label: "ATL311 (City of Atlanta Customer Self-Service) — How do I dispute a parking ticket?",
      url: "https://www.atl311.com/en-us/knowledgearticle/?code=KB0012107",
    },
    {
      label: "Atlanta Department of Transportation — ATL Residential Permit Parking (PDF)",
      url: "https://atldot.atlantaga.gov/wp-content/uploads/2025/11/WEBSITE-ATL-Residential-Permit-Parking.pdf",
    },
    {
      label: "Municode Library — Atlanta Code of Ordinances, Chapter 150 (Traffic and Vehicles)",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances?nodeId=COORATGEVOII_CH150TRVE",
    },
    {
      label: "Municode Library — Atlanta Code of Ordinances (base)",
      url: "https://library.municode.com/ga/atlanta/codes/code_of_ordinances",
    },
    {
      label: "ATL+ — Appeal a Citation (City of Atlanta's designated on-street parking enforcement vendor)",
      url: "https://www.atlplusmobility.com/citations/appeal-a-citation/",
    },
    {
      label: "ATL+ — Types and Costs of Citations",
      url: "https://www.atlplusmobility.com/citations/types-and-costs-of-citations/",
    },
    {
      label: "ATL+ — Frequently Asked Questions",
      url: "https://www.atlplusmobility.com/faqs",
    },
    {
      label: "ATL+ — Booting and Towing",
      url: "https://www.atlplusmobility.com/booting-and-towing",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
