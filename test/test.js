var expect = require('expect.js');

describe('parallel', function() {
  var parallel = require('../parallel');

  it('should work', function(done) {
    var dt = 80;
    var start = new Date();

    parallel([
      function(done) {
        setTimeout(done, dt);
      },
      function(done) {
        setTimeout(done, dt);
      }
    ], function(err) {
      expect(err).to.be(undefined);
      expect(new Date() - start).to.be.lessThan(2 * dt);
      done();
    });
  });

  it('should work with zero tasks', function(done) {
    var async = false;
    parallel([], function() {
      expect(async).to.be.ok();
      done();
    });
    async = true;
  });
});

describe('series', function() {
  var series = require('../series');

  it('should work', function(done) {
    var v = 0;
    series(
      [
        function(done) {
          setTimeout(function() {
            expect(v).to.be(0);
            v = 1;
            done();
          }, 33);
        },
        function(done) {
          setTimeout(function() {
            expect(v).to.be(1);
            done();
          }, 33);
        }
      ],
      done
    );
  });
});
