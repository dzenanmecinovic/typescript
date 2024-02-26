// // private members su members kojima se moze pristupiti samo iz main klase
// // protected memberu se moze pristupiti unutar instance druge klase, ali ne moze globally

// abstract class Robot {
//   constructor(
//     private name: string,
//     private model: string,
//     private durability: string,
//     private weight: number
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

//   //   public getModel(model: string) { // metode mogu biti public takodje
//   //     return (this.model = model); // Property 'model' is private and only accessible within class 'Robot'.
//   //   }
// }

// let terminator = new Terminator(1024, "Terminator V2", "TM21", "High", 800);
// // console.log(terminator.getModel("TM21"));
