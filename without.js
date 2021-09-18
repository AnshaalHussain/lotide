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



const without = function(sourceArray, itemsToRemove) {
  newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if(sourceArray[i] !== itemsToRemove[j]) {
        newArray.push(sourceArray[i])
        continue;
      }

    }

  } 
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
const x = ["lighthouse"]
console.log(without(words, x))