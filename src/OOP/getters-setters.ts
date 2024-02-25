// // Getters and Setters

// class Robot {
//   public durability?: string;

//   constructor(
//     public readonly id: number,
//     public readonly model: string,
//     public name: string,
//     private _sentient: boolean
//   ) {}
//   walk(): void {
//     console.log(`This robot can walk.`);
//   }

//   get sentient(): boolean {
//     // Getters just get a value
//     return this._sentient;
//   }

//   set sentient(sentient: boolean) {
//     this._sentient = sentient;
//   }
// }

// const terminator = new Robot(555, "G28-K", "Terminator", true);

// console.log(terminator.sentient);
// terminator.sentient = false;
// console.log(terminator.sentient);
