import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

const LoginTrendingPresentational = (props) => {
  // console.log('what is props in LoginTrendingPresentational>>>>>>>>>>', props);
  var image = props.article.image || './styles/img/flying-squirrel-grey.png';
  var divStyle = {
    backgroundImage: 'url(' + image + ')',
  };

  var afterClass = props.modalIsOpen ? '' : 'after';
  var random = Math.round(Math.random() * 10);

  var imageDiv = random % 2 === 0 ? 
  (<div className="landingWrapper">
      <div className="shadowDepth1">
        <div className="card__image border-tlr-radius">
          <div style={divStyle} className='landingImage'/>
        </div>
      </div>
      <div className={afterClass}>
        <span>{props.article.title}</span>
          By <a href="#">{props.article.author}</a>
      </div>
    </div>)

  :

  (<div className="landingWrapper2">
      <div className="shadowDepth1">
        <div className="card__image border-tlr-radius">
          <div style={divStyle} className='landingImage'/>
        </div>
      </div>
      <div className={afterClass}>
        <span>{props.article.title}</span>
          By <a href="#">{props.article.author}</a>
      </div>
    </div>);

  return (
    <div>{imageDiv}</div>
  );
};

function mapStateToProps(state) {
  return {
    modalIsOpen: state.login.modalIsOpen
  };
}

export default connect(mapStateToProps)(LoginTrendingPresentational);