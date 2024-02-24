interface Zaposleni {
  readonly id: number;
  name: string;
  hobbies: string[];
  employeeHobbies(): string[];
}

function informacijeZaposlenog(
  id: number,
  name: string,
  hobbies: string[]
): Zaposleni {
  return {
    id,
    name,
    hobbies,
    employeeHobbies() {
      return this.hobbies;
    },
  };
  // 'as Zaposleni' uklanja gresku za employeeHobbies (uzima samo potrebne propertije)
}

let radnik1: Zaposleni = informacijeZaposlenog(0, "Dzeno Mecinovic", [
  "GYM, Reading",
]);

console.log(radnik1);
console.log(radnik1.employeeHobbies());
