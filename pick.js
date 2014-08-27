module.exports = function(obj, names) {
  var result = {};
  var name;
  for (var i = 0, len = names.length; i < len; i++) {
    name = names[i];
    result[name] = obj[name];
  }
  return result;
};
