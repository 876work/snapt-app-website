import sections from './sections.module.css';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    title: 'Tell us what you need',
    body: 'Pick your occasion, date, and spot. Standard pricing up front — no haggling, no surprises.',
  },
  {
    title: 'We match you with a vetted local creator',
    body: "Every creator's identity is verified with a government ID before their first booking. We'll confirm as soon as one accepts.",
  },
  {
    title: 'Get it delivered in the app',
    body: 'Edited photos and video land right in Snapt — within 24 hours as standard, 6 hours on rush.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className={sections.section}>
      <div className={styles.panel}>
        <h2 className={sections.h2}>How it works</h2>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.title}>
              <div className={styles.number} aria-hidden="true">
                {i + 1}
              </div>
              <div className={styles.title}>{step.title}</div>
              <p className={styles.body}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
