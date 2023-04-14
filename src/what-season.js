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
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {throw new Error('Invalid date!');}
  try {Date.prototype.getUTCFullYear.call(date)
  } catch (error) {throw new Error('Invalid date!')}
  const data = {
    'spring' : [2,3,4],
    'summer' : [5,6,7],
    'autumn' : [8,9,10],
    'winter' : [11,0,1],
  }
  let month = date.getMonth();
  let season = '';
  for (seas in data) {
    if (data[seas].includes(month)) {
      season = seas
    }
  }
  return season

}

module.exports = {
  getSeason
};
