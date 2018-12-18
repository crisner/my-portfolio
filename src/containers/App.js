import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Portfolio from './Portfolio';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route render={(props) => {
          return (
            <Navigation location={props} />
          )
        }} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
