import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PhoneFan from '@/components/explore/PhoneFan';
import FeatureRows from '@/components/explore/FeatureRows';
import { HOME_PATH } from '@/lib/nav';
import styles from '@/components/explore/Explore.module.css';

export const metadata: Metadata = {
  title: 'Explore the app — Snapt',
  description:
    'A look inside the Snapt app: browse vetted creators, book in a few taps, meet safely, and get your edited photos delivered in the app.',
};

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      <Header currentPath="/explore" homeHref={HOME_PATH} ctaHref={`${HOME_PATH}#download`} />

      <section className={styles.hero}>
        <p className={styles.overline}>EXPLORE THE APP</p>
        <h1 className={styles.heroTitle}>Everything happens in one place.</h1>
        <p className={styles.heroLede}>
          From the first tap to the finished photos — here&rsquo;s what booking, meeting, and
          getting your work back looks like inside Snapt.
        </p>
      </section>

      <PhoneFan />
      <FeatureRows />

      <section className={styles.ctaSection}>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaTitle}>
            Seen enough? Your first booking takes about two minutes.
          </h2>
          <div className={styles.ctaButtons}>
            <Link href={`${HOME_PATH}#download`} className={styles.ctaPrimary}>
              Get the app
            </Link>
            <Link href={`${HOME_PATH}#occasions`} className={styles.ctaSecondary}>
              See occasions
            </Link>
          </div>
          <p className={styles.ctaFineprint}>
            Free to download · Currently serving northern Saint Lucia
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
