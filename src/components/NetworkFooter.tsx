import { getNetworkSites } from "@/lib/network-sites";

/**
 * The cross-site strip — the other free tools from the same desk.
 *
 * Two things changed on 2026-08-18 and both were defects, not preferences:
 *
 * 1. The descriptor used to sit in a `title=` attribute. A tooltip is not anchor
 *    text. The words that say what the sibling IS now sit INSIDE the <a>, which
 *    is the only place they carry any weight.
 * 2. It rendered at `text-[10px] text-muted-warm/40` — about 2.4:1 on this
 *    background, under the 4.5:1 floor. "Understated" is the brief; illegible is
 *    not, and a link a reader cannot read is the wrong side of the visible-
 *    cross-links rule this strip exists to honour.
 *
 * Mounted once, inside SiteFooter, so it sits within the <footer> landmark
 * instead of in a second bare <footer> of its own.
 *
 * dofollow on purpose — do NOT add rel="nofollow".
 */
export function NetworkFooter({ currentDomain }: { currentDomain: string }) {
  const sites = getNetworkSites(currentDomain);
  if (sites.length === 0) return null;
  return (
    <nav aria-label="Sister sites" className="mt-10 border-t border-bg/12 pt-7">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-clay-soft">
        Also free, from the same desk
      </p>
      <ul className="mt-3 flex flex-col gap-x-8 gap-y-0.5 sm:flex-row sm:flex-wrap">
        {sites.map((s) => (
          <li key={s.domain}>
            <a
              href={`https://${s.domain}`}
              rel="noopener"
              className="inline-flex min-h-[44px] items-center text-sm text-bg/75 transition-colors duration-300 hover:text-clay-soft"
            >
              <span className="font-semibold text-bg">{s.label}</span>
              <span className="text-bg/60">&nbsp;— {s.tagline}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
