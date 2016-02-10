const assert = require('assert');
const primefactors = require('../primefactors.js').primefactors;

function primetester(argument, expected) {
  it('should return [' + expected.toString() + '] when given ' + argument, function() {
    assert.deepEqual(expected, primefactors(argument));
  });
};

describe('primefactors', function() {
  primetester(1, []);
  primetester(2, [2]);
  primetester(3, [3]);
  primetester(4, [2,2]);
  primetester(5, [5]);
  primetester(6, [2,3]);
  primetester(7, [7]);
  primetester(8, [2,2,2]);
});

