//accepts an array of grades, finds the average, and returns letter grade

function getGrade (array) {

  let average = array.reduce((acc, cur) => acc + cur) / array.length // sum grades / array length = average
  let grades = { 
    100:'A',
    90:'A',
    80:'B',   //grades object maps number score to letter grade
    70:'C',
    60:'D'
  }
  return average > 59 ? grades[Math.floor(average/10) * 10] : 'F'
}