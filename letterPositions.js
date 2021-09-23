

const letterPositions = function(string) {
  let results = {};
  let count = 0 ;

  for (letter in string) {
    if(results[string[letter]]) {

      results[string[letter]] + count;
      results[string[letter]].push(count);

    } else {
      results[string[letter]] = [];
      results[string[letter]].push(count);
    }

    count++;
    
  };

  return results;
};



//console.log(letterPositions("hello"));


module.exports = letterPositions;