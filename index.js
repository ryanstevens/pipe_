#!/usr/bin/env node

var split = require('split'),
  fs = require('fs'),
  argv = require('optimist')
    .describe('m', 'Function body expression to run.')
    .alias('m', 'map')
    .demand('m')
    .argv;

var map = new Function("x", "return " + argv.m);

process.stdin.setEncoding('utf8');
process.stdin.pipe(split()).on('data', function(line) {
  if (line) console.log(map(line));
});
process.on('end', function() {
  process.exit();
});

process.stdin.resume();
