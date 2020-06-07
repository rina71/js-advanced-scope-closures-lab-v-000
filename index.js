function produceDrivingRange(blockRange) {
  return function(one, two){
    let oneNum = parseInt(one, 10)
    let twoNum = parseInt(two, 10)
    let difference = Math.abs(oneNum - twoNum)

    if (difference < blockRange) {
      return `within range by ${difference}`;
    } else {
      return `${difference - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}

function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }
  }
}
