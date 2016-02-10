const assert = require('assert');
const primefactors = require('../primefactors.js').primefactors;

describe('primefactors', function() {
  it('should return [] when given 1', function() {
    assert.deepEqual([], primefactors(1));
  });
  it('should return [2] when given 2', function() {
    assert.deepEqual([2], primefactors(2));
  });
});

