// maskify accepts an inputted number (phone,credit,passkey, etc.)
// maps all digits to '#' excluding the last four indexes

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4) // uses negative index in slice() method to count from end
}