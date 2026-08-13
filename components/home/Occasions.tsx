import sections from './sections.module.css';
import styles from './Occasions.module.css';

/**
 * Deliberately early on the page: people arrive knowing their occasion, not
 * the product.
 */
const OCCASIONS = [
  {
    title: 'Weddings',
    blurb: 'The whole day, or just the golden hour.',
    image: '/assets/img/wedding.jpg',
    alt: 'Bride and groom walking under palm trees in Saint Lucia',
  },
  {
    title: 'Corporate events',
    blurb: 'Launches, conferences, team days.',
    image: '/assets/img/corporate.webp',
    alt: 'Guest smiling at an evening corporate reception',
  },
  {
    title: 'Birthdays',
    blurb: 'Big ones, small ones, surprise ones.',
    image: '/assets/img/birthday.jpg',
    alt: 'Woman peeking through a giant 30 birthday balloon',
  },
  {
    title: 'Nights out',
    blurb: "Girls' night, guys' night — proof it happened.",
    image: '/assets/img/nightsout.jpg',
    alt: 'Four friends laughing together on a night out',
  },
  {
    title: 'Social content',
    blurb: 'Reels, brand shoots, your next post.',
    image: '/assets/img/social.jpg',
    alt: 'Woman being filmed by a videographer outdoors',
  },
  {
    title: 'Family portraits',
    blurb: 'Everyone together, for once.',
    image: '/assets/img/family.webp',
    alt: 'Family in party hats blowing out candles on a birthday cake',
  },
  {
    title: 'Graduations',
    blurb: 'You did the work. Keep the moment.',
    image: '/assets/img/graduation.webp',
    alt: 'Graduate in a cap and suit adjusting his jacket button',
  },
];

export default function Occasions() {
  return (
    <section id="occasions" className={sections.section}>
      <p className={sections.overline}>WHATEVER THE OCCASION</p>
      <h2 className={sections.h2Spaced}>
        Start with your moment.
        <br />
        We&rsquo;ll bring the camera.
      </h2>

      <div className={styles.grid}>
        {OCCASIONS.map((occasion) => (
          <a key={occasion.title} href="#download" className={styles.tile}>
            <div className={styles.frame}>
              {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 4:5 frame */}
              <img src={occasion.image} alt={occasion.alt} />
            </div>
            <div className={styles.title}>{occasion.title}</div>
            <div className={styles.blurb}>{occasion.blurb}</div>
          </a>
        ))}

        <div className={styles.promptTile}>
          <div className={styles.promptTitle}>Something else?</div>
          <p className={styles.promptBody}>
            If it matters to you, it&rsquo;s worth shooting. Tell us what you need in the app.
          </p>
          <a href="#download" className={styles.promptCta}>
            Get the app
          </a>
        </div>
      </div>
    </section>
  );
}
