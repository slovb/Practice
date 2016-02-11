var decode = function(timetable) {
  var output = [];
  var length = timetable.length;
  for (var i = 0; i < length; ++i) {
    var row = timetable[i].split(' ');
    output.push({
      start: parseInt(row[0]),
      end: parseInt(row[1]),
      name: row.slice(2).join(' ')
    });
  }
  return output;
};

var intersect = function(x, y) {
  if (x.end <= y.start || y.end <= x.start) {
    return false; 
  }
  return true;
};

var solve = function(timetable) {
  var decoded = decode(timetable);
  return [
    '',
    '',
    ''
  ];
};

// Export solver
exports.solve = solve;

// Export internals for testing
exports.internals = {
  decode: decode,
  intersect: intersect
};

