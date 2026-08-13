import Link from 'next/link';
import styles from './Header.module.css';

export interface HeaderLink {
  href: string;
  label: string;
}

/** Floating nav pill. Section links collapse away below 880px, leaving logo + CTA. */
export default function Header({
  homeHref = '/',
  links,
  ctaHref,
}: {
  homeHref?: string;
  links: HeaderLink[];
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
            {links.map((link) => (
              <Link key={link.href + link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </span>
          <Link href={ctaHref} className={styles.cta}>
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
}
