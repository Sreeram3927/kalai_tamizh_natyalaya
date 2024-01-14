"use client"

import React from 'react';
import styles from './app_bar.module.css';
import { useRouter } from 'next/navigation';

const AppBar: React.FC = () => {

    const router = useRouter();

    const homePage = () => {
        router.push("/");
    };

    return (
        <div className={styles.AppBar}>
            <div onClick={homePage} style={{cursor: 'pointer'}}>
                <h1>My App</h1>
            </div>
            <NavButtons />
            
        </div>
    );
};

function NavButtons() {

    const router = useRouter();

    const aboutPage = () => {
        router.push("/about");
    };

    const galleryPage = () => {
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
