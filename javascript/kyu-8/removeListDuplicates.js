// distinct removes all duplicates from a given list

function distinct(a) {
  // converts input list to a Set which does not allow duplicates then uses spread operator to convert back to an array
  return [...new Set(a)];
}