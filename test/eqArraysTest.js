const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');


const array1 = [1, 2, 3]
const array2 = [1, 2, 3] 

assertEqual(eqArrays(array1, array2), true);

const array3 = ["1", "2", "3"]
const array4 = ["1", "2", 3]
assertEqual(eqArrays(array3, array4), false);