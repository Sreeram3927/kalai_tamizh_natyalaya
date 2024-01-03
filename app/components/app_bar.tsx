import React from 'react';
import styles from './app_bar.module.css';

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
    return (
        <div className={styles.NavRow}>
            <button className={styles.NavButton}>Button 1</button>
            <button className={styles.NavButton}>Button 2</button>
        </div>
    )
}

export default AppBar;
