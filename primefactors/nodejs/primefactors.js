exports.primefactors = function(i) {
  var step = function(rest, candidate, factorization) {
    if (rest % candidate === 0) {
      rest /= candidate;
      factorization.push(candidate);
    }
    else {
      candidate += 1;
    }
    return {
      rest: rest,
      candidate: candidate,
      factorization: factorization
    };
  };
  var candidate = 2;
  var factorization = [];
  while (i > 1) {
    var update = step(i, candidate, factorization);
    i = update.rest;
    candidate = update.candidate;
    factorization = update.factorization;
  }
  return factorization;
}

