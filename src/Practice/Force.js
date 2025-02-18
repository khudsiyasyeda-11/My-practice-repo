import React, { Component } from "react";

export default class Force extends Component {
  handleClick = () => {
    this.forceUpdate();
    console.log("Force Updated");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Force Update</button>
      </div>
    );
  }
}
