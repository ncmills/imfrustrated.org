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

  {
    slug: "refund-demand-merchant",
    category: "consumer",
    title: "Refund Demand Letter to Merchant (Free Template + 30-Day Demand)",
    metaDescription:
      "Merchant won't refund you? Free demand letter citing the FTC 30-day shipping rule + your state's consumer-protection statute. Modeled on MA Ch. 93A § 9.",
    lede:
      "You bought something, it didn't arrive — or it arrived broken, or wasn't what was advertised, or you returned it and never got refunded. The merchant won't fix it. This is the demand letter that usually does.",
    body: `[Your Full Name]
[Mailing Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Merchant Legal Name — not just the DBA]
[Registered agent or corporate address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [merchant customer service / legal] for the record.)

Re: Demand for Refund — Order #[Order Number]

Dear Customer Service / Legal Department:

I am writing to demand a full refund of $[Amount] for the transaction described below, pursuant to my rights under [State] consumer-protection law and applicable federal law.

Purchase facts:
  • Date of purchase: [Date]
  • Order number / invoice number: [Number]
  • Item or service: [Description]
  • Amount paid: $[Amount]
  • Payment method: [Credit card / debit card / bank transfer / etc. — relevant because credit card unlocks FCBA dispute separately]
  • Channel: [Website / mobile app / phone / mail / in-store]
  • Promised delivery / completion: [Date]

What went wrong:
  [Pick one or more, with specific facts. Don't be vague.]
  [ ] Item never shipped or never arrived (last tracking activity: [Date]).
  [ ] Item arrived damaged or defective. [Describe.]
  [ ] Item materially not as described. [Describe the gap between what was advertised and what arrived.]
  [ ] I returned the item within your stated return window and have not received a refund. [Return shipment tracking #, date received by you.]
  [ ] Service was not performed as agreed. [Describe.]

Prior attempts to resolve:
  • [Date — channel (email/chat/phone) — name of rep if known — outcome]
  • [Date — channel — outcome]
  • [Date — channel — outcome]

Legal basis for the demand:

  1. [If mail/Internet/phone order and shipping deadline missed] Under the FTC Mail, Internet, or Telephone Order Merchandise Rule, 16 C.F.R. § 435.2, you were required to ship by the time stated in your offer or, if no time was stated, within 30 days. You did not. Under § 435.2(b), I have the right to cancel and receive a prompt refund. Under § 435.1, "prompt refund" means within 7 working days by a means at least as fast and reliable as first-class mail, or within one billing cycle if paid by credit card.

  2. [If the item is a consumer product with a written warranty] Under the Magnuson-Moss Warranty Act, 15 U.S.C. § 2310, I am entitled to enforce the warranty obligations and to recover costs and reasonable attorney's fees if I am required to file suit.

  3. Under the implied warranty of merchantability codified at UCC § 2-314 (adopted in [State]), the goods you sold were required to be fit for their ordinary purpose. They were not.

  4. Under [State] consumer-protection law (e.g., Mass. G.L. c. 93A § 2 + § 9; Cal. Civ. Code § 1750 et seq. (CLRA) + Bus. & Prof. Code § 17200 (UCL); Tex. Bus. & Com. Code § 17.46 (DTPA); N.Y. Gen. Bus. Law § 349; Fla. Stat. § 501.204 (FDUTPA); 815 ILCS 505/2 (ICFA)), your refusal to refund constitutes an unfair or deceptive act or practice.

This letter is being sent at least [30 days — required in MA, CA CLRA; or 60 days — required in TX DTPA] before any civil action I may bring, consistent with the pre-suit notice requirements of [Mass. G.L. c. 93A § 9; Cal. Civ. Code § 1782; Tex. Bus. & Com. Code § 17.505].

Demand:

  I demand a full refund of $[Amount] to my original payment method within [30] days of your receipt of this letter, plus a written confirmation that the refund has been issued and the transaction is closed.

If you do not provide a full refund within this period, I reserve the right to pursue all available remedies, including:
  • Suit for actual damages, statutory multiple damages, and reasonable attorney's fees under [State] consumer-protection statute. (In Massachusetts under Ch. 93A § 9: double or treble damages if the violation is willful or the response inadequate, plus mandatory attorney's fees for a prevailing consumer.)
  • Chargeback dispute under the Fair Credit Billing Act, 15 U.S.C. § 1666, with my credit card issuer.
  • Complaints to my state Attorney General's consumer protection division, the FTC at ReportFraud.ftc.gov, and the Better Business Bureau.

Please send the refund or your written response to the address above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [order confirmation; receipts; correspondence with merchant; return shipment tracking; photos of damaged item if applicable]`,
    howToUse: [
      "Send by certified mail with return receipt requested to the merchant's registered-agent or corporate address (look it up on the secretary of state's business search if you don't have it). Email a copy too, but the certified mail is what proves the date for the statutory deadline.",
      "Use Massachusetts G.L. c. 93A § 9 as your template even if you don't live in Massachusetts. The 30-day demand framework is the cleanest pre-suit consumer-protection regime in the country, and the structure — demand, deadline, multiple damages on inadequate response — translates well to other states' UDAP statutes.",
      "Pick the specific defect (didn't ship / damaged / not as described / return not refunded / service not performed) and be specific. Vague \"I want my money back\" letters work less often than concrete \"I returned the item via FedEx tracking #1234 on [date], you confirmed receipt on [date], it's been 47 days, no refund.\"",
      "Continue any parallel processes. File a chargeback with your credit card issuer (the FCBA gives you 60 days from the statement showing the charge). File a complaint with the state AG's consumer protection division. File an FTC report at ReportFraud.ftc.gov. These tracks reinforce each other.",
      "Track the deadline. If you cited 30 days in Massachusetts and the merchant ignores you or makes a low-ball offer, document the failure to respond — that's what triggers double/treble damages and mandatory attorney's fees under Ch. 93A § 9.",
    ],
    legalContext: [
      "Refund demand letters typically stack four bodies of law, each of which independently supports the demand and together create overlapping leverage. The first is your state's UDAP statute (Unfair and Deceptive Acts and Practices) — every state has one. They differ in important ways: damages multipliers (double or treble in Massachusetts, treble in Texas, treble in CA CLRA class actions), attorney's-fee provisions (mandatory in MA, TX, and CA CLRA; discretionary in NY and IL), and pre-suit notice requirements (30 days in MA and CA CLRA; 60 days in TX; none in NY, FL, or IL for general UDAP claims).",
      "The federal floor is the FTC's Mail, Internet, or Telephone Order Merchandise Rule, codified at 16 C.F.R. Part 435. It applies to any seller soliciting orders by mail, telephone, fax, or Internet — expanded to explicitly cover Internet orders by the 2014 amendments. The Rule requires the seller to ship by the time stated in its offer, or, if no time is stated, within 30 days. If the seller can't, it must offer the buyer the option to either consent to a delay or cancel for a full refund. \"Prompt refund\" under § 435.1 means within 7 working days by a means at least as fast and reliable as first-class mail, or within one billing cycle for credit-card purchases. FTC enforcement carries civil penalties — currently up to approximately $51,744 per violation, updated annually for inflation.",
      "For written warranties on consumer products, the Magnuson-Moss Warranty Act (15 U.S.C. §§ 2301–2312) is the operative federal statute. It allows a private suit for failure to comply with warranty obligations, requires a successful consumer to be made whole for the breach, and authorizes recovery of costs and reasonable attorney's fees based on actual time expended. If the warrantor has designated an FTC-qualified informal dispute settlement procedure in the warranty, the consumer must first resort to that procedure before commencing an individual civil action — but most warrantors don't have one.",
      "Massachusetts G.L. c. 93A § 9 is the canonical demand-letter regime in the country. It requires a written 30-day demand identifying the claimant, reasonably describing the unfair or deceptive act, identifying the injury, and demanding relief. The merchant has 30 days to respond with a written tender of settlement. If the merchant ignores the letter or makes a bad-faith low offer, and the violation is later found to be willful or knowing, or the response inadequate, the court must award double or treble damages, plus mandatory attorney's fees. The structure — explicit pre-suit window, demand for tender, multiplier consequence — is the gold standard, and the framing translates well into other states' UDAP regimes even where the procedural rules are different.",
      "A demand letter sits alongside, not instead of, a chargeback under the Fair Credit Billing Act (covered in the credit-card billing-error letter in this library). For credit-card purchases, you have 60 days from the statement showing the charge to file a written FCBA dispute with your card issuer, and the issuer must investigate while not collecting the disputed amount or reporting it as delinquent. The two tracks reinforce each other: the demand letter to the merchant focuses on getting the underlying refund; the FCBA dispute focuses on reversing the charge with the issuer.",
    ],
    stateNotes: [
      {
        state: "Massachusetts",
        note: "G.L. c. 93A § 9. 30-day written demand required before suit. Actual damages or $25 minimum. Double or treble damages if violation willful/knowing or response inadequate. Reasonable attorney's fees and costs mandatory for prevailing consumer. The cleanest demand-letter regime in the country.",
      },
      {
        state: "California",
        note: "Civ. Code § 1782 (CLRA): 30-day notice required by certified mail for damages claims. Bus. & Prof. Code § 17200 (UCL): no pre-suit notice for injunctive relief. CLRA: actual damages, $1,000 minimum in class actions, punitives, $5,000 enhancement per elder/disabled victim. Mandatory attorney's fees for prevailing consumer under § 1780.",
      },
      {
        state: "Texas",
        note: "Bus. & Com. Code § 17.50 (DTPA). 60-day written pre-suit notice required under § 17.505. Economic damages; up to 3x for \"knowingly,\" up to 3x mental-anguish for \"intentionally.\" Mandatory court costs and reasonable attorney's fees for prevailing consumer.",
      },
      {
        state: "New York",
        note: "Gen. Bus. Law § 349 (deceptive acts), § 350 (false advertising). No pre-suit notice required. Actual damages or $50 minimum (§ 349); $500 minimum (§ 350). Discretionary treble up to $1,000 (§ 349) or up to $10,000 (§ 350) for willful/knowing. Discretionary attorney's fees.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 501.211 (FDUTPA). No general pre-suit notice required for consumer private action. Actual damages; no punitives or consequential damages allowed under FDUTPA. Attorney's fees and court costs to prevailing party post-judgment per § 501.2105.",
      },
      {
        state: "Illinois",
        note: "815 ILCS 505 (Illinois Consumer Fraud Act). No pre-suit notice required. Actual damages; punitive damages available. Discretionary attorney's fees and costs under § 505/10a(c).",
      },
    ],
    ifThisDoesntWork:
      "If the merchant ignores the 30-day demand or sends an inadequate response, your options stack. File a chargeback with your credit-card issuer under the FCBA (15 U.S.C. § 1666, within 60 days of the statement showing the charge). File complaints with your state Attorney General's consumer protection division, the FTC at ReportFraud.ftc.gov, and the Better Business Bureau. For larger amounts ($500+), small claims court is a strong next move — filing fees usually $30–$80, no lawyer required, and several state UDAP statutes (MA, TX, CA CLRA) award attorney's fees plus multiple damages to a prevailing consumer. For very large amounts or pattern-of-conduct cases, contact a consumer-protection attorney; multiplier-damages and mandatory-fee statutes make contingency arrangements common.",
    relatedSlugs: [
      "billing-error-dispute",
      "subscription-cancellation",
      "gym-membership-cancellation",
      "contractor-non-performance",
      "credit-report-dispute",
      "debt-validation-request",
    ],
    faqs: [
      {
        question: "How long does a merchant have to ship something I bought online?",
        answer:
          "Under the FTC Mail, Internet, or Telephone Order Merchandise Rule (16 C.F.R. § 435.2), the merchant must ship by the time stated in its offer or, if no time was stated, within 30 days after receiving a properly completed order. If they can't, they must offer you the option to cancel for a full refund.",
      },
      {
        question: "If I cancel, how fast must I get my money back?",
        answer:
          "A \"prompt refund\" under 16 C.F.R. § 435.1 means within 7 working days by a method at least as fast and reliable as first-class mail, or within one billing cycle if you paid by credit card.",
      },
      {
        question: "Do I have to send a demand letter before I can sue?",
        answer:
          "Depends on your state. Massachusetts (30 days under Ch. 93A § 9), Texas (60 days under DTPA § 17.505), and California's CLRA (30 days under Civ. Code § 1782) all require pre-suit written notice. New York, Florida, and Illinois do not require pre-suit notice for their general UDAP claims. Even where not required, demand letters reset settlement leverage and document the merchant's refusal.",
      },
      {
        question: "Can I get my attorney's fees paid if I win?",
        answer:
          "Often yes. Magnuson-Moss (15 U.S.C. § 2310(d)(2)) authorizes prevailing-consumer fees. MA Ch. 93A § 9, TX DTPA § 17.50, CA CLRA § 1780, and FL FDUTPA § 501.2105 all award fees to a prevailing consumer. NY GBL § 349 and IL CFA § 505/10a(c) make fees discretionary.",
      },
      {
        question: "Does the seller's \"no refunds\" policy override these protections?",
        answer:
          "No. A merchant cannot contract around the FTC Mail Order Rule's 30-day shipping and refund obligation, around the UCC § 2-314 implied warranty of merchantability without a conspicuous and proper disclaimer, or around a state UDAP statute's prohibition on unfair or deceptive practices.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "subscription-cancellation",
    category: "consumer",
    title: "Subscription Cancellation Demand Letter (Free Template + State Auto-Renewal Laws)",
    metaDescription:
      "Subscription won't cancel? Free demand letter citing ROSCA + your state's auto-renewal law (CA, NY, IL, OR, VT). Get refunds + stop the charges.",
    lede:
      "You tried to cancel a subscription — streaming service, software, magazine, app — and the company keeps charging you. The FTC's click-to-cancel rule was vacated in July 2025, but state auto-renewal laws and ROSCA still have real teeth. This letter invokes them.",
    body: `[Your Full Name]
[Mailing Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Company Legal Name]
[Registered agent or corporate address — look up in your state's business search]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [company customer service / legal] for the record.)

Re: Demand to Cancel Subscription and Refund Unauthorized Charges — Account [Account Number / Email]

Dear Customer Service / Legal Department:

I am writing to demand (1) immediate cancellation of the above-referenced subscription, (2) a refund of every charge billed after my first cancellation attempt, and (3) written confirmation of the cancellation and refund.

Subscription details:
  • Account email / username: [Email]
  • Plan name: [Plan]
  • Monthly / annual price: $[Amount]
  • Date of original signup: [Date]
  • Signup channel: [Website / app / free-trial conversion]

Prior cancellation attempts:
  • [Date — channel (in-app, chat, phone, email) — rep name / chat ID / ticket # — outcome]
  • [Date — channel — outcome]
  • [Date — channel — outcome]

Unauthorized post-attempt charges:
  • [Date] — $[Amount]
  • [Date] — $[Amount]
  • [Date] — $[Amount]

Legal basis for the demand:

  1. ROSCA — The Restore Online Shoppers' Confidence Act, 15 U.S.C. §§ 8401–8405, requires negative-option subscriptions to provide "simple mechanisms" for consumers to stop recurring charges. Your refusal to cancel after my repeated attempts violates ROSCA, which is enforceable by the FTC and state attorneys general with civil penalties of up to approximately $51,744 per violation.

  2. State auto-renewal law — [Pick the cite for the consumer's state:]
     • California: Bus. & Prof. Code §§ 17600–17606 (as amended by AB 2863, effective July 1, 2025). Online signups must be cancelable exclusively online at will, with no obstructive steps. Cancellation method must be as easy as signup.
     • New York: Gen. Bus. Law § 527-a. Cancellation must be as easy as the mechanism used to consent. Penalties up to $500 per violation (or $1,000 knowing).
     • Illinois: Automatic Contract Renewal Act, 815 ILCS 601. Online signups must allow online termination. Violations enforceable under the Illinois Consumer Fraud Act (815 ILCS 505).
     • Oregon: ORS 646A.295. Toll-free number, email, postal, or other easy mechanism required; unauthorized shipments deemed "unconditional gift."
     • Connecticut: Conn. Gen. Stat. § 42-126b. Violation = unfair trade practice under CUTPA.
     • Florida: Fla. Stat. § 501.165. Violation renders the auto-renewal provision void and unenforceable.
     • Vermont: 9 V.S.A. § 2454a. Per-se Vermont Consumer Protection Act violation; private right of action with actual + exemplary damages + attorney's fees.

  3. FCBA — For any disputed charges paid by credit card, I have the separate right to dispute under the Fair Credit Billing Act, 15 U.S.C. § 1666, with my card issuer within 60 days of the statement on which the charge first appeared.

Demand:

  Within [10] business days of receipt of this letter:

  (a) Immediately cancel the subscription effective today and confirm in writing.

  (b) Refund every charge billed after [date of first cancellation attempt], totaling $[Amount], to my original payment method.

  (c) Confirm in writing that no further charges will be made, that my account has been closed, and that no negative information will be reported to any credit-reporting agency on the basis of this dispute.

If you do not comply within this period, I reserve the right to pursue all available remedies, including:
  • Filing a chargeback under the FCBA with my credit card issuer.
  • Filing a complaint with the FTC at ReportFraud.ftc.gov.
  • Filing a complaint with my state Attorney General's consumer protection division.
  • Filing a complaint with the CFPB if a financial product is involved.
  • [In CA, VT, NV, IL via UDAP, CT via CUTPA, OR via UDAP] Filing suit for actual damages, statutory damages, and attorney's fees under [State] consumer-protection law.

Please send the cancellation confirmation and refund to the contact information above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [screenshots of prior cancellation attempts; account statements showing post-attempt charges; chat or email transcripts]`,
    howToUse: [
      "Document every cancellation attempt before sending the letter. Screenshots of in-app cancellation flows, copies of chat transcripts, dated emails, and any phone-rep names and ticket numbers are the proof the demand rests on.",
      "Run a parallel chargeback with your credit card issuer under the FCBA. The card-issuer dispute uses the FCBA's 60-day window from the statement showing the charge; the merchant letter uses your state's auto-renewal law. Both tracks can run in parallel.",
      "Send to the merchant's registered-agent or corporate address — not the customer-service P.O. box. Look up the merchant on your state's secretary-of-state business search. The certified-mail receipt at the corporate address is what proves they were properly served.",
      "Don't cite the FTC click-to-cancel rule as binding federal law. The Eighth Circuit vacated it on July 8, 2025 (Custom Communications, Inc. v. FTC). Cite ROSCA and your state's auto-renewal statute instead. The Amazon Prime ($2.5B FTC settlement, Sept 2025) and Adobe ($150M DOJ settlement, March 2026) cases both relied on ROSCA and state law, not on the click-to-cancel rule.",
      "If you're in a state with a strong private right of action (California, Vermont, Nevada, Illinois via UDAP, Connecticut via CUTPA), explicitly mention the potential for suit including attorney's fees. Companies' legal teams price this risk and tend to settle individual cancellation demands quickly when they see it.",
    ],
    legalContext: [
      "Auto-renewal subscriptions are regulated at two layers. The federal layer is the Restore Online Shoppers' Confidence Act (ROSCA), 15 U.S.C. §§ 8401–8405, which requires online negative-option sellers to provide clear disclosures, obtain express informed consent, and provide \"simple mechanisms\" for consumers to stop recurring charges. ROSCA violations are enforceable by the FTC and state attorneys general, with civil penalties currently up to approximately $51,744 per violation. The state layer is a patchwork of roughly 24 state auto-renewal statutes — California, New York, Illinois, Oregon, Connecticut, Florida, Vermont, Nevada, and others — each with its own combination of cancellation-mechanism, pre-renewal-notice, and consumer-remedy provisions.",
      "The FTC's expanded Click-to-Cancel rule (16 C.F.R. Part 425), issued October 16, 2024, would have made the \"as easy to cancel as to sign up\" requirement federal across virtually all industries. But the Eighth Circuit vacated the rule on July 8, 2025 in Custom Communications, Inc. v. FTC, on procedural grounds — the FTC failed to conduct a required preliminary regulatory analysis when projected economic impact exceeded $100 million. The vacatur was complete and came days before the rule's July 14, 2025 compliance deadline. The FTC published an Advance Notice of Proposed Rulemaking in March 2026 to restart the process, but as of mid-2026 there is no replacement rule in force. The enforcement floor is still active, though: ROSCA, FTC Act § 5, state auto-renewal laws, and the card-network chargeback rules all continue to operate. The Amazon $2.5 billion Prime settlement in September 2025 (Iliad Flow) and the Adobe $150 million DOJ settlement in March 2026 (hidden ETFs and obstructed cancellation) both rested on ROSCA, not on the vacated rule.",
      "California is the strongest state regime. Bus. & Prof. Code §§ 17600–17606, amended by AB 2863 effective July 1, 2025, requires that online signups be cancelable exclusively online with no obstructive steps; pre-renewal notice 15–45 days before annual renewal; pre-conversion notice 3–21 days before a free trial converts; and notice 7–30 days before any fee change. New York Gen. Bus. Law § 527-a, amended December 13, 2023, requires the cancellation mechanism to be as easy to use as the signup mechanism, with penalties up to $500 per violation or $1,000 if knowing. Vermont 9 V.S.A. § 2454a is the strongest private-right-of-action state — a violation is a per-se Vermont Consumer Protection Act violation under 9 V.S.A. § 2453, with actual damages, exemplary damages, attorney's fees, and an active class-action plaintiffs' bar.",
      "For credit-card subscriptions, the FCBA chargeback under 15 U.S.C. § 1666 (covered in this library's separate billing-error letter) is a parallel and independent track. The chargeback gives you the right to dispute the charge with your card issuer within 60 days of the statement on which the charge first appeared, and during the investigation the issuer cannot collect the disputed amount or report it as delinquent. The merchant demand letter and the FCBA chargeback work together — the demand pursues the underlying cancellation and refund; the chargeback pursues reversal of the charge with the issuer.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Bus. & Prof. Code §§ 17600–17606, amended by AB 2863 (eff. July 1, 2025). Online signup = online cancel only, no obstructive steps. Pre-renewal notice 15–45 days; free-trial pre-conversion notice 3–21 days; fee-change notice 7–30 days. Unauthorized shipments deemed unconditional gift. Private right of action under UCL § 17200.",
      },
      {
        state: "New York",
        note: "Gen. Bus. Law § 527-a, amended Dec 13, 2023. Cancellation must be as easy as the mechanism used to consent. Pre-renewal notice 15–45 days for ≥1-year initial terms renewing ≥6 months. Penalties up to $500 per violation ($1,000 knowing). AG enforcement.",
      },
      {
        state: "Illinois",
        note: "Automatic Contract Renewal Act, 815 ILCS 601. Online signup must allow online termination. Pre-renewal notice 30–60 days for contracts ≥12 months renewing ≥1 month. Violation = deceptive practice under Illinois Consumer Fraud Act (815 ILCS 505) → actual damages, attorney's fees, injunctive relief.",
      },
      {
        state: "Oregon",
        note: "ORS 646A.295. Toll-free number, email, postal, or other easy mechanism required; online cancel required for online signups. Unauthorized shipments deemed unconditional gift. UDAP claim under ORS 646.638: actual damages + attorney's fees.",
      },
      {
        state: "Connecticut",
        note: "Conn. Gen. Stat. § 42-126b. Written cancellation procedure must be disclosed. Pre-renewal notice 15–60 days for initial terms >180 days renewing >31 days. Violation = unfair trade practice under CUTPA: actual + punitive damages, attorney's fees.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. § 501.165. Cancellation must be allowed in the same manner as acceptance. Pre-renewal notice 30–60 days for ≥12-month terms renewing >1 month. Violation renders the auto-renewal provision void and unenforceable.",
      },
      {
        state: "Vermont",
        note: "9 V.S.A. § 2454a. Toll-free, email, postal, or other easy mechanism; online signup → online cancel. Pre-renewal notice 30–60 days. Per-se Vermont Consumer Protection Act violation (9 V.S.A. § 2453): actual damages, exemplary damages, attorney's fees, private right of action.",
      },
      {
        state: "Nevada",
        note: "NRS 598.097–598.0999 (deceptive trade practices). Must obtain consent for renewal on terms other than month-to-month. Pre-renewal notice required. Deceptive trade practice: AG action, civil penalties up to $5,000/violation; private action under NRS 41.600 (actual damages + attorney's fees).",
      },
    ],
    ifThisDoesntWork:
      "If the company ignores the 10-day demand or sends a refusal, your options stack quickly. File a chargeback with your credit-card issuer under the FCBA (within 60 days of the statement showing the charge). File a complaint with the FTC at ReportFraud.ftc.gov — the FTC has been actively enforcing ROSCA, with major settlements against Amazon ($2.5B in 2025), Adobe ($150M in 2026), and others. File with your state Attorney General's consumer protection division. For consumers in states with strong private rights of action (California, Vermont, Nevada, Illinois, Connecticut, Oregon), consult a consumer-protection attorney — statutory damages plus attorney's fees often make contingency arrangements available.",
    relatedSlugs: [
      "refund-demand-merchant",
      "gym-membership-cancellation",
      "billing-error-dispute",
      "contractor-non-performance",
      "credit-report-dispute",
      "debt-validation-request",
    ],
    faqs: [
      {
        question: "Does the FTC's click-to-cancel rule force the company to let me cancel online?",
        answer:
          "Not as of 2026. The Eighth Circuit vacated the FTC's Click-to-Cancel rule on July 8, 2025 (Custom Communications v. FTC). But ROSCA (15 U.S.C. § 8403) still requires \"simple mechanisms\" to stop recurring charges, and state auto-renewal laws in California, New York, Illinois, Oregon, Vermont, and others independently require the cancel method to be as easy as signup.",
      },
      {
        question: "How long do I have to chargeback a subscription I never authorized?",
        answer:
          "Under the Fair Credit Billing Act (15 U.S.C. § 1666), you have 60 days from the date of the first statement showing the disputed charge to dispute it in writing with your card issuer. See the credit-card billing-error letter in this library for the full chargeback procedure.",
      },
      {
        question: "The company says cancellation is \"pending\" but keeps charging me. What do I do?",
        answer:
          "Document every contact (date, channel, rep name, ticket number). Send this written demand citing your state's auto-renewal statute and ROSCA. File a chargeback with your card issuer under the FCBA. File complaints with the FTC at ReportFraud.ftc.gov and your state attorney general.",
      },
      {
        question: "I'm in California. What changed on July 1, 2025?",
        answer:
          "AB 2863 amended Bus. & Prof. Code §§ 17600 et seq. Online signups must now be cancelable exclusively online at will with no obstructive steps. Pre-conversion notice for free trials is required 3–21 days before conversion; annual-renewal notice 15–45 days before. Annual reminders are required.",
      },
      {
        question: "Can I sue, or only the AG?",
        answer:
          "Depends on the state. California (UCL § 17200), Vermont (9 V.S.A. § 2453), Nevada (NRS 41.600), Connecticut (CUTPA), Illinois (815 ILCS 505), and Oregon (ORS 646.638) all support private actions including attorney's fees. New York § 527-a is primarily AG-enforced but supports actual-damages claims. Federal ROSCA itself has no private right of action — it's FTC/DOJ-enforced.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "gym-membership-cancellation",
    category: "consumer",
    title: "Gym Membership Cancellation Letter (Free Template + State Health Club Laws)",
    metaDescription:
      "Cancel a gym membership the right way. Free template citing your state's Health Club Services statute (CA, NY, TX, IL, FL, MA, NJ, PA, WA).",
    lede:
      "You're trying to cancel a gym membership and they're making it as hard as humanly possible — \"certified mail to a P.O. box,\" \"30-day notice plus a final month,\" \"sorry, you have to come in person.\" Almost 40 states regulate this stuff specifically. This letter cites the rule.",
    body: `[Your Full Name]
[Mailing Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Gym Legal Name]
[Address of the specific club location]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [gym member services / corporate legal] for the record.)

Re: Cancellation of Membership and Revocation of Recurring Billing — Member [Member Number / Account]

Dear Member Services / Legal Department:

I am writing to give formal written notice of cancellation of my membership at [Club Location], effective [Effective Date], pursuant to [State] Health Club Services / Physical Fitness Services law.

Membership details:
  • Member name and account number: [Name / Number]
  • Specific club location: [Address]
  • Contract execution date: [Date]
  • Contract term: [Months / months remaining]
  • Monthly fee: $[Amount]
  • Payment method on file: [last 4 of card / bank account]

Basis for cancellation: [Pick one or layer multiple, deleting the rest.]

  [Cooling-off period] I am exercising my right to cancel within the [3 / 5 / 7]-day cooling-off period under [Cal. Civ. Code § 1812.85 (5 business days, escalating for higher-cost contracts); N.Y. Gen. Bus. Law § 624 (3 business days); Tex. Occ. Code § 702.307 (3 business days); 815 ILCS 645 (3 business days, 7 calendar for planned facilities); Fla. Stat. § 501.017 (3 days excl. weekends/holidays); Mass. G.L. c. 93 § 81 (3 business days); N.J.S.A. 56:8-42 (3 operating days after contract receipt); 73 P.S. § 2161 et seq. (3 business days)]. The contract was signed on [Date] and this notice is timely.

  [Permanent disability] I am cancelling for permanent disability that materially affects my ability to use the facilities. A physician statement is enclosed.

  [Relocation] I am cancelling because I have relocated more than [25 miles, or 5 driving miles in FL] from this facility and there is no comparable substitute facility within [25 miles] of my new residence. Proof of new address is enclosed.

  [Club closure or material change] I am cancelling because the club [has closed / will close / has moved beyond the statutory mileage / has failed to provide promised services / has substantially reduced services]. Documentation enclosed.

  [Death of member] As [member's executor / spouse], I am cancelling the membership of [Member Name] who died on [Date]. Death certificate enclosed.

Demand:

  Within [10] business days of receipt of this letter:

  (a) Confirm in writing that the membership has been cancelled effective [Effective Date].

  (b) Cease all recurring charges to the payment method on file. This letter constitutes formal revocation of any electronic-funds-transfer or recurring-billing authorization.

  (c) Refund any prepaid fees for the unused portion of the contract within the statutory deadline: [15 days under Mass. G.L. c. 93 § 80; 30 days under N.J.S.A. 56:8-42, WA RCW 19.142.050, Fla. Stat. § 501.017; 40 days under 73 P.S. § 2161 (Pennsylvania); 48 hours for cooling-off under Tex. Occ. Code § 702.307].

  (d) Send written confirmation that no negative information will be reported to any credit-reporting agency on the basis of this cancellation, and that no early-termination fee will be assessed in excess of any statutory cap (e.g., 10% of unused balance or $50 under 815 ILCS 645; 10% of contract price under N.J.S.A. 56:8-42).

If your contract requires cancellation only by certified mail to a specific address, please note that several state statutes (Tex. Occ. Code § 702.304; N.J.S.A. 56:8-42; WA RCW 19.142.040) explicitly permit cancellation by any reasonable means including phone, email, in person, or website. A contract term that purports to require a more burdensome method than the statute is generally unenforceable.

If you do not comply within this period, I reserve the right to:
  • File a chargeback with my card issuer under the Fair Credit Billing Act (15 U.S.C. § 1666).
  • File a complaint with my state Attorney General's consumer protection division.
  • File a complaint with the FTC.
  • [If applicable] File suit for statutory damages and attorney's fees under [State] Health Club Services Act or under the general state UDAP statute.

I would like to handle this cleanly. Please confirm the cancellation and refund timeline by the deadline above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [physician statement if disability; proof of new address if relocation; death certificate if death cancellation; contract; any prior cancellation attempts]`,
    howToUse: [
      "Send to the corporate or legal address, not the club's front desk. Many gym contracts route \"cancellations only to corporate by certified mail\" precisely to make cancellation harder. Look up the gym's registered agent on your state's secretary-of-state business search and send there.",
      "Send by certified mail with return receipt requested — and email a copy. Pennsylvania expressly requires certified mail; everywhere else, the certified receipt is what proves the statutory clock started.",
      "Pick exactly one cancellation ground and delete the others before sending. Mixing grounds weakens each of them. If you're within the cooling-off window, use that alone — it's the strongest ground because no proof of cause is required.",
      "Include the supporting documentation up front: physician statement for disability; lease or utility bill for relocation; death certificate for executor cancellation. Most state statutes permit the gym to require this verification; including it removes the gym's first delay tactic.",
      "Revoke the EFT / recurring-billing authorization in writing. The letter does this expressly. If the gym continues to charge after revocation, those charges are unauthorized and chargeback-eligible under the FCBA (credit card) or under Regulation E (debit card).",
    ],
    legalContext: [
      "Roughly 40 U.S. states have specific consumer-protection statutes regulating health clubs, health spas, health studios, or physical fitness services contracts — separate from generic consumer-fraud law. The statutes emerged in the 1970s and 1980s after waves of pre-paid gym failures left consumers holding the bag. Common features across statutes: a cooling-off period of 3 to 7 business days after signing (most states 3 business days; California 5; with longer windows for higher-cost contracts); statutory grounds for cancellation after the cooling-off window (permanent disability with physician verification, death, relocation beyond a fixed mileage radius (commonly 25 miles, 5 driving miles in Florida), and club closure or material reduction of services); contract length caps (commonly 36 months in California, Florida, Massachusetts, New Jersey, and Washington); refund timelines ranging from 15 days (Massachusetts) to 40 days (Pennsylvania); and bonding or prepayment caps in many states (New York, Pennsylvania, New Jersey, Massachusetts, Florida) to protect prepayments against insolvency.",
      "California is among the most consumer-friendly regimes. Civ. Code §§ 1812.80–1812.98 (Health Studio Services Contract Law) provides a 5-business-day cooling-off period that escalates with contract size — 20 days for $1,500–$2,000 contracts, 30 days for $2,001–$2,500, and 45 days above $2,501. Post-cooling-off grounds include death, disability affecting use of the facilities, and relocation more than 25 miles. Contract length capped at 3 years. New York General Business Law Article 30 (§§ 620–631) provides a 3-business-day cooling-off period and caps contracts at 36 months. Texas Occupations Code Chapter 702 (Health Spa Act) caps at 36 months, allows cancellation for relocation more than 25 miles or doctor's order, and requires refunds within 48 hours for cooling-off cancellation or 30 days for partial-refund cancellation. Illinois 815 ILCS 645 (Physical Fitness Services Act) provides 3 business days for existing facilities (7 calendar days for planned/under-construction facilities), caps at 3 years, and limits relocation-cancellation fees to 10% or $50 whichever is less.",
      "Bed-rock rule across state statutes: cancellation method cannot be made more burdensome than signup. Texas § 702.304, New Jersey § 56:8-42, and Washington RCW 19.142.040 all explicitly permit cancellation by any reasonable means including phone, email, in person, or website. Contract clauses requiring cancellation only by certified mail to a specific P.O. box are routinely unenforceable where the statute allows other methods. California AB 2863 (effective July 1, 2025) goes further and requires the cancellation method to match the signup method (\"click to quit\") — gym memberships are explicitly within scope.",
      "Early-termination fees that exceed statutory caps are unenforceable. Illinois caps relocation-cancellation fees at the lesser of 10% of unused balance or $50. New Jersey caps fees for death or disability cancellation at 10% of the total contract price. California requires pro-rata refunds only. Fees in excess of those caps can be charged back as unauthorized and disputed under the state's gym statute. Auto-renewal traps are also subject to state auto-renewal laws (California Bus. & Prof. Code §§ 17600–17606; New York Gen. Bus. Law § 527-a) that layer on top of the gym-specific statutes.",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Cal. Civ. Code §§ 1812.80–1812.98. 5 business days cooling-off (escalating to 20/30/45 days for higher-cost contracts). Death, disability, relocation >25 miles permit post-cooling-off cancellation. Pro-rata refund of unused portion. 3-year contract cap.",
      },
      {
        state: "New York",
        note: "N.Y. Gen. Bus. Law §§ 620–631 (Article 30 Health Club Services). 3 business days cooling-off from receipt of signed contract. Death, permanent disability, services not available within 1 year. 36-month contract cap. § 624 specifies the cooling-off mechanics.",
      },
      {
        state: "Texas",
        note: "Tex. Occ. Code Ch. 702 (Health Spa Act). 3 business days for full refund (§ 702.307). Relocation >25 miles, doctor's order for >3 months, spa going out of business permit post-cooling-off. Refund: 48 hours cooling-off; 30 days otherwise. 36-month contract cap (§ 702.303).",
      },
      {
        state: "Illinois",
        note: "815 ILCS 645 (Physical Fitness Services Act). 3 business days for existing facilities; 7 calendar days for planned facilities. Relocation >25 miles permits cancellation (cancellation fee capped at lesser of 10% or $50). 30-day refund. 3-year contract cap.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. §§ 501.012–.019 (esp. § 501.017). 3 days cooling-off, excluding weekends/holidays. Death, physical inability (physician cert), or studio relocation >5 driving miles without equal-quality substitute within 30 days. 30-day refund. 36-month cap, renewable annually.",
      },
      {
        state: "Massachusetts",
        note: "M.G.L. c. 93 §§ 78–88. 3 business days cooling-off (§ 81). Death or disability (§ 82); closure or relocation. 15-day refund after notice. 36-month cap (§ 80). Mass.gov consumer guide is the authoritative summary.",
      },
      {
        state: "New Jersey",
        note: "N.J.S.A. 56:8-39 et seq. (§ 56:8-42). 3 operating days cooling-off after buyer receives contract copy. Death/disability, relocation, closure. Club may retain up to 10% of contract price as expenses for death/disability cancellation. 30-day refund. 3-year cap. Telephone and online cancellation now expressly permitted (NJ Ch. 241 of 2023).",
      },
      {
        state: "Pennsylvania",
        note: "73 P.S. § 2161 et seq. (Health Club Act, Act 87 of 1989). 3 business days cooling-off by certified mail RRR or in person. Death/permanent disability; closure >30 days without comparable facility within 10 miles. 40-day refund including initiation fees. Statutory bonding/registration regime.",
      },
      {
        state: "Washington",
        note: "RCW 19.142.005–.080 (Health Studio Services). 3 business days cooling-off (§ 19.142.040(9)). Death/total disability, relocation >25 miles, permanent closure without substitute, any-reason 30-day cancel if contract >1 year. 30-day refund (§ 19.142.050). 36-month cap.",
      },
    ],
    ifThisDoesntWork:
      "If the gym ignores the letter or sends a refusal, your options stack. File a chargeback with your card issuer under the FCBA (within 60 days of the statement showing the charge). File a complaint with your state Attorney General's consumer protection division — gym-cancellation complaints are high-volume and AGs take them seriously. For continued unauthorized charges, file a complaint with the FTC at ReportFraud.ftc.gov and with the BBB. Pennsylvania Attorney General has historically enforced the Health Club Act aggressively after large-scale closures; other state AGs do similar. For larger or pattern-of-conduct cases, consult a consumer-protection attorney; many state Health Club Services Acts provide private rights of action with attorney's fees.",
    relatedSlugs: [
      "subscription-cancellation",
      "refund-demand-merchant",
      "billing-error-dispute",
      "contractor-non-performance",
      "credit-report-dispute",
      "debt-validation-request",
    ],
    faqs: [
      {
        question: "My gym contract says I have to cancel by certified mail to a P.O. box. Is that enforceable?",
        answer:
          "Often not. Texas Occ. Code § 702.304, N.J.S.A. 56:8-42, and Washington RCW 19.142.040 expressly permit cancellation by any reasonable means including phone, email, in person, or website. Contract clauses requiring a more burdensome method than the statute are generally unenforceable. California AB 2863 (effective July 1, 2025) goes further — cancellation method must match the signup method.",
      },
      {
        question: "How long do I have to cancel without giving a reason?",
        answer:
          "The cooling-off period under your state's statute — most commonly 3 business days. California: 5 business days for the standard contract, longer for higher-cost contracts. Illinois: 7 calendar days for planned/under-construction facilities. Pennsylvania, New York, Texas, Florida, Massachusetts, New Jersey: 3 business days.",
      },
      {
        question: "Can I cancel if I move?",
        answer:
          "In most states, yes, if your new residence is more than 25 miles from the facility and there is no comparable substitute facility nearby. Florida uses a 5-driving-mile rule. Documentation: lease, utility bill, military orders, or other proof of new address.",
      },
      {
        question: "What if I get injured and can't use the gym?",
        answer:
          "Almost every state allows cancellation for permanent disability that materially affects your ability to use the facilities. Most permit the gym to require a physician statement. The statement should say you cannot use a substantial portion of the services and that the condition is expected to last at least three months.",
      },
      {
        question: "Does the FTC click-to-cancel rule require gyms to let me cancel online?",
        answer:
          "Not as of 2026. The Eighth Circuit vacated the FTC's Click-to-Cancel rule on July 8, 2025. State gym statutes and state auto-renewal laws are unaffected. In California, AB 2863 effective July 1, 2025 requires the cancellation method to match the signup method, which covers online cancellation for online signups.",
      },
    ],
    publishedAt: "2026-05-16",
  },

  {
    slug: "contractor-non-performance",
    category: "consumer",
    title: "Contractor Non-Performance Demand Letter (Free Template + State Home Improvement Laws)",
    metaDescription:
      "Contractor took your deposit and ghosted? Free demand letter citing state Home Improvement statutes (CA, NY, NJ, MD, FL, MA, IL, TX) + UDAP.",
    lede:
      "You hired a contractor. They took the deposit. Then they stopped showing up, did defective work, or disappeared entirely. This letter cites the state Home Improvement statute, the state UDAP statute, and (where applicable) the contractor-licensing board — the four-track demand contractors actually respond to.",
    body: `[Your Full Name]
[Project Property Address]
[City, State ZIP]
[Phone] [Email]

[Date]

[Contractor Legal Name + DBA]
[License / Registration Number — if any]
[Business Address]
[City, State ZIP]

Sent via certified mail, return receipt requested
(Copy also emailed to [contractor email] for the record.)

Re: Demand for Performance or Refund — [Project Description], [Property Address]

Dear [Contractor Name]:

I am writing to demand (1) completion of the contracted work or, in the alternative, (2) refund of the specified portion of payments already made, pursuant to our contract and the [State] consumer-protection regime governing home improvement contractors.

Contract recitation:
  • Contract date: [Date]
  • Scope of work (per contract): [Brief, quote contract language]
  • Total contract price: $[Amount]
  • Payment schedule (per contract): [Summary]

Payment history:
  • [Date] — $[Amount] — [milestone / phase]
  • [Date] — $[Amount] — [milestone / phase]
  • [Date] — $[Amount] — [milestone / phase]
  • Total paid to date: $[Total]

Specific factual breach:
  [Pick all that apply. Be specific with dates.]
  • Work not done: [Describe scope completed vs. scope contracted; date of last activity on site]
  • Work done defectively: [Itemize defects; reference plans/spec/code as applicable]
  • Permits not pulled: [Required permits per local code; date deposit taken vs. permit deadline]
  • Materials paid for but not delivered: [Itemize]
  • Communication: [Last response from contractor; dates of unanswered calls/emails]

License / registration status: [Verified [Date] at [state board URL]. Status: [Active / Expired / Unregistered]. Screenshot enclosed.]

Legal basis:

  1. [If contractor licensed/registered] Your conduct violates [State] Home Improvement statute:
     • California: Bus. & Prof. Code §§ 7159 (contract requirements), 7107 (abandonment), 7113 (failure to complete in accordance with contract). Deposit cap: $1,000 or 10% of contract price, whichever is less.
     • New York: Gen. Bus. Law Art. 36-A (§§ 770–776). All pre-completion payments must be deposited in a NY trust account within 5 business days or be bonded (Lien Law § 71-a).
     • New Jersey: N.J.S.A. 56:8-1 et seq. (Consumer Fraud Act) + N.J.A.C. 13:45A-16 (Home Improvement Practices). Any HIP violation = per-se CFA violation = treble damages + attorney's fees.
     • Maryland: Md. Code Bus. Reg. Title 8 (MHIC). Deposit cap: 1/3 of contract price. MHIC Guaranty Fund pays up to $30,000 per claim.
     • Florida: Fla. Stat. §§ 489.126, 489.129, 489.140–.144. Taking >10% deposit and failing to pull permits within 30 days or start work within 90 days of permit issuance can be criminal. Recovery Fund up to $50,000/claim.
     • Massachusetts: G.L. c. 142A + c. 93A § 9 (UDAP). Deposit cap: 1/3 of contract price or special-order materials cost, whichever greater. HIC Guaranty Fund up to $25,000.
     • Illinois: Home Repair & Remodeling Act, 815 ILCS 513 + Consumer Fraud Act, 815 ILCS 505. Written contract required for work >$1,000; must deliver "Home Repair: Know Your Consumer Rights" pamphlet.
     • Texas: Bus. & Com. Code § 17.41 (DTPA) + Property Code Ch. 27 (RCLA). 60-day pre-suit notice required under DTPA § 17.505 and RCLA § 27.004.

  2. [If contractor unlicensed] California Bus. & Prof. Code § 7031 bars an unlicensed contractor from suing for any compensation and entitles the consumer to recover all sums paid by disgorgement (1-year statute of limitations from completion). New Jersey: unregistered contractor = per-se CFA violation = treble damages + attorney's fees. Maryland: unlicensed contract is void + criminal misdemeanor. Florida: unlicensed contracting under § 489.127 is a misdemeanor (felony if state of emergency).

  3. State UDAP — Independently, your refusal to perform constitutes an unfair or deceptive act under [Mass. G.L. c. 93A § 2; NJ CFA N.J.S.A. 56:8-2; Tex. Bus. & Com. Code § 17.46; Cal. Bus. & Prof. Code § 17200; N.Y. Gen. Bus. Law § 349; Fla. Stat. § 501.204; 815 ILCS 505/2].

Demand:

  Within [14] days of receipt of this letter, either:

  (a) Return to the project and complete the contracted scope of work by [Date Certain], with daily on-site presence and documented progress; OR

  (b) Refund $[Amount, calculated as Total Paid minus reasonable value of work actually completed and minus the value of any materials installed], plus reimbursement for any payments I make to a substitute contractor to complete work that was within the original contract scope.

If you choose neither, I will pursue all remedies available, including:

  • Complaint to [State licensing board: CSLB in CA, NJ DCA Verify HIC, MHIC in MD, DBPR in FL, Mass HIC Program] including a request for restitution and license discipline.
  • [If applicable to state] Claim against the state Recovery / Guaranty Fund — up to $50,000 (FL CILB Recovery Fund), $30,000 (MD MHIC Guaranty Fund), $25,000 (Mass HIC Guaranty Fund).
  • Civil suit for breach of contract + statutory consumer-fraud claim with multiple damages and attorney's fees.
  • [In FL] Referral to local State Attorney for prosecution under Fla. Stat. § 489.126 if applicable.
  • Defense of any mechanic's lien you may attempt to record against the property, including a petition to discharge and a counterclaim for willful exaggeration / slander of title (N.Y. Lien Law §§ 39, 39-a; analogous remedies in other states). Any mechanic's lien recorded by an unlicensed contractor is typically invalid (CA Civ. Code § 8400).
  • FTC complaint at ReportFraud.ftc.gov.

Please send your response in writing to the address above.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [signed contract; payment records; license verification screenshot; photos of completed / incomplete / defective work; any prior communications]`,
    howToUse: [
      "Verify the license BEFORE sending the letter. Every state with a licensing regime publishes a free license-lookup. CA: CSLB Check a License. NJ: NJ DCA Verify HIC. MD: MHIC. FL: MyFloridaLicense. MA: Mass.gov HIC Lookup. Screenshot the result and attach — if the contractor was unlicensed at the time of contract, your remedies expand dramatically (CA § 7031 disgorgement; NJ CFA per-se violation; MD void contract; FL criminal exposure).",
      "Send to the contractor's registered legal address (look up the registered agent on your state's secretary-of-state business search) — not just the job-site phone number. The certified-mail receipt at the proper legal address is what proves service for any subsequent state-board complaint or suit.",
      "Be specific about the breach. \"Work not done\" is weaker than \"As of [Date], the framing was complete but no drywall, electrical, or plumbing rough-in had been performed despite Milestone 3 being paid on [Date].\" Specificity matters for state-board complaints, UDAP claims, and any small-claims action.",
      "Calibrate the deadline to your state's pre-suit notice rule. Massachusetts Ch. 93A § 9 requires 30 days. Texas DTPA § 17.505 and RCLA § 27.004 require 60 days. If you might sue under those statutes, the demand must give the statutory minimum or you forfeit enhanced damages.",
      "Pre-empt any mechanic's lien retaliation. Contractors who are about to be challenged sometimes file an inflated mechanic's lien on the property. The letter explicitly warns of the willful-exaggeration counterclaim (N.Y. Lien Law § 39-a is the model statute) and notes that liens by unlicensed contractors are typically invalid. The warning often deters the lien filing.",
    ],
    legalContext: [
      "A consumer whose contractor took a deposit and then abandoned, stalled, or did defective work generally has overlapping claims under four legal regimes, and a well-drafted demand letter invokes all of them. The first is straight breach of contract — failure to perform, anticipatory repudiation, and recovery of consequential damages plus the cost to complete with another contractor. The second is the state's Home Improvement statute — most populous states have specific consumer-protection acts that require a written contract over a dollar threshold, cap deposits, require licensing or registration display, and treat any violation as a per-se deceptive practice (New Jersey is the strongest example: any HIP violation triggers automatic treble damages and attorney's fees under the Consumer Fraud Act). The third is the state's general UDAP statute (Mass. Ch. 93A, NJ CFA, IL CFA, TX DTPA, CA CLRA, FL FDUTPA, NY GBL § 349, MD CPA) — several require pre-suit demand letters with statutory deadlines, and most provide multiple damages and attorney's fees. The fourth is the state contractor-licensing board — every state with a licensing regime accepts consumer complaints, and most can order restitution, suspend or revoke the license, or trigger payouts from a Guaranty or Recovery Fund.",
      "Deposit caps are the single most-violated provision. California Bus. & Prof. Code § 7159(d) caps deposits at $1,000 or 10% of the contract price, whichever is less — and the cap must appear in 12-point bold type in the contract. Maryland and Massachusetts cap at 1/3 of contract price. New York doesn't have a flat cap, but all pre-completion payments must be deposited in a New York trust or escrow account within 5 business days or be bonded. Florida prohibits taking more than 10% if the contractor fails to pull permits within 30 days or start work within 90 days of permit issuance — and serial offenders can be charged criminally. Consumers whose contractor exceeded the cap have a leverage point even before getting to the breach claim.",
      "Verifying the license is the highest-leverage pre-letter step. If the contractor was unlicensed at the time of contract, statutory remedies expand dramatically. California's Bus. & Prof. Code § 7031 is the most powerful disgorgement statute in the country: an unlicensed contractor is barred from suing for any compensation, and the consumer can recover all sums paid (1-year statute of limitations from completion). New Jersey treats an unregistered contractor as a per-se Consumer Fraud Act violation, automatically triggering treble damages and attorney's fees. Maryland makes an unlicensed home-improvement contract void and the unlicensed contracting a criminal misdemeanor. Florida classifies unlicensed contracting as a misdemeanor (felony if in a state of emergency); the Construction Industry Recovery Fund is unavailable to unlicensed contractors.",
      "Mechanic's liens are a common retaliation tactic and a serious consumer problem because they cloud title and can block a sale or refinance even if facially invalid. Every state allows the homeowner to bond around a lien — typically by recording a surety bond of 150% of the lien amount (e.g., NY Lien Law § 37) — and to petition to discharge a lien that is facially defective, late-filed, or unverified. New York's Lien Law §§ 39 and 39-a void the entire lien if any portion was willfully exaggerated and entitle the owner to bond premium plus interest plus reasonable attorney's fees plus the exaggerated amount. California, Massachusetts, and other states have analogous slander-of-title or abuse-of-process claims. Mechanic's liens by unlicensed contractors are typically invalid by operation of statute (e.g., CA Civ. Code § 8400 incorporates the § 7031 licensing requirement).",
    ],
    stateNotes: [
      {
        state: "California",
        note: "Bus. & Prof. Code §§ 7159, 7031 (disgorgement), 7107 (abandonment), 7113 (failure to complete). Deposit cap: $1,000 OR 10% of contract, whichever LESS (12-pt bold required). CSLB Check a License + complaint. Unlicensed contractor: § 7031 disgorgement of all sums paid.",
      },
      {
        state: "New York",
        note: "Gen. Bus. Law Art. 36-A (§§ 770–776); Lien Law § 71-a (escrow). Contracts >$500. No flat deposit cap but all pre-completion payments must go into NY trust/escrow within 5 business days or be bonded. No statewide license — verify with local jurisdiction (NYC DCWP, Suffolk, Nassau, Westchester, etc.).",
      },
      {
        state: "New Jersey",
        note: "Consumer Fraud Act N.J.S.A. 56:8-1 + N.J.A.C. 13:45A-16 (Home Improvement Practices) + Contractor Registration Act (compliance bond $10k–$50k as of April 2025). Contracts >$500. Any unwritten contract = per-se CFA violation = TREBLE damages + attorney's fees.",
      },
      {
        state: "Maryland",
        note: "Md. Code Bus. Reg. Title 8 (MHIC) + CL § 13-301 (Consumer Protection Act). Deposit cap: 1/3 of contract price. MHIC License Search. MHIC Guaranty Fund pays up to $30,000 per claim after final order. Unlicensed contract void + criminal misdemeanor.",
      },
      {
        state: "Florida",
        note: "Fla. Stat. §§ 489.126 (permits 30/90 days), 489.129 (license discipline), 489.140–.144 (Construction Industry Recovery Fund $50,000/claim, $250,000/licensee). Unlicensed contracting under § 489.127: misdemeanor (felony in emergency); Recovery Fund unavailable.",
      },
      {
        state: "Massachusetts",
        note: "G.L. c. 142A + c. 93A § 9 (UDAP — 30-day demand letter required). Contracts ≥$1,000. Deposit cap: 1/3 of contract OR actual cost of special-order materials. HIC Guaranty Fund up to $25,000 (registration required).",
      },
      {
        state: "Illinois",
        note: "Home Repair & Remodeling Act, 815 ILCS 513 + Consumer Fraud Act, 815 ILCS 505. Contracts >$1,000 must be written + signed; must deliver \"Home Repair: Know Your Consumer Rights\" pamphlet. No statewide license (roofing licensed by IDFPR). IL AG Consumer Complaint.",
      },
      {
        state: "Texas",
        note: "Bus. & Com. Code § 17.41 (DTPA) — 60-day pre-suit notice required under § 17.505. Property Code Ch. 27 (RCLA) — 60-day pre-suit notice under § 27.004; contractor gets up to 3 inspections within 35-day window. No statewide GC license; verify TDLR licensed trades.",
      },
    ],
    ifThisDoesntWork:
      "If the contractor doesn't respond or refuses, the four-track escalation is real and effective. Track 1: state licensing board complaint (CSLB, MHIC, DBPR, Mass HIC, NJ DCA). Track 2: state Recovery / Guaranty Fund claim — Florida CILB Fund up to $50,000, Maryland MHIC Guaranty Fund up to $30,000, Massachusetts HIC Guaranty Fund up to $25,000 — typically requires a final judgment or order first. Track 3: civil suit for breach + UDAP — Massachusetts Ch. 93A § 9 awards mandatory attorney's fees and up to treble damages for inadequate response to the 30-day demand; New Jersey CFA awards treble damages and attorney's fees for any HIP violation. Track 4: criminal referral where the conduct involved deposit theft (Florida § 489.126; California serial-offender provisions; most state AGs). For mechanic's lien retaliation, file a petition to discharge and counterclaim for willful exaggeration (NY Lien Law § 39-a is the model). Many consumer-protection attorneys take contractor cases on contingency because of the attorney's-fee provisions.",
    relatedSlugs: [
      "refund-demand-merchant",
      "subscription-cancellation",
      "gym-membership-cancellation",
      "billing-error-dispute",
      "credit-report-dispute",
      "debt-validation-request",
    ],
    faqs: [
      {
        question: "My contractor cashed my deposit and never showed up. Is that just breach of contract, or a crime?",
        answer:
          "Often both. In Florida, taking more than 10% deposit and failing to pull permits within 30 days or start work within 90 days of permit issuance can be a misdemeanor or felony depending on amount (Fla. Stat. § 489.126). In California, abandonment without legal excuse violates Bus. & Prof. Code § 7107 and is grounds for license discipline. Most states' AGs also treat \"deposit and run\" as criminal theft above a threshold.",
      },
      {
        question: "How much can a contractor legally take up front?",
        answer:
          "Varies sharply by state. California caps at $1,000 or 10% of contract, whichever is LESS. Maryland and Massachusetts cap at 1/3. New York has no flat cap but pre-completion funds must sit in a trust account. Florida doesn't cap the amount directly but ties the deposit to permit-pulling deadlines.",
      },
      {
        question: "The contractor is licensed but ghosting me. Will the licensing board get my money back?",
        answer:
          "Sometimes, indirectly. CSLB, MHIC, and DBPR can pressure restitution as a condition of keeping the license. Florida CILB and Massachusetts OCABR have Recovery / Guaranty Funds (up to $50,000 FL, $25,000 MA, $30,000 MD) but only after you obtain a judgment or final order. CSLB explicitly says it cannot guarantee a refund — consumers whose primary goal is restitution should pursue damages through the courts as well.",
      },
      {
        question: "Do I have to send a demand letter before I sue?",
        answer:
          "Almost always yes if you want enhanced UDAP damages. Massachusetts Ch. 93A § 9 requires a 30-day demand; failure to send forfeits multiple damages and fees. Texas DTPA requires 60-day demand under Bus. & Com. Code § 17.505; TX RCLA also requires 60-day pre-suit notice under Property Code § 27.004. Even where not strictly required, demand letters reset settlement leverage and document the contractor's refusal.",
      },
      {
        question: "Can I cancel the contract if I just changed my mind?",
        answer:
          "If the contract was signed in your home (not at the contractor's office), the FTC Cooling-Off Rule (16 C.F.R. Part 429) gives you 3 business days to cancel any sale of $25 or more. California, New York, and many states layer additional 3-day (or 5-day for seniors in CA) rights for home-solicitation sales. Cancellation notice must be postmarked by midnight of the third business day.",
      },
    ],
    publishedAt: "2026-05-16",
  },
];
