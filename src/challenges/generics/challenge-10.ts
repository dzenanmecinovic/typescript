/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Write a generic function which accepts an array of strings returning the 5th item
*/

function returningTheFifth<T>(elements: Array<T>): T {
  return elements[4];
}

console.log(returningTheFifth(["hey", "hello", "meow", "UwU", "Fifth Item"]));
