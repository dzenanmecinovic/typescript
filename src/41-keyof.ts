// const course = {
//   name: "TS",
//   price: 10.99,
// };

// type Producttt = typeof course; // type query (it queries the type of a value)
// type ProductKeys = keyof Producttt; // "name" | "price"
// type ProductKeyTypes = Producttt[ProductKeys]; // string | number

// const value1: ProductKeys = "price";
// const value2: ProductKeys = "name";
// const value3: ProductKeyTypes = 10;

// let product: Producttt = {
//   name: "JS",
//   price: 9.99,
// };

// function getCourseName<T, K extends keyof T>(course: T, info: K) {
//   return course[info];
// }

// let imeKursa = getCourseName(product, "name");
// let cenaKursa = getCourseName(product, "price");
// console.log(imeKursa, cenaKursa);
