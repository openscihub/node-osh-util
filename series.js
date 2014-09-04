
module.exports = function(fns, callback) {
  (function _run(pos) {
    fns[pos](function(err) {
      if (err || ++pos === fns.length) {
        callback(err);
      }
      else _run(pos);
    });
  })(0);
};
