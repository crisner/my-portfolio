import React from 'react';
import Pill from './Pill';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.position}>
            <h3 tabIndex="0">About me</h3>
            <p tabIndex="0" className={styles.text}>I am a self-taught front-end web developer with a background in the field of electronic
            media. I like learning new things and I admire art in all its forms but I enjoy creative paintings
            related to nature, character and fantasy art the most.</p>
            <p tabIndex="0" className={styles.text}>I am fascinated by languages and love finding similarities between them and learning
            them. I find happiness in building something
            interactive with code.</p>
            <div className={styles.button}>
                <a href="https://drive.google.com/open?id=1433_w5W7dJQkfkutujLcXV4rKWu21eeJ"
                rel="noopener noreferrer"
                target="_blank">
                    <Pill styles={styles.pill} title="Download my resume" text="Resume" />
                </a>
                {/* <Pill styles={styles.pill} title="Read my blog" text="Blog" /> */}
            </div>
        </div>
    );
}

export default About;