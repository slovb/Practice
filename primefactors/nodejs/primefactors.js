exports.primefactors = function(i) {
  var factors = [];
  for (var candidate = 2; i > 1; candidate += 1) {
    for (; i % candidate === 0; i /= candidate) {
      factors.push(candidate);
    }
  }
  return factors;
}

