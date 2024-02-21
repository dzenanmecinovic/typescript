// type Product2 = {
//   name: string;
//   price: number;
// };

// type ReadOnlyProduct = Readonly<Product2>; // this object-shape is T;
// type PartialProduct = Partial<Product2>; // this object-shape is T;

// ↓↓↓↓↓↓↓ if we want to make all properties readonly ↓↓↓↓↓↓↓

// const kurs: PartialProduct = {
//   name: "TS",
//   //   price: 20,
// };

// kurs.name = "JS"; readonly property !!
// kurs.price = 5; // readonly property !!
