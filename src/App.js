import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import './App.css';
import './transitions.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="page-container">
      <Header />
      <TransitionGroup className="route-section">
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <div className="container">
            <Switch location={location}>
              <Route exact path="/" component={Calculator} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

function App() {
  return (
    <Router basename="/-CalculatorThanhTruc">
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;


