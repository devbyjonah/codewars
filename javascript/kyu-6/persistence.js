/* Calculates the multiplicative persistence of input integer */
function persistence(num) {
  let count = 0
  let cur = num.toString().split('')
  /* Loop until the current numbers length < 1 */
  while (cur.length > 1){
    /* increment loop counter */
    count += 1
    /* use reduce to multiply digits, format result as a list of individual digits */
    cur = cur.reduce((a, b) => Number(a) * Number(b), 1).toString().split('')
  }
  return count
}