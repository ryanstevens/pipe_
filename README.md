pipe_
========

Crazy small CLI utility to pipe in a stream and transform each line on the fly

Specify a string as parameter "-m" and that expression will be evaluted and returned to standard out.  

###Installation

  npm install pipe_ -g

###Usage Example

  cat phone_numbers.txt | pipe_ -m "'1-'+x"

###Pass through expression

  pipe_ -m "x"

  technically compiles to

  function(x) { return x }

###Append string expression

  pipe_ -m "x+'foo'"

  technically compiles to

  function(x) { return x + 'foo' }
  
  
