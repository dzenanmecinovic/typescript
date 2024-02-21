// let nekiObjekat = {
//   name: "TS",
//   price: 10.99,
// };

// let kurss = nekiObjekat.name;
// let kurss = nekiObjekat["name"];

// ------------------------------------------
// type Product2 = {
//   name: string;
//   price: number;
// };

// type CourseName = Product2["name"]; // dot-notation doesn't work on types

// const mojeIme: CourseName = "Dzenan";
// console.log(mojeIme);
// ------------------------------------------
// type Product2 = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// function promoteProduct(
//   name: string,
//   price: number,
//   moreInfo: Product2["moreInfo"]
// ): Product2 {
//   return {
//     name,
//     price,
//     moreInfo,
//   };
// }

// let courseInfo = promoteProduct("TS", 10.99, {
//   released: true,
//   beginnerFriendly: true,
//   level: "Beginner-Advanced",
// });

// console.log(courseInfo);
// ------------------------------------------
// interface Product2 {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// }

// let imeKursaa: Product2["name"] = "TS";
// let cenaKursa: Product2["price"] = 10.99;
// let levelKursa: Product2["moreInfo"]["level"] = "Beginner-Advanced";

// // let courseInfo: Product2["name" | "price"] = 10.99;
// let courseInfo: Product2["name" | "price"] = "TS";
// console.log(courseInfo);
