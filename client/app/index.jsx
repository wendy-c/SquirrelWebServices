import React from 'react';
import {render} from 'react-dom';
import UserHome from './UserHome.jsx';

require('materialize-css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userName: '',
      userId: ''
    };
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentWillMount() {
    $(".button-collapse").sideNav();
    checkAuth();
  }

  checkAuth() {
    //check if user is in the session, store user id and user name in state
    $.ajax({
      method: 'GET',
    });
  }

  render() {
    return (
      <div>
      {this.state.isLoggedIn ?
        <div>
          <nav>
            <div className="nav-wrapper white">
              <a href="#!" className="brand-logo responsive-img"><img id="logo" src="IMG_0849.png"/></a>
              <a href="#" data-activates="mobile-demo" className="button-collapse green accent-3"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn green accent-3" href="#">Logout</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a className="waves-effect waves-light btn green accent-3" href="#">Logout</a></li>
              </ul> 
            </div>
          </nav>
          <div className="container">
            <UserHome userId={this.state.userId} userName={this.state.userName}/>
          </div>
        </div>
        :
        <div>
          <nav>
            <div className="nav-wrapper white">
              <img id="logo" className="brand-logo" src="IMG_0849.png"/>
            </div>
          </nav>
          <div className="container row center">
            <br />
            <a href="/auth/facebook" id="oauth download-button" className="btn-large waves-effect waves-light blue lighten-1">Log in with Facebook</a>
            <a href="/auth/twitter" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Log in with Twitter</a>
          </div>
        </div> }
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));