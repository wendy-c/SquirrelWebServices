import React from 'react';

const NavBarPresentational = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper deep-orange darken-1">
         <img className="logo" src="img/whiteSquirrel.png"/>
           <a href="#" className="brand-logo">Squirrel.io</a>

           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="">Home</a></li>
             <li><a href="">Friends</a></li>
             <li><a href="">Log Out</a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
}

export default NavBarPresentational;
