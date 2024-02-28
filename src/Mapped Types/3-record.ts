// type Course = {
//   name: string;
//   price: number;
// };

// Original Mapped Type
// type Product = {
//   [course in "TS" | "JS" | "Python"]: Course;
// };

// First Iteration
// type RecordTYPE<KeyType, ValueType> = { [key in KeyType]: ValueType };
// Second Iteration
// type RecordTYPE<K extends string, ValueType> = {
//   [key in K]: ValueType;
// };

// type Record<K extends keyof any, T> = {
//      [P in K]: T // types of keys in a Record Map Type could be only of type 'string | number | symbol'.
//  }
// let recordKeyType: keyof any;

// function getCourseInfo<KeyType extends string, Course>(
//   course: RecordTYPE<KeyType, Course>
// ) {
//   return course;
// }

// let courses = getCourseInfo({
//   JS1: { name: "JavaScript 1", price: 14.99 },
//   JS2: { name: "JavaScript 2", price: 19.99 },
//   Python: { name: "Python", price: 11.99 },
// });
