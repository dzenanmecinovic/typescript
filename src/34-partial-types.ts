// type Product2 = {
//   name?: string;
//   price?: number;
// };

// let kurs: Product2 = { name: "TS" };

// ---------------------------------------------
// Mapped Types - extremely important concept

// type Product2 = {
//   name: string;
//   price: number;
// };

// let kurs: Partial<Product2> = {};
// kurs.name = "JS";
// kurs.price = 24;

// let imeKursa: string = kurs.name; // 'undefined' is not assignable to a type 'string'
