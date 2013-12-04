pipe-map
========

Crazy small utility to pipe in stream and transform each line on the fly

Specify a string as parameter "-m" and that expression will be evaluted and returned to standard out.  

##Pass through example

  pipe-map -m "x"

  technically compiles to

  function(x) { return x }

##Append String Example

  pipe-map -m "x+'foo'"

  technically compiles to

  function(x) { return x + 'foo' }