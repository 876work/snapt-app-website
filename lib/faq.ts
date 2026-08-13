/**
 * FAQ content — supplied copy, used verbatim.
 *
 * Apostrophes and quotes are typographic (’ “ ”) to match the rest of the site;
 * the wording is unchanged.
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
        'Can I book same-day?',
        'Yes. Book at least two hours ahead and you can shoot today, subject to a creator being free at that time. You can book up to 14 days out. Remote edit orders can be placed any time — there’s no session to schedule.',
      ],
      [
        'Which areas does Snapt serve?',
        'In person, we cover northern Saint Lucia: Babonneau, Balata, Beausejour, Bisee, Bonneterre, Cap Estate, Cap Marquis, Cas en Bas, Castries, Ciceron, Garrand, Grande Riviere, Gros Islet, La Clery, Monchy, Mongiraud, Pigeon Island, Rodney Bay and Vigie, plus surrounding areas. Drop your pin in the app and we’ll confirm coverage instantly. Remote editing has no location limit — upload your footage from anywhere.',
      ],
      [
        'How does pricing work?',
        'Standard pricing, no haggling, no bidding. In-person sessions start at $60 USD for an hour of photos, and remote edits start at $25 USD. You see the full price before you pay. Every creator charges the same rate for the same work, so you’re choosing a photographer rather than negotiating a price. Prices display in USD or XCD, and charges are processed in USD.',
      ],
      [
        'Can I choose my own creator?',
        'By default, you’re matched with a vetted creator who’s available for your date and time. If you’d rather choose yourself, you can browse the creators who are free for that slot — with their specialties and past work — and pick whoever fits.',
      ],
      [
        'Do I need to pay a deposit?',
        'No. You pay in full when you book, and your card is charged once. If you cancel within the free window, the session cost is refunded automatically.',
      ],
    ],
  },
  {
    label: 'DELIVERY',
    items: [
      [
        'How fast do I get my photos?',
        'Edited content is delivered within 24 hours of your session. If you need it sooner, add rush delivery at checkout for a 6-hour turnaround. Rush isn’t available on every time slot — if a session ends late in the evening, six hours would run past midnight, so the option won’t appear.',
      ],
      [
        'How is my work delivered?',
        'Straight into the app. You’ll get a notification the moment it’s ready, then you can preview everything and download in full resolution to your phone. Your delivery stays available in the app for 12 months, and downloaded files are yours to keep forever.',
      ],
      [
        'What if I’m not happy with the edits?',
        'Every order includes one free revision round. Tell your creator what you’d like changed and they’ll re-deliver. Additional rounds are available for $15.',
      ],
    ],
  },
  {
    label: 'TRUST & SAFETY',
    items: [
      [
        'How are creators vetted?',
        'Every creator verifies their identity with a government-issued ID and a live face check before they can take a booking, and everyone must be 18 or over. We review their portfolio and their headshot by hand. Police certificate of character checks are not yet part of our vetting, and we don’t claim otherwise.',
      ],
      [
        'What is the safety code?',
        'A four-digit code that appears in your app before an in-person session. When your creator arrives, you share it with them and they enter it to start the session. It’s a simple way to know the person in front of you is the person you booked. The code is yours alone — creators never see it in their app.',
      ],
      [
        'What if my creator cancels?',
        'You get the session cost back in full, and we match you with another available creator. You’re never left out of pocket for a cancellation that wasn’t yours.',
      ],
    ],
  },
  {
    label: 'CANCELLATIONS & CREATORS',
    items: [
      [
        'What is the cancellation and refund policy?',
        'More than 48 hours before your session, you get the session cost back in full. Between 24 and 48 hours, you’re charged 50%. Under 24 hours, the session is charged in full. If nobody has accepted your booking yet, you get the session cost back in full whenever you cancel.',
      ],
      [
        'How do I become a Snapt creator?',
        'Open the app, go to Profile and tap Become a Creator. You’ll add a headshot, tell us what you shoot, and verify your identity. Applications are reviewed by hand and most people hear back within two to three days. Creators keep 68% of every booking, with payouts available seven days after delivery.',
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
