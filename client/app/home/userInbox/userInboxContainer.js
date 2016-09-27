import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';


class UserInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    console.log('i am in UserInboxContainer===>>>>', this.props)
    //dummy test articles below
    var mappedArticles = [];
    for(var i = 0; i < 8; i++ ){
      mappedArticles.push(<ArticleInfoWindowContainer key={i}/>)
    } 

    return (
    <UserInboxPresentational>
      {mappedArticles}
    </UserInboxPresentational>
    );
  }
}

export default UserInboxContainer;
