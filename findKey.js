const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKey = function(obj, callback) {

  for(key in obj) {
    //console.log(obj[key])
    if (callback(obj[key])) {     
      //{stars: x}.stars === 2
      
      
      return true;                   
      //how to access {stars: x}?
    }
  }





};



/*const numStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

console.log(findKey(numStars, x => x.stars === 2));
*/


module.exports = findKey;