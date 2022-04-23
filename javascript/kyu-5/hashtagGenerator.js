function generateHashtag (str) {

/* hashtag generator accepts string and returns formatted hashtag */

  let nospace = str.replace(/ /g, '')

  /* checks for conditions str length greater than 0 and less than 140 characters */

  if (nospace.length > 0 && nospace.length < 140){

    /* seperates input into words */

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