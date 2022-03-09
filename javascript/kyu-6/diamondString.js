/* diamond function returns a string that makes up a diamond of n height */

function diamond(n){

  let result = [] /* result array stores rows of diamond */
  const midpoint = Math.floor(n / 2) /* midpoint of diamond */
  let width = 1 /* current row width */
  
  if (n < 1 || n % 2 == 0){ /* check for invalid input even or < 0 */
    return null
  }

/* iterates up t the center row of diamond creating string of row and pushing to result array */

  for (let i = 0; i < midpoint + 1; i++){
    result.push(' '.repeat(midpoint - i) + '*'.repeat(width) + '\n')
    width += 2
  }

  /* returns result array mirrored with the midpoint removed from the second half */
  return result.join('') + result.slice(0, result.length - 1).reverse().join('')
}