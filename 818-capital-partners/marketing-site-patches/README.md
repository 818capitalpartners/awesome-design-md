# Marketing-site patch: moving funded ticker

**Source of truth:** `818capitalpartners/818-marketing-site` (live at www.818capitalpartners.com).  
**Not source of truth:** the Claude Design file — keep only the *moving ticker* idea from it.

## What live does today

Top utility bar shows **one** funded deal at a time, rotating every **5 seconds** (pulse dot + `Funded · $… · type · City, ST`).

## What to add

A **continuous horizontal marquee** of funded deals **above** that utility bar / sticky nav — same live deal data, calmer finance-tape motion.

## Files

| File | Use |
|------|-----|
| `FundedTickerMarquee.tsx` | Drop into marketing site components; pass the existing closed-deals array |

## Install steps (in `818-marketing-site`)

1. Copy `FundedTickerMarquee.tsx` next to the current Funded / TopUtility component.
2. In the layout shell (above sticky header), render:

```tsx
import FundedTickerMarquee from "@/components/.../FundedTickerMarquee";
import { fundedDeals } from "@/lib/..."; // existing feed

<FundedTickerMarquee deals={fundedDeals} />
{/* existing TopUtilityBar with phone / email can stay below */}
```

3. Keep phone + email on the utility row (live pattern). Optional: remove the 5s single-deal rotator once the marquee is live, so you don’t show funded twice.
4. Respect `prefers-reduced-motion` (component already disables animation).

## This agent couldn’t push to marketing-site

The cloud agent for this thread only has access to `awesome-design-md`.  
Re-run against **`818-marketing-site`** (or grant this agent that repo) to land the component on production.
