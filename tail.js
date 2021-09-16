const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function (array) {
  let newArray = [];
  for (i = 1; i < array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}

const x = [0, 1, 2, 3, 4, 5, 6, 7];
assertEqual(tail(x), [1, 2, 3, 4, 5, 6, 7]);
