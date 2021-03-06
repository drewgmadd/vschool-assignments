import React from 'react';

import {connect} from "react-redux";

import {removeInfo} from "../redux/uglythings";

function List(props){
  const uglies = props.uglystuff.map((ugly, i)=>
   (
   <div className ="uglyItem" key={ugly.title + i}>
     <h1 >{ugly.title}</h1>
     <img src={ugly.url}/>
     <p >{ugly.description}</p>
     <button onClick={props.handleRemove}>Delete</button>
   </div>
   ))
  return (
    <div>
      {uglies}
    </div>
  )
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, {removeInfo})(List);
