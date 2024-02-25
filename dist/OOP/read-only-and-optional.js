"use strict";
class Robot {
    constructor(id, model, name) {
        this.id = id;
        this.model = model;
        this.name = name;
    }
    walk() {
        console.log(`This robot can walk.`);
    }
}
const terminator = new Robot(555, "G28-K", "Terminator");
const destroyer = new Robot(556, "G28-M", "Destroyer");
terminator.durability = "High";
console.log(terminator);
console.log(destroyer);
