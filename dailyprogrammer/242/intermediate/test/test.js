const assert = require('assert');
const vhs = require('../vhs.js').vhs;

describe('vhs', function() {
  it('4 shows, some overlap', function() {
    assert.equal(3, vhs([
      "1530 1600",
      "1555 1645",
      "1600 1630",
      "1635 1715"
    ]));
  });
});

