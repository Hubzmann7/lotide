const { assert } = require("chai");

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // <--- loops over all items in array
    console.log(item);
    if (itemsToCount[item]) { // <--- increments results if item found in itemsToCount object
      if (results[item]) { // <--- increments count of each item into result as each string in array is enountered
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;  
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavinth",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);