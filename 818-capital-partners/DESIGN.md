---
version: alpha
name: 818-Capital-Partners-redesign
description: >
  Conversion redesign for 818 Capital Partners — a direct private lender for real-estate
  operators. Brand-first hero locks the existing tagline; the Partner System (AI pricing,
  structure tools, Dealroom, multi-party sync) is the conversion spine; primary CTA is
  always Enter Dealroom. Visual language: operator-finance seriousness — charcoal steel,
  warm paper, single copper signal accent. Not purple fintech, not cream-serif editorial,
  not dashboard clutter.
---

# 818 Capital Partners — DESIGN.md

## Brand

**Name:** 818 Capital / 818 Capital Partners  
**Tagline (locked — hero only, do not rewrite):**  
> The question isn't how many deals you've done. It's how many you could do, with the right partner.

**Positioning line:** The relationship behind the capital.  
**Product spine:** The Partner System — Price → Structure → Room → Sync  
**Primary conversion surface:** Dealroom (`Enter Dealroom` / `Run your scenario`)

### Audience split
- **Homepage:** operators / borrowers only
- **Brokers:** `/brokers` only (quiet nav link from home)
- Never give borrower and broker equal weight in the same hero

---

## Design principles

1. **Brand first.** First viewport must fail the “remove the nav — still 818?” test. Wordmark + tagline dominate; no headline may overpower the brand.
2. **One composition.** Hero is not a dashboard. Brand, tagline, one support sentence, one CTA group, one full-bleed visual.
3. **System sells the lead.** AI / Dealroom / portal / sync are the differentiator — presented as one operating system, not a gadget gallery.
4. **One primary door.** Enter Dealroom. Call is secondary. Chat / WhatsApp / Book are recovery only.
5. **One job per section.** One headline, one short support line, one CTA.
6. **Real visual anchor.** Funded assets, before/after rehabs, Dealroom UI as atmosphere — not abstract gradients as the main idea.
7. **Motion with purpose.** 2–3 intentional motions max (see Motion).

