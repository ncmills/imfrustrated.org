import type { LetterTemplate } from "./types";

// Federal-law letters. Cites verified May 2026 against Cornell LII, CFPB.gov, HHS.gov, FTC.gov.

export const consumerLetters: LetterTemplate[] = [
  {
    slug: "debt-validation-request",
    category: "consumer",
    title: "Debt Validation Letter Template (FDCPA, 30-Day Window)",
    metaDescription:
      "A debt collector is trying to collect from you. Free FDCPA debt validation letter (15 U.S.C. § 1692g) that forces them to stop until they prove it.",
    lede:
      "A debt collector you don't recognize is trying to collect. Maybe you don't owe it. Maybe you do but the amount is wrong. Maybe it's so old you can't tell. The Fair Debt Collection Practices Act gives you 30 days to demand verification — and during that time the collector must stop.",
    body: `[Your Full Name]
[Your Mailing Address]
[City, State ZIP]

[Date]

[Debt Collector's Name]
[Debt Collector's Mailing Address — as listed on the validation notice]
[City, State ZIP]

Sent via certified mail, return receipt requested

Re: Debt Validation Request and Notice of Dispute
Account / Reference Number: [As stated on validation notice]
Alleged Creditor: [As stated on validation notice]
Alleged Amount: $[As stated on validation notice]

Dear Sir or Madam:

I am writing in response to your communication dated [Date of validation notice] regarding the above-referenced alleged debt. This letter is sent within 30 days of my receipt of your validation notice, as provided in 15 U.S.C. § 1692g(b).

Pursuant to 15 U.S.C. § 1692g(b), I dispute the validity of the alleged debt — in whole. I am requesting that you provide:

  1. Verification of the debt — including the original creditor's records showing the amount owed, the consumer to whom it relates, and an accounting of any payments, interest, fees, and credits since the itemization date used in your validation notice (consistent with 12 C.F.R. § 1006.34);
  2. A copy of any judgment obtained against me (if any) for the alleged debt; and
  3. The name and address of the original creditor, if different from the current creditor, per 15 U.S.C. § 1692g(a)(5).

Until you mail this verification to me, you are required to cease collection of this alleged debt under 15 U.S.C. § 1692g(b). That includes:

  • No phone calls;
  • No emails or text messages;
  • No demand letters;
  • No filing or pursuit of a lawsuit on this debt;
  • No reporting or continued reporting of this debt to any consumer reporting agency.

Please do not contact me about this alleged debt by telephone. All future communications regarding this matter must be in writing to the address above. This is also notice under 15 U.S.C. § 1692c(a)(1) that calls before 8:00 a.m. or after 9:00 p.m. local time are inconvenient.

If your records indicate any of the following, I am putting you on specific written notice now so that any future collection effort with knowledge of these facts may be evaluated under 15 U.S.C. § 1692e (false or misleading representations) and § 1692f (unfair practices):

  [Use any that apply, otherwise delete this section.]
  [ ] I do not recognize this debt and may be a victim of identity theft. I am separately filing an Identity Theft Report at IdentityTheft.gov.
  [ ] The alleged debt is beyond the statute of limitations in my state and is not legally enforceable.
  [ ] The alleged amount is incorrect.
  [ ] The debt was previously discharged in bankruptcy.
  [ ] I have already paid this debt — supporting documentation is enclosed.

If you fail to comply with the FDCPA — including by continuing collection without first mailing verification, contacting me by phone after this written notice, or reporting the disputed debt without indicating that it is disputed — I will pursue all available remedies under 15 U.S.C. § 1692k, including actual damages, statutory damages of up to $1,000 per individual action, and reasonable attorney's fees and costs.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [if any — proof of prior payment, bankruptcy discharge order, identity-theft report, etc.]`,
    howToUse: [
      "Send within 30 days of receiving the collector's validation notice. The 30-day clock under 15 U.S.C. § 1692g(b) is the trigger for the statutory cease-collection requirement — the collector must stop until they mail you verification. After 30 days you can still dispute, but the automatic cease no longer applies.",
      "Send by certified mail with return receipt requested. The return receipt is what proves they received your written dispute within the 30-day window.",
      "Send only to the debt collector's mailing address listed on the validation notice. Do not send to a phone number, do not respond by phone, do not text — under 15 U.S.C. § 1692g(b) the dispute must be in writing to trigger the cease-collection requirement.",
      "Do not include any admission that you owe the debt. The whole point of a validation letter is to put the burden on the collector to prove the debt. Failure to dispute is not an admission of liability under 15 U.S.C. § 1692g(c) — so even silence preserves more than admission.",
      "Keep paying any debts you do recognize as yours. The validation request only affects the specific debt referenced in the letter; it doesn't change anything about your other obligations.",
    ],
    legalContext: [
      "The Fair Debt Collection Practices Act, codified at 15 U.S.C. § 1692 and implemented by Regulation F (12 C.F.R. Part 1006, effective November 30, 2021), is the federal statute that governs how third-party debt collectors can pursue consumer debts. The FDCPA's scope is critical: it generally applies to third-party debt collectors and debt buyers — companies whose principal business is collecting debts owed to someone else, or who regularly collect debts in the name of others. It generally does not apply to the original creditor — the bank, hospital, or service provider you originally owed — when that creditor is collecting in its own name. Some state laws (notably California's Rosenthal Act) extend the FDCPA's protections to original creditors.",
      "Within five days of its initial communication with a consumer about a debt, a debt collector must send a validation notice that includes the amount of the debt, the name of the creditor, a statement that the consumer has 30 days to dispute the debt in writing, and additional disclosures required by 12 C.F.R. § 1006.34 (itemization date, current creditor, and an opportunity to dispute electronically if the notice was sent electronically). Regulation F created a safe-harbor model validation notice in Appendix B; many collectors now use it verbatim.",
      "If the consumer disputes the debt in writing within the 30-day validation period, the collector must cease collection of the debt — or the disputed portion of it — until the collector obtains verification and mails a copy of that verification to the consumer (15 U.S.C. § 1692g(b)). \"Verification\" is not exhaustively defined by statute, but courts have generally read it to require, at a minimum, confirmation from the creditor of the amount owed and the identity of the consumer. Courts have not required collectors to produce the original signed contract or chain of title under § 1692g standing alone.",
      "Separately, a consumer can demand at any time that a collector cease all communication about a debt, by written notice under 15 U.S.C. § 1692c(c). After receipt, the collector must stop, with three narrow exceptions: to advise the consumer that collection efforts are being terminated; to notify the consumer that the creditor may invoke specified remedies normally invoked; or to notify the consumer that the creditor intends to invoke a specific remedy. Cease-communication does not eliminate the debt or prevent a lawsuit. It just stops the collector from contacting the consumer further.",
      "Regulation F's 2021 changes added several specific consumer-actionable protections worth knowing. The \"7-in-7\" rule (12 C.F.R. § 1006.14(b)) presumes a violation if a collector places more than 7 calls about a particular debt within a 7-day period, or any call within 7 days after a phone conversation about that debt. Calls before 8:00 a.m. or after 9:00 p.m. local time are presumptively inconvenient (§ 1006.6(b)(1)). And every electronic communication — text, email — must include a clear and conspicuous opt-out method, like \"Reply STOP\" for texts (§ 1006.6(d)–(e)).",
      "If a collector violates the FDCPA, the remedies are real and lawyer-pays-itself. Under 15 U.S.C. § 1692k a successful plaintiff may recover actual damages, statutory damages of up to $1,000 per individual action, and reasonable attorney's fees and costs. Class actions are also available with per-plaintiff plus capped class recovery. The statute of limitations is one year from the violation. Many consumer-protection attorneys take FDCPA cases on contingency because the statute pays their fees if the consumer prevails.",
    ],
    ifThisDoesntWork:
      "If the collector continues to call, text, email, or send letters without first mailing verification — that's a violation of 15 U.S.C. § 1692g(b), independently of whether the debt is real. File a complaint with the Consumer Financial Protection Bureau at consumerfinance.gov/complaint; with the Federal Trade Commission at reportfraud.ftc.gov; and with your state attorney general. Save voicemails. Keep every text, email, and letter. If the violation is serious or repeats, consult a consumer-protection attorney — 15 U.S.C. § 1692k authorizes statutory damages up to $1,000 plus actual damages plus the attorney's fees, so contingency arrangements are common. If you may be a victim of identity theft, file a free FTC Identity Theft Report at IdentityTheft.gov and use it to demand blocking of the disputed item under § 1681c-2 (see the separate credit-report dispute letter).",
    relatedSlugs: [
      "credit-report-dispute",
      "billing-error-dispute",
      "medical-records-request",
      "security-deposit-demand",
      "repair-request-formal",
    ],
    faqs: [
      {
        question: "Do I have to send my dispute in writing?",
        answer:
          "Yes — to trigger the statutory cease-collection requirement under 15 U.S.C. § 1692g(b), the dispute must be written and within 30 days of receiving the validation notice. Oral disputes preserve some rights (the collector still can't misrepresent the debt or harass you under §§ 1692d and 1692e), but they don't force the collector to stop while they verify. The certified-mail return receipt is what proves you sent the written dispute in time.",
      },
      {
        question: "Does the FDCPA apply to the original company I owed?",
        answer:
          "Generally no. The FDCPA covers third-party debt collectors and debt buyers, not original creditors collecting in their own name (15 U.S.C. § 1692a(6)). Some state laws — notably California's Rosenthal Fair Debt Collection Practices Act — extend FDCPA-style protections to original creditors. If you're dealing with the original creditor, check whether your state has a mini-FDCPA.",
      },
      {
        question: "What happens if I miss the 30-day window?",
        answer:
          "You can still dispute the debt and the collector still cannot misrepresent the debt or harass you under 15 U.S.C. §§ 1692d and 1692e. But the statutory \"must cease collection until verification is mailed\" trigger in § 1692g(b) only applies if you dispute within 30 days. Failure to dispute is not an admission of liability under § 1692g(c) — but you lose the automatic pause.",
      },
      {
        question: "Can I tell the collector to stop contacting me entirely?",
        answer:
          "Yes. Under 15 U.S.C. § 1692c(c), a written cease-communication notice forces the collector to stop, with three narrow exceptions: to confirm that collection efforts are being terminated, to notify you that the creditor may invoke a specific remedy, or to notify you that the creditor intends to invoke a specific remedy. Cease-communication does not eliminate the debt and does not prevent a lawsuit on the debt.",
      },
      {
        question: "What can I recover if a collector violates the FDCPA?",
        answer:
          "Under 15 U.S.C. § 1692k: actual damages, statutory damages of up to $1,000 per individual action, and reasonable attorney's fees and costs. Class actions are also available, with per-plaintiff plus capped class recovery (lesser of $500,000 or 1% of the collector's net worth). Statute of limitations is one year from the violation. Because the statute pays the attorney's fees if you prevail, many consumer-protection lawyers take FDCPA cases on contingency.",
      },
    ],
    publishedAt: "2026-05-15",
  },

  {
    slug: "credit-report-dispute",
    category: "consumer",
    title: "Credit Report Dispute Letter (FCRA Template + 30-Day Reinvestigation)",
    metaDescription:
      "Found an error on your credit report? Free FCRA dispute letter (15 U.S.C. § 1681i) citing the 30-day rule, plus the dispute addresses for Equifax, Experian, and TransUnion.",
    lede:
      "Your credit report has something wrong on it — an account you don't recognize, a paid debt still showing as delinquent, a balance that's incorrect, or a stale item that should have aged off. Federal law gives you a free, codified way to force the bureau to investigate and correct it.",
    body: `[Your Full Name (and any prior names)]
[Date of Birth]
[Last 4 of SSN]
[Current Address]
[Prior Addresses — past 2 years]
[Phone Number]

[Date]

[Bureau Name — choose one per letter]
[Bureau Dispute Address — see addresses below]

Sent via certified mail, return receipt requested

Re: Formal Dispute Under 15 U.S.C. § 1681i — Credit File Disputed Item(s)
File / Report Number: [If you have your credit report's reference number, include it]

Dear Dispute Department:

I am writing pursuant to 15 U.S.C. § 1681i to formally dispute the following item(s) in my credit file, which I believe to be inaccurate, incomplete, or otherwise improperly reported:

  Item 1
    Furnisher / creditor name as listed on the report: [Name]
    Account number (as it appears on the report — last 4 or partial is fine): [Number]
    Specific dispute: [E.g., "This account was paid in full on [date] and should be reported as paid, not as a collection." Or: "I have no record of opening this account and may be the victim of identity theft." Or: "This item is more than seven years old and should be removed under 15 U.S.C. § 1681c(a)."]
    Correction requested: [E.g., "Update the account status to 'paid' and remove all derogatory notations" / "Delete the account entirely" / "Remove the item from my file"]

  Item 2 (repeat as needed)
    [...]

Supporting documentation is enclosed:

  • A copy of the credit report with the disputed items circled or highlighted;
  • [Copies of paid receipts / settlement letters / court records / bank statements / canceled checks / police reports / FTC Identity Theft Report / any prior dispute correspondence]
  • [If identity-theft related: my FTC Identity Theft Report obtained from IdentityTheft.gov, and a statement that the items did not result from any transaction by me, sufficient to invoke the four-business-day block under 15 U.S.C. § 1681c-2.]

Under 15 U.S.C. § 1681i:

  1. You must conduct a reasonable reinvestigation of the disputed item(s) free of charge and complete it within 30 calendar days of receipt of this dispute (15 U.S.C. § 1681i(a)(1)(A));
  2. You may extend the 30-day window by no more than 15 additional days only if I provide additional relevant information during the initial 30 days (15 U.S.C. § 1681i(a)(1)(B));
  3. You must, within 5 business days of receipt, provide notice of this dispute to the furnisher of the disputed information (15 U.S.C. § 1681i(a)(2));
  4. You must provide me, within 5 business days of completing the reinvestigation, written results and a free copy of my credit file as revised (15 U.S.C. § 1681i(a)(6)); and
  5. If the disputed information cannot be verified as accurate, you must promptly delete it from my file or modify it as appropriate (15 U.S.C. § 1681i(a)(5)).

[Include if applicable:] I am also exercising my right under 15 U.S.C. § 1681c-2 to require you to block the reporting of any information in my file that resulted from identity theft. I have included my FTC Identity Theft Report; please block these items within 4 business days as required by § 1681c-2(a).

Please send all written correspondence to the address above. If you have questions, please contact me in writing.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [Listed above]`,
    howToUse: [
      "Mail to the bureau's dispute address: Equifax — P.O. Box 740256, Atlanta, GA 30374; Experian — P.O. Box 4500, Allen, TX 75013; TransUnion Consumer Solutions — P.O. Box 2000, Chester, PA 19016. Confirm the current address on each bureau's official \"contact us\" page before mailing for any high-stakes dispute.",
      "Send a separate letter to each bureau that's reporting the disputed item. The same error often appears on all three reports — each bureau investigates independently. Skipping a bureau means a corrected report on two of three.",
      "Always send by certified mail with return receipt requested. The bureaus also accept online and phone disputes, but the CFPB recommends mail for documentation purposes, and the return receipt is what proves the date of receipt — which starts the 30-day clock under 15 U.S.C. § 1681i(a)(1)(A).",
      "Get your free report first before disputing — at AnnualCreditReport.com, the only federally authorized source. Free weekly reports from all three bureaus became permanent on September 18, 2023. Print the report and circle the disputed items so the dispute department sees exactly what you're contesting.",
      "If you may be the victim of identity theft, file a free Identity Theft Report at IdentityTheft.gov before sending the dispute. Including that report invokes the four-business-day block under 15 U.S.C. § 1681c-2 — much faster than a regular dispute.",
    ],
    legalContext: [
      "The Fair Credit Reporting Act, codified at 15 U.S.C. § 1681 et seq., governs every \"consumer reporting agency\" — defined at § 1681a(f) — that compiles consumer credit or background information. That includes the three nationwide credit bureaus (Equifax, Experian, TransUnion) and a long list of specialty consumer reporting agencies in five statutory categories: medical, tenant/residential, check-writing, employment, and insurance (§ 1681a(x)). The CFPB publishes an updated list each year — companies like LexisNexis, ChexSystems, MIB, and The Work Number are all consumer reporting agencies under the FCRA.",
      "Consumers have two distinct paths for disputing inaccurate information. Path one is to dispute with the bureau directly under 15 U.S.C. § 1681i. The bureau must conduct a reasonable reinvestigation within 30 days of receipt (extended to 45 days if the consumer supplies additional relevant information during the original window), notify the furnisher of the dispute within 5 business days, and provide written results within 5 business days of completion along with a free copy of the consumer's file as revised. If the information cannot be verified, it must be deleted or modified. Path two is to dispute directly with the furnisher under 15 U.S.C. § 1681s-2(b) — but only § 1681s-2(b) violations are privately enforceable, and § 1681s-2(b) is triggered when a bureau forwards a dispute. The practical takeaway: dispute through the bureau first.",
      "The categories of information that can be disputed are broad — \"completeness or accuracy\" of any item under § 1681i(a)(1)(A). Common targets: accounts the consumer doesn't recognize, wrong balances, wrong payment status, wrong open/close dates, duplicate tradelines, and stale items past the FCRA's reporting time limits. Under § 1681c(a), most negative items must be removed after 7 years, and bankruptcies after 10. An item past those limits is a clean dispute even with no other supporting documentation.",
      "Identity-theft victims get an additional, faster remedy. Under 15 U.S.C. § 1681c-2(a), once a bureau receives (a) appropriate proof of identity, (b) a copy of an FTC Identity Theft Report (obtained free at IdentityTheft.gov), (c) identification of the disputed items, and (d) a statement that the items are not from transactions of the consumer, the bureau must block reporting of the disputed information within 4 business days — and promptly notify the furnisher. This is significantly faster than a normal dispute.",
      "Damages for FCRA violations are codified. Under 15 U.S.C. § 1681n, willful noncompliance exposes a violator to actual damages or statutory damages of $100 to $1,000, punitive damages, and reasonable attorney's fees. Under § 1681o, negligent noncompliance exposes a violator to actual damages plus reasonable attorney's fees. Many consumer-protection attorneys take FCRA cases on contingency. Note that violations of § 1681s-2(a) (the furnisher's general accuracy duties) are not privately enforceable — only the bureaus' federal regulators can sue. That's another reason the bureau-first dispute path matters.",
    ],
    ifThisDoesntWork:
      "If the bureau ignores the 30-day deadline, returns a \"verified\" result without doing a real investigation, or the furnisher continues reporting the same inaccurate item, the next steps stack. File a complaint with the Consumer Financial Protection Bureau at consumerfinance.gov/complaint — the CFPB tracks bureau response times and resolution rates and routinely publishes complaint data. File with your state attorney general. If the disputed item is causing real harm — a denied mortgage, a denied apartment, a denied job — consult an FCRA-experienced consumer-protection attorney. Statutory damages of $100–$1,000 per willful violation plus attorney's fees under 15 U.S.C. § 1681n make contingency arrangements common. For identity-theft cases specifically, the four-business-day block under § 1681c-2 is the cleanest path; keep escalating to the FTC, CFPB, and bureau executive offices if needed.",
    relatedSlugs: [
      "debt-validation-request",
      "billing-error-dispute",
      "medical-records-request",
      "security-deposit-demand",
      "repair-request-formal",
    ],
    faqs: [
      {
        question: "Do I have to dispute by mail, or is online okay?",
        answer:
          "Both work — the three nationwide bureaus accept disputes by mail, online, and by phone. The CFPB recommends mail with certified return receipt for evidentiary purposes, because the return receipt is what proves the date of receipt and starts the 30-day clock under 15 U.S.C. § 1681i(a)(1)(A). For high-stakes disputes (mortgage application coming up, lawsuit pending), mail is the safer choice.",
      },
      {
        question: "How long does the bureau have to investigate my dispute?",
        answer:
          "30 days from receipt of the dispute under 15 U.S.C. § 1681i(a)(1)(A). The window can be extended by up to 15 additional days (45 total) only if you supply additional relevant information during the original 30-day window (§ 1681i(a)(1)(B)). The bureau must also send written results within 5 business days of completing the reinvestigation (§ 1681i(a)(6)).",
      },
      {
        question: "Can I dispute an old negative item just for being old?",
        answer:
          "Yes. Under 15 U.S.C. § 1681c(a), most negative items must be removed after 7 years — collection accounts, civil judgments, paid tax liens, and \"any other adverse item of information.\" Bankruptcies are 10 years (§ 1681c(a)(1)). An item past those limits is improperly reported and can be disputed on that basis alone.",
      },
      {
        question: "Should I dispute with the bureau or the creditor?",
        answer:
          "Bureau first. Direct disputes to the furnisher under 15 U.S.C. § 1681s-2(a) are not privately enforceable, so if the furnisher ignores you there's no private remedy. Disputing through the bureau is what triggers the privately enforceable § 1681s-2(b) duties on the furnisher: once the bureau forwards the dispute, the furnisher must investigate and correct, and § 1681s-2(b) violations can be sued on directly.",
      },
      {
        question: "How often can I get a free credit report?",
        answer:
          "Every week from each of Equifax, Experian, and TransUnion through AnnualCreditReport.com — the official federally authorized source. Free weekly reports became permanent on September 18, 2023 when the three bureaus jointly announced the permanent extension of the pandemic-era access. Plus a free report after any adverse action (§ 1681j(b)), one extra free report for identity-theft victims, the unemployed, or public-assistance recipients (§ 1681j(c)), and one annual report from each specialty CRA (§ 1681j(a)(1)(C)).",
      },
    ],
    publishedAt: "2026-05-15",
  },

  {
    slug: "medical-records-request",
    category: "consumer",
    title: "HIPAA Medical Records Request Letter (Right of Access, 30-Day Rule)",
    metaDescription:
      "Get your medical records from any HIPAA-covered provider. Free template citing 45 C.F.R. § 164.524, fee rules, and what to do if access is denied.",
    lede:
      "Your medical records are yours. HIPAA — specifically the patient right of access under 45 C.F.R. § 164.524 — gives you the right to inspect them and get a copy within 30 days, in whatever format you ask for, at a fee that's capped at reasonable cost.",
    body: `[Your Full Legal Name]
[Date of Birth]
[Last 4 of SSN — if entity requires identity verification]
[Mailing Address]
[Phone Number]
[Email Address]

[Date]

[Provider / Hospital / Health Plan Name]
[Attention: Medical Records / Health Information Management Department]
[Address]
[City, State ZIP]

Sent via certified mail, return receipt requested

Re: Request for Access to Protected Health Information Under 45 C.F.R. § 164.524

Dear Medical Records Department:

I am writing to request access to my protected health information, pursuant to the individual right of access at 45 C.F.R. § 164.524.

Patient information:
  • Full legal name: [Your Name]
  • Date of birth: [DOB]
  • Medical record number (if known): [MRN]
  • Dates of service / treatment range: [Start date] to [End date], or "all records"

Records requested — please include all records in my designated record set as defined at 45 C.F.R. § 164.501, including but not limited to:
  • Medical records (physician notes, progress notes, consult notes, history and physical, discharge summaries)
  • Diagnostic and imaging reports (radiology, pathology, lab)
  • Test results and lab values
  • Operative reports, anesthesia records, recovery notes
  • Medication lists, prescription records, and immunization records
  • Billing records and insurance claims records
  • Any other records used to make decisions about my care

[Optional inclusions/exclusions — modify as needed:]
  • [ ] Please include behavioral-health / mental-health records to the extent they are not psychotherapy notes excluded by 45 C.F.R. § 164.524(a)(1)(i).
  • [ ] I am NOT requesting psychotherapy notes.
  • [ ] I am NOT requesting information compiled in anticipation of, or for use in, any civil, criminal, or administrative action.

Format requested (45 C.F.R. § 164.524(c)(2)):
  [Choose one and delete the others.]
  [ ] Electronic copy delivered to: [Email or secure portal address]
  [ ] Electronic copy on portable media — please contact me to arrange.
  [ ] Paper copy mailed to the address above.
  [ ] In-person inspection only — please contact me to schedule.

If you maintain the records electronically, please provide them in the electronic form and format requested if readily producible (45 C.F.R. § 164.524(c)(2)(ii)).

Fees (45 C.F.R. § 164.524(c)(4)):
Any fee charged for this request must be reasonable and cost-based, limited to (i) labor for copying, (ii) supplies, (iii) postage if mailed, and (iv) preparing an agreed summary or explanation. You may not charge retrieval, search, or handling fees, and any per-page fee must reflect actual labor and supply costs. Please provide a written, itemized estimate before processing if fees are expected to exceed [$25 / your threshold]. State law may further limit fees in [State] — for example, California Health & Safety Code § 123110 caps paper copies at $0.25 per page; New York Public Health Law § 18 caps them at $0.75 per page.

Timeline (45 C.F.R. § 164.524(b)(2)):
You must act on this request within 30 calendar days of receipt. One extension of up to 30 additional days is permitted only if you provide me, within the original 30 days, a written statement of the reason for delay and the expected completion date.

[Include if applicable — directing records to a third party (45 C.F.R. § 164.524(c)(3)(ii)):]
I am directing that copies of these records be sent to:
[Third Party Name]
[Third Party Address]
Please honor this directive as a signed third-party access request under 45 C.F.R. § 164.524(c)(3)(ii). I understand that for non-electronic third-party transmissions, the patient-rate fee cap does not necessarily apply following Ciox Health, LLC v. Azar (D.D.C. 2020).

I confirm my identity is verified by the personal information at the top of this letter and by a copy of my [driver's license / state ID / passport — first and last pages of passport only] enclosed.

If you cannot fulfill this request or believe a denial applies under 45 C.F.R. § 164.524(a)(2)–(3), please send a written denial explaining (a) the specific basis for denial, (b) my right to have the denial reviewed by another licensed healthcare professional not involved in the original decision (for reviewable denials under § 164.524(a)(3)), and (c) my right to file a complaint with the HHS Office for Civil Rights.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [Photocopy of government-issued ID; signed third-party directive if applicable]`,
    howToUse: [
      "Send to the provider's medical records or Health Information Management department. The provider's website usually lists the right address; if not, call the main number and ask for \"medical records.\"",
      "Include a photocopy of your government-issued ID. HIPAA-covered entities are allowed to require identity verification before releasing records; including ID upfront removes the most common stalling tactic.",
      "Specify the format you want. Under 45 C.F.R. § 164.524(c)(2)(ii), if the records are maintained electronically and you ask for an electronic copy, the provider must give you one in your requested format if readily producible. Asking for electronic copy by default is usually faster and cheaper than paper.",
      "Ask for a fee estimate before processing if you expect cost. Under § 164.524(c)(4), fees are limited to reasonable cost-based amounts. Retrieval fees, search fees, and inflated per-page fees are not allowed. State law may cap fees further (California $0.25/page; New York $0.75/page; Massachusetts $15 base + ≤$0.50/page for first 100 pages).",
      "Note the 30-day deadline. The provider has 30 calendar days to act, with one possible 30-day extension only if they send you a written delay notice within the original 30 days (§ 164.524(b)(2)). If they miss both deadlines without sending you that written extension notice, that's an enforceable HIPAA violation.",
    ],
    legalContext: [
      "The patient right of access, codified at 45 C.F.R. § 164.524, is one of the most consumer-friendly provisions in HIPAA. Every individual has the right to inspect and obtain a copy of their own protected health information (PHI) maintained by a HIPAA-covered entity — health plans, most healthcare providers, healthcare clearinghouses — or by a business associate acting on their behalf. The right covers the entire \"designated record set,\" defined at 45 C.F.R. § 164.501 as medical records, billing records, claims records, case-management records, and any records \"used, in whole or in part, by or for the covered entity to make decisions about individuals.\"",
      "Two categories of records sit outside the right of access. Under § 164.524(a)(1)(i), psychotherapy notes kept separately from the rest of the record are not subject to access. Under § 164.524(a)(1)(ii), information compiled in reasonable anticipation of, or for use in, a civil, criminal, or administrative action or proceeding is also excluded. The pre-2014 CLIA-related lab record exception was eliminated by an HHS final rule effective October 6, 2014 — laboratory test reports are now part of the right of access on the same terms as any other record.",
      "The procedural mechanics are precise. A covered entity may require a written request, must act within 30 calendar days of receipt, and may extend the response window by up to 30 more days only by sending a written delay notice within the original 30 days explaining the reason and giving an expected completion date (45 C.F.R. § 164.524(b)(2)). The records must be provided in the form and format requested if readily producible — including electronically when records are maintained electronically and an electronic copy is requested (§ 164.524(c)(2)). A signed, written directive to send records to a third party must be honored under § 164.524(c)(3)(ii), though the 2020 decision in Ciox Health, LLC v. Azar limited the patient-rate fee cap to electronic third-party transmissions.",
      "The fee rules are strict. Under 45 C.F.R. § 164.524(c)(4), any fee a covered entity charges must be reasonable, cost-based, and limited to labor for copying, supplies for paper or portable electronic media, postage if mailed, and preparing an agreed summary or explanation. Retrieval fees, search fees, handling fees, and per-page fees disconnected from actual cost are prohibited. State law may further restrict fees — California's Health & Safety Code § 123110 caps paper copies at $0.25 per page, New York's Public Health Law § 18 caps them at $0.75 per page, and Texas's Health & Safety Code § 241.154 caps hospital electronic-record fees at $75 total and prohibits charging the patient anything to inspect (versus copy) their own records.",
      "Remedies for a denied or ignored request are real but bounded. HIPAA has no private right of action — every federal Circuit Court to consider the question has held this — so a patient cannot sue the provider in federal court under HIPAA itself. The remedy is to file a complaint with the HHS Office for Civil Rights within 180 days of the violation, at HHS.gov/hipaa/filing-a-complaint. OCR can investigate, require corrective action, and impose civil monetary penalties. OCR's Right of Access Initiative, launched in September 2019, has produced more than 50 enforcement actions through 2025 — including a $112,500 settlement with Concentra in May 2025 and a $60,000 settlement with Memorial Healthcare System in January 2025, both for failing to provide timely access. State-law claims (negligence per se, breach of confidence) may also be available depending on the state.",
    ],
    ifThisDoesntWork:
      "If the provider misses the 30-day deadline (without sending you a written extension), denies the request without a proper basis, or refuses to provide the records in the format you requested, file a complaint with the HHS Office for Civil Rights within 180 days at HHS.gov/hipaa/filing-a-complaint. OCR's Right of Access Initiative has produced over 50 enforcement actions since 2019 — providers know the agency follows up. If the issue involves overcharging, send a follow-up letter citing § 164.524(c)(4) and asking for a written explanation of the cost basis; many providers reduce fees once challenged in writing. For state-law fee violations (California $0.25/page, New York $0.75/page, etc.), also file with the state department of health or the relevant licensing board. Where the records are needed for an immediate purpose (a new specialist, a legal claim, a benefits application), call the records department directly and ask for an expedited path; many providers have an expedited process they don't advertise.",
    relatedSlugs: [
      "credit-report-dispute",
      "debt-validation-request",
      "billing-error-dispute",
      "security-deposit-demand",
      "repair-request-formal",
    ],
    faqs: [
      {
        question: "Do I have to use the provider's request form?",
        answer:
          "No. A covered entity may require a written request under 45 C.F.R. § 164.524(b)(1) but cannot impose barriers like requiring notarization, in-person delivery, or use of a specific form when an equally reliable written request exists. HHS guidance is explicit on this point. Some providers prefer their form to ensure they capture identity verification — including a photocopy of government-issued ID with your written request usually addresses that need.",
      },
      {
        question: "How long does the provider have to give me my records?",
        answer:
          "30 calendar days from receipt of the request under 45 C.F.R. § 164.524(b)(2). One extension of up to 30 additional days is permitted, but only if the provider sends you a written delay notice within the original 30 days explaining the reason and giving an expected completion date. No notice within 30 days, no extension — and missing the deadline becomes an enforceable HIPAA violation.",
      },
      {
        question: "Can a provider charge me $1.00 per page for my records?",
        answer:
          "Generally no. Under 45 C.F.R. § 164.524(c)(4), fees must be reasonable, cost-based, and limited to labor for copying, supplies, postage, and preparing a summary. Retrieval and search fees are not allowed. Many states cap fees further — California at $0.25 per page (Health & Safety Code § 123110), New York at $0.75 per page (Public Health Law § 18), Texas at $75 total for electronic hospital records (Health & Safety Code § 241.154).",
      },
      {
        question: "Can I have my records sent directly to my attorney or new provider?",
        answer:
          "Yes. Under 45 C.F.R. § 164.524(c)(3)(ii), a signed, written directive to send records to a third party must be honored. The 2020 decision in Ciox Health, LLC v. Azar limited the patient-rate fee cap to electronic third-party transmissions; for paper third-party transmissions, the provider may charge market rates. For your own copy, the patient-rate fee cap still applies fully.",
      },
      {
        question: "What if the provider refuses or ignores my request?",
        answer:
          "File a complaint with the HHS Office for Civil Rights within 180 days at HHS.gov/hipaa/filing-a-complaint. OCR's Right of Access Initiative has produced over 50 enforcement actions since 2019, with recent settlements including Concentra ($112,500, May 2025) and Memorial Healthcare ($60,000, January 2025). HIPAA itself has no private right of action — every federal Circuit Court has so held — so OCR is the federal remedy. State-law claims (negligence per se, breach of confidence) may be available in some states.",
      },
    ],
    publishedAt: "2026-05-15",
  },
];
