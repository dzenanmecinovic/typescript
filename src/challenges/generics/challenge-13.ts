/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a generic object type for a smartphone with 3 properties that can accept any type of value. Finally, store the object property values in an array
*/

type Smartphone<TName, TPrice, TReleased> = {
  name: TName;
  price: TPrice;
  released: TReleased;
};

const mySmartphone: Smartphone<string, number, number> = {
  name: "Samsung Galaxy S21 Ultra",
  price: 213,
  released: 2020,
};

let nizPropertija: (string | number | boolean)[] = [
  mySmartphone.name,
  mySmartphone.price,
  mySmartphone.released,
];

console.log(nizPropertija);
