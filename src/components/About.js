import React from 'react';
import Pill from './Pill';

function About() {
    return (
        <div>
            <h3>About me</h3>
            <p>I am a self-taught front-end web developer with a background in the field of electronic
            media. I like learning new things and I admire art in all its forms but I enjoy creative paintings
            related to nature, character and fantasy art the most.</p>
            <p>I am fascinated by languages and love finding similarities between them and learning
            them. This is also why got into coding. I find happiness in building something
            interactive with code.</p>
            <Pill text="Resume" />
        </div>
    );
}

export default About;