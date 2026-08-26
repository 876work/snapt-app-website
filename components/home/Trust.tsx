import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './Trust.module.css';

const CONTENT_ID = 'content/home.json';

const ICONS = {
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.8l7 3v5.4c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V5.8l7-3z" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.8 12l2.2 2.2 4.2-4.4" stroke="#1E7A45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M12.6 3.2h6.2a2 2 0 012 2v6.2a2 2 0 01-.6 1.4l-7.4 7.4a2 2 0 01-2.8 0l-6.2-6.2a2 2 0 010-2.8l7.4-7.4a2 2 0 011.4-.6z" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="1.4" fill="#FFB800" />
    </svg>
  ),
  clock: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12.5" r="8.5" stroke="#1A1A1A" strokeWidth="1.8" />
      <path d="M12 7.5v5l3.4 2" stroke="#E0A400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const PILLARS = [
  { icon: ICONS.shield, title: homeContent.trust1Title, body: homeContent.trust1Body, titleField: 'trust1Title', bodyField: 'trust1Body' },
  { icon: ICONS.lock, title: homeContent.trust2Title, body: homeContent.trust2Body, titleField: 'trust2Title', bodyField: 'trust2Body' },
  { icon: ICONS.tag, title: homeContent.trust3Title, body: homeContent.trust3Body, titleField: 'trust3Title', bodyField: 'trust3Body' },
  { icon: ICONS.clock, title: homeContent.trust4Title, body: homeContent.trust4Body, titleField: 'trust4Title', bodyField: 'trust4Body' },
];

export default function Trust() {
  return (
    <section className={sections.section} data-sb-object-id={CONTENT_ID}>
      <h2 className={sections.h2} data-sb-field-path="trustHeading">{homeContent.trustHeading}</h2>
      <div className={styles.grid}>
        {PILLARS.map((pillar) => (
          <div key={pillar.titleField} className={sections.cardBordered}>
            {pillar.icon}
            <div className={sections.cardTitle} data-sb-field-path={pillar.titleField}>{pillar.title}</div>
            <p className={sections.cardBody} data-sb-field-path={pillar.bodyField}>{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
