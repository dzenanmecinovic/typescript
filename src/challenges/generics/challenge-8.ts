/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Write a generic function that simply returns its argument. Test with several types
*/

function returnArgument<T>(argument: T): T {
  return argument;
}

console.log(returnArgument("A"));
console.log(returnArgument(7));
console.log(returnArgument([1, 2, 3]));
console.log(returnArgument(false));
