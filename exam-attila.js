// Attila exam

// Create a function that takes a list of strings and a letter and returns a string where the strings are joined with the given letter like: ["ab", "cde", "fg"] and " " becomes "ab cde fg"

let stringList = ['alma', 'korte', 'barack', 'szilva'];
let spacer = '_';

function stringJoiner (string, letter) {
  let result = '';
  for (i=0; i < 4; i++) {
    if (i < string.length-1) {
      result += string[i] + letter;
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(stringJoiner(stringList, spacer));
