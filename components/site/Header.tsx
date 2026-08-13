import Link from 'next/link';
import { navLinks } from '@/lib/nav';
import styles from './Header.module.css';

/**
 * Floating nav pill. Every page shows the same links; the current page gets a
 * yellow underline. Section links collapse away below 880px, leaving logo + CTA.
 */
export default function Header({
  currentPath,
  homeHref = '/',
  ctaHref,
}: {
  currentPath: string;
  homeHref?: string;
  ctaHref: string;
}) {
  return (
    <header className={styles.header}>
      <div className={styles.pill}>
        <Link href={homeHref} aria-label="Snapt home" className={styles.mark}>
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height brand mark, no layout benefit from next/image */}
          <img src="/assets/snapt-mark.webp" alt="Snapt" />
        </Link>
        <nav aria-label="Sections" className={styles.nav}>
          <span className={styles.desktopOnly}>
            {navLinks(currentPath).map((link) => {
              const isCurrent = link.page === currentPath;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={isCurrent ? `${styles.link} ${styles.linkCurrent}` : styles.link}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </span>
          <Link href={ctaHref} className={styles.cta}>
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
}
