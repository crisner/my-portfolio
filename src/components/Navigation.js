import React from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navigation.module.css';
import Menu from './Menu';

function Navigation(props) {
    return (
        <div>
            <header>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.hamburgerIcon}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <ul className={styles.social}>
                    <li className={styles.socialIcons}>
                        <a href="mailto:christie.reni@gmail.com">
                            <FontAwesomeIcon icon="envelope" />
                        </a>
                    </li>
                    <li className={styles.socialIcons}>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/renishachristie/" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                    </li>
                    <li className={styles.socialIcons}>
                        <a rel="noopener noreferrer" href="https://github.com/crisner" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>
                </ul>
            </header>
            <Menu location={props.location} />
        </div>
    );
}

export default Navigation;