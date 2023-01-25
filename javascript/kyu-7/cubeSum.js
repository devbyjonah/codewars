// sumCubes function accepts an integer n
// and returns the sum of n ** 3 while n > 0 and n--
// Example: sumCubes(5) ---- (5 ** 3) + (4 ** 3) + (3 ** 3)....+ (1 ** 3)

// One liner using javascript array methods fill, map, and reduce
function sumCubes(n) {
  return new Array(n)
    .fill(0)
    .map((val, ind) => (ind + 1) ** 3)
    .reduce((a, b) => a + b, 0);
}
// Using standard JS for loop
function _sumCubes(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i ** 3;
  }
  return sum;
}
// Using a while loop
function _sumCubes(n) {
  let sum = 0;
  let current = n;
  while (current > 0) {
    sum += current ** 3;
    current = current - 1;
  }
  return sum;
}
// Recursive solution
function _sumCubes(n, sum = null) {
  let cur = sum;
  if (n === 0) return sum;
  if (cur === null) {
    cur = n ** 3;
  } else {
    cur += n ** 3;
  }
  return sumCubes(n - 1, cur);
}
