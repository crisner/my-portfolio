import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <FontAwesomeIcon icon="circle" />
                    {/* <svg height="200" width="200">
                        <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                    </svg> */}
                    Home
                </li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li>
                    <FontAwesomeIcon icon="circle" />
                    {/* <svg height="200" width="200">
                        <circle class="circle" cx="100" cy="100" r="95" stroke="#231f20" stroke-width="10" fill-opacity="0" />
                    </svg> */}
                    Portfolio
                </li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li><FontAwesomeIcon icon="circle" />About me</li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li><FontAwesomeIcon icon="circle" /></li>
                <li><FontAwesomeIcon icon="circle" />Contact</li>
            </ul>
        </nav>
    );
}

export default Menu;