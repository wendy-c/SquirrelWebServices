import React, { PropTypes } from 'react';

const ArticleInfoFromFriendPresentational = (props) => {
  return (
    <div className="card horizontal">
      <a href={props.url}>
        <div className="card-image">
          <img className="userImg" src={props.image}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{props.excerpt}</p>
          </div>
          <div className="card-action">
          <p>FROM {props.assignee}</p>
          </div>
        </div>
      </a>
    </div>
    );
};

export default ArticleInfoFromFriendPresentational;