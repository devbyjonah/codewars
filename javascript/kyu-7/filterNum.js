// filter nums from string return as number data type

// using javascript array methods
var filterString = function (value) {
  return Number(
    value
      .split("")
      .filter((val) => val in "0123456789".split(""))
      .join("")
  );
};
// using standard for loop
let _filterString = (val) => {
  let num = "";
  for (let i = 0; i < val.length; i++) {
    if (Number(val[i]) || val[i] === "0") {
      num += val[i];
    }
  }
  return Number(num);
};
