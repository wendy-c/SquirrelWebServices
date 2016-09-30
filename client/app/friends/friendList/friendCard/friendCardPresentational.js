import React, { PropTypes } from 'react'

const dummyphoto = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';

const FriendCardPresentational = (props) => {
  return (
          <div className='row'>
            <div className="col s2">
              <img src={dummyphoto} alt="" className="circle responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                Add friend card example. More functionality?
              </span>
            </div>
          </div>
    )
}

export default FriendCardPresentational