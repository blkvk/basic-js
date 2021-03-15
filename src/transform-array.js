const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && i !== 0 && arr[i-2] !== '--discard-next') {
      ans.pop();
    } else if (arr[i] === '--double-next' && i + 1 < arr.length && arr[i + 1] !== '--discard-prev') {
      ans.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i > 0 && arr[i-2] !== '--discard-next') {
      ans.push(arr[i - 1]);
    } else if (typeof arr[i] == 'number'){
      ans.push(arr[i]);
    }
  }
  return ans;
};
