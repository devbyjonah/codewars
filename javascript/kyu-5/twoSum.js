// twoSum is a popular coding problem for coding interviews
// accepts array of integers and returns the leftmost pair of integers that sum to target integer

function twoSum(ints, s){
  var seen = {} // seen object stores each integer as a property with value of true once seen

  for (var i = 0; i < ints.length; ++i) { // iterate through input array
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]] // check if matching value is in seen object
    seen[ints[i]] = true // add current value to seen object
  }
}