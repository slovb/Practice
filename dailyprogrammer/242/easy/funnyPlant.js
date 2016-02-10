var simulation = function(people, plants) {
  var harvest = 0;
  var plantation = Array(plants).fill(0);
  for (var week = 1; harvest < people; week += 1) {
    plantation = plantation.map(function(value) { return value + 1; }); // Increment each plants production
    harvest = plantation.reduce(function(prev, curr) { return prev + curr }, 0); // Harvest plants
    plantation = plantation.concat(Array(harvest).fill(0)); // Plant fruits
  }
  return week;
};

var simplified = function(people, plants) {
  var harvest = 0;
  for (var week = 1; harvest < people; week += 1) {
    harvest += plants; // The harvest increases with 1 per plant
    plants += harvest; // The number of plants increase with 1 per fruit harvested
  }
  return week;
};

exports.funnyPlant = simplified;

