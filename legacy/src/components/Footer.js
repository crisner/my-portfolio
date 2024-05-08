import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.Footer}>
            &#xa9; {new Date().getFullYear()} - Renisha Christie. A
        </footer>
    );
}

export default Footer;