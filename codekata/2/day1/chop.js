var chop = function(needle, haystack) {
  if (haystack.length === 0) {
    return -1;
  }
  var midpoint = Math.floor(haystack.length / 2);
  if (needle === haystack[midpoint]) {
    return midpoint;
  }
  else if (needle < haystack[midpoint]) {
    return chop(needle, haystack.slice(0, midpoint));
  }
  else { // needle > haystack[midpoint]
    var q = chop(needle, haystack.slice(midpoint + 1));
    return q === -1 ? -1 : 1 + midpoint + q;
  }
};

module.exports = chop;

