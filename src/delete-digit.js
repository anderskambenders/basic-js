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
  let arr = n.toString().split('');
  let max = 0;
  arr.forEach( (dig, ind, array) => {
      let comp = [...arr.slice(0,arr.indexOf(dig)),...arr.slice(arr.indexOf(dig) + 1, arr.length)];
      if (Number(comp.join('')) > max) {
          max = Number(comp.join(''))
      }
      console.log(comp)

  });
  return max
}

module.exports = {
  deleteDigit
};
