import React from "react";
import styles from "./gallery_tease.module.css";
import Image from "next/image";

const GalleryTease = () => {
    return (
        <div className={styles.container}>

            <div className={styles.topPart}>
                <div className={styles.title}>Gallery</div>
                <button className={styles.joinButton}>See More</button>
            </div>

            <div className={styles.imageCarousel}>
                <Image
                    className={styles.galleryImage} 
                    src='/gallery/1.jpg' 
                    alt='Image 1'
                    width={300}
                    height={200}
                />
                <Image
                    className={styles.galleryImage} 
                    src='/gallery/2.jpg' 
                    alt='Image 2'
                    width={300}
                    height={200}
                />
                <Image
                    className={styles.galleryImage} 
                    src='/gallery/3.jpg' 
                    alt='Image 3'
                    width={300}
                    height={200}
                />
                <Image
                    className={styles.galleryImage} 
                    src='/gallery/4.jpg' 
                    alt='Image 4'
                    width={300}
                    height={200}
                />
            </div>

        </div>
    )
}

export default GalleryTease;