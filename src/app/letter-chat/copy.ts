// /letter-chat visitor copy (spec r5 §1). Lines quoted from the spec are verbatim; U8 owns
// re-wording and Nick's one-time approval. N1: this tree must never carry the words the
// banned-words test greps for (tests/imf-chat/letter-chat-copy.test.ts).

export const DISCLAIMER_V = "v1";

// §1.1, verbatim.
export const DISCLAIMER =
  "I'm Frustrated offers free legal information and self-help tools. We help you write your own letter. We are not your lawyers, nothing here is legal advice, and no attorney reviews your letter. You send it yourself.";

// ACK_SAFETY, verbatim from second-nick ops/imf_letter_pipeline.py.
export const ACK_SAFETY =
  "I'm Frustrated shares free information and letter templates. We aren't your lawyers, and nothing we send is legal advice.";

export const START_BUTTON = "I understand, start.";

export const STATE_PROMPT = "Which state is this in?";

export const SAFETY_QUESTIONS = [
  { key: "danger", text: "Is anyone in danger right now, or are you thinking of hurting yourself?" },
  { key: "deadline", text: "Is there a court date, filing deadline or eviction date in the next 7 days?" },
  { key: "lawyer", text: "Do you already have a lawyer, or is this already in court?" },
] as const;

export const CATEGORIES: Array<{ value: string; label: string }> = [
  { value: "deposit", label: "Landlord / deposit" },
  { value: "refund", label: "Refund / billing" },
  { value: "wages", label: "Wages / final pay" },
  { value: "credit", label: "Credit report / debt collector" },
  { value: "repair", label: "Repair / contractor / warranty" },
  { value: "insurance", label: "Insurance delay" },
  { value: "other", label: "Something else" },
];

export const PARKING_LINK = "Parking ticket? Use our parking appeal letters";

// §1.4, verbatim.
export const PII_HINT =
  "Don't type your name, address, account numbers or SSN. The letter leaves blanks for those.";

export const REDACTED_NOTE = "We removed something that looked like personal details. The letter will leave a blank for it.";

// §1.5, verbatim (the [state] and [link] slots are filled in).
export const ackLine = (state: string) =>
  `Got it. We're researching the law for ${state} and drafting your letter. This usually takes 10-20 minutes. Keep this page open or save this private link:`;
export const BETA_HOLD_LINE =
  "A person at I'm Frustrated checks every letter before you see it, so it can take up to 2 days.";

// §1.7, verbatim.
export const OFFLINE_LINE =
  "Our letter writer is offline right now. Your case is saved and will run when it's back. Save this private link.";
export const DAY_CAP_LINE = "We've hit today's free limit. Your case is saved and runs tomorrow.";
// Not in the spec: the global new-case cap refuses at submit, so the case is NOT saved. U8 to word.
export const DAY_LIMIT_SUBMIT = "We've hit today's free limit for new letters. Please come back tomorrow.";
export const CASE_LIMIT = "You've started the most letters we can write for one person right now. Please try again later.";

export const FOLLOWUP_TITLE = "Questions about your letter?";
export const PAUSED_LINE = "The letter chat is paused right now. Our free letter templates are still here.";

export const LEGAL_AID_LINK = { href: "https://www.lawhelp.org/", label: "LawHelp.org (free legal aid)" };

export const ERRORS: Record<string, string> = {
  rate_limited: "Too many messages in a short time. Please wait a few minutes and try again.",
  case_limit: CASE_LIMIT,
  day_limit: DAY_LIMIT_SUBMIT,
  followup_limit: "You've used all 5 questions for this letter.",
  followup_pending: "We're still answering your last question.",
  chat_paused: PAUSED_LINE,
  beta_only: "This page isn't open yet.",
  story_length: "That's more than we can take for the whole story (6,000 characters). Please shorten it.",
  turn_length: "Please keep each message under 2,000 characters.",
  case_closed: "This case is closed.",
  not_found: "We couldn't find that case. The link may have expired.",
};
export const GENERIC_ERROR = "Something went wrong. Please try again.";

// ---- U6b UI labels. Plain interface labels only: no legal claims. Lines marked "§1" are spec-verbatim.
export const PAGE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export const STATE_OPTIONS: Array<{ value: string; label: string }> = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"],
  ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"],
  ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"],
  ["ME", "Maine"], ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
  ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
  ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"],
  ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"], ["SD", "South Dakota"],
  ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"],
  ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
].map(([value, label]) => ({ value, label }));
export const NON_US = { value: "non_us", label: "Outside the US" };
export const STATE_PLACEHOLDER = "Choose a state";
export const CONTINUE = "Continue";
export const YES = "Yes";
export const NO = "No";
export const SAFETY_INTRO = "A few quick safety questions first.";
export const CATEGORY_PROMPT = "What is this about?";
export const SEND = "Send";
export const SUBMIT = "Write my letter";
export const SUBMIT_PROMPT = "Ready to write your letter?";

// §1.7: the first progress line, used until the server sends its own.
export const PROGRESS_DEFAULT = "Checking your situation";
export const COPY_LINK = "Copy link";
export const COPIED = "Copied";

// §1.8.
export const LETTER_TITLE = "Your letter";
export const COPY_LETTER = "Copy";
export const DOWNLOAD_TXT = "Download .txt";
export const PRINT = "Print";
export const COVER_TITLE = "How to finish and send it";
export const SOURCES_TITLE = "Sources we checked";
export const ASK = "Ask";
export const ANSWER_PENDING = "Answering...";
export const startOver = "Start a new letter";
export const PARKING_HREF = "/letters/parking";
export const CALL_911 = "Call 911";
export const CALL_988 = "Call 988";
export const TEXT_988 = "Text 988";
