/* first solution is slow, but good 
practice with chaining array methods */

/* function sumMul(n,m){
  if (n < 1 || m < 1) return 'INVALID'
  return new Array(m)
    .fill(0)
    .map((val, ind) => ind + 1)
    .filter(val => val % n === 0)
    .reduce((acc, cur) => acc + cur, 0)
} */


/* faster solution using for loop to sum multiples */
function sumMul(n, m){
  let result = 0
  for (let i = 0; i < m; i += n){
    result += i
  }
  /* ternary check for invalid input */
  return (n > 0 && m > 0) ? result:"INVALID"
}