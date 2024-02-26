// // inheritance and abstract classes

// abstract class Robot {
//   constructor(
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
//   ) {}

//   get robotData() {
//     return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weights in at ${this.weight}.`;
//   }
// }

// class Terminator extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// class Destroyer extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// let terminator = new Terminator(1024, "Terminator V2", "TM20", "High", 800);
// console.log(terminator);
// let destroyer = new Destroyer(1024, "Destroyer000", "DST", "Medium-High", 700);

// // let robot = new Robot(); // Cannot create an instance of an abstract class
