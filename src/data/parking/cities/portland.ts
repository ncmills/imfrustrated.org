import type { ParkingCity, ParkingDefense } from "../types";

// Verified against docs/superpowers/research/parking/portland.json (verifiedAt 2026-07-20).
// IMPORTANT: Portland parking-ticket disputes are NOT decided by an administrative tribunal or
// by the City's own Hearings Office. Portland Bureau of Transportation (PBOT) issues the
// citation, but disputes are adjudicated by the Multnomah County Circuit Court (a State of
// Oregon court) through its Parking Citation Office, under ORS 153.820's special procedures for
// parking violations in Multnomah County. The City's Hearings Office lists only Appeal, Code
// Enforcement, Land Use, and Tow Hearings — parking citations are absent from that list. Every
// defense statement below is a written not-guilty plea / written dispute submitted to the court,
// not an administrative appeal to PBOT or the City.
//
// Deadline nuance: PBOT's own citation guidance treats 30 days from the citation date as the
// hard deadline to avoid delinquency (added fees, a possible immobilization/impoundment
// warrant). But the court's own dedicated forms/pages (not-guilty plea, fine reduction,
// registration, ownership-transfer, stolen-vehicle, permit, and disabled-parking-space) each
// separately state a 60-day-from-citation-date submission window, consistent with ORS
// 153.820(2)(c). Practical guidance carried into contestDeadlineNote/ifThisDoesntWork below:
// respond within 30 days whenever possible to avoid delinquency consequences, but the court will
// still accept contest documentation up to roughly 60 days before a default judgment becomes
// likely.

const cityHowToContest: string[] = [
  "Locate your citation number, date, and the violation code printed on the yellow citation envelope/ticket.",
  "Optionally view the enforcement photos of your vehicle online at PBOT's Citation Photos lookup (citation number and citation date required) before deciding how to respond.",
  "Within 30 days of the citation date, choose one of three responses to avoid the citation going delinquent: (1) pay in full by phone, mail, or the Oregon Judicial Department's Courts E-Pay portal; (2) send a written explanation contesting the citation (a waiver of your right to a court hearing — the judge decides on the papers and either refunds or forfeits your payment); or (3) request a court hearing to plead not guilty.",
  "To plead not guilty and request a hearing, submit the Multnomah County Circuit Court's online Parking Hearing Request Form (linked from the court's 'How Do I Plead Not Guilty and Request a Hearing?' page), or mail/deliver a signed written trial request in the citation envelope. The court's own hearing-request, fine-reduction, registration, ownership-transfer, stolen-vehicle, permit, and disabled-parking-space pages each separately state a 60-day-from-citation-date submission window for their respective forms and documentation — but PBOT's own citation guidance treats 30 days as the operative deadline before delinquency consequences (added fees, a possible immobilization/impoundment warrant) attach, so respond within 30 days whenever possible.",
  "If pursuing a specific documented ground (paid at the time, valid permit/registration not displayed, vehicle sold/transferred/repossessed, vehicle stolen, or a valid disabled parking placard), use the matching Multnomah County Circuit Court form/page and attach the required proof; the court can grant a fine reduction or, on a not-guilty plea, set a trial.",
  "If your hearing is scheduled, appear by the court's video/WebEx hearing process or submit a Trial by Declaration (a sworn written statement) at least 3 business days before the hearing date.",
  "If you miss all deadlines, the court may enter a default judgment for the full fine under ORS 153.820; you generally have up to one year from case closure to file a Motion for Relief from Default Judgment showing good cause, though relief is discretionary.",
];

const ifThisDoesntWork =
  "If the court rules against you, or you miss the response window entirely, the court may enter a default judgment for the full fine under ORS 153.820, issue a warrant for immobilization and/or impoundment of the vehicle, and assign the balance to collections with added fees. You generally have up to one year from case closure to file a Motion for Relief from Default Judgment with the Multnomah County Circuit Court showing good cause, though relief after that period is granted only at the court's discretion.";

