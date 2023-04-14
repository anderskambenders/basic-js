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
 *
 */
function repeater(str, options) {
  let res = str;
  let sep = options.separator || '+';
  let rep = options.repeatTimes || 1;
  let addition = options.addition || '';
  if (options.addition === false) {addition = 'false'}
  if (options.addition === null) {addition = 'null'}
  let addSeparator = '';
  if (addition) {addSeparator = options.additionSeparator || '|';}
  let addRepeat = options.additionRepeatTimes || 1;
  let finAdd = (addition+addSeparator).repeat(addRepeat).slice(0, -(addSeparator.length));
  let s = (finAdd+res+finAdd+sep).slice(finAdd.length, (finAdd+res+finAdd+sep).length ).repeat(rep);
  console.log(sep)
  return s.slice(0, -(sep.length))

}


module.exports = {
  repeater
};
