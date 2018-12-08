import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li>
                <a className={styles.hoverLink} href="#">
                    <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                    {/* <FontAwesomeIcon className={styles.circle} icon={['far', 'dot-circle']} /> */}
                    {/* <svg className={styles.svg}>
                        <circle cx="100" cy="100" r="10" stroke="#E64444" stroke-width="2" fill-opacity="0" />
                    </svg> */}
                    Home</a>
                </li>
                <li><FontAwesomeIcon className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li>
                <a className={styles.hoverLink} href="#">
                    <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                    {/* <svg height="200" width="200">
                        <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                    </svg> */}
                    Portfolio</a>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><a className={styles.hoverLink} href="#"><FontAwesomeIcon className={styles.menuBullet} icon="circle" />About me</a></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><a className={styles.hoverLink} href="#"><FontAwesomeIcon className={styles.menuBullet} icon="circle" />Contact</a></li>
            </ul>
        </nav>
    );
}

export default Menu;