import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './TwoPaths.module.css';

const CONTENT_ID = 'content/home.json';

export default function TwoPaths() {
  return (
    <section className={sections.section} data-sb-object-id={CONTENT_ID}>
      <h2 className={sections.h2} data-sb-field-path="pathsHeading">{homeContent.pathsHeading}</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.media}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 16:9 frame */}
            <img src={homeContent.path1Image} alt={homeContent.path1Alt} data-sb-field-path="path1Image" />
          </div>
          <div className={styles.body}>
            <div className={styles.head}>
              <h3 className={styles.title} data-sb-field-path="path1Title">{homeContent.path1Title}</h3>
              <span className={styles.priceSession} data-sb-field-path="path1Price">{homeContent.path1Price}</span>
            </div>
            <p className={styles.blurb} data-sb-field-path="path1Blurb">{homeContent.path1Blurb}</p>
            <ul className={styles.list}>
              <li><span className={styles.tickSession} aria-hidden="true">✓</span><span data-sb-field-path="path1Bullet1">{homeContent.path1Bullet1}</span></li>
              <li><span className={styles.tickSession} aria-hidden="true">✓</span><span data-sb-field-path="path1Bullet2">{homeContent.path1Bullet2}</span></li>
              <li><span className={styles.tickSession} aria-hidden="true">✓</span><span data-sb-field-path="path1Bullet3">{homeContent.path1Bullet3}</span></li>
            </ul>
            <a href="#download" className={`${sections.primaryButton} ${styles.cta}`} data-sb-field-path="path1Cta">{homeContent.path1Cta}</a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.media}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 16:9 frame */}
            <img src={homeContent.path2Image} alt={homeContent.path2Alt} data-sb-field-path="path2Image" />
          </div>
          <div className={styles.body}>
            <div className={styles.head}>
              <h3 className={styles.title} data-sb-field-path="path2Title">{homeContent.path2Title}</h3>
              <span className={styles.priceEdit} data-sb-field-path="path2Price">{homeContent.path2Price}</span>
            </div>
            <p className={styles.blurb} data-sb-field-path="path2Blurb">{homeContent.path2Blurb}</p>
            <ul className={styles.list}>
              <li><span className={styles.tickEdit} aria-hidden="true">✓</span><span data-sb-field-path="path2Bullet1">{homeContent.path2Bullet1}</span></li>
              <li><span className={styles.tickEdit} aria-hidden="true">✓</span><span data-sb-field-path="path2Bullet2">{homeContent.path2Bullet2}</span></li>
              <li><span className={styles.tickEdit} aria-hidden="true">✓</span><span data-sb-field-path="path2Bullet3">{homeContent.path2Bullet3}</span></li>
            </ul>
            <a href="#download" className={`${sections.inkButton} ${styles.cta}`} data-sb-field-path="path2Cta">{homeContent.path2Cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
