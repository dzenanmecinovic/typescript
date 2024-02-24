"use strict";
function informacijeZaposlenog(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        employeeHobbies() {
            return this.hobbies;
        },
    };
}
let radnik1 = informacijeZaposlenog(0, "Dzeno Mecinovic", [
    "GYM, Reading",
]);
console.log(radnik1);
console.log(radnik1.employeeHobbies());
