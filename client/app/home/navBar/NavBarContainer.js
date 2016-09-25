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
    <NavBarPresentational />
    );
  }
}

export default NavBarContainer;
