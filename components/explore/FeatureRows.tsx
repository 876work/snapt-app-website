import Link from 'next/link';
import StatusTag from '@/components/ds/StatusTag';
import VerifiedBadge from '@/components/ds/VerifiedBadge';
import exploreContent from '@/content/explore.json';
import { HOME_PATH } from '@/lib/nav';
import Reveal from './Reveal';
import styles from './Explore.module.css';

const CONTENT_ID = 'content/explore.json';

type BadgeKind = 'verified' | 'text' | 'ready' | 'live';

interface Row {
  key: string;
  overline: string;
  title: string;
  body: string;
  overlineField: string;
  titleField: string;
  bodyField: string;
  link?: { href: string; label: string; labelField: string };
  mediaSide: 'left' | 'right';
  screen: { src: string; alt: string; imageField: string };
  bobPhone?: boolean;
  card: {
    badgeKind: BadgeKind;
    badgeText?: string;
    badgeField?: string;
    title: string;
    meta: string;
    titleField: string;
    metaField: string;
    tilt: string;
    bobDuration: string;
  };
}

const ROWS: Row[] = [
  {
    key: 'browse',
    overline: exploreContent.row1Overline,
    title: exploreContent.row1Title,
    body: exploreContent.row1Body,
    overlineField: 'row1Overline',
    titleField: 'row1Title',
    bodyField: 'row1Body',
    mediaSide: 'left',
    screen: { src: exploreContent.row1Image, alt: exploreContent.row1Alt, imageField: 'row1Image' },
    bobPhone: true,
    card: {
      badgeKind: 'verified',
      title: exploreContent.row1CardTitle,
      meta: exploreContent.row1CardMeta,
      titleField: 'row1CardTitle',
      metaField: 'row1CardMeta',
      tilt: 'rotate(-5deg)',
      bobDuration: '5s',
    },
  },
  {
    key: 'book',
    overline: exploreContent.row2Overline,
    title: exploreContent.row2Title,
    body: exploreContent.row2Body,
    overlineField: 'row2Overline',
    titleField: 'row2Title',
    bodyField: 'row2Body',
    mediaSide: 'right',
    screen: { src: exploreContent.row2Image, alt: exploreContent.row2Alt, imageField: 'row2Image' },
    card: {
      badgeKind: 'text',
      badgeText: exploreContent.row2Badge,
      badgeField: 'row2Badge',
      title: exploreContent.row2CardTitle,
      meta: exploreContent.row2CardMeta,
      titleField: 'row2CardTitle',
      metaField: 'row2CardMeta',
      tilt: 'rotate(4deg)',
      bobDuration: '5.4s',
    },
  },
  {
    key: 'session',
    overline: exploreContent.row3Overline,
    title: exploreContent.row3Title,
    body: exploreContent.row3Body,
    overlineField: 'row3Overline',
    titleField: 'row3Title',
    bodyField: 'row3Body',
    mediaSide: 'left',
    screen: { src: exploreContent.row3Image, alt: exploreContent.row3Alt, imageField: 'row3Image' },
    card: {
      badgeKind: 'text',
      badgeText: exploreContent.row3Badge,
      badgeField: 'row3Badge',
      title: exploreContent.row3CardTitle,
      meta: exploreContent.row3CardMeta,
      titleField: 'row3CardTitle',
      metaField: 'row3CardMeta',
      tilt: 'rotate(-4deg)',
      bobDuration: '5.2s',
    },
  },
  {
    key: 'upload',
    overline: exploreContent.row4Overline,
    title: exploreContent.row4Title,
    body: exploreContent.row4Body,
    overlineField: 'row4Overline',
    titleField: 'row4Title',
    bodyField: 'row4Body',
    mediaSide: 'right',
    screen: { src: exploreContent.row4Image, alt: exploreContent.row4Alt, imageField: 'row4Image' },
    card: {
      badgeKind: 'ready',
      title: exploreContent.row4CardTitle,
      meta: exploreContent.row4CardMeta,
      titleField: 'row4CardTitle',
      metaField: 'row4CardMeta',
      tilt: 'rotate(5deg)',
      bobDuration: '5.6s',
    },
  },
  {
    key: 'delivery',
    overline: exploreContent.row5Overline,
    title: exploreContent.row5Title,
    body: exploreContent.row5Body,
    overlineField: 'row5Overline',
    titleField: 'row5Title',
    bodyField: 'row5Body',
    mediaSide: 'left',
    screen: { src: exploreContent.row5Image, alt: exploreContent.row5Alt, imageField: 'row5Image' },
    card: {
      badgeKind: 'live',
      title: exploreContent.row5CardTitle,
      meta: exploreContent.row5CardMeta,
      titleField: 'row5CardTitle',
      metaField: 'row5CardMeta',
      tilt: 'rotate(-5deg)',
      bobDuration: '5.1s',
    },
  },
  {
    key: 'creator',
    overline: exploreContent.row6Overline,
    title: exploreContent.row6Title,
    body: exploreContent.row6Body,
    overlineField: 'row6Overline',
    titleField: 'row6Title',
    bodyField: 'row6Body',
    link: { href: `${HOME_PATH}#creators`, label: exploreContent.row6LinkLabel, labelField: 'row6LinkLabel' },
    mediaSide: 'right',
    screen: { src: exploreContent.row6Image, alt: exploreContent.row6Alt, imageField: 'row6Image' },
    card: {
      badgeKind: 'text',
      badgeText: exploreContent.row6Badge,
      badgeField: 'row6Badge',
      title: exploreContent.row6CardTitle,
      meta: exploreContent.row6CardMeta,
      titleField: 'row6CardTitle',
      metaField: 'row6CardMeta',
      tilt: 'rotate(4deg)',
      bobDuration: '5.5s',
    },
  },
];

