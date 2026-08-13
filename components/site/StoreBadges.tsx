import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/links';
import styles from './StoreBadges.module.css';

/** The App Store / Google Play pair used in the hero, download block and footer. */
export default function StoreBadges({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.row}>
      <a href={APP_STORE_URL} aria-label="Download on the App Store" className={styles.badge}>
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
          <path
            d="M18.1 13.7c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.6 1.1-.9 0-2.4-1.1-4-1.1-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.1 1.5 12.1 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 4-1s2.4 1 4 1 2.7-1.5 3.7-2.9c1.2-1.7 1.6-3.3 1.7-3.4-.1 0-3.2-1.3-3.3-4.8zM15 4.6c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.7.8-3.5 1.8-.8.9-1.5 2.4-1.3 3.7 1.4.1 2.8-.7 3.6-1.7z"
            fill="#fff"
          />
        </svg>
        <span className={styles.label}>
          <span className={styles.small}>Download on the</span>
          <span className={styles.large}>App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        aria-label="Get it on Google Play"
        className={`${styles.badge} ${styles.badgePlay}`}
      >
        <svg width="22" height="24" viewBox="0 0 24 26" fill="none" aria-hidden="true">
          <path d="M2 1.8v22.4c0 .5.6.9 1 .6l12.6-11.2c.3-.3.3-.8 0-1L3 1.2c-.4-.3-1 .1-1 .6z" fill="#4DD0E1" />
          <path d="M15.6 12.6L3 1.2l13.9 8 2.1 1.9-3.4 1.5z" fill="#8ED7A6" />
          <path d="M15.6 13.4L3 24.8l13.9-8 2.1-1.9-3.4-1.5z" fill="#EF6F7E" />
          <path d="M19 9.2l-3.4 3.8 3.4 3.8 3.4-1.9c.9-.5.9-1.8 0-2.3L19 9.2z" fill="#F2C14E" />
        </svg>
        <span className={styles.label}>
          <span className={styles.small}>Get it on</span>
          <span className={styles.large}>Google Play</span>
        </span>
      </a>

      {children}
    </div>
  );
}
