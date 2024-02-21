"use strict";
const courses = [
    { name: "JS", info: { level: "Beginner", noOfStudents: 1200 } },
    { name: "TS", info: { level: "Beginner", noOfStudents: undefined } },
    { name: "Tailwind CSS", info: undefined },
];
const courseInfo = courses.map((course) => { var _a; return (_a = course.info) === null || _a === void 0 ? void 0 : _a.noOfStudents; });
console.log(courseInfo);
