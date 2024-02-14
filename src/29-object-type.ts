type Produkt = {
  name: string;
  price: number;
  readonly level: string;
  released?: boolean;
};

const product: Produkt = {
  name: "TypeScript",
  price: 10.99,
  level: "Beginner",
  //   released: true, // works
};

// product.level = "Intermediate"; // Cannot assign 'level' because it is a read-only property
product.released = true; // works
console.log(product);

const onlineCourse: Produkt = {
  name: "JS",
  price: 9.99,
  level: "Beginner",
};
