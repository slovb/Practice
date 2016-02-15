var chop = function(needle, haystack) {
  var start = 0;
  var size = haystack.length;
  var slicer = function() {
    if (size === 0) {
      return -1;
    }
    size >>= 1; // Half rounded down
    if (haystack[start + size] === needle) {
      return start + size;
    }
    else if (needle > haystack[start + size]) {
      start = start + size + 1;
    }
    return slicer();
  };
  return slicer();
};

module.exports = chop;

