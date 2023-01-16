/*
  
  longestConsec function accepts two parameters:
      strarr: an array of strings
      k     : an integer
  the function will return the longest combination
  of k consecutive strings from strarr.

*/
function longestConsec(strarr, k) {
  // check for invalid parameters
  if (strarr.length === 0 || k > strarr.length || k <= 0) return ""
  
  let result = "" // stores longest combo
  let cur // holds the current combo
  // outer loop iterates strarr
  for (let i = 0; i < strarr.length; i++){
    cur = strarr[i]
    // inner loop iterates strarr starting on next item
    for (let j = i + 1; j < k + i; j++){
      // break loop if end of array
      if (!strarr[j]){
        break
      }
      // add current string to current combo
      cur += strarr[j]
    }
    // check if finished combo is longer than result
    if (cur.length > result.length){
      result = cur
    }
  }
  return result
}