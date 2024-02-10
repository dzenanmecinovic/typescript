let holidaySales1 = function (
  product: string,
  sales: number,
  tax: number,
  discount: number,
  _dept: string = ""
): number {
  // if function does not return anything, then it is returning 'void' (nothing)
  let price: number = 0;

  if (product === "pens") price = 29;
  if (product === "erasers") price = 19;
  if (product === "pencils") price = 59;

  //   return 'cool'; // function is type NUMBER
  let totalSalesForIndividualProduct: number = price * sales;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
};

const pens: number = holidaySales1("pens", 20, 0.15, 0.25);
const erasers: number = holidaySales1("erasers", 15, 0.12, 0.15);
const pencils: number = holidaySales1("pencils", 50, 0.08, 0.45);

console.log(`The total profit from the sales of sunglasses1 is $${pens}`);
console.log(`The total profit from the sales of hats1 is $${erasers}`);
console.log(`The total profit from the sales of shoes1 is $${pencils}`);
