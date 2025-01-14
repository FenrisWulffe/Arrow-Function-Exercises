// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = (arr) => {arr.map((val) => (val * 2))};

// Solution:
// const double = arr => arr.map(val => val * 2);


// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

const squareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => (num ** 2));
  let evens = squares.filter(square => (square % 2 === 0));
  return evens;
}

// Solution:
// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)