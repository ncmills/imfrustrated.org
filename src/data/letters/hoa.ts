import type { LetterTemplate } from "./types";

// Statutes verified May 2026. Notable recent changes incorporated:
// - CA AB 130 (signed 6/30/2025) — fines capped at $100/violation absent written
//   health/safety finding. AB 130 = housing-reform vehicle that absorbed SB 681's
//   fine-cap language. NOT AB 1101 (a common misattribution).
// - FL HB 1203 (eff. 7/1/2024) — independent fining committee + 14-day notice;
//   records access tightened; criminal penalties added for willful records refusal.
// - MD HB 273 (eff. 10/1/2025) — late-fee cap now applies to unpaid balance.
// - CO HB22-1137 — 18-month minimum payment plan; no foreclosure on fines alone.
// - AZ SB1494 (eff. 9/26/2025) — foreclosure threshold raised from $1,200/12 mo
//   to $10,000/18 mo.

export const hoaLetters: LetterTemplate[] = [
  {
    slug: "hoa-fine-dispute",
    category: "hoa",
    title: "HOA Fine Dispute Letter (Free Template + State Procedural Rules)",
    metaDescription:
      "HOA fined you without notice or hearing? Free letter citing your state's HOA fine procedure (CA Civ. Code § 5855; FL § 720.305; TX § 209.007; VA § 55.1-1819).",
    lede:
      "An HOA's power to fine is not inherent. It comes from the CC&Rs plus a state common-interest community statute, and every state requires the same basic procedural skeleton — notice, opportunity to cure, hearing, written decision. Skip any of it and the fine is procedurally defective.",
    body: `[Your Full Legal Name]
[Property Address — Lot/Unit Number]
[City, State ZIP]
[Phone] [Email]

[Date]

[HOA Legal Name — as recorded with the Secretary of State]
[c/o Property Manager / Management Company if applicable]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [board / manager email])

Re: Formal Dispute of Fine — [Notice Number / Date / Amount] — Demand to Vacate

To the Board of Directors:

I am the owner of [Property Address — Lot/Unit]. I am writing to formally dispute the fine described below and to demand that it be vacated and removed from my account.

Citation in dispute:
  • Date of alleged violation: [Date]
  • Date of notice received: [Date]
  • Date and verbatim quote of the CC&R or rule the HOA invoked: [Quote the exact text from the notice]
  • Fine amount: $[Amount]
  • Date and time of hearing offered (if any): [Date / Time, or "none"]

Procedural defects (pick any that apply, strike the rest):

  [No notice of violation / late notice / insufficient information]
  The notice I received [did not / inadequately] describe the alleged violation, the rule violated, or the proposed cure. Under [state statute], the notice must include [list elements].

  [No written notice of hearing / insufficient days]
  I received [no notice / less than the statutory minimum] of any hearing. Under [state statute below], the HOA must provide written notice of the hearing at least [10 days under CA Civ. Code § 5855 / 14 days under FL § 720.305 / 14 days under VA § 55.1-1819 / 10 days under TX § 209.007] in advance.

  [No opportunity to cure]
  The notice did not provide an opportunity to cure a curable violation before assessment of the fine.

  [Hearing not held / held without notice / wrong body]
  No hearing was held before the fine was assessed. [FL only: under § 720.305(2), the hearing must be before an independent committee of 3 members, none of whom may be a board member, officer, employee, or relative thereof. The body that heard my case was [describe], which does not satisfy this requirement.]

  [Fine exceeds statutory cap]
  The fine of $[Amount] exceeds the cap under [California Civ. Code § 5850 as amended by AB 130 (effective 6/30/2025), which caps fines at $100/violation absent a written board finding of adverse health or safety impact made at a public meeting / Virginia Code § 55.1-1819, which caps a single fine at $50 and a continuing violation at $10/day capped at 90 days = $900 max / Colorado C.R.S. § 38-33.3-209.5, which caps fines at $500/violation for non-health/safety / Nevada NRS 116.31031, which caps fines at $100/violation and $1,000 aggregate per hearing].

  [Fining body composition defective]
  [FL specific: the fining committee was not composed of 3 members independent of the board, officers, employees, or their relatives, as required by § 720.305(2).]

  [Selective enforcement / waiver by acquiescence]
  I have observed the same or worse violations at the following properties without enforcement: [Address 1, Address 2, Address 3 — with photos and dates]. Under [state] law, HOAs must enforce CC&Rs in good faith, with procedures fair and uniformly applied. (California: Civ. Code § 5975; Cohen v. Kite Hill Cmty. Ass'n, 142 Cal. App. 3d 642 (1983). Texas: Stewart v. Welsh, 142 Tex. 314 (1944). Virginia: Sonoma Dev., Inc. v. Miller, 258 Va. 163 (1999).)

Demand:

Within [30] days of the date of this letter, please:

  1. Vacate the fine and remove it from my account ledger;
  2. Provide written confirmation;
  3. Provide a copy of the records reflecting (a) the date the alleged violation was first observed, (b) the board's adoption of the rule and fine schedule, (c) the notice and hearing materials, and (d) any enforcement actions against the comparator properties listed above (records request under [Cal. Civ. Code § 5200; FL Stat. § 720.303(5); VA § 55.1-1815; TX Prop. Code § 209.005; CO § 38-33.3-317]).

I am also exercising any pre-suit dispute-resolution rights available under [state law / governing documents] — California IDR (Civ. Code § 5910) and member-initiated mediation (§ 5930); Nevada NRS 38 ADR; Florida pre-suit mediation; Virginia CIC Ombudsman; Arizona ADRE petition under § 32-2199.01.

If you do not vacate the fine within [30] days, I reserve the right to pursue all remedies available, including:

  • Civil action for declaratory and injunctive relief;
  • Refund of any amounts already paid (under protest);
  • Defense to any future lien or foreclosure based on the disputed fine. [Note for CA: a fine cannot itself become a basis for nonjudicial foreclosure under Civ. Code § 5725(b); for CO: foreclosure on a debt composed solely of fines, collection costs, or attorney's fees is barred under C.R.S. § 38-33.3-316.]
  • Reasonable attorney's fees where the statute or governing documents provide;
  • Complaint to the appropriate state regulator: Florida DBPR (post-HB 1203 jurisdiction over records, elections, meetings); Virginia CIC Ombudsman at DPOR; Nevada NRED CICCH Ombudsman; Arizona ADRE petition.

Important — California: please note that the California Department of Real Estate explicitly disclaims HOA jurisdiction. CA homeowners' real remedies are IDR, member-initiated mediation, small claims, or superior court. The reservation above is limited accordingly.

Please confirm receipt within [7] days and provide your written response by the deadline above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of fine notice received; photos / documents supporting selective-enforcement comparators; prior correspondence]`,
    howToUse: [
      "Pick exactly one procedural defect (or one clean cluster of defects) and lead with it. Multi-issue letters dilute each individual challenge. The strongest single defect is usually the one most clearly documented — \"no hearing offered\" or \"fine exceeds statutory cap\" beats a vague \"this is unfair.\"",
      "Send by certified mail with return receipt requested. Virginia, Texas, and Nevada all expressly reward certified mail; everywhere else, the certified receipt is what proves the date the dispute clock started and triggers any statutory response window.",
      "Attend the hearing if one has been scheduled, even if procedurally defective. Most state statutes (NV NRS 116.31031, TX § 209.007, FL § 720.305) preserve the homeowner's right to be heard on the record. Non-attendance after proper notice can waive defenses.",
      "Do not refuse to pay other assessments to \"set off\" the disputed fine. Most state statutes allow lien recording for unpaid assessments — and in California, partial payments under Civ. Code § 5655 are applied to assessments first, then fees. Refusing to pay assessments creates an independent lien risk that doesn't help the fine dispute.",
      "Don't cite the California Department of Real Estate as the regulator. The DRE explicitly disclaims HOA jurisdiction — it regulates licensees, subdividers, and unlicensed real-estate activity only. California homeowners' actual remedies are Davis-Stirling IDR (§ 5910), pre-suit mediation (§ 5930), small claims, or superior court.",
    ],
    legalContext: [
      "An HOA's authority to fine derives from two sources — the recorded CC&Rs (a contract running with the land) and the state common-interest community statute. Every state surveyed below requires the same basic procedural skeleton before a fine attaches: (a) written notice of the alleged violation identifying the rule violated; (b) opportunity to cure where the violation is curable and not a health/safety threat; (c) written notice of a hearing with date, time, and location, delivered a specified number of days in advance; (d) a hearing before the board or a designated independent committee; (e) written decision delivered to the homeowner within a statutory window. Skipping any step makes the fine procedurally defective, and several state statutes expressly render such fines void.",
      "California's Civ. Code § 5855 (the Davis-Stirling fining-procedure statute) is illustrative. It requires the board to give written notice of the hearing by personal delivery or individual delivery under § 4040 at least 10 days before the meeting; the notice must state date, time, place, nature of the alleged violation, and the member's right to attend and address the board; the board must meet in executive session if the member requests; the board must deliver written notification of the decision within 15 days after the action. § 5235 lets the member sue to enforce records-inspection rights with attorney's fees plus a civil penalty up to $500 per separate denied request. AB 130, signed June 30, 2025 and effective immediately, capped fines at $100 per violation unless the board makes a written finding at a public meeting describing an adverse health or safety impact.",
      "Florida's HB 1203 (effective July 1, 2024) overhauled § 720.305 with the strictest procedural rules in the country. The HOA must give 14 days' written notice of a hearing before an independent committee of 3 members — none of whom may be a board member, officer, employee, or relative thereof. The hearing must occur within 90 days of notice; written findings within 7 days of hearing; fine due no earlier than 30 days after written notice of approval. The committee can reject the board's proposed fine. DBPR has expanded post-HB-1203 jurisdiction over records, elections, meetings, and certain financial matters — making Florida the most robust state regulator for HOA disputes.",
      "State fine caps vary substantially and matter for the letter's leverage. California: $100/violation under AB 130. Virginia: $50 single offense, $10/day continuing, 90-day cap = $900 max for one continuing violation. Colorado: $500/violation (non-health/safety) under HB22-1137. Nevada: $100/violation, $1,000 aggregate per hearing. Florida HOA: $100/violation, $1,000 aggregate per continuing violation. Texas, Washington, and Arizona have no statutory dollar cap — fines must be \"reasonable.\" Procedural-violation remedies range from per-violation civil penalties (CA $500 for records denial under § 5235) to total forfeiture of the fine, with attorney's fees available in most states under either the statute or fee-shifting governing documents.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code §§ 4000–6150 (Davis-Stirling). Fining procedure: § 5855 (≥10 days' written notice of hearing; right to attend, address board; executive session if requested; written decision within 15 days). Fine cap: $100/violation per AB 130 (eff. 6/30/2025) absent written health/safety finding. § 5725(b): a fine cannot become a basis for nonjudicial foreclosure. Remedies: IDR (§ 5910), mediation (§ 5930), small claims, superior court. CA DRE has NO HOA jurisdiction.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 720.305(2) (amended by HB 1203, eff. 7/1/2024). ≥14 days' written notice; hearing before an independent committee of 3 (none a board member, officer, employee, or relative thereof); hearing within 90 days; written findings within 7 days; fine due ≥30 days after written notice. Cap: $100/violation, $1,000 aggregate per continuing violation. DBPR has post-HB-1203 jurisdiction over records, elections, meetings.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 209.006 (notice by certified mail) and 209.007 (hearing). Notice describes violation; reasonable cure period if curable + not health/safety; owner may request hearing within 30 days; hearing within 30 days of request; ≥10 days' pre-hearing notice. No statutory cap; \"reasonable\" fines per CC&Rs.",
      },
      {
        state: "Virginia",
        note: "Va. Code § 55.1-1819 (POAA). ≥14 days' pre-hearing notice by hand-delivery or certified mail; hearing result within 7 days, certified mail. Cap: $50/single offense; $10/day continuing; 90-day cap = $900 max. File \"Notice of Final Adverse Decision\" with CIC Ombudsman within 30 days; $25 filing fee.",
      },
      {
        state: "Colorado",
        note: "C.R.S. § 38-33.3-209.5 (CCIOA); HB22-1137 amendments. \"Fair and impartial fact-finding process\" before impartial decision maker; for non-health/safety violations, two 30-day cure periods before legal action; 72-hour cure for health/safety. Cap: $500/violation (non-health/safety); no cap for health/safety. Cannot foreclose on home for unpaid fines alone (§ 38-33.3-316).",
      },
      {
        state: "Nevada",
        note: "NRS 116.31031. Written notice with violation, proposed cure, fine amount, hearing date; detailed photograph required if physical condition; hearing required unless paid/waived/owner fails to appear. Cap: $100/violation; $1,000 aggregate per hearing (non-health/safety). NRS 38 ADR mandatory before suit.",
      },
      {
        state: "Washington",
        note: "RCW 64.90.405 (WUCIOA); pre-2018 communities under Ch. 64.38. Reasonable cure period; published fine schedule must be adopted by board and furnished to owners before any fine; notice with rule cited, proposed amount, hearing right; hearing with opportunity to present evidence; written decision. No statutory cap.",
      },
      {
        state: "Arizona",
        note: "A.R.S. § 33-1803 (planned communities); § 33-1242 (condominiums). Written notice; member has 21 days to send written response by certified mail; reasonable opportunity to be heard. No statutory cap. Petition for ADRE administrative hearing under § 32-2199.01 (filing fee, OAH ALJ hearing).",
      },
    ],
    ifThisDoesntWork:
      "If the HOA doesn't respond or refuses to vacate the fine, the escalation depends on the state. In California, use IDR (Civ. Code § 5910) and then member-initiated mediation (§ 5930) — both are precursors to suit. In Nevada, NRS 38 ADR is mandatory before any civil action. In Virginia, file a Notice of Final Adverse Decision with the CIC Ombudsman within 30 days ($25 filing fee). In Florida, file with DBPR's Division of Florida Condominiums, Timeshares, and Mobile Homes — post-HB 1203 their authority over HOAs is substantial. In Arizona, petition for an ADRE administrative hearing under § 32-2199.01. Civil actions remain available in every state for declaratory and injunctive relief, refund of paid amounts, attorney's fees where statutory or contractual, and defense against any subsequent lien or collection action. Pay the fine under protest if needed to avoid lien escalation while the dispute proceeds.",
    relatedSlugs: [
      "hoa-records-inspection",
      "hoa-selective-enforcement",
      "hoa-special-assessment-dispute",
      "hoa-hardship-request",
      "neighbor-fence-dispute",
      "late-fee-waiver-request",
    ],
    faqs: [
      {
        question: "Can my HOA fine me without a hearing?",
        answer:
          "No — every state surveyed requires notice plus an opportunity to be heard before a fine attaches. California § 5855 requires 10 days' notice; Florida § 720.305(2) requires 14 days plus an independent committee; Texas § 209.007 requires a hearing on request within 30 days; Arizona § 33-1803 requires notice and opportunity to be heard.",
      },
      {
        question: "Is there a maximum HOA fine in my state?",
        answer:
          "Depends on state. California: $100/violation under AB 130 (effective June 30, 2025). Florida: $100/violation, $1,000 aggregate. Virginia: $50 single, $10/day continuing, 90-day cap. Colorado: $500/violation. Nevada: $100/violation, $1,000/hearing. Texas, Washington, and Arizona have no statutory cap — fines must be \"reasonable\" per CC&Rs.",
      },
      {
        question: "If the HOA didn't follow procedure, is the fine automatically void?",
        answer:
          "In California, yes — the fine is void under § 5855 and the HOA must restart the process. In most other states, the fine is voidable, meaning you must affirmatively raise the procedural defect in a written dispute or in court. Don't assume it's gone just because you noticed the defect.",
      },
      {
        question: "Can the HOA put a lien on my house for an unpaid fine?",
        answer:
          "In California, no — a fine cannot itself become a lien enforceable by nonjudicial foreclosure (Civ. Code § 5725(b)). In most other states, unpaid fines plus collection costs can be liened once they age into the assessment account — which is why ignoring the fine is the wrong play. Colorado bars foreclosure for fines-only debt (C.R.S. § 38-33.3-316).",
      },
      {
        question: "Who do I complain to if the HOA won't back down?",
        answer:
          "Wildly state-dependent. Nevada has the strongest regulator (NRED Ombudsman + mandatory NRS 38 ADR). Virginia has the CIC Ombudsman at DPOR ($25 filing fee). Florida DBPR's authority expanded under HB 1203 (2024). Arizona allows an ADRE administrative hearing under § 32-2199.01. California has no executive-branch HOA regulator — the DRE explicitly disclaims jurisdiction — so the remedy is IDR → mediation → court. Colorado's HOA Information & Resource Center logs complaints but has no enforcement power.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hoa-records-inspection",
    category: "hoa",
    title: "HOA Records Inspection Demand Letter (Free Template + State Rules)",
    metaDescription:
      "HOA stalling on your records request? Free letter citing your state's books-and-records statute (CA Civ. Code § 5200; FL § 720.303(5); TX § 209.005).",
    lede:
      "Every state with a planned-community statute gives members a statutory right to inspect HOA books and records. The right is procedural, not discretionary — boards cannot demand approval, and most states cannot require a stated reason. This letter invokes the specific procedure your state imposes.",
    body: `[Your Full Legal Name]
[Property Address — Lot/Unit Number]
[City, State ZIP]
[Phone] [Email]

[Date]

[HOA Legal Name]
[c/o Property Manager / Management Company if applicable]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Required in Texas and Colorado; best practice everywhere.)

Re: Demand for Inspection of Books and Records — [State Statute Cite]

To the Board of Directors:

I am the owner of [Property Address — Lot/Unit]. Pursuant to [Cal. Civ. Code § 5205; Fla. Stat. § 720.303(5); Tex. Prop. Code § 209.005; Va. Code § 55.1-1815; Colo. Rev. Stat. § 38-33.3-317; NRS 116.31175; RCW 64.90.495; A.R.S. § 33-1805 — pick your state and strike the rest], I am formally requesting access to the following records:

  1. [Board meeting minutes from [start date] through [end date]]
  2. [Annual budget and audited financial statement for fiscal year [year]]
  3. [Reserve study — most recent + prior]
  4. [Executed contracts with [vendor name] from [year]]
  5. [Check register from [start date] through [end date]]
  6. [Vendor invoices and board approvals for amounts over $[threshold]]
  7. [Member ledger reflecting my account, [start date] through current]
  8. [Insurance policies in force]
  9. [Election materials from the [date] election — CA only, must request within 1 year of election]
  10. [Any other specific records you need]

Inspection method:
[Pick one — strike the other.]
  • In-person inspection at the association office on [Date and time window];
  • Copies delivered by [email / postal mail / electronic portal] to the address above.

Statutory deadline:
[Pick the cite for your state.]
  • California: 10 business days for current-fiscal-year records; 30 calendar days for prior two fiscal years (§ 5210); 5 business days for the annual policy statement and IRS Form 1099s.
  • Florida: 10 business days from receipt of this written request (§ 720.303(5)(b)).
  • Texas: 10 business days, with a permitted 15-business-day extension on written notice (§ 209.005(e)).
  • Virginia: 5 business days for manager-run associations; 10 for self-managed (§ 55.1-1815).
  • Colorado: 30 calendar days after receipt of this request and payment of fees (§ 38-33.3-317).
  • Nevada: 21 days for copies; review of records available on written request at the association office (NRS 116.31175).
  • Washington: 10 days' notice; production no later than 21 days absent court order (RCW 64.90.495).
  • Arizona: 10 business days for inspection and copies (A.R.S. § 33-1805).

Fees:
I will pay statutory copy fees at the rate the statute permits. (California: actual cost of copying + $10/hr redaction time after the first free hour, § 5205(g). Arizona: max $0.15/page. Nevada: free if electronic; $0.25/page first 10, then $0.10, with $25/hr review cap. Texas: board-adopted, recorded fee schedule, not to exceed 1 TAC § 70.3 limits. Virginia: actual cost of materials + labor.)

Reservation of rights:
If you fail to comply with the deadline above or deny access without lawful basis, I reserve the right to:
  • In California, recover a civil penalty of up to $500 per separate denied written request, plus reasonable attorney's fees and costs (§ 5235).
  • In Florida, recover damages of $50 per day starting on day 11, capped at $500, plus attorney's fees (§ 720.303(5)(c)); under HB 1203 (effective 7/1/2024), willful/repeated denial with intent to harm is a 2nd-degree misdemeanor, and willful refusal to avoid crime detection is a 3rd-degree felony.
  • In Colorado, recover $50/day or actual damages (whichever greater), capped at $500 (§ 38-33.3-317).
  • In Virginia, file for mandamus / injunctive relief under § 55.1-1828, with attorney's fees.
  • In Texas, file a justice-court petition under § 209.005(n) with court costs and attorney's fees.

I am not asking for any records protected by privilege (attorney-client communications, work product), other members' personnel/medical records, or executive-session minutes. If you intend to redact any records on those grounds, please provide a written explanation citing the specific legal basis as required by your state's statute.

Please confirm receipt within [7] days. The statutory clock begins on the date of receipt of this letter.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [if any — copy of prior verbal/email request that was denied or ignored]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Texas (§ 209.005(e)) and Colorado (§ 38-33.3-317) explicitly require certified mail; everywhere else, the certified receipt is what proves the date the response clock started — and the response window is the heart of the letter.",
      "Be specific about which records you want. \"All records\" is overbroad and gives the HOA a pretext to delay. \"Board meeting minutes from January–June 2025; executed contract with [vendor] from 2024; reserve study most recent + prior\" is enforceable. Itemize.",
      "Offer to pay the statutory copy fees up front. Failure to pay or tender fees (where required) stops the response clock cold in CO and TX. Citing the statutory rate (CA: actual + $10/hr; AZ: $0.15/page; NV: free electronic) demonstrates you know the rule and undercuts a stalling tactic.",
      "Don't request privileged records. Asking for \"all communications with HOA counsel\" gets the entire request bounced. Attorney-client communications and work product are excluded everywhere. Personnel and medical records of specific individuals are excluded everywhere. Executive-session minutes are excluded everywhere.",
      "In states that have abolished the \"proper purpose\" requirement (California, Florida, Colorado), do not volunteer a reason. The board cannot require one — but if you volunteer a false or commercial purpose, the admission survives. Outside those three states, a brief statement that your purpose is related to membership (not commercial) is appropriate.",
    ],
    legalContext: [
      "Every U.S. state with a planned-community or condominium statute grants members a statutory right to inspect HOA books and records. The right is procedural, not discretionary — boards cannot condition it on board approval, and California, Florida, and Colorado now bar boards from demanding a stated reason. Florida's HB 1203 (effective July 1, 2024) is the most consequential records-law change of the decade: it requires HOAs with 100+ parcels to maintain a public website and post official records online by January 1, 2025, with 7-year retention. HB 1203 also added criminal penalties — 2nd-degree misdemeanor for willful and repeated refusal with intent to harm, 1st-degree misdemeanor for intentional destruction of accounting records, 3rd-degree felony for willful refusal to produce records to avoid detecting a crime, and 3rd-degree felony for kickbacks.",
      "California's Davis-Stirling regime (Civ. Code §§ 5200–5240) divides records into three categories with different access regimes. \"Association records\" under § 5200(a) is the broadest category and includes financial documents required under §§ 5500–5580 and 5810, current-year interim financials (balance sheet, income/expense, budget-to-actual, general ledger), executed contracts not otherwise privileged, board approvals of vendor invoices, state/federal tax returns, reserve-account records, agendas and minutes of board meetings (excluding executive session), membership lists (name/address/email of non-opted-out members), check registers, governing documents, and inspector-of-election reports. \"Enhanced association records\" under § 5200(b) covers invoices, receipts, canceled checks, purchase orders, bank/credit-card statements, and reimbursement requests, subject to additional redaction. \"Association election materials\" under § 5200(c) covers returned ballots, signed voter envelopes, voter lists, proxies, candidate registration lists, and electronic ballot tally sheets, retained 1 year post-election.",
      "Response deadlines and fee structures vary substantially. California: 10 business days for current-FY records, 30 calendar days for prior two FY records under § 5210. Florida: 10 business days under § 720.303(5)(b). Texas: 10 business days with permitted 15-business-day extension under § 209.005(e). Virginia: 5 business days for manager-run, 10 for self-managed under § 55.1-1815. Colorado: 30 calendar days under § 38-33.3-317. Nevada: 21 days under NRS 116.31175 (free if electronic; otherwise $0.25 first 10 pages, $0.10 thereafter, with $25/hr review cap). Washington: 10 days' notice / 21-day cap under RCW 64.90.495. Arizona: 10 business days under § 33-1805 (max $0.15/page).",
      "Redaction is permitted but limited. The HOA may withhold information that would lead to identity theft or fraud; attorney-client privileged documents; litigation materials; confidential settlement agreements; individual-member disciplinary or payment-plan records; executive-session minutes; personnel records other than payroll; and interior architectural plans with security features. The HOA may NOT withhold compensation information for employees and vendors (set forth by job classification, not name) except where attorney-client privilege applies. California, Florida, and Colorado now require a written explanation of the legal basis for any redaction. Remedies for refusal range from $500 civil penalty in California (§ 5235) and $50/day plus $500 cap in Florida (§ 720.303(5)(c)) and Colorado (§ 38-33.3-317), to attorney's fees in every state surveyed, to — post-HB 1203 — criminal liability in Florida.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Civ. Code §§ 5200–5240. Three record categories (association records, enhanced association records, election materials). 10 business days for current-FY records; 30 calendar days for prior 2 FY (§ 5210). Fees: actual cost + $10/hr redaction after first free hour (§ 5205(g)). Remedies: $500 civil penalty per denied request + attorney's fees under § 5235.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 720.303(5). \"Official records\" — all records of the association. Cannot require statement of proper purpose. 10 business days. Reasonable cost of reproduction. Remedies: $50/day starting day 11, max $500 + attorney's fees. Post-HB 1203: 2nd-degree misdemeanor for willful/repeated denial with intent to harm; 3rd-degree felony for willful refusal to avoid crime detection.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code § 209.005. Certified-mail request to address on most recent management certificate required. 10 business days with permitted 15-day extension on written notice. Board-adopted fee schedule; max per 1 TAC § 70.3 (TX AG cost rules). Remedies: justice-court petition + court costs + attorney's fees (§ 209.005(n)).",
      },
      {
        state: "Virginia",
        note: "Va. Code § 55.1-1815. All books and records for \"proper purpose\" related to membership. 5 business days (manager-run); 10 business days (self-managed). Actual cost of materials + labor. Remedies: mandamus / injunctive relief under § 55.1-1828 + attorney's fees.",
      },
      {
        state: "Colorado",
        note: "Colo. Rev. Stat. § 38-33.3-317. All records; cannot condition production on a stated proper purpose. 30 calendar days after written certified-mail request + fee payment. Reasonable cost, board-set. Remedies: $50/day starting day 11, max $500 OR actual damages, whichever greater.",
      },
      {
        state: "Nevada",
        note: "NRS 116.31175. Books, records, contracts, reserve study, financials. 21 days for copies. Free electronic copies; paper $0.25/page first 10 then $0.10; review time capped at $25/hr. Enforcement by Real Estate Division Ombudsman + civil action.",
      },
      {
        state: "Washington",
        note: "RCW 64.90.495 (WUCIOA — for associations created after 7/1/2018; older HOAs under RCW 64.38.045). All records; redaction permitted for privilege/privacy. 10 days' notice; production no later than 21 days absent court order. Reasonable fee for copies + supervising inspection. Remedies: declaratory/injunctive relief + attorney's fees.",
      },
      {
        state: "Arizona",
        note: "A.R.S. § 33-1805 (planned communities). Financial and other records; only executive-session minutes withheld. 10 business days. No charge to review; copies capped at $0.15/page. Remedies: civil action + attorney's fees under § 33-1818.",
      },
    ],
    ifThisDoesntWork:
      "If the HOA misses the statutory deadline or denies access without a written redaction explanation, your remedies stack. In California, file in small claims (jurisdiction available under § 5235) for the $500 per-request civil penalty plus attorney's fees — small claims is set up for self-represented parties and the fee-shift makes it economical. In Florida, sue under § 720.303(5)(c) for $50/day plus attorney's fees, AND file a complaint with DBPR's Division of Florida Condominiums, Timeshares, and Mobile Homes — post-HB 1203 their authority is real and willful/repeated refusal is now criminal. In Texas, file in justice court under § 209.005(n). In Virginia, file with the CIC Ombudsman ($25 filing fee). In Colorado, sue under § 38-33.3-317. For all states, document delivery (the certified-mail receipt), the date of response (or its absence), and any redactions the HOA actually made — these are the evidentiary backbone of the enforcement action.",
    relatedSlugs: [
      "hoa-fine-dispute",
      "hoa-selective-enforcement",
      "hoa-special-assessment-dispute",
      "hoa-hardship-request",
      "deposit-itemization-request",
      "medical-records-request",
    ],
    faqs: [
      {
        question: "How long does my HOA have to respond?",
        answer:
          "Depends on state. California: 10 business days for current-year records, 30 calendar days for older (Civ. Code § 5210). Florida: 10 business days (Fla. Stat. § 720.303(5)(b)). Texas: 10 business days with a permitted 15-day extension (Prop. Code § 209.005(e)). Virginia: 5 business days for manager-run or 10 for self-managed (§ 55.1-1815). Colorado: 30 calendar days (§ 38-33.3-317).",
      },
      {
        question: "Can my HOA charge me for copies?",
        answer:
          "Yes, but capped. California: actual cost of copying + $10/hr redaction time after first free hour (§ 5205(g)). Arizona: max $0.15/page (§ 33-1805). Nevada: free if electronic; else $0.25 first 10 pages, then $0.10, with $25/hr review cap (NRS 116.31175). Texas: board must record a fee policy; costs may not exceed 1 TAC § 70.3 limits (§ 209.005).",
      },
      {
        question: "What if my HOA ignores or denies my request?",
        answer:
          "California: up to $500 civil penalty per denied request + attorney's fees (§ 5235). Florida: $50/day starting day 11, capped at $500 + attorney's fees (§ 720.303(5)(c)); post-HB 1203, willful/repeated refusal with intent to harm is a 2nd-degree misdemeanor. Colorado: $50/day or actual damages, max $500 (§ 38-33.3-317). Texas: justice-court action + attorney's fees (§ 209.005(n)).",
      },
      {
        question: "Do I have to give a reason for my request?",
        answer:
          "No in California, Florida, and Colorado — boards are statutorily barred from requiring a stated purpose. Yes in Virginia, Delaware, Iowa, and South Carolina — the request must be \"for a proper purpose related to membership\" and may not be for commercial solicitation.",
      },
      {
        question: "Can I get attorney-client communications between the HOA and its lawyer?",
        answer:
          "No. Every state surveyed excludes attorney-client privileged communications and work product. What you CAN get: executed contracts with the law firm and invoices showing fees paid (California § 5215 expressly bars withholding compensation information, even for legal services).",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hoa-selective-enforcement",
    category: "hoa",
    title: "HOA Selective Enforcement / Waiver-by-Acquiescence Letter (Free Template)",
    metaDescription:
      "HOA enforcing against you but ignoring identical violations by neighbors? Free letter invoking waiver-by-acquiescence + Fair Housing Act if protected-class basis.",
    lede:
      "HOAs must enforce CC&Rs uniformly. When they don't — when the same paint color, the same RV, the same satellite dish gets cited at your address but not at your neighbors' — you have two distinct defenses: waiver by acquiescence (equitable, no protected class needed) and disparate enforcement under the federal Fair Housing Act.",
    body: `[Your Full Legal Name]
[Property Address — Lot/Unit]
[City, State ZIP]
[Phone] [Email]

[Date]

[HOA Legal Name]
[c/o Property Manager / Management Company if applicable]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [board / manager email])

Re: Notice of Selective Enforcement and Demand to Vacate Citation — [Notice Number / Date]

To the Board of Directors:

I am the owner of [Property Address — Lot/Unit]. I am writing to formally object to the citation referenced above and to demand that it be vacated on the grounds of selective enforcement and waiver by acquiescence.

Citation in dispute:
  • Date of alleged violation: [Date]
  • Date of notice received: [Date]
  • Rule cited: [Verbatim quote of the CC&R provision or rule the HOA invoked]
  • Fine amount: $[Amount]

The HOA has not enforced this same rule against the following properties, despite the same or worse violations being plainly visible:

  • [Address 1 / Lot Number 1] — [Brief description of unenforced violation; dates the violation was visible; attached photos with EXIF metadata or date-stamped]
  • [Address 2 / Lot Number 2] — [Same]
  • [Address 3 / Lot Number 3] — [Same]
  • [Address 4 / Lot Number 4] — [Same]
  • [Continue as needed — courts generally require a pattern, not 1-2 examples]

In several of these instances, the HOA has been on actual notice of the unenforced violations through [board meeting minutes from (date); emails to the board on (date); prior member complaints on (date)] — please see attached.

Legal authority:

[State law — waiver by acquiescence / uniform enforcement.] Every state surveyed recognizes that an HOA may lose the right to enforce a covenant where the board has knowingly permitted similar or worse violations over time. (California: Civ. Code § 5975 + Cohen v. Kite Hill Cmty. Ass'n, 142 Cal. App. 3d 642 (1983); Liebler v. Point Loma Tennis Club, 40 Cal. App. 4th 1600 (1995); Laguna Royale Owners Ass'n v. Darger, 119 Cal. App. 3d 670 (1981). Texas: Stewart v. Welsh, 142 Tex. 314 (1944). Virginia: Sonoma Dev., Inc. v. Miller, 258 Va. 163 (1999). Florida: Chattel Shipping & Inv. v. Brickell Place Condo. Ass'n, 481 So. 2d 29 (Fla. 3d DCA 1985). New Jersey: Highland Lakes Country Club & Cmty. Ass'n v. Franzino, 186 N.J. 99 (2006). Illinois: Spanish Court Two Condo. Ass'n v. Carlson, 2014 IL 115342.)

The common test across states: enforcement must be "in good faith, not arbitrary or capricious, and by procedures which are fair and uniformly applied." Where the pattern of unenforced violations is "so extensive and material" that a reasonable person would conclude the covenant has been abandoned, the HOA has waived the right to enforce.

[OPTIONAL — only if a protected-class basis exists.] The Federal Fair Housing Act, 42 U.S.C. § 3604(b), makes it unlawful "to discriminate against any person in the terms, conditions, or privileges of sale or rental of a dwelling, or in the provision of services or facilities in connection therewith, because of race, color, religion, sex, familial status, or national origin." § 3604(f) extends the protection to disability. HOA rule enforcement falls squarely within "terms, conditions, or privileges" and "services or facilities" of dwelling occupancy. The pattern of enforcement I describe above tracks [identify protected characteristic and explain]. I am reserving the right to file a complaint with HUD within 1 year (42 U.S.C. § 3610) and to bring an FHA action within 2 years (42 U.S.C. § 3613). Remedies include actual damages, punitive damages, injunctive relief, and reasonable attorney's fees (§ 3613(c)).

Demand:

Within [30] days of the date of this letter, please:

  1. Vacate the citation against me and remove any fine from my account ledger;
  2. Adopt and document a uniform-enforcement protocol going forward, including either (a) citing the comparator properties listed above for the same violation, or (b) withdrawing the rule from active enforcement;
  3. Confirm in writing.

I am requesting access to the following records under [Cal. Civ. Code § 5200; Fla. § 720.303(5); VA § 55.1-1815; TX § 209.005; CO § 38-33.3-317]: (a) the HOA's enforcement log / violation register; (b) board meeting minutes from [date range] reflecting any prior enforcement of this rule or any discussion of the comparator properties listed above; (c) any written enforcement policy or fining schedule the board has adopted.

I am also requesting a hearing under [Cal. Civ. Code § 5855; FL § 720.305(2); TX § 209.007; AZ § 33-1803] before any fine is assessed against me.

If the HOA does not vacate the citation, I reserve the right to pursue:
  • A civil action under [state HOA statute] for declaratory and injunctive relief, with attorney's fees where the statute or governing documents provide;
  • [If applicable] A HUD Fair Housing complaint at hud.gov/reporthousingdiscrimination within 1 year of the discriminatory act;
  • [If applicable] A state fair-housing complaint with [state Civil Rights Division];
  • A counterclaim if the HOA initiates collection or enforcement proceedings against me.

Please confirm receipt within [7] days.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [dated, EXIF-metadata photos of comparator properties; map of community showing comparator addresses; board meeting minutes or emails reflecting the HOA's knowledge of unenforced violations; copy of the citation issued to me]`,
    howToUse: [
      "Document comparator violations with dated, geo-tagged photos. EXIF metadata is the gold standard — photos that include capture date and approximate GPS coordinates. Vague claims (\"everyone on my street\") fail; specific addresses with timestamped photos succeed.",
      "Build a pattern, not just 1-2 examples. Courts typically require a substantial pattern over time before waiver-by-acquiescence will defeat enforcement. \"Three or four\" unenforced prior violations is generally too thin; 5+ across the community over a meaningful period is the practical floor.",
      "Send by certified mail with return receipt requested. The selective-enforcement defense becomes strongest when the HOA cannot dispute receipt of the documented comparator list — and your written record of the comparator pattern is what makes any later civil suit or HUD complaint actionable.",
      "Distinguish waiver-by-acquiescence from disparate-treatment FHA. Waiver-by-acquiescence is a state-law equitable defense that doesn't require a protected-class basis. Fair Housing Act disparate-treatment is a federal substantive claim that requires a protected-class nexus but opens HUD complaint paths + federal court + attorney's fees + damages. Don't lead with FHA if no protected class is implicated — overcharging weakens the waiver defense.",
      "Do not fabricate comparators. A single fabricated example destroys credibility on every other one and can support a defamation or abuse-of-process counterclaim. Stick to documented, verifiable comparators.",
    ],
    legalContext: [
      "HOAs derive enforcement authority from contract law (the recorded CC&Rs run with the land) and state statute. That authority is conditioned on uniform, even-handed, good-faith enforcement. When an HOA enforces selectively, homeowners have two distinct defenses. The first is waiver by acquiescence — a procedural and equitable defense. If the HOA has knowingly permitted similar or worse violations by others over time without enforcement, courts hold the HOA has waived, abandoned, or acquiesced in the covenant and can no longer enforce it against this homeowner. The defense sounds in waiver, estoppel, and laches. The burden is on the homeowner; \"three or four\" unenforced prior violations is generally too thin — the unenforced pattern must be substantial enough that a reasonable person would conclude the particular covenant or rule has been abandoned.",
      "The second defense is discriminatory enforcement under the federal Fair Housing Act — a substantive defense plus an affirmative federal claim. 42 U.S.C. § 3604(b) makes it unlawful to discriminate against any person in the terms, conditions, or privileges of sale or rental of a dwelling, or in the provision of services or facilities in connection therewith, because of race, color, religion, sex, familial status, or national origin. § 3604(f) adds disability. HOA rule enforcement falls within \"terms, conditions, or privileges\" and \"services or facilities.\" Theories available: disparate treatment (HOA cited a Black homeowner for a parking violation but ignored identical violations by white neighbors); disparate impact (facially neutral rule that disproportionately burdens a protected class, such as \"no children playing in common areas\" burdening familial status); and failure to accommodate (refusing reasonable accommodation for a disability, such as a service animal in a \"no pets\" community).",
      "The HUD complaint mechanics are consumer-friendly: filing is free, no lawyer required, within one year of the discriminatory act or its termination (42 U.S.C. § 3610(a)(1)(A)(i)). HUD has 100 days to investigate and determine reasonable cause. The complaint URL is hud.gov/reporthousingdiscrimination. Separately, a federal court suit is available within two years under 42 U.S.C. § 3613(a)(1)(A). Prevailing plaintiff may recover damages, injunctive relief, and attorney's fees (§ 3613(c)). The two paths run in parallel and reinforce each other.",
      "The state-law cases anchoring waiver by acquiescence are substantial. California's Cohen v. Kite Hill Cmty. Ass'n (1983) and Liebler v. Point Loma Tennis Club (1995) establish that enforcement must be in good faith and not arbitrary or capricious. Texas's Stewart v. Welsh (1944) is the leading state-supreme-court case recognizing waiver by acquiescence. Virginia's Sonoma Dev., Inc. v. Miller (1999) explicitly recognized that covenant enforcement may be lost by waiver, abandonment, or acquiescence. Florida's Chattel Shipping & Inv. v. Brickell Place Condo. Ass'n (1985) and Plaza Del Prado Condo. Ass'n v. Richman (1976) established selective enforcement as an established affirmative defense in Florida HOA/condo law. Illinois's Spanish Court Two Condo. Ass'n v. Carlson (2014) and Boucher v. 111 East Chestnut Condo. Ass'n (2018) recognized selective enforcement as a defense and clarified that the business-judgment rule does not shield bad-faith enforcement.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cohen v. Kite Hill Cmty. Ass'n, 142 Cal. App. 3d 642 (1983); Liebler v. Point Loma Tennis Club, 40 Cal. App. 4th 1600 (1995); Laguna Royale Owners Ass'n v. Darger, 119 Cal. App. 3d 670 (1981). Cal. Civ. Code § 5975: CC&Rs enforceable as equitable servitudes \"unless unreasonable\"; prevailing-party attorney's fees mandatory. Selective enforcement standard: \"in good faith, not arbitrary or capricious, and by procedures which are fair and uniformly applied.\"",
      },
      {
        state: "Florida",
        note: "Chattel Shipping & Inv. v. Brickell Place Condo. Ass'n, 481 So. 2d 29 (Fla. 3d DCA 1985); Plaza Del Prado Condo. Ass'n v. Richman, 345 So. 2d 851. Fla. Stat. § 720.305 (amended by HB 1203, eff. 2024-2025) tightened enforcement uniformity and retaliation protections. Mandatory pre-suit mediation under § 720.311.",
      },
      {
        state: "Texas",
        note: "Stewart v. Welsh, 142 Tex. 314, 178 S.W.2d 506 (1944); Tien Tao Ass'n v. Kingsbridge Park Cmty. Ass'n, 953 S.W.2d 525 (Tex. App. 1997). Tex. Prop. Code Ch. 209 (Residential Property Owners Protection Act); § 209.006 requires written notice; § 209.007 requires hearing on request. § 5.006 attorney's fees for prevailing party in restrictive covenant suit.",
      },
      {
        state: "New Jersey",
        note: "Highland Lakes Country Club & Cmty. Ass'n v. Franzino, 186 N.J. 99 (2006). Planned Real Estate Development Full Disclosure Act (PREDFDA) N.J.S.A. 45:22A-21 et seq.; condo associations under N.J.S.A. 46:8B-1. Mandatory ADR through the association. NJ Law Against Discrimination available for protected-class claims.",
      },
      {
        state: "Illinois",
        note: "Spanish Court Two Condo. Ass'n v. Carlson, 2014 IL 115342; Boucher v. 111 East Chestnut Condo. Ass'n, 2018 IL App (1st) 162233. Common Interest Community Association Act, 765 ILCS 160/1; Condominium Property Act, 765 ILCS 605. Illinois Human Rights Act parallel claim for protected-class enforcement.",
      },
      {
        state: "Arizona",
        note: "A.R.S. § 33-1803 (planned communities); § 33-1242 (condos). Notice and mandatory hearing before fines. ADR through AZ Dept. of Real Estate Office of Administrative Hearings (HOA petitions).",
      },
      {
        state: "Virginia",
        note: "Sonoma Dev., Inc. v. Miller, 258 Va. 163 (1999) — Virginia Supreme Court: covenant enforcement may be lost by \"waiver, abandonment or acquiescence.\" Property Owners' Association Act, Va. Code § 55.1-1819 (rules & enforcement); § 55.1-1828 (charges/hearings). Statutory attorney's fees to prevailing party.",
      },
      {
        state: "Nevada",
        note: "NRS Ch. 116 (Common-Interest Ownership / Uniform Act); NRS 116.31031 fines & procedural requirements; NAC 116 uniform-enforcement rules. Mandatory ADR through NRS 38.310 before suit. Attorney's fees available.",
      },
    ],
    ifThisDoesntWork:
      "If the HOA refuses to vacate the citation, the parallel tracks open up quickly. State-law track: file a civil action for declaratory and injunctive relief under your state's HOA statute (CA § 5975, FL § 720.305, TX Ch. 209, VA § 55.1-1819). Most state statutes provide attorney's fees to the prevailing party in restrictive-covenant litigation, which is what makes contingency arrangements with HOA-defense attorneys economical. Federal Fair Housing track (if protected class applies): file a HUD complaint at hud.gov/reporthousingdiscrimination within 1 year — free, no lawyer required, HUD investigates and pursues administrative remedies. Parallel federal court suit available within 2 years under 42 U.S.C. § 3613, with damages (compensatory and punitive), injunctive relief, and attorney's fees under § 3613(c). State fair-housing complaints with the state Civil Rights Division add another track. For specific cases involving large fines or accumulated liens, also consider seeking a preliminary injunction to halt collection while the dispute proceeds.",
    relatedSlugs: [
      "hoa-fine-dispute",
      "hoa-records-inspection",
      "hoa-special-assessment-dispute",
      "hoa-hardship-request",
      "neighbor-fence-dispute",
      "illegal-entry-cease-and-desist",
    ],
    faqs: [
      {
        question: "How many unenforced violations do I need to prove waiver by acquiescence?",
        answer:
          "There is no fixed number. Courts look at whether the pattern is \"so extensive and material\" that an average person would conclude the covenant was abandoned. \"Three or four\" prior violations is generally insufficient; you want a pattern across the community over time.",
      },
      {
        question: "Does the HOA have to enforce every violation to avoid losing the right to enforce against me?",
        answer:
          "No. California and most states give the board discretion under the business-judgment rule, including weighing severity, litigation cost, and likely outcome. Lack of total enforcement isn't waiver — inconsistent or targeted enforcement is.",
      },
      {
        question: "Can I file a HUD complaint and a state lawsuit at the same time?",
        answer:
          "You can file both, but they overlap. HUD complaints are free and have a 1-year deadline (42 U.S.C. § 3610). Federal court suits have a 2-year deadline (42 U.S.C. § 3613). Filing a HUD complaint does not bar a later civil action, but if HUD issues a charge an administrative process follows.",
      },
      {
        question: "What if my CC&Rs say the HOA's discretion is \"absolute\"?",
        answer:
          "Even broad discretion clauses are limited by the implied covenant of good faith and the requirement of reasonable, non-arbitrary enforcement. Cohen v. Kite Hill (CA 1983) and Laguna Royale v. Darger (CA 1981) both rejected unfettered HOA discretion.",
      },
      {
        question: "Will I get my attorney's fees back if I win?",
        answer:
          "Often yes, but only if the state's HOA statute or your CC&Rs include a fee-shifting clause. California (Civ. § 5975(c)), Florida (§ 720.305), Virginia (§ 55.1-1828), and Texas (§ 5.006) all award prevailing-party attorney's fees in restrictive-covenant enforcement actions. FHA also provides attorney's fees under 42 U.S.C. § 3613(c)(2).",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hoa-special-assessment-dispute",
    category: "hoa",
    title: "HOA Special Assessment Dispute Letter (Free Template + State Caps)",
    metaDescription:
      "HOA hit you with a special assessment? Free letter citing your state's procedural requirements (CA Civ. § 5605 5% cap; FL § 720.303(2)(c) 14-day notice).",
    lede:
      "HOA boards can impose special assessments only within the authority granted by CC&Rs plus state statute. Most states cap board-only assessments, require member vote above the cap, and demand specific notice and meeting procedures. Procedural defects make the assessment voidable.",
    body: `[Your Full Legal Name]
[Property Address — Lot/Unit]
[City, State ZIP]
[Phone] [Email]

[Date]

[HOA Legal Name]
[c/o Property Manager / Management Company if applicable]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [board / manager email])

Re: Formal Dispute of Special Assessment — Notice Dated [Date] — Demand to Rescind / Recalculate

To the Board of Directors:

I am the owner of [Property Address — Lot/Unit]. I am writing to formally dispute the special assessment described below and to demand that it be rescinded or recalculated.

Assessment details:
  • Date special assessment was imposed: [Date]
  • Amount per lot: $[Amount]
  • Total association assessment: $[Total]
  • Payment due date: [Date]
  • Payment schedule (if any): [e.g., 12 monthly installments of $X]
  • Stated purpose: [Quote from the notice]

Alleged procedural defect (pick all that apply):

  [No notice / late notice / insufficient notice content]
  Under [Cal. Civ. Code § 5615 (30–60 days' individual notice before due) / Fla. Stat. § 720.303(2)(c) (14 days' written notice with nature/purpose) / NRS 116.3115 (21 days' notice before meeting) / Va. Code § 55.1-1815 (14 days' notice for annual/regular meetings)], the notice I received [did not meet the timing requirement / did not describe purpose and estimated cost / did not indicate the meeting agenda].

  [Required member vote was not held]
  The amount of $[Amount] exceeds the board's authority to impose without a member vote under [Cal. Civ. Code § 5605(b) — board-only special assessments capped at 5% of prior FY budgeted gross expenses, aggregate; member vote required above]. No member vote was held, or the vote did not achieve the threshold required by [CC&Rs / state statute].

  [Amount exceeds the statutory or governing-document cap]
  The assessment exceeds [the 5% aggregate cap in CA / the cap in our CC&Rs of X%], and the board did not follow the required procedure for exceeding the cap.

  [Emergency exception misused]
  The board purports to invoke an emergency exception under [Cal. Civ. Code § 5610]. § 5610 limits emergency assessments to three categories: (1) extraordinary expense required by court order; (2) extraordinary expense necessary to repair or maintain the development where a threat to personal health or safety or hazardous condition is discovered; (3) extraordinary expense for repairs or maintenance that could not have been reasonably foreseen in the annual budget — and only with a written board resolution documenting necessity and unforeseeability, distributed with the notice. The expense for [describe] [does not qualify because (a) it was foreseeable in the routine deferred-maintenance cycle / (b) no written board resolution was adopted / (c) no health/safety threat documented / (d) no court order].

  [Meeting was not properly noticed / closed-session adoption]
  The meeting at which the assessment was adopted was [not properly noticed under (cite) / held in executive session in violation of open-meeting rules / lacked a quorum / did not include this item on the published agenda].

  [Funds will not be used for a purpose permitted by the CC&Rs]
  The stated purpose [describe] is not a purpose for which the association is authorized to assess under [cite CC&R section + state statute].

Demand:

Within [30] days of the date of this letter, please:

  1. Rescind the special assessment OR recalculate it to comply with [cite the controlling statute];
  2. If a member vote is required, hold a properly-noticed meeting and vote, with at least [statutory notice period] of advance notice including the purpose and estimated cost;
  3. Provide me with copies of: (a) the board resolution adopting the assessment; (b) the minutes of the meeting at which the assessment was adopted; (c) the notice given to members; (d) if applicable, the written § 5610 (or equivalent) emergency-assessment resolution; (e) the budget and accounting reflecting how the funds will be used. These records are requested under [Cal. Civ. Code § 5200; FL § 720.303(5); etc.] with the statutory response deadline applicable to your state.

[OPTIONAL — Florida condos with post-Surfside structural assessments] I recognize that under Fla. Stat. § 553.899 (milestone inspections) and the Structural Integrity Reserve Studies requirement, certain repair-related assessments may be statutorily required and difficult to defeat on the merits. My objection is to the procedure — specifically the 14-day notice with purpose and estimated cost under § 718.112(2)(c) — not to the underlying repair obligation if it is statutorily mandated.

I am paying the assessment under protest pending resolution to avoid late fees and lien escalation. Payment under protest does not waive my objections or my right to recover the full amount if the assessment is invalidated.

If you do not rescind or recalculate within [30] days, I reserve the right to:
  • File a civil action to invalidate the assessment and recover amounts paid;
  • Suit for declaratory and injunctive relief;
  • Action for breach of fiduciary duty against board members who voted for an ultra vires assessment;
  • Attorney's fees where the state law or governing documents provide (CA § 5975(c); FL § 720.305; VA § 55.1-1828; TX § 5.006);
  • In jurisdictions with regulators, complaint to [FL DBPR / VA CIC Ombudsman / NV NRED / AZ ADRE].

Please confirm receipt within [7] days.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of assessment notice; CC&R section the assessment purports to be authorized under; any board minutes you have; any prior correspondence]`,
    howToUse: [
      "Pay the assessment under protest while disputing it. Refusing to pay creates a lien risk and late-fee escalation that doesn't help your case. \"Paid under protest\" preserves your right to recover the full amount if the assessment is invalidated — most state courts honor this language.",
      "Send by certified mail with return receipt requested. The certified-mail receipt is the dated evidence of when the dispute clock started, which matters for both the response window and any later civil suit.",
      "Get records FAST. The records-inspection demand in this letter (or as a separate § 5200 / § 720.303(5) letter) gives you the board resolution, meeting minutes, and notice copies that determine whether the procedural defect is real. Don't wait for the HOA's response — file the records request alongside the dispute.",
      "Distinguish between Florida post-Surfside structural assessments and routine deferred maintenance. Under Fla. Stat. § 553.899 (milestone inspections) and the Structural Integrity Reserve Studies requirement, some repair-related assessments are statutorily mandatory and very hard to defeat on the merits. The letter should attack PROCEDURE (14-day notice with purpose and estimated cost under § 718.112(2)(c)) — not the underlying repair if it's statutorily required.",
      "Don't fabricate facts. Misrepresenting attendance, vote tallies, or meeting dates undermines credibility and can support a fee award against you. One real defendant won attorney's fees of $201,750 over a $2,400 disputed special assessment in part because the homeowner's claims were exaggerated.",
    ],
    legalContext: [
      "HOA and condo boards have only the assessment authority their state statute and CC&Rs grant them. Across the U.S., the general framework is consistent: a cap on board-only assessments (e.g., California Civ. Code § 5605: 5% of prior-year budgeted gross expenses for special assessments, 20% for regular; Arizona: 20% increase cap on regular assessments); a member-vote requirement above the cap (majority or supermajority specified in the declaration); notice and meeting requirements (14 days in Florida HOAs and condos under § 720.303(2)(c) and § 718.112(2)(c); 21 days in Nevada for capital-improvement assessments under NRS 116.3115; 14 days in Virginia for annual/regular meetings under § 55.1-1815); a narrow emergency exception (boards can sometimes bypass the cap or vote when there is a court order, a health/safety threat, or an unforeseen extraordinary expense, but only with a written board resolution explaining necessity, as required by California Civ. Code § 5610); and accounting/purpose disclosure (owners are entitled to know what the funds will pay for).",
      "California's Davis-Stirling regime is illustrative and load-bearing because of California's population. Civ. Code § 5605(b) caps board-only special assessments at 5% of prior-fiscal-year budgeted gross expenses, aggregate per FY — multiple smaller assessments stack. § 5610 limits emergency assessments to three categories with a mandatory written resolution distributed with the notice. § 5615 requires individual notice 30–60 days before the increased assessment becomes due. § 5610 was amended by Stats. 2024 Ch. 288 § 3, effective January 1, 2025, tightening the emergency-assessment documentation rules. California HOA-defense firms report widespread misuse of the emergency loophole — boards labeling routine deferred maintenance as emergencies to bypass the vote — making the § 5610 attack one of the most fruitful angles for CA letters.",
      "Florida deserves special attention post-Surfside. After the June 2021 Champlain Towers South collapse in Surfside killed 98 people, Florida enacted SB 4-D (2022) creating mandatory milestone inspections under Fla. Stat. § 553.899: all condo/co-op buildings 3+ stories must have a structural milestone inspection at 30 years (25 in some coastal areas) and every 10 years thereafter, with initial inspections for buildings 30+ years old as of July 1, 2022 due December 31, 2024. Structural Integrity Reserve Studies (SIRS) are required every 10 years for specified items (roof, load-bearing walls, primary structural systems, fireproofing, plumbing, electrical, waterproofing/exterior paint, windows/exterior doors, and any deferred-maintenance item over $25,000), and reserves for SIRS items cannot be waived even by majority owner vote. Many Florida condos in 2024–2026 are imposing very large structural-repair special assessments — often six figures per unit. The letter should distinguish between statutorily required assessments (milestone-mandated repairs, SIRS underfunding catch-up) and procedurally defective assessments. Procedural defects can void even mandatory work; failure to give 14-day notice with purpose and estimated cost (§ 718.112(2)(c)) is the most common attack vector.",
      "The other state-by-state caps and procedures vary. Texas Prop. Code Ch. 209 defers heavily to the dedicatory instruments (CC&Rs) for amount, with Open-Meetings rules in § 209.0051 requiring 72-hour posted notice for board meetings. Virginia Code § 55.1-1825 grants the board authority to levy additional assessments if it finds doing so is in the association's best interests; § 55.1-1815 requires 14 days' notice for annual/regular meetings, 7 for other meetings. Colorado's CCIOA § 38-33.3-303(4) provides a ratification framework: the board adopts the assessment, and it's ratified absent a majority owner veto at a meeting set in a reasonable time. Nevada NRS 116.3115 distinguishes reserve-based assessments (which the board can impose without owner approval if grounded in a reserve study under NRS 116.31152) from capital-improvement assessments (which require 21 days' notice before the meeting). Washington WUCIOA RCW 64.90 mirrors the ratification approach with a 14-60 day window after the summary is mailed.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Civ. Code §§ 5605, 5610, 5615. Board-only special assessment cap: 5% of prior FY budgeted gross expenses (aggregate). Regular assessment cap: 20%. Member-vote majority required above. Individual notice 30–60 days before due (§ 5615). Emergency exception (§ 5610): court order; health/safety threat; unforeseen extraordinary expense with written board resolution. § 5610 amended eff. 1/1/2025 tightening documentation.",
      },
      {
        state: "Florida (HOA)",
        note: "Fla. Stat. § 720.303(2)(c). No statutory % cap; bounded by CC&Rs. 14 days' written notice before meeting; notice must state nature of assessment and be posted conspicuously. Assessment unenforceable if procedure violated.",
      },
      {
        state: "Florida (Condo)",
        note: "Fla. Stat. § 718.112(2)(c). 14 days' written notice; notice must describe purpose and estimated cost. SIRS reserves for structural items cannot be waived. Post-Surfside § 553.899 milestone inspections may require large mandatory assessments.",
      },
      {
        state: "Texas",
        note: "Prop. Code Ch. 209. Special-assessment procedure governed by dedicatory instruments + § 209.0051 Open-Meetings (72-hr posted notice for board meetings). § 209.008 attorney's fees provision in enforcement context.",
      },
      {
        state: "Virginia",
        note: "Va. Code § 55.1-1815 (notice); § 55.1-1825 (special assessment authority). Board may levy \"additional assessment\" if in best interests. 14 days' notice for annual/regular meetings; 7 for other. Suit to invalidate; CIC Ombudsman complaint.",
      },
      {
        state: "Colorado",
        note: "CCIOA § 38-33.3-303(4). Board adopts; ratified absent majority owner veto at meeting set in reasonable time. Amended budget delivered to owners. Veto right; suit to invalidate.",
      },
      {
        state: "Nevada",
        note: "NRS 116.3115. Board can impose reserve-based assessments without owner approval if grounded in NRS 116.31152 reserve study. Capital-improvement assessments require 21 calendar days' notice before meeting. NRED complaint + civil action.",
      },
      {
        state: "Washington",
        note: "RCW 64.38.025 (pre-2018 HOAs); Ch. 64.90 WUCIOA (post-2018). Board adopts; ratified absent majority owner rejection at ratification meeting set 14–60 days after summary mailed.",
      },
    ],
    ifThisDoesntWork:
      "If the HOA refuses to rescind or recalculate the assessment, your remedies stack. File a civil action in the appropriate state court for declaratory and injunctive relief invalidating the assessment, recovery of amounts paid under protest, and (where the statute or governing documents provide) attorney's fees. In California, sue under Civ. Code § 5975 — prevailing-party attorney's fees are mandatory. In Florida, file in circuit court after pre-suit mediation under § 720.311. In Virginia, file a complaint with the CIC Ombudsman at DPOR ($25 filing fee), or in circuit court. In Nevada, NRS 38 ADR is a jurisdictional prerequisite to suit. For board members who voted to impose an ultra vires assessment, a breach-of-fiduciary-duty action may also be available — particularly in California where Lamden v. La Jolla Shores Clubdominium Homeowners Ass'n (1999) and progeny apply the business-judgment rule, but the rule does not protect bad-faith or knowingly unauthorized acts. Pay under protest while the dispute proceeds to avoid late fees and lien escalation.",
    relatedSlugs: [
      "hoa-fine-dispute",
      "hoa-records-inspection",
      "hoa-selective-enforcement",
      "hoa-hardship-request",
      "deposit-itemization-request",
      "repair-request-formal",
    ],
    faqs: [
      {
        question: "Can my HOA impose a special assessment without my vote?",
        answer:
          "Yes, up to a statutory or governing-document cap. In California, the board can impose special assessments aggregating up to 5% of the prior fiscal year's budgeted gross expenses without a member vote (Civ. Code § 5605). Above the cap, a majority of a quorum must approve. Other states (Florida, Texas, Virginia) defer more heavily to the CC&Rs.",
      },
      {
        question: "What is an emergency assessment and can the board use it to skip the vote?",
        answer:
          "In California, only three things qualify under Civ. Code § 5610: (1) a court-ordered expense; (2) a health/safety threat; (3) a genuinely unforeseen extraordinary expense documented in a written board resolution distributed with the notice. Routine deferred maintenance is not an emergency.",
      },
      {
        question: "How much advance notice must my HOA give before a special-assessment meeting?",
        answer:
          "Varies by state. Florida HOAs and condos: 14 days' written notice stating the nature/purpose (§ 720.303(2)(c) and § 718.112(2)(c)). Nevada: 21 days for capital-improvement assessments (NRS 116.3115). Virginia: 14 days for annual/regular meetings (§ 55.1-1815). California: individual notice 30–60 days before the increase becomes due (§ 5615).",
      },
      {
        question: "My Florida condo just hit me with a $40,000 milestone-repair assessment. Can I fight it?",
        answer:
          "If the work is genuinely required by Fla. Stat. § 553.899 milestone inspection findings, the underlying repair is mandatory by statute. But you can still challenge the procedure — was the 14-day notice given, did it state purpose and estimated cost, was the assessment levied at an open noticed board meeting? Procedural defects can void the assessment even if the repair must eventually happen.",
      },
      {
        question: "What happens if I just refuse to pay?",
        answer:
          "The HOA can record a lien, charge interest and late fees, and in most states ultimately foreclose. Even disputed assessments accrue. Best practice: pay under protest, then sue or file an IDR/ADR demand to recover. Most state courts honor \"paid under protest\" language to preserve recovery rights.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "hoa-hardship-request",
    category: "hoa",
    title: "HOA Hardship Payment Plan Request Letter (Free Template + State Rules)",
    metaDescription:
      "Can't pay HOA assessments due to hardship? Free letter requesting a payment plan + fee waiver, citing your state's pre-foreclosure protections (CO HB22-1137).",
    lede:
      "Unpaid HOA assessments can spiral fast — late fees, collection costs, attorney's fees, lien, and ultimately foreclosure. Several states now require the HOA to offer a payment plan before escalating. This letter invokes those statutory hooks and documents the hardship.",
    body: `[Your Full Legal Name]
[Property Address — Lot/Unit]
[City, State ZIP]
[Phone] [Email]

[Date]

[HOA Legal Name]
[c/o Property Manager / Management Company if applicable]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Required in CA / mirrors the statutory delivery the HOA owes you. Email copy also sent.)

Re: Hardship Request and Demand for Payment Plan — Account [Account/Lot Number]

To the Board of Directors:

I am the owner of [Property Address — Lot/Unit]. I am writing to acknowledge the past-due balance on my account and to request a written payment plan consistent with [state statute below], along with reasonable accommodations described in this letter.

Current balance (please confirm or correct):
  • Assessments past due: $[Amount]
  • Late fees: $[Amount]
  • Collection costs: $[Amount]
  • Interest: $[Amount]
  • Attorney's fees: $[Amount]
  • Total: $[Amount]

If the above is incorrect or incomplete, please provide an itemized statement under [Cal. Civ. Code § 5660 (required as part of the 30-day pre-lien notice); Fla. Stat. § 720.3085(8); equivalent in your state].

Hardship narrative:
[Be specific, dated, and corroborable. Attach documentation if you're comfortable.]
  • [Job loss — employer name, separation date]
  • [Medical event — admission and treatment dates]
  • [Family emergency / death — date]
  • [Disability or extended illness — dated diagnosis or physician statement]
  • [Military deployment — DD-214 or orders]
  • [Divorce or domestic dispute — case number]
  • [Reduction in household income — % decrease, since when]

Proposed payment plan:
  • Monthly amount: $[Amount]
  • Start date: [Date]
  • Duration: [Number] months
  • Full payoff date: [Date]

Statutory basis for the request:
[Pick the cite for your state and strike the rest.]
  • California — Cal. Civ. Code § 5665. On my written request, the board must MEET (regular meeting or designated committee) within 45 days of postmark, in executive session, to discuss a payment plan. Late fees do not accrue during my compliance with any plan adopted.
  • Colorado — C.R.S. § 38-33.3-316.3 (HB22-1137). The association MUST offer a payment plan of at least 18 months with a minimum acceptable monthly amount of $25, before referring the account to an attorney or collection agency for further collection. The association cannot foreclose if the lien is composed solely of fines, collection costs, or attorney's fees (§ 38-33.3-316).
  • Texas — Tex. Prop. Code § 209.0062. Associations with more than 14 lots must adopt payment-plan guidelines providing a minimum 3-month / maximum 18-month plan. Not required if the owner defaulted on a prior plan within 2 years.
  • Arizona — A.R.S. § 33-1807 (as amended by SB1494, effective 9/26/2025). The board must use \"reasonable efforts to communicate\" and \"offer a reasonable payment plan before filing a foreclosure action.\"
  • Florida — Fla. Stat. § 720.3085(6). The \"qualifying offer\" mechanism allows the owner to file a qualifying offer to pay all amounts secured by the lien plus reasonable attorney's fees and costs, which stays a filed foreclosure for up to 60 days while the parties work out terms.

Specific requests:

  1. **Accept the proposed payment plan** in writing, or counter-propose terms.
  2. **Suspend late fees** during compliance (automatic in California under § 5665(e); request elsewhere).
  3. **Freeze collection escalation** — no lien recording, no foreclosure proceedings, no referral to attorney/collection agency — while I am in compliance with the plan.
  4. **Waive or reduce** late fees, collection costs, and attorney's fees on hardship grounds.
  5. **Apply partial payments to principal first** — California Civ. Code § 5655 mandates this (assessments paid before fees/interest); requested as a matter of equity in other states.
  6. **Refund or credit** any past collection charges that exceeded what the statute or governing documents permit.

Reservation of rights:

This letter is not a waiver of any defenses I may have, including:
  • Challenges to the reasonableness of late fees, collection costs, and attorney's fees (subject to a reasonableness standard in every state surveyed);
  • Challenges to the foreclosure procedure if it is initiated;
  • Right to ADR or IDR (California § 5670; equivalent in other states);
  • Right of redemption (California § 5715 — 90 days post-nonjudicial-sale; Texas § 209.011 — 180 days);
  • Right to receive itemized accounting under [Cal. Civ. Code § 5660; Fla. § 720.3085(8); equivalent].

If the HOA refuses to accept a reasonable payment plan or proceeds to escalation without first offering one as required by [state statute], I reserve the right to pursue:
  • A defense to any foreclosure based on failure to offer a statutorily-required payment plan;
  • An action for declaratory relief on the validity of accrued fees;
  • Complaint to [state regulator — FL DBPR; VA CIC Ombudsman; NV NRED; AZ ADRE];
  • Bankruptcy protection (Ch. 13) to stay foreclosure and propose a court-supervised payment plan — recognizing this is a last resort.

Please respond in writing within [30] days (matching the California § 5660 pre-lien window where applicable).

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [supporting hardship documentation — pay stubs, separation notice, EOB, physician statement, orders, etc.; any prior board correspondence]`,
    howToUse: [
      "Send by certified mail with return receipt requested PLUS a first-class copy. The certified-mail receipt is what proves the date the request was received, which triggers California's 45-day board-meeting clock (Civ. Code § 5665) and equivalent timelines in other states.",
      "Attach hardship documentation. Vague \"things are tight\" requests work less often than concrete \"my husband lost his job at [Company] on [Date]; pay stubs and separation notice attached; we have reduced household income by ~60%.\" Boards face real fiduciary exposure if they refuse a documented hardship request and then foreclose; the documentation is what creates that exposure.",
      "Propose a specific plan, anchored to your state's safe harbor. Colorado: 18 months, $25/mo minimum. Texas: 3–18 months. California: ≥12 months traditionally requested under § 5665. Don't ask the board to come up with terms — give them a starting point you can actually afford.",
      "Don't refuse to pay assessments going forward. Most states allow lien recording for unpaid assessments. In California, partial payments under § 5655 must be applied to assessments first, then fees — so paying what you can shrinks the principal even if you can't pay everything.",
      "Pay any new monthly assessments on time while the hardship request is pending. The hardship is about the past-due balance; failing to pay current-month assessments while requesting accommodation undermines the credibility of the request.",
    ],
    legalContext: [
      "In most U.S. states, an HOA holds a statutory or contractual lien on every member's lot for unpaid assessments, and that lien is enforceable by foreclosure. The threat is asymmetric: a relatively small assessment delinquency, once stacked with collection costs, late fees, attorney's fees, and interest, can trigger a forced sale of the home. California, Colorado, Texas, Florida, Washington, Arizona, and Nevada all permit assessment-lien foreclosure under defined conditions; Virginia permits both judicial and nonjudicial. The hardship request letter is the documented pre-step that converts the homeowner's good-faith effort into a defense and a basis for state-regulator intervention.",
      "Several states now require — or strongly incentivize — the HOA to offer a payment plan before escalating. Colorado is the strongest: HB22-1137 requires the HOA to offer at least an 18-month plan at $25/mo minimum before referring the account to an attorney or collection agency, and the HOA cannot foreclose if the lien is composed solely of fines, collection costs, or attorney's fees. Texas requires associations of more than 14 lots to adopt payment-plan guidelines providing a 3-18 month range (§ 209.0062), with the exception that the plan is not required if the owner defaulted on a prior plan within 2 years. Arizona, after SB1494 effective September 26, 2025, requires the board to use \"reasonable efforts to communicate\" and \"offer a reasonable payment plan before filing a foreclosure action\" — and the foreclosure threshold itself was raised from $1,200 / 12 months to $10,000 / 18 months. California's § 5665 takes a meeting-based approach: on the owner's written request, the board must meet within 45 days, in executive session, to discuss a payment plan; late fees do not accrue during compliance. Florida's § 720.3085(6) has no pre-suit mandatory payment plan but provides a \"qualifying offer\" mechanism that stays a filed foreclosure for up to 60 days.",
      "California's Davis-Stirling collection sequence runs through several specific statutes, and the hardship letter invokes most of them. § 5650 provides that the assessment becomes a debt of the owner upon levy; reasonable late charges, costs of collection, and interest at up to 12%/yr may be added. § 5655 establishes payment-application priority — partial payments by the owner must be applied first to assessments, then to fees and interest. § 5660 requires a 30-day pre-lien notice by certified mail with itemized statement, bold foreclosure warning, right to request board meeting, and right to request IDR. § 5665 is the payment-plan board-meeting statute. § 5670 is the IDR right. § 5705(c) requires the board's vote to foreclose to be in executive session by majority, recorded by parcel number, at least 30 days before any public sale. § 5710 establishes the nonjudicial foreclosure procedure. § 5715 provides the 90-day right of redemption after nonjudicial sale. § 5720 sets the foreclosure threshold: the HOA may not foreclose unless either (a) regular/special assessments equal or exceed $1,800 OR (b) the assessments are more than 12 months delinquent, excluding fines, late charges, fees, and attorney's fees.",
      "The hardship letter works on multiple levels. It creates a paper record that boards face fiduciary exposure for foreclosing on a documented hardship without offering reasonable accommodation. It triggers statutory duties — California's § 5665 board-meeting clock, Colorado's § 38-33.3-316.3 18-month-plan offer, Arizona's § 33-1807 reasonable-efforts requirement — that are independently defensible in court. It preserves equity-of-redemption arguments by demonstrating good faith. It constrains attorney's fees by establishing that the HOA chose escalation over a documented reasonable alternative. And it offers behavioral leverage: most HOAs would rather collect $X over 12 months than spend $8,000–$15,000 on foreclosure proceedings against a documented hardship case, especially after the CO/AZ/CA reforms increased their exposure for getting this wrong.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Civ. Code §§ 5650–5740. § 5665: board MUST meet on written request within 45 days; late fees suspended during compliance (not statutorily mandatory acceptance, but meeting is). § 5655: payment-application priority (assessments first, then fees). § 5660: 30-day pre-lien notice. § 5720: foreclosure threshold $1,800 OR ≥12 months. § 5715: 90-day right of redemption.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 720.3085. No statutory pre-suit mandatory plan — but \"qualifying offer\" stays a filed foreclosure up to 60 days (§ 720.3085(6)). No fixed dollar threshold; judicial foreclosure required. 45-day notice of intent to lien + separate 45-day notice of intent to foreclose. 18% simple interest cap.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code Ch. 209: § 209.0062 (payment plan guidelines required for associations >14 lots, min 3 mo / max 18 mo); § 209.0092 (judicial expedited foreclosure required); § 209.011 (180-day post-sale right of redemption). Not required if owner defaulted on prior plan within 2 yrs.",
      },
      {
        state: "Virginia",
        note: "Va. Code § 55.1-1833. No payment-plan mandate. Foreclosure threshold $5,000 (exclusive of attorney fees/costs), for either judicial or nonjudicial. ≥60 days written notice; owner may bring court action to contest debt.",
      },
      {
        state: "Colorado",
        note: "C.R.S. § 38-33.3-316 + § 38-33.3-316.3 (HB22-1137). STRONGEST IN COUNTRY: must offer 18-month plan at $25/mo min before sending to attorney/collections. Cannot foreclose on lien composed solely of fines, collection costs, or attorney's fees. Mandatory pre-collection notice in English + Spanish.",
      },
      {
        state: "Nevada",
        note: "NRS 116.3116. No payment-plan mandate. Superpriority = 9 months of assessments (recommended trigger); HOA may foreclose at any time on full lien. 30 days after delinquent-assessment notice before recording NOD.",
      },
      {
        state: "Washington",
        note: "RCW 64.38.100 / 64.90.485. No payment-plan mandate. Foreclosure threshold: greater of 3 months of assessments OR $2,000. Notice of delinquency within 30 days past due; 90 days post-accrual before board may approve foreclosure; mediation referral available.",
      },
      {
        state: "Arizona",
        note: "A.R.S. § 33-1807 (amended by SB1494, eff. 9/26/2025). Board must use \"reasonable efforts to communicate\" and \"offer a reasonable payment plan before filing a foreclosure action.\" Foreclosure threshold raised to $10,000 OR 18 months delinquent (was $1,200/12 mo). 30-day pre-collection notice required.",
      },
    ],
    ifThisDoesntWork:
      "If the HOA refuses the payment plan or proceeds toward foreclosure despite the documented hardship request, multiple defenses and remedies remain. Pay-to-cure at any time before sale stops foreclosure. Most states provide a redemption period post-sale: California 90 days (§ 5715), Texas 180 days (§ 209.011). Procedural defenses against foreclosure include improper notice, missed waiting periods, unreasonable fees, misapplied payments (CA § 5655 violation), failure to offer ADR (CA § 5670), failure to follow statutory payment-plan procedure (CO § 38-33.3-316.3; AZ § 33-1807 post-9/26/2025; TX § 209.0062), and commercial unreasonableness (WA § 64.90.485). In states with regulators, file with FL DBPR / VA CIC Ombudsman / NV NRED / AZ ADRE. Chapter 13 bankruptcy can stay foreclosure and force a court-supervised payment plan — a serious step but sometimes the right one for genuine hardship. Consult a consumer-protection or bankruptcy attorney for foreclosure defense; many state HOA-defense bars take cases on contingency where attorney-fee provisions exist.",
    relatedSlugs: [
      "hoa-fine-dispute",
      "hoa-records-inspection",
      "hoa-selective-enforcement",
      "hoa-special-assessment-dispute",
      "late-fee-waiver-request",
      "debt-validation-request",
    ],
    faqs: [
      {
        question: "Can my HOA really foreclose for a few hundred dollars in unpaid dues?",
        answer:
          "Threshold varies by state. California: no — § 5720 requires either $1,800 in assessments OR 12+ months delinquent. Arizona (post-9/26/2025): $10,000 OR 18 months. Virginia: $5,000. Washington: greater of 3 months or $2,000. Florida: no statutory dollar floor but multiple 45-day notices required.",
      },
      {
        question: "Does my HOA have to accept my payment plan?",
        answer:
          "Depends on state. Colorado: yes — at least an 18-month plan at $25/mo minimum, before referral to collections (HB22-1137). Texas: yes for associations with more than 14 lots, 3–18 months, but board sets the terms within its adopted guidelines (§ 209.0062). California: the board must meet with you in executive session within 45 days of your request, and late fees suspend while you comply, but acceptance itself is discretionary (§ 5665). Arizona: the board must use \"reasonable efforts\" and offer a reasonable payment plan before suing (§ 33-1807).",
      },
      {
        question: "If the HOA refuses my payment plan, can I still stop the foreclosure?",
        answer:
          "Often yes. Pay-to-cure at any time before sale stops foreclosure. Most states have a redemption period post-sale: California 90 days, Texas 180 days. Procedural defenses include improper notice, missed waiting periods, unreasonable fees, misapplied payments, failure to offer ADR. Bankruptcy (Chapter 13) can stay foreclosure and force a plan.",
      },
      {
        question: "My HOA is piling on late fees and attorney's fees that exceed the original debt. Is that legal?",
        answer:
          "Fees must be reasonable and tied to actual costs. In California, partial payments must be applied to assessments first, then fees (§ 5655) — so the principal balance can shrink even if you can't pay everything. In Florida, simple interest is capped at 18%/yr and compound interest is barred (§ 720.3085). In Colorado after HB22-1137, the HOA cannot foreclose if the lien is composed solely of fines, collection costs, or attorney's fees.",
      },
      {
        question: "Should I send the hardship letter by certified mail?",
        answer:
          "Yes — certified mail with return receipt requested, plus a first-class copy. That mirrors the delivery method the HOA owes you under most state statutes, and creates an undisputed receipt date that starts statutory clocks (e.g., California § 5665's 45-day board-meeting window from the postmark of your request).",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
