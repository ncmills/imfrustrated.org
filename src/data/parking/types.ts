import type { LetterFAQ } from "@/data/letters/types";

export type ParkingDefenseSlug =
  | "broken-meter"
  | "obscured-signage"
  | "valid-payment"
  | "wrong-ticket-details"
  | "grace-period"
  | "not-my-vehicle"
  | (string & {}); // allow city-specific extras from published grounds

export interface CodeRef {
  label: string;     // e.g. "34 RCNY §4-08(h) — Metered parking"
  citation: string;  // e.g. "34 RCNY §4-08"
  url: string;       // official host (nyc.gov rules / American Legal / Municode)
}

export interface SourceRef {
  label: string;     // e.g. "NYC Dept. of Finance — Dispute a Parking Ticket"
  url: string;       // official .gov page
}

export interface ParkingDefense {
  slug: ParkingDefenseSlug;
  citySlug: string;
  title: string;
  metaDescription: string;
  whenItApplies: string;
  body: string;                 // defense statement with [PLACEHOLDERS]
  evidenceChecklist: string[];
  cityNotes: string;
  codeCite: CodeRef;
  howToSubmit: string[];
  ifThisDoesntWork: string;
  faqs: LetterFAQ[];
  sources: SourceRef[];
  verifiedAt: string;           // ISO date
  publishedAt: string;
  updatedAt?: string;
}

export interface ParkingCity {
  slug: string;
  city: string;
  state: string;
  agency: string;
  submitOnlineUrl: string;
  submitMailAddress: string;
  submitInPerson?: string;
  howToContest: string[];
  contestDeadlineDays: number;
  contestDeadlineNote: string;
  penaltyNote: string;
  municipalCodeRefs: CodeRef[];
  recognizedDefenses: ParkingDefenseSlug[];
  defenses: ParkingDefense[];   // authored leaves for this city
  faqs: LetterFAQ[];
  sources: SourceRef[];
  verifiedAt: string;
  publishedAt: string;
  updatedAt?: string;
}
