(function(undefined) {
  var example = function() {
    return document.getElementById('container').addDiv('example');
  };

  var nop = function(val) {
    return val; 
  };

  example()
    .header('?')
    .left('Hej')
    .right('Hej');

  example()
    .header('!?')
    .left(true)
    .right(!true);

  example()
    .header('? + 5')
    .left(Math.sqrt(2))
    .right(Math.sqrt(2) + 5);

  (function() {
    var param = ['Hey', 'how', 'are', 'you', '?'];
    example()
      .header('_.map(?, nop)')
      .left(param)
      .right(_.map(param, nop));
  })();

  (function() {
    var param = [true, false, 1, 2];
    example()
      .header('_.map(?, nop)')
      .left(param)
      .right(_.map(param, nop));
  })();
})();

