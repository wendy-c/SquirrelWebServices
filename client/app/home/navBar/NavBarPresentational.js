import React from 'react';

const NavBarPresentational = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper teal lighten-4">
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
