exports.primefactors = function(i) {
  var step = function(rest, candidate, factorization) {
    factorization = factorization || [];
    if (rest % candidate === 0) {
      rest /= candidate;
      factorization.push(candidate);
    }
    else {
      candidate += 1;
    }
    return rest <= 1 ? factorization : step(rest, candidate, factorization);
  };
  return step(i, 2);
}

