type MagazineInfo = {
  name: string;
  author: string;
  sales: number;
  international: boolean;
  price: number;
  publicationYear: number;
};

let magazine: MagazineInfo = {
  name: "Health unleashed",
  author: "Muslim Halalee",
  sales: 1111,
  international: true,
  price: 10.99,
  publicationYear: 2024,
};

console.log(magazine);

// console.log(magazine.author);
// console.log(magazine.name);

type MagazineName = {
  name: string;
};

let magazineName: MagazineName = magazine;

console.log(magazineName);
// console.log(magazineName.name); // samo propertiju koji je u type-u mozemo pristupiti
// console.log(magazineName.author); // ERROR => Property 'author' does not exist on type MagazineName
