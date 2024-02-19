// ---------------------- typeof ----------------------
// function getProdcutPrice(product: string | number): number {
//   if (typeof product === "string") {
//     return parseInt(product);
//   } else {
//     return product;
//   }
// }

// const cenaKursa = getProdcutPrice("10");
// const cenaKursaNum = getProdcutPrice(10);
// console.log(cenaKursaNum);

// ----------- instanceof - instanceof typeguard nam vraca 'je li objekat instanca klase'
// let newDate = new Date(); /*new Date() je constructror koji kreira datum*/
// if (newDate instanceof Date) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }

// ---------------------- Specific Value Check ----------------------
// let someValue = null;
// if (someValue === null) console.log("Success");
// else console.log("Failure");

// ---------------------- Truthy/Falsy Check ----------------------
// let boolValue = true;
// if (!boolValue) console.log("Success");
// else console.log("Failure");

// ---------------------- Built-in Method ----------------------
// let someArr = [1, 2, 3];
// if (Array.isArray(someArr)) console.log("Success");
// else console.log("Failure");

// ---------------------- Property Presence Check ----------------------
// let someObject = { name: "TS" };
// if ("price" in someObject) console.log("Success");
// else console.log("Failure");
