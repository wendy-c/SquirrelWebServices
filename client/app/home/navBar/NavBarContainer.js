import React, { PropTypes } from 'react';
import NavBarPresentational from './NavBarPresentational';
import axios from 'axios';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
    return (
    <div id='navbar'>
      <div className='navbar class="card-panel deep-orange darken-2'>
        <NavBarPresentational />
      </div>
      <div className='navbarchildren'>
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default NavBarContainer;
