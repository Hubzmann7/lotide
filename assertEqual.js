const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};



// console.log(assertEqual);
module.exports = assertEqual;

//:grinning:✅🛑

// #2
/*
Write an "assertArraysEqual" function from scratch.
Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).
Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.
Examples
SUCCESS CASE
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed
FAILURE CASE
var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7); //just an example
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"
*/

// function assertArraysEqual(actual, expected, testName) {

//   const lengthsEqual = (actual.length === expected.length);
//   const contentsEqual = true;
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]);
//     const contentsEqual = false
//   }
//     if (contentsEqual && lengthsEqual) {
//     console.log("passed");
//   } else {
//     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//   }
// }

// #3
/*
Write an "assertObjectsEqual" function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Examples
SUCCESS CASE
var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'firstName', 'Jack');
var expected = {
  firstName: 'Jack',
  lastName: 'Blow'
};
assertObjectsEqual(person, expected, 'updates person's existing first name field');
// console output:
// passed
FAILURE CASE
var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'age', 35);
var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}
*/
// function assertObjectsEqual(actual, expected, testName) {
//   actual = JSON.stringify(actual);
//   expected = JSON.stringify(expected);
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
//   }
// }





