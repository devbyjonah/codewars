/* accepts an integer and returns expanded number */
/* example: 12 would return '10 + 2' */

function expandedForm(num) {
  /* turn num into array of digits , get last index, init result array*/
  let digits = num.toString().split('')
  let last = digits.length - 1
  let result = []
  
  /* iterate through digits array */
  digits.forEach((num, ind) => {
    /* push digit + '0' * remaining nums to results array */
    result.push(num + ('0'.repeat(last - ind)))
  })
  /* filter out nums starting with 0, join array with + operator */
  return result.filter(val => val[0] !== '0').join(' + ')
}