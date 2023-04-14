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
  calculateDepth(arr) {
    let res = 0;
    if (Array.isArray(arr)) {
        for (var i in arr) {
            res = Math.max(res, this.calculateDepth(arr[i]));
        }
        res++;
    }
    return res;
}
}
module.exports = {
  DepthCalculator
};
