"use strict";
const dzenan = {
    id: 1,
    name: "Dzenan",
    dept: "Software Development",
};
const hiredEmployee = JSON.stringify(dzenan);
console.log(hiredEmployee);
function getEmployeeInfo(employeeObject) {
    return JSON.parse(employeeObject);
}
console.log(getEmployeeInfo(hiredEmployee));
