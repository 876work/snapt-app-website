'use client';

import AccordionGallery, { type GalleryItem } from '@/components/fx/AccordionGallery';
import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './Portfolio.module.css';

const CONTENT_ID = 'content/home.json';

const PORTFOLIO_ITEMS: GalleryItem[] = [
  { image: homeContent.portfolio1Image, label: homeContent.portfolio1Label, alt: homeContent.portfolio1Alt },
  { image: homeContent.portfolio2Image, label: homeContent.portfolio2Label, alt: homeContent.portfolio2Alt },
  { image: homeContent.portfolio3Image, label: homeContent.portfolio3Label, alt: homeContent.portfolio3Alt },
  { image: homeContent.portfolio4Image, label: homeContent.portfolio4Label, alt: homeContent.portfolio4Alt },
  { image: homeContent.portfolio5Image, label: homeContent.portfolio5Label, alt: homeContent.portfolio5Alt },
];

export default function Portfolio() {
  return (
    <section className={sections.section} data-sb-object-id={CONTENT_ID}>
      <div className={styles.head}>
        <h2 className={sections.h2} data-sb-field-path="portfolioHeading">{homeContent.portfolioHeading}</h2>
        <div className={styles.subtitle} data-sb-field-path="portfolioSubtitle">{homeContent.portfolioSubtitle}</div>
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

      <p className={styles.note} data-sb-field-path="portfolioNote">{homeContent.portfolioNote}</p>
    </section>
  );
}
