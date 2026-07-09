# 818 Capital Partners — conversion redesign package

Private deliverable for **818 Capital Partners** (not part of the curated Awesome DESIGN.md collection).

## Live preview (open this)

**https://blacks-buck-step-exit.trycloudflare.com/**

Stable Vercel URL (updating): https://818-capital-redesign-mock-818capitalpartners-projects.vercel.app

Or download `homepage-mock.html` from this folder and open it in your browser.

## What’s in here

| File | What it is |
|------|------------|
| [`DESIGN.md`](./DESIGN.md) | Design tokens, anti-patterns, page architecture, locked hero copy |
| [`homepage-mock.html`](./homepage-mock.html) | Clickable homepage mock — tagline hero → Partner System → Dealroom capture |
| [`specs/dealroom-form.md`](./specs/dealroom-form.md) | 5-field scenario form: validation, intent routing, thank-you, analytics |

## Strategy (locked decisions)

1. **Hero tagline stays** — *The question isn't how many deals you've done. It's how many you could do, with the right partner.*
2. **Differentiator = Partner System** — AI price/structure + Dealroom + multi-party sync, told as one rail
3. **Primary CTA = Enter Dealroom** — Call secondary; chat/WhatsApp/book = recovery only
4. **Brokers isolated** on `/brokers` with the same system language

## Preview the mock

Open locally:

```bash
open 818-capital-partners/homepage-mock.html
# or
python3 -m http.server 8765 --directory 818-capital-partners
```

Then visit `http://localhost:8765/homepage-mock.html`.

## Build next

- Wire `POST /api/dealroom/scenarios` per form spec
- Mirror copy onto `/brokers` using DESIGN.md broker section
- Social templates (funded card, before/after, system still) using the same tokens
