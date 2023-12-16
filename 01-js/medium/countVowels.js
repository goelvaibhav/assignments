/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// unresolved

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let ar = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for(let i =0;i<str.length;i++){
      for(let v = 0;v<ar.length;v++){
        if( ar[v] == (str.charAt(i))  ){
          count++;
          break;
        }
      }
    }
    console.log(count);
}
//countVowels("abcdefghijklmnopqurstuvwxyz")

module.exports = countVowels;