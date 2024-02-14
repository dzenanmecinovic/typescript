// type Student = { fullName: string };

// function studentDB(student: { fullName: string }): string {
//   return student.fullName;
// }
/* Literal object types is when we pass objects literally into the function */

function studentDB({ fullName }: { fullName: string }): string {
  // DESTRUCTURING
  return fullName;
}

// const student = { fullName: "Dzenan Mecinovic" };

console.log(studentDB({ fullName: "Dzenan Mecinovic" })); // argument objekat je literal object type
console.log(studentDB({ fullName: "Jane Williams" }));
