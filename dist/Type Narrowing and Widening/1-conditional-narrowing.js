"use strict";
function itemOrItems(item) {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.productName;
    }
}
console.log(itemOrItems({ productName: "Laptop" }));
console.log(itemOrItems([
    { productName: "Laptop" },
    { productName: "TV" },
    { productName: "Smartphone" },
]));
