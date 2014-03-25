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

test('filter', function(t) {
  var fn = func.create({
    f : 'x.indexOf("foo")>=0'
  });
  
  fn('bar', function(err, result) {
    t.ok(err.indexOf("NOT MATCHED") >=0, "Should have an error");
    fn('foo bar', function(err, result) {
      t.ok(result);
      t.end();
    });
  });
});
