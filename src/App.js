import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar" style={{background: 'red'}}>nav</div>
        <div className="main" style={{background: 'grey'}}>
          
          <div className="top-bar" style={{background: 'green'}}>
            <input className="search-box" type="search"></input>
          </div>
          
          <div className="row-container">
            <div className="content" style={{background: 'blue'}}>content</div>
            <div className="side-info" style={{background: 'magenta'}}>nav</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
