"use strict";
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "Apple";
    FavoriteProduct[FavoriteProduct["ID"] = 1] = "ID";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(FavoriteProduct);
