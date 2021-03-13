const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let ans = [],
      discard_next = '--discard-next',
      discard_prev = '--discard-prev',
      double_next = '--double-next',
      double_prev = '--double-prev'
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === discard_next) {
      
    } else if (arr[i] === discard_prev) {

    } else if (arr[i] === double_next) {

    } else if (arr[i] === double_prev) {

    }
  }
};
