import React from 'react'

const StyleEx = () => {
  const myStyles={
color:"red",
backgroundColor:"lightblue",
padding:"50px"
  }
  return (
    <div>
      <h1 style={{color:"red", backgroundColor:'lightblue'}}>Style Example Inline</h1>
      <h1 style={myStyles}>Style Example Internal</h1>
      <h1 className="pink">Style Example External Css</h1>
    </div>
  )
}

export default StyleEx

