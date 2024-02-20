interface Department {
  department: string[];
}

/* bilo koji property koji interface Department ima,
isti property ce biti automatski kopiran u interface Zaposleni */

interface Zaposleni extends Department {
  readonly id: number;
  name: string;
  hobbies: string[];
  employeeHobbies(): string[];
}

function informacijeZaposlenog(
  id: number,
  name: string,
  department: string[],
  hobbies: string[]
): Zaposleni {
  return {
    id,
    name,
    department,
    hobbies,
    employeeHobbies() {
      return this.hobbies;
    },
  };
  // 'as Zaposleni' uklanja gresku za employeeHobbies (uzima samo potrebne propertije)
}

let radnik1: Zaposleni = informacijeZaposlenog(
  0,
  "Dzeno Mecinovic",
  ["IT"],
  ["GYM, Reading"]
);

console.log(radnik1);
console.log(radnik1.employeeHobbies());
