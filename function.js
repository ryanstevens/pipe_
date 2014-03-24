

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
      if (funcs.filter && !funcs.filter(line)) return;
      cb(null, funcs.map(line));
    };
  }
}
