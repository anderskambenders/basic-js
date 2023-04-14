const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let flag = true
  const hex = '1234567890ABCDEF';
  const hexArr = hex.split('');
  const nArr = n.split('-');
  nArr.forEach(element => {
      if (element.length !== 2) {
          flag = false
      }

  });
  nArr.forEach( element => {
      element.split('').forEach( el => {
          console.log(hexArr.includes(el))
          if (!hexArr.includes(el)) {
              flag = false;
          }
      } )
  } )
  return flag
}
module.exports = {
  isMAC48Address
};
