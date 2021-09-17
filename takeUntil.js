const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}




const takeUntil = function(array, callback) {
  let newArray = [];
  
  for(let i = 0; i < array.length; i++) {

    if (callback(array[i])){
    return newArray;
    }
    newArray.push(array[i]);
  }
}



// ------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);