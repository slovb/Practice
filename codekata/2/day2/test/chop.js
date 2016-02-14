const assert = require('assert');
const chop = require('../chop.js');

describe('chop', function() {
  it('(-1, chop(3, []))',             function() { assert.equal(-1, chop(3, [])); });
  it('(-1, chop(3, [1]))',            function() { assert.equal(-1, chop(3, [1])); });
  it('(0,  chop(1, [1]))',            function() { assert.equal(0,  chop(1, [1])); });
  it('(0,  chop(1, [1, 3, 5]))',      function() { assert.equal(0,  chop(1, [1, 3, 5])); });
  it('(1,  chop(3, [1, 3, 5]))',      function() { assert.equal(1,  chop(3, [1, 3, 5])); });
  it('(2,  chop(5, [1, 3, 5]))',      function() { assert.equal(2,  chop(5, [1, 3, 5])); });
  it('(-1, chop(0, [1, 3, 5]))',      function() { assert.equal(-1, chop(0, [1, 3, 5])); });
  it('(-1, chop(2, [1, 3, 5]))',      function() { assert.equal(-1, chop(2, [1, 3, 5])); });
  it('(-1, chop(4, [1, 3, 5]))',      function() { assert.equal(-1, chop(4, [1, 3, 5])); });
  it('(-1, chop(6, [1, 3, 5]))',      function() { assert.equal(-1, chop(6, [1, 3, 5])); });
  it('(0,  chop(1, [1, 3, 5, 7]))',   function() { assert.equal(0,  chop(1, [1, 3, 5, 7])); });
  it('(1,  chop(3, [1, 3, 5, 7]))',   function() { assert.equal(1,  chop(3, [1, 3, 5, 7])); });
  it('(2,  chop(5, [1, 3, 5, 7]))',   function() { assert.equal(2,  chop(5, [1, 3, 5, 7])); });
  it('(3,  chop(7, [1, 3, 5, 7]))',   function() { assert.equal(3,  chop(7, [1, 3, 5, 7])); });
  it('(-1, chop(0, [1, 3, 5, 7]))',   function() { assert.equal(-1, chop(0, [1, 3, 5, 7])); });
  it('(-1, chop(2, [1, 3, 5, 7]))',   function() { assert.equal(-1, chop(2, [1, 3, 5, 7])); });
  it('(-1, chop(4, [1, 3, 5, 7]))',   function() { assert.equal(-1, chop(4, [1, 3, 5, 7])); });
  it('(-1, chop(6, [1, 3, 5, 7]))',   function() { assert.equal(-1, chop(6, [1, 3, 5, 7])); });
  it('(-1, chop(8, [1, 3, 5, 7]))',   function() { assert.equal(-1, chop(8, [1, 3, 5, 7])); });
});

