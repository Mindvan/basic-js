const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  //   const origArr = JSON.stringify(arr.slice(0).flat(Infinity));
  //   let newArr = [];
  //   let counter = 1;
  //
  //   while (JSON.stringify(newArr) !== origArr) {
  //     counter++;
  //     newArr = arr.slice(0).flat(counter - 1);
  //   }
  //
  //   return counter;
  // }
}

module.exports = {
  DepthCalculator
};
