# Dealroom scenario form — component spec

Marketing-surface capture for 818 Capital Partners. Primary CTA path: **Enter Dealroom**.

Related: `../DESIGN.md`, `../homepage-mock.html`.

---

## Purpose

Collect enough to soft-quote and open a Dealroom file — not a full loan application.

**Success:** valid submit → Dealroom session created (or queued) → thank-you with same-desk follow-up.

**Non-goals on this form:** credit pull, full entity docs, broker fee lock (broker uses quote desk variant).

---

## Placement

| Surface | Placement | Submit label |
|---------|-----------|--------------|
| Home capture band | Section 6 | Enter Dealroom |
| Sticky mobile | Opens capture or `/dealroom` | Enter Dealroom |
| Program pages | End of page | Run your scenario |
| Hero (optional secondary) | Links to `#capture` | Enter Dealroom |
| Brokers quote desk | `/brokers` | Price a scenario |

---

## Fields (exactly five)

| ID | Name | Type | Required | Label | Placeholder / options |
|----|------|------|----------|-------|------------------------|
| 1 | `address` | text (places autocomplete preferred) | yes | Property address | Street, city, state |
| 2 | `amount` | currency | yes | Loan or purchase amount | e.g. $620,000 |
| 3 | `intent` | select | yes | What are you doing? | DSCR · Fix & Flip · Bridge · STR · Multifamily · Construction · Not sure |
| 4 | `timeline` | select | yes | When do you need to close? | ASAP · 30 days · 60 days · Exploring |
| 5 | `contact` | tel **or** email (single field, detect) | yes | Mobile or email | We’ll send the soft read here |

### Optional hidden / derived (not shown as fields)
- `utm_*` from URL
- `source_page`
- `audience` = `borrower` | `broker`
- `gclid` / `li_fat_id` if present

---

## Validation

### Client (on blur + on submit)

| Field | Rules | Error copy |
|-------|-------|------------|
| `address` | min 8 chars; must include a state-like token or ZIP if no Places result | Enter a full property address |
| `amount` | parse to number; ≥ 50000; ≤ 100000000 | Enter an amount (minimum soft-quote $50,000) |
| `intent` | one of enum | Select what you’re doing |
| `timeline` | one of enum | Select a timeline |
| `contact` | if contains `@` → email RFC-lite; else E.164-ish US phone (10 digits after strip) | Enter a mobile number or email |

**Soft warnings (non-blocking):**
- Amount &lt; $100K and intent = Fix & Flip → “Our flip program usually starts ~$100K — we’ll still take a look.”
- Amount &lt; $150K and intent = DSCR → “DSCR usually starts ~$150K — we’ll still take a look.”

### Server
- Honeypot `company_website` (empty)
- Rate limit by IP + contact
- Normalize phone to E.164; email lowercase
- No credit bureau call at this stage

---

## Routing by `intent`

After create, Dealroom opens (or email magic link) with product lane pre-set:

| intent | Dealroom lane | Soft-read SLA | Notes |
|--------|---------------|---------------|-------|
| DSCR | `dscr` | same day | Offer STR Signal if address in STR-heavy submarket |
| Fix & Flip | `flip` | same day | Prefetch Flip Lab comps when address geocodes |
| Bridge | `bridge` | same day | |
| STR | `str` | same day | STR Signal on by default |
| Multifamily | `mf` | same day | Prompt Sponsor Brief after soft read |
| Construction | `construction` | next business day | May require call |
| Not sure | `scenario_desk` | same day | Run multi-product AI price in parallel |

**Timeline routing**
- `ASAP` → priority queue + SMS if phone present
- `Exploring` → nurture email + Dealroom link; no phone chase first 24h unless they call

---

## Submit UX

1. Button label → **Sending…** (disabled)
2. On success → client navigate to thank-you state (same page `#capture` swap or `/dealroom/thanks?id=`)
3. On failure → inline alert: “Couldn’t open Dealroom — call (917) 993-9194 or retry.”

### Thank-you state copy
- **Headline:** You’re in the room.
- **Body:** Soft read is on the way. Same desk will follow up — usually same day.
- **Actions:**
  - Add the PSA or docs (upload deep link)
  - Text us (sms: link if phone)
  - Book a call if you want to talk structure now (recovery)
- **Do not** show six equal paths again

---

## Trust microcopy (always under submit)

```
No credit pull on soft quote · Confidential · 48 states (excl. VT & ND)
NMLS #2832335 · Min ~$100K flip / $150K DSCR · Business-purpose only
```

Recovery links (small, not buttons): Prefer WhatsApp? · Book 15 minutes

---

## Accessibility

- `<label for>` on every control
- `aria-invalid` + `aria-describedby` pointing at error id
- Submit announces success via `aria-live="polite"`
- Autocomplete: `street-address`, `tel`, `email` as applicable
- Hit target ≥ 44px

---

## Analytics events

| Event | Props |
|-------|-------|
| `scenario_form_view` | page, audience |
| `scenario_form_start` | first field focused |
| `scenario_field_error` | field, rule |
| `scenario_submit_attempt` | intent, timeline, amount_bucket |
| `scenario_submit_success` | intent, dealroom_id, utm_source |
| `scenario_submit_fail` | reason |

Amount buckets: `<100k`, `100–250k`, `250–500k`, `500k–1m`, `1–3m`, `3m+`

---

## API sketch

`POST /api/dealroom/scenarios`

```json
{
  "address": "123 Main St, Dallas, TX 75201",
  "amount": 620000,
  "intent": "DSCR",
  "timeline": "30 days",
  "contact": "+19175551212",
  "contact_type": "phone",
  "audience": "borrower",
  "utm_source": "linkedin",
  "utm_campaign": "funded_card_q3",
  "source_page": "/"
}
```

**201 response**

```json
{
  "dealroom_id": "dr_018f…",
  "soft_read_eta": "same_day",
  "lane": "dscr",
  "thanks_url": "/dealroom/thanks?id=dr_018f…"
}
```

---

## Broker variant differences

| Item | Borrower | Broker |
|------|----------|--------|
| Submit label | Enter Dealroom | Price a scenario |
| Extra field | — | `broker_fee_points` (optional, 0–3) |
| Post-success | Soft read | Ranked panel quote desk |
| Secondary CTA | Call | Apply to broker program |

Still five *visible* core fields; fee is optional sixth for brokers only.

---

## QA checklist

- [ ] Submit with email-only contact works
- [ ] Submit with phone-only contact works
- [ ] Invalid amount blocks and focuses field
- [ ] “Not sure” lands in scenario_desk multi-price
- [ ] Sticky bar hidden when `#capture` in view
- [ ] Reduce-motion: no count-up distraction near form
- [ ] Mobile: one column, primary full width
- [ ] NMLS + business-purpose visible without scroll under button on mobile
