const assert = require('assert');
const nuts = require('../nuts.js');

describe('nuts', function() {
  it('nuts(5) === 3121', function() {
    assert.equal(3121, nuts.solve(5));
  });
});

