import AppBar from '../components/app_bar';
import CenteredView from "../components/centered_view";
import Footer from '../components/footer';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    return (
        <CenteredView isHome={false}>
            
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

            <div className={styles.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, massa eget tincidunt auctor, turpis velit tincidunt sapien, eu volutpat nisi metus non metus. Sed ac facilisis tortor. Quisque vitae sem eu arcu viverra vestibulum in id nulla.
            </div>

            <div className={styles.infoText}>
                Pellentesque eu quam ac mi condimentum tristique. Proin quis vestibulum leo. Sed vel semper est. Curabitur viverra justo nec quam elementum fringilla. Donec dapibus, augue eu varius feugiat, purus justo varius tortor, ac ultricies erat urna et justo.
            </div>

            <button className={styles.joinButton}>Join Now</button>

            <Footer />

        </CenteredView>
    )
}