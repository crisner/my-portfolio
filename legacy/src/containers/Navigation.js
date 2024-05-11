import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navigation.module.css';
import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

class Navigation extends Component {
    state = {
        open: false,
        hover: null
    }

    onHover = (e) => {
        this.setState({ hover: e.target.id });
    }

    onLeave = () => {
        this.setState({ hover: null });
    }

    expandMenu = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
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
                <Menu 
                location={this.props.location}
                hover={this.state.hover}
                onHover={this.onHover.bind(this)}
                onLeave={this.onLeave.bind(this)} />
            </div>
        );
    }
}

export default Navigation;