'use client';

import AccordionGallery, { type GalleryItem } from '@/components/fx/AccordionGallery';
import sections from './sections.module.css';
import styles from './Portfolio.module.css';

/**
 * TODO(launch): swap for real creator work — 900 × 1200 (3:4) each.
 * These are stand-ins so the accordion motion reads correctly.
 */
const PORTFOLIO_ITEMS: GalleryItem[] = [
  {
    image: '/assets/img/wedding.jpg',
    label: 'Weddings',
    alt: 'Bride and groom walking under palm trees',
  },
  {
    image: '/assets/img/nightsout.jpg',
    label: 'Nights out',
    alt: 'Friends laughing together on a night out',
  },
  {
    image: '/assets/img/social.jpg',
    label: 'Social content',
    alt: 'Woman being filmed outdoors by a videographer',
  },
  {
    image: '/assets/img/birthday.jpg',
    label: 'Birthdays',
    alt: 'Woman posing with giant number balloons',
  },
  {
    image: '/assets/img/book-creator.jpg',
    label: 'Studio sessions',
    alt: 'Photographer directing a styled studio shoot',
  },
];

export default function Portfolio() {
  return (
    <section className={sections.section}>
      <div className={styles.head}>
        <h2 className={sections.h2}>Your Style, Your Chose</h2>
        <div className={styles.subtitle}>Recent work by Snapt creators</div>
      </div>

      <div className={styles.gallery}>
        <AccordionGallery
          items={PORTFOLIO_ITEMS}
          defaultIndex={2}
          accentColor="#FFB800"
          overlayColor="#1A1A1A"
          textColor="#FFFFFF"
          height={460}
          gap={10}
          radius={16}
          expandRatio={0.52}
          duration={0.6}
          parallax={0.5}
          tilt={8}
          trigger="hover"
          grayscale
        />
      </div>

      <p className={styles.note}>
        Hover or tap a panel to open it. Swap these for your own work — 900 × 1200 (3:4) each.
      </p>
    </section>
  );
}
