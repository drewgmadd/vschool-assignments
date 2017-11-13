import React, {Component} from "react";
import Spot from "./Spot";

class App extends Component {
  render() {
    let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: "$40",
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: "$900",
      timeToGo: "Winter"
    },{
      place: "China",
      price: "$1200",
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: "$1100",
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: "$400",
      timeToGo: "Spring"
    }
  ];
  vacationSpots.map((e) => {
    if (Number(e.price.slice(1)) > 1000) {
      return e.priceSymbols = "$$$";
    } else if (Number(e.price.slice(1)) > 500) {
       return e.priceSymbols = "$$";
    } else {
      e.priceSymbols = "$";
    }
  });


    return (
    vacationSpots.map((box) => {
      {switch (box.timeToGo) {
        case "Winter":
        return <Spot priceSymbols={box.priceSymbols} background="blue" location={box.place} price={box.price} timeToGo={box.timeToGo}/>
        break;
        case "Spring":
        return <Spot priceSymbols={box.priceSymbols} background="yellow" location={box.place} price={box.price} timeToGo={box.timeToGo}/>
        break;
        case "Fall":
        return <Spot priceSymbols={box.priceSymbols} background="orange" location={box.place} price={box.price} timeToGo={box.timeToGo}/>
        break;
        case "Summer":
        return <Spot priceSymbols={box.priceSymbols} background="red" location={box.place} price={box.price} timeToGo={box.timeToGo}/>
        break;
      }

    }

    }));
  }
}

export default App;
