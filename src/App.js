import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// Components
import SideNav from './Components/SideNav';
import TopBar from './Components/TopBar';
import Home from './Home';
import Theater from './Theater';


// images
import profile_pic from './images/profile_pic.png';

class App extends Component {
  render() {
    return (
      <Router>
      <div className='app'>
        <SideNav
          username='Panagiotis Petridis'
          location='Nottingham, UK'
          videos='122'
          subscribers='2M'
          profilePicture={profile_pic}
          options={[
            [
              { icon: 'fa-video', name: 'Videos', selected: true},
              { icon: 'fa-film', name: 'Movies & Shows'},
              { icon: 'fa-donate', name: 'Premium'}
            ],
            [
              { icon: 'fa-bookmark', name: 'Subscriptions', notification: 'new'},
              { icon: 'fa-list', name: 'Library'},
              { icon: 'fa-thumbs-up', name: 'Liked Videos'},
              { icon: 'fa-clock', name: 'Watch Later'}
            ],
            [
              { icon: 'fa-sliders-h', name: 'Settings'},
              { icon: 'fa-user', name: 'Help & Report'}
            ]
          ]}
        />

        <div className='main' style={{flex: '7'}}>
          <TopBar
            icons = {['fa-plus-circle', 'fa-bell', 'fa-user-circle']}
            active = {0}
          />
          
          <div className='row-container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/theater/:id' exact component={Theater} />
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
