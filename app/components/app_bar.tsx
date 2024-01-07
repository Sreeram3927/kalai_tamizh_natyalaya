"use client"

import React from 'react';
import styles from './app_bar.module.css';
import { useRouter } from 'next/navigation';

const AppBar: React.FC = () => {
    return (
        <div className={styles.AppBar}>
            <div>
                <h1>My App</h1>
            </div>
            <NavButtons />
            
        </div>
    );
};

function NavButtons() {

    const router = useRouter();

    const aboutPage = () => {
        console.log("About Page");
        router.push("/about");
    };

    const galleryPage = () => {
        console.log("Gallery Page");
        router.push("/gallery");
    }

    return (
        <div className={styles.NavRow}>
            <button className={styles.NavButton} onClick={galleryPage}>Gallery</button>
            <button className={styles.NavButton} onClick={aboutPage} >About Us</button>
        </div>
    )
}

export default AppBar;
