import React from 'react';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;