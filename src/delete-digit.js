const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  `${n}`.split('').forEach((item, i, arr) => {
    const tempArr = [...arr];
    tempArr.splice(i, 1);
    const num = +tempArr.join('');
    if (num > res) res = num;
  })
  return res;
}

module.exports = {
  deleteDigit
};
