import StatusTag from '@/components/ds/StatusTag';
import { CONTACT_EMAIL } from '@/lib/links';
import styles from './page.module.css';

/**
 * Coming-soon holding page.
 *
 * The full marketing site is built and still deployed — homepage at
 * `HOME_PATH` (/home), plus /explore — it just isn't linked from here yet.
 * To launch, move the homepage back to this route and point HOME_PATH at '/'.
 */
export default function ComingSoonPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height brand mark */}
        <img src="/assets/snapt-mark.webp" alt="Snapt" className={styles.mark} />

        <StatusTag tone="soon" label="COMING SOON" />

        <h1 className={styles.title}>Something worth photographing is coming.</h1>

        <p className={styles.blurb}>
          Snapt connects you with vetted local photographers and videographers — booked, edited,
          and delivered in one app. We&rsquo;re putting the finishing touches on it now.
        </p>

        <div className={styles.rule} />

        <p className={styles.contact}>
          Questions? Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>
        </p>

        <p className={styles.serving}>Currently serving northern Saint Lucia.</p>
      </div>
    </main>
  );
}
