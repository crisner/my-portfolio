import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
      <CSSTransition
        in={true}
        appear={true}
        timeout={600}
        classNames="fade">
          <Route render={(props) => {
            return (
              <Navigation location={props} />
            )
          }} />
        </CSSTransition>
        <CSSTransition
        in={true}
        appear={true}
        timeout={600}
        classNames="fade">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </CSSTransition>
        <CSSTransition
        in={true}
        appear={true}
        timeout={600}
        classNames="fade">
          <Footer />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
