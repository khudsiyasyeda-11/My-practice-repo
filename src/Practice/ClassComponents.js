import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor : Component is being created!!");
  }
  componentDidMount() {
    console.log("ComponentDidMount : Component is Mounted here ");
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps, nextState);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding whether to update");
    return nextState.count % 2 === 0;
  }
  render() {
    console.log("Rendering Component for first time");
    return (
      <div>
        <h1>Counter :{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has updated");
    console.log("Previous count:", prevState.count);
  }

  // 7. Unmounting: called before the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed");
  }
}
