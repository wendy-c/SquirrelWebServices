import React from 'react';

export const UserHomePresentational = (props) => {
  return (
  <div>
    <nav>
      <div className="nav-wrapper white">
        <a href="/home" className="brand-logo responsive-img"><img id="logo" src="IMG_0849.png"/></a>
        <a href="#" data-activates="mobile-demo" className="button-collapse green accent-3"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a className="waves-effect waves-light btn green accent-3" href="#">Logout</a></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a className="waves-effect waves-light btn green accent-3" href="#">Logout</a></li>
        </ul> 
      </div>
    </nav>
  </div>
  );
}