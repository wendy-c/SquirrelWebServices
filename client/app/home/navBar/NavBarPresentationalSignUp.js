import React from 'react';

const NavBarPresentationalSignUp = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper white">
            <img className="navbar-logo" src="styles/img/flying-squirrel-orange.png"/>
            <a href="#" className="brand-logo">Squirrel.io</a>

            <ul id="nav-mobile" className="right navbarLand">
             <li><a style={{color: 'grey'}} href="#/">login</a></li>
             <li><a href="http://www.filedropper.com/squirrel"><button className="downloadBtn">DOWNLOAD MAC APP</button></a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
};

export default NavBarPresentationalSignUp;