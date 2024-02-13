/* union types allow us to type annotate more than
one type to a variable or a function parameter */

let firstPassword: number | string = "12345";
firstPassword = 12345;

// ------------------------------------------------------
let tip = (billAmount: number, tipPercentage: string | number): number => {
  if (typeof tipPercentage === "number") {
    return billAmount * tipPercentage;
  } else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
};

let tipAmount = tip(100, "20 percent");
console.log(tipAmount);
