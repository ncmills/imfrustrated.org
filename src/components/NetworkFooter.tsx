import { getNetworkSites } from "@/lib/network-sites";

/**
 * Small, low-contrast cross-site footer.
 * Visible to users and crawlers. Intentionally understated — styled to match
 * the Breathing Room palette's muted-warm footer treatment.
 * Do NOT use rel="nofollow" — we want to pass link equity across the network.
 */
export function NetworkFooter({ currentDomain }: { currentDomain: string }) {
  const sites = getNetworkSites(currentDomain);
  if (sites.length === 0) return null;
  return (
    <p aria-label="Sister sites" className="text-[10px] text-muted-warm/40">
      <span className="mr-1">From our network:</span>
      {sites.map((s, i) => (
        <span key={s.domain}>
          {i > 0 && <span className="opacity-60"> · </span>}
          <a
            href={`https://${s.domain}`}
            title={s.tagline}
            rel="noopener"
            className="hover:text-muted-warm transition-colors"
          >
            {s.label}
          </a>
        </span>
      ))}
    </p>
  );
}
