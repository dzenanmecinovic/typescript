let holidaySales2 = (
  product: string,
  sales: number,
  tax: number,
  discount: number
): number => {
  //   let department: string = "Tech";

  // if function does not return anything, then it is returning 'void' (nothing)
  let price: number = 0;

  if (product === "laptops") price = 900;
  if (product === "monitors") price = 350;
  if (product === "keyboards") price = 25;

  //   return 'cool'; // function is type NUMBER
  let totalSalesForIndividualProduct: number = price * sales;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
};
