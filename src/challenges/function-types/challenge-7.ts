/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
What will the function invocation result in?
*/

function callAnotherFunc(func: (price: number, course: string) => string) {
  return func(10.99, "TS");
}

let caller = callAnotherFunc(
  (price, course) => `The ${course} course has a price of ${price}`
);

console.log(caller);
