import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navigation.module.css';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

class Navigation extends Component {
    state = {
        open: false
    }

    expandMenu = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        console.log(this.state.open);
        return (
            <div>
                <header>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.hamburgerIcon} 
                    onClick={this.expandMenu}>
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
                {
                    this.state.open ? <MobileMenu location={this.props.location} expandMenu={this.expandMenu.bind(this)} /> : null
                }
                <Menu location={this.props.location} />
            </div>
        );
    }
}

export default Navigation;