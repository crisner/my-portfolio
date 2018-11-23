import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
    return (
        <div>
            <h3>Get in touch</h3>
            <ul>
                <li><FontAwesomeIcon icon="envelope" />Send an email</li>
                <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} />Connect with me</li>
                <li><FontAwesomeIcon icon={['fab', 'github']} />Find me on Github</li>
            </ul>
        </div>
    );
}

export default Contact;