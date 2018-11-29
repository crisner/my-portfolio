import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.hoverLink}>
                    <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                    {/* <svg height="200" width="200">
                        <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                    </svg> */}
                    <a href="#">Home</a>
                </li>
                <li><FontAwesomeIcon className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li className={styles.hoverLink}>
                    <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                    {/* <svg height="200" width="200">
                        <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                    </svg> */}
                    <a href="#">Portfolio</a>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li className={styles.hoverLink}><FontAwesomeIcon className={styles.menuBullet} icon="circle" /><a href="#">About me</a></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li className={styles.hoverLink}><FontAwesomeIcon className={styles.menuBullet} icon="circle" /><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Menu;