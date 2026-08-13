import sections from './sections.module.css';
import styles from './Stats.module.css';

const STATS = [
  { value: '$60', label: 'Sessions from, flat rate' },
  { value: '$25', label: 'Remote edits from' },
  { value: '24h', label: 'Standard delivery' },
  { value: '6h', label: 'Rush delivery when you need it' },
];

export default function Stats() {
  return (
    <section className={sections.sectionTight} aria-label="Snapt at a glance">
      <div className={styles.grid}>
        {STATS.map((stat) => (
          <div key={stat.value} className={styles.stat}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
