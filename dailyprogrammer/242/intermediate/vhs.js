// Decode a timetable into favorites and programs
var decode = function(timetable) {
  var favorites = [];
  var programs = [];
  var length = timetable.length;
  for (var i = 0; i < length; ++i) {
    if (timetable[i].match(/^\d\d\d\d \d\d\d\d/) !== null) { // A row starting with 4 numbers space 4 numbers is a program
      var row = timetable[i].split(' ');
      programs.push({
        start: parseInt(row[0], 10),
        end: parseInt(row[1], 10),
        name: row.slice(2).join(' ')
      });
    }
    else { // It not a program, it is a favorite
      favorites.push(timetable[i]); 
    }
  }
  return {
    favorites: favorites,
    programs: programs
  };
};

// True iff the two given programs intersect
var intersect = function(x, y) {
  if (x.end <= y.start || y.end <= x.start) {
    return false; 
  }
  return true;
};

// Return a maximal path given the timetable
var solve = function(timetable) {
  var decoded = decode(timetable);

  // Using the current candidate set filter out intersecting timeslots
  var filterGenerator = function(candidates) {
    return function(interval) {
      for (var i = 0; i < candidates.length; ++i) {
        if (intersect(candidates[i], interval)) {
          return false;
        }
      }
      return true;
    };
  };

  // Search to find optimal subpath
  var search = function(path) {
    path = path || [];
    var choices = decoded.programs.filter(filterGenerator(path));
    var best = path;
    for (var i = 0; i < choices.length; ++i) { // Try every viable choice
      var candidate = search(path.concat(choices[i])); 
      if (candidate.length > best.length) {
        best = candidate;
      }
    }
    return best;
  }

  // Build initial path from favorites, assuming a program only appears airs once
  var favoritesPath = function() {
    var path = [];
    for (var i = 0; i < decoded.favorites.length; ++i) { // Add every favorite
      var choices = decoded.programs.filter(filterGenerator(path));
      for (var j = 0; j < choices.length; ++j) {
        if (decoded.favorites[i] === choices[j].name) {
          path.push(choices[j]);
        }
      }
    }
    if (path.length !== decoded.favorites.length) {
      throw Exception('Unable to record favorites');
    }
    return path;
  };

  // Solve and extract names
  return search(favoritesPath()).map(function(value) {
    return value.name;
  });
};

// Export solver
exports.solve = solve;

// Export internals for testing
exports.internals = {
  decode: decode,
  intersect: intersect
};

