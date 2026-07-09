# 818 Capital Partners — conversion redesign package

**Important:** v1 of the mock was a wireframe with the wrong visual system. **v2 matches your live brand** (navy / paper / gold / Cormorant / Inter / real property photos) and only changes conversion architecture.

## Live preview

**https://anymore-recruiting-wolf-public.trycloudflare.com/**

Hard-refresh if you still see the old copper mock (`Cmd/Ctrl+Shift+R`).

## What’s in here

| File | What it is |
|------|------------|
| [`DESIGN.md`](./DESIGN.md) | Production tokens + conversion IA |
| [`homepage-mock.html`](./homepage-mock.html) | **v2** polished mock in your live visual language |
| [`assets/img/`](./assets/img/) | Real property photos from your site |
| [`specs/dealroom-form.md`](./specs/dealroom-form.md) | 5-field Dealroom form spec |

## What stayed vs what changed

**Kept from your live site:** palette, type, pill buttons, eyebrows, letterhead rule, photography, tagline.

**Changed for conversion:** Partner System as the story spine, single primary CTA (Enter Dealroom), fewer competing doors, capture form beside FAQ.

## Local preview

```bash
cd 818-capital-partners
python3 -m http.server 8765
# open http://localhost:8765/homepage-mock.html
```
