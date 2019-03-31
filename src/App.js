import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar" style={{background: 'red'}}>nav</div>
        <div className="main" style={{background: 'green'}}>content</div>
      </div>
    );
  }
}

export default App;
