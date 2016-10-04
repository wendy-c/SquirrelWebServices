import React, { PropTypes } from 'react'

class FriendDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selected: {},
    }
  }

  componentDidMount(){
    this.setState({selected: this.props.friends[0]});
  }

  select(item) {
      // console.log(item.target.dataset.id, 'working?');
      const name = item.target.innerHTML;
      const id = item.target.dataset.id;
      this.setState({selected: {name: name, id: id}});
      // if(name !== "Friends"){
        this.props.setOwner(id);
      // }
  }

  show(){
      this.setState({ listVisible: true });
      document.addEventListener("click", this.hide);
  }

  hide(){
      this.setState({ listVisible: false });
      document.removeEventListener("click", this.hide);
  }

  renderListItems() {
      const items = [];
      for (var i = 0; i < this.props.friends.length; i++) {
          const friend = this.props.friends[i];
          items.push(<div key={i}>
              <span data-id={friend.fbid} style={{color: 'black' }} onClick={this.select.bind(this)}>{friend.fbname}</span>
          </div>);
      }
      return items;
  }

  render() {
    return (
      <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
        <div className={"dropdown-display" + (this.state.listVisible ? " clicked" : "")} onClick={this.show}>
          <span>{this.state.selected.name}</span>
        </div>
        <div className="dropdown-list">
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
      )
  }

}

export default FriendDropDown;