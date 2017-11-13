import React from "react";
import Product from "./Product";
import Info from "./Info";
import Examples from "./Example/Examples"
function Body() {

  return (
    <div className="body">
      <Info/>
      <Examples/>
      <Product title="Ukelele One" type="type: Baritone" description="This descriptions should be for the first block"
      purchasetype="Buy Now" href="http://www.deanguitars.com/images/productimages_th/ukedkoa.png"/>
      <Product title="Ukelele Two" type="type: Tenor" description="Heres the description for the second block"
      purchasetype="Purchase" href="http://www.deanguitars.com/images/productimages_th/ukedkoa.png"/>
      <Product title="Ukelele Three" type="type: Soprano" description="Heres the description for the third block"
      purchasetype="Get It!" href="http://www.deanguitars.com/images/productimages_th/ukedkoa.png"/>
    </div>
  )
}

export default Body;
