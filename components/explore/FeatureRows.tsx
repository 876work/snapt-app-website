import Link from 'next/link';
import StatusTag from '@/components/ds/StatusTag';
import VerifiedBadge from '@/components/ds/VerifiedBadge';
import { HOME_PATH } from '@/lib/nav';
import Reveal from './Reveal';
import styles from './Explore.module.css';

interface Row {
  key: string;
  overline: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
  /** Which side the phone sits on at wide widths. */
  mediaSide: 'left' | 'right';
  screen: { src: string; alt: string };
  bobPhone?: boolean;
  card: {
    badge: React.ReactNode;
    title: string;
    meta: string;
    tilt: string;
    bobDuration: string;
  };
}

const ROWS: Row[] = [
  {
    key: 'browse',
    overline: 'BROWSE',
    title: 'Real portfolios, real people',
    body: "Every creator on Snapt shows real work and a verified identity. Browse portfolios by occasion, see who's available in your area, and pick the eye that fits your day.",
    mediaSide: 'left',
    screen: { src: '/assets/screens/row-browse.webp', alt: 'Creator profile with portfolio' },
    bobPhone: true,
    card: {
      badge: <VerifiedBadge />,
      title: 'ID checked before their first job',
      meta: 'Every creator you can browse',
      tilt: 'rotate(-5deg)',
      bobDuration: '5s',
    },
  },
  {
    key: 'book',
    overline: 'BOOK',
    title: 'Booked in a few taps',
    body: "Pick your occasion, drop your pin, choose a date and time. Standard pricing shows before you confirm — the price you see is the price you pay. We'll confirm as soon as a creator accepts.",
    mediaSide: 'right',
    screen: { src: '/assets/screens/row-book.webp', alt: 'Occasion and date booking screen' },
    card: {
      badge: <div className={styles.popOverline}>STANDARD PRICING</div>,
      title: '$60 · 1 hour session',
      meta: 'Shown before you confirm',
      tilt: 'rotate(4deg)',
      bobDuration: '5.4s',
    },
  },
  {
    key: 'session',
    overline: 'ON THE DAY',
    title: 'Meet with confidence',
    body: "When your creator arrives, you exchange a one-time safety code shown in both apps — so you always know you've met the verified person you booked. Then you get on with your day; they've got the camera.",
    mediaSide: 'left',
    screen: { src: '/assets/screens/row-session.webp', alt: 'Session screen with safety code' },
    card: {
      badge: <div className={styles.popOverline}>SAFETY CODE</div>,
      title: 'One-time code at arrival',
      meta: 'Shown in both apps, matched in person',
      tilt: 'rotate(-4deg)',
      bobDuration: '5.2s',
    },
  },
  {
    key: 'upload',
    overline: 'REMOTE EDITS',
    title: 'Already have the footage? Send it in.',
    body: 'Upload photos or video straight from your camera roll and a real editor takes it from there — colour, cuts, and polish, from $25. No session needed, and no location limit across Saint Lucia.',
    mediaSide: 'right',
    screen: { src: '/assets/screens/row-upload.webp', alt: 'Footage upload screen' },
    card: {
      badge: <StatusTag tone="ready" label="UPLOADING" />,
      title: 'Straight from your camera roll',
      meta: 'Remote edit · from $25',
      tilt: 'rotate(5deg)',
      bobDuration: '5.6s',
    },
  },
  {
    key: 'delivery',
    overline: 'DELIVERY',
    title: 'Delivered where you booked it',
    body: 'Your finished photos and video land right in the app — within 24 hours as standard, 6 hours on rush. Download in full quality, share anywhere, keep them forever.',
    mediaSide: 'left',
    screen: { src: '/assets/screens/row-delivery.webp', alt: 'Delivered photos screen' },
    card: {
      badge: <StatusTag tone="live" label="ON TIME" />,
      title: 'Every job has a delivery deadline',
      meta: '24 hours standard · 6 hours on rush',
      tilt: 'rotate(-5deg)',
      bobDuration: '5.1s',
    },
  },
  {
    key: 'creator',
    overline: 'CREATOR MODE',
    title: 'One app, both sides of the lens',
    body: 'Creators switch into their own dashboard — see booked jobs, track earnings, and cash out. Keep 68% of every booking, with payouts available 7 days after delivery.',
    link: { href: `${HOME_PATH}#creators`, label: 'Become a creator →' },
    mediaSide: 'right',
    screen: { src: '/assets/screens/row-creator.webp', alt: 'Creator earnings dashboard' },
    card: {
      badge: <div className={styles.popOverline}>CREATOR MODE</div>,
      title: 'Switch between client and creator',
      meta: 'Same login, same app',
      tilt: 'rotate(4deg)',
      bobDuration: '5.5s',
    },
  },
];

export default function FeatureRows() {
  return (
    <section className={styles.rows} aria-label="How the app works">
      {ROWS.map((row) => {
        const mediaLeft = row.mediaSide === 'left';
        return (
          <Reveal key={row.key} className={styles.row}>
            <div
              className={styles.rowMedia}
              style={{ order: mediaLeft ? 1 : 2 }}
            >
              <div className={styles.rowPhoneWrap}>
                <div className={row.bobPhone ? styles.rowPhoneBob : styles.rowPhone}>
                  <div className={styles.rowPhoneScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 440:956 frame */}
                    <img src={row.screen.src} alt={row.screen.alt} />
                  </div>
                </div>
                <div
                  className={mediaLeft ? styles.popLeft : styles.popRight}
                  style={
                    {
                      '--tilt': row.card.tilt,
                      transform: row.card.tilt,
                      animation: `bob ${row.card.bobDuration} ease-in-out infinite`,
                    } as React.CSSProperties
                  }
                >
                  {row.card.badge}
                  <div className={styles.popTitle}>{row.card.title}</div>
                  <div className={styles.popMeta}>{row.card.meta}</div>
                </div>
              </div>
            </div>

            <div className={styles.rowCopy} style={{ order: mediaLeft ? 2 : 1 }}>
              <p className={styles.rowOverline}>{row.overline}</p>
              <h2 className={styles.rowTitle}>{row.title}</h2>
              <p className={styles.rowBody}>{row.body}</p>
              {row.link ? (
                <Link href={row.link.href} className={styles.rowLink}>
                  {row.link.label}
                </Link>
              ) : null}
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
