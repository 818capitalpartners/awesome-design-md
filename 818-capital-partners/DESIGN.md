---
version: alpha
name: 818-Capital-Partners-redesign
description: >
  Conversion redesign for 818 Capital Partners that preserves the live brand system
  (navy / warm paper / gold / Cormorant Garamond / Inter / real property photography)
  and restructures the homepage around the Partner System + Dealroom capture spine.
  Visual language is taken from the production site — not reinvented.
---

# 818 Capital Partners — DESIGN.md (conversion redesign)

## Honest framing

The live site already has a strong visual system. This redesign does **not** invent a new look.
It keeps production tokens, type, photography, and button language — and changes **information architecture + CTAs** so the Partner System (AI + Dealroom + sync) converts.

## Brand (locked from production)

**Tagline (hero — do not rewrite):**  
> The question isn't how many deals you've done. It's how many you could do, with the right partner.

**Positioning:** The relationship behind the capital.  
**Spine:** Partner System — Price → Structure → Room → Sync  
**Primary CTA:** Enter Dealroom  
**Secondary CTA:** Call (917) 993-9194  

## Color (from live CSS `:root`)

```css
:root {
  --paper: #fbf9f4;
  --warm-100: #f1ebe0;
  --warm-200: #e5dec8;
  --rule: #dcd3bc;
  --navy-900: #0a1628;
  --navy-800: #102a43;
  --navy-700: #1a2b42;
  --ink-deep: #0e1a24;
  --charcoal: #262626;
  --mute: #6b6b66;
  --gold: #b08a3e;
  --bronze: #997436;
  --gold-line: #efd99a;
  --ok: #1a8754;
}
```

## Typography (from production)

| Role | Family |
|------|--------|
| Editorial / tagline / quotes | **Cormorant Garamond** italic |
| UI / body / nav / buttons | **Inter** |
| Eyebrows | Inter 600, 0.6875rem, tracking 0.2em, bronze |

## Components (match live)

- **Primary button:** navy-900 fill, white text, `border-radius: 9999px`
- **Secondary:** navy outline pill → fills on hover
- **Eyebrow:** bronze uppercase tracking
- **Letterhead rule:** 64×2px bronze bar under section titles
- **Cards:** white on warm paper, warm-200 hairline, soft whisper shadow
- **Hero:** full-bleed funded property photo + navy scrim (not abstract gradients)

## Page architecture (what changes)

| # | Section | Job |
|---|---------|-----|
| 1 | Hero | Brand + **locked tagline** + one support + Enter Dealroom / Call |
| 2 | Partner System | Price · Structure · Room · Sync as one rail |
| 3 | How it works | Scenario → Term sheet → Wire |
| 4 | Funded | Real photos + before/after |
| 5 | Desk | Human half of “partner” |
| 6 | Capture | 5-field Dealroom form + FAQ |

**Cut from home (vs live clutter):** six equal CTAs, tier picker in first viewports, detached AI gadget gallery, deal-mix charts on home.

## Anti-patterns

Do not ship a parallel “AI copper/steel” theme. Do not replace Cormorant/Inter. Do not use purple fintech gradients. Do not put cards or badge clusters in the hero.

## Preview

See `homepage-mock.html` (v2) — uses production tokens + real `/brand/properties` photography.
