/* Find the product of k maximal numbers in the int array */

// version without array methods
function _maxProduct(numbers, size) {
  // quick bubble sort just for fun :D
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
      }
    }
  }
  // start at end of list and multiply last n(size) values together
  const lastIndex = numbers.length - 1;
  let acc = 1;

  for (let i = lastIndex; i > lastIndex - size; i--) {
    acc *= numbers[i];
  }
  return acc;
}

// using javascript array methods
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => a - b) // sort in ascending order
    .slice(numbers.length - size, numbers.length) // sub sequence of only last n (size) digits
    .reduce((cur, acc) => cur * acc, 1); // reduce array with multiplication
}
