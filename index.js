function produceDrivingRange(blockRange) {
  return function(one, two){
    let oneNum = parseInt(one, 10)
    let twoNum = parseInt(two, 10)
    let difference = Math.abs(oneNum - twoNum)

    if (difference < blockRange) {
      return `within range by ${blockRange}`;
    } else {
      return `${difference} blocks out of range`;
    }
  }
}
