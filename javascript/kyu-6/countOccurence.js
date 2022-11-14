/* track # of occurences for each character in string */
function count (string) {  
  let result = {}
  /* iterates through string tracking occurences in result object */
  for (let i = 0; i < string.length; i++){
    let char = string[i]
    if (result[char]){  
      result[char] += 1   /* increment if key exists    */
    }else {              /*          else              */
      result[char] = 1  /* create key with value of 1 */
    }
  }
  return result
}