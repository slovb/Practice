const assert = require('assert');
const funnyPlant = require('../funnyPlant.js').funnyPlant;

describe('funnyPlant', function() {
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
