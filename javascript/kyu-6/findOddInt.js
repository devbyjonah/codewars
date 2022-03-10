/* 
Finds the integer which occurs an odd number of times in an array 
Better solution could implement a seperate count function to seperate functionality more
*/

function findOdd(A) {

  /*nested for loops used to compare each value in the array against all other values*/
  for (let i = 0; i < A.length; i++){
    let count = 0
    for (let j = 0; j < A.length; j++){
      if (A[j] === A[i]){
        count++
      }
    }
    if (count % 2 !== 0){
      return A[i]
    }
  }
}