import React, { PropTypes } from 'react';
import FriendListPresentational from './friendListPresentational';
import FriendCardContainer from './friendCard/friendCardContainer';
import FriendArticleListContainer from './friendArticleList/friendArticleListContainer';

class FriendListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const friendcards = [];
    for(var i = 0; i < 10; i++) {
      friendcards.push(<FriendCardContainer key={i}/>)
    }

    return (
      <FriendListPresentational>
        {friendcards}
      </FriendListPresentational>
      )
  }
}

export default FriendListContainer;