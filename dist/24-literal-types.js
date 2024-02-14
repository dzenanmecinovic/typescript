"use strict";
let myNumber = 7;
let myString = "Dzenan";
let courseDiscounts = 35;
let tip2 = (billAmount, tipPercentage) => {
  if (typeof tipPercentage === "number") {
    return billAmount * tipPercentage;
  } else {
    let calculatedTip = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
};
let tipAmount2 = tip2(100, 0.2);
console.log(tipAmount2);
let frontendPathIncludes = "Angular";
