import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import PageAnimation from '../components/PageAnimation';
import Home from '../components/Home';
import About from '../components/About';
import Contact from './Contact';
import Navigation from './Navigation';
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
      
        <Switch>
          <Route path="/" exact component={PageAnimation(Home)} />
          <Route path="/portfolio" component={PageAnimation(Portfolio)} />
          <Route path="/about" component={PageAnimation(About)} />
          <Route path="/contact" component={PageAnimation(Contact)} />
          <Route component={PageAnimation(Home)} />
        </Switch>
        
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
