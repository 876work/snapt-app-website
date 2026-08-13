import styles from './Explore.module.css';

/**
 * Five phones fanned out, the centre one largest. Each has its own resting
 * transform (`--fan`) that the riseFan keyframes preserve while it animates in.
 */
const PHONES = [
  {
    src: '/assets/screens/fan-1.webp',
    alt: 'Snapt onboarding screen',
    width: 'clamp(120px,17vw,190px)',
    fan: 'rotate(-9deg) translateY(26px)',
    delay: '0.5s',
    z: 1,
    marginRight: '-14px',
  },
  {
    src: '/assets/screens/fan-2.webp',
    alt: 'Browse creators screen',
    width: 'clamp(130px,18vw,200px)',
    fan: 'rotate(-4.5deg) translateY(10px)',
    delay: '0.38s',
    z: 2,
    marginRight: '-14px',
  },
  {
    src: '/assets/screens/fan-3.webp',
    alt: 'Snapt home screen',
    width: 'clamp(150px,20vw,224px)',
    fan: undefined,
    delay: '0.28s',
    z: 3,
    center: true,
  },
  {
    src: '/assets/screens/fan-4.webp',
    alt: 'Booking screen',
    width: 'clamp(130px,18vw,200px)',
    fan: 'rotate(4.5deg) translateY(10px)',
    delay: '0.44s',
    z: 2,
    marginLeft: '-14px',
  },
  {
    src: '/assets/screens/fan-5.webp',
    alt: 'Delivery screen',
    width: 'clamp(120px,17vw,190px)',
    fan: 'rotate(9deg) translateY(26px)',
    delay: '0.56s',
    z: 1,
    marginLeft: '-14px',
  },
];

export default function PhoneFan() {
  return (
    <section className={styles.fanSection} aria-label="Snapt app screens">
      <div className={styles.fan}>
        {PHONES.map((phone) => (
          <div
            key={phone.src}
            className={styles.fanItem}
            style={
              {
                width: phone.width,
                zIndex: phone.z,
                marginLeft: phone.marginLeft,
                marginRight: phone.marginRight,
                '--fan': phone.fan ?? 'none',
                transform: phone.fan,
                animationDelay: phone.delay,
              } as React.CSSProperties
            }
          >
            <div className={phone.center ? styles.phoneShellCenter : styles.phoneShell}>
              <div className={phone.center ? styles.phoneScreenCenter : styles.phoneScreen}>
                {/* eslint-disable-next-line @next/next/no-img-element -- fills a fixed 440:956 frame */}
                <img src={phone.src} alt={phone.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
