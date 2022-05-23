// repr accepts a single word and returns a string representation using the given abbreviation
function repr(word){
  let string = word[0] + `${word.length - 2}` + word[word.length - 1]
  if (string.slice(string.length - 1) === ','){
    string = word[0] + `${word.length - 3}` + word[word.length - 2] + ','
  }
  return string
}

// abbreviate splits input string into an array of words and checks for hyphenated words to split into subarray
function abbreviate(string) {
  let words = string.split(' ')
  
  words.forEach((val, ind) => {
    if (val.includes('-')){
      words[ind] = val.split('-')
    }
  })
  
  return words.map(val => {
    if (Array.isArray(val)){
      return repr(val[0]) + '-' + repr(val[1])
    }else if(val.length > 3){
      return repr(val)
    }else {
      return val
    }
  }).join(' ')
}