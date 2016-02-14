var chop = function(needle, haystack) {
  if (haystack.length === 0) {
    return -1;
  }
  var start = 0;
  var end = haystack.length - 1;
  var mid = start + Math.floor((1 + end - start) / 2);
  var value = haystack[mid];
  do {
    if (needle === value) {
      return mid;
    }
    else if (needle < value) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
    mid = start + Math.floor((1 + end - start) / 2);
    value = haystack[mid];
  } while (end - start > 0);
  if (needle === value) {
    return mid;
  }
  return -1;
};

module.exports = chop;

