// simple version of factorial function
function factorialSimple(n){
  let acc = 1
  for (let i = n; i > 0; i--){
    acc *= i
  }
  return acc
}
// factorial using array methods
function factorial(n){
  return new Array(n).fill(n).map((val, ind) => ind + 1).reduce((acc, cur) => acc * cur, 1)
}
// factorial using recursion
function factorialRecursive(n){
  return n === 1 ? 1:n * factorial(n - 1)
}