// the titleCase function accepts an unformatted title and a list of words that shouldn't be capitalized
// the functions returns the original title formatted properly using this minorWords list

function titleCase(title, minorWords) {
  // create words array with each item === a word from the inputted title
  let words = title.toLowerCase().split(' ')
  // check for undefined minorWords array
  if (minorWords !== undefined){
    // map minor words to a new array with all words lowercase
    let lowercase = minorWords.split(' ').map(val => val.toLowerCase())
    // formats words using map() method and returns joined list
    return words.map((val, ind) => {
      if (ind === 0 || !lowercase.includes(val)){
        return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase()
      }else {
        return val.toLowerCase()
      }
    }).join(' ')
  }else {
    // returns title with every word capitalized in case of undefined minorWords array
    return title.split(' ').map(val => val.slice(0,1).toUpperCase() + val.slice(1).toLowerCase()).join(' ')
  }
}