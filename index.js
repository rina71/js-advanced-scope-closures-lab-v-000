function produceDrivingRange(blockRange) {
  return function(one, two){
    let oneNum = Integer.parseInt(one.slice(0,2))
    let twoNum = Integer.parseInt(two.slice(0,2))
    let difference = Math.abs(oneNum - twoNum)

    if (difference < blockRange) {
      return `within range by ${blockRange}`;
    } else {
      return `${difference} blocks out of range`;
    }
  }
}
