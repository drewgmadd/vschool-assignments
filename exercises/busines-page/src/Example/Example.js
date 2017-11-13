import React from "react";

function Example(props) {
  const imgStyles = {
    transform: "rotate(-15deg)"
  }
  const description ={
    marginTop: "10px"
  }

  return (
    <div className="example-block">
      <img style={imgStyles} src="http://www.deanguitars.com/images/productimages_th/ukedkoa.png"/>
      <p style={description} >{props.description}</p>
    </div>
  )
}

export default Example;
