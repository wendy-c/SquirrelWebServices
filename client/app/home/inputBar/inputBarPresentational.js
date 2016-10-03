import React from 'react';

const InputBarPresentational = (props) => {
  return (
    <div className="row search">
      <div className=" small-12 columns">
        <div className="row collapse">
          <div className="small-12 large-12  columns ">
            <div className=" keyword">
              <a data-dropdown="drop3">
                Friends 
                <div className="arrow-down"></div>
              </a>
              <ul id="drop3" className="f-dropdown content" data-dropdown-content style={{'position': 'absolute',  'left': '-99999px'}}>
                <li><a href="">Friend 1</a></li>
                <li><a href="">Friend 2</a></li>
                <li><a href="">Friend 3</a></li>
              </ul>
            </div>
              <form className='inputfield' onSubmit={props.onSubmit}>
              <input id='inputClear' onChange={props.onChange} type="text" className="search-field" placeholder="Stash your acorns here "/>
              <button className="stashBtn" type="submit">stash</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default InputBarPresentational;