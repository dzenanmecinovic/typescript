// Enums (built-in type)
/* Enums allows us to declare a set of name constants 
(collections of related values that could be numeric or string values) */

// Numeric Enums

// PascalCase (veliko pocetno slovo i pocetno slovo svake sledece reci)
// camelCase (malo pocetno slovo a veliko pocetno svake sledece reci)

// enum RollNumbers {
//   John,
//   Kelly,
//   Sandra,
//   Joseph,
//   Samantha,
// }

const enum RollNumbers {
  John = 1,
  Kelly,
  Sandra,
  Joseph,
  Samantha,
}

let studentRollNumberOne: RollNumbers = RollNumbers.Sandra;
let studentRollNumberTwo: RollNumbers = RollNumbers.Samantha;

// console.log(studentRollNumberOne);
// console.log(studentRollNumberTwo);

// String Enum
// const enum StudentDetails {
//   Name = "John",
//   Major = "Arts",
// }

// let studentName: StudentDetails = StudentDetails.Name;
// let studentMajor: StudentDetails = StudentDetails.Major;
// console.log(studentName, studentMajor);

// Heterogeneous Enums

const enum StudentDetails {
  ID = 1,
  Name = "John",
  Major = "Arts",
}

let studentID: StudentDetails = StudentDetails.ID;
let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;
console.log(`${studentID}- ${studentName} has a major in ${studentMajor}`);
