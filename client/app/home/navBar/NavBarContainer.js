import React, { PropTypes } from 'react';
import NavBarPresentational from './NavBarPresentational';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <div id='navbar'>
      <div className='navbar'>
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
