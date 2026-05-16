import type { LetterTemplate } from "./types";

// Statutes verified May 2026 against official state legislature sites + state AG guidance.
// Re-verify before publishing for any state with annual amendments.

export const landlordLetters: LetterTemplate[] = [
  {
    slug: "security-deposit-demand",
    category: "landlord",
    title: "Security Deposit Demand Letter (Free Template + State-by-State Deadlines)",
    metaDescription:
      "Your landlord didn't return your security deposit. Free plain-English demand letter, the statute that applies in your state, and what to do next.",
    lede:
      "Your landlord didn't return your security deposit, gave you a vague reason, or has gone quiet since you moved out. Here's the letter that puts them on the statutory clock — and what happens if they ignore it.",
    body: `[Your Full Name]
[Your Current Address — your forwarding address]
[City, State ZIP]
[Phone Number]
[Email Address]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Also sent by email to [landlord email] for the record.)

Re: Demand for Return of Security Deposit — [Former Rental Address]

Dear [Landlord's Name]:

I rented the property at [Former Rental Address] from [Move-In Date] to [Move-Out Date]. At the start of my tenancy I paid a security deposit of $[Deposit Amount]. I surrendered possession and returned the keys on [Move-Out Date]. My forwarding address — for purposes of returning the deposit and any required itemized statement — is set out at the top of this letter.

Under [State] law (cite the section that applies to your state — e.g., "Cal. Civ. Code § 1950.5," "Tex. Prop. Code § 92.103," "N.Y. Gen. Oblig. Law § 7-108," "Fla. Stat. § 83.49," "Mass. G.L. c. 186, § 15B"), you are required to either:
  (a) return the full deposit to me, or
  (b) deliver a written, itemized statement of any deductions — with supporting receipts or invoices where the statute requires them — and refund any remainder,
within [statutory deadline — fill in your state's number of days, commonly 14 to 30 days] of the date I vacated and provided you a forwarding address.

As of today, [Number of Days] days have passed since I vacated, and I have received neither a refund nor a compliant itemized statement.

I am formally demanding the return of $[Amount Owed] within [7-14] days of the date of this letter. If you contend that any portion is properly withheld, please provide a written, itemized statement that includes:
  • Each specific deduction;
  • The legal basis for that deduction (i.e., actual damage beyond ordinary wear and tear, unpaid rent, or another category permitted by [State] law);
  • Receipts, invoices, or written estimates supporting each charge (required for any deduction in some states, including California for deductions above $125 and Washington for any damage charge);
  • Proration for any item — paint, carpet, fixtures — calculated against its remaining useful life rather than its replacement cost.

I left the property in clean condition, with normal wear and tear excepted. I have photographs and a move-out record from [Date] documenting the condition of the unit.

If I do not receive either the full refund or a fully documented itemized statement within [7-14] days of the date of this letter, I will treat your retention as in bad faith and pursue all remedies available under [State] law. Many states make a tenant who prevails on a wrongful-withholding claim entitled to recover statutory damages — typically two to three times the wrongfully withheld amount — plus reasonable attorney's fees and court costs. (See, e.g., Tex. Prop. Code § 92.109 [3x + attorney's fees]; Mass. G.L. c. 186, § 15B [3x + 5% interest + costs + fees]; Cal. Civ. Code § 1950.5(l) [2x in bad faith].)

I would prefer to resolve this without litigation. Please send the refund (or fully documented itemized statement) by check or electronic transfer using the contact information above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of lease; move-in inspection report (if any); dated move-out photos; any prior text/email regarding the deposit]`,
    howToUse: [
      "Send by certified mail with return receipt requested to the landlord's last known address. Texas, Ohio, and Pennsylvania all condition the landlord's return duty (or your enhanced damages) on the tenant having provided a written forwarding address — putting it at the top of the letter sent by certified mail covers both requirements at once.",
      "Send a copy by email too if you have an email address on file. The certified-mail tracking number is what protects you in court; the email is what gets read first.",
      "Attach copies (never originals) of your lease, any move-in inspection sheet, move-out photos, and proof of your forwarding address. In California — under AB 2801 (phased in 2025) — landlords are now required to take their own move-out photos, so demanding documentation is supported directly by the statute.",
      "Set a calendar reminder for the deadline you cite in your letter, plus one week. If the landlord misses it, your next step in most states is small claims court — filing fees usually run $30–$80 and lawyers are not required.",
      "Don't cash any partial payment labeled \"final settlement\" or \"payment in full\" without reading exactly what you'd be signing. In some states cashing a check with that endorsement can waive the rest of your claim.",
    ],
    legalContext: [
      "Security-deposit law is governed almost entirely at the state level, but the architecture is consistent across the country. After you vacate and provide a forwarding address, your landlord has a fixed window — usually somewhere between 14 and 30 days — to either return your deposit or deliver a written, itemized statement of any deductions, with supporting documentation. Miss the window or pad the deductions and most states impose serious penalties.",
      "\"Normal wear and tear\" is not a deductible expense in any state. Texas codifies the definition directly: deterioration from intended use of the dwelling, including breakage from age, but not from negligence or abuse (Tex. Prop. Code § 92.104). Worn carpet from foot traffic, faded paint, small nail holes from picture hangers, and minor scuffs are wear and tear. Burns, large holes, pet damage, broken fixtures, and unauthorized paint colors are damage. Where a landlord replaces an item, the deduction must usually be prorated by the item's remaining useful life — a seven-year-old carpet with a three-year remaining life can be charged for only three years, not its full replacement cost.",
      "If your landlord misses the statutory deadline or withholds money without proper documentation, the remedies vary by state but the pattern is consistent: many states either forfeit the landlord's right to keep any portion (New York's General Obligations Law § 7-108, Florida's Fla. Stat. § 83.49, Pennsylvania's 68 P.S. § 250.512, Georgia's O.C.G.A. § 44-7-35) or expose the landlord to two or three times the wrongfully withheld amount plus attorney's fees (Tex. Prop. Code § 92.109; Mass. G.L. c. 186, § 15B; 765 ILCS 710; Ohio Rev. Code § 5321.16; Cal. Civ. Code § 1950.5(l)). The strength of these penalties is one reason a clear written demand letter often produces a refund within days. Landlords who would happily ignore a text message tend to act quickly when they see certified-mail tracking and language quoting their state's specific statute.",
      "Two recent California changes are worth flagging because they affect many of the highest-volume rental markets in the country. AB 12, effective July 1, 2024, caps residential security deposits at one month's rent (with a narrow exception for natural-person landlords owning no more than two properties and four total units, who may collect up to two months — except from active-duty service members). AB 2801, phasing in through 2025 and 2026, requires landlords to take photographs of the unit before, immediately after, and following any repairs, and to include those photos with the itemized statement. Tenants in California should expect — and demand — that documentation.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1950.5. 21 calendar days to refund or send an itemized statement. Receipts required for any deduction above $125. Bad-faith retention exposes the landlord to up to twice the deposit in statutory damages. AB 12 (eff. 7/1/2024) caps deposit at 1 month's rent; AB 2801 (phased 4/1/2025–4/1/2026) requires landlord move-out photos.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 92.103, 92.107, 92.109. 30 days after surrender, but only once the tenant provides a written forwarding address. Bad faith presumed if the landlord misses the deadline — exposing the landlord to $100 + 3x the wrongfully withheld amount + reasonable attorney's fees.",
      },
      {
        state: "New York",
        note: "N.Y. Gen. Oblig. Law § 7-108. 14 days to refund or send an itemized statement. Missing the deadline forfeits all right to retain any portion of the deposit. Willful violations expose the landlord to punitive damages up to twice the deposit. Deposit capped at 1 month's rent under the 2019 HSTPA.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.49. 15 days to refund if no claim; 30 days to send certified-mail/email notice of intent to claim deductions. Missing the 30-day notice deadline forfeits all right to impose a claim. Prevailing party recovers court costs + reasonable attorney's fees.",
      },
      {
        state: "Illinois",
        note: "765 ILCS 710. 30 days for itemized statement with paid receipts or cost estimates; 30 more days (60 total) to refund the balance. Statute applies to lessors of 5 or more residential units. Refusal or bad-faith violation: 2x the deposit + court costs + reasonable attorney's fees.",
      },
      {
        state: "Pennsylvania",
        note: "68 P.S. § 250.512. 30 days after termination. Tenant must provide written forwarding address; without it, no double damages. Failure to provide an itemized list within 30 days forfeits the right to withhold anything; wrongful retention exposes the landlord to twice the amount withheld.",
      },
      {
        state: "Ohio",
        note: "Ohio Rev. Code § 5321.16. 30 days after termination + delivery of possession. Tenant must provide forwarding address in writing. Wrongful retention: damages equal to the amount wrongfully withheld (i.e., 2x recovery total) + reasonable attorney's fees.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.280. 30 days after termination. Landlord must include copies of estimates received or invoices paid; charges not substantiated cannot be charged, sent to collections, or reported to tenant-screening agencies. Intentional refusal can be doubled.",
      },
      {
        state: "Massachusetts",
        note: "Mass. G.L. c. 186, § 15B. 30 days after end of tenancy. One of the strictest deposit regimes in the country: 3x the deposit (treble damages) + 5% interest + court costs + reasonable attorney's fees. Strict liability — no bad faith required. Landlord must hold the deposit in a separate Massachusetts interest-bearing account and provide a sworn itemized list of any damages.",
      },
      {
        state: "Georgia",
        note: "O.C.G.A. §§ 44-7-34, 44-7-35. 30 days after possession returned. Landlord must have placed deposit in escrow or posted surety bond; failure forfeits any right to retain. Bad-faith retention: 3x the amount wrongfully withheld + reasonable attorney's fees.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the deadline or replies with a deduction list that isn't documented, your next step in most states is small claims court. Filing fees usually run $30–$80, you don't need a lawyer, and most small claims courts are designed for self-represented parties. Bring the certified-mail receipt, your demand letter, your lease, dated move-out photos, and any reply from your landlord. In states with statutory multipliers (Texas, Massachusetts, Illinois, Ohio, California, Georgia), the judge will not only award the deposit but can also award two or three times the wrongfully withheld amount plus your attorney's fees and court costs. Free help is often available from local legal-aid clinics and law-school tenant clinics.",
    relatedSlugs: [
      "repair-request-formal",
      "billing-error-dispute",
      "debt-validation-request",
      "credit-report-dispute",
      "medical-records-request",
    ],
    faqs: [
      {
        question: "How long does my landlord have to return my security deposit?",
        answer:
          "It varies by state, but most states fall in a 14- to 45-day window. Common examples: New York is 14 days (GOL § 7-108), Florida is 15 days for a no-claim refund (Fla. Stat. § 83.49), California is 21 days (Civ. Code § 1950.5), and Texas, Pennsylvania, Ohio, Washington, Massachusetts, and Georgia are all 30 days. Illinois is 30 days to send the itemized statement and 30 more to refund the balance.",
      },
      {
        question: "Can my landlord keep my deposit for normal wear and tear?",
        answer:
          "No. Normal wear and tear — minor scuffs, slightly worn carpet, small nail holes, faded paint — is not deductible in any state. Texas defines the line directly in Tex. Prop. Code § 92.104: deterioration from intended use is wear and tear, not damage from negligence, carelessness, accident, or abuse. Where a landlord replaces an aging item, the deduction must be prorated by remaining useful life, not charged at full replacement cost.",
      },
      {
        question: "What if my landlord never replies to the demand letter?",
        answer:
          "Wait until the deadline in your letter passes. Then your strongest next step is small claims court. Filing fees are usually $30–$80, you don't need a lawyer, and in many states the judge can award you additional statutory damages — Texas gives $100 + 3x the wrongfully withheld amount + attorney's fees (Prop. Code § 92.109); Massachusetts gives 3x the full deposit + 5% interest + costs + fees (G.L. c. 186, § 15B); California gives up to 2x the deposit for bad-faith retention (Civ. Code § 1950.5(l)).",
      },
      {
        question: "Do I need to send the letter by certified mail?",
        answer:
          "Strongly recommended. Certified mail with return receipt requested creates a tracked, dated record that the landlord actually received the letter — which is what a small claims judge will look for. Some states require certified mail or a similar restricted-delivery service to trigger statutory remedies (Texas, Illinois, Pennsylvania, and Florida all reward certified mail in different ways). Email is fine as a backup but is much easier to dispute receipt of.",
      },
      {
        question: "What if I have a roommate — whose name goes on the letter?",
        answer:
          "Anyone who signed the lease and paid into the deposit has a claim. You can either each send your own letter, or co-sign a single letter. If you co-sign, list every tenant's name and forwarding address at the top and have everyone sign at the bottom. If only one tenant's name was on the lease, that tenant is generally the only one with legal standing — even if multiple people contributed to the deposit.",
      },
    ],
    publishedAt: "2026-05-15",
  },
  {
    slug: "repair-request-formal",
    category: "landlord",
    title: "Formal Repair Request Letter to Landlord (Free Template + State Rules)",
    metaDescription:
      "Your landlord ignored your repair request. Free written-notice letter that triggers your warranty-of-habitability rights, plus state-by-state deadlines.",
    lede:
      "You've already asked your landlord to fix something — by text, by call, in person — and nothing happened. This letter creates the written paper trail that actually triggers your warranty-of-habitability rights.",
    body: `[Your Full Name]
[Rental Unit Address, including unit/apt number]
[City, State ZIP]
[Phone Number]
[Email Address]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Email copy also sent to [landlord email] for the record.)

Re: Formal Notice and Request for Repair — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address under the lease dated [Lease Date]. I am writing to give you formal written notice — pursuant to the implied warranty of habitability and the specific repair-and-notice provisions of [State] law (see, e.g., Cal. Civ. Code §§ 1941–1942; Tex. Prop. Code §§ 92.052, 92.056; N.Y. Real Prop. Law § 235-b; Fla. Stat. § 83.56(1); 765 ILCS 742/5; RCW 59.18.070; Ohio Rev. Code § 5321.07; Mass. G.L. c. 239 § 8A) — of the following condition(s) requiring repair:

  1. [Specific description of issue #1, including the room/area affected.]
     First observed / first reported on: [Date]
     How I previously notified you: [text / call / email / in person, with date]

  2. [Specific description of issue #2 — repeat as needed.]
     First observed / first reported on: [Date]
     How I previously notified you: [text / call / email / in person, with date]

The condition(s) above interfere with my reasonable use and quiet enjoyment of the unit and, in my view, with the implied warranty of habitability under [State] law. [Specify if relevant: this is a failure of an essential service (heat / hot water / cold water / electricity / functioning plumbing / weatherproofing) requiring an expedited response — see, e.g., RCW 59.18.070 (24-hour response in Washington); ORS 90.365 (48 hours in Oregon).]

I am requesting that you complete the repair(s) within the applicable statutory timeframe:
  • If this notice involves the loss of an essential service: within [24–72] hours, depending on the jurisdiction;
  • Otherwise: within [7–30] days of the date of this letter, depending on the deadline set by [State] law (e.g., 7 days under Tex. Prop. Code § 92.056(d); 14 days under 765 ILCS 742/5; "reasonable time" — 30 days presumed reasonable — under Cal. Civ. Code § 1942(b); 30 days under Ohio Rev. Code § 5321.07).

If you intend to enter the unit to inspect or perform the repair, please contact me at the phone or email above to schedule entry with at least [24/48] hours' advance notice, consistent with my lease and [State] law.

I confirm that I am current on rent (a precondition to several statutory remedies — including rent escrow under Ohio Rev. Code § 5321.07 and the defense available under Mass. G.L. c. 239 § 8A). I intend to remain so during the repair window.

If you do not respond in writing within [7] days of receipt of this letter, or if the repair(s) are not completed within the timeframe above, I intend to pursue the remedies available under [State] law, which depending on the jurisdiction include:

  • Repair-and-deduct — paying for the repair myself (within statutory dollar caps) and deducting the cost from a future rent payment. Examples: California — up to one month's rent, twice per 12-month period (Civ. Code § 1942); Texas — one month's rent or $500, whichever is greater (Prop. Code § 92.0561); Illinois — lesser of $500 or one-half of monthly rent (765 ILCS 742/5); Washington — up to two months' rent per repair when performed by a licensed contractor, one month if self-performed (RCW 59.18.100); Oregon — up to $300 for minor defects repaired by a third party (ORS 90.368).
  • Rent escrow — depositing rent into a court-administered escrow account pending repair, where the statute provides this remedy (e.g., Ohio Rev. Code § 5321.07; Florida § 83.60(2)).
  • Reporting to local code-enforcement or housing inspector.
  • Termination of the lease without further obligation, where the condition rises to constructive eviction (e.g., Tex. Prop. Code § 92.056(f); Ore. Rev. Stat. § 90.360).
  • A civil action for actual damages and, in some states, statutory damages and attorney's fees.

I would prefer to resolve this cooperatively and quickly. Please confirm receipt and a proposed schedule.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [dated photos, video stills, prior text-message screenshots, prior emails, any inspector or code-enforcement reports]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Illinois (765 ILCS 742/5) requires registered or certified mail; Texas (Prop. Code § 92.056) gives the landlord a faster statutory clock if the notice is certified. Email is a useful backup, but for the statutory remedies above, certified mail is what triggers them.",
      "Take dated photos and short video clips of the condition before you send the letter. Save them outside the unit (cloud, email to yourself). Date-stamped photos and a contemporaneous video walk-through are the single most valuable items in your file if this ever reaches court.",
      "Do not stop paying rent. Withholding rent informally is the single most common way tenants lose otherwise winnable cases. Ohio, Florida, Pennsylvania, and Massachusetts all require formal procedures (court escrow, government certification, or court-ordered deposit) before withholding is legally protected — and being current on rent is an explicit precondition to several remedies. Continue to pay until and unless a local tenants' rights organization or attorney confirms a specific procedure has been triggered.",
      "If the issue is loss of an essential service — no heat in cold weather, no hot or cold water, no electricity, sewage backup, or a major water leak — copy your local code-enforcement or housing inspector at the same time you send the letter. Washington's RCW 59.18.070 requires a 24-hour response for those failures; Oregon's ORS 90.365 requires 48 hours. Document everything.",
      "If your landlord owns only a small number of units, check whether the statute applies. Ohio's escrow remedy under § 5321.07 does not apply to landlords who own three or fewer units and disclose that fact in writing. Illinois's 765 ILCS 742 covers different scenarios than California's § 1942. Verify the local statute applies to your situation before relying on it.",
    ],
    legalContext: [
      "Almost every state recognizes some form of an implied warranty of habitability — codified by statute in California (Civ. Code §§ 1941, 1941.1), Texas (Prop. Code § 92.052), New York (Real Prop. Law § 235-b), Ohio (Ohio Rev. Code § 5321.04), Washington (RCW 59.18.060), and most others; established at common law in Pennsylvania (Pugh v. Holmes, 486 Pa. 272 (1979)) and a handful of additional states. The warranty is that a landlord, by renting you a residential unit, is implicitly promising the unit will be — and remain — fit to live in. What that covers usually includes heat, running water, hot water, electricity, structural integrity, weatherproofing, working plumbing, and freedom from infestations or hazardous conditions like mold or lead. HUD's housing quality standards (24 C.F.R. § 5.703) describe the federal baseline. In most states the warranty cannot be waived by lease.",
      "Preserving your rights under the warranty depends on three things: written notice, a reasonable opportunity to repair, and — in most states — being current on rent. The written notice is the step tenants most often skip. Without it, even a clearly habitable problem becomes a much harder case to make later. Several states make certified or registered mail the specific delivery method that triggers their remedies; Texas, Illinois, and Pennsylvania all reward certified mail in different ways.",
      "Once notice has been given and a reasonable time has passed, the remedies vary substantially by state. Texas, California, Illinois, Washington, and Oregon allow some form of repair-and-deduct with statutory dollar caps. Ohio and Florida use court-administered rent escrow rather than self-help deduction. Pennsylvania requires a government inspector's certification of unfitness before withholding is legally protected. New York's primary remedy is an HP action in housing court seeking rent abatement, not a fixed-formula deduction. Massachusetts treats § 8A as a defense and counterclaim rather than an affirmative deduction. The wrong procedure for your state can hand the landlord an eviction case, so verify the local remedy before acting on it.",
      "Two structural exclusions matter. First, the warranty does not cover cosmetic conditions — faded paint, worn carpet, slow-but-functional plumbing. California's § 1941.1 lists what counts; Massachusetts's 105 CMR 410 sets the minimum standards. Second, conditions caused by the tenant or the tenant's guests are excluded everywhere (Cal. Civ. Code § 1941.2; N.Y. Real Prop. Law § 235-b; Mass. G.L. c. 239 § 8A). The warranty is a baseline of habitability — not a substitute for routine landlord responsiveness or aesthetic preferences.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code §§ 1941, 1941.1, 1942. Notice triggers a \"reasonable time\" — 30 days presumed reasonable under § 1942(b). Repair-and-deduct cap: one month's rent, max twice per 12-month period. For leases signed on or after Jan. 1, 2026, working stove and refrigerator are part of the habitability baseline.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 92.052, 92.056, 92.0561. Written notice by certified mail (or two notices) triggers a 7-day presumed-reasonable response window; otherwise 30 days. Repair-and-deduct cap: one month's rent or $500, whichever is greater.",
      },
      {
        state: "New York",
        note: "N.Y. Real Prop. Law § 235-b. Warranty statute only — no statutory repair-and-deduct or fixed notice period. Primary remedy is HP action in housing court (NYC) or rent-abatement defense in a nonpayment proceeding. Document actual and constructive notice carefully.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. §§ 83.51, 83.56(1), 83.60. 7 days' written notice required. No repair-and-deduct statute — Florida uses withhold-and-defend. If the landlord sues, mandatory deposit of rent into the court registry under § 83.60(2); failure = default.",
      },
      {
        state: "Illinois",
        note: "765 ILCS 742/5. 14 days' written notice by registered or certified mail (or sooner for emergency). Repair-and-deduct cap: lesser of $500 or one-half of monthly rent.",
      },
      {
        state: "Pennsylvania",
        note: "Common-law warranty under Pugh v. Holmes, 486 Pa. 272 (1979). Statutory withholding under 35 P.S. § 1700-1 requires government certification of unfitness for habitation BEFORE withholding, plus deposit into an approved escrow account.",
      },
      {
        state: "Ohio",
        note: "Ohio Rev. Code §§ 5321.04, 5321.07, 5321.08. 30 days or reasonable time after written notice, whichever is sooner. Remedy is rent escrow with the clerk of the municipal/county court — not self-help repair-and-deduct. Doesn't apply to landlords with 3 or fewer units who disclose that in writing. Tenant must be current on rent.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.060, 59.18.070, 59.18.100. Tiered notice: 24 hours (heat/water/electricity/imminent hazard), 72 hours (major appliance/plumbing), 10 days (all other). Repair-and-deduct: up to 2 months' rent per repair when performed by a licensed contractor; up to 1 month's rent if self-performed.",
      },
      {
        state: "Massachusetts",
        note: "G.L. c. 111 §§ 127A–127L and c. 239 § 8A. Triggered by board-of-health inspection citing the sanitary code (105 CMR 410). Treated as a defense and counterclaim, not affirmative repair-and-deduct. Court may order rent deposit upon landlord's suit.",
      },
      {
        state: "Oregon",
        note: "ORS 90.320, 90.360, 90.365, 90.368. 48 hours for essential-service failure; 7 days for minor defect under § 90.368; 30 days (or 7 for essential services) under § 90.360. Minor-defect repair-and-deduct under § 90.368 caps at $300 and requires a third-party (not tenant) to perform the work.",
      },
    ],
    ifThisDoesntWork:
      "If your landlord ignores the letter or refuses to schedule the repair, the next step depends on severity and state. For habitability emergencies — no heat in winter, no water, sewage backup, structural failure — file a complaint with your local code-enforcement or housing department; many cities will inspect within 24–48 hours. For non-emergency repairs, talk to a local tenants' rights organization or legal-aid clinic before withholding rent or self-help repair-and-deducting; the procedures are state-specific and a single misstep can convert the dispute into an eviction case. Small claims court is also an option for recovering money you actually spent on a repair the landlord should have made. Free legal help is widely available — most state bar associations publish tenant-rights resources and most large cities have a tenants' rights organization.",
    relatedSlugs: [
      "security-deposit-demand",
      "billing-error-dispute",
      "debt-validation-request",
      "credit-report-dispute",
      "medical-records-request",
    ],
    faqs: [
      {
        question: "Do I have to put my repair request in writing?",
        answer:
          "Yes. Verbal requests rarely preserve your statutory rights. The written notice — ideally certified mail with return receipt — is what triggers the timelines and remedies in your state's warranty-of-habitability law. Illinois (765 ILCS 742/5) and Texas (Prop. Code § 92.056) both reward certified or registered mail directly: it changes the deadline the landlord faces. Text messages and emails are better than nothing but they're easier to dispute later.",
      },
      {
        question: "How long does my landlord have to make the repair?",
        answer:
          "Depends on the severity and the state. Washington requires a 24-hour response for heat/water/electricity failures (RCW 59.18.070) and Oregon requires 48 hours for essential services (ORS 90.365). For non-essential repairs the deadlines are: Texas 7 days presumed reasonable (Prop. Code § 92.056(d)); Florida 7 days (§ 83.60); Illinois 14 days (765 ILCS 742/5); California \"reasonable time\" with 30 days presumed reasonable (Civ. Code § 1942(b)); Ohio 30 days or reasonable, whichever sooner (§ 5321.07).",
      },
      {
        question: "Can I withhold rent if my landlord ignores my repair request?",
        answer:
          "Sometimes — but only following your state's specific procedure. Ohio (§ 5321.07) requires deposit into a court-administered escrow account. Florida (§ 83.60) requires deposit into the court registry once the landlord files an eviction. Pennsylvania (35 P.S. § 1700-1) requires a government inspector's certification of unfitness before withholding. Massachusetts treats withholding as a defense and counterclaim rather than an affirmative procedure (G.L. c. 239 § 8A). Withholding rent informally — without following the procedure — is the most common way tenants lose otherwise winnable cases.",
      },
      {
        question: "What is repair-and-deduct?",
        answer:
          "A remedy available in some states that lets you pay for a repair yourself and deduct the cost from your next rent payment. Statutory caps: California up to one month's rent, twice per 12-month period (Civ. Code § 1942); Texas one month or $500, whichever is greater (Prop. Code § 92.0561); Illinois lesser of $500 or half month (765 ILCS 742/5); Washington up to 2 months' rent per repair if licensed contractor performs (RCW 59.18.100); Oregon $300 for minor defects (ORS 90.368). Florida, New York, Ohio, and Pennsylvania do not have a self-help repair-and-deduct statute.",
      },
      {
        question: "Can my landlord retaliate or evict me for sending the letter?",
        answer:
          "No. Retaliation is prohibited in every state with codified tenant protections. Cal. Civ. Code § 1942.5 and Tex. Prop. Code Ch. 92 Subchapter H both prohibit retaliatory eviction, rent increase, or service reduction within 180 days of a good-faith repair request. New York's Real Prop. Law § 223-b and Ohio's § 5321.02 contain similar protections. If retaliation does occur — a sudden \"no-cause\" termination notice, an unexplained rent increase, or service cut-offs — document it carefully and report to your state attorney general or local tenants' rights organization immediately.",
      },
    ],
    publishedAt: "2026-05-15",
  },

  {
    slug: "mold-notice",
    category: "landlord",
    title: "Mold Notice Letter to Landlord (Free Template + State Rules)",
    metaDescription:
      "Visible mold in your rental? Free written notice that triggers your warranty-of-habitability rights, plus state-by-state remediation rules.",
    lede:
      "You've found visible mold — black spots in the bathroom, fuzzy patches behind furniture, a musty smell that won't go away — and your landlord is dragging their feet. This letter creates the written record that triggers the remediation clock.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Email copy also sent to [landlord email] for the record.)

Re: Formal Notice of Mold and Demand for Remediation — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address under the lease dated [Lease Date]. I am writing to give you formal written notice — pursuant to the implied warranty of habitability and the specific mold and habitability provisions of [State] law (see, e.g., Cal. Health & Safety Code § 17920.3(a)(11),(13) + Civ. Code § 1941.1; Tex. Prop. Code §§ 92.052, 92.056; N.Y. Real Prop. Law § 235-b + NYC Admin. Code §§ 27-2017 et seq. (Local Law 55); Fla. Stat. § 83.51 + § 83.56(1); Md. Real Prop. § 8-211.2 (eff. July 1, 2025); RCW 59.18.060; Va. Code § 8.01-226.12) — of the following mold and/or moisture damage in the unit:

  Location #1: [Room/area — e.g., "ceiling around bathroom exhaust fan"]
    First observed: [Date]
    Approximate size: [e.g., "8 inches × 12 inches"]
    Description: [color, texture, smell, any visible water source]

  Location #2: [Repeat as needed]

I have also observed / am experiencing:
  • [Persistent musty odor in the unit, dates first noticed]
  • [Active or recent water source: leak, drip, condensation, prior flood — with dates]
  • [Health symptoms that began after the mold appeared — e.g., congestion, asthma flare, headaches; note any household members with elevated risk]
  • [Any prior reports of the same issue, with dates and method of report]

Dated photographs are enclosed.

Mold and unaddressed moisture are recognized health hazards under EPA guidance, federal HUD housing quality standards (24 C.F.R. § 5.703(e)), and [State] habitability law. The presence of mold inside the unit, together with an unaddressed moisture source, breaches the implied warranty of habitability.

I am requesting that you:

  1. Inspect the unit — including any concealed area where moisture may be entering (e.g., behind walls, under flooring, around plumbing or HVAC) — within [statutory deadline; e.g., 15 days under Md. Real Prop. § 8-211.2; 5 business days under Va. Code § 8.01-226.12; otherwise a reasonable time, not to exceed 7 days] of the date of this letter.

  2. Identify and repair the underlying moisture source — not just the visible mold. Per EPA guidance, cleaning mold without correcting the moisture source guarantees recurrence.

  3. Remediate the affected area consistent with EPA's "A Brief Guide to Mold, Moisture, and Your Home." For affected areas larger than approximately 10 square feet, EPA, HUD, and CDC all recommend a qualified mold remediation contractor (and in some states it is required — NYC LL 55 above 10 sq ft; Texas TDLR licensure above 25 sq ft in 10+ unit properties; Maryland statewide statewide standards by June 1, 2027 per SB 856).

  4. Provide me with written documentation of (a) the moisture source identified, (b) the repair performed, (c) the remediation method used, and (d) any contractor invoices or assessor reports.

  5. If remediation will make any part of the unit temporarily uninhabitable, propose in writing either temporary alternative housing at your expense or a prorated rent abatement for the affected period.

Please complete the initial inspection within [Number] days and the full remediation within [Number, commonly 14–45] days, or sooner if the affected area exceeds 10 square feet or if any household member's health condition makes the unit unsafe to occupy.

If you do not respond in writing within [Number, commonly 7] days, or fail to address the condition within the timeframe above, I intend to pursue all remedies available under [State] law, which may include reporting to local code enforcement or housing authorities, repair-and-deduct where authorized by statute, rent escrow where authorized, termination of the lease on the grounds of constructive eviction, and a civil action for actual damages, related medical expenses, and property damage.

I would prefer to resolve this cooperatively and quickly. Please confirm receipt and a proposed schedule.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [photos of affected areas; photos of moisture source; prior text/email reports; medical documentation if you choose to share]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Email a copy. Maryland, Virginia, Texas, and Illinois all expressly reward certified mail in different ways; everywhere else, the certified receipt is what proves the date the remediation clock started.",
      "Photograph everything before sending. Date-stamped photos with a ruler or measuring tape in frame for scale are the most valuable items in your file. Video walk-throughs are even better.",
      "Don't try to clean mold larger than a small spot yourself. EPA guidance is that anything larger than roughly 10 square feet should be handled by a qualified remediation contractor — disturbing larger mold releases spores. Cleaning before notice can also undercut your case later.",
      "If a household member is symptomatic, see a doctor and ask for the visit to be documented as potentially environmental. You don't have to prove causation now — you just want a contemporaneous medical record in case it becomes relevant later.",
      "If the landlord doesn't respond within a week, contact your local code-enforcement, public-health, or housing department. Mold is one of the few habitability issues where many cities will inspect quickly. NYC residents: call 311 and reference Local Law 55.",
    ],
    legalContext: [
      "Mold in a residential rental almost always implicates the landlord's duty to maintain the unit in a habitable condition. California codifies this directly — Health & Safety Code § 17920.3(a)(11)–(13) names \"dampness of habitable rooms\" and \"visible mold growth\" as substandard conditions; Civ. Code § 1941.1 makes a unit untenantable without those baseline conditions. Texas, New York, Florida, Washington, Pennsylvania, and Ohio reach the same result through the general warranty of habitability and the building code. In every state surveyed, persistent visible mold with an unaddressed moisture source falls inside the warranty.",
      "Two recent state laws are reshaping the landscape. Maryland's Tenant Mold Protection Act (SB 856 / Chapter 539), effective July 1, 2025, codified at Real Property § 8-211.2, requires a landlord to perform a mold assessment within 15 days of written tenant notice and to remediate within 45 days of that assessment. Statewide remediation standards from the Maryland Department of the Environment are due by June 1, 2027. Virginia's Code § 8.01-226.12 and § 55.1-1215 require a 5-business-day remediation window when visible mold is found at move-in. New York City's Local Law 55 (the Asthma-Free Housing Act) classifies mold infestations larger than 30 square feet as immediately hazardous, requires licensed assessors and independent remediators above 10 square feet, and imposes daily fines on noncompliant landlords.",
      "Remediation must address both the visible mold and the underlying moisture source. The EPA's guidance is explicit on this point: cleaning surfaces without fixing the leak or ventilation problem just resets the clock until the mold returns. A landlord who paints over mold, wipes it down, or sends a maintenance person to spray bleach without identifying the moisture source has not cured the defect. Tenants whose landlords \"fix\" the visible mold but skip the source often find themselves writing this letter again six months later — at which point the documented pattern strengthens the habitability claim.",
      "Remedies for unaddressed mold vary by state but commonly include reporting to local code enforcement (often the fastest path), repair-and-deduct where the statute authorizes it (California up to one month's rent under Civ. Code § 1942; Texas up to one month's rent or $500 under Prop. Code § 92.0561), rent withholding into escrow where the procedure exists (Ohio, Florida), constructive eviction terminating the lease without penalty (recognized in every state surveyed), and damages including medical costs and property damage where the mold caused harm. Health-harm damages are harder to prove than habitability claims — they generally need medical documentation and either an industrial-hygienist report or a doctor's opinion linking exposure to symptoms — but you do not need to prove health harm to make a strong habitability case.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Health & Safety Code § 17920.3(a)(11),(13) names \"dampness of habitable rooms\" and \"visible mold growth\" as substandard conditions. Civ. Code § 1941.1 makes such a unit untenantable. Reasonable response time (30 days presumed); shorter for emergencies. Repair-and-deduct up to one month's rent under Civ. Code § 1942.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 92.052, 92.056, 92.0561. 7-day presumed reasonable response. TDLR Mold Assessors & Remediators Rules (16 TAC Ch. 78): ≥25 contiguous sq ft in residential properties with 10+ units requires a licensed Mold Remediator and a Certificate of Mold Damage Remediation.",
      },
      {
        state: "New York (NYC)",
        note: "NYC Admin. Code §§ 27-2017 et seq. (Local Law 55 / Asthma-Free Housing Act). Buildings with 3+ units. HPD inspects within 30 days; >30 sq ft = immediately hazardous = NYS-licensed Mold Assessor + independent Mold Remediator required. Daily HPD penalties up to $10,000 per violation.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.51 (habitability) and § 83.56(1) (notice). No mold-specific statute; mold qualifies if it materially breaches the building or health codes. 7-day written notice before termination under § 83.56(1)(b).",
      },
      {
        state: "Illinois",
        note: "Implied warranty under Jack Spring v. Little; Residential Tenants' Right to Repair Act (765 ILCS 742/) — 14-day written notice; repair-and-deduct capped at lesser of $500 or half month's rent. Chicago RLTO § 5-12-070 stronger in city.",
      },
      {
        state: "Maryland (NEW July 2025)",
        note: "Tenant Mold Protection Act (SB 856 / Ch. 539), Real Property § 8-211.2. Landlord must conduct mold assessment within 15 days of written notice and remediate within 45 days. Statewide remediation standards due from MDE by June 1, 2027.",
      },
      {
        state: "Virginia",
        note: "Va. Code § 8.01-226.12 + § 55.1-1215. If move-in inspection shows visible mold and tenant stays, landlord must remediate within 5 business days, reinspect, and issue a new report. Tenant may terminate before taking possession if mold disclosed.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.060(13) — landlord must distribute DOH-approved mold information at lease signing. No mandated state remediation standard, but landlord must repair the moisture source. RCW 59.18.070 timing: 24/72/10 days depending on severity.",
      },
      {
        state: "Pennsylvania",
        note: "Common-law warranty (Pugh v. Holmes, 486 Pa. 272 (1979)) is non-waivable. No mold-specific statute. Reasonable response time after written notice; repair-and-deduct allowed without a fixed cap. Tenant must give notice and a reasonable cure period.",
      },
    ],
    ifThisDoesntWork:
      "If your landlord ignores the letter or only addresses the surface mold without fixing the moisture source, your fastest escalation is local code enforcement or your city's housing department. NYC has 311; most large cities have a 24-hour code-enforcement line. For larger or health-impacting cases, contact a local tenants' rights organization or legal-aid clinic — mold cases are often taken on contingency when there's medical documentation. If you have to move out because remediation has made the unit unlivable, document everything: medical visits, alternative housing costs, lost or contaminated property. Those costs are recoverable in many states under constructive eviction.",
    relatedSlugs: [
      "repair-request-formal",
      "pest-infestation-notice",
      "heat-utility-failure",
      "security-deposit-demand",
      "illegal-entry-cease-and-desist",
      "intent-to-vacate",
    ],
    faqs: [
      {
        question: "Is my landlord required to remediate mold?",
        answer:
          "In nearly every state, yes — once put on written notice. Mold falls under the warranty of habitability everywhere. California (Health & Safety § 17920.3), Maryland (Real Prop. § 8-211.2 effective July 2025), Virginia (Code § 8.01-226.12), and NYC (Local Law 55) have explicit mold rules with specific deadlines on top of the general warranty.",
      },
      {
        question: "How long does my landlord have to fix mold?",
        answer:
          "Depends on the state. Maryland: 15 days to assess and 45 days to remediate (Real Prop. § 8-211.2). Virginia at move-in: 5 business days. Texas: 7 days presumed reasonable (Prop. Code § 92.056(d)). NYC for >30 sq ft: classified as immediately hazardous. Otherwise: \"reasonable time,\" usually 14–30 days for non-emergency moldy conditions.",
      },
      {
        question: "Can I break my lease because of mold?",
        answer:
          "Possibly — under constructive eviction. You generally need written notice, a reasonable opportunity for the landlord to repair, and documentation that the mold made the unit unfit to live in. Florida Stat. § 83.56(1)(b) authorizes termination after 7-day notice; Texas Prop. Code § 92.056(f) after notice and failure to cure. California recognizes constructive eviction when conditions force the tenant out.",
      },
      {
        question: "Should I clean the mold myself before contacting my landlord?",
        answer:
          "Not for anything larger than a small spot. EPA recommends a qualified remediation contractor for any area larger than roughly 10 square feet — disturbing larger mold releases spores and can spread the problem. Document the condition with dated photos first, then notify the landlord in writing. Cleaning before notice can also undercut your case later.",
      },
      {
        question: "Can I sue my landlord if mold made me sick?",
        answer:
          "Health-harm claims are possible but harder to prove than habitability claims. You generally need medical documentation and either an industrial-hygienist report or a doctor's opinion linking the symptoms to the exposure. The habitability claim — rent abatement, lease termination, repair costs, and (in some states) statutory damages — is usually the cleaner case to make. A local tenants' rights organization can help you assess whether a health-harm claim is realistic for your facts.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "pest-infestation-notice",
    category: "landlord",
    title: "Pest Infestation Notice to Landlord (Bed Bugs, Roaches, Rodents — Free Template)",
    metaDescription:
      "Pests in your rental? Free written notice citing your state's warranty of habitability + specific bed-bug ordinances in NYC, SF, Chicago.",
    lede:
      "Bed bugs, cockroaches, mice, rats — pests in a rental are a habitability violation in every state, and in NYC, SF, and Chicago there are specific bed-bug ordinances with hard deadlines. This letter triggers the clock.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Email copy also sent to [landlord email] for the record.)

Re: Formal Notice of Pest Infestation and Demand for Professional Extermination — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address under the lease dated [Lease Date]. I am writing to give you formal written notice — pursuant to the implied warranty of habitability and the specific pest-control provisions of [State / city] law (see, e.g., Cal. Civ. Code § 1941.1(a)(6); Tex. Prop. Code § 92.052; Fla. Stat. § 83.51(2)(a)(2); RCW 59.18.060(4); NYC Admin. Code §§ 27-2017 et seq. (Local Law 55); SF Health Code Art. 11A § 621; Chicago Mun. Code Ch. 7-28 Art. VIII) — of the following pest infestation in the unit:

  Pest type: [bed bugs / German cockroaches / mice / rats / other]
  Locations within the unit:
    • [e.g., "bedroom mattress seams"]
    • [e.g., "kitchen baseboard along east wall"]
    • [e.g., "shared wall with unit 3B"]
  First observed: [Date]
  Subsequent observations: [Dates]
  Evidence enclosed: [photos, video stills, exterminator reports, neighbor complaints, 311/HPD complaint numbers if filed]

Prior reports:
  • [Date — verbal/text/email — to whom]
  • [Date — same format]

I am requesting that you, within [city/state deadline — e.g., 10 days under Chicago Mun. Code Ch. 7-28 for bed bugs; 7 days under Tex. Prop. Code § 92.056(d); 30 days under Ohio Rev. Code § 5321.07; "reasonable time" otherwise]:

  1. Engage a licensed pest control operator or pest management professional (not a building employee with a can of pesticide) to inspect the unit and any adjacent units where the infestation is likely to have spread.

  2. Treat the unit using an integrated pest management approach consistent with [NYC Local Law 55 / SF Health Code § 621 / Chicago Bed Bug Ordinance / state pesticide rules].

  3. For bed bug or cockroach infestations in a multi-unit building: inspect and, if needed, treat the units directly above, below, and on each side of mine, as required by Chicago Mun. Code Ch. 7-28-840 and by sound pest-management practice everywhere else.

  4. Provide me with written documentation of (a) the pest control operator's findings, (b) the treatment plan and dates of service, (c) any follow-up treatments scheduled, and (d) any prep instructions I need to follow.

  5. If treatment will require me to vacate the unit temporarily, provide written notice consistent with my lease and applicable state law (Florida § 83.51(2)(b) allows up to 4 days vacate with rent abatement), and propose a plan for any alternative accommodation.

I am also putting on the record any state or city pre-lease disclosure rights I may have:
  • [California: bed-bug disclosure required at lease signing under Civ. Code § 1954.603]
  • [NYC: bed-bug history disclosure to incoming tenants under Admin. Code § 27-2018.1]
  • [San Francisco: 2-year bed-bug history disclosure required under Health Code Art. 11A]

If you do not respond in writing within [Number, commonly 5] days, or fail to address the infestation within the timeframe above, I intend to pursue the remedies available under [State / city] law, including filing a complaint with the local housing or health department, repair-and-deduct where authorized, rent withholding into escrow where the procedure exists, and termination of the lease for breach of the warranty of habitability. NYC HPD penalties for noncompliance with LL 55 can reach $10,000 per violation; Chicago Mun. Code Ch. 7-28 imposes fines of $300–$2,000 per day for bed-bug ordinance violations.

I would prefer to resolve this cooperatively and quickly. Please confirm receipt and a proposed schedule.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [photos, prior text/email reports, any exterminator estimates, city complaint numbers]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Texas Prop. Code § 92.056 explicitly rewards certified mail; everywhere else, the return receipt proves when the response clock started.",
      "Photograph live pests, droppings, and bite marks (if bed bugs). Dated, in-focus photos with a coin or ruler for scale are the most useful evidence — both for the landlord and for any later code-enforcement complaint or small-claims case.",
      "Demand a licensed exterminator, not a maintenance worker with a can of spray. NYC LL 55, SF Health Code, and Chicago Ch. 7-28 all require a licensed professional. Off-label pesticide use in a multi-unit building is also a federal FIFRA violation.",
      "If the infestation is bed bugs in a multi-unit building, demand treatment of adjacent units. Chicago Mun. Code 7-28-840 codifies this; in every other city it's standard pest-management practice and required for treatment to actually work.",
      "Don't refuse properly-noticed entry for the treatment itself. The state's notice-of-entry rules (24/48 hours in most states) apply; once notice is given, refusing access can shift the legal posture against you.",
    ],
    legalContext: [
      "Pest infestation is a breach of the implied warranty of habitability in every U.S. state. California names \"rodents and vermin\" directly in Civ. Code § 1941.1(a)(6); Texas Prop. Code § 92.052 explicitly lists \"roaches and rats\"; Florida Stat. § 83.51(2)(a)(2) requires landlords to make reasonable provisions for the extermination of rats, mice, roaches, ants, wood-destroying organisms, and bedbugs; Washington RCW 59.18.060(4) imposes a duty to control infestation in multi-family buildings. For HUD-assisted housing, 24 C.F.R. § 5.703(e)(1) classifies infestation as a prohibited health and safety hazard.",
      "Three large cities have layered specific bed-bug ordinances on top of the state warranty. New York City's Local Law 55 (the Asthma-Free Housing Act) applies to buildings with 3+ units, requires landlords to use integrated pest management (sealing cracks, repairing leaks, removing harborage before reaching for pesticides), and requires disclosure of any bed-bug history from the prior year. San Francisco's Health Code Article 11A § 621 requires landlords to notify tenants of confirmed bed-bug infestations within 48 hours and to disclose any infestation history from the prior two years before signing a lease. Chicago Municipal Code Ch. 7-28 Article VIII gives tenants 5 days to notify the landlord of a suspected bed-bug infestation and gives the landlord 10 days to engage a licensed pest management professional — with fines of $300–$2,000 per day for noncompliance.",
      "Tenant cause shifts cost in most jurisdictions. California Civ. Code § 1941.2, Texas Prop. Code § 92.052(b), Florida § 83.51, and Washington RCW 59.18.060(4) all carve out infestations the tenant caused — bringing in infested furniture, hoarding, sanitation failures. But the landlord generally has to prove cause; in multi-unit buildings, where pests spread through walls and pipes, the burden is meaningful. Bed bugs are treated specially in regulated cities (NYC, SF, Chicago) precisely because they hitchhike and adjacent-unit treatment is required regardless of suspected source.",
      "Tenants cannot self-help with off-label pesticides. FIFRA (7 U.S.C. § 136j(a)(2)(G)) makes it a federal offense to use a pesticide \"in a manner inconsistent with its labeling.\" Fogger \"bombs\" in multi-unit buildings, common-area pesticide application by anyone other than a certified applicator, and use of restricted-use products by non-applicators are all federal violations. The safe play is documented written notice plus the licensed-PCO demand — not DIY.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1941.1(a)(6) (rodents/vermin). Pre-lease bed-bug disclosure required (Civ. Code § 1954.603, eff. 7/1/2017). Inspection results must be reported to tenant within 2 business days (§ 1954.605).",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 92.052(a) (roaches/rats explicitly), 92.056 (notice procedure with 7-day presumption). Repair-and-deduct under § 92.0561 capped at one month's rent or $500.",
      },
      {
        state: "New York (NYC)",
        note: "NYC Admin. Code §§ 27-2017 et seq. (Local Law 55, Asthma-Free Housing Act). Buildings with 3+ units. Integrated pest management mandatory. Bed-bug history disclosure required at lease signing (Admin. Code § 27-2018.1). HPD penalties up to $10,000 per violation.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.51(2)(a)(2) — landlord must make \"reasonable provisions for the extermination of rats, mice, roaches, ants, wood-destroying organisms, and bedbugs\" in non-single-family/non-duplex rentals. Vacate for treatment limited to 4 days; rent abated.",
      },
      {
        state: "Illinois (Chicago)",
        note: "Chicago Mun. Code Ch. 7-28 Art. VIII. Tenant has 5 days to notify; landlord has 10 days to engage licensed Pest Management Professional. Must inspect/treat adjacent units. Fines $300–$2,000/day per violation.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.060(4) — landlord must provide reasonable infestation control program at start of tenancy and (in multi-family) control infestation during tenancy unless tenant-caused. RCW 59.18.070 — 10-day non-emergency response after written notice.",
      },
      {
        state: "California (San Francisco)",
        note: "SF Health Code Art. 11A § 621. 48-hour notification of confirmed bed-bug infestation. 2-year bed-bug history disclosure required pre-lease. Concealment is grounds for tenant lease termination.",
      },
      {
        state: "Ohio",
        note: "Ohio Rev. Code § 5321.04(A)(1)-(2) (health/building code compliance + safe and sanitary). 30 days for tenant to withhold or escrow rent under § 5321.07.",
      },
      {
        state: "Pennsylvania",
        note: "Common-law warranty (Pugh v. Holmes). Written notice + reasonable time required. Then: terminate, repair-and-deduct, or withhold rent into escrow.",
      },
    ],
    ifThisDoesntWork:
      "If your landlord ignores the letter or sends a maintenance worker with a can of bug spray, your next move is the local housing or health department. NYC: 311 and reference LL 55. Chicago: 311 and reference the Bed Bug Ordinance. SF: SF Department of Public Health. Most other cities have similar lines. For severe or repeat cases — especially bed bugs that spread through a building — contact a local tenants' rights organization; pest cases are sometimes taken on contingency when there are clear damages. If you have to throw out infested furniture or pay for treatment yourself, document everything; those costs are typically recoverable.",
    relatedSlugs: [
      "mold-notice",
      "repair-request-formal",
      "heat-utility-failure",
      "security-deposit-demand",
      "illegal-entry-cease-and-desist",
      "intent-to-vacate",
    ],
    faqs: [
      {
        question: "Can my landlord make me pay for bed bug extermination?",
        answer:
          "Usually no. In NYC (Local Law 55), San Francisco (Health Code § 621), and Chicago (Mun. Code Ch. 7-28), the landlord pays regardless of suspected source — bed bugs hitchhike and adjacent-unit treatment is required. In other states the landlord pays under the warranty of habitability unless they prove the tenant caused the infestation (e.g., by bringing in infested furniture). Washington RCW 59.18.060(4) is explicit about the tenant-cause exception.",
      },
      {
        question: "How long does my landlord have to act after I send written notice?",
        answer:
          "Chicago: 10 days for bed bugs under Mun. Code Ch. 7-28. Texas: 7 days presumed reasonable under Prop. Code § 92.056. Washington: 10 days for non-emergency repairs under RCW 59.18.070. Ohio: 30 days before withholding or escrow under § 5321.07. NYC and California use \"reasonable time\" with severe infestations shortening the window.",
      },
      {
        question: "Can I withhold rent if my landlord ignores the infestation?",
        answer:
          "Sometimes — but rarely safely without following your state's specific procedure. Ohio Rev. Code § 5321.07 and Washington RCW 59.18.115 require deposit into court escrow. Pennsylvania allows rent abatement after notice and reasonable time. Texas caps repair-and-deduct at one month or $500 under Prop. Code § 92.0561. Informal withholding without procedure is the most common way tenants lose otherwise winnable cases.",
      },
      {
        question: "Does my landlord have to disclose past bed-bug infestations before I sign?",
        answer:
          "In some places, yes. California (Civ. Code § 1954.603) requires pre-lease bed-bug disclosure. San Francisco (Health Code Art. 11A) requires disclosure of bed-bug history for the prior 2 years. NYC (Admin. Code § 27-2018.1) requires disclosure for the prior year. Outside those jurisdictions the statewide rule is usually silent — but active concealment is still misrepresentation.",
      },
      {
        question: "The landlord sent the super with a can of Raid. Is that enough?",
        answer:
          "No, in regulated cities. SF Health Code § 621 requires a licensed Pest Control Operator. Chicago Mun. Code Ch. 7-28 requires a Pest Management Professional. NYC LL 55 requires Integrated Pest Management — pesticides only after sealing entry points and removing harborage. Off-label pesticide use in a multi-unit building also violates federal FIFRA labeling rules.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "illegal-entry-cease-and-desist",
    category: "landlord",
    title: "Landlord Illegal Entry Cease-and-Desist Letter (Free Template + State Notice Rules)",
    metaDescription:
      "Landlord walking in unannounced? Free cease-and-desist letter citing your state's notice-of-entry statute, plus your remedies if it continues.",
    lede:
      "Your landlord — or their super, contractor, or realtor — keeps entering your unit without notice. This letter cites the state statute and demands a notice procedure going forward.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Email copy also sent to [landlord email] for the record.)

Re: Notice to Cease Unauthorized Entry — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address under the lease dated [Lease Date]. I am writing to give you formal written notice that the following entries into my unit have occurred without proper notice and without my consent:

  • [Date] — [Approximate time; who entered; what was disturbed; how you learned of the entry]
  • [Date] — [Same]
  • [Date] — [Same]

Under [State] law and the implied covenant of quiet enjoyment, I have a right to peaceful, exclusive possession of the unit during my tenancy. Except for genuine emergencies (fire, flooding, gas leak, imminent danger to persons or property, or a reasonable belief the unit has been abandoned), entry into my unit requires:

  1. Reasonable advance written notice — under [State] law, the requirement is [24 hours under Cal. Civ. Code § 1954; 24 hours under Ohio Rev. Code § 5321.04(A)(8); 24 hours actual notice under ORS 90.322; 2 days' written notice under RCW 59.18.150 (1 day for showings); 12 hours under Fla. Stat. § 83.53; common-law reasonableness in TX, PA, GA where no statute fixes a number].

  2. A legitimate purpose — repairs, inspections, agreed services, showings during a properly-noticed showing period, or compliance.

  3. Entry at reasonable hours — generally business hours unless I have agreed otherwise. Florida § 83.53 caps non-emergency entry between 7:30 a.m. and 8:00 p.m. Chicago RLTO § 5-12-050 caps it at 8:00 a.m.–8:00 p.m.

The entries above did not meet those requirements. I am formally requesting that you and anyone acting on your behalf — including but not limited to maintenance contractors, the building superintendent, realtors, prospective tenants, prospective buyers, photographers, and inspectors — cease entering the unit without proper notice and consent.

Going forward, please:

  • Provide written notice (email or text is fine) at least [24/48] hours in advance of any non-emergency entry, including the date, time window, person entering, and purpose.
  • Schedule entry at a mutually agreeable time where possible.
  • Limit entry to the purpose stated in the notice.
  • Confirm in writing each time the entry has been completed and the unit secured.

I would like to maintain a cooperative working relationship. I am not asking for anything beyond what state law and the lease already require.

If unauthorized entries continue after this letter, I will pursue the remedies available to me under [State] law, which include (depending on jurisdiction):
  • Statutory damages — up to $100 per violation in Washington (RCW 59.18.150); a minimum of one month's rent in Oregon (ORS 90.322); unlawful-exclusion damages of one month's rent + $1,000 + attorney's fees in Texas (Prop. Code § 92.0081); Chicago RLTO § 5-12-060 damages equal to the greater of one month's rent or twice actual damages; NYC harassment penalties of $2,000–$10,000 per offense (NYC Admin. Code § 27-2115).
  • Injunctive relief barring further entry without notice.
  • Reasonable attorney's fees where the statute provides (WA, OH, TX, OR).
  • Constructive eviction and lease termination if the conduct is sufficiently persistent and severe.

Please confirm receipt of this letter and your agreement to follow the entry-notice procedure going forward.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [photos, doorbell-camera stills, smart-lock logs, building-entry logs, prior text/email exchanges]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Email a copy too. The certified-mail tracking number is what establishes that the landlord received the cease-and-desist.",
      "Document every unauthorized entry as it happens. Doorbell cameras, hallway cameras, smart-lock logs, and dated photos of disturbed items are the most useful evidence. If you have a smart lock or building entry system, save the logs immediately — many systems purge them after 30 days.",
      "Don't change the locks unilaterally without checking your lease and state law. Most states require tenants to give the landlord a key to any new lock. Some leases prohibit re-keying entirely. Doing it wrong can convert your strong claim into a lease default.",
      "If the entries feel threatening — unannounced visits while you're asleep or alone, entries by someone you don't recognize, signs of items being moved — treat it as a safety issue first. Document with photos and video; file a police report to create a contemporaneous record even if no individual incident rises to a criminal charge.",
      "Keep paying rent and complying with the lease. Unauthorized entry is a violation of your rights but does not authorize you to stop paying without going through your state's specific procedure first.",
    ],
    legalContext: [
      "Almost every state's landlord-tenant law recognizes some version of the tenant's right to quiet enjoyment. In exchange for paying rent, the tenant gets peaceful and exclusive possession of the unit; the landlord retains only limited statutory rights to enter, governed by the lease and the state's notice statute. Most states require at least 24 hours' advance notice for non-emergency entry. Washington requires 2 days (1 for showings). Florida requires 12. Oregon, California, and Ohio all require 24. Texas, Pennsylvania, and Georgia have no statutory hour-fixed notice rule — but the lease usually requires it, and the common-law covenant of quiet enjoyment supplies a reasonableness baseline.",
      "Entry without notice is permitted only in true emergencies — fire, flood, gas leak, carbon-monoxide alarm, imminent danger, abandonment. The boundary is meaningful and routinely litigated. \"The contractor had a free hour\" is not an emergency. \"I was in the building\" is not an emergency. \"I needed to grab my own property I left here\" is not an emergency. The California, Florida, Ohio, and Oregon statutes all expressly tell landlords not to \"abuse the right of access nor use it to harass the tenant.\"",
      "Remedies for repeated unauthorized entry are real and statute-specific. Washington's RCW 59.18.150 provides up to $100 per violation plus prevailing-party costs and attorney's fees. Oregon's ORS 90.322 imposes actual damages with a statutory minimum equal to one month's rent and allows lease termination for repeated harassment. Texas Prop. Code § 92.0081 makes unlawful exclusion or lockout liable for one month's rent plus $1,000 plus actual damages plus attorney's fees. Chicago's RLTO § 5-12-060 awards the greater of one month's rent or twice actual damages. NYC's Admin. Code § 27-2115 imposes harassment civil penalties of $2,000–$10,000 per offense, and § 27-2005 codifies the harassment cause of action.",
      "The point of this letter is to convert an informal pattern into a documented written record. Many landlords stop the behavior the moment they receive a written cease-and-desist, because the next step is either a lawyer's letter, a code-enforcement complaint, or a small-claims filing. The letter is the inflection point — and the dated certified-mail receipt is the evidence.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1954. 24 hours' written notice presumed reasonable. Entry only at reasonable hours. Landlord \"may not abuse the right of access or use it to harass the tenant.\" No statutory dollar damages; common-law damages plus injunction available.",
      },
      {
        state: "Texas",
        note: "No statewide notice-of-entry statute — lease and common law govern. For unlawful exclusion or lockout: Tex. Prop. Code § 92.0081 awards one month's rent + $1,000 + actual damages + costs + reasonable attorney's fees.",
      },
      {
        state: "New York (NYC)",
        note: "Common-law quiet enjoyment + NYC Admin. Code § 27-2005 (harassment) + § 27-2004(a)(48) (harassment definition). 24-hour written notice is industry standard. NYC harassment civil penalties under § 27-2115: $2,000 for first violation, up to $10,000 per subsequent.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.53. 12 hours' notice for repairs. Entry only between 7:30 a.m. and 8:00 p.m. \"Landlord shall not abuse the right of access nor use it to harass the tenant.\" No statutory dollar damages; injunction and quiet-enjoyment damages.",
      },
      {
        state: "Illinois (Chicago)",
        note: "Chicago RLTO §§ 5-12-050, 5-12-060. 2 days' notice; entry 8 a.m.–8 p.m. only. Damages = greater of one month's rent or 2× actual damages, plus injunction or lease termination. Cook County RTLO mirrors this for suburban Cook.",
      },
      {
        state: "Ohio",
        note: "Ohio Rev. Code §§ 5321.04(A)(8), 5321.05. 24 hours' notice presumed reasonable; only at reasonable times. Tenant may obtain injunctive relief and recover actual damages + reasonable attorney's fees under § 5321.04(B).",
      },
      {
        state: "Washington",
        note: "RCW 59.18.150. 2 days' written notice (1 day for showings); notice must state exact time/date. Up to $100 per violation after written notice to landlord; prevailing party gets costs + attorney's fees.",
      },
      {
        state: "Oregon",
        note: "ORS 90.322. 24 hours' actual notice. Damages = actual + statutory minimum of one week's rent (weekly tenancy) or one month's rent (other); injunctive relief; lease termination for repeated harassment.",
      },
      {
        state: "Pennsylvania",
        note: "No statewide entry-notice statute. Common-law quiet enjoyment + lease entry clause control. Breach-of-covenant damages and injunction available.",
      },
      {
        state: "Georgia",
        note: "No statewide entry-notice statute. Common-law quiet enjoyment + lease control. Damages and injunction available.",
      },
    ],
    ifThisDoesntWork:
      "If unauthorized entries continue after the letter, your strongest next moves are (1) a complaint to local code enforcement or your city's housing department (NYC treats repeated unauthorized entry as harassment under Admin. Code § 27-2005), (2) a small claims or housing court filing seeking statutory damages and an injunction, and (3) for a pattern of intimidation, a police report documenting the conduct. For severe or repeat cases, contact a local tenants' rights organization — quiet-enjoyment cases are sometimes taken on contingency where statutory damages and attorney's fees are available (WA, OH, TX, OR, Chicago RLTO).",
    relatedSlugs: [
      "repair-request-formal",
      "security-deposit-demand",
      "intent-to-vacate",
      "mold-notice",
      "late-fee-waiver-request",
      "heat-utility-failure",
    ],
    faqs: [
      {
        question: "How much notice does my landlord have to give before entering?",
        answer:
          "Varies by state. Most common: 24 hours of advance written notice for non-emergency entry, during reasonable hours. Washington requires 2 days (1 for showings). Oregon, California, and Ohio require 24 hours. Florida requires 12. Texas, Pennsylvania, and Georgia have no statewide statute — the lease and common-law reasonableness govern.",
      },
      {
        question: "Can I change the locks if my landlord keeps entering without notice?",
        answer:
          "In some states yes, in others no — and most leases prohibit it. Even where it's allowed, you almost always have to give the landlord a key to the new lock. Check your lease first and verify state law before acting. Changing locks without authorization can convert your strong claim into a lease default.",
      },
      {
        question: "What counts as an emergency that lets my landlord enter without notice?",
        answer:
          "Genuine, immediate threats: fire, flood, gas leak, carbon-monoxide alarm, a credible belief the unit has been abandoned, or imminent danger to a person inside. \"The contractor had a free hour\" and \"I was in the neighborhood\" are not emergencies. The California, Florida, Ohio, and Oregon statutes explicitly warn landlords not to abuse the access right or use it to harass.",
      },
      {
        question: "What if my landlord enters while I'm not home?",
        answer:
          "An entry without proper notice is unlawful whether you're home or not. Document what you can — doorbell or hallway camera footage, smart-lock logs, disturbed items — and put the pattern in writing. The fact that the landlord entered while you were out is itself part of why the notice rule exists.",
      },
      {
        question: "Can I sue my landlord for entering without permission?",
        answer:
          "Yes, in most states. Statutory damages range from $100 per violation (Washington) to one month's rent (Oregon, Chicago) to one month's rent + $1,000 + attorney's fees (Texas for unlawful exclusion). NYC's harassment penalties run $2,000–$10,000 per offense. Repeated entries can in some states support termination of the lease without penalty under a constructive-eviction theory.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "late-fee-waiver-request",
    category: "landlord",
    title: "Late Fee Waiver Request Letter to Landlord (Free Template)",
    metaDescription:
      "Need a one-time late fee waived? Free template letter that combines hardship explanation, on-time history, and a quiet statutory backstop.",
    lede:
      "You paid rent late once. The late fee is hurting. This letter asks your landlord — politely, with a paper trail — to waive it. If they refuse, the same letter quietly notes that the fee may be unenforceable under your state's late-fee cap.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via email and certified mail

Re: Request for One-Time Waiver of Late Fee — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address. I am writing to acknowledge that my rent for [Month, Year] was paid late, by [Number of Days] days, and to request a one-time waiver of the resulting late fee of $[Late Fee Amount].

The reason for the late payment was [verifiable hardship — e.g., "an unexpected medical bill that diverted funds before my regular pay deposit," "a delayed paycheck due to a payroll-system change at my employer," "an emergency family expense"]. I have since paid the rent in full as of [Date], and I have set up [auto-pay / a calendar reminder / a payroll deduction] to make sure this does not happen again.

For context on my tenancy:
  • I have rented this unit since [Move-In Date].
  • Before this month, every rent payment has been on time. [Or: I have been late only [Number] time(s) in [Number of Years/Months] of tenancy.]
  • I have caused no damage to the unit and have been current on all other lease obligations.

I would much rather resolve this informally and continue as a reliable tenant. A one-time waiver of the $[Amount] late fee would let me close out [Month] cleanly.

[Use the next paragraph only if your lease's late fee exceeds your state's statutory cap or fails the reasonableness test. Strike if not applicable.]

I would also note — without making it the basis of this request — that the late fee assessed under our lease appears to exceed the cap under [State] law. [Examples: "New York Real Property Law § 238-a(2) caps residential late fees at the lesser of $50 or 5% of monthly rent, after a mandatory 5-day grace period." / "Maryland Real Property § 8-208(d)(3) caps late fees at 5% of the unpaid balance (per HB 273, effective October 1, 2025)." / "North Carolina G.S. § 42-46 caps late fees at the greater of $15 or 5% of monthly rent." / "Massachusetts G.L. c. 186 § 15B(1)(c) bars any late fee until rent is 30 full days past due." / "California Civ. Code § 1671(d) requires late fees to be a reasonable estimate of actual damages; courts have struck flat fees significantly smaller than this one (Orozco v. Casimiro, 2004)."] I'd much rather resolve this with a simple waiver than litigate the enforceability of the fee.

Please confirm in writing within [7] days that the $[Amount] late fee has been waived and that no past-due balance will remain on my account. If you'd prefer to discuss, my phone and email are above.

Thank you for your time.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    howToUse: [
      "Lead with the goodwill ask, not the statute. The single biggest factor in getting a waiver is being a reliable, low-friction tenant who's reaching out professionally about a one-time problem. Landlords waive routinely when asked once.",
      "Send by email first (most landlords respond to email) with a certified-mail copy as backup. The certified mail matters mostly as evidence later if the landlord refuses and the fee turns out to be unenforceable.",
      "Be honest and specific about the hardship — medical bill, payroll delay, family emergency. Vague \"things were tight\" requests work less often than concrete explanations.",
      "Include the statutory backstop paragraph only if your lease's late fee actually exceeds your state's cap. NY caps at $50 or 5%; MD at 5%; NC at $15 or 5%; MA prohibits any fee in the first 30 days; CA uses a reasonableness test under Civ. Code § 1671(d). If your fee is within the cap, leave the paragraph out — including it when it doesn't apply weakens the request.",
      "Don't make this a recurring ask. The letter works because it's a one-time waiver request from a reliable tenant. Repeated waiver requests stop being goodwill and start being a pattern the landlord pushes back on.",
    ],
    legalContext: [
      "Residential late fees are treated as liquidated damages — they're supposed to reasonably approximate the landlord's actual cost of dealing with a late payment, not act as a penalty. Some states cap them by specific statute; others cap them through a common-law reasonableness test under contract law; many leases set fees that exceed either standard and are technically unenforceable.",
      "The hard-cap states are the strongest leverage. New York Real Property Law § 238-a(2), enacted as part of the 2019 Housing Stability and Tenant Protection Act, caps residential late fees at the lesser of $50 or 5% of monthly rent and requires a 5-day grace period. New York treats late fees as not being \"rent\" — so they cannot support a nonpayment eviction. Maryland Real Property § 8-208(d)(3), updated by HB 273 effective October 1, 2025, caps late fees at 5% of the unpaid balance (not the full rent). North Carolina G.S. § 42-46 caps at the greater of $15 or 5% of monthly rent, with a 5-day grace. Massachusetts G.L. c. 186 § 15B(1)(c) bars any late fee at all until rent is 30 full days past due — the longest grace period in the country. Oregon ORS 90.260 limits fees to reasonable flat amounts or 5% of periodic rent per 5-day period. Colorado SB 173 (2024) caps fees at the lesser of $50 or 5% and bars eviction for unpaid late fees alone.",
      "California, Massachusetts, New Jersey, and Washington use a common-law reasonableness test. California's Civ. Code § 1671(d) requires late fees to be a reasonable estimate of actual damages, and Orozco v. Casimiro (2004) confirmed the landlord bears the burden of proving validity. Flat fees on the order of 5%–10% of monthly rent have been struck as unenforceable penalties when not tied to actual cost. Civ. Code § 3302 sets statutory delay damages at 10% annual interest — about $0.27 per day on $1,000 of unpaid rent — making most lease fees difficult to justify on a true-cost theory.",
      "The practical impact of the cap or reasonableness test isn't that tenants typically sue over a $50 late fee. It's that landlords (and especially professional property managers) know they're vulnerable on the issue and tend to waive a first-time fee once asked in writing. Tenant turnover costs typically run $2,500–$5,000 per unit; the marginal value of holding a reliable tenant is much larger than the marginal value of the fee. A polite, well-framed letter usually gets a yes — and the statutory backstop paragraph quietly raises the cost of refusing.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1671(d) — must be reasonable estimate of actual damages; flat fees frequently struck as penalties (Orozco v. Casimiro, 2004). Civ. Code § 3302 deems landlord's delay damages = unpaid rent + 10% annual interest. No fixed cap.",
      },
      {
        state: "New York",
        note: "Real Property Law § 238-a(2) (HSTPA 2019) — lesser of $50 or 5% of monthly rent. 5-day grace period mandatory. Late fees are not \"rent\" and cannot support a nonpayment eviction.",
      },
      {
        state: "Maryland",
        note: "Real Property § 8-208(d)(3) — 5% of the unpaid balance (per HB 273, eff. Oct 1, 2025), not the full monthly rent. Lease provision exceeding the cap is prohibited; tenant can recover actual damages + attorney's fees.",
      },
      {
        state: "Massachusetts",
        note: "G.L. c. 186 § 15B(1)(c) — no late fee may be imposed unless rent is 30 full days past due. Longest grace period in the country; most MA leases violate it.",
      },
      {
        state: "North Carolina",
        note: "N.C.G.S. § 42-46(a) — greater of $15 or 5% of monthly rent; 5-day calendar grace; one fee per late payment.",
      },
      {
        state: "Oregon",
        note: "ORS 90.260 — three permitted structures: reasonable flat fee customary in market; per-day fee capped at 6% of the reasonable flat amount; or 5% of periodic rent per 5-day period. 4-day grace.",
      },
      {
        state: "Colorado",
        note: "SB 173 (2024) — lesser of $50 or 5% of monthly rent; 7-day grace; prohibits eviction for unpaid late fees alone.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.170 — must be written into the rental agreement and reasonable. No statewide cap. Local: Seattle ~$10/month cap; Bellingham (eff. Aug 1, 2025) 2% cap on new leases.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord refuses the waiver and your fee actually exceeds the state cap or the reasonableness test, your options scale with the dollar amount. For a single $50–$150 fee, the most practical move is to pay it and move on, or to file a small-claims action seeking the fee back plus court costs (filing fees usually $30–$80, no lawyer needed). For chronic over-cap fees across multiple months, a state attorney-general complaint or a tenants' rights organization referral is worth the time. In Maryland (Real Prop. § 8-208) and a few other states, statutory damages plus attorney's fees are available for unenforceable late-fee provisions. The biggest leverage of a well-framed letter is that it almost never reaches small claims — the landlord waives once asked.",
    relatedSlugs: [
      "repair-request-formal",
      "security-deposit-demand",
      "intent-to-vacate",
      "deposit-itemization-request",
      "illegal-entry-cease-and-desist",
      "subscription-cancellation",
    ],
    faqs: [
      {
        question: "Can my landlord charge a late fee on day 1 in New York?",
        answer:
          "No. Real Property Law § 238-a(2) requires a 5-day grace period and caps the fee at $50 or 5% of monthly rent, whichever is less. New York also treats late fees as not being \"rent\" — so the landlord cannot use a missed late fee to start an eviction.",
      },
      {
        question: "My California lease says $100 late fee on $1,500 rent — is that enforceable?",
        answer:
          "Likely no. Under Civ. Code § 1671(d) and Orozco v. Casimiro (2004), a late fee is void unless the landlord can prove it's a reasonable estimate of actual damages. About 6.7% of rent is well above the ~$0.27/day deemed-loss under Civ. Code § 3302. The landlord bears the burden of proof.",
      },
      {
        question: "Maryland charged me a $50 late fee on $1,000 rent when I paid $800 on time — legal?",
        answer:
          "No. Effective Oct 1, 2025 (HB 273), the 5% cap applies to the unpaid balance, not the full rent. Max fee here would be $10 (5% of the $200 unpaid). Recovery: actual damages plus attorney's fees under Real Property § 8-208.",
      },
      {
        question: "My Massachusetts landlord charged me a late fee on day 6 — allowed?",
        answer:
          "No. G.L. c. 186 § 15B forbids any late fee until rent is 30 full days past due. This is the strictest grace-period rule in the country; most Massachusetts leases include late fees that violate it.",
      },
      {
        question: "Will the landlord actually waive the fee just because I ask nicely?",
        answer:
          "Surprisingly often, yes. Tenant turnover costs run thousands of dollars; a reliable on-time tenant is worth far more to a landlord than a $50–$150 late fee. The professional, written request is what changes the answer — most tenants never ask, so the ones who do tend to get a yes.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "move-out-walkthrough-request",
    category: "landlord",
    title: "Move-Out Walkthrough Request Letter to Landlord (Free Template)",
    metaDescription:
      "Request a pre-move-out inspection to protect your security deposit. Free template citing CA Civ. Code § 1950.5(f) and NY's new Nov 2025 statute.",
    lede:
      "You're moving out. A documented walk-through with the landlord before you hand over the keys is the single most effective way to protect your security deposit. This letter asks for one — and if you're in California or New York, it invokes a statutory right to one.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via email (and certified mail copy)

Re: Request for Pre-Move-Out Inspection / Initial Inspection — [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address. My lease ends on [Lease End Date], and I will be vacating on [Planned Move-Out Date].

I am requesting a pre-move-out inspection (also called an initial inspection) of the unit, to be conducted between 7 and 14 days before move-out, so that any issues you would deduct from my security deposit can be identified now and given the chance to be remedied before I hand over the keys.

[Choose the section that applies to your state and delete the others.]

[CALIFORNIA] I am exercising my right to an initial inspection under California Civil Code § 1950.5(f). Please notify me in writing of (a) the proposed date and time of the inspection, on at least 48 hours' advance written notice, and (b) my right to be present at the inspection. Per § 1950.5(f)(2), please provide an itemized statement specifying any proposed repairs or cleanings that would be deducted from my deposit, accompanied by the text of § 1950.5(b)(1)–(4). Per § 1950.5(f)(3), I will have the period between the initial inspection and the end of my tenancy to remedy any identified deficiencies in order to avoid the deductions.

[NEW YORK — effective Nov 15, 2025] I am exercising my right to a pre-move-out inspection under N.Y. General Obligations Law § 7-108 (and § 7-107 if my unit is rent-stabilized). Please notify me in writing of the proposed date and time of the inspection, on at least 48 hours' advance notice. The inspection must occur no earlier than two weeks and no later than one week before the end of my tenancy. I am entitled to an itemized statement of any proposed deductions and an opportunity to cure before move-out.

[ALL OTHER STATES — no statutory right; cooperative request] My state does not codify a tenant's right to a pre-move-out inspection, but a documented walk-through serves both of us by reducing the likelihood of a post-move-out deposit dispute. I am requesting one as a matter of cooperation and good record-keeping. I would like the walk-through to be conducted [7-14] days before move-out, with a written list of any conditions you would deduct from the deposit, so I can address them before I hand over the keys.

I propose the following dates, all between 7 and 14 days before my planned move-out date:
  • [Date / time #1]
  • [Date / time #2]
  • [Date / time #3]

Please confirm which works for you.

I have dated move-in photographs and the move-in inspection report from [Move-In Date] on file and will bring copies to the walk-through. I will be present; I may bring a witness.

Nothing in this request waives any right I have under [State] law to dispute deductions, recover the deposit, or pursue any statutory remedies. I am requesting a cooperative, documented walk-through; that's all.

Please reply in writing within [5] business days so we can schedule.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copies of dated move-in photos; move-in inspection report; lease]`,
    howToUse: [
      "Send 3–4 weeks before your planned move-out date. California and New York both require the inspection to happen between 2 weeks and 1 week before move-out, so a letter sent the day before doesn't leave time. Earlier is better.",
      "Send by email first — most landlords respond to email. Follow up with a certified-mail copy if you don't get a written reply within a few business days.",
      "Bring your dated move-in photos to the walk-through. The whole point of the inspection is to compare current condition to documented move-in condition. If you don't have move-in photos, take detailed photos now and compare to the lease's move-in checklist if there was one.",
      "Be present at the inspection. Don't let it happen without you. Bring a witness if possible. Bring a notebook. Get the list of identified items in writing before you leave the walk-through.",
      "Use the time between the inspection and move-out to actually cure the identified items. The whole legal advantage of a pre-inspection is the right to fix items before they become deposit deductions. Document the cures with new photos.",
    ],
    legalContext: [
      "California is the gold-standard for tenant pre-move-out inspection rights. Civil Code § 1950.5(f), enacted by SB 1403 in 2003, requires the landlord — once either party has notified the other of intent to terminate the tenancy — to notify the tenant in writing of the right to request an initial inspection and of the right to be present. The inspection cannot happen earlier than two weeks before the end of tenancy. The landlord must give 48 hours' advance written notice. After the inspection, the landlord must provide an itemized statement of any proposed deductions accompanied by the text of § 1950.5(b)(1)–(4). The tenant then has the remaining tenancy period to remedy any deficiencies — meaning items identified at the inspection are not deductible if the tenant fixes them before move-out.",
      "New York added a parallel right effective November 15, 2025, codified at General Obligations Law § 7-108 for non-rent-stabilized units and § 7-107 for rent-stabilized units. The framework mirrors California's: inspection no earlier than 2 weeks and no later than 1 week before end of tenancy, 48 hours' advance written notice, itemized statement of proposed deductions, opportunity to cure. This is one of the freshest pieces of tenant-protection law in the country and is worth flagging directly in any letter sent in New York after that date.",
      "A handful of other states give partial versions of the right. Arizona Revised Statutes § 33-1321 gives the tenant the right to be notified of and present at the move-out inspection upon request. Virginia Code § 55.1-1226 requires the landlord, after notice to vacate, to inform the tenant of the right to be present at the inspection. Montgomery County, Maryland, requires an inspection within 5 days of intended move-out if requested by certified mail at least 15 days before. Outside those jurisdictions, there is no statutory right — but landlords often agree when asked in writing, because they too benefit from reducing post-move-out disputes.",
      "Even where the statute doesn't help, the letter does. Pre-move-out walkthroughs reduce later disputes by converting an ambiguous post-move-out condition into a documented snapshot. A landlord who skips a written walk-through request and then itemizes surprise deductions looks unreasonable to a small-claims judge. And in California, Texas, Massachusetts, and several other states, courts hold landlords to their burden of proof on deposit deductions — so a documented pre-inspection (even an informal one) shifts the evidentiary balance toward the tenant.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1950.5(f). Tenant has the right to an initial inspection upon request. Inspection no earlier than 2 weeks before end of tenancy; 48 hours' advance written notice; itemized statement of proposed deductions; tenant's right to cure before move-out.",
      },
      {
        state: "New York (NEW Nov 2025)",
        note: "N.Y. Gen. Oblig. Law § 7-108 (non-rent-stabilized) and § 7-107 (rent-stabilized), effective Nov 15, 2025. Right to a pre-move-out inspection; 48 hours' advance notice; inspection between 2 weeks and 1 week before end of tenancy.",
      },
      {
        state: "Arizona",
        note: "A.R.S. § 33-1321. Tenant has the right to be notified of and present at the move-out inspection upon request.",
      },
      {
        state: "Virginia",
        note: "Va. Code § 55.1-1226. After notice to vacate, landlord must inform tenant of right to be present at the inspection.",
      },
      {
        state: "Maryland (Montgomery County)",
        note: "Inspection within 5 days of intended move-out if requested by certified mail at least 15 days before. County rule, not statewide.",
      },
      {
        state: "Texas",
        note: "No statute. Texas Law Help and TX AG recommend tenants request a joint walkthrough and a written, signed list of damages.",
      },
      {
        state: "Florida",
        note: "No statute. Florida law focuses on the landlord's 30-day post-move-out written notice of claim against deposit (Fla. Stat. § 83.49).",
      },
      {
        state: "Illinois",
        note: "No statewide statute. 765 ILCS 710 governs deposit return; no pre-move-out inspection right. Cooperative request is still useful.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores or refuses the inspection request in California or New York, that itself becomes evidence in a later security-deposit dispute — both states' statutes weight against landlords who skipped the inspection process. Outside those states, document the request and the refusal in writing; a small-claims judge looking at post-move-out deductions will give a lot of weight to a tenant who tried to do a documented walk-through and a landlord who refused. As a backup, do your own move-out walk-through with a witness and video, time-stamped, the day you hand over the keys.",
    relatedSlugs: [
      "security-deposit-demand",
      "deposit-itemization-request",
      "intent-to-vacate",
      "repair-request-formal",
      "mold-notice",
      "late-fee-waiver-request",
    ],
    faqs: [
      {
        question: "Does my landlord have to do a pre-move-out inspection?",
        answer:
          "Only in California (Civ. Code § 1950.5(f)) and New York (Gen. Oblig. Law § 7-107 / § 7-108, effective Nov 15, 2025) — and only if you request it. Most other states don't require one, but landlords commonly agree because the inspection reduces post-move-out disputes.",
      },
      {
        question: "How far in advance should I ask?",
        answer:
          "Three to four weeks before your move-out date. In California and New York the inspection itself can't happen earlier than two weeks before move-out, and the landlord needs 48 hours' written notice to schedule. A letter sent at the last minute doesn't leave time for either the inspection or any cures.",
      },
      {
        question: "Can the landlord still deduct for things they didn't flag at the inspection?",
        answer:
          "Yes — for damage that occurs after the inspection, or that wasn't reasonably discoverable then, or that the tenant didn't disclose. Cal. Civ. Code § 1950.5(f)(2)–(3) is explicit. But items the landlord saw and didn't flag generally cannot be deducted.",
      },
      {
        question: "What counts as normal wear and tear I can't be charged for?",
        answer:
          "Faded paint, slightly worn carpet from foot traffic, small nail holes from picture hangers, scuffs from ordinary use. Landlords may deduct only for actual damage beyond ordinary wear and tear. Where the landlord replaces an item, the deduction must be prorated by the item's remaining useful life — a 7-year-old carpet with a 3-year remaining life can be charged for only 3 years, not full replacement.",
      },
      {
        question: "Does the request have to be in writing?",
        answer:
          "California Civ. Code § 1950.5(f) does not explicitly require writing, but written form is what makes the request usable later. Outside California and New York, written form is what gives the request any weight at all. Certified mail or email-with-read-receipt is the safest play.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "deposit-itemization-request",
    category: "landlord",
    title: "Security Deposit Itemization Request Letter (Free Template + State Rules)",
    metaDescription:
      "Got a vague deposit deduction statement? Free letter demanding the receipts, photos, and documentation your state's statute already requires.",
    lede:
      "Your landlord sent back part of your security deposit with a list of vague deductions and no receipts. Your state statute usually requires more — receipts, photos, sworn statements, proration. This letter demands them.",
    body: `[Your Full Name]
[Your Current Forwarding Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Email copy also sent to [landlord email] for the record.)

Re: Request for Compliant Itemization of Security Deposit Deductions — [Former Rental Address]

Dear [Landlord's Name]:

I rented the property at [Former Rental Address] from [Move-In Date] to [Move-Out Date]. My security deposit was $[Original Deposit Amount]. I surrendered possession on [Move-Out Date] and provided my forwarding address on [Date Forwarding Address Provided].

I have received your itemized statement dated [Statement Date] proposing to retain $[Amount Retained] from my deposit and returning $[Amount Returned]. The statement is non-compliant with [State] law for the reasons set out below, and I am requesting that you cure the deficiencies within [10–14] days.

Specific objections:

  Line item: "[Item from statement]"
    Charge: $[Amount]
    Defect in itemization:
    [Pick one or more, deleting the rest:]
      • No paid invoice or receipt provided, in violation of [Cal. Civ. Code § 1950.5(g)(2) (receipts required for deductions over $125); Mass. G.L. c. 186 § 15B(4) (sworn itemized list with written evidence of cost); RCW 59.18.280 (copies of estimates or invoices required to substantiate damage); 765 ILCS 710/1 (paid receipts must accompany itemized statement)].
      • No proration applied for an item beyond its remaining useful life. [If applicable: carpet useful life is generally 5–10 years; flat paint 2–3 years. The landlord may only recover the unused portion.]
      • Charge for normal wear and tear, which is not deductible in any state. [Brief description of why this is wear and tear.]
      • [California only] No move-in, move-out, or after-repair photos provided, in violation of Civ. Code § 1950.5(f)(3) as amended by AB 2801 (phased Apr 1, 2025 – Apr 1, 2026).
      • Vague description; landlord did not identify what was repaired, how, or by whom. Texas Prop. Code § 92.104 requires specific itemization, not generic categories.
      • [Florida only] Statement was not delivered by certified mail to my last known address within 30 days of move-out as required by Fla. Stat. § 83.49(3)(a).

  Line item: "[Next item from statement]" — repeat as needed.

I am demanding within [10–14] days of the date of this letter:

  1. Paid invoices, receipts, or written estimates for each line item, as required by the statute cited above.

  2. For any landlord-performed work: a written description of the work, time spent, and hourly rate (required in California under Civ. Code § 1950.5(g)(2)(B)).

  3. Proration of any item past useful life, recalculated against remaining useful life rather than replacement cost.

  4. Removal of any line item that is wear and tear, or that is not supported by the statutory documentation.

  5. [California only] Date-stamped move-in, move-out, and after-repair photos as required by Civ. Code § 1950.5(f)(3).

  6. [Massachusetts only] A sworn itemized list under pains and penalties of perjury as required by G.L. c. 186 § 15B(6).

If you fail to provide a compliant itemization within [10–14] days, I intend to treat the retention as bad-faith and pursue all remedies available under [State] law, which include:

  • [California] Up to 2× the deposit in statutory damages under Civ. Code § 1950.5(l), plus actual damages.
  • [Texas] $100 + 3× the wrongfully withheld amount + reasonable attorney's fees under Prop. Code § 92.109.
  • [New York] Forfeiture of any right to retain; punitive damages up to 2× the deposit for willful violations under Gen. Oblig. Law § 7-108.
  • [Florida] Forfeiture of the right to impose a claim under Fla. Stat. § 83.49(3)(a); prevailing-party attorney's fees.
  • [Illinois] 2× the deposit + court costs + attorney's fees under 765 ILCS 710/1(c).
  • [Massachusetts] 3× the deposit + 5% interest + court costs + reasonable attorney's fees under G.L. c. 186 § 15B(7).
  • [Washington] Up to 2× the deposit for intentional refusal + prevailing-party attorney's fees under RCW 59.18.280.
  • [Georgia] 3× the wrongfully withheld amount + reasonable attorney's fees under O.C.G.A. § 44-7-35.

I would prefer to resolve this without litigation. Please send the additional documentation by the deadline above to the contact information above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of the itemized statement received; copy of lease; copy of move-in inspection; dated move-out photos; copy of forwarding-address proof]`,
    howToUse: [
      "Send within a few days of receiving the itemized statement. Some statutes (Florida § 83.49(3)(a)) give tenants a 15-day window to object in writing; missing it can waive certain rights. Faster is better.",
      "Send by certified mail with return receipt requested. Florida's statute uses certified mail as the default delivery channel for both parties; everywhere else, the certified-mail receipt is what proves the date your demand was received and what starts any subsequent damages clock.",
      "Attach a copy of the landlord's itemized statement — not the original. Circle or highlight the line items you're objecting to. Visual identification of the disputed items is the single most useful attachment.",
      "Distinguish this letter from the broader security-deposit demand letter. This one is for when you received a statement that's inadequate; the deposit-demand letter is for when no statement arrived. Both letters can lead to bad-faith damages if the landlord doesn't respond.",
      "Document your own move-out condition. Pre-move-out walk-through results, dated move-out photos, and any post-move-out video are the evidence that converts an inadequate landlord statement into a bad-faith retention claim.",
    ],
    legalContext: [
      "Most state security-deposit statutes require not just an itemized statement of deductions but specific documentation supporting each deduction. California Civ. Code § 1950.5(g) requires receipts or invoices for any deduction over $125, plus — for landlord-performed work — a written description of the work, time spent, and hourly rate. AB 2801, phasing in through 2025 and 2026, layers on a photo requirement: date-stamped move-in (for tenancies starting on or after July 1, 2025), move-out (effective April 1, 2025), and after-repair photos must accompany the statement. Massachusetts G.L. c. 186 § 15B(4) requires a sworn itemized list under pains and penalties of perjury, with written evidence of cost. Washington RCW 59.18.280 requires copies of estimates received or invoices paid; charges not substantiated cannot be charged, sent to collections, or reported to tenant-screening agencies. Illinois 765 ILCS 710/1 requires paid receipts (or estimates followed by paid receipts within 30 days).",
      "These documentation requirements are the heart of the bad-faith-retention case. A landlord who sends a statement with vague line items and no receipts is essentially conceding the documentation prong; the demand letter just makes that concession explicit and creates the record for a small-claims judge or a tenant attorney to point to later. In states with multiplier damages (CA up to 2×, TX 3×, MA 3×, IL 2×, GA 3×), the multiplier turns a $500 deposit fight into a $1,000–$1,500 recovery plus attorney's fees — often more than enough to justify a small-claims filing.",
      "Wear-and-tear remains non-deductible everywhere. Worn carpet from foot traffic, faded paint, small nail holes, minor scuffs — these are wear and tear regardless of how the landlord characterizes them. Items past their useful life must be prorated; a 7-year-old carpet on a 10-year useful life can be deducted only at 30% of replacement cost. Texas Prop. Code § 92.104 codifies the wear-and-tear definition directly: deterioration from intended use of the dwelling, including breakage from age — not negligence, carelessness, accident, or abuse.",
      "Florida sits in a different posture. Fla. Stat. § 83.49 requires the landlord to send a \"Notice of Intention to Impose Claim on Security Deposit\" by certified mail within 30 days of move-out, in statutorily prescribed form. The tenant has 15 days from receipt to object in writing — and that 15-day objection is what preserves the tenant's rights. If the landlord misses the 30-day notice deadline, they forfeit the right to claim entirely. Florida does not explicitly require receipts in the statute, so the demand letter there leans more on the common-law accounting demand than on a statutory documentation right.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Civ. Code § 1950.5(g) — receipts required for deductions over $125. Landlord-performed work: written description, hours, hourly rate. AB 2801 photo requirements phase in Apr 1, 2025 (move-out + after-repair) and Jul 1, 2025 (move-in for new tenancies). Bad-faith retention: up to 2× the deposit + actual damages under § 1950.5(l).",
      },
      {
        state: "Texas",
        note: "Prop. Code § 92.104 — written description and itemized list required within 30 days of surrender. Vague entries insufficient. § 92.109 — bad-faith retention exposes landlord to $100 + 3× wrongfully withheld amount + reasonable attorney's fees.",
      },
      {
        state: "New York",
        note: "Gen. Oblig. Law § 7-108(1-a)(e),(g) — itemized statement within 14 days; failure forfeits right to retain. Burden of proof on landlord. Willful violation: punitive damages up to 2× the deposit.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.49(3)(a). 30 days to send \"Notice of Intention to Impose Claim on Security Deposit\" by certified mail in statutory form. Tenant has 15 days to object in writing. Failure forfeits landlord's right to claim. Prevailing-party attorney's fees.",
      },
      {
        state: "Illinois",
        note: "765 ILCS 710/1. Applies to buildings with 5+ units. 30 days for itemized statement with paid receipts (or 30 more days for paid receipts after estimates). Refusal to provide compliant statement: 2× the deposit + court costs + attorney's fees.",
      },
      {
        state: "Massachusetts",
        note: "G.L. c. 186 § 15B(4),(6),(7). Sworn itemized list under pains and penalties of perjury with written evidence of cost. Within 30 days of end of tenancy. Violation forfeits the deposit; willful retention: 3× the deposit + 5% interest + costs + reasonable attorney's fees.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.280. Full and specific statement within 30 days, including copies of estimates received or invoices paid. Undocumented charges cannot be charged, sent to collections, or reported to tenant-screening agencies. Intentional refusal: up to 2× the deposit + prevailing-party fees.",
      },
      {
        state: "Georgia",
        note: "O.C.G.A. §§ 44-7-33, 44-7-34, 44-7-35. Applies to landlords owning 10+ units or using management agents. 30 days. Bad-faith: 3× the wrongfully withheld amount + reasonable attorney's fees.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the demand for documentation or replies with another non-compliant statement, your next step in most states is small claims court. Bring the certified-mail receipt for this letter, the original deposit, the inadequate itemized statement, your move-in and move-out photos, and the lease. Most state statutes shift the burden of proof to the landlord on disputed deductions — meaning the landlord must produce the receipts and documentation they should have included in the first place. States with multiplier damages (CA, TX, MA, IL, GA) and attorney-fee provisions often turn small claims filings into very economical actions, sometimes covered on contingency by local tenants' rights organizations.",
    relatedSlugs: [
      "security-deposit-demand",
      "move-out-walkthrough-request",
      "intent-to-vacate",
      "repair-request-formal",
      "mold-notice",
      "illegal-entry-cease-and-desist",
    ],
    faqs: [
      {
        question: "My landlord sent a statement but no receipts. Can they keep my deposit?",
        answer:
          "In California (Civ. Code § 1950.5(g)(2)), deductions over $125 require receipts or invoices. Illinois (765 ILCS 710/1), Massachusetts (G.L. c. 186 § 15B), Washington (RCW 59.18.280), and New York (Gen. Oblig. Law § 7-108) all require supporting documentation. Failure typically forfeits the right to retain the unsupported portion.",
      },
      {
        question: "Can the landlord charge me for new carpet after I lived there 7 years?",
        answer:
          "No, not at full replacement cost. Carpet's accepted useful life is generally 5–10 years (California guidance suggests up to 10). The landlord can only recover the unused portion — for a 7-year-old carpet on a 10-year useful life, that's roughly 30% of replacement cost, not 100%.",
      },
      {
        question: "Does California now require move-out photos?",
        answer:
          "Yes. AB 2801 amended Civ. Code § 1950.5(f)(3) to require date-stamped photos: move-out and after-repair effective April 1, 2025; move-in photos for tenancies starting on or after July 1, 2025. The photos must accompany the itemized statement. Failure forfeits deposit-claim rights for items that should have been photographed.",
      },
      {
        question: "What if I'm in Florida and don't object within 15 days?",
        answer:
          "Under Fla. Stat. § 83.49(3)(a), failure to object lets the landlord deduct what they noticed. You can still sue for refund, but you've lost the 15-day statutory objection window. Get the objection out by certified mail well before day 15.",
      },
      {
        question: "Can I get more than my deposit back?",
        answer:
          "In several states, yes — Texas (3× + $100 + attorney's fees), Massachusetts (3× + 5% interest + costs + fees), Georgia (3× + fees), California (up to 2× + actual damages), Illinois (2× + costs + fees), Washington (up to 2× + fees), and New York (up to 2× for willful violations).",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "intent-to-vacate",
    category: "landlord",
    title: "Notice of Intent to Vacate Letter (Free Template + State Notice Periods)",
    metaDescription:
      "Free notice-to-vacate letter that meets your state's required notice period (30 days in most states, 20 in WA, 7 in NC, 60 in FL year-to-year).",
    lede:
      "You're leaving and you want to do it right — proper notice, clean record, security deposit returned. This letter meets your state's required notice period and triggers the landlord's deposit-return clock.",
    body: `[Your Full Name (each tenant on the lease should sign)]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address — the address the lease specifies for notices]
[City, State ZIP]

Sent via certified mail, return receipt requested

Re: Notice of Intent to Vacate — [Rental Unit Address]

Dear [Landlord's Name]:

I am giving formal written notice — pursuant to [State] law (e.g., Cal. Civ. Code § 1946; Tex. Prop. Code § 91.001; N.Y. Real Prop. Law § 232-b; Fla. Stat. § 83.57; 735 ILCS 5/9-207; Ohio Rev. Code § 5321.17(B); 68 P.S. § 250.501; RCW 59.18.200(1)(a); O.C.G.A. § 44-7-7; N.C.G.S. § 42-14) — and to the lease dated [Lease Date] — that I will vacate the above-referenced unit on [Move-Out Date].

The move-out date stated above is at the end of the current rental period and is at least [statutory notice period for the state — e.g., 30 days under CA, NY (outside NYC), IL, OH, GA; 20 days under WA; one month under TX; 60 days under FL year-to-year; 7 days under NC] from the date of this notice.

Please send my security deposit refund and any other final accounting to my forwarding address:

  [Forwarding Address]
  [City, State ZIP]

I confirm:
  • I have set the move-out date to end at the close of a rental period, consistent with state-law timing requirements.
  • I am current on rent and will remain current through the move-out date.
  • I will arrange a pre-move-out inspection with you separately. [See the move-out walkthrough request letter.]
  • I will return all keys and access devices on or before the move-out date.

Nothing in this notice waives any right I have to dispute deposit deductions, recover the deposit, or pursue any other remedies under [State] law.

Please confirm receipt of this notice.

Sincerely,

[Your Signature]
[Your Printed Name]

[Repeat signature block for each tenant on the lease]`,
    howToUse: [
      "Time the notice so that move-out lands at the end of a full rental period. Most state statutes (Illinois 735 ILCS 5/9-207, Ohio Rev. Code § 5321.17, California Civ. Code § 1946) measure the notice period to the end of the next rental period — sending notice on the 10th saying \"I'm leaving in 30 days\" typically means you owe rent through the end of the following full month, not 30 days from the date of the letter.",
      "Send by certified mail with return receipt requested. Verbal notice is almost never valid; email and text are not always sufficient under state statutes. The certified-mail receipt is what proves both the date the notice was given and the start of the notice period.",
      "Each tenant on the lease should sign. Joint tenants give notice jointly; if only one signs, only that one has terminated their interest. The remaining tenants may still owe rent.",
      "Include your forwarding address in the notice itself. In Texas (Prop. Code § 92.107), Ohio (§ 5321.16), Pennsylvania (§ 250.512), and several other states, the landlord's deposit-return clock doesn't start until the tenant provides a written forwarding address.",
      "Don't hold over. A tenant who fails to vacate by the stated date converts to a holdover tenant and can be liable for double rent and an immediate eviction action in many states. If your move-out plans slip, write a follow-up notice with a new date — don't just stay.",
    ],
    legalContext: [
      "Tenant-side notice-to-vacate periods are codified in nearly every state. Most fall around 30 days for month-to-month tenancies: California Civ. Code § 1946 (30 days, with no extra for long-term tenants — Civ. Code § 1953 voids any lease term requiring more than 30 days from a tenant); New York Real Prop. Law § 232-b (one month outside NYC; § 232-a for NYC parallels); Illinois 735 ILCS 5/9-207 (30 days for monthly, 60 days for year-to-year, 7 for week-to-week); Ohio Rev. Code § 5321.17(B) (at least 30 days prior to the periodic rental date); Georgia O.C.G.A. § 44-7-7 (30 days to terminate a tenancy at will). Florida Stat. § 83.57 went from 15 days to 30 days for month-to-month tenancies effective July 1, 2023 (Ch. 2023-314), and remains at 60 days for year-to-year tenancies.",
      "A handful of states deviate sharply. Washington RCW 59.18.200(1)(a) requires only 20 days before the end of the rental period — one of the shortest periods in the country. North Carolina G.S. § 42-14 is even shorter at 7 days before end of current month. Pennsylvania 68 P.S. § 250.501 is 15 days for tenancies of one year or less and 30 days for longer; the statute is most commonly invoked by landlords, but tenants are well served to mirror it. Texas Prop. Code § 91.001 requires one month for monthly rent periods, with termination on the later of the date in the notice or one month after notice.",
      "Almost everywhere, the notice period runs to the end of a rental period, not from the date of the notice. A notice sent on the 10th of the month, saying \"I'm leaving in 30 days,\" generally means the tenancy ends at the end of the next full rental period — not on day 30. This is the single most-missed timing rule and the most common reason tenants get billed for an extra month after move-out.",
      "Fixed-term leases generally end on the stated date with no statutory tenant notice required to walk away. But almost every modern lease has an auto-renewal clause that converts the lease to month-to-month (or renews it for another term) if the tenant doesn't give a specific notice within a window — commonly 30 to 60 days before expiration. The lease, not the statute, governs that window. Read the lease's renewal section before relying on the statutory minimum.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code §§ 1946, 1946.1, 1953. 30 days written notice for month-to-month. Tenant's notice stays 30 days regardless of tenure (the 60-day rule applies only to landlord notices). Civ. Code § 1953 voids any lease term requiring more than 30 days from a tenant.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code § 91.001. One month for monthly rent periods; terminates on the later of the date in the notice or one month after notice. Fixed-term: lease controls — check for non-renewal notice requirement.",
      },
      {
        state: "New York (outside NYC)",
        note: "N.Y. Real Prop. Law § 232-b. One month before end of term. RPL § 226-c's tiered 30/60/90-day periods apply to landlord notices, not tenant notices.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.57. 30 days before end of monthly period (raised from 15 by Ch. 2023-314, eff. July 1, 2023). Year-to-year = 60; quarter = 30; week = 7. § 83.575 lets a fixed-term lease require up to 60 days' non-renewal notice.",
      },
      {
        state: "Illinois",
        note: "735 ILCS 5/9-207. 30 days before end of monthly period; year-to-year = 60 days; week-to-week = 7 days.",
      },
      {
        state: "Ohio",
        note: "Ohio Rev. Code § 5321.17(B). At least 30 days prior to the periodic rental date.",
      },
      {
        state: "Pennsylvania",
        note: "68 P.S. § 250.501. 15 days for tenancies of one year or less; 30 days for tenancies over one year. Lease may lengthen or waive.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.200(1)(a). 20 days before end of the rental period — one of the few sub-30-day states. Tenant can also use 20-day notice to end a fixed-term lease without cause.",
      },
      {
        state: "Georgia",
        note: "O.C.G.A. § 44-7-7. 30 days for tenant to terminate a tenancy at will (landlord must give 60).",
      },
      {
        state: "North Carolina",
        note: "N.C.G.S. § 42-14. 7 days before end of current month — one of the shortest periods in the country. Year-to-year = one month; week-to-week = 2 days.",
      },
    ],
    ifThisDoesntWork:
      "The notice-to-vacate letter itself rarely \"doesn't work\" — once delivered, it ends the tenancy on the stated date. Where things go wrong is afterward: the landlord refuses to return the deposit, claims you didn't give proper notice, or tries to charge holdover rent. For each, the same defenses apply: keep your certified-mail receipt as proof that the notice was timely; document move-out condition with photos and video; provide your forwarding address in writing (it starts the deposit-return clock in most states). For deposit disputes, see the security-deposit-demand and deposit-itemization-request letters in this library.",
    relatedSlugs: [
      "security-deposit-demand",
      "move-out-walkthrough-request",
      "deposit-itemization-request",
      "repair-request-formal",
      "late-fee-waiver-request",
      "mold-notice",
    ],
    faqs: [
      {
        question: "Do I have to give 60 days' notice in California if I've lived in the apartment more than a year?",
        answer:
          "No. The 60-day rule in Civ. Code § 1946.1 applies to landlord notices. Tenants need only give 30 days' written notice regardless of tenure, and Civ. Code § 1953 voids any lease term requiring more from a tenant.",
      },
      {
        question: "If I send notice on the 10th of the month in Illinois, can I move out on the 9th of the next month?",
        answer:
          "No. Under 735 ILCS 5/9-207, 30-day notice must be given so the tenancy ends at the close of a rental period. Notice on the 10th typically ends the tenancy at the end of the following full month, not 30 days from the letter.",
      },
      {
        question: "Do I need to give written notice to leave at the end of a one-year fixed lease in Texas?",
        answer:
          "Texas Property Code § 91.001 sets notice rules only for tenancies without an end date (month-to-month). For a fixed-term lease, statute imposes no tenant notice — but check the lease, since many require 30–60 days' notice to prevent automatic renewal.",
      },
      {
        question: "Is Florida's notice for month-to-month really 30 days now, not 15?",
        answer:
          "Yes. Effective July 1, 2023, Florida HB 1417 / Ch. 2023-314 amended Fla. Stat. § 83.57 to raise the month-to-month tenant notice from 15 days to 30 days.",
      },
      {
        question: "Why is North Carolina only 7 days?",
        answer:
          "N.C.G.S. § 42-14 codifies 7 days' notice before end of the current month to terminate a month-to-month tenancy — one of the shortest periods in the country. Washington (20 days) and Pennsylvania (15 days for tenancies of one year or less) are the other notable short-period states.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "heat-utility-failure",
    category: "landlord",
    title: "Heat, Hot Water, or Utility Failure Complaint to Landlord (Free Emergency Template)",
    metaDescription:
      "No heat or hot water? Free emergency-tier complaint letter citing your state's habitability law and city heat ordinance (NYC, Chicago, Boston, SF).",
    lede:
      "Loss of heat, hot water, electricity, or running water is not a routine repair — it's an emergency-tier habitability failure. This letter triggers your fastest available response, including parallel notice to code enforcement.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date and time]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via email and text AND certified mail (and copied to local code enforcement — see below)

Re: EMERGENCY — Failure of Essential Service at [Rental Unit Address]

Dear [Landlord's Name]:

I am the tenant at the above address under the lease dated [Lease Date]. I am writing to give you formal written and emergency notice that the following essential service has failed at the unit:

  Service that has failed: [no heat / no hot water / no cold water / no electricity / no functioning plumbing / no gas / sewage backup]
  Date and time service first went out: [Date, Time]
  Current outdoor temperature (if heat): [°F]
  Current indoor temperature (if heat): [°F]
  Duration of outage as of this letter: [hours]

Prior reports:
  • [Date, Time — method (call / text / email / portal) — to whom]
  • [Date, Time — same]

Under the implied warranty of habitability and the essential-service provisions of [State / city] law (see, e.g., Cal. Civ. Code § 1941.1(c)-(e); Tex. Prop. Code §§ 92.052, 92.056; N.Y. Real Prop. Law § 235-b; NYC Admin. Code §§ 27-2028 to 27-2033 + 28 RCNY Ch. 56 (HPD Heat & Hot Water); Chicago Mun. Code §§ 13-196-410 to 13-196-440 + RLTO § 5-12-110; 105 CMR 410.201 + 410.750 (Mass. Sanitary Code); SF Housing Code § 701; RCW 59.18.060 + 59.18.070), the loss of an essential service is treated as an emergency requiring immediate response.

The applicable response window in this jurisdiction is:
  • [NYC heat season Oct 1–May 31: indoor 68°F day / 62°F night required when outdoor <55°F day; hot water 120°F minimum 24/7. HPD inspects on 24-hour emergency window.]
  • [Chicago RLTO § 5-12-110(f): 24 hours to correct or rent withholding begins; 72 hours to correct or tenant may terminate lease.]
  • [Boston: 105 CMR 410.201 requires 68°F day / 64°F night Sept 15–June 15; § 410.750 — water failure ≥24 hours deemed health-endangering; serious failures must be corrected within 12 hours.]
  • [SF Housing Code § 701: 70°F minimum at 3 ft above floor in habitable rooms; 24/7 if landlord controls heat.]
  • [Washington RCW 59.18.070: 24 hours for heat/hot/cold water/electricity/imminent hazard.]
  • [Texas Prop. Code § 92.056(d): 7-day reasonable presumption shortened by emergency severity.]
  • [Elsewhere: a reasonable time, which for loss of essential services is measured in hours, not days.]

I am requesting that you restore the service within [24 / 48 / 72] hours from receipt of this notice. If you do not, I will exercise the remedies available under [State / city] law, including:

  • Rent abatement for the period the unit is uninhabitable.
  • Reimbursement of substitute housing (hotel/Airbnb) costs — Chicago RLTO § 5-12-110(f) explicitly authorizes recovery up to the prorated monthly rent, and many other jurisdictions allow it where the landlord's failure made the unit unlivable.
  • Repair-and-deduct where the statute authorizes it (CA Civ. Code § 1942; TX Prop. Code § 92.0561; IL 765 ILCS 742; WA RCW 59.18.100; OR ORS 90.365 for essential-service substitution).
  • Lease termination on constructive-eviction grounds if the failure persists.
  • Statutory and per-day penalties through code enforcement.

I am copying this notice to local code enforcement:
  • [NYC HPD via 311]
  • [Chicago 311]
  • [Boston ISD (617) 635-5300]
  • [San Francisco DBI]
  • [Or: your local building/housing department]

These agencies treat heat, hot water, no electricity, and no running water as emergency-class violations and typically inspect within 24 hours. Their parallel inspection will document the condition and the date independent of my notice to you.

I am current on rent and intend to remain so. This notice is for restoration of the failed service, not for any other purpose, and does not waive any other rights or remedies I may have.

Please respond by [Date/Time] confirming the schedule for restoration.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [photos of thermometer reading; photos of inoperative water/heat; prior text/email reports; outdoor temperature screenshot if heat]`,
    howToUse: [
      "Send by every available channel at once: email + text + certified mail + parallel call to code enforcement (NYC 311, Chicago 311, Boston ISD, SF DBI, or your local equivalent). Speed and redundancy matter; this is not a 5-day-mail letter.",
      "Document temperature with a real thermometer photo. \"It's cold\" is weaker than \"I measured 54°F at 3 feet above the floor on [date] at [time], with outdoor temperature 28°F.\" City heat ordinances specify exact minimums; matching your evidence to the standard is what gets the fastest enforcement response.",
      "Call code enforcement BEFORE you call the landlord again. NYC HPD, Chicago 311, Boston ISD, SF DBI, and most large-city housing departments treat heat/water/electricity as 24-hour emergency-class violations. The inspector's report becomes independent dated evidence of the failure.",
      "If you have to move to a hotel or Airbnb, save receipts. Chicago RLTO § 5-12-110(f) explicitly authorizes recovery of substitute housing costs up to the prorated monthly rent. Other jurisdictions allow it under constructive-eviction theories where the landlord's failure made the unit unlivable. Save every receipt and stay reasonable on cost.",
      "Don't withhold rent informally. Most state procedures (Ohio § 5321.07, Pennsylvania 35 P.S. § 1700-1, Massachusetts c. 239 § 8A) require formal court-administered escrow or government certification of unfitness. Continue paying rent until and unless you've followed the specific state procedure or had the unit declared uninhabitable by a code inspector.",
    ],
    legalContext: [
      "Heat, hot water, cold/running water, electricity, gas, and working plumbing are \"essential services\" in nearly every U.S. residential landlord-tenant regime. The federal HUD floor at 24 C.F.R. § 5.703 requires hot and cold running water, a permanently installed heating source in cold-climate zones, and working electrical and plumbing systems. State statutes (Cal. Civ. Code § 1941.1, N.Y. Real Prop. Law § 235-b, RCW 59.18.060) treat these as non-waivable habitability minimums. Loss of any of them is classified differently from ordinary repairs: response times shrink from days or weeks to hours, and code enforcement triages them as emergencies.",
      "Major cities layer specific ordinances on top of the state warranty, with detailed temperature minimums and per-day penalties. New York City's Admin. Code §§ 27-2028 to 27-2033 (Article 8 of the Housing Maintenance Code) sets the heat season at October 1 through May 31; daytime indoor minimum is 68°F when outdoor is below 55°F; nighttime minimum is 62°F regardless of outdoor temperature; hot water must be at least 120°F year-round. Daily HPD penalties for the first heat or hot water violation run $250–$500. Chicago's heat ordinance (Mun. Code §§ 13-196-410 to 13-196-440) sets heat season September 15 to June 1, daytime minimum 68°F, nighttime 66°F, with fines of $500–$1,000 per day; the Chicago RLTO § 5-12-110 gives the tenant a 24-hour cure window before rent withholding kicks in and a 72-hour cure window before lease termination is available. Boston follows the Massachusetts Sanitary Code (105 CMR 410.201) — heat season September 15 to June 15, 68°F day, 64°F night — with serious failures requiring correction within 12 hours under § 410.750. San Francisco Housing Code § 701 requires a minimum of 70°F at three feet above the floor in habitable rooms, with year-round 24/7 service if the landlord controls the heat.",
      "Response windows for essential-service failures are dramatically shorter than for ordinary repairs. Washington RCW 59.18.070 imposes a 24-hour response for heat, hot or cold water, electricity, or imminent hazards. Oregon ORS 90.365 requires 48 hours for essential-service failures and explicitly authorizes the tenant to procure substitute services and deduct actual and reasonable costs. Texas Prop. Code § 92.056(d) sets a 7-day rebuttable presumption of reasonableness for non-emergency repairs but courts shorten the window for essential services. New York HCR treats essential-service failures in rent-stabilized units as grounds for rent reduction back to the pre-most-recent-guideline rent.",
      "Self-help shutoffs by the landlord — disconnecting utilities to force a tenant out — are prohibited essentially everywhere as wrongful eviction. Washington added an explicit ban on disconnections during National Weather Service heat alerts under RCW 59.18.060(11), with a 6%-of-monthly-income cap on any repayment plan after restoration. California, New York, Illinois, Massachusetts, and Texas all treat utility shutoffs by the landlord as separately compensable wrongful conduct on top of the habitability violation.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 1941.1(c)-(e) — heating facilities, hot/cold running water as habitability minimums. § 1942 — repair-and-deduct cap one month's rent, max 2x/year. \"Reasonable\" time, less for emergencies.",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code §§ 92.052, 92.056, 92.0561. Hot water must be at least 120°F. § 92.056(d) presumes 7-day reasonable response, shortened for severity. Repair-and-deduct: greater of 1 month rent or $500. § 92.0563: JP-court repair order up to $10,000.",
      },
      {
        state: "New York (NYC)",
        note: "Real Prop. Law § 235-b + NYC Admin. Code §§ 27-2028 to 27-2033. Heat season Oct 1–May 31. Day (6am–10pm) if outdoor <55°F: 68°F indoor. Night (10pm–6am): 62°F. Hot water 120°F minimum 24/7/365. Call 311; HPD inspects on 24-hour emergency window; penalties $250–$500/day.",
      },
      {
        state: "Illinois (Chicago)",
        note: "Chicago Mun. Code §§ 13-196-410 to 13-196-440 + RLTO § 5-12-110. Heat season Sept 15–June 1. Day (8:30a–10:30p): 68°F. Night: 66°F. Fines $500–$1,000/day. RLTO 24-hr correct = no withholding; 72-hr = lease termination. Recover substitute housing up to prorated monthly rent.",
      },
      {
        state: "Massachusetts (Boston)",
        note: "105 CMR 410.201 — heat season Sept 15–June 15, 68°F day / 64°F night. § 410.750 — water failure ≥24 hrs deemed health-endangering; serious failures must be corrected within 12 hours per board-of-health orders. Boston ISD (617) 635-5300.",
      },
      {
        state: "California (San Francisco)",
        note: "SF Housing Code § 701. 70°F minimum at 3 ft above floor in habitable rooms; landlord-controlled heat 24/7. Hot water required as essential service. SF DBI enforces.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.060 + 59.18.070 + 59.18.100. Tiered response: 24 hrs (no heat/water/electricity/imminent hazard), 72 hrs (refrigerator/range/major plumbing), 10 days (other). Repair-and-deduct: up to 2 months' rent per repair (licensed contractor) or 1 month (self).",
      },
      {
        state: "Oregon",
        note: "ORS 90.365 — 48 hours for essential-service failure. Tenant may procure substitute services and recover actual and reasonable cost (ORS 90.365(2)).",
      },
    ],
    ifThisDoesntWork:
      "Loss of essential service is the one habitability complaint where escalation is almost always fast. Call your city's housing or code-enforcement line first — NYC 311, Chicago 311, Boston ISD (617) 635-5300, SF DBI — and request emergency inspection. Most large cities have separate 24-hour hotlines for heat/water/electricity. NYC's HPD Emergency Repair Program can dispatch contractors directly and back-bill the landlord. Document every outage minute, every reported failure, and every substitute-housing cost; courts award rent abatement scaled to the days the unit was uninhabitable plus reasonable substitute housing. For severe or repeat cases, contact a local tenants' rights organization — these cases often produce the strongest factual records and the cleanest damages.",
    relatedSlugs: [
      "repair-request-formal",
      "mold-notice",
      "pest-infestation-notice",
      "illegal-entry-cease-and-desist",
      "intent-to-vacate",
      "security-deposit-demand",
    ],
    faqs: [
      {
        question: "What is NYC's heat season and what temperatures are required?",
        answer:
          "October 1 through May 31. Day (6am–10pm): if outdoor is below 55°F, indoor must be at least 68°F. Night (10pm–6am): indoor must be at least 62°F regardless of outdoor temperature. Hot water is required 24/7/365 at minimum 120°F. Call 311 to file a complaint.",
      },
      {
        question: "What counts as an essential service?",
        answer:
          "Across federal, state, and local law: heat (during heating season), hot water, cold/running water, electricity, gas, and working plumbing and sanitation. NY codifies this through RPL § 235-b; Chicago through RLTO § 5-12-110; federally through 24 C.F.R. § 5.703.",
      },
      {
        question: "If I have to stay in a hotel because there's no heat or water, who pays?",
        answer:
          "In Chicago, RLTO § 5-12-110(f) explicitly authorizes recovery of substitute-housing cost up to the prorated monthly rent. In other jurisdictions, recovery is generally available under constructive-eviction theories when the landlord's failure to provide essential services made the unit uninhabitable. Save every receipt and notify the landlord in writing before incurring the cost.",
      },
      {
        question: "How fast does the landlord have to fix it?",
        answer:
          "Chicago RLTO: 24 hours before rent withholding kicks in; 72 hours before tenant can terminate. Massachusetts 105 CMR 410.750: serious heat/water failures within 12 hours per board-of-health orders. Washington RCW 59.18.070: 24 hours for heat/water/electricity. Texas: 7 days is the statutory presumption but courts shorten it for emergencies. NYC: HPD treats it as emergency-class with a 24-hour inspection target.",
      },
      {
        question: "Can my landlord shut off my utilities to force me out?",
        answer:
          "No. Self-help shutoffs of heat, water, or electricity are prohibited everywhere as wrongful eviction. Washington added an explicit ban on disconnections during National Weather Service heat alerts under RCW 59.18.060(11). California, NY, IL, MA, and TX all treat utility shutoffs by the landlord as separately compensable wrongful conduct with statutory penalties on top of the habitability claim.",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
