const vhs = require('./vhs.js').vhs;

// Expect output to be 3
vhs([
  "1530 1600",
  "1555 1645",
  "1600 1630",
  "1635 1715"
]);
