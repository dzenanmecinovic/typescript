"use strict";
let productName;
productName = (product, price = 0) => {
    return `${product} costs $${price}.`;
};
console.log(productName("Screwdriver"));
