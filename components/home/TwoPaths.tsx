import sections from './sections.module.css';
import styles from './TwoPaths.module.css';

export default function TwoPaths() {
  return (
    <section className={sections.section}>
      <h2 className={sections.h2}>Two ways to use Snapt</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.media}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 16:9 frame */}
            <img src="/assets/img/book-creator.jpg" alt="Photographer directing a styled studio shoot" />
          </div>
          <div className={styles.body}>
            <div className={styles.head}>
              <h3 className={styles.title}>Book a creator</h3>
              <span className={styles.priceSession}>From $60</span>
            </div>
            <p className={styles.blurb}>
              An in-person session with a vetted local photographer or videographer. They shoot, we
              handle the editing and delivery.
            </p>
            <ul className={styles.list}>
              <li>
                <span className={styles.tickSession} aria-hidden="true">
                  ✓
                </span>
                In-person, at your venue or location
              </li>
              <li>
                <span className={styles.tickSession} aria-hidden="true">
                  ✓
                </span>
                Safety code confirms the right creator arrives
              </li>
              <li>
                <span className={styles.tickSession} aria-hidden="true">
                  ✓
                </span>
                Edited and delivered in the app
              </li>
            </ul>
            <a href="#download" className={`${sections.primaryButton} ${styles.cta}`}>
              Book a session
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.media}>
            {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 16:9 frame */}
            <img src="/assets/img/editing.jpg" alt="Editor reviewing a photo library on a large monitor" />
          </div>
          <div className={styles.body}>
            <div className={styles.head}>
              <h3 className={styles.title}>Send us your footage</h3>
              <span className={styles.priceEdit}>From $25</span>
            </div>
            <p className={styles.blurb}>
              Already have the photos or video? Upload straight from your phone and get them back
              professionally edited.
            </p>
            <ul className={styles.list}>
              <li>
                <span className={styles.tickEdit} aria-hidden="true">
                  ✓
                </span>
                Upload from your camera roll, no session needed
              </li>
              <li>
                <span className={styles.tickEdit} aria-hidden="true">
                  ✓
                </span>
                Colour, cuts, and polish by a real editor
              </li>
              <li>
                <span className={styles.tickEdit} aria-hidden="true">
                  ✓
                </span>
                Same in-app delivery, same timelines
              </li>
            </ul>
            <a href="#download" className={`${sections.inkButton} ${styles.cta}`}>
              Send footage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
