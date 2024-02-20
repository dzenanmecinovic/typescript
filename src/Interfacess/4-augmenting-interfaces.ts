// interface ProizvodInterface {
//   name: string;
//   price: number;
// }
/* Dva interfejsa mogu da imaju isto ime, to se zove
Augmenting Interfaces ili Interface Merging */
// interface ProizvodInterface {
//   rating: number;
//   sales: number;
// }

// type Name = string;
// type Name = string;
// Error => Duplicate identifier

// const kurs: ProizvodInterface = {
//   name: "Angular Kurs", // 1. interface
//   price: 20, // 1. interface
//   rating: 5, // 2. interface
//   sales: 100, // 2. interface
// };

// ------------------------------------------------

// interface ProizvodInterface {
//   name: string;
//   price: number;
// }

// interface ProizvodInterface {
//   //   price: string; // error, mora biti number kao u prvom interfejsu
//   price: number;
//   rating: number;
//   sales: number;
// }

// const kurs: ProizvodInterface = {
//   name: "Angular Kurs", // 1. interface
//   price: 20, // 1. interface
//   rating: 5, // 2. interface
//   sales: 100, // 2. interface
// };

// ------------------------------------------------

// interface ProizvodInterface {
//   name: string;
//   price: number;
// }

// const kurs: ProizvodInterface = {
//   name: "Angular Kurs", // 1. interface
//   price: 20, // 1. interface
//   rating: 5, // 2. interface
//   sales: 100, // 2. interface
// };

// interface ProizvodInterface {
//   // svi ovi propertiji migriraju u prvi interfejs
//   rating: number;
//   sales: number;
// }

// console.log(kurs);
