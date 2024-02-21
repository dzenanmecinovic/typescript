/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create an object type called ProductName and an interface called ProductPrice
that extends the object type ProductName. Finally create an object from the interface
*/

type ProductName = {
  name: string;
};

interface ProductPrice extends ProductName {
  price: number;
}

const proizvod: ProductPrice = {
  name: "Monitor",
  price: 190,
};
