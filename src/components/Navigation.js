import React from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';

function Navigation() {
    return (
        <div>
            <header>
                <img src={logo} alt="logo" width="60px" />
                <ul>
                    <li><FontAwesomeIcon icon="envelope" /></li>
                    <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
                    <li><FontAwesomeIcon icon={['fab', 'github']} /></li>
                </ul>
            </header>
            <Menu />
        </div>
    );
}

export default Navigation;