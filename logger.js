var prefixes = [];
var width = 0;

function addPrefix(newPrefix) {
  if (newPrefix.length > width) {
    width = newPrefix.length;
  }
  var len = prefixes.push(newPrefix);

  // Expand all.
  prefixes.forEach(function(prefix, index) {
    for (var i = prefix.length; i < width; i++) {
      prefix += ' ';
    }
    prefixes[index] = prefix;
  });

  return len - 1;
}

module.exports = function(prefix) {
  // Pad or truncate prefix for prettiness.
  var index = addPrefix(prefix);
  return function() {
    var args = Array.prototype.concat.apply([prefixes[index], '--'], arguments);
    console.log.apply(console, args);
  };
};
