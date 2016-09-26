import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

import Root from './root/rootContainer.jsx';
import Login from './root/login/loginContainer.jsx';
import UserHome from './root/userHome/userHomeContainer.jsx';
// import Search from './root/userHome/search/searchContainer.jsx';
// import Inbox from './root/userHome/inbox/inboxContainer.jsx';
// import UserArticles from './root/userHome/userArticles/userArticlesContainer.jsx';

export class App extends React.Component {
  render() {
    return (
      <Router history={hashhistory}>
        <Route path="/login" component={Root}>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={UserHome}></Route>
        </Route>
      </Router>
      );
  }
}