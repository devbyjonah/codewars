function duplicateEncode(word){

/*
    maps each character to '(' if > 1 occurences or ')' if === 1 occurence
    checks if occurs > once by comparing the first and last index of the character
    if firstIndex === lastIndex the character only occurs once
*/

    return word
        .toLowerCase()
        .split('')
        .map((a, i, w) => w.indexOf(a) === w.lastIndexOf(a) ? '(':')')
        .join('')
}
