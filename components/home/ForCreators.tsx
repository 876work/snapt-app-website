import sections from './sections.module.css';
import styles from './ForCreators.module.css';

/** Supply-side recruiting panel — the harder half of the marketplace. */
export default function ForCreators() {
  return (
    <section id="creators" className={sections.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.overline}>FOR CREATORS</p>
          <h2 className={styles.title}>Shoot what you love. We&rsquo;ll fill your calendar.</h2>
          <p className={styles.blurb}>
            Snapt sends booked, paid jobs to vetted photographers and videographers across northern
            Saint Lucia. No chasing clients, no negotiating — you see the job, the location, and
            exactly what it pays before you accept.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.tick} aria-hidden="true">
                ✓
              </span>
              Keep 68% of every booking — standard rates, no bidding, no haggling
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">
                ✓
              </span>
              Payouts 7 days after delivery — straight to your local bank account
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">
                ✓
              </span>
              Verify your ID, share your portfolio, start accepting jobs
            </li>
          </ul>
          <a href="#download" className={styles.cta}>
            Apply in the app
          </a>
          <p className={styles.fineprint}>
            Download Snapt, switch to creator mode, and apply in about ten minutes.
          </p>
        </div>

        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element -- absolutely positioned cover fill */}
          <img src="/assets/img/creator.jpg" alt="Videographer holding a cinema camera" />
        </div>
      </div>
    </section>
  );
}
