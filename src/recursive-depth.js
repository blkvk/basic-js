const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {
    this.result = count;
    let i;
    for (i in arr) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr.flat(), ++count);
        break;
      }
    }
    return this.result;
  }
};