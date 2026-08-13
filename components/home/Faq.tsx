'use client';

import { useId, useState } from 'react';
import { FAQ_DEFAULT_OPEN, FAQ_GROUPS } from '@/lib/faq';
import sections from './sections.module.css';
import styles from './Faq.module.css';

/** Single-open accordion; the first question starts open. */
export default function Faq() {
  const [open, setOpen] = useState<string | null>(FAQ_DEFAULT_OPEN);
  const uid = useId().replace(/:/g, '');

  return (
    <section id="faq" className={sections.sectionNarrow}>
      <h2 className={sections.h2}>Questions, answered</h2>
      <p className={styles.note}>
        Answers below are placeholders; the final copy will match our published terms word for word.
      </p>

      {FAQ_GROUPS.map((group) => (
        <div key={group.label} className={styles.group}>
          <p className={styles.groupLabel}>{group.label}</p>
          {group.items.map((item) => {
            const isOpen = open === item.id;
            const panelId = `${uid}-faq-${item.id}`;
            return (
              <div key={item.id} className={styles.item}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={styles.trigger}
                >
                  {item.q}
                  <span className={styles.glyph} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen ? (
                  <p id={panelId} className={styles.answer}>
                    {item.a}
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
