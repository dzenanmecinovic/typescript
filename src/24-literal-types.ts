/* literal type could look like a number,
boolean, string, whatever...
literally all the nums, strings, bools,
they could be a literal type.
if you provide any value where typescript expects
a type - IT IS A TYPE! */

let myNumber: 7 = 7; /* <-- TYPE. Cannot accept 
anything aside from the value 7 */

let myString: "Dzenan" = "Dzenan"; /* It looks like a string but
it's not a string value, it is a TYPE that looks like 
a string. */

type CourseDiscounts = 25 | 35 | 45 | 75; // <-- TYPES

let courseDiscounts: CourseDiscounts = 35; // this variable can only hold LITERALLY 25, 35, 45, or 75.

// ------------------------------------------------------
let tip2 = (billAmount: number, tipPercentage: 0.15 | 0.2 | 0.25): number => {
  if (typeof tipPercentage === "number") {
    return billAmount * tipPercentage;
  } else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
};

let tipAmount2 = tip(100, 0.2);
// let tipAmount2 = tip2(100, "20 percent"); // wont work
console.log(tipAmount2);
// ------------------------------------------------------

type FrontendWebDev = "HTML" | "CSS" | "JavaScript" | "Angular";

// let frontendPathIncludes: FrontendWebDev = "Angular";
