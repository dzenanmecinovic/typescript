/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Write a function that adds or subtracts 1 from a number based on a boolean evaluation.
If the boolean is true, it adds 1 otherwise subtracts 1 from the number
*/

function addOrSubstract(num: number, base: boolean): number {
  return base === true ? num + 1 : num - 1;
}

console.log(addOrSubstract(5, true));
console.log(addOrSubstract(5, false));
