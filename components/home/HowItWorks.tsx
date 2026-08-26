import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './HowItWorks.module.css';

const CONTENT_ID = 'content/home.json';

const STEPS = [
  { title: homeContent.howStep1Title, body: homeContent.howStep1Body, titleField: 'howStep1Title', bodyField: 'howStep1Body' },
  { title: homeContent.howStep2Title, body: homeContent.howStep2Body, titleField: 'howStep2Title', bodyField: 'howStep2Body' },
  { title: homeContent.howStep3Title, body: homeContent.howStep3Body, titleField: 'howStep3Title', bodyField: 'howStep3Body' },
];

export default function HowItWorks() {
  return (
    <section id="how" className={sections.section} data-sb-object-id={CONTENT_ID}>
      <div className={styles.panel}>
        <h2 className={sections.h2} data-sb-field-path="howHeading">{homeContent.howHeading}</h2>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.titleField}>
              <div className={styles.number} aria-hidden="true">{i + 1}</div>
              <div className={styles.title} data-sb-field-path={step.titleField}>{step.title}</div>
              <p className={styles.body} data-sb-field-path={step.bodyField}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
