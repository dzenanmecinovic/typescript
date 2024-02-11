"use strict";
function printHello() {
    console.log("Hello");
}
let productCategory;
let shoppingCart = (category) => {
    productCategory = category;
};
console.log(shoppingCart("Tech"));
let movieName = undefined;
