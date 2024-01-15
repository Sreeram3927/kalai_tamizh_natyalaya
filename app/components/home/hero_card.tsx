import React from "react";
import styles from "./hero_card.module.css";

const HeroCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.quoteLarge}>{"\"Dancers are the messengers of the gods.\""}</div>
            <div className={styles.quoteAuthor}>- Martha Graham</div>
        </div>
    )
}

export default HeroCard;