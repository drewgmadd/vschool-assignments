import React from "react";

import {Button} from "react-bootstrap";

function Product(props) {
  const productStyles = {
    position: "relative",
    marginTop: "5%",
    display: "inline-block",
    width: "40%",
    marginLeft: "5%",
    color: "#263D3C",
    border: "solid 1px tan",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px #203332",
    transition: ".3s all ease-in-out .3s",
  }

  const buttonStyles = {
    color: "green"
  }

  return (
    <div>
    <div className="product" style={productStyles}>
      <img src={props.href}/>
      <div className="product-text">
        <h2>{props.title}</h2>
        <h3>{props.type}</h3>
        <Button style={buttonStyles} bsStyle="primary" bsSize="large" active>{props.purchasetype}</Button>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
  )
}

export default Product;
