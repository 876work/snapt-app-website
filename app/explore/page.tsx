import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PhoneFan from '@/components/explore/PhoneFan';
import FeatureRows from '@/components/explore/FeatureRows';
import exploreContent from '@/content/explore.json';
import { HOME_PATH } from '@/lib/nav';
import styles from '@/components/explore/Explore.module.css';

const CONTENT_ID = 'content/explore.json';

export const metadata: Metadata = {
  title: exploreContent.metaTitle,
  description: exploreContent.metaDescription,
};

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      <Header currentPath="/explore" homeHref={HOME_PATH} ctaHref={`${HOME_PATH}#download`} />

      <section className={styles.hero} data-sb-object-id={CONTENT_ID}>
        <p className={styles.overline} data-sb-field-path="heroOverline">{exploreContent.heroOverline}</p>
        <h1 className={styles.heroTitle} data-sb-field-path="heroTitle">{exploreContent.heroTitle}</h1>
        <p className={styles.heroLede} data-sb-field-path="heroDescription">{exploreContent.heroDescription}</p>
      </section>

      <PhoneFan />
      <FeatureRows />

      <section className={styles.ctaSection} data-sb-object-id={CONTENT_ID}>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaTitle} data-sb-field-path="ctaTitle">{exploreContent.ctaTitle}</h2>
          <div className={styles.ctaButtons}>
            <Link href={`${HOME_PATH}#download`} className={styles.ctaPrimary} data-sb-field-path="ctaPrimary">{exploreContent.ctaPrimary}</Link>
            <Link href={`${HOME_PATH}#occasions`} className={styles.ctaSecondary} data-sb-field-path="ctaSecondary">{exploreContent.ctaSecondary}</Link>
          </div>
          <p className={styles.ctaFineprint} data-sb-field-path="ctaFineprint">{exploreContent.ctaFineprint}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
