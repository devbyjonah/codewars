/* diamond function returns a string that makes up a diamond of n height */

function diamond(n){
  let result = []
  const midpoint = Math.floor(n / 2)
  let width = 1
  
  if (n < 1 || n % 2 == 0){
    return null
  }

  for (let i = 0; i < midpoint + 1; i++){
    result.push(' '.repeat(midpoint - i) + '*'.repeat(width) + '\n')
    width += 2
  }
  return result.join('') + result.slice(0, result.length - 1).reverse().join('')
}