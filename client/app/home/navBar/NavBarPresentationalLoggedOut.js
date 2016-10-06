import React from 'react';

const NavBarPresentationalLoggedOut = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper white">
            <img className="navbar-logo" src="styles/img/flying-squirrel-orange-outline.png"/>
            <a href="#" className="brand-logo">Squirrel.io</a>

            <ul id="nav-mobile" className="right navbarLand">
             <li><a style={{color: 'grey'}} href="#/signup">SignUp</a></li>
             <li><a href="http://www.filedropper.com/squirrel"><button className="downloadBtn">DOWNLOAD APP ON MAC</button></a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
};

export default NavBarPresentationalLoggedOut;
