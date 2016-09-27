// import dependencies
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Components
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';
import UserInboxContainer from './home/userInbox/userInboxContainer';
import NavBarContainer from './home/navBar/NavBarContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={NavBarContainer}>
      <IndexRoute component={LoginContainer}/>
      <Route path='home' component={HomeContainer}/>
    </Route>
  </Router>
  );

export default routes;
