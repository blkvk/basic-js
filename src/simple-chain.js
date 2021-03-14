const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push(null);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this
  },
  removeLink(position) {
    if (isNaN(position) !== true && position > 0 && this.chain.length >= position){
      this.chain.pop(position - 1);
      return this;
    } else {
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain.join('~~');
    return this.chain;
  }
};

module.exports = chainMaker;
