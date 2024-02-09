"use strict";
var ProductIds;
(function (ProductIds) {
    ProductIds[ProductIds["Apple"] = 1] = "Apple";
    ProductIds[ProductIds["Kiwi"] = 2] = "Kiwi";
    ProductIds[ProductIds["Banana"] = 3] = "Banana";
})(ProductIds || (ProductIds = {}));
console.log(ProductIds);
