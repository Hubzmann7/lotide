const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    console.log(:white_check_mark:`: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    console.log(:stop_sign:`: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('blue', 'blue');
assertEqual('red', 'blue');
assertEqual(1, 5);

console.log(assertEqual);

//:grinning:✅