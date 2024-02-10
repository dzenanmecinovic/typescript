/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Create a function that takes an array of tuples consisting of two properties, a name and an age.
Return the names in a string array.
*/

type Person = [string, number]; // tuple

function tupleChall(arr: Person[]): string[] {
  return arr.map(([name, _]) => name);
}

console.log(
  tupleChall([
    ["Prvi", 20],
    ["Drugi", 18],
    ["Treci", 32],
  ])
);
