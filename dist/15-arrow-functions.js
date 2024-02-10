"use strict";
let holidaySales2 = (product, sales, tax, discount) => {
    let price = 0;
    if (product === "laptops")
        price = 900;
    if (product === "monitors")
        price = 350;
    if (product === "keyboards")
        price = 25;
    let totalSalesForIndividualProduct = price * sales;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
};
