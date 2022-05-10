function titleCase(title, minorWords) {
  let words = title.toLowerCase().split(' ')
  if (minorWords !== undefined){
    let lowercase = minorWords.split(' ').map(val => val.toLowerCase())
    
    return words.map((val, ind) => {
      if (ind === 0 || !lowercase.includes(val)){
        return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase()
      }else {
        return val.toLowerCase()
      }
    }).join(' ')
  }else {
    return title.split(' ').map(val => val.slice(0,1).toUpperCase() + val.slice(1).toLowerCase()).join(' ')
  }
}