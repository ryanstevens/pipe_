#!/usr/bin/env node

var split = require('split'),
  fs = require('fs'),
  argv = require('optimist')
    .describe('m', 'Function body expression to run.')
    .describe('f', 'This is pretty much grep')
    .describe('s', 'JSONSelect expression')
    .alias('m', 'map')
    .alias('f', 'filter')
    .alias('s', 'select')
    .argv,
  func = require('./function').create(argv);

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.pipe(split()).on('data', function(line) {
  if (line) {
    func(line, function(err, result) { 
      if (result) console.log(result);
    });
  }
});
process.on('end', function() {
  process.exit();
});

