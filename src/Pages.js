import React from 'react';
import App from './App';
import LogIn from './Components/Authentication/LogIn';
import SignUp from './Components/Authentication/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pages = _ =>
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/login' exact component={LogIn} />
      <Route path='/signup' exact component={SignUp} />
    </Switch>
  </Router>;

export default Pages;