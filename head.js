const assertEqual = require('./assertEqual');


const head = function(array) {
  if (array === []) {
    console.log("undefined")
  }
  return array[0];
};

module.exports = head;