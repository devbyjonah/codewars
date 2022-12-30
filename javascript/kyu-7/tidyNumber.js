// tidyNumber function accepts a positive integer and returns true if the digits are in ascending order and false otherwise
function tidyNumber(n){
  // convert num to string to split into array, then map values back to Number data type
  let arr = n.toString().split('').map(val => Number(val)),
      res = true
  // loop through digits array comparing current value against previous value
  arr.forEach((val, ind) => {
    if (val < arr[ind - 1]){
      res = false
    }
  })
  return res
}