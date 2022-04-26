/* The first solution is to use the filter() and concat() methods to move all zeros to the end of the array */

function moveZerosFilter(arr) {

/* first the arr is filtered down to all non-zero values and then concatenated to the base arr filtered by value === 0 */

  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))

}

/* the second solution simply iterates the array and sorts all 0's to an array and all no-zero values to another array */

function moveZerosIterate(arr) {

  let nonZero = []
  let zero = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0){
      zero.push(0)
    }else {
      nonZero.push(arr[i])
    }
  }

  /* uses the spread operator to join arrays without using Array.concat() method */
  return [...nonZero, ...zero]
}