import React, { Component } from 'react';


class RegularComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return(
      <div>
        <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export { RegularComponent };
