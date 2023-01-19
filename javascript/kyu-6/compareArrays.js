// Comp function accepts two arrays of integers and will return
// true if array2 contains all items from array1 squared
// Ex: a = [121, 144, 19, 161, 19, 144, 19, 11]
//     b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// returns false otherwise including [] or null inputs

function comp(array1, array2) {
  if (!array1 || !array2) return false;
  // generate FrequencyMap object from second array(squared)
  let squaredMap = new FrequencyMap(array2);
  // iterate over first array (non squared) checking if each item exists in squaredMap and has value > 0
  for (let i = 0; i < array1.length; i++) {
    let cur = array1[i];
    if (squaredMap[cur ** 2] && squaredMap[cur ** 2] > 0) {
      squaredMap[cur ** 2]--;
    } else {
      // end loop and return false if number not in map or occurences === 0
      return false;
    }
  }
  // check for leftover values in map
  const mapValues = Object.values(squaredMap);
  return mapValues.every((val) => val === 0);
}
// frequency map accepts array and initializes object
// with each array item as a key and its # of occurences as a value
function FrequencyMap(array) {
  for (let i = 0; i < array.length; i++) {
    this[array[i]] ??= 0;
    this[array[i]]++;
  }
}
