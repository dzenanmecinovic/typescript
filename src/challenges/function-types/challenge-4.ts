/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Write a function that returns an inverted boolean value
*/

function inverted(arg: boolean): boolean {
  return arg === true ? false : true;
  // ili !arg;
}

console.log(inverted(false));
