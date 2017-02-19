const myArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];


// map
console.log('example: map');

let newArray = myArray.map( function (item) {
  return item * 2;
});
console.log(newArray);


// every
console.log('example: every');
let resultEvery = myArray.every( function (item) {
  return item > 0;
});
console.log(resultEvery); // return false


// some
console.log('example: some');
let resultSome = myArray.some( function (item) {
  return item > 0;
});
console.log(resultSome); // return true


// filter
console.log('example: filter');
let resultFilter = myArray.filter( function (item) {
  return item % 2 == 0;
});
console.log(resultFilter);


// counting items
console.log(`items in newArray: ${newArray.length}`);


// indexOf
console.log('example: indexOf');
var isItemOfArray = function (item, array) {
  let index = array.indexOf(item);
  if (index >= 0) {
    console.log(`item index in array: ${index}`);
    return true;
  };
  return false;
};
console.log(isItemOfArray(5, myArray));
console.log(isItemOfArray(15, myArray));
