"use strict";
class Robot {
    constructor(name, model, durability, weight) {
        this.name = name;
        this.model = model;
        this.durability = durability;
        this.weight = weight;
    }
    get robotData() {
        return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weights in at ${this.weight}.`;
    }
}
class Terminator extends Robot {
    constructor(id, name, model, durability, weight) {
        super(name, model, durability, weight);
        this.id = id;
    }
}
let terminator = new Terminator(1024, "Terminator V2", "TM21", "High", 800);
