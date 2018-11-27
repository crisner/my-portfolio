import React from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';

function Navigation() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li><FontAwesomeIcon icon="envelope" /></li>
                <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
                <li><FontAwesomeIcon icon={['fab', 'github']} /></li>
            </ul>
        </header>
        <Menu />

    );
}

export default Navigation;