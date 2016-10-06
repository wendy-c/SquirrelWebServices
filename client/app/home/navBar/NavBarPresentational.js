import React from 'react';

const NavBarPresentational = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper deep-orange darken-1">
         <img className="navbar-logo" src="./styles/img/flying-squirrel.png"/>
           <a href="#" className="brand-logo">Squirrel.io</a>

           <ul id="nav-mobile" className="right">
             <li><a href="/">Home</a></li>
             <li><a href="#/friends">Following</a></li>
             <li><a href="/logout">Log Out</a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
};

export default NavBarPresentational;
