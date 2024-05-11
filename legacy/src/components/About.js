import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.position}>
            <h3>About me</h3>
            <p className={styles.text}>I am a self-taught front-end web developer with a background in the field of electronic
            media. I like learning new things and I admire art in all its forms but I enjoy creative paintings
            related to nature, character and fantasy art the most.</p>
            <p className={styles.text}>I am fascinated by languages and love finding similarities between them and learning
            them. I find happiness in building something
            interactive with code.</p>
            <div className={styles.pill}>
                <a className={styles.buttonLink} 
                role="button"
                title="Download my resume"
                href="https://drive.google.com/open?id=1433_w5W7dJQkfkutujLcXV4rKWu21eeJ"
                rel="noopener noreferrer"
                target="_blank">Resume
                </a>
            </div>
        </div>
    );
}

export default About;