"use client";

/**
 * Drop-in for 818-marketing-site.
 *
 * Live site today: TopUtilityBar shows ONE funded deal that rotates every 5s.
 * This component: continuous horizontal marquee of funded deals — the motion
 * kept from the Claude Design exploration, wired to the live closed-deals feed.
 *
 * Suggested placement: ABOVE the existing TopUtilityBar / sticky header in
 * `src/components/...` (layout shell), so the tape sits above the top nav.
 *
 * Wire `deals` from the same source as the current rotating FundedTicker
 * (closed-deals / fundedDeals module — ids, dealValue, loanType, city, state).
 */

import { useMemo } from "react";

export type FundedTickerDeal = {
  id: number | string;
  dealValue: string;
  loanType: string;
  city: string;
  state: string;
};

type Props = {
  deals: FundedTickerDeal[];
  /** Seconds for one full loop. Default ~55s for a calm finance tape. */
  durationSec?: number;
  className?: string;
};

function Item({ deal }: { deal: FundedTickerDeal }) {
  return (
    <span className="inline-flex items-center gap-2.5 uppercase tracking-wide">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(176,138,62,0.22)]"
        aria-hidden
      />
      <span className="font-semibold text-accent-light">Funded</span>
      <span className="text-navy-200">·</span>
      <span className="tabular-nums font-semibold normal-case text-white">
        {deal.dealValue}
      </span>
      <span className="text-navy-200">·</span>
      <span className="normal-case text-navy-200">{deal.loanType}</span>
      <span className="text-navy-200">·</span>
      <span className="normal-case text-navy-200">
        {deal.city}, {deal.state}
      </span>
    </span>
  );
}

export function FundedTickerMarquee({
  deals,
  durationSec = 55,
  className = "",
}: Props) {
  const loop = useMemo(() => {
    if (!deals?.length) return [] as FundedTickerDeal[];
    // Duplicate once for seamless translateX(-50%) loop
    return [...deals, ...deals];
  }, [deals]);

  if (!deals?.length) return null;

  return (
    <div
      role="region"
      aria-label="Recently funded deals"
      className={`overflow-hidden border-b border-white/10 bg-navy-950 text-[11px] text-navy-200 md:text-xs ${className}`}
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div
          className="flex w-max items-center gap-8 whitespace-nowrap py-2.5 motion-safe:animate-[funded-ticker_var(--ticker-dur)_linear_infinite] motion-reduce:animate-none"
          style={{ ["--ticker-dur" as string]: `${durationSec}s` }}
        >
          {loop.map((deal, i) => (
            <Item key={`${deal.id}-${i}`} deal={deal} />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes funded-ticker {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default FundedTickerMarquee;
