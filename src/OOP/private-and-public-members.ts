// // Access Modifiers, doesn't exist in JS.
// // with AM we can change how class properties are accessed
// // TS gives us 3 different modifiers:
// // - Public, Private and Protected.

// class Robot {
//   //   public readonly id: number;
//   //   public readonly model: string;
//   // public name: string;
//   //   public durability?: string;
//   //   private sentient: boolean;

//   constructor(
//     public readonly id: number,
//     public readonly model: string,
//     public name: string,
//     private sentient: boolean
//   ) {
//     this.id = id;
//     this.model = model;
//     this.name = name;
//     this.sentient = sentient;
//   }
//   walk(): void {
//     console.log(`This robot can walk.`);
//   }

//   abilityToThink(): boolean {
//     return this.sentient;
//   }
// }

// const terminator = new Robot(555, "G28-K", "Terminator", true);
// const destroyer = new Robot(556, "G28-M", "Destroyer", false);

// /* public members means we can access any member
// from outer scope of the class */

// // no difference between PUBLIC and not mentioned

// console.log(terminator);
// console.log(terminator.abilityToThink());

// // Property 'sentient' is private and only accessible within class 'Robot'
// // console.log(terminator.sentient);
