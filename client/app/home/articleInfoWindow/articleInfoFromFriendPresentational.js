import React, { PropTypes } from 'react';

const ArticleInfoFromFriendPresentational = (props) => {
  // props.image = props.image || './styles/img/flying-squirrel-grey.png'
  var image = props.image || './styles/img/flying-squirrel-grey.png'
  var divStyle = {
    backgroundImage: 'url(' + image + ')',
  };

  return (
    <div className="wrapper__friend">
      <div className="card radius shadowDepth1">
        <div className="card__image__friend border-tlr-radius">
          <div style={divStyle} className='card__image2'/>
        </div>

        <div className="card__content card__padding">
                  <div className="card__share">
                      <div className="card__social">  
                          <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
                          <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
                          <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
                      </div>

                      <a onClick={props.onSocialClick} id="share" className="share-toggle share-icon" href="#"></a>
                  </div>

          <div className="card__meta">
            <a href="#">Category</a>
                      <time>17th March</time>
          </div>

          <article className="card__article">
            <span className="card__title"><a href={props.url}>{props.title}</a></span>

            <p className="">{props.excerpt || `Sorry! No summary available! Click on link to find out more!`}</p>
          </article>
        </div>

        <div className="card__action">
          
          <div className="card__author">
            <img src="./styles/img/flying-squirrel-orange.png" alt="user"/>
            <div className="card__author-content">
              By <a href="#">{props.author}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ArticleInfoFromFriendPresentational;