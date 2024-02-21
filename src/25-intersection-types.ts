// // intersection types

// type ProductProperties = {
//   id: number;
//   category: string;
//   name: string;
//   price: number;
//   stock: number;
// };

// type ProductDiscounts = {
//   discounts(): void;
// };

// type ProductSeasonalSales = {
//   holidaySales(): void;
// };

// type ProductSubscription = {
//   subscription(): void;
// };

// type ProductShipping = {
//   shipping(): void;
// };

// // mother type (intersection type, & is the same thing as the logical operator)
// type Product = ProductProperties &
//   ProductDiscounts &
//   ProductSeasonalSales &
//   ProductSubscription &
//   ProductShipping;

// const alanWrench: Product = {
//   id: 1,
//   category: "Hardware",
//   name: "Alan Wrench",
//   price: 12.0,
//   stock: 0,

//   discounts: () => {},
//   holidaySales: () => {},
//   subscription: () => {},
//   shipping: () => {},
// };

// console.log(alanWrench);

// const tapeMeasure: Product = {
//   id: 1,
//   category: "Hardware",
//   name: "Tape Measure",
//   price: 2.99,
//   stock: 23,

//   discounts: () => {},
//   holidaySales: () => {},
//   subscription: () => {},
//   shipping: () => {},
// };

// console.log(tapeMeasure);
