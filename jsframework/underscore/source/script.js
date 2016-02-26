(function() {
  var container = document.getElementById('container');

  var paint = function(element) {
    var paintInto = function(element, target) {
      var child = document.createElement('div');
      if (typeof element === 'string') {
        child.className = 'string';
        child.appendChild(document.createTextNode(element));
      }
      else if (typeof element === 'object') {
        if (Array.isArray(element)) {
          child.className = 'array';
          var painter = function(element) { // TODO: Resolve this silliness with better designed recursion
            paintInto(element, child);  
          };
          _.each(element, painter);
        }
      }
      target.appendChild(child);
    };
    paintInto(element, container);
  };

  var paintTitle = (function() {
    var i = 0;
    return function(title) {
      i += 1;
      var child = document.createElement('h1');
      child.appendChild(document.createTextNode(i + ': ' + title));
      container.appendChild(child);
    };
  })();

  paintTitle('Foo');
  paint(['Hey', 'how', 'are', 'you', '?']);
  paintTitle('Bar');
  _.each(['Hey', 'how', 'are', 'you', '?'], paint);
})();

