import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.position}>
            <h3>Get in touch</h3>
            <ul className={styles.contact}>
                <li className={styles.modes}><a href="/"><FontAwesomeIcon className={styles.icons} icon="envelope" /><span className={styles.text}>Send an email</span></a></li>
                <li className={styles.modes}><a href="/"><FontAwesomeIcon className={styles.icons} icon={['fab', 'linkedin-in']} /><span className={styles.text}>Connect with me</span></a></li>
                <li className={styles.modes}><a href="/"><FontAwesomeIcon className={styles.icons} icon={['fab', 'github']} /><span className={styles.text}>Find me on Github</span></a></li>
            </ul>
        </div>
    );
}

export default Contact;