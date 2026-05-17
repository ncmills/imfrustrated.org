import type { CategoryMeta, LetterCategory, LetterTemplate } from "./types";
import { landlordLetters } from "./landlord";
import { creditCardLetters } from "./credit-card";
import { consumerLetters } from "./consumer";

export type { LetterCategory, LetterTemplate, CategoryMeta } from "./types";

const allLetters: LetterTemplate[] = [
  ...landlordLetters,
  ...creditCardLetters,
  ...consumerLetters,
];

const slugSet = new Set(allLetters.map((l) => `${l.category}/${l.slug}`));

export function getAllLetters(): LetterTemplate[] {
  return allLetters;
}

export function getLetter(category: LetterCategory, slug: string): LetterTemplate | undefined {
  return allLetters.find((l) => l.category === category && l.slug === slug);
}

export function getLettersByCategory(category: LetterCategory): LetterTemplate[] {
  return allLetters.filter((l) => l.category === category);
}

// Filter declared related-slugs to those that actually exist on the site.
// Templates may list aspirational forward-links; the renderer only shows real ones.
export function getRelatedLetters(letter: LetterTemplate, max = 6): LetterTemplate[] {
  const related: LetterTemplate[] = [];
  for (const slug of letter.relatedSlugs) {
    if (related.length >= max) break;
    const match = allLetters.find(
      (l) => l.slug === slug && !(l.category === letter.category && l.slug === letter.slug)
    );
    if (match) related.push(match);
  }
  return related;
}

export const categoryMeta: Record<LetterCategory, CategoryMeta> = {
  landlord: {
    slug: "landlord",
    label: "Landlord",
    blurb: "Security deposits, repairs, lease problems, and the rest of the rental life.",
    hubLede:
      "Most landlord-tenant disputes have a clear statutory backbone — written notice triggers a deadline, the deadline triggers a remedy. The hard part is the paper trail. These are the letters that put it on the record.",
  },
  employer: {
    slug: "employer",
    label: "Employer",
    blurb: "Wage and hour, leave, harassment, accommodations, and life at work.",
    hubLede: "Coming soon.",
  },
  neighbor: {
    slug: "neighbor",
    label: "Neighbor",
    blurb: "Noise, fences, dogs, parking, and the things that make peace fragile.",
    hubLede: "Coming soon.",
  },
  hoa: {
    slug: "hoa",
    label: "HOA",
    blurb: "Fines, parking, paint colors, and the limits of board authority.",
    hubLede: "Coming soon.",
  },
  airline: {
    slug: "airline",
    label: "Airline",
    blurb: "Delays, cancellations, luggage, and getting what the rules already say you're owed.",
    hubLede: "Coming soon.",
  },
  hotel: {
    slug: "hotel",
    label: "Hotel",
    blurb: "Overcharges, room conditions, and disputes that the front desk can't resolve.",
    hubLede: "Coming soon.",
  },
  "credit-card": {
    slug: "credit-card",
    label: "Credit Card",
    blurb: "Disputed charges, billing errors, and the Fair Credit Billing Act in your favor.",
    hubLede:
      "The Fair Credit Billing Act gives you a strict, time-bound path for disputing credit card charges — 60 days to write, 30 days for the issuer to acknowledge, 90 days to resolve. These are the letters that invoke it.",
  },
  insurance: {
    slug: "insurance",
    label: "Insurance",
    blurb: "Claim denials, appeals, EOB disputes, and getting coverage where coverage is owed.",
    hubLede: "Coming soon.",
  },
  government: {
    slug: "government",
    label: "Government",
    blurb: "Tickets, tax assessments, records requests, and benefit denials.",
    hubLede: "Coming soon.",
  },
  school: {
    slug: "school",
    label: "School",
    blurb: "Grades, accommodations, bullying, and the rights kids and parents already have.",
    hubLede: "Coming soon.",
  },
  family: {
    slug: "family",
    label: "Family",
    blurb: "Cease-and-desist, returned property, and the conversations no one wants to have.",
    hubLede: "Coming soon.",
  },
  consumer: {
    slug: "consumer",
    label: "Consumer",
    blurb:
      "Debt collectors, credit reports, medical records, and the federal statutes that protect ordinary people.",
    hubLede:
      "A handful of federal statutes — the FDCPA, the FCRA, HIPAA — give consumers strong, well-defined rights that work in all 50 states. These are the letters that invoke them.",
  },
};

export function getAvailableCategories(): CategoryMeta[] {
  const presentCategories = new Set(allLetters.map((l) => l.category));
  return Array.from(presentCategories).map((c) => categoryMeta[c]);
}

export function hasLetter(path: string): boolean {
  return slugSet.has(path);
}
