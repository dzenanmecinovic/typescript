"use strict";
function itemOrItems(item) {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.productName;
    }
}
