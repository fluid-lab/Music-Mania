import React, { Component } from 'react';
import './App.css';
import Wall from './images/Cover.png'
import Row3 from './components/3_Row.js'

class App extends Component {
  render() {
    return (
      <div id="app">
      <span className="Centerer"></span>
    <img className="Centered" src={Wall}  />
   
    
    <Row3 />
        
      </div>
    );
  }
}

export default App;
