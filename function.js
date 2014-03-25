var select = require('JSONSelect');

module.exports = {
  create : function(argv) {
    var funcs = {};
    if (argv.m) {
      funcs.map = new Function("x", "return " + argv.m)
    };

    if (argv.f) {
      funcs.filter = new Function("x", "return ( " + argv.f + " )");
    }
    
  
    return function run(line, cb) {
      if (funcs.filter && !funcs.filter(line)) return cb('NOT MATCHED::' + line);
      if (funcs.map) line = funcs.map(line);
      if (argv.s) {
        line = line.trim();
        //take care of elements in an array 
        if (line.charAt(line.length-1) === ',') line = line.substring(0, line.length-1);
        if (typeof line === 'string') {
          try { line = JSON.parse(line); }
          catch(e) { return cb('JSON parse error', null); }
        }
        
        var val = select.match(argv.s, null, line);
        if (val.length === 1) {
          if (typeof val[0] === 'string') line = val[0]; 
          else line = JSON.stringify(val[0]);
        }
        else line = null;
      }
      cb(null, line);
    };
  }
}
