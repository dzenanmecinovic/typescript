/* *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
Create a function whose return type is a generic array of array of strings. Add some values as well.
*/

function genericArr6(): Array<Array<string>> {
  let newArr = [];
  newArr.push(["Hello"]);
  newArr.push(["Ok"]);
  return newArr;
}

console.log(genericArr6());
