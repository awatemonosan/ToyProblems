// JavaScript provides a built-in parseInt method.

// It can be used like this:

// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

// You are asked to write a myParseInt method with the following rules:

// It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10


function myParseInt(str) {
  function isWhitespace(char){
    return ' \t\n\r\v'.indexOf(char) !== -1;
  }

  // return NaN if the argument is not a string
  if(typeof(str)!='string') return NaN;
  
  // move past all the white space
  var i = 0;
  for(; i < str.length; i++){
    if(!isWhitespace(str[i])) break;
  }
  
  // if nothing is left then return NaN
  // Example: "    "
  if(i === str.length) return NaN;
  
  var result = 0;
  // itterate through the non-whitespace
  for(; i < str.length; i++){
    var char = str[i];
    if(isWhitespace(char)){
      // If we have reached whitespace again, bail out
      break;
    } else if(char>='0' && char<='9'){
      // If the character is a number than add it into our results
      result *= 10;
      result += char.charCodeAt(0) - '0'.charCodeAt(0);
    } else {
      // if the character is not whitespace and not a nubmer then NaN
      // Examples: " 1a ", "cheese", "900o"
      return NaN;
    }
  }
  
  // itterate throught the rest of the characters
  for(; i < str.length; i++){
    if(!isWhitespace(str[i])){
      // if its not whitespace then NaN
      // example: "1 1 "
      return NaN;
    }
  }
  
  // return the result
  return result;
}

// Test.assertEquals(myParseInt("1"), 1);
// Test.assertEquals(myParseInt("  1 "), 1);
// Test.assertEquals(myParseInt("08"), 8);
// Test.expect(isNaN(myParseInt("5 friends")));
// Test.expect(isNaN(myParseInt("16.5")));
// Test.expect(isNaN(myParseInt("")));
// Test.expect(isNaN(myParseInt(" 1 1 ")));