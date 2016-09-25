import React from 'react';
import {render} from 'react-dom';

require("materialize-css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
        </div>
      </nav>
        <div className="row center">
          <a href="/auth/facebook" id="download-button" className="btn-large waves-effect waves-light blue lighten-1">Log in with Facebook</a>
        </div>
        <div className="row center">
          <a href="/auth/twitter" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Log in with Twitter</a>
        </div>
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));