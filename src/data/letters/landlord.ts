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

  {
    slug: "application-screening-fee-refund",
    category: "landlord",
    title: "Application / Tenant-Screening Fee Refund Demand (Free Template + State Tiers)",
    metaDescription:
      "Charged too much for a rental application or screening fee, or never got an itemized receipt? Free demand letter citing Cal. Civ. Code § 1950.6, RCW 59.18.257, ORS 90.295, NY RPL § 238-a.",
    lede:
      "A landlord charged you an application or tenant-screening fee, then either overcharged you, never ran the check, or won't say where the money went. Most states cap that fee at the landlord's actual cost, require an itemized receipt, and require a refund of whatever wasn't used. This letter cites your state's rule and demands the refund or the accounting.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager / Management Company Legal Name]
[Address]

cc: [Leasing agent / on-site manager, if different]

Sent via certified mail, return receipt requested
(Copy also emailed to [leasing email])

Re: Demand for refund and itemized accounting of application / tenant-screening fee — Property at [Address of unit applied for], application dated [Date]

To whom it may concern:

On [Date] I applied to rent [unit address / unit number] and paid you an application / tenant-screening fee of $[Amount] by [check / card / cash / Zelle], as shown on the attached [receipt / bank or card statement / cancelled check]. I am writing to demand [a refund of the overcharged or unused portion / a full refund / an itemized accounting of how this fee was spent], as required by law in my state.

The facts:
  • Fee charged: $[Amount] per applicant
  • Date paid: [Date]
  • What happened next: [I was approved but the fee was never refunded / I was denied / I withdrew my application on (date) / the unit was already rented before you screened me / you never ran any credit or background check / you ran the check but charged far more than it cost]
  • Itemized receipt provided to me: [None / Incomplete — it did not break out the actual cost of the report and the time spent]

Legal basis:

[Pick the tier that matches your state — strike the others. See the State notes section for your exact citation.]

  [TIER A — Statutory dollar cap + mandatory itemized receipt + refund of the unused portion]
  Under [Cal. Civ. Code § 1950.6 / N.Y. Real Prop. Law § 238-a], a residential application / screening fee is capped by statute, the landlord must give the applicant a receipt itemizing the actual out-of-pocket cost of the report (and, in California, the time spent obtaining and processing the information), and the landlord must refund any portion of the fee that was not actually used to screen me. In California, if you did not perform a personal reference check or obtain a consumer credit report, the unused fee must be returned. In New York, the fee may not exceed the actual cost of the check or $20, whichever is less, you must give me a copy of the check and the invoice, and the fee must be waived if I supplied a report from the prior 30 days.

  [TIER B — Fee limited to the landlord's ACTUAL or AVERAGE cost + receipt + refund within a deadline]
  Under [Ore. Rev. Stat. § 90.295 / Colo. Rev. Stat. §§ 38-12-903 and 38-12-904 / Wash. Rev. Code § 59.18.257], you may charge no more than your actual (or average actual) cost of screening, you must give me a receipt, and you must refund any amount not used for screening. In Oregon, that refund is due within 30 days if you filled the unit before screening me or had not screened me before I withdrew in writing. In Colorado, you may not charge a fee unless the entire amount is used to process the application, you must provide a disclosure of anticipated expenses or an itemization of actual expenses, and any unused portion — or the full fee if either side declines to sign a lease — must be returned within 20 calendar days. In Washington, you were required to give me written notice of the screening criteria and the cost before charging, and the fee may not exceed the customary cost charged by a screening service in this area.

  [TIER C — Dollar cap and/or refund of the excess over the landlord's actual out-of-pocket cost]
  Under [Va. Code § 55.1-1203 / Md. Code, Real Prop. § 8-213], the fee is capped and you must return any amount that exceeds your actual out-of-pocket expenses, with an itemized list of those expenses, if I was not offered or did not take the unit. In Virginia, an application fee may not exceed $50 exclusive of actual out-of-pocket expenses, and any application deposit must be refunded — less your actual expenses and damages, itemized — within 20 days of my failure to rent or your rejection. In Maryland, if fees other than the security deposit exceed $25, you must return the excess over your actual costs, or you are liable for twice the amount of the fees.

  [DEFAULT — states with no specific screening-fee statute]
  My state does not separately cap screening fees, but you collected $[Amount] from me [and either never performed the screening, or kept the full amount while your actual cost was far lower]. I am entitled to an accounting of how the money was spent and a refund of any amount you did not actually use to screen me. Separately, if you denied my application based on a consumer report, federal law (the Fair Credit Reporting Act, 15 U.S.C. § 1681m) requires you to give me an adverse-action notice naming the consumer reporting agency you used, together with notice of my right to a free copy of that report and my right to dispute it. Please provide that notice.

Demand:

Within [14] days of receipt of this letter, please [refund $[Amount] / refund the unused portion of $[Amount] / provide a written itemized accounting of how the $[Amount] fee was spent, broken out into the actual cost of each report obtained and (where applicable) time spent, and refund any amount not used], by [check / the original payment method].

If you do not, I intend to pursue:
  • A complaint with [my state Attorney General's consumer-protection division / the state or local housing or landlord-tenant agency];
  • The statutory remedies my state provides — for example, [Oregon: twice the screening charge plus $250 (ORS 90.295); Maryland: twice the amount of the fees (RP § 8-213); Washington: up to $100 plus court costs and attorney's fees (RCW 59.18.257)];
  • A claim in small claims court for the amount owed plus any statutory penalty and costs.

I would prefer to resolve this directly. Please treat this letter as a good-faith request to make it right.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [proof of payment (receipt / bank or card statement / cancelled check); the rental application; any receipt or accounting you already gave me; any denial or "unit rented" notice; written withdrawal of application if applicable]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy to the leasing office. The certified-mail receipt proves delivery and the date — which matters because several states (OR, CO, MD, VA) run the refund deadline from a written event like your withdrawal or rejection.",
      "Attach your proof of payment. The single most important enclosure is whatever shows you paid the fee and how much: the receipt, the cancelled check, or the line on your bank/card statement. Without it the landlord can dispute the amount; with it, the number is their own record.",
      "Pick the right tier. Tier A (CA, NY) = hard statutory cap + mandatory itemized receipt + refund of the unused portion. Tier B (OR, CO, WA) = fee limited to the landlord's actual or average cost, with a refund deadline. Tier C (VA, MD) = dollar cap and refund of anything over the landlord's actual out-of-pocket cost. No state listed? Use the Default tier and lean on the accounting demand plus the FCRA adverse-action right.",
      "Highest-leverage move: demand the itemized accounting, not just the money. A landlord who charged $75 but paid a screening service $30 has to either produce a receipt proving the higher cost (they usually can't) or refund the difference. The accounting request flips the burden onto them and is the fact that wins in small claims.",
      "Top mistake to avoid: don't conflate the screening fee with your security deposit or first month's rent — those are governed by separate laws and different letters. This letter is only about the application / tenant-screening fee. Also don't set an unreasonable 48-hour deadline; 14 days reads as good-faith and still beats every statutory clock.",
    ],
    legalContext: [
      "A tenant-screening or rental-application fee is supposed to cover the landlord's real cost of running your credit and background check — typically $20 to $40 from a screening service. The abuse the statutes target is the gap between that cost and what landlords actually charge: collecting $50, $75, or $100 per applicant from a dozen people for a single unit, never refunding the unused money, and never showing where it went. There is no federal cap on screening fees and no federal refund requirement — the only federal lever is the Fair Credit Reporting Act, which governs what a landlord must tell you if a report is used against you, not what they may charge. The caps, the receipt requirements, and the refund duties are all creatures of state law, and they fall into three patterns.",
      "Tier A states set a hard statutory cap and require both an itemized receipt and a refund of the unused portion. California Civil Code § 1950.6 is the anchor: the application screening fee may not exceed $30 per applicant (a figure adjusted annually for the Consumer Price Index since January 1, 1998, so the operative cap in 2026 is materially higher); the landlord must give the applicant a receipt that itemizes the out-of-pocket expenses and the time spent obtaining and processing the information; and if the landlord does not perform a personal reference check or obtain a consumer credit report, the landlord must return any amount of the fee not actually used. (The section as currently in force reflects AB 1170, operative January 1, 2026.) New York Real Property Law § 238-a, enacted by the 2019 Housing Stability and Tenant Protection Act, is even tighter: any background/credit-check fee is limited to the actual cost or $20, whichever is less; the landlord must give the applicant a copy of the check and the screening company's receipt or invoice; and the fee must be waived entirely if the applicant provides a check conducted within the prior 30 days.",
      "Tier B states cap the fee at the landlord's actual (or average actual) cost and impose a refund deadline. Oregon Revised Statutes § 90.295 (last amended 2023) limits the applicant-screening charge to the landlord's average actual cost or the customary tenant-screening-company amount, requires a receipt, and requires a refund within 30 days if the landlord fills the unit before screening the applicant or has not screened the applicant before the applicant withdraws in writing — with a remedy of twice the charge plus $250. Colorado's Rental Application Fairness Act (C.R.S. §§ 38-12-903 to 904) bars charging a fee at all unless the entire amount is used to cover the cost of processing the application, requires a disclosure of anticipated expenses or an itemization of actual expenses plus a receipt, and requires that any unused portion — or the full fee if either party declines to enter the lease — be refunded within 20 calendar days. Washington's RCW 59.18.257 requires the landlord to give written notice of the screening criteria and the cost before charging, caps the landlord's own screening fee at the customary cost charged by a screening service in the area, and exposes a violating landlord to up to $100 plus court costs and reasonable attorney's fees.",
      "Tier C states impose a dollar cap and require refund of the excess over the landlord's actual out-of-pocket cost. Virginia Code § 55.1-1203 limits a rental application fee to $50 exclusive of actual out-of-pocket expenses ($32 for HUD/public housing), and requires that any application deposit be refunded — less the landlord's actual expenses and damages, with an itemized list — within 20 days of the applicant's failure to rent or the landlord's rejection. Maryland Real Property § 8-213 provides that if fees other than the security deposit exceed $25, the landlord must return the excess over actual out-of-pocket costs (e.g., the credit-check cost) or be liable for twice the amount of the fees. Everywhere else — the default — there is no screening-fee statute, but two levers remain: a demand for an itemized accounting (a landlord who collected far more than the report cost and kept it is exposed to an unjust-enrichment / small-claims theory), and the FCRA's adverse-action requirement under 15 U.S.C. § 1681m, which forces a landlord who denied you based on a consumer report to name the reporting agency and tell you how to get a free copy and dispute it.",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Cal. Civ. Code § 1950.6. Fee capped at $30/applicant, CPI-adjusted since 1/1/1998 (materially higher in practice by 2026); landlord must give a receipt itemizing out-of-pocket expenses AND time spent; must refund the unused portion if no personal reference check or consumer credit report was performed. Section currently in force reflects AB 1170, operative 1/1/2026.",
      },
      {
        state: "New York (Tier A)",
        note: "N.Y. Real Prop. Law § 238-a (HSTPA 2019). Background/credit-check fee limited to actual cost or $20, whichever is less; must provide a copy of the check + the screening company's receipt/invoice; fee waived if applicant supplies a check from the prior 30 days. (Co-op shareholder applicants are a carve-out.)",
      },
      {
        state: "Oregon (Tier B)",
        note: "Ore. Rev. Stat. § 90.295 (amended 2023). Charge may not exceed the landlord's average actual cost or the customary screening-company amount; receipt required; refund within 30 days if the unit was filled before screening, or the applicant withdrew in writing before any screening. Remedy: twice the charge + $250.",
      },
      {
        state: "Colorado (Tier B)",
        note: "Colo. Rev. Stat. §§ 38-12-903, 38-12-904 (Rental Application Fairness Act). No fee unless the entire amount covers processing costs; must give a disclosure of anticipated expenses or itemization of actual expenses + a receipt; refund the unused portion — or the full fee if either party declines to sign — within 20 calendar days; uniform pricing required.",
      },
      {
        state: "Washington (Tier B)",
        note: "Wash. Rev. Code § 59.18.257 (amended 2016). Landlord must give written notice of screening criteria and the cost BEFORE charging; own-screening fee capped at the customary cost charged by a screening service in the area. Violation of the notice rule: liable up to $100 plus court costs and reasonable attorney's fees.",
      },
      {
        state: "Virginia (Tier C)",
        note: "Va. Code § 55.1-1203 (amended 2020). Application fee may not exceed $50 exclusive of actual out-of-pocket expenses ($32 for HUD/public housing). Any application deposit must be refunded — less actual expenses/damages, with an itemized list — within 20 days of failure to rent or rejection (10 days for cash/certified funds).",
      },
      {
        state: "Maryland (Tier C)",
        note: "Md. Code, Real Prop. § 8-213. If fees other than the security deposit exceed $25, the landlord must return the excess over actual out-of-pocket costs (e.g., the credit-check cost) or be liable for twice the amount of the fees.",
      },
      {
        state: "All other states (Default)",
        note: "No specific screening-fee statute. Lever 1: demand an itemized accounting and refund of any amount not used to screen you (unjust-enrichment / small-claims theory). Lever 2: if denied based on a report, the FCRA (15 U.S.C. § 1681m) requires an adverse-action notice naming the consumer reporting agency + your right to a free copy and to dispute it. Some cities (e.g., Seattle, certain CA localities) add their own caps — check local rules.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the demand, the next step is cheap and usually decisive. File a complaint with your state Attorney General's consumer-protection division or the state/local landlord-tenant agency — these are free and many states route screening-fee abuses through them. Then use small claims court: screening-fee disputes are small-dollar by design, no lawyer is needed, and several states stack a statutory bonus on top of the refund (Oregon: twice the charge + $250 under ORS 90.295; Maryland: twice the fees under RP § 8-213; Washington: up to $100 + costs + attorney's fees under RCW 59.18.257), which often makes the claim worth more than the fee itself. Watch the clock: most state consumer and contract claims carry a statute of limitations of 2 to 6 years, but the practical window is shorter because the landlord's records and the screening-service invoice get harder to pin down over time — file within a few months while the paper trail is fresh.",
    relatedSlugs: [
      "security-deposit-demand",
      "deposit-itemization-request",
      "credit-report-dispute",
      "late-fee-waiver-request",
      "intent-to-vacate",
    ],
    faqs: [
      {
        question: "The landlord says the fee is \"non-refundable.\" Does that end it?",
        answer:
          "No. In states that cap the fee at actual cost and require refund of the unused portion (CA § 1950.6, NY § 238-a, OR § 90.295, CO §§ 38-12-903/904), a \"non-refundable\" label can't override the statute — any amount above the landlord's real screening cost, or the whole fee if no check was ever run, must come back. A contract term can't waive a protection the legislature made mandatory.",
      },
      {
        question: "They never actually ran my credit or background check. Can I get the whole fee back?",
        answer:
          "Usually yes. California § 1950.6 expressly requires the landlord to return the fee if no personal reference check or consumer credit report was obtained. Oregon § 90.295 requires a refund within 30 days if you weren't screened before withdrawing or before the unit was filled. Even in no-statute states, charging for a service never performed is the cleanest possible unjust-enrichment / small-claims case.",
      },
      {
        question: "How much can a landlord legally charge?",
        answer:
          "It depends on the state. New York caps it at the actual cost or $20, whichever is less. California caps it at $30 adjusted for inflation since 1998 (higher in practice now). Oregon, Colorado, and Washington limit it to the landlord's actual or customary cost. Virginia caps it at $50 plus actual out-of-pocket expenses. Maryland triggers a refund duty above $25. Most other states set no cap — which is exactly why demanding an itemized accounting matters.",
      },
      {
        question: "I was denied the apartment. Am I owed anything?",
        answer:
          "The screening fee covers the cost of running the check, so a denial alone doesn't automatically refund it where the check was actually performed. But you're owed any amount above the landlord's real cost in capped states, and you're owed an adverse-action notice under the FCRA (15 U.S.C. § 1681m) — the landlord must tell you which consumer reporting agency they used so you can get a free copy and dispute any error that caused the denial.",
      },
      {
        question: "What if the landlord collected fees from a dozen people for one unit?",
        answer:
          "That's the core abuse these statutes target. In actual-cost states, each applicant is owed any amount above what their own report cost. Colorado's Rental Application Fairness Act bars charging a fee at all unless the entire amount goes to processing that application, and requires a refund within 20 days. Document what you paid, demand the itemized accounting, and if it doesn't come, small claims plus a consumer-protection complaint is the path.",
      },
    ],
    keywords: [
      "rental application fee refund",
      "tenant screening fee refund",
      "landlord won't refund application fee",
      "how to get application fee back from apartment",
      "is a rental application fee refundable",
      "landlord overcharged application fee",
      "application fee never ran credit check",
      "rental application fee laws by state",
      "tenant screening fee cap",
      "itemized receipt application fee landlord",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "bed-bug-notice",
    category: "landlord",
    title: "Bed Bug Notice to Landlord — Demand Professional Extermination (Free Template + State Tiers)",
    metaDescription:
      "Bed bugs in your rental? Free notice letter demanding professional extermination — cites the warranty of habitability + bed-bug statutes (Fla. § 83.51, Cal. Civ. § 1954.600, Me. § 6021-A, Ariz. § 33-1319, NYC § 27-2017.1).",
    lede:
      "You have bed bugs, and getting rid of them is on your landlord — not you. In most states a bed-bug infestation breaches the implied warranty of habitability, and several states have bed-bug-specific statutes that force the landlord to inspect, disclose, and pay for professional treatment. This letter puts the demand in writing, on the record, with the statute cited.",
    body: `[Your Full Name]
[Address — Unit #]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager Legal Name]
[Address]

cc: [Property management company, on-site manager]

Sent via certified mail, return receipt requested
(Copy also delivered by email / hand to on-site manager)

Re: Notice of Bed Bug Infestation and Demand for Professional Extermination — [Unit Address]

To [Landlord / Property Manager]:

I am the tenant at [Unit Address] under a lease dated [Date]. This letter is formal written notice that my unit has a bed bug infestation, and a demand that you arrange and pay for professional extermination promptly.

Infestation details:
  • Date I first noticed bed bugs: [Date]
  • What I observed: [live insects / bites on skin / blood spots or dark fecal staining on the mattress, box spring, or sheets / shed skins / eggs]
  • Where: [bedroom — mattress / box spring / headboard / baseboards / couch / adjacent rooms]
  • Confirmation, if any: [name of pest-control operator who confirmed, date / photos attached / none yet]
  • Prior notice I gave you: [oral notice to (name) on (date) / none — this is my first notice]

I did not introduce these pests and I have not failed to maintain the unit. [If applicable: Other units in this building have reported bed bugs — see (basis).]

Legal basis:

[Find the tier that matches your state below — strike the others. State-specific citations are in the "State notes" section of this page.]

  [TIER A — State statute imposes an affirmative landlord duty to treat / keep the unit free of pests]
  In my state, eliminating a bed bug infestation is the landlord's statutory responsibility. [Florida: Under Fla. Stat. § 83.51(2)(a)1, the landlord must provide "the extermination of rats, mice, roaches, ants, wood-destroying organisms, and bedbugs" — bed bugs are named expressly. / Maine: Under 14 M.R.S. § 6021-A, upon my notice you must conduct an inspection within 5 days and take reasonable measures to identify and treat the infestation as determined by a pest control agent; you may not rent a unit you know or suspect is infested. / California: Under Cal. Civ. Code § 1954.602 a landlord may not rent a unit known to have a current bed bug infestation, and under Cal. Civ. Code § 1941.1(a) the dwelling must be kept "clean, sanitary, and free from all accumulations of debris, filth, rubbish, garbage, rodents, and vermin," or it is untenantable under § 1941. / New York City: Under N.Y.C. Admin. Code § 27-2017.1, the owner must "take reasonable measures to keep the premises free from pests" — which includes bed bugs — and a pest infestation is a hazardous violation of the Housing Maintenance Code.] Curing this infestation is your obligation, not mine.

  [TIER B — Bed-bug statute imposes disclosure / no-knowingly-renting duties; extermination is enforced through the general habitability statute]
  [Arizona: Under Ariz. Rev. Stat. § 33-1319 you were required to provide bed bug educational materials and are prohibited from renting a unit you knew was infested. Because § 33-1319(E) channels remedies through the rest of the Act, I also invoke Ariz. Rev. Stat. § 33-1324(A)(2), which requires you to "make all repairs and do whatever is necessary to put and keep the premises in a fit and habitable condition." A bed bug infestation sufficient to materially affect health and safety is not a fit and habitable condition.] Eliminating the infestation is therefore your obligation.

  [TIER C — No bed-bug-specific statute; the implied warranty of habitability applies]
  Every residential lease in my state carries an implied warranty of habitability — the landlord's promise that the unit is fit for human habitation and free of conditions dangerous or detrimental to health and safety. [Texas: Under Tex. Prop. Code § 92.052(a), you must make a diligent effort to repair a condition that "materially affects the physical health or safety of an ordinary tenant" once I give notice and am current on rent.] A bed bug infestation — which causes bites, allergic reactions, lost sleep, and spreads through walls, outlets, and shared structures — is exactly such a condition. Curing it is your responsibility.

Demand:

Within [7] days of receipt of this letter (or sooner if my state's statute sets a shorter deadline — see State notes), please:
  1. Arrange and pay for a licensed pest control operator to inspect my unit [and the adjacent units, where the statute requires it];
  2. Provide professional treatment using a recognized protocol (chemical, heat, or integrated pest management) until the infestation is eliminated, including any required follow-up treatments;
  3. Confirm in writing the date(s) of inspection and treatment and the operator's findings.

I will cooperate fully with the treatment, including granting reasonable access for inspection and follow-up and preparing my unit as the operator directs.

If you do not act within the deadline, I will pursue:
  • A complaint to my [local code-enforcement / housing / health department], which can cite and fine you for the violation;
  • The tenant remedies my state allows — which may include [repair-and-deduct, rent withholding/escrow, lease termination, or a rent abatement for the period the unit was uninhabitable] (see State notes for what applies where I live);
  • Recovery of my out-of-pocket losses caused by the infestation [discarded mattress/furniture, my own emergency treatment cost, medical/laundry costs], where my state permits it.

Any attempt to raise my rent, cut services, refuse to renew, or evict me because I sent this notice is unlawful retaliation, which my state prohibits and presumes when it follows a good-faith habitability complaint.

Please direct all correspondence about this matter to me in writing at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [dated photos of the bed bugs / bites / staining; pest-control operator's report if any; copy of the lease; copy of any prior written notice; receipts for items you had to discard or treat]`,
    howToUse: [
      "Send it by certified mail, return receipt requested, AND keep a copy. In several states (Maine, Florida, Texas) the written notice is what starts the landlord's legal clock to act — the certified-mail green card is your proof of the date you put them on notice. Hand or email a copy to the on-site manager too, but the certified letter is the one that counts.",
      "Document before you treat. Take dated, in-focus photos of live bugs, bites, and the rust-colored fecal staining or shed skins on the mattress seams, box spring, and headboard. If you can afford a one-time inspection by a licensed operator, their written confirmation is powerful — but photos plus your dated account are enough to give notice. Do not throw out the infested mattress until you have photographed it; the landlord may dispute the infestation later.",
      "Pick your state tier correctly. Tier A states put the extermination duty on the landlord by statute (FL names bedbugs outright; ME requires a 5-day inspection; CA bars renting known-infested units and requires a vermin-free dwelling; NYC requires the owner to keep the premises pest-free). Tier B states (AZ) impose disclosure/no-knowingly-renting duties and route the cure through the general habitability statute. Tier C is everywhere else — the implied warranty of habitability still makes it the landlord's problem. Strike the tiers that don't apply before you send.",
      "Highest-leverage move: name the agency you'll call. A code-enforcement, housing, or health-department complaint is free, creates an official record, and can result in a citation and fine against the landlord — and in NYC a bed bug infestation is a hazardous Housing Maintenance Code violation. Landlords settle fast when an inspector is about to show up. Put the specific agency name in your demand.",
      "Top mistake to avoid: do NOT treat the unit yourself and then try to bill the landlord without notice and a deadline first, and do NOT stop paying rent on your own theory. Self-help rent withholding is only legal in specific states with specific procedures (escrow, notice, repair-and-deduct caps). Give written notice, set a deadline, and let the statute work — paying into escrow or following your state's repair-and-deduct rule exactly is what protects you from an eviction for nonpayment.",
    ],
    legalContext: [
      "A bed bug infestation in a rental almost always lands on the landlord, but through two overlapping legal channels. The first is the implied warranty of habitability — a promise, recognized in nearly every state, that a residential unit is fit for human habitation and free of conditions dangerous or detrimental to the tenant's health and safety. The seminal case is Javins v. First National Realty Corp., 428 F.2d 1071 (D.C. Cir. 1970), which held that \"a warranty of habitability ... is implied by operation of law into leases\" of dwellings and that breach gives rise to ordinary contract remedies. Bed bugs — which bite, cause allergic and dermatological reactions, destroy sleep, and migrate through walls, outlets, and shared structures — are a textbook habitability defect. The second channel is a smaller but growing set of bed-bug-specific statutes that impose explicit landlord duties to inspect, disclose, treat, or refrain from renting a known-infested unit. Where both apply, the tenant can lean on whichever is stronger.",
      "Tier A states put the duty on the landlord most directly. Florida is the cleanest: Fla. Stat. § 83.51(2)(a)1 requires the landlord to provide \"the extermination of rats, mice, roaches, ants, wood-destroying organisms, and bedbugs\" — bed bugs are named in the statute itself — for multi-unit dwellings (the duty can be shifted by written agreement only for a single-family home or duplex). Maine's 14 M.R.S. § 6021-A is the most procedurally specific: upon oral OR written notice from a tenant, the landlord \"shall within 5 days conduct an inspection,\" must take reasonable measures to identify and treat the infestation as determined by a pest control agent, may not offer for rent a unit it knows or suspects is infested, and must disclose on request the last date the unit (or an adjacent unit) was inspected and found bed-bug-free. California combines a no-renting rule (Cal. Civ. Code § 1954.602: a landlord \"shall not show, rent, or lease\" a vacant unit it knows has a current bed bug infestation) with the codified warranty of habitability (Cal. Civ. Code § 1941.1(a) makes a dwelling untenantable if it is not kept \"clean, sanitary, and free from all accumulations of debris, filth, rubbish, garbage, rodents, and vermin\"). New York City's Housing Maintenance Code, after Local Law 55 of 2018 repealed the old § 27-2018, now requires under N.Y.C. Admin. Code § 27-2017.1 that the owner \"take reasonable measures to keep the premises free from pests\" and remediate infestations; under § 27-2017.4 a pest infestation is a hazardous violation enforceable by HPD.",
      "Tier B captures bed-bug statutes that regulate disclosure and renting but route the actual cure through the general habitability obligation. Arizona is the model: Ariz. Rev. Stat. § 33-1319 requires the landlord to provide bed bug educational materials to tenants and prohibits knowingly renting an infested unit, but § 33-1319(E) bars a freestanding \"damages caused by bedbugs\" cause of action except as the section provides. So the operative lever is the general fit-and-habitable duty in Ariz. Rev. Stat. § 33-1324(A)(2) — \"make all repairs and do whatever is necessary to put and keep the premises in a fit and habitable condition\" — backed by the tenant-remedy machinery in § 33-1361 (written notice; a 10-day cure window, shortened to 5 days for § 33-1324 conditions affecting health and safety; damages and injunctive relief). Note § 33-1319 excludes single-family residences. Many states with disclosure-only or notice-only bed bug laws fit this same pattern: the statute proves the landlord knew bed bugs are their concern, and the warranty of habitability supplies the remedy.",
      "Tier C is the default — states with no bed-bug-specific statute, where the implied warranty of habitability (or a general repair statute) governs. Texas has no bed bug statute; the claim runs through Tex. Prop. Code § 92.052(a), which requires the landlord to \"make a diligent effort to repair or remedy\" a condition that \"materially affects the physical health or safety of an ordinary tenant\" once the tenant gives notice and is current on rent, with the § 92.056 remedy framework (notice to the place rent is paid; a \"reasonable time\" to repair, with a rebuttable presumption that seven days is reasonable). Everywhere else, the analysis is the same Javins-rooted warranty: a serious infestation makes the unit unfit, the tenant must give the landlord notice and a reasonable opportunity to cure, and the available remedies — repair-and-deduct, rent withholding into escrow, rent abatement, or lease termination — vary by state and must be followed exactly. Two caveats apply across all tiers: the landlord's duty generally does not extend to infestations the tenant caused or unreasonably refused to let be treated, and a tenant must cooperate with treatment (granting access, preparing the unit) to preserve the claim.",
    ],
    stateNotes: [
      {
        state: "Florida (Tier A)",
        note: "Fla. Stat. § 83.51(2)(a)1 — landlord must provide \"the extermination of rats, mice, roaches, ants, wood-destroying organisms, and bedbugs\" (bed bugs named expressly). Duty applies to multi-unit dwellings; for a single-family home or duplex it can be shifted by written agreement. Remedy: § 83.56(1) — deliver written notice specifying the noncompliance; landlord has 7 days to cure before you may terminate.",
      },
      {
        state: "Maine (Tier A)",
        note: "14 M.R.S. § 6021-A — on oral OR written notice, landlord \"shall within 5 days conduct an inspection,\" must reasonably treat as a pest-control agent determines, may not rent a unit it knows/suspects is infested, and must disclose on request when the unit or an adjacent unit was last found bed-bug-free. Habitability backstop: 14 M.R.S. § 6021 (\"fit for human habitation,\" act \"without unreasonable delay\" — no fixed day-count). Retaliation: 14 M.R.S. § 6001 — rebuttable presumption if eviction within 6 months of a complaint.",
      },
      {
        state: "California (Tier A)",
        note: "Cal. Civ. Code §§ 1954.600–1954.605 (Bed Bug Infestations; added 2016, eff. 2017): § 1954.602 bars renting a unit known to be infested; § 1954.603 disclosure to new tenants + notice of operator findings; § 1954.604 access/cooperation; § 1954.605 written notice of findings within 2 business days. Warranty: Cal. Civ. Code § 1941.1(a) (must be \"clean, sanitary, and free from ... rodents, and vermin\"). Remedies: § 1942 repair-and-deduct (up to one month's rent; 30-day reasonableness presumption); § 1942.5 anti-retaliation (180-day window).",
      },
      {
        state: "New York City (Tier A)",
        note: "N.Y.C. Admin. Code § 27-2017.1 — owner must \"take reasonable measures to keep the premises free from pests\" (includes bed bugs) and remediate; § 27-2017.4 makes a pest infestation a hazardous HMC violation (Local Law 55 of 2018 repealed the old § 27-2018). Disclosure: § 27-2018.1 — at vacancy-lease signing, owner must give the DHCR bedbug-history notice (prior year, unit + building). Statewide warranty: N.Y. Real Prop. Law § 235-b. Retaliation: N.Y. Real Prop. Law § 223-b (1-year presumption).",
      },
      {
        state: "Arizona (Tier B)",
        note: "Ariz. Rev. Stat. § 33-1319 — landlord must give bed bug educational materials and may not knowingly rent an infested unit; § 33-1319(E) bars a standalone bedbug-damages claim and excludes single-family homes. Cure runs through § 33-1324(A)(2) (keep premises \"fit and habitable\") + § 33-1361 (written notice; 10-day cure, 5 days for health/safety conditions; damages + injunctive relief). Retaliation: § 33-1381 (6-month presumption).",
      },
      {
        state: "Texas (Tier C)",
        note: "No bed-bug-specific statute. Tex. Prop. Code § 92.052(a)(3)(A) — landlord must make a diligent effort to repair a condition that \"materially affects the physical health or safety of an ordinary tenant\" after written notice (tenant must be current on rent). § 92.056 — repair within a reasonable time; rebuttable presumption that 7 days is reasonable. § 92.0561 — tenant repair-and-deduct remedy if the procedure is followed.",
      },
      {
        state: "New York State (outside NYC)",
        note: "N.Y. Real Prop. Law § 235-b — implied warranty of habitability: premises must be \"fit for human habitation\" and free of conditions \"dangerous, hazardous or detrimental to ... life, health or safety\"; the warranty cannot be waived. A serious bed bug infestation breaches it. Retaliation barred by N.Y. Real Prop. Law § 223-b (1-year rebuttable presumption).",
      },
      {
        state: "All other states (default)",
        note: "Implied warranty of habitability applies (anchor: Javins v. First National Realty Corp., 428 F.2d 1071 (D.C. Cir. 1970)). A bed bug infestation is a condition affecting health and safety; give the landlord written notice and a reasonable time to cure, then use your state's remedy (repair-and-deduct, rent escrow, abatement, or termination). Check your state landlord-tenant act and local housing/health code for the exact procedure and deadlines before withholding rent.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the notice, escalate in this order. First, file a complaint with your local code-enforcement, housing, or health department — it is free, creates an official record, and an inspector citation often forces action overnight (in NYC, report to HPD; a bed bug infestation is a hazardous violation). Second, use your state's self-help remedy exactly as written: repair-and-deduct (CA Civ. Code § 1942 caps it at one month's rent; TX § 92.0561 has its own procedure), or rent withholding into a court-supervised escrow account where your state allows it — never just stop paying, which exposes you to eviction. Third, sue in small claims for a rent abatement covering the period the unit was uninhabitable plus your out-of-pocket losses (discarded furniture, your own extermination cost, medical and laundry costs); small claims limits run roughly $5,000–$12,000 depending on the state and usually need no lawyer. Statutes of limitations on these claims are typically 2–4 years, but move fast — the contemporaneous photos, the pest-control report, and the certified-mail receipt are what win the case, and memories and evidence fade.",
    relatedSlugs: [
      "pest-infestation-notice",
      "mold-notice",
      "repair-request-formal",
      "repair-and-deduct-notice",
      "heat-utility-failure",
      "security-deposit-demand",
    ],
    faqs: [
      {
        question: "Who pays for bed bug extermination — me or my landlord?",
        answer:
          "In almost every case, the landlord. Several states make it an express statutory duty (Florida's § 83.51 literally lists \"bedbugs\"; Maine's § 6021-A requires a 5-day inspection and treatment), and everywhere else the implied warranty of habitability puts it on the landlord. The main exception is when you introduced the infestation or unreasonably refused to cooperate with treatment — then the cost can shift to you (Maine § 6021-A spells this out).",
      },
      {
        question: "Can I withhold rent until the bed bugs are gone?",
        answer:
          "Only if your state allows it and you follow the exact procedure — and even then, usually by paying into an escrow account, not just keeping the money. Some states allow repair-and-deduct (California caps it at one month's rent under Civ. Code § 1942). Withholding rent on your own theory is the fastest way to get evicted for nonpayment. Give written notice with a deadline first, then use your state's specific remedy.",
      },
      {
        question: "Can my landlord evict me or raise my rent for reporting bed bugs?",
        answer:
          "No. That is retaliation, and it is illegal. States presume retaliation when the landlord acts shortly after a good-faith habitability complaint — within 180 days in California (Civ. Code § 1942.5), six months in Arizona (§ 33-1381) and Maine (§ 6001), and one year in New York (Real Prop. Law § 223-b). Keep your certified-mail receipt; it proves when you complained.",
      },
      {
        question: "Do I need a pest-control company to confirm the bed bugs before I write?",
        answer:
          "No. Your dated photos of live bugs, bites, and the rust-colored fecal staining on the mattress seams plus your written account are enough to give legal notice. A licensed operator's written confirmation makes the case stronger and is worth it if you can afford one, but don't wait on it — notice starts the landlord's legal clock, and in Maine even oral notice triggers the 5-day inspection deadline.",
      },
      {
        question: "How fast does the landlord have to act after I send this?",
        answer:
          "It depends on your state. Maine requires an inspection within 5 days of notice (§ 6021-A). Florida gives the landlord 7 days to cure after your written notice (§ 83.56). Texas presumes 7 days is a reasonable time to repair (§ 92.056). Arizona's general health-and-safety cure window is 5 days (§ 33-1361). Where no statute sets a number, the standard is a \"reasonable time\" — for an active infestation, that means days, not weeks.",
      },
    ],
    keywords: [
      "bed bugs in apartment landlord won't do anything",
      "is my landlord responsible for bed bugs",
      "bed bug letter to landlord",
      "how to get landlord to pay for bed bug extermination",
      "tenant rights bed bugs",
      "bed bug infestation rental notice",
      "landlord refuses to treat bed bugs",
      "can I break my lease because of bed bugs",
      "bed bugs warranty of habitability",
      "report bed bugs to landlord in writing",
    ],
    publishedAt: "2026-06-26",
  },

  {
  slug: "lease-early-termination-domestic-violence",
  category: "landlord",
  title: "Early Lease Termination for Domestic Violence Survivors (Free Letter + State Statutes)",
  metaDescription:
    "Survivor of domestic violence, sexual assault, or stalking? Free notice to break your lease early without penalty — citing Cal. Civ. Code § 1946.7, NY RPL § 227-c, TX Prop. Code § 92.016, and more.",
  lede:
    "If you are a survivor of domestic violence, sexual assault, stalking, or human trafficking, almost every state lets you end your lease early — without an early-termination fee and without owing the rest of the term. This letter gives the statutory notice and caps your remaining rent. You generally do not have to describe what happened; you attach a qualifying document and your landlord must release you.",
  body: `[Your Full Name]
[Current Mailing Address — you may use a safe mailing address, P.O. box, or your advocate's address]
[City, State ZIP]
[Phone — optional] [Email — optional]

[Date]

[Landlord / Property Manager Legal Name]
[Landlord Address]

Sent via certified mail, return receipt requested
[Optional: copy emailed to property manager and hand-delivered]

Re: Statutory Notice of Early Lease Termination — Unit [Apt/Unit #], [Property Address]; Lease dated [Lease Date]

To [Landlord / Property Manager]:

I am a tenant at [Property Address], Unit [#], under the lease dated [Lease Date]. I am exercising my right under my state's law to terminate this tenancy early because I am a survivor of [domestic violence / sexual assault / stalking / human trafficking — state only the category, not the details]. I am not required to explain what happened beyond providing the documentation described below, and I ask that this letter and its enclosures be kept confidential.

I am giving you this written notice as required by statute. My intended termination date is [Termination Date — see "Legal basis" for your state's minimum notice]. I will surrender possession and return keys on or before that date.

Legal basis:

[Keep the paragraph for your state. Strike the rest. Confirm your state's section before sending.]

  [CALIFORNIA] Under Cal. Civ. Code § 1946.7, a tenant who (or whose household member or immediate family member) is a victim of domestic violence, sexual assault, stalking, human trafficking, elder or dependent adult abuse, or a qualifying violent crime may terminate the tenancy on written notice with attached documentation. My notice is given within 180 days of [the date the order/report was issued OR the date the act occurred] as § 1946.7(d) requires. Under § 1946.7(e), I am responsible for rent for no more than 14 calendar days after this notice.

  [NEW YORK] Under N.Y. Real Property Law § 227-c, I am entitled to terminate this lease and surrender possession. Per § 227-c(2), my termination date is no earlier than 30 days after delivery of this notice, and I will provide qualifying documentation within 25 days. Per § 227-c(3), I am not liable for rent for any period after the effective termination date.

  [TEXAS] Under Tex. Prop. Code § 92.016, a tenant who is a victim of family violence may vacate and avoid liability for future rent and other sums due under the lease after (1) providing the documentation described below and (2) giving written notice of termination on or before the 30th day before the termination date. [If your situation is sexual assault or stalking rather than family violence, cite the companion section § 92.0161 instead.] This right may not be waived (§ 92.016(g)). [If the person who committed the violence is a cotenant or occupant of the unit, the 30-day notice is not required.]

  [ILLINOIS] Under the Safe Homes Act, 765 ILCS 750/15, I am vacating because of a credible, imminent threat of domestic or sexual violence at the premises. I am giving you written notice prior to or within 3 days of vacating. Under the Act I am not liable for rent for the period after I vacate, and you may not charge an early-lease-termination fee.

  [WASHINGTON] Under RCW 59.18.575, a tenant who is a victim of domestic violence, sexual assault, unlawful harassment, or stalking may terminate the rental agreement by written notice with qualifying documentation, requested within 90 days of the act. I am discharged from rent for any period following the last day of the month of my quitting date; I remain responsible for rent for the month in which I terminate.

  [COLORADO] Under C.R.S. § 38-12-402, a tenant who is a victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse may terminate the lease with written notice and evidence. After I vacate, I am responsible for no more than one month's rent, payable within 90 days, and only if you actually document damages of at least one month's rent as a result of the early termination. You may not evict me solely because I am a victim.

  [NEW JERSEY] Under the Safe Housing Act, N.J.S.A. 46:8-9.6 et seq., I (or my child) face an imminent threat of serious physical harm if I remain in this unit. With this written notice and the attached documentation, this lease terminates 30 days after you receive this notice. I am responsible for rent only through that 30-day period, and my security deposit is to be returned within 15 days after I vacate.

  [ALL OTHER STATES / FEDERALLY ASSISTED HOUSING] The large majority of states have an early-termination statute for survivors that releases the tenant from future rent on written notice plus qualifying documentation. [Insert your state's section here — see the State Notes below or your state's tenant-rights/coalition resource.] Separately, if this unit is in a "covered housing program" (public housing, Section 8 / Housing Choice Voucher, project-based Section 8, LIHTC, USDA rural, HUD-insured, HOME, or HOPWA), the Violence Against Women Act, 34 U.S.C. § 12491, prohibits eviction based on my victim status, allows the lease to be bifurcated to remove the abuser without ending my tenancy, and entitles me to request an emergency transfer to a safe unit.

Documentation enclosed (one qualifying document is sufficient under my state's statute):

  [ ] A protective order / restraining order (e.g., domestic-violence, sexual-assault, stalking, or antiharassment order)
  [ ] A written police / law-enforcement report
  [ ] A signed statement from a qualified third party (e.g., a medical or mental-health provider, a domestic-violence or victim-services advocate, an attorney, or clergy)
  [ ] Other documentation that reasonably verifies the act, as my state's statute permits

Demand:

1. Confirm in writing within [10] days that you accept this statutory notice and that the tenancy terminates effective [Termination Date].
2. Limit my remaining rent obligation to the amount my state's statute allows (see "Legal basis" above) — do not charge any early-termination fee, lease-break penalty, or "loss of rent" for the remainder of the term.
3. Return my full security deposit, less only lawful deductions, within the period required by law, to [forwarding address — you may use a safe address].
4. Keep this notice and its enclosures confidential and do not disclose my new address or contact information to any third party.

If you do not honor this statutory notice, I may:
  • Treat any post-termination rent demand or fee as a violation of the statute cited above and assert it as a complete defense;
  • Report the matter to my state's attorney general, fair-housing agency, or local tenant-rights / legal-aid office;
  • Recover my security deposit and any statutory damages, including attorney's fees where the law provides them.

[Optional sentence: I have already provided you with a forwarding address for the security deposit and for any further correspondence.]

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [the qualifying document(s) checked above; a copy of the lease; forwarding address]`,
  howToUse: [
    "Send by certified mail with return receipt requested, and keep a copy of everything. The return receipt is what proves the date your landlord received notice — that date starts the statutory clock (14 days in CA, 30 days in NY/TX/NJ, end-of-month in WA, etc.). If you can, also hand-deliver or email a copy.",
    "Attach ONE qualifying document — you usually do not have to attach all of them or describe the abuse. A protective/restraining order, a police report, or a signed statement from a domestic-violence advocate, therapist, doctor, attorney, or (in some states) clergy is enough. Check the box for what you are enclosing and strike the rest.",
    "Pick your state paragraph in 'Legal basis,' confirm the section number is current for your state, and delete the others. The states differ mainly on two things: how much notice you must give, and how much rent (if any) you still owe after you leave. Set your 'Termination Date' to satisfy your state's minimum notice.",
    "Highest-leverage tip: your remaining rent is capped by statute, so never agree to pay out the rest of the lease or an 'early-termination fee.' California caps it at 14 days of rent after notice; Washington at the rest of that month; Illinois and New York release you from rent after you leave / after the termination date; Colorado caps it at one month and only if the landlord documents real damages. Quote the cap back to the landlord if they push.",
    "Top mistake to avoid: do not put the abuser's name, your new address, or graphic details in the letter unless your statute requires it — most do not. Use a safe mailing/forwarding address (a P.O. box or your advocate's address is fine), and ask in writing that your information be kept confidential. If you share the unit with the abuser on a joint lease, note that some states (e.g., Texas) waive the notice period when the abuser is a cotenant, and federally assisted housing can bifurcate the lease to remove them.",
  ],
  legalContext: [
    "Almost every U.S. state now has a statute that lets a survivor of domestic violence — and, in most states, sexual assault, stalking, and sometimes human trafficking — end a residential lease early without paying out the remaining term and without an early-termination penalty. The mechanics are consistent across states: the tenant gives the landlord written notice, attaches a qualifying document (most often a protective order, a police report, or a signed statement from a qualified third party such as a domestic-violence advocate or health-care provider), and the lease terminates on a statutory timeline. What varies is (1) how much advance notice is required and (2) how much rent, if any, the tenant still owes after vacating. Because these statutes are remedial, courts read them in the survivor's favor, and several states make the right non-waivable, meaning a lease clause purporting to give it up is void.",
    "California Civil Code § 1946.7 is the broadest and one of the cleanest anchors. It covers a tenant whose household member or immediate family member is a victim of domestic violence, sexual assault, stalking, human trafficking, elder or dependent adult abuse, or a qualifying violent crime — not just the named tenant. Section 1946.7(b) accepts a wide range of documentation: a protective order, \"a copy of a written report by a peace officer,\" documentation from a qualified third party on letterhead, or \"any other form of documentation that reasonably verifies\" the act. Section 1946.7(d) requires the notice within 180 days of the order, report, or act. The key number is § 1946.7(e): the tenant \"shall be responsible for payment of rent for no more than 14 calendar days following the giving of the notice, or for any shorter appropriate period.\" That 14-day cap is the strongest rent-liability outcome of any state surveyed.",
    "Other large states reach the same place by different routes. New York Real Property Law § 227-c lets a survivor terminate by written notice with a termination date no earlier than 30 days out; documentation (a court order, a law-enforcement record, a healthcare record, or a written verification from a qualified third party) is provided within 25 days, and § 227-c(3) releases the tenant from rent after the effective termination date — New York's current notice-based route reflects the 2021 amendment, replacing the older court-order-only process. Texas Property Code § 92.016 lets a victim of family violence \"vacate and avoid liability for future rent\" after a 30-day written notice plus a court order or documentation from a licensed health-care provider, mental-health provider, or advocate; § 92.016(g) makes the right non-waivable, and the 30-day notice is excused if the abuser is a cotenant. Texas treats sexual assault and stalking under the companion section, § 92.0161. Illinois's Safe Homes Act (765 ILCS 750/15) gives a tenant who flees a \"credible imminent threat of domestic or sexual violence\" an affirmative defense to post-vacate rent if written notice is given prior to or within 3 days of leaving, and bars any lease-break fee.",
    "The remaining surveyed states show how the rent-cutoff differs. Washington (RCW 59.18.575) discharges the tenant from rent for any period after the last day of the month of the quitting date — the tenant pays through that month and no further — and accepts either a protection order or a qualified-third-party record, requested within 90 days of the act. Colorado (C.R.S. § 38-12-402) caps remaining liability at one month's rent, payable within 90 days, and only if the landlord actually documents damages of at least one month's rent; qualifying evidence is a police report within the prior 60 days, a valid protection order, or a written statement from a medical professional or application assistant. New Jersey's Safe Housing Act (N.J.S.A. 46:8-9.6 et seq.) terminates the lease 30 days after the landlord receives notice, with the tenant liable only through that period, on proof such as a certified restraining order or a law-enforcement record. For everyone else — and as an additional layer for anyone in subsidized housing — the federal Violence Against Women Act, 34 U.S.C. § 12491, protects tenants in \"covered housing programs\" (public housing, Section 8/HCV, project-based Section 8, LIHTC, USDA rural, HUD-insured, HOME, HOPWA) from eviction based on victim status, permits lease bifurcation to remove the abuser without displacing the survivor, and entitles survivors to an emergency transfer to a safe unit.",
  ],
  stateNotes: [
    {
      state: "California",
      note: "Cal. Civ. Code § 1946.7. Covers DV, sexual assault, stalking, human trafficking, elder/dependent abuse, and qualifying violent crimes — including when the victim is a household or immediate-family member. Notice within 180 days of the order/report/act (§ d). Documentation: protective order, peace-officer report, qualified-third-party statement, or other reasonable verification (§ b). Rent liability capped at no more than 14 days after notice (§ e). Broadest statute and lowest rent cap surveyed.",
    },
    {
      state: "New York",
      note: "N.Y. Real Prop. Law § 227-c. Written notice with a termination date no earlier than 30 days out; documentation within 25 days (court order, law-enforcement record, healthcare record, or qualified-third-party verification incl. clergy/attorney/therapist/DV provider). Released from rent after the effective termination date (§ 3). Notice-based route added by the 2021 amendment; no court order required.",
    },
    {
      state: "Texas",
      note: "Tex. Prop. Code § 92.016 (family violence); § 92.0161 (sex offenses / stalking). 30-day written notice + a court/protective order or documentation from a licensed health-care provider, mental-health provider, or advocate; then vacate and avoid liability for future rent. Right is non-waivable (§ 92.016(g)). 30-day notice excused if the abuser is a cotenant/occupant.",
    },
    {
      state: "Illinois",
      note: "Safe Homes Act, 765 ILCS 750/15. For a credible imminent threat of domestic or sexual violence. Written notice prior to or within 3 days of vacating. Affirmative defense to rent for the period after vacating; no early-lease-break fee. Tenant still owes rent up to the point of vacating.",
    },
    {
      state: "Washington",
      note: "RCW 59.18.575. Victim of DV, sexual assault, unlawful harassment, or stalking. Written notice + a qualifying protection order or qualified-third-party record; request within 90 days of the act. Discharged from rent for any period after the last day of the month of the quitting date (pays through that month only).",
    },
    {
      state: "Colorado",
      note: "C.R.S. § 38-12-402. Victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse. Written notice + evidence (police report within prior 60 days, valid protection order, or written statement from a medical professional/application assistant). Liability capped at one month's rent, payable within 90 days, and only if the landlord documents damages of at least one month's rent. No eviction solely for being a victim.",
    },
    {
      state: "New Jersey",
      note: "Safe Housing Act, N.J.S.A. 46:8-9.6 et seq. (P.L. 2008 c.111). Written notice that the tenant or tenant's child faces an imminent threat of serious physical harm + one qualifying document (certified restraining order under the Prevention of Domestic Violence Act or another jurisdiction's, law-enforcement record, medical documentation, or certification from a DV specialist or licensed social worker). Lease ends 30 days after the landlord receives notice; rent owed only through that period; security deposit returned within 15 days.",
    },
    {
      state: "All other states + federally assisted housing",
      note: "Most states have an analogous early-termination statute — confirm your state's section via your state's tenant-rights office, a legal-aid line, or your state domestic-violence coalition before sending. Separately, if your unit is in a covered housing program (public housing, Section 8/HCV, project-based Section 8, LIHTC, USDA rural, HUD-insured, HOME, HOPWA), VAWA, 34 U.S.C. § 12491, bars eviction based on victim status, allows lease bifurcation to remove the abuser, and entitles you to an emergency transfer to a safe unit.",
    },
  ],
  ifThisDoesntWork:
    "If the landlord refuses to release you or tries to charge the rest of the lease, you generally do not have to sue first — the statute is a shield, not just a sword. If the landlord later sues for the unpaid term, the early-termination statute is a complete defense (Illinois states this expressly as an \"affirmative defense\"), so respond and raise it rather than ignoring the case. To go on offense or recover your deposit, contact your state attorney general's office, your state or local fair-housing agency, and — most useful — a legal-aid organization or your state domestic-violence coalition, which often handle these housing matters for free and know your state's section cold. Many of these statutes (and your state's security-deposit law) shift attorney's fees to the prevailing tenant, which makes representation economical. Watch the deadlines: most states require the notice within a set window after the qualifying event (CA 180 days; WA/CO 90/60 days for some documentation), and security-deposit claims have their own short statutes of limitation.",
  relatedSlugs: [
    "intent-to-vacate",
    "security-deposit-demand",
    "quiet-enjoyment-demand",
    "illegal-entry-cease-and-desist",
    "return-of-belongings-after-move-out",
    "deposit-itemization-request",
    "move-out-walkthrough-request",
  ],
  faqs: [
    {
      question: "Do I have to tell my landlord what happened to me?",
      answer:
        "No. In almost every state you only have to state that you are a survivor and attach one qualifying document — a protective order, a police report, or a signed statement from an advocate, doctor, therapist, attorney, or (in some states) clergy. You do not have to describe the abuse, name the abuser to the landlord, or give the landlord the underlying records. You can also ask, in writing, that the notice and enclosures be kept confidential.",
    },
    {
      question: "Will I owe the rest of my lease or an early-termination fee?",
      answer:
        "Generally no. That is the whole point of these statutes. California caps your remaining rent at 14 days after notice (Cal. Civ. Code § 1946.7(e)); Washington at the rest of the current month; Illinois and New York release you from rent after you leave / after the termination date; Colorado caps it at one month and only if the landlord documents real damages. An \"early-termination fee\" or lease-break penalty is not allowed under these provisions.",
    },
    {
      question: "What documents count as proof?",
      answer:
        "It varies slightly by state, but the common qualifying documents are: a protective or restraining order; a police or law-enforcement report; and a signed statement from a \"qualified third party\" — typically a domestic-violence or victim-services advocate, a medical or mental-health provider, an attorney, or clergy. California also accepts \"any other form of documentation that reasonably verifies\" the act. You usually need only one.",
    },
    {
      question: "What if my abuser is on the lease with me?",
      answer:
        "Some states address this directly. In Texas, the 30-day notice requirement is waived when the person who committed the family violence is a cotenant or occupant. In federally assisted (covered) housing, VAWA (34 U.S.C. § 12491) lets the landlord bifurcate the lease — remove the abuser while keeping you and your tenancy in place. Ask your landlord, in writing, to bifurcate rather than terminate if you want to stay.",
    },
    {
      question: "Is there a deadline to send this notice?",
      answer:
        "Often yes, tied to the qualifying event. California requires notice within 180 days of the order, report, or act (§ 1946.7(d)). Washington requires the request within 90 days of the act, and Colorado accepts a police report only if written within the prior 60 days. New York and New Jersey are notice-driven (the lease ends 30 days out) rather than deadline-driven. Send the notice as soon as you safely can, and keep proof of the mailing date.",
    },
  ],
  keywords: [
    "break lease domestic violence",
    "early lease termination domestic violence",
    "terminate lease victim of abuse",
    "leave apartment because of stalking",
    "domestic violence lease termination letter",
    "break lease without penalty survivor",
    "California Civil Code 1946.7 lease",
    "can I break my lease if I'm being abused",
    "sexual assault break lease early",
    "move out abusive partner lease",
  ],
  publishedAt: "2026-06-26",
},

  {
  slug: "lease-renewal-or-month-to-month-confirmation",
  category: "landlord",
  title: "Lease Ending? Renewal or Month-to-Month Confirmation Letter (Free Template + State Notice Rules)",
  metaDescription:
    "Your fixed-term lease is ending. Free letter to request a renewal or confirm a month-to-month holdover — cites Cal. Civ. Code § 1946.1 / § 1945, NY RPL § 226-c, Fla. Stat. § 83.57, WA just-cause law.",
  lede:
    "Your fixed-term lease is about to end. You have three options — renew, leave, or roll into a month-to-month tenancy — and the notice rules are different in every state. This letter puts your choice in writing, on the record, with the statute that governs it, so neither side can later invent terms that were never agreed to.",
  body: `[Your Full Name]
[Address — the unit this is about]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager Legal Name]
[Landlord Address]

Sent via certified mail, return receipt requested
(Copy also emailed to [landlord email])

Re: Lease ending [Lease End Date] at [Unit Address] — terms going forward

To [Landlord / Property Manager]:

My fixed-term lease for the unit at [Unit Address] expires on [Lease End Date]. I am writing now, in advance, to confirm in writing the terms that will govern my tenancy after that date. Please treat this letter as my formal notice of intent and confirm the relevant items below in writing within [14] days.

[Choose ONE path below. Delete the path you are not using.]

  ─────────────────────────────────────────────
  PATH A — REQUEST TO RENEW
  ─────────────────────────────────────────────
  I would like to renew my tenancy and remain in the unit. I am requesting a renewal on the following terms:
    • Term: [a new 12-month fixed term / a 6-month term / month-to-month]
    • Monthly rent: $[Proposed or current rent]
    • Start date of the renewal: [Day after Lease End Date]
    • All other terms of the current lease to continue unchanged.

  Please send me a written renewal agreement, or written confirmation of these terms, by [Date]. If you intend to change the rent or any other material term, please state the specific change and provide the advance written notice your state requires (see "Legal basis," below) so I can decide before the current term ends.

  ─────────────────────────────────────────────
  PATH B — CONFIRM CONVERSION TO MONTH-TO-MONTH (HOLDOVER)
  ─────────────────────────────────────────────
  If we do not sign a new fixed-term lease before [Lease End Date], I intend to remain in the unit and continue paying rent on the same monthly schedule. I am writing to confirm that, in that event, my tenancy converts to a month-to-month (periodic) tenancy on the same terms as my current lease — NOT a renewed fixed term and NOT a new full-year obligation.

  Please confirm in writing:
    1. That my tenancy will continue month-to-month after [Lease End Date] on the existing terms;
    2. The monthly rent that will apply ($[Current rent], unless you are giving proper advance notice of an increase); and
    3. That either party may end the month-to-month tenancy on the written notice my state requires (stated below).

  ─────────────────────────────────────────────

Legal basis:

[Pick the tier that matches your state — strike the others. See the state notes that accompany this letter for the exact citation.]

  [TIER 1 — JUST-CAUSE STATES — you generally cannot be refused a continuation without a statutory cause]
  I have occupied this unit since [Move-in Date]. Under [Cal. Civ. Code § 1946.2 (after 12 months' continuous occupancy) / Wash. Rev. Code § 59.18.650], the owner may not end my tenancy or refuse to continue it except for one of the causes enumerated by statute, with the required written notice and (for no-fault grounds) any required relocation assistance. Absent a qualifying cause, I am entitled to continue as a month-to-month tenant on the existing terms.

  [TIER 2 — GRADUATED-NOTICE STATE (New York)]
  Under N.Y. Real Property Law § 226-c, before refusing to renew my tenancy or raising my rent by 5% or more, the landlord must give written notice based on how long I have occupied the unit: at least 30 days (occupancy under 1 year), 60 days (1–2 years), or 90 days (2 years or more). Under § 232-c, if you accept rent for any period after my term expires, the tenancy becomes a month-to-month tenancy — holding over does not bind me to a new fixed term.

  [TIER 3 — SINGLE-NOTICE / MOST STATES (e.g., Texas, Florida, default)]
  Under [Tex. Prop. Code § 91.001 / Fla. Stat. § 83.57 / my state's periodic-tenancy statute], a month-to-month tenancy may be ended by either party with written notice of at least one full rental period — [one month / 30 days] for a monthly tenancy. If my current lease requires a specific number of days' notice of non-renewal, I am providing this letter to satisfy that clause; [in Florida, Fla. Stat. § 83.575 caps any such lease-required notice at 30 to 60 days and requires you to give me reciprocal notice if the lease will not be renewed].

Holdover — what happens if neither side acts:

If my fixed term simply expires and I remain in possession with your acceptance of rent, the law of most states treats the tenancy as continuing month-to-month on the existing terms, not as a renewed fixed term. [Cal. Civ. Code § 1945 presumes a renewal "on the same terms and for the same time, not exceeding one month when the rent is payable monthly." / N.Y. Real Property Law § 232-c provides that acceptance of rent after the term creates a tenancy from month to month.] [FLORIDA ONLY: under Fla. Stat. § 83.04, a holdover under a written lease is a tenancy at sufferance and mere acceptance of rent does NOT renew the term — please confirm in writing that you consent to my continued occupancy on a month-to-month basis.] I am raising this now so there is no later dispute that I owe a full additional year of rent. I do not, unless we both sign a new fixed-term lease.

Request / Demand:

Within [14] days of receipt of this letter, please confirm in writing:
  • Whether you accept the renewal terms in Path A, OR confirm the month-to-month terms in Path B; and
  • The monthly rent that will apply after [Lease End Date], including any increase stated with the advance written notice my state requires.

If you intend to end the tenancy rather than continue it, please provide formal written notice in compliance with the statute cited above. A notice that gives less time than the statute requires — or, in a just-cause state, that lacks a statutory cause — is defective and is not a valid basis for eviction.

I would prefer to resolve this cooperatively and keep good records on both sides. This letter, and your written reply, will serve as the documentation of whatever we agree to.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of current lease; pay records / proof of on-time rent; any prior written communication about renewal]`,
  howToUse: [
    "Send by certified mail with return receipt requested AND email a copy. The certified-mail receipt is what proves the landlord received it and timestamps your notice — which matters because most notice periods are counted in full rental periods, not calendar days from the day you dropped it in the mail.",
    "Pick ONE path and delete the other. Path A asks to renew on stated terms; Path B confirms that you will roll into a month-to-month holdover and pins down the rent and the notice rules. Fill in your move-in date, lease-end date, and rent before sending — those three facts drive every legal tier.",
    "Count from the right date. In most states the notice runs to the END of a rental period, not from the day you send it. If rent is due on the 1st and you send notice mid-month, the clock usually runs to the end of the NEXT full month. New York is the exception that scales with how long you've lived there (30/60/90 days under RPL § 226-c).",
    "Highest-leverage move: quote your own lease's renewal/notice clause AND the state statute together. If you are in a just-cause state (California after 12 months under Civ. Code § 1946.2; Washington under RCW 59.18.650) and have lived there long enough, say so plainly — the landlord usually cannot simply decline to renew without a statutory cause.",
    "Top mistake to avoid: assuming that paying rent after the lease ends locks you into another full year. It almost never does — most states convert you to month-to-month (NY RPL § 232-c), and California caps the presumed renewal at one month when rent is paid monthly (Civ. Code § 1945). Florida is the trap in the other direction: rent alone does not even create a renewal, so get the landlord's written consent to stay month-to-month.",
  ],
  legalContext: [
    "When a fixed-term lease expires, exactly one of three things happens: you sign a renewal, you move out, or you 'hold over' and stay. The holdover scenario is where people lose money out of confusion. In most states, if the tenant remains in possession after the term ends and the landlord accepts rent, the tenancy automatically continues as a periodic (usually month-to-month) tenancy on the same terms as the old lease — not as a brand-new fixed term, and not as a new full-year obligation. California codifies this directly: Cal. Civ. Code § 1945 provides that where a lessee remains and the lessor accepts rent, 'the parties are presumed to have renewed the hiring on the same terms and for the same time, not exceeding one month when the rent is payable monthly, nor in any case one year.' New York reaches the same result from the other direction: N.Y. Real Property Law § 232-c says holding over does not give the landlord the option to bind the tenant to a new term, and if the landlord accepts rent for a period after expiry, 'the tenancy created by the acceptance of such rent shall be a tenancy from month to month.'",
    "The amount of notice required to END a month-to-month tenancy is where states diverge most. The baseline rule almost everywhere is that either party must give written notice of at least one full rental period — 30 days for a monthly tenancy. California splits it by who is terminating and how long the tenant has lived there: under Cal. Civ. Code § 1946.1, a tenant gives notice for at least the length of the periodic term (30 days for month-to-month), while the owner must give 60 days, reduced to 30 days only if every tenant has resided in the unit for less than one year. New York scales the landlord's notice with tenure under RPL § 226-c — 30 days (occupancy under 1 year), 60 days (1–2 years), or 90 days (2 years or more) — and the same graduated notice is required before raising rent 5% or more; a New York tenant terminates a month-to-month with 30 days in New York City (RPL § 232-a) or one month elsewhere (RPL § 232-b). Texas keeps it simple: Tex. Prop. Code § 91.001 lets either party end a monthly tenancy with notice equal to one rental period (one month if rent is monthly), unless a signed agreement sets a different period. Florida requires not less than 30 days for a month-to-month under Fla. Stat. § 83.57 (raised to 30 from 15 by Ch. 2023-314), and where the lease has a specific duration, Fla. Stat. § 83.575 caps any lease-required non-renewal notice at 30 to 60 days and forces the landlord to give the tenant reciprocal notice if it will not renew.",
    "A growing minority of states flip the default by requiring 'just cause' to end or refuse to continue a tenancy. In California, Cal. Civ. Code § 1946.2 (the Tenant Protection Act) provides that after a tenant 'has continuously and lawfully occupied a residential real property for 12 months, the owner shall not terminate a tenancy without just cause,' which must be an at-fault ground or an enumerated no-fault ground (owner move-in, withdrawal from the rental market, demolition or substantial remodel) accompanied by relocation assistance; the statute is in effect through January 1, 2030. Washington goes further still: RCW 59.18.650 provides that a landlord 'may not evict a tenant, refuse to continue a tenancy, or end a periodic tenancy except for' the causes enumerated in the statute — so a no-cause non-renewal is simply not available — while the tenant may end a month-to-month with 20 days' written notice before the end of a rental period under RCW 59.18.200. In a just-cause jurisdiction, a tenant who wants to stay generally can: the landlord needs a statutory reason, not merely a preference, to decline a continuation.",
    "Everywhere else, the default rule is the common-law / statutory pattern above: a holdover with rent accepted becomes a month-to-month tenancy on the existing terms, and either party ends it with written notice of at least one full rental period (most commonly 30 days, sometimes 60 for longer or year-to-year tenancies). Two cross-cutting rules matter in every state. First, your lease's own renewal and notice clauses are enforceable and can require MORE notice than the statutory floor (for example, a 60-day non-renewal clause) — they just cannot drop below the statutory minimum or, in Florida, exceed the 60-day cap. Second, paying rent after expiry does not create a new fixed term — except in Florida, where Fla. Stat. § 83.04 makes a written-lease holdover a tenancy at sufferance and provides that 'the mere payment or acceptance of rent shall not be construed to be a renewal'; it becomes a tenancy at will only with the landlord's written consent. The safe move is always to get the go-forward terms in writing before the term ends.",
  ],
  stateNotes: [
    {
      state: "California (just-cause + holdover)",
      note: "Cal. Civ. Code § 1946.1: tenant gives 30 days' notice (month-to-month); owner gives 60 days, reduced to 30 only if every tenant has lived there under 1 year. § 1945: holdover with rent accepted is presumed renewed 'on the same terms,' not exceeding one month when rent is monthly. § 1946.2 (Tenant Protection Act): after 12 months' occupancy the owner needs just cause to terminate or refuse to continue; in effect through Jan. 1, 2030.",
    },
    {
      state: "New York (graduated notice)",
      note: "N.Y. Real Property Law § 226-c: landlord must give 30/60/90 days' notice before non-renewal or a rent increase of 5%+, scaled to occupancy length (<1 yr / 1–2 yrs / 2+ yrs). § 232-a (NYC) / § 232-b (outside NYC): tenant ends a month-to-month with 30 days / one month. § 232-c: acceptance of rent after the term creates a month-to-month tenancy, not a new fixed term.",
    },
    {
      state: "Texas (single-period notice)",
      note: "Tex. Prop. Code § 91.001: either party may end a monthly tenancy with notice of at least one rental period (one month if rent is paid monthly); a signed agreement can set a different notice period or none. The statute is notice-only — Texas holdover/continuation is governed by common law (staying on with rent accepted continues the tenancy).",
    },
    {
      state: "Florida (30-day notice; holdover quirk)",
      note: "Fla. Stat. § 83.57: month-to-month requires not less than 30 days' notice (raised from 15 by Ch. 2023-314). § 83.575: a fixed-term lease may require 30–60 days' non-renewal notice and the landlord must give the tenant reciprocal notice. § 83.04: a written-lease holdover is a tenancy at sufferance — 'mere payment or acceptance of rent shall not be construed to be a renewal'; it becomes a tenancy at will only with the landlord's written consent.",
    },
    {
      state: "Washington (just-cause)",
      note: "RCW 59.18.650: a landlord may not refuse to continue a tenancy or end a periodic tenancy except for the causes enumerated by statute — no-cause non-renewals are barred. RCW 59.18.200: a tenant ends a month-to-month with 20 days' written notice before the end of a rental period. (Current version 2021 c 212; a further-amended version takes effect Jan. 1, 2028.)",
    },
    {
      state: "All other states (default)",
      note: "General rule: a holdover with rent accepted becomes a month-to-month tenancy on the existing terms (not a new fixed term), and either party ends it with written notice of at least one full rental period — commonly 30 days, sometimes 60 for longer/year-to-year tenancies, and a few states require just cause. Always read your lease: a renewal/notice clause can require MORE notice than the statutory floor. Confirm the exact day count on your state legislature's official site before relying on it.",
    },
  ],
  ifThisDoesntWork:
    "If the landlord ignores the letter or asserts the wrong terms — claims you owe a full additional year, tries to raise the rent without the required advance notice, or moves to end the tenancy without proper notice (or, in a just-cause state, without a statutory cause) — the strongest leverage is that a defective notice is a defense to eviction. If the landlord files an unlawful-detainer/eviction action without the statutorily required notice period, or without a qualifying cause in California or Washington, the case is typically dismissable by raising the notice defect at the hearing, often without a lawyer. For a wrongful refusal to renew in a just-cause jurisdiction, file a complaint with the local rent board or housing agency. Use small claims to recover any holdover rent overcharged or any deposit improperly withheld. Watch the clock: once a proper termination notice is served, eviction timelines move in days, not months, so respond immediately and keep the certified-mail proof of exactly what you sent and when.",
  relatedSlugs: [
    "rent-increase-improper-notice",
    "intent-to-vacate",
    "security-deposit-demand",
    "repair-request-formal",
    "late-fee-waiver-request",
  ],
  faqs: [
    {
      question: "My lease is ending and I haven't heard anything. Am I automatically month-to-month?",
      answer:
        "In most states, yes — if you stay in the unit and the landlord accepts your rent, you convert to a month-to-month tenancy on the same terms (Cal. Civ. Code § 1945; N.Y. Real Property Law § 232-c). Florida is the exception: under Fla. Stat. § 83.04 a holdover is a tenancy at sufferance and rent alone does not renew it, so you should get the landlord's written consent to stay month-to-month.",
    },
    {
      question: "How much notice do I have to give to move out of a month-to-month tenancy?",
      answer:
        "Usually one full rental period — 30 days for a monthly tenancy. California tenants give 30 days (Civ. Code § 1946.1), Texas requires one rental period (Prop. Code § 91.001), and Washington tenants need only 20 days (RCW 59.18.200). Count to the end of a rental period, not 30 days from whenever you happen to send it.",
    },
    {
      question: "Can my landlord just refuse to renew my lease?",
      answer:
        "In most states, yes, as long as they give the proper advance written notice. But in just-cause jurisdictions they cannot: in California, after 12 months of occupancy the owner needs just cause under Civ. Code § 1946.2, and Washington's RCW 59.18.650 flatly bars refusing to continue a tenancy without an enumerated cause.",
    },
    {
      question: "My lease says I must give 60 days' notice of non-renewal. Is that enforceable?",
      answer:
        "Generally yes. A lease can require MORE notice than the statutory minimum, so a 60-day clause is usually enforceable — just send your notice in time to satisfy it. It cannot require less than the statutory floor, and in Florida a lease-required notice is capped between 30 and 60 days under Fla. Stat. § 83.575, which also forces the landlord to give you reciprocal notice.",
    },
    {
      question: "If I pay rent after my lease ends, am I locked into another full year?",
      answer:
        "Almost never. Most states convert you to a month-to-month tenancy, not a new fixed term (N.Y. Real Property Law § 232-c), and California caps the presumed renewal at one month when rent is paid monthly (Civ. Code § 1945). Check your lease for an automatic-renewal clause, which is the one thing that can change this — and in Florida, rent alone doesn't even create a renewal.",
    },
  ],
  keywords: [
    "lease ending what happens next",
    "month to month after lease ends",
    "how much notice to end month to month tenancy",
    "landlord won't renew my lease",
    "holdover tenant rights",
    "lease renewal request letter",
    "convert lease to month to month",
    "30 day notice to landlord",
    "do I become month to month automatically",
    "fixed term lease expiring",
  ],
  publishedAt: "2026-06-26",
},

  {
    slug: "quiet-enjoyment-demand",
    category: "landlord",
    title: "Quiet Enjoyment Demand: Stop Landlord Harassment (Free Template + State Penalties)",
    metaDescription:
      "Landlord harassing you — illegal entries, utility shut-offs, intimidation? Free demand letter on the covenant of quiet enjoyment + state anti-harassment statutes (CA, MA, NY, TX, FL, WA).",
    lede:
      "Your landlord keeps letting themselves in unannounced, shut off your heat or water, started endless construction over your head, or is trying to scare you out. Every lease in America carries an implied covenant of quiet enjoyment, and a growing list of states make this conduct a statutory offense with real money attached. This letter names the law and demands it stop.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

cc: [On-site manager / leasing office, if applicable]

Sent via certified mail, return receipt requested
(Copy also sent by email to [landlord email] for the record.)

Re: Demand to Cease Interference With Quiet Enjoyment — [Rental Unit Address]

Dear [Landlord's Name]:

I am a tenant in good standing at [Rental Unit Address] under a lease dated [Lease Date]. My rent is current through [Month/Year]. I am writing to demand that you immediately stop the conduct described below, which is interfering with my right to quiet enjoyment of my home.

What has happened (with dates):

  - [Date / time]: [e.g., You or your agent entered my unit without the advance written notice my lease and state law require, while I was [at work / asleep / not home].]
  - [Date / time]: [e.g., Water / heat / hot water / electricity / gas was shut off and not restored for (number) hours/days.]
  - [Date / time]: [e.g., You changed the locks / removed a door or appliance / blocked my access to the unit or a common area.]
  - [Date / time]: [e.g., You or your agent shouted at, threatened, or intimidated me; the words used were "(quote)".]
  - [Date / time]: [e.g., Construction, renovation, or other ongoing disturbance has made the unit unusable during (hours), with no notice and no reasonable limit.]
  - [Add every incident you can document — dates, times, witnesses, and any photos, texts, or recordings you have.]

This conduct has [deprived me of the use of my home / forced me to (relocate temporarily, miss work, lose sleep, etc.)] and must end.

Legal basis:

Every residential lease in the United States carries an implied covenant of quiet enjoyment: the landlord must not substantially interfere with the tenant's use and possession of the home. A landlord who repeatedly enters without notice, cuts off essential services, blocks access, or uses threats or harassment to drive a tenant out breaches that covenant. In many states the same conduct is also a specific statutory offense. Identify the tier and citation that applies to you and strike the rest.

  [TIER 1 — Implied covenant of quiet enjoyment (applies in every state)]
  My lease carries an implied covenant of quiet enjoyment. Your conduct substantially interferes with my use and possession of the premises and breaches that covenant. A breach serious enough to deprive me of the benefit of the tenancy is a constructive eviction, for which you are liable in damages and which can relieve me of further rent obligations.

  [TIER 2 — Specific anti-harassment / self-help-eviction statute (strike all but your state)]

  [CALIFORNIA]
  Under Cal. Civ. Code section 1927, you are bound to secure my quiet possession of the premises for the term of the tenancy. Under Cal. Civ. Code section 1940.2(a), it is unlawful for a landlord, to influence a tenant to vacate, to use force, willful threats, or menacing conduct that interferes with the tenant's quiet enjoyment, to commit a significant and intentional violation of the entry rules in section 1954, or to threaten to disclose immigration status. A tenant who prevails may recover a civil penalty of up to $2,000 for each violation under section 1940.2(b). Separately, under Cal. Civ. Code section 789.3, a landlord may not, with intent to terminate occupancy, shut off or interrupt utilities, change the locks, or remove doors, windows, or my property; a violation carries actual damages plus up to $100 per day (minimum $250), plus attorney's fees.

  [MASSACHUSETTS]
  Under M.G.L. c. 186, section 14, any landlord who directly or indirectly interferes with my quiet enjoyment of the premises, or who willfully fails to furnish water, hot water, heat, light, power, or gas required by the lease or by law, is liable for actual and consequential damages or three months' rent, whichever is greater, plus the costs of the action and reasonable attorney's fees. The same conduct is also a criminal offense punishable by a fine of $25 to $300 or up to six months' imprisonment.

  [NEW YORK]
  Under N.Y. Real Property Law section 235, a landlord who willfully and intentionally fails to furnish water, heat, light, power, or other required service, or who willfully interferes with my quiet enjoyment of the premises, commits a misdemeanor. Under N.Y. RPAPL section 853, if I am put out of, or kept out of, the premises in a forcible or unlawful manner, I may recover treble (three times) damages. [If your unit is in New York City, add:] Under N.Y.C. Administrative Code sections 27-2004(a)(48) and 27-2005(d), the acts above constitute unlawful harassment, and section 27-2115 authorizes a civil penalty of $2,000 to $10,000 per affected unit.

  [TEXAS]
  Under Tex. Prop. Code section 92.008, you may not interrupt or cause the interruption of utility service furnished to me except for bona fide repairs, construction, or an emergency; a violation lets me recover possession or terminate the lease, plus actual damages, one month's rent plus $1,000, reasonable attorney's fees, and court costs. Under Tex. Prop. Code section 92.0081, you may not remove doors, windows, locks, or appliances, or lock me out, except as that section narrowly allows; a violation carries a civil penalty of one month's rent plus $1,000, actual damages, court costs, and reasonable attorney's fees.

  [FLORIDA]
  Under Fla. Stat. section 83.67, you may not directly or indirectly cause the interruption of any utility service, change the locks or use a device to prevent my reasonable access, or remove outside doors, locks, roof, walls, windows, or my personal property. A violation makes you liable for actual and consequential damages or three months' rent, whichever is greater, plus court costs and attorney's fees.

  [WASHINGTON]
  Under RCW 59.18.290, you may not remove or exclude me from the premises, or shut off utilities, except by lawful court process. If you do, I may recover possession or terminate the rental agreement and, in either case, recover my actual damages, plus costs of suit and reasonable attorney's fees.

  [ALL OTHER STATES]
  Rely on Tier 1. The implied covenant of quiet enjoyment is recognized at common law in nearly every state, and most states separately prohibit "self-help" eviction — shutting off utilities, changing locks, or removing a tenant's property to force them out without going through court. Your conduct violates both.

Entry rules (if your complaint includes unannounced entries):

Except in a genuine emergency, you may enter my unit only for a lawful purpose, after giving the advance notice my lease and state law require [commonly 24 to 48 hours' written notice], and at reasonable times. Repeated entry without proper notice is both a breach of quiet enjoyment and, in several states, an independent statutory violation.

Demand:

Within [10] days of receipt of this letter, I demand that you:
  1. Permanently stop [the specific conduct — unannounced entries / utility shut-offs / lockouts / threats / unreasonable construction];
  2. Restore [any interrupted service / my full access to the unit] immediately, if not already done;
  3. Confirm in writing the notice procedure you will follow before any future, lawful entry;
  4. [If applicable] reimburse me $[Amount] for [out-of-pocket costs caused by the interference — hotel, spoiled food, lost wages, etc.], with documentation enclosed.

If the conduct continues after you receive this letter, I will pursue all remedies available to me, which may include:
  - A complaint to [my local code-enforcement / housing / health department and, where applicable, the state Attorney General or a city tenant-harassment unit];
  - A civil action for breach of the covenant of quiet enjoyment and any applicable statute above, seeking actual damages, the statutory penalties or multipliers those statutes provide, and attorney's fees;
  - Where the interference is severe enough to make the unit uninhabitable, treating it as a constructive eviction.

I would prefer to resolve this without involving an agency or a court. The simplest path is for the conduct to stop now. Please confirm in writing that it will.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of lease; log of incidents with dates/times; photos or video; texts/emails with you or your agent; receipts for any out-of-pocket costs; names of any witnesses]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy to your landlord or management company. The certified receipt proves they received notice and the date — which matters because several of these statutes and the constructive-eviction doctrine turn on the landlord continuing the conduct after being told to stop.",
      "Build the incident log before you write. For each event: date, time, what happened, who did it, how long it lasted, and what proof you have (photo, video, text, witness). Vague claims (\"he keeps coming by\") get brushed off; \"entered 3/12 at 9:15 a.m. with no notice, again 3/19 at 8:40 a.m.\" does not. Keep the originals; send copies.",
      "Pick the right state tier. Tier 1 (implied covenant of quiet enjoyment) applies everywhere — use it no matter where you live. Add the Tier 2 statute only if you are in CA, MA, NY/NYC, TX, FL, or WA, and strike the others. If your state isn't listed, lean on Tier 1 plus your state's self-help-eviction ban (most states prohibit lockouts and utility shut-offs without a court order).",
      "Highest-leverage move: separate \"annoying\" from \"illegal.\" A landlord who is rude is not necessarily breaking the law. A landlord who shuts off your utilities, changes your locks, removes your door, or uses threats to push you out almost always is — those are the acts the statutes name, and they carry the biggest penalties (Texas: one month's rent + $1,000; Massachusetts/Florida: up to three months' rent; New York: treble damages). Lead with those.",
      "Top mistake to avoid: do not stop paying rent or move out on your own as a first step. Withholding rent over harassment (as opposed to a habitability defect) can put you in breach and hand the landlord an eviction case. Document, demand in writing, and escalate to an agency or court — let the statute do the work. Self-help by you can undercut an otherwise strong claim.",
    ],
    legalContext: [
      "Two distinct bodies of law protect a tenant from a landlord who won't leave them alone. The first is the implied covenant of quiet enjoyment — a term read into every residential lease at common law in nearly every state. It guarantees that the landlord will not substantially interfere with the tenant's use and possession of the home. It is not about literal noise; it covers repeated unannounced entries, shutting off essential services, blocking access, harassment, intimidation, and disruptive uncontrolled construction. When a breach is severe enough to deprive the tenant of the beneficial use of the premises and the tenant leaves, courts treat it as a constructive eviction, which can both end the rent obligation and support a damages claim. The second body of law is statutory: a growing number of states have enacted specific anti-harassment and anti-\"self-help-eviction\" statutes that turn the worst of this conduct into a defined offense with fixed penalties, so a tenant doesn't have to prove the open-ended elements of a common-law claim.",
      "California has the most developed framework. Civil Code section 1927 codifies the covenant of quiet possession. Civil Code section 1940.2(a) makes it unlawful for a landlord, for the purpose of influencing a tenant to vacate, to use force, willful threats, or menacing conduct that interferes with quiet enjoyment, to commit a significant and intentional violation of the lawful-entry rules in section 1954, or (added by AB 291 in 2017, effective January 1, 2018) to threaten to disclose a tenant's immigration or citizenship status; section 1940.2(b) lets a prevailing tenant recover a civil penalty up to $2,000 per violation. Running in parallel, Civil Code section 789.3 bars a landlord who intends to terminate occupancy from shutting off or interrupting utilities (water, heat, light, electricity, gas, telephone, elevator, or refrigeration), changing the locks or using a bootlock, or removing doors, windows, or the tenant's property — with liability for actual damages plus up to $100 per day (minimum $250 per cause of action) and attorney's fees. Massachusetts reaches a similar result through one powerful statute, G.L. c. 186, section 14: a landlord who directly or indirectly interferes with quiet enjoyment, or willfully fails to furnish required water, heat, hot water, light, power, or gas, is liable for actual and consequential damages or three months' rent, whichever is greater, plus costs and reasonable attorney's fees — and the same act is criminally punishable by a $25–$300 fine or up to six months in jail.",
      "New York layers state and city protection. Real Property Law section 235 makes it a misdemeanor for a landlord to willfully fail to furnish required services or to willfully interfere with a tenant's quiet enjoyment. RPAPL section 853 lets a tenant who is put out of, or kept out of, the premises in a forcible or unlawful manner recover treble (three times) damages — the statutory teeth behind New York's ban on illegal lockouts. Within New York City, the Housing Maintenance Code goes further: Administrative Code section 27-2004(a)(48) defines \"harassment\" as acts or omissions intended to make a lawful occupant vacate or give up occupancy rights (with a rebuttable presumption of that intent once a listed act is shown), section 27-2005(d) prohibits it, and section 27-2115 authorizes civil penalties of $2,000 to $10,000 per affected unit. Texas and Florida focus their statutes on the two most common forms of landlord self-help. Texas Property Code section 92.008 bars utility interruptions and section 92.0081 bars lockouts and the removal of doors, windows, locks, and appliances; each gives the tenant the right to recover possession or terminate the lease plus actual damages, one month's rent plus $1,000, court costs, and attorney's fees. Florida Statutes section 83.67 prohibits utility shut-offs, lock changes, removal of doors and structural elements, and removal of the tenant's property, with liability for actual and consequential damages or three months' rent, whichever is greater, plus costs and attorney's fees.",
      "Everywhere else, the default is Tier 1 plus the near-universal ban on self-help eviction. Washington's RCW 59.18.290 is a clean example of that default written into statute: a landlord may not remove or exclude a tenant, or cut off utilities, except through lawful court process, and a tenant who is unlawfully excluded may recover possession or terminate the agreement and, either way, recover actual damages plus costs and reasonable attorney's fees (the multiplier that older versions contained was removed by the 2020 amendment, so the recovery today is actual damages, not a multiple). Most states that lack a named anti-harassment statute still recognize the implied covenant of quiet enjoyment at common law and still forbid landlords from using lockouts, utility shut-offs, or property removal to force a tenant out without a court order. The practical upshot is the same nationwide: the landlord must go through the courts to remove a tenant and must not make the home unlivable in the meantime. A demand letter that names the covenant, names the specific conduct, and names the penalty the landlord is risking is usually enough to stop it.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code section 1927 (covenant of quiet possession); section 1940.2 (unlawful to use force/threats/menacing conduct or significant entry violations to influence a tenant to vacate; immigration-status threats added by AB 291, eff. 1/1/2018; civil penalty up to $2,000 per violation); section 789.3 (no utility shut-off, lockout, or property removal to terminate occupancy — actual damages + up to $100/day, min $250, + attorney's fees).",
      },
      {
        state: "Massachusetts",
        note: "M.G.L. c. 186, section 14. Direct or indirect interference with quiet enjoyment, or willful failure to furnish required utilities, = actual and consequential damages or three months' rent, whichever is greater, + costs + reasonable attorney's fees. Also a crime ($25–$300 fine or up to 6 months).",
      },
      {
        state: "New York",
        note: "N.Y. Real Property Law section 235 (willful failure to furnish services or interference with quiet enjoyment = misdemeanor); RPAPL section 853 (treble damages for forcible/unlawful eviction or exclusion). New York City: Admin. Code sections 27-2004(a)(48) & 27-2005(d) (tenant harassment), section 27-2115 (civil penalty $2,000–$10,000 per unit).",
      },
      {
        state: "Texas",
        note: "Tex. Prop. Code section 92.008 (no utility interruption except bona fide repair/construction/emergency) and section 92.0081 (no lockouts or removal of doors/windows/locks/appliances). Either violation: recover possession or terminate, plus actual damages, one month's rent plus $1,000, attorney's fees, and court costs.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. section 83.67 (prohibited practices): no utility interruption, lock changes, removal of doors/structural elements, or removal of tenant property. Liability = actual and consequential damages or three months' rent, whichever is greater, + court costs + attorney's fees.",
      },
      {
        state: "Washington",
        note: "RCW 59.18.290. No removal/exclusion of the tenant or utility shut-off except by court process. Tenant may recover possession or terminate, plus actual damages, costs, and reasonable attorney's fees. (2020 amendment removed the prior multiplier — recovery is actual damages.)",
      },
      {
        state: "All other states (default)",
        note: "Implied covenant of quiet enjoyment is recognized at common law in nearly every state; severe breach = constructive eviction. Most states also ban self-help eviction (lockouts, utility shut-offs, property removal) without a court order. Lead with Tier 1 plus your state's self-help-eviction statute; check your local code-enforcement office for a faster administrative route.",
      },
    ],
    ifThisDoesntWork:
      "If the conduct continues, the fastest free escalation is usually an agency rather than a court: local code or housing enforcement for utility shut-offs and habitability, the police for an illegal lockout in progress (in many states an unlawful lockout is a civil-rights or criminal matter and officers will make the landlord let you back in), and — where one exists — a city tenant-harassment unit (New York City's HPD/OSE) or the state Attorney General's tenant line. For money, the statutes above are written to make a lawyer economical: California section 1940.2 ($2,000/violation) and section 789.3, Massachusetts c. 186 section 14 and Florida section 83.67 (up to three months' rent), Texas sections 92.008/92.0081 (one month's rent + $1,000), and New York RPAPL section 853 (treble damages) all shift attorney's fees or impose multipliers, so plaintiff's-side landlord-tenant attorneys take these cases. Small claims court is a viable do-it-yourself path for the damages amounts most tenants are owed. Watch the statute of limitations — breach-of-covenant and most statutory tenant claims run two to six years depending on the state and the theory; don't sit on a strong claim.",
    relatedSlugs: [
      "illegal-entry-cease-and-desist",
      "heat-utility-failure",
      "repair-request-formal",
      "repair-and-deduct-notice",
      "security-deposit-demand",
      "intent-to-vacate",
    ],
    faqs: [
      {
        question: "What actually counts as a breach of \"quiet enjoyment\"? My landlord is just annoying.",
        answer:
          "It has to be substantial interference with your use of the home, not mere annoyance. Repeated unannounced entries, shutting off heat/water/electricity, changing your locks, removing a door or appliance, threats or intimidation meant to push you out, and uncontrolled construction that makes the unit unusable all qualify. A landlord who is simply unpleasant or slow to respond usually does not — focus your letter on the conduct that fits these categories.",
      },
      {
        question: "Can my landlord just enter whenever they want?",
        answer:
          "No. Except in a genuine emergency, a landlord must enter for a lawful purpose, at a reasonable time, after the advance notice your lease and state law require (commonly 24–48 hours' written notice). Repeated entry without notice is both a breach of quiet enjoyment and, in states like California (Civ. Code section 1940.2 via section 1954), an independent statutory violation. Log every entry with the date and time.",
      },
      {
        question: "The landlord shut off my utilities or changed the locks. Isn't that illegal?",
        answer:
          "Almost certainly. \"Self-help\" eviction — cutting off utilities, changing locks, or removing your property to force you out without a court order — is banned in most states and carries the biggest penalties. Texas (Prop. Code sections 92.008/92.0081: one month's rent + $1,000), Florida (section 83.67: up to three months' rent), California (Civ. Code section 789.3: up to $100/day), and Washington (RCW 59.18.290) all give you a direct claim. Restore-and-reimburse is the demand; an agency or police call is the fast escalation.",
      },
      {
        question: "Can I withhold rent or move out because of the harassment?",
        answer:
          "Be careful. Rent-withholding rules are built around habitability defects (no heat, no water), not general harassment, and withholding for the wrong reason can hand your landlord an eviction case. Moving out can support a constructive-eviction claim, but only if the interference was severe enough to make the home unusable and you document it. Send the demand letter first and, if you're unsure, talk to a local tenant attorney before you stop paying or leave.",
      },
      {
        question: "I'm in a state that isn't listed. Do I still have a case?",
        answer:
          "Yes. The implied covenant of quiet enjoyment is recognized at common law in nearly every state, and most states separately ban self-help eviction. Use Tier 1 of the letter and add your state's self-help-eviction or landlord-tenant statute. Your local code-enforcement office is often the fastest free route for utility or access problems, and small claims court handles the damages.",
      },
    ],
    keywords: [
      "landlord harassment letter",
      "covenant of quiet enjoyment",
      "landlord keeps entering without notice",
      "landlord shut off my utilities",
      "how to stop landlord harassment",
      "landlord changed my locks illegally",
      "quiet enjoyment demand letter",
      "landlord won't stop coming into my apartment",
      "illegal lockout landlord",
      "tenant harassment cease and desist",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "rent-increase-improper-notice",
    category: "landlord",
    title: "Rent Increase With Improper Notice or Over the Cap (Free Letter + State Tiers)",
    metaDescription:
      "Got a rent increase with too little notice or above your state's rent cap? Free letter citing Cal. Civ. Code §§ 827 & 1947.12, Oregon ORS 90.323, NY RPL § 226-c, and WA HB 1217.",
    lede:
      "Your landlord raised the rent — but the notice was too short, the hike blew past your state's rent cap, or it landed in the middle of a fixed-term lease. A rent increase that breaks the notice or cap rules is not enforceable until it's done right. This letter cites the specific statute, demands the increase be withdrawn or corrected, and puts the late or excess amount in dispute.",
    body: `[Your Full Name]
[Rental Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager Name]
[Landlord Address]

Sent via certified mail, return receipt requested
(Copy also emailed to [landlord/manager email])

Re: Defective Rent Increase Notice dated [Date] for [Unit Address] — Demand to Withdraw or Correct

Dear [Landlord / Property Manager Name]:

On [Date] I received a notice raising my rent from $[current rent] to $[new rent] (an increase of $[difference], or [X]%), with an effective date of [effective date]. I am writing because this increase does not comply with [state] law and is not enforceable as issued.

The defect(s) with this increase (check all that apply):

  ☐ INSUFFICIENT NOTICE. The law requires at least [30 / 60 / 90] days' written notice for an increase of this size; I received only [number] days.
  ☐ EXCEEDS THE RENT CAP. The increase of [X]% exceeds the [state] statutory cap of [cap %] over a 12-month period.
  ☐ MID-LEASE INCREASE. I am in a fixed-term lease running through [lease end date]. My rent cannot be raised before that date because [no clause in my lease permits a mid-term increase / the lease fixes the rent at $[amount] through the term].
  ☐ TOO FREQUENT. This is the [second] increase within a 12-month period, which [state] law does not allow.

Legal basis:

[Keep the tier that matches your state; strike the rest.]

  [TIER 1 — CALIFORNIA]
  Under Cal. Civ. Code § 827(b), a rent increase of 10% or less (measured against the rent charged at any time in the prior 12 months) requires at least 30 days' written notice; an increase of more than 10% requires at least 90 days. Separately, Cal. Civ. Code § 1947.12 (the Tenant Protection Act) bars any increase over a 12-month period exceeding 5% plus the regional CPI, or 10%, whichever is lower, and limits the landlord to two increases per 12 months, unless the unit is statutorily exempt (e.g., a certificate of occupancy issued within the last 15 years). My increase of [X]% [was served with only (number) days' notice / exceeds the § 1947.12 cap of (cap %)].

  [TIER 2 — OREGON]
  Under ORS 90.323, you may not raise the rent during the first year of my tenancy, may raise it only once in any 12-month period thereafter, and must give at least 90 days' written notice. Under ORS 90.324, the increase may not exceed the lesser of 10% or 7% plus CPI — the maximum published by the Oregon Department of Administrative Services for [year] is [DAS figure, e.g. 9.5%]. My increase of [X]% [was served with only (number) days' notice / exceeds the (DAS figure) maximum].

  [TIER 3 — WASHINGTON]
  Under RCW 59.18.140, a rent increase requires at least 90 days' prior written notice. Under RCW 59.18.710–.720 (HB 1217, effective May 7, 2025), the increase may not exceed 7% plus CPI or 10%, whichever is less, may not occur in the first 12 months of tenancy, and may occur only once per 12 months — the maximum published by the Department of Commerce for [year] is [Commerce figure, e.g. 9.683%]. My increase of [X]% [was served with only (number) days' notice / exceeds the cap].

  [TIER 4 — NEW YORK]
  Under N.Y. Real Property Law § 226-c, when a landlord proposes a renewal increase of 5% or more, the required written notice scales with how long I have lived here: 30 days if under one year, 60 days if one to two years, and 90 days if two or more years. I have occupied this unit for [duration], so [60 / 90] days' notice was required; I received only [number]. Until proper notice runs, my tenancy continues on the existing terms.

  [TIER 5 — COLORADO]
  Under C.R.S. § 38-12-701, a rent increase requires at least 60 days' written notice, and under C.R.S. § 38-12-702 you may not raise the rent more than once in any 12-month period. My increase [was served with only (number) days' notice / is the second within 12 months].

  [TIER 6 — TEXAS / FLORIDA (no statutory cap; periodic-tenancy notice)]
  My rent is fixed at $[amount] through [lease end date] under my written lease and cannot be raised before that date. For a month-to-month tenancy, [Texas: Tex. Prop. Code § 91.001 requires one month's notice to change the terms of the tenancy / Florida: Fla. Stat. § 83.57(3) requires at least 30 days' notice before the end of the monthly period]. The notice I received [does not give the required period / attempts to raise the rent mid-term].

  [TIER 7 — ALL OTHER STATES]
  My rent is fixed under my written lease at $[amount] through [lease end date] and cannot be increased before that date. For a month-to-month tenancy, [state] law requires at least [30] days' written notice before a rent change takes effect, and the notice I received gave only [number] days. [If your city has rent control or rent stabilization, add: My unit is also subject to [local ordinance], which caps the increase at [local cap].]

Demand:

Within [14] days of receipt of this letter, please confirm in writing that you will do ONE of the following:
  1. Withdraw the [Date] increase and keep my rent at $[current rent]; OR
  2. Reissue a corrected notice that complies with [state]'s notice period and rent cap, with a lawful effective date no earlier than [recalculated date].

Until the increase is reissued in compliance with the law, the lawful rent remains $[current rent], and I will continue to tender that amount. Any portion of the increased rent I have already paid under the defective notice is paid under protest and I reserve the right to recover it.

If you do not respond, I will:
  • File a complaint with [my state/city rent board, attorney general's consumer division, or fair-housing/landlord-tenant agency];
  • Raise the defective notice as a defense to any nonpayment action; and
  • Pursue any rent overcharge, statutory penalties, and attorney's fees available under [state] law.

I would prefer to resolve this directly. Please confirm in writing how you intend to proceed.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of the rent-increase notice; relevant page(s) of my lease showing the rent and term; record of the date I received the notice (envelope/email header); rent payment history if disputing an overcharge]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy. The certified-mail receipt fixes the date of your objection — important if the landlord later claims you accepted the increase by silence or by paying it.",
      "Attach the increase notice itself and the page of your lease showing your rent and lease term. The single most persuasive enclosure is proof of WHEN you received the notice (the postmarked envelope, the email header, or a photo of a hand-delivered notice with the date) — the notice-period clock runs from delivery, so the delivery date is the whole ballgame.",
      "Pick your tier by checking your state's notice period AND its rent cap separately — they are two different rules. California, Oregon, and Washington have BOTH a notice period and a statewide rent cap; Colorado and New York regulate notice/frequency but have no statewide cap; Texas and Florida have neither a cap nor a tenancy-specific increase statute (your protection is your lease term plus periodic-tenancy notice).",
      "Highest-leverage move: keep paying your OLD rent and state in writing that you are doing so because the increase is not yet lawful. In California (§ 827), New York (§ 226-c), Oregon, and Washington, a rent increase served with short notice simply does not take effect until proper notice runs — so the lawful rent is still the old rent, and tendering it on time keeps you current and removes any nonpayment excuse to evict.",
      "Top mistake to avoid: do NOT stop paying rent entirely, and do NOT set a 48-hour deadline. A defective NOTICE makes the INCREASE invalid — it does not make your underlying rent obligation disappear. Withhold only the disputed increase, keep paying the base rent, and give a reasonable 14-day window to respond.",
    ],
    legalContext: [
      "A rent increase is governed by two independent sets of rules, and a landlord has to satisfy both: the NOTICE rule (how far in advance, and in what form, the increase must be announced) and, in a minority of states, the AMOUNT rule (a statutory rent cap limiting how much the increase can be over a 12-month period). On top of those, a baseline contract principle applies almost everywhere: rent fixed by a written fixed-term lease cannot be raised mid-term unless the lease itself allows it — the increase has to wait for renewal or for a month-to-month conversion. Because notice and cap rules vary sharply by state, this letter is tiered. The common thread is that an increase served with too little notice, or above a cap, or mid-lease, is simply not enforceable as issued: the prior lawful rent stays in force until the landlord re-does it correctly.",
      "California is the most fully regulated jurisdiction and the doctrinal anchor for the notice rule. Cal. Civ. Code § 827(b) sets a sliding notice period for month-to-month tenancies: an increase of 10% or less — measured cumulatively against the rent charged at any point in the prior 12 months — requires at least 30 days' written notice, while an increase greater than 10% requires at least 90 days. The 12-month look-back means a landlord cannot dodge the 90-day rule by splitting one large hike into several small ones. Separately, the Tenant Protection Act of 2019, codified at Cal. Civ. Code § 1947.12, caps the increase itself: over any 12-month period the gross rent may not rise by more than 5% plus the regional change in the cost of living, or 10%, whichever is lower, and no more than two increases are allowed in 12 months. The current cap text is operative from April 1, 2024 and is scheduled to sunset January 1, 2030. Newer buildings (certificate of occupancy within the last 15 years) and certain single-family homes are exempt from the cap but not from the § 827 notice rule.",
      "Oregon and Washington pair a long notice period with a CPI-indexed statewide cap that is recalculated every year. In Oregon, ORS 90.323 forbids any increase during the first year of tenancy, allows only one increase per 12-month period thereafter, and requires 90 days' written notice; ORS 90.324 caps the increase at the lesser of 10% or 7% plus CPI (West region), with the Department of Administrative Services publishing the year's exact maximum (9.5% for standard residential tenancies in 2026). Washington's HB 1217, effective May 7, 2025 and codified at RCW 59.18.710–.720, mirrors this — 7% plus CPI or 10%, whichever is less, no increase in the first 12 months, once per 12 months — and RCW 59.18.140 was amended at the same time to raise the notice requirement from 60 to 90 days (the Department of Commerce set the 2026 maximum at 9.683%). New York and Colorado regulate timing without a statewide dollar cap: N.Y. Real Property Law § 226-c requires a renewal increase of 5% or more to be preceded by 30, 60, or 90 days' notice depending on how long the tenant has lived there (under 1 year, 1–2 years, 2+ years), and failure to give that notice extends the existing tenancy on its existing terms until proper notice runs; Colorado's C.R.S. § 38-12-701 requires 60 days' notice and § 38-12-702 limits increases to once per 12 months.",
      "Texas and Florida sit at the deregulated end and stand in for the 'no statewide cap' default. Both states prohibit local rent control as well — Tex. Loc. Gov't Code § 214.902 allows it only on a disaster-driven housing-emergency finding approved by the governor, and Fla. Stat. § 166.043 flatly bars local rent controls. Without a cap statute, a tenant's protection is the lease itself plus the rule for ending a periodic tenancy: a landlord cannot raise rent during a fixed-term lease, and to raise rent on a month-to-month tenant the landlord must effectively terminate the periodic tenancy and offer new terms — which requires Texas's one-month notice under Tex. Prop. Code § 91.001 or Florida's 30-day notice under Fla. Stat. § 83.57(3) (raised from 15 days effective July 1, 2023). The everywhere-else default works the same way: in nearly every state a periodic tenancy requires written notice equal to one rental period (commonly 30 days) before the rent can change, and a fixed-term lease locks the rent until it ends. Many cities (in NJ, MD, MN, and DC, among others) layer local rent-stabilization ordinances on top, which can impose their own caps — always check your municipality.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code § 827(b): 30 days' notice for increases ≤10%, 90 days for >10% (cumulative over rolling 12 months). Cal. Civ. Code § 1947.12: cap of 5% + CPI or 10%, whichever is lower, per 12 months; max two increases/year; new-construction (≤15 yrs) exempt. Cap text operative Apr 1, 2024; sunsets Jan 1, 2030.",
      },
      {
        state: "Oregon",
        note: "ORS 90.323: no increase in first year, once per 12 months after, 90 days' notice. ORS 90.324: cap = lesser of 10% or 7% + CPI (West); DAS-published max is 9.5% for standard tenancies in 2026 (check the DAS Rent Stabilization page for the current year).",
      },
      {
        state: "Washington",
        note: "RCW 59.18.140: 90 days' notice (raised from 60 by HB 1217, eff. May 7, 2025). RCW 59.18.710–.720: cap = 7% + CPI or 10%, whichever is less; no increase in first 12 months; once per 12 months; new-construction (≤12 yrs) exempt. 2026 max = 9.683% (Dept. of Commerce).",
      },
      {
        state: "New York",
        note: "N.Y. Real Prop. Law § 226-c: renewal increase ≥5% requires 30 days' notice (<1 yr), 60 days (1–2 yrs), or 90 days (2+ yrs). No notice = tenancy continues on existing terms until proper notice runs. NYC/rent-stabilized units have separate, stricter caps.",
      },
      {
        state: "Colorado",
        note: "C.R.S. § 38-12-701: 60 days' written notice before any increase. C.R.S. § 38-12-702: no more than one increase per 12-month period. No statewide rent cap.",
      },
      {
        state: "Texas",
        note: "No statewide rent cap; local rent control prohibited absent a disaster emergency approved by the governor (Tex. Loc. Gov't Code § 214.902). Rent is fixed during a lease term; month-to-month rent change requires one month's notice (Tex. Prop. Code § 91.001).",
      },
      {
        state: "Florida",
        note: "No statewide rent cap; local rent control barred (Fla. Stat. § 166.043). Rent is fixed during a lease term; month-to-month termination/new terms require ≥30 days' notice before the end of the monthly period (Fla. Stat. § 83.57(3), raised from 15 days July 1, 2023).",
      },
      {
        state: "All other states (default)",
        note: "No statewide cap in most states. A fixed-term lease locks the rent until it ends; a month-to-month increase requires written notice equal to one rental period — typically 30 days — before it takes effect. Check for local rent-stabilization ordinances (common in NJ, MD, MN, and DC localities).",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the letter, your best escalation depends on the defect. A short-notice increase is best handled defensively: keep tendering the old lawful rent, and if the landlord files a nonpayment eviction, the defective notice is a complete defense (in CA, OR, WA, and NY the increase legally never took effect). An over-the-cap increase in California, Oregon, or Washington can be reported to that state's enforcement channel — California tenants can pursue rent overcharges under the Tenant Protection Act and seek attorney's fees, and many tenant-side firms take these on contingency; Oregon and Washington tenants can complain to their state agency and recover the excess plus statutory remedies. In rent-stabilized markets (NYC, and cities in NJ/MD/MN/DC), file an overcharge complaint with the local rent board, which can order refunds and penalties. Small-claims court is a realistic path to recover an overcharge you've already paid. Watch the clock: most state rent-overcharge and wage-of-tenancy claims carry limitation periods of one to four years (NY rent-stabilization overcharge look-back is generally six years), so don't sit on it.",
    relatedSlugs: [
      "security-deposit-demand",
      "late-fee-waiver-request",
      "repair-request-formal",
      "intent-to-vacate",
      "lease-renewal-or-month-to-month-confirmation",
      "move-out-walkthrough-request",
      "quiet-enjoyment-demand",
    ],
    faqs: [
      {
        question: "Can my landlord raise the rent in the middle of my lease?",
        answer:
          "Almost never. A fixed-term lease locks the rent for the whole term unless the lease itself contains a clause allowing a mid-term increase. If you signed a 12-month lease at $1,800, that's the rent until it ends — a notice raising it before then is unenforceable. Rent increases normally take effect only at renewal or on a month-to-month tenancy.",
      },
      {
        question: "How much notice does my landlord legally have to give?",
        answer:
          "It depends on your state and the size of the increase. The common default is 30 days for a month-to-month increase. California requires 90 days for increases over 10% (Civ. Code § 827); Oregon and Washington require 90 days; New York requires 30/60/90 days based on how long you've lived there (RPL § 226-c); Colorado requires 60 days. The clock runs from when you receive the notice, not when it's dated.",
      },
      {
        question: "Is there a limit on how much my rent can go up?",
        answer:
          "Only in some states. California caps it at 5% + CPI or 10%, whichever is lower (Civ. Code § 1947.12); Oregon at 7% + CPI or 10% (9.5% for 2026); Washington at 7% + CPI or 10% (9.683% for 2026, under HB 1217). Most states — including Texas and Florida — have no statewide cap, though some cities have local rent control. Newer buildings are usually exempt even in capped states.",
      },
      {
        question: "What should I do if the notice was too short — withhold all my rent?",
        answer:
          "No. Keep paying your OLD rent on time and put in writing that you're doing so because the increase isn't yet lawful. A defective notice invalidates the increase, not your underlying rent obligation. Stopping all payment gives the landlord a legitimate nonpayment ground to evict; paying the old rent keeps you current and protected.",
      },
      {
        question: "I already paid the higher rent for a month or two. Can I get it back?",
        answer:
          "Possibly. State the payments were made under protest in your letter and demand a refund or credit. In capped states (CA, OR, WA) and rent-stabilized cities, an amount above the legal limit is a recoverable overcharge — sometimes with penalties and attorney's fees. Small-claims court is a practical venue. Act within your state's limitation period, which ranges from one to several years.",
      },
    ],
    keywords: [
      "landlord raised rent without proper notice",
      "rent increase notice requirements by state",
      "how much notice for rent increase",
      "is my rent increase legal",
      "landlord raising rent mid lease",
      "rent increase over the legal limit",
      "California 90 day rent increase notice",
      "rent cap by state 2026",
      "can landlord raise rent during lease",
      "dispute illegal rent increase letter",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "repair-and-deduct-notice",
    category: "landlord",
    title: "Repair-and-Deduct / Rent-Escrow Notice to Landlord (Free Template + State Tiers)",
    metaDescription:
      "Landlord won't fix a habitability problem? Free notice letter citing California Civ. Code § 1942 repair-and-deduct plus Texas, Florida, Massachusetts, Ohio, Washington and New York rent-escrow / withholding rules.",
    lede:
      "Your landlord is ignoring a repair that affects whether the place is livable — no heat, no hot water, a leak, busted plumbing. This letter gives formal written notice and a deadline, then tells the landlord exactly which statutory remedy you'll use if they miss it: repair-and-deduct, rent escrow, or rent withholding. Which one is legal depends entirely on your state, so the letter is built in tiers.",
    body: `[Your Full Name]
[Unit Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager Legal Name]
[Landlord Address — the address where you normally pay rent or as listed on the lease]

Sent via certified mail, return receipt requested
(Copy also delivered by [email / hand delivery] on [date])

Re: Formal notice of habitability defect and intent to exercise statutory repair-and-deduct / rent-escrow remedy — Unit at [Unit Address]

Dear [Landlord / Property Manager]:

I am a tenant at [Unit Address] under a lease dated [Date]. This letter is my formal written notice that the rental unit has a condition affecting its habitability that you have not repaired, and that I intend to use the remedy my state's law provides if it is not fixed by the deadline below.

The condition:

  • Defect: [Describe precisely — e.g., "no hot water since [date]," "kitchen ceiling leaking from unit above," "non-functioning heat," "broken exterior door lock," "raw sewage backup in bathroom."]
  • First reported: [Date], by [phone / text / email / portal / prior letter] to [name].
  • Follow-up reports: [Dates and methods.]
  • Effect: This condition materially affects the health and safety / habitability of the unit because [brief explanation].

This condition is one the law treats as the landlord's responsibility to repair, because it goes to the basic habitability of the dwelling (heat, hot/cold running water, working plumbing, weatherproofing, electrical, structural safety, or sanitary conditions).

Legal basis:

[Pick the ONE tier that matches your state. Strike the others. The tier matters: in some states you may pay for the repair yourself and deduct it from rent; in others you must deposit rent with the court instead of withholding it; in others self-help is not allowed at all and the remedy is a rent reduction through the court. Using the wrong remedy can expose you to eviction — read the tier carefully.]

  [TIER A — STATUTORY REPAIR-AND-DEDUCT (self-help allowed, capped)]
  Under [Cal. Civ. Code § 1942 / Tex. Prop. Code §§ 92.056, 92.0561 / Mass. G.L. c. 111 § 127L / Wash. Rev. Code § 59.18.100], if the landlord fails to repair a habitability defect within a reasonable time after written notice, the tenant may arrange the repair and deduct the cost from rent, up to the statutory cap. I am giving you that written notice now. If the condition is not remedied within [the reasonable time / deadline] stated below, I will have the repair done and deduct the actual, documented cost from my next rent payment, not to exceed [one month's rent (CA) / one month's rent or \\$500, whichever is greater (TX) / four months' rent in a 12-month period (MA, requires code-enforcement certification) / the statutory cap (WA)], and I will provide you copies of all invoices.

  [TIER B — RENT ESCROW / PAY RENT INTO COURT (do NOT simply withhold)]
  Under [Fla. Stat. §§ 83.56, 83.60 / Ohio Rev. Code § 5321.07], a tenant facing an unremedied habitability defect does not stop paying rent outright; instead the tenant deposits the rent with the clerk of court (Ohio) or, if the landlord brings an eviction, pays the rent into the court registry while raising the defect as a defense (Florida). If you do not remedy this condition within the deadline below, I will deposit my rent with the [clerk of the municipal/county court (OH)] or pay it into the court registry as the statute directs, and ask the court to order the repair and an appropriate rent reduction. I remain current on rent and intend to stay current through this process.

  [TIER C — IMPLIED WARRANTY OF HABITABILITY / NO SELF-HELP DEDUCT]
  Under [N.Y. Real Prop. Law § 235-b] and the implied warranty of habitability, the landlord warrants that the premises are fit for human habitation. This state does not authorize tenant self-help repair-and-deduct or unilateral rent withholding. If you do not remedy this condition within the deadline below, I will pursue a rent abatement and an order to repair through [housing court / an HP action], and will document the condition and my rent payments accordingly.

Demand:

Please remedy the condition described above within [the reasonable time required by my state — see the deadline guidance in "How to use," typically 14–30 days; for emergency conditions like no heat or sewage, sooner] of your receipt of this letter, no later than [specific date].

If the condition is not repaired by that date, I will exercise the statutory remedy identified above:
  • [Repair-and-deduct: have the work done and deduct the documented cost, up to the statutory cap, from rent (Tier A);]
  • [Rent escrow: deposit rent with the clerk of court / pay into the court registry and seek a court-ordered repair and rent reduction (Tier B);]
  • [Rent abatement: seek a rent abatement and repair order through housing court (Tier C);]
  • And I reserve all other remedies available under state law, including any anti-retaliation protections that bar eviction or rent increases in response to a good-faith repair request.

I would prefer to resolve this without involving a court or a code-enforcement agency. Please contact me at [phone / email] to schedule the repair.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [dated photos/video of the condition; copies of prior repair requests (texts, emails, portal tickets); relevant lease pages; any code-enforcement or inspection report]`,
    howToUse: [
      "Send by certified mail, return receipt requested, to the address where you pay rent or the landlord's address on the lease. Keep the green card / tracking and a dated copy of the letter. The certified-mail receipt is the proof that you gave statutory notice and starts the landlord's cure clock — in most states the remedy is unavailable until you can show written notice was delivered.",
      "Attach proof of the defect and of every prior request: dated photos or video, screenshots of texts/emails/portal tickets, and any code-enforcement or health-department report. The stronger your paper trail that the landlord knew and didn't act, the harder it is for them to claim surprise or blame you for the damage.",
      "Pick the correct tier — this is the single most important decision. Tier A (repair-and-deduct: CA, TX, MA, WA and others) lets you pay for the fix and subtract it from rent, up to a cap. Tier B (escrow: FL, OH and others) requires you to deposit rent with the court, not pocket it. Tier C (NY and others) does not allow self-help at all — you seek a rent reduction through housing court. Using a Tier A remedy in a Tier B/C state (i.e., just withholding rent) is the fastest way to get evicted for nonpayment.",
      "Highest-leverage tip: stay current on rent. Most repair statutes require the tenant to be current when notice is given (Texas expressly; California requires the rent obligation to be intact). If you owe back rent, fix that first or your remedy can evaporate. Then give a realistic deadline — 14–30 days for ordinary repairs, but shorter for genuine emergencies (no heat in winter, no running water, sewage), because the law measures 'reasonable time' against the severity of the condition.",
      "Top mistake to avoid: exceeding the statutory cap or skipping the notice-and-cure window. Don't deduct more than your state allows (e.g., one month's rent in CA; one month's rent or $500 in TX), don't repair before the cure period runs, and never gut-renovate on the landlord's dime — the remedy covers fixing the specific habitability defect, not upgrades. Keep every invoice and pay a licensed contractor where the work requires one.",
    ],
    legalContext: [
      "Every U.S. residential tenancy carries an implied warranty of habitability — by statute or court decision in nearly every state — that the landlord keep the unit fit to live in: heat, hot and cold running water, working plumbing and electrical, weatherproofing, structural safety, and sanitary conditions. When the landlord breaches that duty and ignores notice, the law gives the tenant one of three families of self-help-adjacent remedies, and which one you have depends entirely on the state. Family one is statutory repair-and-deduct: the tenant pays to fix the defect and subtracts the cost from rent, subject to a cap. Family two is rent escrow / pay-into-court: the tenant does not pocket the rent but deposits it with the court while the dispute is resolved. Family three is rent abatement only: no tenant self-help is authorized, and the remedy is a court-ordered rent reduction or repair. The critical, eviction-avoiding rule is that you must use the family your state actually authorizes — unilaterally withholding rent in an escrow or abatement state is treated as simple nonpayment.",
      "California Civil Code § 1942 is the cleanest repair-and-deduct statute and the doctrinal anchor. It provides that if the landlord neglects to repair a condition that makes the dwelling untenantable within a reasonable time after the tenant gives notice, the tenant 'may repair the same himself or herself where the cost of such repairs does not require an expenditure more than one month's rent of the premises and deduct the expenses of such repairs from the rent.' Two hard limits: the cost cannot exceed one month's rent, and the remedy may be used 'not more than twice in any 12-month period.' Section 1942(b) creates a rebuttable presumption that 30 days after notice is a reasonable time to wait, though a shorter period can be reasonable for a serious defect. 'Untenantable' is defined by Civil Code § 1941.1, which lists the substantive habitability standards — effective waterproofing of roof and walls; working plumbing and gas; hot and cold running water; working heating; safe electrical; clean, sanitary, pest-free common areas; adequate garbage receptacles; and floors, stairs and railings in good repair (with a stove and refrigerator added as of January 1, 2026). California also bars retaliation: a landlord may not evict or raise rent because a tenant exercised these rights (Civ. Code § 1942.5).",
      "The other repair-and-deduct states share the mechanism but vary the caps and the notice mechanics. Texas Property Code § 92.0561 caps the deduction at 'one month's rent under the lease or $500, whichever is greater,' and lets repairs and deductions be made 'as often as necessary' so long as the monthly total stays under that cap; § 92.056 requires that the tenant be current on rent and gives the landlord a 'reasonable time' to repair, with a rebuttable presumption that seven days is reasonable, and requires the second notice be sent by certified mail (return receipt) or other trackable mail. Massachusetts G.L. c. 111 § 127L is the most generous: it allows deductions up to four months' rent in any 12-month period, but only after the violation is certified by the board of health or local code-enforcement agency (or a court) and the owner, given written notice, fails to begin repairs within five days and substantially complete them within fourteen. Washington's RCW 59.18.100 allows repair-and-deduct with per-repair and annual caps tied to one to two months' rent depending on the procedure used, after written notice and a statutory waiting period. In all of these, the tenant must be the one wronged — the remedy is void if the tenant or a guest caused the defect or denied the landlord access to fix it.",
      "Escrow and abatement states deliberately keep the rent out of the tenant's hands. Florida Statutes § 83.56(1) requires the tenant to give seven days' written notice of the landlord's material noncompliance with the habitability duty in § 83.51(1); if the landlord then sues for possession, § 83.60 lets the tenant raise the defect as a defense only by paying the accrued rent into the registry of the court — failure to deposit within five business days waives the defense. Ohio Revised Code § 5321.07 is a true escrow statute: after written notice, if the landlord fails to remedy within a reasonable time or thirty days (whichever is sooner) and the tenant is current on rent, the tenant may deposit all rent due 'with the clerk of the municipal or county court,' and ask the court to order the repair, reduce the rent, or release the escrowed funds to pay for the work. New York illustrates the abatement-only tier: Real Property Law § 235-b implies a warranty that the premises are 'fit for human habitation,' but New York does not authorize tenant repair-and-deduct or unilateral withholding — the tenant's path is a rent abatement or an HP repair action in housing court. The everywhere-else default: most states recognize the implied warranty of habitability and provide some version of repair-and-deduct, rent withholding, or rent escrow, but the caps, notice periods, and whether self-help is allowed all differ — confirm your state's specific statute (or call a local legal-aid office) before you stop paying or start deducting.",
    ],
    stateNotes: [
      {
        state: "California (Tier A — repair-and-deduct)",
        note: "Cal. Civ. Code § 1942: repair-and-deduct capped at one month's rent, no more than twice in any 12-month period; 30-day reasonable-time presumption after notice. Habitability standards in § 1941.1. Anti-retaliation under § 1942.5.",
      },
      {
        state: "Texas (Tier A — repair-and-deduct)",
        note: "Tex. Prop. Code § 92.0561: deduction capped at one month's rent or $500, whichever is greater; § 92.056 requires the tenant be current on rent and gives a reasonable time (rebuttable 7-day presumption); second notice by certified/trackable mail.",
      },
      {
        state: "Massachusetts (Tier A — repair-and-deduct, code-certified)",
        note: "G.L. c. 111 § 127L: deduct up to four months' rent in a 12-month period, but only after a board of health / code-enforcement agency or court certifies the violation and the owner fails to begin repairs within 5 days and complete within 14 days of written notice.",
      },
      {
        state: "Washington (Tier A — repair-and-deduct)",
        note: "RCW 59.18.100: repair-and-deduct after written notice and a statutory waiting period; per-repair and annual caps tied to one to two months' rent depending on the procedure. Tenant must follow the notice/estimate steps.",
      },
      {
        state: "Florida (Tier B — withhold via court registry, no pure self-help)",
        note: "Fla. Stat. § 83.56(1): 7-day written notice of material noncompliance with § 83.51(1). § 83.60: to defend an eviction on habitability grounds the tenant must pay accrued rent into the court registry (within 5 business days) or waive the defense. Florida has no general repair-and-deduct statute.",
      },
      {
        state: "Ohio (Tier B — rent escrow with the court clerk)",
        note: "Ohio Rev. Code § 5321.07: after written notice, if the landlord fails to remedy within a reasonable time or 30 days (whichever is sooner) and the tenant is current, the tenant deposits rent 'with the clerk of the municipal or county court' and may seek a court-ordered repair, rent reduction, or release of escrow. Self-help withholding is not authorized.",
      },
      {
        state: "New York (Tier C — warranty of habitability, no self-help deduct)",
        note: "N.Y. Real Prop. Law § 235-b: implied warranty that the premises are fit for human habitation. No statutory repair-and-deduct or unilateral withholding — remedy is a rent abatement or an HP repair action in housing court.",
      },
      {
        state: "All other states (default)",
        note: "Most states recognize the implied warranty of habitability and provide repair-and-deduct, rent withholding, or rent escrow — but the cap, notice period, and whether self-help is allowed all vary. Verify your state's specific statute (or consult local legal aid) before deducting or withholding. Sending the written notice with a deadline is safe and useful everywhere.",
      },
    ],
    ifThisDoesntWork:
      "If the deadline passes and the landlord still won't act, the realistic escalation path runs through three doors. First, the free one: call your city or county code-enforcement / housing or health department and request an inspection — a recorded violation is powerful leverage and, in states like Massachusetts, is a precondition to the bigger repair-and-deduct cap. Second, the court door: most states let you bring a habitability / repair action (Ohio's escrow action under § 5321.07; New York's HP action; small-claims for the cost of repairs or rent abatement elsewhere) without a lawyer, and many tie a rent reduction to the period the defect existed. Third, fee-shifting and damages: several states' landlord-tenant acts award attorney's fees and sometimes multiple damages to a prevailing tenant, which makes a private suit economical on contingency. Watch the clock: statutes of limitation on these claims commonly run 2–4 years, and any repair-and-deduct or escrow remedy is only available while you are current on rent, so do not let a rent arrearage build up while you wait.",
    relatedSlugs: [
      "repair-request-formal",
      "heat-utility-failure",
      "mold-notice",
      "pest-infestation-notice",
      "quiet-enjoyment-demand",
      "security-deposit-demand",
    ],
    faqs: [
      {
        question: "Can I just stop paying rent until they fix it?",
        answer:
          "Only in some states, and even then rarely as pure self-help. In repair-and-deduct states (CA, TX, MA, WA) you pay for the fix and subtract the cost from rent up to a cap — you don't stop paying entirely. In escrow states (OH, FL) you must deposit the rent with the court, not pocket it. In warranty-only states (NY) you can't withhold at all; you seek a court-ordered rent reduction. Withholding rent in the wrong state is treated as nonpayment and is the most common way tenants get evicted while they're in the right on the repair.",
      },
      {
        question: "How much can I deduct?",
        answer:
          "It depends on the state's cap. California caps repair-and-deduct at one month's rent, usable no more than twice in any 12-month period (Civ. Code § 1942). Texas caps it at one month's rent or $500, whichever is greater (Prop. Code § 92.0561). Massachusetts allows up to four months' rent in a 12-month period, but only after a code-enforcement agency certifies the violation (G.L. c. 111 § 127L). Keep every invoice — you can only deduct the actual, documented cost of fixing the specific defect, not upgrades.",
      },
      {
        question: "Do I have to be current on rent to use this?",
        answer:
          "In most states, yes. Texas requires the tenant to be current when notice is given (Prop. Code § 92.056), and Ohio's escrow remedy requires the tenant to be current to deposit rent with the clerk (Rev. Code § 5321.07). California's remedy assumes an intact rent obligation. If you already owe back rent, resolve that first or your repair remedy can disappear.",
      },
      {
        question: "What kinds of problems actually count?",
        answer:
          "Conditions that affect habitability — not cosmetic ones. California Civ. Code § 1941.1 is a good checklist: no working heat, no hot or cold running water, broken plumbing or gas, failed electrical, leaks or failed weatherproofing, unsafe floors/stairs/railings, and unsanitary or pest-infested conditions. A scuffed wall or a slow-draining sink usually won't qualify; no heat in winter, a sewage backup, or a non-locking exterior door almost always will.",
      },
      {
        question: "Can the landlord evict or raise my rent for sending this?",
        answer:
          "Most states prohibit retaliation against a tenant who makes a good-faith habitability complaint or exercises a repair remedy. California Civ. Code § 1942.5, for example, bars a landlord from evicting, raising rent, or cutting services in retaliation for a repair request, and many other states have parallel anti-retaliation provisions with a presumption period (often 6–12 months). Keep your certified-mail receipt and a copy of this letter — if retaliation follows, the timeline is your evidence.",
      },
    ],
    keywords: [
      "landlord won't make repairs what can I do",
      "repair and deduct letter",
      "can I withhold rent until landlord makes repairs",
      "rent escrow letter to landlord",
      "deduct repair cost from rent",
      "landlord won't fix things rent withholding",
      "habitability repair notice to landlord",
      "how to withhold rent legally",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "return-of-belongings-after-move-out",
    category: "landlord",
    title: "Demand Return of Belongings After Move-Out (Free Letter + Abandoned-Property Statutes)",
    metaDescription:
      "Landlord holding your stuff after you moved out or were evicted? Free demand letter citing abandoned-property law — Cal. Civ. Code §§ 1980-1991, Fla. § 715, plus TX, WA, OR, VA.",
    lede:
      "You moved out — or were evicted — and the landlord still has your furniture, clothes, documents, or tools locked inside. In most states a landlord cannot keep, sell, or trash your property; they must give written notice, store it, and let you reclaim it. This letter demands its return and puts the statute they're breaking in writing.",
    body: `[Your Full Name]
[Current Mailing Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Manager Name]
[Landlord / Management Company]
[Address]

Sent via certified mail, return receipt requested
(Copy also emailed to: [landlord email])

Re: Demand for Return of Personal Property Left at [Rental Address, Unit #] — Tenancy Ended [Date]

Dear [Landlord Name]:

I rented [Rental Address, Unit #] from [lease start date] until [date you vacated / date of eviction]. When I left, the following personal property of mine remained on the premises and is, to my knowledge, still in your possession or control:

Inventory of my property being held:
  • [Item — e.g., queen bed frame and mattress]
  • [Item — e.g., refrigerator / washer / dryer (if mine, not the unit's)]
  • [Item — e.g., clothing, in 4 boxes]
  • [Item — e.g., laptop, hard drive, and personal/financial documents]
  • [Item — e.g., tools, instruments, children's belongings]
  • [Approximate total value: $[Amount]]

These items are my property. They were not abandoned in the legal sense, and they were not surrendered to you. [If applicable: I have been trying to arrange retrieval since (date) by (calls/texts/email), and have been refused, ignored, or locked out.]

Legal basis:

[Pick the tier that applies to your state — strike the others.]

  [TIER A — State statute requires notice, storage, and a chance to reclaim before any disposal.]
  Under [Cal. Civ. Code §§ 1980-1991 / Fla. Stat. §§ 715.10-715.111 / Or. Rev. Stat. § 90.425 / Va. Code § 55.1-1254], a landlord who holds a former tenant's personal property must give written notice describing the property, must store it with reasonable care, and must allow me a statutory period to reclaim it before the property may be sold or disposed of. You may not keep, sell, give away, or destroy my belongings except by following that exact procedure. To date I have received [no statutory notice / a notice dated (date)], and the reclamation period [has not expired / is still open].

  [TIER B — Eviction / writ-of-possession states: my property must be stored and is redeemable.]
  Because possession was recovered by [writ of possession / writ of restitution], my property was subject to [Tex. Prop. Code §§ 24.0061-24.0062 / Wash. Rev. Code § 59.18.312]. My property was required to be [placed outside the unit and/or stored by a bonded warehouseman / stored on my timely written request], and I am entitled to redeem it on payment of any lawful, reasonable storage or moving costs. I hereby demand to redeem and retrieve my property and request a written, itemized statement of any storage or drayage charges you contend are owed.

  [TIER C — No specific statute / "all other states" default.]
  Even where no abandoned-property statute applies, my belongings remain my property. Keeping, selling, or destroying them without lawful process is conversion, and you hold them as a bailee with a duty of reasonable care. I demand their return.

Demand:

Within [10] days of your receipt of this letter, please do one of the following:

  1. Make my property available for pickup at [the premises / the storage location] at a mutually agreed date and time during normal business hours; OR
  2. Confirm in writing the location of my property and any lawful, reasonable, itemized storage or removal costs you contend must be paid before release, so the exchange can be arranged.

I am ready to retrieve my property promptly and to pay any storage charge that is actually authorized by statute and reasonable in amount. Do not sell, donate, discard, or otherwise dispose of any item listed above. [If your state has a value-based disposal threshold — e.g., CA $700, FL $500, OR $1,000, WA $250 — note that the items above exceed it and may not be summarily destroyed.]

If you do not respond:

  • I will file a complaint with [your state Attorney General's consumer division / local housing or rent board / the court that issued the writ];
  • I will pursue a claim in small claims court for the value of the property plus any damages the statute allows [e.g., Cal. Civ. Code § 1965 provides damages for a landlord's wrongful refusal to surrender property];
  • I will preserve this letter and the certified-mail receipt as evidence that you had written notice of my demand and of the statutory procedure before any disposal.

Please direct all communication to me at [phone] and [email]. I would prefer to resolve this quickly and cooperatively.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of lease showing your tenancy; photos of the property left behind; any move-out or eviction paperwork; prior emails/texts requesting retrieval; itemized inventory with values]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy. The certified-mail receipt is the single most important thing you create here: it proves the landlord had written notice of your demand and of the statutory procedure before they sold or trashed anything — which is what turns a sloppy disposal into a damages claim.",
      "Inventory everything with photos and rough values before you send. List each item, where it was in the unit, and what it is worth. If you can show the total value exceeds your state's disposal threshold (CA $700, FL $500, OR $1,000, WA $250), the landlord loses the right to quietly keep or destroy it and must run a public-sale procedure instead.",
      "Pick the right tier. Tier A (CA, FL, OR, VA, and most states) = there is a notice-and-storage statute and you have a reclamation window — cite it. Tier B (TX, WA) = your stuff came out via an eviction writ and is redeemable from a warehouseman/storage on payment of lawful costs — demand to redeem and ask for an itemized bill. Tier C = no specific statute, so lean on conversion and bailment.",
      "Highest-leverage move: offer to pay reasonable, itemized storage costs and ask for the bill in writing. Most landlords are not trying to litigate — they want the unit empty and the storage cost covered. Naming a specific pickup window and pre-agreeing to pay lawful storage removes their excuse and usually gets the door opened.",
      "Top mistake to avoid: do not break in, change locks back, or remove items without the landlord's agreement or a court order — self-help can flip you from victim to trespasser. Also do not wait. Disposal clocks are short (5-8 days in OR, 7-30 days in WA, 15-18 days in CA, 10-15 days in FL), so send this the day you realize your property is being held.",
    ],
    legalContext: [
      "When a tenancy ends and a tenant's belongings stay behind, the law in most states treats those belongings as the tenant's property, not the landlord's windfall. The landlord generally cannot simply keep, sell, donate, or throw the items away. Instead, a statute imposes a defined procedure: give the former tenant written notice that describes the property and says where and by when it can be claimed; store the property with reasonable care in the meantime; charge only reasonable storage costs; and dispose of the property only after the reclamation period runs and only by the method the statute prescribes (often a public sale, with surplus proceeds escheating to the county or the state). The two big variables are which procedure applies — a voluntary-move-out abandoned-property statute, or a post-eviction writ-of-possession storage regime — and how long the reclamation window is.",
      "California is the anchor. Civil Code §§ 1980-1991 (\"Disposition of Personal Property Remaining on Premises at Termination of Tenancy\") require the landlord to serve a written notice of right to reclaim. Under § 1983 the deadline to claim must be \"not less than 15 days after the notice is personally delivered or, if mailed, not less than 18 days after the notice is deposited in the mail,\" and § 1984 fixes the content of that notice (description of the property, where to claim it, the deadlines, and the landlord's signature and contact information). Under § 1988, if the landlord reasonably believes the total resale value is less than $700 the landlord may keep or dispose of it; if it is worth more, the landlord must sell it at a public sale advertised in a newspaper at least five days in advance, with any surplus paid to the county treasury within 30 days and reclaimable by the owner for one year. Separately, Civil Code § 1965 bars a residential landlord from refusing to surrender personal property the tenant left behind: the former tenant makes a written request within 18 days, the landlord may collect reasonable removal and storage costs, must release the property within 72 hours of payment, and faces damages for a wrongful refusal. Together these sections mean a California landlord who keeps or trashes your property without notice is exposed.",
      "Other states split into two patterns. The notice-and-storage pattern (Tier A) mirrors California: Florida's Disposition of Personal Property Landlord and Tenant Act (Fla. Stat. §§ 715.10-715.111) requires written notice with a claim deadline \"not fewer than 10 days\" after personal delivery or \"not fewer than 15 days\" after mailing (§ 715.104) and a $500 keep-or-sell threshold (§ 715.109); Oregon (ORS 90.425) gives the tenant at least 5 days (personal delivery) or 8 days (mail) to respond and lets the landlord dispose of ordinary property only if its value is $1,000 or less; Virginia (Va. Code § 55.1-1254) allows disposal after a 24-hour reclamation period that follows a 7-day or 10-day written notice. The post-eviction pattern (Tier B) attaches to the writ instead: in Texas the writ of possession lets an officer have a bonded warehouseman remove and store the property (Tex. Prop. Code § 24.0061), and the tenant redeems it from the warehouseman's lien (§ 24.0062), typically within about 30 days; in Washington (RCW 59.18.312, amended 2023) the landlord must store the property if the tenant makes a written request within three days of the writ, and may sell only after 30 days (property over $250) or 7 days (property $250 or less, excluding personal papers, photos, and keepsakes).",
      "Everywhere else — and as the backstop in every state — the common law fills the gap. A landlord who holds your belongings after you leave is a bailee with a duty of reasonable care, and a landlord who keeps, sells, or destroys them without lawful authority commits conversion, for which you can recover the property's value. That is why the default tier of this letter still has teeth even in states without a dedicated abandoned-property statute: the landlord does not get to convert your property to their own use just because you no longer live there. One important boundary in the other direction: do not engage in self-help to recover the items (forcing entry, changing locks, removing things without agreement) — that can expose you to trespass or worse and undercut your own claim. Make the demand in writing, document everything, and escalate through the agency or the court.",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Cal. Civ. Code §§ 1980-1991 + § 1965. Written notice of right to reclaim required; claim deadline ≥15 days (personal) / ≥18 days (mail) per § 1983; under $700 the landlord may keep/dispose, over $700 requires public sale per § 1988. § 1965: landlord must surrender left-behind property within 72 hrs of the tenant paying reasonable costs, with damages for wrongful refusal.",
      },
      {
        state: "Florida (Tier A)",
        note: "Fla. Stat. §§ 715.10-715.111 (Disposition of Personal Property Landlord and Tenant Act). Written notice describing the property; claim deadline ≥10 days (personal) / ≥15 days (mail) per § 715.104; $500 keep-or-sell threshold per § 715.109; surplus sale proceeds to county treasury, reclaimable for one year.",
      },
      {
        state: "Oregon (Tier A)",
        note: "Or. Rev. Stat. § 90.425. Written notice; tenant has ≥5 days (personal delivery) / ≥8 days (mail) to respond for ordinary property (45 days for manufactured dwellings/floating homes); landlord must store with reasonable care; may dispose of ordinary property only if value is $1,000 or less.",
      },
      {
        state: "Virginia (Tier A)",
        note: "Va. Code § 55.1-1254. Landlord may dispose only after a 24-hour reclamation period that follows a 7-day or 10-day written notice; tenant may remove property at reasonable times during the period; sale proceeds applied to tenant debts, remainder handled as a security deposit under § 55.1-1226.",
      },
      {
        state: "Texas (Tier B — eviction)",
        note: "Tex. Prop. Code §§ 24.0061-24.0062. Writ of possession lets the officer use a bonded/insured warehouseman to remove and store property (or set it outside the unit); tenant redeems from the warehouseman's lien, generally within ~30 days. No general statute compels storage after a voluntary move-out — the lease and ch. 54 landlord's-lien rules govern that.",
      },
      {
        state: "Washington (Tier B — eviction)",
        note: "Wash. Rev. Code § 59.18.312 (amended 2023). After a writ of restitution, the landlord must store the property if the tenant serves a written request within 3 days of service; sale allowed only after 30 days (value over $250) or 7 days (value $250 or less, excluding personal papers, family pictures, keepsakes); surplus held one year then to the Dept. of Revenue.",
      },
      {
        state: "All other states (default)",
        note: "Most states have a comparable abandoned-personal-property statute (written notice + mandatory storage + a reclamation window + a public-sale procedure before disposal) — check your code first and cite it. Where none exists, the common-law torts of conversion and bailment bar a landlord from keeping, selling, or destroying your property without lawful process; demand its return and its value if destroyed.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord ignores the demand or has already disposed of your property, escalate on two tracks. First, file a complaint with your state Attorney General's consumer-protection division or your local housing/rent board (free, and the paper trail matters). Second, sue in small claims court for the value of the property — most states' small-claims limits ($5,000-$12,500 depending on the state) comfortably cover a household's worth of belongings, and you do not need a lawyer. In states with a damages provision (e.g., Cal. Civ. Code § 1965 for wrongful refusal to surrender), claim it. If the property was sold or destroyed without the statutory notice and procedure, that conversion is itself the wrong — you recover the value the landlord skipped the procedure to avoid paying. Move quickly: the statute of limitations on conversion/property claims is typically 2-3 years, but the practical window is far shorter because disposal clocks run in days, so preserve photos, your inventory, and the certified-mail receipt now.",
    relatedSlugs: [
      "security-deposit-demand",
      "deposit-itemization-request",
      "move-out-walkthrough-request",
      "intent-to-vacate",
      "illegal-entry-cease-and-desist",
      "quiet-enjoyment-demand",
    ],
    faqs: [
      {
        question: "Can my landlord just throw my stuff away after I move out?",
        answer:
          "In most states, no. A landlord generally must give you written notice, store your property with reasonable care, and let you reclaim it within a statutory window before disposing of it (e.g., Cal. Civ. Code §§ 1980-1991; Fla. Stat. §§ 715.10-715.111). Trashing or selling your belongings without following that procedure is conversion, and you can recover the value.",
      },
      {
        question: "I was evicted, not a voluntary move-out. Does that change things?",
        answer:
          "Yes — the procedure usually shifts to the eviction writ. In Texas the writ of possession lets an officer have a bonded warehouseman remove and store your property, which you redeem from the warehouseman's lien within about 30 days (Tex. Prop. Code §§ 24.0061-24.0062). In Washington you must serve a written storage request within 3 days of the writ, after which the landlord must store it and can sell only after 30 days (or 7 days for items worth $250 or less) (RCW 59.18.312).",
      },
      {
        question: "The landlord says I have to pay storage fees before I can get my things. Is that legal?",
        answer:
          "Often yes, but only reasonable and itemized costs. Most abandoned-property statutes let a landlord charge the actual, reasonable cost of removal and storage before releasing your property (e.g., Cal. Civ. Code §§ 1965, 1990). Ask for the charges in writing and itemized; you can pay under protest and dispute an inflated bill later. They cannot invent fees or hold your property hostage for unrelated debts like back rent unless a specific lien statute allows it.",
      },
      {
        question: "How much is my property worth, and does the value matter?",
        answer:
          "It matters a lot. Many states set a value threshold below which the landlord can keep or dispose of property without a public sale (California $700, Florida $500, Oregon $1,000, Washington $250). If your belongings collectively exceed that threshold, the landlord must run a public-sale procedure and cannot summarily destroy them — so document item-by-item values with photos.",
      },
      {
        question: "Can I just go back and take my things myself?",
        answer:
          "No — avoid self-help. Forcing entry, changing the locks, or removing items without the landlord's agreement or a court order can expose you to trespass and undercut your own claim. Make the demand in writing, document everything, agree on a pickup time, and if they refuse, escalate to the AG's consumer division or small claims court rather than taking matters into your own hands.",
      },
    ],
    keywords: [
      "landlord won't give me my stuff back",
      "landlord kept my belongings after eviction",
      "how to get my things back from old apartment",
      "landlord threw away my property",
      "abandoned property landlord notice",
      "get belongings back after move out",
      "landlord holding my furniture hostage",
      "tenant personal property after eviction",
      "demand return of property letter landlord",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "security-deposit-double-damages-followup",
    category: "landlord",
    title: "Security Deposit Double/Treble Damages Demand — Landlord Missed the Deadline (Free Template + State Multipliers)",
    metaDescription:
      "Your landlord blew the deadline to return or itemize your deposit. Free follow-up letter demanding the statutory penalty — 3x in MA/MD/TX, 2x in CA/IL/NJ/NY — plus attorney's fees.",
    lede:
      "You already asked for your deposit back. The statutory deadline came and went with no refund and no itemized statement. In most states, missing that deadline doesn't just keep you owed the deposit — it exposes the landlord to two or three times the amount plus your attorney's fees. This is the escalation letter that names the penalty.",
    body: `[Your Full Name]
[Your Forwarding Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord's Name or Property Management Company]
[Landlord's Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also sent by email to [landlord email] for the record.)

Re: SECOND AND FINAL DEMAND — Statutory Penalty for Withheld Security Deposit, [Former Rental Address]

Dear [Landlord's Name]:

I rented [Former Rental Address] from [Move-In Date] to [Move-Out Date]. I paid a security deposit of $[Deposit Amount]. I surrendered possession and returned the keys on [Move-Out Date], and I provided you my forwarding address (above) on [Date forwarding address given].

On [Date of first demand], I sent you a written demand for the return of my deposit. That letter is enclosed, along with the certified-mail receipt showing you received it on [Date received].

Under [State] law, you were required to either return my full deposit or deliver a written, itemized statement of any deductions within [statutory deadline — your state's number of days] of [the date I vacated / the date I gave you my forwarding address]. That deadline was [Deadline Date]. As of today — [Number] days after the deadline — I have received [no response at all / a refund of only $[Partial Amount] / an itemized statement that is unsupported and non-compliant for the reasons below].

Because the statutory deadline has passed, this is no longer only a demand for my deposit. The law in my state now exposes you to a statutory penalty on top of the deposit itself.

Legal basis:

[Pick the tier that applies to your state — strike the others.]

  [TIER A — TREBLE (3x) PENALTY STATES]
  Under [Mass. G.L. c. 186, § 15B(6),(7) / Md. Code, Real Prop. § 8-203(e)(4) / Tex. Prop. Code § 92.109], a landlord who misses the deadline or withholds the deposit without a lawful, documented basis is liable to the tenant for THREE TIMES the wrongfully withheld amount, plus court costs and reasonable attorney's fees.
    • Massachusetts (G.L. c. 186, § 15B): Failing to return the deposit or furnish the itemized list within 30 days forfeits your right to retain any of it (§ 15B(6)), and entitles me to three times the deposit, plus 5% interest, court costs, and reasonable attorney's fees (§ 15B(7)). This is strict liability — no proof of bad faith is required.
    • Maryland (Real Prop. § 8-203): Failing to mail the written list of damages within 45 days forfeits your right to withhold anything (§ 8-203(g)), and withholding without a reasonable basis exposes you to up to threefold the withheld amount plus reasonable attorney's fees (§ 8-203(e)(4)).
    • Texas (Prop. Code § 92.109): A landlord who fails to return the deposit or provide a written itemization on or before the 30th day after surrender is PRESUMED to have acted in bad faith (§ 92.109(d)), making you liable for $100 + three times the portion wrongfully withheld + my reasonable attorney's fees (§ 92.109(a)).

  [TIER B — DOUBLE (2x) PENALTY STATES]
  Under [Cal. Civ. Code § 1950.5(m) / 765 ILCS 710/2 / N.J. Stat. § 46:8-21.1 / N.Y. Gen. Oblig. Law § 7-108], the wrongful withholding of my deposit entitles me to double damages plus costs and attorney's fees.
    • California (Civ. Code § 1950.5): The deposit was due within 21 days (§ 1950.5(h)). Bad-faith retention subjects you to statutory damages of up to twice the deposit, in addition to actual damages (§ 1950.5(m)).
    • Illinois (765 ILCS 710): You may not withhold any part of the deposit without furnishing an itemized statement with paid receipts within 30 days (710/1). Failure or bad-faith withholding makes you liable for twice the deposit, plus court costs and reasonable attorney's fees (710/2).
    • New Jersey (N.J. Stat. § 46:8-21.1): The deposit and interest were due, itemized, within 30 days. On a finding for the tenant the court shall award double the amount wrongfully withheld, plus full costs of the action and reasonable attorney's fees.
    • New York (Gen. Oblig. Law § 7-108): Failing to provide the itemized statement and balance within 14 days forfeits your right to retain any portion of the deposit (§ 7-108(1-e)). A willful violation carries punitive damages of up to twice the deposit (§ 7-108(1-g)).

  [TIER C — FORFEITURE-OF-CLAIM STATES]
  Under [Fla. Stat. § 83.49(3)], because you did not give me the required written notice of intent to impose a claim by certified mail within 30 days of termination, you have forfeited the right to impose any claim on my deposit and may not seek a setoff. The full deposit is due, and the prevailing party in any action is entitled to court costs plus reasonable attorney's fees.

  [DEFAULT — ALL OTHER STATES]
  Nearly every state sets a fixed deadline (commonly 14 to 45 days) after a tenant vacates and provides a forwarding address for the landlord to return the deposit or deliver an itemized statement. Most states attach a real consequence to missing it — either forfeiture of the right to keep any portion, or a statutory multiplier (often 1.5x to 3x) plus attorney's fees. Under [cite your state's security-deposit statute and its penalty subsection], your failure to meet the [Number]-day deadline triggers [forfeiture / the statutory multiplier] in addition to the return of my deposit.

Demand:

Within [10] days of the date of this letter, remit $[Penalty Amount — deposit × your state's multiplier] (the deposit of $[Deposit Amount] [plus the statutory multiplier / plus interest where applicable]) by [check / electronic transfer] to the address above.

If you contend a deduction is still proper, you have already missed the statutory window to document it — but in any event, the burden is on you to produce: each specific deduction; the legal basis (actual damage beyond ordinary wear and tear, or unpaid rent); paid receipts, invoices, or written estimates; and proration of any item against its remaining useful life rather than full replacement cost.

If you do not pay $[Penalty Amount] within [10] days, I will file suit in small claims court (or, where the amount exceeds the small claims limit, in the appropriate court) and seek the full statutory penalty, interest, court costs, and reasonable attorney's fees provided by [State] law. The fee-shifting provisions cited above mean the cost of your continued non-payment will fall on you, not me.

I would still prefer to resolve this without litigation. Pay the amount demanded and this matter is closed.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of first demand letter; certified-mail receipt and tracking record showing delivery; copy of lease; move-in inspection report (if any); dated move-out photos; proof of date forwarding address was provided; any partial payment or non-compliant statement you received]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy. Attach your FIRST demand letter and its certified-mail receipt — the dated proof that the landlord received a clear demand and still blew the deadline is what converts this from a deposit dispute into a statutory-penalty case. Keep the new certified-mail tracking number.",
      "Calculate the penalty number before you send. Multiply the wrongfully withheld amount by your state's multiplier (3x in MA, MD, TX; 2x in CA, IL, NJ, NY) and write that figure into the Demand. In Massachusetts add 5% interest from the date the deposit became due; in Maryland add simple interest. In forfeiture states (FL, NY 14-day, MD/IL on a missed statement) the landlord has already lost the right to keep anything, so demand the full deposit back regardless of any claimed damage.",
      "Pick the tier that matches your state and strike the rest, then fill in your exact deadline. The deadline is the hinge of the whole letter — Texas and Florida run 30 days, California 21, New York 14, Maryland 45. If you are unsure of your state's number, your first demand letter or your state attorney general's tenant page will have it; the sources are in the Legal Context below.",
      "Highest-leverage move: name the attorney's-fees provision explicitly. The reason landlords settle these letters fast is that fee-shifting (MA § 15B(7), TX § 92.109(a), CA § 1950.5, IL 710/2, NJ § 46:8-21.1, FL § 83.49(3)) means a small deposit can support a large fee award — which makes the case attractive to a plaintiff's lawyer and expensive for the landlord to fight.",
      "Top mistake to avoid: do not cash a partial check marked \"payment in full\" or \"final settlement\" — in some states that endorsement waives the rest of your claim, including the penalty. And do not let the deadline drama push you past your statute of limitations; if the landlord stalls, file in small claims before the clock runs.",
    ],
    legalContext: [
      "Security-deposit law is set state by state, but the structure is uniform: after you vacate and give a forwarding address, the landlord has a fixed window — commonly 14 to 45 days — to return the deposit or deliver a written, itemized statement of deductions. The first demand letter exists to put the landlord on that clock. This letter is what you send after the clock runs out. The legal significance of a blown deadline is large: in most states the remedy stops being \"please return my money\" and becomes a statutory penalty. Some states forfeit the landlord's right to keep any portion of the deposit; many expose the landlord to a multiplier of two or three times the wrongfully withheld amount; and almost all of the penalty statutes shift attorney's fees to the tenant who prevails. The missed deadline is the leverage — you no longer have to argue about whether a scuff was wear and tear, because the landlord lost the right to make deductions at all.",
      "The treble-damage states are the strongest, and Massachusetts is the anchor. Under G.L. c. 186, § 15B, a landlord who fails to return the deposit or furnish an itemized list of damages within 30 days after the end of the tenancy forfeits the right to retain any portion of it (§ 15B(6)), and the tenant \"shall be awarded damages in an amount equal to three times the amount of such security deposit ... plus interest at the rate of five per cent ... together with court costs and reasonable attorney's fees\" (§ 15B(7)). Crucially, the Massachusetts treble penalty for these violations is strict liability — the tenant does not have to prove the landlord acted in bad faith. Texas reaches a similar place by presumption: under Prop. Code § 92.109, a landlord who fails to refund or provide a written itemization on or before the 30th day after surrender \"is presumed to have acted in bad faith\" (§ 92.109(d)), and a bad-faith landlord is liable for \"$100, three times the portion of the deposit wrongfully withheld, and the tenant's reasonable attorney's fees\" (§ 92.109(a)). Texas conditions all of this on the tenant having given a written forwarding address (§ 92.107). Maryland's Real Prop. § 8-203 requires the written list of damages within 45 days (failure forfeits the right to withhold under § 8-203(g)) and exposes a landlord who without a reasonable basis fails to return the deposit within 45 days to \"up to threefold of the withheld amount, plus reasonable attorney's fees\" (§ 8-203(e)(4)).",
      "The double-damage states form the next tier. California Civ. Code § 1950.5 sets a 21-day deadline (§ 1950.5(h)(1)) and provides that bad-faith retention \"may subject the landlord ... to statutory damages of up to twice the amount of the security, in addition to actual damages\" (§ 1950.5(m) — note the subsection was renumbered from (l) by a 2025 amendment effective January 1, 2026). Illinois 765 ILCS 710/1 bars a landlord from withholding any part of the deposit for damage unless an itemized statement with paid receipts is furnished within 30 days, and 765 ILCS 710/2 makes a non-compliant or bad-faith landlord \"liable for an amount equal to twice the amount of the security deposit due, together with court costs and reasonable attorney's fees.\" Illinois removed its old \"5 or more units\" coverage threshold effective January 1, 2024 — the Act now reaches all residential lessors regardless of building size. New Jersey's N.J. Stat. § 46:8-21.1 requires return within 30 days and directs that the court, on a finding for the tenant, \"shall award recovery of double the amount\" wrongfully withheld plus full costs and (in the court's discretion) reasonable attorney's fees. New York straddles forfeiture and multiplier: under Gen. Oblig. Law § 7-108(1-e), a landlord who fails to provide the itemized statement and balance within 14 days \"shall forfeit any right to retain any portion of the deposit,\" and a willful violation carries \"punitive damages of up to twice the amount of the deposit\" (§ 7-108(1-g)).",
      "Some states use forfeiture of the claim rather than a damages multiplier, and the everywhere-else default still gives you real leverage. Florida's § 83.49(3) is the model forfeiture statute: a landlord who does not return the deposit within 15 days (no claim) or give written notice by certified mail of intent to impose a claim within 30 days \"forfeits the right to impose a claim upon the security deposit and may not seek a setoff,\" and the prevailing party recovers court costs plus a reasonable attorney's fee. Pennsylvania (68 P.S. § 250.512) and Georgia (O.C.G.A. § 44-7-35) follow comparable forfeiture-plus-multiplier patterns. For any state not specifically listed, the default framing holds: there is almost certainly a deadline (commonly 14 to 45 days) and almost certainly a consequence for blowing it — either forfeiture of the right to keep any portion, or a multiplier (often 1.5x to 3x) plus fees. Look up your state's security-deposit statute and its penalty subsection, plug the number into the letter, and the blown deadline does the work.",
    ],
    stateNotes: [
      {
        state: "Massachusetts",
        note: "G.L. c. 186, § 15B(4),(6),(7). 30 days after termination of occupancy. Strict-liability treble damages: 3x the deposit + 5% interest + court costs + reasonable attorney's fees for failing to return or itemize. No bad faith required. One of the strictest deposit regimes in the country.",
      },
      {
        state: "Maryland",
        note: "Real Prop. § 8-203(e)(1),(e)(4),(g). 45 days after end of tenancy to return with interest; written list of damages within 45 days or the right to withhold is forfeited (§ 8-203(g)). Withholding without a reasonable basis: up to threefold (3x) the withheld amount + reasonable attorney's fees.",
      },
      {
        state: "Texas",
        note: "Prop. Code §§ 92.103, 92.107, 92.109. 30 days after surrender, once the tenant has given a written forwarding address. Missing the deadline presumes bad faith (§ 92.109(d)), exposing the landlord to $100 + 3x the wrongfully withheld portion + reasonable attorney's fees (§ 92.109(a)).",
      },
      {
        state: "California",
        note: "Civ. Code § 1950.5(h),(m). 21 calendar days to refund or send an itemized statement. Bad-faith retention: statutory damages of up to twice (2x) the deposit, in addition to actual damages. Bad-faith subsection renumbered to (m) by a 2025 amendment effective Jan. 1, 2026 (formerly (l)).",
      },
      {
        state: "Illinois",
        note: "765 ILCS 710/1, 710/2. 30 days to furnish an itemized statement with paid receipts before withholding for damage. Bad-faith or non-compliant withholding: twice (2x) the deposit + court costs + reasonable attorney's fees. The old 5-or-more-units threshold was removed effective Jan. 1, 2024 — now applies to all residential lessors.",
      },
      {
        state: "New Jersey",
        note: "N.J. Stat. § 46:8-21.1. 30 days after termination to return the deposit plus interest, itemized, by personal delivery or registered/certified mail. On a finding for the tenant the court shall award double (2x) the wrongfully withheld amount + full costs + (discretionary) reasonable attorney's fees.",
      },
      {
        state: "New York",
        note: "Gen. Oblig. Law § 7-108(1-e),(1-g). 14 days to provide the itemized statement and return the balance. Missing the 14-day deadline forfeits all right to retain any portion. A willful violation carries punitive damages of up to twice (2x) the deposit.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 83.49(3). 15 days to refund if no claim; 30 days to send certified-mail notice of intent to impose a claim. Missing the 30-day notice deadline forfeits the right to impose any claim or setoff. Prevailing party recovers court costs + reasonable attorney's fees. Forfeiture regime, not a multiplier.",
      },
      {
        state: "All other states (default)",
        note: "Almost every state sets a deadline (commonly 14–45 days) after the tenant vacates and gives a forwarding address, and attaches a consequence to missing it — either forfeiture of the right to keep any portion, or a statutory multiplier (often 1.5x–3x) plus attorney's fees. Look up your state's security-deposit statute and its penalty subsection, then plug the deadline and multiplier into the letter.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord still does not pay, small claims court is the realistic next step and it is built for self-represented tenants — filing fees usually run $30–$80 and you do not need a lawyer. Bring both demand letters, both certified-mail receipts, your lease, dated move-out photos, proof of the forwarding-address date, and any partial payment or non-compliant statement. In multiplier states the judge can award not just the deposit but two or three times the wrongfully withheld amount plus court costs and attorney's fees (MA § 15B(7); TX § 92.109; MD § 8-203(e)(4); CA § 1950.5(m); IL 710/2; NJ § 46:8-21.1), which is exactly why these cases are economical to pursue and why fee-shifting makes a private attorney viable when the dollars justify it. You can also file a complaint with your state attorney general's consumer-protection division or a local tenants' rights / legal-aid clinic, which often resolve deposit disputes without a filing. Watch your statute of limitations: most state deposit and contract claims run 2–6 years (e.g., CA is generally up to 4 years; MA Wage-Act-style claims aside, the § 15B claim runs on the contract/statutory period) — file before it expires.",
    relatedSlugs: [
      "security-deposit-demand",
      "deposit-itemization-request",
      "unauthorized-deductions-itemization-challenge",
      "move-out-walkthrough-request",
      "intent-to-vacate",
      "return-of-belongings-after-move-out",
    ],
    faqs: [
      {
        question: "The landlord finally sent my deposit late — can I still get the penalty?",
        answer:
          "Often yes, depending on your state. In Massachusetts the treble penalty for failing to return or itemize within 30 days is strict liability and a late return does not automatically cure it (G.L. c. 186, § 15B). In Texas, missing the 30-day deadline raises a presumption of bad faith that a late refund does not erase on its own (Prop. Code § 92.109(d)). California requires bad faith for the 2x penalty (Civ. Code § 1950.5(m)), so a genuinely good-faith late payment may avoid it — but withholding with no itemization is evidence of bad faith. Keep proof of exactly when (and whether) you were paid.",
      },
      {
        question: "How is this different from the first security-deposit demand letter?",
        answer:
          "The first demand puts the landlord on the statutory clock and asks for the deposit back. This letter is sent after the deadline has passed. Because the deadline is blown, the demand changes: you are no longer just asking for the deposit, you are demanding the statutory penalty (two or three times the amount in most states) plus attorney's fees, and you reference the earlier letter and certified-mail receipt as proof the landlord had clear notice and still failed to comply.",
      },
      {
        question: "How much can I actually recover?",
        answer:
          "It depends on your state's multiplier. Treble (3x) states include Massachusetts (3x + 5% interest + fees), Maryland (up to 3x + fees), and Texas ($100 + 3x + fees). Double (2x) states include California (up to 2x bad-faith + actual damages), Illinois (2x + fees), New Jersey (2x + costs + fees), and New York (up to 2x for willful violations). Florida is a forfeiture state — the landlord loses the right to claim anything and the prevailing party gets fees, rather than a multiplier.",
      },
      {
        question: "Do I have to prove the landlord acted in \"bad faith\"?",
        answer:
          "It varies. Massachusetts treble damages for missing the deadline are strict liability — no bad faith needed (G.L. c. 186, § 15B(7)). Texas presumes bad faith once the landlord misses the 30-day window (Prop. Code § 92.109(d)). California and New York's enhanced penalties require bad faith or a willful violation (Civ. Code § 1950.5(m); Gen. Oblig. Law § 7-108(1-g)) — but withholding money with no itemized statement is itself strong evidence of it.",
      },
      {
        question: "Is it worth hiring a lawyer for a small deposit?",
        answer:
          "The fee-shifting provisions are designed to make it worth it. Statutes like MA § 15B(7), TX § 92.109(a), CA § 1950.5, IL 710/2, NJ § 46:8-21.1, and FL § 83.49(3) award the prevailing tenant's reasonable attorney's fees, so even a modest deposit can support a meaningful fee award — which is why plaintiff's lawyers take these cases and landlords settle them. For smaller amounts, small claims court is free of lawyers entirely and the judge can still award the multiplier and costs.",
      },
    ],
    keywords: [
      "landlord missed deadline to return security deposit",
      "security deposit double damages letter",
      "triple damages security deposit",
      "statutory penalty for withheld security deposit",
      "landlord didn't return deposit on time what can I do",
      "sue landlord for security deposit penalty",
      "3x security deposit Massachusetts",
      "bad faith security deposit Texas",
      "how to get more than my deposit back",
      "security deposit follow up demand letter",
    ],
    publishedAt: "2026-06-26",
  },

  {
    slug: "unauthorized-deductions-itemization-challenge",
    category: "landlord",
    title: "Dispute Improper Security Deposit Deductions Letter (Free Template + State Wear-and-Tear Rules)",
    metaDescription:
      "Landlord returned your deposit minus bogus deductions for wear and tear, pre-existing damage, or charges with no receipts? Free letter disputing the line items and demanding the withheld money back — Cal. Civ. Code § 1950.5 + state tiers.",
    lede:
      "You got part of your security deposit back, with a list of deductions you don't agree with — charges for normal wear and tear, for damage that was there before you moved in, or for repairs with no receipts attached. This letter disputes the specific line items and demands the wrongfully withheld portion back, citing your state's wear-and-tear exclusion and receipt requirements.",
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

Re: Dispute of Improper Deposit Deductions and Demand for Refund of $[Disputed Amount] — [Former Rental Address]

Dear [Landlord's Name]:

I rented the property at [Former Rental Address] from [Move-In Date] to [Move-Out Date]. My security deposit was $[Original Deposit Amount]. I surrendered possession and returned the keys on [Move-Out Date] and provided my forwarding address on [Date Forwarding Address Provided].

On [Statement Date] I received your statement returning $[Amount Returned] and retaining $[Amount Retained] in deductions. I am not disputing that you returned a statement. I am disputing specific charges on it as improper under [State] law, and I am demanding the return of the $[Disputed Amount] that was wrongfully withheld.

Disputed line items:

  Line item: "[Item exactly as worded on your statement]"
    Amount charged: $[Amount]
    Why this charge is improper [pick all that apply; delete the rest]:
      • NORMAL WEAR AND TEAR. This is ordinary deterioration from everyday use, not damage, and is not deductible from a security deposit in any state. [Describe: e.g., "lightly worn carpet in the main walkway after 4 years of use," "faded paint," "small nail holes from picture hangers," "minor scuffs on the baseboards."]
      • PRE-EXISTING DAMAGE. This condition existed before my tenancy began and is documented in [my move-in inspection report dated (date) / move-in photos dated (date)]. I cannot be charged to repair a condition I did not cause.
      • NO RECEIPT OR INVOICE. You charged me for a repair or replacement but did not attach a paid receipt, invoice, or estimate substantiating the cost, as required by [State] law for a charge of this size.
      • NO PRORATION FOR USEFUL LIFE. You charged the full replacement cost of an item that was already partway through its useful life. [Example: the carpet was approximately (X) years old; carpet's accepted useful life is generally 5–10 years, so at most the unused portion may be charged — not 100% of replacement cost.]
      • VAGUE / UNEXPLAINED. The statement does not identify what was actually damaged, what was done to repair it, who did the work, or what it cost. A generic category is not a lawful itemization.

  Line item: "[Next item from your statement]" — repeat the analysis above as needed.

Corrected accounting:

  Original deposit:                       $[Original Deposit Amount]
  Deductions I do NOT dispute:          – $[Undisputed Deductions]
  Improper deductions (itemized above): + $[Disputed Amount]
  Amount already returned:              – $[Amount Returned]
  ------------------------------------------------------------
  Balance you owe me:                     $[Disputed Amount]

Legal basis:

[Pick the tier that matches your state — strike the others. Keep the wear-and-tear point in every version; it applies everywhere.]

  Normal wear and tear is not deductible in any state. A deposit secures against damage and unpaid rent — not against the ordinary deterioration that comes from living in a home. Charging me for wear and tear, or for a condition that pre-dated my tenancy, is not a permitted use of the deposit.

  [TIER A — Receipts/photos required + statutory multiplier]
  Under [Cal. Civ. Code § 1950.5 / Wash. RCW 59.18.280 / 765 ILCS 710/1 / Mass. G.L. c. 186, § 15B], you may only deduct for actual damage beyond ordinary wear and tear, and you must substantiate each charge with documentation. California Civ. Code § 1950.5(e)(2)(A) bars any claim "for damages to the premises or any defective conditions that preexisted the tenancy, for ordinary wear and tear or the effects thereof." § 1950.5(h)(2)(B) and (h)(4)(A) require receipts or invoices for any repair-and-cleaning deductions exceeding $125, and § 1950.5(h)(2)(A) requires that landlord-performed work be described with the time spent and the reasonable hourly rate. Washington RCW 59.18.280 prohibits charging for "wear resulting from ordinary use" or for any charge "not substantiated by documentation," and bars sending such charges to collections or a tenant-screening service. The charges above fail these requirements.

  [TIER B — Forfeiture / burden-on-landlord states]
  Under [N.Y. Gen. Oblig. Law § 7-108 / Fla. Stat. § 83.49], you may not retain any amount "for costs relating to ordinary wear and tear of occupancy or damage caused by a prior tenant" (N.Y. Gen. Oblig. Law § 7-108(1-a)(b)), and in any dispute over the amount retained "the landlord shall bear the burden of proof as to the reasonableness of the amount retained." The disputed charges are for wear and tear and for undocumented or pre-existing conditions; you cannot meet that burden.

  [TIER C — Written-statement-of-reasons states]
  Under [Colo. Rev. Stat. § 38-12-103 / Tex. Prop. Code §§ 92.104, 92.109], you may withhold only for damages and charges for which I am legally liable, and you must provide a written statement of the exact reasons (Colorado) or a written description and itemized list of deductions (Texas). Texas defines "normal wear and tear" as "deterioration that results from the intended use of a dwelling," excluding deterioration from "negligence, carelessness, accident, or abuse" (Tex. Prop. Code § 92.001(4)). The disputed charges are for ordinary wear and tear and are not lawful deductions.

Demand:

Within [14] days of the date of this letter, please refund the $[Disputed Amount] wrongfully withheld, by [check mailed to my forwarding address / electronic transfer]. If you continue to contend any portion is properly retained, provide — for each disputed line item — the paid receipt, invoice, or estimate, the date-stamped photo evidence where your state requires it, and the proration calculation for any item past its useful life.

If you do not refund the disputed amount or produce compliant documentation within [14] days, I will treat the retention as in bad faith and pursue all remedies available under [State] law, which include:
  • [California] Up to 2× the amount of the security as statutory damages, in addition to actual damages, for bad-faith retention (Civ. Code § 1950.5(m)).
  • [Texas] $100 + 3× the portion wrongfully withheld + reasonable attorney's fees (Prop. Code § 92.109); bad faith is presumed because [the deadline was missed / the charges are unsupported].
  • [Massachusetts] 3× the deposit + 5% interest + court costs + reasonable attorney's fees (G.L. c. 186, § 15B(7)) — a strict-liability penalty.
  • [Colorado] Treble (3×) the amount wrongfully withheld + reasonable attorney fees and court costs (C.R.S. § 38-12-103).
  • [New York] Forfeiture of any right to retain + punitive damages up to 2× the deposit for a willful violation (Gen. Oblig. Law § 7-108).
  • [Washington] Up to 2× the deposit for intentional refusal + prevailing-party attorney's fees (RCW 59.18.280).
  • [Illinois] 2× the deposit + court costs + reasonable attorney's fees (765 ILCS 710/1).
  • [Florida] Forfeiture of the right to impose the claim + prevailing-party attorney's fees (Fla. Stat. § 83.49).

I would prefer to resolve this without litigation. Please send the refund or compliant documentation to the contact information above by the deadline.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of the deductions statement received; copy of lease; copy of move-in inspection report; dated move-in and move-out photos; copy of forwarding-address proof; any prior correspondence about the deposit]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy too. The certified-mail receipt is what proves the date your dispute was received and starts any subsequent bad-faith damages clock. In Florida, certified mail is the statutory channel and you must object in writing within 15 days of receiving the landlord's claim notice (Fla. Stat. § 83.49) — do not let that window lapse.",
      "Attach the landlord's own deductions statement (a copy, not the original) and circle the line items you dispute. Pair each disputed charge with your evidence: the move-in inspection report, dated move-in photos showing a condition was pre-existing, and dated move-out photos showing you left it clean. Visual proof that a charge is wear-and-tear or pre-existing is what converts a he-said-she-said into a winnable claim.",
      "Pick your state tier correctly. Tier A (CA, WA, IL, MA) requires receipts/invoices — and in CA, photos — to substantiate every charge, so an undocumented deduction is automatically improper. Tier B (NY, FL) puts the burden of proof on the landlord and bars charges for wear and tear or prior-tenant damage. Tier C (CO, TX) requires a written statement of exact reasons and excludes wear and tear by statutory definition. The wear-and-tear point applies in all three — keep it in every version.",
      "Do the corrected-accounting math and demand a specific dollar figure. The single most effective move is naming the exact amount wrongfully withheld and showing the arithmetic — original deposit minus the deductions you accept, minus what was already returned. A precise number is far harder to ignore than 'I disagree with your deductions.'",
      "The top mistake: cashing the partial refund check without reading the endorsement. If the check or the statement says 'payment in full,' 'final settlement,' or 'accord and satisfaction,' depositing it can waive your right to the rest in some states. Photograph the check, then either hold it or deposit it only after striking/objecting to any such language in writing.",
    ],
    legalContext: [
      "A partial refund with a deductions list is a different fight from a deposit that never came back. Here the landlord has conceded you are owed something and has put their reasoning in writing — which means the dispute narrows to whether each specific line item is a lawful deduction. Across every state, three categories of charge are improper no matter how the landlord labels them: (1) ordinary wear and tear; (2) conditions that pre-existed your tenancy; and (3) repairs or replacements the landlord cannot document where documentation is required. The job of this letter is to walk the statement line by line, tag each bad charge with the category it falls into, and demand the wrongfully withheld portion back.",
      "Normal wear and tear is non-deductible everywhere, and several states define the line by statute. Texas Prop. Code § 92.001(4) defines 'normal wear and tear' as 'deterioration that results from the intended use of a dwelling,' expressly excluding deterioration caused by 'negligence, carelessness, accident, or abuse.' New York Gen. Oblig. Law § 7-108(1-a) bars retaining any amount 'for costs relating to ordinary wear and tear of occupancy or damage caused by a prior tenant.' Washington RCW 59.18.280 prohibits withholding for 'wear resulting from ordinary use of the premises.' Worn carpet from foot traffic, faded paint, small nail holes, and minor scuffs are wear and tear; burns, large holes, pet damage, and broken fixtures are damage. And where a landlord replaces an aging item, the deduction must be prorated against the item's remaining useful life — a 7-year-old carpet on a 10-year useful life can be charged for roughly 30% of replacement cost, not 100%.",
      "California is the doctrinal anchor and the cleanest statute for this letter, because Civ. Code § 1950.5(e)(2)(A) blocks the two most common improper charges in a single sentence: a landlord 'shall not assert a claim against the tenant or the security for damages to the premises or any defective conditions that preexisted the tenancy, for ordinary wear and tear or the effects thereof.' On documentation, § 1950.5(h)(1) gives the landlord 21 calendar days to refund or itemize; § 1950.5(h)(2)(B) and (h)(4)(A) require receipts or invoices once repair-and-cleaning deductions exceed $125; and § 1950.5(h)(2)(A) requires landlord-performed work to be described with the time spent and the reasonable hourly rate. AB 2801 added a photo regime now in effect: under § 1950.5(g)(2), beginning April 1, 2025 the landlord must take move-out and after-repair photographs, and under § 1950.5(g)(1), for tenancies beginning on or after July 1, 2025 the landlord must take move-in photographs — all to accompany the itemized statement. (Note: AB 2801 renumbered the statute; the receipt and bad-faith provisions long cited as (g)(2) and (l) now appear at (h)(2)(B) and (m).) Bad-faith retention exposes the landlord to up to twice the deposit in statutory damages under § 1950.5(m).",
      "The remedy structure is what gives the letter teeth, and it splits into three patterns. Receipt/photo + multiplier states (CA up to 2×; WA up to 2×; IL 2×; MA a strict-liability 3× plus 5% interest, costs and fees under G.L. c. 186, § 15B(7)) treat an undocumented charge as automatically improper and stack a penalty on top. Burden-on-landlord / forfeiture states (NY Gen. Oblig. Law § 7-108 — the landlord 'shall bear the burden of proof as to the reasonableness of the amount retained,' with forfeiture and up to 2× punitive damages for willful violations; FL Fla. Stat. § 83.49 — missing the 30-day certified-mail notice forfeits the claim, and the prevailing party recovers attorney's fees) put the work of justifying each charge on the landlord. Written-statement states (CO C.R.S. § 38-12-103 — willful retention forfeits all right to withhold and triggers treble damages plus fees and costs; TX Prop. Code §§ 92.104, 92.109 — bad faith is presumed when the landlord misses the 30-day itemization deadline, exposing them to $100 + 3× the wrongfully withheld amount + attorney's fees) require the landlord to state exact reasons and bar wear-and-tear charges by definition. Everywhere else, the same common-law default applies: deductions must be for actual damage beyond wear and tear, the burden of justifying them is the landlord's, and small claims court is the backstop.",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Cal. Civ. Code § 1950.5. § 1950.5(e)(2)(A) bars charges for pre-existing conditions and ordinary wear and tear. Receipts/invoices required once repair + cleaning deductions exceed $125 (§ 1950.5(h)(2)(B), (h)(4)(A)); landlord-performed work needs hours + hourly rate (§ (h)(2)(A)). AB 2801 photo rules in effect — move-out/after-repair from Apr 1, 2025 (§ (g)(2)); move-in for new tenancies from Jul 1, 2025 (§ (g)(1)). Bad-faith retention: up to 2× the deposit (§ 1950.5(m)). (AB 2801 renumbered subsections — old (g)(2)/(l) are now (h)(2)(B)/(m).)",
      },
      {
        state: "Washington (Tier A)",
        note: "RCW 59.18.280. No portion may be withheld for 'wear resulting from ordinary use' or for charges 'not substantiated by documentation.' Statement must include copies of estimates received or invoices paid; landlord work needs time spent + reasonable hourly rate. Unsubstantiated charges may not be charged, sent to collections, or reported to a tenant-screening service. Intentional refusal: up to 2× the deposit + prevailing-party attorney's fees.",
      },
      {
        state: "Illinois (Tier A)",
        note: "765 ILCS 710/1. 30 days to furnish an itemized statement of damage with paid receipts attached (estimates allowed if paid receipts follow within 30 more days). Noncompliance/bad faith: 2× the deposit + court costs + reasonable attorney's fees. Freshness note: the Act's former 'containing 5 or more units' limitation was removed by amendment — the current version reaches residential lessors generally; verify scope for your specific tenancy.",
      },
      {
        state: "Massachusetts (Tier A)",
        note: "G.L. c. 186, § 15B. Within 30 days, an itemized list of damages sworn under the pains and penalties of perjury, with written evidence (estimates, bills, invoices, receipts); reasonable wear and tear excluded. One of the strictest regimes in the country: 3× the deposit + 5% interest + court costs + reasonable attorney's fees (§ 15B(7)), on a strict-liability basis.",
      },
      {
        state: "New York (Tier B)",
        note: "Gen. Oblig. Law § 7-108. 14 days to refund or send an itemized statement; the landlord may not retain for 'ordinary wear and tear of occupancy or damage caused by a prior tenant' (§ 7-108(1-a)(b)) and 'shall bear the burden of proof as to the reasonableness of the amount retained.' Missing the 14-day deadline forfeits all right to retain; willful violation: punitive damages up to 2× the deposit.",
      },
      {
        state: "Florida (Tier B)",
        note: "Fla. Stat. § 83.49. Landlord must send a 'notice of intention to impose a claim' by certified mail within 30 days of move-out, in statutory form; missing it forfeits the right to claim. Tenant must object in writing within 15 days of receiving the notice — that objection preserves your rights. Prevailing party recovers court costs + reasonable attorney's fees.",
      },
      {
        state: "Colorado (Tier C)",
        note: "C.R.S. § 38-12-103. Deposit returned with a written statement listing the exact reasons for any retention within one month (up to 60 days if the lease specifies). Willful retention forfeits all right to withhold and triggers treble (3×) the amount wrongfully withheld + reasonable attorney fees + court costs.",
      },
      {
        state: "Texas (Tier C)",
        note: "Tex. Prop. Code §§ 92.001(4), 92.103, 92.104, 92.109. 'Normal wear and tear' defined as deterioration from intended use, excluding negligence/carelessness/accident/abuse — not chargeable. 30 days after surrender (once a written forwarding address is given) to refund and provide a written description + itemized list. Bad faith presumed if the 30-day deadline is missed: $100 + 3× the wrongfully withheld amount + reasonable attorney's fees (§ 92.109).",
      },
      {
        state: "All other states",
        note: "The same architecture applies even without a state-specific multiplier: a deposit may be used only for actual damage beyond ordinary wear and tear and unpaid rent, the landlord must give a written, itemized accounting within the statutory window (commonly 14–30 days), and the landlord bears the burden of justifying disputed charges. Charges for wear and tear, pre-existing conditions, or undocumented repairs are improper. If unresolved, small claims court is the venue — filing fees typically run $30–$80 and no lawyer is required.",
      },
    ],
    ifThisDoesntWork:
      "If the landlord refuses to refund the disputed amount or sends back the same unsupported charges, your next step in most states is small claims court. Filing fees are usually $30–$80, you don't need a lawyer, and the courts are built for self-represented parties. Bring the certified-mail receipt for this letter, the deposit statement you disputed, your move-in inspection report, dated move-in and move-out photos, the lease, and your corrected accounting. In most states the burden of proof on disputed deductions sits with the landlord — they must produce the receipts and documentation they should have provided in the first place. In multiplier states (California up to 2×, Texas $100 + 3×, Massachusetts 3× + interest + fees, Colorado 3× + fees, Illinois 2× + fees, Washington up to 2× + fees) a small-claims filing is highly economical and often makes a $400 dispute worth $1,000+; local legal-aid clinics and law-school tenant clinics frequently help for free. Watch your statute of limitations — most state deposit and small-claims windows run two to six years from move-out.",
    relatedSlugs: [
      "security-deposit-demand",
      "deposit-itemization-request",
      "security-deposit-double-damages-followup",
      "move-out-walkthrough-request",
      "return-of-belongings-after-move-out",
    ],
    faqs: [
      {
        question: "The landlord gave me a list of deductions — can I still dispute them?",
        answer:
          "Yes. An itemized list isn't the end of the matter; it just frames the fight around whether each charge is lawful. In most states the landlord bears the burden of proving a disputed deduction was reasonable (e.g., N.Y. Gen. Oblig. Law § 7-108). If a charge is for wear and tear, for a pre-existing condition, or has no receipt where one is required, it's improper and you can demand it back.",
      },
      {
        question: "What counts as 'normal wear and tear' I can't be charged for?",
        answer:
          "Ordinary deterioration from everyday living: lightly worn carpet in walkways, faded paint, small nail holes from hanging pictures, minor scuffs, and loose grout from age. Texas codifies the line in Prop. Code § 92.001(4) — deterioration from 'intended use,' not from 'negligence, carelessness, accident, or abuse.' Burns, large holes, pet stains, and broken fixtures are damage; the gray-area items in between usually favor the tenant.",
      },
      {
        question: "They charged me to replace carpet I lived on for years — is that allowed?",
        answer:
          "Not at full price. Carpet has an accepted useful life (generally 5–10 years), and a landlord may only charge for the unused portion. A 7-year-old carpet on a 10-year life can be charged at roughly 30% of replacement cost, not 100% — and if the wear was ordinary foot traffic rather than damage, it may not be chargeable at all. Demand the proration calculation.",
      },
      {
        question: "Can I cash the partial refund check and still dispute the rest?",
        answer:
          "Usually yes, but read the endorsement first. If the check or statement says 'payment in full,' 'final settlement,' or 'accord and satisfaction,' depositing it can waive your remaining claim in some states. Photograph it, and if it carries that language, object in writing before you deposit it — or hold it until the dispute resolves.",
      },
      {
        question: "Do I need receipts from the landlord for every deduction?",
        answer:
          "It depends on the state and the amount. California requires receipts or invoices once repair-and-cleaning deductions exceed $125 (Civ. Code § 1950.5(h)(2)(B), (h)(4)(A)); Washington (RCW 59.18.280), Massachusetts (G.L. c. 186, § 15B), and Illinois (765 ILCS 710/1) require documentation to substantiate charges. Where documentation is required and missing, the charge is improper and the unsupported portion must be returned.",
      },
    ],
    keywords: [
      "dispute security deposit deductions",
      "landlord charged me for normal wear and tear",
      "improper deposit deductions letter",
      "landlord kept part of deposit unfairly",
      "charged for damage that was already there",
      "no receipts for deposit deductions",
      "how to challenge deposit deductions",
      "get wrongfully withheld deposit back",
      "security deposit wear and tear law",
      "dispute itemized deposit statement",
    ],
    publishedAt: "2026-06-26",
  },

  {
  slug: "utility-billing-dispute-landlord-rubs",
  category: "landlord",
  title: "Dispute a Landlord's RUBS / Utility Billing — Demand Disclosure & Itemization (Free Template)",
  metaDescription:
    "Landlord billing you for utilities through RUBS, a submeter markup, or undisclosed charges? Free demand letter citing Cal. Civ. Code § 1940.9, IL 765 ILCS 740, TX Water Code § 13.503, MD RUBS law + a default.",
  lede:
    "Your landlord is charging you for water, gas, or electricity through a ratio formula (RUBS), a submeter, or a vague line item — and won't show you the math. In a handful of states that's regulated by statute; almost everywhere else it's governed by your lease. This letter demands the disclosure, the itemization, and a correction of any overcharge.",
  body: `[Your Full Name]
[Unit / Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Landlord / Property Management Company Legal Name]
[Attn: Property Manager / Billing Department]
[Address]

cc: [On-site manager; third-party billing company, e.g. Conservice / Yardi / RealPage, if one issues your bills]

Sent via certified mail, return receipt requested
(Copy also emailed to [billing email])

Re: Demand for Disclosure and Itemization of Utility Charges — Unit [#], Account [#]

To [Landlord / Property Manager]:

I rent [Unit #] at [Property Address] under a lease dated [Date]. I am writing about the utility charges you bill me each month. I am asking you to disclose how those charges are calculated, to itemize them, and to correct any amount that exceeds what is permitted.

The charges at issue:

  • Utility(ies) billed to me: [water / sewer / gas / electric / trash / "utilities"]
  • How they appear on my bill: [a flat monthly fee / a "RUBS" or "ratio" charge / a submeter reading / a line item labeled "utilities" with no breakdown]
  • Amount in dispute: $[Amount] over [billing periods / dates]
  • Third-party biller, if any: [Company name and account number]

What I am asking for:

  1. The exact method used to calculate my share. If you allocate a master-meter bill among tenants (a "ratio utility billing system" or RUBS), provide the written allocation formula — the factors used (square footage, occupancy, number of bedrooms, fixtures) and the math applied to my unit.
  2. A copy of the underlying utility bill(s) from the utility company for each period you have billed me, so I can confirm my share does not exceed the building's actual cost.
  3. An itemized statement for each period: the building total, the allocation factor, my calculated share, and any separate service or administrative fee, identified as such.
  4. If I am on a submeter: the submeter's location, its last calibration/certification date, and the rate applied (which may not exceed the rate the utility charges the property).

Legal basis:

[Pick the tier that matches your state — strike the others.]

  [TIER A — State statute regulates how this is billed and disclosed]

  [CALIFORNIA — shared meter] Under Cal. Civ. Code § 1940.9, if my meter also measures gas or electric service to areas outside my unit (common areas, another unit, exterior lighting), you were required to disclose that before the tenancy or on discovery, and to either agree in writing on payment for the shared portion or become the customer of record yourself. If you did not, I am entitled to be reimbursed for service outside my unit back to the date that duty arose, and a court may order you made the customer of record on my meter.

  [CALIFORNIA — water submeter] If you bill me for water through a submeter, Cal. Civ. Code § 1954.204 required written pre-lease disclosure (in at least 10-point type) of the separate water billing, an estimated monthly amount, due dates, permissible charges, the submeter's location and calculation method on request, and how to challenge the meter's accuracy through the county sealer. Under this chapter you may bill me only for my metered volumetric usage plus a share of the purveyor's fixed charge and a permitted cost-recovery and late fee — not a markup.

  [ILLINOIS — master-meter allocation] Under the Tenant Utility Payment Disclosure Act, 765 ILCS 740/5, you may not demand payment for master-metered utility service on a proportionate-share basis without first giving me, in writing, the formula used to allocate the bill among tenants. The total of all tenants' payments for the building may not exceed the amount the utility charged, and you must provide a copy of the utility bill for any period you bill me, on request.

  [TEXAS — submetered/allocated water & wastewater] Under Tex. Water Code § 13.503 and the TCEQ rules at 30 Tex. Admin. Code ch. 291, Subchapter H, you may charge me only the utility's actual cost per gallon plus applicable taxes and surcharges — no markup — and a service charge that may not exceed nine percent of the submetering costs allocated to my unit. Any late fee may not exceed five percent of the bill. You must use a TCEQ-approved allocation method, keep itemized records, and make them available to me for inspection.

  [NEW YORK — submetered electricity] If you submeter electricity to my unit, you may do so only with Public Service Commission authorization, and as a submeterer you must give me the full protections of the Home Energy Fair Practices Act. Under Public Service Law § 53 those protections cannot be waived, and the billing, disclosure, and dispute conditions in 16 NYCRR Part 96 apply to my account.

  [MARYLAND — RUBS] Under Md. Code, Real Property § 8-212.4, a landlord who bills tenants through a ratio utility billing system must give the tenant, in writing before the lease, a statement of the allocated billing and the utilities covered, copies of the last two utility bills, a description of the allocation method for each utility, a statement that billing disputes are between tenant and landlord, the prior-year average monthly bill for all units, my right to inspect billing records, and a citation to the statute. A lease term requiring me to pay RUBS charges is unenforceable if you failed to provide that information.

  [TIER B — No specific statute; governed by my lease and consumer-protection law]
  My state does not have a submetering/RUBS disclosure statute, so these charges are governed by my lease. My lease [does / does not] disclose this billing method and [does / does not] specify how my share is calculated. [If it doesn't:] charging me for an amount not provided for in the lease is not authorized by our agreement, and billing an allocated or marked-up amount without disclosing the method may be an unfair or deceptive practice under [State] consumer-protection law. I am entitled to know what I am being charged for and on what basis.

Demand:

Within [21] days of receipt, please provide the disclosure, the underlying utility bills, and an itemized statement described above, and refund or credit any amount charged in excess of [my actual metered usage / the building's actual cost / the amount authorized by my lease and applicable statute], which I calculate at $[Amount].

If you do not, I intend to:
  • File a complaint with [my state's Attorney General / consumer-protection division; the TCEQ (Texas); the Public Service / Public Utilities Commission (NY, and states that regulate submetering); the local rental-housing or code office];
  • Withhold or deduct the disputed, undisclosed portion to the extent my lease and state law allow, and treat an unenforceable or undisclosed charge accordingly;
  • Pursue the amount in small claims court, plus any statutory remedy available (e.g., reimbursement and customer-of-record relief under Cal. Civ. Code § 1940.9; unenforceability of the charge under Md. Real Prop. § 8-212.4).

I would prefer to resolve this directly. Please send the requested records to the address above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copies of the disputed utility bills/statements you sent me; the relevant lease page(s); my own utility-usage notes or photos of the submeter; any prior request for an explanation]`,
  howToUse: [
    "Send by certified mail with return receipt requested, and email a copy to the billing contact and any third-party biller (Conservice, Yardi, RealPage, etc.). The return receipt proves delivery and starts the clock on your deadline — keep it with your file.",
    "Attach the actual bills you're disputing and the lease page that covers utilities. The single most useful enclosure is the line item itself: a photo or PDF of the 'RUBS,' 'utility allocation,' or submeter charge you can't explain. Your demand is to see the math behind that specific number.",
    "Pick your tier honestly. Tier A is for the handful of states with a real statute — California (shared meter § 1940.9; water submeter § 1954.204), Illinois (765 ILCS 740), Texas (Water Code § 13.503 + TCEQ rules), New York (submetered electricity under PSC/HEFPA), and Maryland (RUBS, Real Prop. § 8-212.4). Everywhere else, use Tier B and lean on your lease plus your state's consumer-protection statute.",
    "Highest-leverage move: demand the underlying utility bill. In Illinois (765 ILCS 740/5) and Texas (§ 13.503) and Maryland (§ 8-212.4) you have a statutory right to it, and the total billed to all units cannot exceed what the utility actually charged the building. If the building total your bills imply is higher than the real utility invoice, that overcharge is your whole case in one document.",
    "Top mistake to avoid: don't simply stop paying rent. Withhold only the specific, identified, disputed utility portion, and only to the extent your lease and state law allow — paying the rest on time. Stopping all payments hands the landlord an eviction for nonpayment and buries your billing dispute underneath it.",
  ],
  legalContext: [
    "When a landlord bills you for utilities without giving you a separate, individual meter from the utility company, they are doing one of two things. A submetered building has a real meter on each unit (owned by the landlord, not the utility) that measures your actual usage; the landlord reads it and bills you. A ratio utility billing system (RUBS) has no per-unit measurement at all — the landlord takes the building's master-meter bill and divides it among tenants by a formula based on square footage, occupancy, bedroom count, or fixtures. The recurring complaints are the same in both: the charge isn't disclosed, it isn't itemized, the 'share' seems untethered from any usage, or a markup or fee has been quietly baked in. Whether you can force a correction depends almost entirely on your state — a minority regulate this by statute, and most leave it to your lease.",
    "California has the cleanest framework and the natural anchor. Cal. Civ. Code § 1940.9 covers the classic shared-meter trap: if the meter serving your unit also measures gas or electric service to areas outside it — common areas, exterior lighting, another unit — the landlord must disclose that before the tenancy or upon discovery, and must either reach a written agreement on the shared portion or become the utility's customer of record. If they don't, an aggrieved tenant can sue; the court may order the landlord made the customer of record on the tenant's meter and order reimbursement of payments for outside service back to the date the disclosure duty arose. Separately, for water, Chapter 2.5 (Cal. Civ. Code §§ 1954.201–1954.219, added by SB 7 in 2017, effective January 1, 2018) regulates submetering: § 1954.204 requires written, pre-lease disclosure (in at least 10-point type) of the separate water billing, an estimated monthly amount, due dates, the permissible charges, the submeter's location and calculation method on request, and how to challenge meter accuracy through the county sealer; the bill may include only metered usage plus a share of the purveyor's fixed charge and a limited cost-recovery and late fee — no markup. Honest caveat: SB 7 governs submeters, not pure RUBS — California RUBS itself is still a matter of contract.",
    "A few other states regulate the allocation directly, and the common thread is anti-profiteering plus mandatory disclosure. Illinois's Tenant Utility Payment Disclosure Act, 765 ILCS 740/5, bars a landlord from demanding a proportionate share of a master-metered utility unless the tenant first receives the written allocation formula; the total billed to all units may not exceed the utility's bill; and the tenant can demand a copy of the utility bill for any period billed. Texas regulates both submetering and RUBS-style allocation of water and wastewater: under Tex. Water Code § 13.503 and the TCEQ rules at 30 Tex. Admin. Code ch. 291, Subchapter H, the owner may pass through only the utility's actual cost per gallon plus taxes and surcharges (no markup), may add a service charge capped at nine percent of submetering costs, may charge a late fee no greater than five percent, must use a TCEQ-approved allocation method, and must keep records open to tenant inspection. Maryland's RUBS statute, Md. Code, Real Property § 8-212.4 (enacted 2021), is the most on-point of all: it defines RUBS, lists the eight things a landlord must disclose in writing before the lease (including the last two utility bills, the allocation method, and the prior-year average monthly bill for all units), and makes a RUBS lease term unenforceable if the landlord fails to disclose. New York takes a regulatory route: a landlord may submeter electricity to residential tenants only with Public Service Commission authorization, becomes a 'utility' subject to the Home Energy Fair Practices Act, cannot have those protections waived (Public Service Law § 53), and must follow the residential submetering conditions in 16 NYCRR Part 96.",
    "Everywhere else — most states — there is no submetering or RUBS disclosure statute, and the charge lives or dies by your lease. That is not as weak as it sounds. If the lease doesn't disclose the billing method or specify how your share is computed, the landlord is charging you for something the contract doesn't clearly authorize, and you can demand the basis before paying. If the lease does provide for it, the lease's own terms (and any cap or method it states) bind the landlord, and billing more than the contract allows is a breach. On top of that, every state has an unfair-and-deceptive-acts (UDAP) consumer-protection statute, and billing an allocated or marked-up utility charge without disclosing the method — or charging tenants more in aggregate than the utility charged the building — is the kind of practice those statutes were written for. The implied covenant of good faith and the utility's own anti-diversion tariff round out the everywhere-else toolkit. The letter's job in a Tier B state is to convert a vague, unexplained line item into a documented demand for the method and the underlying bill — which is often all it takes to get a correction.",
  ],
  stateNotes: [
    {
      state: "California (Tier A)",
      note: "Cal. Civ. Code § 1940.9 — shared-meter disclosure; remedy includes reimbursement back to when the duty arose + making the landlord customer of record. Cal. Civ. Code §§ 1954.201, 1954.204 (SB 7, eff. 2018) — water submetering: pre-lease written disclosure (≥10-pt type), usage-only billing, no markup. Note: governs submeters, not pure RUBS.",
    },
    {
      state: "Illinois (Tier A)",
      note: "765 ILCS 740/5 (Tenant Utility Payment Disclosure Act). No proportionate-share billing without the written allocation formula; total payments may not exceed the utility's bill; tenant may demand a copy of the utility bill. Also applies to condo/CIC associations.",
    },
    {
      state: "Texas (Tier A)",
      note: "Tex. Water Code § 13.503 + 30 TAC ch. 291, Subch. H (TCEQ). Submetered/allocated water: pass through actual cost only (no markup), service charge ≤ 9% of submetering costs, late fee ≤ 5%, TCEQ-approved allocation method, records open to tenant. Electric submetering is PUC-regulated separately.",
    },
    {
      state: "New York (Tier A)",
      note: "Submetered electricity requires PSC authorization; landlord becomes a 'utility' and must give full HEFPA protections, which cannot be waived (Public Service Law § 53). Billing/disclosure/dispute conditions in 16 NYCRR Part 96.",
    },
    {
      state: "Maryland (Tier A)",
      note: "Md. Code, Real Property § 8-212.4 (RUBS, enacted 2021). Eight mandatory pre-lease disclosures (incl. last two utility bills, allocation method, prior-year average bill, record-inspection right). A RUBS lease term is UNENFORCEABLE if the landlord fails to disclose.",
    },
    {
      state: "All other states (Tier B — default)",
      note: "No submetering/RUBS disclosure statute; the charge is governed by your lease. Leverage: the lease's own utility/itemization terms (a charge not authorized by the lease isn't owed), the state UDAP consumer-protection statute, the implied covenant of good faith, and the utility's anti-diversion tariff. Demand the method + the underlying utility bill.",
    },
  ],
  ifThisDoesntWork:
    "If the landlord ignores the demand, escalate on the cheapest track first. File a complaint with your state Attorney General's consumer-protection division — and with the sector regulator where one exists: the TCEQ in Texas, the Public Service/Public Utilities Commission in New York and other states that regulate submetering, and your local rental-housing or code-enforcement office. These are free and often produce a corrected bill without a lawyer. If money is owed back, small claims court is the workhorse: the amounts (overcharges, undisclosed fees, the markup over actual cost) usually fit inside small-claims limits, no lawyer required, and statutes like Cal. Civ. Code § 1940.9 (reimbursement + customer-of-record relief) and Md. Real Prop. § 8-212.4 (the charge is unenforceable) give you a clean theory. Watch the clock: most state breach-of-contract and statutory claims run two to four years, and your state's UDAP statute may carry its own (often shorter) limitations period. If the overcharge is large or building-wide, a tenant attorney working on the UDAP statute's fee-shifting provision may take it — but the letter plus an agency complaint resolves most of these.",
  relatedSlugs: [
    "heat-utility-failure",
    "repair-request-formal",
    "security-deposit-demand",
    "late-fee-waiver-request",
    "lease-renewal-or-month-to-month-confirmation",
  ],
  faqs: [
    {
      question: "What's the difference between RUBS and a submeter, and does it matter?",
      answer:
        "A submeter physically measures your unit's actual usage; RUBS doesn't — it divides the building's master-meter bill among tenants by a formula (square footage, occupancy, bedrooms). It matters because your dispute differs: with a submeter you challenge the reading, the rate, or a markup; with RUBS you challenge the formula and whether the building's total billed to all units exceeds the utility's actual charge. In Illinois (765 ILCS 740) and Maryland (Real Prop. § 8-212.4) you have a statutory right to see the formula and the underlying bill.",
    },
    {
      question: "Can my landlord make a profit on my utilities?",
      answer:
        "In the states that regulate it, generally no. Texas Water Code § 13.503 lets the owner pass through only the utility's actual cost (plus a service charge capped at 9% and a late fee capped at 5%). Illinois caps total tenant payments at the utility's bill. California's water-submetering law limits the bill to metered usage plus a defined cost-recovery fee. In states with no statute, whether a markup is allowed depends on your lease — but billing all tenants more in total than the utility charged the building is the kind of thing a consumer-protection (UDAP) claim targets.",
    },
    {
      question: "My state isn't California, Illinois, Texas, New York, or Maryland. Am I out of luck?",
      answer:
        "No. Most states leave this to your lease, which is still leverage. If the lease doesn't disclose the billing method or how your share is calculated, the charge isn't clearly authorized and you can demand the basis before paying. If it does, the lease's terms bind the landlord. Every state also has an unfair-and-deceptive-acts statute, and an undisclosed or marked-up allocation is squarely the kind of practice those laws address. Use Tier B in the letter.",
    },
    {
      question: "Can I just stop paying the disputed utility charge?",
      answer:
        "Be careful. Withhold only the specific, identified, disputed portion — never the rent itself — and only to the extent your lease and state law allow; pay everything else on time. Stopping all payments lets the landlord file for eviction for nonpayment, which will overshadow your billing dispute. In Maryland, if the landlord never made the required RUBS disclosures, the charge is unenforceable under Real Prop. § 8-212.4, which is a stronger footing — but document it and keep paying undisputed amounts.",
    },
    {
      question: "What if a third-party company (like Conservice or RealPage) sends my utility bills?",
      answer:
        "The landlord is still responsible — they hired the biller and set the method. Send your letter to the landlord and copy the billing company. Your statutory rights to the allocation formula and the underlying utility bill (Illinois, Texas, Maryland) run against the landlord regardless of who prints the invoice. If the third-party biller is adding its own fees, ask for those to be itemized and identified as such; in California and Texas, only specific, capped fees are allowed.",
    },
  ],
  keywords: [
    "landlord charging me too much for utilities",
    "what is RUBS billing apartment",
    "landlord won't show me utility bill",
    "ratio utility billing system dispute",
    "submeter water bill higher than usage",
    "landlord making profit on my utilities",
    "how to dispute apartment utility charges",
    "undisclosed utility fees lease",
    "demand itemized utility bill landlord",
    "is RUBS legal in my state",
  ],
  publishedAt: "2026-06-26",
},
];
