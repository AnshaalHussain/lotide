const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//key: a value:  1
//key: b value:  2

const eqObjects = function(obj1, obj2) {

  object1 = Object.keys(obj1);
  object2 = Object.keys(obj2);

if(object1.length === object2.length){

  for(key in obj1) {
    if(obj1[key] !== obj2[key]) {
      return false;
    }
   
  }
  return true;

  };

  return false;
 
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


//assertEqual(eqObjects(ab, abc));
//assertEqual(eqObjects(ab, abc), false);
