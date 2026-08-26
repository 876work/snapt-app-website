'use client';

import { useState } from 'react';
import HoneypotField from '@/components/site/HoneypotField';
import homeContent from '@/content/home.json';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '@/lib/links';
import { NETLIFY_FORM_NAMES, submitNetlifyForm } from '@/lib/netlifyForms';
import sections from './sections.module.css';
import styles from './Contact.module.css';

const CONTENT_ID = 'content/home.json';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setError(null);
    try {
      await submitNetlifyForm(NETLIFY_FORM_NAMES.contact, form);
      setSent(true);
    } catch {
      setError("That didn't send. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="contact" className={sections.sectionNarrow} data-sb-object-id={CONTENT_ID}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 className={styles.title} data-sb-field-path="contactHeading">{homeContent.contactHeading}</h2>
          <p className={styles.blurb} data-sb-field-path="contactBlurb">{homeContent.contactBlurb}</p>
          <div className={styles.rule} />
          <div className={styles.routes}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.route}>{CONTACT_EMAIL}</a>
            <a href={INSTAGRAM_URL} className={styles.route}>Instagram</a>
          </div>
          <p className={styles.serving} data-sb-field-path="contactServing">{homeContent.contactServing}</p>
        </div>

        <div className={styles.formCol}>
          {sent ? (
            <div className={styles.sentCard}>
              <div className={styles.sentBanner} role="status">
                <span className={styles.sentMark} aria-hidden="true">✓</span>
                <span className={styles.sentText}>Message sent — we&rsquo;ll reply by email.</span>
              </div>
              <button type="button" onClick={() => setSent(false)} className={styles.resetButton}>Send another</button>
            </div>
          ) : (
            <form
              className={styles.form}
              name={NETLIFY_FORM_NAMES.contact}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value={NETLIFY_FORM_NAMES.contact} />
              <HoneypotField />
              <p className={styles.formTitle}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.dotPulse} aria-hidden="true" />
                <span data-sb-field-path="contactFormTitle">{homeContent.contactFormTitle}</span>
              </p>
              <p className={styles.formNote} data-sb-field-path="contactFormNote">{homeContent.contactFormNote}</p>

              <div className={styles.nameRow}>
                <label className={styles.field}>
                  <input className={styles.input} type="text" name="firstName" placeholder=" " required autoComplete="given-name" />
                  <span>First name</span>
                </label>
                <label className={styles.field}>
                  <input className={styles.input} type="text" name="lastName" placeholder=" " required autoComplete="family-name" />
                  <span>Last name</span>
                </label>
              </div>

              <label className={styles.field}>
                <input className={styles.input} type="email" name="email" placeholder=" " required autoComplete="email" />
                <span>Email address</span>
              </label>

              <label className={styles.field}>
                <textarea className={styles.input} name="message" placeholder=" " required />
                <span>Your message</span>
              </label>

              <button type="submit" className={styles.submit} disabled={pending}>{pending ? 'Sending…' : 'Send message'}</button>
              {error ? <p className={styles.error} role="alert">{error}</p> : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
