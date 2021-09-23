const tail = require('../tail');
const assert = require("chai").assert;
//const assertEqual = require('../assertEqual')

const x = [0, 1, 2, 3, 4, 5, 6, 7];
//assertEqual(tail(x), [1, 2, 3, 4, 5, 6, 7]);

describe("#tail", () => {

  it("returns the last element in an array", () => {
    assert.deepEqual(tail(x), [1, 2, 3, 4, 5, 6, 7])
  });


});