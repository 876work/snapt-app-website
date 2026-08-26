'use client';

import { useState } from 'react';
import HoneypotField from '@/components/site/HoneypotField';
import StoreBadges from '@/components/site/StoreBadges';
import homeContent from '@/content/home.json';
import { NETLIFY_FORM_NAMES, submitNetlifyForm } from '@/lib/netlifyForms';
import sections from './sections.module.css';
import styles from './Download.module.css';

const CONTENT_ID = 'content/home.json';

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
    <section id="download" className={sections.sectionEnd} data-sb-object-id={CONTENT_ID}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title} data-sb-field-path="downloadHeading">{homeContent.downloadHeading}</h2>
          <div className={styles.badges}><StoreBadges /></div>
          <p className={styles.fineprint} data-sb-field-path="downloadFineprint">{homeContent.downloadFineprint}</p>
        </div>

        <div className={styles.desktopCard}>
          <div className={styles.desktopTitle} data-sb-field-path="downloadDesktopTitle">{homeContent.downloadDesktopTitle}</div>
          <div className={styles.qrRow}>
            <div className={styles.qrCode}>QR code placeholder — point at store onelink</div>
            <p className={styles.qrText} data-sb-field-path="downloadQrText">{homeContent.downloadQrText}</p>
          </div>

          <div className={styles.rule} />

          {sent ? (
            <div className={styles.sentBanner} role="status">
              <span className={styles.sentMark} aria-hidden="true">✓</span>
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
                <input type="email" required name="email" placeholder="Or email yourself the link" aria-label="Email address" className={styles.emailInput} />
                <button type="submit" className={styles.emailSubmit} disabled={pending}>{pending ? 'Sending…' : 'Send link'}</button>
              </form>
              {error ? <p className={styles.error} role="alert">{error}</p> : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
