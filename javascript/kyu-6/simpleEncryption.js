/* 
encrypt takes input string and integer parameters
returns the string with all odd indexed characters concat 
with all even indexed characters (aeaeae => eeeaaa)
this process is repeated n times
*/

function encrypt(text, n) {
  if(!text || n < 0){return text} /* check for invalid inputs */
  
  let encrypted = text
  
  /* iterate through range of n, splits string into odds and evens and updating encrypted to equal odds + evens */
  for (let i = 0; i < n; i++){
    let evens = encrypted.split('').filter((val, index) => index % 2 === 0).join('')
    let odds = encrypted.split('').filter((val, index) => index % 2 !== 0).join('')
    encrypted = odds + evens
  }
  return encrypted
}

/* decrypt reverses the process of encrypt function*/

function decrypt(encryptedText, n) {
  
  if(!encryptedText || n <= 0){return encryptedText} /* check for invalid inputs */
  
  let decrypted = encryptedText
  let midpoint = Math.floor(decrypted.length / 2) /* midpoint used to find original odds and evens split */
  
  /* iterate through range of n, splits string into odds and evens */
  for (let i = 0; i < n; i++){
    let odds = decrypted.slice(0, midpoint)
    let evens = decrypted.slice(midpoint)
    let current = ''
    
    /* iterate through odds and evens zipping the two together */
    for (let i = 0; i < evens.length; i++){
      if (evens[i] && odds[i]){
        current += evens[i] + odds[i]
      } else if (evens[i]){
        current += evens[i]
      }
    }
    decrypted = current
  }
  return decrypted
}