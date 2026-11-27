// /privacy sections. With the letter chat NOT publicly reachable, this is exactly main's text and
// numbering (§ I-VI). The approved "The letter chat" section (U8 draft D) is added after
// "What we collect" only when chatIsPublic() — the same flag pair that opens /api/chat/* to the
// public (CONTROL REVIEWS-1121-2030 (2)e) — and the markers are renumbered (§ I-VII).
import { chatIsPublic, type FlagEnv } from "../../lib/imf-chat/flags";

export type Para = string | { lead: string; text: string };
export type Section = { marker: string; title: string; paragraphs: Para[] };

const BASE: Section[] = [
  {
    marker: "§ I",
    title: "What we collect",
    paragraphs: [
      "When you use the intake form on the homepage, we collect what you give us: your email address, your two-letter US state, the issue category you select, and the free-text message you write (capped at 2,000 characters). We do not ask for a phone number, a date of birth, a Social Security number, a government ID, or any payment information. We have no use for those, and the form does not have fields for them.",
      "We also briefly capture the IP address your request comes from. It is used in memory to rate-limit submissions (five per hour per address) so the form is not flooded by bots, and it is stored alongside the intake record in our database for the same reason. We do not use it to fingerprint you, follow you across sites, or assemble a behavioral profile.",
      "Across the rest of the site we use two analytics tools: PostHog for product analytics (page views, which letter templates get opened, which buttons get clicked) and Vercel Analytics + Speed Insights for traffic and performance measurement. Both are configured for aggregate measurement, not individual identification.",
    ],
  },
  {
    marker: "§ II",
    title: "Where it goes",
    paragraphs: [
      "Intake submissions are written to a Supabase database and emailed to info@imfrustrated.org via Resend, a transactional email provider. From there we use your message to prepare a draft self-help letter and email it to you. The draft is prepared with the help of an AI model provider (Anthropic), which processes your message only to write the draft, and we look up the relevant laws on official public websites. Nothing else happens with it. Your email is not added to a marketing list, not sold, not syndicated to lead-gen partners, not handed to legal-marketing firms. There is no marketing list.",
      "PostHog and Vercel each receive the analytics events described above. Both providers have their own privacy disclosures and act as processors for us — we control what is sent and we do not authorize them to sell or share what they collect.",
    ],
  },
  {
    marker: "§ III",
    title: "What we don't do",
    paragraphs: [
      "We do not sell your information. We do not run advertising on this site, so there are no ad-network trackers to ride along. We do not embed third-party social media pixels. We do not share what you send us with anyone except the service providers needed to store it, draft your letter, and email it to you. We do not retain analytics tied to a personal identifier beyond what is necessary to operate the site.",
      "We also do not knowingly collect information from children under 16. The service is built for adults navigating their own legal questions; if you are a minor, please ask a parent or guardian to reach out for you.",
    ],
  },
  {
    marker: "§ IV",
    title: "Your rights",
    paragraphs: [
      "If you want a copy of what we have on you, or you want it deleted, email info@imfrustrated.org from the address you submitted with and we will handle it. There is no portal and no form; requests are handled manually. We will respond within thirty days.",
      "If you are a resident of California, the EEA, the UK, or another jurisdiction with statutory data-subject rights, those rights apply here as well. Same email, same person, same response.",
    ],
  },
  {
    marker: "§ V",
    title: "Cookies and storage",
    paragraphs: [
      "PostHog and Vercel Analytics may set their own cookies or use browser storage to support measurement. We do not set cookies for advertising or for tracking you across other sites. The site itself does not require an account, does not log you in, and does not store anything in your browser for the purposes of identification.",
    ],
  },
  {
    marker: "§ VI",
    title: "Contact",
    paragraphs: [
      "Reach us at info@imfrustrated.org for any privacy question, deletion request, or correction. The service operator is Imfrustrated.org, Inc., a New York not-for-profit corporation.",
    ],
  },
];

// U8 draft D, approved by Nick (CONTROL 2026-11-08), verbatim.
export const LETTER_CHAT_SECTION: Omit<Section, "marker"> = {
  title: "The letter chat",
  paragraphs: [
    { lead: "What we store.", text: "What you type into the letter chat is saved so we can draft your letter, after we automatically remove anything that looks like a Social Security number, card or account number, phone number, email address or date of birth. It is tied to a private link that only you hold. We don't ask for your name or address, and the letter leaves blanks for them." },
    { lead: "Who processes it.", text: "Your answers are sent from our own server to Anthropic, the AI provider we use, to look up the law that applies and draft your letter. Anthropic processes them only to do that. We also look up laws on official public websites." },
    { lead: "How long we keep it.", text: "Your case, including your letter, is deleted 30 days after you started it, or 7 days after you started if you never finish the questions. This happens whether or not it has passed our checks. Save or print your letter before then." },
    { lead: "Your IP address.", text: "To stop abuse, we keep a scrambled (hashed) form of your IP address for 31 days to count how often the chat is used from one connection. We do not keep the address itself." },
    { lead: "During our early test.", text: "While the letter chat is in its early test, your letter is checked before you see it. That check is not legal advice. It ends with the letter being released or with a decision that we can't help with this one." },
    { lead: "If you ask for an email (when offered).", text: "If you choose \"email me when it's ready,\" we keep that one address with your case, use it to send you one email with your private link, and delete it when your case is deleted. It is never added to a list or used for anything else." },
  ],
  };

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function privacySections(env: FlagEnv): Section[] {
  if (!chatIsPublic(env)) return BASE;
  const out = [BASE[0], { ...LETTER_CHAT_SECTION, marker: "" }, ...BASE.slice(1)];
  return out.map((s, i) => ({ ...s, marker: `§ ${ROMAN[i]}` }));
}
