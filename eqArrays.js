const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length)
  return false;
  for (let i = 0; len = arr1.length; i++) {
    if (arr1[i] !== arr2[1]) {
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


// const eqArrays = assertEqual => {};
