import React from 'react';
import FriendDropDownContainer from './friendDropDown/friendDropDownContainer';

const friends = [{name: 'Friends', id: '0'},{name: 'Damien', id: '1'}, {name: 'Wendy', id: '2'}, {name: 'Jordan', id: '3'}];

const InputBarPresentational = (props) => {
  console.log(props.friends, 'which one is this');
  return (
    <div className="row search">
      <div className=" small-12 columns">
        <div className="row collapse">
          <div className="small-12 large-12  columns ">
            <div className=" keyword">
             <FriendDropDownContainer setOwner={props.setOwner} friends={props.friends} selected={friends[0]}/>
              
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