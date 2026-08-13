/**
 * FAQ content.
 *
 * Honesty is a design rule here: no answer claims anything the product or the
 * published policies don't support. Where an answer depends on legal terms that
 * aren't written yet — cancellation windows, refund handling — it says what we
 * do know and points at the terms rather than inventing a number.
 *
 * TODO(launch): once the terms of service are published, revisit the
 * cancellation answer so it matches them word for word, and set TERMS_URL in
 * lib/links.ts (it is still '#').
 */

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface FaqGroup {
  label: string;
  items: FaqItem[];
}

const GROUPS: { label: string; items: [string, string][] }[] = [
  {
    label: 'BOOKING',
    items: [
      [
        'Which areas does Snapt serve?',
        'In-person sessions cover 19 areas across northern Saint Lucia: Babonneau, Balata, Beausejour, Bisee, Bonneterre, Cap Estate, Cap Marquis, Cas en Bas, Castries, Ciceron, Garrand, Grande Riviere, Gros Islet, La Clery, Monchy, Mongiraud, Pigeon Island, Rodney Bay, and Vigie, and surrounding areas; we’ll confirm coverage when you drop your pin. Remote editing has no location limit across Saint Lucia.',
      ],
      [
        'How does pricing work?',
        'Pricing is standardised: every session type has a fixed rate shown before you book, starting at $60 USD. Remote edits start at $25 USD. No haggling, no hidden fees.',
      ],
      [
        'Can I book same-day?',
        'Often, yes — it comes down to who’s free near you that day. Tell us when and where in the app, and we’ll confirm as soon as a creator accepts. If you need the photos back quickly too, rush delivery within 6 hours can be added when you book.',
      ],
    ],
  },
  {
    label: 'DELIVERY',
    items: [
      [
        'How fast do I get my photos?',
        'Standard delivery is within 24 hours of your session or upload. Rush delivery within 6 hours is available at booking.',
      ],
      [
        'How is my work delivered?',
        'Edited photos and video are delivered directly in the Snapt app, ready to download and share.',
      ],
    ],
  },
  {
    label: 'TRUST & SAFETY',
    items: [
      [
        'How are creators vetted?',
        'Every creator verifies their identity with a government ID and submits a portfolio for review before accepting bookings. We verify identity; we do not conduct background checks.',
      ],
      [
        'What if my creator cancels?',
        'You’ll hear from us in the app as soon as we know, and we’ll start looking for another vetted creator for the same date and time. If we can’t fill the slot before your session, we’ll be in touch about your options — you can also reach us any time at hello@snaptcarib.app.',
      ],
      [
        'What is the safety code?',
        'When your creator arrives, you exchange a one-time code shown in both apps, confirming you have met the verified person you booked.',
      ],
    ],
  },
  {
    label: 'CANCELLATIONS & CREATORS',
    items: [
      [
        'What is the cancellation and refund policy?',
        'Plans change, and you can cancel a booking from the app. How far ahead you need to cancel and how refunds are handled are set out in our terms of service. If you’re not sure where you stand, email hello@snaptcarib.app before your session and we’ll help.',
      ],
      [
        'How do I become a Snapt creator?',
        'Download the app, switch to creator mode, and apply: verify your ID, share your portfolio, and set your availability. We review applications and reply in the app. Creators keep 68% of every booking, with payouts available 7 days after delivery via bank transfer, PayPal, or cash pickup.',
      ],
    ],
  },
];

export const FAQ_GROUPS: FaqGroup[] = GROUPS.map((group, gi) => ({
  label: group.label,
  items: group.items.map(([q, a], i) => ({ id: `${'abcd'[gi]}${i}`, q, a })),
}));

/** The first question opens by default. */
export const FAQ_DEFAULT_OPEN = 'a0';
