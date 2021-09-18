const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}


const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const middle = function(array1) {
  let newArray = [];
  let arrLen = array1.length;

  if(arrLen <= 2) {
    return newArray;
    console.log(`No middle, only ${arrLen} values!`)
  }

  if(arrLen % 2 !== 0) {
    //newArray.push(array1[Math.round(arrLen / 2 ) - 1]);
    return newArray;
  }


  if(arrLen % 2 === 0) {
    newArray.push(array1[(arrLen / 2) - 1]);
    newArray.push(array1[(arrLen / 2)]);
  }
  return newArray;
};



//console.log(assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); 

