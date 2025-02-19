import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "Shahroz",
    };
  }
  render() {
    console.log("Rendering My Pure");

    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
