import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

class Contact extends Component {
    state = { hover: null }

    onHover = (e) => {
        this.setState({ hover: e.target.id });
    }

    onLeave = () => {
        this.setState({ hover: null });
    }
    
    render() {
        return (
            <div className={styles.position}>
                <h3>Get in touch</h3>
                <ul className={styles.contact}>
                    <li className={styles.modes}>
                        <a
                        id="0" 
                        onMouseEnter={this.onHover.bind(this)} 
                        onMouseLeave={this.onLeave} 
                        href="mailto:christie.reni@gmail.com">
                            <FontAwesomeIcon
                            id="0" 
                            className={this.state.hover === '0' ? styles.icons + ' ' + styles.iconsOnHover : styles.icons} 
                            icon="envelope" />
                            <span id="0" className={styles.text}>Send an email</span>
                        </a>
                    </li>
                    <li className={styles.modes}>
                        <a
                        id="1" 
                        onMouseEnter={this.onHover.bind(this)} 
                        onMouseLeave={this.onLeave} 
                        rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/renishachristie/" 
                        target="_blank">
                            <FontAwesomeIcon 
                            id="1" 
                            className={this.state.hover === '1' ? styles.icons + ' ' + styles.iconsOnHover : styles.icons}
                            icon={['fab', 'linkedin-in']} />
                            <span id="1" className={styles.text}>Connect with me</span>
                        </a>
                    </li>
                    <li className={styles.modes}>
                        <a
                        id="2" 
                        onMouseEnter={this.onHover.bind(this)} 
                        onMouseLeave={this.onLeave} 
                        rel="noopener noreferrer" 
                        href="https://github.com/crisner" 
                        target="_blank">
                            <FontAwesomeIcon 
                            id="2"
                            className={this.state.hover === '2' ? styles.icons + ' ' + styles.iconsOnHover : styles.icons} 
                            icon={['fab', 'github']} />
                            <span id="2" className={styles.text}>Find me on Github</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;