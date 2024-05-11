import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MobileMenu.module.css';

function MobileMenu(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li onClick={props.expandMenu}>
                    <NavLink exact to="/" className={styles.hoverLink}
                    activeStyle={{
                        background: "#ee4848",
                        boxShadow: "1px 1px 2px rgba(206, 62, 62,1)"
                    }}>
                        Home
                    </NavLink>
                </li>
                
                <li onClick={props.expandMenu}>
                    <NavLink to="/portfolio" className={styles.hoverLink}
                    activeStyle={{
                        background: "#ee4848",
                        boxShadow: "1px 1px 2px rgba(206, 62, 62,1)"
                    }}>
                        Portfolio
                    </NavLink>
                </li>
                
                <li onClick={props.expandMenu}>
                    <NavLink to="/about" className={styles.hoverLink} 
                    activeStyle={{
                        background: "#ee4848",
                        boxShadow: "1px 1px 2px rgba(206, 62, 62,1)"
                    }}>
                        About me
                    </NavLink>
                </li>
                
                <li onClick={props.expandMenu}>
                    <NavLink to="/contact" className={styles.hoverLink} 
                    activeStyle={{
                        background: "#ee4848",
                        boxShadow: "1px 1px 2px rgba(206, 62, 62,1)"
                    }}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MobileMenu;