/**
 * FAQ content.
 *
 * TODO(launch): entries marked with PLACEHOLDER must be replaced with copy that
 * matches the published legal documents word for word. The areas, pricing,
 * vetting and creator-earnings answers are already real copy.
 */

const PLACEHOLDER =
  ' [Placeholder — replace with copy that matches your published legal documents.]';

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
        'Pricing is standardised: every session type has a fixed rate shown before you book, starting at $60 USD. Remote edits start at $25 USD. No haggling, no hidden fees.' +
          PLACEHOLDER,
      ],
      [
        'Can I book same-day?',
        'Same-day availability depends on creators near you. Placeholder answer describing the same-day booking window and any rush surcharge.' +
          PLACEHOLDER,
      ],
    ],
  },
  {
    label: 'DELIVERY',
    items: [
      [
        'How fast do I get my photos?',
        'Standard delivery is within 24 hours of your session or upload. Rush delivery within 6 hours is available at booking.' +
          PLACEHOLDER,
      ],
      [
        'How is my work delivered?',
        'Edited photos and video are delivered directly in the Snapt app, ready to download and share.' +
          PLACEHOLDER,
      ],
    ],
  },
  {
    label: 'TRUST & SAFETY',
    items: [
      [
        'How are creators vetted?',
        'Every creator verifies their identity with a government ID and submits a portfolio for review before accepting bookings. We verify identity; we do not conduct background checks.' +
          PLACEHOLDER,
      ],
      [
        'What if my creator cancels?',
        'Placeholder answer covering rematching with another available creator or a full refund, and how you are notified.' +
          PLACEHOLDER,
      ],
      [
        'What is the safety code?',
        'When your creator arrives, you exchange a one-time code shown in both apps, confirming you have met the verified person you booked.' +
          PLACEHOLDER,
      ],
    ],
  },
  {
    label: 'CANCELLATIONS & CREATORS',
    items: [
      [
        'What is the cancellation and refund policy?',
        'Placeholder answer stating the free-cancellation window, partial refund rules, and how refunds are processed to your original payment method.' +
          PLACEHOLDER,
      ],
      [
        'How do I become a Snapt creator?',
        'Download the app, switch to creator mode, and apply: verify your ID, share your portfolio, and set your availability. We review applications and reply in the app. Creators keep 68% of every booking, with payouts available 7 days after delivery via bank transfer, PayPal, or cash pickup.' +
          PLACEHOLDER,
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
