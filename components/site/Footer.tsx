import Link from 'next/link';
import {
  APP_STORE_URL,
  BOOK_WITHOUT_APP_MAILTO,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PLAY_STORE_URL,
  PRIVACY_URL,
  TERMS_URL,
} from '@/lib/links';
import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

/** Full homepage footer: brand, three link columns, newsletter pill, legal line. */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height brand mark */}
            <img src="/assets/snapt-mark.webp" alt="Snapt" />
            <p className={styles.blurb}>
              Vetted photographers and videographers for your moments in northern Saint Lucia,
              booked, edited, and delivered in one app.
            </p>
            <div className={styles.miniBadges}>
              <a href={APP_STORE_URL} aria-label="Download on the App Store" className={styles.miniBadge}>
                App Store
              </a>
              <a href={PLAY_STORE_URL} aria-label="Get it on Google Play" className={styles.miniBadge}>
                Google Play
              </a>
            </div>
          </div>

          <nav aria-label="Explore" className={styles.nav}>
            <div className={styles.overline}>EXPLORE</div>
            <Link href="/#occasions" className={styles.navLink}>
              Occasions
            </Link>
            <Link href="/explore" className={styles.navLink}>
              Explore the app
            </Link>
            <Link href="/#how" className={styles.navLink}>
              How it works
            </Link>
            <Link href="/#creators" className={styles.navLink}>
              Become a creator
            </Link>
            <Link href="/#faq" className={styles.navLink}>
              FAQ
            </Link>
          </nav>

          <nav aria-label="Support" className={styles.nav}>
            <div className={styles.overline}>SUPPORT</div>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.navLink}>
              {CONTACT_EMAIL}
            </a>
            <a href={INSTAGRAM_URL} className={styles.navLink}>
              Instagram
            </a>
            <a href={BOOK_WITHOUT_APP_MAILTO} className={styles.navLink}>
              Book without the app
            </a>
          </nav>

          <nav aria-label="Legal" className={styles.nav}>
            <div className={styles.overline}>LEGAL</div>
            <a href={PRIVACY_URL} className={styles.navLink}>
              Privacy policy
            </a>
            <a href={TERMS_URL} className={styles.navLink}>
              Terms of service
            </a>
          </nav>
        </div>

        <div className={styles.newsletter}>
          <div>
            <div className={styles.newsletterTitle}>Subscribe to our newsletter</div>
            <p className={styles.newsletterBlurb}>
              New creators, new session types, launch news. No more than once a month.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className={styles.legal}>
          <span>© 2026 Snapt App Carib · Developed by WORK Digital Media</span>
          <span>Currently serving northern Saint Lucia · Prices in USD &amp; EC shown in-app</span>
        </div>
      </div>
    </footer>
  );
}
