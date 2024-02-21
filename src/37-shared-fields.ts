// type Product = {
//   /**/ name: string; // similar
//   /**/ price: number; // similar
//   /**/ sales: number; // similar
//   availability: string;
//   category: string;
// };

// type Course = {
//   /**/ name: string; // similar
//   /**/ price: number; // similar
//   /**/ sales: number; // similar
//   released: boolean;
//   rating: number;
// };

// type OnlineCourse = Product | Course;

// const unionObject: Partial<OnlineCourse> = {
//   name: "TS",
//   price: 20,
//   sales: 2000,
//   released: true,
//   rating: 10,

//   availability: "available",
//   category: "Web Development",
// };
// ------------------------------------------------------------------
// Shared field (1 syntax)

// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// };

// type Product = DigitalProduct & {
//   availability: string;
//   category: string;
// };

// type Course = DigitalProduct & {
//   released: boolean;
//   rating: number;
// };

// type OnlineCourse = Product | Course;

// const unionObject: OnlineCourse = {
//   name: "TS",
//   price: 20,
//   sales: 2000,
//   released: true,
//   rating: 10,

//   availability: "available",
//   category: "Web Development",
// };

// console.log(unionObject);
// ------------------------------------------------------------------
// Shared field (2 syntax)

// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// } & (
//   | { availability: string; category: string }
//   | { released: boolean; rating: number }
//   | { features: string[] }
// );

// const unionObject: DigitalProduct = {
//   name: "TS",
//   price: 20,
//   sales: 2000,
//   released: true,
//   rating: 10,
//   availability: "available",
//   category: "Web Development",
// };

// console.log(unionObject);
