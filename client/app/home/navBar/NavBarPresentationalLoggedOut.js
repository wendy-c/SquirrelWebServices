import React from 'react';

const NavBarPresentationalLoggedOut = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper white">
            <img className="navbar-logo" src="styles/img/flying-squirrel-orange-outline.png"/>
            <a href="#" className="brand-logo">Squirrel.io</a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="/signup">SignUp</a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
}

export default NavBarPresentationalLoggedOut;
