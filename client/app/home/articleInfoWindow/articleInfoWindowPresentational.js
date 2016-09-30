import React, { PropTypes } from 'react';

const ArticleInfoWindowPresentational = (props) => {
  console.log(props);
  return (
    <div className="article">
      <div style={{backgroundImage: "styles/img/flying-squirrel-grey.png"}} className="article-image"></div>
      <div>
        <div className='article-title'>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
    );
};

export default ArticleInfoWindowPresentational;


//<div class="row text-center">
  //<div class="col-xs-12 col-md-4 col-sm-12 test">
    //<div class="card">
      //<div class="card-header card-image waves-effect waves-block waves-light">
        //<img src={props.image} alt="Image" />
      //</div>
      //<div class="card-content">
        //<h5 class='text-center'>props.title</h5>
      //</div>
    //</div>
  //</div>
//</div>



      // <div className="row">
      //   <div className="col s12 m7">
      //     <div className="card">
      //       <div className="card-image">
      //         <img src={props.image}/>
      //         <span className="card-title">{props.title}</span>
      //       </div>
      //       <div className="card-content">
      //         <p>{props.excerpt}</p>
      //       </div>
      //       <div className="card-action">
      //         <a href={props.url}>Read Article</a>
      //       </div>
      //     </div>
      //   </div>
      // </div>


          //<div className="row">
        //<div className="card">
          //<div className="card-image">
            //<img src={props.image}/>
            //<span className="card-title">{props.title}</span>
          //</div>
          //<div className="card-content">
            //<p>{props.excerpt}</p>
          //</div>
          //<div className="card-action">
            //<a href={props.url}>Read Article</a>
          //</div>
        //</div>
    //</div>

    //       <div className='article card small hoverable'>
    //   <div class="card-image">
    //     <img className="userImg" src={props.image}/>
    //   </div>
    //   <div className='card-content'>
    //     <span class='card-title'>{props.title}</span>
    //     <p>{props.excerpt}</p>
    //   </div>
    // </div>