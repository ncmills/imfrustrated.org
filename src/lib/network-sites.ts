/**
 * Cross-site footer links — LEGAL / SELF-HELP CLUSTER (funnel).
 *
 * Network footers are siloed by topic so links stay topically relevant and don't
 * read as a cross-niche link scheme. Equity funnels UPSTREAM toward the highest-
 * priority site only. Cluster priority: aissdi > idonthaveawill > doppelwriter > imfrustrated.
 * This site (imfrustrated, priority 4) links ONLY to sites above it → aissdi,
 * idonthaveawill, doppelwriter (all three).
 */
export interface NetworkSite {
  domain: string; // bare domain, no protocol
  label: string;
  tagline: string;
}

export const NETWORK_SITES: NetworkSite[] = [
  { domain: "aissdi.com", label: "AISSDI", tagline: "Free SSDI approval-odds & judge lookup tools" },
  { domain: "idonthaveawill.com", label: "I Don't Have a Will", tagline: "Free will drafting tool" },
  { domain: "doppelwriter.com", label: "DoppelWriter", tagline: "AI writing tool that learns your voice" },
];

/** Returns sites excluding the current domain (prevents self-linking). */
export function getNetworkSites(currentDomain: string): NetworkSite[] {
  return NETWORK_SITES.filter((s) => s.domain !== currentDomain);
}
