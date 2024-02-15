"use strict";
const onlineCourse5 = { name: "TS Bootcamp", price: 10.99 };
const product5 = Object.assign(Object.assign({}, onlineCourse5), { released: true });
console.log(product5);
