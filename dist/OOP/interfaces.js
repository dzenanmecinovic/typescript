"use strict";
class Robot {
    constructor(id, name, model, durability, weight) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.durability = durability;
        this.weight = weight;
    }
    robotData() {
        return `(${this.id})${this.name} robot model number ${this.model} has a durability of ${this.durability} and weights in at ${this.weight}.`;
    }
}
class Terminator extends Robot {
    constructor(id, name, model, durability, weight) {
        super(id, name, model, durability, weight);
    }
    getModel(model) {
        return (this.model = model);
    }
}
let terminator = new Terminator(1024, "Terminator V2", "TM21", "High", 800);
class Destroyer extends Robot {
    constructor(id, name, model, durability, weight) {
        super(id, name, model, durability, weight);
    }
}
let destroyer = new Destroyer(2048, "Destroyer", "DTDT", "Medium-High", 650);
console.log(terminator);
console.log(destroyer);
