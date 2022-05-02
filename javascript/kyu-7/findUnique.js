// stray function accepts an array of equal integers except a single unique value
// uses set to remove duplicates and checks if two remaining integers first occurence === last occurence

function stray(numbers) {
  let set = new Set(numbers)
  let arr = new Array(...set)
  return numbers.indexOf(arr[0]) === numbers.lastIndexOf(arr[0]) ? arr[0]:arr[1]
}