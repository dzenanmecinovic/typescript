/* *-*-*-*-*-*-*-*-*-*-* Challenge 8 ------------------
Add a type for the function that means it takes no arguments and returns a string
*/

type SomeFunc = () => string;

const result: SomeFunc = () => "TS Bootcamp";
console.log(result());
