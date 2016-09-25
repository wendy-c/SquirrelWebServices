// import dependencies
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Components
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';
import UserInboxContainer from './home/userInbox/userInboxContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={LoginContainer}/>
      <Route path='home' component={HomeContainer}>
      
      </Route>
    </Route>
  </Router>
  );

export default routes;