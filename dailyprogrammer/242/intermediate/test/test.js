const assert = require('assert');
const vhs = require('../vhs.js');
const internals = vhs.internals;

describe('vhs', function() {
  describe('decode', function() {
    it('1 row, no name', function() {
      assert.deepEqual([
          {start: 1532, end: 1603, name: ''}
        ],
        internals.decode([
          "1532 1603"
        ])
      );
    });
    it('1 row, named', function() {
      assert.deepEqual([
          {start: 600, end: 750, name: 'A show with a name'}
        ],
        internals.decode([
          "0600 0750 A show with a name"
        ])
      );
    });
    it('4 rows, no names', function() {
      assert.deepEqual([
          {start: 1530, end: 1600, name: ''},
          {start: 1555, end: 1645, name: ''},
          {start: 1600, end: 1630, name: ''},
          {start: 1635, end: 1715, name: ''}
        ],
        internals.decode([
          "1530 1600",
          "1555 1645",
          "1600 1630",
          "1635 1715"
        ])
      );
    });
    it('4 rows, some names', function() {
      assert.deepEqual([
          {start: 1530, end: 1600, name: 'Super show'},
          {start: 1555, end: 1645, name: ''},
          {start: 1600, end: 1630, name: 'Danger'},
          {start: 1635, end: 1715, name: 'Mouse'}
        ],
        internals.decode([
          "1530 1600 Super show",
          "1555 1645",
          "1600 1630 Danger",
          "1635 1715 Mouse"
        ])
      );
    });
  });
  describe('intersect', function() {
    it('[ ] ( ) do not intersect', function() {
      assert.equal(false,
        internals.intersect(
          {start: 1, end: 2, name: ''},
          {start: 3, end: 4, name: ''}
        )
      );
    });
    it('[ ( ] ) intersect', function() {
      assert.equal(true,
        internals.intersect(
          {start: 1, end: 3, name: ''},
          {start: 2, end: 4, name: ''}
        )
      );
    });
    it('[ ( ) ] intersect', function() {
      assert.equal(true,
        internals.intersect(
          {start: 1, end: 4, name: ''},
          {start: 2, end: 3, name: ''}
        )
      );
    });
    it('( [ ] ) intersect', function() {
      assert.equal(true,
        internals.intersect(
          {start: 2, end: 3, name: ''},
          {start: 1, end: 4, name: ''}
        )
      );
    });
    it('( [ ) ] intersect', function() {
      assert.equal(true,
        internals.intersect(
          {start: 2, end: 4, name: ''},
          {start: 1, end: 3, name: ''}
        )
      );
    });
    it('( ) [ ] do not intersect', function() {
      assert.equal(false,
        internals.intersect(
          {start: 3, end: 4, name: ''},
          {start: 1, end: 2, name: ''}
        )
      );
    });
  });
  describe('solve', function() {
    it('4 shows, some overlap', function() {
      assert.equal(3, vhs.solve([
        "1530 1600",
        "1555 1645",
        "1600 1630",
        "1635 1715"
      ]).length);
    });
  });
});

