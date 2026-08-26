'use client';

import { useId, useState } from 'react';
import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './Faq.module.css';

const CONTENT_ID = 'content/home.json';

const FAQ_GROUPS = [
  { label: homeContent.faqGroup1Label, labelField: 'faqGroup1Label', items: [1, 2, 3, 4, 5] },
  { label: homeContent.faqGroup2Label, labelField: 'faqGroup2Label', items: [6, 7, 8] },
  { label: homeContent.faqGroup3Label, labelField: 'faqGroup3Label', items: [9, 10, 11] },
  { label: homeContent.faqGroup4Label, labelField: 'faqGroup4Label', items: [12, 13] },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>('faq1');
  const uid = useId().replace(/:/g, '');

  return (
    <section id="faq" className={sections.sectionNarrow} data-sb-object-id={CONTENT_ID}>
      <h2 className={sections.h2} data-sb-field-path="faqHeading">{homeContent.faqHeading}</h2>

      {FAQ_GROUPS.map((group) => (
        <div key={group.labelField} className={styles.group}>
          <p className={styles.groupLabel} data-sb-field-path={group.labelField}>{group.label}</p>
          {group.items.map((number) => {
            const id = `faq${number}`;
            const questionField = `faq${number}Question` as keyof typeof homeContent;
            const answerField = `faq${number}Answer` as keyof typeof homeContent;
            const isOpen = open === id;
            const panelId = `${uid}-${id}`;

            return (
              <div key={id} className={styles.item}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={styles.trigger}
                >
                  <span data-sb-field-path={questionField}>{homeContent[questionField]}</span>
                  <span className={styles.glyph} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? (
                  <p id={panelId} className={styles.answer} data-sb-field-path={answerField}>
                    {homeContent[answerField]}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
