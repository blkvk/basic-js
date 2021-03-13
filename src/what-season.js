const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error();
  let month = date.getMonth();
  if (month <= 1 || month == 11) return 'winter';
  else if (month <= 4) return 'spring';
  else if (month <= 7) return 'summer';
  else return 'fall';
};
