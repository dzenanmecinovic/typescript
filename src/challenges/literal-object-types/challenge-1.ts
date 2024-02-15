/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Write a function that takes a literal object with one property of name and simply returns the name
*/

function literalObject({ name }: { name: string }): string {
  return name;
}

console.log(literalObject({ name: "Dzenan" }));
