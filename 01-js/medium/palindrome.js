/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
  user needs to remove space and also remove any special charaters appearing in string, just the character values have to be considered
*/

function isPalindrome(str) {
  var str2 = "";
  
  str = str.toLowerCase();
  for(var i = 0;i< str.length;i++){
    if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
      str2 = str2 + str.charAt(i);
    }
  }

  for(var i = 0;i<str2.length/2;i++){
    if(str2[i] != str2[str2.length -i -1])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
