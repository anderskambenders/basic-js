const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {return {}}
  const obj = {};
  const spArr = [];
  let arr = [];
  domains.forEach( domain => {
      spArr.push(domain.split('.').reverse())
  })
  spArr.forEach( el => {
      arr = [...arr, ...el]
  })
  obj[`.${arr[0]}`] = arr.filter(value => value===arr[0]).length
  spArr.forEach( (el, index) => {
  obj[`.${el.join('.')}`] = arr.filter( value => value === el[index+1] ).length
  })
  return obj
}

module.exports = {
  getDNSStats
};
