const assert = require('assert');
const primefactors = require('../primefactors.js').primefactors;

describe('primefactors', function() {
  it('should return [] when given 1', function() {
    assert.deepEqual([], primefactors(1));
  });
});

