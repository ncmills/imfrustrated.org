import type { LetterTemplate } from "./types";

// State PTO and expense-reimbursement statutes verified May 2026.
// 2 of 4 employer templates in this category — final-paycheck and unpaid-
// commission deferred to a future session due to usage limits hit on
// research dispatch.

export const employerLetters: LetterTemplate[] = [
  {
    slug: "pto-vacation-payout-demand",
    category: "employer",
    title: "PTO / Vacation Payout Demand on Separation (Free Template + State Tiers)",
    metaDescription:
      "Job ended and they didn't pay out your accrued PTO? Free demand letter citing state vacation-payout law — California Lab. Code § 227.3, Colorado HB22-1137, MA Wage Act treble damages.",
    lede:
      "Your job ended. You had accrued PTO on the books. Whether you're owed it depends entirely on your state. This letter cites the specific statute (or the specific company policy) and demands the payout.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Employer Legal Name — Human Resources]
[Employer Address]

cc: [Direct supervisor, payroll]

Sent via certified mail, return receipt requested
(Copy also emailed to HR contact)

Re: Demand for Accrued PTO / Vacation Payout — Separation Date [Date]

To Human Resources:

I am writing to demand payment of accrued, unused vacation / PTO that was owed to me as of my separation from [Employer] on [Date].

Separation details:
  • Last day worked: [Date]
  • Separation type: [Voluntary / Involuntary / Layoff]
  • Final paycheck date: [Date]
  • Final rate of pay: $[Hourly rate, or salary ÷ 2,080 for exempt]

Accrued vacation / PTO balance:
  • Hours (or days) of accrued, unused vacation / PTO as of last day: [Number]
  • Source: [Pay stub from (date) showing balance / HRIS export / company policy accrual schedule]
  • Calculation: [Number] hours × $[Hourly rate] = **$[Amount owed]**

Legal basis:

[Pick the tier that applies to your state — strike the others.]

  [TIER A — Mandatory payout by state law]
  Under [Cal. Lab. Code § 227.3 / Colo. Rev. Stat. § 8-4-101(14) per Nieto v. Clark's Market (Colo. 2021) / 820 ILCS 115/5 / Mass. G.L. c. 149 § 148 per Reuter v. Methuen (2022) / La. R.S. 23:631 et seq. / Neb. Rev. Stat. § 48-1229(4) / N.D.C.C. § 34-14-09.2], accrued, unused vacation is earned wages — not a discretionary perk — and must be paid at separation at the employee's final rate of pay. Any \"use it or lose it\" provision or forfeiture clause that wipes out earned time is void.

  [TIER B — No statutory default; enforceable if employer policy promises payout]
  My [Employer]'s written PTO policy [quoted at Section X of the Handbook, attached] promises payout of accrued vacation at separation. Under [N.Y. Labor Law § 198-c / § 195(5) / Md. Code Lab. & Empl. § 3-505 / N.J. Wage Payment Law / Ohio common law], this written promise is enforceable as a wage supplement.

  [TIER C — No payout absent explicit written agreement]
  [Skip this letter unless the company's written policy promises payout. If it does, cite the policy section.]

Demand:

Within [14] days of receipt of this letter, please pay $[Amount owed] for accrued, unused vacation / PTO at my final rate of pay, by [check / direct deposit to the account on file].

If you do not, I will pursue:
  • A wage claim with the [State Department of Labor / State Wage Board];
  • A private wage suit for the unpaid amount, plus [California § 203 waiting-time penalties up to 30 days of additional pay / Mass. Wage Act treble damages under c. 149 § 150 / state-specific multipliers];
  • Attorney's fees where the statute permits (CA § 218.5; IL Wage Payment Act; MA c. 149 § 150).

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [pay stub showing accrued PTO balance; relevant pages of employer handbook / PTO policy; employment agreement if applicable]`,
    howToUse: [
      "Send by certified mail with return receipt requested AND email to HR. The certified-mail receipt is what proves delivery and starts any state-specific waiting-time-penalty clock.",
      "Pull your accrued PTO balance from the most recent pay stub or HRIS export. The number is the foundation of the demand — if your employer disputes the balance, the pay stub is the contemporaneous record they themselves generated.",
      "Identify your state tier correctly. Tier A states (CA, CO, IL, LA, MA, NE, ND) treat vacation as wages with mandatory payout — forfeiture clauses are void. Tier B states (NY, NJ, MD, OH) require a written employer promise. Tier C states (TX, FL, GA) require an explicit written agreement; without one, no payout is owed.",
      "California specifically: under Lab. Code § 227.3, vested vacation must be paid at the FINAL rate of pay (not the rate when accrued), in the final paycheck. § 203 waiting-time penalties stack daily up to 30 days. § 218.5 mandates attorney's fees for the prevailing party in wage actions.",
      "Don't conflate vacation/PTO with sick leave. Sick leave generally does NOT have to be paid out anywhere, even in Tier A states. If your employer has a combined \"PTO\" bucket, the whole bucket usually gets treated as vacation and must be paid out in Tier A states.",
    ],
    legalContext: [
      "When a job ends, your accrued (vested) PTO or vacation may or may not have to be paid out — it depends entirely on the state. Three things drive the answer. State statute: a minority of states say accrued vacation is \"earned wages\" by statute or court ruling and must be paid at separation no matter what the employer policy says (CA, CO, IL, LA, MA, NE, ND, plus a handful more). Employer policy or contract: in most other states there's no statutory requirement, but if the employer's handbook, offer letter, or PTO policy promises a payout, that promise is enforceable as a contract or as a wage supplement under state wage-payment law (NY, NJ, MD, OH, and most others). Pure \"no obligation\" states: a few states explicitly defer to employer policy and impose nothing absent a written promise (TX, FL, GA). Common thread: in nearly every \"mandatory payout\" state, the theory is the same — once you've earned the vacation, it's deferred wages, not a discretionary perk, and forfeiture clauses that wipe out earned time are void.",
      "California Lab. Code § 227.3 is the cleanest statute in the country and the doctrinal anchor. Holdings: (1) Vacation = wages. Once vested, accrued vacation is deferred compensation, not a gratuity. (2) No forfeiture. Any employment contract or employer policy purporting to forfeit vested vacation at separation is void. (3) Paid at final rate. Owed at the employee's final rate of pay, not the rate when accrued. (4) In the final paycheck. Treated like any other final wages — payable at termination, or next regular payday for voluntary quits without 72 hrs notice. (5) Waiting-time penalties. If the employer is late, § 203 stacks daily pay up to 30 days. (6) CBA carve-out. A collective-bargaining agreement can waive immediate payout, but only if it does so explicitly. (7) Caps are OK. Employers can cap future accrual once you hit a threshold (must be \"reasonable\" — generally ≥1.5–1.75× annual accrual). What's banned is wiping out time you already earned.",
      "Other Tier A states reach the same place. Colorado: HB22-1137 amendments + Nieto v. Clark's Market (Colo. 2021) confirm earned vacation = wages and forfeiture agreements void. Illinois: 820 ILCS 115/5 requires \"monetary equivalent of all earned vacation\" at final rate; no forfeiture. Massachusetts: M.G.L. c. 149 § 148 + Reuter v. Methuen (2022) — Wage Act treats unused vacation as wages, with mandatory treble damages for late pay. Louisiana, Nebraska, North Dakota: similar statutory payout requirements with state-specific carve-outs (ND has a narrow exception for employees who resign with <1 yr tenure, <5 days notice, and were warned in writing at hire).",
      "Tier B states require a written employer promise to be enforceable. New York Labor Law § 198-c and § 195(5): no automatic payout, but if employer's written policy doesn't clearly forfeit unused PTO at separation (and wasn't communicated in advance), accrued vacation is enforceable as a wage supplement. New Jersey: no statute, but written policy or contract promising payout is enforceable under NJ Wage Payment Law. Maryland: Md. Code Lab. & Empl. § 3-505 treats vacation as a wage; payout required unless employer gave a written forfeiture policy at hire. Ohio: no statute, but if employer doesn't clearly communicate a forfeiture policy, accrued vacation is enforceable as a wage. What's enforceable everywhere: accrual caps (employer can stop NEW accrual once you hit X hours — the legal alternative to use-it-or-lose-it); no-vacation-at-all policies (no state requires PTO to exist); waiting periods before vacation vests (\"no vacation in first 90 days\" is fine).",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Cal. Lab. Code § 227.3. Vested vacation = wages; paid at final rate; \"use it or lose it\" void. § 203 waiting-time penalties (full day's wages per day, max 30 days) for late final paycheck. § 218.5 attorney's fees for prevailing party in wage actions.",
      },
      {
        state: "Colorado (Tier A)",
        note: "C.R.S. § 8-4-101(14); Nieto v. Clark's Market (Colo. 2021); HB22-1137. Earned vacation = wages; forfeiture agreements void. Mandatory payout.",
      },
      {
        state: "Illinois (Tier A)",
        note: "820 ILCS 115/5. \"Monetary equivalent of all earned vacation\" owed at final rate; no forfeiture. Illinois Wage Payment Act provides attorney's fees.",
      },
      {
        state: "Massachusetts (Tier A)",
        note: "M.G.L. c. 149 § 148 + Reuter v. Methuen, 489 Mass. 465 (2022). Wage Act treats unused vacation as wages; mandatory treble damages for late pay (M.G.L. c. 149 § 150); attorney's fees.",
      },
      {
        state: "Louisiana / Nebraska / North Dakota (Tier A)",
        note: "La. R.S. 23:631 et seq. (vacation per policy is \"amount then due\" at separation); Neb. Rev. Stat. § 48-1229(4); N.D.C.C. § 34-14-09.2 (narrow carve-out: <1 yr tenure, <5 days notice, warned in writing at hire).",
      },
      {
        state: "New York (Tier B)",
        note: "N.Y. Labor Law § 198-c; § 195(5). No automatic payout. If employer's written policy doesn't clearly forfeit unused PTO at separation (and wasn't communicated in advance), accrued vacation is enforceable as a wage supplement.",
      },
      {
        state: "Maryland (Tier B)",
        note: "Md. Code Lab. & Empl. § 3-505. Vacation is a \"wage\" — payout required unless employer gave a written forfeiture policy at hire.",
      },
      {
        state: "Texas / Florida / Georgia (Tier C)",
        note: "No statute. Payout only if written policy or agreement promises it. PTO is typically considered a benefit, not wages, unless contract says otherwise.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores the demand, file a wage claim with your state Department of Labor (free, often resolves without a lawyer). In Tier A states with attorney-fee provisions (CA § 218.5, IL Wage Payment Act, MA c. 149 § 150), a private wage suit is economically viable on contingency — and the statutory multipliers (CA § 203 waiting-time penalties up to 30 days; MA mandatory treble damages) make these cases attractive to plaintiffs' bars. For Tier B states, the suit is breach-of-contract or wage-supplement-enforcement; harder but doable with a written policy in hand. Tier C states without a written policy: limited remedies. Statute of limitations on most state wage claims is 2-3 years; CA is 3 years for the wage plus 4 years under Bus. & Prof. § 17200.",
    relatedSlugs: [
      "expense-reimbursement-demand",
      "billing-error-dispute",
      "debt-validation-request",
      "credit-card-fee-waiver",
      "credit-report-dispute",
      "goodwill-late-payment-removal",
    ],
    faqs: [
      {
        question: "I quit / I was fired for cause — does that change anything?",
        answer:
          "In Tier A states (CA, CO, IL, LA, MA, NE, ND), no. Vested vacation is earned. How you left doesn't unearn it. ND has the lone narrow carve-out (<1 yr, <5 days notice, written warning at hire).",
      },
      {
        question: "My handbook says \"PTO is forfeited at termination.\" Is that valid?",
        answer:
          "In Tier A states: no, the clause is void as to accrued time. In Tier B states: usually only valid if it was communicated in writing before you earned the time. In Tier C states: probably yes if it was in writing.",
      },
      {
        question: "My PTO is \"unlimited\" — am I owed anything?",
        answer:
          "Generally no. Unlimited PTO is unaccrued by design, so there's nothing to vest. California exception: if the \"unlimited\" policy isn't truly unlimited in practice (low usage, implicit cap), courts have held there's still a payout obligation.",
      },
      {
        question: "What about sick leave?",
        answer:
          "Sick leave typically does not have to be paid out anywhere, even in Tier A states. If your employer has a single \"PTO\" bucket that mixes vacation + sick, the whole bucket usually gets treated as vacation and must be paid out in Tier A states.",
      },
      {
        question: "How long do I have to file a claim?",
        answer:
          "Depends on the state. Most state wage-claim windows are 2-3 years. CA: 3 yrs for the wage, 4 yrs if you sue under Bus. & Prof. § 17200. MA: 3 yrs and treble damages are mandatory. File the state DOL claim first if you want a free path; private suit (with fees) is the bigger hammer.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "expense-reimbursement-demand",
    category: "employer",
    title: "Expense Reimbursement Demand Letter to Employer (Cal. Lab. Code § 2802 + State Tiers)",
    metaDescription:
      "Employer not reimbursing your business expenses? Free demand letter citing California Lab. Code § 2802 (mandatory attorney's fees) + IL, MA, MT, NH, ND, DC statutes.",
    lede:
      "Your employer made you buy your own laptop, drive your own car to client sites, or eat the cost of a hotel they told you to book. In California, Illinois, Massachusetts, Montana, New Hampshire, North Dakota, and DC, that's an enforceable statutory claim with attorney's fees.",
    body: `[Your Full Name]
[Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Employer Legal Name — Human Resources / Finance]
[Employer Address]

cc: [Direct supervisor]

Sent via certified mail, return receipt requested

Re: Demand for Reimbursement of Business Expenses — $[Total Amount]

To Human Resources:

I am writing to request reimbursement of $[Total] in business expenses I incurred between [Date] and [Date] in the course of my work for [Employer].

Itemized expenses (receipts attached):

| Date | Vendor | Amount | Business purpose |
|------|--------|--------|------------------|
| [Date] | [Vendor] | $[Amount] | [Brief: client meeting / WFH equipment / required travel / etc.] |
| [Date] | [Vendor] | $[Amount] | [Same] |
| [Date] | [Vendor] | $[Amount] | [Same] |
| **Total** | | **$[Total]** | |

Business-purpose justification:

[One or two sentences per category. Lift the "necessary" / "in direct consequence" language from the applicable statute.]
  • [Travel: I traveled to (location) at the direction of (supervisor) on (date) for (purpose); mileage / parking / lodging at attached rate.]
  • [Personal phone: I am required to use my personal cell phone for work calls because (no company phone provided / on-call requirement); reimbursement requested at (percentage) of bill per Cochran v. Schwan's (Cal. 2014).]
  • [WFH equipment: I purchased (item) on (date) at the direction of (supervisor) to perform my work-from-home duties.]
  • [Tools / equipment: (item) is required for my job duties and the company has not provided one.]

Legal basis:

[Pick the cite that applies to your state — strike the others.]

  [CALIFORNIA]
  Under Cal. Lab. Code § 2802(a), \"An employer shall indemnify his or her employee for all necessary expenditures or losses incurred by the employee in direct consequence of the discharge of his or her duties.\" § 2802(c) defines \"necessary expenditures or losses\" to include \"all reasonable costs, including, but not limited to, attorney's fees incurred by the employee enforcing the rights granted by this section.\" § 2802(b) provides interest from the date the expense was incurred. Cochran v. Schwan's Home Service (Cal. Ct. App. 2014) requires reimbursement of a \"reasonable percentage\" of personal cell phone use for work, even on unlimited plans.

  [ILLINOIS]
  Under 820 ILCS 115/9.5, the employer shall reimburse for \"all necessary expenditures or losses incurred by the employee within the employee's scope of employment and directly related to services performed for the employer.\" Necessary expenditures = reasonable expenses required in discharging duties that inure to the primary benefit of the employer. Expenses must be submitted with documentation within 30 days (employer can extend in writing).

  [MASSACHUSETTS]
  Under 454 CMR 27.04, employer cannot shift the cost of tools, materials, or supplies onto the employee if doing so cuts effective wages below minimum wage; uniforms required as a condition of employment must be reimbursed. Enforced under the Massachusetts Wage Act with mandatory treble damages plus attorney's fees.

  [MONTANA]
  Under Mont. Code Ann. § 39-2-701, employer must reimburse for \"all that he necessarily expends or loses in direct consequence of the discharge of his duties.\" Near-identical wording to CA § 2802(a).

  [NEW HAMPSHIRE]
  Under RSA 275:57, employer must reimburse expenses incurred in connection with employment AND at the request of the employer (except those expenses normally borne by the employee as a precondition of employment), within 30 days of presenting proof of payment. Willful violation: civil penalty up to $1,000 per violation plus interest.

  [NORTH DAKOTA / DC]
  ND Cent. Code § 34-02-01 (general indemnification statute mirroring CA § 2802). DC: regulation requiring private employers to pay for tools required of the employee in the performance of the business of the employer.

  [OTHER STATES — federal framing]
  If your state lacks a specific statute, the federal framing applies: (a) the FLSA \"kick-back\" rule (29 C.F.R. § 531.35) bars employer-imposed costs that drop the effective wage below minimum wage in any workweek; (b) the IRS accountable-plan framework (Treas. Reg. § 1.62-2; IRS Pub. 463) governs whether reimbursement is tax-free to you; and (c) the employer's own written reimbursement policy, if any, is an enforceable contract term.

Demand:

Within [30] days of receipt of this letter, please remit payment of $[Total] via [direct deposit / check].

If you do not, I will pursue:
  • A wage claim with the [State Department of Labor];
  • A private wage suit for the unpaid amount, plus [California § 2802(b) interest + § 2802(c) attorney's fees / New Hampshire $1,000 per-violation civil penalty / Mass. Wage Act treble damages].

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [itemized expense report; receipts (PDF / scans); written supervisor direction to incur expense if any; relevant employer policy section if any]`,
    howToUse: [
      "Send by certified mail with return receipt requested. Email a copy. The certified-mail receipt is what proves delivery and starts any state-specific damages clock.",
      "Itemize precisely. Date, vendor, amount, business purpose, receipt attached (Y/N). Total at the bottom. Vague \"travel expenses\" claims get pushed back; \"Uber to client meeting at [Address] on [Date], receipt #12345\" doesn't.",
      "California is the highest-leverage jurisdiction. § 2802(c)'s mandatory attorney's fees mean a $400 unreimbursed-expense claim can support a six-figure fee award — which is why CA employees actually get lawyers to take these cases and CA employers pay attention to demand letters. Cochran v. Schwan's (2014) applies even on unlimited-plan personal phones.",
      "For non-statutory states, lean on the company's written policy + the IRS accountable-plan framework. If your employer reimburses through a non-accountable plan (no receipts, no return of excess), the reimbursement gets added to your W-2 as wages and taxed — meaning income tax + FICA + Medicare withheld from money that should have been tax-free. That's a separate real-dollar harm.",
      "Don't threaten retaliation claims you haven't suffered. Don't accuse anyone of fraud. Don't set a 48-hour deadline (looks unreasonable). Don't email this from your work account where they can lock you out before you preserve a copy.",
    ],
    legalContext: [
      "In most states, no statute forces employers to reimburse out-of-pocket work expenses. The federal floor is the FLSA \"kick-back\" rule (29 C.F.R. § 531.35) — an employer can't require employees to bear costs that effectively bring wages below the federal minimum in any workweek. Beyond that, you only have a claim if your employer's written policy promised reimbursement (enforceable as a contract) OR you live in one of seven jurisdictions with a real statute: California, Illinois, Massachusetts, Montana, New Hampshire, North Dakota, and the District of Columbia.",
      "California Lab. Code § 2802 is the most consequential expense-reimbursement statute in the country. § 2802(a): \"An employer shall indemnify his or her employee for all necessary expenditures or losses incurred by the employee in direct consequence of the discharge of his or her duties, or of his or her obedience to the directions of the employer, even though unlawful, unless the employee, at the time of obeying the directions, believed them to be unlawful.\" § 2802(b): awards carry interest at the same rate as judgments in civil actions, accruing from the date the expense was incurred. § 2802(c): \"For purposes of this section, the term 'necessary expenditures or losses' shall include all reasonable costs, including, but not limited to, attorney's fees incurred by the employee enforcing the rights granted by this section.\" Three things make § 2802 powerful: \"all necessary expenditures\" is read broadly (home internet, personal cell phones, mileage, tools, uniforms, work-from-home equipment); mandatory attorney's fees under § 2802(c) flip the economics; and Cochran v. Schwan's Home Service, Inc. (Cal. Ct. App. 2014) requires reimbursement of a \"reasonable percentage\" of personal-phone bills used for work, even on unlimited plans where the work calls cost the employee zero incremental dollars.",
      "Illinois 820 ILCS 115/9.5 (effective January 1, 2019) is the second-strongest. Reimbursement required for \"all necessary expenditures or losses incurred by the employee within the employee's scope of employment and directly related to services performed for the employer.\" \"Necessary expenditures\" = reasonable expenses required in discharging duties that inure to the primary benefit of the employer. Submission required with documentation within 30 days (extendable in writing). Capped at policy specs if the employer has an established written policy, but the employer cannot adopt a \"no reimbursement\" or \"de minimis\" policy as a workaround. Enforced as a wage claim under the Illinois Wage Payment and Collection Act. Massachusetts (454 CMR 27.04), Montana (§ 39-2-701), New Hampshire (RSA 275:57 with $1,000 per-violation civil penalty), North Dakota (§ 34-02-01), and DC (private-employer tools regulation) round out the statutory tier.",
      "Everywhere else, the demand leans on three federal levers. (a) The FLSA \"kick-back\" rule (29 C.F.R. § 531.35) bars employer-imposed costs that drop the effective wage below the federal minimum wage in any workweek. (b) The IRS accountable-plan framework (Treas. Reg. § 1.62-2; IRS Pub. 463) governs the tax treatment: business connection + substantiation (receipts within ~60 days) + return of excess (~120 days) = tax-free reimbursement; failure on any prong = nonaccountable plan, with the reimbursement added to W-2 wages and taxed. (c) The employer's own written reimbursement policy, if any, is an enforceable contract term in most states.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Lab. Code § 2802 — mandatory reimbursement of all necessary expenses + interest under § 2802(b) + mandatory attorney's fees under § 2802(c). Cochran v. Schwan's (2014): reasonable percentage of personal phone bill for work calls, even on unlimited plans. Strongest statute in the country.",
      },
      {
        state: "Illinois",
        note: "820 ILCS 115/9.5 (eff. 2019). Required for \"necessary expenditures or losses\" within scope of employment that inure to the primary benefit of the employer. 30-day submission window. Enforced under Illinois Wage Payment Act.",
      },
      {
        state: "Massachusetts",
        note: "454 CMR 27.04. Required for tools/materials/supplies + uniforms; enforced under Wage Act with mandatory treble damages + attorney's fees.",
      },
      {
        state: "Montana",
        note: "Mont. Code Ann. § 39-2-701. Near-identical wording to CA § 2802(a) but no built-in attorney-fee shifter.",
      },
      {
        state: "New Hampshire",
        note: "RSA 275:57. Reimbursement within 30 days of proof of payment. Willful violation: civil penalty up to $1,000 per violation plus interest. Narrowing language: \"at the request of the employer.\"",
      },
      {
        state: "North Dakota",
        note: "N.D. Cent. Code § 34-02-01. General indemnification statute mirroring CA § 2802 conceptually. Amended in 2015 by SB 2285.",
      },
      {
        state: "District of Columbia",
        note: "Regulation requires private employers to pay for tools required of the employee in the performance of the business of the employer. Narrower than CA — tools rule, not general expense statute.",
      },
      {
        state: "All other states (federal framing)",
        note: "FLSA \"kick-back\" rule (29 C.F.R. § 531.35) bars costs that drop wages below minimum; IRS accountable-plan framework (Treas. Reg. § 1.62-2; IRS Pub. 463); employer's written policy enforceable as contract.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores the demand, file a wage claim with your state Department of Labor (free, often resolves without a lawyer). California is the highest-leverage jurisdiction — § 2802(c)'s mandatory attorney's fees make individual claims economically viable on contingency, and many consumer-protection / employment plaintiff's bars take § 2802 cases routinely. New Hampshire's $1,000 per-violation civil penalty is the second-strongest statutory damages provision. For non-statutory states, the path narrows to FLSA kick-back claims (if wages dropped below minimum) and breach-of-contract enforcement of the written employer policy. The IRS accountable-plan angle is worth raising even outside the seven statutory states — if your employer added reimbursement to your W-2 because they ran a non-accountable plan, you can demand they switch to accountable and gross you up for the prior tax cost.",
    relatedSlugs: [
      "pto-vacation-payout-demand",
      "billing-error-dispute",
      "debt-validation-request",
      "credit-card-fee-waiver",
      "credit-report-dispute",
      "goodwill-late-payment-removal",
    ],
    faqs: [
      {
        question: "My state isn't on the list. Am I out of luck?",
        answer:
          "Not entirely. Check your employee handbook — if it promises reimbursement, that's a contract. Check whether the expense pushed you under minimum wage that week (FLSA kick-back claim under 29 C.F.R. § 531.35). Check whether you were reimbursed but through a nonaccountable plan that taxed the money as wages — you might be owed the tax difference. And nothing stops you from writing the letter anyway; most companies pay valid expense claims without forcing a fight.",
      },
      {
        question: "The company reimbursed me but added the money to my W-2 as wages. Is that legal?",
        answer:
          "Probably technically legal, but it means they're running a \"nonaccountable plan\" under IRS rules. You ended up paying income tax, Social Security, and Medicare on what should have been a tax-free reimbursement. Demand they switch to an accountable plan going forward (receipts within 60 days, return of excess within 120 days, business-purpose substantiation) and gross you up for the prior tax cost.",
      },
      {
        question: "They're saying my receipts are too old. Do I have a deadline?",
        answer:
          "Depends on the state. Illinois § 9.5 has a built-in 30-day submission window (extendable by employer policy). California § 2802 has no statutory submission deadline, but the general statute of limitations on a § 2802 claim is 3 years (some plaintiffs add a 4th year via the Unfair Competition Law). New Hampshire requires reimbursement within 30 days of you presenting proof.",
      },
      {
        question: "Do I have to use my personal cell phone for work calls? And if I do, what do I get?",
        answer:
          "In California, if your job requires you to use your personal phone, your employer owes you a \"reasonable percentage\" of the bill under Cochran v. Schwan's — even on an unlimited plan, even if work calls cost you zero incremental dollars. Courts haven't fixed a number; common settlements land at 20%–50% of the monthly bill depending on usage. Outside CA, this is much harder unless you're in IL/MT and can show the use was necessary and benefited the employer.",
      },
      {
        question: "What about home internet, electricity, and a desk for remote work?",
        answer:
          "California and Illinois are the strongest jurisdictions for work-from-home cost claims, and DOL/agency guidance in both states has explicitly applied the statutes to remote work expenses. Montana also fits. The reasonable approach: claim a percentage allocable to work use, not the whole bill. Keep receipts and any employer communication that ordered you to work remotely.",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
