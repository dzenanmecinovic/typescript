/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Write a function that adds 1 to a number, subtracts 1 from a number or does nothing to a number based on a condition. First argument is a number and second argument is either “add”, “subtract” or “do nothing”
*/

function peti(
  broj: number,
  operacija: "add" | "subtract" | "do nothing"
): number {
  if (operacija === "add") {
    return broj + 1;
  } else if (operacija === "subtract") {
    return broj - 1;
  } else return broj;
}

console.log(peti(24, "subtract"));
