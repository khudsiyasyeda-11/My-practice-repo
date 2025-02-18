import React, { Component } from 'react'
import Mobile from './Mobile'

export default class Mobiles extends Component {
  render() {
    return (
      <div className='mobiles'>
       <h1>Welcome to Mobile</h1>
       <Mobile name="Iphone 16 Pro Max" price="1,50,000" path="https://cdn.mgig.fr/2020/10/mg-86908173-w3024.jpg"/>
       <Mobile  name="Iphone 16 Pro" price="1,25,000" path="https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-16-pro/defaultimage/desert-titanium-hero-zoom.png"/>
       <Mobile  name="Iphone 16 " price="1,20,000" path="https://th.bing.com/th/id/OIP.rVWpsBLammc29P8V0XcgWAAAAA?rs=1&pid=ImgDetMain"/>
       <Mobile  name="Iphone 15 Pro Max" price="1,00,000" path="https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-pro-max-gradient.jpg"/>
       <Mobile  name="Iphone 15 Pro " price="90,000" path="https://th.bing.com/th/id/OIP.HdKHMHNQdoEtGC-AAyYyMwAAAA?rs=1&pid=ImgDetMain"/>
       <Mobile  name="Iphone 15" price="80,000" path="https://media.cnn.com/api/v1/images/stellar/prod/230919073346-iphone-15-review-cnnu-1.jpg?c=16x9&q=h_720,w_1280,c_fill"/>
      </div>
    )
  }
}
