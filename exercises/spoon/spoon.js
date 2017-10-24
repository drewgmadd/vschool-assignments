var phone = {
  brand: 'LG',
  weightInOz: 10,
  color: 'gray',
  isScreenCracked: true,
  contacts: ['Nicolette', 'Max', 'Alek'],
  replaceScreen: function() {
    if (this.isScreenCracked === true) {
      console.log('Get that screen fixed.');
    } else {
      console.log('Screen looks fine');
    }
  }
}
var mug = {
  sizeInFluidOz: 12,
  color: 'white',
  brandOfCup: 'Hydro Flask',
  isBranded: true,
  fill: function() {
    console.log('Time for a refill');
  }
}
var computer = {
  brand: 'apple',
  screenSizeInInches: 13,
  isWithinFiveYears: true,
  isFunctional: true,
  shouldReplace: function() {
    if (this.isWithinFiveYears === true && this.isFunctional === true) {
      console.log("You're all set");
    } else if (this.isWithinFiveYears === false || this.isFunctional === false) {
      console.log("Use you're best judgement");
    } else if (this.isWithinFiveYears === false && this.isFunctional === false) {
      console.log("It's time");
    }
  }
}
var sweatshirt = {
  color: 'Green',
  size: 'XL',
  isHooded: true,
  raining: function() {
    console.log("Put your hood up");
  }
}
var shoes = {
  brand: 'Timberland',
  color: 'brown',
  size: 11,
  isWaterproof: true,
  comfort: function() {
    console.log('These shoes are comfortable.');
  },
  areDamaged: false
}
var backPack = {
  brand: 'Dakine',
  sizeInLiters: 12,
  doesHaveShovel: false,
  doesHaveBeacon: false,
  doesHaveProbe: false,
  shouldStayInbounds: function() {
    if (this.doesHaveShovel === true && this.doesHaveBeacon === true && this.doesHaveProbe === true) {
      console.log('You have the necesarry equipment to leave the ski area');
    } else {
      console.log('You are not prepared to enter the backcountry');
    }
  }
}
var keys = {
  numberOfKeys: 10,
  doIknowWhatTheyAllAre: false,
  accessiblePlaces: ['home', 'car', "parent's house"],
  drive: function() {
    return 'Use the car key';
  },
  isOnLanyard: false
}
var trashCan = {
  sizeInGallons: 6,
  isFull: false,
  shouldEmpty: function() {
    if (this.isFull === true) {
      console.log('Time to take the trash out.');
    }
  },
  color: 'black',
  doHaveBackupBags: true
}
var table = {
  areaInSqFeet: 10,
  numberOfMonitors: 2,
  items: [keys, computer, mug],
  isDirty: false,
  needCleaning: function() {
    if (this.isDirty === true) {
      return 'Give it a cleaning';
    } else {
      return "You're all set";
    }
  }
}

var room = {
  numOfTables: 8,
  doAllTablesHaveChairs: true,
  areLightsOn: false,
  isProjectorOn: true,
  needChairs: function() {
    if (this.doAllTablesHaveChairs === true) {
      return 'No chairs needed';
    } else {
      return "We're short on chairs";
    }
  },
  needLights: function() {
    if (this.isProjectorOn === true) {
      return "Let's turn the lights off.";
    } else {
      return "We're all set."
    }
  }
}
console.log(room.needLights());
