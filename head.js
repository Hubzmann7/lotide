const assertEqual = require('./assertEqual');


// create a function 'head' which returns the first item in the array
const head = function(arr) {
  for (let i in arr) return arr[i];
};
console.log(head(['a', 'b', 'c']));

module.exports = assertEqual;

// use assertEqual to write test cases for various scenarios

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

