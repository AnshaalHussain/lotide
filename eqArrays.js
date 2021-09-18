const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

const array1 = [1, 2, 3]
const array2 = [1, 2, 3] 

assertEqual(eqArrays(array1, array2), true);

const array3 = ["1", "2", "3"]
const array4 = ["1", "2", 3]
assertEqual(eqArrays(array3, array4), false);