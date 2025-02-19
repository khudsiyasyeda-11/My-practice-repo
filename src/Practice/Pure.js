import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "Shahroz",
    };
  }
  ChangedName = () => {
    this.setState({
      name: "Mahrose",
    });
  };

  render() {
    console.log("Rendering My Pure");

    return (
      <div className="container p-5">
        <h1>{this.state.name}</h1>
        <button onClick={this.ChangedName}>Click ME</button>
      </div>
    );
  }
}
