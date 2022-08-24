function generateHashtag (str) {

/* hashtag generator accepts string and returns it formatted as a hashtag */

  let nospace = str.replace(/ /g, '') /* remove spaces from string */

  /* checks for conditions str.length > 0 and str.length < 140 characters */

  if (nospace.length > 0 && nospace.length < 140){

    /* separates input into words */

    let words = str.split(' ')

    /* iterate through array of words and replace first character with capitalized character */
    
    for (let i = 0; i < words.length; i++){

      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)

    }

    return '#' + words.join('')

  }else {

    return false

  }
}

/* alternate solution utilizing the map function in place of a for loop */

function generateHashtagTwo (str) {

  let nospace = str.replace(/ /g, '')

  if (nospace.length > 0 && nospace.length < 140){

    let words = str.split(' ')

    words = words.map((i) => {return i.slice(0, 1).toUpperCase() + i.slice(1)})

    return '#' + words.join('')

  }else {
    
    return false
    
  }
}