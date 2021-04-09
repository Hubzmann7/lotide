"use strict";

const eqArrays = function(arr1, arr2) {
  //return arr1 === arr2;
  // return arr1.toString() === arr2.toString();
  return arr1.join(',') === arr2.join(',');
  /*if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((val) => arr2.includes(val));
  */
};

// TEST CODE
console.log(eqArrays(["Lighthouse Labs", "Bootcamp"], ["Lighthouse Labs", "Bootcamp"])); // ---> true
console.log(eqArrays([1, 1], [2, 3])); // ---> false

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4])); // ---> true
console.log(eqArrays([1, 2, 3, 4], [4, 3, 2, 1])); // ---> false

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // ---> true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // ---> false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // ---> true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // ---> false


// CODE FROM eqArrays.js
// function eqArrays(arr1, arr2) {
  //   if (arr1.length !== arr2.length)
  //   return false;
  //   for (let i = 0; len = arr1.length; i++) {
    //     if (arr1[i] !== arr2[1]) {
      //       return false;
      //     }
      //   }
      //   return true;
      // }
      
      // const checkArrays = function(array1, array2) {
        //   return array1.sort().toString() === array2.sort().toString();
        // }
// console.log(checkArrays([1, 3, 2, 1], [1, 2, 3, 3]));