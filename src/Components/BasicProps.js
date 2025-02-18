import React from "react";
import { Fragment } from "react";

function BasicProps (props){
  return(
    <Fragment >
      <h1>Welcome to Basics Props {props.name} </h1>
      <p>Props are useful components in React to ease multiple coding things in a very short time. With props we can have less code, {props.parah}  </p>
    </Fragment>
  )
}
export default BasicProps;