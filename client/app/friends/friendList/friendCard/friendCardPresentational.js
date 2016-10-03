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
                I am {props.name}
              </span>
            </div>
          </div>
        </div>
    );
};

export default FriendCardPresentational;

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