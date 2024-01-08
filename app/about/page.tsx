import AppBar from '../components/app_bar';
import CenteredView from "../components/centered_view";
import Footer from '../components/footer';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    return (
        <CenteredView>
            <div className={styles.bg}>
            
                <AppBar />

                <div className={styles.title}>About Us</div>

                <div className={styles.aboutGuru}>
                    <Image
                        className={styles.guruImage} 
                        src="/about/the_guru.jpg" 
                        alt="About Us" 
                        height={350}
                        width={300}
                    />
                    <div className={styles.guruText}>
                        The Guru., 
                        B.Sc. in Computer Science
                        MBA (Master of Business Administration)
                        MD (Doctor of Medicine)
                        B.A. in Psychology
                        MFA in Creative Writing (Master of Fine Arts)
                    </div>
                </div>

                <Footer />

            </div>
        </CenteredView>
    )
}