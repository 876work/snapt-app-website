import exploreContent from '@/content/explore.json';
import styles from './Explore.module.css';

const CONTENT_ID = 'content/explore.json';

const PHONES = [
  { src: exploreContent.fan1Image, alt: exploreContent.fan1Alt, imageField: 'fan1Image', width: 'clamp(120px,17vw,190px)', fan: 'rotate(-9deg) translateY(26px)', delay: '0.5s', z: 1, marginRight: '-14px' },
  { src: exploreContent.fan2Image, alt: exploreContent.fan2Alt, imageField: 'fan2Image', width: 'clamp(130px,18vw,200px)', fan: 'rotate(-4.5deg) translateY(10px)', delay: '0.38s', z: 2, marginRight: '-14px' },
  { src: exploreContent.fan3Image, alt: exploreContent.fan3Alt, imageField: 'fan3Image', width: 'clamp(150px,20vw,224px)', fan: undefined, delay: '0.28s', z: 3, center: true },
  { src: exploreContent.fan4Image, alt: exploreContent.fan4Alt, imageField: 'fan4Image', width: 'clamp(130px,18vw,200px)', fan: 'rotate(4.5deg) translateY(10px)', delay: '0.44s', z: 2, marginLeft: '-14px' },
  { src: exploreContent.fan5Image, alt: exploreContent.fan5Alt, imageField: 'fan5Image', width: 'clamp(120px,17vw,190px)', fan: 'rotate(9deg) translateY(26px)', delay: '0.56s', z: 1, marginLeft: '-14px' },
];

export default function PhoneFan() {
  return (
    <section className={styles.fanSection} aria-label="Snapt app screens" data-sb-object-id={CONTENT_ID}>
      <div className={styles.fan}>
        {PHONES.map((phone) => (
          <div
            key={phone.imageField}
            className={styles.fanItem}
            style={{
              width: phone.width,
              zIndex: phone.z,
              marginLeft: phone.marginLeft,
              marginRight: phone.marginRight,
              '--fan': phone.fan ?? 'none',
              transform: phone.fan,
              animationDelay: phone.delay,
            } as React.CSSProperties}
          >
            <div className={phone.center ? styles.phoneShellCenter : styles.phoneShell}>
              <div className={phone.center ? styles.phoneScreenCenter : styles.phoneScreen}>
                {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 440:956 frame */}
                <img src={phone.src} alt={phone.alt} data-sb-field-path={phone.imageField} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
