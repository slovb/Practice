HTMLElement.prototype.build = (function() {
  var build = function(context, tag, element) {
    if (element instanceof HTMLElement) {
      return context.appendChild(element);
    }
    var child = document.createElement(tag);
    child.className = typeof element;
    if (typeof element === 'object') {
      if (Array.isArray(element)) {
        child.className = 'array';
        _.each(element, builder(child));
      }
      else {
        // TODO: a view that includes keys
        _.each(element, builder(child));
      }
    }
    else {
      child.appendChild(document.createTextNode(element));
    }
    return context.appendChild(child);
  };

  var builder = function(context, tag) {
    if (context === undefined) {
      context = document.getElementById('container');
    }
    if (tag === undefined) {
      tag = 'div';
    }
    return function(element) {
      build(context, tag, element);
    };
  };

  return function(tag, element) { 
    return builder(this, tag)(element);
  };
})();

HTMLElement.prototype.addDiv = function(className) {
  var element = document.createElement('div');
  element.className = className;
  this.appendChild(element);
  return element;
};


HTMLElement.prototype.header = function(element) {
  this.addDiv('header').build('h1', element);
  return this;
};

HTMLElement.prototype.left = function(element) {
  this.addDiv('left').build('div', element);
  return this;
};

HTMLElement.prototype.right = function(element) {
  this.addDiv('right').build('div', element);
  return this;
};

