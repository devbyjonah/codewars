// repr accepts a single word and returns a string representation using the given abbreviation (first letter + (word.length - 2) + last letter)
function repr(word){
  // create string representation
  let string = word[0] + `${word.length - 2}` + word[word.length - 1]
  if (string.slice(string.length - 1) === ','){ // check for comma attached
    string = word[0] + `${word.length - 3}` + word[word.length - 2] + ','
  }
  return string
}

// abbreviate splits input string into an array of words and checks for hyphenated words to split into subarray
function abbreviate(string) {
  let words = string.split(' ')
  
  words.forEach((val, ind) => { // iterate through words and split any strings with hyphen
    if (val.includes('-')){
      words[ind] = val.split('-')
    }
  })
  // return the words array mapping each value using the repr function
  return words.map(val => {
    if (Array.isArray(val)){ // check for hyphenated word split into array
      return repr(val[0]) + '-' + repr(val[1])
    }else if(val.length > 3){ // check for length > 3
      return repr(val)
    }else { // returns val as is if word.length <= 3
      return val
    }
  }).join(' ')
}