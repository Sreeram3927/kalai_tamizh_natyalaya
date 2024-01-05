import React from 'react';
import styles from './mode_of_classes.module.css';

const ModeOfClasses = () => {
  return (
    <div className={styles.container}>

        <div className={styles.topPart}>
            <div className={styles.title}>Mode of Classes</div>
            <button className={styles.joinButton}>Join</button>
        </div>

        <div className={styles.infoCardContainer}>

            <div className={styles.infoCard}>
                <div className={styles.blurBackground}></div>
                <div className={styles.infoTitle}>Online</div>
                <div className={styles.infoDescription}>
                    Every year, Natyalaya stages several productions, ranging from traditional Bharathanatyam dance dramas to more to display that to be visible to the audience
                </div>
            </div>

            <div className={styles.infoCard}>
                <div className={styles.blurBackground}></div>
                <div className={styles.infoTitle}>Offline</div>
                <div className={styles.infoDescription}>
                    Every year, Natyalaya stages several productions, ranging from traditional Bharathanatyam dance dramas to more to display that to be visible to the audience
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default ModeOfClasses;
