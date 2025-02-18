import React, { Component } from "react";
import Welcome from "./Welcome";

export default class UnMounting extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  logout = () => {
    this.setState({
      login: false,
    });
  };
  render() {
    let msg = "";
    if (this.state.login) {
      msg = <Welcome />;
    } else {
      msg = <h2>Login Again</h2>;
    }
    return (
      <div className="container p-5 text-center">
        {msg}
        <button onClick={this.logout}>Log Out </button>
      </div>
    );
  }
}
