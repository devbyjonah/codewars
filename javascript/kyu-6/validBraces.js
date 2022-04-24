function validBraces(braces){

  /* 
    pairs object is used to store key: value pairs of valid matches
    stack is used to store any opening braces until they are closed
  */
  
  let pairs = {'(':')', '{':'}', '[':']'}
  let stack = []
  let currentChar

  /* 
    iterate through braces string
    update currentChar at the start of each iteration 
  */
  
  for (let i = 0; i < braces.length; i++){
    currentChar = braces[i]
    
    /* checks if currentChar is an opening brace and pushes it to the stack */
    if (pairs[currentChar]){
      stack.push(currentChar)

    /* 
      checks closing brace against the last opening brace pushed to the stack 
      moves on to next iteration if matched, returns false otherwise
    */

    }else { 
      if (currentChar !== pairs[stack.pop()]){
        return false
      }
    } 
  }
  /* check for leftover opening braces */
  return stack.length === 0
}