const valid_payment: ParkingDefense = {
  slug: "valid-payment",
  citySlug: "portland",
  title: "Fight a Portland parking ticket when you already paid",
  metaDescription:
    "Free written dispute for a Portland parking ticket issued despite valid payment. Cites Portland City Code 16.20.445 — court-ready template for Multnomah County.",
  whenItApplies:
    "You paid for parking at the meter/pay station (or had a valid parking permit) at the time of the citation, but the payment receipt fell off the window, wasn't visible from outside the vehicle, or otherwise wasn't seen or recorded by the enforcement officer.",
  body: `To: Multnomah County Circuit Court, Parking Citation Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead not guilty to this citation and request that it be dismissed.

On [DATE], I paid for parking at [LOCATION] at approximately [PAYMENT TIME] using the pay station/muni-meter serving that space. [DESCRIBE WHAT HAPPENED TO THE RECEIPT — e.g., it fell off the window, blew away, or was otherwise displaced before the citation was issued]. I had valid, paid-for parking at the location and time cited on this ticket.

Under Portland City Code § 16.20.445, proof of payment is required to be displayed, and I made that payment at the pay station serving this space; the receipt's absence from view at the time of enforcement does not reflect a failure to pay. I ask that this violation be dismissed on that basis.

Attached: [pay-station payment receipt showing the date, time, and location of purchase; a photo of the receipt if it fell off or was displaced; a copy of the citation; and a signed written explanation of what happened to the receipt].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Muni-meter/pay-station payment receipt showing the date, time, and location of purchase",
    "Photo of the receipt if it fell off, blew away, or was otherwise displaced",
    "A copy of the citation itself",
    "A signed written explanation describing what happened to the receipt",
  ],
  cityNotes:
    "Multnomah County Circuit Court's own published fine-reduction grounds include 'I had paid for parking at the time of the citation' (e.g., the receipt fell off the window) as an explicit, named reason the court will consider — submitted within 60 days of the citation date via the fine-reduction request form.",
  codeCite: {
    label: "Portland City Code 16.20.445 — Parking Meter Pay Stations (proof-of-payment display requirement)",
    citation: "Portland City Code § 16.20.445",
    url: "https://www.portland.gov/code/16/20/445",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Multnomah County Circuit Court — How Do I Request a Parking Fine Reduction?",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-reductions.aspx",
    },
    {
      label: "Portland City Code 16.20.445 — Parking Meter Pay Stations",
      url: "https://www.portland.gov/code/16/20/445",
    },
  ],
  faqs: [
    {
      question: "Is it enough to show I paid, even without the displayed receipt?",
      answer:
        "The Multnomah County Circuit Court's own fine-reduction page lists 'I had paid for parking at the time of the citation' as a named ground it will consider, so your pay-station receipt showing the matching date, time, and location is your strongest evidence, even if the receipt itself wasn't visible when the officer cited you.",
    },
    {
      question: "Where do I submit this — to PBOT or to the court?",
      answer:
        "To the court. PBOT issues the citation, but Portland parking disputes are decided by the Multnomah County Circuit Court's Parking Citation Office, not by a City hearings office.",
    },
    {
      question: "How long do I have to submit this?",
      answer:
        "Respond within 30 days of the citation date to avoid delinquency consequences (added fees, possible immobilization/impoundment). The court's own fine-reduction form separately states a 60-day window, so documentation submitted between 30 and 60 days may still be considered, but don't rely on that margin if you can act sooner.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const wrong_ticket_details: ParkingDefense = {
  slug: "wrong-ticket-details",
  citySlug: "portland",
  title: "Fight a defective parking ticket in Portland (missing or wrong details)",
  metaDescription:
    "Free motion to set aside a defective Portland parking citation missing required fields. Cites ORS 153.048 — court-ready template for Multnomah County.",
  whenItApplies:
    "The citation/complaint itself is defective — it is missing a required element (a clear statement of the violation, or the date, time, and place of the alleged offense) or lacks the enforcement officer's signed certification.",
  body: `To: Multnomah County Circuit Court, Parking Citation Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

Before entering any plea, I move under ORS 153.048 to have this citation/complaint set aside as defective.

The citation issued against me is missing or defective in the following required element: [DESCRIBE THE DEFECT — e.g., no clear statement of the violation, no date/time/place of the alleged offense, or no signed certification by the enforcing officer]. Comparing the citation against the copy of the record I received, the field in question reads: [QUOTE OR DESCRIBE WHAT THE CITATION ACTUALLY SHOWS].

Under ORS 153.048, a violation complaint must state the court, the parties, a clear description of the violation with date, time, and place, and the enforcing officer's signed certificate; where a complaint fails to meet these requirements, the court shall set the complaint aside upon motion of the defendant made before the entry of a plea. Because this citation is missing the element described above, I ask that it be set aside on that basis.

Attached: [a copy of the actual citation showing the missing or incorrect required field].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the actual citation showing the missing or incorrect required field",
    "A motion to set aside the defective complaint, filed with the court before entering a plea, citing ORS 153.048",
  ],
  cityNotes:
    "Oregon's statewide citation-contents statute, ORS 153.048, requires every violation complaint to state the court, the parties, a clear description of the violation with date/time/place, and the enforcing officer's signed certificate; if a complaint fails to meet these requirements, 'the court shall set the complaint aside upon motion of the defendant made before the entry of a plea.' This is a general Oregon citation-defect rule (applies to violation complaints generally, not a Portland-specific parking dispute ground), so raise it as a motion before entering a plea, ahead of or alongside your not-guilty plea/hearing request.",
  codeCite: {
    label: "ORS 153.048 — Complaint contents; defective complaint set aside on defendant's motion",
    citation: "Or. Rev. Stat. § 153.048",
    url: "https://oregon.public.law/statutes/ors_153.048",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "ORS 153.048 — Complaint (Oregon Public Law)",
      url: "https://oregon.public.law/statutes/ors_153.048",
    },
    {
      label: "Multnomah County Circuit Court — How Do I Plead Not Guilty and Request a Hearing?",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-request-hearing.aspx",
    },
  ],
  faqs: [
    {
      question: "Is any error on a Portland parking citation enough to get it thrown out?",
      answer:
        "No — ORS 153.048 requires the complaint to state the court, the parties, a clear description of the violation with date/time/place, and the officer's signed certificate. The missing or wrong field has to be one of those required elements, not a minor cosmetic typo.",
    },
    {
      question: "Do I file this instead of, or along with, a not-guilty plea?",
      answer:
        "ORS 153.048 requires this motion to be made 'before the entry of a plea,' so raise it first — before or alongside your written not-guilty plea and hearing request to the Multnomah County Circuit Court.",
    },
    {
      question: "What if the citation is missing the officer's signed certification?",
      answer:
        "That's one of the four required elements under ORS 153.048 (court, parties, violation description with date/time/place, and the officer's signed certificate). A citation missing the officer's certification is exactly the kind of defect this statute addresses.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const not_my_vehicle: ParkingDefense = {
  slug: "not-my-vehicle",
  citySlug: "portland",
  title: "Fight a Portland parking ticket for a sold, transferred, or stolen vehicle",
  metaDescription:
    "Free written dispute for a Portland parking ticket on a sold or stolen vehicle. Cites ORS 811.555(4) — court-ready template for Multnomah County Circuit Court.",
  whenItApplies:
    "The vehicle was sold, gifted, repossessed, or otherwise transferred before the citation date, was stolen at the time of the citation (police report filed prior to or within 24 hours of the citation), or was otherwise used without your permission, express or implied.",
  body: `To: Multnomah County Circuit Court, Parking Citation Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead not guilty to this citation and request that it be dismissed.

I was not responsible for the vehicle bearing plate [PLATE] on [DATE], the date this citation was issued. [SELECT AND COMPLETE THE APPLICABLE SCENARIO: (a) Sold/transferred/repossessed — I sold, transferred, or the vehicle was repossessed on [SALE/TRANSFER/REPOSSESSION DATE], before this citation was issued, as shown by the attached bill of sale, Certificate of Title, or repossession letter. / (b) Stolen — this vehicle was stolen at the time of the citation, as shown by the attached police report, reported prior to or within 24 hours of the citation date. / (c) Unauthorized use — the vehicle was used at the time and place cited without my permission, express or implied, as described in the attached explanation.]

Under ORS 811.555(4), it is an affirmative defense to owner liability for an illegal stopping, standing, or parking violation that the vehicle was used without the owner's consent, express or implied. I ask that this violation be dismissed on that basis.

Attached: [bill of sale referencing the vehicle by plate or VIN with the sale date and both parties' signatures, OR Certificate of Title (both sides) showing the sale date and buyer's signature, OR a repossession letter from the lender; OR a copy of the police report of the theft with a reported date prior to or within 24 hours of the citation date, referencing the vehicle's plate or VIN; OR an insurance cancellation letter stating the cancellation was due to sale/transfer, if applicable; and a copy of the citation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "Sold/transferred: a bill of sale referencing the vehicle by plate or VIN, including the sale date and both parties' signatures, OR the vehicle's Certificate of Title (both sides) showing the sale date and buyer's signature, OR a repossession letter from the lender referencing the vehicle and surrender date",
    "Stolen: a copy of the police report of the theft, with a 'reported date' prior to or within 24 hours of the citation issue date, referencing the vehicle's plate or VIN",
    "Insurance cancellation letter on letterhead stating the cancellation was due to sale/transfer, if applicable",
    "A copy of the citation",
  ],
  cityNotes:
    "Multnomah County Circuit Court maintains two dedicated official pages for this: one for vehicles sold, repossessed, or transferred before the citation date, and a separate one for stolen vehicles, each requiring documentation received within 60 days of the citation date.",
  codeCite: {
    label: "ORS 811.555 — Illegal stopping, standing or parking; owner liability and affirmative defense (unauthorized use)",
    citation: "Or. Rev. Stat. § 811.555",
    url: "https://oregon.public.law/statutes/ors_811.555",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Multnomah County Circuit Court — Sold / Repossessed / Transferred Vehicle",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Ownership.aspx",
    },
    {
      label: "Multnomah County Circuit Court — Stolen Vehicles",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Stolen.aspx",
    },
    {
      label: "ORS 811.555 (Oregon Public Law)",
      url: "https://oregon.public.law/statutes/ors_811.555",
    },
  ],
  faqs: [
    {
      question: "I sold the car before the citation date — do I still need to respond?",
      answer:
        "Yes. Submit your written not-guilty plea (or use the court's dedicated Sold/Repossessed/Transferred Vehicle page) with your bill of sale or Certificate of Title showing a sale date before the citation was issued, within 60 days of the citation date.",
    },
    {
      question: "What if my car was stolen when it was ticketed?",
      answer:
        "Use the Multnomah County Circuit Court's dedicated Stolen Vehicles page and attach your police report. The report's 'reported date' needs to be prior to or within 24 hours of the citation's issue date.",
    },
    {
      question: "What's the legal basis for this defense?",
      answer:
        "ORS 811.555(4) provides an affirmative defense to owner liability for illegal stopping, standing, or parking where the vehicle was used without the owner's consent, express or implied — which covers theft and certain unauthorized-use situations.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const valid_permit_not_displayed: ParkingDefense = {
  slug: "valid-permit-not-displayed",
  citySlug: "portland",
  title: "Fight a Portland parking ticket for a permit that wasn't displayed",
  metaDescription:
    "Free written dispute for a Portland parking ticket citing an undisplayed but valid permit. Cites Portland City Code 16.20.503 — court-ready template.",
  whenItApplies:
    "You were cited for not displaying a required parking permit (e.g., area, disabled-resident, or vehicle parking permit), but you actually held a valid permit that would have allowed you to park there at the time the citation was issued — it just wasn't properly displayed.",
  body: `To: Multnomah County Circuit Court, Parking Citation Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead not guilty to this citation and request that it be dismissed.

On [DATE], I was cited at [LOCATION] for not displaying a required parking permit. I held a valid, currently-approved permit — [PERMIT TYPE/NUMBER] — that would have allowed me to park at that location at the time this citation was issued; [DESCRIBE WHY IT WASN'T VISIBLE — e.g., it had shifted on the dashboard, was face-down, or was otherwise not visible from outside the vehicle].

Under Portland City Code § 16.20.503, only current approval of the permit is required, and I held that current approval at the time cited. This is also consistent with the Multnomah County Circuit Court's own published guidance recognizing, as a named ground, that a citation for a permit "not displayed" may be contested where the holder in fact had a permit that would have allowed parking at the time of the citation. I ask that this violation be dismissed on that basis.

Attached: [a copy of the valid permit that was in effect at the time of the citation, a copy of the citation, and a signed letter of explanation describing why the permit wasn't visible/displayed].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the valid permit that was in effect at the time of the citation",
    "A copy of the citation",
    "A signed letter of explanation describing why the permit wasn't visible/displayed",
  ],
  cityNotes:
    "This is a Multnomah County Circuit Court-recognized ground distinct from the general 'wrong ticket details' defense: the court's own permit-citation page states that if you were 'cited for not having a permit displayed, but have a permit that would have allowed you to park when the citation was issued,' you may contest via a fine-reduction request or a not-guilty plea/hearing request. The court warns that if a judge believes the permit is being misused or the holder is confused about its use, a full trial may be ordered instead of a quick reduction.",
  codeCite: {
    label: "Portland City Code 16.20.503 — Current Approval of Parking Permits Required Before Use",
    citation: "Portland City Code § 16.20.503",
    url: "https://www.portland.gov/code/16/20/503",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Multnomah County Circuit Court — Parking Permits",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Permits.aspx",
    },
    {
      label: "Multnomah County Circuit Court — How Do I Request a Parking Fine Reduction?",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-reductions.aspx",
    },
  ],
  faqs: [
    {
      question: "Does having a valid permit matter if it wasn't visible when I was cited?",
      answer:
        "Yes, per the Multnomah County Circuit Court's own permit-citation page: if you had a permit that would have allowed you to park there at the time of the citation, that's a named, recognized ground for contesting the ticket even though it wasn't displayed.",
    },
    {
      question: "Could this still go to a full trial instead of a quick fine reduction?",
      answer:
        "Yes. The court's guidance warns that if a judge believes the permit is being misused, or the holder seems confused about how it may be used, the judge may order a full trial rather than granting a quick fine reduction.",
    },
    {
      question: "What kind of permit does this cover?",
      answer:
        "Any Portland parking permit requiring current approval before use under Portland City Code 16.20.503 — for example, an area permit, a disabled-resident permit, or a vehicle parking permit — as long as it was valid and currently approved at the time the citation was issued.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

const disabled_parking_permit_valid: ParkingDefense = {
  slug: "disabled-parking-permit-valid",
  citySlug: "portland",
  title: "Fight a Portland disabled parking ticket when your placard is valid",
  metaDescription:
    "Free written dispute for a Portland disabled-zone parking ticket despite a valid placard. Cites Portland City Code 16.20.640 — court-ready template.",
  whenItApplies:
    "You were cited for parking in a disabled/wheelchair-user parking zone or space without a displayed placard, but you (or the person you were transporting) held a valid State of Oregon-issued Disabled Person Parking Permit at the time of the citation.",
  body: `To: Multnomah County Circuit Court, Parking Citation Office
Re: Citation No. [CITATION NUMBER]
Plate: [PLATE] ([STATE])
Date/Time: [DATE], [TIME]
Location cited: [LOCATION]

I plead not guilty to this citation and request that it be dismissed.

On [DATE], I was cited at [LOCATION] for parking in a disabled-designated parking space without a displayed placard. [I / the person I was transporting] held a valid State of Oregon-issued Disabled Person Parking Permit, number [PERMIT NUMBER], in effect at the time this citation was issued. [DESCRIBE WHY IT WASN'T VISIBLE, IF APPLICABLE]. The space cited was the disabled-designated space itself, not an adjacent access aisle.

Under Portland City Code § 16.20.640, a valid Disabled Person Placard authorizes parking in the disabled-designated space in metered districts, and I held that valid placard at the time cited. I ask that this violation be dismissed on that basis.

Attached: [a copy of the disabled placard that was valid at the time the citation was issued, a copy of the citation, a paid parking receipt if applicable, and a signed letter of explanation].

Respectfully,
[YOUR NAME]
[ADDRESS]
[PHONE]
[EMAIL]`,
  evidenceChecklist: [
    "A copy of the disabled placard that was valid at the time the citation was issued",
    "A copy of the citation",
    "Paid parking receipt, if applicable (some disabled-zone rules still require meter payment up to the posted time limit)",
    "A signed letter of explanation",
  ],
  cityNotes:
    "Multnomah County Circuit Court maintains a dedicated page for disabled parking space citations, requiring documentation within 60 days of the citation date; it separately notes that a disabled permit does not authorize parking in a handicap access aisle, so make sure the citation is specifically for the disabled-designated space itself, not an adjacent access aisle.",
  codeCite: {
    label: "Portland City Code 16.20.640 — Disabled Person Placard – Metered Districts",
    citation: "Portland City Code § 16.20.640",
    url: "https://www.portland.gov/code/16/20/640",
  },
  howToSubmit: cityHowToContest,
  ifThisDoesntWork,
  sources: [
    {
      label: "Multnomah County Circuit Court — Disabled Parking Spaces",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Disabled-Spaces.aspx",
    },
    {
      label: "Portland City Code 16.20.640 — Disabled Person Placard – Metered Districts",
      url: "https://www.portland.gov/code/16/20/640",
    },
  ],
  faqs: [
    {
      question: "Does a valid placard cover the access aisle next to a disabled space too?",
      answer:
        "No. The Multnomah County Circuit Court's own guidance specifically notes that a disabled permit does not authorize parking in a handicap access aisle — confirm your citation was for the disabled-designated space itself, not the adjacent striped access aisle, before relying on this defense.",
    },
    {
      question: "Do I still need to pay the meter if I'm in a disabled space?",
      answer:
        "Possibly — some disabled-zone rules still require meter payment up to the posted time limit even with a valid placard. If applicable, attach your paid parking receipt alongside your placard.",
    },
    {
      question: "Where do I submit documentation for this ground?",
      answer:
        "The Multnomah County Circuit Court maintains a dedicated Disabled Parking Spaces page for this ground, and requires the documentation to be received within 60 days of the citation date.",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};

export const portlandCity: ParkingCity = {
  slug: "portland",
  city: "Portland",
  state: "OR",
  agency:
    "Portland Bureau of Transportation (PBOT) issues parking citations, but disputes are adjudicated by the Multnomah County Circuit Court (a State of Oregon court), NOT by the City's own Code Hearings Office / Auditor's Hearings Office. Portland's Hearings Office lists only Appeal Hearings (non-tow City decisions), Code Enforcement Hearings, Land Use Hearings, and Tow Hearings among the matters it handles — parking citations are absent from that list — and PBOT's own official guidance sends every payment, written contest, and hearing request to the Circuit Court's Parking Citation Office, not to the City.",
  submitOnlineUrl: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-request-hearing.aspx",
  submitMailAddress: "Multnomah County Circuit Court, Parking Citation Office, P.O. Box 78, Portland, OR 97207",
  submitInPerson:
    "Multnomah County Central Courthouse, Circuit Court Parking Citation counter, 2nd Floor, 1200 SW First Avenue, Portland, OR 97204. Phone 971-274-0590 (Oregon Relay Service: 711).",
  howToContest: cityHowToContest,
  contestDeadlineDays: 30,
  contestDeadlineNote:
    "PBOT's official citation guidance states you must do one of the three response options (pay, written contest, or hearing request) 'within 30 days of the date of the citation, or the citation will be delinquent,' after which 'the court may issue a warrant for immobilization and/or impoundment (tow) of the cited vehicle, enter a judgment and impose a fine up to the maximum amount allowed by law, assign the citation to collections and add fees.' Source: https://www.portland.gov/transportation/parking/pay-and-or-contest-parking-ticket. Separately, and somewhat in tension with that 30-day framing, the Multnomah County Circuit Court's own dedicated forms/pages for pleading not guilty, requesting a fine reduction, or documenting vehicle registration/ownership-transfer/theft/disabled-placard grounds each independently state a 60-day-from-citation-date window to submit ('Please submit this form within 60 days from the date of your citation' — https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-request-hearing.aspx; 'The court must receive the form and supporting documentation within 60 days from the date the citation was issued' — https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-reductions.aspx). This 60-day court-side window is also consistent with ORS 153.820(2)(c), which lets a respondent file a hearing request within 60 days after a mailed notice before the court may decide without a hearing (https://oregon.public.law/statutes/ors_153.820). Practical guidance: treat 30 days from the citation date as the hard deadline to avoid delinquency-related fees and boot/impound risk, but know the court will still accept contest documentation up to roughly 60 days from the citation date before a default judgment becomes likely.",
  penaltyNote:
    "If a citation goes delinquent (unresolved past 30 days), the court may issue a warrant for immobilization and/or impoundment of the vehicle, enter a judgment for the fine up to the statutory maximum, and assign the debt to collections with added fees (https://www.portland.gov/transportation/parking/pay-and-or-contest-parking-ticket). Vehicles with unpaid parking citations and fees totaling more than $500, or six delinquent citations, are subject to PBOT booting; a boot stays on the vehicle up to 36 hours before towing, and towing/storage triggers standard tow fees (roughly $248–$471+ depending on vehicle class) plus storage fees of about $32–$49 per 24-hour period after the first 4 hours (https://www.portland.gov/transportation/parking/booting). Under ORS 153.820, if you never appear or respond, the court may enter a default 'failure to appear' judgment for the full fine amount, and if that balance isn't paid the court may order the vehicle towed, add fees, and send the balance to collections; you have up to one year from case closure to file a Motion for Relief from Default Judgment, with relief after that period granted only on a showing of good cause (https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Default.aspx; https://oregon.public.law/statutes/ors_153.820).",
  municipalCodeRefs: [
    {
      label: "Portland City Code 16.20.120 — Prohibited Parking or Stopping of a Vehicle",
      citation: "Portland City Code § 16.20.120",
      url: "https://www.portland.gov/code/16/20/120",
    },
    {
      label: "Portland City Code 16.20.130 — Prohibited in Specified Places",
      citation: "Portland City Code § 16.20.130",
      url: "https://www.portland.gov/code/16/20/130",
    },
    {
      label: "Portland City Code 16.20.445 — Parking Meter Pay Stations (proof-of-payment display requirement)",
      citation: "Portland City Code § 16.20.445",
      url: "https://www.portland.gov/code/16/20/445",
    },
    {
      label: "Portland City Code 16.20.450 — Obstruction of Parking Meters",
      citation: "Portland City Code § 16.20.450",
      url: "https://www.portland.gov/code/16/20/450",
    },
    {
      label: "Portland City Code 16.20.503 — Current Approval of Parking Permits Required Before Use",
      citation: "Portland City Code § 16.20.503",
      url: "https://www.portland.gov/code/16/20/503",
    },
    {
      label: "Portland City Code 16.20.640 — Disabled Person Placard – Metered Districts",
      citation: "Portland City Code § 16.20.640",
      url: "https://www.portland.gov/code/16/20/640",
    },
    {
      label: "ORS 153.820 — Special procedures for parking violations in Multnomah County",
      citation: "Or. Rev. Stat. § 153.820",
      url: "https://oregon.public.law/statutes/ors_153.820",
    },
    {
      label: "ORS 811.555 — Illegal stopping, standing or parking; owner liability and affirmative defense",
      citation: "Or. Rev. Stat. § 811.555",
      url: "https://oregon.public.law/statutes/ors_811.555",
    },
    {
      label: "ORS 153.048 — Complaint contents; defective complaint set aside on defendant's motion",
      citation: "Or. Rev. Stat. § 153.048",
      url: "https://oregon.public.law/statutes/ors_153.048",
    },
  ],
  recognizedDefenses: [
    "valid-payment",
    "wrong-ticket-details",
    "not-my-vehicle",
    "valid-permit-not-displayed",
    "disabled-parking-permit-valid",
  ],
  defenses: [valid_payment, wrong_ticket_details, not_my_vehicle, valid_permit_not_displayed, disabled_parking_permit_valid],
  faqs: [
    {
      question: "How long do I have to dispute a Portland parking ticket?",
      answer:
        "PBOT's official guidance treats 30 days from the citation date as the hard deadline to avoid delinquency (added fees, possible immobilization/impoundment). The Multnomah County Circuit Court's own dedicated forms separately state a 60-day-from-citation-date window, consistent with ORS 153.820(2)(c) — so respond within 30 days whenever possible, but know the court will generally still accept documentation up to roughly 60 days before a default judgment becomes likely.",
    },
    {
      question: "Who decides Portland parking ticket disputes?",
      answer:
        "PBOT issues the citation, but disputes are adjudicated by the Multnomah County Circuit Court — a State of Oregon court — through its Parking Citation Office, not by the City's own Hearings Office. The City's Hearings Office lists only Appeal, Code Enforcement, Land Use, and Tow Hearings; parking citations aren't among them.",
    },
    {
      question: "What are my options when I respond to a Portland parking citation?",
      answer:
        "Within 30 days of the citation date you can: pay in full, send a written explanation contesting the citation (which waives your right to a court hearing — a judge decides on the papers), or request a court hearing to plead not guilty.",
    },
    {
      question: "What happens if I ignore a Portland parking ticket?",
      answer:
        "If it goes delinquent, the court may issue a warrant for immobilization and/or impoundment, enter a default judgment under ORS 153.820 for the full fine, and send the balance to collections with added fees. You generally have up to one year from case closure to file a Motion for Relief from Default Judgment showing good cause.",
    },
    {
      question: "Can my car be booted over unpaid Portland parking tickets?",
      answer:
        "Yes. Vehicles with unpaid parking citations and fees totaling more than $500, or six delinquent citations, are subject to PBOT booting. A boot stays on the vehicle up to 36 hours before towing, and towing/storage adds standard tow and storage fees on top of the fines owed.",
    },
  ],
  sources: [
    {
      label: "Portland.gov (PBOT) — Pay and/or Contest a Parking Ticket",
      url: "https://www.portland.gov/transportation/parking/pay-and-or-contest-parking-ticket",
    },
    {
      label: "Portland.gov (PBOT) — Common Parking Violations and Fine Amounts",
      url: "https://www.portland.gov/transportation/parking/parking-violations",
    },
    {
      label: "Portland.gov (PBOT) — Booting, explained",
      url: "https://www.portland.gov/transportation/parking/booting",
    },
    {
      label: "Portland.gov (PBOT) — Citation Photos lookup",
      url: "https://www.portlandoregon.gov/transportation/citationphotos/",
    },
    {
      label: "Portland.gov — Hearings Office (service location; lists Appeal, Code Enforcement, Land Use, and Tow Hearings — no parking citations)",
      url: "https://www.portland.gov/service-locations/hearings-office",
    },
    {
      label: "Portland.gov — Appeal Hearings (appeal a City decision other than a vehicle tow)",
      url: "https://www.portland.gov/auditor/hearings/appeal-city-decision",
    },
    {
      label: "Portland City Code — Title 16 Vehicles and Traffic (full text)",
      url: "https://www.portland.gov/code/16/all",
    },
    {
      label: "Oregon Judicial Department — Multnomah County: Parking Citations (Going to Court)",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/parking.aspx",
    },
    {
      label: "Oregon Judicial Department — How Do I Plead Not Guilty and Request a Hearing?",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-request-hearing.aspx",
    },
    {
      label: "Oregon Judicial Department — How Do I Request a Parking Fine Reduction?",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-reductions.aspx",
    },
    {
      label: "Oregon Judicial Department — Vehicle Registration citation review",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-registration.aspx",
    },
    {
      label: "Oregon Judicial Department — Sold / Repossessed / Transferred Vehicle",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Ownership.aspx",
    },
    {
      label: "Oregon Judicial Department — Stolen Vehicles",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Stolen.aspx",
    },
    {
      label: "Oregon Judicial Department — Parking Permits",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Permits.aspx",
    },
    {
      label: "Oregon Judicial Department — Disabled Parking Spaces",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Disabled-Spaces.aspx",
    },
    {
      label: "Oregon Judicial Department — Default Judgments (parking citations)",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/Pages/PK-Default.aspx",
    },
    {
      label: "Oregon Judicial Department — FAQs, Videos, and Helpful Links (registered-owner liability, ORS 811.555(1)(b))",
      url: "https://www.courts.oregon.gov/courts/multnomah/go/pages/pk-resources.aspx",
    },
    {
      label: "ORS 153.820 — Special procedures for parking violations in Multnomah County",
      url: "https://oregon.public.law/statutes/ors_153.820",
    },
    {
      label: "ORS 811.555 — Illegal stopping, standing or parking",
      url: "https://oregon.public.law/statutes/ors_811.555",
    },
    {
      label: "ORS 153.048 — Complaint",
      url: "https://oregon.public.law/statutes/ors_153.048",
    },
  ],
  verifiedAt: "2026-07-20",
  publishedAt: "2026-07-20",
};
