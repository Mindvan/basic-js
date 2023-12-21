const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/**/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const seasons = ['winter', 'spring', 'summer', 'autumn']
  // if (date instanceof Date) {
  //   return seasons[Math.floor(date.getMonth() / 3)];
  // } else if (date === undefined) {
  //   throw 'Unable to determine the time of year!';
  // } else {
  //   throw 'Invalid date!';
  // }
}

module.exports = {
  getSeason
};
