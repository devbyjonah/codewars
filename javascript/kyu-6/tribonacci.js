// The tribonacci function starts with a 3 number signature and pushes the sum of the past 3 numbers to the array until length === n
function tribonacci(signature,n){
  // the current array of numbers
  let cur = signature
  // check for cases where n is less than 3 and the full signature does not need to be returned
  if(n <= 2){return signature.slice(0, n)}
  // iterate through the range of given n starting at index 3
  for (let i = 3; i < n ; i++){
    //push sum of last 3 digits to cur array
    cur.push(cur[i - 1] + cur[i - 2] + cur[i - 3])
  }
  return cur
}