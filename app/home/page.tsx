import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Occasions from '@/components/home/Occasions';
import HowItWorks from '@/components/home/HowItWorks';
import TwoPaths from '@/components/home/TwoPaths';
import Trust from '@/components/home/Trust';
import Portfolio from '@/components/home/Portfolio';
import ForCreators from '@/components/home/ForCreators';
import Faq from '@/components/home/Faq';
import Contact from '@/components/home/Contact';
import Download from '@/components/home/Download';
import StickyCta from '@/components/home/StickyCta';
import { HOME_PATH } from '@/lib/nav';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header currentPath={HOME_PATH} homeHref="#top" ctaHref="#download" />
      <Hero />
      <Stats />
      <Occasions />
      <HowItWorks />
      <TwoPaths />
      <Trust />
      <Portfolio />
      <ForCreators />
      <Faq />
      <Contact />
      <Download />
      <Footer />
      <StickyCta />
    </div>
  );
}
