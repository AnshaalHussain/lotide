const eqObjects = function(obj1, obj2) {

  object1 = Object.keys(obj1);
  object2 = Object.keys(obj2);

  if(object1.length === object2.length){

    for(key in obj1) {
    
      if(obj1[key] !== obj2[key]) {
        return false;
      };
    };

    return true;

  };

    return false;
};


const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else if (eqObjects(obj1, obj2) === false) {
    console.log(`🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  };
};

//const ba = { b: "2", a: "1" };
//const abc = { a: "1", b: "4"}

//assertObjectsEqual(ba, abc);
