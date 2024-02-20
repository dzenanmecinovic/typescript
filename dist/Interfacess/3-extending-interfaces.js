"use strict";
function informacijeZaposlenog(id, name, department, hobbies) {
    return {
        id,
        name,
        department,
        hobbies,
        employeeHobbies() {
            return this.hobbies;
        },
    };
}
let radnik1 = informacijeZaposlenog(0, "Dzeno Mecinovic", ["IT"], ["GYM, Reading"]);
console.log(radnik1);
console.log(radnik1.employeeHobbies());
