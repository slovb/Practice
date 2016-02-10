exports.primefactors = function(i) {
  var factors = [];
  if (i > 1) {
    if (i % 2 === 0) {
      factors.push(2);
      i /= 2;
    }
    if (i > 1) {
      factors.push(i);
    }
  }
  return factors;
}

