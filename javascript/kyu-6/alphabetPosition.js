// alphabet position accepts a string, removes all non letter characters, and replaces each letter with its position in the alphabet
function alphabetPosition(text) {
// remove all non letter characters with /[^a-z]/gi
  let characters = text.replace(/[^a-z]/gi, '').split('')
  //map letter to alphabet position using character codes. 
  // upper case A starts at character code 65, subtracting 64 starts it at 1
  return characters.map(val=>{
    return val.toUpperCase().charCodeAt(0) - 64
  }).join(' ')
}