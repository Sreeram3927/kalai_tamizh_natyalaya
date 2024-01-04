import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>

        <div className={styles.backgroundOverlay} />

        <div className={styles.myContacts}>

            <div className={styles.contactInfo}>
                <div className={styles.infos}>
                    Phone No:<br />
                    +91 0123456789
                </div>
                <div className={styles.infos}>
                    Email:<br />
                    example@gmail.com
                </div>
                <div className={styles.infos}>
                    Address:<br />
                    32, Gangadeeswarar Koil St,<br />
                    Purasaiwalkam.<br />
                    Madurai - 865 645
                </div>
            </div>

        </div>
      
      {/* <div className={styles.copyright}>
        © 2023 Kalai Tamizh Natayalaya
      </div>
      
      <div className={styles.socialMedia}>
        <div className={styles.instagramIcon}>
        
        </div>
        <div className={styles.youtubeIcon}>
        
        </div>
        <div className={styles.facebookIcon}>
        
        </div>
        <div className={styles.followUs}>Follow Us</div> 
      </div>*/}
    </div>
  );
};

export default Footer;
