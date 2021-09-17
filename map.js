
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0])
const results2 = map(words, word => word.length)
const results3 = map(words, word => word[0] === "t")

assertEqual(results1, ["g", "c", "t", "m", "t"])
assertEqual(results2, [6, 7, 2, 5, 3])
assertEqual(results3, [false, false, true, false, true])
