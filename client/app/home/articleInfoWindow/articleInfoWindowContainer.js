import React, { PropTypes } from 'react';
import ArticleInfoWindowPresentational from './articleInfoWindowPresentational';
import ArticleInfoFromFriendPresentational from './articleInfoFromFriendPresentational';
import he from 'he';
import axios from 'axios';


class ArticleInfoWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      excerpt: '',
      isFromFriend: false
    };
    this.getUrlInfo = this.getUrlInfo.bind(this);
    this.checkIfFromFriend = this.checkIfFromFriend.bind(this);
  }

  componentDidMount() {
    console.log('are you getting stuff from friends??>>>>>', this.props);
    this.getUrlInfo(this.props.url);
    this.checkIfFromFriend();
  }

  getUrlInfo(url) {
    var context = this;
    $.ajax({
      method: 'POST',
      url: '/getUrlInfo',
      data: {
        url: url
      },
      success: function(data) {
        var parsedData = JSON.parse(data.body);
        var decodedExcerpt = he.decode(parsedData.excerpt);
        // console.log('this is in getUrlInfo====>>>>>', parsedData.excerpt, decodedExcerpt);
        context.setState({
          title: parsedData.title,
          image: parsedData.lead_image_url,
          excerpt: decodedExcerpt,
          assigneeInfo: ''
        });
      },
      error: function(err) {
        console.log('there is an error in ArticleInfoWindowContainer, it\'s a sad day! D=', err);
      }
    });
  }

  checkIfFromFriend() {
    if (this.props.assignee) {
      return (<ArticleInfoFromFriendPresentational title={this.state.title} image={this.state.image} excerpt={this.state.excerpt} assignee={this.props.assignee} createdAt={this.props.createdAt} url={this.props.url}/>);
    } else {
      return (
        <ArticleInfoWindowPresentational title={this.state.title} image={this.state.image} excerpt={this.state.excerpt} url={this.props.url}/>
        );
    }
  }

  // getAssignee() {
  //   //get Assignee name
  // }

  render() {
    // console.log('i am in ArticleInfoWindowContainer this.state>>>>>>>>>>>>>>>>>>>>>', this.state);
    return (
    <div>{this.checkIfFromFriend()}</div>
    );
  }
}

export default ArticleInfoWindowContainer;