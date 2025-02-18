import React, { Component } from "react";

export default class StateEx extends Component {
  constructor() {
    super();
    this.state = {
      name: "Khudsiya",
    };
  }
  update = () => {
    this.setState({
      name: "Afrose",
    });
  };
  render() {
    return (
      <div className="container p-5 text-center">
        <h1>{this.state.name}</h1>
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}
