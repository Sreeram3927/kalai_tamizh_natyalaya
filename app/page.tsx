import styles from './page.module.css';
import AppBar from './components/app_bar';
import CenteredView from './components/centered_view';
import HeroCard from './components/home/hero_card';

export default function Home() {
  return (
    <CenteredView>
      <div className={styles.heroSection}>

        <AppBar />

        <div className={styles.card}><HeroCard /></div>

      </div>
    </CenteredView>
  );
}
