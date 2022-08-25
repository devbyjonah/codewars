/* 
order should accept a string of words with a number inserted randomly into each word and 
return a new string using the word's number as its position in the string
 */

function order(words){
  /* split string into array of words and then create an empty array with the same length */
  const wordsArray = words.split(' ')
  let orderedArray = new Array(wordsArray.length)
  
  /* iterate through the array */
  wordsArray.forEach(i => {
    /* split word into characters and filter all letters */
    let number = i.split('').filter(i => i in '1234567890'.split(''))
    /* use current word's number to assign the index # in the empty orderedArray */
    orderedArray[Number(number[0]) - 1] = i
  })
  /* join words with spaces and return */
  return orderedArray.join(' ')
}