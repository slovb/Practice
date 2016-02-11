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
}

var vhs = function(timetable) {
  var decoded = decode(timetable);
  return [
    undefined,
    undefined,
    undefined
  ];
};

exports.vhs = vhs;

