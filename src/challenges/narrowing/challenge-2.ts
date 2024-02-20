/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a function that returns the first item of an array.
The function must accept either a generic array or a single item irrespective of type.
If a single item has been passed, then the function simply returns the item. 
*/

// function returnItem<T>(arg: Array<T> | T): T {
//   return Array.isArray(arg) ? arg[0] : arg;
// }

// console.log(returnItem<number>(50));
// console.log(returnItem<boolean | string | number>(["A", 2, false, 41, 3154]));
// ako ne specifikujemo tip podatka onda array prihvata bilo koju vrednost
