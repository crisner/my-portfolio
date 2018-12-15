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
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon className={styles.selected + ' ' + styles.show} icon={['far', 'dot-circle']} />
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
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon className={styles.selected} icon={['far', 'dot-circle']} />
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
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon className={styles.selected} icon={['far', 'dot-circle']} />
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
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon className={styles.selected} icon={['far', 'dot-circle']} />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;