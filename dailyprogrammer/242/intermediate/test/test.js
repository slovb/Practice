const assert = require('assert');
const vhs = require('../vhs.js');
const internals = vhs.internals;

describe('vhs', function() {
  describe('decode', function() {
    it('1 row, no name', function() {
      assert.deepEqual(
        {
          favorites: [],
          programs: [
            {start: 1532, end: 1603, name: ''}
          ]
        },
        internals.decode([
          '1532 1603'
        ])
      );
    });
    it('1 row, named', function() {
      assert.deepEqual(
        {
          favorites: [],
          programs: [
            {start: 600, end: 750, name: 'A show with a name'}
          ]
        },
        internals.decode([
          '0600 0750 A show with a name'
        ])
      );
    });
    it('4 rows, no names', function() {
      assert.deepEqual(
        {
          favorites: [],
          programs: [
            {start: 1530, end: 1600, name: ''},
            {start: 1555, end: 1645, name: ''},
            {start: 1600, end: 1630, name: ''},
            {start: 1635, end: 1715, name: ''}
          ]
        },
        internals.decode([
          '1530 1600',
          '1555 1645',
          '1600 1630',
          '1635 1715'
        ])
      );
    });
    it('4 rows, some names', function() {
      assert.deepEqual(
        {
          favorites: [],
          programs: [
            {start: 1530, end: 1600, name: 'Super show'},
            {start: 1555, end: 1645, name: ''},
            {start: 1600, end: 1630, name: 'Danger'},
            {start: 1635, end: 1715, name: 'Mouse'}
          ]
        },
        internals.decode([
          '1530 1600 Super show',
          '1555 1645',
          '1600 1630 Danger',
          '1635 1715 Mouse'
        ])
      );
    });
    it('4 rows, some names, favorite', function() {
      assert.deepEqual(
        {
          favorites: ['Danger'],
          programs: [
            {start: 1530, end: 1600, name: 'Super show'},
            {start: 1555, end: 1645, name: ''},
            {start: 1600, end: 1630, name: 'Danger'},
            {start: 1635, end: 1715, name: 'Mouse'}
          ]
        },
        internals.decode([
          'Danger',
          '1530 1600 Super show',
          '1555 1645',
          '1600 1630 Danger',
          '1635 1715 Mouse'
        ])
      );
    });
  });
  describe('intersect', function() {
    it('selfintersection', function() {
      assert.equal(
        true,
        internals.intersect(
          {start: 1, end: 2, name: ''},
          {start: 1, end: 2, name: ''}
        )
      );
    });
    it('[ ] ( ) do not intersect', function() {
      assert.equal(
        false,
        internals.intersect(
          {start: 1, end: 2, name: ''},
          {start: 3, end: 4, name: ''}
        )
      );
    });
    it('[ ( ] ) intersect', function() {
      assert.equal(
        true,
        internals.intersect(
          {start: 1, end: 3, name: ''},
          {start: 2, end: 4, name: ''}
        )
      );
    });
    it('[ ( ) ] intersect', function() {
      assert.equal(
        true,
        internals.intersect(
          {start: 1, end: 4, name: ''},
          {start: 2, end: 3, name: ''}
        )
      );
    });
    it('( [ ] ) intersect', function() {
      assert.equal(
        true,
        internals.intersect(
          {start: 2, end: 3, name: ''},
          {start: 1, end: 4, name: ''}
        )
      );
    });
    it('( [ ) ] intersect', function() {
      assert.equal(
        true,
        internals.intersect(
          {start: 2, end: 4, name: ''},
          {start: 1, end: 3, name: ''}
        )
      );
    });
    it('( ) [ ] do not intersect', function() {
      assert.equal(
        false,
        internals.intersect(
          {start: 3, end: 4, name: ''},
          {start: 1, end: 2, name: ''}
        )
      );
    });
  });
  describe('solve', function() {
    it('sample, 4 shows', function() {
      assert.equal(
        3,
        vhs.solve([
          '1530 1600',
          '1555 1645',
          '1600 1630',
          '1635 1715'
        ]).length
      );
    });
    it('bonus 1, 6 shows, names', function() {
      assert.deepEqual(
        [
          'Pokémon',
          'Law & Order',
          'The Fresh Prince of Bel-Air'
        ],
        vhs.solve([
          '1535 1610 Pokémon',
          '1610 1705 Law & Order',
          '1615 1635 ER',
          '1615 1635 Ellen',
          '1615 1705 Family Matters',
          '1725 1810 The Fresh Prince of Bel-Air'
        ])
      );
    });
    it('bonus 2, 5 shows, names, favorite', function() {
      assert.deepEqual(
        [
          'The Fresh Prince of Bel-Air',
          'Ellen',
          'Quantum Leap'
        ],
        vhs.solve([
          'The Fresh Prince of Bel-Air',
          '1530 1555 3rd Rock from the Sun',
          '1550 1615 The Fresh Prince of Bel-Air',
          '1555 1615 Mad About You',
          '1615 1650 Ellen',
          '1655 1735 Quantum Leap'
        ])
      );
    });
  });
});

