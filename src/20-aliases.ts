// type 'aliases' allows us to create custom types in typescript

// let courseDiscounts = 25;
// courseDiscounts = 5;

// 'type' is used to create new type

// type CourseDiscounts = number;

// let courseDiscounts: CourseDiscounts = 25; / type is number(from CourseDiscounts = number)
// courseDiscounts = 5;

// --------------------------------------------------------

// type CourseDiscounts = 25 | 35 | 45 | 75;
// let courseDiscounts: CourseDiscounts = 35;

//                        literal type
// let courseDiscounts: 25 | 35 | 45 | 75 = 5;

// --------------------------------------------------------
type TSCourse =
  "TS"; /* "TS" is type. Type aliases cannot contain values, string is a type that represents a value.
even if "TS" looks like a string value, it's a TYPE
*/

// let tsCourseName: TSCourse = "TS"; // <-- literal type

// --------------------------------------------------------
type MyCourses = {
  name: string;
  price: number;
};
const tsCourse: MyCourses = {
  name: "TS Bootcamp",
  price: 10.99,
};

// tsCourse.released = true; // property 'released' does not exist on type 'MyCourses'

// what if I wanted to crate another object with the same shape as 'tsCourse' ? That's where I can use type alias.

const jsCourse: MyCourses = {
  name: "JS Bootcamp",
  price: 29.99,
  //   availability: true, // <--- Error, availability property does not exist in MyCourses type.
};

console.log(jsCourse);
