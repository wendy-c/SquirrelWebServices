import React from 'react';

const RecommendationPresentational = (props) => {
  console.log('IN RecommendationPresentational', props);
  const image = props.article.image || '/styles/img/flying-squirrel-grey.png';
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  const title = props.article.title.slice(0, 55) + '...';
  return (

      <div className="recbox">
          <div style={divStyle} id="rec" className="recboxImg"/>
          <p className="recboxTitle">{title}</p>
      </div>

    );
};

export default RecommendationPresentational;