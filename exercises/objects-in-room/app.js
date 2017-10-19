var cofeeCup = {
    type: "Hydro Flask",
    sizeInOz: 12,
    isFull: true,
    possibleContents: ["water", "coffee", "tea"]
}
var computer = {
    brand: "Apple",
    screenSizeInches: 13,
    isWithinLastFiveYears: true,
    color: "Silver:"
}
var skateBoard = {
  brand: "Krooked",
  type: "cruiser",
  isBoardCracked: false,
  showIfNeedReplacement: function() {
      if (skateBoard.isBoardCracked) {
          console.log("Time for a freshie");
      } else {
          console.log("You're all set.");
      }
  }
}
var chair = {
  type: "desk chair",
  doesRoll: true,
  isTooLow: false,
  showIfNeedAdjustment: function() {
      if (chair.isTooLow) {
          console.log("adjust height with button");
      } else {
          console.log("You're all set.")
      }
  }
}

console.log(skateBoard.showIfNeedReplacement());
console.log(chair.showIfNeedAdjustment());
