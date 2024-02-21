type Product = {
  name: string;
  info: ProductInfo | undefined;
};

type ProductInfo = {
  level: string;
  noOfStudents: number | undefined;
};

const courses: Product[] /*array of objects*/ = [
  { name: "JS", info: { level: "Beginner", noOfStudents: 1200 } },
  { name: "TS", info: { level: "Beginner", noOfStudents: undefined } },
  { name: "Tailwind CSS", info: undefined },
];

// console.log(courses.map((course) => course.info.noOfStudents));

// const courseInfo = courses.map((course) => {
//   if (course.info) return course.info.noOfStudents;
//   return undefined;
// });

// const courseInfo = courses.map((course) => {
//   return course.info ? course.info.noOfStudents : undefined;
// });

const courseInfo = courses.map((course) => course.info?.noOfStudents);
console.log(courseInfo);
