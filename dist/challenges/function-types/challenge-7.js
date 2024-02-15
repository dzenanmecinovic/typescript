"use strict";
function callAnotherFunc(func) {
    return func(10.99, "TS");
}
let caller = callAnotherFunc((price, course) => `The ${course} course has a price of ${price}`);
console.log(caller);
