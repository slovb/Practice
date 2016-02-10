exports.primefactors = function(i) {
  var factors = [];
  if (i > 1) {
    var candidate = 2;
    while (i > 1) {
      while (i % candidate === 0) {
        factors.push(candidate);
        i /= candidate;
      }
      candidate += 1
    }
  }
  return factors;
}

