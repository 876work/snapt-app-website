# Snapt Design System

Snapt is a marketplace connecting clients with vetted photographers and videographers ("creators") for in-person sessions across northern Saint Lucia, plus professional remote editing of client-owned footage. Payments are real-world service payments processed via Stripe (USD charged; EC$ shown for display). One product surface: the **Snapt mobile app** (Expo/React Native, iOS + Android), which serves both clients and creators (creator mode has its own dashboard, earnings, and job screens).

**Source:** https://github.com/876work/snapt-app (branch `main`). Everything here — tokens, components, screens, copy — was read from that repo (`lib/theme.ts`, `lib/text.tsx`, `components/ui/*`, `app/**`). Explore it further for deeper fidelity: booking summary, session, creator dashboard, and upload flows are all in `app/`.

## Content fundamentals

- **Voice:** warm, plain, confident. Short declaratives: "Be in the moment. We've got the rest." / "Standard pricing. No haggling." / "Safe, simple, yours."
- **We/you:** the brand is "we", the user is "you". "We'll confirm as soon as one accepts." First names only for creators ("Kayla is confirmed"), never "your creator" dressed up as a name.
- **Honesty is a design rule:** the app never renders a claim the data doesn't support — no invented counts, no fake proximity ("Featured creators", not "Top creators near you"), failure states are stated plainly ("Preview didn't load", "Couldn't load open times — check your connection").
- **Casing:** sentence case everywhere, including buttons ("Check availability", "Create my account"). Overlines are the one ALL-CAPS element ("✓ VERIFIED", "COMING SOON").
- **Emoji:** almost none. One 👋 in the home greeting; a ✓ glyph in the verified badge. Do not add more.
- **Money:** whole USD stays clean ("$60"); "Sessions from $60"; XCD as "EC$" in-app; charges disclosed as "$120 (≈ EC$326.40)".
- **Microcopy hints** are small, muted, and factual: "Currently serving northern Saint Lucia.", "Optional".

## Visual foundations

- **Palette:** brand yellow `#FFB800` on ink `#1A1A1A`, over warm off-whites. Two families of neutral: cool (`#767676`, `#ECECEC`) and warm (`#8A8377`, `#EDEAE3`, canvas `#EDEBE6`). Yellow-on-ink and ink-on-yellow are the signature pairings (nav pill, buttons, hero).
- **Type:** Inter only, loaded from Google Fonts (the app bundles `@expo-google-fonts/inter` — same faces, exact match, no substitution). Weights 400/500/600/700/800. Headings are 800 with negative tracking (−0.3…−0.8). Body is small and quiet: 13.5px/19.5 grey.
- **Backgrounds:** app screens are `#FAFAFA`; auth screens warm `#F5F1E8`; home opens with a full-width yellow hero with 34px bottom radii and content overlapping it (−96px). Onboarding is full-bleed photography with a near-black scrim (`#140F05`) from ~28% down.
- **Cards:** white, radius 16–20px, either a 1px `#ECECEC` border OR a soft shadow — the "book card" gets the big float shadow (0 8px 24px rgba(26,26,26,.12)). Primary buttons carry a yellow glow (0 6px 18px rgba(255,184,0,.35)).
- **Corners:** 12–14 inputs/chips, 16 buttons/cards, 18–20 feature cards, 24 sheets, 28 nav pill, 999 pills.
- **Selection states:** two vocabularies — black pill for segmented controls/chips (active segment = ink bg, white 800 text), and yellow soft-fill for pick-one lists (border `#FFB800`, bg `#FFF9EC`; RadioDot = thick 6px yellow ring). Selected calendar day = yellow square.
- **Press/hover:** opacity 0.85 on press (0.7 for icon buttons); disabled = opacity 0.4–0.5. No color shifts, no scale.
- **Animation:** subtle and functional — spring snaps (slide-to-confirm), parallax + rise-and-fade on onboarding, animated dot width. Reduce-motion is always honored. No bounces or decorative motion.
- **Status tags:** tinted capsule + dot + 800 label: live green `#E7F8EE`/`#1E7A45`, soon yellow-soft/`#8A6800`, ready blue `#E9F3FF`/`#1F5FA8`, calm warm-grey.
- **Imagery:** real warm-toned photography (bundled webp illustrations in `assets/design/`); portfolio-first — never colored initial squares for creators with work. Image fallbacks are honest warm-grey tiles with a label.
- **Transparency/blur:** rare — translucent white circles on yellow (bell button `rgba(255,255,255,.6)`), dark count pills over photos `rgba(26,26,26,.72)`. No blur.

## Iconography

- **System:** hand-drawn inline SVG line icons, 1.7–1.9 stroke, round caps/joins, 22–24 viewBox, drawn in `components/ui/Icons.tsx` (nav: Home/Bookings/Messages/Profile; Bolt) and inline per screen. No icon font, no external set.
- **Occasion icons** are the one *filled multicolor* set (Wedding, Events, Portraits, Social, Family) — warm amber/teal/pink palette, ported into `components/icons/Icons.jsx` here verbatim.
- If you need a glyph the source doesn't have, match the style: 1.8 stroke, round caps, currentColor. Lucide at `stroke-width:1.8` is the closest CDN fallback — flag any such substitution.
- **Logo:** `assets/design/snapt-mark.webp` (wordmark) and `assets/design/snapt-icon.png` (app icon). Never redraw.

## Index

- `styles.css` → `tokens/` (colors, typography, geometry, shadows)
- `assets/design/` — brand mark, app icon, hero art, onboarding frames (s1–s3), booking photos (p1–p3, p5)
- `components/core/` — Button, TextField, CodeInput, SegmentedControl, RadioDot, ScreenHeader, NavPill
- `components/display/` — Card, InfoBanner, SectionTitle, Divider, Avatar, VerifiedBadge, StatusTag, MonthCalendar, SlideToConfirm
- `components/icons/` — Icons (nav + occasion + bolt SVG set)
- `guidelines/` — foundation specimen cards
- `ui_kits/snapt-app/` — interactive recreation: Onboarding → Login → Home → Occasion & date
- `SKILL.md` — agent skill entry point

### Intentional additions
- `StatusTag` — extracted from StateCard's inline tag styles so the four tones are reusable.
- `NavPill` — the floating tab bar lives in `app/(app)/_layout.tsx`, not a component file; extracted because it's the app's most recognizable element.
