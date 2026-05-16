import type { LetterTemplate } from "./types";

// Federal law — Fair Credit Billing Act + Regulation Z verified May 2026 against
// Cornell LII (15 U.S.C. § 1666; 12 C.F.R. § 1026.13) and CFPB.gov.

export const creditCardLetters: LetterTemplate[] = [
  {
    slug: "billing-error-dispute",
    category: "credit-card",
    title: "Credit Card Billing Error Dispute Letter (FCBA Template + 60-Day Rule)",
    metaDescription:
      "Dispute a credit card charge under the Fair Credit Billing Act. Free letter template citing 15 U.S.C. § 1666, the 60-day window, and what your card issuer must do.",
    lede:
      "There's a charge on your credit card statement that's wrong — unauthorized, the wrong amount, a refund that never posted, or a product you never received. The Fair Credit Billing Act gives you a specific, time-bound right to dispute it in writing. This is that letter.",
    body: `[Your Full Name]
[Your Address as it appears on your account]
[City, State ZIP]
[Phone Number]
[Email Address on the account]

[Date]

[Card Issuer's Name]
[Billing Inquiries Address — printed on your statement, NOT the payment address]
[City, State ZIP]

Sent via certified mail, return receipt requested

Re: Notice of Billing Error Under the Fair Credit Billing Act
Account Number: [Account Number]
Statement Date: [Date of statement showing the disputed charge]
Disputed Amount: $[Dollar Amount]

Dear Sir or Madam:

I am writing to give formal written notice of a billing error on the above account, pursuant to the Fair Credit Billing Act (15 U.S.C. § 1666) and Regulation Z (12 C.F.R. § 1026.13). This notice is being delivered to the billing-inquiries address printed on my statement and within 60 days of the statement on which the error first appeared, as required by 12 C.F.R. § 1026.13(b)(1).

The billing error is as follows:

  • Merchant / posting description on statement: [As printed on your statement]
  • Transaction date: [Date]
  • Disputed amount: $[Amount]
  • Nature of the error (check the one that applies under 12 C.F.R. § 1026.13(a)):
       [ ] Unauthorized charge — I did not make this charge and did not authorize anyone to make it on my behalf (§ 1026.13(a)(1)).
       [ ] Charge not properly identified — the statement does not adequately identify the merchant, date, or amount (§ 1026.13(a)(2)).
       [ ] Goods or services not accepted or not delivered as agreed (§ 1026.13(a)(3)).
       [ ] Failure to credit a payment or other credit (§ 1026.13(a)(4)).
       [ ] Computational or accounting error (§ 1026.13(a)(5)).
       [ ] Request for clarification, including documentary evidence (§ 1026.13(a)(6)).
       [ ] Failure to mail or deliver the periodic statement to my last known address (§ 1026.13(a)(7)).

Facts and supporting evidence:

[1–3 short paragraphs explaining what happened, in your own words. Be specific: dates, merchant interactions, what you ordered, what arrived, what you tried to resolve directly with the merchant and when. Attach copies of receipts, emails, photographs, shipping records, return-tracking numbers, or police reports as relevant.]

Under 12 C.F.R. § 1026.13 and 15 U.S.C. § 1666, I am requesting that you:

  1. Acknowledge this notice in writing within 30 days of receipt (12 C.F.R. § 1026.13(c)(1));
  2. Complete your investigation within two complete billing cycles, and in any event no later than 90 days of receipt (12 C.F.R. § 1026.13(c)(2));
  3. Either correct the error and credit my account for the disputed amount plus any related finance or other charges (12 C.F.R. § 1026.13(e)) or, if you determine no error occurred, send me a written explanation and, on request, copies of the documentary evidence supporting your conclusion (12 C.F.R. § 1026.13(f));
  4. During your investigation, refrain from collecting the disputed amount or any related finance/other charges (12 C.F.R. § 1026.13(d)(1));
  5. During your investigation, refrain from making or threatening any adverse credit report regarding the disputed amount, or reporting the disputed amount as delinquent to any credit bureau (12 C.F.R. § 1026.13(d)(2)); and
  6. Not close or restrict my account solely because of this dispute (12 C.F.R. § 1026.13(d)(3)).

I will continue to pay the undisputed portion of the statement. I will not pay the disputed amount or any finance charges attributable to it pending resolution.

Please send all written correspondence regarding this dispute to the address above. If a phone call is necessary, please leave a message with a callback number rather than discussing account details with anyone other than me.

Sincerely,

[Your Signature]
[Your Printed Name]

Enclosures: [copy of statement with disputed charge circled or highlighted; receipts; correspondence with merchant; shipping or return-tracking records; police report if applicable; any other supporting documentation]`,
    howToUse: [
      "Send to the billing-inquiries address on the statement, NOT the payment address. The two are intentionally different and an FCBA dispute mailed to the payment address may not get the same statutory treatment. The CFPB and FTC both flag this.",
      "Send by certified mail with return receipt requested. The return receipt is what proves the issuer received your written notice within the 60-day window — and the 60-day window is jurisdictional.",
      "Send the letter within 60 days of the statement that first shows the error (12 C.F.R. § 1026.13(b)(1)) — count from the statement-transmission date, not the transaction date. If the charge appeared on a December statement and the error wasn't caught until you reconciled in February, the clock starts running from December.",
      "Mark the disputed charge on a copy of the statement and include it as an enclosure. Visual identification of the disputed item is the single most useful attachment.",
      "Continue paying the undisputed portion of the bill on time. Under § 1026.13(d) the issuer cannot try to collect or report as delinquent the DISPUTED amount, but the rest of the balance is still due — and missing those payments creates separate problems.",
    ],
    legalContext: [
      "The Fair Credit Billing Act, codified at 15 U.S.C. § 1666 and implemented through Regulation Z (12 C.F.R. § 1026.13), is one of the strongest consumer-protection statutes in U.S. federal law. It applies specifically to \"open-end credit\" — credit cards and revolving charge accounts. Debit cards, ATM transactions, and prepaid cards are governed by a different statute (the Electronic Fund Transfer Act and Regulation E, 12 C.F.R. § 1005.11), with different deadlines and liability tiers. Closed-end installment loans (auto, mortgage, personal) are not covered by the FCBA at all.",
      "The mechanics are precise and time-bound. A consumer who believes a billing error has occurred must send a written notice to the issuer's billing-inquiries address within 60 days of the statement on which the error first appeared. Once the issuer receives that notice, it has 30 days to acknowledge it in writing (unless it resolves the dispute within those 30 days) and a hard cap of two complete billing cycles — never more than 90 days — to complete its investigation and either credit the account or send a written explanation. While the investigation is pending, the issuer cannot try to collect the disputed amount, cannot report it as delinquent to any credit bureau, and cannot close or restrict the account solely because of the dispute (12 C.F.R. § 1026.13(d)).",
      "The categories of \"billing error\" are listed exhaustively in 12 C.F.R. § 1026.13(a) and 15 U.S.C. § 1666(b): unauthorized charges, charges not properly identified on the statement, charges for goods or services not accepted or not delivered as agreed, failure to credit a payment or return, computational errors, requests for additional clarification or documentary evidence, and the issuer's failure to deliver the statement to the consumer's last known address. The list is broader than most consumers realize — \"the merchant won't refund me even though I returned the product\" fits squarely within § 1026.13(a)(4)'s failure-to-credit category, for example.",
      "If the issuer fails to comply with the FCBA's procedures, the consumer's remedies are real. Under 15 U.S.C. § 1666(e), the issuer forfeits the right to collect the disputed amount up to $50 — a relatively small amount, but it operates as a per-violation forfeiture independent of any other damages. More substantially, 15 U.S.C. § 1640(a) creates a private right of action with actual damages, statutory damages of twice the finance charge with a $500 minimum and $5,000 maximum for individual actions on open-end credit, costs, and reasonable attorney's fees. The statute of limitations is one year from the violation (15 U.S.C. § 1640(e)).",
      "An FCBA dispute is distinct from a chargeback. A chargeback is a network-rules process (Visa, Mastercard, Amex, Discover) for reversing the transaction itself — useful, common, and often started by the same dispute that triggers the FCBA, but contractual and not statutory. The FCBA is statute: it gives you the right to attorney's fees and statutory damages if the issuer doesn't follow the procedure. The two often run in parallel. An FCBA dispute is also distinct from a Fair Credit Reporting Act dispute under 15 U.S.C. § 1681i, which addresses inaccurate information already reported to a credit bureau — a different statute, different addressee, different remedy.",
    ],
    ifThisDoesntWork:
      "If the issuer doesn't acknowledge in 30 days or doesn't resolve within 90 days, your remedies stack. File a complaint with the Consumer Financial Protection Bureau (consumerfinance.gov/complaint) — the CFPB routes the complaint to the issuer and tracks the response, and resolution rates are high. File a complaint with your state attorney general. If the issuer reported the disputed amount as delinquent in violation of § 1026.13(d)(2), separately dispute the report under the Fair Credit Reporting Act (see the credit-report dispute letter). And the FCBA itself authorizes a private lawsuit under 15 U.S.C. § 1640 for actual damages, statutory damages ($500–$5,000), costs, and reasonable attorney's fees. Many consumer-protection attorneys take FCBA cases on contingency because the statute pays their fees if you prevail.",
    relatedSlugs: [
      "debt-validation-request",
      "credit-report-dispute",
      "medical-records-request",
      "security-deposit-demand",
      "repair-request-formal",
    ],
    faqs: [
      {
        question: "How do I dispute a charge with my credit card company in writing?",
        answer:
          "Mail a written billing-error notice to the billing-inquiries address printed on your statement (NOT the payment address) within 60 days of the statement showing the charge. Include your name, account number, the disputed amount, the nature of the error, and any supporting documentation. Send by certified mail with return receipt requested. Under 12 C.F.R. § 1026.13, the issuer must acknowledge in 30 days and resolve within 90.",
      },
      {
        question: "What's the difference between the FCBA and a chargeback?",
        answer:
          "The Fair Credit Billing Act (15 U.S.C. § 1666) is a federal statute that gives you legal rights — a 60-day written-notice window, a 30-day acknowledgment requirement, a 90-day resolution cap, and protection from collection and credit reporting on the disputed amount during the investigation. A chargeback is a Visa/Mastercard/Amex network process for reversing the transaction itself; it's contractual, not statutory. The two often run in parallel, but only the FCBA gives you statutory damages and attorney's fees if the issuer ignores the procedure.",
      },
      {
        question: "How long does my credit card company have to respond?",
        answer:
          "Under 12 C.F.R. § 1026.13(c), the issuer must acknowledge your written billing-error notice within 30 days of receipt and complete its investigation within two complete billing cycles — never more than 90 days. If they resolve within the 30-day acknowledgment window, the separate acknowledgment is not required.",
      },
      {
        question: "Can my credit card company report me as late while a dispute is open?",
        answer:
          "No. Under 12 C.F.R. § 1026.13(d)(2) the issuer cannot make or threaten to make any adverse credit report to a third party — including credit bureaus — regarding the disputed amount, and cannot report the disputed amount as delinquent. It also cannot try to collect the disputed amount or close or restrict your account solely because of the dispute (§ 1026.13(d)(1) and (d)(3)).",
      },
      {
        question: "Does the Fair Credit Billing Act cover debit cards?",
        answer:
          "No. The FCBA covers open-end credit — credit cards and revolving charge accounts. Debit-card and ATM transactions are governed by the Electronic Fund Transfer Act and Regulation E (12 C.F.R. § 1005.11), which has shorter notice deadlines and tiered liability based on how quickly the consumer reports unauthorized use. Closed-end installment loans (auto, mortgage, personal) are not covered by the FCBA at all.",
      },
    ],
    publishedAt: "2026-05-15",
  },
];
