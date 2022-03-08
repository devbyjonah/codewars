/* Get divisors function returns a list of all divisors of a given integer */

function getDivisors(n){

  let divisors = []
  
  for (let i = 0; i <= n / 2; i++){
    if (n % i === 0){
      divisors.push(i)
    }
  }
  divisors.push(n)
  return divisors
}