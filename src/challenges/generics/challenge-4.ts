/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function whose return type is a generic array of numbers. Add some values as well.
*/

function genericArr4(): Array<number> {
  let numArr = [];
  numArr.push(15);
  numArr.push(35);
  return numArr;
}

console.log(genericArr4());
