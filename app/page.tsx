import styles from './page.module.css';
import AppBar from './components/app_bar';
import CenteredView from './components/centered_view';
import HeroCard from './components/home/hero_card';
import Footer from './components/footer';

export default function Home() {
  return (
    <CenteredView>

      <div className={styles.heroSection}>
        <AppBar />
        <div className={styles.card}><HeroCard /></div>
      </div>

      <Footer />
      
    </CenteredView>
  );
}
