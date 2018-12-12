import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li>
                    <NavLink exact to="/" className={styles.hoverLink}
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                        {/* <FontAwesomeIcon className={styles.circle} icon={['far', 'dot-circle']} /> */}
                        {/* <svg className={styles.svg}>
                            <circle cx="100" cy="100" r="10" stroke="#E64444" stroke-width="2" fill-opacity="0" />
                        </svg> */}
                        Home
                    </NavLink>
                </li>
                <li><FontAwesomeIcon className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li>
                    <NavLink to="/portfolio" className={styles.hoverLink}
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                        {/* <svg height="200" width="200">
                            <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                        </svg> */}
                        Portfolio
                    </NavLink>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li>
                    <NavLink to="/about" className={styles.hoverLink} 
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                        About me
                    </NavLink>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li>
                    <NavLink to="/contact" className={styles.hoverLink} 
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon className={styles.menuBullet} icon="circle" />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;