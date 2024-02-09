"use strict";
var ProductNames;
(function (ProductNames) {
    ProductNames["product1"] = "Apple";
    ProductNames["product2"] = "Kiwi";
    ProductNames["product3"] = "Banana";
})(ProductNames || (ProductNames = {}));
console.log(ProductNames);
