const assertEqual = require('./assertEqual');


const head = function(array) {
  if (array === []) {
    console.log("undefined")
  }
  return array[0];
};

head([]);
 assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
