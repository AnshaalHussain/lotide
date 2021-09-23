
const middle = function(array1) {
  let newArray = [];
  let arrLen = array1.length;

  if(arrLen <= 2) {
    return newArray;
    console.log(`No middle, only ${arrLen} values!`)
  }

  if(arrLen % 2 !== 0) {
    newArray.push(array1[Math.round(arrLen / 2 ) - 1]);
    return newArray;
  }


  if(arrLen % 2 === 0) {
    newArray.push(array1[(arrLen / 2) - 1]);
    newArray.push(array1[(arrLen / 2)]);
    return newArray;
  }
  
};


module.exports = middle;

