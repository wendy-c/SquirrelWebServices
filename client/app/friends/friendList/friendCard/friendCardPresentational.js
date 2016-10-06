import React, { PropTypes } from 'react';

const dummyphoto = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';

const FriendCardPresentational = (props) => {
  return (
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className='row valign-wrapper'>
            <div className="col s2">
              <img src={props.avatar} alt="" className="circle responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                <h6>{props.name}</h6>
              </span>
            </div>
          </div>
        </div>
    );
};

export default FriendCardPresentational;

/* suggestions: maybe add following friend's article previews?
                <img src="http://i2.cdn.turner.com/cnnnext/dam/assets/161003115141-haddo-madonna-raphael-1-super-169.jpg" alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                */

      // <div class="col s12 m8 offset-m2 l6 offset-l3">
      //   <div class="card-panel grey lighten-5 z-depth-1">
      //     <div class="row valign-wrapper">
      //       <div class="col s2">
      //         <img src="images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
      //       </div>
      //       <div class="col s10">
      //         <span class="black-text">
      //           This is a square image. Add the "circle" class to it to make it appear circular.
      //         </span>
      //       </div>
      //     </div>
      //   </div>
      // </div>