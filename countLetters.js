const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(sentence) {
  let count = {}
  
  for(letter of sentence ) {
    if(letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1
      }
    };

  };
  return count;
};


module.exports = countLetters;

//console.log(countLetters("lighthouse in the house"));