const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
function repeater(str, options) {
  const addition = options.addition !== undefined ? `${options.addition}` : '';
  const repeatTimes = options.additionRepeatTimes;
  const separator = options.separator || '+';
  const addSeparator = options.additionSeparator ?? '|';
  const repeated = addition ? str + (Array(repeatTimes).fill(addition).join(addSeparator)) : str;
  return Array(options.repeatTimes).fill(repeated).join(separator);
}

module.exports = {
  repeater
};