### Anti-patterns (do not ship)
- Purple-on-white / purple-to-indigo gradients
- Warm cream (#F4F1EA) + terracotta + high-contrast serif broadsheet
- Hero overlays: floating badges, promo chips, stat pills on media
- Cards in the hero
- Six equal CTAs
- Tier picker or playbook links in the first two viewports
- Glow effects, emoji, multi-layer shadows, rounded-full pill clusters

---

## Color

Operator-finance: dark steel + warm paper + one copper signal.

```css
:root {
  /* Ink & surfaces */
  --ink: #0c0f12;
  --ink-soft: #1a222c;
  --steel: #243040;
  --slate: #3d4a5c;
  --body: #5c6570;
  --mute: #8a929c;

  --paper: #f3efe6;
  --paper-deep: #e7e0d2;
  --canvas: #f7f4ee;
  --white: #ffffff;

  /* Signal — copper (use sparingly: primary CTA, focus, key numbers) */
  --signal: #c45c26;
  --signal-hover: #a84c1e;
  --signal-soft: #f0d5c4;
  --on-signal: #ffffff;

  /* Dark band */
  --void: #0a0d11;
  --void-elevated: #141a22;
  --on-dark: #f3efe6;
  --on-dark-soft: #a8b0ba;

  /* Lines & state */
  --hairline: #d9d2c4;
  --hairline-dark: #2a3442;
  --positive: #2f6b4f;
  --warning: #b8860b;
  --danger: #9b2c2c;

  /* Dealroom chrome */
  --mono-bg: #121820;
  --mono-line: #2e3a4a;
  --rate: #d4a574;
}
```

**Usage rules**
- Hero / Partner System / Capture: dark bands (`--void` → `--ink-soft`) with `--paper` type
- Funded proof / FAQ / Human: `--canvas` / `--paper` with `--ink` type
- `--signal` only on primary CTA, focus rings, and one proof number per band
- Never use signal as a large fill background

---

## Typography

Expressive, purposeful — not Inter/Roboto/Arial/system as the face.

| Role | Family | Notes |
|------|--------|-------|
| Brand / display | **Fraunces** (soft optical sizing) or **Newsreader** | Tagline + section headlines. Weight 500–600. Tight leading. |
| UI / body | **Söhne** or **Geist** / **DM Sans** | Nav, body, forms. Weight 400–500. |
| Data / rates / IDs | **IBM Plex Mono** or **JetBrains Mono** | Loan $, LTV, deal IDs, proof strip, form meta |

```css
:root {
  --font-display: "Fraunces", "Newsreader", Georgia, serif;
  --font-sans: "DM Sans", "Geist", ui-sans-serif, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
}

/* Scale */
--text-hero: clamp(2.25rem, 4.5vw, 3.75rem);   /* tagline */
--text-h2: clamp(1.75rem, 3vw, 2.5rem);
--text-h3: 1.25rem;
--text-body: 1.0625rem;
--text-sm: 0.875rem;
--text-xs: 0.75rem;
--text-mono: 0.8125rem;
```

**Tagline treatment:** display serif, max ~12–14 words visible per line on desktop; allow natural break after “done.” Soft weight — authority without shouting. Brand wordmark above in sans, tracked slightly, larger than nav.

---

## Layout & spacing

```css
:root {
  --page-max: 1120px;
  --page-pad: clamp(1.25rem, 4vw, 2rem);
  --section-y: clamp(4.5rem, 10vw, 7.5rem);
  --stack: 1.25rem;
  --radius: 4px;       /* sharp; finance, not consumer app */
  --radius-md: 8px;    /* form controls, deal cards only */
  --radius-lg: 12px;   /* Dealroom panel chrome only */
}
```

- Full-bleed hero visual plane (edge-to-edge). No inset media card.
- Content column centers at `--page-max`; proof grids 3-col desktop / 1-col mobile.
- Section rhythm: dark → light → dark → light → dark (capture).

---

## Components

### Buttons
| Variant | Style | Label examples |
|---------|--------|----------------|
| Primary | `--signal` fill, `--on-signal` text, `--radius` | Enter Dealroom · Run your scenario · Price a scenario |
| Secondary | Hairline on current band, transparent fill | Call (917) 993-9194 |
| Ghost / recovery | Text link, `--mute` | Prefer WhatsApp? · Book 15 minutes |

Min height 44px. No pill (`border-radius: 9999px`). No dual primary.

### Form (Dealroom scenario)
- 5 fields only on marketing surfaces (see `specs/dealroom-form.md`)
- Labels above fields; mono helper under field
- Focus: 2px `--signal` ring
- Submit = Primary button full width on mobile

### Layer row (Partner System)
- Number in mono (`01`–`04`)
- Title + one sentence
- Not cards-with-shadows: hairline dividers or quiet left rule
- Optional thin Dealroom UI thumbnail — atmospheric, not a screenshot dump

### Case card
- Allowed: interaction container for “Read the case study”
- Product mono label · market · $ · terms · days
- Hairline border, `--radius-md`, no drop shadow stack

### Sticky mobile bar
- Fixed bottom: **Enter Dealroom** | **Call**
- Hide when capture band is in view

---

## Motion (ship 2–3)

1. **Hero enter:** tagline fades/slides up 12px, 600ms ease-out; CTA follows 80ms later. Visual Ken-Burns subtle (scale 1.0 → 1.04 over 12s) or Dealroom UI parallax.
2. **Before/after:** hover/tap crossfade 400ms on rehab pairs.
3. **Proof strip / capture:** numbers count-up once on scroll into view (median close, funded $) — once only.

No scroll-jacking, no continuous glow pulses, no staggered icon rain.

---

## Page architecture — Home

| # | Section | Band | Job |
|---|---------|------|-----|
| 0 | Nav | void | Brand + Enter Dealroom + Brokers quiet link |
| 1 | Hero | void + full-bleed visual | Brand + **locked tagline** + one support + CTA |
| 2 | Partner System | void-elevated | Price · Structure · Room · Sync |
| 3 | How a deal moves | paper | Scenario → Term sheet → Wire |
| 4 | Funded proof | canvas | 3 cases + before/after |
| 5 | Human half | paper | Operator origin + one quote |
| 6 | Capture | void | 5-field Dealroom form |
| 7 | FAQ | void / ink-soft | Objections beside capture |
| 8 | Footer | ink | Links + NMLS |

**Scroll story:** tagline → desk that prices/structures/syncs → path → proof → human → Enter Dealroom.

### Hero copy (locked)
- **Brand:** 818 Capital  
- **Tagline:** The question isn't how many deals you've done. It's how many you could do, with the right partner.  
- **Support:** One desk. AI that prices and structures. Dealroom that syncs borrower, broker, title, and underwriter — term sheet in 24 hours, wire in 14–21.  
- **Primary:** Enter Dealroom  
- **Secondary:** Call (917) 993-9194  

### Partner System copy
- **Headline:** The right partner isn’t a phone number. It’s a desk that prices, structures, and syncs the whole file.  
- **01 Price:** AI prices DSCR, flip, bridge, STR on the same address in seconds.  
- **02 Structure:** Flip Lab, STR Signal, Sponsor Brief underwrite the project, not just the credit.  
- **03 Room:** Dealroom holds the file — borrower, broker, title, underwriter.  
- **04 Sync:** Portal pushes milestones. You stop chasing.  

---

## Page architecture — Brokers (`/brokers`)

Same tokens and Partner System layers; broker lens copy:

- **Hero headline:** Keep every lender you have. Add the partner that prices in 60 seconds — and syncs the file so you don’t chase it.  
- **Primary CTA:** Price a scenario  
- **Secondary:** Apply to broker program  
- Layers emphasize ranked quote, white-label term sheet, branded Dealroom, non-circumvent + fee lock.

---

## Social / output system (visual)

Same tokens. Templates:
1. **Funded card** — mono meta, $ , days, CTA “Run yours in Dealroom”
2. **Before/after** — 1:1 or 4:5, copper rule, city + close day
3. **System clip cover** — 01–04 layer still
4. **Broker ammo** — white-label sheet crop + fee lock line

Always one CTA destination: Dealroom (operators) or Partner apply (brokers). UTM required.

---

## Accessibility & compliance

- Contrast: paper on void ≥ 4.5:1; signal on white checked for CTA text
- Focus visible on all controls
- NMLS #2832335 in footer and near capture trust microcopy
- Business-purpose disclaimer near form
- Reduce-motion: disable Ken-Burns and count-up

---

## File map in this package

| File | Purpose |
|------|---------|
| `DESIGN.md` | Tokens, rules, architecture (this file) |
| `homepage-mock.html` | Clickable homepage mock implementing the spine |
| `specs/dealroom-form.md` | 5-field component: validation, routing, thank-you |
| `README.md` | How to use this package |
