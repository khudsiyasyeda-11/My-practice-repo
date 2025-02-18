import React, { Component } from "react";

export default class Welcome extends Component {
  componentWillUnmount() {
    alert("Are You Sure??");
  }
  render() {
    return (
      <div>
        <h1>Welcome to Admin DashBoard</h1>
      </div>
    );
  }
}
