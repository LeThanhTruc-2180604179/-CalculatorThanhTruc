import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import './App.css';
import './transitions.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  
  return (
    <div className="page-container">
      <Header />
      <TransitionGroup className="route-section">
        <CSSTransition
          key={location.key}
          nodeRef={nodeRef}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <div ref={nodeRef} className="container">
            <Routes location={location}>
              <Route path="/" element={<Calculator />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;