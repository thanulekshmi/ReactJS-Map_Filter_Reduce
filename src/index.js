import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter((x) => x > 10);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reduceNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduceNumbers);

//Find - find the first item that matches from an array.
const findNumbers = numbers.find((x) => x > 10);
console.log(findNumbers);

//FindIndex - find the index of the first item that matches.
const findNumbersIndex = numbers.findIndex((x) => x > 10);
console.log(findNumbersIndex);

const newArray = emojipedia.map((x) => x.meaning.substring(0, 100));
console.log(newArray);
