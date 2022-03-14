// descending order accepts an integer and returns it with digits sorted in descending order
// this is the maximum value possible with the given digits

function descendingOrder(n){
  let array = n.toString().split('')
  return Number(array.sort((a, b) => b - a).join('')) // compare function b - a sorts nums in descending order
}