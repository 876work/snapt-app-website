'use client';

import { useState } from 'react';
import HoneypotField from '@/components/site/HoneypotField';
import StoreBadges from '@/components/site/StoreBadges';
import { NETLIFY_FORM_NAMES, submitNetlifyForm } from '@/lib/netlifyForms';
import sections from './sections.module.css';
import styles from './Download.module.css';

/**
 * Final download block. Store badges do nothing on a laptop, so desktop gets a
 * QR code and an email-me-the-link fallback rather than a dead end.
 *
 * Addresses are captured in Netlify Forms under the name "app-link" — Netlify
 * stores them, it does not send the link, so add a notification or an outbound
 * integration there to actually deliver it.
 *
 * TODO(launch): replace the QR placeholder with a real code encoding
 * STORE_ONELINK.
 */
export default function Download() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setError(null);
    try {
      await submitNetlifyForm(NETLIFY_FORM_NAMES.appLink, form);
      setSent(true);
    } catch {
      setError("That didn't send. Please try again.");
    } finally {
      setPending(false);
    }
  };

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
                name={NETLIFY_FORM_NAMES.appLink}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value={NETLIFY_FORM_NAMES.appLink} />
                <HoneypotField />
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Or email yourself the link"
                  aria-label="Email address"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.emailSubmit} disabled={pending}>
                  {pending ? 'Sending…' : 'Send link'}
                </button>
              </form>
              {error ? (
                <p className={styles.error} role="alert">
                  {error}
                </p>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
