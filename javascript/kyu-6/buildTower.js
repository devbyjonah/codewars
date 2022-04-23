function towerBuilder(nFloors) {

  /* 
    create base of tower by repeating '*' one less than double nFloors 
    currentLevel is used to store array representation of current floor
  */

  
  let base = '*'.repeat((nFloors * 2) - 1)
  let currentLevel = [...base]
  let result = [base]
  
  /* 
    iterates through range of nFloors updating current floor with needed spaces
    uses unshift() method to insert currentLevel to the top of result array 
   */

  for (let i = nFloors - 1; i > 0; i--) {

    currentLevel[nFloors - 1 - i] = ' '
    currentLevel[base.length - (nFloors - i)] = ' '
    result.unshift(currentLevel.join(''))

  }

  return result

}