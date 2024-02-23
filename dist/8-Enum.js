"use strict";
var RollNumbers;
(function (RollNumbers) {
    RollNumbers[RollNumbers["John"] = 1] = "John";
    RollNumbers[RollNumbers["Kelly"] = 2] = "Kelly";
    RollNumbers[RollNumbers["Sandra"] = 3] = "Sandra";
    RollNumbers[RollNumbers["Joseph"] = 4] = "Joseph";
    RollNumbers[RollNumbers["Samantha"] = 5] = "Samantha";
})(RollNumbers || (RollNumbers = {}));
let studentRollNumberOne = 3;
let studentRollNumberTwo = 5;
var StudentDetails;
(function (StudentDetails) {
    StudentDetails[StudentDetails["ID"] = 1] = "ID";
    StudentDetails["Name"] = "John";
    StudentDetails["Major"] = "Arts";
})(StudentDetails || (StudentDetails = {}));
let studentID = 1;
let studentName = "John";
let studentMajor = "Arts";
console.log(`${studentID}- ${studentName} has a major in ${studentMajor}`);
