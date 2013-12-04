pipe-map
========

Crazy small utility to pipe in stream and transform each line on the fly

Specify a string as parameter "-m" and that expression will be evaluted and returned to standard out.  

###Installation

  npm install pipe-map -g

###Usage Example

  cat phone_numbers.txt | pipe-map -m "'1-'+x"

###Pass through expression

  pipe-map -m "x"

  technically compiles to

  function(x) { return x }

###Append string expression

  pipe-map -m "x+'foo'"

  technically compiles to

  function(x) { return x + 'foo' }
  
  