function CardBadge({ row }: { row: Row }) {
  if (row.card.badgeKind === 'verified') return <VerifiedBadge />;
  if (row.card.badgeKind === 'ready') return <StatusTag tone="ready" label="UPLOADING" />;
  if (row.card.badgeKind === 'live') return <StatusTag tone="live" label="ON TIME" />;
  return <div className={styles.popOverline} data-sb-field-path={row.card.badgeField}>{row.card.badgeText}</div>;
}

export default function FeatureRows() {
  return (
    <section className={styles.rows} aria-label="How the app works" data-sb-object-id={CONTENT_ID}>
      {ROWS.map((row) => {
        const mediaLeft = row.mediaSide === 'left';
        return (
          <Reveal key={row.key} className={styles.row}>
            <div className={styles.rowMedia} style={{ order: mediaLeft ? 1 : 2 }}>
              <div className={styles.rowPhoneWrap}>
                <div className={row.bobPhone ? styles.rowPhoneBob : styles.rowPhone}>
                  <div className={styles.rowPhoneScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 440:956 frame */}
                    <img src={row.screen.src} alt={row.screen.alt} data-sb-field-path={row.screen.imageField} />
                  </div>
                </div>
                <div
                  className={mediaLeft ? styles.popLeft : styles.popRight}
                  style={{
                    '--tilt': row.card.tilt,
                    transform: row.card.tilt,
                    animation: `bob ${row.card.bobDuration} ease-in-out infinite`,
                  } as React.CSSProperties}
                >
                  <CardBadge row={row} />
                  <div className={styles.popTitle} data-sb-field-path={row.card.titleField}>{row.card.title}</div>
                  <div className={styles.popMeta} data-sb-field-path={row.card.metaField}>{row.card.meta}</div>
                </div>
              </div>
            </div>

            <div className={styles.rowCopy} style={{ order: mediaLeft ? 2 : 1 }}>
              <p className={styles.rowOverline} data-sb-field-path={row.overlineField}>{row.overline}</p>
              <h2 className={styles.rowTitle} data-sb-field-path={row.titleField}>{row.title}</h2>
              <p className={styles.rowBody} data-sb-field-path={row.bodyField}>{row.body}</p>
              {row.link ? <Link href={row.link.href} className={styles.rowLink} data-sb-field-path={row.link.labelField}>{row.link.label}</Link> : null}
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
