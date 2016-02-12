// Test a candidate
var testGenerator = function(n) {
  return function(x) {
    for (var i = 0; i < n; ++i) {
      if ((x-1) % n !== 0) {
        return false;
      }
      x = (x-1)*(n-1)/n;
    }
    return x % n === 0;
  }
};

var bruteForce = function(n) {
  var test = testGenerator(n);
  for (var x = 1; !test(x); ++x) {
  }
  return x;
};

exports.solve = bruteForce;

