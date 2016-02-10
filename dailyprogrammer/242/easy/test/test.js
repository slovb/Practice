const assert = require('assert');
const funnyPlant = require('../funnyPlant.js').funnyPlant;

describe('funnyPlant', function() {
  it('1 1 => 2', function() {
    assert.equal(2, funnyPlant(1, 1));
  });
  it('3 1 => 3', function() {
    assert.equal(3, funnyPlant(3, 1));
  });
  it('8 1 => 4', function() {
    assert.equal(4, funnyPlant(8, 1));
  });
  it('4 1 => 4', function() {
    assert.equal(4, funnyPlant(4, 1));
  });
  it('15 1 => 5', function() {
    assert.equal(5, funnyPlant(15, 1)); 
  });
  it('200 15 => 5', function() {
    assert.equal(5, funnyPlant(200, 15));
  });
  it('50000 1 => 14', function() {
    assert.equal(14, funnyPlant(50000, 1));
  });
  it('150000 250 => 9', function() {
    assert.equal(9, funnyPlant(150000, 250));
  });
});
