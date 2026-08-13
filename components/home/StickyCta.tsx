import styles from './StickyCta.module.css';

export default function StickyCta() {
  return (
    <div className={styles.bar}>
      <a href="#download" className={styles.cta}>
        Get Snapt — it&rsquo;s free
      </a>
    </div>
  );
}
