// test/tailTest.js

const assert = require('chai').assert;
const tail   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5');
  });
});


// Old Test code for Reference

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ "Lighthouse", "Labs"]);
// assertEqual(tail(["5", "5", "5"]), [ "6", "6"]);
// assertEqual(tail([ 5, 6, 7]), [ 7, 8]);
// assertEqual(tail([ 5, 5, 5 ]), [ 5, 5, ]);
