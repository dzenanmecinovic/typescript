/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an Employee type with name as string, position title as string, age as number and hired as boolean types.
Create an instance of the object type with an employee info. Then create another type narrowed to only the employee names.
*/

// type EmployeeType = {
//   name: string;
//   positionTitle: string;
//   age: number;
//   hired: boolean;
// };

// // instance of the object type with an employee info
// const newHiring: EmployeeType = {
//   name: "Bill",
//   positionTitle: "Junior Developer",
//   age: 21,
//   hired: true,
// };

// type EmployeeName = { name: string };
// const employeeName: EmployeeName = newHiring;
// console.log(employeeName); // novi newHiring ali moguce je pristupiti samo 'name' propertiju
// console.log(employeeName.name); // Bill
