// type MixedTypes =
//   | "Hi"
//   | 666
//   | ["TS", "JS"]
//   | { name: "TS"; price: number }
//   | "Hey"
//   | { name: "JS"; price: number }
//   | 13
//   | { name: "Python"; price: 11.99 }
//   | [12, 13, 14, 15];

// // extract is used to extract the part of a type that we need
// // exclude is reverse

// type Strings = Extract<MixedTypes, string>;
// type Numbers = Extract<MixedTypes, number>;
// type StringArrays = Extract<MixedTypes, string[]>;
// type Product = Extract<MixedTypes, { name: "TS" }>;
// type Products = Extract<MixedTypes, { price: number }>;
// type ProductsArr1 = Extract<MixedTypes, []>; // type never (by definition of Extract)
// type ProductsArr2 = Extract<MixedTypes, string[]>;
// type ProductsArr3 = Extract<MixedTypes, number[]>;
