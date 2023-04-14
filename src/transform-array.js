const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) {throw Error("'arr' parameter must be an instance of the Array!")}
//   const resArr = [];
//   for (let i=0; i<arr.length;i++) {
//       if (typeof arr[i]==='string') {
//           if (arr[i] === '--discard-prev') {resArr.pop()}
//           else if (arr[i] === '--discard-next') { i += 1 }
//           else if (arr[i] === '--double-prev') { resArr.push(arr[i-1])}
//           else if (arr[i] === '--double-next') { resArr.push(arr[i+1])}

//       }
//       else {resArr.push(arr[i])}
//   }
//   return resArr
// }
// function transform(array) {
  
//   if (!Array.isArray(array)) {throw Error("'arr' parameter must be an instance of the Array!")}
//   if (array.includes(true) ) {return array}
//   if (array.length === 0) {return []}
//   array.flatMap((v, i, a) => {
//   if (a[i + 1] === '--discard-prev') return [];
//   if (a[i - 1] === '--discard-next') return [];
//   if (a[i - 1] === '--double-next') return [v, v];
//   if (a[i + 1] === '--double-prev') return [v, v];
//   if (v.toString().startsWith('--d')) return [];

//   return v;
// })};
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("\'arr\' parameter must be an instance of the Array!");}
  if (arr.length === 0) {return [];}
  let resArr = arr.map((x) => x);
  for (let i = 0; i < resArr.length; i++) {
      if (resArr[i] === '--discard-next') {
          if (i === resArr.length - 1) {
              resArr.splice(i);
          } else {
              resArr[i + 1] = undefined;
              resArr.splice(i, 1);
          }
      } else if (resArr[i] === '--discard-prev') {
          if (i === 0) {
              resArr.splice(i, 1);
          } else {
              resArr.splice(i - 1, 2);
          }
      } else if (resArr[i] === '--double-next') {
          if (i === resArr.length - 1) {
              resArr.splice(i);
          } else {
              resArr.splice(i, 1, resArr[i + 1]);
          }
      } else if (resArr[i] === '--double-prev') {
          if (i === 0) {
              resArr.splice(i, 1);
          } else {
              resArr.splice(i, 1, resArr[i - 1]);
          }
      }
  }

  resArr = resArr.filter((item) => item);

  return resArr;
}
module.exports = {
  transform
};
