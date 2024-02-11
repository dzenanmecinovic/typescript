let discount: number;

function specialDiscount(holidaySeason: boolean): number {
  if (holidaySeason) {
    return (discount = 0.25);
  } else {
    return (discount = 0.15);
  }
}

// let holidayDiscount = specialDiscount(true); // 0.25
// let holidayDiscount = specialDiscount(null);
let holidayDiscount = specialDiscount(undefined);

console.log(holidayDiscount);
