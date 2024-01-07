import AppBar from '../components/app_bar';
import CenteredView from "../components/centered_view";
import Footer from '../components/footer';
import styles from './about.module.css';

export default function About() {
    return (
        <CenteredView>
            <div className={styles.bg}>
            
                <AppBar />

                <div className={styles.title}>About Us</div>

                <Footer />

            </div>
        </CenteredView>
    )
}