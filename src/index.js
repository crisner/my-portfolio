import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

library.add(faLinkedinIn, faGithub, faGithubAlt, faEnvelope, faCircle, faDotCircle);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
