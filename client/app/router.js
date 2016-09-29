// import dependencies
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Components
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';
import FriendsContainer from './friends/friendsContainer';
import UserInboxContainer from './home/userInbox/userInboxContainer';
import NavBarContainer from './home/navBar/NavBarContainer';
import axios from 'axios';

const validate = function(nextState, replace, callback) {
  axios.get('/checkAuth')
  .then(function(user) {
    if (user.data === '') {
      replace('login');
      callback();
    } else {
      callback();
    }
  })
  .catch(function(err) {
    console.log(err);
    callback(err);
  });
};



var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={NavBarContainer}>
      <IndexRoute component={HomeContainer} onEnter={validate}/>
      <Route path='login' component={LoginContainer} />
      <Route path='friends' component={FriendsContainer} />
    </Route>
  </Router>
  );

export default routes;
