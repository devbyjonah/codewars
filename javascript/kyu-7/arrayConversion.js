function toNumberArrayTwo(stringarray){
  return stringarray.map(i => Number(i))
}

function toNumberArray(stringarray){
  let numberArray = []
  for (let i of stringarray){
    numberArray.push(Number(i))
  }
  return numberArray
}