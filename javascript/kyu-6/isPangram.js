function isPangram(string){

/* 
  uses Array.prototype.every() method to iterate through array
  containing the alphabet checking if input string contains each letter
 */

  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(char => string.toLowerCase().includes(char))
}