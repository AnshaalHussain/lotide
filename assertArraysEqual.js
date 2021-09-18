const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢 Assertion Passed`);
  } else {
    console.log(`🔴 Assertion Failed:`);
  }
};



const array1 = [1, 2, 3]
const array2 = [1, 2, 3] 

assertArraysEqual(array1, array2)