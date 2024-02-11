"use strict";
let discount;
function specialDiscount(holidaySeason) {
    if (holidaySeason) {
        return (discount = 0.25);
    }
    else {
        return (discount = 0.15);
    }
}
let holidayDiscount = specialDiscount(undefined);
console.log(holidayDiscount);
