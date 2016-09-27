// import dependencies
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Components
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';
import UserInboxContainer from './home/userInbox/userInboxContainer';
import NavBarContainer from './home/navBar/NavBarContainer';
import axios from 'axios';

const check = true;
const validate = function(nextState, replace, callback){
  axios.get('/checkAuth')
  .then(function(user){
    console.log(user);
    if(user.data === "") {
      replace('login');
      callback();
    } else {
      callback();
    }
  })
  .catch(function(err){
    console.log(err);
    callback(err);
  })

  // if(check){
  //   replace('login');
  //   // done();
  // } else {
  //   // done();
  // }
}


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={NavBarContainer}>
      <IndexRoute component={HomeContainer} onEnter={validate}/>
      <Route path='login' component={LoginContainer} />
    </Route>
  </Router>
  );

export default routes;
