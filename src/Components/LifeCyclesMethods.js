import React, { Component } from "react";

export default class LifeCyclesMethods extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  add = () => {
    console.log("Update Phase starts here ");
    this.setState({
      count: this.state.count + 1,
    });
  };
  getSnapshotBeforeUpdate(p, s) {
    console.log("getSnapShotBeforeUpdate", s.count);
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  render() {
    console.log("Render");
    return (
      <div className="container p-5 text-center">
        <h1>Life Cycles Methods</h1>
        <h3>Count:{this.state.count} </h3>
        <button onClick={this.add}>Update</button>
      </div>
    );
  }
}
