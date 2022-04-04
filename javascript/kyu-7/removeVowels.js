function disemvowel(str) {

  /* 

    regex basics:
    // = regular expression literal
    [] = character set
    g = global / all occurences
    i = case insensitive

    could be done with replaceAll method as well

   */

  return str.replace(/[aeiou]/gi, '')

}