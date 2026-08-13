'use client';

import { useState } from 'react';
import StoreBadges from '@/components/site/StoreBadges';
import sections from './sections.module.css';
import styles from './Download.module.css';

/**
 * Final download block. Store badges do nothing on a laptop, so desktop gets a
 * QR code and an email-me-the-link fallback rather than a dead end.
 *
 * TODO(launch): the email form only swaps to a confirmation state — wire it to
 * your email provider, and replace the QR placeholder with a real code
 * encoding STORE_ONELINK.
 */
export default function Download() {
  const [sent, setSent] = useState(false);

  return (
    <section id="download" className={sections.sectionEnd}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Your next moment is coming. Get Snapt ready.</h2>
          <div className={styles.badges}>
            <StoreBadges />
          </div>
          <p className={styles.fineprint}>Free to download · iOS and Android</p>
        </div>

        <div className={styles.desktopCard}>
          <div className={styles.desktopTitle}>On a computer right now?</div>
          <div className={styles.qrRow}>
            <div className={styles.qrCode}>QR code placeholder — point at store onelink</div>
            <p className={styles.qrText}>
              Scan with your phone camera and it opens the right store automatically.
            </p>
          </div>

          <div className={styles.rule} />

          {sent ? (
            <div className={styles.sentBanner} role="status">
              <span className={styles.sentMark} aria-hidden="true">
                ✓
              </span>
              <span className={styles.sentText}>Link on its way — check your inbox.</span>
            </div>
          ) : (
            <>
              <form
                className={styles.emailForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Or email yourself the link"
                  aria-label="Email address"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.emailSubmit}>
                  Send link
                </button>
              </form>
              <p className={styles.disclaimer}>
                Placeholder — wire this to your email provider before launch.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
