// src/App.jsx
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Calculator from './Calculator/Calculator'; // file Calculator của bạn
import About from './About/About'; // trang About của bạn
import Header from './Header/Header'; // Header hiện có

import './transitions.css'; // file CSS để định nghĩa animation slide

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Container chứa nội dung thay đổi */}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="slide"
          timeout={300} 
        >
          <Switch location={location}>
            {/* Đường dẫn gốc / hiển thị Calculator */}
            <Route exact path="/" component={Calculator} />
            {/* Đường dẫn /about hiển thị About */}
            <Route path="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
