import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/links';
import styles from './Footer.module.css';

/** Condensed footer used on the Explore page. */
export default function FooterSlim() {
  return (
    <footer className={styles.footer}>
      <div className={styles.slimInner}>
        <div className={styles.slimBrand}>
          <Link href="/" aria-label="Snapt home">
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height brand mark */}
            <img src="/assets/snapt-mark.webp" alt="Snapt" />
          </Link>
          <span className={styles.slimCopy}>© 2026 Snapt · Made in Saint Lucia</span>
        </div>
        <nav aria-label="Footer" className={styles.slimNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/#faq" className={styles.navLink}>
            FAQ
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.navLink}>
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
