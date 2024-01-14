import AppBar from "../components/app_bar";
import CenteredView from "../components/centered_view";
import styles from './gallery.module.css';

export default function Gallery() {
    return (
        <CenteredView>
            <div className={styles.bg}>
                
                <AppBar />

                <div className={styles.title}>Gallery</div>

                <div className={styles.infoText}>
                    Celebrate the mesmerizing beauty of Bharatanatyam through our Gallery page. Explore captivating moments captured in time, showcasing the grace, elegance, and vibrant expressions of our talented students. Immerse yourself in the world of this ancient Indian classical dance form as we share our passion and dedication through the lens of art. Each image tells a story, a testament to the dedication and artistry of our dancers. We invite you to browse and be inspired by the visual journey of Bharatanatyam.
                </div>

            </div>
        </CenteredView>
    )
}