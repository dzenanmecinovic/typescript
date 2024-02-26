// // interfaces and implementations
// interface RobotInterface {
//   name: string;
//   model: string;
//   durability: string;
//   weight: number;
//   robotData(): string;
// }

// abstract class Robot implements RobotInterface {
//   constructor(
//     private id: number,
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
//   ) {}

//   robotData() {
//     return `(${this.id})${this.name} robot model number ${this.model} has a durability of ${this.durability} and weights in at ${this.weight}.`;
//   }
// }

// interface TerminatorInterface {
//   durability: string;
//   weight: number;
//   getModel(model: string): string;
// }

// class Terminator extends Robot implements TerminatorInterface {
//   constructor(
//     id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(id, name, model, durability, weight);
//   }

//   getModel(model: string) {
//     return (this.model = model);
//   }
// }

// let terminator = new Terminator(1024, "Terminator V2", "TM21", "High", 800);
// console.log(terminator.model);

// interface DestroyerInterface {
//   durability: string;
//   weight: number;
// }

// class Destroyer extends Robot implements DestroyerInterface {
//   constructor(
//     id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(id, name, model, durability, weight);
//   }
// }

// let destroyer = new Destroyer(2048, "Destroyer", "DTDT", "Medium-High", 650);

// console.log(terminator);
// console.log(destroyer);
