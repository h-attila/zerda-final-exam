// Attila exam #16

// Create a function that takes a list of strings and a letter and returns a string where the strings are joined with the given letter like: ["ab", "cde", "fg"] and " " becomes "ab cde fg"

let stringList = ['alma', 'korte', 'barack', 'szilva'];
let spacer = '_';

// ÷÷÷÷÷÷÷÷÷÷÷÷÷
// SOLUTION #1
// ÷÷÷÷÷÷÷÷÷÷÷÷÷

function stringJoiner (list, letter) {
  let result = '';
  for (i=0; i < list.length; i++) {
    if (i < list.length-1) {
      result += list[i] + letter;
    } else {
      result += list[i];
    }
  }
  return result;
};

// ÷÷÷÷÷÷÷÷÷÷÷÷÷
// SOLUTION #2
// ÷÷÷÷÷÷÷÷÷÷÷÷÷

function stringJoiner_2 (list, letter) {
  let result = '';
  for (i=0; i < list.length; i++) {
    (i < list.length-1) ? result += list[i] + letter : result += list[i];
    }
  return result;
};

// ÷÷÷÷÷÷÷÷÷÷÷÷÷
// SOLUTION #3
// ÷÷÷÷÷÷÷÷÷÷÷÷÷

function stringJoiner_3 (list, letter) {
  let result = '';
  for (i=0; i < list.length-1; i++) {
      result += list[i] + letter;
    }
  return result + list[list.length-1];
};


console.log(stringJoiner(stringList, spacer));
console.log(stringJoiner_2(stringList, spacer));
console.log(stringJoiner_3(stringList, spacer));
