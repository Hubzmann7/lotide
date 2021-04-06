// assertArraysEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    console.log(`:white_check_mark:: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    console.log(`:stop_sign:: ${actual} !== ${expected}`);
  }
};

