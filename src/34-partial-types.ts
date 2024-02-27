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

// let kurs: Partial<Product2> = {
//   name: "JS",
// };
// kurs.price = 24;

// let imeKursa1: string = kurs.name; // 'undefined' is not assignable to a type 'string'
// console.log(imeKursa1);

// prilikom kreiranja koristimo Partial<Type> kako bismo
// mogli da kreiramo objekat samo sa onim propertijima koje zelimo da imamo unutar tog objekta.
