const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  };
  let ln2 = 0.693;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (ln2 / HALF_LIFE_PERIOD));
  return result;
};
