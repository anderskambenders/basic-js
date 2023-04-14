const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length : 0,
  chain : [],
  getLength() {
    return this.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    this.length += 1
    return this
  },
  removeLink(position) {
    if (
      position > this.length ||
      position <= 0 ||
      typeof position !== "number"
    ) {
      this.length = 0;
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {this.chain.splice(position-1,1);
      this.length -= 1}
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = []
    this.length = 0;
    return res
  }
};

module.exports = {
  chainMaker
};
