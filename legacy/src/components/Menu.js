import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.css';

function Menu(props) {
    const {location} = props.location;
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li 
                id="Home" 
                onMouseEnter={(e) => props.onHover(e)} 
                onMouseLeave={props.onLeave}>
                    <NavLink id="Home" exact to="/" className={styles.hoverLink}
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon 
                        className={location.pathname === '/' || props.hover === "Home" ? (
                            styles.selected + ' ' + styles.show
                         ) : styles.selected} 
                        icon={['far', 'dot-circle']} />
                        Home
                    </NavLink>
                </li>
                <li><FontAwesomeIcon className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li
                id="Portfolio" 
                onMouseEnter={(e) => props.onHover(e)} 
                onMouseLeave={props.onLeave}>
                    <NavLink id="Portfolio" to="/portfolio" className={styles.hoverLink}
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon 
                        className={location.pathname === '/portfolio' || props.hover === "Portfolio" ? (
                            styles.selected + ' ' + styles.show
                         ) : styles.selected} 
                        icon={['far', 'dot-circle']} />
                        Portfolio
                    </NavLink>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li
                id="About" 
                onMouseEnter={(e) => props.onHover(e)} 
                onMouseLeave={props.onLeave}>
                    <NavLink id="About" to="/about" className={styles.hoverLink} 
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon 
                        className={location.pathname === '/about' || props.hover === "About" ? (
                            styles.selected + ' ' + styles.show
                         ) : styles.selected} 
                        icon={['far', 'dot-circle']} />
                        About me
                    </NavLink>
                </li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li><FontAwesomeIcon  className={styles.bullet} icon="circle" /></li>
                <li
                id="Contact" 
                onMouseEnter={(e) => props.onHover(e)} 
                onMouseLeave={props.onLeave}>
                    <NavLink id="Contact" to="/contact" className={styles.hoverLink} 
                    activeStyle={{
                        boxShadow: "inset 0.5px 1px 2px rgba(0, 0, 0, 0.514)"
                    }}>
                        <FontAwesomeIcon  className={styles.menuBullet} icon="circle" />
                        <FontAwesomeIcon 
                        className={location.pathname === '/contact'|| props.hover === "Contact" ? (
                            styles.selected + ' ' + styles.show
                         ) : styles.selected} 
                        icon={['far', 'dot-circle']} />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;