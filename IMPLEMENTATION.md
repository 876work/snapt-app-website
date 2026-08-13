# Snapt marketing site — implementation notes

Implementation of the Claude Design handoff bundle in `project/`. The bundle
(`README.md`, `chats/`, `project/`) is left untouched as reference material.

**Stack:** Next.js 16 (App Router) + TypeScript + CSS Modules. No Tailwind — the
design system's four token files are copied verbatim into `styles/tokens/` and
everything styles against `var(--*)`.

```
app/            layout (metadata/OG), / (coming soon), /home, /explore
components/
  site/         Header, Footer, StoreBadges, NewsletterForm, HoneypotField
  home/         one component + CSS module per section
  explore/      PhoneFan, FeatureRows, Reveal
  fx/           SideRays, MaskedHeading, AccordionGallery (ported from project/*.jsx)
  ds/           VerifiedBadge, StatusTag (ported verbatim from _ds_bundle.js)
lib/            links.ts, nav.ts (HOME_PATH + header nav), faq.ts, netlifyForms.ts
styles/         globals.css + tokens/ (verbatim design-system copies)
public/assets/  img/ (occasion + section photos), screens/ (app screenshots)
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Coming-soon holding page — brand mark, one line, contact email |
| `/home` | The full marketing homepage |
| `/explore` | Explore the app |

**To launch**, move `app/home/page.tsx` back to `app/page.tsx` and set
`HOME_PATH` in `lib/nav.ts` to `'/'`. Every in-site link to the homepage — the
header nav, the footer columns, the Explore CTA and "Become a creator" link —
goes through that one constant, so nothing else needs touching.

`/home` and `/explore` stay publicly reachable by direct URL while `/` shows the
holding page; they are simply not linked from it. If you want them hidden from
search engines until launch, add `robots: { index: false }` to each page's
`metadata` — say the word and it is a two-line change.

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
| Cancellation FAQ answer — check it against the terms once published | `lib/faq.ts` |
| **OG share image** — `og-image.png` is referenced but does not exist | drop a 1200 × 630 at `public/assets/og-image.png` |

The OG image matters more than usual: the brief calls out that this link will
spread on WhatsApp in Saint Lucia. Until that file exists the share preview has
no image.

## Forms (Netlify Forms)

All three forms submit to [Netlify Forms](https://docs.netlify.com/manage/forms/setup/).

| Form name | Component | Fields |
| --- | --- | --- |
| `contact` | `components/home/Contact.tsx` | `firstName`, `lastName`, `email`, `message` |
| `newsletter` | `components/site/NewsletterForm.tsx` | `email` |
| `app-link` | `components/home/Download.tsx` | `email` |

Each form also carries a `bot-field` honeypot (`components/site/HoneypotField.tsx`)
— hidden from real users, so a submission that fills it in is a bot and Netlify
discards it. Fields named `email` are what Netlify uses as the reply-to address
on notifications.

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

Netlify's built-in Akismet spam filtering runs on top of the honeypot. If spam
still gets through, the next step is reCAPTCHA (`data-netlify-recaptcha="true"`
plus a `<div data-netlify-recaptcha="true">` in the form), which does add a
visible widget.

## Images

The three "empty" occasion tiles and all eleven app screenshots were **not**
placeholders — real images were stored in `project/.image-slots.state.json` as
base64 webp. They are extracted to `public/assets/`:

- `img/corporate.webp`, `img/family.webp`, `img/graduation.webp` — occasion tiles
- `screens/app-screenshot.webp` — hero phone
- `screens/fan-1…5.webp` — Explore phone fan
- `screens/row-{browse,book,session,upload,delivery,creator}.webp` — Explore rows

### ⚠️ The app screenshots are low-resolution

They came out of the design tool as compressed thumbnails — 161–236px wide,
where the phone frames need roughly 700px to look sharp on a Retina screen.
Every one is about **3× short**, which is why they look blurry:

| file | current | needs (3×) |
| --- | --- | --- |
| `app-screenshot` | 236 × 512 | 768 wide |
| `fan-1`, `fan-5` | 161 × 348 | 522 wide |
| `fan-2`, `fan-4` | 170 × 368 | 552 wide |
| `fan-3` | 190 × 412 | 618 wide |
| `row-*` (six) | ~231 × 500 | 696 wide |

**The fix is to replace the files, not to change any code.** Take screenshots on
an iPhone 17 Pro Max (or the matching simulator) — a native screenshot is
**1320 × 2868 px**, comfortably more than any slot needs — and save them over
the existing paths, keeping the filenames. The frames are `object-fit: cover` at
the device's 440 : 956 ratio, so a native screenshot drops straight in with no
cropping.

PNG or WebP both work; WebP at quality ~85 keeps them small. Nothing scales
these up, so any source at or above the "needs" column will be sharp.

If you later want the browser to download smaller variants on small screens
rather than the full-size file, that means switching these to `next/image` —
a contained change, worth doing once the real screenshots are in.

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

6. **Phone frames use the iPhone 17 Pro Max ratio** (440 : 956) rather than the
   prototype's 390 : 780 and 390 : 844.

7. **Both pages share one header nav and one footer.** The prototype gave each
   page its own link set — the Explore page dropped "Explore the app" from the
   nav while you were on it, and used a condensed footer. The nav is now shared
   (`lib/nav.ts`) with the current page marked by a yellow underline, and the
   Explore page uses the same full footer as the homepage.

8. **The Explore CTA panel is left-aligned**, so its heading spans the panel
   instead of sitting in a 22ch centred column.

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
