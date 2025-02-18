import React, { Component } from 'react'

export default class BasicClass extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Class Component {this.props.name}</h1>
      </div>
    )
  }
}
