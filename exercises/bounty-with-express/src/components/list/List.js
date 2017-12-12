import React from "react";

import "./list.css";

function List(props) {
  console.log(props.bounties.bounties);
  let bounties = props.bounties.bounties.map((bounty, i)=>{
    return <h1 key={bounty.title+i}>{bounty.title}</h1>
  })
  return (
    <div className="list" >
      {bounties}
    </div>
  )
}

export default List;
