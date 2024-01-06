import React from "react";
import styles from "./gallery_tease.module.css";

const GalleryTease = () => {
    return (
        <div className={styles.container}>

            <div className={styles.topPart}>
                <div className={styles.title}>Gallery</div>
                <button className={styles.joinButton}>See More</button>
            </div>

        </div>
    )
}

export default GalleryTease;