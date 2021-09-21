const tail = require('../tail');
const assertEqual = require('../assertEqual')

const x = [0, 1, 2, 3, 4, 5, 6, 7];
assertEqual(tail(x), [1, 2, 3, 4, 5, 6, 7]);