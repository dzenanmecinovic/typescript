/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Write a generic function that accepts a generic array returning the last item of the array
*/

function returningLastItem<T>(elements: Array<T>): T {
  return elements[elements.length - 1];
}

console.log(returningLastItem([312, 123, 513, 642, 465, 346, 23, 432]));
console.log(returningLastItem(["HI", true, false]));
