import React from 'react';
import {render} from 'react-dom';
import ArticleEntry from './articleEntry.jsx';
import ArticleEntryFromFriend from './articleEntryFromFriend.jsx';

export class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticles: [],
      articlesFromFriends: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles() {
    //get request to get user's saved articles with user id
    var context = this;
    var userId = this.props.userId;
    $.ajax({
      method: 'GET',
      url: '/links/' + userId,
      success: function(data) {
        context.setState({
          savedArticles: data.userId
        });
        //how am I getting articles from friends
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s9">
        {
          this.state.savedArticles.map((article, idx) => {
            return (
              <ArticleEntry article={article} index={idx}/>
              );
          })
        }
        </div>
        <div className="col s3">
          <h4> Inbox </h4>
          {
          this.state.articlesFromFriends.map((article, idx) => {
            return (
              <ArticleEntryFromFriend article={article} index={idx}/>
              );
          })
        }
        </div>
      </div>
      );
  }
}