interface Product {
  name: string;
  price: number;
  rating: number;
  sales: number;
}

const onlineCourse: Product = {
  name: "TS Bootcamp",
  price: 10.99,
  rating: 4.6,
  sales: 1111,
};

const inPersonWorkshop: Partial<Product> = {
  name: "TS Workshop",
};

console.log(onlineCourse);
console.log(inPersonWorkshop);
