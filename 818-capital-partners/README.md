# 818 Capital Partners — conversion redesign package

**Source of truth for the live site:** GitHub `818capitalpartners/818-marketing-site` (www.818capitalpartners.com).  
**Claude Design** is exploration only — not the final live design. From it we keep **one** idea: the continuous moving funded ticker above the top.

## What’s new in this pass

- **Full-bleed moving funded ticker** above the utility bar + nav (live deal data, continuous marquee).
- Live utility row kept under it (Open · funding now + phone / email).
- Drop-in patch for the marketing site: `marketing-site-patches/FundedTickerMarquee.tsx`.

## Preview

**CDN (no tunnel):**
- Hybrid: https://raw.githack.com/818capitalpartners/awesome-design-md/cursor/818-capital-redesign-39bf/818-capital-partners/hybrid-v3-standalone.html
- Element test: https://raw.githack.com/818capitalpartners/awesome-design-md/cursor/818-capital-redesign-39bf/818-capital-partners/ui-element-test.html

**Download:** open the file on GitHub → ⋯ → Download → open locally.

## Land ticker on production

This workspace cannot write to the private `818-marketing-site` repo.  
Open a cloud agent on **`818-marketing-site`** and point it at `818-capital-partners/marketing-site-patches/`.

## Package

| File | What |
|------|------|
| `hybrid-v3-standalone.html` | Recommended mock (live brand + moving ticker + Dealroom spine) |
| `ui-element-test.html` | Live vs v2 vs Hybrid element matrix |
| `marketing-site-patches/` | React marquee for the live Next.js site |
| `DESIGN.md` | Tokens + conversion IA |
| `specs/dealroom-form.md` | 5-field Dealroom form |

## Locked

- Hero tagline unchanged  
- Brokers stay on `/brokers`  
- Single primary CTA: Enter Dealroom  
