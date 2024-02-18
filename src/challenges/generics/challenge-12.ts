/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a generic object type for an air conditioner with 2 properties that can only accept one specific type
*/

type airConditioner<T> = {
  name: T;
  price: T;
};

const myAC: airConditioner<string> = {
  name: "Air Conditioner G231",
  price: "10.99",
};
