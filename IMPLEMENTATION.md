# Snapt marketing site — implementation notes

Implementation of the Claude Design handoff bundle in `project/`. The bundle
(`README.md`, `chats/`, `project/`) is left untouched as reference material.

**Stack:** Next.js 16 (App Router) + TypeScript + CSS Modules. No Tailwind — the
design system's four token files are copied verbatim into `styles/tokens/` and
everything styles against `var(--*)`.

```
app/            layout (metadata/OG), / (homepage), /explore
components/
  site/         Header, Footer, FooterSlim, StoreBadges, NewsletterForm
  home/         one component + CSS module per section
  explore/      PhoneFan, FeatureRows, Reveal
  fx/           SideRays, MaskedHeading, AccordionGallery (ported from project/*.jsx)
  ds/           VerifiedBadge, StatusTag (ported verbatim from _ds_bundle.js)
lib/            links.ts (store URLs, contact routes), faq.ts (FAQ copy)
styles/         globals.css + tokens/ (verbatim design-system copies)
public/assets/  img/ (occasion + section photos), screens/ (app screenshots)
```

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # both routes prerender static
npm run lint
```

## Before launch — the placeholders

Every one of these is marked with a `TODO(launch)` comment in the source.

| What | Where |
| --- | --- |
| App Store / Play Store URLs (currently `#`) | `lib/links.ts` |
| QR codes (dashed placeholder boxes in hero + download block) | `lib/links.ts` → `STORE_ONELINK`, `Hero.tsx`, `Download.tsx` |
| Privacy policy + Terms URLs (currently `#`) | `lib/links.ts` |
| GA4 `gtag.js` snippet | `app/layout.tsx` |
| FAQ answers marked `[Placeholder …]` | `lib/faq.ts` |
| **OG share image** — `og-image.png` is referenced but does not exist | drop a 1200 × 630 at `public/assets/og-image.png` |

The OG image matters more than usual: the brief calls out that this link will
spread on WhatsApp in Saint Lucia. Until that file exists the share preview has
no image.

## Forms (Netlify Forms)

All three forms submit to [Netlify Forms](https://docs.netlify.com/manage/forms/setup/).

| Form name | Component | Fields |
| --- | --- | --- |
| `contact` | `components/home/Contact.tsx` | `firstName`, `lastName`, `email`, `message` |
| `newsletter` | `components/site/NewsletterForm.tsx` | `newsletter` |
| `app-link` | `components/home/Download.tsx` | `email` |

Netlify's build bot registers forms by parsing static HTML in the deploy, and the
Next.js runtime does not emit parseable HTML for app routes. So the forms are
declared in **`public/__forms.html`** — a hidden static file carrying one
`<form data-netlify="true">` per form with matching field names. The React forms
post urlencoded data to that same path with a `form-name` field
(`lib/netlifyForms.ts`).

**If you add, rename, or remove a form field, change it in `public/__forms.html`
too.** Netlify only stores fields it registered at build time; anything not
declared there is silently dropped from the submission.

Netlify stores submissions — it does not forward them. Add a notification under
**Forms → Form notifications** in the Netlify UI to have them emailed on. Note
that this also means the "email yourself the link" form captures the address but
does not send a link; that needs a notification or an outbound integration.

Forms use native `required` validation, so an empty submit is blocked rather
than falling through to the success state. A failed POST shows an error rather
than a false confirmation, and submit buttons disable while in flight.

Two things deliberately *not* added, both one-liners if you want them:

- **Honeypot spam field** (`data-netlify-honeypot="bot-field"` plus a hidden
  `bot-field` input). Invisible to users; worth adding before the link spreads.
- **Renaming the newsletter field** from `newsletter` to `email`. Netlify treats
  a field literally named `email` as the reply-to address on notifications, so
  the newsletter form currently won't get that. Left as-is to avoid changing
  markup that wasn't part of the request.

## Images

The three "empty" occasion tiles and all eleven app screenshots were **not**
placeholders — real images were stored in `project/.image-slots.state.json` as
base64 webp. They are extracted to `public/assets/`:

- `img/corporate.webp`, `img/family.webp`, `img/graduation.webp` — occasion tiles
- `screens/app-screenshot.webp` — hero phone
- `screens/fan-1…5.webp` — Explore phone fan
- `screens/row-{browse,book,session,upload,delivery,creator}.webp` — Explore rows

Still stand-ins: the "Shot on Snapt" portfolio gallery uses uploaded stock photos
(`components/home/Portfolio.tsx`, `PORTFOLIO_ITEMS`) — swap for real creator work
at 900 × 1200 (3:4).

## Deliberate deviations from the prototype

Everything else is a faithful recreation. These five are not:

1. **`AccordionGallery` media sizing (bug fix).** The prototype computed a media
   size into a ref but never wrote `--ag-media-size` to the DOM, so every panel's
   photo fell back to a fixed 320px box and could not cover the ~570px expanded
   panel — bare overlay colour showed at its edges. The variable is now set,
   which is what the sizing maths and parallax shift clearly intend.

2. **Floating-label inputs (bug fix).** The contact form used `placeholder=""`.
   `:placeholder-shown` does not match an empty placeholder, so the labels were
   permanently stuck in the raised state. Changed to `placeholder=" "`, which is
   what makes the two states the CSS defines actually work.

3. **No horizontal scroll at 320px (bug fix).** The download panel's two columns
   had a hard `min-width: 280px` while the panel's own padding left only 216px,
   pushing the page into horizontal scroll. Now `min-width: min(280px, 100%)`.
   Verified: no overflow at 320 / 390 / 1280 on both pages.

4. **Breakpoint gating via CSS, not JS.** The prototype used
   `matchMedia('(min-width: 880px)')` in component state to show/hide the header
   section links, hero QR panel, and sticky mobile CTA. These are plain media
   queries now — identical pixels, but no hydration flash and they work with JS
   disabled.

5. **Sticky mobile CTA clearance.** Added 74px bottom padding below 880px so the
   fixed CTA bar no longer covers the last line of the footer.

## Copy left as-is (worth a second look)

- The portfolio heading reads **"Your Style, Your Chose"**. Kept verbatim from
  the design, but it looks like a typo for "Your Choice", and it is title case
  where the design system calls for sentence case everywhere.
- The hero pop-out badges are plain styled text in the exported homepage, while
  the Explore page uses the real design-system `VerifiedBadge` / `StatusTag`
  components. The chat transcript says the homepage badges were switched to the
  DS components, but the exported file does not reflect that — the file was
  followed. Say the word and the homepage hero can use the DS chips too, which
  would make it a yellow `✓ VERIFIED` chip instead of gold text.

## Verified

- `npm run build` — both routes prerender static; `npx tsc --noEmit` and
  `npm run lint` both clean.
- No horizontal overflow at 320 / 390 / 1280 on `/` and `/explore`.
- Every `<img>` has an `alt`; the only empty one is the masked heading's
  decorative photo fill (the heading's own text carries the meaning — its
  accessible name resolves to "Be in the moment. We've got the rest.").
- One `<h1>` per page, no unnamed links/buttons, no unlabelled inputs.
- Under `prefers-reduced-motion: reduce`: zero CSS animations and zero GSAP
  animations running, the masked heading settles fully visible, and the Explore
  feature rows render visible without needing a scroll.
- FAQ opens on the first question; accordion gallery is reachable by keyboard
  (tab + arrow keys) and stacks vertically under 520px.

Note: `styles/tokens/typography.css` loads Inter from Google Fonts via `@import`,
matching the prototype. If you would rather self-host, swap it for
`next/font/google`.
