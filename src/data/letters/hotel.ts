import type { LetterTemplate } from "./types";

// State UDAP citations + FTC Junk Fees Rule (16 CFR Part 464, eff. May 12, 2025)
// verified May 2026. FTC Junk Fees Rule remains operative; first major enforcement
// settlement (StubHub, $10M) announced April 2026.

export const hotelLetters: LetterTemplate[] = [
  {
    slug: "hotel-overcharge-dispute",
    category: "hotel",
    title: "Hotel Overcharge Dispute Letter (Free Template + State UDAP + FCBA Chargeback)",
    metaDescription:
      "Hotel charged you something you didn't authorize? Free demand letter layering state UDAP + FTC Junk Fees Rule + FCBA chargeback under 15 U.S.C. § 1666.",
    lede:
      "Your hotel statement has charges you didn't authorize — surprise resort fees, mini-bar items you never touched, parking you didn't use, an incidentals hold that became a posted charge. This letter is the layered demand that resolves most of them.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Hotel Name — General Manager]
[Hotel Address]

cc: [Brand Corporate Guest Relations, if a chain]

Sent via certified mail, return receipt requested
(Copy also emailed to [hotel guest services / brand corporate])

Re: Demand for Refund of Unauthorized Charges — Reservation [Number]

To the General Manager:

I am demanding a refund of $[Disputed Amount] for the unauthorized or improperly disclosed charges below, pursuant to [State] consumer-protection law, the FTC's Junk Fees Rule (16 CFR Part 464), and the Fair Credit Billing Act.

Stay details:
  • Guest name: [Name]
  • Reservation / confirmation number: [Number]
  • Loyalty number (if any): [Number]
  • Check-in / check-out: [Dates]
  • Room number: [Number]
  • Booking channel: [Direct / Expedia / Booking.com / corporate / group]
  • Rate quoted at booking (with screenshot): $[Amount per night]
  • Total folio charged: $[Amount]
  • Last 4 of card charged: [Last 4]

Disputed charges (itemized; see attached folio):

| Line item | Amount | Basis for dispute |
|-----------|--------|-------------------|
| [Resort fee — not in up-front total at booking] | $[Amount] | FTC Junk Fees Rule + state UDAP |
| [Mini-bar — not consumed] | $[Amount] | Unauthorized; documented at checkout |
| [Parking — not used] | $[Amount] | No service rendered |
| [Other] | $[Amount] | [Reason] |
| **Total disputed** | **$[Total]** | |

Total authorized: $[Amount] (this is what the booking confirmation showed).

Legal basis:

  1. **State UDAP** — Under [Mass. G.L. c. 93A § 2 / Cal. Bus. & Prof. Code § 17200 (UCL) + Civ. Code § 1750 (CLRA) / Tex. Bus. & Com. Code § 17.46 (DTPA) / N.Y. Gen. Bus. Law § 349 / Fla. Stat. § 501.204 (FDUTPA) / 815 ILCS 505/2 (ICFA)], hotels billing mandatory fees not disclosed up-front, or unauthorized charges, constitute unfair or deceptive acts. This letter constitutes the [30-day demand under Mass. § 9; 30-day notice under Cal. Civ. Code § 1782; 60-day notice under Tex. Bus. & Com. Code § 17.505] where applicable.

  2. **FTC Junk Fees Rule, 16 CFR Part 464** (effective May 12, 2025) — Hotels and short-term lodging must display the Total Price including all mandatory fees clearly and conspicuously, and more prominently than any other pricing information, before the consumer is asked to pay. The rule is being actively enforced by the FTC (first settlement: StubHub, $10M, April 2026). Civil penalty up to ~$51,744 per violation under 15 U.S.C. § 45(m).

  3. **Fair Credit Billing Act, 15 U.S.C. § 1666 / Regulation Z, 12 CFR § 1026.13** — These charges qualify as billing errors under § 1026.13(a)(1) (unauthorized charges), (a)(3) (services not accepted/delivered as agreed), and/or (a)(5) (computational/accounting error). I have parallel rights to dispute with my card issuer.

Demand:

Within [14] days of receipt of this letter, refund $[Disputed Amount] to the original payment method (card ending [Last 4]). Confirm in writing.

If you do not, I will:
  • File a chargeback with my card issuer under 15 U.S.C. § 1666 (within the 60-day FCBA window);
  • File a complaint with the FTC at reportfraud.ftc.gov citing 16 CFR Part 464;
  • File a complaint with the [State] Attorney General consumer protection division;
  • [If a chain] Escalate to [brand] corporate risk and legal;
  • Pursue a small claims action under [State] UDAP, which may permit [treble damages and attorney's fees in MA / TX; punitive damages in IL; statutory minimum + treble up to $1,000 in NY].

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [booking confirmation showing original total; final folio; credit card statement; any prior correspondence with front desk]`,
    howToUse: [
      "Address the letter to the hotel's General Manager and CC corporate guest relations (for chains). The GM has authority to refund; corporate has authority and audit oversight. Both copies create pressure.",
      "Document the booking confirmation. Screenshot the original booking page showing the up-front total — the FTC Junk Fees Rule attack only works if you can show the displayed total didn't include the mandatory fee. For non-junk-fee disputes (mini-bar, double-charge), the folio itself is the evidence.",
      "Send by certified mail with return receipt requested AND email. The certified mail proves delivery; the email gets read faster. For chain hotels, send to both the property address and the brand's corporate guest-relations address.",
      "File the FCBA chargeback in parallel. The chargeback usually resolves the dispute regardless of what the hotel does, but the letter creates the documentary spine for the chargeback packet — and starts your state's UDAP demand clock (30 days in MA/CA; 60 in TX).",
      "Don't withhold full payment to the hotel based on a partial dispute. Pay the undisputed portion; dispute only the unauthorized charges. Hotels and card issuers handle partial disputes routinely.",
    ],
    legalContext: [
      "Hotel overcharge disputes layer four bodies of law. State UDAP (Unfair and Deceptive Acts and Practices) is the workhorse — every state has one, with damages multipliers (double or treble in MA, treble in TX, punitive in IL) and attorney-fee shifting in MA, TX, CA CLRA, and FL FDUTPA that make individual claims economically real. The FTC's Junk Fees Rule (16 CFR Part 464), finalized December 17, 2024 and effective May 12, 2025, adds federal teeth for fee-disclosure violations: civil penalty up to approximately $51,744 per violation under 15 U.S.C. § 45(m). The Fair Credit Billing Act (15 U.S.C. § 1666; Regulation Z, 12 CFR § 1026.13) provides the chargeback backstop — written notice to the card issuer within 60 days of the statement showing the error, with issuer's mandatory investigation under §§ 1026.13(c)–(f). Common-law breach of contract — the booking confirmation is the contract — completes the framework.",
      "The FTC Junk Fees Rule is the major 2025 development. Status as of May 2026: in effect, being actively enforced. The Trump-administration FTC kept the rule (it was a rare bipartisan rulemaking) and on April 9, 2026 announced a $10 million settlement against StubHub for violating it. No court has stayed or vacated the rule. Covered entities under 16 CFR § 464.2: live-event tickets and \"short-term lodging,\" defined to include hotels, motels, inns, short-term rentals (Airbnb, VRBO), vacation rentals, and similar temporary sleeping accommodations. § 464.3 requires that the Total Price (the maximum total of all mandatory fees, except government charges and shipping) be displayed clearly and conspicuously and more prominently than any other pricing information, before checkout.",
      "State AG enforcement against hotel-fee deception preceded the FTC Rule and continues. D.C. AG sued Marriott in July 2019 under the D.C. Consumer Protection Procedures Act for $9–$95/night resort fees across 189+ properties. Nebraska AG settled with Hilton ($300,000) in January 2024 after a four-year fight; companion settlements with Marriott, Omni, and Choice followed. Texas AG Paxton extracted a $1.25 million settlement from Hyatt and a $9.5 million settlement from Booking.com. Pennsylvania AG settled with Marriott. Colorado AG Weiser secured a Marriott agreement in February 2024. The point for the demand letter: this is not a fringe theory. At least seven state AGs across the political spectrum have publicly extracted concessions or judgments on the same conduct.",
      "Common overcharge scenarios the letter must cover: unauthorized incidentals (charges after a hold should have been released, or in amounts exceeding the disclosed incidentals policy); mini-bar / consumables not consumed; parking billed at a rate higher than disclosed or for services not used; double-charging (same night billed twice; deposit charged but not credited against final bill; OTA pre-pay plus a duplicate hotel charge); mistaken room-rate change (rate increased mid-stay without authorization); add-on fees not in booking total (\"destination fee,\" \"urban fee,\" \"amenity fee,\" \"energy surcharge,\" \"housekeeping fee\" appearing only at check-in or on the folio); damage / smoking / pet charges assessed without evidence after checkout; dynamic currency conversion forced without consent; tax miscalculation. The template should let the user pick scenarios and itemize.",
    ],
    stateNotes: [
      {
        state: "Massachusetts",
        note: "M.G.L. c. 93A §§ 2, 9. **30-day demand letter required** for § 9 individual consumer claim. Up to 3x actual damages for willful/knowing violation or bad-faith refusal to settle. Mandatory attorney's fees for prevailing consumer. The strongest single statute in the country for hotel-fee letters.",
      },
      {
        state: "California",
        note: "UCL (Bus. & Prof. Code § 17200) + CLRA (Civ. Code § 1750). **CLRA: 30-day demand letter required** for damages (§ 1782). Actual + punitive damages (CLRA, if willful), restitution, attorney's fees discretionary under CLRA.",
      },
      {
        state: "Texas",
        note: "DTPA, Bus. & Com. Code § 17.41 et seq. **60-day pre-suit notice required** under § 17.505. Up to 3x economic damages for knowing conduct. Mandatory attorney's fees for prevailing consumer.",
      },
      {
        state: "New York",
        note: "GBL § 349 (deceptive acts) + § 350 (false advertising). No pre-suit notice required. Actual damages or $50 minimum (§ 349); $500 minimum (§ 350); discretionary treble up to $1,000 (§ 349) or up to $10,000 (§ 350) for willful.",
      },
      {
        state: "Florida",
        note: "FDUTPA, Fla. Stat. § 501.201 et seq.; remedies at § 501.211. No pre-suit notice required. Actual damages only. Mandatory attorney's fees for prevailing party under § 501.2105.",
      },
      {
        state: "Illinois",
        note: "ICFA, 815 ILCS 505/2 + 505/10a. No pre-suit notice required. Actual + punitive damages, attorney's fees, injunctive relief.",
      },
    ],
    ifThisDoesntWork:
      "If the hotel ignores the demand or denies the refund, escalate. File the FCBA chargeback with your card issuer immediately (60-day window from the statement showing the disputed charge) — issuer must investigate under 12 CFR § 1026.13. File a complaint with the FTC at reportfraud.ftc.gov citing 16 CFR Part 464. File with your state Attorney General consumer protection division — state AGs have a documented track record on hotel-fee enforcement. For chain hotels, escalate to corporate risk/legal — the GM may not have authority to refund but corporate often does. Small-claims court is the next step for amounts within state jurisdictional limits (typically $5,000–$10,000) — most state UDAP statutes (MA, TX, CA, IL) provide attorney's fees and damages multipliers to a prevailing consumer.",
    relatedSlugs: [
      "hotel-room-not-advertised",
      "hotel-resort-fee",
      "hotel-double-charge",
      "billing-error-dispute",
      "flight-cancellation-refund",
      "refund-demand-merchant",
    ],
    faqs: [
      {
        question: "Should I chargeback first or send the letter first?",
        answer:
          "Send the letter first (or same day) — but do not miss the 60-day FCBA window. The chargeback is the realistic remedy; the letter is the record. If the 60 days is about to run, file the chargeback immediately and let the letter follow.",
      },
      {
        question: "The hotel says \"you agreed to the resort fee when you checked in.\"",
        answer:
          "Two answers. (a) A signature at check-in does not retroactively cure a booking-page disclosure that violated 16 CFR § 464.3 — the rule polices what was displayed before you booked. (b) Even with disclosure, the relevant question is whether the Total Price was shown more prominently than the partial price; if not, it's still a Rule violation.",
      },
      {
        question: "Will sending a demand letter actually do anything?",
        answer:
          "Usually, yes — but not because of the letter's prose. It works because (i) it documents a chargeback packet the issuer can't ignore, (ii) it creates a paper trail the hotel's GM has to escalate to corporate risk/legal, and (iii) in MA/TX/CA it starts the multiplier clock, which makes ignoring it expensive.",
      },
      {
        question: "The booking was through Expedia/Booking.com. Who do I send it to?",
        answer:
          "Both. The hotel made the actual charge and is the UDAP defendant; the OTA is jointly responsible for the displayed price under the FTC Rule and may have its own refund authority. Two letters, same content, cc each on the other.",
      },
      {
        question: "I'm not in one of the six states. Does any of this still help?",
        answer:
          "Every state has a UDAP statute (49 states + DC; Iowa is a partial outlier). The FCBA chargeback and the FTC Rule are federal and apply nationwide. Swap in your state's UDAP citation; the letter structure is identical.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hotel-room-not-advertised",
    category: "hotel",
    title: "Hotel Room Not As Advertised Refund Demand Letter (Free Template)",
    metaDescription:
      "Room nothing like the listing? Free demand letter combining state UDAP, breach of contract, and FCBA chargeback for material misrepresentation.",
    lede:
      "You booked a king with an oceanview; you got two doubles facing a parking lot. The advertised gym was closed all week. The \"recently renovated\" room had visible mold. This letter is the demand that gets refunds.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Hotel Name — General Manager]
[Hotel Address]

cc: [Brand Corporate Guest Relations; OTA if booked through one]

Sent via certified mail, return receipt requested

Re: Material Misrepresentation — Demand for Refund — Reservation [Number]

To the General Manager:

I am demanding a refund of $[Amount] for material misrepresentations regarding the room I booked at [Hotel] for [Dates], confirmation [Number], booking channel [Direct / OTA name].

Advertised vs. actual:

| Representation at booking | Actual on arrival |
|---------------------------|-------------------|
| [King bed] | [Two doubles] |
| [Oceanview] | [Parking-lot view] |
| [Non-smoking room] | [Smoke odor; documented at front desk on (date/time)] |
| [Pool / gym / business center open] | [Closed for the entire stay] |
| [\"Recently renovated\"] | [Visible damage / dated finishes] |

Evidence enclosed:
  • Booking confirmation showing the advertised features (screenshot, attached)
  • Listing photos / OTA listing detail page (screenshot, attached)
  • Photos of the actual room, dated and timestamped (attached)
  • Front-desk complaint log: spoke with [Employee Name] at [Time / Date]; outcome [described]
  • Receipts for any out-of-pocket consequential costs (replacement hotel, transportation, laundry)

Legal basis:

  1. **State UDAP** — Under [state UDAP statute], material misrepresentation of room characteristics is an unfair or deceptive practice. The FTC's three-part deception test (representation likely to mislead, reasonable interpretation, material to purchase decision) is satisfied: the representations were specific, the interpretation was reasonable, and they were material to my booking decision. This letter constitutes the [30-day demand under MA § 9; 30-day notice under CA Civ. Code § 1782; 60-day notice under TX § 17.505] where applicable.

  2. **Breach of contract** — The booking confirmation is the contract. Advertised features (king bed, oceanview, open amenities) are contract terms. Failure to deliver = breach. Remedy: difference in value plus consequential damages (replacement hotel cost, transportation, etc.).

  3. **Breach of express warranty** — Hotel-website descriptions, OTA listing detail pages, and any specific representations made by a booking agent are express warranties about the room.

  4. **Best-rate-guarantee / service-guarantee policy** — [Hotel/brand] publishes a [name of guarantee] that promises [specific remedy] when the stay does not match what was promised. This represents a binding contractual offer.

Demand:

Within [30] days of receipt of this letter, please:

  1. Refund $[Amount] to the original payment method (card ending [Last 4]);
  2. Refund consequential out-of-pocket costs of $[Amount] (receipts attached);
  3. Confirm in writing.

If you do not, I will pursue:
  • FCBA chargeback under 15 U.S.C. § 1666 with my card issuer (60-day window from statement);
  • OTA dispute resolution (if booked through Expedia / Booking.com / Hotels.com);
  • Complaint to the [State] Attorney General consumer-protection division;
  • Complaint to [brand] corporate guest relations;
  • Small-claims action under [State] UDAP statute, with statutory damages, multipliers, and attorney's fees where available.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [as listed]`,
    howToUse: [
      "Document everything within 30 minutes of entering the room. Photos and video with phone timestamps on, wide shot then close-ups, room number placard in frame. Walk to the front desk and report the problem in person — get the name of who you spoke to, the time, any incident report.",
      "Request a written incident report or new room AT THE TIME. If they refuse, document the refusal. If they move you, document the original problem before leaving. No documentation = no leverage.",
      "Save the booking confirmation, the OTA listing screenshot, and any pre-booking emails. Hotel websites change; listings get edited. Capture them while you can.",
      "Save all receipts for out-of-pocket costs caused by the misrepresentation: replacement hotel for nights you couldn't stay, Uber to find a working gym, laundry to deal with smoke smell. These are recoverable as consequential damages.",
      "Send to the GM, CC corporate (for chains) AND the OTA (if booked through one). The OTA is your contract counterparty for the booking transaction; the hotel is the service provider. Both have refund authority.",
    ],
    legalContext: [
      "Hotel \"not as advertised\" disputes typically stack three claims: state UDAP, breach of contract, and breach of express warranty. State UDAP statutes (Mass. Ch. 93A, Cal. CLRA + UCL + § 17500, Tex. DTPA, N.Y. GBL §§ 349/350, Fla. FDUTPA, IL CFA) all reach material misrepresentation of room characteristics. Most are modeled on the FTC's deception test under § 5 of the FTC Act — representation likely to mislead, reasonable interpretation, material to the purchase decision. The strong statutes (MA, TX, IL) offer treble or punitive damages plus attorney's fees, which is the real leverage. MA, CA (for damages), and TX have statutory pre-suit notice windows (30 days in MA and CA CLRA; 60 in TX); meeting those windows is the difference between recovering enhanced damages and not.",
      "Breach of contract gives a separate, parallel claim. The booking confirmation is a contract; specific representations on the booking page (king bed, oceanview, breakfast included, working pool) are contract terms. Remedy is the difference in value between what was paid for and what was delivered, plus consequential damages (cost of a replacement hotel, transportation, laundry, missed-meeting costs). Breach of express warranty applies to specific factual representations on the listing — particularly OTA detail pages and hotel websites — under UCC § 2-313 principles applied to services by analogy in most states.",
      "What counts as \"materially different\" under FTC doctrine: representations likely to affect the consumer's decision to book. Verified pattern examples that courts and AGs have treated as material: bed type (king vs. two doubles); view (oceanview/cityview vs. parking lot or airshaft); smoking status (advertised non-smoking, room smells of smoke); cleanliness and condition (visible mold, bedbugs, roaches, stained linens, mildew in bath, broken locks); amenities listed at booking (pool, gym, hot tub, spa, business center, restaurant, shuttle, breakfast — closed for the entire stay without disclosure); room category (advertised \"suite\" delivered as standard room; advertised ADA-accessible delivered as non-accessible); location (advertised \"beachfront\" turns out to be 15 minutes away).",
      "What's NOT enough to support a claim: minor decor differences from the listing photo; standard chain-style variation; listing photos clearly labeled \"representative room\"; anything disclosed at booking, in OTA listing fine print, or via a renovation/closure notice the consumer clicked past; subjective quality gripes without a specific representation to compare against; weather or local events outside hotel control that they timely disclosed. The doctrine rewards specificity. \"Room was bad\" loses. \"Confirmation #X promised non-smoking; room reeked of smoke; documented with timestamped photos and front-desk complaint at 4:12 PM\" wins.",
    ],
    stateNotes: [
      {
        state: "Massachusetts",
        note: "Ch. 93A § 9. 30-day demand letter required for individual consumer claim. Up to 3x damages for willful or bad-faith refusal. Mandatory attorney's fees for prevailing consumer. Connor v. Marriott confirms hotels covered.",
      },
      {
        state: "California",
        note: "CLRA (Civ. Code § 1750) + UCL (Bus. & Prof. Code § 17200) + False Advertising Law (§ 17500). CLRA: 30-day demand required for damages (§ 1782); injunctive relief can be sought immediately. Actual + punitive damages, restitution, attorney's fees.",
      },
      {
        state: "Texas",
        note: "DTPA, Bus. & Com. Code Ch. 17. 60-day pre-suit notice required under § 17.505. Up to 3x for knowing conduct; treble mental-anguish for intentional. Mandatory attorney's fees for prevailing consumer.",
      },
      {
        state: "New York",
        note: "GBL § 349 + § 350. No pre-suit notice required. Actual or $50 minimum (§ 349) / $500 minimum (§ 350). Discretionary treble up to $1,000 (§ 349) or $10,000 (§ 350).",
      },
      {
        state: "Florida",
        note: "FDUTPA, Fla. Stat. § 501.201 et seq. No pre-suit notice. Actual damages only (no punitive under FDUTPA). Mandatory attorney's fees for prevailing party.",
      },
      {
        state: "Illinois",
        note: "ICFA, 815 ILCS 505. No pre-suit notice. Actual + punitive + attorney's fees + injunctive relief. Even innocent misrepresentation actionable.",
      },
    ],
    ifThisDoesntWork:
      "If the hotel ignores the demand or denies the refund, the escalation stack is the same as for any layered UDAP letter. File the FCBA chargeback (60 days from statement) — services not as described. File with the OTA if booked through one — they often refund faster than hotels to protect their own ratings. File with your state AG. For chains, escalate to corporate. Small-claims court is the next step — most state UDAP statutes (MA, TX, CA CLRA, FL, NY) award attorney's fees plus damages multipliers or punitive damages to a prevailing consumer. Bring the booking confirmation, OTA listing screenshots, dated room photos, the front-desk complaint log, and receipts for consequential out-of-pocket costs.",
    relatedSlugs: [
      "hotel-overcharge-dispute",
      "hotel-resort-fee",
      "hotel-double-charge",
      "billing-error-dispute",
      "refund-demand-merchant",
      "flight-cancellation-refund",
    ],
    faqs: [
      {
        question: "Do I have to complain on-site to have a claim?",
        answer:
          "Practically yes. Failure to give the hotel a chance to cure on-property is the #1 defense they'll raise, and it kills most chargebacks. Always report, document the report, and ask for a remedy in real time.",
      },
      {
        question: "I booked through Expedia/Booking.com — who do I sue?",
        answer:
          "Both, potentially. The OTA is your contract counterparty for the booking transaction; the hotel is the service provider. Start by demanding from the hotel (the actual misrepresenter), CC the OTA, and use the OTA's dispute resolution in parallel.",
      },
      {
        question: "How much can I demand?",
        answer:
          "Anchor to (a) the value differential — what the room you got would have cost vs. what you paid; (b) consequential costs you incurred; (c) the hotel's own service-guarantee remedy if one exists. Full refund is reasonable when the misrepresentation was central to your booking decision. Partial refund is reasonable for partial nondelivery.",
      },
      {
        question: "What if the hotel just ignores the letter?",
        answer:
          "Stack the next layers: chargeback under FCBA, OTA dispute, state AG complaint, BBB complaint, small claims. In MA and TX, ignoring a properly-served demand letter exposes the hotel to enhanced damages — that's why you sent it certified.",
      },
      {
        question: "Does a chargeback waive my other claims?",
        answer:
          "No. A chargeback recovers your money via the card network; you keep all your UDAP and contract claims for any uncovered damages. Note the chargeback amount in any later claim so you're not double-recovering.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hotel-resort-fee",
    category: "hotel",
    title: "Hotel Resort Fee Dispute Letter (FTC Junk Fees Rule + State AG Enforcement)",
    metaDescription:
      "Surprise resort fee not in your booking total? Free demand letter citing 16 CFR Part 464 (FTC Junk Fees Rule, eff. May 2025) + state AG enforcement history.",
    lede:
      "The hotel quoted $189/night, then charged $189 + $45 \"resort fee\" at checkout. That's drip pricing. The FTC Junk Fees Rule (effective May 12, 2025) bans it. State AGs have been winning on this exact theory since 2019.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Hotel Name — General Manager]
[Hotel Address]

cc: [Brand Corporate Guest Relations; OTA if booked through one]

Sent via certified mail, return receipt requested

Re: Demand for Refund of Undisclosed Resort Fee — Reservation [Number]

To the General Manager:

I am demanding a refund of the $[Amount] resort fee (or destination fee / amenity fee / urban fee / equivalent) charged at checkout, pursuant to the FTC's Junk Fees Rule (16 CFR Part 464) and [State] consumer-protection law.

Stay details:
  • Reservation: [Number]
  • Check-in / check-out: [Dates]
  • Booking channel: [Hotel direct / OTA]
  • Headline room rate at booking: $[Amount per night]
  • Resort fee at checkout: $[Amount per night]
  • Total resort fee charged for stay: $[Total]
  • Total folio: $[Amount]
  • Last 4 of card charged: [Last 4]

Evidence enclosed:
  • Pre-booking search result page or booking confirmation showing the room rate displayed WITHOUT the mandatory resort fee included in the total
  • Final folio showing the resort fee as a separately captured charge
  • Credit card statement showing the actual posted charges

Legal basis:

  1. **FTC Junk Fees Rule, 16 CFR Part 464** (effective May 12, 2025). Under § 464.3, hotels and short-term lodging must display the Total Price — including all mandatory fees — clearly and conspicuously, AND more prominently than any other pricing information, before the consumer is asked to pay. \"Mandatory Fee\" includes resort fees, destination fees, amenity fees, urban fees, and similar surcharges that the guest is required to pay regardless of services used. The Total Price must include them. Civil penalty up to approximately $51,744 per violation under 15 U.S.C. § 45(m). The Rule is being actively enforced — the FTC announced its first major settlement (StubHub, $10M) on April 9, 2026.

  2. **State AG enforcement history** — At least seven state Attorneys General have publicly enforced this exact theory under their state UDAP statutes: D.C. (Marriott, 2019); Nebraska (Hilton, $300,000 settlement Jan 2024; Marriott, Omni, Choice companion settlements); Texas (Marriott settlement; Hyatt $1.25M; Booking.com $9.5M; Hilton lawsuit); Pennsylvania (Marriott); Colorado (Marriott, Feb 2024). The conduct described above is materially identical.

  3. **State UDAP** — Under [Mass. G.L. c. 93A § 2 / Cal. Bus. & Prof. Code § 17200 / Tex. Bus. & Com. Code § 17.46 / N.Y. GBL § 349 / Fla. Stat. § 501.204 / 815 ILCS 505/2], advertising a price that omits mandatory fees is a deceptive trade practice. This letter constitutes the [statutory demand under MA § 9; CA Civ. Code § 1782; TX § 17.505] where applicable.

Demand:

Within [14] days of receipt of this letter, please refund $[Total resort fee] to the original payment method (card ending [Last 4]). Confirm in writing.

If you do not, I will pursue:
  • FCBA chargeback under 15 U.S.C. § 1666 with my card issuer (within the 60-day FCBA window from the statement showing the disputed charge);
  • FTC complaint at reportfraud.ftc.gov, citing 16 CFR Part 464;
  • Complaint to the [State] Attorney General consumer-protection division (and to the [hotel state] AG);
  • Small-claims action under [State] UDAP, which may permit [treble damages and attorney's fees in MA / TX; punitive damages in IL; statutory minimums and trebles in NY].

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [as listed]`,
    howToUse: [
      "Screenshot the booking page BEFORE confirming the booking. The FTC Junk Fees Rule attack depends on showing that the displayed price didn't include the mandatory fee — pre-booking screenshots are the gold standard. If you only have the post-booking confirmation, use that, but pre-booking is much stronger.",
      "Send to the hotel's General Manager AND brand corporate guest relations AND (if applicable) the OTA. Texas AG's $9.5M settlement with Booking.com confirms platforms are independently on the hook for deceptive total-price displays.",
      "File the FCBA chargeback in parallel — within 60 days of the statement showing the resort-fee charge. Reason code: \"services not as described\" or \"unauthorized charge.\" Chargeback usually resolves the dispute regardless of what the hotel does.",
      "File the FTC complaint at reportfraud.ftc.gov citing 16 CFR Part 464. The Rule is being actively enforced (StubHub $10M settlement in April 2026). FTC complaints do not directly refund you but feed enforcement priorities — and citing the Rule in your letter signals you're informed.",
      "Pay under protest. Pay the full folio at checkout (avoid being held over a fee dispute), then dispute via chargeback and demand letter. Refusing to pay at checkout can result in the hotel charging your card on file anyway and reporting you to collections.",
    ],
    legalContext: [
      "The FTC's Junk Fees Rule, 16 CFR Part 464, is the major federal development in this space. Finalized December 17, 2024 and effective May 12, 2025, it remains in force as of May 2026 — no court has stayed or vacated it. The Trump-administration FTC kept the rule (it was a rare bipartisan rulemaking) and on April 9, 2026 announced a $10 million settlement against StubHub for violating it. Covered entities under § 464.2 include short-term lodging — defined to include hotels, motels, inns, short-term rentals (Airbnb, VRBO), vacation rentals, and similar temporary sleeping accommodations.",
      "What the Rule requires: under § 464.3, the Total Price must be displayed clearly and conspicuously, and more prominently than any other pricing information, before the consumer is asked to pay. \"Total Price\" means the maximum total of all fees or charges the consumer must pay, except government charges and shipping. \"Mandatory Fee\" includes any fee the consumer is required to pay regardless of services used — resort fees, destination fees, amenity fees, urban fees, mandatory cleaning fees, mandatory service charges. The Rule also prohibits misrepresenting any fee's nature, purpose, amount, refundability, or whether it's optional. Civil penalty up to approximately $51,744 per violation under 15 U.S.C. § 45(m).",
      "State AG enforcement under state UDAP statutes preceded the FTC Rule and continues. D.C. AG Karl Racine sued Marriott in July 2019 under the D.C. Consumer Protection Procedures Act, alleging deceptive drip pricing on $9–$95/night resort fees across 189+ properties. Nebraska AG Mike Hilgers settled with Hilton in January 2024 for $300,000 plus injunctive relief; companion settlements with Marriott, Omni, and Choice followed. Texas AG Ken Paxton has secured a Marriott settlement, a $1.25 million Hyatt settlement, and a $9.5 million Booking.com settlement, and has an active Hilton lawsuit. Pennsylvania AG settled with Marriott. Colorado AG Phil Weiser secured a Marriott agreement in February 2024. The point for the demand letter: this is not a fringe theory — at least seven state AGs have publicly extracted concessions or judgments on the exact same conduct.",
      "Procedural framework. Step 1: written demand to the hotel + brand corporate + (if applicable) OTA. Step 2: chargeback under the Fair Credit Billing Act (15 U.S.C. §§ 1666–1666j) — written billing-error notice to the card issuer within 60 days of the statement showing the disputed charge; issuer must investigate under § 1026.13 with mandatory protections during investigation. Step 3: FTC complaint at reportfraud.ftc.gov. Step 4: state AG complaint in both home state and hotel state. Step 5: small-claims court under state UDAP statute. Most state UDAP statutes provide treble damages and attorney's fees for prevailing consumers (Mass. Ch. 93A; Tex. DTPA up to treble; D.C. CPPA up to treble or $1,500/violation). The demand letter is what triggers MA's 30-day and TX's 60-day pre-suit clocks for enhanced damages.",
    ],
    stateNotes: [
      {
        state: "Federal — FTC Junk Fees Rule",
        note: "16 CFR Part 464, eff. May 12, 2025. Covers short-term lodging including hotels, motels, Airbnb, VRBO. Total Price including mandatory fees must be displayed more prominently than any other price, before checkout. Civil penalty up to ~$51,744 per violation under 15 U.S.C. § 45(m). First major settlement: StubHub $10M, April 2026.",
      },
      {
        state: "District of Columbia",
        note: "D.C. CPPA. AG Racine sued Marriott (July 2019) for resort-fee drip pricing across 189+ properties; case continues. Up to treble damages or $1,500/violation, whichever greater.",
      },
      {
        state: "Nebraska",
        note: "Nebraska Consumer Protection Act + Uniform Deceptive Trade Practices Act. AG Hilgers settled with Hilton ($300,000, Jan 2024); companion settlements with Marriott, Omni, Choice. Establishes that mandatory undisclosed fees violate NCPA.",
      },
      {
        state: "Texas",
        note: "DTPA. AG Paxton: Marriott settlement; Hyatt $1.25M; Booking.com $9.5M; active Hilton lawsuit. 60-day demand letter required for treble damages under § 17.505. Mandatory attorney's fees.",
      },
      {
        state: "Massachusetts",
        note: "G.L. c. 93A § 9. 30-day demand letter required. Up to 3x damages for willful or bad-faith refusal. Mandatory attorney's fees.",
      },
      {
        state: "California",
        note: "Bus. & Prof. Code § 17200 (UCL) + § 17500 (False Advertising Law) + Civ. Code § 1750 (CLRA). CLRA: 30-day demand for damages. CA also has its own \"California Honest Pricing Law\" (SB 478, eff. July 1, 2024) that bans drip pricing statewide.",
      },
      {
        state: "Colorado",
        note: "Colorado Consumer Protection Act. AG Weiser secured Marriott agreement on junk fees (Feb 2024).",
      },
    ],
    ifThisDoesntWork:
      "If the hotel refuses to refund the resort fee, the escalation stack is well-traveled. File the FCBA chargeback with your card issuer (60 days from statement) — the chargeback often resolves the dispute regardless of the hotel's position. File a complaint with the FTC at reportfraud.ftc.gov citing 16 CFR Part 464 — the Rule is being enforced (StubHub $10M, April 2026). File complaints with both your home-state AG and the hotel-state AG; resort-fee enforcement is high-priority for many AG consumer-protection offices. For chains, escalate to corporate. Small claims is the next step; bring the pre-booking screenshot showing the headline rate, the final folio, and the credit-card statement. Most state UDAP statutes (MA, TX, IL, NY, CA CLRA) provide attorney's fees and damages multipliers — meaning a successful claim recovers much more than just the fee.",
    relatedSlugs: [
      "hotel-overcharge-dispute",
      "hotel-room-not-advertised",
      "hotel-double-charge",
      "billing-error-dispute",
      "refund-demand-merchant",
      "flight-cancellation-refund",
    ],
    faqs: [
      {
        question: "The hotel says the resort fee was \"disclosed\" in the fine print at checkout. Do I still have a claim?",
        answer:
          "Probably yes, especially for bookings on or after May 12, 2025. The FTC Junk Fees Rule requires the total price (including mandatory fees) to be the most prominent price displayed, before the consumer is asked to pay — not buried in a checkout disclosure. Pre-2025, state UDAP cases (Marriott, Hilton, Hyatt) repeatedly rejected \"we disclosed it eventually\" as a defense.",
      },
      {
        question: "I booked through Expedia/Booking.com, not the hotel. Who do I send the letter to?",
        answer:
          "Send it to both. The Texas AG's $9.5M Booking.com settlement establishes that booking platforms are independently on the hook for deceptive total-price displays. The hotel is also liable because it ultimately charged the card.",
      },
      {
        question: "What if I already checked out and paid without complaining?",
        answer:
          "You still have rights. The FCBA chargeback window is 60 days from the statement date — use it. State UDAP statutes of limitation are typically 2–4 years.",
      },
      {
        question: "Can I refuse to pay the resort fee at checkout?",
        answer:
          "Maybe, but it's a fight at the desk. The cleaner play is: pay under protest, then dispute. Refusing to pay can result in the hotel charging your card on file anyway and reporting you to collections.",
      },
      {
        question: "Does this cover Airbnb cleaning fees?",
        answer:
          "Yes. The FTC Junk Fees Rule explicitly covers home shares and vacation rentals booked through platforms like Airbnb and VRBO. Mandatory cleaning fees that aren't disclosed up-front in the headline price are covered.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hotel-double-charge",
    category: "hotel",
    title: "Hotel Double-Charge Dispute Letter (FCBA / Reg E + UDAP Layered Demand)",
    metaDescription:
      "Hotel charged your card twice for the same stay? Free demand letter citing FCBA (15 U.S.C. § 1666) for credit, Reg E (12 CFR § 1005.11) for debit + state UDAP.",
    lede:
      "Same stay billed twice. Pre-authorization hold never released. Deposit and final balance both captured. This letter is the layered demand — and the chargeback that resolves most of these without further escalation.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Hotel Name — General Manager]
[Hotel Address]

cc: [Brand Corporate Guest Relations, if a chain]

Sent via certified mail, return receipt requested

Re: Demand for Refund of Duplicate Charge — Reservation [Number]

To the General Manager:

I am writing about duplicate charges on my card for reservation [Number] at [Hotel] on [Dates].

Charge details:
  • Reservation / confirmation #: [Number]
  • Check-in / check-out: [Dates]
  • Room number: [Number]
  • Card type: [Credit / Debit — DRIVES which federal statute applies]
  • Last 4 of card: [Last 4]

Both transactions on my card:
  • Transaction 1: [Date / Amount] — [described as on statement]
  • Transaction 2: [Date / Amount] — [described as on statement]
  • Total disputed (duplicate): $[Amount]

Folio evidence enclosed: [the hotel folio shows one stay, totaling $X — the second charge has no folio support].

Legal basis:

  [CREDIT CARD — FCBA]
  Under the Fair Credit Billing Act, 15 U.S.C. § 1666, and Regulation Z, 12 CFR § 1026.13, this duplicate charge qualifies as a billing error under (a)(1) (unauthorized charge), (a)(3) (services not accepted or delivered as agreed), and (a)(5) (computational or accounting error). I have notified my card issuer in parallel under § 1026.13(b)(1) (within 60 days of statement).

  [DEBIT CARD — Reg E]
  Under the Electronic Fund Transfer Act and Regulation E, 12 CFR § 1005.11(a)(1), this duplicate transfer is an \"unauthorized electronic fund transfer\" and a \"computational or bookkeeping error.\" I have notified my bank in parallel within the 60-day window. Bank must investigate within 10 business days or provide provisional credit (§ 1005.11(c)).

  **State UDAP** — Knowingly billing twice, or failing to reverse a known duplicate within a reasonable time, is unfair conduct under [state UDAP statute].

Demand:

Within [14] days of receipt of this letter, please refund $[Disputed Amount] to the [credit card / bank account] used for the duplicate charge. Confirm in writing.

If you do not, I will pursue:
  • Chargeback / Reg E dispute with my [card issuer / bank];
  • Complaint to the [State] Attorney General consumer protection division;
  • Complaint to the FTC at reportfraud.ftc.gov;
  • Small-claims action under [State] UDAP.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [reservation confirmation; hotel folio; bank/card statements showing both transactions]`,
    howToUse: [
      "Confirm at the front desk before checkout whether the second charge is a pre-authorization hold or a posted sale. Holds drop in 1–8 business days for debit (sometimes longer); credit holds up to ~30 days. If both transactions are posted, it's a real duplicate — don't wait.",
      "File the FCBA or Reg E dispute with your card issuer or bank IN PARALLEL with sending this letter. The card-issuer/bank dispute is the primary recovery mechanism. The letter to the hotel creates the paper trail and often produces a faster refund — but the dispute is what protects your money.",
      "Send to the hotel's General Manager AND (for chains) corporate guest relations. The GM has authority to refund; corporate has audit oversight. Both copies create pressure.",
      "Credit card vs. debit card matters significantly. Credit gives you FCBA: you can withhold payment of the disputed amount while the issuer investigates; the issuer can't try to collect during the dispute. Debit gives you Reg E, which is also strong but reactive — your money already left the account, and you're waiting on provisional credit (within 10 business days).",
      "Don't accept \"it'll fall off in a few weeks\" as a final answer. If both transactions are posted, demand a written commitment to refund or a written explanation of why one is a legitimate separate charge. Lack of written explanation = strong chargeback case.",
    ],
    legalContext: [
      "A hotel double-charge is almost always one of two things on the legal map, depending on which card the guest used. For credit cards, the Fair Credit Billing Act (15 U.S.C. § 1666) and Regulation Z (12 CFR § 1026.13) apply. A duplicate hotel charge fits cleanly into the statutory definition of a \"billing error\" under § 1026.13(a)(1) (an extension of credit not made to the consumer — i.e., the second posting was never authorized), (a)(3) (credit for property or services not accepted by the consumer or not delivered as agreed — one stay, not two), and (a)(5) (computational or similar error of an accounting nature). The leverage comes from the card issuer's statutory duty to investigate within two complete billing cycles (max 90 days), not from the hotel's goodwill.",
      "For debit cards, the Electronic Fund Transfer Act (EFTA) and Regulation E (12 CFR § 1005.11) apply. Reg E defines \"error\" at § 1005.11(a)(1) to include \"an unauthorized electronic fund transfer,\" \"an incorrect electronic fund transfer to or from the consumer's account,\" and \"a computational or bookkeeping error made by the financial institution.\" Debit duplicates squarely fit. Reg E timing: notice within 60 days of statement; bank investigation within 10 business days (or 45 days with provisional credit at day 10); the EFTA's liability limits ($50 if reported within 2 business days of learning of unauthorized use, $500 if within 60 days, unlimited after 60 days) apply only to unauthorized-use scenarios, not to computational duplicates.",
      "Common double-charge scenarios. Pre-authorization hold not released: hotel preauths an incidental amount at check-in, then captures the final folio total as a separate posting; both sit on the statement until the hold expires. Manual entry duplication: front-desk keys the same folio twice and the property-management system and the payment terminal don't reconcile. Deposit + final balance both charged: prepaid deposit gets charged again at checkout instead of credited against the folio. Folio + ancillary charged twice: room service, parking, or resort fee posts once on the folio and again as a standalone capture. OTA + hotel both charge: Booking.com or Expedia bills the card, then the hotel bills the card on arrival instead of receiving funds from the OTA.",
      "State UDAP statutes (Unfair and Deceptive Acts and Practices) provide the third layer. Knowingly billing a guest twice — or failing to reverse a known duplicate within a reasonable time — is the kind of conduct UDAPs reach. Several states allow treble or punitive damages and attorney-fee shifting for willful violations. The hotel doesn't need to know UDAP law exists; they need to know the letter writer knows it.",
    ],
    stateNotes: undefined,
    ifThisDoesntWork:
      "If the hotel refuses or delays the refund, the FCBA / Reg E chargeback path is the primary recovery mechanism. For credit cards: file within 60 days of statement under 12 CFR § 1026.13; issuer must investigate and may not try to collect the disputed amount during investigation. For debit cards: file within 60 days of statement under 12 CFR § 1005.11; bank must investigate within 10 business days or provide provisional credit. Also file complaints with your state AG consumer-protection division, FTC at reportfraud.ftc.gov, and CFPB at consumerfinance.gov/complaint (for the bank or card issuer's handling of the dispute). For chains, escalate to corporate. Small-claims court is the next step for amounts within state jurisdictional limits.",
    relatedSlugs: [
      "hotel-overcharge-dispute",
      "hotel-room-not-advertised",
      "hotel-resort-fee",
      "billing-error-dispute",
      "chargeback-escalation",
      "refund-demand-merchant",
    ],
    faqs: [
      {
        question: "The hotel says it's \"just a pending authorization, it'll fall off.\" Do I wait?",
        answer:
          "Ask which line is the hold and which is the posted sale. Holds drop in 1–8 business days for debit (sometimes longer); credit holds up to ~30 days. If both transactions are posted, it's a real duplicate — don't wait, send the letter and start the FCBA/Reg E clock.",
      },
      {
        question: "How long do I have to dispute with my card issuer?",
        answer:
          "60 days from the date the issuer sent the statement that first reflected the duplicate. Miss that window and you lose the statutory protections (though the issuer may still help under network/Visa-Mastercard chargeback rules).",
      },
      {
        question: "Credit card or debit card — does it matter?",
        answer:
          "Significantly. Credit gives you FCBA: you can withhold payment of the disputed amount while the issuer investigates, and the issuer can't try to collect during the dispute. Debit gives you Reg E, which is reactive — your money already left the account, and you're waiting on provisional credit (within 10 business days).",
      },
      {
        question: "Do I have to talk to the hotel before disputing with my bank?",
        answer:
          "No. Federal law doesn't require it. But a written demand on the hotel (a) often produces a faster refund than a chargeback, (b) creates documentation your bank will want, and (c) preserves the relationship if you intend to stay there again.",
      },
      {
        question: "What if the hotel admits the duplicate but says the refund will take \"a few weeks\"?",
        answer:
          "Get the admission in writing, send the demand letter anyway with the 14-day deadline, and file the FCBA/Reg E dispute in parallel. The bank's timeline runs independently of the hotel's, and provisional credit on a debit dispute is much faster than a hotel-initiated refund.",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
