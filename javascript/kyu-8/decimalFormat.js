
// The function twoDecimalPlaces uses the toFixed method of numbers to round the number down to the decimal place.
// this formatting is commonly used when dealing with money and rounding transactions to the correct amount of digits
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}