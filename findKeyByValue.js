const findKeyByValue = function (object, val) {


  for(key in object) {

    if(object[key] === val) {
      return key
    }

  }
  return undefined;


};










/*const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};*/

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


module.exports = findKeyByValue;