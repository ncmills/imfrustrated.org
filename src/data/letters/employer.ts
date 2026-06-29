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
  {
    slug: "earned-sick-leave-payout-or-use",
    category: "employer",
    title: "Right to Use Paid Sick Leave Letter to Employer (Free Template + State Tiers)",
    metaDescription:
      "Employer denying or punishing you for using accrued paid sick leave? Free letter citing your state's law — CA Lab. Code § 246, NY Labor Law § 196-b, WA, CO, NJ, AZ, MA — plus the anti-retaliation rule.",
    lede:
      "There is no federal paid-sick-leave law — this is decided state by state. If you live in a state with a paid-sick-leave statute, you have a legal right to USE your accrued sick time and to not be punished for it. This letter cites your state's statute (or your employer's own policy) and puts the demand in writing. Honest caveat built in: unlike vacation, sick leave generally does NOT have to be paid out when you leave.",
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

  Re: Demand to Use Accrued Paid Sick Leave / Notice of Protected Sick-Leave Rights

  To Human Resources:

  I am writing about my accrued paid sick leave. [Choose the situation that applies and strike the others:]
    • I requested to use accrued paid sick leave on [date(s)] and the request was denied or discouraged.
    • I used accrued paid sick leave on [date(s)] and have since been [disciplined / written up / docked points under an attendance policy / threatened with termination / demoted / had hours cut].
    • I am giving advance notice that I intend to use accrued paid sick leave for [date(s) / the period of] [a foreseeable medical appointment / treatment / a family member's care], as the law and/or company policy permits.

  Relevant facts:
    • Date of hire: [Date]
    • Average hours worked per week: [Number]
    • Accrued, unused paid sick leave as of [date]: [Number] hours
    • Source of that balance: [pay stub dated (date) / HRIS export / company policy accrual schedule]
    • Reason for use (you are not required to disclose a diagnosis): [my own illness / injury / health condition; preventive care; care for a family member; or a reason protected under my state's statute]

  Legal basis:

  [Pick the tier that applies to your state — strike the others.]

    [TIER A — My state has a paid-sick-leave statute (statutory right to USE + anti-retaliation)]
    Under [Cal. Lab. Code §§ 246, 246.5 / Wash. Rev. Code § 49.46.210 / Colo. Rev. Stat. § 8-13.3-403 & -404 / N.Y. Labor Law § 196-b / N.J.S.A. 34:11D-2 & -3 / Ariz. Rev. Stat. § 23-372 & -373 / Mass. Gen. Laws c. 149 § 148C], I have accrued paid sick leave that I am legally entitled to use for the reasons set out in the statute, including my own or a family member's illness, injury, health condition, or preventive care. The same statute makes it unlawful to deny me the right to use that leave, or to discharge, threaten, demote, discipline, or otherwise retaliate against me for using it [Cal. Lab. Code § 246.5(c) / Wash. Rev. Code § 49.46.210(4) / Colo. Rev. Stat. § 8-13.3-407 / N.Y. Labor Law § 196-b(7) / N.J.S.A. 34:11D-4 / Ariz. Rev. Stat. § 23-364(B) / Mass. Gen. Laws c. 149 § 148C(h)–(i)]. My employer may not count protected sick-leave absences against me under any attendance or "points" policy.

    [TIER B — No state statute, but my employer's written policy promises paid sick leave]
    My state does not have a paid-sick-leave statute, but [Employer]'s written policy [quoted at Section X of the Handbook, attached] grants paid sick leave and sets the terms for using it. That written promise is an enforceable term of my employment, and the company must honor its own policy. Denying me leave the policy grants me, or punishing me for using it, is a breach of that policy and may give rise to a wage claim if the leave functions as promised paid time.

    [OPTIONAL — Federal-contractor employees only]
    If I am employed on a covered federal contract, Executive Order 13706 and 29 C.F.R. Part 13 independently require my employer to provide paid sick leave (accrued at 1 hour per 30 hours worked, up to 56 hours per year), enforceable through the U.S. Department of Labor.

  Demand:

  [Choose what fits your situation:]
    1. Approve my use of [Number] hours of accrued paid sick leave for [date(s)], paid at my regular rate.
    2. Reverse the [discipline / write-up / attendance points / other adverse action] taken against me for using protected sick leave, and confirm in writing that it has been removed from my record.
    3. Confirm in writing my current accrued paid-sick-leave balance and that I will not be retaliated against for using it.

  Please respond within [14] days of receipt of this letter.

  [Optional — only if your EMPLOYER'S POLICY promises a payout of unused sick leave at separation:]
    Note: I understand state law generally does not require unused sick leave to be paid out at separation. I am making this payout request solely because [Employer]'s written policy [Section X, attached] promises payout of accrued, unused sick leave. On that basis I request payment of [Number] hours × $[Rate] = $[Amount].

  If this is not resolved, I intend to pursue:
    • A complaint with the [state labor agency / wage-and-hour division] for denial of sick leave and/or retaliation;
    • Any remedies the statute provides, including reinstatement, back pay, and statutory penalties [where the law provides them];
    • The rebuttable presumption of retaliation that applies where adverse action follows my protected leave [California: within 30 days, Lab. Code § 246.5(c)(2); Arizona / New Jersey: within 90 days, Ariz. Rev. Stat. § 23-364(B) / N.J.S.A. 34:11D-4].

  I would prefer to resolve this directly and continue doing my job. Please confirm in writing.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [pay stub or HRIS export showing accrued sick-leave balance; relevant pages of the employee handbook / sick-leave policy; any write-up or attendance-point notice; written denial of leave if any]`,
    howToUse: [
      "Send by certified mail with return receipt requested AND email a copy to HR. The certified-mail receipt proves delivery — and in states with a rebuttable presumption of retaliation (CA within 30 days; AZ and NJ within 90 days), a dated written record of your protected leave is exactly what triggers that presumption if they punish you afterward.",
      "Pull your accrued sick-leave balance from your most recent pay stub or HRIS export and attach it. Most paid-sick-leave statutes (e.g., Cal. Lab. Code § 246, N.Y. Labor Law § 196-b) require employers to show your available sick-leave balance on or with your wage statement, so the number is one they generated themselves.",
      "Pick your tier correctly. TIER A = your state has a paid-sick-leave statute (CA, WA, CO, NY, NJ, AZ, MA, plus CT, OR, RI, VT, MD, MI, MN, NM, IL, DC and others) — you have a statutory right to USE the leave and statutory protection from retaliation. TIER B = no state statute (most states, including TX, FL, GA, most of the South and Mountain West) — your only lever is your employer's own written policy, enforced as a contract.",
      "Do not disclose your diagnosis. Every paid-sick-leave statute lets you take protected leave for a covered reason without handing over medical details; over-explaining only gives an employer material to second-guess. State the category ('my own health condition,' 'to care for a family member') and stop there.",
      "Biggest mistake to avoid: demanding a PAYOUT of unused sick leave as if it were vacation. It usually is not. Unlike accrued vacation (which is wages in CA, CO, IL, MA and others), accrued sick leave generally does NOT have to be paid out at separation — CA § 246(g), WA WAC 296-128-690, CO § 8-13.3-403(5), NY § 196-b(6), AZ § 23-372(F), MA § 148C(d)(7) all say so. Only demand a payout if your employer's own written policy promises one; otherwise lead with the right to USE the leave and the anti-retaliation claim, which is where your real leverage is.",
    ],
    legalContext: [
      "Start with the honest baseline: there is no general federal paid-sick-leave law. The U.S. Department of Labor states plainly that \"there are no federal legal requirements for paid sick leave.\" The federal Family and Medical Leave Act (FMLA), 29 U.S.C. § 2601 et seq., provides only UNPAID, job-protected leave — up to 12 workweeks for eligible employees of covered employers (29 U.S.C. § 2612), and § 2612(c) confirms that leave \"may consist of unpaid leave.\" The single narrow federal exception is for employees working on covered federal contracts: Executive Order 13706 and its rule at 29 C.F.R. Part 13 require those contractors to provide paid sick leave (1 hour per 30 hours worked, up to 56 hours a year). For everyone else, paid sick leave is a creature of STATE and LOCAL law — and roughly 18 states plus the District of Columbia have such laws, meaning the majority of states have no mandate at all.",
      "In a state with a paid-sick-leave statute (TIER A), two rights matter and they are distinct. First, the right to USE accrued leave for a covered reason. California's Healthy Workplaces, Healthy Families Act is the cleanest model: employees accrue paid sick days \"at the rate of not less than one hour per every 30 hours worked\" (Cal. Lab. Code § 246(b)(1)), and § 246.5(a) lists the covered uses — diagnosis, care, or treatment of an existing health condition or preventive care for the employee or a family member, plus leave for victims of domestic violence, sexual assault, or stalking. Second, and just as important, the right to be FREE FROM RETALIATION. Section 246.5(c)(1) provides that an employer \"shall not deny an employee the right to use accrued sick days, discharge, threaten to discharge, demote, suspend, or in any manner discriminate against an employee for using accrued sick days,\" and § 246.5(c)(2) creates a rebuttable presumption of unlawful retaliation if the employer takes adverse action within 30 days. A practical consequence: an employer cannot lawfully count protected sick-leave absences against you under a no-fault attendance or \"points\" policy. Note: California raised its minimums effective January 1, 2024 (SB 616) — annual use up to 40 hours/5 days, accrual cap 80 hours/10 days.",
      "Other TIER A states reach the same place with their own numbers and their own anti-retaliation hooks. Washington (RCW 49.46.210): accrue 1 hour per 40 hours worked, no annual cap on use, and § 49.46.210(4) bars discrimination or retaliation \"for his or her exercise of any rights under this chapter including the use of paid sick leave.\" Colorado's Healthy Families and Workplaces Act (C.R.S. § 8-13.3-403): 1 hour per 30, up to 48 hours/year, with anti-retaliation at § 8-13.3-407 that also bars counting protected leave as a disciplinary absence. New York (Labor Law § 196-b): 1 hour per 30 with tiered annual caps by employer size — 56 paid hours for employers of 100+, 40 paid hours for 5–99 and for the largest small employers, 40 UNPAID hours for the smallest low-revenue employers — and anti-retaliation at § 196-b(7). New Jersey (N.J.S.A. 34:11D-2 to -4): 1 hour per 30, up to 40 hours/year, with a rebuttable presumption of retaliation for adverse action within 90 days (§ 34:11D-4). Arizona (A.R.S. § 23-372 to -373): 1 hour per 30, 40 hours/year for employers of 15+ and 24 hours for smaller ones, with a 90-day rebuttable presumption of retaliation enforced by the Industrial Commission (§ 23-364(B)). Massachusetts (M.G.L. c. 149 § 148C): 1 hour per 30, up to 40 hours/year (paid for employers of 11+, unpaid for smaller), with interference and retaliation barred at § 148C(h)–(i).",
      "The payout question is where people most often misread their rights — so be precise. Accrued VACATION is treated as earned wages in several states and must be paid out at separation; accrued SICK LEAVE generally is NOT. Every TIER A statute above says so expressly: Cal. Lab. Code § 246(g)(1) (\"An employer is not required to provide compensation... for accrued, unused paid sick days upon termination, resignation, retirement, or other separation\"); Washington WAC 296-128-690; Colorado C.R.S. § 8-13.3-403(5)(a); New York Labor Law § 196-b(6); Arizona A.R.S. § 23-372(F); Massachusetts M.G.L. c. 149 § 148C(d)(7). What these statutes give you instead is reinstatement: if you are rehired within a set window (one year in CA and WA, six months in CO, nine months in AZ), your previously accrued, unused sick leave is restored. So a payout demand only works if your employer's OWN written policy promises one — which some do, especially where vacation and sick time are merged into a single \"PTO\" bucket (in that case the whole bucket is typically treated as vacation and must be paid out in vacation-is-wages states). TIER B states (no statute — TX, FL, GA, and most others) impose nothing; your only enforceable lever is the employer's written policy as a contract.",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Cal. Lab. Code §§ 246, 246.5. Accrue 1 hr/30 hrs; use up to 40 hrs/5 days, accrual cap 80 hrs/10 days (SB 616, eff. 2024). § 246.5(c) bars retaliation for using sick days, with a rebuttable presumption if adverse action falls within 30 days. § 246(g): no payout at separation; reinstated if rehired within 1 year.",
      },
      {
        state: "Washington (Tier A)",
        note: "RCW 49.46.210. Accrue 1 hr/40 hrs, no annual use cap; carryover capped at 40 hrs. § 49.46.210(4) bars discrimination/retaliation for using paid sick leave. WAC 296-128-690: no payout at separation; reinstated (≤40 hrs) if rehired within 12 months.",
      },
      {
        state: "Colorado (Tier A)",
        note: "C.R.S. § 8-13.3-403 & -404 (Healthy Families and Workplaces Act). Accrue 1 hr/30 hrs, up to 48 hrs/yr. § 8-13.3-407: no retaliation and no counting protected leave as a disciplinary absence. § 8-13.3-403(5): no payout at separation; 6-month rehire reinstatement.",
      },
      {
        state: "New York (Tier A)",
        note: "N.Y. Labor Law § 196-b. Accrue 1 hr/30 hrs; tiered annual caps — 56 paid hrs (100+ employees), 40 paid (5–99), 40 paid or unpaid for the smallest employers by revenue. § 196-b(7) anti-retaliation; § 196-b(6): no payout at separation.",
      },
      {
        state: "New Jersey (Tier A)",
        note: "N.J.S.A. 34:11D-2 to -4 (Earned Sick Leave Law). Accrue 1 hr/30 hrs, up to 40 hrs/benefit year. § 34:11D-4: no retaliation, rebuttable presumption if adverse action within 90 days. Payout at separation is optional (employer may offer; not required).",
      },
      {
        state: "Arizona (Tier A)",
        note: "A.R.S. § 23-372 & -373 (Fair Wages and Healthy Families Act). Accrue 1 hr/30 hrs; up to 40 hrs/yr (15+ employees) or 24 hrs/yr (fewer). § 23-364(B): no retaliation, 90-day rebuttable presumption (rebut by clear and convincing evidence), Industrial Commission enforcement. § 23-372(F): no payout; 9-month rehire reinstatement.",
      },
      {
        state: "Massachusetts (Tier A)",
        note: "M.G.L. c. 149 § 148C (Earned Sick Time Law). Accrue 1 hr/30 hrs, up to 40 hrs/yr (paid for 11+ employees, unpaid for smaller). § 148C(h)–(i): interference and retaliation barred, including using sick-time use as a negative factor in any employment action. § 148C(d)(7): no payout at separation.",
      },
      {
        state: "Other Tier A states (statute exists)",
        note: "Connecticut, Oregon, Rhode Island, Vermont, Maryland, Michigan, Minnesota, New Mexico, Illinois, plus D.C. and many cities/counties also mandate paid sick (or paid leave) with anti-retaliation provisions. Same playbook: cite your statute's accrual/use and anti-retaliation sections; do not assume payout at separation.",
      },
      {
        state: "All other states (Tier B — no statute)",
        note: "Texas, Florida, Georgia, and most others have no state paid-sick-leave law. There is no federal mandate either (FMLA is unpaid; 29 U.S.C. § 2612). Your only lever is your employer's written policy, enforceable as a contract — and EO 13706 / 29 C.F.R. Part 13 if you work on a covered federal contract.",
      },
    ],
    ifThisDoesntWork:
      "If the employer denies your leave or punishes you for using it, file a complaint with your state's labor agency or wage-and-hour division (free, and most paid-sick-leave statutes are enforced administratively — e.g., California's Labor Commissioner, Washington L&I, Colorado CDLE, NY DOL, NJ DOL, Arizona's Industrial Commission, Massachusetts Attorney General's Fair Labor Division). These agencies can order reinstatement, back pay, and statutory penalties, and several statutes carry attorney's-fee provisions that make a private suit economical, especially a retaliation claim. Retaliation is the strongest card: where you used protected leave and were disciplined or fired shortly after, the rebuttable presumption (CA within 30 days; AZ and NJ within 90 days) shifts the burden to the employer. Move promptly — administrative complaint windows are often short (frequently within 1–3 years, and some are far shorter for retaliation), so check your state agency's deadline before you wait. In a no-statute (Tier B) state, your path is a breach-of-policy or wage claim built on the employer's own handbook, which is weaker but real where the policy clearly grants the leave.",
    relatedSlugs: [
      "pto-vacation-payout-demand",
      "final-paycheck-demand",
      "meal-rest-break-premium-demand",
      "wage-statement-violation-demand",
      "personnel-file-access-request",
      "expense-reimbursement-demand",
    ],
    faqs: [
      {
        question: "Is there a federal law that gives me paid sick leave?",
        answer:
          "No. The U.S. Department of Labor confirms there are no federal requirements for paid sick leave. The FMLA (29 U.S.C. § 2612) only gives eligible employees up to 12 weeks of UNPAID, job-protected leave. The lone federal exception is for employees working on covered federal contracts under Executive Order 13706 (29 C.F.R. Part 13). Otherwise paid sick leave depends entirely on your state or city.",
      },
      {
        question: "My employer wrote me up under an attendance-points policy for using sick days. Is that allowed?",
        answer:
          "In a state with a paid-sick-leave statute, generally no. Statutes like Cal. Lab. Code § 246.5(c), Colo. Rev. Stat. § 8-13.3-407, and Mass. Gen. Laws c. 149 § 148C(h) bar employers from using protected sick-leave absences as a negative factor in discipline — that includes no-fault \"points\" systems. If the write-up followed protected leave, the rebuttable-presumption rule (30 days in CA; 90 days in AZ and NJ) may shift the burden to your employer to justify it.",
      },
      {
        question: "Do I have to tell my boss what's wrong with me to use sick leave?",
        answer:
          "No. Paid-sick-leave statutes let you take leave for a covered reason without disclosing a diagnosis. You can state the category — your own health condition, preventive care, or caring for a family member — and your employer generally cannot require medical documentation for short absences (many statutes only allow it after three or more consecutive days). Keep your explanation brief.",
      },
      {
        question: "When I quit or get laid off, do they have to pay out my unused sick leave?",
        answer:
          "Usually not. Unlike vacation (which is earned wages in CA, CO, IL, MA and other states), accrued sick leave generally does NOT have to be paid out at separation — see Cal. Lab. Code § 246(g), N.Y. Labor Law § 196-b(6), Ariz. Rev. Stat. § 23-372(F), and the equivalents in WA, CO, and MA. The exception is if your employer's own written policy promises a payout, or if sick and vacation are combined into one \"PTO\" bucket that gets treated as vacation. Many statutes do require reinstatement of your balance if you're rehired within a set window.",
      },
      {
        question: "My state isn't one of the ones listed. Am I out of luck?",
        answer:
          "You have no statutory right, but check two things. First, your employee handbook — if it grants paid sick leave, that's an enforceable contract term and the company has to honor it. Second, whether you work on a federal contract, which triggers EO 13706. About 18 states plus D.C. (and many cities) have paid-sick-leave laws; if you're not in one, the employer's own policy is your only real lever.",
      },
    ],
    keywords: [
      "right to use sick leave",
      "employer denied my sick leave",
      "fired for using sick days",
      "paid sick leave law by state",
      "do they have to pay out sick leave when you quit",
      "sick leave retaliation",
      "attendance points for sick days legal",
      "is there a federal paid sick leave law",
      "how much sick leave am I owed",
      "use it or lose it sick leave",
    ],
    publishedAt: "2026-06-26",
  },
  {
      slug: "final-paycheck-demand",
      category: "employer",
      title: "Final Paycheck Demand Letter After Quitting or Being Fired (Free Template + State Deadlines)",
      metaDescription:
        "Employer holding your last paycheck? Free demand letter citing your state's final-pay deadline + waiting-time penalties — Cal. Lab. Code §§ 201-203, plus TX, NY, IL, MA, CO, OR, WA, MI.",
      lede:
        "Your job ended and the final paycheck never came — or came late, or came short. Most states set a hard deadline for that last check, and the deadline is often different depending on whether you quit or were fired. This letter cites your state's exact deadline and the penalty that stacks up when the employer blows it.",
      body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Payroll]
  [Employer Address]

  cc: [Direct supervisor; payroll manager]

  Sent via certified mail, return receipt requested
  (Copy also emailed to [HR / payroll contact])

  Re: Demand for Final Wages — Separation Date [Date] — $[Total Amount]

  To Human Resources:

  I am writing to demand payment of all final wages owed to me following the end of my employment with [Employer] on [Date]. As of the date of this letter, those wages remain [unpaid / partially paid / paid late].

  Separation details:
    • Last day worked: [Date]
    • Separation type: [I was discharged/terminated/laid off  /  I voluntarily quit  /  I quit after giving [72 hours / 48 hours / __ days] advance notice]
    • Final rate of pay: $[Hourly rate, or salary ÷ 2,080 for exempt]
    • Regular payday schedule: [e.g., bi-weekly, Fridays]

  Final wages owed (itemize what applies):
    • Unpaid regular wages for [pay period / dates]: [Hours] × $[Rate] = $[Amount]
    • Unpaid overtime: [Hours] × $[1.5× Rate] = $[Amount]
    • Accrued, unused vacation / PTO payable at separation (if owed in your state): [Hours] × $[Rate] = $[Amount]
    • Earned but unpaid commissions / bonuses: $[Amount]
    • TOTAL OWED: **$[Total]**

  Legal basis — final wages were due by a statutory deadline:

  [Pick the tier and the discharge-vs-quit line that match your state and how you left. Strike the rest.]

    [TIER A — Final wages due immediately / within hours or a day of an involuntary termination]
    Under [Cal. Lab. Code §§ 201-202 / Colo. Rev. Stat. § 8-4-109(1) / Mass. G.L. c. 149 § 148 / Or. Rev. Stat. § 652.140], my final wages were due [immediately upon discharge / on the day of my discharge / by the end of the first business day after my discharge] because I was discharged — or, because I quit [with the required advance notice], [at the time of quitting / immediately / within 72 hours]. That deadline has passed.

    [TIER B — Final wages due no later than the next regular payday, with statutory penalties for late pay]
    Under [820 ILCS 115/5 / RCW 49.48.010 / N.Y. Labor Law § 191(3) / Mich. Comp. Laws § 408.475], my final wages were due no later than the next regularly scheduled payday for the pay period in which my employment ended. That payday was [Date], and it has passed.

    [TIER C — Statutory deadline tied to separation type]
    Under Tex. Labor Code § 61.014, an employer must pay a discharged employee in full not later than the sixth day after discharge, and an employee who quits not later than the next regularly scheduled payday. That deadline ([Date]) has passed.

    [TIER D — No state timing statute; next-payday default]
    My state ([Florida / Alabama / Georgia / Mississippi / other]) does not set a special final-pay deadline, so my final wages were due on the next regularly scheduled payday under the employer's normal pay schedule and the federal Fair Labor Standards Act floor. That payday ([Date]) has passed.

  Penalty exposure for continued non-payment:

    [Strike the lines that don't apply to your state.]
    • California: Under Cal. Lab. Code § 203, an employer that willfully fails to pay final wages on time owes a waiting-time penalty — my wages continue at my regular daily rate, for every day the payment is late, up to a maximum of 30 days.
    • Oregon: Under Or. Rev. Stat. § 652.150, penalty wages continue at 8 hours' pay per day, up to 30 days.
    • Massachusetts: Under M.G.L. c. 149 § 150, a prevailing employee is awarded mandatory treble (triple) damages plus costs and reasonable attorney's fees — and late payment, even before suit, triggers trebling (Reuter v. City of Methuen, 489 Mass. 465 (2022)).
    • Colorado: Under C.R.S. § 8-4-109(3), if you do not pay within 14 days of this written demand, the penalty is the greater of two times the unpaid wages or $1,000 (three times the unpaid wages or $3,000 for a willful violation).
    • Illinois: Under 820 ILCS 115/14, I am entitled to the unpaid amount plus damages of 5% per month it remains unpaid, plus costs and reasonable attorney's fees.
    • New York: Under N.Y. Labor Law § 198, I am entitled to liquidated damages equal to 100% of the wages due, plus reasonable attorney's fees.
    • Washington: Under RCW 49.52.070, willful withholding makes the employer liable for twice the amount unlawfully withheld, plus costs and attorney's fees.
    • Texas: Under Tex. Labor Code § 61.053, the Texas Workforce Commission may assess a bad-faith penalty against the employer.

  Demand:

  Within [7] days of receipt of this letter (or by [Date]), please remit the full amount of $[Total] in final wages by [check mailed to the address above / direct deposit to the account on file]. If you believe any portion is not owed, identify the specific amount in dispute and pay the undisputed balance now.

  If full payment is not made, I intend to pursue:
    • A wage claim with the [state labor agency — e.g., California DLSE / Texas Workforce Commission / NY DOL / Illinois DOL] (free, no lawyer required);
    • A private wage action for the unpaid wages plus all statutory penalties, liquidated/multiplied damages, interest, costs, and attorney's fees available under the statutes cited above.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [final pay stub or the last pay stub showing rate/hours; offer letter or employment agreement; record of separation date (termination letter / resignation email); record of hours worked; PTO balance from most recent pay stub if claiming vacation]`,
      howToUse: [
        "Send by certified mail with return receipt requested AND email a copy to HR/payroll. The certified-mail receipt proves delivery and the date — which matters because several states (Colorado especially) tie the penalty clock to the date of a written demand.",
        "Pick your tier by how you left, not just by your state. Deadlines split on quit-vs-fired in most states: in California a fired worker is owed immediately but a no-notice quit gets 72 hours; in Texas a fired worker gets 6 days but a quit gets the next payday; in Oregon a fired worker gets the next business day but a 48-hour-notice quit is owed on the last day. State the right line.",
        "Attach the pay stub. Your final or most-recent pay stub establishes your rate and hours from the employer's own records — it is the single strongest exhibit and pre-empts a 'we dispute the amount' response.",
        "Highest-leverage move: name the penalty, not just the wage. The unpaid wage might be a few hundred dollars, but California's § 203 waiting-time penalty (up to 30 days of pay), Massachusetts' mandatory treble damages, or New York's 100% liquidated damages are what make an employer pay fast and make a lawyer take the case. Quantify the penalty in your letter.",
        "Top mistake to avoid: don't sit on it, and don't let a 'release' trap you. Most state wage claims must be filed within 2-3 years, and the penalty clock can stop the day you file suit. Separately, never sign a severance or 'final pay' release that waives wage claims to get money you are already legally owed — earned wages generally cannot be conditioned on a release.",
      ],
      legalContext: [
        "Final-paycheck rules are almost entirely a matter of state law. There is no federal statute setting a deadline for a last paycheck — the Fair Labor Standards Act (29 U.S.C. §§ 206-207) requires that all earned wages be paid, and the U.S. Department of Labor's position is that, absent a state rule, final wages are simply due by the next regular payday; specific timing and penalties are left to the states (dol.gov/general/topic/wages/lastpaycheck). So the analysis runs entirely through your state code, and the states fall into four practical tiers based on (1) how fast the check is due and (2) whether the deadline changes if you were fired versus quit.",
        "The doctrinal anchor is California, which has the fastest deadline and the cleanest penalty in the country. Cal. Lab. Code § 201 provides that 'If an employer discharges an employee, the wages earned and unpaid at the time of discharge are due and payable immediately.' Cal. Lab. Code § 202 covers quits: wages 'shall become due and payable not later than 72 hours thereafter, unless the employee has given 72 hours previous notice of his or her intention to quit, in which case the employee is entitled to his or her wages at the time of quitting.' The teeth come from Cal. Lab. Code § 203: when an employer 'willfully fails to pay' final wages on time, 'the wages of the employee shall continue as a penalty from the due date thereof at the same rate until paid or until an action therefor is commenced; but the wages shall not continue for more than 30 days.' That is a full day's pay for every day the check is late, capped at 30 days — often dwarfing the underlying wage. Cal. Lab. Code § 218.5 adds attorney's fees to the prevailing party in a wage action (fees run against the employee only if the court finds the claim was brought in bad faith).",
        "Tier A — fast deadline on an involuntary termination, with a penalty. California (immediate on discharge / 72 hours on a no-notice quit; § 203 waiting-time penalty up to 30 days). Colorado, C.R.S. § 8-4-109(1): wages 'due and payable immediately' on discharge (with a narrow 6-hour/24-hour grace if the payroll unit is offsite or not operating), and on the next regular payday if the employee quits; § 8-4-109(3) gives the employer 14 days after a written demand to cure, failing which the penalty is the greater of two times the unpaid wages or $1,000 (three times or $3,000 if willful — figures set by SB 22-161, effective January 1, 2023). Massachusetts, M.G.L. c. 149 § 148: a discharged employee 'shall be paid in full on the day of his discharge,' and one who quits is paid on the next regular payday; § 150 makes treble damages mandatory and Reuter v. City of Methuen, 489 Mass. 465 (2022), held that late-but-pre-suit payment still triggers trebling of the late wages. Oregon, ORS 652.140: final wages due by the end of the first business day after a discharge, immediately on the last day for an employee who gives at least 48 hours' notice, and within five business days (or next payday, whichever is first) for a no-notice quit; ORS 652.150 adds penalty wages at 8 hours per day for up to 30 days.",
        "Tier B — next regular payday for both quit and fired, but with real penalties for late pay: Illinois (820 ILCS 115/5 — 'in no case later than the next regularly scheduled payday'; 820 ILCS 115/14 adds 5% per month plus attorney's fees, the 5% rate set by P.A. 99-0815 effective 2017); Washington (RCW 49.48.010 — wages paid 'at the end of the established pay period'; RCW 49.52.070 — double damages plus fees for willful withholding); New York (N.Y. Labor Law § 191(3) — 'not later than the regular pay day for the pay period during which the termination occurred'; § 198 — 100% liquidated damages plus attorney's fees); Michigan (M.C.L. § 408.475 — 'on the regularly scheduled payday for the period in which' the termination occurs, current text per 2015 PA 24). Tier C is a hard statutory deadline keyed to separation type but with a modest cap: Texas, Tex. Labor Code § 61.014 — a discharged employee paid 'not later than the sixth day after the date the employee is discharged' and a quit by the next regular payday, enforced by the Texas Workforce Commission with a bad-faith penalty under § 61.053 capped at the lesser of the wages owed or $1,000. Tier D is the default: a handful of states (Florida, Alabama, Georgia, Mississippi) have no final-pay timing statute at all, so the FLSA next-payday floor and the employer's own policy or contract govern.",
      ],
      stateNotes: [
        {
          state: "California (Tier A)",
          note: "Cal. Lab. Code §§ 201 (fired: immediately), 202 (quit: 72 hrs, or at quitting if 72 hrs notice given), 203 (waiting-time penalty: a day's wages per day late, max 30 days, for willful nonpayment). § 218.5 attorney's fees.",
        },
        {
          state: "Colorado (Tier A)",
          note: "C.R.S. § 8-4-109. Fired: immediately (narrow 6/24-hr grace). Quit: next regular payday. § 8-4-109(3): pay within 14 days of written demand or owe greater of 2× unpaid wages or $1,000 (3× or $3,000 if willful) — figures per SB 22-161, eff. 1/1/2023.",
        },
        {
          state: "Massachusetts (Tier A)",
          note: "M.G.L. c. 149 § 148. Fired: paid in full on the day of discharge. Quit: next regular payday. § 150: mandatory treble damages + attorney's fees; late-but-pre-suit pay still trebles (Reuter v. City of Methuen, 489 Mass. 465 (2022)).",
        },
        {
          state: "Oregon (Tier A)",
          note: "ORS 652.140. Fired: end of first business day after discharge. Quit w/ 48 hrs notice: last working day. Quit w/o notice: within 5 business days or next payday, whichever first. ORS 652.150: penalty wages 8 hrs/day, up to 30 days.",
        },
        {
          state: "Illinois (Tier B)",
          note: "820 ILCS 115/5: final compensation in full at separation if possible, in no case later than the next regular payday. 820 ILCS 115/14: 5% per month of the underpayment + costs + attorney's fees.",
        },
        {
          state: "New York (Tier B)",
          note: "N.Y. Labor Law § 191(3): final wages due no later than the regular payday for the pay period in which termination occurred (same for quit or fired). § 198: 100% liquidated damages + reasonable attorney's fees.",
        },
        {
          state: "Washington (Tier B)",
          note: "RCW 49.48.010: final wages paid at the end of the established pay period (next regular payday), quit or fired. RCW 49.52.070: willful withholding = twice the amount withheld + costs + attorney's fees.",
        },
        {
          state: "Michigan (Tier B)",
          note: "M.C.L. § 408.475 (Payment of Wages and Fringe Benefits Act, as amended by 2015 PA 24): wages due on the regularly scheduled payday for the period in which termination occurs. Hand-harvest crop workers: within 1 working day.",
        },
        {
          state: "Texas (Tier C)",
          note: "Tex. Labor Code § 61.014: fired = paid in full by the 6th day after discharge; quit = next regular payday. Enforced by the Texas Workforce Commission; § 61.053 bad-faith penalty capped at the lesser of wages owed or $1,000.",
        },
        {
          state: "All other states (Tier D — default)",
          note: "Florida, Alabama, Georgia, and Mississippi set no final-pay deadline by statute. Final wages are due by the next regular payday under the employer's normal schedule and the FLSA floor; the employer's written policy or contract is enforceable. Many other states also default to next regular payday — check your state labor agency.",
        },
      ],
      ifThisDoesntWork:
        "If the employer ignores the demand, file a wage claim with your state labor agency — it is free and usually requires no lawyer (California DLSE/Labor Commissioner, Texas Workforce Commission under the Texas Payday Law, NY DOL, Illinois DOL, Colorado CDLE, Oregon BOLI, Washington L&I). The agency process recovers the wage and, in many states, the statutory penalty. For larger amounts, the fee-shifting and damage-multiplier statutes make a private lawyer economical even on small wages: California § 203 waiting-time penalties (up to 30 days) plus § 218.5 fees, Massachusetts mandatory treble damages plus fees under c. 149 § 150, New York's 100% liquidated damages plus fees under § 198, Illinois' 5%-per-month plus fees, and Washington's double damages plus fees all turn a few-hundred-dollar wage into a case a contingency lawyer will take. Watch the clock: most state wage-claim and wage-suit limitations periods run 2-3 years (California is 3 years for the wage), and in California the § 203 penalty stops accruing the day you file suit — so don't wait.",
      relatedSlugs: [
        "pto-vacation-payout-demand",
        "unpaid-overtime-demand",
        "unpaid-commission-demand",
        "unpaid-minimum-wage-demand",
        "expense-reimbursement-demand",
        "wage-statement-violation-demand",
      ],
      faqs: [
        {
          question: "Does it matter whether I quit or got fired?",
          answer:
            "In most states, yes — the deadline is often shorter when you're fired. California: immediate on discharge, but 72 hours if you quit without notice. Texas: 6 days if fired, next payday if you quit. Oregon: next business day if fired, but immediately on your last day if you gave 48 hours' notice. Match the line in the letter to how you actually left.",
        },
        {
          question: "Can my employer hold my last check until I return my laptop or badge?",
          answer:
            "Generally no. Earned wages are owed regardless of returned property, and in most states you cannot deduct the value of unreturned equipment from final pay without specific written authorization (and even then, never below minimum wage). The employer's remedy for unreturned property is to ask for it back or sue you separately — not to sit on wages you earned.",
        },
        {
          question: "They paid me, but it was late. Do I still have a claim?",
          answer:
            "Often yes. In California the § 203 waiting-time penalty runs for each day the check was late (up to 30 days) even after you're eventually paid. In Massachusetts, Reuter v. City of Methuen (2022) held that paying late — even before you sue — still triggers mandatory treble damages on the late wages. Late is a violation, not a cure.",
        },
        {
          question: "Is my unused vacation/PTO part of my final paycheck?",
          answer:
            "It depends on the state, and it's a separate question from the timing rule. In California, Colorado, Illinois, and several others, vested vacation is treated as earned wages and must be paid out at separation; in Texas, Florida, and others it's only owed if the employer's policy or contract promises it. Use the PTO/vacation payout letter for that specific demand, and include the amount here only if your state requires payout.",
        },
        {
          question: "How long do I have to act?",
          answer:
            "Most state wage claims and wage lawsuits must be filed within 2-3 years (California is 3 years for the wage itself). Some penalties also stop accruing once you file — California's § 203 waiting-time penalty stops the day suit is commenced. File the free state agency claim if you want the simplest path; the private suit (with penalties and fees) is the bigger hammer, but don't let the deadline pass.",
        },
      ],
      keywords: [
        "employer won't give me my last paycheck",
        "final paycheck laws by state",
        "how long does an employer have to pay final wages",
        "didn't get my last check after quitting",
        "final paycheck after being fired",
        "waiting time penalty California final pay",
        "employer holding my paycheck for equipment",
        "late final paycheck penalty",
        "demand letter for unpaid final wages",
        "when is my final paycheck due",
      ],
      publishedAt: "2026-06-26",
    },
  {
    slug: "meal-rest-break-premium-demand",
    category: "employer",
    title: "Meal & Rest Break Premium Pay Demand Letter (Cal. Lab. Code § 226.7 + State Tiers)",
    metaDescription:
      "Forced to skip, shorten, or work through meal and rest breaks? Free demand letter for premium pay — California Lab. Code § 226.7 + § 512, plus OR, WA, NV, CO, IL break laws. Honest about the federal gap.",
    lede:
      "Here is the hard truth up front: federal law (the FLSA) does NOT require your employer to give you any meal or rest break at all. Break rights are a STATE matter, and only a minority of states create them. But if you work in California, Oregon, Washington, Nevada, Colorado, or Illinois (among a few others), missed, late, or interrupted breaks can owe you real money — in California, a full extra hour of pay per day. This letter cites the specific statute for your state and demands the premium.",
    body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Payroll]
  [Employer Address]

  cc: [Direct supervisor, payroll]

  Sent via certified mail, return receipt requested
  (Copy also emailed to HR contact)

  Re: Demand for Meal & Rest Period Premium Pay — Pay Periods [Start Date] to [End Date]

  To Human Resources:

  I am writing to demand premium pay (and any related correction to my wage statements) for meal and/or rest periods that were missed, taken late, cut short, or worked through during my employment with [Employer]. State law requires either that I be provided these breaks or that I be paid a premium when I am not.

  Employment details:
    • Position / department: [Title / dept]
    • Status: [Non-exempt / hourly] (premium-pay rules apply to non-exempt employees)
    • Work state: [State where I perform the work]
    • Regular rate of pay: $[Hourly rate, or "regular rate" including nondiscretionary bonuses/commissions]
    • Current / former employee: [Current / Separated on (date)]

  Affected days (attach a fuller log if needed):

  | Date | Shift length | Break missed/late/short/interrupted | Reason (who told me, or what prevented it) |
  |------|--------------|--------------------------------------|--------------------------------------------|
  | [Date] | [Hours] | [No 30-min meal / meal under 30 min / meal started after 5th hour / no 10-min rest / worked through rest] | [Manager directed me to keep working / understaffed / customer line / "clock out but stay"] |
  | [Date] | [Hours] | [Same] | [Same] |
  | [Date] | [Hours] | [Same] | [Same] |

  Premium-pay calculation:
    • Days with a non-compliant MEAL period: [Number] day(s)
    • Days with a non-compliant REST period: [Number] day(s)
    • [California / Nevada / Oregon: one additional hour of pay at my regular rate per day a meal period was non-compliant, and a separate hour per day a rest period was non-compliant — capped at one meal-premium hour and one rest-premium hour per workday.]
    • Total premium owed: [Meal days] × $[regular rate] + [Rest days] × $[regular rate] = **$[Total]**

  Legal basis:

  [Pick the tier that matches your work state — strike the others. If your state is not listed, see the "no state-mandated breaks" note below before sending.]

    [TIER A — CALIFORNIA: full-hour premium per missed meal AND per missed rest]
    Under Cal. Lab. Code § 512(a), a non-exempt employee may not be employed for more than five hours without a 30-minute meal period (a second 30-minute meal period is required after ten hours). Rest periods of net ten minutes per four hours worked (or major fraction) are required by the applicable Industrial Welfare Commission Wage Order. Under Cal. Lab. Code § 226.7(c), if the employer fails to provide a compliant meal or rest (or recovery) period, "the employer shall pay the employee one additional hour of pay at the employee's regular rate of compensation for each workday that the meal or rest or recovery period is not provided." Under Brinker Restaurant Corp. v. Superior Court, 53 Cal. 4th 1004 (2012), the employer must relieve me of all duty and provide a reasonable opportunity to take the break; a break that is impeded, discouraged, or worked through is not "provided." Under Naranjo v. Spectrum Security Services, Inc., 13 Cal. 5th 93 (2022), these premiums are "wages" — they must appear on my itemized wage statements (§ 226) and, on separation, are subject to waiting-time penalties (§ 203).

    [TIER A — NEVADA / OREGON: premium or full pay for non-compliant breaks]
    [NEVADA] Under NRS 608.019, an employer may not employ me for a continuous 8-hour period without a 30-minute meal period, and must authorize a paid 10-minute rest period for each 4 hours (or major fraction) worked. Rest periods are counted as hours worked with no deduction from wages.
    [OREGON] Under OAR 839-020-0050, the employer must provide a 30-minute duty-free meal period for a work period of six to eight hours, and a paid 10-minute rest period for each four-hour segment (or major portion). If I am not relieved of all duty for the full meal period, the employer must pay me for the entire 30 minutes; missed or shortened paid rest time must be compensated as time worked.

    [TIER B — WASHINGTON / COLORADO: pay for the break time, not a separate hourly premium]
    [WASHINGTON] Under WAC 296-126-092, I am entitled to a 30-minute meal period (no more than five consecutive hours without one) and a paid 10-minute rest period for each four hours worked, with no employee required to work more than three hours without a rest period. Interrupted or on-duty break time is compensable.
    [COLORADO] Under the Colorado COMPS Order, 7 CCR 1103-1, Rule 5, I am entitled to a 30-minute uninterrupted meal period when a shift exceeds five consecutive hours, and a paid 10-minute rest period for each four hours (or major fraction). A failure to authorize and permit a rest period is a failure to pay 10 minutes of wages for each missed rest period, owed at my rate of pay.

    [TIER C — ILLINOIS: statutory meal period + civil penalties/damages]
    Under the Illinois One Day Rest in Seven Act, 820 ILCS 140/3, an employee who works 7.5 continuous hours is entitled to a meal period of at least 20 minutes beginning no later than 5 hours after the start of the shift, with an additional 20-minute meal period for every additional 4.5 continuous hours. Under 820 ILCS 140/2, I am also entitled to at least 24 consecutive hours of rest in every consecutive seven-day period. Violations carry civil penalties and damages payable to the affected employee.

  Demand:

  Within [14] days of receipt of this letter, please:
    1. Pay $[Total] in premium / break pay owed for the dates above (or, if you dispute my figures, provide the time records you relied on so we can reconcile);
    2. [If applicable] Issue corrected itemized wage statements reflecting the premiums; and
    3. Confirm in writing the steps you will take so that compliant meal and rest periods are provided going forward.

  If you do not, I will pursue:
    • A wage claim with the [California Labor Commissioner (DLSE) / Oregon BOLI / Washington L&I / Nevada Labor Commissioner / Colorado CDLE / Illinois Department of Labor] — free, and it does not require a lawyer;
    • A private wage action for the unpaid premiums, plus any available statutory penalties (e.g., California § 203 waiting-time penalties up to 30 days and § 226 wage-statement penalties), interest, and attorney's fees where the statute permits.

  This letter is a good-faith attempt to resolve the matter directly. I would prefer to settle it without an agency complaint.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [time records / punch detail showing missed or short breaks; pay stubs; a written break log with dates and times; any text/email from a manager directing you to skip or shorten a break; relevant pages of the employee handbook break policy]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy to HR/payroll. The certified-mail receipt proves delivery and, on separation in California, can start the § 203 waiting-time-penalty clock. Keep a copy off your work account before you send it — do not email this from an account they can lock you out of.",
      "Build the day-by-day log first; it is the whole case. For each affected day, record the date, shift length, which break was missed/late/short/interrupted, and WHY (e.g., 'manager told me to clock out and keep covering the register'). Your own time-clock punches and any manager text saying 'skip lunch, we're slammed' are the strongest evidence — your employer generated them.",
      "Pick the right state tier — break rights are entirely state-driven. Tier A (California, Nevada, Oregon) is the strongest; California uniquely owes a FULL extra hour of pay per non-compliant meal day AND a separate hour per non-compliant rest day. Tier B (Washington, Colorado) generally owes you pay for the break time itself, not a separate hourly penalty. Tier C (Illinois) sets a statutory meal period with civil penalties. If your state is not on the list, read the 'no state-mandated breaks' note below before you send anything.",
      "Calculate at your REGULAR rate, not just base hourly. In California the premium is paid at the 'regular rate of compensation,' which (like overtime) includes nondiscretionary bonuses and commissions — so if you earn commission or shift bonuses, your true hourly rate is higher than your base, and so is the premium. Remember the cap: at most one meal premium and one rest premium per workday, no matter how many breaks were missed that day.",
      "Biggest mistake to avoid: demanding break premiums when you are an exempt salaried employee or an independent contractor — these rules protect non-exempt (hourly) employees. Second mistake: framing a missed break as 'I voluntarily skipped lunch to leave early.' The claim is that the employer failed to PROVIDE or relieve you, not that you chose to work through. If you genuinely chose to skip a freely-offered break, the premium may not be owed (see Brinker).",
    ],
    legalContext: [
      "Start with the part most websites bury: there is NO federal right to a meal or rest break. The Fair Labor Standards Act does not require employers to provide lunch breaks, coffee breaks, or any rest period at all. The only federal rules are about pay IF a break is given: under 29 C.F.R. § 785.18, short rest breaks of roughly 5 to 20 minutes, when offered, must be counted as paid hours worked; under 29 C.F.R. § 785.19, a bona fide meal period of 30 minutes or more is not compensable only if the employee is completely relieved of all duties (a worker eating at their desk while answering calls is still 'on the clock' and must be paid). So federal law governs whether a break is paid, never whether it must exist. Break rights themselves are created by STATE law — and most states create none.",
      "California is the strongest break-premium jurisdiction in the country, and the doctrinal anchor. Cal. Lab. Code § 512(a) requires a 30-minute meal period before the end of the fifth hour of work (and a second 30-minute meal period for shifts over ten hours), with narrow waiver rules. The applicable Industrial Welfare Commission Wage Order requires a paid, net 10-minute rest period for every four hours worked or major fraction. The enforcement teeth are in Cal. Lab. Code § 226.7(c): when the employer fails to provide a compliant meal or rest period, it 'shall pay the employee one additional hour of pay at the employee's regular rate of compensation for each workday' the period is not provided — one premium hour for meal violations and a separate premium hour for rest violations, each capped at one per day. Brinker Restaurant Corp. v. Superior Court, 53 Cal. 4th 1004 (2012) defines the duty: the employer must relieve the employee of all duty and give a reasonable opportunity to take the break, but need not police that no work is done — so a break that is discouraged, interrupted, or made practically impossible by workload is not 'provided.' Naranjo v. Spectrum Security Services, Inc., 13 Cal. 5th 93 (2022) then held these premiums are 'wages,' which means they must be reported on itemized wage statements under § 226 and, when an employee separates, paid promptly or trigger § 203 waiting-time penalties (up to 30 days of pay). Naranjo also fixed prejudgment interest on these claims at 7% under the California Constitution.",
      "A handful of other states mandate breaks, but the remedy varies — and only some pay a separate penalty. Nevada (NRS 608.019) requires a 30-minute meal period for a continuous 8-hour shift and a paid 10-minute rest period per 4 hours (or major fraction), counted as hours worked. Oregon (OAR 839-020-0050) requires a 30-minute duty-free meal period for work periods of six to eight hours and a paid 10-minute rest per four-hour segment; if the meal is interrupted, the employer must pay for the entire 30 minutes. Washington (WAC 296-126-092) requires a 30-minute meal period (no more than five consecutive hours without one) and a paid 10-minute rest period per four hours, with no one working more than three hours without a rest period; on-duty or interrupted break time is compensable. Colorado (COMPS Order, 7 CCR 1103-1, Rule 5) requires a 30-minute meal period when a shift exceeds five consecutive hours and a paid 10-minute rest per four hours — and treats a denied rest period as 10 minutes of unpaid wages owed. Illinois (One Day Rest in Seven Act, 820 ILCS 140/3, amended effective Jan. 1, 2023) requires a 20-minute meal period for a 7.5-hour shift (beginning within the first 5 hours), plus an additional 20 minutes for every further 4.5 hours, and 24 consecutive hours of rest per seven-day period (820 ILCS 140/2), enforced with civil penalties and damages to the employee. The key honesty point: California's full extra-hour premium is the exception, not the rule. Most break states make you whole for the break time, not a punitive hour.",
      "Everywhere else — the majority of states, including Texas, Florida, Georgia, and most of the South and Mountain West — there is no state-mandated meal or rest break for adult private-sector employees, so there is no 'break premium' to demand. In those states the only levers are: (1) the FLSA pay rules above — if your employer made you work through an unpaid 'meal period,' that time is compensable and, if it pushed you over 40 hours, owes overtime; (2) your employer's own written break policy, which is enforceable as a contract or under state wage-payment law if it promised breaks and didn't deliver pay; and (3) special categories some states protect even without general break laws, such as minors and (under the federal PUMP Act, 29 U.S.C. § 218d) reasonable break time to express breast milk. Several no-general-break states still require breaks for workers under 18. Bottom line: confirm your state has a statute before you send a premium demand — in a no-break state the right letter is an unpaid-wages or unpaid-overtime demand, not a break-premium demand.",
    ],
    stateNotes: [
      {
        state: "California (Tier A — strongest)",
        note: "Cal. Lab. Code § 512 (30-min meal before 5th hour; 2nd meal over 10 hrs) + IWC Wage Order (10-min paid rest per 4 hrs). § 226.7(c): one extra hour of pay at the regular rate per non-compliant meal day AND a separate hour per non-compliant rest day (one each per day max). Brinker (2012): 'provide,' not 'police.' Naranjo (2022): premiums are wages — § 226 wage-statement + § 203 waiting-time penalties apply.",
      },
      {
        state: "Nevada (Tier A)",
        note: "NRS 608.019. 30-min meal for a continuous 8-hr shift; paid 10-min rest per 4 hrs (or major fraction), counted as hours worked. No rest required if total daily work is under 3.5 hrs.",
      },
      {
        state: "Oregon (Tier A)",
        note: "OAR 839-020-0050. 30-min duty-free meal for a 6–8 hr work period; paid 10-min rest per 4-hr segment (or major portion). If the meal is interrupted, the whole 30 minutes must be paid. (Rule amended effective Nov. 2025; meal/rest substance intact.)",
      },
      {
        state: "Washington (Tier B)",
        note: "WAC 296-126-092. 30-min meal, no more than 5 consecutive hours without one; paid 10-min rest per 4 hrs, no more than 3 hrs without a rest period. Interrupted/on-duty breaks are compensable. No separate hourly penalty — you're owed pay for the break time.",
      },
      {
        state: "Colorado (Tier B)",
        note: "COMPS Order, 7 CCR 1103-1, Rule 5. 30-min meal when shift exceeds 5 consecutive hours; paid 10-min rest per 4 hrs (or major fraction). A denied rest period = 10 minutes of unpaid wages owed at your rate (not a full-hour premium).",
      },
      {
        state: "Illinois (Tier C)",
        note: "One Day Rest in Seven Act, 820 ILCS 140/3 (eff. amendments Jan. 1, 2023): 20-min meal for a 7.5-hr shift, beginning within the first 5 hrs, +20 min per additional 4.5 hrs; 820 ILCS 140/2: 24 consecutive hrs rest per 7-day period. Enforced via civil penalties + damages to the employee. No California-style hourly premium.",
      },
      {
        state: "Also have statutory breaks (verify specifics before sending)",
        note: "Several other states mandate meal and/or rest breaks for adults (e.g., Connecticut, Delaware, Kentucky, Maine, Maryland-retail, Minnesota, New Hampshire, New York, Rhode Island, Vermont, plus DC). Remedies differ widely and most do NOT pay a California-style premium — check your state DOL before demanding a penalty.",
      },
      {
        state: "Most other states (no state-mandated breaks — the default)",
        note: "TX, FL, GA, and the majority of states create NO meal or rest break right for adult private employees. There is no break premium to demand. Levers instead: FLSA pay rules (worked-through unpaid meals are compensable and may owe overtime — 29 C.F.R. §§ 785.18–785.19), your employer's written break policy as a contract, and special protections for minors and for lactation breaks (PUMP Act, 29 U.S.C. § 218d). Use an unpaid-wages or unpaid-overtime demand instead.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores or refuses the demand, file a free wage claim with your state labor agency — California Labor Commissioner (DLSE), Oregon BOLI, Washington L&I, Nevada Labor Commissioner, Colorado CDLE, or the Illinois DOL. These agencies investigate and order payment without you hiring a lawyer. California is the highest-leverage path: a private suit can stack § 226.7 premiums, § 203 waiting-time penalties (up to 30 days of pay), § 226 wage-statement penalties, 7% interest (Naranjo), and PAGA representative penalties — which makes plaintiff's-side employment lawyers take these on contingency. Watch the clock: most state break-premium and wage claims run 2–3 years (California is generally 3 years for the underlying premium, extendable to 4 via the Unfair Competition Law). If you are in a no-break state, drop the premium theory and pursue the worked-through time as unpaid wages/overtime under the FLSA instead — that claim survives even where no break statute exists.",
    relatedSlugs: [
      "unpaid-overtime-demand",
      "unpaid-minimum-wage-demand",
      "wage-statement-violation-demand",
      "final-paycheck-demand",
      "expense-reimbursement-demand",
      "pto-vacation-payout-demand",
    ],
    faqs: [
      {
        question: "Doesn't federal law guarantee me a lunch break?",
        answer:
          "No. The FLSA does not require employers to provide any meal or rest break. Federal law only controls pay when a break IS given: short breaks of 5–20 minutes must be paid (29 C.F.R. § 785.18), and a 30-minute meal is unpaid only if you're fully relieved of duty (29 C.F.R. § 785.19). Whether breaks must exist at all is up to your state — and most states require none.",
      },
      {
        question: "I work in Texas (or Florida/Georgia). Can I demand break pay?",
        answer:
          "Not as a break premium — those states don't mandate breaks for adult private employees, so there's nothing to demand. But if your employer made you work through an unpaid 'lunch,' that time is compensable under the FLSA and may owe overtime if it pushed you past 40 hours. In that case use an unpaid-overtime or unpaid-wages demand instead of this one.",
      },
      {
        question: "How much is a missed break worth in California?",
        answer:
          "One additional hour of pay at your regular rate for each workday a meal period was non-compliant, plus a separate hour for each workday a rest period was non-compliant (Cal. Lab. Code § 226.7(c)). It's capped at one meal premium and one rest premium per day — so at most two premium hours per day. The 'regular rate' includes nondiscretionary bonuses and commissions, so it can be higher than your base hourly rate.",
      },
      {
        question: "My manager said I could take breaks but we were always too busy. Does that count?",
        answer:
          "In California, possibly yes. Under Brinker (2012), the employer must give a reasonable OPPORTUNITY to take the break and not impede or discourage it. A break that is theoretically allowed but practically impossible because of workload, understaffing, or pressure to keep working can still be a violation. Document who was working, the customer/patient load, and any instruction to keep going.",
      },
      {
        question: "I'm salaried. Am I owed break premiums?",
        answer:
          "Usually no. Meal and rest break rules protect non-exempt (typically hourly) employees. If you're a properly classified exempt salaried employee, the premium rules generally don't apply. But classification is often wrong — if you're called 'salaried' yet do non-managerial work and don't meet the exemption tests, you may actually be non-exempt and owed both overtime and break premiums.",
      },
    ],
    keywords: [
      "missed lunch break pay",
      "employer made me work through lunch",
      "rest break premium pay California",
      "didn't get a break at work what can I do",
      "meal break violation letter",
      "California meal and rest break penalty",
      "is my employer required to give me a lunch break",
      "worked through break not paid",
      "how to get paid for missed breaks",
      "no breaks at work state law",
    ],
    publishedAt: "2026-06-26",
  },
  {
    slug: "personnel-file-access-request",
    category: "employer",
    title: "Personnel File & Payroll Records Access Request (Cal. Lab. Code § 1198.5 + State Tiers)",
    metaDescription:
      "Need your personnel file or pay records and your employer is stalling? Free request letter citing California Lab. Code §§ 1198.5 & 226(b), plus WA, IL, MA, CT, OR, MI deadlines.",
    lede:
      "You want to see what's actually in your personnel file — the write-ups, the reviews, the documents you signed — or you need your pay records. About 20 states give employees a real right to inspect and copy these, often within a fixed deadline. This letter invokes your state's statute (or asks anyway, the right way, where there isn't one).",
    body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Custodian of Records]
  [Employer Address]

  cc: [Direct supervisor, payroll]

  Sent via certified mail, return receipt requested
  (Copy also emailed to HR contact)

  Re: Written Request to Inspect and Copy My Personnel File and Payroll Records

  To Human Resources:

  Under my state's employee-records law, I am making a written request to inspect and to receive copies of (1) my complete personnel file and (2) my payroll / pay records that you maintain. My details:

    • Full legal name: [Name]
    • Employee ID / last 4 of SSN (for identification): [____]
    • Position / department: [Title], [Department]
    • Employment status: [Current employee / Former employee — separation date: ____]
    • Dates of employment: [Start] to [End or "present"]

  Records requested:

    1. My personnel file in full, including (where they exist): the job application and resume I submitted; offer letter and any employment agreements I signed; performance evaluations and reviews; written warnings, discipline, and any documents relating to disciplinary action; attendance and leave records; any complaints or investigation records concerning me; and any other documents used or that may be used to determine my qualifications for employment, promotion, transfer, compensation, benefits, or discharge.
    2. Every instrument or document I personally signed relating to obtaining or holding employment (offer letter, handbook acknowledgment, arbitration agreement, non-compete, NDA, policy sign-offs).
    3. My payroll / pay records: itemized wage statements (pay stubs), records of hours worked and rates of pay, and records of deductions, for [date range, e.g., the last three years].

  I prefer to receive [copies — by mail / secure PDF / pickup] AND, if you require it, to inspect the originals at [a mutually convenient time at or near my place of employment]. I agree to pay the actual, reasonable cost of duplication if your state permits a copy charge.

  Legal basis:

  [Pick the tier that applies to your state — strike the others. The per-state deadlines and copy rights differ; use the exact one for your state from the State Notes.]

    [TIER A — Statutory right to INSPECT and to receive COPIES, with a fixed deadline.]
    Under [Cal. Lab. Code § 1198.5 and § 226(b) / Wash. Rev. Code § 49.12.240–.261 / 820 ILCS 40/2 / Mass. G.L. c. 149 § 52C / Conn. Gen. Stat. § 31-128b & § 31-128g / Or. Rev. Stat. § 652.750 / Mich. Comp. Laws § 423.503–.504], a current or former employee who makes a written request has the right to inspect and to receive copies of the personnel records the employer maintains. You are required to comply within the statutory deadline for my state (see the State Notes). California adds that any document I signed must be provided to me on request under Lab. Code § 432, and that you must produce my payroll records within 21 calendar days under Lab. Code § 226(b)–(c).

    [TIER B — Statutory right to INSPECT only; current employees only.]
    Under [43 P.S. § 1322 (Pennsylvania)], as a current employee I have the right to inspect my own personnel file at reasonable times during regular business hours and to take notes. I am exercising that right and requesting an inspection appointment.

    [TIER C — No specific statute; request as a matter of policy and contract.]
    My state does not have a statute compelling production of personnel files, but I am nonetheless requesting these records. To the extent your employee handbook, my offer letter, or any policy promises me access to my records, this is a request under that policy. These records are also routinely produced; providing them now avoids the need to obtain them later by other means.

  Demand:

  Please provide the requested records within [the deadline for my state — see State Notes; e.g., 30 calendar days in California, 21 calendar days in Washington, 7 working days in Illinois, 5 business days in Massachusetts, 7 business days in Connecticut for a current employee]. If any document is being withheld, please identify it and state the legal basis for withholding it.

  If you do not comply within the deadline, I may:
    • File a complaint with the [state labor agency / Department of Labor / Labor Commissioner];
    • Recover the statutory penalty and remedies my state provides for non-compliance (for example, California Lab. Code § 1198.5(k)–(l) and § 226(f) each provide a $750 penalty plus injunctive relief, costs, and reasonable attorney's fees; Washington Rev. Code § 49.12.261 provides escalating statutory damages of $250 / $500 / $1,000 plus attorney's fees);
    • Pursue any other remedy available under state law.

  I am keeping a copy of this letter and the certified-mail receipt. Thank you for your prompt attention.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [copy of photo ID for identity verification, if your employer requires it; any employer-provided records-request form, completed]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy to HR. The certified-mail receipt is what proves delivery and what starts your state's response clock (California's 30 days, Washington's 21, Illinois's 7 working days, etc.). Keep a dated copy of everything.",
      "Make it a WRITTEN request and ask in writing for COPIES, not just a viewing. Most of the strong statutes (CA § 1198.5, WA, IL, MA, CT) require a written request and give you a right to copies — but inspection-only states like Pennsylvania only let you look and take notes, so set expectations by your tier.",
      "Pick your state's exact deadline and copy rule from the State Notes and write that number into the 'Demand' line. The deadlines genuinely differ — 5 business days in Massachusetts, 7 working days in Illinois, 21 calendar days in Washington, 30 calendar days in California for the personnel file (but only 21 days for California payroll records under § 226). Don't quote the wrong number.",
      "Single highest-leverage tip: in California, cite the penalties. Lab. Code § 1198.5 and § 226 each carry a $750 penalty plus attorney's fees, and Washington's 2025 law (RCW 49.12.261) adds escalating $250 / $500 / $1,000 statutory damages. Naming the dollar consequence is what turns a polite request into one HR routes to legal.",
      "Top mistake to avoid: don't accuse anyone of hiding something, don't demand documents that aren't yours (other employees' files, the employer's litigation-prep or investigation-strategy notes are usually exempt), and don't set a 48-hour deadline. Ask cleanly for your own file by the statutory deadline; an overreaching or hostile request gives them an excuse to slow-walk you.",
    ],
    legalContext: [
      "There is no federal law giving private-sector employees a general right to see their own personnel file. The right, where it exists, is purely a creature of state law — and only about 20 states grant it. The statutes vary on four axes that matter: (1) who is covered — some reach both current and former employees (CA, WA, CT, IL, MA, MI), one reaches current employees only (PA), and a few tie former-employee access to a retention window (OR keeps records 60 days post-termination; IL and CT give former employees a one-year window); (2) inspect vs. copy — strong states give you a right to copies (CA, WA, IL, MA, CT, OR, MI), while Pennsylvania gives inspection and note-taking only; (3) the deadline — anywhere from 5 business days (MA) to 45 days (OR); and (4) the teeth — California and Washington attach real money to non-compliance, while others route enforcement through a labor agency with modest fines. In the roughly 30 states with no statute at all (Texas, Florida, Georgia, and most others), a private employee has no statutory right — but the request is still worth making, because many employers comply voluntarily, a handbook or contract promise is enforceable, and the records become discoverable if a dispute ever escalates to litigation.",
      "California is the anchor and the strongest framework. Lab. Code § 1198.5(a): \"Every current and former employee, or their representative, has the right to inspect and receive a copy of the personnel records that the employer maintains relating to the employee's performance or to any grievance concerning the employee.\" The employer must make the records available \"not later than 30 calendar days from the date the employer receives a written request\" (§ 1198.5(b)(1), extendable to 35 days by written agreement), and may charge no more than \"the actual cost of reproduction.\" Failure exposes the employer to a $750 penalty recoverable by the employee or the Labor Commissioner (§ 1198.5(k)) plus injunctive relief, costs, and reasonable attorney's fees (§ 1198.5(l)). Two companion statutes round out the California request: Lab. Code § 432 — \"If an employee or applicant signs any instrument relating to the obtaining or holding of employment, he shall be given a copy of the instrument upon request\" — and Lab. Code § 226(b)–(f), which separately governs PAYROLL records: the employer must let a current or former employee inspect or copy wage-statement records \"as soon as practicable, but no later than 21 calendar days\" from the request (§ 226(c)), and a failure \"entitles the current or former employee or the Labor Commissioner to recover a seven-hundred-fifty-dollar ($750) penalty\" (§ 226(f)). Note the split deadlines: 30 days for the personnel file, 21 days for pay records. (§ 1198.5 was last amended by SB 513, effective January 1, 2026, expanding the representative's role; § 226 was last amended by SB 332, effective October 13, 2023.)",
      "Several other states sit in the same strong \"inspect-and-copy with a deadline\" tier. Washington overhauled its law in 2025 (HB 1308 / Laws of 2025, ch. 273, effective July 27, 2025): RCW 49.12.240–.250 now require the employer to furnish a copy of the complete personnel file — which expressly includes payroll records, performance evaluations, and employment agreements — within 21 calendar days and at no cost, for current employees and for former employees who separated within three years; RCW 49.12.261 creates a private superior-court action with escalating statutory damages ($250 if late past 21 days, $500 past 28 days, $1,000 past 35 days) plus attorney's fees, after a five-day notice of intent to sue. Illinois (Personnel Record Review Act, 820 ILCS 40/2, as amended by P.A. 103-201 eff. 1-1-24 and later acts) requires employers with five or more employees to comply with a written request within 7 working days (plus up to 7 more calendar days for good cause), at least twice per calendar year, with the fee \"limited to the actual cost of duplicating\"; it reaches former employees who separated within the preceding year, and § 12 allows a Department of Labor complaint or a circuit-court action (actual damages plus, for a willful and knowing violation, $200 plus costs and attorney's fees). Massachusetts (G.L. c. 149 § 52C) gives current and former employees a review within 5 business days of a written request and a copy within 5 business days, capped at two reviews per year, enforced by the Attorney General with a $500–$2,500 fine (note: § 52C contains no copy-fee cap). Connecticut (Conn. Gen. Stat. § 31-128b) requires inspection/copying within 7 business days for current employees and 10 business days for former employees (who must request within one year of termination), with copies under § 31-128g at a fee \"reasonably related to the cost\"; the Labor Commissioner enforces, with civil penalties up to $500 (first) / $1,000 (subsequent) under § 31-69a. Oregon (ORS 652.750) gives a 45-day window to allow inspection and to furnish a certified copy at actual cost, and requires the employer to keep a terminated employee's records at least 60 days. Michigan's Bullard-Plawecki Employee Right to Know Act (MCL 423.501 et seq.) covers current and former employees of employers with four or more employees: the employee may review the file up to twice per calendar year at reasonable intervals (no fixed day-count), obtain copies at the \"actual incremental cost of duplicating\" (§ 423.504), and sue in circuit court for actual damages plus, for a willful and knowing violation, $200, costs, and attorney's fees (§ 423.511).",
      "Two cautions for the everywhere-else cases. First, Pennsylvania is an inspection-only, current-employees-only state: the Inspection of Employment Records Law (43 P.S. § 1322) lets a current employee inspect their file \"at reasonable times\" and take notes, but confers no right to copies, and the Pennsylvania Supreme Court held in Thomas Jefferson University Hospitals, Inc. v. Pa. Department of Labor & Industry, 162 A.3d 384 (Pa. 2017), that a terminated/former employee is not an \"employee\" under § 1321 and has no right to inspect — so a former Pennsylvania employee should not rely on this statute. Second, in the majority of states there is no personnel-file statute at all (Texas, Florida, Georgia, and most others). The honest default: you have no statutory hook, but you should still send the request. Many employers produce the file as a matter of course; if your handbook, offer letter, or a policy promises access, that promise is enforceable as a contract; and if the underlying dispute ever becomes a wage claim, EEOC charge, or lawsuit, the file is discoverable. Frame the request politely, cite any policy that applies, and treat a refusal as information — it tells you the records are worth getting through other channels.",
    ],
    stateNotes: [
      {
        state: "California (Tier A)",
        note: "Lab. Code § 1198.5 — personnel records, current AND former employees, within 30 calendar days of written request (max 35 by agreement); copies at actual cost of reproduction; $750 penalty + injunctive relief + costs + attorney's fees. Lab. Code § 226(b)–(f) — payroll records within 21 calendar days; separate $750 penalty. Lab. Code § 432 — copy of any document you signed, on request. (§ 1198.5 amended by SB 513, eff. 1-1-2026.)",
      },
      {
        state: "Washington (Tier A)",
        note: "RCW 49.12.240–.261 (HB 1308 / Laws 2025 ch. 273, eff. 7-27-2025). Full personnel file (incl. payroll records, evaluations, agreements) within 21 calendar days, at NO cost; current employees and former employees who separated within 3 years. Discharged employees may also demand a signed statement of the reason for discharge. RCW 49.12.261: superior-court action, statutory damages $250 (>21 days) / $500 (>28 days) / $1,000 (>35 days) + attorney's fees, after a 5-day notice of intent to sue.",
      },
      {
        state: "Illinois (Tier A)",
        note: "820 ILCS 40/2 (Personnel Record Review Act; amended P.A. 103-201 eff. 1-1-2024). Written request to inspect/copy; employers with 5+ employees; within 7 working days (+ up to 7 more for good cause); at least 2 requests/calendar year; fee limited to actual cost of duplicating; former employees within 1 year of separation. § 12: Dept. of Labor complaint or circuit court; actual damages, and for a willful & knowing violation $200 + costs + attorney's fees.",
      },
      {
        state: "Massachusetts (Tier A)",
        note: "G.L. c. 149 § 52C. Current AND former employees; review within 5 business days of written request and a copy within 5 business days; max 2 reviews per calendar year; no statutory copy-fee cap. Enforced by the Attorney General; fine $500–$2,500. (Employers of 20+ must keep a defined list of records and retain them 3 years post-termination.)",
      },
      {
        state: "Connecticut (Tier A)",
        note: "Conn. Gen. Stat. § 31-128b — inspect/copy within 7 business days (current employee) or 10 business days (former employee, who must request within 1 year of termination). § 31-128g — copies at a fee reasonably related to cost. Labor Commissioner enforces; civil penalty up to $500 (first) / $1,000 (subsequent) under § 31-69a. Inspections capped at 2/calendar year (§ 31-128h).",
      },
      {
        state: "Oregon (Tier A)",
        note: "ORS 652.750. Within 45 days of the request, the employer must allow inspection and furnish a certified copy; fee no more than the actual cost of providing the records. Employer must keep a terminated employee's personnel records at least 60 days after termination — former employees should request promptly.",
      },
      {
        state: "Michigan (Tier A)",
        note: "Bullard-Plawecki Employee Right to Know Act, MCL 423.501 et seq. Current AND former employees of employers with 4+ employees; written request to review up to 2x/calendar year at reasonable intervals (no fixed day-count); copies at the actual incremental cost of duplicating (§ 423.504); circuit-court action for actual damages, and for a willful & knowing violation $200 + costs + attorney's fees (§ 423.511).",
      },
      {
        state: "Pennsylvania (Tier B — inspection only)",
        note: "Inspection of Employment Records Law, 43 P.S. § 1322. CURRENT employees only (incl. laid-off with recall rights, on leave) — per Thomas Jefferson Univ. Hosps. v. Pa. Dept. of Labor & Industry, 162 A.3d 384 (Pa. 2017), FORMER employees are not covered. Right to inspect at reasonable times and take notes; NO right to copies; limited to once per calendar year (§ 1323). Enforced by the Dept. of Labor & Industry, Bureau of Labor Standards (§ 1324); no statutory monetary penalty.",
      },
      {
        state: "All other states (Tier C — no statute)",
        note: "Most states (Texas, Florida, Georgia, and the majority) have NO statute requiring private employers to produce personnel files. Send the request anyway: many employers comply voluntarily; any handbook/offer-letter/policy promise of access is enforceable as a contract; and the file is discoverable if a wage claim, EEOC charge, or lawsuit follows. Note some states grant access to public-sector employees or to medical/exposure records only — check your specific situation.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores or refuses the request, escalate by tier. In statutory states, file a complaint with the state labor agency (free): the California Labor Commissioner (DLSE) enforces §§ 1198.5 and 226; the Illinois and Connecticut Departments of Labor enforce their acts; the Massachusetts Attorney General enforces § 52C; and Washington and Michigan let you sue directly (WA in superior court under RCW 49.12.261 with escalating $250/$500/$1,000 statutory damages plus fees; MI in circuit court for actual damages plus $200 and fees for a willful violation). Because California (§ 1198.5(l), § 226(h)) and Washington (RCW 49.12.261) shift attorney's fees, a private suit can be economical even for a small file. In no-statute states, the records often surface anyway once the underlying dispute is in motion — a wage claim, an EEOC/state civil-rights charge, an unemployment appeal, or a lawsuit all open discovery, where the personnel file is routinely produced. Watch the clock on the underlying claim, not the file request: most state wage-claim and discrimination deadlines run 180 days to 3 years, and getting your file is usually a step toward one of those, not an end in itself.",
    relatedSlugs: [
      "wage-statement-violation-demand",
      "final-paycheck-demand",
      "unpaid-overtime-demand",
      "unpaid-commission-demand",
      "expense-reimbursement-demand",
      "pto-vacation-payout-demand",
    ],
    faqs: [
      {
        question: "Does my employer have to give me my personnel file?",
        answer:
          "It depends entirely on your state. About 20 states have a statute requiring it — California (Lab. Code § 1198.5), Washington, Illinois, Massachusetts, Connecticut, Oregon, Michigan, and others. The rest, including Texas, Florida, and Georgia, have no such law for private employers. Even where there's no statute, it's worth asking in writing, because many employers comply voluntarily and any handbook or contract promise of access is enforceable.",
      },
      {
        question: "I already quit / was fired. Can I still get my file?",
        answer:
          "In most strong states, yes. California (§ 1198.5), Washington (within 3 years of separation), Massachusetts, Illinois and Connecticut (within 1 year), and Michigan all cover former employees. The big exception is Pennsylvania, where the state Supreme Court held in 2017 that former employees are not covered at all. Oregon requires employers to keep the file only 60 days after termination, so request fast.",
      },
      {
        question: "How long does my employer have to respond?",
        answer:
          "The deadline is set by your state and they vary a lot: 5 business days in Massachusetts, 7 working days in Illinois, 7 business days in Connecticut (10 for former employees), 21 calendar days in Washington, 30 calendar days in California for the personnel file (but 21 days for California payroll records under § 226), and 45 days in Oregon. Michigan and Pennsylvania set no fixed day-count, only \"reasonable\" timing.",
      },
      {
        question: "Can they charge me for copies?",
        answer:
          "Usually only the actual cost of copying. California, Illinois, Connecticut, Oregon, and Michigan all cap the fee at the actual (or actual incremental) cost of duplication. Washington's 2025 law requires copies at no cost. Massachusetts has no fee cap in the statute. Pennsylvania gives you inspection and note-taking only — no right to copies at all.",
      },
      {
        question: "What if my state has no personnel-file law?",
        answer:
          "Send the request anyway. Many employers produce the file as a matter of routine, and if your handbook, offer letter, or a written policy promises you access, that promise is enforceable as a contract. If the underlying problem turns into a wage claim, an EEOC or state civil-rights charge, or a lawsuit, your personnel file becomes discoverable and you can compel it then. A polite written request now also creates a paper trail.",
      },
      {
        question: "What's actually in a \"personnel file\" — and what can they hold back?",
        answer:
          "Generally: your application and resume, offer letter and agreements you signed, performance reviews, write-ups and discipline, and anything used to judge your qualifications, pay, or discharge. Employers can usually withhold a narrow set of items — records assembled for pending litigation or a criminal investigation, materials that would reveal another employee, reference letters given in confidence, and (often handled separately) medical records. If they withhold something, you can ask them to identify it and state the legal basis.",
      },
    ],
    keywords: [
      "how to request my personnel file",
      "employer won't give me my personnel file",
      "get a copy of my personnel file",
      "request pay records from employer",
      "personnel file request letter",
      "California Labor Code 1198.5 personnel records",
      "see my employee file after being fired",
      "right to inspect personnel file by state",
      "employee right to know act",
      "former employee personnel file access",
    ],
    publishedAt: "2026-06-26",
  },
  {
    slug: "unpaid-commission-demand",
    category: "employer",
    title: "Unpaid Commission Demand Letter to Employer (Free Template + State Sales-Rep Statutes)",
    metaDescription:
      "Earned a sales commission they won't pay — even one that came due after you left? Free demand letter citing Cal. Lab. Code § 2751 + IL, NY, TX, NJ, MA sales-rep statutes with treble damages.",
    lede:
      "You closed the sale; they're sitting on the commission — maybe because you've since left. Whether and when a commission is \"earned\" turns on your contract and your state, and a handful of states attach double or treble damages to a late one. This letter cites the specific statute and demands payment.",
    body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Company Legal Name — Attn: Owner / President / HR / Accounts Payable]
  [Company Address]

  cc: [Direct manager / sales manager]

  Sent via certified mail, return receipt requested
  (Copy also emailed to [contact])

  Re: Demand for Unpaid Earned Commissions — $[Total Amount]

  To [Name / Accounts Payable]:

  I am writing to demand payment of $[Total] in sales commissions I earned but have not been paid, for sales [closed / booked / shipped / collected] between [Date] and [Date]. [Some or all of these commissions came due after my [last day / the end of our contract] on [Date]; that does not extinguish them.]

  My relationship:
    • Role: [Employee — title] OR [Independent sales representative under contract dated (date)]
    • Commission terms: [written commission plan / agreement dated (date) / offer letter Section X / oral terms as consistently applied and paid]
    • Commission rate / formula: [e.g., 5% of net invoice on accounts I sourced; $X per unit; tiered schedule attached]
    • When a commission is "earned": [booking / shipment / customer payment / invoice issued — per the plan]

  Commissions owed (detail attached):

  | Account / Order | Date earned | Sale amount | Rate | Commission |
  |-----------------|-------------|-------------|------|------------|
  | [Customer / PO#] | [Date] | $[Amount] | [%] | $[Amount] |
  | [Customer / PO#] | [Date] | $[Amount] | [%] | $[Amount] |
  | [Customer / PO#] | [Date] | $[Amount] | [%] | $[Amount] |
  | **Total** | | | | **$[Total]** |

  Legal basis:

  [Pick the track and the state provision that apply — strike the rest. If you are unsure whether you are an "employee" or an "independent sales representative," cite both tracks.]

    [TRACK A — I am an EMPLOYEE; an earned commission is "wages"]
    In my state an earned commission is wages, so the state wage-payment law sets when it is due and what penalty attaches if it is late. Because my [employment ended / final pay issued] on [Date], the final-pay provisions apply.
      [CALIFORNIA] Cal. Lab. Code § 200 defines "wages" to include amounts "ascertained by the standard of time, task, piece, commission basis, or other method of calculation." Cal. Lab. Code § 2751 required my commission agreement to be in writing and to set the method by which commissions are computed and paid. Earned commissions were due immediately on discharge (§ 201) or within 72 hours of my quit (§ 202); if unpaid, they accrue waiting-time penalties of up to 30 days' wages under § 203, and § 218.5 awards attorney's fees and costs to the prevailing employee.
      [NEW YORK] N.Y. Labor Law § 190(1) includes commissions in "wages," and § 191(1)(c) requires earned commissions to be paid under the written terms of employment. Unpaid wages carry liquidated damages of 100% of the amount due (up to 300% for a willful violation) plus attorney's fees under § 198(1-a).
      [ILLINOIS] Earned commissions are "final compensation" under the Illinois Wage Payment and Collection Act, 820 ILCS 115/2, due at separation; 820 ILCS 115/14 adds statutory damages of 5% of the underpayment per month plus attorney's fees.
      [MASSACHUSETTS] M.G.L. c. 149 § 148 applies to "the payment of commissions when the amount of such commissions ... has been definitely determined and has become due and payable." A violation carries mandatory treble damages, costs, and reasonable attorney's fees under § 150.
      [MARYLAND] Md. Code, Lab. & Empl. § 3-501 defines "wage" to include "a commission"; § 3-505 requires payment of all wages due at separation; § 3-507.2 permits an award of up to three times the wage plus attorney's fees where the commission was withheld "not as a result of a bona fide dispute."

    [TRACK B — I am an INDEPENDENT SALES REPRESENTATIVE]
    My state's sales-representative statute sets a hard deadline to pay commissions after the contract ends and imposes multiple damages for failure to pay.
      [ILLINOIS] 820 ILCS 120/2 requires all commissions due at termination to be paid within 13 days; 820 ILCS 120/3 makes a noncompliant principal "liable in a civil action for exemplary damages in an amount which does not exceed 3 times the amount of the commissions owed," plus reasonable attorney's fees and court costs.
      [NEW YORK] N.Y. Labor Law § 191-c(1) requires earned commissions to be paid within five business days of termination (or of becoming due); § 191-c(3) imposes double damages plus attorney's fees, court costs, and disbursements.
      [TEXAS] Tex. Bus. & Com. Code § 54.004 makes a principal who fails to pay a commission due on termination liable for three times the unpaid commission plus reasonable attorney's fees and costs.
      [NEW JERSEY] N.J.S.A. 2A:61A-2 requires payment within 30 days of termination (or of becoming due); N.J.S.A. 2A:61A-3 makes a noncompliant principal liable for all amounts due plus exemplary damages of three times the commissions owed, plus attorney's fees and court costs.
      [MASSACHUSETTS] M.G.L. c. 104 § 8 requires commissions due at termination to be paid within 14 days; § 9 makes a principal who willfully or knowingly fails to pay liable for the commission plus up to three times the amount, plus reasonable attorney's fees and court costs.

    [TRACK C — everywhere else / default]
    In every state an earned commission is compensation the law treats as a wage or an enforceable contract debt. Whether a commission is "earned" is governed by the commission agreement; where the agreement is silent about commissions outstanding at separation, most states apply the "procuring cause" rule — the salesperson who is the procuring cause of a sale is owed the commission even if it closes or is paid after departure. I earned the commissions listed above before [my last day / our contract ended], and they are due now under [my state's wage-payment law / our commission agreement].

  Demand:

  Within [14] days of receipt of this letter, please pay $[Total] in earned commissions by [check / direct deposit / wire to the account on file]. If you contend any line item is not yet "earned" or is miscalculated, identify it specifically in writing and cite the contract provision you rely on — a general denial is not a "bona fide dispute."

  If you do not, I will pursue:
    • A wage claim with the [state labor agency / Department of Labor / (TX) Texas Workforce Commission] [employee track];
    • A civil action for the unpaid commissions plus the statutory multiplier above [(CA) § 203 waiting-time penalties; (NY) 100% liquidated damages or § 191-c double damages; (MA) treble damages; (IL / TX / NJ) up to treble exemplary damages] and attorney's fees and costs.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [commission agreement / plan / offer letter; commission statements or pay stubs; sales records (POs, invoices, CRM export) showing the sales and amounts; correspondence about the unpaid commissions]`,
    howToUse: [
      "Send by certified mail with return receipt requested AND email a copy. Attach the commission agreement (or offer letter / plan) and the sales records — POs, invoices, or a CRM export — that show each sale and the amount. The certified-mail receipt proves delivery and, on the employee track, can start a state waiting-time-penalty clock.",
      "Prove the commission is \"earned.\" State the contract trigger (booking, shipment, or customer payment) and show that it happened. If there's no written plan, your prior commission statements establish the rate and that the company treated these sales as commissionable — pull them as enclosures.",
      "Pick the right track. The double- and treble-damages statutes mostly live on the INDEPENDENT-SALES-REP side (IL 820 ILCS 120, NY § 191-c, TX § 54.004, NJ 2A:61A, MA c. 104). Employees use the state wage-payment law instead (CA, NY § 198, IL IWPCA, MA c. 149, MD). If your classification is genuinely unclear, cite both tracks and let them sort it out.",
      "Highest-leverage move: name the multiple-damages statute and the attorney's-fee provision, and demand a SPECIFIC written basis for any denial. A vague \"it's in dispute\" does not defeat penalties — Maryland's treble provision (§ 3-507.2) only shields a \"bona fide dispute,\" and forcing the company to commit to a specific contract argument exposes whether one exists.",
      "Top mistake to avoid: do not sign a severance agreement or release that waives the commission, and do not accept a bare assertion that sales which closed after you left \"don't count.\" The procuring-cause rule and the sales-rep statutes (which expressly cover commissions becoming due after termination) often say otherwise. Don't set a 48-hour deadline or accuse anyone of fraud — it reads as unreasonable.",
    ],
    legalContext: [
      "Unpaid-commission claims split along one fault line: are you an employee or an independent sales representative? It matters because two different bodies of law apply. If you are an employee, an earned commission is almost universally treated as \"wages,\" so your state's wage-payment statute governs — final-pay deadlines, waiting-time or liquidated-damages penalties, and (in many states) attorney's fees. If you are an independent sales rep, a separate set of \"sales representative acts\" applies in many states; these set a hard deadline to pay commissions after the contract ends and impose double or treble \"exemplary\" damages for failure. The threshold question in either track is the same: when is a commission \"earned\"? That is governed first by the commission agreement — what you had to do (book the order, ship it, collect payment) for the commission to vest — and then by state law. Where the agreement is silent about commissions outstanding at separation, most states apply the \"procuring cause\" doctrine: the rep who is the procuring cause of a sale is owed the commission even if the order closes or the customer pays after the rep leaves.",
      "California is the doctrinal anchor and the strongest employee jurisdiction. Cal. Lab. Code § 200 defines \"wages\" to \"include[] all amounts for labor performed by employees of every description, whether the amount is fixed or ascertained by the standard of time, task, piece, commission basis, or other method of calculation.\" Since January 1, 2013, Cal. Lab. Code § 2751 has required that whenever \"the contemplated method of payment of the employee involves commissions, the contract shall be in writing and shall set forth the method by which the commissions shall be computed and paid,\" with a signed copy given to the employee — so an employer with no written commission plan begins the dispute in a hole. Once earned, a commission is a wage payable on the ordinary payday (§ 204) and, at separation, immediately on discharge (§ 201) or within 72 hours of a quit (§ 202). A willful failure triggers § 203 \"waiting-time\" penalties — the employee's daily wage continues as a penalty for up to 30 days — and § 218.5 awards reasonable attorney's fees and costs to the prevailing party in a nonpayment-of-wages action (an employer recovers fees only on a bad-faith finding).",
      "The independent-sales-representative statutes are where the leverage lives, because most carry double or treble damages plus mandatory fees, and they expressly reach commissions that come due after termination. Illinois: 820 ILCS 120/2 requires all commissions due at termination to be paid within 13 days, and 820 ILCS 120/3 makes a noncompliant principal \"liable in a civil action for exemplary damages in an amount which does not exceed 3 times the amount of the commissions owed,\" plus reasonable attorney's fees and court costs. New York: N.Y. Labor Law § 191-c gives independent reps five business days after termination, and § 191-c(3) imposes \"double damages\" plus attorney's fees, court costs, and disbursements. Texas: Tex. Bus. & Com. Code § 54.004 (effective 2009) makes a principal who fails to pay a commission due on termination liable for \"three times the unpaid commission\" plus reasonable attorney's fees and costs. New Jersey: N.J.S.A. 2A:61A-2 sets a 30-day deadline and § 2A:61A-3 imposes \"exemplary damages in an amount of three times the amount of commissions owed\" plus fees and costs. Massachusetts has both tracks: independent reps fall under M.G.L. c. 104 §§ 8–9 (14-day deadline; up to treble for a willful or knowing failure), while employees use the Wage Act. These exemplary-damages provisions are typically capped (\"up to\" 3x) and require a showing the refusal was vexatious or in bad faith — they are a ceiling, not an automatic award.",
      "On the employee side, several states stack their own multipliers onto an unpaid-commission claim. New York treats commissions as wages (N.Y. Labor Law § 190(1)), and § 198(1-a) adds liquidated damages equal to 100% of the unpaid amount (up to 300% for a willful violation) plus attorney's fees. Massachusetts is the most aggressive: M.G.L. c. 149 § 148 expressly covers \"the payment of commissions when the amount of such commissions ... has been definitely determined and has become due and payable,\" and § 150 makes treble damages mandatory — not discretionary — plus costs and fees. Illinois employees recover under the Wage Payment and Collection Act (820 ILCS 115/2 includes \"earned commissions\" in \"final compensation\"), with statutory damages of 5% of the underpayment per month plus fees under 820 ILCS 115/14. Maryland defines \"wage\" to include \"a commission\" (Lab. & Empl. § 3-501), requires payment at separation (§ 3-505), and permits up to treble damages plus fees where the commission was withheld \"not as a result of a bona fide dispute\" (§ 3-507.2). Texas employees who are not independent reps use the Texas Payday Law, whose definition of \"wages\" (Tex. Labor Code § 61.001) includes compensation computed on a commission basis. Everywhere else the floor is the same in substance: an earned commission is a wage or an enforceable contract debt, the state wage-payment law sets the timing and any penalty, and the procuring-cause rule protects commissions that come due after you leave unless your written agreement clearly says otherwise.",
    ],
    stateNotes: [
      {
        state: "California (employee track — strongest)",
        note: "Cal. Lab. Code §§ 200, 201–203, 218.5; written-plan rule § 2751. Commission = wages; due immediately on discharge / within 72 hours of a quit; up to 30 days' waiting-time penalty for willful nonpayment; prevailing-employee attorney's fees.",
      },
      {
        state: "Illinois (both tracks)",
        note: "Independent reps: 820 ILCS 120/2 (13-day deadline), 120/3 (exemplary damages up to 3× owed + fees + costs). Employees: IWPCA 820 ILCS 115/2 (earned commissions = \"final compensation\") + 115/14 (5% per month + attorney's fees). Note: ISRA treble is a capped, fault-based remedy.",
      },
      {
        state: "New York (both tracks)",
        note: "Independent reps: N.Y. Labor Law § 191-c — 5 business days; double damages + fees, costs, disbursements. Employees: § 190(1) / § 191(1)(c) (written terms required) + § 198(1-a) 100% liquidated damages (up to 300% willful) + fees.",
      },
      {
        state: "Massachusetts (both tracks)",
        note: "Employees: M.G.L. c. 149 §§ 148, 150 — commissions covered once \"definitely determined,\" with MANDATORY treble damages + costs + fees. Independent reps: c. 104 §§ 8–9 — 14-day deadline, up to treble for a willful/knowing failure + fees.",
      },
      {
        state: "Maryland (employee track)",
        note: "Md. Code, Lab. & Empl. § 3-501 (\"wage\" includes \"a commission\"), § 3-505 (pay all wages due at separation), § 3-507.2 (up to 3× the wage + fees where withheld \"not as a result of a bona fide dispute\"). Enhanced damages are discretionary.",
      },
      {
        state: "Texas (both tracks)",
        note: "Independent reps: Tex. Bus. & Com. Code § 54.004 — three times the unpaid commission + reasonable attorney's fees and costs (eff. 2009). Employees: Texas Payday Law, Tex. Labor Code § 61.001 includes commission in \"wages\"; enforced free by the Texas Workforce Commission.",
      },
      {
        state: "New Jersey (independent-rep track)",
        note: "N.J.S.A. 2A:61A-2 (30-day deadline after termination or when due), § 2A:61A-3 (all amounts due + exemplary damages of 3× the commissions owed + attorney's fees + costs). NJ Wage Payment Law treats earned commissions as wages for employees.",
      },
      {
        state: "All other states (default)",
        note: "An earned commission is a wage or enforceable contract debt. Your state wage-payment law sets timing and penalties; the commission agreement defines when the commission is \"earned\"; and the \"procuring cause\" rule generally protects commissions that come due after you leave unless the written agreement clearly forfeits them.",
      },
    ],
    ifThisDoesntWork:
      "If the company ignores the demand, employees can file a free wage claim with the state labor agency (in Texas, the Texas Workforce Commission under the Payday Law) — these often resolve without a lawyer. For a defined dollar amount, small claims court is fast and cheap. But the real reason commission cases get lawyers is fee-shifting and multiple damages: a private suit becomes economical on contingency where the statute pays the plaintiff's fees and multiplies the award — California § 218.5, Massachusetts c. 149 § 150 (mandatory treble), New York § 198 (100% liquidated) or § 191-c (double), Illinois (ISRA up to treble; IWPCA 5%/month), Texas § 54.004 (treble), and New Jersey 2A:61A-3 (treble). Watch the statute of limitations: roughly 2–6 years depending on the state (California is 3 years for the wage, 4 under the Unfair Competition Law; New York wage claims run 6 years; Massachusetts is 3). Send the letter promptly and keep the certified-mail receipt.",
    relatedSlugs: [
      "final-paycheck-demand",
      "pto-vacation-payout-demand",
      "unpaid-overtime-demand",
      "wage-statement-violation-demand",
      "expense-reimbursement-demand",
      "unpaid-minimum-wage-demand",
    ],
    faqs: [
      {
        question: "They paid everything except commissions on deals that closed after I left. Am I still owed those?",
        answer:
          "Often yes. The sales-rep statutes expressly cover commissions that become due after termination — Illinois requires payment within 13 days of when they come due, New York within 5 business days, New Jersey within 30 days. Even without a statute, most states apply the \"procuring cause\" rule: if you sourced the deal, you earned the commission even if it closed or was paid after you left, unless your written agreement clearly says otherwise.",
      },
      {
        question: "There's nothing in writing. Can I still claim my commission?",
        answer:
          "Yes. Oral or as-applied commission terms are enforceable, and your past commission statements prove the rate and that the company treated these sales as commissionable. In California the lack of a writing actually helps you — Cal. Lab. Code § 2751 requires the employer to put the commission plan in writing, so its failure to do so is its problem, not yours.",
      },
      {
        question: "Am I an \"employee\" or an \"independent sales representative\"? Why does it matter?",
        answer:
          "It decides which statute applies. Employees use the state wage-payment law (e.g., CA Labor Code, NY § 198, IL IWPCA, MA c. 149, MD); independent reps use the sales-representative acts (IL 820 ILCS 120, NY § 191-c, TX § 54.004, NJ 2A:61A, MA c. 104), which carry the fast deadlines and double/treble damages. Classification turns on how much control the company had over your work, not your job title. If it's genuinely unclear, cite both tracks.",
      },
      {
        question: "The company says my commission is \"in dispute.\" Does that block me?",
        answer:
          "Only if the dispute is genuine and specific. A vague \"we disagree\" does not defeat penalty provisions — Maryland's treble remedy (§ 3-507.2) is available unless the wage was withheld \"as a result of a bona fide dispute,\" and courts look for a real, good-faith reason tied to the contract. Force the issue: demand in writing the exact line item they dispute and the contract provision they rely on.",
      },
      {
        question: "How long do I have to act?",
        answer:
          "It varies by state and statute — roughly 2 to 6 years. California is 3 years for the wage (4 under the Unfair Competition Law); New York wage claims run up to 6 years; Massachusetts is 3 years under the Wage Act. The sales-rep acts have their own windows. Don't wait — send the demand letter now and keep proof of delivery.",
      },
    ],
    keywords: [
      "employer won't pay my commission",
      "unpaid sales commission",
      "commission after leaving job",
      "how to get unpaid commissions",
      "sales rep commission not paid",
      "commission owed after termination",
      "demand letter for unpaid commission",
      "earned commission wage claim",
    ],
    publishedAt: "2026-06-26",
  },
  {
    slug: "unpaid-minimum-wage-demand",
    category: "employer",
    title: "Unpaid Minimum Wage Demand Letter — FLSA § 206 Free Template + State Tiers",
    metaDescription:
      "Paid under minimum wage from off-the-clock hours, illegal deductions, or missing final pay? Free FLSA demand letter (29 U.S.C. § 206, § 216(b) double damages) + state rates.",
    lede:
      "Your paycheck worked out to less than minimum wage — because they didn't pay for time you actually worked, deducted for a uniform or register shortage, or shorted your final hours. Federal law sets a floor (29 U.S.C. § 206), and most states set a higher one. This letter does the math, cites the exact statute and rate, and demands the difference plus liquidated damages.",
    body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Payroll]
  [Employer Address]

  cc: [Direct supervisor / store manager]

  Sent via certified mail, return receipt requested
  (Copy also emailed to [HR / payroll contact])

  Re: Demand for Unpaid Minimum Wages — Pay Periods [Start Date] through [End Date]

  To Human Resources / Payroll:

  I am writing to demand payment of $[Total shortfall] in wages owed to me because my pay for the period [Start Date] through [End Date] fell below the minimum wage required by law. I worked the hours below; the wages I was actually paid did not meet the legal minimum once all hours worked and all deductions are counted.

  My employment details:
    • Position / title: [Title]
    • Employment dates: [Start] to [present / End]
    • Stated rate of pay: $[Hourly rate] per hour
    • Applicable minimum wage: $[Rate] per hour (see Legal basis below — use your state figure if higher than the federal $7.25)
    • Pay frequency: [weekly / biweekly / etc.]

  What went wrong (check all that apply and fill in):

    [ ] Off-the-clock work. I performed work I was not paid for: [pre-shift setup / post-shift closing / mandatory meetings / working through unpaid meal breaks / answering calls or messages off the clock / required travel between sites]. Unpaid hours: approximately [Number] hours over the period.

    [ ] Illegal deductions that dropped my pay below minimum wage. My employer deducted for: [uniforms / tools or equipment / cash-register shortages / customer walkouts or dine-and-dash / breakage / required training / other]. Total deducted: $[Amount]. These deductions reduced my effective hourly wage below the legal minimum.

    [ ] Unpaid final hours. My final paycheck did not include all hours I worked through my last day. Unpaid hours: [Number].

    [ ] Tip-credit problem (tipped employees only). My employer paid me a reduced cash wage of $[Cash wage] and claimed a tip credit, but [my tips plus cash wage did not reach the full minimum wage in one or more weeks / I was not notified of the tip credit in advance / I was required to share tips with non-tipped staff / I spent substantial time on non-tipped side work]. The tip credit was therefore invalid or insufficient for those weeks.

  The math:

    • Total hours actually worked in the period: [Number]
    • Total wages actually paid (after deductions): $[Amount]
    • My effective hourly wage: $[Amount paid ÷ hours] per hour
    • Legal minimum wage that applied: $[Rate] per hour
    • Minimum wages owed: [Total hours] × $[Rate] = $[Required]
    • SHORTFALL OWED: $[Required] − $[Paid] = **$[Total shortfall]**

  Legal basis:

  The Fair Labor Standards Act guarantees a wage floor that cannot be waived, and most states set a higher one that controls. The federal floor under 29 U.S.C. § 206(a)(1)(C) is $7.25 per hour. Wages must be paid "free and clear" — under 29 C.F.R. § 531.35, an employer cannot require an employee to bear costs (uniforms, tools, shortages, breakage) that cut the effective wage below the minimum in any workweek; doing so is treated as an unlawful "kick-back."

  [Pick the tier that applies to your state — strike the others.]

    [TIER A — Your state minimum wage is higher than the federal $7.25]
    My work is in [State], where the minimum wage is $[State rate] per hour as of [effective date]. The higher state rate controls. The full state minimum must be paid for every hour worked, including the off-the-clock time itemized above, and no deduction may reduce my effective wage below $[State rate]. [If applicable: Confirm the current rate at the state labor agency; many state rates adjust annually for inflation.]

    [TIER B — Your state follows the federal floor of $7.25]
    My work is in [State], which applies the federal minimum wage of $7.25 per hour under 29 U.S.C. § 206. Every hour worked, including the off-the-clock time above, must be paid at no less than $7.25, and no deduction may reduce my effective wage below that floor (29 C.F.R. § 531.35).

    [TIPPED EMPLOYEES — add this if a tip credit was claimed]
    Under 29 U.S.C. § 203(m), an employer may pay a reduced cash wage to a "tipped employee" (defined in § 203(t) as one who customarily receives more than $30 a month in tips) only if (1) the cash wage plus tips actually equals at least the full applicable minimum wage every workweek, and (2) the employer informed me of the tip-credit provisions in advance. Under federal law the cash wage may be no lower than $2.13 per hour and the tip credit may not exceed $5.12. Where my tips and cash wage did not reach the full minimum wage, my employer was required to make up the difference. [If in a no-tip-credit state such as California or Washington: My state does not permit any tip credit, so I was owed the full state minimum wage in cash regardless of tips.]

  Demand:

  Within [14] days of receipt of this letter, please pay me $[Total shortfall] in unpaid minimum wages for the period above, by [check / direct deposit to the account on file]. Please also confirm in writing that my pay practices going forward will comply with the applicable minimum wage.

  If you do not, I intend to pursue:
    • A wage claim with the [State Department of Labor / Labor Commissioner] and/or the U.S. Department of Labor, Wage and Hour Division (free to file);
    • A private action under 29 U.S.C. § 216(b), which makes an employer liable for the unpaid minimum wages "and in an additional equal amount as liquidated damages" — doubling the recovery — plus "a reasonable attorney's fee" and costs;
    • Any greater penalties available under [State] wage law.

  I would prefer to resolve this directly and promptly. Please treat this as a good-faith request to correct a pay error.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [pay stubs for the period; time records / schedule / clock-in records; photos or copies of deduction line items; tip records if applicable; any written pay policy or handbook section]`,
    howToUse: [
      "Send by certified mail with return receipt requested and email a copy to HR/payroll. The certified-mail receipt proves delivery and the date — important because the statute of limitations runs from when the wages were due, and a willful violation extends it (29 U.S.C. § 255(a)).",
      "Do the math before you send it. Add up every hour you actually worked in the period (including off-the-clock time), divide the wages you were actually paid by that number, and compare to the minimum wage that applied. The shortfall is your demand. Keep the worksheet — it is the spine of any later claim.",
      "Pick the right minimum-wage figure. If your state's minimum wage is higher than the federal $7.25 (most states are), use the STATE rate — that is the number you were owed. Verify the current rate at your state labor agency, since many states raise it every January 1 for inflation. Only use $7.25 if your state has no higher rate.",
      "Attach the contemporaneous records: pay stubs, time/clock records or your own log, and a copy of any deduction (uniform charge, register-shortage memo, breakage chit). For deductions, the highest-leverage point is simple — under 29 C.F.R. § 531.35 the employer cannot make you eat costs that push your effective wage below the minimum, period.",
      "Do not exaggerate hours or accuse anyone of fraud. Estimate off-the-clock time conservatively and label it an estimate; a credible, modest number is far more persuasive than a padded one. The most common mistake is sending a vague 'you underpaid me' note with no hour count and no rate — that is easy to ignore. Numbers, dates, and the statute are what get it paid.",
    ],
    legalContext: [
      "The minimum wage is a floor that cannot be contracted away, and it is enforced on an effective-rate basis: what matters is your total pay for the workweek divided by the hours you actually worked. The federal floor is set by the Fair Labor Standards Act, 29 U.S.C. § 206(a)(1)(C), at $7.25 per hour (the rate in effect since July 24, 2009). Most states set a higher minimum, and where a state (or city) rate is higher, the higher rate controls — the FLSA expressly does not preempt more generous state law. Three common scenarios push real pay below that floor: (1) off-the-clock work, where the employer doesn't count all hours worked — pre-shift setup, post-shift cleanup, mandatory meetings, working through an unpaid meal break, or after-hours calls; (2) illegal deductions; and (3) shorted final hours. In each case the remedy is the same: you are owed the difference between what you were paid and what the applicable minimum wage required for the hours you worked.",
      "Deductions are the most misunderstood piece. Under 29 C.F.R. § 531.35, wages must be paid 'free and clear,' and 'the wage requirements of the Act will not be met where the employee \"kicks-back\" directly or indirectly to the employer or to another person for the employer's benefit the whole or part of the wage delivered to the employee.' In plain terms: an employer may not require you to pay for uniforms, tools, cash-register shortages, customer walkouts, or breakage if doing so drops your effective wage below the minimum for that workweek. Such costs are treated as a kick-back of wages to the employer. (Many states go further and bar these deductions outright, regardless of whether you fall below minimum wage.) The same effective-rate logic applies to your final paycheck — every hour through your last day counts.",
      "Tipped employees have a specific framework. Under 29 U.S.C. § 203(m), an employer may count a limited amount of an employee's tips toward the minimum-wage obligation (the 'tip credit'), but only for a 'tipped employee' — defined in 29 U.S.C. § 203(t) as one 'who customarily and regularly receives more than $30 a month in tips' — and only if two conditions are met: the cash wage plus tips actually received equals at least the full minimum wage every workweek, and the employer told the employee about the tip-credit provisions in advance. Federally, the direct cash wage may be no lower than $2.13 per hour and the tip credit may not exceed $5.12 ($7.25 − $2.13). If tips fall short in a given week, the employer must make up the difference. Several states — including California and Washington — prohibit any tip credit, so tipped workers there must be paid the full state minimum in cash before tips. Where a tip credit is misused (no advance notice, tips that never reach the minimum, or invalid tip pooling), the credit is lost and the full minimum wage is owed.",
      "The remedy is what gives this letter teeth. Under 29 U.S.C. § 216(b), an employer who fails to pay the minimum wage is 'liable to the employee or employees affected in the amount of their unpaid minimum wages ... and in an additional equal amount as liquidated damages' — that is, double the back wages — and the court 'shall ... allow a reasonable attorney's fee to be paid by the defendant, and costs of the action.' The doubling and mandatory fee-shifting are why even modest minimum-wage claims are economically worth pursuing and why employers settle them. The deadline matters: under 29 U.S.C. § 255(a), an FLSA claim generally must be filed within two years, extended to three years for a willful violation. State wage laws often carry their own (sometimes longer) limitations periods and additional penalties, so a state claim may be available even if the federal window is tight.",
    ],
    stateNotes: [
      {
        state: "California (Tier A — no tip credit)",
        note: "$16.90/hr statewide as of Jan. 1, 2026 (many cities/industries higher; fast food $20, certain health care $25). California prohibits any tip credit — tipped employees must receive the full minimum wage in cash plus their tips. Verify current rate at dir.ca.gov.",
      },
      {
        state: "Washington (Tier A — no tip credit)",
        note: "$17.13/hr as of Jan. 1, 2026 (Seattle, SeaTac, Tukwila and others higher). Washington allows no tip credit — full state minimum in cash before tips. Rate adjusts annually for CPI.",
      },
      {
        state: "New York (Tier A)",
        note: "As of Jan. 1, 2026: $17.00/hr downstate (NYC, Long Island, Westchester) and $16.00/hr in the rest of the state. Tip credits allowed for certain industries at set cash-wage rates; rate indexes to CPI after 2026.",
      },
      {
        state: "Colorado (Tier A)",
        note: "$15.16/hr as of Jan. 1, 2026 (Denver and some localities higher). Tip credit capped at $3.02 (tipped cash wage $12.14); tips plus cash must reach the full minimum. Adjusts annually for inflation.",
      },
      {
        state: "Massachusetts (Tier A)",
        note: "$15.00/hr (unchanged for 2026). Service (tipped) rate $6.75, valid only if tips bring the worker to at least $15.00/hr each shift; employer must make up any shortfall.",
      },
      {
        state: "Florida (Tier A)",
        note: "$14.00/hr through Sept. 29, 2026, then $15.00/hr from Sept. 30, 2026 (Fla. Const. art. X, § 24). Tipped cash wage $10.98 (rising to $11.98), reflecting the constitutional $3.02 tip credit.",
      },
      {
        state: "Illinois (Tier A)",
        note: "$15.00/hr for workers 18+ (unchanged for 2026); Chicago and Cook County higher. Tipped cash wage $9.00 (60% of minimum), valid only if tips bring the worker to the full minimum.",
      },
      {
        state: "Texas / Georgia and ~18 other states (Tier B — federal floor)",
        note: "Apply the federal minimum of $7.25/hr under 29 U.S.C. § 206. (Georgia's state law lists $5.15, but FLSA-covered employers must pay $7.25.) Federal tipped cash wage $2.13, max tip credit $5.12.",
      },
      {
        state: "All other states (default)",
        note: "If your state minimum exceeds $7.25, that higher figure is what you were owed — confirm the current number at your state labor department, as most rates rise every January 1. If your state has no higher rate, the federal $7.25 floor under 29 U.S.C. § 206 applies. The 29 C.F.R. § 531.35 'free and clear' rule applies everywhere.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores the demand, file a wage claim — it is free and you do not need a lawyer to start. You can file with the U.S. Department of Labor, Wage and Hour Division (which enforces the FLSA), or with your state labor agency / labor commissioner (often faster and able to apply a higher state minimum and state penalties). For a private suit, 29 U.S.C. § 216(b) doubles the back wages as liquidated damages and shifts your reasonable attorney's fees and costs to the employer, which is why employment plaintiff's firms take even small minimum-wage cases on contingency. Mind the clock: the FLSA limitations period is two years, or three for a willful violation (29 U.S.C. § 255(a)); many state wage laws run longer and add their own penalties. If you suspect the underpayment hit co-workers too, a collective or class action under § 216(b) substantially raises the stakes and the likelihood of a lawyer taking it.",
    relatedSlugs: [
      "unpaid-overtime-demand",
      "final-paycheck-demand",
      "wage-statement-violation-demand",
      "meal-rest-break-premium-demand",
      "expense-reimbursement-demand",
      "pto-vacation-payout-demand",
    ],
    faqs: [
      {
        question: "My state minimum wage is higher than $7.25 — which one do I use?",
        answer:
          "The higher one. The FLSA's $7.25 (29 U.S.C. § 206) is only a floor and it does not preempt more generous state or local law, so if your state or city sets a higher minimum, that is the rate you were owed. Most states are above $7.25 and many raise the figure every January 1, so confirm the current number on your state labor agency's site before you fill in the letter.",
      },
      {
        question: "They made me pay for my uniform / a register shortage / a customer who walked out. Is that legal?",
        answer:
          "Not if it dropped your pay below minimum wage that week. Under 29 C.F.R. § 531.35, wages must reach you 'free and clear,' and an employer cannot require you to absorb costs for its benefit that cut your effective wage below the minimum — that is treated as an unlawful kick-back. Many states ban deductions for shortages, walkouts, and breakage outright, even if you stay above minimum.",
      },
      {
        question: "I'm a tipped worker. Don't tips count toward minimum wage?",
        answer:
          "Only under strict conditions. Under 29 U.S.C. § 203(m) an employer can take a tip credit only if your cash wage plus tips actually reaches the full minimum wage every week and you were told about the tip credit in advance; the federal cash wage floor is $2.13 and the credit can't exceed $5.12. If tips fall short, the employer must make up the difference. Some states (e.g., California, Washington) ban tip credits entirely, so you're owed the full state minimum in cash before tips.",
      },
      {
        question: "What is 'off-the-clock' work and does it really count?",
        answer:
          "It's time you worked but weren't paid for — pre-shift setup, post-shift closing, mandatory meetings, working through an unpaid meal break, or required after-hours calls and messages. It counts. The minimum wage is measured against all hours actually worked, so unpaid hours that drag your effective rate below the minimum are recoverable. Estimate the time conservatively and keep any records (schedules, messages, your own log).",
      },
      {
        question: "How much can I actually recover, and how long do I have?",
        answer:
          "Under 29 U.S.C. § 216(b) you can recover the unpaid wages PLUS an equal amount as liquidated damages (double), plus your reasonable attorney's fees and costs if you sue and win. The deadline under 29 U.S.C. § 255(a) is two years, or three years for a willful violation. State wage laws often allow longer windows and extra penalties, so check both.",
      },
    ],
    keywords: [
      "paid less than minimum wage",
      "employer not paying minimum wage",
      "off the clock work not paid",
      "illegal paycheck deductions minimum wage",
      "uniform deduction below minimum wage",
      "tipped employee not making minimum wage",
      "how to get unpaid wages from employer",
      "minimum wage demand letter",
      "FLSA minimum wage complaint",
      "did not get paid for all hours worked",
    ],
    publishedAt: "2026-06-26",
  },
  {
    slug: "unpaid-overtime-demand",
    category: "employer",
    title: "Unpaid Overtime Demand Letter to Employer (FLSA 29 U.S.C. § 207 + State OT Tiers)",
    metaDescription:
      "Worked over 40 hours and not paid time-and-a-half? Free demand letter citing the FLSA (29 U.S.C. § 207), double damages under § 216(b), plus CA, AK, NV, CO daily-overtime laws.",
    lede:
      "You worked the hours. They paid straight time, or salaried you out of overtime, or called you 'exempt' when you aren't. Federal law (the FLSA) guarantees time-and-a-half over 40 hours a week, and several states pay overtime by the day. This letter cites the exact statute, calculates what you're owed, and demands it — before you ever need a lawyer.",
    body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Payroll]
  [Employer Address]

  cc: [Direct supervisor]

  Sent via certified mail, return receipt requested
  (Copy also emailed to HR / payroll contact)

  Re: Demand for Unpaid Overtime Wages — [Pay periods / dates] — $[Total Amount]

  To Human Resources:

  I am writing to demand payment of unpaid overtime wages I earned working for [Employer] between [Start date] and [End date]. During this period I regularly worked more than 40 hours in a workweek (and, where noted below, more than the daily limit my state sets) but was not paid the overtime premium the law requires.

  Employment details:
    • Position / title: [Title]
    • Classification on my paystub: [Hourly / Salaried "exempt" / Salaried non-exempt / "Independent contractor" / 1099]
    • Pay rate: $[Hourly rate], or salary of $[Annual salary] (= $[Annual salary ÷ 2,080] per hour for a 40-hour week)
    • How I tracked my hours: [Timeclock / app / emails and Slack timestamps / my own contemporaneous log, attached]

  Overtime worked and amount owed:

  | Workweek | Total hours | Hours over the limit | Regular rate | OT rate (1.5× or 2×) | OT owed |
  |----------|-------------|----------------------|--------------|----------------------|---------|
  | [Wk of MM/DD] | [e.g., 52] | [12] | $[Rate] | $[Rate × 1.5] | $[Amount] |
  | [Wk of MM/DD] | [50] | [10] | $[Rate] | $[Rate × 1.5] | $[Amount] |
  | [Wk of MM/DD] | [48] | [8] | $[Rate] | $[Rate × 1.5] | $[Amount] |
  | TOTAL | | | | | $[Total OT owed] |

  Legal basis:

  [Everyone starts with the federal floor. Then add the state tier that applies to you and strike the rest.]

    [FEDERAL FLOOR — applies in every state]
    Under the Fair Labor Standards Act, 29 U.S.C. § 207(a)(1), a covered employer may not employ a non-exempt employee for more than 40 hours in a workweek unless the employee receives overtime "at a rate not less than one and one-half times the regular rate at which he is employed" for the excess hours. My regular rate includes not just my base wage but also nondiscretionary bonuses and shift differentials, which must be folded in before the 1.5× multiplier is applied.

    [MISCLASSIFICATION — use this if you were called "exempt," "salaried," or an "independent contractor"]
    Being paid a salary does not, by itself, make an employee exempt from overtime. The executive, administrative, and professional ("white-collar") exemption under 29 U.S.C. § 213(a)(1) and 29 C.F.R. Part 541 applies only if BOTH a salary test and a duties test are met. The salary level is $684 per week ($35,568 per year) under 29 C.F.R. § 541.600, and the employee's actual day-to-day job duties must satisfy the executive, administrative, or professional duties test in 29 C.F.R. §§ 541.100, 541.200, or 541.300. A job title, a salary, or a signed "exempt" acknowledgment is not enough. My actual duties were [describe: e.g., following set procedures, no authority to hire/fire, no independent discretion on significant matters], which do not meet the duties test, so I was and am entitled to overtime.

    [DAILY-OVERTIME STATE — add the cite for your state]
    [CALIFORNIA] In addition to the federal weekly rule, Cal. Lab. Code § 510(a) requires 1.5× the regular rate for all hours over 8 (up to 12) in a workday and the first 8 hours on the seventh consecutive day of work, and 2× ("double time") for hours over 12 in a workday and for hours over 8 on the seventh consecutive day. California's white-collar exemption also has a higher bar: under Cal. Lab. Code § 515(a) an exempt employee must earn a monthly salary of at least twice the state minimum wage for full-time (40-hour) work AND be primarily engaged in exempt duties.
    [ALASKA] Under AS 23.10.060, overtime at 1.5× is owed for hours over 8 in a day or over 40 in a week. (Employers with fewer than four employees are exempt.)
    [NEVADA] Under NRS 608.018, an employee paid less than 1.5× the state minimum wage must receive 1.5× for hours over 8 in a workday as well as over 40 in a week; an employee paid 1.5× the minimum wage or more receives overtime only over 40 hours per week.
    [COLORADO] Under the Colorado COMPS Order #40 (7 CCR 1103-1), overtime at 1.5× is owed for hours over 40 in a week, over 12 in a workday, OR any 12 consecutive hours — whichever calculation pays the most.
    [ALL OTHER STATES] My state follows the federal standard: overtime is owed for hours over 40 in a workweek under 29 U.S.C. § 207.

  Demand:

  Within [14] days of receipt of this letter, please pay the $[Total OT owed] in unpaid overtime identified above by [check / direct deposit to the account on file], and correct my classification going forward so that overtime is paid as earned.

  If you do not, I intend to pursue all remedies available, which include:
    • A wage complaint with the U.S. Department of Labor, Wage and Hour Division, and/or my state labor agency (free to file);
    • A private suit under 29 U.S.C. § 216(b), which makes an employer liable for the unpaid overtime PLUS an equal amount as liquidated (double) damages, and requires the court to award my reasonable attorney's fees and costs;
    • The full lookback period: under 29 U.S.C. § 255(a), I may recover two years of back overtime — three years if the violation was willful.

  I would prefer to resolve this directly and promptly. I have kept a complete copy of this letter and the records below.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [time records / contemporaneous hours log; paystubs for the periods at issue; offer letter or job description showing duties; any written "exempt" or "independent contractor" classification; bonus/commission records that affect the regular rate]`,
    howToUse: [
      "Send by certified mail with return receipt requested, and email a copy to HR/payroll the same day. The certified-mail green card is your proof of delivery and the date that starts the clock on your demand. Keep a copy of everything before you send — do not store the only copy on a work device they can lock you out of.",
      "Build the hours table before anything else. For each workweek, list total hours, the hours over the limit, your regular rate, the overtime rate (1.5× or, in California, 2× over 12/day), and the dollars owed. If you don't have official time records, a contemporaneous log plus corroborating emails, Slack/Teams timestamps, badge swipes, or photos of schedules is strong evidence — the law shifts the burden toward the employer when they failed to keep accurate records.",
      "Pick your state tier correctly. Most states only owe overtime past 40 hours in a week (the federal rule). Four states pay overtime by the DAY: California (over 8/day, double time over 12), Alaska (over 8/day), Nevada (over 8/day if you earn under 1.5× minimum wage), and Colorado (over 12/day or any 12 consecutive hours). If you're in a daily-overtime state, you may be owed money even in weeks you worked 40 hours or fewer.",
      "If you were salaried or called 'exempt,' attack the duties test, not just the salary. The single highest-leverage move is to spell out what you actually did all day. A salary above $684/week ($35,568/yr) is necessary but not sufficient — the employer also has to prove your real duties fit the executive, administrative, or professional definition in 29 C.F.R. Part 541. Describe routine, supervised, non-discretionary work and you've put the exemption in doubt.",
      "Don't undercut yourself. Don't sign any 'final settlement,' release, or revised timesheet before you've been paid in full. Don't accuse anyone of a crime, don't threaten to 'report them to the IRS,' and don't set a 48-hour deadline (it reads as unreasonable). State the number, cite the statute, give them 14 days, and let § 216(b)'s double-damages-plus-fees exposure do the persuading.",
    ],
    legalContext: [
      "Overtime in the United States runs on two layers: a federal floor that covers nearly everyone, and stronger state rules on top of it. The federal floor is the Fair Labor Standards Act. 29 U.S.C. § 207(a)(1) provides that a covered, non-exempt employee who works more than 40 hours in a workweek must be paid for the excess hours 'at a rate not less than one and one-half times the regular rate at which he is employed.' The 'regular rate' is not just base pay — it folds in nondiscretionary bonuses, shift differentials, and most commissions, so the time-and-a-half is calculated on a blended number that is often higher than the hourly wage on the paystub. The workweek is a fixed, recurring 168-hour period; an employer cannot average two weeks together to wipe out overtime (a 50-hour week followed by a 30-hour week is still 10 hours of overtime).",
      "The enforcement teeth are what make a demand letter work. 29 U.S.C. § 216(b) makes a violating employer 'liable to the employee... in the amount of their... unpaid overtime compensation... and in an additional equal amount as liquidated damages' — in plain terms, double the back overtime — and the statute commands that the court 'shall... allow a reasonable attorney's fee to be paid by the defendant, and costs of the action.' Liquidated damages are the default; an employer avoids them only by proving it acted in good faith and on reasonable grounds. Mandatory fee-shifting is why employment lawyers take these cases on contingency and why even a modest overtime claim is worth real money to an employer once it's in writing. The lookback period is set by 29 U.S.C. § 255(a): two years of back overtime, extended to three years if the violation was 'willful' — so the longer the employer ignores a clear written demand, the easier 'willful' becomes to show.",
      "The most common way employees lose overtime is misclassification, and a demand letter should meet it head-on. Paying a salary does not switch off overtime. The 'white-collar' exemption in 29 U.S.C. § 213(a)(1) and its implementing rules at 29 C.F.R. Part 541 require BOTH a salary test and a duties test. The salary level under 29 C.F.R. § 541.600 is $684 per week ($35,568 per year). (Note: a 2024 DOL rule that would have raised this to $844 and then $1,128 per week was struck down by a federal court in late 2024 and formally rescinded by the Department of Labor on May 14, 2026 — the live federal number is back to $684.) Crucially, clearing the salary bar is not enough: the employee's actual duties must satisfy the executive (manages a department, directs two or more employees, real hiring/firing authority — § 541.100), administrative (office work directly related to management or general business operations, exercising discretion and independent judgment on significant matters — § 541.200), or professional (advanced knowledge in a field of science or learning, usually requiring an advanced degree — § 541.300) test. Job titles, a salary, and a signed 'exempt' acknowledgment carry no legal weight; the work performed controls. Misclassifying a worker as an 'independent contractor' (1099) is the same problem in a different costume — economic-reality factors, not the label, decide whether someone is an employee owed overtime.",
      "Several states go beyond the 40-hour federal rule, and that is where extra money often hides. California is the strongest: Cal. Lab. Code § 510(a) requires 1.5× for hours over 8 (up to 12) in a single workday and the first 8 hours on the seventh consecutive workday, and 2× ('double time') for hours over 12 in a day and over 8 on the seventh consecutive day — and § 515(a) sets a tougher exemption bar (a salary of at least twice the state minimum wage for full-time work). Alaska (AS 23.10.060) pays 1.5× over 8 hours a day or 40 a week, with an exemption for employers of fewer than four. Nevada (NRS 608.018) uses a two-tier rule: workers paid under 1.5× the state minimum wage get daily overtime past 8 hours, while higher-paid workers get only weekly overtime past 40. Colorado's COMPS Order #40 (7 CCR 1103-1) pays 1.5× for hours over 40 in a week, over 12 in a day, OR any 12 consecutive hours, whichever pays the most. Everywhere else, the federal 40-hour rule is the standard, and the same FLSA remedies — double damages and attorney's fees under § 216(b) — apply.",
    ],
    stateNotes: [
      {
        state: "California (daily + double time)",
        note: "Cal. Lab. Code § 510(a): 1.5× over 8 hrs/day (up to 12) + first 8 hrs on the 7th consecutive workday; 2× over 12 hrs/day and over 8 hrs on the 7th day. Exemption bar is higher under § 515(a): salary ≥ 2× state minimum wage for full-time work + primarily exempt duties. SOL is 3 yrs (4 with the Unfair Competition Law).",
      },
      {
        state: "Alaska (daily overtime)",
        note: "AS 23.10.060: 1.5× for hours over 8 in a day or over 40 in a week. Employers with fewer than four employees in the regular course of business are exempt.",
      },
      {
        state: "Nevada (two-tier daily)",
        note: "NRS 608.018: employees paid less than 1.5× the state minimum wage get 1.5× over 8 hrs/day (and over 40/week); employees paid 1.5× minimum wage or more get overtime only over 40 hrs/week.",
      },
      {
        state: "Colorado (daily + consecutive-hours)",
        note: "COMPS Order #40, 7 CCR 1103-1: 1.5× for hours over 40/week, over 12/day, OR any 12 consecutive hours — whichever yields the highest pay. Cannot average weeks together.",
      },
      {
        state: "New York / Washington / and other higher-threshold states",
        note: "Weekly overtime follows the FLSA (over 40 hrs/week at 1.5×), but the salary needed to be EXEMPT is higher than the federal $684/week. If your salary is below your state's exempt threshold, you are non-exempt and owed overtime regardless of title. Check your state labor department's current exempt salary figure.",
      },
      {
        state: "All other states (federal default)",
        note: "Overtime owed at 1.5× the regular rate for hours over 40 in a workweek under the FLSA, 29 U.S.C. § 207. Remedies under § 216(b) (double damages + attorney's fees) and the 2/3-year lookback under § 255(a) apply nationwide.",
      },
    ],
    ifThisDoesntWork:
      "If the employer ignores or refuses the demand, you have a free public path and a stronger private one. Free: file a complaint with the U.S. Department of Labor, Wage and Hour Division (it investigates and can recover back wages without you hiring anyone), or with your state labor agency — California, Colorado, and many others have wage-claim divisions that adjudicate overtime claims administratively. Private: because 29 U.S.C. § 216(b) makes the employer pay double the back overtime PLUS your attorney's fees and costs, employment lawyers routinely take these on contingency at no upfront cost to you — a clear hours table and the certified-mail receipt make a case easy to evaluate. Move promptly: under 29 U.S.C. § 255(a) the clock is two years (three for willful violations), and each additional unpaid payday can fall off the back end, so every month of delay can shrink what you can recover.",
    relatedSlugs: [
      "unpaid-minimum-wage-demand",
      "final-paycheck-demand",
      "meal-rest-break-premium-demand",
      "wage-statement-violation-demand",
      "expense-reimbursement-demand",
      "pto-vacation-payout-demand",
    ],
    faqs: [
      {
        question: "I'm salaried — doesn't that mean I'm not owed overtime?",
        answer:
          "No. A salary alone does not make you exempt. Under 29 U.S.C. § 213(a)(1) and 29 C.F.R. Part 541, your employer must satisfy BOTH a salary test ($684/week, or $35,568/year) AND a duties test based on what you actually do. If your real job is routine, closely supervised, or lacks genuine independent judgment, you are likely non-exempt and owed time-and-a-half for hours over 40 — no matter what your offer letter says.",
      },
      {
        question: "My boss says overtime has to be approved in advance, and mine wasn't. Do I still get paid?",
        answer:
          "Yes. Under the FLSA, if the employer knew or had reason to know you were working, the hours are compensable even if no one pre-approved them. An employer can discipline you for breaking an overtime-approval rule, but it cannot refuse to pay for hours you actually worked. 'Off the clock' work, working through lunch, and answering email after hours all count.",
      },
      {
        question: "Can my employer give me 'comp time' instead of overtime pay?",
        answer:
          "Generally no, not in the private sector. Comp time (paid time off instead of overtime wages) is lawful mainly for government employers. A private company must pay overtime in money in the same pay period it was earned. Banking your overtime as future days off is usually a violation.",
      },
      {
        question: "How far back can I claim, and how much can I recover?",
        answer:
          "Under 29 U.S.C. § 255(a) you can recover two years of back overtime — three years if the violation was willful. And under § 216(b) the employer is liable for that unpaid overtime PLUS an equal amount as liquidated (double) damages, plus your reasonable attorney's fees and costs. A $5,000 overtime shortfall can become $10,000 plus fees.",
      },
      {
        question: "I work over 8 hours some days but never hit 40 in a week — am I owed anything?",
        answer:
          "It depends on your state. Under the federal rule, no — overtime triggers at 40 hours per week. But in California (over 8/day, double time over 12), Alaska (over 8/day), Nevada (over 8/day if you earn under 1.5× minimum wage), and Colorado (over 12/day or any 12 consecutive hours), you can be owed daily overtime even in a week under 40 hours.",
      },
      {
        question: "What if my employer didn't keep track of my hours?",
        answer:
          "That helps you. Employers are required to keep accurate time records. When they don't, courts let employees prove hours by a reasonable estimate — a contemporaneous log, calendar entries, emails, login/badge data, or text timestamps. The gap in the employer's records works against the employer, not against you, so reconstruct your hours as carefully as you can and keep the backup.",
      },
    ],
    keywords: [
      "employer didn't pay overtime",
      "unpaid overtime demand letter",
      "how to get unpaid overtime pay",
      "salaried but working overtime not paid",
      "misclassified as exempt overtime",
      "time and a half over 40 hours",
      "FLSA overtime claim",
      "owed overtime back pay",
      "daily overtime California 8 hours",
      "employer says I'm exempt but I'm not",
    ],
    publishedAt: "2026-06-26",
  },
  {
      slug: "wage-statement-violation-demand",
      category: "employer",
      title: "Wage Statement (Pay Stub) Violation Demand Letter (Cal. Lab. Code § 226 + State Tiers)",
      metaDescription:
        "Pay stub missing your hours, rates, or employer's legal name? Free demand letter citing California Lab. Code § 226 ($50/$100 penalties up to $4,000 + fees), NY Labor Law § 195(3) + more.",
      lede:
        "Your pay stub is missing required information — hours worked, the rates behind the math, your employer's legal name, or the deductions. In a handful of states that's a statutory violation with real penalties and attorney's fees. This letter demands compliant itemized wage statements and the penalties the law already provides.",
      body: `[Your Full Name]
  [Address]
  [City, State ZIP]
  [Phone] [Email]

  [Date]

  [Employer Legal Name — Human Resources / Payroll]
  [Employer Address]

  cc: [Direct supervisor, payroll manager]

  Sent via certified mail, return receipt requested
  (Copy also emailed to HR / payroll contact)

  Re: Demand for Compliant Itemized Wage Statements — Pay Periods [Start Date] to [End Date]

  To Human Resources / Payroll:

  I am writing to demand that [Employer] provide accurate, itemized wage statements (pay stubs) that comply with the law, and to put you on notice of the statutory penalties for the deficient or missing statements I have received.

  What is wrong with my wage statements:

  [Check every box that applies. Attach the deficient stubs.]
    • [ ] No wage statement provided at all for one or more pay periods.
    • [ ] Total hours worked is missing or wrong.
    • [ ] The hourly rate(s) in effect and the hours worked at each rate are not shown.
    • [ ] Gross wages and/or net wages are missing or do not reconcile.
    • [ ] Deductions are not itemized.
    • [ ] The inclusive dates of the pay period are missing.
    • [ ] The employer's legal name and address are missing or wrong.
    • [ ] My name and the last four digits of my SSN / employee ID are missing.
    • [ ] [Other: ________________________________]

  Affected pay periods:
    • [Pay period date] — [what was missing/wrong]
    • [Pay period date] — [what was missing/wrong]
    • [Pay period date] — [what was missing/wrong]

  Legal basis:

  [Pick the tier that matches your state — strike the others.]

    [TIER A — Itemized stub required, with statutory penalties + attorney's fees]
    Under [Cal. Lab. Code § 226 / N.Y. Labor Law § 195(3)], my employer is required to furnish an accurate, itemized wage statement with every payment of wages. [California: § 226(a) requires nine specific items — gross wages earned; total hours worked; piece-rate units and rate; all deductions; net wages earned; the inclusive dates of the pay period; my name and the last four digits of my SSN or an employee ID; the name and address of the legal entity that is the employer; and all applicable hourly rates in effect and the corresponding hours worked at each rate.] Because the statement(s) above are missing required information, I am entitled to recover, under [Cal. Lab. Code § 226(e): the greater of actual damages or $50 for the initial pay period and $100 per pay period for each subsequent violation, up to an aggregate of $4,000, plus costs and reasonable attorney's fees / N.Y. Labor Law § 198(1-d): $250 for each workday the violation occurred, up to $5,000, plus costs and reasonable attorney's fees].

    [TIER B — Itemized stub required by statute, but no private statutory penalty (agency-enforced)]
    Under [820 ILCS 115/10 (Illinois) / Minn. Stat. § 181.032 (Minnesota) / WAC 296-126-040 (Washington) / Tex. Lab. Code § 62.003 (Texas)], my employer is required to furnish an itemized statement of [deductions / earnings] for each pay period showing [the pay basis, rate(s) of pay, gross wages, and all deductions / the items listed in the statute]. The statement(s) above do not comply. I am requesting corrected statements; if this is not cured, I will file a complaint with the state labor agency, which can compel compliance and assess penalties.

    [TIER C — No state pay-stub statute (federal recordkeeping floor only)]
    My state does not have a specific pay-stub statute. The federal Fair Labor Standards Act still requires my employer to "make, keep, and preserve" accurate records of my wages and hours (29 U.S.C. § 211(c); 29 C.F.R. § 516.2). I am requesting a complete copy of those payroll records for the pay periods listed above so I can verify I have been paid correctly.

  Demand:

  Within [21] days of receipt of this letter, please:
    1. Provide corrected, fully itemized wage statements for every affected pay period listed above; and
    2. [Tier A only] Pay the statutory penalties owed for the deficient or missing statements under [Cal. Lab. Code § 226(e) / N.Y. Labor Law § 198(1-d)]; and
    3. Confirm in writing that all future wage statements will include every item the law requires.

  If you do not, I will pursue:
    • A wage claim or wage-statement complaint with the [California Labor Commissioner (DLSE) / New York Department of Labor / your State Department of Labor];
    • A private action for the statutory penalties, costs, and attorney's fees the statute provides [Cal. Lab. Code § 226(e) / N.Y. Labor Law § 198(1-d)];
    • [California only] Penalties under the Private Attorneys General Act for the same violations.

  Sincerely,

  [Your Signature]
  [Your Printed Name]

  Enclosures: [copies of the deficient/missing wage statements; a list of affected pay periods; any prior request you made for a corrected stub; relevant employer pay policy if any]`,
      howToUse: [
        "Send by certified mail with return receipt requested AND email payroll/HR. The certified-mail receipt proves the date they received notice — which matters because some states (California) tie penalties to a 'knowing and intentional' failure, and a dated demand they ignored is strong evidence of that.",
        "Attach the actual deficient stubs and circle what's missing. The whole claim turns on the document the employer itself generated. For each affected pay period, write one line: the date and exactly which required item is missing or wrong (hours, rates, deductions, employer's legal name, etc.).",
        "Pick your state tier correctly. Tier A (California § 226, New York § 195(3)) gives you a private claim for statutory penalties PLUS attorney's fees — that's the leverage. Tier B (Illinois, Minnesota, Washington, Texas) requires a stub but routes enforcement through the state agency rather than a penalty you collect yourself. Tier C states have no stub law; you fall back to requesting the employer's FLSA payroll records.",
        "California specifically: § 226(a) lists nine required items and § 226(e) makes the math automatic — $50 for the first defective pay period and $100 for each one after, capped at $4,000, plus your attorney's fees. You're 'deemed to suffer injury' if you can't tell from the stub what you were paid and why, so you do not have to prove out-of-pocket loss.",
        "Don't overstate the dollars. The § 226(e) penalty is per pay period (not per missing item) and caps at $4,000; New York caps at $5,000. Demanding a wild number undercuts you. State the cap accurately, attach the stubs, and let the fee-shifting provision do the persuading.",
      ],
      legalContext: [
        "There is no federal right to a pay stub. The Fair Labor Standards Act requires employers to 'make, keep, and preserve' records of wages, hours, and other conditions of employment (29 U.S.C. § 211(c)), and 29 C.F.R. § 516.2 spells out what those records must contain — name, address, hours worked each workday and workweek, regular rate, total straight-time and overtime earnings, total additions and deductions, total wages each pay period, and the date and pay period covered. But the FLSA only obligates the employer to KEEP those records; it does not require the employer to hand the employee a wage statement. Whether you are entitled to an itemized pay stub at all — and what it must contain — is governed entirely by state law, which falls into three tiers: (A) states that require an itemized stub and back it with statutory penalties you can collect; (B) states that require an itemized stub but enforce it through a labor agency rather than a private penalty; and (C) states with no pay-stub statute at all.",
        "California Labor Code § 226 is the strongest wage-statement law in the country and the doctrinal anchor for this letter. § 226(a) requires the employer to furnish, at the time of each wage payment, an accurate itemized statement showing nine items: (1) gross wages earned; (2) total hours worked; (3) the number of piece-rate units earned and the applicable piece rate; (4) all deductions; (5) net wages earned; (6) the inclusive dates of the pay period; (7) the employee's name and the last four digits of the social security number or an employee identification number; (8) the name and address of the legal entity that is the employer; and (9) all applicable hourly rates in effect during the pay period and the corresponding number of hours worked at each hourly rate. § 226(e)(1) provides the remedy: an employee who suffers injury from a 'knowing and intentional' failure to comply may recover 'the greater of all actual damages or fifty dollars ($50) for the initial pay period in which a violation occurs and one hundred dollars ($100) per employee for each violation in a subsequent pay period, not to exceed an aggregate penalty of four thousand dollars ($4,000),' plus costs and reasonable attorney's fees. Critically, § 226(e)(2) deems the employee to 'suffer injury' whenever the employer fails to provide the statement, or fails to include accurate, complete information that lets the employee readily determine the required amounts and the employer's identity — so you generally do not have to prove a dollar loss, only that a required item was missing or wrong.",
        "New York is the other Tier A state. Labor Law § 195(3) — part of the Wage Theft Prevention Act — requires the employer to 'furnish each employee with a statement with every payment of wages' listing the dates of work covered; the employee's name; the employer's name, address, and phone; the rate(s) and basis of pay; gross wages; deductions; any allowances claimed as part of the minimum wage; and net wages. For non-exempt employees the statement must also show the regular and overtime rates and the number of regular and overtime hours worked; for piece-rate employees, the applicable piece rate(s) and number of pieces. The penalty is in Labor Law § 198(1-d): an employee not provided compliant statements may recover damages of $250 for each workday the violation occurred or continued, capped at a total of $5,000, together with costs and reasonable attorney's fees (plus possible injunctive and declaratory relief). Like California, the fee-shifting is what makes the claim economically real.",
        "Most states sit in Tier B: they require an itemized stub but route enforcement through the labor agency rather than a private penalty you pocket. Illinois (820 ILCS 115/10) requires the employer to furnish 'an itemized statement of deductions made from [the employee's] wages for each pay period' and to keep wage records. Minnesota (Minn. Stat. § 181.032) requires an earnings statement at the end of each pay period listing the employee's name, rate(s) and basis of pay, allowances, total hours worked (for non-exempt employees), gross pay, a list of deductions, net pay, the pay-period end date, and the employer's legal/operating name, address, and phone number. Washington (WAC 296-126-040) requires an itemized statement showing the pay basis (hours or days worked), rate(s) of pay, gross wages, and all deductions for the pay period, identified by month, day, year, and payment date. Texas (Tex. Lab. Code § 62.003) requires a written earnings statement at the end of each pay period showing the employee's name, rate of pay, total pay earned, each deduction and its purpose, net pay, and hours worked or units produced — but provides no specific private penalty for a missing statement (and Texas's Minimum Wage Act exempts a range of employers). Finally, Tier C — states with no pay-stub statute at all — leaves only the FLSA recordkeeping floor; there the practical move is to demand the employer's payroll records under 29 U.S.C. § 211(c) / 29 C.F.R. § 516.2 so you can verify your pay, and to escalate any actual underpayment as a wage claim.",
      ],
      stateNotes: [
        {
          state: "California (Tier A)",
          note: "Cal. Lab. Code § 226. § 226(a) lists nine required items (gross wages, total hours, piece units/rate, deductions, net wages, pay-period dates, name + last 4 of SSN/ID, employer legal name/address, all hourly rates and hours at each). § 226(e): greater of actual damages or $50 first pay period / $100 each subsequent, capped at $4,000, plus costs and attorney's fees. § 226(e)(2): injury presumed when a required item is missing. PAGA also available.",
        },
        {
          state: "New York (Tier A)",
          note: "N.Y. Labor Law § 195(3) (Wage Theft Prevention Act): statement with every wage payment showing dates covered, employee name, employer name/address/phone, rate(s) and basis, gross/deductions/allowances/net, plus regular & OT rates and hours for non-exempt. § 198(1-d): $250 per workday in violation, capped at $5,000, plus costs and attorney's fees.",
        },
        {
          state: "Illinois (Tier B)",
          note: "820 ILCS 115/10 (Wage Payment and Collection Act). Employer must furnish each employee an itemized statement of deductions for each pay period and keep wage records. Enforced by the Illinois Department of Labor / private wage claim; no per-statement statutory penalty like CA/NY.",
        },
        {
          state: "Minnesota (Tier B)",
          note: "Minn. Stat. § 181.032. Earnings statement each pay period: name, rate(s)/basis, allowances, total hours (non-exempt), gross pay, deductions, net pay, pay-period end date, employer legal/operating name, address, phone. Employee may request a written copy on 24 hours' notice. Agency-enforced.",
        },
        {
          state: "Washington (Tier B)",
          note: "WAC 296-126-040. Itemized statement showing pay basis (hours/days worked), rate(s) of pay, gross wages, and all deductions for the pay period, identified by month, day, year, and payment date. Enforced by L&I; no per-statement private penalty.",
        },
        {
          state: "Texas (Tier B)",
          note: "Tex. Lab. Code § 62.003. Written earnings statement at end of each pay period: employee name, rate of pay, total pay earned, each deduction and its purpose, net pay, and hours worked (hourly) or units produced (piece rate). No specific private penalty for a missing statement; Minimum Wage Act exempts many employers.",
        },
        {
          state: "All other states (federal floor)",
          note: "No state pay-stub statute. The FLSA requires the employer only to KEEP wage/hour records (29 U.S.C. § 211(c); 29 C.F.R. § 516.2) — not to furnish a stub. Demand a copy of those payroll records to verify your pay, and escalate any actual underpayment as a wage claim.",
        },
      ],
      ifThisDoesntWork:
        "If the employer ignores the demand, the path depends on your tier. In California, file a wage-statement claim with the Labor Commissioner (DLSE) for free, or bring a private § 226(e) action — the mandatory attorney's fees make it viable on contingency, and many employees add Private Attorneys General Act (PAGA) claims that multiply exposure across the workforce; the limitations period is generally one year for the § 226 penalty (longer under PAGA / for the underlying wages). In New York, file with the NY Department of Labor or sue under § 198(1-d) ($250/workday up to $5,000 plus fees); NY's wage limitations period is six years. In Tier B states (IL, MN, WA, TX), file with the state labor agency, which can compel corrected statements and, in some states, assess civil penalties. In Tier C states, the wage-statement claim itself is weak — pivot to the underlying issue: if a defective stub is hiding an underpayment, that's a wage claim (state DOL or FLSA), where back wages, liquidated damages, and fee-shifting are the real leverage.",
      relatedSlugs: [
        "unpaid-overtime-demand",
        "unpaid-minimum-wage-demand",
        "final-paycheck-demand",
        "unpaid-commission-demand",
        "personnel-file-access-request",
        "expense-reimbursement-demand",
        "pto-vacation-payout-demand",
      ],
      faqs: [
        {
          question: "Do I have to prove I lost money to collect a pay-stub penalty?",
          answer:
            "In California, generally no. Labor Code § 226(e)(2) deems you to 'suffer injury' whenever the employer fails to provide a statement or leaves out required information you'd need to verify your pay — so a missing item is enough. You still have to show the failure was 'knowing and intentional,' which is why a dated demand letter they ignored helps. New York's § 198(1-d) penalty likewise runs per workday in violation without proof of out-of-pocket loss.",
        },
        {
          question: "My employer only gives stubs electronically. Is that legal?",
          answer:
            "Usually yes, if you can access and print them. California, Minnesota, and Washington all permit electronic wage statements as long as the employee can readily access and copy the required information. The violation isn't the format — it's missing or inaccurate required items. Focus your demand on what the stub fails to show, not on the fact that it's a PDF.",
        },
        {
          question: "What's actually required to be on my pay stub?",
          answer:
            "It varies by state. California (§ 226(a)) requires nine items, including total hours, all hourly rates with hours worked at each, all deductions, net and gross wages, the pay-period dates, and the employer's legal name and address. New York (§ 195(3)) requires similar items plus the employer's phone and, for non-exempt workers, regular and overtime rates and hours. Other states require a shorter list. Match your stub against your own state's statute in the State Notes above.",
        },
        {
          question: "My state isn't California or New York. Is this letter still worth sending?",
          answer:
            "Often yes. Illinois, Minnesota, Washington, and Texas all require an itemized stub, even though they enforce it through the labor agency rather than a penalty you collect personally. A clear written demand frequently gets the stubs corrected without any agency involvement. And if your state has no stub law at all, the letter pivots to demanding the FLSA payroll records (29 U.S.C. § 211(c)) you need to confirm you've been paid correctly.",
        },
        {
          question: "How far back can I go?",
          answer:
            "It depends on the state and the claim. California's § 226 penalty generally carries a one-year limitations period (longer for the underlying unpaid wages or under PAGA). New York's wage limitations period is six years. In Tier B states, the agency complaint windows vary. If a defective stub is masking unpaid wages, the wage claim itself usually has a longer window (two to three years federally under the FLSA, longer for willful violations), so don't let a short stub-penalty clock stop you from pursuing the real money.",
        },
      ],
      keywords: [
        "pay stub missing information",
        "employer won't give me a pay stub",
        "inaccurate pay stub California",
        "wage statement violation",
        "Labor Code 226 penalty",
        "pay stub doesn't show hours worked",
        "how to get my pay stubs from employer",
        "pay stub penalty California $4000",
        "New York wage statement law",
        "itemized pay statement requirements by state",
      ],
      publishedAt: "2026-06-26",
    },
];
