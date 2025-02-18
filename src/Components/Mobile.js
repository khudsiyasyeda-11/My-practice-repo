import React, { Component } from 'react'

export default class Mobile extends Component {
  render() {
    return (
      <div className='mobile'>
        <figure>
          <img src={this.props.path} alt=''/>
         <figcaption>
          <p>{this.props.name}</p>
          <p>{this.props.price} /- only</p>
         </figcaption>
        </figure>
      </div>
    )
  }
}
