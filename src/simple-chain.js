const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],

  getLength() {
    return chainMaker.chain.length;
  },

  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let result = chainMaker.chain.join('~~');
    chainMaker.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
