const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length===0) {return ''}
  let res = '';
  let temp = 1;
  for (let i = 0; i <  str.length-1; i++) {
      console.log(str[i])
      if (str[i] === str[i+1]) {
          temp+=1;
      }
      else {
          if (temp===1) { res+=str[i]}
          else {res+=`${temp}${str[i]}`;
              temp = 1;}
      }
  }
  res += `${temp>1?temp:''}${str[str.length - 1]}`

  return res
}

module.exports = {
  encodeLine
};
