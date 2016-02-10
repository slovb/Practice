exports.funnyPlant = function(people, plants) {
  var harvest = 0;
  var plantation = Array(plants).fill(0);
  for (var week = 1; harvest < people; week += 1) {
    plantation = plantation.map(function(value) { return value + 1; }); // Increment each plants production
    harvest = plantation.reduce(function(prev, curr) { return prev + curr }, 0); // Harvest plants
    plantation = plantation.concat(Array(harvest).fill(0)); // Plant fruits
  }
  return week;
};

