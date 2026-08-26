import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './Stats.module.css';

const CONTENT_ID = 'content/home.json';

const STATS = [
  { value: homeContent.stat1Value, label: homeContent.stat1Label, valueField: 'stat1Value', labelField: 'stat1Label' },
  { value: homeContent.stat2Value, label: homeContent.stat2Label, valueField: 'stat2Value', labelField: 'stat2Label' },
  { value: homeContent.stat3Value, label: homeContent.stat3Label, valueField: 'stat3Value', labelField: 'stat3Label' },
  { value: homeContent.stat4Value, label: homeContent.stat4Label, valueField: 'stat4Value', labelField: 'stat4Label' },
];

export default function Stats() {
  return (
    <section className={sections.sectionTight} aria-label="Snapt at a glance" data-sb-object-id={CONTENT_ID}>
      <div className={styles.grid}>
        {STATS.map((stat) => (
          <div key={stat.valueField} className={styles.stat}>
            <div className={styles.value} data-sb-field-path={stat.valueField}>{stat.value}</div>
            <div className={styles.label} data-sb-field-path={stat.labelField}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
