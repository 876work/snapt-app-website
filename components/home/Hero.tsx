'use client';

import MaskedHeading from '@/components/fx/MaskedHeading';
import SideRays from '@/components/fx/SideRays';
import StoreBadges from '@/components/site/StoreBadges';
import homeContent from '@/content/home.json';
import styles from './Hero.module.css';

const CONTENT_ID = 'content/home.json';

const Spark = ({ fill }: { fill: string }) => (
  <path d="M13 2.5L5 13.2h5.6L9.4 21.5l9-11.2h-6.2l.8-7.8z" fill={fill} />
);

export default function Hero() {
  return (
    <section id="top" className={styles.hero} data-sb-object-id={CONTENT_ID}>
      <div className={styles.rays} aria-hidden="true">
        <SideRays
          speed={1.1}
          rayColor1="#FFE9A8"
          rayColor2="#FFFFFF"
          intensity={1.1}
          spread={1.5}
          origin="top-right"
          tilt={-6}
          saturation={0.9}
          blend={0.6}
          falloff={1.9}
          opacity={0.5}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div data-sb-field-path="heroTitle">
            <MaskedHeading
              tag="h1"
              text={homeContent.heroTitle}
              src={homeContent.heroMaskImage}
              align="left"
              weight={800}
              tracking={-0.02}
              lineHeight={1.05}
              textScale={0.118}
              fillScale={1.3}
              parallax={24}
              drift={12}
              brightness={0.42}
              saturation={1.15}
              plate="#1A1A1A"
              mediaOpacity={0.55}
              reveal="rise"
              trigger="mount"
              duration={1.1}
              stagger={0.09}
            />
          </div>

          <p className={styles.lede} data-sb-field-path="heroDescription">
            {homeContent.heroDescription}
          </p>

          <div className={styles.actions}>
            <StoreBadges>
              <div className={styles.qr}>
                {/* TODO(launch): swap for a real QR encoding STORE_ONELINK. */}
                <div className={styles.qrCode}>
                  QR
                  <br />
                  code
                </div>
                <div className={styles.qrText}>Scan with your phone to get Snapt</div>
              </div>
            </StoreBadges>
          </div>

          <p className={styles.fineprint} data-sb-field-path="heroFineprint">
            {homeContent.heroFineprint}
          </p>
        </div>

        <div className={styles.phoneCol}>
          <div className={styles.phoneWrap}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.sparkTop}>
              <Spark fill="#1A1A1A" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.sparkBottom}>
              <Spark fill="#fff" />
            </svg>

            <div className={styles.phone}>
              <div className={styles.screen}>
                {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed aspect-ratio frame */}
                <img src={homeContent.heroAppScreenshot} alt="Snapt app home screen" data-sb-field-path="heroAppScreenshot" />
              </div>
            </div>

            <div className={`${styles.popCard} ${styles.popCardVerified}`}>
              <div className={styles.overline} data-sb-field-path="heroVerifiedOverline">{homeContent.heroVerifiedOverline}</div>
              <div className={styles.popTitle} data-sb-field-path="heroVerifiedTitle">{homeContent.heroVerifiedTitle}</div>
              <div className={styles.popMeta} data-sb-field-path="heroVerifiedMeta">{homeContent.heroVerifiedMeta}</div>
            </div>

            <div className={`${styles.popCard} ${styles.popCardDelivered}`}>
              <div className={styles.statusRow}>
                <span className={styles.statusDot} />
                <span className={styles.statusLabel} data-sb-field-path="heroDeliveredLabel">{homeContent.heroDeliveredLabel}</span>
              </div>
              <div className={styles.popTitle} data-sb-field-path="heroDeliveredTitle">{homeContent.heroDeliveredTitle}</div>
              <div className={styles.popMeta} data-sb-field-path="heroDeliveredMeta">{homeContent.heroDeliveredMeta}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
