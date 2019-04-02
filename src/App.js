import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar" style={{background: 'red'}}>nav</div>
        <div className="main" style={{background: 'grey'}}>
          
          <div className="top-bar">

            <div style={{width: '70vh'}}></div>

            <div className="search-bar">
              <i class="fas fa-search"></i>
              <input type="search" placeholder="Search"></input>
            </div>
            
            <div style={{width: '45vh'}}></div>

            <div className="side-icons">
              <i class="fas fa-plus-circle"></i>
              <i class="fas fa-bell"></i>
              <i class="fas fa-user-circle"></i>
            </div>

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
