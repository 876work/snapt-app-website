import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './ForCreators.module.css';

const CONTENT_ID = 'content/home.json';

export default function ForCreators() {
  return (
    <section id="creators" className={sections.section} data-sb-object-id={CONTENT_ID}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.overline} data-sb-field-path="creatorsOverline">{homeContent.creatorsOverline}</p>
          <h2 className={styles.title} data-sb-field-path="creatorsHeading">{homeContent.creatorsHeading}</h2>
          <p className={styles.blurb} data-sb-field-path="creatorsBlurb">{homeContent.creatorsBlurb}</p>
          <ul className={styles.list}>
            <li><span className={styles.tick} aria-hidden="true">✓</span><span data-sb-field-path="creatorsBullet1">{homeContent.creatorsBullet1}</span></li>
            <li><span className={styles.tick} aria-hidden="true">✓</span><span data-sb-field-path="creatorsBullet2">{homeContent.creatorsBullet2}</span></li>
            <li><span className={styles.tick} aria-hidden="true">✓</span><span data-sb-field-path="creatorsBullet3">{homeContent.creatorsBullet3}</span></li>
          </ul>
          <a href="#download" className={styles.cta} data-sb-field-path="creatorsCta">{homeContent.creatorsCta}</a>
          <p className={styles.fineprint} data-sb-field-path="creatorsFineprint">{homeContent.creatorsFineprint}</p>
        </div>

        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element -- absolutely positioned cover fill */}
          <img src={homeContent.creatorsImage} alt={homeContent.creatorsImageAlt} data-sb-field-path="creatorsImage" />
        </div>
      </div>
    </section>
  );
}
