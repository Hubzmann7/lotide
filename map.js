/*map function will take in two arguments
* array to map
* callback function
* map function returns a new array based on the result of the callback function
*/

const words = ["ground", "control", "to", "major", "tom"];

/* will cause error as map is not defined
const results1 = map(words, word => word[0]);
console.log(results1);
*/

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};

map(words);

