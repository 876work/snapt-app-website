'use client';

import { useState } from 'react';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '@/lib/links';
import sections from './sections.module.css';
import styles from './Contact.module.css';

/**
 * Contact route for people who won't download the app.
 *
 * TODO(launch): submitting only swaps to the confirmation state — nothing is
 * sent. Post to your inbox / form provider before going live.
 *
 * Every field is `required`, so an empty submit is blocked by native
 * validation rather than falling through to the success state.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className={sections.sectionNarrow}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Still have a question?</h2>
          <p className={styles.blurb}>
            Send us a message, and we&rsquo;ll reply by email. For bookings, the app is faster, but
            for anything else, we&rsquo;re here.
          </p>
          <div className={styles.rule} />
          <div className={styles.routes}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.route}>
              {CONTACT_EMAIL}
            </a>
            <a href={INSTAGRAM_URL} className={styles.route}>
              Instagram
            </a>
          </div>
          <p className={styles.serving}>Currently serving northern Saint Lucia.</p>
        </div>

        <div className={styles.formCol}>
          {sent ? (
            <div className={styles.sentCard}>
              <div className={styles.sentBanner} role="status">
                <span className={styles.sentMark} aria-hidden="true">
                  ✓
                </span>
                <span className={styles.sentText}>Message sent — we&rsquo;ll reply by email.</span>
              </div>
              <button type="button" onClick={() => setSent(false)} className={styles.resetButton}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className={styles.formTitle}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.dotPulse} aria-hidden="true" />
                Get in touch
              </p>
              <p className={styles.formNote}>
                All fields are required. We usually reply within a day.
              </p>

              <div className={styles.nameRow}>
                <label className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    name="firstName"
                    placeholder=" "
                    required
                    autoComplete="given-name"
                  />
                  <span>First name</span>
                </label>
                <label className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    name="lastName"
                    placeholder=" "
                    required
                    autoComplete="family-name"
                  />
                  <span>Last name</span>
                </label>
              </div>

              <label className={styles.field}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <span>Email address</span>
              </label>

              <label className={styles.field}>
                <textarea className={styles.input} name="message" placeholder=" " required />
                <span>Your message</span>
              </label>

              <button type="submit" className={styles.submit}>
                Send message
              </button>
              <p className={styles.disclaimer}>
                Placeholder — wire this to your inbox before launch.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
