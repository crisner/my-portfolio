import React, { Component } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
