const express = require("express");
const skiRouter = express.Router();

skiRouter.route("/")
.get((req, res)=>{
  console.log(req.query)
  const searchResults = skis.filter(ski=>{
    let doesMatchAll = true;
    for (prop in req.query) {
      if (ski[prop].toString().toLowerCase() !== req.query[prop].toLowerCase()){
          doesMatchAll = false
        }
      }
    return doesMatchAll;
  });
  // console.log(searchResults)
  return res.send(searchResults)
});

module.exports = skiRouter;

const skis = [
  {
    brand: "Armada",
    model: "JJ",
    price: 750,
    sizesCM: [160, 175, 190]
  },
  {
    brand: "Line",
    model: "Blend",
    price: 650,
    sizesCM: [150, 175, 185]
  },
  {
    brand: "Faction",
    model: "Candide 4.0",
    price: 800,
    sizesCM: [155, 175, 192]
  }
]
