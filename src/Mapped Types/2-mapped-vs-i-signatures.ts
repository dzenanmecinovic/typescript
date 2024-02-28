// 1 - index signature

// type Course = {
//   name: string;
//   price: number;
// };

// type Product<T> = {
//   [k: string]: T;
// };

// function getCourseInfo<T>(course: Product<T>) {
//   return course;
// }

// let courses = getCourseInfo<Course>({
//   JS: { name: "JS", price: 14.99 },
//   TS: { name: "TS", price: 19.99 },
//   Python: { name: "Python", price: 24.99 },
// });

// console.log(courses.JS);
// console.log(courses.TS);

// 2 - mapped type

// type Course = {
//   name: string;
//   price: number;
// };

// type Product = {
//     [course in "TS" | "JS" | "Python"]: Course
// };

// function getCourseInfo(course: Product) {
//   return course;
// }

// let courses = getCourseInfo({
//   JS: { name: "JS", price: 14.99 },
//   TS: { name: "TS", price: 19.99 },
//   Python: { name: "Python", price: 9.99 },
// });

// console.log(courses);

// console.log(courses.TS);
// console.log(courses.JS);
// console.log(courses.Python);

// type Course = {
//   name: string;
//   price: number;
// };

// type ProductClone = { [course in number]: Course };

// let courses: ProductClone = {
//   1: { name: "JS", price: 14.99 },
//   2: { name: "TS", price: 14.99 },
// };

// console.log(courses["1"]);
// console.log(courses["2"]);
