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
];
