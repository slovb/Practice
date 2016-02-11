const vhs = require('./vhs.js');

const sample = [
  '1530 1600',
  '1555 1645',
  '1600 1630',
  '1635 1715'
];

const set1 = [
  '1530 1600',
  '1605 1630',
  '1645 1725',
  '1700 1730',
  '1700 1745',
  '1705 1745',
  '1720 1815',
  '1725 1810'
];

const set2 = [
  '1555 1630',
  '1600 1635',
  '1600 1640',
  '1610 1640',
  '1625 1720',
  '1635 1720',
  '1645 1740',
  '1650 1720',
  '1710 1730',
  '1715 1810',
  '1720 1740',
  '1725 1810'
];

const bonus1 = [
  '1535 1610 Pokémon',
  '1610 1705 Law & Order',
  '1615 1635 ER',
  '1615 1635 Ellen',
  '1615 1705 Family Matters',
  '1725 1810 The Fresh Prince of Bel-Air'
];

const bonus2 = [
  'The Fresh Prince of Bel-Air',
  '1530 1555 3rd Rock from the Sun',
  '1550 1615 The Fresh Prince of Bel-Air',
  '1555 1615 Mad About You',
  '1615 1650 Ellen',
  '1655 1735 Quantum Leap'
];

const solvedSample = vhs.solve(sample);
const solvedSet1 = vhs.solve(set1);
const solvedSet2 = vhs.solve(set2);
const solvedBonus1 = vhs.solve(bonus1);
const solvedBonus2 = vhs.solve(bonus2);

console.log(solvedSample);
console.log(solvedSet1);
console.log(solvedSet2);
console.log(solvedBonus1);
console.log(solvedBonus2);

