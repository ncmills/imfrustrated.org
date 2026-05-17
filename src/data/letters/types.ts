export type LetterCategory =
  | "landlord"
  | "employer"
  | "neighbor"
  | "hoa"
  | "airline"
  | "hotel"
  | "credit-card"
  | "insurance"
  | "government"
  | "school"
  | "family"
  | "consumer";

export interface LetterStateNote {
  state: string;
  note: string;
}

export interface LetterFAQ {
  question: string;
  answer: string;
}

export interface LetterTemplate {
  slug: string;
  category: LetterCategory;
  title: string;
  metaDescription: string;
  lede: string;
  body: string;
  howToUse: string[];
  legalContext: string[];
  stateNotes?: LetterStateNote[];
  ifThisDoesntWork: string;
  relatedSlugs: string[];
  faqs: LetterFAQ[];
  publishedAt: string;
  updatedAt?: string;
}

export interface CategoryMeta {
  slug: LetterCategory;
  label: string;
  blurb: string;
  hubLede: string;
}
