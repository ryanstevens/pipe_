var func = require('../function');
var test = require('tap').test;

test('map', function(t) {
  var fn = func.create({
    m : "x+3"
  });

  fn('m', function(err, result) {
    t.ok(result === 'm3');
    t.end();
  });
});


