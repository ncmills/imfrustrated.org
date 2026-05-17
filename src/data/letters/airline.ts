import type { LetterTemplate } from "./types";

// Federal DOT regulations verified May 2026. Key 2024-2025 updates incorporated:
// - DOT 2024 final rule on automatic refunds (89 FR 32760, eff. Oct 28, 2024)
//   created 14 CFR Part 260 — mandatory cash refunds, original form of payment.
// - 14 CFR § 254.4 domestic baggage liability floor raised $3,800 → $4,700,
//   eff. Jan 22, 2025 (89 FR 84819).
// - Montreal Convention Art. 22(2) baggage cap raised 1,288 → 1,519 SDRs
//   (~$2,019 USD), eff. Dec 28, 2024.
// - 14 CFR Part 250 (oversales) compensation tiers raised to $1,075 / $2,150
//   max, eff. Jan 22, 2025.

export const airlineLetters: LetterTemplate[] = [
  {
    slug: "flight-cancellation-refund",
    category: "airline",
    title: "Flight Cancellation Cash Refund Demand Letter (DOT 2024 Rule)",
    metaDescription:
      "Airline cancelled your flight and offered a voucher? Free demand letter citing 14 CFR Part 260 — automatic cash refunds, original payment method, 7 business days.",
    lede:
      "Your flight was cancelled or significantly changed, and the airline offered a voucher. Under the DOT's 2024 rule, you're entitled to a cash refund to the original payment method — not a voucher, not a credit. This letter invokes it.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Customer Relations / Refunds Department]
[Address from contract of carriage]

Sent via certified mail, return receipt requested
(Copy also emailed to [airline customer service])

Re: Demand for Cash Refund Under 14 CFR Part 260 — Confirmation [PNR/Locator]

To Whom It May Concern:

I am demanding a full cash refund of $[Amount] for the transaction described below, pursuant to the DOT 2024 final rule "Refunds and Other Consumer Protections" (89 Fed. Reg. 32760, Apr. 26, 2024), codified at 14 CFR Part 260.

Flight details:
  • Confirmation / Record Locator (PNR): [Number]
  • Ticket number(s): [Number(s)]
  • Flight number(s): [Number(s)]
  • Originally scheduled: [Date, depart and arrive times, route]
  • Payment method: [Credit card last 4 / cash / other]
  • Total paid (fare + taxes + ancillary fees): $[Amount]

Triggering event:
  [Pick one and delete the others.]
  [ ] The airline cancelled the flight on [Date].
  [ ] The airline made a significant change: departure or arrival shifted by [X] hours [domestic — threshold 3+ hours / international — threshold 6+ hours], exceeding the threshold in 14 CFR § 260.2.
  [ ] The airline changed the origin or destination airport.
  [ ] The airline added a connection.
  [ ] The airline downgraded my class of service.

Refund right:

Under 14 CFR §§ 260.6 and 260.10, where a covered carrier cancels or significantly changes a flight and the passenger does not accept rebooking or alternative compensation, the airline must issue an automatic refund to the original form of payment within 7 business days (credit card) or 20 calendar days (cash, check, debit, or other), in the full amount of the fare plus taxes and ancillary fees.

I do not accept a voucher, travel credit, or any other non-cash form of compensation. Under 14 CFR § 260.7, the airline may not deem me to have accepted alternative compensation absent my affirmative agreement.

Demand:

Within [7] business days of receipt of this letter, please refund $[Amount] to the original form of payment (credit card ending [last 4]). Confirm in writing.

If you do not, I will pursue all available remedies, including:
  • A chargeback under the Fair Credit Billing Act (15 U.S.C. § 1666) with my card issuer, within the 60-day FCBA window;
  • A complaint to the DOT Office of Aviation Consumer Protection at transportation.gov/airconsumer/file-consumer-complaint;
  • A complaint to my state Attorney General under state UDAP law;
  • A breach-of-contract-of-carriage action in [state] small claims court.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [confirmation; ticket receipt; cancellation/change notice; any chat/email transcript where a voucher was offered]`,
    howToUse: [
      "Send by certified mail with return receipt requested to the airline's customer-relations address listed in its contract of carriage. Email a copy to the airline's customer-service address too.",
      "File a parallel FCBA chargeback with your credit-card issuer within 60 days of the statement showing the original ticket charge. The chargeback often resolves faster than the airline-side demand.",
      "File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint at the same time. DOT does not adjudicate individual refunds but logs the complaint, requires the airline to respond within 60 days, and tracks airline refund-rule compliance — which often unlocks the cash refund.",
      "Document everything: screenshots of the cancellation notice, the voucher offer, any chatbot path that did not surface the cash-refund option, the original ticket purchase, and the contract of carriage version in effect when you booked.",
      "Note: a December 5, 2025 DOT notice paused enforcement of one narrow slice of the rule (flights operated under a different flight number than sold, where no significant change results). This does NOT affect the core refund right for actual cancellations or significant changes — your letter is unaffected.",
    ],
    legalContext: [
      "The DOT's 2024 final rule \"Refunds and Other Consumer Protections,\" published at 89 Fed. Reg. 32760 (April 26, 2024) and codified at 14 CFR Part 260, fundamentally changed airline refund obligations. Effective June 25, 2024, with a compliance date of October 28, 2024, the rule makes cash refunds automatic and mandatory whenever a covered carrier cancels or significantly changes a flight and the passenger does not accept rebooking or alternative compensation. Vouchers, travel credits, and miles may no longer be foisted on consumers as the default; the passenger must affirmatively accept any non-cash form under § 260.7.",
      "The triggers are defined precisely in 14 CFR § 260.2. \"Cancelled flight\" means a covered flight published in the carrier's reservation system at the time of sale that the carrier did not operate. \"Significantly delayed or changed flight\" means departure or arrival shifts of 3 or more hours for domestic itineraries, 6 or more hours for international, OR a change in origination/destination airport, OR an increase in the number of connections, OR a downgrade in class of service, OR (for passengers with disabilities) connection at a different airport or substitute aircraft lacking required accessibility features. The reason for the cancellation — weather, mechanical, ATC — is irrelevant.",
      "What must be refunded under § 260.6: a \"full and prompt refund of the airfare, including any taxes and ancillary fees.\" Ancillary fees under § 260.4 include baggage, seat selection, Wi-Fi, meals, upgrades, lounge access — anything paid for but not received. Form of refund under § 260.10 must be the original form of payment, unless the consumer agrees in writing to a \"cash equivalent\" (check, prepaid card, bank transfer, widely-accepted gift card with no consumer-borne fees). Vouchers and travel credits are NOT cash equivalents. The airline may not retain a processing fee.",
      "Timing under § 260.2 \"prompt refund\": 7 business days for credit-card purchases; 20 calendar days for cash, check, debit card, or other forms of payment. The FAA Reauthorization Act of 2024 (Pub. L. 118-63, May 16, 2024) codified parallel statutory refund duties self-effectuating on enactment. DOT enforcement has been substantial — multi-airline 2024-2025 actions returned more than $600M to consumers; a $25M proposed civil penalty against Air Canada for refund delays. A December 5, 2025 DOT notice (90 FR 22140) paused enforcement for one narrow scenario (flights operated under a different flight number with no significant change), but the core cancellation/significant-change refund right remains operative.",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline ignores the demand or sends only a voucher, escalate immediately. File a chargeback with your card issuer under the FCBA — within 60 days of the statement showing the original ticket charge, with the reason code \"services not rendered.\" File a complaint with DOT at transportation.gov/airconsumer/file-consumer-complaint; DOT routes it to the airline and requires a written response within 60 days, which has resolved many post-voucher disputes. File with your state Attorney General. For amounts above small-claims limits or where the airline is in bankruptcy, consult a consumer-protection attorney. Federal preemption (49 U.S.C. § 41713) bars many state-law claims against airlines, but a contract-of-carriage breach claim seeking the refund the contract itself promises generally survives (American Airlines v. Wolens, 513 U.S. 219).",
    relatedSlugs: [
      "tarmac-delay-refund",
      "voucher-to-cash",
      "lost-luggage-claim",
      "damaged-luggage-claim",
      "bumped-compensation",
      "hotel-overcharge-dispute",
    ],
    faqs: [
      {
        question: "The airline only offered me a voucher. Do I have to take it?",
        answer:
          "No. Under 14 CFR §§ 260.6 and 260.10, the refund must be in the original form of payment unless you agree otherwise. Vouchers and travel credits are not \"cash equivalents.\" The airline may not deem you to have accepted alternative compensation absent your affirmative agreement (§ 260.7).",
      },
      {
        question: "My flight was delayed 2.5 hours — am I entitled to a refund?",
        answer:
          "No. The threshold is 3 hours domestic / 6 hours international under 14 CFR § 260.2. A 2.5-hour domestic delay does not trigger the automatic refund right (though airline-specific contract-of-carriage terms may give you more).",
      },
      {
        question: "How long does the airline have to pay?",
        answer:
          "7 business days for credit-card purchases, 20 calendar days for cash/check/debit, measured from the earliest date the refund was requested. 14 CFR § 260.2 (\"prompt refund\" definition).",
      },
      {
        question: "I paid a checked-bag fee but the bag never arrived. Refund?",
        answer:
          "Yes. 14 CFR §§ 260.4 and 260.5 require refund of ancillary fees for services paid for but not provided, and of bag fees for significantly delayed or lost bags (delay thresholds: 12 hours domestic, 15 hours international ≤12-hr flights, 30 hours international >12-hr flights).",
      },
      {
        question: "The airline said it's not their fault — weather. Does that matter?",
        answer:
          "No. The rule is reason-neutral. If they cancel or significantly change the flight, and you don't accept rebooking, you get a cash refund regardless of cause.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "tarmac-delay-refund",
    category: "airline",
    title: "Tarmac Delay Compensation Demand Letter (14 CFR § 259.4)",
    metaDescription:
      "Stuck on a plane for hours? Free demand letter citing 14 CFR § 259.4 tarmac-delay rules + DOT 2024 refund rule for cancellation/significant change.",
    lede:
      "You were stuck on a tarmac for hours, with no deplane offer, maybe no water, maybe no working lavatory. The federal rule on tarmac delays has real teeth — and DOT can fine the airline up to $27,500 per passenger. This letter invokes it.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Customer Relations Department]
[Address from contract of carriage]

Sent via certified mail, return receipt requested

Re: Tarmac Delay Violation Under 14 CFR § 259.4 — Confirmation [PNR]

To Whom It May Concern:

I am writing about the tarmac delay on flight [Number] on [Date], from [Origin] to [Destination], confirmation [PNR/Locator]. The airline's conduct violated 14 CFR § 259.4, and I am demanding the remedies set out below.

Delay facts:
  • Scheduled departure: [Date / Time]
  • Actual gate departure: [Date / Time]
  • Actual gate return / deplane: [Date / Time]
  • Total tarmac time with boarding door closed: [X hours, Y minutes]
  • [If domestic: was the 3-hour threshold exceeded? Yes/No]
  • [If international: was the 4-hour threshold exceeded? Yes/No]

Specific § 259.4 violations:

  [Pick all that apply.]
  [ ] § 259.4(b)(1): No deplane opportunity offered before the 3-hour [domestic] / 4-hour [international] mark.
  [ ] § 259.4(b)(3): Food and potable water were not served within 2 hours into the delay.
  [ ] § 259.4(b)(3): Lavatories were not operable / sufficient medical attention was not provided.
  [ ] § 259.4(b)(5): Status updates were not provided every 30 minutes, including reasons.
  [ ] § 259.4(b)(6): The airline failed to notify passengers when a deplane opportunity existed.

[If the flight was also cancelled or significantly delayed:]
The flight was [cancelled / arrived more than 3 hours late (domestic) / arrived more than 6 hours late (international)]. Under DOT's 2024 refund rule, 14 CFR Part 260, the airline owes an automatic refund of $[Amount] to the original form of payment (credit card ending [last 4]) within 7 business days (credit card) / 20 calendar days (other), in addition to any out-of-pocket reimbursements requested below.

Demand:

Within [14] days of receipt of this letter, please:

  1. Refund the fare under 14 CFR Part 260 if the flight was cancelled or significantly changed: $[Amount].
  2. Refund ancillary fees (bags, seat selection, Wi-Fi) for services not delivered: $[Amount].
  3. Reimburse documented out-of-pocket expenses (meals, hotel, ground transport, missed connection on other carrier): $[Amount] — receipts attached.
  4. Confirm in writing.

If you do not respond by [Date], I will pursue:
  • A complaint to the DOT Office of Aviation Consumer Protection at transportation.gov/airconsumer/file-consumer-complaint. DOT may impose civil penalties up to $27,500 per passenger for § 259.4 violations under 49 U.S.C. § 41712.
  • A chargeback under the FCBA, 15 U.S.C. § 1666, for the disputed amount.
  • A breach-of-contract-of-carriage action in [state] small claims court. (14 CFR § 259.4 itself is not privately enforceable due to Airline Deregulation Act preemption (49 U.S.C. § 41713(b)), but the carrier's contract of carriage incorporates the contingency plan under § 259.6 — and breach-of-contract claims are not preempted.)

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [boarding pass; flight-status screenshots; receipts for meals/hotel/ground transport; photos of cabin conditions if any]`,
    howToUse: [
      "Send by certified mail with return receipt requested. The certified-mail receipt is what proves the date of delivery and starts any subsequent damages clock.",
      "File a parallel DOT complaint at transportation.gov/airconsumer/file-consumer-complaint. DOT can fine the airline up to $27,500 per passenger for § 259.4 violations — money goes to the Treasury, not you, but the airline knows this and many resolve voucher/cash disputes once a DOT file number is attached.",
      "Document the timeline precisely: gate departure time, gate return time, when food/water was offered (if at all), when deplane was offered (if at all). Screenshots of the airline app showing status changes are gold.",
      "If the flight was also cancelled or significantly delayed, the DOT 2024 refund rule (14 CFR Part 260) gives you a separate, automatic cash refund right. See the flight cancellation refund letter in this library — the two letters can stack.",
      "Note that 14 CFR § 259.4 itself is generally not privately enforceable (Airline Deregulation Act preemption). The legal path is the breach-of-contract-of-carriage angle: § 259.6 requires the contingency plan to be incorporated into the contract, and breach-of-contract claims are not preempted (American Airlines v. Wolens, 513 U.S. 219).",
    ],
    legalContext: [
      "14 CFR § 259.4 is the federal rule on lengthy tarmac delays, part of DOT's \"Enhanced Protections for Airline Passengers\" at 14 CFR Part 259. Every covered carrier — U.S. carriers and foreign carriers operating scheduled service at U.S. airports with aircraft seating 30 or more passengers — must adopt, post, and incorporate into its contract of carriage a tarmac-delay contingency plan guaranteeing: (i) a deplane offer before 3 hours (domestic) or 4 hours (international); (ii) food and potable water within 2 hours; (iii) operable lavatories and medical attention as needed; (iv) status updates every 30 minutes; (v) affirmative notification of any deplane opportunity. Failure to comply is an \"unfair and deceptive practice\" under 49 U.S.C. § 41712 and triggers DOT enforcement.",
      "What's recoverable comes in three buckets and must be managed carefully. First, the fare refund if the flight was cancelled or significantly delayed — under the DOT 2024 rule (89 FR 32760), automatic cash refund to original form of payment, within 7 business days (credit card) or 20 calendar days (other). Second, ancillary-fee refunds for services not delivered. Third, documented out-of-pocket expenses (meals, hotel, ground transport, missed connections on other carriers) as breach-of-contract-of-carriage damages.",
      "DOT enforcement is the load-bearing leverage. Civil penalties for § 259.4 violations run up to $27,500 per passenger under 49 U.S.C. § 41712. Recent examples: 2023 DOT consent order fining Volaris $300,000; 2024 DOT order against United for approximately $1.9 million covering 25 long tarmac delays. The money goes to the Treasury — not to the individual passenger — but the airline knows this, and many resolve voucher/cash disputes the moment a DOT file number is attached. The DOT complaint at transportation.gov/airconsumer/file-consumer-complaint is the single highest-value escalation in the toolkit.",
      "Private recovery has limits but exists. Courts have generally held there is no private right of action under § 259.4 itself, preempted by the Airline Deregulation Act, 49 U.S.C. § 41713(b). The workaround: § 259.6 requires carriers to incorporate the contingency plan into their contract of carriage; breach-of-contract claims based on the contract of carriage are not preempted (American Airlines v. Wolens, 513 U.S. 219). Provable damages tend to be modest (meals, hotel, ground transport, missed-connection out-of-pockets), but small-claims court is set up for self-represented parties and the certified-mail demand letter is the prerequisite paper trail.",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline stonewalls the refund or reimbursement, file three parallel complaints: (1) DOT at transportation.gov/airconsumer/file-consumer-complaint — leverages the $27,500/passenger civil-penalty exposure; (2) FCBA chargeback with your card issuer within 60 days of the statement showing the original ticket charge, reason code \"services not rendered\"; (3) state AG consumer-protection complaint. For amounts within small-claims limits, file a breach-of-contract-of-carriage action; the carrier's contract of carriage incorporates the § 259.4 contingency plan under § 259.6, and breach-of-contract claims survive Airline Deregulation Act preemption. Contract-of-carriage limitation periods vary (often 6 months to 2 years) — file fast.",
    relatedSlugs: [
      "flight-cancellation-refund",
      "voucher-to-cash",
      "lost-luggage-claim",
      "damaged-luggage-claim",
      "bumped-compensation",
      "billing-error-dispute",
    ],
    faqs: [
      {
        question: "Do I get automatic cash just for sitting on the tarmac too long?",
        answer:
          "No. The tarmac-delay rule itself triggers DOT enforcement, not a payment to you. You get automatic cash if the flight was then cancelled or significantly changed (3+ hr domestic / 6+ hr international) under the 2024 refund rule (14 CFR Part 260).",
      },
      {
        question: "Can I sue the airline directly under 14 CFR § 259.4?",
        answer:
          "Most courts say no — federal preemption under the Airline Deregulation Act, 49 U.S.C. § 41713(b). You can sue for breach of the contract of carriage that incorporates the contingency plan under § 259.6.",
      },
      {
        question: "Will the airline send a voucher? Can I refuse?",
        answer:
          "Yes, you can refuse. The 2024 rule (14 CFR § 260.7) requires affirmative acceptance of any non-cash compensation. Vouchers are not cash equivalents under § 260.10.",
      },
      {
        question: "What if the captain says \"ATC told us to stay put\"?",
        answer:
          "That can be a valid exception under § 259.4(c). Ask in your demand letter for the airline's documentation. Under § 259.4(d), carriers must file a tarmac-delay report with DOT within 30 days for delays exceeding the thresholds — that report is FOIA-able.",
      },
      {
        question: "Is there a deadline to act?",
        answer:
          "Contract-of-carriage limitations vary (often 6 months to 2 years). File the DOT complaint and FCBA chargeback fast — both have their own short windows (60 days for FCBA from the statement showing the original ticket charge).",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "lost-luggage-claim",
    category: "airline",
    title: "Lost Luggage Compensation Demand Letter ($4,700 / Montreal Cap)",
    metaDescription:
      "Airline lost your bag? Free demand letter citing 14 CFR § 254.4 ($4,700 domestic) or Montreal Convention ($2,019 international) + DOT 2024 bag-fee refund rule.",
    lede:
      "Your bag never arrived. Or arrived days late. Or arrived empty. There's a federal floor of $4,700 per passenger for domestic flights — and the Montreal Convention adds ~$2,019 internationally. The bag-fee itself gets auto-refunded. This letter invokes it all.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Baggage Claims Department]
[Address from contract of carriage]

Sent via certified mail, return receipt requested

Re: Lost / Delayed Baggage Claim — PIR / MBR [Reference Number]

To Whom It May Concern:

I am writing to formally claim compensation for the bag described below, which was lost in your custody on flight [Number] on [Date]. The Property Irregularity Report (PIR) / Mishandled Baggage Report (MBR) reference number is [Number], filed at the [Airport] baggage service office on [Date].

Flight and bag details:
  • Airline + flight number(s): [Number]
  • Date of travel: [Date]
  • Routing: [Origin → Destination]
  • Ticket number / PNR: [Number]
  • Baggage tag number: [Number]
  • PIR / MBR reference: [Number]
  • Date filed: [Date]
  • Bag description: [brand / model / color / approximate age / approximate original cost]

Status:
  • Bag last located: [Date / location / source — airline app, airline employee, never located]
  • Days since arrival without bag: [Number]
  • [Has the airline declared the bag "lost" as opposed to "delayed"? Yes / No / Pending]

Itemized loss (receipts attached as exhibits):

| Item | Original date / source | Replacement cost |
|------|------------------------|------------------|
| [Item 1] | [Date / receipt #] | $[Amount] |
| [Item 2] | [Date / receipt #] | $[Amount] |
| [Item 3] | [Date / receipt #] | $[Amount] |
| **Total loss** | | **$[Total]** |

Incidental expenses (essentials purchased while waiting for bag):

| Item | Date | Cost |
|------|------|------|
| [Toiletries] | [Date] | $[Amount] |
| [Replacement clothing] | [Date] | $[Amount] |
| [Other] | [Date] | $[Amount] |
| **Total incidentals** | | **$[Total]** |

Legal basis for the claim:

[Pick the regime that applies — strike the other.]

  [DOMESTIC FLIGHT — 14 CFR § 254]
  Under 14 CFR § 254.4, a U.S. air carrier "shall not limit its liability for provable direct or consequential damages resulting from the disappearance of, damage to, or delay in delivery of a passenger's personal property, including baggage, in its custody to an amount less than $4,700 for each passenger" on flight segments using large aircraft. This is a federal floor (raised from $3,800 effective Jan 22, 2025 per 89 FR 84819) and supersedes any conflicting Contract of Carriage limit below that amount. § 254.5 also requires written notice of the monetary limit.

  [INTERNATIONAL FLIGHT — Montreal Convention]
  Under Montreal Convention Article 17(2), the carrier is strictly liable for destruction, loss, or damage to checked baggage occurring on board or while in the carrier's charge. Article 22(2) caps that liability at 1,519 SDRs per passenger (approximately $2,019 USD as of the Dec 28, 2024 ICAO revaluation; up from 1,288 SDRs). The cap is breakable upon proof of a special declaration of interest at check-in or willful misconduct.

In addition: under the DOT 2024 final rule (89 FR 32760; 14 CFR Part 260), the airline must automatically refund the checked-bag fee for the bag at issue if the bag is significantly delayed (more than 12 hours domestic, 15 hours international ≤12-hour segments, 30 hours international >12-hour segments). The bag-fee refund is owed within 7 business days (credit card) or 20 calendar days (other), independent of and on top of the damages claim.

Demand:

Within [30] days of receipt of this letter, please:

  1. Pay $[Total loss + incidentals] as compensation for the lost bag and incidental expenses, up to the [$4,700 / 1,519 SDR] cap;
  2. Refund the checked-bag fee of $[Amount] for the affected bag (DOT 2024 rule);
  3. Provide written documentation of the resolution.

If you do not, I will pursue:
  • A DOT complaint at transportation.gov/airconsumer/file-consumer-complaint;
  • An FCBA chargeback under 15 U.S.C. § 1666 (for the bag fee) within 60 days of the statement;
  • A breach-of-contract-of-carriage action in [state] small claims court for the damages claim (Montreal Convention claims have a 2-year statute of limitations under Article 35).

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [PIR/MBR; boarding pass; baggage claim stub; receipts for lost items; receipts for incidentals; photographs of bag and contents if available]`,
    howToUse: [
      "File the Property Irregularity Report (PIR) at the airline's baggage service office BEFORE leaving the baggage claim area. This is the single most-missed step and the most important. Without a PIR reference number on file the same day, the airline can deny that the bag was ever mishandled — and the DOT bag-fee auto-refund won't trigger.",
      "Keep every receipt for essentials bought while waiting (toiletries, clothes, work shoes for a meeting). These are recoverable as incidental expenses under both the domestic and international regimes.",
      "International travel: file the written complaint within the Article 31 deadlines — 7 days of receiving baggage for damage, 21 days of receiving baggage for delay. Miss the window, lose the right to sue (except in fraud).",
      "Domestic travel: file the written claim per the carrier's tariff (typically 21–45 days). 14 CFR Part 254 itself doesn't set the deadline; the contract of carriage does. Check the airline's contract.",
      "Statute of limitations to sue: 2 years for international claims under Montreal Convention Article 35; varies by state contract law for purely domestic claims, but most carriers' contracts of carriage impose a 2-year limit.",
    ],
    legalContext: [
      "Three regimes govern checked-bag claims, and which applies depends on whether the flight segment is domestic or international. For domestic flights (U.S. point to U.S. point), 14 CFR Part 254 governs. Under 14 CFR § 254.4, the carrier may contractually cap its liability, but not below a federal floor of $4,700 per passenger for provable direct or consequential damages from disappearance, damage, or delay of personal property in its custody — applicable to flight segments using large aircraft. This is a floor, not a ceiling. The floor was raised from $3,800 to $4,700 effective January 22, 2025 (89 FR 84819, Oct 24, 2024); the figure adjusts every two years to track CPI-U under § 254.6. Carriers must provide \"conspicuous written notice\" of any monetary limit under § 254.5.",
      "For international flights — any itinerary touching another country, including a domestic U.S. segment ticketed with an international flight — the Montreal Convention 1999 governs. Article 17(2) makes the carrier strictly liable for destruction, loss, damage, or delay of checked baggage occurring on board or while in the carrier's charge, with no fault required, unless the damage stems from \"inherent defect, quality, or vice of the baggage.\" Article 22(2) caps that liability at 1,519 SDRs per passenger (approximately $2,019 USD as of the December 28, 2024 ICAO revaluation; up from 1,288 SDRs). Article 22(2)'s second sentence breaks the limit if the passenger made a \"special declaration of interest\" at check-in and paid any supplementary fee. Articles 31 (7 days for damage, 21 days for delay) and 35 (2-year statute of limitations) are the procedural backbone.",
      "Layered on top of both regimes is the DOT 2024 final rule on automatic refunds. Codified at 14 CFR Part 260 and effective for compliance on October 28, 2024, the rule requires airlines to automatically refund the checked-bag fee itself (typically $30–$40) when a bag is significantly delayed. The thresholds: more than 12 hours for domestic flights; more than 15 hours for international flights of 12 hours or less; more than 30 hours for international flights longer than 12 hours. Refund is owed within 7 business days (credit card) or 20 calendar days (other) of when the bag becomes significantly delayed. This bag-fee refund is in addition to — not in lieu of — the underlying Part 254 or Montreal Convention damages claim for the value of contents and incidental expenses.",
      "The Property Irregularity Report (PIR), also called a Mishandled Baggage Report (MBR), is the procedural keystone. Filed at the airline's baggage service office before leaving the baggage claim area, it documents the airline's possession of the bag and the failure to deliver. Without it, every subsequent step is harder. \"Lost\" vs. \"delayed\" is industry practice rather than federal definition — most carriers declare a bag \"lost\" between 5 and 14 days; some use 21. The distinction matters because \"lost\" unlocks the full Part 254 or Montreal Convention liability for the contents, not just incidentals.",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline lowballs or denies the claim, escalate in parallel. File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint — DOT requires airlines to respond within 60 days, which often resolves underpaid claims. File an FCBA chargeback with your card issuer for the bag fee under 14 CFR Part 260 if it wasn't auto-refunded; the chargeback window is 60 days from the statement showing the bag-fee charge. For the contents-loss claim itself, small-claims court is the next step — bring the PIR, boarding pass, baggage tag, dated receipts for lost items, and the carrier's denial letter. The federal floor ($4,700 domestic, 1,519 SDRs international) is binding regardless of the carrier's stated tariff, so cite it explicitly.",
    relatedSlugs: [
      "damaged-luggage-claim",
      "flight-cancellation-refund",
      "tarmac-delay-refund",
      "bumped-compensation",
      "voucher-to-cash",
      "lost-damaged-package",
    ],
    faqs: [
      {
        question: "I left the airport without filing a PIR — am I cooked?",
        answer:
          "Mostly. Call the airline's baggage line immediately and open a delayed-baggage report by phone; some carriers permit a same-day report. Without that contemporaneous record, the airline will usually deny the claim and the DOT bag-fee auto-refund won't fire.",
      },
      {
        question: "How long before my bag is officially \"lost\" instead of \"delayed\"?",
        answer:
          "There's no federal definition. Most U.S. airlines declare a bag lost between 5 and 14 days; some use 21 days. DOT says if a carrier \"unreasonably refuses to consider a bag lost after it has been missing for an excessive period,\" that itself can trigger DOT enforcement. The distinction matters because \"lost\" unlocks the full liability for contents, not just incidentals.",
      },
      {
        question: "The airline says it's only liable for $X — but the federal limit is $4,700, right?",
        answer:
          "For domestic flights on large aircraft, yes — 14 CFR § 254.4 prohibits the carrier from setting its limit below $4,700 per passenger. Quote the section in your letter. For international, the equivalent floor is 1,519 SDRs (about $2,019 USD) under Montreal Article 22(2).",
      },
      {
        question: "My laptop / camera / wedding ring was in the bag — can I recover full value?",
        answer:
          "Internationally: only if you made a \"special declaration of interest\" at check-in and paid the fee (Montreal Art. 22(2)). Otherwise capped at 1,519 SDRs. Domestically: carriers may exclude electronics, jewelry, cash, and other high-value items from liability in their contract of carriage — § 254 sets the floor but doesn't override category exclusions. Lesson: carry on the valuables.",
      },
      {
        question: "Do I get my $35 checked-bag fee back?",
        answer:
          "Yes — under the DOT 2024 rule (14 CFR Part 260), if you filed a Mishandled Baggage Report and the bag is delayed past 12 hours (domestic) or 15/30 hours (international), the airline must automatically refund the bag fee within 7 business days to the original payment method. This is independent of and on top of your damages claim.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "damaged-luggage-claim",
    category: "airline",
    title: "Damaged Luggage Claim Demand Letter (14 CFR § 254 / Montreal Art. 17)",
    metaDescription:
      "Airline damaged your bag? Free demand letter citing 14 CFR § 254.4 ($4,700 domestic floor) or Montreal Convention Article 17 (international strict liability).",
    lede:
      "Your bag came off the carousel cracked, wheels broken, zipper torn, contents damaged. Federal law sets a $4,700 floor on domestic damage claims and Montreal Convention makes international carriers strictly liable. The Contract of Carriage doesn't override either.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Baggage Claims Department]
[Address from contract of carriage]

Sent via certified mail, return receipt requested

Re: Damaged Baggage Claim — PIR [Reference Number]

To Whom It May Concern:

I am writing to formally claim compensation for damage to my checked baggage on flight [Number] on [Date], routing [Origin → Destination], ticket / PNR [Number].

PIR reference: [Number], filed at the [Airport] baggage service office on [Date]. Photos taken at the baggage office with the responding employee are enclosed.

Damaged property:
  • Bag: [brand / model / approximate age / approximate original price]
  • Specific damage: [e.g., cracked frame, broken wheel, torn zipper, contents soaked]
  • Contents damage (if any): [list with original purchase records]

Itemized claim:
  • Repair estimate (attached, from [Company] dated [Date]): $[Amount]
  • OR depreciated replacement value if irreparable: $[Amount]
  • Replacement bag purchased to continue trip: $[Amount]
  • Other related expenses: $[Amount]
  • **Total**: $[Total]

Legal basis:

  [DOMESTIC FLIGHT — 14 CFR § 254.4]
  Federal floor of $4,700 per passenger under 14 CFR § 254.4 (effective Jan 22, 2025; previously $3,800). Any contractual cap below that floor is unenforceable.

  [INTERNATIONAL FLIGHT — Montreal Convention Article 17(2) + 22(2)]
  Strict liability under Article 17(2) for damage to checked baggage occurring on board or in carrier's charge (unless inherent defect of the bag). Liability cap of 1,519 SDRs per passenger under Article 22(2) (effective Dec 28, 2024; ~$2,019 USD). Article 26 voids any contract provision purporting to reduce that liability.

Demand:

Within [30] days of receipt of this letter, please:

  1. Pay $[Total] as compensation for the damaged bag, replacement, and related expenses, up to the [$4,700 / 1,519 SDR] cap;
  2. Provide written documentation of the resolution.

If you do not, I will pursue:
  • DOT complaint at transportation.gov/airconsumer/file-consumer-complaint;
  • Breach-of-contract-of-carriage action in [state] small claims court;
  • Montreal Convention 2-year statute of limitations under Article 35 is preserved.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [PIR; boarding pass; baggage tag; dated photos of damage at baggage office; repair estimate; receipt for original bag purchase if available; receipt for any replacement]`,
    howToUse: [
      "Report the damage at the airport baggage service office BEFORE leaving the airport, even if you're tired and the line is long. Most contracts of carriage treat failure to report at the airport as waiver. Get a PIR reference number in writing.",
      "Take photos of the damage AT THE BAGGAGE OFFICE, with their employee in frame if possible. This is contemporaneous documentation the airline cannot later dispute.",
      "Get a written repair estimate from a luggage repair shop within a few days. Airlines often contract with specific repair networks; the estimate quantifies the damages and shows you're serious.",
      "For international travel, file the written complaint within 7 days of receiving the bag (Montreal Convention Article 31(2)). Airlines cannot shorten this deadline. For domestic, follow your specific airline's CoC (typically 7–21 days).",
      "Don't accept the airline's first lowball offer. The $4,700 federal floor or 1,519 SDR international cap is the ceiling, not the floor — and depreciation calculations vary widely. Provide original purchase price and evidence of condition (pre-trip photos) to argue for actual cash value, not arbitrary depreciation schedules.",
    ],
    legalContext: [
      "Domestic damaged-baggage claims fall under 14 CFR Part 254. § 254.4 establishes a federal floor of $4,700 per passenger (raised from $3,800 effective January 22, 2025 per 89 FR 84819) for provable direct or consequential damages from disappearance, damage, or delay of personal property in the carrier's custody on flight segments using large aircraft. The cap is per passenger, not per bag. Carriers cannot contractually reduce liability below this floor; § 254.5 requires conspicuous written notice of any monetary limit. The federal floor overrides any conflicting Contract of Carriage language — including most low-value defaults that airlines try to impose at check-in.",
      "International damaged-baggage claims are governed by the Montreal Convention 1999. Article 17(2) imposes strict liability on the carrier for destruction, loss, or damage to checked baggage occurring on board or while the baggage is in the carrier's charge. The only exception is damage stemming from the inherent defect, quality, or vice of the baggage itself. Article 22(2) caps liability at 1,519 SDRs per passenger (approximately $2,019 USD as of the December 28, 2024 ICAO revaluation; up from 1,288 SDRs). Article 26 makes any contractual provision relieving the carrier of liability or reducing the Article 22(2) limit null and void.",
      "Reporting deadlines are critical. At the airport, file a Property Irregularity Report (PIR) at the baggage service office before leaving baggage claim. Most contracts of carriage treat failure to report at the airport as waiver; some carriers (Delta tightened this to 6 hours for tickets issued on or after October 8, 2025) impose specific post-airport windows. For international travel, Montreal Article 31(2) gives 7 days from receipt of baggage to file a written complaint for damage (21 days for delay). For domestic, the carrier's CoC governs — typically 7 to 21 days.",
      "Standard CoC exclusions warrant attention. Carriers typically exclude: normal wear and tear; pre-existing damage; manufacturer's defect; damage from TSA security inspection (which is a Federal Tort Claims Act claim against TSA via Form SF-95, not against the airline); high-value items in checked bags (electronics, cameras, cash, jewelry, negotiable instruments, medication, keys, business documents, fragile items, heirlooms — required to travel as carry-on); and improperly packed or overstuffed bags. For international travel, courts have repeatedly held that carrier exclusions for \"valuables\" are unenforceable to the extent they conflict with Article 17 strict liability — the airline accepted the bag, and it's liable up to 1,519 SDRs regardless of contents class. Domestic exclusions are generally enforceable for excluded categories but only up to the limit and only if conspicuously disclosed.",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline lowballs or denies the damage claim, escalate. DOT complaint at transportation.gov/airconsumer/file-consumer-complaint forces a written airline response within 60 days. Small-claims court is the next step for amounts up to the state's jurisdictional limit (typically $5,000–$10,000, easily covering most bag-damage claims). Bring the PIR, dated photos taken at the baggage office, repair estimate, and receipts for original purchase and any replacement. Montreal Convention claims have a 2-year statute of limitations under Article 35; domestic claims follow state contract limitations periods or the CoC's stated limit. Credit-card travel insurance benefits (Chase Sapphire, Amex Platinum, certain Discover and Capital One cards) often cover baggage damage on a parallel track — file simultaneously.",
    relatedSlugs: [
      "lost-luggage-claim",
      "flight-cancellation-refund",
      "tarmac-delay-refund",
      "bumped-compensation",
      "voucher-to-cash",
      "lost-damaged-package",
    ],
    faqs: [
      {
        question: "They said I had to report it at the airport and I didn't. Am I out of luck?",
        answer:
          "Often, for domestic — yes, that's the airline's strongest defense. Try anyway: file the claim, explain the circumstances (rush to catch connection, employee not present, damage hidden by dark bag interior). For international, you have 7 days under Montreal Article 31(2) regardless of what the airline says.",
      },
      {
        question: "The airline says my laptop / jewelry is on their excluded list.",
        answer:
          "For international travel, that exclusion is largely unenforceable under Montreal Article 26 — they accepted the bag, they're on the hook up to 1,519 SDR. For domestic, the exclusion likely holds for the excluded item itself, but the airline is still liable for damage to the bag and to non-excluded contents.",
      },
      {
        question: "They offered me $50 and a travel voucher. Do I have to take it?",
        answer:
          "No. The § 254 / Montreal limits are the ceiling, not the offer. You can reject and escalate. Vouchers are worth less than cash and often have restrictions — the law entitles you to monetary compensation up to the cap.",
      },
      {
        question: "My bag is 5 years old and they're depreciating it 80%. Is that allowed?",
        answer:
          "Airlines apply depreciation schedules but aren't contractually entitled to any specific schedule. Provide original purchase price, evidence of condition (pre-trip photos), and argue for actual cash value not arbitrary depreciation. Small claims court is your leverage.",
      },
      {
        question: "Should I file a DOT complaint or sue?",
        answer:
          "Both, in sequence. DOT complaint is free and forces a written response in 60 days — often resolves the matter. If it doesn't, small claims court (typical limit $5K–$10K, no lawyer needed) is the next step.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "bumped-compensation",
    category: "airline",
    title: "Bumped / Involuntary Denied Boarding Compensation Demand (14 CFR Part 250)",
    metaDescription:
      "Bumped from a flight? Free demand letter citing 14 CFR Part 250 — mandatory cash compensation up to $1,075 / $2,150, payable same day, not a voucher.",
    lede:
      "The airline bumped you involuntarily — overbooked the flight and you didn't get on. Federal law (14 CFR Part 250) sets mandatory cash compensation, not voucher amounts. Many travelers accept a voucher at the gate without realizing they were owed cash.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Customer Relations Department]
[Address from contract of carriage]

Sent via certified mail, return receipt requested

Re: Involuntary Denied Boarding Compensation Under 14 CFR Part 250 — Flight [Number]

To Whom It May Concern:

I am writing to demand the cash compensation owed to me under 14 CFR Part 250 for the involuntary denied boarding described below.

Flight facts:
  • Confirmation / PNR: [Number]
  • Flight number: [Number]
  • Date: [Date]
  • Origin / destination: [Routing]
  • Scheduled departure: [Time]
  • Check-in time (proof I met deadline): [Time, with screenshot/receipt attached]
  • Boarding priority rule cited (if any): [From airline's published priority list]

The IDB:
  • Date / time bumped: [Date / time]
  • Airline initially solicited volunteers? [Yes / No]
  • I was selected involuntarily.

Substitute flight:
  • Flight number: [Number]
  • Date / time of actual arrival at final destination: [Date / time]
  • Delta vs. original arrival: [X hours, Y minutes]

Compensation owed under 14 CFR § 250.5 (current as of January 22, 2025):
  [Pick the tier that applies based on delay at final destination.]
  • 0–1 hour: no compensation owed
  • 1–2 hr domestic / 1–4 hr international: 200% of one-way fare, max **$1,075**
  • 2+ hr domestic / 4+ hr international (or no alternate offered): 400% of one-way fare, max **$2,150**

One-way fare to destination/first stopover: $[Amount]
× tier multiplier (200% or 400%): $[Amount]
Capped at: $[$1,075 or $2,150]
**Compensation owed**: $[Amount]

What was offered at the gate: $[Voucher amount or partial cash] — INSUFFICIENT.

Demand:

Under 14 CFR § 250.8(a), the airline must offer cash or an immediately negotiable check on the day and place of denial; if the substitute flight leaves before payment can be processed, the airline has 24 hours by mail. Under § 250.9(c), if the airline offers a travel voucher in lieu of cash, the agent must orally tell the passenger of material restrictions on the voucher AND that the passenger is entitled to a check instead.

Within [7] days of receipt of this letter, please:

  1. Pay $[Amount] in cash or immediately negotiable check (NOT a voucher), per § 250.5;
  2. Refund any unused ancillary fees (bags, seat selection, Wi-Fi) per § 250.5(e);
  3. Confirm in writing.

If you do not, I will file a complaint with the DOT Office of Aviation Consumer Protection at transportation.gov/airconsumer/file-consumer-complaint. DOT actively enforces Part 250 — recent civil penalty actions against airlines for IDB misreporting confirm DOT scrutinizes how gate-side bumps are categorized and documented.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [confirmation; check-in receipt; boarding pass for substitute flight; any written or recorded gate-agent statements; voucher offer documentation]`,
    howToUse: [
      "Demand cash, not a voucher. Under 14 CFR § 250.8(a), the airline must pay by cash or immediately negotiable check on the day and place of denial. The voucher offered at the gate is below the statutory floor in many cases — and § 250.9(c) requires the agent to tell you about your cash right.",
      "Document the check-in time. The airline's #1 defense is that you missed the check-in deadline — which under § 250.6 makes the bump exempt from compensation. Save the boarding-pass screenshot, the check-in confirmation email, the kiosk receipt time.",
      "If the bump was caused by a smaller aircraft substitution, an unscheduled aircraft change for safety/operational reasons, or weight/balance restrictions on a 60-or-fewer-seat aircraft, Part 250 may not apply. These are the narrow exemptions.",
      "If you accepted a voucher at the gate without being told of your cash right (§ 250.9(c) was violated), the voucher acceptance is arguably not informed — and you can still demand the cash. Send the letter; airlines often pay the delta to avoid a DOT complaint.",
      "Send by certified mail with return receipt requested. File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint in parallel — DOT enforces Part 250 actively, and a DOT file number attached to the dispute often unlocks the cash payment.",
    ],
    legalContext: [
      "14 CFR Part 250 (Oversales) governs what happens when an airline sells more confirmed seats than the aircraft holds and someone is denied boarding. The rule distinguishes voluntary bumping (negotiated; compensation is whatever the passenger accepts) from involuntary denied boarding (mandatory tier compensation under § 250.5, on top of a refund of the unused ticket and any unused ancillary fees). The compensation is the leverage point: many travelers accept a voucher at the gate without realizing they were involuntarily bumped and entitled to a check.",
      "Current compensation tiers (current as of January 22, 2025 per 89 FR 84743). For delays in arrival at final destination of 0–1 hour: no IDB compensation owed. For 1–2 hours domestic / 1–4 hours international: 200% of one-way fare, capped at $1,075. For 2+ hours domestic / 4+ hours international (or where no alternate is offered): 400% of one-way fare, capped at $2,150. These maximums are per passenger and update biennially via CPI. \"Fare\" under § 250.5(c) means the one-way fare to destination/first stopover, plus surcharges, minus discounts. Compensation is in addition to the value of the original ticket — the passenger keeps the ticket and uses it on the substitute flight, or gets a refund (§ 250.5(d)).",
      "Procedural protections are precise. Under § 250.8(a), payment must be cash or immediately negotiable check on the day and place of denial; if the substitute flight leaves before payment can be processed, the airline has 24 hours by mail. § 250.9(a) requires a written statement of rights to be handed to the bumped passenger explaining IDB compensation and boarding priority. § 250.9(c) requires that if the airline orally offers a travel voucher or free ticket instead of cash, the gate agent must also orally tell the passenger of any material restrictions on the voucher AND that the passenger is entitled to a check instead. This is the disclosure airlines routinely fudge.",
      "Exemptions are narrow but real. Part 250 doesn't apply at all to aircraft with fewer than 30 designed passenger seats, inbound foreign flights to the U.S., or charter and non-scheduled flights. Within Part 250's scope, compensation is not required if the passenger failed to comply with ticketing, reconfirmation, or check-in deadlines (the airline's #1 defense — document your check-in time precisely); if a smaller aircraft was substituted for safety/operational reasons (60-seat-or-fewer aircraft: weight/balance restrictions); if the passenger was re-accommodated in another cabin at no extra charge (downgrade triggers a separate fare-difference refund, not IDB); or if the airline arranged comparable alternate transportation scheduled to arrive within 1 hour of original. Flight cancellation is not an oversale — different remedy under DOT's 2024 cancellation refund rule (14 CFR Part 260).",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline ignores the cash demand or stands by an insufficient voucher, escalate. File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint — DOT actively enforces Part 250 and many disputes resolve once a DOT file number is attached. File an FCBA chargeback for the original ticket if you were never rebooked (within 60 days of statement). For amounts above what the airline pays but within state small-claims limits, file in small-claims court for the statutory IDB amount — Part 250 violations are routinely treated as actionable in small claims under contract-of-carriage breach theories. Some consumer-protection attorneys take systematic IDB-undercompensation cases as class actions, particularly when the airline's voucher-instead-of-cash pattern is well-documented.",
    relatedSlugs: [
      "flight-cancellation-refund",
      "voucher-to-cash",
      "lost-luggage-claim",
      "damaged-luggage-claim",
      "tarmac-delay-refund",
      "hotel-overcharge-dispute",
    ],
    faqs: [
      {
        question: "I took a $300 voucher at the gate. Can I still demand the cash?",
        answer:
          "Maybe. If the agent did not orally disclose your right to a check and any material restrictions on the voucher, § 250.9(c) was violated and the voucher acceptance is arguably not informed. Send the demand letter; airlines often pay the delta to avoid a DOT complaint.",
      },
      {
        question: "The agent said it was a \"weather cancellation,\" not a bumping.",
        answer:
          "Cancellations are not IDB. But if the flight actually operated and you were left behind because the airline oversold, that's still IDB regardless of how the agent labeled it. Get a screenshot of the flight status showing it departed.",
      },
      {
        question: "The plane was a 50-seat regional jet. Am I out of luck?",
        answer:
          "No — Part 250 applies to aircraft with 30+ seats. The 60-seat threshold is only a defense for the airline when the bump was caused by weight/balance restrictions (§ 250.6(b)). Otherwise the same tier compensation applies.",
      },
      {
        question: "They put me in business class instead of first. Do I get IDB?",
        answer:
          "No — that's a downgrade, exempt from IDB under § 250.6(c). You're owed the fare difference refund (a separate right under the airline's contract of carriage and § 250.5(d)).",
      },
      {
        question: "How fast must they pay?",
        answer:
          "Same day at the airport, or within 24 hours if your substitute flight departs before they can cut the check (§ 250.8(a)).",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "voucher-to-cash",
    category: "airline",
    title: "Voucher-to-Cash Conversion Demand Letter (DOT 2024 Refund Rule)",
    metaDescription:
      "Airline forced a voucher on you when cash was owed? Free demand letter citing 14 CFR § 260.7 — affirmative acceptance required; vouchers are not cash equivalents.",
    lede:
      "The airline cancelled your flight and gave you a voucher under pressure. Under the DOT 2024 rule, you were entitled to a cash refund — and you didn't \"affirmatively accept\" an alternative. This letter converts the voucher.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Airline Name — Customer Relations / Refunds]
[Address from contract of carriage]

Sent via certified mail, return receipt requested

Re: Demand to Convert Voucher to Cash Refund Under 14 CFR § 260.7 — Confirmation [PNR]

To Whom It May Concern:

I am writing to demand conversion of the travel voucher described below to a cash refund to the original form of payment, pursuant to the DOT 2024 final rule "Refunds and Other Consumer Protections" (89 Fed. Reg. 32760), codified at 14 CFR Part 260.

Booking facts:
  • Confirmation / PNR: [Number]
  • Original ticket purchase date: [Date]
  • Original payment method: [Credit card last 4 / cash / other]
  • Total paid: $[Amount]
  • Flight: [Number / Routing / Original Date]

Triggering event:
  [Pick one.]
  [ ] The airline cancelled the flight on [Date].
  [ ] The airline made a significant change (3+ hr domestic / 6+ hr international delay; airport change; added connection; downgrade in class).

Voucher facts:
  • Date voucher issued: [Date]
  • Voucher / eCredit / Travel Credit / Trip Credit identifier: [Number]
  • Amount: $[Amount]
  • Channel through which voucher was accepted: [chatbot / web form / phone agent / email]
  • Material disclosures made at acceptance: [Were you told you could choose cash instead? Was the cash-refund right disclosed at all?]

Legal basis:

Under 14 CFR § 260.7, the airline may not deem the passenger to have accepted alternative compensation (voucher, credit, miles) absent the passenger's affirmative acceptance. Default-voucher, dark-pattern, or chatbot-funneled acceptances do not satisfy this requirement. Under §§ 260.6 and 260.10, where a covered carrier cancels or significantly changes a flight and the passenger does not affirmatively accept alternative compensation, the airline must refund the fare to the original form of payment within 7 business days (credit card) or 20 calendar days (other), in the full amount.

In my case, the cash-refund right was [never disclosed before the voucher was offered / disclosed only after I accepted / disclosed in non-conspicuous fine print]. My acceptance was therefore not affirmative or informed under § 260.7.

Demand:

Within [14] days of receipt of this letter, please:

  1. Convert the voucher to a cash refund of $[Voucher amount] (or, where the voucher has been partially used, the unused balance of $[Amount]) to the original form of payment;
  2. Confirm in writing.

If you do not, I will pursue:
  • FCBA chargeback under 15 U.S.C. § 1666 with my card issuer (within the 60-day window of the original ticket charge, if still available);
  • DOT complaint at transportation.gov/airconsumer/file-consumer-complaint;
  • State Attorney General complaint;
  • Breach-of-contract-of-carriage action in [state] small claims court.

Please preserve all records relating to this booking, including chat transcripts, IVR logs, and consent screens, pending resolution.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [original booking confirmation; cancellation/change notice; voucher email; screenshots of the consent screen or chatbot flow if available; billing statement showing the original ticket charge]`,
    howToUse: [
      "Don't cite the DOT 2024 rule as binding for vouchers issued before May 16, 2024 (the FAA Reauthorization Act effective date) or for cancellations that predated the rule. For vouchers tied to cancellations on or after that date, the rule is solid.",
      "If you still have time on the FCBA 60-day window (60 days from the statement that showed the ORIGINAL ticket charge, not the voucher issuance), file the chargeback immediately as a backup. Many card-network rules extend chargeback windows for services not rendered up to 120 days from scheduled flight date — try even if FCBA window has closed.",
      "Document the voucher-acceptance channel precisely. Screenshots of the chatbot flow, the web-form consent screen, or the email language matter. The § 260.7 \"affirmative acceptance\" requirement is the load-bearing argument — if your acceptance wasn't informed, it doesn't count.",
      "Send by certified mail with return receipt requested. File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint in parallel — DOT enforcement has been substantial post-2024 rule.",
      "Note: a December 5, 2025 DOT notice paused enforcement of one narrow scenario (flights operated under a different flight number with no significant change). This doesn't affect your demand if the underlying cancellation or significant change actually occurred.",
    ],
    legalContext: [
      "The DOT's 2024 final rule \"Refunds and Other Consumer Protections\" (89 Fed. Reg. 32760, April 26, 2024) codified at 14 CFR Part 260 changed the default rule on voucher-vs-cash. Effective June 25, 2024 with compliance by October 28, 2024, the rule makes cash refunds automatic and mandatory whenever a covered carrier cancels or significantly changes a flight and the passenger does not affirmatively accept rebooking or alternative compensation. The FAA Reauthorization Act of 2024 (Pub. L. 118-63, May 16, 2024) codified parallel statutory refund duties self-effectuating on enactment, which DOT has said carriers should comply with immediately.",
      "14 CFR § 260.7 is the operative section for the voucher-to-cash claim. It prohibits airlines from deeming a passenger to have accepted alternative compensation \"unless the consumer affirmatively agrees to the alternative form of compensation.\" Default-funneled clicks, pre-checked boxes, chatbot paths that never surfaced the cash option, and \"Rebook or Credit\" choices without a cash-refund option do not satisfy § 260.7. The rule was written specifically to address dark patterns that airlines used during the COVID era to push vouchers in lieu of refunds owed.",
      "The rule applies regardless of what the airline calls the alternative compensation. § 260.7 covers \"travel credits, vouchers, or other compensation in lieu of a refund.\" Carrier-specific terminology varies — eCredit (United, American), Flight Credit (Delta, Alaska), Travel Bank / Travel Funds (Southwest, Frontier), Future Travel Credit, Trip Credit, Wallet Balance. All are covered. The airline cannot argue \"that's not a voucher, that's a credit.\"",
      "Recovery options if the voucher-to-cash conversion is denied: FCBA chargeback under 15 U.S.C. § 1666 — written dispute within 60 days of the statement showing the ORIGINAL ticket charge (not the voucher issuance). Many card-network rules (Visa, Mastercard, Amex) allow chargebacks up to 120 days from scheduled flight date for \"services not rendered\" even when the strict FCBA window has closed. DOT complaint at transportation.gov/airconsumer/file-consumer-complaint. State AG complaint under UDAP. Small-claims action under the carrier's contract of carriage (federal preemption under 49 U.S.C. § 41713 bars many state-law claims against airlines but a contract-of-carriage breach claim seeking the refund the contract itself promises generally survives, per American Airlines v. Wolens, 513 U.S. 219).",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the airline refuses to convert the voucher to cash, escalate immediately. File a chargeback with your card issuer under the FCBA — within 60 days of the statement showing the ORIGINAL ticket charge if still available; outside that window, try anyway under network rules allowing services-not-rendered chargebacks up to 120 days from the scheduled flight date. File a DOT complaint at transportation.gov/airconsumer/file-consumer-complaint — DOT post-2024 has been aggressive on refund-rule enforcement, with multi-airline actions returning over $600M in 2024-2025. File with your state Attorney General. For vouchers above small-claims limits, consult a consumer-protection attorney — class-action plaintiffs' bars are actively pursuing airlines for systematic voucher-substitution patterns.",
    relatedSlugs: [
      "flight-cancellation-refund",
      "tarmac-delay-refund",
      "bumped-compensation",
      "lost-luggage-claim",
      "damaged-luggage-claim",
      "billing-error-dispute",
    ],
    faqs: [
      {
        question: "The airline says the voucher is non-refundable. Does that matter?",
        answer:
          "No. A contractual non-refundability clause cannot override the federal refund obligation in 14 CFR Part 260 when the carrier cancelled or made a significant change. Federal regulation preempts conflicting contract terms.",
      },
      {
        question: "I clicked \"Accept Credit\" in the app. Did I waive my right?",
        answer:
          "Probably not. § 260.7 requires affirmative acceptance after the carrier has disclosed the cash-refund right. A default-funneled click, a chatbot path that never surfaced the cash option, or a \"Rebook or Credit\" choice without a \"Cash Refund\" option does not satisfy the rule. Document the UI.",
      },
      {
        question: "My flight was over a year ago. Is it too late?",
        answer:
          "For the FCBA chargeback, likely yes (60 days from statement; network rules sometimes extend to ~120 days from flight). For a written demand + DOT complaint + small-claims, no — state contract limitations periods (typically 3–6 years) apply to the underlying contract-of-carriage breach.",
      },
      {
        question: "Are bag fees, seat fees, and Wi-Fi fees included?",
        answer:
          "Yes. The 2024 rule expressly requires refund of ancillary fees for services not provided (e.g., paid bag never carried, paid seat reassigned, Wi-Fi that didn't work for the flight).",
      },
      {
        question: "Can I demand cash if I already used part of the voucher?",
        answer:
          "You can demand cash for the unused balance, and arguably for the full amount with a credit back of the used value. Carriers usually only concede the unused balance; that's still worth the letter.",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
