
module.exports = function(fns, callback) {
  var count = 0;
  var len = fns.length;
  var error;
  var called;

  if (!len) return process.nextTick(callback);

  for (var i = 0; i < len; i++) {
    fns[i](done);
  }

  function done(err) {
    error = error || err;
    if (!called && (error || ++count === len)) {
      callback(error);
      called = true;
    }
  }
};
