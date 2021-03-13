const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length === 0) return false;
  let ans = [];
  let str;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      str = members[i].trimStart().split(' ');
      ans.push(str[0][0]);
    }
  }
  return ans.sort().join('').toUpperCase()
}
