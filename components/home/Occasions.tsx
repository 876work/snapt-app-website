import homeContent from '@/content/home.json';
import sections from './sections.module.css';
import styles from './Occasions.module.css';

const CONTENT_ID = 'content/home.json';

const OCCASIONS = [
  { title: homeContent.occasion1Title, blurb: homeContent.occasion1Blurb, image: homeContent.occasion1Image, alt: homeContent.occasion1Alt, titleField: 'occasion1Title', blurbField: 'occasion1Blurb', imageField: 'occasion1Image' },
  { title: homeContent.occasion2Title, blurb: homeContent.occasion2Blurb, image: homeContent.occasion2Image, alt: homeContent.occasion2Alt, titleField: 'occasion2Title', blurbField: 'occasion2Blurb', imageField: 'occasion2Image' },
  { title: homeContent.occasion3Title, blurb: homeContent.occasion3Blurb, image: homeContent.occasion3Image, alt: homeContent.occasion3Alt, titleField: 'occasion3Title', blurbField: 'occasion3Blurb', imageField: 'occasion3Image' },
  { title: homeContent.occasion4Title, blurb: homeContent.occasion4Blurb, image: homeContent.occasion4Image, alt: homeContent.occasion4Alt, titleField: 'occasion4Title', blurbField: 'occasion4Blurb', imageField: 'occasion4Image' },
  { title: homeContent.occasion5Title, blurb: homeContent.occasion5Blurb, image: homeContent.occasion5Image, alt: homeContent.occasion5Alt, titleField: 'occasion5Title', blurbField: 'occasion5Blurb', imageField: 'occasion5Image' },
  { title: homeContent.occasion6Title, blurb: homeContent.occasion6Blurb, image: homeContent.occasion6Image, alt: homeContent.occasion6Alt, titleField: 'occasion6Title', blurbField: 'occasion6Blurb', imageField: 'occasion6Image' },
  { title: homeContent.occasion7Title, blurb: homeContent.occasion7Blurb, image: homeContent.occasion7Image, alt: homeContent.occasion7Alt, titleField: 'occasion7Title', blurbField: 'occasion7Blurb', imageField: 'occasion7Image' },
];

export default function Occasions() {
  return (
    <section id="occasions" className={sections.section} data-sb-object-id={CONTENT_ID}>
      <p className={sections.overline} data-sb-field-path="occasionsOverline">{homeContent.occasionsOverline}</p>
      <h2 className={sections.h2Spaced}>
        <span data-sb-field-path="occasionsHeadingLine1">{homeContent.occasionsHeadingLine1}</span>
        <br />
        <span data-sb-field-path="occasionsHeadingLine2">{homeContent.occasionsHeadingLine2}</span>
      </h2>

      <div className={styles.grid}>
        {OCCASIONS.map((occasion) => (
          <a key={occasion.titleField} href="#download" className={styles.tile}>
            <div className={styles.frame}>
              {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 4:5 frame */}
              <img src={occasion.image} alt={occasion.alt} data-sb-field-path={occasion.imageField} />
            </div>
            <div className={styles.title} data-sb-field-path={occasion.titleField}>{occasion.title}</div>
            <div className={styles.blurb} data-sb-field-path={occasion.blurbField}>{occasion.blurb}</div>
          </a>
        ))}

        <div className={styles.promptTile}>
          <div className={styles.promptTitle} data-sb-field-path="occasionsPromptTitle">{homeContent.occasionsPromptTitle}</div>
          <p className={styles.promptBody} data-sb-field-path="occasionsPromptBody">{homeContent.occasionsPromptBody}</p>
          <a href="#download" className={styles.promptCta} data-sb-field-path="occasionsPromptCta">{homeContent.occasionsPromptCta}</a>
        </div>
      </div>
    </section>
  );
}
