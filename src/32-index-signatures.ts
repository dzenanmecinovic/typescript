// type Product2 = {
//   name: string;
// };

// let kurs: Product2 = {
//   name: "TypeScript Bootcamp",
//   price: 10.99,
// };

// -------------------------------------------------------
// type Product2 = {
//   //   [k: string]: string; // <= 'k' je samo placeholder za ime propertija (key)
//   [courseNames: string]: string;
// };

// let kurs: Product2 = {
// }; // sve dok se tipovi podudaraju mozemo dodavati propertije
// -------------------------------------------------------
// type Product2 = {
//   [isPriced: string]: boolean;
//   released: boolean;
// };

// const kurs: Product2 = {
//   TS: true,
//   JS: true,
//   released: false,
// };
// -------------------------------------------------------
// type Product2 = {
//   [price: string]: number;
//   released: boolean;
// };

// const kurs: Product2 = {
//   TS: true, // Type 'boolean' is not assignable to type 'number'.ts(2322)
//   JS: true,
//   released: false,
// };
// -------------------------------------------------------
// dictionary je nesto u JS i TS cija je vrednost tipa objekat.

// type Dictionary = { [k: string]: { name: string; price: number } };

// const kurs: Dictionary = {
//   TS: { name: "TS Bootcamp", price: 12.0 },
//   JS: { name: "JS Bootcamp", price: 15.0 },
//   Python: { name: "Python Bootcamp", price: 20.0 },
// };
