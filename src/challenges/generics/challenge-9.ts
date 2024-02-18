/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Write a generic function that returns the length of an array. Test with several types
*/

function lengthArr<T>(elements: Array<T>): number {
  return elements.length;
}

console.log(lengthArr([1, 2, 3, 1, 2, 3, 4, 2, 1]));
console.log(lengthArr([1, 2, 3, 1, "@#", "Hello"]));
console.log(lengthArr(["@#", "Hello", false]));
