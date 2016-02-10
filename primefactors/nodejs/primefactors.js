exports.primefactors = function(rest) {
  var factors = [];
  for (var candidate = 2; rest > 1; candidate += 1) {
    for (; rest % candidate === 0; rest /= candidate) {
      factors.push(candidate);
    }
  }
  return factors;
};

