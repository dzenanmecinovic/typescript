// class is blueprint for creating object
class Robot {
  readonly id: number;
  readonly model: string;
  name: string; // the name I may change in the future
  durability?: string;

  constructor(id: number, model: string, name: string) {
    this.id = id;
    this.model = model;
    this.name = name;
  }
  walk(): void {
    console.log(`This robot can walk.`);
  }
}

const terminator = new Robot(555, "G28-K", "Terminator");
const destroyer = new Robot(556, "G28-M", "Destroyer");

terminator.durability = "High";
console.log(terminator);
console.log(destroyer);
