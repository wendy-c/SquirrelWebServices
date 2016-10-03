import React, { PropTypes } from 'react';
import NavBarPresentational from './NavBarPresentational';
import NavBarPresentationalLoggedOut from './NavBarPresentationalLoggedOut';

import axios from 'axios';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // in the future this needs to be deleted and the redux state tree should update once only on log out and log in.
  componentDidMount(){
    axios.get('/checkAuth')
    .then((user) => {
      if(user.data === "") {
        this.setState({
          isLoggedIn: false
        });
      } else {
        this.setState({
          isLoggedIn: true
        });
      }
    })
    .catch((err) => {
      console.log('navbar auth error');
    })
  }


  render() {
    const whichNavBar = this.state.isLoggedIn ? (<NavBarPresentational />) : (<NavBarPresentationalLoggedOut />);
    return (
    <div id='navbar'>
      <div className='navbar class="card-panel'>
        {whichNavBar}
      </div>
      <div className='navbarchildren valign-wrapper'>
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default NavBarContainer;
