// one liner with javascript array methods
// reverse accepts a string and returns the string with every other word reversed
// trim removes any leading/trailing whitespace
const reverse = (str) => {
  return str
    .trim()
    .split(" ")
    .map((val, ind) => (ind % 2 === 0 ? val : val.split("").reverse().join("")))
    .join(" ");
};
