// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5 /* , "hi" */]; // type is string | number
// ako dodamo type number a u nizu se nalazi jos nesto osim brojeva, dobijamo gresku
// [] <= array syntax

console.log(numbers);

// Array of strings
let strings: string[] = ["Hi", "Hello", "Greetings"];
console.log(strings);

// Array of strings and numbers
let mixData1: (string | number)[] = [2, "hi"]; // in TS logical 'or' operator is just |
console.log(mixData1);

// Array of strings, numbers and booleans
let mixData2: (string | number | boolean)[] = [2, "hi", true]; // in TS logical 'or' operator is just |
console.log(mixData2);

// nested number type array
let myNums: number[][] = [
  [1, 2],
  [2, 3],
];

// nested string type array
let myStrings: string[][] = [
  ["first", "second"],
  ["third", "fourth"],
];
console.log(myStrings);

// nested string & number type array
let mixDataNested: (string | number)[][] = [
  [1, 2],
  ["first", "second"],
  ["third", "fourth"],
];
console.log(mixDataNested);
