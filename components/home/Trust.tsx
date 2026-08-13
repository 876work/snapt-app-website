import sections from './sections.module.css';
import styles from './Trust.module.css';

/* Hand-drawn 1.8-stroke line icons, matching the design system's icon rules. */
const ICONS = {
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8l7 3v5.4c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V5.8l7-3z"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12l2.2 2.2 4.2-4.4"
        stroke="#1E7A45"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lock: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="9.5" width="16" height="11" rx="3" stroke="#1A1A1A" strokeWidth="1.8" />
      <path d="M8 9.5V7a4 4 0 018 0v2.5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.6" fill="#FFB800" />
    </svg>
  ),
  tag: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12.6 3.2h6.2a2 2 0 012 2v6.2a2 2 0 01-.6 1.4l-7.4 7.4a2 2 0 01-2.8 0l-6.2-6.2a2 2 0 010-2.8l7.4-7.4a2 2 0 011.4-.6z"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="1.4" fill="#FFB800" />
    </svg>
  ),
  clock: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12.5" r="8.5" stroke="#1A1A1A" strokeWidth="1.8" />
      <path
        d="M12 7.5v5l3.4 2"
        stroke="#E0A400"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* Identity verification only — never claim background checks. */
const PILLARS = [
  {
    icon: ICONS.shield,
    title: 'Verified creators',
    body: "Every creator's identity is checked against a government ID before they can take a booking.",
  },
  {
    icon: ICONS.lock,
    title: 'A safety code at every session',
    body: "You and your creator exchange a one-time code in person, so you always know you've met the right one.",
  },
  {
    icon: ICONS.tag,
    title: 'Standard pricing. No haggling.',
    body: 'The price you see when you book is the price you pay. Same rates for everyone.',
  },
  {
    icon: ICONS.clock,
    title: 'Fast, predictable delivery',
    body: "24-hour standard delivery on every job, or 6-hour rush when it can't wait.",
  },
];

export default function Trust() {
  return (
    <section className={sections.section}>
      <h2 className={sections.h2}>Built so you can relax</h2>
      <div className={styles.grid}>
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className={sections.cardBordered}>
            {pillar.icon}
            <div className={sections.cardTitle}>{pillar.title}</div>
            <p className={sections.cardBody}>{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
