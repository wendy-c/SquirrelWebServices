import React from 'react';

const NavBarPresentational = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper deep-orange darken-1">
         <img className="logo" src="img/flying-squirrel.png"/>
           <a href="#" className="brand-logo">Squirrel.io</a>

           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="/">Home</a></li>
             <li><a href="#/friends">Friends</a></li>
             <li><a href="/logout">Log Out</a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
}

export default NavBarPresentational;
